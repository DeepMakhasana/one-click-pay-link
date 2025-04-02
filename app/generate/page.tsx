import { GenerateSection } from "@/components/layout/sections/generate";
import { FooterSection } from "@/components/layout/sections/footer";
import React from "react";

export const metadata = {
  title: "UPI payment link generator | Liveyst",
  description:
    "Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, Works seamlessly with Google Pay, PhonePe, Paytm, and all UPI apps.",
  openGraph: {
    type: "website",
    title: "UPI payment link generator | Liveyst",
    description:
      "Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, Works seamlessly with Google Pay, PhonePe, Paytm, and all UPI apps.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "upi payment link generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPI payment link generator | Liveyst",
    description:
      "Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, Works seamlessly with Google Pay, PhonePe, Paytm, and all UPI apps.",
    images: ["/opengraph-image.png"],
  },
};

const Generate = () => {
  return (
    <>
      <section id="contact" className="container py-24 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h2 className="text-lg text-primary mb-2 tracking-wider">Create and Share</h2>

              <h2 className="text-3xl md:text-4xl font-bold">Instant UPI Payment Link Generator Easy, Fast & Secure</h2>
            </div>
            <p className="mb-8 text-muted-foreground lg:w-5/6">
              Tired of sharing your UPI ID manually? Generate a secure UPI payment link in just a few clicks and start
              receiving payments instantly. Works seamlessly with Google Pay, PhonePe, Paytm, and all UPI apps.
            </p>

            <ul className="list-decimal ml-4 flex flex-col gap-2">
              <li>Hassle-Free Payments 🏦</li>
              <li>Faster Transactions ⚡</li>
              <li>Universal Compatibility 📱</li>
              <li>Safe & Secure 🔒</li>
            </ul>
          </div>
          <GenerateSection />
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Generate;
