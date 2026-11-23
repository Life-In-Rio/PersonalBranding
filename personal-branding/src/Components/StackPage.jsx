import { useEffect, useRef, useState } from "react";

function StackPage({ children, zIndex = 1, className = "" }) {
  const pageRef = useRef(null);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    const updateTop = () => {
      const windowHeight = window.innerHeight;
      const contentHeight = el.offsetHeight;

      if (contentHeight > windowHeight) {
        // Mengunci halaman tepat saat bagian bawahnya selesai di-scroll
        setStickyTop(windowHeight - contentHeight);
      } else {
        setStickyTop(0);
      }
    };

    updateTop();

    const resizeObserver = new ResizeObserver(updateTop);
    resizeObserver.observe(el);
    window.addEventListener("resize", updateTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTop);
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className={`stack-page ${className}`}
      style={{
        position: "sticky",
        top: `${stickyTop}px`,
        zIndex,
      }}
    >
      {children}
    </div>
  );
}

export default StackPage;