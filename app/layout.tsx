import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase:new URL('https://drinktnat.com'),
 title:{default:'Drink TNAT | Seven ingredients. Nothing else.',template:'%s | Drink TNAT'},
 description:'A refrigerated chocolate whey isolate shake in development. Seven ingredients, sweetened with monk fruit. Get TNAT launch updates.',
 openGraph:{siteName:'Drink TNAT',url:'https://drinktnat.com',title:'Drink TNAT — Chocolate',description:'Seven ingredients. Nothing else. A refrigerated whey isolate shake in development.',images:[{url:'https://drinktnat.com/og-tnat-v2.png',width:1200,height:630}]},
 twitter:{card:'summary_large_image',title:'Drink TNAT — Chocolate',description:'Seven ingredients. Nothing else.',images:['https://drinktnat.com/og-tnat-v2.png']},
 icons:{icon:'/assets/tnat-co-monogram.png'}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
