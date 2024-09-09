'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image";

export function CtaCard() {

  const textVariants = [
    {
      heading: "Personalize Your Feed",
      body: "Create a free account to get news tailored to your interests and preferences.",
    },
    {
      heading: "Tailored News, Just for You",
      body: "Sign up for free now to receive personalised news based on your interests.",
    },
  ];
  const textConfig = textVariants[Math.floor(Math.random() * textVariants.length)];
  return (
    <Card className="w-full h-full flex flex-col justify-between max-w-md mx-auto overflow-hidden bg-slate-900 bg-opacity-90 backdrop-blur-sm border-white/20 relative">
      <CardContent className="p-6 px-4 pb-0 flex flex-col items-center justify-between text-center bg-transparent grow">
        <h3 className="text-2xl text-[var(--accent-color)] font-bold mb-2">
          {textConfig.heading}
        </h3>
        <div className="grow flex items-center mt-2">
          <p className="text-white mb-4">{textConfig.body}</p>
        </div>
      </CardContent>
      <div className="absolute-center w-[110%] h-[200px] z-[-1] opacity-15 rotate-[50deg]">
        <Image
          alt={"aggregate logo"}
          src={"/images/logo.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute w-full h-full ease-out duration-300 rotate-[-16deg]"
        />
      </div>
      <CardFooter className="p-6 flex justify-center bg-transparent">
        <Button className="w-full bg-[var(--accent-color)] text-[var(--contrast-color)] font-bold ease-out duration-200 scale-100 hover:scale-105">
          Create Account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}