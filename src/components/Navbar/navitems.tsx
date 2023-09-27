import {
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoNodejs,
    BiLogoTailwindCss,
    BiLogoMongodb,
    BiLocationPlus,
  } from "react-icons/bi";
  import { AiOutlineConsoleSql } from "react-icons/ai";
  import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiExpress } from "react-icons/si";
  interface NavItem {
    id: string;
    name: string;
    type: string;
    href: string;
    submenu?: SubmenuItem[];
  }
  
  interface SubmenuItem {
    id: string;
    name: string;
    icon: React.ReactNode; // Assuming icons are React components
  }
  
  export const navItems: NavItem[] = [
    {
      id: crypto.randomUUID(),
      name: "HOME",
      type: "list",
      
      href: "/",
    },
    {
      id: crypto.randomUUID(),
      name: "SKILLS",
      type: "list",
      
      href: "",
      submenu: [
        {
          id: crypto.randomUUID(),
          name: "CSS",
          icon: <BiLogoCss3 size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Javascript",
          icon: <BiLogoJavascript size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "React",
          icon: <BiLogoReact size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Next",
          icon: <TbBrandNextjs size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Node",
          icon: <BiLogoNodejs size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Mongo",
          icon: <BiLogoMongodb size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Express",
          icon: <SiExpress size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Prisma",
          icon: <AiOutlineConsoleSql size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Tailwind",
          icon: <BiLogoTailwindCss size={22} />,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "LOCATION",
      type: "list",
      
      href: "",
      submenu: [
        {
          id: crypto.randomUUID(),
          name: "Gacha Road,Borobari,Gazipur-1703",
          icon: <BiLocationPlus size={22} />,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "SOCIALS",
      type: "list",
      
      href: "/",
      submenu: [
        {
          id: crypto.randomUUID(),
          name: "Facebook",
          icon: <BsFacebook size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Github",
          icon: <BsGithub size={22} />,
        },
        {
          id: crypto.randomUUID(),
          name: "Linkedin",
          icon: <BsLinkedin size={22} />,
        },
      ],
    },
  ];