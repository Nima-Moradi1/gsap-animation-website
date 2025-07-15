import {navLinks} from '../constants/index'

const Navbar = () => {
  return (
   <nav>
    <div>
        <a href="#home"
        className="flex items-center gap-2">
            <p>
                موهیتو لند
            </p>
        </a>
        <ul>
            {
                navLinks.map((navLink : {id : string , title : string}) => {
                    return (
                        <li key={navLink.id}>
                            <a href={`#${navLink.id}`}>
                                {navLink.title}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
   </nav>
  )
}

export default Navbar