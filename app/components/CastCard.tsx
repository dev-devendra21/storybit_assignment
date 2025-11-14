import { Cast } from "@/types/cast";
import Image from "next/image";
export function CastCard({ cast }: { cast: Cast }) {
  return (
    <div className="min-w-[150px] my-3">
      <Image
        src={`https://image.tmdb.org/t/p/w342${cast.profile_path}`}
        alt={cast.name}
        width={150}
        height={300}
        className="object-cover rounded-lg"
      />
      <h3 className="mt-2 text-white">{cast.name}</h3>
    </div>
  );
}
