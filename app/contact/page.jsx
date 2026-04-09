"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

const WEB3FORMS_KEY = "8b6457da-b3fa-40db-9617-be565a561a6f";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 857-396-6163",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rao.mani@northeastern.edu, manish.r@mycvscout.com",

  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Texas, USA",
  },
  {
    icon: <FaLocationArrow />,
    title: "Relocation",
    description: "Open to relocate within USA",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-tertiary rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-foreground/60">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" required />
                <Input name="lastname" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="tel" placeholder="Phone number" />
              </div>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
              {status === "success" && (
                <p className="text-accent text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex flex-col xl:items-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-tertiary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
