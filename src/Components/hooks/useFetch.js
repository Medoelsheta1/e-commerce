import axios from 'axios'
import { useEffect, useState } from 'react'


const  useFetch =  (url) => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                
                const res = await axios.get(`http://localhost:1337/api/${url}` , {
                    headers: {
                        Authorization: 'bearer 625e2bc68a0fdbc2d74cceb33b5c9ac29e7ab89abb1263ace0dd5aef6e935ed0d1b08a45e2969719b2327e4ced7bb14ba159e271ee65f28737893a102bee04a61fe0a08fced0f4e664c0c3e77911b70931b9c8f04377d3efdbe42b33369f278f9d7fd2ceeb6217efeab503512393d895768fef032b3352f0d33c1a6cd40dab58'
                    }
                })
                setData(res.data.data)
                setIsLoading(false) 
            }catch(err) {
                setError(true)
            }
        }

        fetchData()
        
    }, [url])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch