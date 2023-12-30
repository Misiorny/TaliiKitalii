import { Raleway, Dancing_Script } from 'next/font/google'
import localFont                   from 'next/font/local'

export const raleway = Raleway({
  weight: ['100', '400', '700', '800'], subsets: ['latin'],
})

export const ds = Dancing_Script({
  weight: ['400', '700'], subsets: ['latin'],
})

export const camila=localFont({
  src:[
    {
      path: './Camila.otf',  weight: '400',
      style: 'normal',
    },
    {
      path: './Camila.otf',  weight: '700',
      style: 'bold',
    },
    ]
})
export const bodoni=localFont({
  src:[
    {
      path: './BodoniMT.ttf',
      weight: '400', style: 'normal'
    },
    {
      path: './BOD_B.TTF',
      weight: '700', style: 'bold'
    },
    {
      path: './BOD_BI.TTF',
      weight: '700', style: 'bold-italic'
    },
    {
      path: './BOD_I.TTF',
      weight: '400', style: 'italic'
    },
    {
      path: './BOD_R.TTF',
      weight: '400', style: 'regular'
    }
    ]
})
