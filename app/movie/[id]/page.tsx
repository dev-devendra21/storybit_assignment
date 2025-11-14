import { fetchMovieById, fetchMovieCredits } from "@/lib/tmdb";
import Image from "next/image";

import { CastCard } from "../../components/CastCard";
import { Cast } from "@/types/cast";
import { Genre } from "@/types/genre";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const [data, credits] = await Promise.all([
    fetchMovieById(id),
    fetchMovieCredits(id),
  ]);

  return (
    <main className="bg-black">
      <section className="relative h-[60vh] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-10 left-10 flex gap-6 items-start">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            width={200}
            height={300}
            className="rounded-xl shadow-lg hidden md:block"
          />

          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              {data.title}
            </h1>

            <div className="flex gap-2 mt-4">
              {data.genres?.map((g: Genre) => (
                <span
                  key={g.id}
                  className="px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <div className="mt-2 text-gray-200 text-sm">
              {data.release_date} • {data.runtime} min • ⭐ {data.vote_average}
            </div>

            <p className="mt-4 text-gray-100 leading-relaxed">
              {data.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        <div className="flex gap-4 overflow-x-auto horizontal-scroll">
          {credits.cast.map((c: Cast) => (
            <CastCard key={c.id} cast={c} />
          ))}
        </div>
      </section>
    </main>
  );
}
