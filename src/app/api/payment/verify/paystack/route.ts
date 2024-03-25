import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { addMemberAction } from '@/app/_actions/member';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const reference = searchParams.get('reference');
    const paystackUrl = `https://api.paystack.co/transaction/verify/${reference}`;
    const paystackResponse = await axios.get(paystackUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
      },
    });

    // After the payment has been confirmed, add member to db
    const { metadata } = paystackResponse.data.data;

    const rawDate = metadata.data.dateOfBirth;

    // Parse the ISO 8601 string into a Date object
    const dateObject = new Date(rawDate);

    const response = await addMemberAction({
      ...metadata.data,
      dateOfBirth: dateObject,
    });

    if (response.type == 'Error') {
      throw response.message;
    }

    let redirectURL;

    if (process.env.NODE_ENV === 'production') {
      redirectURL = `${process.env.NEXT_PUBLIC_APP_URL}`;
    } else {
      redirectURL = 'http://localhost:3000';
    }

    return NextResponse.redirect(new URL(`/directory`, redirectURL));
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export const dynamic = 'force-dynamic';
