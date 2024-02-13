import { FormDTO } from '@/lib/schema';

export async function addPremiumMemberAction() {
  return 'Premium member';
}
export async function addStandardMemberAction(data: FormDTO) {
  return { type: 'Standard member', data: data };
}
export async function getMembersAction() {
  return 'All members';
}
