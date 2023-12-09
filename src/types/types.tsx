// interface {
//   src?: string | StaticImageData
// }
import { StaticImageData } from "next/image";
// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   blurDataURL?: string;
// };

export type FeaturedData = {
  Featuredimage: StaticImageData;
  title: string;
  varients: string[] | string;
  price: string;
};
