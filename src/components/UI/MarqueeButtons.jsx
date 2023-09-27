import { useEffect, useRef } from 'react';
import Button from '../UI/Button';
import languages from '../data/languages.json';
import anime from 'animejs';

const MarqueeButtons = () => {
    const marqueeRef = useRef(null);
    let animationInstance = null;
    const { main: mainLanguages } = languages;

    useEffect(() => {
    const marquee = marqueeRef.current;

    const animationProperties = {
      targets: marquee,
      translateX: ['-100%', '0%'], // Animate from left to right
      duration: 10000, // Animation duration in milliseconds (adjust as needed)
      loop: true, // Infinite loop
    //   autoplay: true, // Automatically start the animation
      easing: 'linear', // Linear easing for smooth movement
    };

    animationInstance = anime(animationProperties);

    
 
});


    
    
  return (
    <div className="flex items-center justify-center">
  <div className="flex w-[75%] overflow-hidden">
  <div className="marquee flex" ref={marqueeRef}>
    {mainLanguages.map((lang) => {
      return <Button lang={lang} key={lang} />;
    })}
    </div>
  </div>
  
</div>
  )
}


export default MarqueeButtons