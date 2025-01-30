# Hello-Nextjs-15-Authjs-v5-Prisma-Supabase

## Nextjs 15

https://nextjs.org/docs/app/getting-started

```bash
❯ npx create-next-app@latest
✔ What is your project named? … hello-nextjs15-authjs-supabase
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
```

## Auth.js v5

https://authjs.dev/getting-started

```bash
❯ pnpm add next-auth@beta
❯ npx auth secret
```

## Prisma

https://www.prisma.io/nextjs

```bash
❯ pnpm install prisma --save-dev
❯ pnpm install @prisma/client @auth/prisma-adapter

❯ npx prisma init --datasource-provider postgresql

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started
```

### Prisma Authjs Adapter

https://authjs.dev/getting-started/adapters/prisma?framework=next-js

[schema.prisma](./prisma/schema.prisma)

```prisma
model Account {
  id                 String  @id @default(cuid())
  userId             String  @map("user_id")
  type               String
  provider           String
  providerAccountId  String  @map("provider_account_id")
  refresh_token      String? @db.Text
  access_token       String? @db.Text
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String? @db.Text
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique @map("session_token")
  userId       String   @map("user_id")
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime? @map("email_verified")
  image         String?
  accounts      Account[]
  sessions      Session[]

  @@map("users")
}

model VerificationToken {
  identifier String
  token      String
  expires    DateTime

  @@unique([identifier, token])
  @@map("verification_tokens")
}
```

### Supabase

https://supabase.com/docs/guides/getting-started

```bash
❯ pnpm install supabase --save-dev
```

### env

#### .env

```env
# local
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres?pgbouncer=true&connection_limit=10
DIRECT_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
```

#### .evn.local

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_VERCEL_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<yours>

AUTH_URL=http://localhost:3000
AUTH_SECRET=ZAY4sdYx4HvxhNLh943yzXInOvEK+ycAu+Py3FaO7RY= # Added by `npx auth`. Read more: https://cli.authjs.dev

AUTH_KAKAO_ID=<yours>
AUTH_KAKAO_SECRET=<yours>

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```
# hello-nextjs15-authjs-supabase
