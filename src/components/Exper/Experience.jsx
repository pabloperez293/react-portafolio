import {EXPERIENCES} from '/src/constants'

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 lg:flex lg:items-start lg:gap-6" data-aos="fade-up" data-aos-delay={index * 80}>
            <div className="w-full lg:w-48 text-sm text-neutral-400">{exp.year}</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{exp.role} <span className="text-neutral-500">@ {exp.company}</span></h3>
              <p className="mt-2 text-neutral-400">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((t, i) => (
                  <span key={i} className="bg-neutral-800 px-2 py-1 rounded text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
