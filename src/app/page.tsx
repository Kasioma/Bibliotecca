import { SignInButton, SignedOut } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  // const { sessionClaims } = await auth();
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
