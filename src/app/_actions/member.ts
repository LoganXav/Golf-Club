'use server';
import { supabase } from '@/lib/db';
import { FormDTO } from '@/lib/schema';

export async function addPremiumMemberAction() {
  return 'Premium member';
}
export async function addStandardMemberAction(person: FormDTO) {
  // Validate person object properties here

  try {
    const { data, error } = await supabase
      .from('members')
      .insert({ person })
      .single();

    if (error) {
      // Handle specific errors as needed
      throw new Error(error.message);
    }

    return { type: 'Standard member added', data };
  } catch (error: any) {
    return { type: 'Error', data: error.message };
  }
}
export async function getMembersAction() {
  return 'All members';
}
