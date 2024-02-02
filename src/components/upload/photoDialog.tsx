// 'use client';
// import React from 'react';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '../ui/dialog';
// import Link from 'next/link';
// import { Button } from '../ui/button';
// export default function photoDialog() {
//   return (
//     <Dialog>
//       <DialogContent className="absolute">
//         <DialogHeader>
//           <DialogTitle className="text-3xl">
//             Choose your mode of payment
//           </DialogTitle>
//           <DialogDescription>
//             Multiple options available to make payment seamless
//           </DialogDescription>
//         </DialogHeader>
//         <div className="w-full flex mx-auto items-center justify-center flex-wrap gap-4 ">
//           {[1, 2, 3].map((idx) => (
//             <Link key={idx} href={'/register'}>
//               <Button
//                 className="border border-ring hover:border-primary"
//                 variant="ghost"
//                 size="lg"
//               >
//                 Payment 1-3
//               </Button>
//             </Link>
//           ))}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
