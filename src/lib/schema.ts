import * as z from 'zod';

// const ItemSchema = z.object({
//   name: z.string(),
//   value: z.string(),
// });

// const FormArraySchema = z.object({
//   genders: z.array(ItemSchema),
//   branch: z.array(
//     z.object({
//       label: z.string(),
//       items: z.array(ItemSchema),
//     })
//   ),
//   preferences: z.array(z.string()),
//   premiumServices: z.array(z.string()),
//   golfDays: z.array(z.string()),
// });
// try {
//   const validatedFormData = FormArraySchema.parse(formData);
//   console.log('Validation successful:', validatedFormData);
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.error('Validation error:', error.errors);
//   } else {
//     console.error('Unexpected error:', error);
//   }
// }

export const FormDataSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  phone: z.string().refine((value) => /^\d{11}$/g.test(value), {
    message: 'Invalid phone number. Must be 11 digits.',
  }),
  email: z.string().email({ message: 'Invalid email address' }),
  dateOfBirth: z
    .date()
    .min(new Date('02-14-2006'), { message: 'Too young!' })
    .optional(),
  gender: z.string().optional(),
  occupation: z.string().optional(),
  nin: z.string().refine((value) => /^\d{11}$/g.test(value), {
    message: 'Invalid NIN. Must be 11 digits.',
  }),
  zip: z.string().optional(),
  city: z.string().optional(),

  address: z.string().min(1, { message: 'Please enter an address' }),
  index: z
    .number()
    .min(0)
    .max(36, { message: 'Golf Handicap index must be less than 37' }),
  handicap: z
    .number()
    .min(0)
    .max(36, { message: 'Golf Handicap  must be less than 37' }),
  preferences: z.string().min(1, { message: 'Select at least 3 ' }),
  premiumServices: z.string().min(1, { message: 'Select at least 3 ' }),
  golfDays: z.string().array().min(3, { message: 'Select at least 3 ' }),
  contactName: z
    .string()
    .array()
    .min(3, { message: 'Contact name is required' }),
  relationship: z.string().min(1, { message: 'Relationship type is required' }),
  contactNo: z.string().refine((value) => /^\d{10}$/g.test(value), {
    message: 'Invalid phone number. Must be 10 digits.',
  }),
  contactEmail: z.string().email({ message: 'Email is required' }),
});

export type FormDTO = z.infer<typeof FormDataSchema>;
export type FieldName = keyof FormDTO;
