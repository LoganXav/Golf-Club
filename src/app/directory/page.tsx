import { MembersList } from '@/components/lists';
import { getMembersAction } from '../_actions/member';

export const dynamic = 'force-dynamic';

export default async function Directory() {
  const response = await getMembersAction();

  return <MembersList response={response} />;
}
