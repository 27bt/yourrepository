/*import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = await prisma.products.findMany();
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
*/
import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = await prisma.products.findMany();
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse({ error: error.message }, { status: 500 });
    }
}
