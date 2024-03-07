import { supabase } from '@/lib/db';
import axios from 'axios';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
  if (req.method === 'POST') {
    const params = await req.json();

    // First check if the user already exists
    const uniqueIdentifier = params.metadata.data.nin;

    const { data } = await supabase
      .from('members')
      .select('*')
      .eq('nin', uniqueIdentifier)
      .single();

    if (data) {
      console.log(data, 'dtataaaaaaaaaaaaaaaa');
      return NextResponse.json({
        error: 'A user with this nin already exists',
        status: 409,
      });
    }

    const paystackUrl = 'https://api.paystack.co/transaction/initialize';

    const baseURL =
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_APP_URL
        : 'http://localhost:3001';

    try {
      const paystackResponse = await axios.post(
        paystackUrl,
        {
          ...params,
          amount: 20000 * 100,
          callback_url: `${baseURL}/api/payment/verify/paystack`,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const responseData = paystackResponse.data;
      return NextResponse.json({
        data: { link: responseData?.data?.authorization_url },
        status: paystackResponse.status || 500,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        error: 'An error occurred while making the request.',
        status: 500,
      });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' });
  }
}
