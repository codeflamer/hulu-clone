import { useRouter } from "next/dist/client/router"
import requests from "../utils/requests"

const Nav = () => {
    const router = useRouter();
    return (
        <nav className='relative'>
            <div className='flex flex-row px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(requests).map(([key,{title,url}])=>(
                    <h2 key={key} onClick={()=> router.push(`/?genre=${key}`)} className='cursor-pointer transition duration-100 transform hover:text-white active:text-red-500 hover:scale-125'>{title}</h2>
                ))}
            </div>
            <div className='absolute w-1/12 h-12 top-0 right-0 bg-gradient-to-l from-[#06202A]'/>
        </nav>
    )
}

export default Nav
