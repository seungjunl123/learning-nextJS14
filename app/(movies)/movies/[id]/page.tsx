import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfos from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieInfos id={id} />
      </Suspense>
    </div>
  );
}
