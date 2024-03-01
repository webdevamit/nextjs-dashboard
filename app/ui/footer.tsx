import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { socialLinks } from '../utils/utils';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
        <div className="text-center">
          <Link
            href="#"
            className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src={'/logo.png'}
              width={50}
              height={36}
              className="mr-3 h-6 sm:h-9"
              alt="Amit Logo"
            />
            Amit Chauhan
          </Link>
          <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
            © 2023-{new Date().getFullYear()} ™. All Rights Reserved. Built
            with{' '}
            <Link
              href="https://nextjs.org/"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              NextJs
            </Link>{' '}
            and{' '}
            <Link
              href="https://tailwindcss.com"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </Link>
            .
          </span>
          <ul className="mt-5 flex justify-center space-x-5">
            {socialLinks.map((link) => {
              return (
                <li key={link.name}>
                  <Link
                    target="_blank"
                    href={link.profile}
                    className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${link.name}`}
                  >
                    <Image {...link.icon} alt={link.name} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
