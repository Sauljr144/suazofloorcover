import Image from "next/image"
import AboutImg from '../../../../../public/assets/images/about.jpg'
import SectionBtn from "../../atoms/SectionBtn"

const About = () =>{
    return(
        <div className="container mx-auto mb-32 px-2">
            <div className="grid lg:grid-cols-2 gap-7">
                <Image src={AboutImg} alt={" modern kitchen and dinning room"} className="rounded-3xl" style={{objectFit: "cover"}} />
                <div className="flex flex-col justify-center items-center bg-light-gray rounded-3xl px-5 py-10">
                
                    <SectionBtn label="About" id="about" margin="mb-5"/>
                    <p className="text-center font-montserrat leading-relaxed text-sm lg:text-lg">
                    At Suazo Floor Cover, we take pride in being a family-owned and operated business dedicated to quality, integrity, and exceptional service. For years, we’ve been helping homeowners and businesses transform their spaces with beautiful and durable flooring. Our team combines expert craftsmanship with personalized care to ensure every customer feels like part of the family. Your satisfaction is our top priority.
                    </p>

                    
                </div>
            </div>
        </div>
    )
}

export default About