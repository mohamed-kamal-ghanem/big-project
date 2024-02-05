import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCaetgory } from "../../redux/actions/categoryAction";
import { useState } from "react";
import ViewSearchProductHook from "../products/view-search-product-hook";

const SidebarSearchHook = () => {

  const [items, pagination, onPress, getProduct] = ViewSearchProductHook();
  const dispatch = useDispatch();

  // Get All Category with limit
  useEffect(() => {
    dispatch(getAllCaetgory(6));
  }, [])
  // Select Category
  const category = useSelector(state => state.allCategory.category);
  // Select brand
  const brand = useSelector(state => state.allBrand.brand);

  const [checkedCat, setCheckedCat] = useState([]);
  var queryCat = ""
  // When user select or dis select new category
  const selectCategory = (e) => {

    let value = e.target.id;
    if (value === "default-checkbox" || sessionStorage.getItem("allCheck") === true) {
      sessionStorage.setItem("allCheck", e.target.checked);
      setCheckedCat([])
    } else {
      if (e.target.checked === true) {
          setCheckedCat([...new Set([...checkedCat, value])]);

      } else if (e.target.checked === false) {
        const newArray = checkedCat.filter((cat) => cat !== value);
        setCheckedCat(newArray)
      }
    }

  }

  useEffect(() => {
    queryCat = checkedCat.map(val => "category[in][]=" + val).join("&")
    sessionStorage.setItem("checkedCat", queryCat)
    setTimeout(() => {
      getProduct();
    }, 100);
  }, [checkedCat])

  // -------------------------------------
  const [checkedBrand, setcheckedBrand] = useState([]);
  // When user select or dis select new category
  var queryBrand=""
  const selectBrand = (e) => {
    let value = e.target.id;
    if (value === "default-checkbox") {
      setcheckedBrand([])
    } else {
      if (e.target.checked === true) {
        setcheckedBrand([...new Set([...checkedBrand, value])]);
      } else if (e.target.checked === false) {
        const newArray = checkedBrand.filter((bra) => bra !== value);
        setcheckedBrand(newArray)
      }
    }
  }

  useEffect(() => {
    queryBrand = checkedBrand.map(val => "brand[in][]=" + val).join("&")
    sessionStorage.setItem("checkedBrand", queryBrand)
    setTimeout(() => {
      getProduct();
    }, 100);

  }, [checkedBrand])

  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();

  const priceFrom = (e) => {
    sessionStorage.setItem("priceFrom", e.target.value)
    
    setFromPrice(e.target.value);
  }

  const priceTo = (e) => {
    sessionStorage.setItem("priceTo", e.target.value)
    
    setToPrice(e.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 100);
  },[fromPrice , toPrice])


  




  return [category, brand, selectCategory, selectBrand, priceFrom, priceTo];
}

export default SidebarSearchHook
