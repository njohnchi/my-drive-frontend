import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './formkit.theme.ts',
  ],
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      color: {
        primary: '#4ade80',
      },
    },
  },
}
