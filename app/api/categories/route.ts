import { NextResponse } from "next/server";
import { DATA } from "@/mock-data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    const filteredData = query
      ? DATA.filter((category) =>
          category.title.toLowerCase().includes(query.toLowerCase())
        )
      : DATA;

    return NextResponse.json(
      {
        categories: filteredData,
        success: true,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Failed to fetch categories",
        success: false,
      },
      { status: 500 }
    );
  }
}
