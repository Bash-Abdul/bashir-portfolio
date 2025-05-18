// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_p4hpeuh',       // Replace with your EmailJS Service ID
//         'template_jq9iboi',      // Replace with your EmailJS Template ID
//         form.current,
//         'ufSlZ84I3JJ0KGXgT'        // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Failed to send message.");
//         }
//       );

//     e.target.reset();
//   }


//   return (
//     <div className="w-full">
//       {/* <form action="" className='bg-white h-[500px] flex items-center justify-center'>
//           <div className='grid gap-8'>
//           <input type="text" className='text-black p-5 w-[500px] outline-none border' placeholder='Enter your name' />
//           <input type="email" className='text-black p-5 w-[500px] outline-none border' placeholder='Enter your email' />
//           <textarea name="" className='border w-[500px] p-5 outline-none h-[150px] text-black' id=""></textarea>
//           </div>
//         </form> */}

//       <form
//         action=""
//         ref={form}
//         onSubmit={handleSubmit}
//         className="text-white flex flex-col gap-8"
//       >
//         <input
//           type="text"
//           name="name"
//           className="text-white p-5 outline-none border"
//           placeholder="Enter your name"
//         />
//         <input
//           type="email"
//           name="user_email"
//           className="text-white p-5 outline-none border"
//           placeholder="Enter your email"
//         />
//         <textarea
//           name="message"
//           className="border p-5 outline-none h-[150px] text-white resize-none"
//           id=""
//           placeholder="Enter Message"
//         ></textarea>

//         {/* <div>
//         <button className="bg-white text-black p-5 text-sm font-bold ">
//           Connect
//         </button>
//         </div> */}
//         <button className="bg-white text-black p-5 text-sm font-bold " type="submit">
//           CONNECT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_p4hpeuh',         // Your EmailJS Service ID
        'template_jq9iboi',        // Your Template ID
        form.current,
        'ufSlZ84I3JJ0KGXgT'        // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon.",
            confirmButtonColor: "#3085d6"
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#d33"
          });
        }
      )
      .finally(() => {
        setLoading(false);
        e.target.reset();
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="w-full">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="text-white flex flex-col gap-8"
      >
        <input
          type="text"
          name="name"
          required
          className="text-white p-5 outline-none border border-2"
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="user_email"
          required
          className="text-white p-5 outline-none border border-2"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          required
          className="border p-5 outline-none h-[150px] text-white resize-none border-2"
          placeholder="Enter Message"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="submit"
          disabled={loading}
          // className={`bg-white text-black p-5 text-sm font-bold transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''
          //   }`}
          className="py-4 px-5 bg-white text-black shadow-md hover:shadow-lg transition-shadow duration-300 font-medium tracking-wide'"
        >
          {loading ? "Sending..." : "CONNECT"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
