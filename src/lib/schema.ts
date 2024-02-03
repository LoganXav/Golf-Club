import * as z from 'zod';

export const FormDataSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
});

export type FormDTO = z.infer<typeof FormDataSchema>;
export type FieldName = keyof FormDTO;
