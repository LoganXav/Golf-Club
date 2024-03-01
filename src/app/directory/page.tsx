import * as React from 'react';
import { MembersList } from '@/components/lists';
import { getMembersAction } from '../_actions/member';
import { toast } from 'sonner';

async function Directory() {
  // TODO: Fetch data for standard and premium members

  const response = await getMembersAction();
  if (response && response?.type === 'Error') {
    toast.error(response.message);
    console.error('@Response_error', response);
  }
  return <MembersList data={response?.data} />;
}

export default Directory;
