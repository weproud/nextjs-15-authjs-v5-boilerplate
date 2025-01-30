import { auth } from "@/auth";
import { Label } from "@/components/ui/label";

export default async function ProtectedPage() {
  const session = await auth();
  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <div>
      <img src={session.user.image} alt="User Avatar" />
      <Label className="text-2xl font-bold">{session.user.name}</Label>
    </div>
  );
}
