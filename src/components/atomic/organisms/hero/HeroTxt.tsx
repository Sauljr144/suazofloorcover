import Image from 'next/image';
import Link from 'next/link';
import corner from '../../../../../public/assets/images/corner.png';

const HeroTxt = () => {
  return (
    <div className='absolute'>
      <div className='hidden lg:grid'>
        <Image src={corner} alt='' />
        <div className='grid grid-cols-2'>
          <div className=' bg-white  lg:rounded-tr-3xl font-montserrat font-semibold px-7 py-7'>
            <span className='flex justify-end  text-xl'>Lic #1084052</span>
            <h1 className='text-4xl'>Welcome to</h1>
            <h1 className='text-5xl mb-6'>Suazo Floor Cover Inc.</h1>
            <Link
              className='px-4 py-2 border border-black rounded-full text-lg hover:bg-black hover:text-white'
              href={'#contact'}
            >
              Get Your Free Estimate!
            </Link>
          </div>
          <div className='flex items-end'>
            <Image src={corner} alt='' />
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        <div className=' bg-white rounded-3xl font-montserrat font-semibold px-7 py-7'>
          <span className='flex text-xs'>Lic #1084052</span>
          <h1 className='text-2xl'>Welcome to</h1>
          <h1 className='text-3xl mb-6'>Suazo Floor Cover Inc.</h1>
          <div></div>
          <Link
            className='px-4 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white'
            href={'#contact'}
          >
            Get Your Free Estimate!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroTxt;
