'use client';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import FormInput from '../../atoms/FormInput';
import { ImSpinner6 } from "react-icons/im";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const VSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: Yup.string().required('Phone is required.'),
  message: Yup.string().required('Message required.'),
});

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (values: FormValues) => {
    setIsSubmitting(true);
    const templateParams = {
      to_name: 'Saul',
      from_name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs
      .send(
        'service_2aqbe4i', // Replace with your EmailJS Service ID
        'template_3wypya7', // Replace with your EmailJS Template ID
        templateParams,
        'LbHtosXEWVT-SAfTT' // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmissionStatus('success');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmissionStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
   
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={VSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        <Form className='flex flex-col mt-10 mb-20 font-montserrat'>

            <FormInput id='name' name='name' label='Name' placeholder='Name' errorText='name' />

          <div className='grid grid-cols-2 gap-3 mb-3'>
            <FormInput id='email' name='email' label='Email' placeholder='Email' errorText='email' />
            <FormInput id='phone' name='phone' label='Phone' placeholder='Phone' errorText='phone' />
          </div>
            <FormInput id='message' name='message' label='Message' placeholder='Message' errorText='message' as='textarea' height='h-48' />
          <div className='flex justify-center mt-5'>
            <div className='flex justify-center mt-5'>
              <button
                type='submit'
                className='py-3 px-12 rounded-3xl border border-black hover:bg-black hover:text-white lg:text-base text-sm font-semibold'
                disabled={isSubmitting}
              >
                {isSubmitting ?<div className='flex items-center mr-2'> <ImSpinner6 className='animate-spin mr-1'/> <span>Sending...</span> </div>  : 'Submit'}
              </button>
            </div>
          </div>

          {submissionStatus === 'success' && (
            <p className='text-lime-500 text-center mt-4'>
              Your message has been sent successfully!
            </p>
          )}
          {submissionStatus === 'error' && (
            <p className='text-rose-500 text-center mt-4'>
              Failed to send your message. Please try again.
            </p>
          )}
        </Form>
      </Formik>
  );
};

export default ContactForm;
