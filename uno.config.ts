import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['centered', 'fixed top-50% left-50% -translate-y-2/4 -translate-x-2/4'],
    ['ab-center', 'absolute top-50% left-50% -translate-y-2/4 -translate-x-2/4'],
    // ['brand-input', 'w-full  bg-gray-100 p-2 rounded-md focus:outline-none focus:bg-white hover:bg-gray-200 placeholder:hover:text-gray-400 text-[#] transition transition-shadow'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [{
          name: 'Montserrat',
          weights: [100, 200, 300, 400, 500, 600, 700, 800],
        },
        ],
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        fira: [
          {
            name: 'Fira Code',
            weights: [100, 200, 300, 400, 500, 600, 700, 800],
          },
        ],
      },

    }),
  ],
})
