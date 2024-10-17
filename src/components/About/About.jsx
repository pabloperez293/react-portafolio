import aboutImg from "/src/assets/yo.png";
import { ABOUT_TEXT } from "/src/constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center">
        Sobre <span className="text-orange-400">Mi </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="" src={aboutImg} alt="SobreMi" />
          </div>
          
        </div>
        <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div> 
      </div>
    </div>
  );
};

export default About;
