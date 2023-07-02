import { useEffect, useState } from 'react';

export const useFadeInOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    


    useEffect(() => {
        
        const checkScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    return isVisible ? 'fade-in' : '';
};
