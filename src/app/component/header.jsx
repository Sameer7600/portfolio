import { Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>

      <nav className="h-24 w-full bg-white text-black grid grid-cols-3 items-center">

        <h2 className="text-6xl font-bold text-[#59AB6E] ml-28">Zoy</h2>
        <ul className="flex">
            <li><a className="ml-10" href="#">Home</a></li>
            <li><a className="ml-16" href="#">About</a></li>
            <li><a className="ml-16" href="#">Shop</a></li>
            <li><a className="ml-16" href="#">Contact</a></li>
        </ul>
           <div className="flex ml-40">
           <Search />
           <ShoppingCart className='ml-8'/>
           <User className='ml-8'/>
           </div>
      </nav>

    </div>
  )
}

export default Header
