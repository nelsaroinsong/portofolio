import { ReactNode } from "react";
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPhp, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMysql, 
  SiTypescript,
} from "react-icons/si";

interface TeknologiItem {
  name: string;
  icon: ReactNode;
}

export const tech: TeknologiItem[] = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Typescript", icon: <SiTypescript /> },
];


