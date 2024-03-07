import * as z from 'zod';

export const FormDataSchema = z.object({
  category: z.enum(['standard', 'premium']),
  // Personal Info Step
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number cannot exceed 15 digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
  dateOfBirth: z
    .date()
    .max(new Date(Date.now() - 18 * 365.25 * 24 * 60 * 60 * 1000), {
      message: 'You must be at least 18 years old.',
    }),
  gender: z.string(),
  occupation: z.string(),
  nin: z.string().length(11, { message: 'NIN must be 11 digits long' }),
  zip: z.coerce.number(),
  province: z.string(),
  address: z.string().optional(),

  // Membership Info
  index: z.coerce
    .number()
    .lt(37, { message: 'Handicap index must me less than 37' })
    .optional(),
  handicap: z.coerce
    .number()
    .lt(37, { message: 'Handicap must me less than 37' })
    .optional(),
  premiumService: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  premiumMerchandise: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  standardService: z.string().optional(),
  standardMerchandise: z.string().optional(),

  golfDays: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .nonempty()
    .min(3, { message: 'At least 3 golf days must be selected' }),

  // Emergency Contact Info

  contactName: z.string().min(1, { message: 'Contact name is required' }),
  relationship: z.string().min(1, { message: 'Relationship type is required' }),
  contactNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number cannot exceed 15 digits' }),
  contactEmail: z.string().email({ message: 'Email is required' }),
});

export type FormDTO = z.infer<typeof FormDataSchema>;
export type FieldName = keyof FormDTO;
