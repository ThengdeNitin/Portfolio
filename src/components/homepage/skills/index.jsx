import React from "react";
import Marquee from "react-fast-marquee";
import { skillsData } from "../../../../utils/data/skills.js";
import { skillsImage } from "../../../../utils/skill-image.js";

function Skills() {
  return (
    <div id="skills" className="relative mt-10 py-1"
    style={{ background: "linear-gradient(to left, #a9caff 0%, #b8cbff 16.7%, #d3cbff 33.3%, #f0c8f9 50%, #ffc5f1 66.7%, #ffc0ec 83.3%, #ffbaec 100%)"}}>
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute left-[42%] translate-x-1/2 filter blur-3xl opacity-20" />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, index) => {
            const skillImg = skillsImage(skill);

            return (
              <div
                key={index}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] shadow-none group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      {skillImg ? (
                        <img
                          src={skillImg}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-black text-xs">
                          No Image
                        </div>
                      )}
                    </div>
                    <p className="text-black text-sm sm:text-lg text-center">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
