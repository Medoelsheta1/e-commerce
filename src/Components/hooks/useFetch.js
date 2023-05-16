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
                
                const res = await axios.get(`https://strapi-nbja.onrender.com/api/${url}` , {
                    headers: {
                        Authorization: 'bearer 05916cea29823807b31f7ec46ad63faf9467d622db6c76f60fe4db21f1a562fbb7db9b86a6898eef1f510374a4afd23ef11765484df4417ae2ba4ae3ada08cdf7799cb2ecfe519d2f5f36decfbcdab0f0acf98e0f2e6a11f6ff2376aea2a68218074f7142fcbb00746769374b0cc116dcdca992918d4cb2ebb94ac0a925d117e'
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