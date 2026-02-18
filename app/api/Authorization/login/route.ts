import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const credentials = await request.json();
    console.log("Mock Login Request:", credentials);
    
    // Simulate some logic - accept any password for testing
    // Or you can add specific "valid" users here
    if (credentials.email && credentials.password) {
      return NextResponse.json({
        token: "fake-jwt-token-for-" + credentials.email,
        headers: [
          { 
            key: "Set-Cookie", 
            value: ["stgId=fake-session-id; Path=/; HttpOnly"] 
          }
        ]
      });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
