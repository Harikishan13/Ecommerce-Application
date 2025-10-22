import React ,{useRef}from "react";
import { FaLocationDot, FaEnvelope, FaPhone, FaHeadphones } from "react-icons/fa6";
import emailjs from "emailjs-com";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2un49b1",    
        "template_fki6lo4",   
        form.current,
        "OHiAaSPMVvLIWRZrQ"    
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Try again.");
        }
      );
  };
  return (
    <section className="py-16 px-6 sm:px-10 md:px-20 md:py-35 lg:px-40 bg-gradient-to-r from-gray-200 to-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Get <span className="text-gray-500 underline font-semibold">in Touch</span>
          </h2>
          <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
            Have questions or need help? Send us a message, and we'll get <br className="hidden sm:block"/> 
            back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="flex-1 border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Write your message here"
              name="message"
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-all duration-300 w-full sm:w-max cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Details */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Contact <span className="text-gray-500 underline">Details</span>
          </h2>
          <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
            We are always here to assist you! Feel free to reach out to us <br className="hidden sm:block"/> 
            through any of the following methods.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <FaLocationDot className="text-black mt-1" />
              <div>
                <h5 className="font-semibold text-gray-700 mb-1">Location:</h5>
                <p className="text-gray-500 text-sm">
                  Bhimavaram, West Godavari, 534202
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-black mt-1" />
              <div>
                <h5 className="font-semibold text-gray-700 mb-1">Email:</h5>
                <p className="text-gray-500 text-sm">shopEasy@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-black mt-1" />
              <div>
                <h5 className="font-semibold text-gray-700 mb-1">Phone:</h5>
                <p className="text-gray-500 text-sm">+91 9849130402</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaHeadphones className="text-black mt-1" />
              <div>
                <h5 className="font-semibold text-gray-700 mb-1">Support:</h5>
                <p className="text-gray-500 text-sm">24/7 Support is open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
