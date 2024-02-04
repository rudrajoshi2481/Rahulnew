"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

function page() {
  const handleEmailClick = () => {
    const emailAddress = "example@example.com";
    const subject = "Subject of the email";
    const body = "Body of the email";

    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex justify-center">
      <Tabs defaultValue="account" className="lg:w-[900px] ">
        <TabsList>
          <TabsTrigger value="account">Email Address</TabsTrigger>
          <TabsTrigger value="password">What{"'"}s app</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p onClick={() => handleEmailClick()}>
            <p className="font-bold">Automatically :</p>Click this link to
            connect through email.
          </p>
          <p className="mt-12">
            <p className="font-bold">Manually :</p>email not added
          </p>
        </TabsContent>

        <TabsContent value="password">
          {" "}
          <Link
            href={"https://api.whatsapp.com/send/?phone=7041303457&text=I'm instreated in your services"}
            target="_blank"
          >
            <Button>Connect Through What{"'"}s app</Button>
          </Link>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
