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
                <div className="flex flex-col items-start gap-4">
                    <a
                        href="mailto:contact@unmarkedlabelstudios.com"
                        className="text-3xl md:text-4xl font-bold text-[#333] hover:text-[#02ff12] transition-colors"
                    >
                        contact@unmarkedlabelstudios.com
                    </a>
                    <a
                        href="mailto:appointments@unmarkedlabelstudios.com"
                        className="text-3xl md:text-4xl font-bold text-[#333] hover:text-[#02ff12] transition-colors"
                    >
                        appointments@unmarkedlabelstudios.com
                    </a>
                    <a
                        href="mailto:help@unmarkedlabelstudios.com"
                        className="text-3xl md:text-4xl font-bold text-[#333] hover:text-[#02ff12] transition-colors"
                    >
                        help@unmarkedlabelstudios.com
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

