import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvvpvyg");
  if (state.succeeded) {
      return <p className='text-xl'>Thanks for Feedback!</p>;
  }
  return (
    <form className='text-gray' onSubmit={handleSubmit}>
        <input 
        className='bg-transparent  border-b   my-2'
        type='text'
        placeholder='Name' 
        required>
        </input><br></br>
      
      <input
        className='bg-transparent  border-b  my-2'
        placeholder='Email'
        id="email"
        type="email" 
        name="email"
      /><br></br>
      <ValidationError
        className='text-red' 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><br></br>
      <textarea
        className='bg-transparent  border-b my-2 w-full h-32 h-20' 
        placeholder="Question, request assistance, or give feedback on your experience "
        id="message"
        name="message"
      /><br></br>
      <ValidationError 
        className='text-red' 

        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button 
      className='border py-1 px-2 rounded'
      type="submit" 
      disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;