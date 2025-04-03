import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";

export const metadata = {
  title: "Easy and Free UPI Payment Link Generator | Liveyst",
  description:
    "Tired of sharing your QR Code or UPI ID manually? Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, works with all UPI apps.",
  keywords: [
    "upi payment link generator",
    "free upi payment link generator",
    "easy upi payment link",
    "how to create upi payment link",
    "one click upi payment link",
    "upi payment link by liveyst",
  ],
  openGraph: {
    type: "website",
    title: "Easy and Free UPI Payment Link Generator | Liveyst",
    description:
      "Tired of sharing your QR Code or UPI ID manually? Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, works with all UPI apps.",
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
    title: "Easy and Free UPI Payment Link Generator | Liveyst",
    description:
      "Tired of sharing your QR Code or UPI ID manually? Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, works with all UPI apps.",
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      <CommunitySection />
      {/* <PricingSection /> */}
      {/* <ContactSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
