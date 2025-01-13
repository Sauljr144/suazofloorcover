import Image from "next/image"
import HomeBG from '../../../../../public/assets/images/home.jpg'
import HeroTxt from "./HeroTxt"

const Hero = ()=>{
    return(
        <div id="home" className="container mx-auto mb-28 px-2">
                <div  className='relative lg:h-[800px] h-[600px] w-full flex flex-col  justify-center lg:justify-end items-center lg:items-start'>
                    <Image src={HomeBG} alt={""} style={{ objectFit: 'cover', objectPosition: 'bottom' }} fill className="rounded-3xl"/>
                    <HeroTxt/>
                </div>
                <div className="flex justify-center items-center px-5 lg:px-40 text-center font-montserrat text-base lg:text-xl mt-28 leading-6 lg:leading-8">
                    <p> As a family-owned flooring company, we bring decades of experience and craftsmanship to every project. Whether you’re renovating your home or upgrading your business, we’re here to help you find the perfect flooring solution. Let’s create a space you’ll love to walk on every day.</p>
                </div>
        </div>
    )
}

export default Hero