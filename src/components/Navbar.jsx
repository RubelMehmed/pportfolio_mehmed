import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

import { styles } from '../style'

const Navbar = () => {
  const [active,setActive ] = useState("")


  return (
    <nav
    className={`${styles.paddindex} w-full flex items-center py-5 fixed top-0  z-20 bg-primary`}
    >
      <div className ='w-full flex justify-between items-center max-w-7xl mx-auto' >
        <Link 
          to ="/"
          className="flex items-center gap-2"
          onClick = {() => {
            setActive("");
            window.scrollTo(0,0);
          }}
         >
        </Link>
        <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
        <p>Rubel <span> Fakir </span></p>
        

      </div>
    </nav>
  )
}

export default Navbar