import ContactForm from './ContactForm';
import SectionBtn from '../../atoms/SectionBtn';

const Contact = () => {

    return(
         <div id='contact' className='container mx-auto mt-10 flex flex-col  font-montserrat font-semibold lg:px-56 mb-12 px-2 scroll-mt-[100px]'>
              <div className='flex flex-col items-center'>
                <SectionBtn  label='Contact' margin='mb-10'/>
                <p className='text-center lg:text-base text-sm'>
                Let’s bring your flooring vision to life! Reach out to us today for a free consultation or to learn more about our services.
                </p>
              </div>

              <ContactForm/>
        </div>
    )
}

export default Contact