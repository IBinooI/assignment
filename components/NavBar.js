import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link> | <Link href="/fun">FUN</Link> | <Link href="/contact">Contact</Link>
    </nav>
  );
}
