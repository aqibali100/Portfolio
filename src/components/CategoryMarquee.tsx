import React from "react";

type MarqueeRowProps = {
    items: string[];
    reverse?: boolean;
    speed?: number;
};

function MarqueeRow({ items, reverse = false, speed = 40 }: MarqueeRowProps) {
    const loopItems = [...items, ...items];

    return (
        <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16" />

            <div
                className={[
                    "flex w-max gap-8 whitespace-nowrap",
                    reverse ? "animate-marquee-reverse" : "animate-marquee",
                    "motion-reduce:animate-none",
                ].join(" ")}
                style={{ ["--marquee-duration" as any]: `${speed}s` }}
                aria-label="Scrolling categories"
            >
                {loopItems.map((text, idx) => (
                    <div
                        className="flex-shrink-0 px-6 py-3 rounded-full border border-[#22f2ef]/50 text-white font-bold hover:border-[#22f2ef] group hover:border-[#22f2ef] hover:bg-[#22f2ef]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#22f2ef]/20"
                    >
                        <span
                            key={`${text}-${idx}`}
                            className="text-white font-medium whitespace-nowrap transition-colors duration-300">
                            {text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CategoryMarquee() {
    const row1 = [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'JavaScript', 'php', 'laravel', "wordpress",
        'Tailwind CSS', 'MongoDB',
    ];

    const row2 = [
        'PostgreSQL', 'AWS', 'Docker', 'Git', 'Express.js', 'GraphQL', 'Redis', 'Firebase', 'Vercel',
        'React Native', 'Flutter', 'FastAPI', 'MySQL', 'Prisma'
    ];

    return (
        <section className="w-full py-10 space-y-6 pt-0">
            <MarqueeRow items={row1} speed={39.84} />
            <MarqueeRow items={row2} reverse speed={57.86} />
            <MarqueeRow items={row1} speed={30.84} />
        </section>
    );
}
