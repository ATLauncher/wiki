import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidatorPlugin from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'ATLauncher Wiki',
            social: {
                github: 'https://github.com/ATLauncher',
                discord: 'https://atl.pw/discord',
            },
            pagination: false,
            logo: {
                src: './src/assets/logo.svg',
            },
            editLink: {
                baseUrl: 'https://github.com/ATLauncher/wiki/edit/master/',
            },
            sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: { directory: 'getting-started' },
                },
                {
                    label: 'Guides',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'API Docs',
                    autogenerate: { directory: 'api-docs' },
                    collapsed: true,
                },
                {
                    label: 'Platform Docs (Pack Admin)',
                    autogenerate: { directory: 'pack-admin' },
                    collapsed: true,
                },
            ],
            plugins: [starlightImageZoom(), starlightLinksValidatorPlugin()],
        }),
    ],
});
