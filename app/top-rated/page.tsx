import { MovieCard } from "../components/MovieCard";
import Link from "next/link";
import { fetchTopRated } from "@/lib/tmdb";
import { Movie } from "@/types/movie";

export default async function topRated({}) {
  const data = await fetchTopRated();
  const { results: movies } = data;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-3">
        <h3 className="text-lg font-semibold">Top Rated</h3>
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
