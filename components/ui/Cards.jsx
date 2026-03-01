import Image from "next/image";

export default function Card({ tracks }) {
    if (!tracks || tracks.length === 0) return null;

    return (
        <div className="w-[25%] bg-night-slate border border-graphite-frame rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">

            {/* Image Area */}
            <div className="relative h-[220px] w-full bg-dark-matter">
                <Image
                    src={tracks[0].cover}
                    alt={`${tracks[0].title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-text-primary font-semibold text-base">
                            {tracks[0].title}
                        </h3>
                        <p className="text-text-muted text-sm">
                            {tracks[0].artist}
                        </p>
                    </div>

                    {tracks[0].price && (
                        <span className="text-sm bg-dark-matter px-2 py-1 rounded-md border border-shadow-line">
                            {tracks[0].price}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                    <button className="flex-1 text-sm py-2 rounded-md border border-graphite-frame hover:border-cyan-echo transition">
                        Preview
                    </button>

                    <button className="flex-1 text-sm py-2 rounded-md bg-pulse-violet hover:bg-pulse-violet-hover transition text-text-primary">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}