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
import { Save, Send } from "lucide-react";
import { useEffect, useState } from "react";

const formSchema = z.object({
  invoiceNumber: z.string().readonly(), // View-only field
  upiId: z.string().min(5, "UPI ID must be at least 5 characters"), // Basic validation
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, "Amount must be a valid number"),
  message: z.string().optional(), // Optional message field
  save: z.boolean().default(false).optional(),
});

export const GenerateSection = () => {
  let uipId = "";

  if (typeof window !== "undefined") {
    uipId = localStorage.getItem("upi-id") || "";
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceNumber: `#${generateSixDigitNumber()}`,
      upiId: uipId || "",
      amount: "",
      message: "Thank you for purchasing!",
      save: false,
    },
  });

  function generateSixDigitNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const handleShare = async (url: string, message: string, invoice: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "One click UPI Payment",
          text: `${message} \n \n Invoice no: ${invoice} \n *Pay bill here:* ${url}`,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { invoiceNumber, upiId, amount, message, save } = values;

    const payUrl = `upi://pay?pn=UPAYI&pa=${upiId}&cu=INR&am=${amount}&tn=${invoiceNumber.substring(1)}`;

    if (typeof window !== "undefined" && save) {
      localStorage.setItem("upi-id", upiId);
    }

    handleShare(payUrl, `${message}`, invoiceNumber);
    form.reset();
  }

  return (
    <Card className="bg-muted/60 dark:bg-card">
      <CardContent className="mt-8 mb-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="invoiceNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Invoice Number (View only)</FormLabel>
                    <FormControl>
                      <Input disabled {...field} />
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
                      <Input type="number" placeholder="100.00" autoComplete="off" {...field} />
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

            {(!uipId || uipId !== form.getValues("upiId")) && (
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
                      <FormLabel className="text-muted-foreground">Save UPI ID in local for future use</FormLabel>
                      {/* </div> */}
                    </FormItem>
                  )}
                />
              </div>
            )}

            <Button className="mt-4">
              <Send className="w-5 h-5 mr-2" /> Share
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
