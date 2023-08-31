// 'use client';

import { Footer } from 'flowbite-react';
import s10Image from '../assets/profile1.png';
import {  BsGithub, BsTwitter, BsMedium, BsFacebook , BsLinkedin } from 'react-icons/bs';

const  FooterWithLogo= ()=> {
  return (
    <Footer container >
      <div className="w-full text-center ">
        <div className="justify-between w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Brand 
            alt="Soulemanou Logo"
            href="/"
            name="Soulemanou"
            src={s10Image}
            className='border-none'
          />
          <Footer.LinkGroup className="gap-5 ">
            <Footer.Icon 
            href="https://github.com/soulemanou-software" 
            icon={BsGithub}
            />
             
            <Footer.Icon 
            href="https://www.linkedin.com/in/soulemanou-kunchiefuh-babanou/"
            icon={BsLinkedin}
            />
            <Footer.Icon 
            href="https://twitter.com/Mr_Babanou_237"
            icon={BsTwitter}
            />
            <Footer.Icon 
            href="https://medium.com/@soulemanou-kunchiefuh-babanou"
            icon={BsMedium}
            />
            <Footer.Icon 
            href="https://www.facebook.com/kingofnewyork"
            icon={BsFacebook}
            />
              
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          by="Soulemanou kunchiefuh babanou™"
          href="#"
          year="2023-2024"
        />
      </div>
    </Footer>
  )
}

export default FooterWithLogo;
