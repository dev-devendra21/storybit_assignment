import { Movie } from "@/types/movie";
import Image from "next/image";
export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="min-w-40 rounded-2xl">
      <Image
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
        width={160}
        height={300}
      />
    </div>
  );
}
