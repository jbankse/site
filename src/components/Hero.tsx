"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface BouncingElementProps {
    /** Content to bounce - can be text, image, or any React node */
    children: ReactNode;
    /** Movement speed in pixels per frame (default: 2) */
    speed?: number;
    /** Starting X position in pixels (default: 50) */
    startX?: number;
    /** Starting Y position in pixels (default: 50) */
    startY?: number;
    /** Initial horizontal direction: 1 for right, -1 for left (default: 1) */
    directionX?: 1 | -1;
    /** Initial vertical direction: 1 for down, -1 for up (default: 1) */
    directionY?: 1 | -1;
    /** Optional callback fired when element bounces off an edge */
    onBounce?: (edge: "left" | "right" | "top" | "bottom") => void;
    /** Additional CSS classes for the bouncing element */
    className?: string;
}

export function BouncingElement({
    children,
    speed = 2,
    startX = 50,
    startY = 50,
    directionX = 1,
    directionY = 1,
    onBounce,
    className = "",
}: BouncingElementProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const element = elementRef.current;
        if (!container || !element) return;

        let x = startX;
        let y = startY;
        let dx = speed * directionX;
        let dy = speed * directionY;

        let animationId: number;

        const animate = () => {
            const containerRect = container.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();

            const maxX = containerRect.width - elementRect.width;
            const maxY = containerRect.height - elementRect.height;

            // Update position
            x += dx;
            y += dy;

            // Bounce off edges
            if (x <= 0) {
                dx = Math.abs(dx);
                x = 0;
                onBounce?.("left");
            } else if (x >= maxX) {
                dx = -Math.abs(dx);
                x = maxX;
                onBounce?.("right");
            }

            if (y <= 0) {
                dy = Math.abs(dy);
                y = 0;
                onBounce?.("top");
            } else if (y >= maxY) {
                dy = -Math.abs(dy);
                y = maxY;
                onBounce?.("bottom");
            }

            // Apply transform
            element.style.transform = `translate3d(${x}px, ${y}px, 0)`;

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [speed, startX, startY, directionX, directionY, onBounce]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            <div
                ref={elementRef}
                className={`absolute top-0 left-0 will-change-transform ${className}`}
            >
                {children}
            </div>
        </div>
    );
}

interface HeroProps {
    children?: ReactNode;
    speed?: number;
    onBounce?: (edge: "left" | "right" | "top" | "bottom") => void;
    className?: string;
    /** Additional classes for the bouncing element */
    elementClassName?: string;
}

const TRANSLATIONS = [
    "UNMARKED LABEL",           // English
    "ÉTIQUETTE SANS MARQUE",    // French
    "ETICHETTA SENZA MARCHIO",  // Italian
    "ETIQUETA SIN MARCA",       // Spanish
    "アンマークド・レーベル",      // Japanese
    "언마크드 라벨",             // Korean
    "UNGEKENNZEICHNETES LABEL"  // German
];

export default function Hero({
    children, // Removed default here to rely on internal cycling
    speed = 2,
    onBounce,
    className = "",
    elementClassName = "",
}: HeroProps) {
    const [textIndex, setTextIndex] = useState(0);
    const [isBlurry, setIsBlurry] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start blur out
            setIsBlurry(true);

            // Change text and blur in
            setTimeout(() => {
                setTextIndex((prev) => (prev + 1) % TRANSLATIONS.length);
                setIsBlurry(false);
            }, 300); // 300ms matches transition duration
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentText = TRANSLATIONS[textIndex];

    return (
        <section className={`flex-1 relative ${className}`}>
            <BouncingElement
                speed={speed}
                onBounce={onBounce}
                className={elementClassName}
            >
                <a
                    href="/"
                    className="text-xl uppercase tracking-wide text-[#333] font-bold block"
                    style={{
                        filter: isBlurry ? 'blur(8px)' : undefined,
                        opacity: isBlurry ? 0.5 : undefined
                    }}
                >
                    {currentText}
                </a>
            </BouncingElement>
        </section>
    );
}
