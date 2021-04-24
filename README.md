# ATLauncher Wiki

Static wiki written with Markdown using Nextra and Next.js and hosted using Cloudflare Pages at
<https://wiki.atlauncher.com>.

## Development

To get setup you will need to make sure you have the following installed on your machine:

-   [NodeJS 14](https://nodejs.org/en/download/)
    -   check out [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)

We'll assume you're a capable developer, so we won't tell you how to go about installing those on your machine :)

Next clone this repo to a directory and then run `npm install` to install all the dependencies needed to run the
application.

Once installed you can run `npm run dev` to start the dev server. The server will be running at <http://localhost:3000>
and hot reload when any changes are made to files.

## Building

To build this application ready for running in production simply run `npm run build` which will compile everything with
Next.js into the `.next/` directory.

Once built simply run `npm run start` which will start up the Next.js server with the built files. The server will be
running at <http://localhost:3000>. You can optionally specify a `PORT` environment variable when running
(`PORT=5555 npm run start`).

## Adding/Editing Pages

Any `.md` or `.mdx` files hosted under the `pages` directory will automatically be turned into a page as well as be
added to the sidebar.

All added pages should be added into the `meta.json` file of the directory it's in to ensure correct ordering and naming
of any new pages.

## Deployment

This repository is automatically set to deploy with [Cloudflare Pages](https://pages.cloudflare.com/) to
<https://wiki.atlauncher.com>.

Cloudflare pages is only intended to run static sites, so adding in any sort of api routes with Next.js will not work
as Cloudflare pages doesn't run the server, it instead runs `next export` to generate all the static pages upfront and
just host them.

## Contributing

If you wish to contribute, please see the `CONTRIBUTING.md` file in the root of this repository.

## License

This code is licensed under the MIT license. For more details see the `LICENSE` file in the root of this repository.
