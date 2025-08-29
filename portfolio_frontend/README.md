# Sathish Kumar - Portfolio Frontend

A modern, responsive, and minimal personal portfolio built with React, TailwindCSS, and Framer Motion.

## Features
- Sticky navigation bar with smooth scroll
- Light/Dark mode toggle with persistence (localStorage)
- Animated hero with soft background accents
- Experience timeline (scroll animations)
- Skills grid with indicators
- Projects grid with action links
- Education cards
- Contact form with validation + EmailJS integration
- Floating WhatsApp button (FAB)
- Mock AI chat popup at bottom-left
- Accessibility-first and responsive
- Performance: lazy UI patterns, efficient CSS

## Quick Start
1. Install dependencies
```bash
npm install
```

2. Copy environment file and fill values
```bash
cp .env.example .env
# Fill REACT_APP_EMAILJS_* and REACT_APP_WHATSAPP_NUMBER
```

3. Run the app
```bash
npm start
```

## Environment Variables
- REACT_APP_EMAILJS_PUBLIC_KEY
- REACT_APP_EMAILJS_SERVICE_ID
- REACT_APP_EMAILJS_TEMPLATE_ID
- REACT_APP_SITE_URL
- REACT_APP_WHATSAPP_NUMBER

## Structure
- src/components/* — UI components by section
- src/App.js — composition of all sections
- Tailwind configured via tailwind.config.js and postcss.config.js

## Notes
- EmailJS requires the template to include variables: name, email, message.
- WhatsApp FAB uses REACT_APP_WHATSAPP_NUMBER to build a wa.me link.

## License
MIT
