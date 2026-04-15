import dbConnect from "@/lib/dbConnect";
import Track from "@/models/Track";

export async function GET(){
    await dbConnect();
    try {
        const tracks = await Track.find().sort({ createdAt: -1 })
        return new Response(JSON.stringify({
            message: 'Tracks retrieved successfully',
            tracks
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        })

    } catch (error){
        console.error('Error retrieving tracks:', error);
        return new Response(JSON.stringify({ error: 'Failed to retrieve tracks'}), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
        
    }
}

export async function POST(request){
    // connect db first
    await dbConnect();

    try {

        // get data from request body
        const trackData = await request.json();
        const { 
            title, 
            artistName, 
            priceZar,
            genre,
            bpm,
            key,
            coverImageUrl,
            audioPreviewUrl,
            audioFileUrl,
        } = trackData;

        // validate required fields
        if (!title || !artistName || priceZar === undefined || !genre || !audioPreviewUrl || !audioFileUrl) {
            console.error('Validation error: Missing required fields');

            // return a response
            return new Response(JSON.stringify({error: 'Missing required fields'}), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            })
        }

        // create new track
        const newTrack = await Track.create({
            title,
            artistName,
            priceZar,
            genre,
            bpm,
            key,
            coverImageUrl,
            audioPreviewUrl,
            audioFileUrl,
        })

        return new Response(JSON.stringify({
            message: 'Track created successfully',
            track: newTrack
        }), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        })

    } catch (error) {
        console.error('Error creating track:', error);
        return new Response(JSON.stringify({ error: 'Failed to create track' }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
    }
}
