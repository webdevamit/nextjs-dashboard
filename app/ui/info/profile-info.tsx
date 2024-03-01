import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

const ProfileInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
      <div className={styles.shape}></div>
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <strong>
          Hey Mate, <br />
          Welcome to Lingo.
        </strong>{' '}
        Please do checkout my{' '}
        <Link
          target="_blank"
          href="https://amit-portfolio-alpha.vercel.app/"
          className="text-blue-500"
        >
          Portfolio
        </Link>
        , brought to you by 8 years of excellence.
      </p>
    </div>
  );
};

export default ProfileInfo;
