import { getArtists } from "@/lib/api"
import TrendingArtistsClient from "./TrendingArtistsClient";

export default async function TrendingArtists() {
  const artists = await getArtists();

  return (
    <TrendingArtistsClient artists={artists} />
  )
}
