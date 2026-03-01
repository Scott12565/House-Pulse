import mongoose from "mongoose";

const PingSchema = new mongoose.Schema(
    { message: { type: String, default: "pong" } },
    { timestamps: true }
);

export default mongoose.models.Ping || mongoose.model("Ping", PingSchema);