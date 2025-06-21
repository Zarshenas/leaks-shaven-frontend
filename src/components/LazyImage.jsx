import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative">
      {!loaded && <Skeleton className={className} />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
export default LazyImage;