interface NavigationProps {
    showHomeLink?: boolean;
    showLogo?: boolean;
}

export default function Navigation({ showHomeLink = false, showLogo = false }: NavigationProps) {
    return (
        <nav className="px-6 py-4 grid grid-cols-3 items-center">
            {/* Left - Home Link */}
            <div>
                {showHomeLink && (
                    <a
                        href="/"
                        className="text-sm uppercase tracking-wide text-[#333] hover:text-[#02ff12] transition-colors"
                    >
                        Home
                    </a>
                )}
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center">
                <a
                    href="/"
                    className={`text-base uppercase tracking-wide text-[#333] font-bold ${showLogo ? '' : 'invisible pointer-events-none'}`}
                >
                    UNMARKED LABEL
                </a>
            </div>

            {/* Right - Buy Link */}
            <div className="flex justify-end">
                <a
                    href="/buy"
                    className="text-sm uppercase tracking-wide text-[#333] hover:text-[#02ff12] transition-colors"
                >
                    Buy
                </a>
            </div>
        </nav>
    );
}

