import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data=useLoaderData()
// const [data , setdata]=useState(0)
//     useEffect(()=>{
//      fetch('https://api.github.com/users/hiteshchoudhary').then(res=>res.json()).then(data=>setdata(data))
//     },[])
  return (
    <div className="text-center m-4 bg-gray-800 text-white text-3xl">
        Gitub Followers : {data.followers}
        <div className='flex justify-center items-center'>
        <img className='' src={data.avatar_url} alt="Git picture" width={300}/>

        </div>
      
    </div>
  )
}

export default Github
export const githubinfoLoader =async()=>{
   const response=await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}
