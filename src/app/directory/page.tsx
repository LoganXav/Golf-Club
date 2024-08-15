import { MembersList } from '@/components/lists';
import { getMembersAction } from '../_actions/member';
import { env } from '@/env.mjs';

export const dynamic = 'force-dynamic';

export default async function Directory() {
  if (!env.DATABASE_URL) {
    return (
      <MembersList
        response={{
          data: [],
          type: 'Error',
          message: 'Could not find database.',
        }}
      />
    );
  }
  const response = await getMembersAction();

  return <MembersList response={response} />;
}
