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
      path: './BOD_B.ttf',
      weight: '700', style: 'bold'
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
