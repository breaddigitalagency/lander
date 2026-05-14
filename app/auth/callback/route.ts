import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL(`/auth/signup?error=${error}`, request.url));
  }

  if (code) {
    return NextResponse.redirect(new URL('/upload', request.url));
  }

  return NextResponse.redirect(new URL('/auth/signup', request.url));
}
