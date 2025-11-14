"use client";
import Link from "next/link";
import { Movie } from "@/types/movie";
import { MovieCard } from "./MovieCard";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  return (
    <section className="px-3">
      <h3 className="text-lg font-semibold">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto py-4 horizontal-scroll">
        {movies.map((m) => (
          <Link key={m.id} href={`/movie/${m.id}`}>
            <MovieCard movie={m} />
          </Link>
        ))}
      </div>
    </section>
  );
}
