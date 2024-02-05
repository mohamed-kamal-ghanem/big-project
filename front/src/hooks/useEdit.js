import baseUrl from "../Api/baseURL";
// function to get data 
const useEdittDataImage = async (url, params) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
            , Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url, params, config);
    return res;
}

const useEditData = async (url, params) => {
    const config = {
        headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url, params, config);
    return res
}
export { useEdittDataImage, useEditData };