import { useEffect } from "react";
import notify from "../useNotification";
import { createProduct } from "../../redux/actions/productAction";
import { getSpetificSubCategory } from "../../redux/actions/subCategoryAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getAllCaetgory } from "../../redux/actions/categoryAction";

const AddProductHook = () => {
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
        dispatch(getAllCaetgory());
        dispatch(getAllBrand());

    }, [])


    // state to handle show color

    // Select brand
    const brandItem = useSelector(state => state.allBrand.brand);
    // Select Category
    const category = useSelector(state => state.allCategory.category);
    // Select Sub category
    const subCategory = useSelector(state => state.subCategory.subCategory);
    // Select Sub products
    const products = useSelector(state => state.allProduct.products);


    // get the variables from the add product hook function
    const [showColor, setShowColor] = useState(false);
    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
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

    // Function to handle select the list on the multiselect Dropdown 
    const onSelect = (selectedList) => {
        const arrayWithDuplicates = selectedList;
        const uniqueArray = arrayWithDuplicates.filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        });

        setSeletedSubID(uniqueArray)
    }

    // Function to handle the Remove the list on the multiselect Dropdown 

    const onRemove = (selectedList) => {
        const arrayWithDuplicates = selectedList;
        const uniqueArray = arrayWithDuplicates.filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        });

        setSeletedSubID(uniqueArray)
    }


    const handleSelectCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getSpetificSubCategory(e.target.value))
        }
        setCatId(e.target.value)
    }


    useEffect(() => {
        if (seletedSubID !== 0 && subCategory.data) {
            setOptions(subCategory.data)
        }
    }, [seletedSubID, subCategory.data])

    const handleSelectBrand = (e) => {
        setBrandId(e.target.value)
    }
    //to convert base 64 to file
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


    // The handle submit function to submit the product form
    const handleSubmitProducts = async (e) => {
        e.preventDefault();
        if (catId === 0 || name === "" || description === "" || quantity === "" || priceBefore === "" || images.length === 0) {
            notify("Please fill all the fields", "warn")
            return;
        }
        // Convert the cover image to file from base 64
        const imageCover = dataURLtoFile(images[0], Math.random() + ".png");
        // convert the images list to file
        const imagesList = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )


        // initailize the formData to submit it
        const formData = new FormData();
        formData.append("title", name)
        formData.append("description", description)
        formData.append("quantity", quantity)
        formData.append("price", priceBefore)
        formData.append("imageCover", imageCover)
        // formData.append("images" , images)
        seletedSubID.map((subCat) => formData.append("subcategories", subCat._id))
        for (let i = 0; i < colors.length; i++) {
            formData.append("availableColors", colors[i])
        }
        imagesList.map((img) => formData.append("images", img))
        formData.append("category", catId)
        formData.append("brand", brandId)

        setLoading(true)

        await dispatch(createProduct(formData));

        setLoading(false)



    }
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

            if (products) {
                if (products.status === 201) {
                    notify(`the ${name} added successfully`, "success")
                }
                else {
                    notify("There is Error", 'error')
                }
            }
            setName("")


            setTimeout(() => {
                setLoading(true)
            }, 1500)
        }

    }, [loading])
    return [setName, setDescription, setQuantity, setPriceBefore, setShowColor, setPriceAfter, setImages, name, category, description
        , quantity, priceAfter, priceBefore, images, colors, showColor, options, handleSelectBrand, handleSubmitProducts, onComplete
        , handleSelectCategory, onSelect, onRemove, brandItem, onRemoveColor]

}

export default AddProductHook
