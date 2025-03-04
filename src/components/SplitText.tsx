import React, {useEffect, useRef, useState} from "react";
import {animated, useSprings} from "@react-spring/web";

const SplitText = ({
                       text = '',
                       className = '',
                       delay = 100,
                       animationFrom = {opacity: 0, transform: 'translate3d(0,40px,0)'},
                       animationTo = {opacity: 1, transform: 'translate3d(0,0,0)'},
                       easing = 'easeOutCubic',
                       threshold = 0.1,
                       rootMargin = '-100px',
                   }) => {
    const words = text.split(' ').map(word => word.split(''));

    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            {threshold, rootMargin}
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        // @ts-ignore
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next) => {
                    await next(animationTo);
                    animatedCount.current += 1;
                }
                : animationFrom,
            delay: i * delay,
            config: {easing},
        }))
    );

    return (
        <div
            ref={ref}
            className={`split-parent ${className}`}
            style={{
                textAlign: 'center',
                overflow: 'hidden',
                display: 'inline',
                whiteSpace: 'normal',
                wordWrap: 'break-word'
            }}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{display: 'inline-block', whiteSpace: 'nowrap'}}>
                    {word.map((letter, letterIndex) => {
                      const index = words
                          .slice(0, wordIndex)
                          .reduce((acc, w) => acc + w.length, 0) + letterIndex;

                      return (
                          <animated.span
                              key={index}>
                              {letter}
                          </animated.span>
                      );
                    })}
                    <span style={{display: 'inline-block', width: '0.3em'}}>&nbsp;</span>
                </span>
            ))}
        </div>
    );
};

export default SplitText;
