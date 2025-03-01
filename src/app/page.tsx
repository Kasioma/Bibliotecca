import { SignInButton, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { sessionClaims } = await auth();
  console.log(sessionClaims?.id);
  console.log(sessionClaims?.roles);
  console.log(sessionClaims?.username);
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
