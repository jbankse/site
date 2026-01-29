"use client";

interface GalleryItem {
    id: number;
    // Future CMS fields
    // imageUrl?: string;
    // title?: string;
    // description?: string;
}

interface GalleryProps {
    /** Additional CSS classes for the gallery section */
    className?: string;
}

// Generate placeholder items - will be replaced with CMS data
function generatePlaceholderItems(count: number): GalleryItem[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
    }));
}

export default function Gallery({ className = "" }: GalleryProps) {
    // Placeholder data - will be replaced with CMS integration
    const items = generatePlaceholderItems(50);

    return (
        <section className={`flex-1 overflow-hidden ${className}`}>
            <div className="h-full overflow-y-auto">
                <div className="w-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-6">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="aspect-[4/5] bg-[#e5e5e5] hover:bg-[#d4d4d4] transition-colors cursor-pointer"
                            >
                                {/* 
                                    Future CMS content will go here:
                                    - Image
                                    - Title overlay
                                    - Hover effects
                                */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
