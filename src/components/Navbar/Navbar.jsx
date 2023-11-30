import './Navbar.css'

const Navbar = ({logo, navList}) => {

    const lista = navList.map((link, i) =>  
        <li key={`navList${i}`}>
            <a href={link.url}>{link.name}</a>
        </li>  
    );

    return (

        <menu id='navbar'>

            <ul id='logoContainer'>
                <li id='logo'><a href={logo.url}>{logo.name}<span>.</span></a></li>
            </ul>

            <ul id='menuContainer'>
               {lista}
            </ul>

        </menu>

    )

}

export default Navbar