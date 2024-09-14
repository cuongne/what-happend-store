import Image from "next/image";

const ImageFullFill = ({ src, height, width,zIndex }) => {
    return (
      <div
        className="relative"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          zIndex
        }}
      >
        <Image src={src} alt="brand" layout="fill" quality={100} />
      </div>
    );
  };

export default ImageFullFill;
