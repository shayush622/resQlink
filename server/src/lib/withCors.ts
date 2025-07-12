export function withCorsHeaders(res: Response) {
  const allowedOrigin = process.env.CLIENT_URL || 'https://res-qlink-client.vercel.app'
  
  res.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Allow-Credentials', 'true');
  return res;
}
