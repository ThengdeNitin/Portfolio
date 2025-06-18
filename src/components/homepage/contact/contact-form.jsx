import { isValidEmail } from "../../../../utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";


function Contactform(){
  const [error, setError] = useState({ email: false, require:false});
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({ 
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if(userInput.email && userInput.message && userInput.name){
      setError({ ...error, require: false});
    }
  }; 

  const handleSendMail = async (e) => {
    e.preventDefault();

    if(!userInput.email || !userInput.message || !userInput.name){
      setError({ ...error, require: true});
      return;
    } else if (error.email){
      return;
    } else {
      setError({ ...error, require: false});
    };

    try{
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name:"",
        email:"",
        message:"",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return(
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase"> Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="felx flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input 
            className="bg-[#10172d] w-full border rounded-md border-[#323a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            type="text"
            maxLength="100"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            value={userInput.name}
            />
          </div>

          <div className="felx flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input 
            className="bg-[#10172d] w-full border rounded-md border-[#323a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            type="email"
            maxLength="100"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email)});
            }}
            value={userInput.email}
            />
            {
              error.email && <p className="text-sm text-red-400">Please provide a vaild email</p> 
            }
          </div>


          <div className="felx flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textare 
            className="bg-[#10172d] w-full border rounded-md border-[#323a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
            name="message"
            maxLength="500"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
            rows = "4"
            value={userInput.message}
            />
          </div>

          <div className="felx flex-col items-center gap-3">
            {error.require && <p className="text-sm text-red-400">
              All fiels are required!</p>}
            <label className="text-base">Your Email: </label>
            <button 
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            onClick={handleSendMail}
            disabled={isLoading}
            >
            {
              isLoading ? 
              <span>Sending Message...</span> :
              <span className="flex items-center gap-1">
                Send Message
                <TbMailForward size={20}/>
              </span>
            }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactform;