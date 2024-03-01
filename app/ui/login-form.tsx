'use client';

import { lusitana } from '@/app/ui/fonts';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useFormState, useFormStatus } from 'react-dom';
import { signIn } from '../lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
      aria-disabled={pending}
      type="submit"
    >
      Login
    </button>
  );
}

export default function LoginForm() {
  const [loginForm, dispatch] = useFormState(signIn, {
    status: false,
    message: '',
  });

  if (loginForm?.status) {
    redirect('/dashboard');
  }
  return (
    <form action={dispatch}>
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <p className="mb-3 mt-5 block text-xs font-medium text-gray-900">
          do not have an account?{' '}
          <Link href="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {loginForm && !loginForm?.status ? (
            <p className="error-message mt-2 text-sm text-red-500">
              {loginForm?.message}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </form>
  );
}
