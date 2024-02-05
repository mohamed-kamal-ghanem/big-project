import { useEffect,useState } from "react";
import notify from "../useNotification";
import avatar from "../../assets/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { createBrand } from "../../redux/actions/brandAction";
const AddBrandHook = () => {

    const dispatch = useDispatch();
  // The state which contains the image
  const [img, setImg] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const [name, setName] = useState('');

  // Function to make a tosify toast
  
    
  
  const res = useSelector(state => state.allBrand.brand)
  
  // When image changed
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  }
  // function to handle submit events
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || selectedFile === null) {
        notify("Please fill the form", "warning");
        return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true)
    setIsPress(true)
    await dispatch(createBrand(formData));
    setLoading(false)
    
  }

  
  useEffect(() => {
    if (!loading) {
      setImg(avatar)
      setSelectedFile(null)
      setTimeout(() => {
        setIsPress(false)
      }, 1000)
      if (res.status === 201) {
        notify(`the ${name} added successfully` , "success")
      }
      else {
        notify("There is Error",'error')
      }
      setName('')
    }
  }, [loading])
    
    
    return [img, name,res, setName, onImageChange, handleSubmit, loading, isPress]
  
}

export default AddBrandHook
