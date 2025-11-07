import Image from "next/image";
import SearchBar from "@/component/page";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-base-100 gap-4 flex-col">
      <h1 className="text-4xl font-bold">Welcome to Price Scraper</h1>
      <SearchBar />
    </div>
  );
}
