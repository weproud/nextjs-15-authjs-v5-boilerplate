import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AuthSignInPage() {
  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Label className="text-2xl font-bold">Auth.js Sign in</Label>
          <form
            action={async () => {
              "use server";
              await signIn("kakao", { redirectTo: "/protected" });
            }}
          >
            <Button type="submit" className="bg-yellow-400 text-black">
              Signin with Kakao
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
