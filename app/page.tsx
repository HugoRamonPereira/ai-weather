"use client";

import { CityPicker } from "@/components/city-picker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import LogoIcon from "./assets/icons/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900 p-10">
      <Card className="bg-white rounded-xl max-w-4xl mx-auto translate-y-20">
        <div className="flex justify-center mb-2">
          <LogoIcon width={100} height={100} />
        </div>
        <Text className="text-5xl font-semibold text-center mb-10 text-blue-800">
          AI Weather
        </Text>
        <Subtitle className="text-xl text-center tracking-wide font-extralight">
          Powered by OpenAI, Next.js, TailwindCSS, GraphQL, Tremor and More...
        </Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
