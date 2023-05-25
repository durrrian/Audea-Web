import { cookies } from 'next/headers';
import { getAllContent } from './graphql';
import NewContent from '@/lib/NewContent';

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get('audea_token')?.value;
  const signInProvider = cookieStore.get('audea_signInProvider')?.value;

  if (!token || !signInProvider)
    throw new Error('Token and signInProvider is null');

  const content = await getAllContent(token);
  let hasContent: boolean = false;
  if (content !== null) hasContent = true;

  return <NewContent token={token} hasContent={hasContent} />;
}
