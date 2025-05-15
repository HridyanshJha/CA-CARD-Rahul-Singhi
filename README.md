# CA Rahul Digital Contact Card

A sleek and modern digital ID card app that acts as a central hub for sharing your **contact details**, including **location**, **WhatsApp**, **email**, and more — built to offer a better interface and branding than traditional tools like Linktree.

## 🔗 Live Demo

https://ca-rahul-singhi.netlify.app/

## 📱 Features

- 🌟 Clean and responsive UI optimized for mobile
- 📍 Share your location
- 📞 WhatsApp and Email buttons
- 📷 QR Code generator
- 🧩 Custom logo integration (`CALogo`)
- 🎯 Built with modern tools: React, TypeScript, TailwindCSS, Vite

## 📂 Project Structure

```sh
├── components/
│ ├── ui/
│ │ ├── CALogo.tsx
│ │ ├── ContactButton.tsx
│ └── DigitalContactCard.tsx
├── hooks/
│ ├── use-mobile.tsx
│ └── use-toast.ts
├── lib/
│ └── generateQRCode.ts
├── pages/
│ ├── Index.tsx
│ └── NotFound.tsx
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── utils.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## 🚀 Tech Stack

- ⚛️ React + TypeScript
- 💨 Tailwind CSS for UI
- ⚡ Vite for fast development
- 📦 QR Code generation logic
- 🔄 Custom hooks for toast and mobile detection

## 🛠️ Installation

```sh
git clone https://github.com/yourusername/ca-rahul-idcard.git
cd ca-rahul-idcard
npm install
npm run dev
```
**🧪 Development Commands**
```sh
npm run dev — start development server

npm run build — production build

npm run lint — linting with ESLint
```

## 📌 Customization
Update DigitalContactCard.tsx to add or remove contact methods.

Modify CALogo.tsx to use your personal or business logo.

Add new buttons in ContactButton.tsx for any new platforms.

## 💡 Inspiration
Inspired by Linktree but designed for individuals who want a more interactive and visually rich way to share their contact details online.
