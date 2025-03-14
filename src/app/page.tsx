import FileUploader from "@/components/FileUploader";
import Header from "@/components/Header";
import PictureUploader from "@/components/PictureUploader";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { sessionClaims } = await auth();
  console.log(sessionClaims);
  return (
    <>
      <FileUploader />
      <PictureUploader />
      <SignedOut>
        <Header user={null} />
        <SignInButton />
      </SignedOut>
      {/* <SignedIn>
        <Header />
      </SignedIn> */}
    </>
  );
}
