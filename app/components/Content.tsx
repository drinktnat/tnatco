import WaitlistForm from './WaitlistForm';
import {RevealList} from './ProductMotion';
export const ingredients=[
 ['Filtered water','The foundation','A neutral base that lets the dairy and palmetto honey set the flavor. It helps create a drinkable texture.'],
 ['Fat-free ultra-filtered milk','Creamy dairy','Milk gives the drink its creamy character. Ultra-filtration concentrates milk protein while reducing some of the milk’s lactose; the finished drink is not being marketed as lactose-free.'],
 ['Whey protein concentrate','The protein','Whey concentrate adds dairy protein to the milk base. It retains some milk fat and lactose, and suits the creamy flavor we want in this formula.'],
 ['Palmetto honey','The main event','A full serving of real honey brings sweetness, character and carbohydrates. Its sugars count as added sugars in this beverage.'],
 ['Pure vanilla extract','A subtle finish','A light vanilla note rounds out the milk and honey. It supports the honey instead of covering it up.'],
 ['Sea salt','The balance','A small amount rounds out the sweetness and helps the flavor feel balanced.']
];
export function IngredientList(){return <RevealList className="ingredient-list">{ingredients.map(([name,role,body],i)=><article className="ingredient-row" data-reveal key={name}><span className="ingredient-number mono">0{i+1}</span><div><p className="eyebrow">{role}</p><h3>{name}</h3></div><p>{body}</p></article>)}</RevealList>}
export function Waitlist(){return <section className="waitlist" id="waitlist"><div className="shell waitlist-inner"><div><p className="eyebrow">Everyone’s invited.</p><h2>Bee first<br/>to know.</h2><p>Get beeast development and launch updates.</p></div><div><WaitlistForm id="footer"/><p className="fine">Formula in development. Finished-product testing is still pending. Not yet available for purchase.</p></div></div></section>}
export function TeamSection(){return <section className="honey-band"><div className="shell honey-intro"><p className="eyebrow">Florida first / Teams & Facilities</p><h2>A place in<br/>your fridge.</h2><div><p>For colleges, teams, gyms and training facilities. Planned coolers will serve everyday members as well as athletes. Start a conversation about future availability and program review.</p><a className="text-link" href="/wholesale">Talk to beeast →</a></div></div></section>}
