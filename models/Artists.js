import mongoose from 'mongoose';

const ArtistSchema = new mongoose.Schema({
    artistName : {
        type: String,
        required: true
    },
    genre: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    bio: {
        type: String,
    },
    isTrending: {
        type: Boolean,
        default: false
    },
    socials: {
        instagram: String,
        twitter: String
    }
}, { timestamps: true })

export default mongoose.models.Artist || mongoose.model('Artist', ArtistSchema)