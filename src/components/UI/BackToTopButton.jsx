import { useEffect } from "react";
import { useState } from "react";
import {BiUpArrow} from "react-icons/bi"

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return (
        backToTopButton && (
            <div className="fixed flex justify-center align-center bottom-3 right-4 w-12 h-12 rounded-full btn btn-primary" onClick={scrollUp}>
                <BiUpArrow />
            </div>
        )
    );
}

export default BackToTopButton;