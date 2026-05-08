/* ===================================================
   DESIGNER — Tadian Ahmad Azeemi Portfolio
   app.js — GSAP Scroll Animations + Interactions
=================================================== */

// Force scroll to top on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

gsap.registerPlugin(ScrollTrigger);

/* ── Portfolio Data ── */
const portfolioItems = [
  // LOGOS
  { id:1, category:'logos', title:'Capital Auto Green', desc:'Bold automotive brand logo combining eco values with sharp modern typography, crafted in Adobe Illustrator.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/CAPITAL AUTO GREEN@4x-100.jpg', tag:'Logo Design' },
  { id:2, category:'logos', title:'Falcon Textile', desc:'Majestic falcon mascot logo representing strength and precision for a textile manufacturing company.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Falcoon Textile Logo Final 1.2 copy 4@4x-100.jpg', tag:'Logo Design' },
  { id:3, category:'logos', title:'Global Access', desc:'Sleek globe-inspired mark for an international business connectivity brand — clean, scalable, and memorable.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Global Access Logo@4x-100.jpg', tag:'Logo Design' },
  { id:4, category:'logos', title:'Wise Academy', desc:'Trust-inspiring educational logo blending scholastic symbolism with clean, modern typography.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Wise Academy Logo@4x-100.jpg', tag:'Logo Design' },
  { id:5, category:'logos', title:'Reliance Travel Services', desc:'Dynamic travel agency logo capturing the spirit of journey and global exploration.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Relience Travel Services Logo copy@4x-100.jpg', tag:'Logo Design' },
  { id:6, category:'logos', title:'T&W Leather Co.', desc:'Premium leather brand mark with artisanal craft and timeless sophistication — rich and refined.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/T&W Leather CO. logo@4x-100.jpg', tag:'Logo Design' },
  { id:7, category:'logos', title:'Modern Wordmark', desc:'Clean geometric wordmark crafted for a forward-thinking contemporary brand — minimal and versatile.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Logo@4x-100.jpg', tag:'Logo Design' },
  { id:8, category:'logos', title:'Custom Wonders', desc:'Creative brand mark with unique character and visual storytelling — designed for instant recognition.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Custom_Wonders.jpeg', tag:'Logo Design' },
  { id:9, category:'logos', title:'Mascot Logo', desc:'Character-driven mascot logo that builds brand personality and creates deep audience connection.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Mascot Type Logo@4x-100.jpg', tag:'Logo Design' },
  { id:10, category:'logos', title:'Combo Mark', desc:'Versatile combination mark merging icon and wordmark for maximum cross-platform brand flexibility.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Combo Type Logo@4x-100.jpg', tag:'Logo Design' },
  { id:11, category:'logos', title:'SA Fashion Brand', desc:'Elegant fashion brand identity with rich color variants designed for a premium luxury market.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Copy of SA Logo Color 1@4x-100.jpg', tag:'Logo Design' },
  { id:42, category:'logos', title:'Kingdom Pursuit Logo', desc:'Majestic corporate logo for Kingdom Pursuit, balancing authority and modern design.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Kingdom%20pursuit%20logo.jpg', tag:'Logo Design' },
  { id:12, category:'logos', title:'Falcon Wear Hub', desc:'Contemporary fashion retail logo reflecting urban style, trendy aesthetics, and modern branding.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Falcon_Wear_hub_logo.png', tag:'Logo Design' },
  { id:13, category:'logos', title:'Graphic Affect Agency', desc:'Agency identity mark designed for immediate impact and long-term brand recognition in creative markets.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Graphic_affect_Logo_updated.jpg', tag:'Logo Design' },
  { id:14, category:'logos', title:'Udhaarly App Icon', desc:'Vibrant app icon crafted for digital storefronts, balancing bold color and personality at every size.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Udhaarly_app_icon@4x.png', tag:'App Icon' },
  { id:15, category:'logos', title:'Zeltham', desc:'Modern brand identity with a sharp geometric aesthetic — built for digital-first brands and startups.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Zeltham.jpeg', tag:'Logo Design' },
  { id:16, category:'logos', title:'Trip Fellows', desc:'Travel brand logo capturing adventure and wanderlust — friendly, inviting, and globally appealing.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Trip_Fellows.jpeg', tag:'Logo Design' },
  { id:17, category:'logos', title:'The Standard Academy', desc:'Educational institution logo exuding trust, tradition, and academic excellence with modern elegance.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/The_Standard_Academy.jpeg', tag:'Logo Design' },
  { id:18, category:'logos', title:'FA Unicorn', desc:'Whimsical yet professional unicorn mark for a creative brand — balancing fun and sophistication.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/FA_Unicorn.jpeg', tag:'Logo Design' },
  { id:19, category:'logos', title:'JH Supply Network', desc:'Corporate supply chain logo with solid structure and trustworthy typography for B2B branding.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/JH_Supply_Network_logo.jpg', tag:'Logo Design' },
  { id:20, category:'logos', title:'ZPS Fast Service', desc:'Speed-focused service brand logo with dynamic lines and energetic color for fast delivery branding.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/ZPS_Fast_and_Quality_service.jpeg', tag:'Logo Design' },
  { id:21, category:'logos', title:'Capital Act Auto', desc:'Sharp automotive dealership logo radiating power, trust, and modern vehicle branding.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logos/Capital_act_auto.jpeg', tag:'Logo Design' },
  // BRANDING
  { id:22, category:'branding', title:'JH Professional Card', desc:'Executive business card with refined layout and strong typographic hierarchy — premium feel in print.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Business%20Cards/JH business Card@4x-100.jpg', tag:'Business Card' },
  { id:23, category:'branding', title:'Brand Card — Front', desc:'Premium card front featuring bold brand colors, logo placement, and clean information architecture.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Business%20Cards/front@4x-100.jpg', tag:'Business Card' },
  { id:24, category:'branding', title:'Brand Card — Back', desc:'Sophisticated card reverse with brand pattern and contact details perfectly balanced for impact.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Business%20Cards/back@4x-100.jpg', tag:'Business Card' },
  { id:25, category:'branding', title:'Falcon Corporate Letterhead', desc:'Official letterhead maintaining brand consistency across all corporate communications — professional and polished.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/LetterHeads/FALCON LETTER HEAD@4x.png', tag:'Letterhead' },
  { id:43, category:'branding', title:'Kingdom Pursuit Letterhead', desc:'Official corporate letterhead for Kingdom Pursuit, maintaining a clean and professional aesthetic.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/LetterHeads/Kingdom%20pursuit%20Serbia%20LetterHead.jpg', tag:'Letterhead' },
  { id:44, category:'branding', title:'Falcon Business Card', desc:'Executive business card for Falcon Textile, featuring premium layout and typography.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Business%20Cards/Falcon%20Textile%20Business%20Card.jpg', tag:'Business Card' },
  // PRINT
  { id:26, category:'print', title:'Nutrition & Health Flyer', desc:'Vibrant promotional flyer for a health brand — engaging layout, strong color strategy, and clear hierarchy.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Flyers%20%26%20Flexs/Nutrition Flyer@4x-100.jpg', tag:'Flyer Design' },
  { id:27, category:'print', title:'Quick Cart Standee 5×2ft', desc:'Large-format retail standee designed for maximum in-store visual impact and product promotion.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Flyers%20%26%20Flexs/Quick Cart Standee 5 x 2@4x-100.jpg', tag:'Standee Design' },
  { id:28, category:'print', title:'Promotional Stand Flyer', desc:'High-visibility promotional flyer crafted for event displays with bold visual flow and brand awareness.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Flyers%20%26%20Flexs/Stand Flyer@4x-100.jpg', tag:'Flyer Design' },
  { id:45, category:'print', title:'Nutrition Flyer', desc:'Full-page health and nutrition flyer featuring vibrant visuals and informative layouts.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Flyers%20%26%20Flexs/Nutrition%20Flyer.jpg', tag:'Flyer Design' },
  { id:46, category:'print', title:'Quick Cart Standee', desc:'Large-scale standee design for Quick Cart retail promotion — bold and eye-catching.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Flyers%20%26%20Flexs/Quick%20Cart%20Standee%205%20x%202.jpg', tag:'Standee Design' },
  // SOCIAL MEDIA
  { id:29, category:'social', title:'Carpet Wash Campaign', desc:'Eye-catching social media post for a cleaning services campaign with dominant color blocking and clear CTA.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Carpet Wash Post1@4x-100.jpg', tag:'Social Media' },
  { id:30, category:'social', title:'Discord Community Banner', desc:'Dynamic banner for a Discord server capturing community identity with modern gaming aesthetics.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Copy of Discord banner@4x-100.jpg', tag:'Banner Design' },
  { id:31, category:'social', title:'Wise Academy — FB Post', desc:'Educational social media post blending academic credibility with vibrant visual engagement for Facebook.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Wise Academy FB Post 2@4x-100.jpg', tag:'Social Media' },
  { id:32, category:'social', title:'Sofa Wash Promotion', desc:'Promotional social post for upholstery cleaning services with strong lifestyle visual appeal and CTA.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Sofa Wash Post2@4x-100.jpg', tag:'Social Media' },
  { id:33, category:'social', title:'Bonfire Café — Post 1', desc:'Warm, inviting café branding post with cozy aesthetics for social media marketing campaigns.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Bonfire_cafe_post_1.jpeg', tag:'Social Media' },
  { id:34, category:'social', title:'Bonfire Café — Post 2', desc:'Continuation of the Bonfire Café series — consistent brand voice with rich visual storytelling.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Bonfire_cafe_post_2.jpeg', tag:'Social Media' },
  { id:35, category:'social', title:'Bonfire Café — Post 3', desc:'Menu highlight post for Bonfire Café with appetite-driving photography and layout design.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Bonfire_cafe_post_3.jpeg', tag:'Social Media' },
  { id:36, category:'social', title:'Bonfire Café — Post 4', desc:'Brand awareness campaign post capturing café ambiance and lifestyle with compelling visual hierarchy.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Bonfire_cafe_post_4.jpeg', tag:'Social Media' },
  { id:37, category:'social', title:'Zeltham — Post 1', desc:'Tech brand social post with clean layouts and modern digital aesthetics for audience engagement.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Zeltham_post_1.jpeg', tag:'Social Media' },
  { id:38, category:'social', title:'Zeltham — Post 2', desc:'Product feature social media post for Zeltham with sharp product photography and layout.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Zeltham_post_2.jpeg', tag:'Social Media' },
  { id:39, category:'social', title:'Zeltham — Post 3', desc:'Brand value communication post with minimalist design language and bold messaging.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Zeltham_post_3.jpeg', tag:'Social Media' },
  { id:40, category:'social', title:'Zeltham — Post 4', desc:'Campaign wrap-up post for Zeltham combining data visuals with clean brand aesthetics.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Post%20Designs/Zeltham_post_4.jpeg', tag:'Social Media' },
  // PACKAGING
  { id:41, category:'packaging', title:'SA Fashion Packaging', desc:'Luxurious golden packaging design for a premium fashion brand — elegant, aspirational, and shelf-ready.', image:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Mockups%20%26%20Packaging/SA Fashion Golden@3x.jpg', tag:'Packaging' },
];

const motionItems = [
  {
    id:1, title:'Graphic Affect — Logo Animation',
    desc:'After Effects logo reveal animation with dynamic motion curves, easing, and brand-consistent timing. Built for use in video intros and digital media.',
    video:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logo%20Animations/Copy of Graphic Affect Logo Animation 0.mp4', tag:'After Effects'
  },
  {
    id:2, title:'Global Access — Brand Animation',
    desc:'Cinematic logo animation bringing the Global Access brand to life with fluid transitions, layered motion, and polished finishing.',
    video:'https://raw.githubusercontent.com/tadianazeemi/Tadian_Portfolio/main/Logo%20Animations/Global Access Logo_1.mp4', tag:'Motion Graphics'
  },
];

/* ── Custom Cursor ── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  gsap.to(cursor, { x: mx, y: my, duration: 0 });
});

(function followCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  gsap.set(follower, { x: fx, y: fy });
  requestAnimationFrame(followCursor);
})();

document.querySelectorAll('a, button, .portfolio-card, .motion-card, .filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

/* ── Hero Animation ── */
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTL
  .to('#heroBadge', { opacity: 1, y: 0, duration: .6 }, .1)
  .from('.hero-title-line', { y: 80, opacity: 0, stagger: .1, duration: .7, ease: 'expo.out' }, .3)
  .from('#heroSub', { y: 20, opacity: 0, duration: .6 }, .8)
  .from('#heroActions', { y: 15, opacity: 0, duration: .5 }, 1.1);

/* ── Enhanced Stat Counters + Ring Animation ── */

/* Inject SVG gradient definition for rings */
const svgDef = document.createElementNS('http://www.w3.org/2000/svg','svg');
svgDef.setAttribute('width','0');
svgDef.setAttribute('height','0');
svgDef.style.position='absolute';
svgDef.innerHTML = `<defs><linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#f59e0b"/>
</linearGradient></defs>`;
document.body.appendChild(svgDef);

/* Animate each ring + number + bar */
const circumference = 2 * Math.PI * 52; // r=52

document.querySelectorAll('.stat-card').forEach(card => {
  const ring = card.querySelector('.stat-ring-fill');
  const numberEl = card.querySelector('.stat-number');
  const barFill = card.querySelector('.stat-bar-fill');
  const target = +numberEl.dataset.target;
  const percent = +ring.dataset.percent;

  ScrollTrigger.create({
    trigger: card,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      // Animate ring stroke
      const offset = circumference - (circumference * percent / 100);
      ring.style.transition = 'stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1)';
      barFill.style.transition = 'width 0.8s cubic-bezier(.4,0,.2,1)';
      ring.style.strokeDashoffset = offset;
      ring.classList.add('animated');

      // Animate bar
      barFill.style.width = percent + '%';

      // Animate number with bounce
      gsap.to({ val: 0 }, {
        val: target, duration: 2.2, ease: 'power3.out',
        onUpdate: function() {
          numberEl.textContent = Math.round(this.targets()[0].val);
        },
      });

      // Scale-in glow pulse
      gsap.fromTo(card, 
        { boxShadow: '0 0 0 0 rgba(124,58,237,0)' },
        { boxShadow: '0 0 30px 4px rgba(124,58,237,0.2)', duration: 1.2, ease: 'power2.out',
          yoyo: true, repeat: 1 }
      );
    }
  });
});

/* ── Generic Reveal Animations ── */
function revealOnScroll(selector, extra = {}) {
  document.querySelectorAll(selector).forEach((el) => {
    gsap.to(el, {
      opacity: 1, x: 0, y: 0, duration: .4, /* Even faster duration */
      ease: 'power2.out',
      ...extra,
      scrollTrigger: { trigger: el, start: 'top 100%', once: true, /* Trigger as soon as it touches the bottom */
        onEnter: () => el.classList.add('revealed') }
    });
  });
}
revealOnScroll('.reveal-up');
revealOnScroll('.reveal-left');
revealOnScroll('.reveal-right');

/* ── Build Portfolio Cards ── */
const grid = document.getElementById('portfolioGrid');

portfolioItems.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'portfolio-card';
  card.dataset.category = item.category;
  card.style.opacity = '0'; /* Set to 0 so GSAP can fade it in */
  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" />
      <div class="card-overlay">
        <p class="card-overlay-text">${item.desc}</p>
      </div>
    </div>
    <div class="card-body">
      <span class="card-tag">${item.tag}</span>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-desc">${item.desc}</p>
    </div>`;
  card.addEventListener('click', () => openLightbox(item.image, item.title));
  grid.appendChild(card);
});

/* Stagger reveal for portfolio cards */
gsap.fromTo('.portfolio-card', 
  { opacity: 0, y: 20 }, 
  { 
    opacity: 1, 
    y: 0, 
    stagger: 0.05, 
    duration: 0.5, 
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#portfolioGrid',
      start: 'top 95%',
      toggleActions: 'play none none none',
      once: true
    }
  }
);

/* ── Filter Tabs ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    document.querySelectorAll('.portfolio-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .45, ease: 'power2.out' });
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ── Build Motion Cards ── */
const motionGrid = document.getElementById('motionGrid');

motionItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'motion-card reveal-up';
  card.innerHTML = `
    <div class="motion-video-wrap">
      <video src="${item.video}" loop muted playsinline preload="none" id="vid-${item.id}"></video>
      <div class="motion-play-btn" id="playBtn-${item.id}">
        <div class="play-icon">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    </div>
    <div class="motion-body">
      <span class="motion-tag">${item.tag}</span>
      <h3 class="motion-title">${item.title}</h3>
      <p class="motion-desc">${item.desc}</p>
    </div>`;
  motionGrid.appendChild(card);

  const vid = card.querySelector(`#vid-${item.id}`);
  const playBtn = card.querySelector(`#playBtn-${item.id}`);
  let playing = false;

  playBtn.addEventListener('click', () => {
    if (!playing) {
      vid.play(); playing = true;
      gsap.to(playBtn, { opacity: 0, duration: .3 });
    }
  });
  vid.addEventListener('click', () => {
    if (playing) {
      vid.pause(); playing = false;
      gsap.to(playBtn, { opacity: 1, duration: .3 });
    }
  });

  /* Autoplay when scrolled into view */
  ScrollTrigger.create({
    trigger: card,
    start: 'top 70%',
    end: 'bottom 20%',
    onEnter: () => { vid.play(); playing = true; gsap.to(playBtn, { opacity: 0, duration: .3 }); },
    onLeave: () => { vid.pause(); playing = false; gsap.to(playBtn, { opacity: 1, duration: .3 }); },
    onEnterBack: () => { vid.play(); playing = true; gsap.to(playBtn, { opacity: 0, duration: .3 }); },
    onLeaveBack: () => { vid.pause(); playing = false; gsap.to(playBtn, { opacity: 1, duration: .3 }); },
  });
});

/* Motion cards stagger */
gsap.from('.motion-card', {
  opacity: 0, y: 60, stagger: .15, duration: .9, ease: 'power3.out',
  scrollTrigger: { trigger: '#motionGrid', start: 'top 80%', once: true }
});

/* ── About Stack Cards ── */
['.s1','.s2','.s3'].forEach((sel, i) => {
  gsap.from(sel, {
    opacity: 0, scale: .85, rotation: 0, duration: 1.1,
    ease: 'power3.out', delay: i * .15,
    scrollTrigger: { trigger: '.about-card-stack', start: 'top 80%', once: true }
  });
});

/* ── Parallax Hero Blobs ── */
gsap.to('.hero-blob-1', {
  yPercent: 20, ease: 'none',
  scrollTrigger: { trigger: '.hero', scrub: 1.5 }
});
gsap.to('.hero-blob-2', {
  yPercent: -20, ease: 'none',
  scrollTrigger: { trigger: '.hero', scrub: 2 }
});

/* ── Section Titles Clip Animation ── */
document.querySelectorAll('.section-title').forEach(el => {
  gsap.from(el, {
    opacity: 0, y: 40, duration: .9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
  });
});

/* ── Lightbox ── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  gsap.from(lightboxImg, { scale: .88, opacity: 0, duration: .4, ease: 'power3.out' });
}
function closeLightbox() {
  gsap.to(lightbox, { opacity: 0, duration: .3, onComplete: () => {
    lightbox.classList.remove('open');
    lightbox.style.opacity = '';
    document.body.style.overflow = '';
  }});
}
lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ── Nav Scroll Behavior ── */
ScrollTrigger.create({
  start: 'top -80',
  onUpdate: self => {
    const nav = document.getElementById('navbar');
    nav.style.background = self.progress > 0
      ? 'rgba(8,8,15,0.95)' : 'rgba(8,8,15,0.7)';
  }
});

/* ── 3D Card Tilt on Hover ── */
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    gsap.to(card, { rotationX: rotX, rotationY: rotY, transformPerspective: 800, duration: .3, ease: 'power2.out' });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotationX: 0, rotationY: 0, duration: .5, ease: 'power3.out' });
  });
});
