// fetch tracks
export default async function getTracks() {
  try {
      const res = await fetch("http://localhost:3001/popular", {
        cache: "no-store",
    });
    const tracks = await res.json();
    // console.log("Fetched tracks:", tracks);
    return tracks;
  } catch (err) {
    throw new Error("Failed to fetch tracks");
  }
}
