import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-24">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex justify-between gap-3 flex-col sm:flex-row">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              {/* <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
              <img
                src="/liveyst.svg"
                className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary"
              />

              <h3 className="text-2xl text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Liveyst
              </h3>
            </Link>
          </div>

          <div className="flex gap-2">
            <div>
              <Link href="/generate" className="opacity-60 hover:opacity-100">
                Generate
              </Link>
            </div>

            <div>
              <Link href="/#benefits" className="opacity-60 hover:opacity-100">
                Benefits
              </Link>
            </div>

            <div>
              <a href="https://deepmakhasana.netlify.app/" target="_blank" className="opacity-60 hover:opacity-100">
                Contact
              </a>
            </div>

            <div>
              <Link href="/#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} Designed and developed by
            <Link
              target="_blank"
              href="https://deepmakhasana.netlify.app/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Deep Makhasana
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
