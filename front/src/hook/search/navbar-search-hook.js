import { useEffect, useState } from "react"
import ViewSearchProductHook from "../products/view-search-product-hook"

const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProduct, results] = ViewSearchProductHook();
    const [searchedWord, setSearchedWord] = useState('')
    
    const onChangeWord = (e) => {
        
        const path = window.location.pathname;
        if (path !== "/products"){
            window.location.href = "/products"
        }
        sessionStorage.setItem("searchedWord", e.target.value);
        setSearchedWord(e.target.value)
    }

    if (window.location.pathname !== "/products") {
        sessionStorage.setItem("searchedWord", "");
    }

    useEffect(() => {
        setTimeout(() => {

            getProduct();

        },1000)
    },[searchedWord])

    return [onChangeWord,searchedWord]
}

export default NavbarSearchHook
