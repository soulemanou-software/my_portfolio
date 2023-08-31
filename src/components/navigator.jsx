// jsx
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <Navbar fluid rounded className="fixed z-[1000] w-full px-4 text-white border-gray-200 bg-gray-900 dark:border-gray-700">
      <Link to="/" className="flex items-center">
        <img
          alt="BABANOU ICON"
          className="h-6 mr-3 sm:h-9"
          src="https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/profile1.png?raw=true"
        />
        <span className="self-center text-sm font-semibold md:text-xl whitespace-nowrap dark:text-white">
          Kunchiefuh
        </span>
      </Link>
      <div className="flex md:order-2">
        <Button
          type="button"
          className="z-20 hidden px-4 py-0 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:block focus:outline-none md:mr-0 dark:bg-blue-600 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => window.open('src/assets/Soulemanou_Bababou_Resume (1).pdf', '_blank')}
        >
          My Resume
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="/">
          Home
        </Navbar.Link>
        {/* <Link to="/#About"> */}
        <Navbar.Link href="#About" className='text-white'>
          About
        </Navbar.Link>
        {/* </Link> */}
        <Navbar.Link href="#Skills" className='text-white'>
          Skills
        </Navbar.Link>
        <Navbar.Link href="#Projects" className='text-white'>
          Projects
        </Navbar.Link>
        <Navbar.Link href="#Contacts" className='text-white'>
          Contact
        </Navbar.Link>
        <Navbar.Link className="border-none">
          <Button
            type="button"
            className="z-20 block px-4 py-0 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:hidden focus:outline-none md:mr-0 dark:bg-blue-600 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            onClick={() => window.open('src/assets/Soulemanou_Bababou_Resume (1).pdf', '_blank')}
          >
            My Resume
          </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;