
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width }}
    />
  );
};

export default AnimationLottie;
