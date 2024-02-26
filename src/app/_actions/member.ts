'use server';
import { supabase } from '@/lib/db';
import { FormDTO, FormDataSchema } from '@/lib/schema';
import { MembersListType } from '@/types';
import { revalidatePath } from 'next/cache';

export async function addPremiumMemberAction() {
  return 'Premium member';
}
export async function addStandardMemberAction(rawInput: FormDTO) {
  const input = FormDataSchema.parse(rawInput);
  const uniqueIdentifier = input.nin;

  try {
    const { data } = await supabase
      .from('members')
      .select('*')
      .eq('nin', uniqueIdentifier)
      .single();

    if (data) {
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
export async function getMembersAction(): Promise<{
  data?: MembersListType[];
  type: string;
  message?: string;
} | null> {
  try {
    const { data } = await supabase.from('members').select('*');
    // .order('createdAt', { ascending: false });
    await revalidatePath('/directory');
    if (data) {
      return { type: 'Success', data };
    }
    return null;
  } catch (error: any) {
    return { type: 'Error', message: error.message };
  }
}
