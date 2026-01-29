"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Drawer from './Drawer';

interface NavigationProps {
    showHomeLink?: boolean;
    showLogo?: boolean;
}

export default function Navigation({ showHomeLink = false, showLogo = false }: NavigationProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <nav className="px-6 py-4 grid grid-cols-3 items-center relative z-50">
                {/* Left - Home/Menu Link */}
                <div>
                    {showHomeLink && (
                        <>
                            {/* Desktop: Home link */}
                            <a
                                href="/"
                                className="text-sm uppercase tracking-wide text-[#333] link-blur hidden md:block"
                            >
                                Home
                            </a>
                            {/* Mobile: Menu button */}
                            <a
                                onClick={toggleDrawer}
                                className="text-sm uppercase tracking-wide text-[#333] link-blur md:hidden cursor-pointer"
                            >
                                {isDrawerOpen ? 'Close' : 'Menu'}
                            </a>
                        </>
                    )}
                </div>

                {/* Center - Logo */}
                <div className="flex justify-center">
                    <a
                        href="/"
                        className={`text-base uppercase tracking-wide text-[#333] font-bold whitespace-nowrap ${showLogo ? '' : 'invisible pointer-events-none'}`}
                    >
                        UNMARKED LABEL
                    </a>
                </div>

                {/* Right - Buy Link */}
                <div className="flex justify-end">
                    <a
                        href="/buy"
                        className="text-sm uppercase tracking-wide text-[#333] link-blur hidden md:block"
                    >
                        Buy
                    </a>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        </>
    );
}
