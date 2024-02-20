'use server';
import { supabase } from '@/lib/db';
import { FormDTO, FormDataSchema } from '@/lib/schema';

export async function addPremiumMemberAction() {
  return 'Premium member';
}
export async function addStandardMemberAction(rawInput: FormDTO) {
  const input = FormDataSchema.parse(rawInput);
  const uniqueIdentifier = input.nin;

  try {
    // Check if a user with the same unique identifier (e.g., email) already exists
    const { data } = await supabase
      .from('members')
      .select('*')
      .filter('nin', '=', uniqueIdentifier)
      .single();

    if (!data) {
      return {
        type: 'Error',
        message: 'A member with  this nin already exists',
      };
    }

    // If user doesn't exist, proceed with insertion
    const { data: insertData, error: insertError } = await supabase
      .from('members')
      .insert(input);

    if (insertError) {
      throw new Error(insertError.message);
    }

    return { type: 'Success', message: 'Registration Successful', insertData };
  } catch (error: any) {
    return { type: 'Error', message: error.message };
  }
}
export async function getMembersAction() {
  return 'All members';
}
