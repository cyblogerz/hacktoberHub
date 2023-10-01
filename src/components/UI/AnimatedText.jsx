import { useRef,useEffect } from 'react';
import anime from 'animejs';
import PropTypes from 'prop-types';


function AnimatedText({lang}) {
  const textRef = useRef(null);

  useEffect(() => {
    // Define the text you want to type
    const textToType = `${lang}_`;

    // Use Anime.js to animate the typing effect
    anime({
      targets: textRef.current,
      opacity: 1,
      translateY: [-10, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 100,
      begin: () => {
        // Set initial text content to an empty string
        textRef.current.textContent = '';
      },
      update: (anim) => {
        // Calculate the index of the current character
        const currentIndex = Math.floor(
          (textToType.length * anim.progress) / 100
        );

        // Update the text content with characters up to the current index
        textRef.current.textContent = textToType.slice(0, currentIndex);
      },
    });
  }, []);

  return (
    <div>
      <p
        ref={textRef}
        style={{ opacity: 0, transform: 'translateY(-10px)' }}
      ></p>
    </div>
  );
}

AnimatedText.propTypes= {
    lang: PropTypes.string
}

export default AnimatedText;
