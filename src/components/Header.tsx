import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center p-2 gap-4">
      <Image
        src="/logoDark.png"
        alt="Logo"
        width={50}
        height={50}
        className="object-contain"
      />
      <h1>ShaderHub</h1>
    </header>
  );
}
