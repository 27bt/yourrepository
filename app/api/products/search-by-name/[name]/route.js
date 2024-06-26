/*import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    try {
        const { name } = context.params    

        const items = await prisma.products.findMany({
            take: 5,
            where: {
                title: {
                    contains: name,
                    mode: 'insensitive'
                },
            },
        });
        await prisma.$disconnect();
        return NextResponse.json(items);
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}*/
import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    try {
        const { name } = context.params;

        const items = await prisma.products.findMany({
            take: 5,
            where: {
                title: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        });

        await prisma.$disconnect();

        return NextResponse.json(items);
    } catch (error) {
        console.error('Error fetching products:', error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}

/*import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    try {
        const { query } = req;
        const name = query.name;

        const items = await prisma.products.findMany({
            take: 5,
            where: {
                title: {
                    contains: name,
                    mode: 'insensitive'
                },
            },
        });

        await prisma.$disconnect();
        return NextResponse.json(items);
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
*/
