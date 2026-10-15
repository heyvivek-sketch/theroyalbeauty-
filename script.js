/*
 * THE ROYAL BEAUTY — SITE CONTENT
 * For each service, edit name, price, duration, steps, and description below.
 * A null price means 'Price on request' (we have NOT invented missing rates).
 * When the owner sends exact step-by-step details, replace description text.
 */
const photo = (id, width = 420) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const categories = [
  { id: 'facials', name: 'Facials', intro: 'A luminous glow begins with thoughtful skin care.', image: 'photo-1570172619644-dfd03ed5d881', services: [
    { name: 'Korean Facial', price: 795, duration: '1 Hour', steps: 6, description: 'A 6-step facial experience. The exact products and individual steps will be added after confirmation.' },
    { name: 'Lotus White Glow Facial', price: 550, duration: '1 Hour', steps: 4, description: 'A 4-step glow-focused facial. The complete step sequence will be updated soon.' },
    { name: 'Vedic Line Moroccan Argan Oil Facial', price: 699, duration: '1 Hour', steps: 6, description: 'A 6-step facial featuring an argan-oil themed treatment. The complete step sequence will be updated soon.' },
    { name: 'Aroma Magic Facial', price: null, duration: '1 Hour', steps: 7, description: 'A 7-step facial option. Exact variant, price and individual steps require confirmation.' },
    { name: 'O3+ Bridal Facial', price: 1799, steps: null, description: 'Listed in the bridal combination notes. Confirm standalone availability and final price.' },
    { name: 'O3+ Shine Glow Facial', price: 1340, steps: 7, description: '7-step facial noted in a curated offer. Individual step details pending.' },
    { name: 'Sara Gold Facial', price: 835, description: 'Gold-themed facial care, as listed in the service notes.' },
    { name: 'VLCC Anti-Tan Fruit Insta Facial', price: 499, steps: 4, description: 'Four-step facial shown in the service notes. Full process to be confirmed.' },
    { name: 'Aroma Magic Bridal Facial', price: 699, steps: 7, description: 'Seven-step facial option listed in a bridal care bundle. Details to be confirmed.' }
  ]},
  { id: 'bleach', name: 'Bleach', intro: 'Brightening treatments for your skincare routine.', image: 'photo-1556228578-0d85b1a4d571', services: [
    { name: 'Face Bleach', price: null, description: 'Face bleach treatment. Please ask about product options and current price.' },
    { name: 'Face & Neck Bleach', price: null, description: 'Face and neck bleach service. Product and pricing details to be confirmed.' },
    { name: 'Arms Bleach', price: null, description: 'Bleach option for arms. Final treatment and price to be confirmed.' }
  ]},
  { id: 'raaga', name: 'Raaga', intro: 'Explore Raaga-inspired de-tan and skin care.', image: 'photo-1608248543803-ba4f8c70ae0b', services: [
    { name: 'Raaga De-Tan', price: 240, description: 'Reference amount in a combination offer. Confirm final standalone price.' },
    { name: 'Raaga De-Tan — Face & Neck', price: 299, description: 'Face and neck de-tan care noted in a combination offer. Confirm standalone pricing.' },
    { name: 'Raaga Face Care', price: null, description: 'Raaga face-care option. Full treatment information will be added soon.' }
  ]},
  { id: 'massage', name: 'Massage', intro: 'Gentle moments to unwind and recharge.', image: 'photo-1540555700478-4be289fbecef', services: [
    { name: 'Head Massage', price: null, description: 'Relaxing head massage option. Duration and pricing on request.' },
    { name: 'Full Body Massage', price: null, description: 'A 30-minute complimentary variant appears in one package; standalone pricing on request.' },
    { name: 'Relaxation Massage', price: null, description: 'Relaxation-focused care. Please confirm treatment options and service location.' }
  ]},
  { id: 'body', name: 'Body Polishing', intro: 'Soft, radiant care — from head to toe.', image: 'photo-1515377905703-c4788e51af15', services: [
    { name: 'Full Body Polishing', price: null, description: 'Full-body polishing care. Also included in the Royal Bridal Glow Package.' },
    { name: 'Body Care Ritual', price: null, description: 'Custom body-care options. Pricing and treatment details to be shared.' }
  ]},
  { id: 'hair', name: 'Hair Care', intro: 'Healthy-looking, beautiful hair for every mood.', image: 'photo-1560066984-138dadb4c035', services: [
    { name: 'L’Oréal Professional Hair Spa', price: null, description: 'Professional hair-spa service. Included in the bridal package; standalone pricing to be confirmed.' },
    { name: 'Hair Styling', price: null, description: 'Styling to complement your look and occasion.' },
    { name: 'Hair Care Consultation', price: null, description: 'Tell us your hair goals and preferred treatment.' }
  ]},
  { id: 'waxing', name: 'Waxing & Threading', intro: 'A neat finish for your everyday beauty routine.', image: 'photo-1596462502278-27bfdc403348', services: [
    { name: 'Honey Wax — Full Arms', price: null, description: 'Honey waxing for full arms; ask for exact area and price.' },
    { name: 'Rica Full Body & Bikini Wax', price: 2080, description: 'Reference price from combination notes. Salon will verify before booking.' },
    { name: 'Honey Full Body & Bikini Wax', price: 1130, description: 'Reference price from combination notes. Salon will verify before booking.' },
    { name: 'Classic Manicure', price: 343, steps: 3, description: 'Three-step classic manicure. Confirm final price for individual service.' },
    { name: 'Classic Pedicure', price: 295, steps: 3, description: 'Three-step classic pedicure. Confirm final price for individual service.' },
    { name: 'Classic Mani–Pedi', price: 535, steps: 3, description: 'Classic manicure and pedicure combination price shown in notes.' },
    { name: 'Full Legs Waxing', price: null, description: 'Full legs waxing. Also included in the Royal Bridal Glow Package.' },
    { name: 'Eyebrow, Upper Lip & Forehead Threading', price: null, description: 'Threading for eyebrows, upper lips and forehead.' }
  ]}
];

const packages = [
  { id: 'insta', name: 'Royal Insta Glow Package', tag: 'An everyday glow with a royal touch', price: 1870, oldPrice: null, ribbon: 'A GLOW-UP FAVOURITE', image: 'photo-1616394584738-fc6e612e71b9', highlight: false, features: ['Curated beauty and glow care', 'An easy treat before your special plans', 'Exact inclusions to be added once confirmed'], note: 'Final package inclusions will be confirmed before booking.' },
  { id: 'bridal', name: 'Royal Bridal Glow Package', tag: 'Bridal luxury · Head-to-toe care · Royal transformation', price: 3499, oldPrice: 3999, ribbon: 'BRIDAL SIGNATURE', image: 'photo-1522335789203-aabd1fc54bc9', highlight: true, features: ['Full Body Polishing', 'Aroma Magic care (exact variant to confirm)', 'L’Oréal Professional Hair Spa', 'Honey Wax — Full Arms', 'Full Legs & Underarms', 'Aroma Magic Manicure & Pedicure', 'Threading — Eyebrows, Upper Lips & Forehead'], note: 'FREE Skin & Hair Consultation' }
];


/* Handwritten package notes from the owner. Offer pricing is PROVISIONAL until confirmed.
 * Where handwritten totals and discounts are inconsistent, we do not publicly claim a % saving.
 * 'Sara Gold' has a mismatch (1340 with 10% off would be 1206, handwritten 1214), thus price omitted pending confirmation.
 */
const offers = [
  {id:'bridal-luxe', name:'The Bridal Luxe Experience', price:5587, time:'Approx. 6 hours', ribbon:'BRIDAL COLLECTION', featured:true, features:['O3+ Bridal Facial + Bleach','Rica full-body & bikini wax','O3+ Manicure and Pedicure','Body Polishing · 5 steps','L’Oréal Professional Hair Spa','Brows, upper lip & forehead threading','Bikini clean-up']},
  {id:'honey-detox', name:'Honey Glow & De-Tan', price:1415, time:'Approx. 2 hr 15 min', ribbon:'GLOW & CARE', features:['Honey full body & bikini wax','Raaga De-Tan · Face & Neck','Classic Pedicure']},
  {id:'rica-smooth', name:'Rica Smooth & Glow', price:2821, time:'Approx. 2 hr 20 min', ribbon:'SMOOTH FINISH', features:['Rica full-body & bikini wax','O3+ Clean-up','Brows and upper lip threading']},
  {id:'bridal-prep', name:'O3+ Bridal Prep', price:3638, time:'Approx. 4 hr 30 min', ribbon:'BRIDAL PREP', features:['O3+ Bridal Facial','Rica waxing · arms, legs, underarms & bikini','O3+ Manicure–Pedicure','Brows, upper lip & forehead threading','Complimentary back scrub']},
  {id:'lotus-honey', name:'Lotus & Honey Ritual', price:1256, time:'Approx. 2 hr 15 min', ribbon:'EVERYDAY GLOW', features:['Lotus White Glow Facial','Honey full arms & underarms','Classic Manicure–Pedicure','Complimentary 10-minute head massage']},
  {id:'sara-gold', name:'Sara Gold Glow Ritual', price:null, time:'Approx. 2 hours', ribbon:'PRICE TO CONFIRM', features:['Sara Gold Facial','Honey half legs and underarms','Brows, upper lip & forehead threading']},
  {id:'vlcc-detox', name:'VLCC De-Tan Essentials', price:1201, time:'Approx. 1 hr 30 min', ribbon:'FRESH LOOK', features:['VLCC fruit anti-tan clean-up','Rica arms, half legs & underarms','Raaga bleach · face & neck','Eyebrow threading']},
  {id:'vlcc-care', name:'VLCC Complete Care', price:1326, time:'Approx. 3 hr 15 min', ribbon:'ROYAL VALUE', features:['VLCC Anti-Tan Fruit Insta Facial · 4 steps','Honey full arms, legs & underarms','Classic Manicure–Pedicure · 3 steps','Brows & upper lip threading','Complimentary bikini wax']},
  {id:'o3-shine', name:'O3+ Shine & Style', price:3049, time:'Approx. 3 hr 30 min', ribbon:'SIGNATURE OFFER', features:['O3+ Shine Glow Facial · 7 steps','Rica waxing · arms, legs, underarms & bikini','Aroma Manicure–Pedicure','Complimentary 30-minute full body massage']},
  {id:'korean-care', name:'Korean Glow & Care', price:1572, time:'Approx. 2 hr 40 min', ribbon:'K-BEAUTY RITUAL', features:['Korean Facial · 6 steps','Honey arms, legs & underarms','Classic Manicure · 3 steps','Raaga De-Tan','Complimentary brows and upper lip threading']},
  {id:'aroma-bridal', name:'Aroma Magic Bridal Glow', price:2220, time:'Approx. 2 hr 50 min', ribbon:'SPECIAL OCCASION', features:['Aroma Magic Bridal Facial · 7 steps','Rica full arms, legs, underarms & bikini','Classic Pedicure · 3 steps','Complimentary Glow Bleach']}
];

const gallery = [
  { title: 'The Glow Ritual', image: 'photo-1570172619644-dfd03ed5d881' },
  { title: 'A Moment of Calm', image: 'photo-1540555700478-4be289fbecef' },
  { title: 'Bridal Elegance', image: 'photo-1522335789203-aabd1fc54bc9' },
  { title: 'Beautiful Details', image: 'photo-1596462502278-27bfdc403348' },
  { title: 'Skin, Reimagined', image: 'photo-1616394584738-fc6e612e71b9' }
];

const money = num => '₹' + Number(num).toLocaleString('en-IN');
const safeAttr = text => String(text).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
const cfg = window.ROYAL_CONFIG || {};
const whatsappNumber = String(cfg.whatsappNumber || '').replace(/\D/g, '');
const callNumber = String(cfg.callNumber || '').replace(/[^+\d]/g, '');

function renderServices() {
  const nav = document.getElementById('service-nav');
  const sections = document.getElementById('service-sections');
  nav.innerHTML = categories.map((cat, i) => `
    <a class="service-nav-btn ${i === 0 ? 'is-active' : ''}" href="#category-${cat.id}" data-cat="${cat.id}">
      <img src="${photo(cat.image, 120)}" alt="" loading="lazy" onerror="this.style.display='none'" />${safeAttr(cat.name)}
    </a>`).join('');
  sections.innerHTML = categories.map(cat => `
    <section class="service-category" id="category-${cat.id}" aria-labelledby="heading-${cat.id}">
      <div class="service-category-heading"><div><h3 id="heading-${cat.id}">${safeAttr(cat.name)}</h3><p>${safeAttr(cat.intro)}</p></div><span class="category-count">${String(cat.services.length).padStart(2, '0')} SERVICES</span></div>
      <div class="service-cards">${cat.services.map((service, i) => `
        <article class="service-card"><div class="service-card-top">
          <img class="service-thumb" src="${photo(cat.image, 280)}" alt="${safeAttr(cat.name)} care" loading="lazy" onerror="this.style.visibility='hidden'" />
          <div class="service-info"><h4>${safeAttr(service.name)}</h4><div class="service-meta">${service.steps ? safeAttr(service.steps + ' Steps') : 'Beauty Care'}${service.duration ? `<span>·</span>${safeAttr(service.duration)}` : ''}</div>
          <div class="service-bottom"><strong class="service-price ${service.price == null ? 'is-request' : ''}">${service.price == null ? 'Price on request' : money(service.price)}</strong><button type="button" class="service-details-button" aria-expanded="false">Details +</button></div><button class="add-cart add-cart-service" type="button" data-add-cart="service:${cat.id}:${i}">＋ Add to Cart</button></div></div>
          <div class="service-details"><p>${safeAttr(service.description)}</p><span class="step-pill">${service.steps ? service.steps + ' steps' : 'Details available on request'}${service.duration ? ' · ' + safeAttr(service.duration) : ''}</span></div>
        </article>`).join('')}</div></section>`).join('');
  sections.addEventListener('click', event => {
    const button = event.target.closest('.service-details-button');
    if (!button) return;
    const card = button.closest('.service-card');
    const expanded = card.classList.toggle('is-expanded');
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Close −' : 'Details +';
  });
  nav.addEventListener('click', event => {
    const anchor = event.target.closest('a[data-cat]');
    if (!anchor) return;
    nav.querySelectorAll('.service-nav-btn').forEach(element => element.classList.toggle('is-active', element === anchor));
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      const active = visible[0].target.id.replace('category-', '');
      nav.querySelectorAll('.service-nav-btn').forEach(el => el.classList.toggle('is-active', el.dataset.cat === active));
    }, {rootMargin: '-120px 0px -45% 0px', threshold: [0, .1, .25, .5]});
    sections.querySelectorAll('.service-category').forEach(section => observer.observe(section));
  }
}

function renderPackages() {
  document.getElementById('packages-grid').innerHTML = packages.map(pack => `
    <article class="package-card ${pack.highlight ? 'highlight' : ''}">
      <div class="package-card-image"><img loading="lazy" src="${photo(pack.image, 1050)}" alt="${safeAttr(pack.name)} inspiration" onerror="this.style.visibility='hidden'" /><span class="package-ribbon">${safeAttr(pack.ribbon)}</span></div>
      <div class="package-body"><h3>${safeAttr(pack.name)}</h3><div class="package-tag">“${safeAttr(pack.tag)}”</div>
      <div class="package-rate"><strong>${money(pack.price)}</strong>${pack.oldPrice ? `<del>${money(pack.oldPrice)}</del>` : ''}</div>
      <ul class="package-features">${pack.features.map(feature => `<li><span>✓</span>${safeAttr(feature)}</li>`).join('')}</ul>
      <div class="package-note">✦ ${safeAttr(pack.note)}</div>
      <div class="package-actions"><button type="button" class="package-add-button" data-add-cart="package:${pack.id}">＋ ADD TO CART</button><button type="button" class="package-button" data-book-package="${safeAttr(pack.name)}">BOOK NOW <span>↗</span></button></div></div>
    </article>`).join('');
  document.getElementById('packages-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-book-package]');
    if (!button) return;
    document.getElementById('booking-package').value = button.dataset.bookPackage;
    document.getElementById('booking-service').value = 'Packages / Bridal';
    document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
    document.querySelector('#booking input[name="fullName"]').focus({preventScroll: true});
  });
}

function renderGallery() {
  document.getElementById('gallery-grid').innerHTML = gallery.map(g => `<div class="gallery-item"><img loading="lazy" src="${photo(g.image, 950)}" alt="${safeAttr(g.title)} inspiration photograph" onerror="this.style.visibility='hidden'" /><span>${safeAttr(g.title)}</span></div>`).join('');
}

function renderOffers() {
  document.getElementById('offers-grid').innerHTML = offers.map(offer => `
    <article class="offer-card ${offer.featured ? 'offer-featured' : ''}">
      <div class="offer-top"><span class="offer-ribbon">✦ ${safeAttr(offer.ribbon)}</span><span class="offer-number">THE ROYAL EDIT</span></div>
      <h3>${safeAttr(offer.name)}</h3><p class="offer-time">◷ ${safeAttr(offer.time)}</p>
      <ul>${offer.features.map(feature => `<li>${safeAttr(feature)}</li>`).join('')}</ul>
      <div class="offer-price-line"><div><small>INDICATIVE OFFER PRICE</small><strong>${offer.price == null ? 'Confirm Price' : money(offer.price)}</strong></div><button type="button" data-add-cart="offer:${offer.id}" aria-label="Add ${safeAttr(offer.name)} to cart">＋ Add</button></div>
    </article>`).join('');
}

function setupBooking() {
  const serviceSelect = document.getElementById('booking-service');
  serviceSelect.innerHTML = '<option value="">Choose a service</option>' + categories.map(c => `<option value="${safeAttr(c.name)}">${safeAttr(c.name)}</option>`).join('') + '<option value="Packages / Bridal">Packages / Bridal</option><option value="Other / Consultation">Other / Consultation</option>';
  const packageSelect = document.getElementById('booking-package');
  packageSelect.innerHTML = '<option value="None">No package selected</option>' + [...packages, ...offers].map(p => `<option value="${safeAttr(p.name)}">${safeAttr(p.name)}</option>`).join('');
  packageSelect.addEventListener('change', () => { if (packageSelect.value !== 'None') serviceSelect.value = 'Packages / Bridal'; });
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const dateInput = document.getElementById('booking-date');
  dateInput.min = localDate;
  const bookingNote = document.getElementById('booking-note');
  const submitButton = document.querySelector('.form-submit');
  if (!whatsappNumber) {
    submitButton.innerHTML = 'Prepare Booking Request <span>↗</span>';
    bookingNote.textContent = 'Business WhatsApp number is not configured yet. You can prepare and copy your request below.';
  }
  const form = document.getElementById('booking-form');
  const result = document.getElementById('form-result');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.date < dateInput.min) { dateInput.setCustomValidity('Please choose today or a future date.');dateInput.reportValidity();return; }
    const message = [`Hello ${cfg.businessName || 'The Royal Beauty'}! I'd like to request an appointment.`, '', `Name: ${data.fullName}`, `Phone: ${data.phone}`, `WhatsApp: ${data.whatsapp || data.phone}`, `Location: ${data.location}`, `Service: ${data.service}`, `Package: ${data.package}`, `Preferred Date: ${data.date}`, `Preferred Time: ${data.time}`, `Area: ${data.area}`, `Notes: ${data.notes || 'None'}`, ...(cart.length ? ['', 'ENQUIRY CART:', ...cart.map(item => { const product = lookupItem(item.key); return product ? `• ${product.name} × ${item.qty}${product.price == null ? ' (price to confirm)' : ` — ${money(product.price * item.qty)} indicative`}` : ''; }).filter(Boolean)] : []), '', 'Please confirm availability, individual prices, any discounts and the appointment before accepting this booking.'].join('\n');
    if (whatsappNumber) {
      const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      const popup = window.open(link, '_blank', 'noopener,noreferrer');
      result.hidden = false;
      result.textContent = 'Your WhatsApp request is ready. Please send the pre-filled message and wait for a confirmation.';
      if (!popup) {
        const a = document.createElement('a');a.href = link;a.target = '_blank';a.rel = 'noopener noreferrer';a.textContent = 'Open WhatsApp to send request ↗';result.append(document.createElement('br'), a);
      }
    } else {
      result.hidden = false;
      result.textContent = 'BOOKING REQUEST (copy below and send to the salon once their WhatsApp number has been added)\n\n' + message;
      const copy = document.createElement('button');copy.type = 'button';copy.textContent = 'Copy Booking Details';
      copy.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(message);copy.textContent = 'Copied ✓'; }
        catch (_) { const textarea = document.createElement('textarea');textarea.value=message;document.body.append(textarea);textarea.select();document.execCommand('copy');textarea.remove();copy.textContent='Copied ✓'; }
      });
      result.append(copy);
    }
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  dateInput.addEventListener('change', () => dateInput.setCustomValidity(''));
}

function setupNavigation() {
  const menuButton = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const close = () => {menu.hidden = true;document.body.classList.remove('menu-open');menuButton.setAttribute('aria-expanded', 'false');menuButton.setAttribute('aria-label', 'Open navigation');};
  menuButton.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', close));
  document.addEventListener('keydown', event => {if (event.key === 'Escape') close();});
  document.addEventListener('click', event => {if (!menu.hidden && !event.target.closest('.site-header')) close();});
  const backToTop = document.getElementById('back-to-top');
  backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  window.addEventListener('scroll', () => backToTop.classList.toggle('show', window.scrollY > 900), {passive:true});
    if (whatsappNumber) {const link = document.getElementById('quick-whatsapp');link.href='https://wa.me/'+whatsappNumber;link.target='_blank';link.rel='noopener noreferrer';}
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}


// Enquiry cart: prices are indicative. No payments are collected.
const CART_KEY = 'royalBeautyEnquiryCartV1';
let cart = [];
try { const saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); if (Array.isArray(saved)) cart = saved.filter(x => typeof x.key === 'string' && Number.isInteger(x.qty) && x.qty > 0 && x.qty <= 20).slice(0, 30); } catch(_) {}
function lookupItem(key) {
  const [type, id, index] = key.split(':');
  if (type === 'service') { const category = categories.find(c => c.id === id); const s = category?.services[Number(index)];return s && Number.isInteger(Number(index)) && Number(index) >= 0 ? {...s, key, type} : null; }
  if (type === 'package') {const p = packages.find(p => p.id === id);return p ? {...p, key, type} : null;}
  if (type === 'offer') {const offer = offers.find(p => p.id === id);return offer ? {...offer, key, type} : null;}
  return null;
}
function persistCart() {try {localStorage.setItem(CART_KEY,JSON.stringify(cart));} catch (_) {}renderCart();}
function addToCart(key) {const product = lookupItem(key);if(!product)return;const line=cart.find(x=>x.key===key);if(line){if(line.qty<20)line.qty++;}else cart.push({key,qty:1});persistCart();showCartToast(`${product.name} added to cart`);}
function showCartToast(msg) {const toast=document.getElementById('cart-toast');toast.textContent=msg;toast.hidden=false;clearTimeout(showCartToast.timer);showCartToast.timer=setTimeout(()=>toast.hidden=true,2500);}
function openCart() {const drawer=document.getElementById('cart-drawer');const backdrop=document.getElementById('cart-backdrop');drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');backdrop.hidden=false;document.body.classList.add('cart-open');document.getElementById('cart-close').focus();}
function closeCart() {const drawer=document.getElementById('cart-drawer');drawer.classList.remove('is-open');drawer.setAttribute('aria-hidden','true');document.getElementById('cart-backdrop').hidden=true;document.body.classList.remove('cart-open');}
function renderCart() {
  const count=cart.reduce((sum,item)=>sum+item.qty,0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=String(count));
  const list=document.getElementById('cart-lines'); const summary=document.getElementById('cart-subtotal');
  const existing=cart.map(line=>({line, product:lookupItem(line.key)})).filter(x=>x.product);
  let total=0,unknown=0;
  list.innerHTML= existing.length ? existing.map(({line,product})=>{if(product.price!=null)total+=product.price*line.qty;else unknown++;return `<div class="cart-line"><div><strong>${safeAttr(product.name)}</strong><small>${product.price==null?'Price to confirm':money(product.price)+' indicative'} · ${safeAttr(product.type)}</small></div><div class="cart-line-actions"><button type="button" data-cart-update="minus" data-cart-key="${safeAttr(line.key)}" aria-label="Decrease ${safeAttr(product.name)}">−</button><span>${line.qty}</span><button type="button" data-cart-update="plus" data-cart-key="${safeAttr(line.key)}" aria-label="Increase ${safeAttr(product.name)}">+</button><button type="button" class="cart-remove" data-cart-update="remove" data-cart-key="${safeAttr(line.key)}" aria-label="Remove ${safeAttr(product.name)}">×</button></div></div>`;}).join('') : '<div class="cart-empty"><span>✦</span><strong>Your beauty ritual starts here.</strong><p>Browse services or special offers and tap “Add to Cart”.</p><a href="#services" id="cart-browse">Explore Services ↗</a></div>';
  summary.innerHTML = `<span>Estimated known-price total</span><strong>${money(total)}</strong>${unknown?`<small>${unknown} item type(s) awaiting price confirmation</small>`:''}<small>Final pricing, bundles and availability will be confirmed by the salon.</small>`;
  document.getElementById('cart-checkout').disabled = !existing.length;
  const bookingSummary=document.getElementById('booking-cart-summary');bookingSummary.hidden=!existing.length;
  bookingSummary.innerHTML=existing.length?`<strong>YOUR CART (${count} ITEM${count!==1?'S':''})</strong><ul>${existing.map(({line,product})=>`<li>${safeAttr(product.name)} × ${line.qty}</li>`).join('')}</ul><small>Estimated total for priced items: ${money(total)} · Final quote pending confirmation.</small>`:'';
}
function setupCart() {
  document.addEventListener('click', event=>{
    const add=event.target.closest('[data-add-cart]');if(add){addToCart(add.dataset.addCart);return;}
    if(event.target.closest('.cart-trigger')){openCart();return;}
    const action=event.target.closest('[data-cart-update]'); if(action){const line=cart.find(c=>c.key===action.dataset.cartKey);if(!line)return;if(action.dataset.cartUpdate==='remove')cart=cart.filter(c=>c!==line);if(action.dataset.cartUpdate==='plus')line.qty=Math.min(20,line.qty+1);if(action.dataset.cartUpdate==='minus'){line.qty--;if(line.qty<1)cart=cart.filter(c=>c!==line);}persistCart();return;}
    if(event.target.closest('#cart-browse'))closeCart();
  });
  document.getElementById('cart-backdrop').addEventListener('click',closeCart);
  document.getElementById('cart-close').addEventListener('click',closeCart);
  document.getElementById('cart-clear').addEventListener('click',()=>{cart=[];persistCart();});
  document.getElementById('cart-checkout').addEventListener('click',()=>{closeCart();document.getElementById('booking-service').value=cart.some(line=>!line.key.startsWith('service:')) ? 'Packages / Bridal' : (categories.find(c=>c.id===cart[0]?.key.split(':')[1])?.name || 'Other / Consultation');document.getElementById('booking').scrollIntoView({behavior:'smooth'});});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeCart();});
  renderCart();
}

renderServices();
renderPackages();
renderOffers();
renderGallery();
setupBooking();
setupNavigation();
setupCart();
