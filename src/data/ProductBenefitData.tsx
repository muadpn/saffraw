import { SaffFlower } from "@/Assets";
import SaffronOverlay from "@/components/Overlay/SaffronOverlay";
import ShilajitOverlay from "@/components/Overlay/ShilajitOverlay";
import WallnutOverlay from "@/components/Overlay/WallnutOverlay";
import { Apple, LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import {
  MdHealthAndSafety,
  MdOutlineFoodBank,
  MdOutlineMood,
} from "react-icons/md";
import { SiMoleculer } from "react-icons/si";

export const Benifits: BenefitsData[] = [
  {
    Overlay: <SaffronOverlay />,
    id: "1111",
    titleImage: {
      available: true,
      image: "SaffronString.png",
    },
    title: {
      first: "Saffron - Kashmir`s",
      colored: "Golden",
      last: "Essence",
    },
    badge: {
      first: "Red",
      second: "Gold",
    },
    Benefit: [
      {
        icon: MdOutlineFoodBank,
        title:
          "Enhance your dishes with Kashmiri saffron — perfect for biryanis, desserts, and beverages!",
      },
      {
        icon: SiMoleculer,
        title:
          "Saffron's antioxidants, crocin and safranal, can reduce stress and inflammation by neutralizing free radicals.",
      },
      {
        icon: MdOutlineMood,
        title:
          "Antidepressant properties may boost mood by influencing brain serotonin levels, enhancing mental well-being.",
      },
      {
        icon: MdHealthAndSafety,
        title:
          "Women use saffron for menstrual cramps and PMS. Men use it to address premature ejaculation and infertility concerns.",
      },
    ],
    image: "SaffronFlower.jpg",
    color: "bg-duoColor",
    textColor: "text-duoColor",
    Enquire: {
      contact: true,
      textColor: "text-black",
      color: "bg-duoColor",
    },
    GITag: true,
    QualityGuarentee: true,
  },
  {
    Overlay: <ShilajitOverlay />,
    id: "1112",
    title: {
      first: "Shilajit - Nature's Nectar ",
      colored: "Dark Elixir",
      last: "of the Himalayas",
    },
    badge: {
      first: "Black",
      second: "Bitumen",
    },
    Benefit: [
      {
        icon: SiMoleculer,
        title:
          "Packed with antioxidants, Shilajit supports a healthy immune system and helps combat oxidative stress, promoting overall well-being.",
      },
      {
        icon: MdOutlineMood,
        title:
          "Shilajit enhances stamina and fights fatigue, providing a sustained energy boost for improved physical and mental performance.",
      },
      {
        icon: MdHealthAndSafety,
        title:
          "Shilajit is known to enhance male reproductive health, promoting testosterone levels and supporting fertility.",
      },
      {
        icon: MdOutlineFoodBank,
        title:
          "Add a pinch of Shilajit to your morning coffee or tea for a unique earthy flavor and an extra boost of natural energy.",
      },
    ],
    image: "Shilajit.jpg",
    color: "bg-secondary",
    textColor: "text-duoColor",
    Enquire: {
      contact: true,
      color: "bg-secondary",
      textColor: "text-white",
    },
    GITag: true,
    QualityGuarentee: true,
  },

  {
    Overlay: <WallnutOverlay />,
    id: "1113",
    // titleImage: {
    //   available: true,
    //   image: "SaffronString.png",
    // },
    title: {
      first: "Snow White Walnuts - A ",
      colored: "Delicate Winter",
      last: "Harvest",
    },
    // badge: {
    //   first: "White",
    //   second: "Nut",
    // },
    Benefit: [
      {
        icon: SiMoleculer,
        title:
          "Walnuts are a potent source of antioxidants, combating oxidative stress and inflammation to support overall well-being.",
      },
      {
        icon: MdOutlineFoodBank,
        title:
          "Enhance your dishes with Kashmiri saffron — perfect for biryanis, desserts, and beverages!",
      },
      {
        icon: MdOutlineMood,
        title:
          "Beyond healthy fats, walnuts provide essential nutrients like vitamin E, manganese, and biotin, contributing to overall nutritional balance.",
      },
      {
        icon: MdHealthAndSafety,
        title:
          "Walnuts are rich in omega-3 fatty acids, promoting heart health by reducing cholesterol levels and supporting optimal cardiovascular function.",
      },
    ],
    image: "WalnutBasket.jpg",
    color: "bg-primary",
    textColor: "text-white font-medium",
    Enquire: {
      contact: true,
      textColor: "text-black",
      color: "bg-primary",
    },
    GITag: true,
    QualityGuarentee: true,
  },
];

export type BenefitsData = {
  Overlay?: JSX.Element;
  id: string;
  titleImage?: {
    available: true;
    image: string;
  };
  title: {
    first: string;
    colored: string;
    last: string;
  };
  badge?: {
    first: string;
    second: string;
  };
  Benefit: {
    icon: IconType | LucideIcon;
    title: string;
  }[];
  color: string;
  image: string;
  textColor?: string;
  GITag: boolean;
  Enquire: {
    contact: true;
    textColor: string;
    color: string;
  };
  QualityGuarentee: boolean;
};
