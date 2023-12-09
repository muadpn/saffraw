import {
  SaffronBottle,
  WallnutBasket,
  WallnutsKernels,
  SaffronStrand,
  Shilajit,
  Almonds,
  SnowWhiteWalnut,
} from "@/Assets";
import { uuid } from "uuidv4";
// import { FeaturedData } from "@/types/types";

export const FeatureProduct = [
  {
    id: uuid(),
    Featuredimage: {
      image: SaffronBottle,
      altTag: "Saffron in bottle",
    },
    title: "Mongra Saffron",
    varients: ["1g", "5g", "10g"],
    price: "285",
  },
  {
    id: uuid(),
    Featuredimage: {
      image: WallnutBasket,
      altTag: "Wallnut in Basket",
    },
    title: "Wallnuts(Shell)",
    varients: ["1g", "5g", "10g"],
    price: "499",
  },
  {
    id: uuid(),
    Featuredimage: {
      image: WallnutsKernels,
      altTag: "Wallnut Kernals",
    },
    title: "Wallnuts (Kernals only)",
    varients: ["1g", "5g", "10g"],
    price: "599",
  },
  {
    id: uuid(),
    Featuredimage: {
      image: Shilajit,
      altTag: "Shilajit",
    },
    title: "Shilajth",
    varients: ["100g", "200g", "500g"],
    price: "899",
  },
  {
    id: uuid(),
    Featuredimage: {
      image: SaffronStrand,
      altTag: "Saffron Strands",
    },
    title: "Saffron",
    varients: ["1g", "5g", "10g"],
    price: "285",
  },
  {
    id: uuid(),
    Featuredimage: {
      image: Almonds,
      altTag: "Almonds full",
    },
    title: "Almonds",
    varients: ["500g", "1kg", "2kg"],
    price: "499",
  },
];
