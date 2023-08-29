'use client';

import { Button, Navbar } from 'flowbite-react';

const  Navigator = ()=> {
  return (
    <Navbar
      fluid
      
      rounded
      className="fixed z-[1000] w-full px-4 text-white border-gray-200 bg-gray-900 dark:border-gray-700"
    >
      <Navbar.Brand href="/">
        <img
          alt="soulemanou Logo"
          className="mr-3 h-6 sm:h-9"
          src="src/assets/profile1.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Soulemanou Kunchiefuh
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button
                type="button"
                className="hidden z-20 md:block px-4 py-0  text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:outline-none md:mr-0 dark:bg-blue-600  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={() => window.open('src/assets/Soulemanou_Bababou_Resume (1).pdf', '_blank')}
              >
                My Resume
              </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
          
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#About" className='text-white'>
          About
        </Navbar.Link>
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
                className="md:hidden z-20 block px-4 py-0  text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:outline-none md:mr-0 dark:bg-blue-600  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={() => window.open('src/assets/Soulemanou_Bababou_Resume (1).pdf', '_blank')}
              >
                My Resume
              </Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigator;
