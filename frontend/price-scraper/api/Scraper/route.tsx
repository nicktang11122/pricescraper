import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const { query } = await request.json();
  const apiKey = process.env.EXTERNAL_API_KEY;
  try {
    // Send request to add workout and log exercises
    const Response = await fetch("...", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        query: query,
      }),
    });
    if (!Response.ok) {
      throw new Error("Query failed");
    }
    console.log({ query });
    //Handle the sorted items that come back from the API
  } catch (error) {
    console.error("Error during search:", error);
  }
  return NextResponse.json({ message: "Query received" });
}
