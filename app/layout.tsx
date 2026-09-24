import type { Metadata } from 'next';
import './globals.css';
import {SectionMotion} from './components/ProductMotion';
export const metadata: Metadata = {
 metadataBase:new URL('https://drinktnat.com'),
 title:{default:'TNAT | Seven ingredients. Nothing else.',template:'%s | TNAT'},
 description:'A refrigerated chocolate whey protein concentrate shake in development. Seven ingredients, sweetened with raw Florida honey. Get TNAT launch updates.',
 openGraph:{siteName:'TNAT',url:'https://drinktnat.com',title:'TNAT — Chocolate',description:'Seven ingredients. Nothing else. A refrigerated whey protein concentrate shake in development.',images:[{url:'https://drinktnat.com/assets/tnat-honey-bottle.png',width:1122,height:1402,alt:'TNAT Chocolate and raw Florida honey packaging concept, 32g protein and 220 calories estimated'}]},
 twitter:{card:'summary_large_image',title:'TNAT — Chocolate',description:'Seven ingredients. Nothing else.',images:['https://drinktnat.com/assets/tnat-honey-bottle.png']},
 icons:{icon:'/assets/tnat-co-monogram.png'}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<SectionMotion/></body></html>}
