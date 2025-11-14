import { fetchPopular, fetchUpcoming, fetchTopRated } from "@/lib/tmdb";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";

export default async function Home() {
  const [popular, topRated, upcoming] = await Promise.all([
    fetchPopular(),
    fetchTopRated(),
    fetchUpcoming(),
  ]);
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroBanner movie={popular.results[0]} />
      <MovieRow movies={popular.results} categoryTitle="Popular" />
      <MovieRow movies={topRated.results} categoryTitle="Top Rated" />
      <MovieRow movies={upcoming.results} categoryTitle="Upcoming" />
    </main>
  );
}
