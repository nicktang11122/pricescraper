"use client";
import { useState } from "react";
export default function searchBar() {
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    try {
      // Send request to add workout and log exercises
      const Response = await fetch("/api/Scraper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query,
        }),
      });
      if (!Response.ok) {
        throw new Error("Query failed");
      }
      console.log({ query });
    } catch (error) {
      console.error("Error during search:", error);
    }
  };
  return (
    <div className="flex items-center">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          required
          placeholder="Search"
        />
      </label>
      <button
        type="submit"
        onClick={handleSearch}
        className="btn btn-primary ml-4"
      >
        Search
      </button>
    </div>
  );
}
