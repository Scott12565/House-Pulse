"use client";

import Link from "next/link";
import { UploadCloud, BarChart3 } from "lucide-react";

export default function ForArtists() {
    return (
        <section className="w-full bg-ink-black py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-20">

                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
                        Built for Artists
                    </h2>
                    <p className="text-text-muted mt-2">
                        Everything you need to upload, grow, and earn from your music.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Upload Card */}
                    <div className="bg-dark-matter p-8 rounded-2xl hover:scale-[1.02] transition duration-300 group">

                        <div className="mb-4">
                            <UploadCloud className="text-cyan-echo group-hover:scale-110 transition" size={32} />
                        </div>

                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                            Upload Your Music
                        </h3>

                        <p className="text-text-muted mb-6">
                            Drop your tracks, albums, and sounds in minutes. No gatekeepers.
                        </p>

                        <Link
                            href="/upload"
                            className="text-cyan-echo font-medium hover:underline"
                        >
                            Start Uploading →
                        </Link>
                    </div>

                    {/* Earn Card */}
                    <div className="bg-dark-matter p-8 rounded-2xl hover:scale-[1.02] transition duration-300 group">

                        <div className="mb-4">
                            <BarChart3 className="text-cyan-echo group-hover:scale-110 transition" size={32} />
                        </div>

                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                            Track & Earn
                        </h3>

                        <p className="text-text-muted mb-6">
                            Monitor plays, grow your audience, and earn directly from your music.
                        </p>

                        <Link
                            href="/dashboard"
                            className="text-cyan-echo font-medium hover:underline"
                        >
                            View Dashboard →
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}