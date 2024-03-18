import { MembersList } from '@/components/lists';
import { getMembersAction } from '../_actions/member';

export default async function Directory() {
  const response = await getMembersAction();

  return <MembersList response={response} />;
}
