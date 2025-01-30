"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Label className="text-2xl font-bold">
            Hello Next.js 15 + Auth.js + Supabase + Prisma
          </Label>
          <Button onClick={() => router.push("/auth/signin")}>
            Sign In 하러가기
          </Button>
        </div>
      </div>
    </div>
  );
}
