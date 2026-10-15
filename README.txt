THE ROYAL BEAUTY — PREMIUM WEBSITE (NETLIFY + GITHUB)
====================================================

ABOUT THE SITE
A clean, responsive HTML/CSS/JS static website featuring a new circular RB
monogram logo, larger theme-matched header, home salon hero banner, 4 hero
buttons, horizontal service tabs, 31 service entries, 2 royal packages, 11
handwritten-note inspired special bundles, and an enquiry cart.

DEPLOY MANUALLY TO EXISTING NETLIFY SITE
1. Download the ZIP or download the repository from GitHub.
2. Extract the files; ensure index.html, script.js and styles.css are in the
   folder root (not an extra nested folder).
3. Netlify > your existing website > Deploys > drag-and-drop / manual deploy.
4. This GitHub repo is NOT yet linked to the existing Netlify site. Pushing
   code to GitHub ALONE will not update that site until connected in Netlify.
5. No build, npm, server, database or external backend is required.

CONTACT DETAILS NEEDED FOR AUTOMATED WHATSAPP
Edit config.js:
  whatsappNumber: '919876543210'  // country code, digits only
  callNumber: '+919876543210'
Until configured, the booking form prepares a message and allows the customer
to copy it. No message gets sent automatically; user must tap Send in WhatsApp.
The floating bar has Cart, WhatsApp/Booking, Book. Mobile Call was deliberately
replaced with Cart in the latest requirements.

ENQUIRY CART (NOT A PAYMENT SYSTEM)
Add to cart > view items/quantity > Continue to Booking > fill form > WhatsApp
or Copy booking request. Cart stays locally in the customer's browser
(localStorage). The page does NOT store appointments on a server, charge money,
or confirm a booking; salon must verify availability and pricing.

CONTENT MAINTENANCE
Edit script.js arrays:
- categories: service name, steps, duration, prices and product descriptions.
- packages: Royal Insta Glow and Royal Bridal Glow.
- offers: special bundles from handwritten notes with indicative prices and
  ingredient list. Items with null price display 'Confirm Price'.

HANDWRITTEN PACKAGE NOTES — IMPORTANT PRICE VERIFICATION
All offers are indicative, and final prices must be confirmed with the owner.
Most handwritten offer discounts do not round exactly or leave some underlying
line-item costs unclear. Do not display a precise percentage discount without
verifying the subtotal and the actual payable amount.
Example: Sara Gold bundle showed subtotal Rs 1,340 and final amount Rs 1,214
alongside a 10% discount, but 1,340 - 10% = Rs 1,206. Its public price is
hidden pending confirmation. Royal Bridal Luxe showed Rs 7,782 total and
Rs 5,587 payable; both are treated as note-based indicative figures only.
Other handwritten indicative bundle amounts: 1,415 / 2,821 / 3,638 / 1,256 /
1,201 / 1,326 / 3,049 / 1,572 / 2,220. A price shown in one combination
may NOT be the same as a standalone service retail price.

MEDIA & BRANDING
- assets/royal-mark.svg: NEW circular vector RB mark, scale-independent.
- assets/favicon.svg: matching favicon.
- Unsplash editorial sample photographs require an internet connection.
  They are illustrative only, NOT claimed as actual salon or client work.
- Replace stock image IDs with licensed salon photographs where available.

SITE SECTION ORDER
Hero / Services / Royal Packages / Special Offers / Booking Form /
Royal Difference / Bridal Editorial / Gallery / Footer

POLICY
This is an enquiry website, not a payment processor, booking calendar or
online store checkout. Customers must confirm their booking directly with
business staff. Form information stays in browser until customer explicitly
shares via WhatsApp. The cart uses browser-local storage only.
