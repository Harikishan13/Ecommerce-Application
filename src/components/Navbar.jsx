    import React from 'react'
    import { NavLink } from 'react-router-dom'

    const Navbar = ({setMenuOpened}) => {
        const navigatingLinks=[
            {path:'/' ,title:"Home"},
            {path:'/collection',title:"Collection"},
            {path:'/UserExperiences',title:"UserExperiences"},
            {path:'/Contact',title:"Contact"}
        ]
    return (
        <nav>
            {navigatingLinks.map((link,index)=>(
                <NavLink onClick={() => setMenuOpened(false)}
                    key={index}
                    to={link.path}
                    className={({isActive}) => 
                        `px-2 py-2 rounded-full uppercase text-sm font-bold 
                        ${isActive ?
                        'text-black/70 rounded-full underline underline-offset-8 [text-decoration-thickness:4px]':"text-black hover:text-black-500"} `
                    }>
                        {link.title}
                </NavLink>
                )
            )}
        </nav>
    )
}
export default Navbar
