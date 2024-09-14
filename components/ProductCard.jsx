import { cn } from "@/utils/lib";
import Image from "next/image";
import img from "../public/images/img-01.png";
import Link from "next/link";

const ProductCard = ({ className, width, height,src = img }) => {
  return (
    <Link href="/shop/24" className={cn("flex flex-col items-center w-[298px]", className)}>
      <div className="relative h-[298px] w-[298px]" style={{ width, height }}>
        <Image src={src} alt="banner" layout="fill" quality={100} />
      </div>
      <span className="block w-full font-semibold text-lg text-[#222222]">
        {" "}
        [what happen] How to create{" "}
      </span>
      <div className="flex justify-between items-center w-full mt-7">
        <span className="text-[#222222]">2,500 won</span>
        <span className="text-[#666666]">🧡 236</span>
      </div>
    </Link>
  );
};

export default ProductCard;
