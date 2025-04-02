import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is a UPI Payment Link?",
    answer:
      "A UPI Payment Link is a unique URL that allows users to make payments directly to your UPI ID with a single tap. It eliminates the need to manually enter UPI IDs or amounts.",
    value: "item-1",
  },
  {
    question: "Is it safe to use a UPI Payment Link?",
    answer:
      "Yes! UPI payments are secure and processed directly between the sender and receiver through banking networks. There is no third-party interference, making it safe and reliable.",
    value: "item-2",
  },
  {
    question: "Can I use this for business transactions?",
    answer:
      "Absolutely! Freelancers, small business owners, and service providers can easily collect payments by sharing UPI payment links with their customers.",
    value: "item-3",
  },
  {
    question: "Do users need to enter the amount manually?",
    answer:
      "No, you can pre-set the amount while generating the link, making it easier for users to complete payments without any manual entry.",
    value: "item-4",
  },
  {
    question: "Is there any fee for using this UPI Payment Link Generator?",
    answer: "No, this tool is completely free to use! There are no hidden charges or transaction fees.",
    value: "item-5",
  },
  {
    question: "Can I track payments made through the UPI link?",
    answer:
      "Yes! You can check your UPI app’s transaction history to track payments made through the shared link and confirm by bill number.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-24">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">Common Questions</h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
