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
      path: './BOD_B.ttf', weight: '700', style: 'bold'
    },
    {
      path: './BOD_BI.ttf',
      weight: '700', style: 'bold-italic'
    },
    {
      path: './BOD_I.ttf',
      weight: '400', style: 'italic'
    },
    {
      path: './BOD_R.ttf',
      weight: '400', style: 'regular'
    }
  ]
})
