This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Email Setup

The contact page already posts to `/api/contact`. To make submissions arrive in your inbox:

1. Create a `.env.local` file in the project root.
2. Copy the variables from `.env.example`.
3. For Gmail, use these values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=rwemera117@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM=CECOS Website <rwemera117@gmail.com>
CONTACT_RECIPIENT=rwemera117@gmail.com
```

Important: `SMTP_PASS` must be a Google App Password, not your normal Gmail password.

Once these variables are set, every website contact form submission will be emailed to `rwemera117@gmail.com` in a formatted HTML layout, and replies from your inbox will go back to the sender because the email uses `replyTo`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
