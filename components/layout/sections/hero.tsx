"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:pt-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Want to</Badge>
            </span>
            <span> Simplify UPI collection! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              One click
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">UPI</span>
              payment link Generator
            </h1>
          </div>

          <p className="max-w-screen-sm text-lg mx-auto text-muted-foreground">
            {`Start Collecting Payments Easily! Try our UPI Payment Link Generator now and simplify your transactions.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href={"/generate"}>
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Generate
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={"#benefits"}></Link>
            <Button asChild variant="secondary" className="w-5/6 md:w-1/4 font-bold">
              <Link href="#benefits">Why use this?</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="w-full flex flex-col-reverse justify-evenly gap-10 items-center md:flex-row pb-5">
            <div className="z-10">
              <h2 className="text-4xl font-bold mb-4">How easy to pay way mobile!</h2>
              <p className="max-w-screen-sm text-lg mx-auto text-muted-foreground mb-6">
                {`Tired of sharing your QR Code or UPI ID manually? Generate a secure UPI payment link in just a few clicks and start receiving payments instantly. Works seamlessly with Google Pay, PhonePe, Paytm, and all UPI apps.`}
              </p>
              <ul className="list-decimal ml-4 flex flex-col gap-2">
                <li>Hassle-Free Payments 🏦</li>
                <li>Faster Transactions ⚡</li>
                <li>Universal Compatibility 📱</li>
                <li>Safe & Secure 🔒</li>
              </ul>
            </div>
            <img
              className="max-w-72 mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
              src={"/hero-gif.gif"}
              alt="how to pay using upi link?"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>

        {/* <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="w-full flex flex-col-reverse justify-evenly gap-10 items-center pb-14 md:flex-row">
            <img
              className="max-w-72 mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
              src={theme === "light" ? "/hero-image.png" : "/hero-image.png"}
              alt="dashboard"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4">How to create and share upi link?</h2>
              <p className="max-w-screen-sm text-lg mx-auto text-muted-foreground">
                {`Tired of sharing your QR Code or UPI ID manually? Generate a secure UPI payment link in just a few clicks and start receiving payments instantly. Works seamlessly with Google Pay, PhonePe, Paytm, and all UPI apps.`}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div> */}
      </div>
    </section>
  );
};
