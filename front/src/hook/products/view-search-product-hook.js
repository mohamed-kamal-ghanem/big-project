import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllProductsSearch } from "../../redux/actions/productAction";

const ViewSearchProductHook = () => {
  let limit = 8;
  const dispatch = useDispatch();
  let word = "", queryCat = "", queryBra = "", sortWord = "", sortType, priceFrom = "", priceTo = "", priceFromStr = "", priceToStr = ""
  
  const getProduct = async () => {
    getStorge();
    sortData();
    await dispatch(getAllProductsSearch(`sort=${sortType}&limit=${limit}&keyword=${word}&${queryCat}&${queryBra}${priceFromStr}${priceToStr}`))

  }
  useEffect(() => {
    getProduct();
  }, [])

  const allProducts = useSelector((state) => state.allProduct.allProducts)

  

  let pagination = [];
  let items = [];
  try {
    if (allProducts.data)
      items = allProducts.data;
    else
      items = []
  } catch (e) { }

  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else
      pagination = []
  } catch (e) { }



  const onPress = async (page) => {
    getStorge();
    sortData();
    await dispatch(getAllProductsSearch(`sort=${sortType}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBra}${priceFromStr}${priceToStr}`))
  }

  const getStorge = () => {
    if (sessionStorage.getItem("sortedWord") !== null) {
      sortWord = sessionStorage.getItem("sortedWord");
    }

    if (sessionStorage.getItem("searchedWord") !== null) {
      word = sessionStorage.getItem("searchedWord");
    }


    if (sessionStorage.getItem("checkedCat") !== null) {
      queryCat = sessionStorage.getItem("checkedCat");
    }
    if (sessionStorage.getItem("checkedBrand") !== null) {
      queryBra = sessionStorage.getItem("checkedBrand");
    }
    if (sessionStorage.getItem("priceFrom") !== null) {
      priceFrom = sessionStorage.getItem("priceFrom");
    }
    if (sessionStorage.getItem("priceTo") !== null) {
      priceTo = sessionStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromStr = "";
    } else {
      priceFromStr = `&price[gt]=${priceFrom}`
      sortType = "+price";
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToStr = "";
    } else {
      priceToStr=`&price[lt]=${priceTo}`
    }
  }
  const sortData = () => {
    

    if (sortWord === "Price from high to low") {
      sortType = "-price";
    } else if (sortWord === "Price from low to high") {
      sortType = "+price";
    }
    else if (sortWord === "No Sort") {
      sortType = "";
    }
    else if (sortWord === "Best Seller") {
      sortType = "-sold";
    }
  }

  let results = items.length

  return [items, pagination, onPress, getProduct, results]
}

export default ViewSearchProductHook
