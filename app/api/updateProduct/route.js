import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
    const body = await request.json();
    
    const { id, title, description, price, url, seller_id } = body;
    
    const { data, error } = await supabase
        .from('Products')
        .update({ title, description, price, url })
        .eq('id', id)
        .eq('seller_id', seller_id);

    if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
}
