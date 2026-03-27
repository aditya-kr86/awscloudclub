# AWS Cloud Club - GCE Gaya

A learning website for AWS Cloud Club members at GCE Gaya.

## Features
- Landing page with club overview
- Session handbooks for easy reference
- Dark/Light mode toggle
- Responsive design (mobile-friendly)
- Violet theme for light mode, AWS orange for dark mode

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

### First-time setup:

1. Create a GitHub repository (e.g., `awscloudclub`)

2. Update `package.json` homepage field:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/awscloudclub"
   ```

3. Update `vite.config.ts` base path:
   ```ts
   base: '/awscloudclub/'
   ```

4. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/awscloudclub.git
   git branch -M main
   git push -u origin main
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

6. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

### Subsequent deployments:
```bash
npm run deploy
```

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- gh-pages

## Project Structure
```
src/
├── components/     # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── context/        # React context providers
│   └── ThemeContext.tsx
├── pages/          # Page components
│   ├── Home.tsx
│   ├── Sessions.tsx
│   ├── Session1.tsx
│   └── Session2.tsx
├── App.tsx         # Main app with routing
├── main.tsx        # Entry point
└── index.css       # Tailwind styles
```

## Theme Toggle
The website supports both light and dark modes:
- **Light Mode**: Violet color scheme with white backgrounds
- **Dark Mode**: AWS orange accents with dark backgrounds
- Theme preference is saved to localStorage
