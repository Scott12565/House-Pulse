1) What House Pulse is

House Pulse is a music streaming + digital marketplace where:

listeners discover and preview music,

then buy tracks/albums to own/download them,

while independent artists upload and sell their music directly.

It’s basically: Spotify-style discovery + Bandcamp-style ownership, built for indie artists.

2) The main problem it solves
For listeners

Problem: Streaming apps are great for listening, but you don’t own the music and it’s harder to support small/local artists directly.
Solution: House Pulse lets listeners preview like streaming, then buy/own what they love.

For independent artists

Problem: Artists struggle with visibility + monetization. Many platforms either:

don’t give enough exposure, or

pay very little per stream, or

require labels/middlemen.
Solution: House Pulse gives artists a direct sales channel, with full control over uploads, pricing, and branding.

3) What the website does (core features)
Listener side

Browse music by genres, trending, new releases

Search tracks, artists, albums

Preview tracks (30–60 seconds)

Like / favorite tracks

Add to cart

Checkout via Payfast (or payment gateway)

After purchase:

Track/album goes to Library

User can download or access the full version

“Owned” state is shown across the site

Artist side

Register as an artist

Create artist profile (banner, bio, socials)

Upload:

cover art

audio file

metadata (title, genre, price, preview length)

Publish and manage releases

See basic stats:

plays

likes

sales/orders

4) The “algorithm” (how the product works end-to-end)
A) Onboarding algorithm

User lands on homepage

Chooses:

Listener account, or

Artist account

Create account → store user role in DB

B) Discovery algorithm (Homepage/Explore)

Fetch public catalog:

trending tracks (sorted by plays/likes in last X days)

new releases (sorted by createdAt)

featured artists (manually selected or top-followed)

Display:

Featured Artists row

Trending Tracks list

Genre browse tiles

New Releases grid

Search:

match query against track title, artist name, album title, tags

C) Preview play algorithm

User clicks play

If track is not owned:

play previewUrl (30–60s cut)

If track is owned:

play fullUrl

Player bar updates global state:

currentTrack

progress

isPlaying

D) Like/Favorite algorithm

User taps ❤️

If logged in:

update favorites[] for that user

increment likesCount on track

UI updates instantly (optimistic update)

E) Cart algorithm

User taps “Add to Cart”

Add track/album to cart[] in:

local state (fast UI)

and optionally DB for persistence

Prevent duplicates:

if already in cart, show “In Cart”

If item already owned:

disable “Buy” and show “In Library”

F) Checkout algorithm (Payfast)

User clicks Checkout

Create an order in DB:

items

total

status = pending

Redirect to payment provider

Payment provider returns success/cancel

On success:

verify payment server-side

update order status = paid

add items to user library[]

unlock full track access + downloads

G) Library algorithm

Fetch user library items

Render:

tracks and albums owned

download links

Full playback enabled for owned tracks

H) Artist upload algorithm

Artist fills upload form

Upload files:

cover image → storage

audio → storage

Generate preview audio:

either upload separate preview file

or server creates preview snippet (later upgrade)

Save track metadata in DB:

title, genre, price, coverUrl, previewUrl, fullUrl

Publish → track becomes visible in Explore/Home

5) Why this product is valuable (positioning)

Listeners get discovery + ownership in one place

Artists get direct monetization and visibility

You (as the builder) show serious skills:

media upload

database modeling

auth roles

payments

modern UI/UX