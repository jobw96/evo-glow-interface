import { useEffect, useRef } from "react";
import watchMockup from "@/assets/watch-ui-mockup.jpg";

const ProductShowcase = () => {
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
      const elements = sectionRef.current.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal glass-card rounded-3xl overflow-hidden p-8 md:p-16">
          <img
            src={watchMockup}
            alt="EvoTrack Watch Interface"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
