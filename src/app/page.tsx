import { api } from "@/trpc/server";
export default async function Home() {
  const hello = await api.test.hello({ text: "Misha" });
  console.log(hello);
  return <h2>{hello.greeting}</h2>;
}
