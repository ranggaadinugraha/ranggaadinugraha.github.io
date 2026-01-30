import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

import Gmail from "../../assets/icons/gmail.png";
import WhatsApp from "../../assets/icons/whatsapp.png";
import Location from "../../assets/icons/location.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setModalMessage("Message sent successfully");
          setShowModal(true);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setModalMessage("Failed to send message");
          setShowModal(true);
        }
      );
  };

  const Modal = () =>
    showModal
      ? createPortal(
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-[#1f2020] border border-white/15 px-10 py-8 w-[90%] max-w-md text-center">
              <h2 className="text-xl font-medium text-white">
                {modalMessage}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="mt-8 px-8 py-2 border border-white/20 text-white text-sm hover:border-[#00A19B] transition"
              >
                OK
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section id="contact" className="px-6 pt-32 pb-32">
      <Modal />
      <div className="w-full max-w-6xl mx-auto px-6">

        <RevealOnScroll className="reveal-left">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white">
              Contact
            </h2>
            <div className="w-20 h-px bg-[#00A19B] mt-4" />
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          <RevealOnScroll className="reveal-left">
            <div className="space-y-12 max-w-md">
              <p className="text-white/90 leading-relaxed text-[15px]">
                Let’s collaborate and build something meaningful.
                I’m open to projects, ideas and opportunities.
              </p>

              <div className="space-y-7 text-sm">
                <ContactItem icon={Gmail} text="ranggaadinugrahaa@gmail.com" />
                <ContactItem icon={WhatsApp} text="+62 821-3672-4326" />
                <ContactItem icon={Location} text="DI Yogyakarta, Indonesia" />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="reveal-right">
            <div className="w-full max-w-md">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-10 hover:border-[#00A19B]/60 transition">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <Input name="name" value={formData.name} setFormData={setFormData} placeholder="Your Name" />
                  <Input name="email" value={formData.email} setFormData={setFormData} placeholder="Email Address" />
                  <Textarea value={formData.message} setFormData={setFormData} />

                  <button
                    type="submit"
                    className="mt-8 w-full border border-white/25 py-3 text-sm text-white hover:border-[#00A19B] transition cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="group flex items-center gap-4">
    <img src={icon} className="w-4 h-4 opacity-90 group-hover:scale-110 transition" />
    <span className="text-white/85 group-hover:text-[#00A19B] transition">
      {text}
    </span>
  </div>
);

const Input = ({ name, value, setFormData, placeholder }) => (
  <input
    type={name === "email" ? "email" : "text"}
    name={name}
    required
    value={value}
    placeholder={placeholder}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, [name]: e.target.value }))
    }
    className="w-full bg-transparent border-b border-white/20 px-1 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#00A19B]"
  />
);

const Textarea = ({ value, setFormData }) => (
  <textarea
    name="message"
    rows={4}
    required
    value={value}
    placeholder="Your Message"
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, message: e.target.value }))
    }
    className="w-full bg-transparent border-b border-white/20 px-1 py-3 text-white text-sm resize-none placeholder:text-gray-500 focus:outline-none focus:border-[#00A19B]"
  />
);
