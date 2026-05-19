'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartProvider';
import Image from 'next/image';

export default function Checkout() {
  const { cartItems, removeFromCart } = useCart();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  // Error State
  const [errors, setErrors] = useState({});

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, track) => {
    return acc + Number(track.priceZar || 0);
  }, 0);

  // 5% Service Fee
  const serviceFee = subtotal * 0.05;

  // Final Total
  const total = subtotal + serviceFee;

  // Validation
  const validateCheckout = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    }

    if (!formData.expiry.trim()) {
      newErrors.expiry = 'Expiry date is required';
    }

    if (!formData.cvc.trim()) {
      newErrors.cvc = 'CVC is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Checkout Handler
  const handleCheckout = async () => {
    const isValid = validateCheckout();

    if (!isValid) return;

    if(!cartItems.length === 0) return;

    // payment processing logic
    try {
      // fetch data
      const res = await fetch('api/payfast/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          items: cartItems.map(track => ({
            trackId: track._id,
            title: track.title,
            artistName: track.artistName,
            price: Number(track.priceZar).toFixed(2)
          })),
          subtotal,
          serviceFee,
          total
        })
      });

      const data = await res.json();

      if(data.payFastURL) {
        window.location.href = data.payFastURL;
      } else {
        console.log('No payfast URL returned');
      }
    } catch (error) {
      console.error('Error occurred while processing payment:', error);
    }
  };

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

                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
                  />

                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
                  />

                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* Payment */}
            <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 sm:p-6">

              <h2 className="text-xl font-semibold mb-5">
                Payment Method
              </h2>

              <div className="space-y-4">

                <div>
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cardNumber: e.target.value,
                      })
                    }
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
                  />

                  {errors.cardNumber && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          expiry: e.target.value,
                        })
                      }
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
                    />

                    {errors.expiry && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.expiry}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cvc: e.target.value,
                        })
                      }
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
                    />

                    {errors.cvc && (
                      <p className="text-red-400 text-sm mt-2">
                        {errors.cvc}
                      </p>
                    )}
                  </div>

                </div>

              </div>

              <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition py-4 rounded-xl font-semibold text-sm sm:text-base"
              >
                Continue To Payment
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <aside className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 sm:p-6 h-fit xl:sticky xl:top-28">

            <h2 className="text-2xl font-semibold mb-6">
              Your Order
            </h2>

            {/* Empty Cart */}
            {cartItems.length === 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-sm text-gray-400">
                Your cart is empty.
              </div>
            )}

            {/* Track Items */}
            {cartItems?.map((track) => (
              <div
                key={track._id}
                className="flex items-start gap-4 border-b border-white/10 pb-5 mb-5"
              >

                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">

                  <Image
                    src={track.coverImageUrl}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="flex-1 min-w-0">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-semibold truncate text-base">
                        {track.title}
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        {track.artistName}
                      </p>

                      <p className="text-sm text-purple-400 mt-2">
                        Digital Download
                      </p>

                    </div>

                    <div className="flex flex-col items-end gap-3">

                      <p className="font-semibold text-white whitespace-nowrap">
                        R{Number(track.priceZar).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeFromCart(track._id)}
                        className="text-xs text-red-400 hover:text-red-300 transition"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

            {/* Totals */}
            <div className="space-y-4">

              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>R{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-400 text-sm">
                <span>Service Fee (5%)</span>
                <span>R{serviceFee.toFixed(2)}</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>

                <span className="text-purple-400">
                  R{total.toFixed(2)}
                </span>
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