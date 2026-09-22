import WaitlistForm from './WaitlistForm';
export const ingredients = [
 ['Filtered water','The base. Nothing more.'],
 ['Whey protein isolate','Our planned protein source: grass-fed whey isolate. Contains milk.'],
 ['Coconut cream','For body and a creamy mouthfeel.'],
 ['Cocoa','Dutch-processed cocoa for the chocolate flavor.'],
 ['Sunflower lecithin','An emulsifier to help the fat and water mix.'],
 ['Sea salt','To round out the chocolate flavor.'],
 ['Monk fruit extract','Our only sweetener.']
];
export function Waitlist(){return <section className="waitlist-section shell" id="waitlist"><div><p className="eyebrow">Coming from Jupiter, Florida</p><h2>A shorter label.<br />A new beginning.</h2><p className="section-description">We’re developing our first chocolate shake. Join for launch news and updates from the first batches.</p></div><WaitlistForm id="footer" /></section>}
export function Numbers(){return <section className="bone"><div className="shell section"><p className="eyebrow">The formulation, in numbers</p><div className="spec-grid"><div><strong>25g<span>*</span></strong><span>Protein per bottle</span></div><div><strong>7</strong><span>Proposed ingredients</span></div><div><strong>150<span>*</span></strong><span>Calories per bottle</span></div></div><p className="fine nutrition-note">*Calculated estimates for a 12 fl oz bottle. Not lab-tested. Final nutrition and formula may change before launch.</p></div></section>}
export function Comparison(){return <section className="comparison-section shell section"><div className="section-heading"><div><p className="eyebrow">02 / Read both labels</p><h2>The details<br />make the difference.</h2></div><p className="section-description">Our proposed formula alongside two ready-to-drink products. Different choices, in plain sight.</p></div><div className="table-scroll" tabIndex={0} role="region" aria-label="Product comparison; scroll horizontally on small screens"><table className="comparison"><thead><tr><th scope="col">On the label</th><th scope="col" className="ours">TNAT Chocolate<small>Proposed formula</small></th><th scope="col">Premier Protein<small>Chocolate shake</small></th><th scope="col">RYSE Clear Whey<small>Tropical Punch RTD</small></th></tr></thead><tbody>{[
 ['Protein source','Whey isolate','Milk protein concentrate + calcium caseinate','Whey isolate'],
 ['Sweetener','Monk fruit','Sucralose + acesulfame potassium','Sucralose + acesulfame potassium'],
 ['Cellulose gum / gel','None','Both listed','Neither listed'],
 ['Carrageenan','None','Listed','Not listed'],
 ['Sorbate / benzoate preservatives','None','Neither listed','Both listed'],
 ['Artificial flavors','None','Listed','Listed']
].map(row=><tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((cell,i)=><td className={i===0?'ours':''} key={i}>{cell}</td>)}</tr>)}</tbody></table></div><p className="fine sources">Competitor information from <a href="https://www.premierprotein.com/products/chocolate-protein-shake" target="_blank" rel="noreferrer">Premier Protein</a> and <a href="https://rysesupps.com/products/clear-whey-rtd-protein" target="_blank" rel="noreferrer">RYSE</a> manufacturer labels, checked September 22, 2026. Formulas vary by flavor and may change. TNAT is in development; this comparison does not imply a health or safety advantage.</p></section>}
