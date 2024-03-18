// import { supabase } from '@/lib/db';
// import { NextApiRequest } from 'next';
// import { NextResponse } from 'next/server';

import { supabase } from '@/lib/db';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

// export async function POST(req: NextApiRequest) {
//   const params = await req.json();
//   if (req.method === 'POST') {
//     const params = await req.json();

//     // First check if the user already exists
//     const uniqueIdentifier = params.metadata.data.nin;

//     const { data } = await supabase
//       .from('members')
//       .select('*')
//       .eq('nin', uniqueIdentifier)
//       .single();

//     if (data) {
//       return NextResponse.json({
//         error: 'A user with this nin already exists',
//         status: 409,
//       });
//     }
//   }

//   const url = 'https://api.flutterwave.com/v3/payments';
//   const secretKey = process.env.FLW_SECRET_KEY; // Store your secret key securely (e.g., environment variable)

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${secretKey}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentDetails),
//     });

//     const data = await response.json();

//     if (data.status === 'success') {
//       return data.data.link; // Return the payment link if successful
//     } else {
//       throw new Error('Failed to initiate payment'); // Handle errors
//     }
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-throw for handling in your component
//   }
// }

// async function initiatePayment(paymentDetails) {
//   const flutterwaveUrl = 'https://api.flutterwave.com/v3/payments';
//   const secretKey = process.env.FLW_SECRET_KEY; // Store your secret key securely (e.g., environment variable)

//   try {
//     const response = await fetch(flutterwaveUrl, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentDetails),
//     });

//     const data = await response.json();

//     if (data.status === 'success') {
//       return data.data.link; // Return the payment link if successful
//     } else {
//       throw new Error('Failed to initiate payment'); // Handle errors
//     }
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-throw for handling in your component
//   }
// }
// import { supabase } from '@/lib/db';
// import axios from 'axios';
// import { NextApiRequest } from 'next';
// import { NextResponse } from 'next/server';
// export async function POST(req: NextApiRequest) {
//   if (req.method === 'POST') {
//     const params = await req.json();

//     // First check if the user already exists
//     const uniqueIdentifier = params.metadata.data.nin;

//     const { data } = await supabase
//       .from('members')
//       .select('*')
//       .eq('nin', uniqueIdentifier)
//       .single();

//     if (data) {
//       return NextResponse.json({
//         error: 'A user with this nin already exists',
//         status: 409,
//       });
//     }
//     const searchParams = req.nextUrl.searchParams;

//     const reference = searchParams.get('reference');

//     const flutterwaveUrl = `https://api.flutterwave.com/v3/payments${reference}`;

//     const baseURL =
//       process.env.NODE_ENV === 'production'
//         ? process.env.NEXT_PUBLIC_APP_URL
//         : 'http://localhost:3007';

//     try {
//       const response = await axios.post(
//         flutterwaveUrl,
//         {
//           ...params,
//           amount: 20000 * 100,
//           callback_url:
//             'https://api.flutterwave.com/v3/hosted/pay/f524c1196ffda5556341',
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const responseData = response.data;
//       return NextResponse.json({
//         data: { link: responseData?.data?.authorization_url },
//         status: response.status || 500,
//       });
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({
//         error: 'An error occurred while making the request.',
//         status: 500,
//       });
//     }
//   } else {
//     return NextResponse.json({ error: 'Method not allowed' });
//   }
// }

// interface FlutterwavePaymentDetails {
//   tx_ref: any;
//   amount: number;
//   currency: string; // Usually "NGN"
//   redirect_url: string;
//   customer: {
//     email: string;
//     phoneNumber?: string;
//     name?: string;
//   };
// }

// async function POST(req: NextApiRequest) {
//   if (req.method === 'POST') {
//     const params = await req.json();

//     // First check if the user already exists
//     const uniqueIdentifier = params.metadata.data.nin;

//     const { data } = await supabase
//       .from('members')
//       .select('*')
//       .eq('nin', uniqueIdentifier)
//       .single();

//     if (data) {
//       return NextResponse.json({
//         error: 'A user with this nin already exists',
//         status: 409,
//       });
//     }
//   }
// }
// export function getPaymentDetails(
//   amount: number,
//   email: string,
//   name?: string,
//   phoneNumber?: string,
//   redirectUrl: string,
//   meta?: Record<string, string>,
//   customizations?: { title?: string; logo?: string; description?: string }
// ): FlutterwavePaymentDetails {
//   const txRef = POST; // Replace with logic to generate a unique reference code
//   const customer = { email, phonenumber: phoneNumber, name };

//   return {
//     tx_ref: txRef,
//     amount,
//     currency: 'NGN',
//     redirect_url: redirectUrl,
//     customer,
//     meta,
//     customizations,
//   };
// }
// export async function initiatePayment(
//   paymentDetails: FlutterwavePaymentDetails
// ) {
//   const url = 'https://api.flutterwave.com/v3/payments';
//   const secretKey = process.env.FLW_SECRET_KEY; // Store your secret key securely (e.g., environment variable)

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${secretKey}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentDetails),
//     });

//     const data = await response.json();

//     if (data.status === 'success') {
//       return data.data.link; // Return the payment link if successful
//     } else {
//       throw new Error('Failed to initiate payment'); // Handle errors
//     }
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-throw for handling in your component
//   }
// }

// flutterwaveIntegration.ts

// import got from 'got';

export const createPayment = async () => {
  try {
    const response = await got
      .post('https://api.flutterwave.com/v3/payments', {
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        },
        json: {
          tx_ref: 'hooli-tx-1920bbtytty',
          amount: '100',
          currency: 'NGN',
          redirect_url:
            'https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc',
          meta: {
            consumer_id: 23,
            consumer_mac: '92a3-912ba-1192a',
          },
          customer: {
            email: 'user@gmail.com',
            phonenumber: '080****4528',
            name: 'Yemi Desola',
          },
          customizations: {
            title: 'Pied Piper Payments',
            logo: 'http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png',
          },
        },
      })
      .json();

    return response.data.link;
  } catch (err) {
    console.error(err.code);
    console.error(err.response.body);
    throw err;
  }
};

export const handlePaymentCallback = async (req: any, res: any) => {
  if (req.query.status === 'successful') {
    // Handle successful payment callback
    // Verify the transaction and confirm the customer's payment
  } else {
    // Handle unsuccessful payment callback
    // Inform the customer their payment was unsuccessful
  }
};
