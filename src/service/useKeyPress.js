import { useEffect, useState } from "react";

const useKeyPress = (keyTarget, action = () => {}) => {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const downHandler = ({ key }) => {
        if (key === keyTarget) setIsKeyPressed(true);
    }

    const upHandler = ({ key }) => {
        if (key === keyTarget) {
            setIsKeyPressed(false);
            action();
        };
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        }
    })

    return isKeyPressed;
}

export default useKeyPress;