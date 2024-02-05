import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notify = (text, type) => {
    if(type === "error"){
        toast.error(text, {position: "top-left"})
    } else if(type === "success"){
        toast.success(text, {position: "top-left"})
    }
    else {
        toast.warn(text, {position: "top-left"})
    }
    
};

export default notify