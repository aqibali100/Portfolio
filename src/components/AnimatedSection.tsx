'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

type AnimatedSectionProps = {
    children: ReactNode;
    delay?: number;
    y?: number;
    once?: boolean;
    className?: string;
} & MotionProps;

export default function AnimatedSection({
    children,
    delay = 0,
    y = 50,
    once = true,
    className = '',
    ...rest
}: AnimatedSectionProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // For mobile, use simpler animation with better viewport settings
    const mobileViewport = {
        once: false, // Allow re-triggering
        amount: 0.1, // Lower threshold
        margin: "0px 0px -10% 0px" // Trigger earlier
    };

    const desktopViewport = {
        once,
        amount: 0.2
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: isMobile ? 20 : y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? mobileViewport : desktopViewport}
            transition={{
                duration: isMobile ? 0.4 : 0.6,
                ease: 'easeOut',
                delay: isMobile ? delay * 0.5 : delay, // Shorter delays on mobile
            }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    );
}