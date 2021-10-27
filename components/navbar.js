import Link from 'next/link'
import headerStyles from '../styles/header.module.css';

export default function NavBar() {
  return (
    <>
      <ul className={headerStyles.ul}>
        <li className={headerStyles.li}>
          <Link
            href={"/destinations/6588544"}
          >
            <a className={headerStyles.a}>
              NY
            </a>
          </Link>
        </li>
        <li className={headerStyles.li}>
          <Link
            href={"/destinations/6588545"}
          >
            <a className={headerStyles.a}>
              Destination #2
            </a>
          </Link>
        </li>
        <li className={headerStyles.li}>
          <Link
            href={"/destinations/6588546"}
          >
            <a className={headerStyles.a}>
              Destination #3
            </a>
          </Link>
        </li>
        <li className={`${headerStyles.right} ${headerStyles.li}`}>
          <Link
            href={"/destinations/6588548"}
          >
            <a>
              To Go on the Right
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}