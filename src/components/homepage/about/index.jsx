import { personalData } from "../../../../utils/data/personal-data";

function AboutSection() {
  return (
      <div id="about" className="py-12 lg:py-16 relative pl-20 pr-20 bg-gradient-to-r to-violet-950 from-blue-950">
        <div className="hidden lg:flex flex:col items-center absolute top-16 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounde-md">
            ABOUT ME
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
           <img src={personalData.profile}
           width={280}
           height={280}
           alt="Nitin Thengde"
           className="rounded-lg transiton-all duration-1000 grayscale hover:scale-110 cursor-pointer"
           />
        </div>
      </div>
      </div>
  );
}

export default AboutSection;
