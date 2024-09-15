import { cn } from "@/utils/lib";
import Image from "next/image";
import img from "../public/images/img-01.png";
import Link from "next/link";

const ProductCard = ({ className, src = img }) => {
  return (
    <Link href="/shop/24" className={cn("flex flex-col items-center w-[300px]", className)}>
      <div className="relative w-full aspect-square">
        <Image src={src} alt="product" layout="fill" objectFit="cover" quality={100} />
      </div>
      <span className="block w-full font-semibold text-lg text-[#222222] mt-2">
        [what happen] How to create
      </span>
      <div className="flex justify-between items-center w-full mt-4">
        <span className="text-[#222222]">2,500 won</span>
        <span className="text-[#666666]">🧡 236</span>
      </div>
    </Link>
  );
};

export default ProductCard;
