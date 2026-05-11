'use client';

import Image from 'next/image';

export default function Checkout() {
  return (
    <main className="min-h-screen bg-ink-black text-white pt-28">

      {/* Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Checkout
          </h1>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Complete your purchase and get instant access to your music.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Contact */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 sm:p-6">

              <h2 className="text-xl font-semibold mb-5">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />

              </div>
            </div>

            {/* Download Package */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 sm:p-6">

              <h2 className="text-xl font-semibold mb-5">
                Download Package
              </h2>

              <div className="border border-purple-500/40 bg-purple-500/10 rounded-2xl p-5">

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">
                    Digital Download
                  </h3>

                  <span className="text-2xl font-bold">
                    R299
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-gray-300">

                  <li className="flex items-center gap-2">
                    ✓ High Quality MP3
                  </li>

                  <li className="flex items-center gap-2">
                    ✓ Instant Access
                  </li>

                  <li className="flex items-center gap-2">
                    ✓ Secure Download
                  </li>

                  <li className="flex items-center gap-2">
                    ✓ Lifetime Access
                  </li>

                </ul>

              </div>

            </div>

            {/* Payment */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 sm:p-6">

              <h2 className="text-xl font-semibold mb-5">
                Payment Method
              </h2>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />

                <div className="grid grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                  />

                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                  />

                </div>

              </div>

              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl font-semibold text-sm sm:text-base">
                Continue To Payment
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <aside className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 sm:p-6 h-fit xl:sticky xl:top-10">

            <h2 className="text-2xl font-semibold mb-6">
              Your Order
            </h2>

            {/* Track Item */}
            <div className="flex gap-4 border-b border-white/10 pb-5 mb-5">

              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">

                <Image
                  src="/track-cover.jpg"
                  alt="Track Cover"
                  fill
                  className="object-cover"
                />

              </div>

              <div className="flex-1 min-w-0">

                <h3 className="font-semibold truncate">
                  Midnight Drive
                </h3>

                <p className="text-sm text-gray-400">
                  Prod. Kyro
                </p>

                <p className="text-sm text-purple-400 mt-2">
                  Digital Download
                </p>

              </div>

              <p className="font-semibold whitespace-nowrap">
                R299
              </p>

            </div>

            {/* Totals */}
            <div className="space-y-4">

              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>R299</span>
              </div>

              <div className="flex justify-between text-gray-400 text-sm">
                <span>Service Fee</span>
                <span>R10</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>R309</span>
              </div>

            </div>

            {/* Security Box */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-gray-300">
              Your payment information is encrypted and secure.
            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}