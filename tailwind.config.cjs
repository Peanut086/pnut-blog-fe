/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      commonBg: 'rgb(246, 248, 235)'
    }),
    extend: {
      height: {},
      fontSize: {
        'xxs': '0.5rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'tiny': '0.9375rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      backgroundImage: {
        'main-bg': "url('https://pnut.oss-cn-chengdu.aliyuncs.com/alchemy.gif?Expires=1666624662&OSSAccessKeyId=TMP.3KhYhPjRUNJfeuMwkv5tT8idHnEr5TiLbG1tL5PASnsu3LQBhdK3HYWMGzMeWW1kaFRLfvYM1bho6srYqMPwJgo7H4uWxT&Signature=14V5gX1G%2BaWcEmFGNBuv3S7erus%3D')",
      }
    },
  },
  plugins: [],
}
