# Permanent Website QR Code and Analytics

This folder stores the master QR-code files used for posters and other printed materials.

## Permanent QR URL

The QR code encodes:

`https://antoniajmillet.github.io/go/website/`

The QR intentionally does **not** point directly to the homepage.

Instead, it points to a permanent redirect page:

`go/website/index.html`

That redirect currently sends visitors to:

`https://antoniajmillet.github.io/`

with these tracking parameters:

- `utm_source=qr`
- `utm_medium=print`
- `utm_campaign=website`

The full redirected destination is:

`https://antoniajmillet.github.io/?utm_source=qr&utm_medium=print&utm_campaign=website`

## Why use a redirect?

A printed QR code cannot be changed after it has been distributed.

By encoding the permanent redirect URL, the final destination can be changed later by editing `go/website/index.html`. The already-printed QR code will continue to work as long as the redirect URL remains available.

To change the destination later, update the destination URL in all three places inside `go/website/index.html`:

1. The `meta http-equiv="refresh"` tag
2. The JavaScript `window.location.replace(...)` call
3. The fallback link in the page body

Do not change the QR image itself unless the permanent redirect URL changes.

## QR files

- `website-qr.svg` — master vector file for posters and print
- `website-qr.png` — raster backup for software that does not accept SVG

The SVG is the preferred file for PowerPoint and poster printing because it remains sharp at any size.

## QR design rules

- Keep the actual QR modules high contrast.
- Do not crop away the quiet white margin.
- Do not stretch or distort the QR.
- Do not place text, logos, or graphics over the QR pattern.
- Decorative colors and text may be placed around the intact QR code.
- Test the final poster QR from a phone before printing.

## Google Analytics setup

Google Analytics 4 is installed on the homepage using this Measurement ID:

`G-W002TBG6JN`

The Google tag is placed immediately after the opening `<head>` tag in the main `index.html`.

The redirect page itself does not need a separate Analytics tag. It forwards the visitor to the tagged homepage while preserving the UTM parameters.

## How QR visits are recorded

The visit flow is:

1. A visitor scans the QR code.
2. The browser opens `https://antoniajmillet.github.io/go/website/`.
3. The redirect sends the visitor to the homepage with the QR UTM parameters.
4. Google Analytics records the resulting website session as:
   - Session source: `qr`
   - Session medium: `print`
   - Session campaign: `website`

A normal visit to `https://antoniajmillet.github.io/` does not include those UTM parameters and should not be classified as `qr / print`.

## Where to find QR traffic in GA4

Use a session-scoped acquisition report, not a first-user report.

In Google Analytics:

1. Open **Reports**
2. Open **Acquisition**
3. Open **Traffic acquisition**
4. Set the primary dimension to **Session source / medium**
5. Look for `qr / print`

You can also use **Session campaign** and look for `website`.

Use **Sessions** as the closest measure of QR-generated visits.

Do not use **First user source / medium** for this purpose. That dimension only describes how a person first discovered the website. A returning visitor who later scans the QR may not be counted there as QR traffic.

## Realtime versus standard reports

Realtime can confirm that the Analytics tag is receiving activity, but Realtime may not support every traffic-source comparison.

Standard acquisition reports may take approximately 24–48 hours to populate after a new visit or a newly installed tag.

## Important limitation

Google Analytics does not count literal camera scans.

It counts successful website activity after the redirected homepage loads. A scan may not be recorded if the visitor closes the page immediately, blocks Analytics, has no connection, or the page fails to load.

## Maintenance

The QR image itself does not expire.

The QR remains usable as long as:

- The GitHub Pages site remains online
- The repository and username remain available
- `go/website/index.html` is not deleted or renamed
- The redirect destination remains valid

The QR assets and redirect are version-controlled in this repository so they can be recovered later.
