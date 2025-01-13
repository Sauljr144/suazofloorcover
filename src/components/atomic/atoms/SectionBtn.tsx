interface SectionProps{
    id: string,
    label: string,
    bg?: string,
    margin?:string

}

const SectionBtn = ({id, label, bg, margin}:SectionProps) =>{
    return (
        <div id={id} className={`border border-black rounded-full px-10 py-1 font-montserrat font-semibold text-sm lg:text-base ${margin} ${bg}`}>
            {label}

        </div>
    )
}

export default SectionBtn