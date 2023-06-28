import jwt from 'jsonwebtoken';

export function signJwt(clerkUserId: string) {
  return jwt.sign({ clerkUserId }, process.env.APP_SECRET as string);
}

export function signJwtClient(clerkUserId: string) {
  console.log(
    'NEXT_PUBLIC_APP_SECRET on signJwtClient',
    process.env.NEXT_PUBLIC_APP_SECRET
  );
  const titit = jwt.sign(
    { clerkUserId: clerkUserId },
    process.env.NEXT_PUBLIC_APP_SECRET as string
  );
  const token = jwt.sign(
    { clerkUserId },
    process.env.NEXT_PUBLIC_APP_SECRET as string
  );

  return token;
}
