# Faisal Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Pages
- Home
- Projects
- Writing
- Photography
- Culture
- Now
- About
- Contact

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content files
Update these first:
- `content/writing.ts`
- `content/photos.ts`
- `content/culture.ts`
- `content/now.ts`
- `content/projects.ts`

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to Vercel.
3. Import the repo.
4. Keep defaults.
5. Add `NEXT_PUBLIC_SITE_URL` in project environment variables.
6. Deploy.

## Notes
- OG image is provided as `public/og.svg`.
- Placeholder photography files are SVGs so you can replace them later with real images.

## SSH Setup for Multiple GitHub Accounts

If you manage multiple GitHub accounts on the same machine, configure a separate SSH key per account.

### 1. Generate a new SSH key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_<alias>
```

### 2. Add to SSH agent
```bash
ssh-add ~/.ssh/id_ed25519_<alias>
```

### 3. Add public key to GitHub
```bash
cat ~/.ssh/id_ed25519_<alias>.pub | pbcopy
```
→ GitHub → Settings → SSH and GPG keys → New SSH key → Paste → Save

### 4. Configure ~/.ssh/config