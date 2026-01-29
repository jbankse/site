"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Direct DOM manipulation for performance (avoids React render cycle)
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                // translate3d for hardware acceleration
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            {/* Hide default cursor only on devices with fine pointers (mouse) */}
            <style jsx global>{`
                @media (pointer: fine) {
                    * {
                        cursor: none !important;
                    }
                }
            `}</style>

            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-[#02ff12] pointer-events-none z-[9999] hidden md:block"
                style={{
                    // Center the square on the cursor position
                    marginTop: '-8px',
                    marginLeft: '-8px'
                }}
            />
        </>
    );
}
