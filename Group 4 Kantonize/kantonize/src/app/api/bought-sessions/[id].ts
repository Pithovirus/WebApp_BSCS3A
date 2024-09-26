// import type { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-06-20',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   if (req.method === 'POST') {
//     try {
//       const session = await stripe.checkout.sessions.retrieve(id as string);
      
//       // Handle successful payment here
//       console.log('Payment successful:', session);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error handling webhook:', error);
//       res.status(500).json({ success: false });
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
