"use client";

import { useEffect } from 'react';
import Link from 'next/link';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <nav className="flex flex-col gap-6 p-8 pt-20">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="text-2xl font-bold uppercase tracking-wide text-[#333] link-blur w-fit"
                    >
                        Home
                    </Link>
                    <Link
                        href="/work"
                        onClick={onClose}
                        className="text-2xl font-bold uppercase tracking-wide text-[#333] link-blur w-fit"
                    >
                        Works
                    </Link>
                    <Link
                        href="/contact"
                        onClick={onClose}
                        className="text-2xl font-bold uppercase tracking-wide text-[#333] link-blur w-fit"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/buy"
                        onClick={onClose}
                        className="text-2xl font-bold uppercase tracking-wide text-[#333] link-blur w-fit"
                    >
                        Buy
                    </Link>
                </nav>
            </div>
        </>
    );
}
