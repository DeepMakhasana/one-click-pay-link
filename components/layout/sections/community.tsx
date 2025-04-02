import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section id="community">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                {/* <img src="/upi-icon.svg" className="w-32 h-32" /> */}
                <div>
                  Create & Share UPI Payment
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Links in Seconds!
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[92%] text-xl text-muted-foreground">
              Start using UPI Payment Links today and make transactions effortless! 🚀
            </CardContent>

            <CardFooter>
              <Button className="font-bold group/arrow">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
