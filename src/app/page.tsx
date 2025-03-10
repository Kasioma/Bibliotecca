import FileUploader from "@/components/FileUploader";
import PictureUploader from "@/components/PictureUploader";
import { SignInButton, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <FileUploader />
      <PictureUploader />
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
