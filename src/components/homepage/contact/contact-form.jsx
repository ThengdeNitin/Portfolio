import { isValidEmail } from "../../../../utils/check-email";
import axios from "axios";
import { useRef } from "react";
import { TbMailForward } from "react-icons/tb";
// import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // const publickey = "kgwma5PltkkxoeNhE";
    // const serviceid = "service_j4xbhld";
    // const templateid = "template_pki6mj5";

    emailjs
      .sendForm('service_j4xbhld', 'template_pki6mj5', form.current, {
        publicKey: 'kgwma5PltkkxoeNhE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const [error, setError] = useState({ email: false, require: false });
  // const [isLoading, setIsLoading] = useState(false);
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const checkRequired = () => {
  //   if (userInput.email && userInput.message && userInput.name) {
  //     setError({ ...error, require: false });
  //   }
  // };

  // const handleSendMail = async (e) => {
  //   e.preventDefault();

  //   if (!userInput.email || !userInput.message || !userInput.name) {
  //     setError({ ...error, require: true });
  //     return;
  //   } else if (error.email) {
  //     return;
  //   } else {
  //     setError({ ...error, require: false });
  //   }

  //   try {
  //     setIsLoading(true);
  //     const res = await axios.post(
  //       `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
  //       userInput
  //     );

  //     toast.success("Message sent successfully!");
  //     setUserInput({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        {" "}
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-black">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mt-6 flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-base text-black">Your Name:</label>
              <input
                className="bg-amber-50 w-full border rounded-md border-[#323a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                name="from_name"
                maxLength="100"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-base text-black">Your Email:</label>
              <input
                className="bg-amber-50 w-full border rounded-md border-[#323a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                name="from_email"
                maxLength="100"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-base text-black">Your Message:</label>
              <textarea
                className="bg-amber-50 w-full border rounded-md border-[#323a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                name="message"
                maxLength="500"
                required
                rows="8"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="submit"
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-l to-violet-950 from-blue-950 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
              >
              <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactform;
