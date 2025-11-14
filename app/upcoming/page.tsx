import { MovieCard } from "../components/MovieCard";
import Link from "next/link";
import { fetchUpcoming } from "@/lib/tmdb";
import { Movie } from "@/types/movie";

export default async function upcoming({}) {
  const data = await fetchUpcoming();
  const { results: movies } = data;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-3">
        <h3 className="text-lg font-semibold">Upcoming</h3>
        <div className="flex gap-3 flex-wrap py-4">
          {movies.map((m: Movie) => (
            <Link key={m.id} href={`/movie/${m.id}`}>
              <MovieCard movie={m} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
