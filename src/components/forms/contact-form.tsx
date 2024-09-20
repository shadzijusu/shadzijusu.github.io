import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_cjmcj85",
        "template_hqq4oni",
        form.current as HTMLFormElement,
        {
          publicKey: "_1B-ktzFhIH67nwhS",
        }
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="w-full flex flex-col space-y-2"
    >
      <label className="text-white">Name</label>
      <Input type="text" name="user_name" required />
      <label className="text-white">Email</label>
      <Input type="email" name="user_email" required />
      <label className="text-white">Message</label>
      <Textarea name="message" required />
      <div className="h-4"></div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="md:w-[180px] mx-auto bg-[#8643DC] border-[#8643DC] text-lg font-normal"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
