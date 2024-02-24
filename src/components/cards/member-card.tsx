import { CardContent, CardDescription } from '../ui/card';
import { Paper } from '../ui/paper';
import { Icons } from '../icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CuratedMembersInfo } from '@/types';

interface Props {
  data: CuratedMembersInfo;
  key: number;
}

export function MemberCard({ data, key }: Props) {
  return (
    <Paper
      key={key}
      variant={data.gender === 'male' ? 'success' : 'destructive'}
      className="flex min-h-[150px] w-full transform flex-col justify-center p-6 text-start"
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="p-2">{<Icons.person />}</AvatarFallback>
      </Avatar>
      <CardContent className="text-lg">
        {data.firstName} {data.lastName}
      </CardContent>
      <CardDescription>Province: {data.province}</CardDescription>
      <CardDescription>Occupation: {data.occupation}</CardDescription>
    </Paper>
  );
}
