import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import Script from "next/script";

const Contact = () => {
  const form = useRef();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const city = this.state.city;
    this.props.onSearchTermChange(city);
    this.name({city: ""});
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3wkjn63', 'template_orjub64', form.current, 'TKuYvaBclb4LzvtWQ')
      .then((result) => {
          alert("Mensaje enviado correctamente")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div className="h-full bg-primary/30">
      <div className="container mx-auto pb-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form onSubmit={sendEmail} ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            id="form"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex z-[50] gap-x-6 w-full">
              <input
                required
                type="text"
                placeholder="name"
                className="w-full h-10 px-5 py-2 rounded-md bg-transparent border border-slate-200/40"
                name="user_name"
              />
              <input
                required
                type="text"
                placeholder="phone"
                className="w-full h-10 px-5 py-2 rounded-md bg-transparent border border-slate-200/40"
                name="phone"
              />
            </div>
            <div className="flex z-[50] gap-x-6 w-full">
              <input
                required
                type="text"
                placeholder="email"
                className="w-full h-10 px-5 py-2 rounded-md bg-transparent border border-slate-200/40"
                name="user_email"
              />
            </div>
            <textarea
              required
              rows="5"
              placeholder="message"
              className="w-full px-5 py-2 rounded-md bg-transparent border border-slate-200/40 z-[50]"
              name="message"
            ></textarea>
            <button
              
              onSubmit={onHandleSubmit}
              type="submit"
              id="button"
              className="btn rounded-full  border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>

        </div>
      </div>
      
    </div>

  
  );
};

export default Contact;
