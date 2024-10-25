import {EXPERIENCES} from '/src/constants'

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((Experience, index) => {
          <div key={index} className="mb-8 flex-wrap lg:justify-center"></div>;
        })}
      </div>
    </div>
  );
};

export default Experience;
