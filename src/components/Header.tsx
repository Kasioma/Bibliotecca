import Upload from "@/icons/Upload";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Box from "@/icons/Box";
import Person from "@/icons/Person";

type User = {
  id: string;
  username: string;
  email: string;
  image: string;
} | null;

type Props = {
  user: User;
};

export default function Header({ user }: Props) {
  const ProfilePicture = () => {
    if (user === null) return <Person className="w-[40px] h-[40px]" />;
    return <h1>Profile Picture</h1>;
  };

  return (
    <header className="border-b-2">
      <div className="flex items-center justify-between gap-2 p-2 w-11/12 mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logoDark.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-xl font-semibold text-text-100">ShaderHub</h1>
        </div>
        <SearchBar />
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Upload />
            <span>Upload</span>
          </div>
          <div className="flex items-center gap-2">
            <Box />
            <span>Build</span>
          </div>
          <div>
            <ProfilePicture />
          </div>
        </div>
      </div>
    </header>
  );
}
