//  import axios from 'axios'

// export default function Api () {
//     const api =   "https://www.geckoterminal.com/solana/pools/FwBL74vuQVuyPxJF1Q7b5o1hb1NsE4TMz6DGxHZCJhUU?embed=1&info=1&swaps=1&grayscale=0&light_chart=0"
     
//     return

// }
'use client'

// import axios from "axios"
// import { useEffect, useState } from "react"

// export function Api () {
// const [data , setData] = useState
// useEffect(()=>{
//     const fetchData =async () => {
//         try {
//             const res =await axios.get("https://www.geckoterminal.com/solana/pools/FwBL74vuQVuyPxJF1Q7b5o1hb1NsE4TMz6DGxHZCJhUU?embed=1&info=1&swaps=1&grayscale=0&light_chart=0")
//             setData(res.data)
//         } catch (error) {
//             console.error(error)
//         }
//     }
// })
// }

import axios from 'axios';
// console.log(Api)
const Api = axios.create({
    baseURL:"https://www.geckoterminal.com/solana/pools/FwBL74vuQVuyPxJF1Q7b5o1hb1NsE4TMz6DGxHZCJhUU?embed=1&info=1&swaps=1&grayscale=0&light_chart=0",
    timeout: 1000,
    // headers: {'Authorization': 'Bearer your_token'}

});

export default Api;
