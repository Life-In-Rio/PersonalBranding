
import "./loadingscreen.css";

function LoadingScreen({ onComplete }) {
  const handleAnimationEnd = (event) => {
    if (event.animationName === "loading-zoom") {
      onComplete();
    }
  };

  return (
    <div className="loading-screen">
      <h1
        className="loading-text"
        onAnimationEnd={handleAnimationEnd}
      >
        B.E PROFILE.
      </h1>
    </div>
  );
}

export default LoadingScreen;
