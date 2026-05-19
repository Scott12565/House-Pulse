export async function POST(req) {
    try {
        const userDetails = req.json();

        // extract details
        const {
            fullName,
            email,
            items,
            subtotal,
            serviceFee,
            total,
        } = userDetails;

        // payfast api keys
        const merchant_id = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID;
        const merchant_key = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY;
        const Passphrase = process.env.PAYFAST_PASSPHRASE;

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        // URLs
        const Return_Url = `${baseUrl}/success`;
        const cancel_Url = `${baseUrl}/cancel`;
        const notify_url = `${baseUrl}/api/payfast/notify`;
        
        // PayFast requires amount as string with 2 decimals
        const amount = Number(total).toFixed(2);

        // create query string for PayFast
        const params = new URLSearchParams({
            Merchant_id,
            Merchant_key,
            Passphrase,

            Return_url,
            cancel_url,
            notify_url,
            amount,

            name_first: fullName,
            email_address: email,

            item_name: "House Pulse Music Purchase",
            amount
        })

        const payFastURL = `https://sandbox.payfast.co.za/eng/process?${params.toString()}`;

        return new Response(JSON.stringify({
            payFastURL
        }))
    } catch (error) {
        return new Response(JSON.stringify(
            { errorMsg: 'An error occurred while creating the payment' }
        ), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}