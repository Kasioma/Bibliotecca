import Search from "@/icons/Search";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center bg-inherit gap-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 rounded-md p-2 w-1/3">
      <Search />
      <input
        type="text"
        placeholder="Search Assets"
        className="bg-inherit focus:outline-none w-full"
      />
    </div>
  );
}
