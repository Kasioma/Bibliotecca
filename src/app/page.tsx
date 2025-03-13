"use client";
import FileUploader from "@/components/FileUploader";
import Header from "@/components/Header";
import PictureUploader from "@/components/PictureUploader";
import { useTheme } from "@/context/theme";
import { SignInButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <Header />
      <FileUploader />
      <PictureUploader />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <button
        onClick={() => setTheme((prev) => (prev == "light" ? "dark" : "light"))}
      >
        Dark
      </button>
    </>
  );
}
