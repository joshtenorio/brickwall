# brickwall
A self-hosted service to send yourself messages and files
## TODO
- save message to db
- save files to db + `data/`
- retrieve messages on connection
- render images on client
- render videos on client
## Self Hosting
brickwall makes use of [next-ws](https://github.com/apteryxxyz/next-ws) - this means that you can't run brickwall on a serverless platform, as it is meant to run in server-based environments.
### Coolify
1. create a volume to `/app/data/`
2. set env vars `DATABASE_URL` and `NEXT_PUBLIC_WS_ENDPOINT` - the former should be something like `file:./data/db.sqlite` and the latter will be
`ws://{your_domain}/api/socket` where `{your_domain}` is the domain for the server you are hosting brickwall on, or if you don't have a domain then
it should be the IP address and port.
## Development
### Prerequisites
- `pnpm`
```bash
pnpm install
npx next-ws-cli@latest patch # apply patch for nextjs
pnpm dev
```
## License
MIT
# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
