import { useGSAP } from '@gsap/react'
import {navLinks} from '../constants/index'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(()=> {
        const navTween = gsap.timeline({
            scrollTrigger : {
                trigger : 'nav', 
//this means when the bottom of the navbar reaches the top of the viewport, it triggers
                start : 'bottom top', 
            }
        });
        navTween.fromTo('nav' , {
            backgroundColor : 'transparent' , 
        }, {
             backgroundColor : '#00000050',
             backgroundFilter : 'blur(10px)',
                duration : 1,
                ease : 'power1.inOut', 
        })
    })
  return (
   <nav>
    <div className='max-w-screen-xl mx-auto px-5'>
        <a href="#home"
        className="flex items-center gap-2">
            <img src='/images/logo.png' alt='logo'/>
            <p>موهیتو لند</p>
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