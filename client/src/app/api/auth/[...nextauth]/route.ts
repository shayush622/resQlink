import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const serverUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth${url.pathname.replace('/api/auth', '')}${url.search}`;
  
  const response = await fetch(serverUrl, {
    method: 'GET',
    headers: {
      'Cookie': request.headers.get('cookie') || '',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  const responseHeaders = new Headers();
  
  // Copy cookies from server response
  const setCookieHeader = response.headers.get('set-cookie');
  if (setCookieHeader) {
    responseHeaders.set('set-cookie', setCookieHeader);
  }

  return NextResponse.json(data, { headers: responseHeaders });
}

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const serverUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth${url.pathname.replace('/api/auth', '')}${url.search}`;
  
  const body = await request.text();
  
  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Cookie': request.headers.get('cookie') || '',
      'Content-Type': 'application/json',
    },
    body,
  });

  const data = await response.json();
  const responseHeaders = new Headers();
  
  // Copy cookies from server response
  const setCookieHeader = response.headers.get('set-cookie');
  if (setCookieHeader) {
    responseHeaders.set('set-cookie', setCookieHeader);
  }

  return NextResponse.json(data, { headers: responseHeaders });
} 