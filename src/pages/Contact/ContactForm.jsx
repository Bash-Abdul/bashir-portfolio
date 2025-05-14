import React from "react";

const ContactForm = () => {
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
        className="text-white flex flex-col gap-8"
      >
        <input
          type="text"
          className="text-white p-5 outline-none border"
          placeholder="Enter your name"
        />
        <input
          type="email"
          className="text-white p-5 outline-none border"
          placeholder="Enter your email"
        />
        <textarea
          name=""
          className="border p-5 outline-none h-[150px] text-white resize-none"
          id=""
          placeholder="Enter Message"
        ></textarea>

        <div>
        <button className="bg-white text-black p-5 text-sm font-bold ">
          Connect
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
