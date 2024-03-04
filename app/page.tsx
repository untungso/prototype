import dynamic from "next/dynamic";
import { Heading } from "@/packages/components/typography";
import type { Metadata } from "next";

const Console = dynamic(() => import("@/packages/components/console"), {
  loading: () => <></>,
});

export const metadata: Metadata = {
  title: "Home | Hecterbonha Prototype",
  description: "Prototype web full of chaos",
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Heading>hello darkness my old friend</Heading>
      </main>
      <Console />
    </>
  );
}
