import { useEffect,useState } from "react";
import { createSubCategory } from "../../redux/actions/subCategoryAction";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getAllCaetgory } from "../../redux/actions/categoryAction";
const AddSubcategoryHook = () => {


    // handle status
    const [id, setId] = useState('0');
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
        if (!navigator.onLine) {
            notify("Check Internet Connection", "warn")
            return;
        }
        dispatch(getAllCaetgory());
    }, [])
    // use useSelector to get the category
    const category = useSelector(state => state.allCategory.category);
    const subCategory = useSelector(state => state.subCategory.subCategory);




    // function to handle change on the select menu
    const handleSelect = (e) => {
        setId(e.target.value)
    }

    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }

    // function to handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (id === "0" || name === "") {
            notify("Please fill the form", "warn")
        }

        setLoading(true)
        // await dispatch to dispatch the create sub category action
        await dispatch(createSubCategory({ name: name, category: id }))
        // to stop loading
        setLoading(false)
    }

    useEffect(() => {
        if (!loading) {
            setName('')
            setId('0')
            if (subCategory) {
                console.log(subCategory)
            }
            if (subCategory.status === 201) {
                notify("Sub Category Added", "success")
            } else if (subCategory === "ErorrAxiosError: Request failed with status code 400") {
                notify("Please Choose Another Name", "warn")

            }
            else {
                notify("There Is An Error", "error")
            }
            setId('0')
            setLoading(true)

        }
    }, [loading])


    return [category, onChangeName, name, handleSelect, handleSubmit]
}

export default AddSubcategoryHook
