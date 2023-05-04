import React, { useState } from "react";
import Link from "../Link/Link";

import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = ()=>{

    const [open,setOpen] = useState(false)

    const routes = [
        {id:1,name:"Home",path:'/home'},
        {id:2,name:"Producs",path:'/producs'},
        {id:3,name:"Order",path:'/order'},
        {id:4,name:"Contact",path:'/contact'} ,
        {id:5,name:"About",path:'/about'} 
    ]

    return(
        <nav className="bg-purple-200 w-full">

           <div >
           {
                open ? 
                <XMarkIcon onClick={()=> setOpen(!open)} className="h-6 w-6 md:hidden" />

                :
                
                <Bars3Icon onClick={()=> setOpen(!open)} className="h-6 w-6 md:hidden" />

            }
                
           </div>


            <ul className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-4' : 'top-[-120]'}`}>
                {
                    routes.map( routes=> <Link key={routes.id} route={routes}></Link>)
                }
            </ul>
        </nav>
    )
}

export default NavBar;