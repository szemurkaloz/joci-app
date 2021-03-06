import profilePic from '../public/onarckep.jpg'
import { AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from "next-themes";
import Image from "next/image";


const Sidebar = () => {
const {theme, setTheme} = useTheme();

const changeTheme = () => {
    setTheme(theme === "light" ? "dark":"light")
}
    return (
        <div>
            <Image
                src='/images/onarckep.jpg'
                alt='ömarckép'
                className='mx-auto border rounded-full'
                height='128px'
                width='128px'
                layout='intrinsic'
                quality="100"
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-green'>Sumit</span>
                day
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300 '>Web delveloper</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300'
                href="/assets/Sumit Dey Resume.pdf"
                download="Sumit Dey Resume.pdf"> 
            <GiTie className='w-6 h-6' /> Download resume
            </a>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href=''>
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                </a>
                <a href=''>
                    <AiOutlineGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-300'
                style={{marginLeft: '-1rem', marginRight: '-1rem'}}
            >
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>CsongorádCsanád Vásárhely</span>
                </div>
                <p className='my-2'>szemurkaloz@gmail.com</p>
                <p className='my-2'>+36 30 457 1948</p>
            </div>
            <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' 
                onClick={()=> window.open('mailto:szemurkaloz@gmail.com')}
            >Emeailez</button>
            <button 
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'
            >Háttér váltás</button>
        </div>
    )
}

export default Sidebar
