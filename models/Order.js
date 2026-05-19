import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        items: [
            {
                trackId: {
                    type: String,
                    required: true,
                },

                title: String,
                artistName: String,
                price: Number,
            },
        ],

        subtotal: {
            type: Number,
            required: true,
        },

        serviceFee: {
            type: Number,
            required: true,
        },

        total: {
            type: Number,
            required: true,
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },

        payfastReference: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Order ||
    mongoose.model("Order", orderSchema);