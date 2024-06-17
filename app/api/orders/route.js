/*import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
    const supabase = createServerComponentClient({ cookies })

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) throw Error()
        
        const orders = await prisma.orders.findMany({
            where: { user_id: user?.id },
            orderBy: { id: "desc" },
            include: { 
                orderItem: {
                    include: {
                        product: true
                    }
                }
                
            }
        })
        
        await prisma.$disconnect();
        return NextResponse.json(orders);
    } catch (error) {

        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}*/
/*

import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
    const supabase = createServerComponentClient({ cookies });

    try {
        // Retrieve the authenticated user from Supabase
        const { data: { user } } = await supabase.auth.getUser();

        // If no user is found, throw an error
        if (!user) throw Error();

        // Retrieve orders associated with the user using Prisma
        const orders = await prisma.orders.findMany({
            where: { user_id: user?.id },
            orderBy: { id: "desc" },
            include: { 
                orderItem: {
                    include: {
                        product: true
                    }
                }
            }
        });

        // Disconnect Prisma client after retrieving data
        await prisma.$disconnect();

        // Return orders as JSON response
        return NextResponse.json(orders);
    } catch (error) {
        // Handle errors
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
*/

import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
    const supabase = createServerComponentClient({ cookies });

    try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) throw Error();

        const orders = await prisma.orders.findMany({
            where: { user_id: user?.id },
            orderBy: { id: "desc" },
            include: { 
                orderItem: {
                    include: {
                        product: true
                    }
                }
            }
        });

        await prisma.$disconnect();
        return NextResponse.json(orders);
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
