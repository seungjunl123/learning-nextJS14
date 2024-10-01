import { Suspense } from "react";
import { API_URL } from "../../../constants";
import MovieInfos, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { title } from "process";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieInfos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
