# ATLauncher Wiki

Static wiki written with Markdown using Astro, [Starlight](https://starlight.astro.build/) and hosted using Cloudflare
Pages at <https://wiki.atlauncher.com>.

## Setting up

You'll need to have Node 20 installed on your system. Using a package manager like
[nodenv](https://github.com/nodenv/nodenv) or [nvm-windows](https://github.com/coreybutler/nvm-windows) is recommended.

Then you need to install the dependencies by running `npm install` in the root of the project.

Then you can run `npm run dev` to start the dev server.

## Adding/Editing Pages

Any `.md` or `.mdx` files hosted under the `src/content/docs` directory will automatically be turned into a page as
well as be added to the sidebar.

## Creating Images

If you want to create images to use in the wiki, please make sure that our
[Branding Colours](https://atlauncher.com/branding) are used where possible.

For screenshots, please use our [ShareX Effect](./Background (ATLauncher).sxie) to make the screenshots look nicer and
consistent. For any callouts such as boxes, pointers, numbers, etc, please use hex colour `#F23C3C`.

All images should be saved in the `src/assets` directory, rather than the `public` directory so that they can be
processed by Astro.

## Deployment

This repository is automatically set to deploy with [Cloudflare Pages](https://pages.cloudflare.com/) to
<https://wiki.atlauncher.com>.

## Contributing

If you wish to contribute, please see the `CONTRIBUTING.md` file in the root of this repository.

## License

This code is licensed under the MIT license. For more details see the `LICENSE` file in the root of this repository.
