import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import NextSpaceLogo from '../public/next.svg';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src={NextSpaceLogo}
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}