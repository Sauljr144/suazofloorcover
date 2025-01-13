import Image, { StaticImageData } from "next/image"

interface CardProps{
    name:string;
    image: StaticImageData;
    alt:string;
    width: string
}

const Card = ({name, image, alt ,width}: CardProps) =>{
    return (
        <div className="relative lg:py-[200px] py-[150px] w-full">

            <Image src={image} alt={alt} style={{ objectFit: 'cover', objectPosition: 'bottom' }} sizes="(max-width: 768px)" fill className="rounded-3xl"/>
            <div className={`absolute top-0 left-0 w-full h-full font-montserrat font-semibold text-base lg:text-lg flex flex-col items-center justify-end text-black text-center `}>
                <span className={`border border-black rounded-full  py-2  mb-5 ${width} bg-white/30 backdrop-blur-sm `}>
                {name}
                </span>
            </div>



        </div>
    )
}

export default Card