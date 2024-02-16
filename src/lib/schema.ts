import * as z from 'zod';

export const FormDataSchema = z.object({
  // Personal Info Step
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  phoneNumber: z.number(),
  email: z.string().email({ message: 'Invalid email address' }),
  dateOfBirth: z.date(),
  gender: z.string(),
  occupation: z.string(),
  nin: z.number(),
  zip: z.number(),
  province: z.string(),
  address: z.string().optional(),

  // // Membership Details
  // index: z
  //   .string()
  //   .min(0)
  //   .max(36, { message: 'Golf Handicap index must be less than 37' }),
  // handicap: z
  //   .string()
  //   .min(0)
  //   .max(36, { message: 'Golf Handicap must be less than 37' }),
  // // preferences: z.string().min(1, { message: 'Select at least 3' }).optional(),
  // // premiumServices: z
  // //   .string()
  // //   .min(1, { message: 'Select at least 3' })
  // //   .optional(),
  // // golfDays: z.string().min(3, { message: 'Select at least 3' }).optional(),
  // contactName: z.string().min(1, { message: 'Contact name is required' }),
  // relationship: z.string().min(1, { message: 'Relationship type is required' }),
  // contactNo: z.number(),
  // contactEmail: z.string().email({ message: 'Email is required' }),
});

export type FormDTO = z.infer<typeof FormDataSchema>;
export type FieldName = keyof FormDTO;
