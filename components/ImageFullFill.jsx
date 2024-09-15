import { cn } from "@/utils/lib";
import Image from "next/image";

const ImageFullFill = ({ src, height, width, zIndex, alt = "image", className }) => {
    return (
      <div
        className={cn("relative", className)}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          zIndex
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
          sizes="100vw"
          quality={100}
          className="object-contain"
        />
      </div>
    );
  };

export default ImageFullFill;
