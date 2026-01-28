import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'WORKS',
    description: 'View our portfolio and past work at UNMARKED LABEL STUDIOS.',
};

export default function WorkPage() {
    return (
        <main className="h-dvh flex flex-col bg-white overflow-hidden">
            <Navigation showHomeLink showLogo />
            <Gallery />
            <Footer />
        </main>
    );
}


