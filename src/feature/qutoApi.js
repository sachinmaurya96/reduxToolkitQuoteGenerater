import axios from "axios"

const url = "https://dummyjson.com/quotes"
export const getQuto=(skip)=>{
    return new Promise(async(resolve) => {
        const data = await axios.get(`${url}?skip=${skip}&limit=1`,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
        resolve({data})
    })
}