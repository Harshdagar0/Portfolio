import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvvpvyg");
  if (state.succeeded) {
    return <p className='text-lg text-cyan-200'>Thanks for your feedback!</p>;
  }

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      <input
        className='w-full rounded-lg border border-zinc-700 bg-zinc-950/70 px-3 py-2 outline-none transition focus:border-cyan-300'
        type='text'
        name='name'
        placeholder='Name'
        required
      />

      <input
        className='w-full rounded-lg border border-zinc-700 bg-zinc-950/70 px-3 py-2 outline-none transition focus:border-cyan-300'
        placeholder='Email'
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError
        className='text-sm text-red-400'
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        className='h-28 w-full rounded-lg border border-zinc-700 bg-zinc-950/70 px-3 py-2 outline-none transition focus:border-cyan-300'
        placeholder="Question, request assistance, or share feedback"
        id="message"
        name="message"
        required
      />
      <ValidationError
        className='text-sm text-red-400'
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button
        className='rounded-lg bg-cyan-300 px-4 py-2 font-medium text-zinc-900 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70'
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
