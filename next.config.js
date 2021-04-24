const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
});

module.exports = withNextra({
    poweredByHeader: false,
    async redirects() {
        return [
            {
                source: '/mod_special_cases:journeymap',
                destination: '/pack-admin/how-do-i/add-liteloader',
                permanent: true,
            },
        ];
    },
});
