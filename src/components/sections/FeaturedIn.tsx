import { useEffect, useRef } from "react";

const FeaturedIn = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const publications = [
    "TechCrunch",
    "Wired",
    "The Verge",
    "Forbes",
    "Engadget",
  ];

  return (
    <section ref={sectionRef} className="scroll-reveal py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-8">Featured In</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {publications.map((pub) => (
            <span key={pub} className="text-xl font-light tracking-tight">
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
