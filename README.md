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
## Website Support We Use
- https://neon.com/
- https://ui.shadcn.com/
- https://www.better-auth.com/
- https://orm.drizzle.team/
- https://resend.com/docs/send-with-nextjs
- https://new.email/

```bash
npx shadcn@latest init 
npx shadcn@latest add button sooner dialog dan lainnya
npx shadcn add @tailark/hero-section-2          = dari web https://tailark.com/hero-section
npx shadcn add @tailark/features-1              = dari web tailark juga
npx shadcn add @tailark/call-to-action-1
npx shadcn add @tailark/footer-1
npx shadcn@latest add sidebar-02

```
## Authentication Setup
```bash
npm install better-auth
BETTER_AUTH_SECRET=O5TZaXuTE6FptmA2c5BLNyCyQTD5ssXJ
create auth.ts                                  = liat docs better-auth drizzel
npm i drizzle-orm                               = liat docs drizzel with Neon
npm i -D drizzle-kit
npm i @neondatabase/serverless
ambil connection string di neon
create folder db/db.ts drizzel.config.ts ikutin docs / repo ini
npx @better-auth/cli generate                   = membuat auth-schema tapi pindahin ke db/schema.ts
npx drizzle-kit push                            = cara tercepat nya gitu
api/auth/[...all]/route.ts                      = copy di better-auth
lib/ auth-client.ts                             = copy lagi
npx shadcn@latest add login-01                  = template untuk login DLL

Email Verification Flow
npm install resend                              = ambil di website https://resend.com/docs/send-with-nextjs
https://new.email/                              = create me an email for user verification = create me now an email password reset
npm install @react-email/components @react-email/render     = paling penting

npx drizzle-kit push                           = Setelah membuat Schema atau Table
```