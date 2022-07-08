const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './*.{html,js}',
    ],
    theme: {
        screens: {
          sm: '375px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.25rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                managebrightred: 'hsl(12, 88%, 59%)',
                managepalered: 'hsl(233, 12%, 13%)',
                managedarkblue100: 'hsl(228, 39%, 23%)',
                managedarkblue200: 'hsl(233, 12%, 13%)',
                managelightgray: 'hsl(0, 0%, 98%)',
            },

            fontFamily: {
                sans: [
                    'Be Vietnam Pro, sans-serif',
                    ...defaultTheme.fontFamily.sans,
                ]
            },

            fontSize: {
                xs: ['0.8125rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.875rem', { lineHeight: '2.25rem' }],
                xl: ['2.5rem', { lineHeight: '2.75rem' }],
                '2xl': ['3.5rem', { lineHeight: '1' }],
            }
        },
    },
    plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')],
};
