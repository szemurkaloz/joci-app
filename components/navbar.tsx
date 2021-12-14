import { FunctionComponent, useEffect, useState } from "react"
import  Link  from "next/link";
import { useRouter } from "next/dist/client/router";

const NavItem: FunctionComponent<
    {
        activeItem: string,
        setActiveItem: Function,
        name: string,
        route: string,    
    }> = ({activeItem, setActiveItem, name, route}) => {
    return (
            activeItem  !== route ? (
                <Link href={route}>
                    <a >
                        <span onClick={() => setActiveItem(name) } className='hover:text-green'>{name}</span>
                    </a>
                </Link> ): null
    );
}

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');
    const {asPath} = useRouter();

    useEffect(() => {
        if(asPath === "/") setActiveItem("About");
        if(asPath === "/projects") setActiveItem("Projects");
        if(asPath === "/resume") setActiveItem("Resume");
    }, [])
    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl'>{activeItem}</span>
            <div className='flex space-x-5 text-lg '>
                <NavItem 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <NavItem 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <NavItem 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
                
            </div>
        </div>
    )
}

export default Navbar
