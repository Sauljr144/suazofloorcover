import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import SFCLogo from '../../../../../public/assets/images/Logo.png';
import links from '@/utils/links';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className=' w-full bg-light-gray rounded-t-xl p-4 '>
       
        <div className='container mx-auto  text-black font-montserrat '>
        <div className='lg:absolute lg:mt-6'>
        <Link href={'/'}>
            <Image
              src={SFCLogo}
              alt={'Suazo Floor Cover Logo'}
              className='lg:w-28 w-20'
              priority
            />
          </Link>
        </div>

        <div className='flex flex-col lg:items-center '>

          <div className='mt-5 mb-4'>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='lg:mx-4 mr-3 lg:text-base text-xs font-medium hover:underline hover:underline-offset-8'
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex mb-12'>
            <Link href={'https://www.facebook.com/ToscanoFamilyFarm'}>
              <FaFacebookF className='lg:text-lg mr-2' />
            </Link>
            <Link href={'https://www.instagram.com/toscanofamilyfarm/'}>
              <FaInstagram className='text-lg lg:text-xl ' />
            </Link>
          </div>
        </div>
          <p className='font-light text-xs text-center'>
            Copyright © 2025 Suazo Floor Cover All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
