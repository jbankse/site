import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'CONTACT',
    description: 'Get in touch with UNMARKED LABEL STUDIOS for inquiries and collaborations.',
};

export default function ContactPage() {
    return (
        <main className="h-dvh flex flex-col bg-white overflow-hidden">
            <Navigation showHomeLink showLogo />

            <section className="flex-1 flex items-center justify-center px-6">
                <div className="flex flex-col items-center gap-4 w-full max-w-full">
                    <a
                        href="mailto:contact@unmarkedlabelstudios.com"
                        className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] hover:text-[#02ff12] transition-colors break-words text-center w-full"
                    >
                        contact@unmarkedlabelstudios.com
                    </a>
                    <a
                        href="mailto:appointments@unmarkedlabelstudios.com"
                        className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] hover:text-[#02ff12] transition-colors break-words text-center w-full"
                    >
                        appointments@unmarkedlabelstudios.com
                    </a>
                    <a
                        href="mailto:help@unmarkedlabelstudios.com"
                        className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] hover:text-[#02ff12] transition-colors break-words text-center w-full"
                    >
                        help@unmarkedlabelstudios.com
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

