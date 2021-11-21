import axios from "axios";
const dataUrl = 'http://localhost:3001/persons'
const getData = () => {
const request = axios.get(dataUrl)
return request.then(response => response.data)
}
const updateInfo = (newPersonInfo) => {
    const request = axios.post(dataUrl,newPersonInfo)
    return request.then(response => response.data)
}
const deleteInfo = (id) => {
    const request = axios.delete(`${dataUrl}/${id}`)
    return request.then(response => response.data)
}
const updateNumber = (id, newNum) => {
    const request = axios.put(`${dataUrl}/${id}`,newNum)
    return request.then(response => response.data)
}
export default {getData, updateInfo, deleteInfo, updateNumber}