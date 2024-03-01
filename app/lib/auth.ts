'use server';

const bcrypt = require('bcryptjs');
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { getUser } from './data';
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 hour from now')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function signIn(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const response = await getUser(user?.email);
    if (!response) {
      return { status: false, message: 'Invalid credentials.' };
    }
    const passwordsMatch = bcrypt.compareSync(user.password, response.password);

    if (!passwordsMatch) {
      return { status: false, message: 'Password did not matched' };
    }
    const expires = new Date(Date.now() + 3600 * 1000);
    const session = await encrypt(user);
    cookies().set('session', session, { expires, httpOnly: true });
    return { status: true, message: '' };
  } catch (error) {
    throw error;
  }
}

export async function signUp(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const email = formData.get('email');
    const userName = formData.get('name');
    const password = formData.get('password');
    const userId = `410544b${Math.floor(
      Math.random() * 10,
    )}-4001-4271-985${Math.floor(Math.random() * 10)}-fec4b6a6${Math.floor(
      Math.random() * 10,
    )}42a`;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await sql`INSERT INTO users (id, name, email, password)
        VALUES (${userId}, ${userName}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING`;
    return { status: true, message: 'Created user' };
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
}

export async function signOut(formData: FormData) {
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/');
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;

  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = cookies().get('session')?.value;
  if (!session) return null;

  // Refresh the token, so that it does not expires
  const parsed = await decrypt(session);
  const expires = new Date(Date.now() + 10 * 1000);
  const response = NextResponse.next();
  response.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: expires,
  });

  return response;
}
