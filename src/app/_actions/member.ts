'use server';
import { supabase } from '@/lib/db';
import { FormDTO } from '@/lib/schema';

export async function addPremiumMemberAction() {
  return 'Premium member';
}
export async function addStandardMemberAction(person: FormDTO) {
  let { data, error } = await supabase
    .from('members')
    .insert({ person, id: 1 })
    .single();

  if (error) return { type: 'Error', data: error };
  return { type: 'Standard member added', data: data };
}
export async function getMembersAction() {
  return 'All members';
}
