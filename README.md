# Marcel Park's Portfolio

Welcome to my personal portfolio! I am a **Full-Stack Solution Architect & Lead Developer** based in Nürnberg, Germany. This project showcases my professional work, personal milestones, and the cutting-edge technologies I love to work with.

This repository is **open source**—feel free to explore my code, learn from my style, or use it as a template for your own portfolio.

## 🚀 Tech Stack

I believe in using the latest and most efficient tools to build high-quality software. This portfolio is built with:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Linting & Formatting:** [Biome](https://biomejs.dev/) via [Ultracite](https://github.com/ultracite/ultracite)
- **Runtime:** [Bun](https://bun.sh/)

## 🤖 AI Philosophy

I am fortunate to have learned to code before the major AI breakthrough. This foundation allows me to understand the "why" and "how" behind the code, enabling me to immediately spot when AI produces incorrect or suboptimal results.

I view AI as a powerful tool—much like the evolution from Assembly to high-level languages. It doesn't replace the need for engineering skills; rather, it allows us to express complex logic more naturally and build more sophisticated systems faster. I use AI efficiently to accelerate my workflow while maintaining strict human oversight and code quality.

## 🎨 Coding Style & Standards

Code quality is non-negotiable. This project follows strict standards enforced by **Ultracite** and **Biome**.
- **Zero-config quality:** Automated linting and formatting.
- **Modern Standards:** Prioritizing accessibility, type-safety, and performance.
- **Clean Code:** Focused on clarity and explicit intent.

You can find more details about the specific standards in [GEMINI.md](./GEMINI.md).

## 🛠️ Getting Started

To run this project locally, make sure you have [Bun](https://bun.sh/) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/code-guerilla/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Run the development server:**
   ```bash
   bun run dev
   ```

4. **Open the app:**
   Navigate to `http://localhost:3000`.

## ⚙️ How to Customize

Want to use this for your own portfolio? Follow these steps:

1. **Update Personal Data:**
   Open `data/resume.tsx` and replace the information in the `DATA` object with your own details, work experience, and projects.

2. **Localization & Translations:**
   This portfolio supports multi-language (English and German). Update the text in:
   - `messages/en.json`
   - `messages/de.json`

3. **Change the Profile Image:**
   Replace the profile picture at `public/me.png` with your own (keeping the same filename or updating the `avatarUrl` in `data/resume.tsx`).

4. **Deployment:**
   This project is optimized for [Vercel](https://vercel.com/). Connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by Marcel Park*
