import { useEffect, useRef, useState } from "react";

export default function LoopingVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      autoPlay muted loop playsInline controls preload="none"
      aria-label={label}
      className="block aspect-video w-full bg-black object-contain"
    >
      <a href={src}>Download the clip</a>
    </video>
  );
}
