import SectionBtn from "../../atoms/SectionBtn"
import Hardwood from '../../../../../public/assets/images/harwood.jpg'
import Card from "../../molecules/Card"
import servicesImgs from "@/utils/servicesImgs"

const Services = () =>{
    return(
        <div id="services" className="container mx-auto mb-32 px-2 scroll-mt-[100px]">
            <div className='flex flex-col items-center'>
                    <SectionBtn label="Services" margin="mb-8"/>
                    <p className="text-center font-montserrat font-semibold text-sm lg:text-lg ">
                    Not sure which flooring is right for you? Our experts are here to guide you every step of the way.
                    </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-12">
                {servicesImgs.slice(0,3).map((service) => 
                <Card key={service.name} name={service.name} image={service.image} alt={service.alt} width="w-3/4"/>
                )}
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-3">
            {servicesImgs.slice(3,5).map((service) => 
                <Card key={service.name} name={service.name} image={service.image} alt={service.alt} width="lg:w-1/2 w-3/4"/>
                )}
            </div>

        </div>
    )
}

export default Services