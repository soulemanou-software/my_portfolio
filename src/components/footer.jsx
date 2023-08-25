'use client';

import { Footer } from 'flowbite-react';
import s10Image from '../assets/s10.jpg';

const  FooterWithLogo= ()=> {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Soulemanou Logo"
            href="/"
            name="Soulemanou"
            src={s10Image}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#">
              Licensing
            </Footer.Link>
            <Footer.Link href="#">
              Contact
            </Footer.Link>
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
