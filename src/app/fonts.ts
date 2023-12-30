import localFont                   from 'next/font/local'

export const camila = localFont({
  src: [
    {
      path: './Camila.otf', weight: '400', style: 'normal',
    }, {
      path: './Camila.otf', weight: '700', style: 'bold',
    },
  ]
})
export const bodoni = localFont({
  src: [
    {
      path: './BodoniMT.ttf', weight: '400', style: 'normal'
    }, {
      path: './BodoniBold.ttf', weight: '700', style: 'bold'
    },
    {
      path: './BodoniBoldItalic.ttf',
      weight: '700', style: 'bold-italic'
    },
    {
      path: './BodoniItalic.ttf',
      weight: '400', style: 'italic'
    },
    {
      path: './BodoniRegular.ttf',
      weight: '400', style: 'regular'
    }
  ]
})
