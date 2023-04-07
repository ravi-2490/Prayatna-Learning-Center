import MiniGallery from "./MiniGallery";
import WebGallery from "./WebGallery";
import { useEffect, useState } from "react";

function Gallery() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Update the state based on the window width
  const updateWindowSize = () => {
    setIsLargeScreen(window.innerWidth >= 768); // Set breakpoint for large screen
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", updateWindowSize);

    // Initial window size check
    updateWindowSize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);
  return (
    <section id="gallery">
      <div>{isLargeScreen ? <WebGallery /> : <MiniGallery />}</div>
    </section>
  );
}

export default Gallery;
