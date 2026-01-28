import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="px-6 py-8">
            <div className="grid grid-cols-2 gap-6">
                {/* Left - Site Links */}
                <nav className="flex flex-col gap-2 text-sm uppercase tracking-wide">
                    <Link href="/work" className="text-[#333] hover:text-[#02ff12] transition-colors w-fit">
                        Works
                    </Link>
                    <a href="/about" className="text-[#333] hover:text-[#02ff12] transition-colors w-fit">
                        About
                    </a>
                    <a href="/contact" className="text-[#333] hover:text-[#02ff12] transition-colors w-fit">
                        Contact
                    </a>
                </nav>

                {/* Right - Social Links */}
                <nav className="flex flex-col gap-2 text-sm uppercase tracking-wide text-right">
                    <a href="https://instagram.com/unmarkedlabel" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-[#02ff12] transition-colors ml-auto">
                        Instagram
                    </a>
                    <a href="#" className="text-[#333] hover:text-[#02ff12] transition-colors ml-auto">
                        Twitter
                    </a>
                    <a href="#" className="text-[#333] hover:text-[#02ff12] transition-colors ml-auto">
                        LinkedIn
                    </a>
                </nav>
            </div>

            {/* Bottom Spacing */}
            <div className="h-6 w-full"></div>
        </footer>
    );
}
