/*import Stripe from 'stripe';
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req) {
    const supabase = createServerComponentClient({ cookies })

    try {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) throw Error()

        const body = await req.json();
        const stripe = new Stripe(process.env.STRIPE_SK_KEY || '');

        const res = await stripe.paymentIntents.create({
            amount: Number(body.amount),
            currency: 'CAD',
            automatic_payment_methods: { enabled: true },
        });

        return NextResponse.json(res);
    } catch (error) {
        console.log(error);
        return new NextResponse('Something went wrong', { status: 400 });
    }
}*/

import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { mobileNumber, amount } = body;

    // Validate the mobile number and amount
    if (!mobileNumber || !amount || isNaN(Number(amount))) {
      return new NextResponse('Invalid mobile number or amount', { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SK_KEY || '');

    // Check if the customer exists, otherwise create a new customer
    let customer;
    const customers = await stripe.customers.list({ phone: mobileNumber });

    if (customers.data.length > 0) {
      customer = customers.data[0];
    } else {
      customer = await stripe.customers.create({
        phone: mobileNumber,
      });
    }

    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: 'CAD',
      customer: customer.id,
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json(paymentIntent);
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return new NextResponse('Something went wrong', { status: 400 });
  }
}
