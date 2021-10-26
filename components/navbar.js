import Link from 'next/link'

export default function NavBar() {
  return (
    <>
      <div>Navbar</div>
      <Link
        href={"/destinations/3"}
      >
        <a>NavBar rerout to destinations</a>
      </Link>
    </>
  )
}