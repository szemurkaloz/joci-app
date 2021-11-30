import { IconType } from "react-icons";
import { BsCircleFill } from "react-icons/bs";


export interface IService {
    Icon: IconType;
    title: string;
    about: string;
}

export interface ISkill {
    Icon: IconType;
    name: string;
    level: string;
}

export const languages: ISkill[] = [
    {
      Icon: BsCircleFill,
      name: "Python",
      level: "45",
    },
    {
      Icon: BsCircleFill,
      name: "Java Script",
      level: "60",
    },
    {
      Icon: BsCircleFill,
      name: "React Native",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "React",
      level: "70",
    },
    {
      Icon: BsCircleFill,
      name: "Django",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "Bootstrap",
      level: "80",
    },
  ];
  
  export const tools: ISkill[] = [
    {
      Icon: BsCircleFill,
      name: "Figma",
      level: "85",
    },
    {
      Icon: BsCircleFill,
      name: "Photoshop",
      level: "45",
    },
    {
      Icon: BsCircleFill,
      name: "Illustrator",
      level: "60",
    },
    {
      Icon: BsCircleFill,
      name: "Framer",
      level: "45",
    },
  ];