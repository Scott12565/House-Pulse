// fetch tracks
export default async function getTracks() {
  try {
    // get base url for both local and productuion
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/tracks`, { cache: 'no-store' });

    console.log(res);
    
    if (!res.ok) throw new Error(`API responded with ${res.status}`);
    const tracks = await res.json();
    
    // API returns { message, tracks }
    return Array.isArray(tracks) ? tracks : (tracks.tracks || []);
  } catch (err) {
    console.error('getTracks error:', err);
    return [];
  }
}

// fetch artists
export async function getArtists(){
  try{
    // fetch artists from api
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/artists`, 
      { cache: 'no-store' });

      // check if response is good
      if (!res.ok) throw new Error(`API responded with ${res.status}`);
      const artists = await res.json();
      
      return artists.artists || [];

  } catch(error){
    console.error('getArtists error:', error);
    return [];
  }
}