import FeaturedTracks from '@/components/home/FeaturedTracks'
import FinalCTA from '@/components/home/FinalCTA';
import ForArtists from '@/components/home/ForArtists';
import ForListeners from '@/components/home/ForListeners';
import Hero from '@/components/home/Hero'
import TrendingArtists from '@/components/artists/TrendingArtist';
import getTracks from '@/lib/api'

export default async function Home() {
  const tracks = await getTracks();

  return (
    <div className='bg-ink-black w-full'>
      <Hero />
      <FeaturedTracks tracks={tracks}  />
      <TrendingArtists />
      <ForArtists />
      <ForListeners />
      <FinalCTA />
    </div>
  )
}
