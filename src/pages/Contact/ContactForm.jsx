import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p4hpeuh',       // Replace with your EmailJS Service ID
        'template_jq9iboi',      // Replace with your EmailJS Template ID
        form.current,
        'ufSlZ84I3JJ0KGXgT'        // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  }


  return (
    <div className="w-full">
      {/* <form action="" className='bg-white h-[500px] flex items-center justify-center'>
          <div className='grid gap-8'>
          <input type="text" className='text-black p-5 w-[500px] outline-none border' placeholder='Enter your name' />
          <input type="email" className='text-black p-5 w-[500px] outline-none border' placeholder='Enter your email' />
          <textarea name="" className='border w-[500px] p-5 outline-none h-[150px] text-black' id=""></textarea>
          </div>
        </form> */}

      <form
        action=""
        ref={form}
        onSubmit={handleSubmit}
        className="text-white flex flex-col gap-8"
      >
        <input
          type="text"
          name="name"
          className="text-white p-5 outline-none border"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="user_email"
          className="text-white p-5 outline-none border"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          className="border p-5 outline-none h-[150px] text-white resize-none"
          id=""
          placeholder="Enter Message"
        ></textarea>

        {/* <div>
        <button className="bg-white text-black p-5 text-sm font-bold ">
          Connect
        </button>
        </div> */}
        <button className="bg-white text-black p-5 text-sm font-bold " type="submit">
          CONNECT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
