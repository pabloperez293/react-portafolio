import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText } from "lucide-react";
import Button from "../ui/Button";
// eslint-disable-next-line no-unused-vars
import heroImg from "/src/assets/chatpab.png";
import { HERO_PROFILES } from "/src/constants";

const spring = { type: "spring", stiffness: 400, damping: 25 };
const profileOptions = [
  { key: "funcional", label: "Analista Funcional" },
  { key: "java", label: "Java Developer" },
];

export default function Hero() {
  const [activeProfile, setActiveProfile] = useState("funcional");
  const currentProfile = HERO_PROFILES[activeProfile];

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("profileChange", { detail: activeProfile }),
    );
  }, [activeProfile]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={spring}
      className="relative min-h-[88vh] overflow-hidden bg-[#FDFDFD] text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.06),transparent_22%)]" />
      <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-150 h-87.5 rounded-full bg-linear-to-r from-indigo-600/15 to-indigo-400/10 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute left-12 top-28 h-px w-24 bg-indigo-100 opacity-60" />
      <div className="pointer-events-none absolute left-24 top-20 h-2 w-2 rounded-full bg-orange-100 opacity-70" />
      <div className="pointer-events-none absolute right-16 bottom-20 h-px w-28 bg-orange-100 opacity-50" />
      <div className="pointer-events-none absolute right-24 bottom-32 h-2 w-2 rounded-full bg-indigo-100 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              <span className="font-semibold">
                Analista Funcional & Java Developer
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.32em] text-indigo-600">
                  Perfil
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950">
                  Pablo Perez
                </h1>
                <p className="text-base sm:text-lg leading-8 text-slate-600 max-w-3xl">
                  {currentProfile.description}
                </p>
              </div>

              <div className="inline-flex flex-wrap gap-3 rounded-full border border-red-100 bg-slate-50 p-1.5 shadow-sm">
                {profileOptions.map((profile) => (
                  <motion.button
                    key={profile.key}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    transition={spring}
                    onClick={() => setActiveProfile(profile.key)}
                    className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeProfile === profile.key
                        ? "bg-linear-to-r from-indigo-600 to-indigo-400 text-white shadow-md shadow-indigo-500/25"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {profile.label}
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={spring}
                >
                  <Button
                    href={currentProfile.cv}
                    variant="primary"
                    className="px-6 py-3.5"
                  >
                    <FileText className="w-4 h-4" />
                    Descargar CV {currentProfile.label}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={spring}
                >
                  <Button
                    href="#projects"
                    variant="secondary"
                    className="px-6 py-3.5"
                  >
                    Ver Portfolio
                  </Button>
                </motion.div>
              </div>

              <div className="pt-5 border-t border-slate-200/70">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Spring Boot",
                    "React",
                    "JavaScript",
                    "PostgreSQL",
                    "Git",
                    "Docker",
                    "REST API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-sm w-full max-w-[420px]">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                <img src={heroImg} alt="Pablo Perez" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
