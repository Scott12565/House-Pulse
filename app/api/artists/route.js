import dbConnect from "@/lib/dbConnect";
import Artists from "@/models/Artists";

export async function GET(){
    // connect to database first
    await dbConnect();

    // fetch all artists from database
    try {
        const artists = await Artists.find().sort({ isTrending: -1, createdAt: -1 });
        
        // return the data as json string with message, status, and header
        return new Response(JSON.stringify({
            message: "Trending artists retrieved successfully",
            artists
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        })

    } catch(error) {
        return new Response(JSON.stringify({
            error: "Failed to retrieve artists"
        }), {
            status: 500,
            headers:{ "Content-Type": "application/json" }
        })
    }
}

// Make a POST request to create a new trending artist in the database
export async function POST(request){
    // connect to database first
    await dbConnect();

    // create a request
    try{
        // get artist data from request body
        const artistData = await request.json();

        // extract values from the artist data body
        const { artistName, genre, imageUrl, bio, isTrending, socials } = artistData;

        // validate required fields
        if(!artistName) {
            // return a response with error message
            return new Response(JSON.stringify({
                error: "Missing required fields"
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            })
        }

        // create a new artist in the database
        const newArtist = await Artists.create({
            artistName,
            genre,
            imageUrl,
            bio,
            isTrending,
            socials
        })

        // return a response for the new trending artist
        return new Response(JSON.stringify({
            message: "Trending artist created successfully",
            artist: newArtist
        }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        })

    } catch(error){
        return new Response(JSON.stringify({
            error: `${error.message}`
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
    }
}