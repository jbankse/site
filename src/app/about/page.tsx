import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'ABOUT',
    description: 'Learn about UNMARKED LABEL STUDIOS - a contemporary design studio and art-lifestyle brand.',
};

export default function AboutPage() {
    return (
        <main className="h-dvh flex flex-col bg-white overflow-hidden">
            <Navigation showHomeLink showLogo />
            <section className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
                <div className="max-w-2xl">
                    <p className="text-base text-[#333] leading-relaxed">
                        UNMARKED LABEL / UNMARKED LABEL STUDIOS is a contemporary design studio and art-lifestyle brand dedicated to expanding the boundaries of abstract thought and visual language.
                    </p>
                </div>
                <div className="max-w-2xl">
                    <p className="text-base text-[#333] leading-relaxed">
                        The studio approaches design as an evolving dialogue—blending experimentation, unconventional materials, and non-linear processes to create work that resists easy classification. Rather than following established aesthetics or seasonal norms, UNMARKED LABEL focuses on exploration as a principle, producing garments and visual works that exist between art, design, and culture.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
