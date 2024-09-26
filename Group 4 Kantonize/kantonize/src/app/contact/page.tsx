"use client";
import { useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { toast } from "sonner";

// Dynamically load the LeafletMap component
const LeafletMap = dynamic(() => import("../../components/LeafletMap"), {
  ssr: false,
});

// Motion variants for animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export default function ContactUsPage() {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handler function to clear the form
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission

    // Clear the input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section with Background */}
      <motion.div
        className="bg-cover bg-center h-[30rem] text-white"
        style={{ backgroundImage: "url('/assets/contactTopBg.png')" }}
        variants={fadeInUp}
        transition={{ duration: 1.5 }}
      >
        <div className="mx-16 pt-[10%] tracking-[0.3rem] text-center">
          <motion.h1
            className="text-[4rem] font-extrabold"
            variants={fadeInUp}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            HOW CAN WE HELP YOU?
          </motion.h1>
          <motion.h2
            className="tracking-wider text-[24px] mt-4"
            variants={fadeInUp}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            Send us a message.
          </motion.h2>
        </div>
      </motion.div>

      {/* Title Section */}
      <motion.div
        className="text-center mt-12 mb-20"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold tracking-[0.5rem] pb-12">
          LET&apos;S HAVE A TALK
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-20 my-28 px-10 md:px-20">
        <motion.div
          className="flex flex-col w-full md:w-[60%]"
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        >
          <form onSubmit={handleSubmit}>
            {" "}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="w-full max-w-sm">
                <Label htmlFor="fName" className="font-bold">
                  FIRST NAME
                </Label>
                <Input
                  type="text"
                  id="fName"
                  placeholder="First Name"
                  aria-label="First Name"
                  className="shadow-inner"
                  value={firstName} // Set value from state
                  onChange={(e) => setFirstName(e.target.value)} // Update state on change
                />
              </div>
              <div className="w-full max-w-sm">
                <Label htmlFor="lName" className="font-bold">
                  LAST NAME
                </Label>
                <Input
                  type="text"
                  id="lName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  className="shadow-inner"
                  value={lastName} // Set value from state
                  onChange={(e) => setLastName(e.target.value)} // Update state on change
                />
              </div>
            </div>
            <div className="w-full max-w-sm mb-8">
              <Label htmlFor="email" className="font-bold">
                EMAIL ADDRESS
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="shadow-inner"
                value={email} // Set value from state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
            </div>
            <div className="w-full mb-4">
              <Label htmlFor="message" className="font-bold">
                YOUR MESSAGE
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                aria-label="Your Message"
                className="h-16 shadow-inner"
                value={message} // Set value from state
                onChange={(e) => setMessage(e.target.value)} // Update state on change
              />
            </div>
            <div>
              <Button
                type="submit" // Change to submit
                className="w-full font-bold tracking-widest bg-[#912828] border-black"
                onClick={() =>
                  toast("Message Sent", {
                    description:
                      "We will send you an update regarding this. Thanks.",
                    action: {
                      label: "Noted",
                      onClick: () => console.log("Noted"),
                    },
                  })
                }
              >
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Leaflet Map and Address */}
        <motion.div
          className="flex flex-col w-full md:w-[40%]"
          variants={fadeInRight}
          transition={{ duration: 1 }}
        >
          <LeafletMap />
          <div className="py-6">
            <motion.p className="text-lg font-semibold">
              Luna St, La Paz
            </motion.p>
            <motion.p>Iloilo City, Philippines, 5000</motion.p>
            <motion.p>+63 123 456 7890</motion.p>
            <motion.p>kantonize@gmail.com</motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
