# The Royal Beauty — complete multipage site

Static HTML/CSS/JavaScript for Netlify. Eight standalone pages: Home, Services, Packages, Offers, Bridal, Gallery, About and Booking.

## Deployment
This folder is the Netlify publish root. No build command. Set publish directory to `.`. GitHub main branch deployment updates the existing Netlify project when configured.

## Navigation
Native `<details>` mobile menu works independently of JavaScript. Services filters don't navigate down the page. All main links open standalone pages.

## Booking
`config.js` sets WhatsApp +91 74600 79859. Bookings are enquiries only; customers must send prefilled text via WhatsApp and wait for salon confirmation. Cart uses local browser storage and carries between pages. No online payment or actual appointment confirmation.

## Prices and images
Two signature packages: Royal Insta Glow ₹1,870, Royal Bridal Glow ₹3,499. Special bundles from handwritten notes remain indicative; where prices are not confirmed show 'Confirm Price'. Photographs are illustrative editorial visuals (some external Unsplash images); no salon portfolio claims or branded-product authenticity claims.

## Services data
`script.js` holds categories (31 entries), packages (2) and special offers (11). Exact steps, standalone prices and offer calculations can be adjusted when the salon confirms them.

## Credits
Footer: Built by [GrowthZync](https://growthzync.in). Use the original existing Netlify domain if the repo is linked.
