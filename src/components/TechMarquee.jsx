import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiShadcnui,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiGit, name: "Git" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiShadcnui, name: "Shadcn UI" },
  { icon: SiPostman, name: "Postman Api" },
];

const TechMarquee = () => {
  return (
    <div className="bg-gray-800 py-8">
      <Marquee gradient={false} speed={50}>
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center mx-8">
            <tech.icon className="text-4xl text-blue-400 mr-2" />
            <span className="text-white text-lg">{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
