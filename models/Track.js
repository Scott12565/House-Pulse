import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    artistName: {
        type: String,
        required: true,
        trim: true,
    },
    priceZar: {
        type: Number,
        required: true,
        min: 0,
    },
    genre: {
        type: String,
        enum: ["Afro House", "Deep House", "Amapiano", "Tech House", "Techno", "Other"],
        required: true,
        index: true,
    },
    bpm: {
        type: Number,
        min: 0,
    },
    key: {
        type: String,
        trim: true,
        required: true    
    },
    coverImageUrl: {
        type: String,
        trim: true,
    },
    audioPreviewUrl: {
        type: String,
        trim: true,
        required: true,
    },
    audioFileUrl: {
        type: String,
        trim: true,
        required: true,

    },
    isPublished: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.models.Track || mongoose.model('Track', TrackSchema);