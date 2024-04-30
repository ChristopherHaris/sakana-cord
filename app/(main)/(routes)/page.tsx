import { ModeToggle } from "@/components/mode-button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  auth().protect();
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
      <ModeToggle/> 
    </div>
  );
}
