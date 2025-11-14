import Link from "next/link";

export async function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link href="/">Movies</Link>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/popular">Popular</Link>
          </li>
          <li>
            <Link href="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link href="/upcoming">Upcoming</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
