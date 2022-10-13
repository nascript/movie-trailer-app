import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import { FiBell } from '@react-icons/all-files/fi/FiBell'

const Header = () => {
  return (
    <header>
      {/* LEFT NAVBAR */}
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          height='100'
          width='100'
          className='cursor-pointer object-contain'
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>Tv Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      {/* RIGHT NAVBAR */}
      <div>
        <FiSearch className='hidden sm:inline h-6 w-6' />
        <p className='hidden lg:inline'>Kids</p>
        <FiBell />
      </div>
    </header>
  )
}

export default Header
