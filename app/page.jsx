import { images } from "@/utils/constants";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          alt={image.alt}
          width={400}
          height={800}
        />
      ))}
    </div>
  );
};

export default page;
