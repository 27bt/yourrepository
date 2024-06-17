/*import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
    const supabase = createServerComponentClient({ cookies })

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) throw Error()

        const body = await req.json();

        const order = await prisma.orders.create({
            data: {
                user_id: user?.id,
                stripe_id: body.stripe_id,
                name: body.name,
                address: body.address,
                zipcode: body.zipcode,
                city: body.city,
                country: body.country,
                total: Number(body.total),
            }
        })
        
        body.products.forEach(async prod => { 
            await prisma.orderItem.create({
                data: {
                    order_id: order.id,
                    product_id: Number(prod.id),
                }
            })
        });

        await prisma.$disconnect();
        return NextResponse.json('Order Complete', { status: 200 });
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
*/

/*import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
    const supabase = createServerComponentClient({ cookies });

    try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) throw Error();

        const body = await req.json();

        const order = await prisma.orders.create({
            data: {
                user_id: user?.id,
                stripe_id: body.stripe_id,
                name: body.name,
                address: body.address,
                zipcode: body.zipcode,
                city: body.city,
                country: body.country,
                total: Number(body.total),
            }
        });

        await Promise.all(body.products.map(async prod => {
            await prisma.orderItem.create({
                data: {
                    order_id: order.id,
                    product_id: Number(prod.id),
                }
            });
        }));

        await prisma.$disconnect();
        return NextResponse.json('Order Complete', { status: 200 });
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}
*/

// app/api/orders/create/route.js
// /app/api/orders/create/route.js
/*
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { initiateMoMoPayment } from "@/utils/momo";

export async function POST(req) {
  const supabase = createServerComponentClient({ cookies });
  const { phoneNumber, name, address, zipcode, city, country, products, total } = await req.json();

  try {
    // Initiate MoMo Payment
    const paymentResponse = await initiateMoMoPayment(phoneNumber, total);

    // Save order to database (example)
    const { data, error } = await supabase
      .from("orders")
      .insert([{ 
        phone_number: phoneNumber,
        name, 
        address, 
        zipcode, 
        city, 
        country, 
        products, 
        total, 
        payment_status: paymentResponse.status 
      }]);

    if (error) throw error;

    return new Response(JSON.stringify({ message: "Order created successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to create order" }), { status: 500 });
  }
}
*/