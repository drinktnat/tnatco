import type { Metadata } from 'next';
import './globals.css';
import {SectionMotion} from './components/ProductMotion';
export const metadata: Metadata = {
 metadataBase:new URL('https://drinktnat.com'),
 title:{default:'beeast | Palmetto Honey Protein Milk',template:'%s | beeast'},
 description:'Real palmetto honey. Creamy dairy. A 30g+ protein target. Meet beeast Palmetto Honey Protein Milk, a refrigerated beverage in development. Look Beeyond the Label.',
 openGraph:{siteName:'beeast',url:'https://drinktnat.com',title:'beeast — Palmetto Honey Protein Milk',description:'A full serving of real palmetto honey. A 30g+ protein target. Formula in development.',images:[{url:'https://drinktnat.com/assets/beeast-palmetto-hero.png',width:1312,height:1199,alt:'beeast Palmetto Honey Protein Milk packaging concept'}]},
 twitter:{card:'summary_large_image',title:'beeast — Palmetto Honey Protein Milk',description:'Look Beeyond the Label. Formula in development.',images:['https://drinktnat.com/assets/beeast-palmetto-hero.png']},
 icons:{icon:'/favicon.svg'}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<SectionMotion/></body></html>}
