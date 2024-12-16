import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  // const token = cookies().get('accessToken')?.value;
  // const user = cookies().get('user')?.value;

  // if (!token /* || !user */) {
  //   const url = req.url.replace(req.nextUrl.pathname, '/');
  //   return Response.redirect(url);
  // }
  const response = NextResponse.next()

  return response
};

export const config = { matcher: ['/dashboard/:path*'] };
