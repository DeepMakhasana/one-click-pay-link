"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Bot, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

const formSchema = z.object({
  businessName: z.string().optional(),
  invoiceNumber: z.string(), // View-only field
  upiId: z.string().min(5, "UPI ID must be at least 5 characters"), // Basic validation
  amount: z
    .union([
      z.string().regex(/^\d+(\.\d{1,2})?$/, "Amount must be a valid number"),
      z.literal(""), // Allows an empty string (optional input)
    ])
    .optional(),
  message: z.string().optional(), // Optional message field
  save: z.boolean().default(false).optional(),
});

export const GenerateSection = () => {
  const [dialogToggle, setDialogToggle] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [bName, setBName] = useState("");
  const [uipId, setUipId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("error", (e) => {
        if (e?.message?.includes("Loading chunk")) {
          window.location.reload(); // or show a fallback UI
        }
      });
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      invoiceNumber: "",
      upiId: "",
      amount: "",
      message: "Thank you for purchasing!",
      save: false,
    },
  });

  useEffect(() => {
    form.setValue("invoiceNumber", `#${generateSixDigitNumber()}`);

    if (typeof window !== "undefined") {
      setBName(localStorage.getItem("business-name") || "");
      setUipId(localStorage.getItem("upi-id") || "");
      form.setValue("businessName", localStorage.getItem("business-name") || "");
      form.setValue("upiId", localStorage.getItem("upi-id") || "");
    }
  }, [form]);

  function generateSixDigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const handleShare = async (message: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "One click UPI Payment",
          text: message,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { businessName, invoiceNumber, upiId, amount, message, save } = values;
    const payUrl = `upi://pay?pn=UPAYI&pa=${upiId.trim()}&cu=INR${
      amount && `&am=${amount.trim()}`
    }&tn=${invoiceNumber.substring(1)}`;

    setTextMessage(
      `${message && `${message.trim()} \n \n`}${
        businessName && `*${businessName.trim()}* \n`
      }Invoice no: ${invoiceNumber} \n*Pay bill here:* ${payUrl} \n \nPowered by upi.liveyst.com`
    );

    if (typeof window !== "undefined" && save) {
      localStorage.setItem("upi-id", upiId.trim());
      businessName && localStorage.setItem("business-name", businessName.trim());
    }

    setDialogToggle(true);
  }

  function onShare() {
    handleShare(textMessage);
    form.reset();
    form.setValue("invoiceNumber", `#${generateSixDigitNumber()}`);
    form.setValue("businessName", localStorage.getItem("business-name") || "");
    form.setValue("upiId", localStorage.getItem("upi-id") || "");
    setDialogToggle(false);
    setTextMessage("");
  }

  return (
    <Card className="bg-muted/60 dark:bg-card">
      <CardContent className="mt-8 mb-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
            <div className="flex flex-col md:!flex-row gap-4">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Name (optional)" autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="invoiceNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Invoice Number</FormLabel>
                    <FormControl>
                      <Input type="text" autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="upiId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UPI ID</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@okaxis" autoComplete="off" {...field} />
                    </FormControl>
                    <FormDescription>{`Make sure it's correct where you want to receive payment.`}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1000.00" autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Your message..." className="resize-none" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {(!uipId || uipId !== form.getValues("upiId") || !bName || bName !== form.getValues("businessName")) && (
              <div className="flex flex-col gap-1.5">
                <FormField
                  control={form.control}
                  name="save"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0 gap-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      {/* <div className="space-y-1 leading-none"> */}
                      <FormLabel className="text-muted-foreground">Save details for future use</FormLabel>
                      {/* </div> */}
                    </FormItem>
                  )}
                />
              </div>
            )}

            <Button type="submit" className="mt-4">
              <Bot className="w-5 h-5 mr-2" /> Generate
            </Button>
          </form>
        </Form>

        <Dialog onOpenChange={setDialogToggle} open={dialogToggle}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="pb-1">Preview and Share</DialogTitle>
              <DialogDescription>{`Ensure the message is correct and share it with the customer.`}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Textarea disabled value={textMessage} rows={10} />
            </div>
            <DialogFooter>
              <Button type="button" onClick={onShare} className="w-full">
                <Send className="w-5 h-5 mr-2" /> Share
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};
