import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovered(!!isClickable);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleFocus = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('focus', handleFocus);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('focus', handleFocus);
        };
    }, [cursorX, cursorY]);

    const isTouchDevice = typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);

    if (isTouchDevice) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Outer Circle (Trailing) */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-teal-500/30 rounded-full flex items-center justify-center mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: isHovered ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.05)',
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            />

            {/* Inner Dot (Instant) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-teal-500 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 0.5 : 1,
                    opacity: isVisible ? 1 : 0
                }}
            />
        </div>
    );
};

export default CustomCursor;
