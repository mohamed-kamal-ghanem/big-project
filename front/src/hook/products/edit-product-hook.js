import { useEffect } from "react";
import notify from "../useNotification";
import { editProduct, getAllProduct } from "../../redux/actions/productAction";
import { getSpetificSubCategory } from "../../redux/actions/subCategoryAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getAllCaetgory } from "../../redux/actions/categoryAction";

const EditProductHook = (id) => {
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category,Brands,Products
    useEffect(() => {

        const run = async () => {
            await dispatch(getAllCaetgory());
            await dispatch(getAllProduct());
            await dispatch(getAllBrand());
        }

        run();

    }, [])


    // state to handle show color

    // Select brand
    const brandItem = useSelector(state => state.allBrand.brand);
    // Select Category
    const category = useSelector(state => state.allCategory.category);
    // Select Sub category
    const subCategory = useSelector(state => state.subCategory.subCategory);
    // Select  products
    const products = useSelector(state => state.allProduct.allProducts);
    // Get one product item details
    let oneProduct;

    if (products.data) {
        [oneProduct] = products.data.filter((product) => product._id === id);
    }
    else {
        oneProduct = {};
    }



    // Function to handle select the list on the multiselect Dropdown 
    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }

    // Function to handle the Remove the list on the multiselect Dropdown 

    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }



    // get the variables from the add product hook function
    const [showColor, setShowColor] = useState(false);
    const [images, setImages] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [priceBefore, setPriceBefore] = useState(undefined);
    const [priceAfter, setPriceAfter] = useState(undefined);
    const [quantity, setQuantity] = useState(undefined);
    const [catId, setCatId] = useState("");
    const [brandId, setBrandId] = useState("");
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    // To manage the color list
    const [colors, setColors] = useState([]);

    // console.log(SubCategory);
    // useEffect to manage set states depend on the oneProduct
    useEffect(() => {
        if (oneProduct) {
            setName(oneProduct.title)
            setDescription(oneProduct.description)
            setPriceBefore(oneProduct.price)
            setQuantity(oneProduct.quantity)
            setCatId(oneProduct.category)
            setBrandId(oneProduct.brand)
            setColors(oneProduct.availableColors)
            setImages(oneProduct.images)
            // console.log(images);

        }

    }, [oneProduct])

    // Function to handle the color change
    const onComplete = (newColor) => {
        if (!colors.includes(newColor.hex)) {
            setColors([...colors, newColor.hex]);
        }
        setShowColor(!showColor);
    }
    // Method if i click on an color remove it
    const onRemoveColor = (index) => {
        colors.splice(index, 1);
        setColors([...colors]);
    }




    //when selet category store id
    const handleSelectCategory = async (e) => {
        setCatId(e.target.value)
    }
    useEffect(() => {
        if (catId != 0) {
            const run = async () => {
                await dispatch(getSpetificSubCategory(catId))
            }
            run();
        }
    }, [catId])

    useEffect(() => {
        if (subCategory) {
            setOptions(subCategory.data)
        }
    }, [subCategory])


    const handleSelectBrand = (e) => {
        setBrandId(e.target.value)
    }
    // function to convert data url to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };


    // The handle submit function to submit the product form
    const handleSubmitEdit = async (e) => {

        e.preventDefault();
        if (catId === 0 || name === "" || description === "" || quantity === "" || priceBefore === "" || images.length === 0) {
            notify("Please fill all the fields", "warn")
            return;
        }

       let imgCover;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(val => imgCover = val)
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        }


        // Convert the cover image to file from base 64

        let itemImages = []
        //convert array of base 64 image to file 
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => itemImages.push(val))
                }
                else {
                    itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }
            })

        // initailize the formData to submit it
        const formData = new FormData();
        formData.append("title", name)
        formData.append("description", description)
        formData.append("quantity", quantity)
        formData.append("price", priceBefore)
        formData.append("category", catId)
        formData.append("brand", brandId)
        seletedSubID.map((subCat) => formData.append("subcategories", subCat._id))
        for (let i = 0; i < colors.length; i++) {
            formData.append("availableColors", colors[i])
        }

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map((item) => formData.append("images", item))
        }, 1000);


        setTimeout(async () => {
            setLoading(true)
            await dispatch(editProduct(oneProduct._id, formData));

            setLoading(false)
        }, 1000);





    }
    //get create meesage
    const product = useSelector(state => state.allProduct.editProduct)

    // console.log(product)
    // use effect to back everu thing empty
    useEffect(() => {
        if (!loading) {
            setCatId("")
            setBrandId("")
            setSeletedSubID([])
            setColors([])
            setOptions([])
            setDescription("")
            setPriceBefore(0)
            setPriceAfter(0)
            setQuantity(0)
            setImages([])

            if (product) {
                if (product.status === 200) {
                    notify("Updated Successfully", "success")
                } else {
                    notify("Erorr", "error")
                }
            }
            setName("")


            setTimeout(() => {
                setLoading(true)
            }, 1500)
        }

    }, [loading])


    return [brandId, catId, setName, setDescription, setQuantity, setPriceBefore, setShowColor, setPriceAfter, setImages, name, category, description
        , quantity, priceAfter, priceBefore, images, colors, showColor, options, handleSelectBrand, handleSubmitEdit, onComplete
        , handleSelectCategory, onSelect, onRemove, brandItem, onRemoveColor]

}

export default EditProductHook
