import Image from 'next/image';
import Link from 'next/link';
import github from './../../public/social/github.svg';
import { projects } from '../utils/utils';

const Landing = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Building digital <br />
              products & brands.
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              This free and open-source Dashboard was built using &nbsp;
              <Link
                href="https://nextjs.org"
                target="_blank"
                className="hover:underline"
              >
                NextJs
              </Link>{' '}
              and the utility classNames from{' '}
              <Link
                target="_blank"
                href="https://tailwindcss.com"
                className="hover:underline"
              >
                Tailwind CSS
              </Link>
              .
            </p>
            <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <Link
                href="/signup"
                className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                &nbsp;Create an account
              </Link>
              <Link
                target="_blank"
                href="https://github.com/webdevamit/nextjs-dashboard"
                className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:w-auto"
              >
                <Image src={github} width={20} height={20} alt="github icon" />
                &nbsp;View on GitHub
              </Link>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src={'/hero.png'}
              width="1064"
              height="832"
              alt="hero image"
            />
          </div>
        </div>
      </section>
      <section id="about" className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Work with tools you already use
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional solutions. Accelerate critical development work,
                eliminate toil, and deploy changes with ease.
              </p>

              <ul
                role="list"
                className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
              >
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Continuous integration and deployment
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Development workflow
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Knowledge management
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional solutions.
              </p>
            </div>
            <Image
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src={'/feature-1.png'}
              width="2200"
              height={1600}
              alt="dashboard feature image"
            />
          </div>

          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src={'/feature-2.png'}
              width="2200"
              height="1600"
              alt="feature image 2"
            />
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional solutions. Accelerate critical development work,
                eliminate toil, and deploy changes with ease. See the projects
                personal projects delivered below.
              </p>

              <ul
                role="list"
                className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
              >
                {projects.map((project) => {
                  return (
                    <li className="flex space-x-3" key={project.name}>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="hover:underline"
                        >
                          {project.name}
                        </Link>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="feedback" className="bg-gray-50 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-24">
          <figure className="mx-auto max-w-screen-md">
            <svg
              className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 dark:text-white md:text-2xl">
                This guy is just awesome. He had delivered already so much of
                enterprise level applications along with personal applications
                with shorter period of time. Perfect choice for being a valuable
                client.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Sundar Pichai
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="contact" className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              He is him, so do not worry about anything else. <br />
              Try Services for free, No credit card required. <br />
            </p>
            <Link
              target="_blank"
              href="https://amit-portfolio-alpha.vercel.app/contact"
              className="mb-2 mr-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Contact Amit Chauhan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
