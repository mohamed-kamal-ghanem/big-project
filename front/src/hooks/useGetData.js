import baseUrl from "../Api/baseURL";
// function to get data 
const useGetData = async (url,params) => {
    const res = await baseUrl.get(url, params);
    return res.data
}
const useGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.get(url, config);
    return res.data;
}


export  {useGetData , useGetDataToken};