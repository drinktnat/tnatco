const nih = 'https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/';
const dairy = 'https://www.usdairy.com/news-articles/what-is-whey-whey-protein-101';
const issn = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/';

export function FuelSection() {
  return <section className="shell section fuel-section">
    <div className="section-heading">
      <div><p className="eyebrow">For athletes. For everyday life.</p><h2>Put good in.<br/>Get more from<br/>your everyday.</h2></div>
      <div><p className="section-description">Your morning workout. A busy afternoon. The next practice. TNAT is being made for everyday people as well as serious athletes. You don’t need to be on a team to care about what fuels you.</p><p className="section-description">Get the most out of your workout by giving recovery a place in your routine. Enough protein helps your body maintain and repair muscle; enough food, fluids, rest, and consistent training matter, too.</p></div>
    </div>
    <div className="fuel-grid">
      <article><span className="mono">01 / The protein</span><h3>Complete by nature.</h3><p>Whey supplies all nine essential amino acids—the building blocks your body needs from food.</p></article>
      <article><span className="mono">02 / The ingredients</span><h3>Every one has a job.</h3><p>Protein, chocolate flavor, creamy texture. We explain what each of our seven ingredients brings to your shake.</p></article>
      <article><span className="mono">03 / Your routine</span><h3>Make room for recovery.</h3><p>A ready-to-drink shake can help you meet your protein needs when it suits your day. Pair it with a varied diet and the work you put in.</p></article>
    </div>
    <div className="fuel-bottom"><a className="text-link" href="/formula#whey-isolate">Why we choose whey isolate <span aria-hidden="true">↗</span></a><p className="fine">Protein information: <a href={nih} target="_blank" rel="noreferrer">NIH Office of Dietary Supplements</a>. General nutrition research; TNAT has not been studied for performance outcomes.</p></div>
  </section>;
}

export function WheyBenefits() {
  return <section className="shell section whey-section" id="whey-isolate">
    <div className="section-heading"><div><p className="eyebrow">The protein behind the shake</p><h2>Why whey<br/>protein isolate?</h2></div><p className="section-description">A concentrated source of complete protein is the starting point for our shake. Here’s what makes isolate a good fit for the formula we’re building.</p></div>
    <div className="whey-highlights">
      <article><strong>9</strong><h3>Essential amino acids</h3><p>Whey naturally supplies all nine, including leucine. Protein supports muscle maintenance and repair as part of your overall diet.</p></article>
      <article><strong>90%+</strong><h3>Protein in the ingredient</h3><p>Whey isolate is typically around 90% protein or more by dry weight. That concentration helps us build toward 25g of protein in a 12 fl oz shake.</p></article>
      <article><strong>Less</strong><h3>Lactose than concentrate</h3><p>Further processing removes most lactose. The amount in our finished shake still needs testing; TNAT contains milk and is not suitable for a milk allergy.</p></article>
    </div>
    <p className="fine sources">Sources: <a href={dairy} target="_blank" rel="noreferrer">U.S. Dairy on whey and isolate</a> and <a href={nih} target="_blank" rel="noreferrer">NIH on protein and exercise</a>. The 90% figure describes the dry protein ingredient, not the finished drink. TNAT’s 25g protein target is an unverified calculation.</p>
    <div className="protein-choices"><div><p className="eyebrow">How it compares</p><h3>Different proteins.<br/>Different strengths.</h3><p>We choose isolate for its concentration and fit with a short, chocolate-shake formula.</p></div><dl>
      <div><dt>Whey concentrate</dt><dd>Also a complete protein. Common sports formulas use concentrates with around 70–80% protein by dry weight and more lactose. Isolate lets us start with a higher proportion of protein in the ingredient.</dd></div>
      <div><dt>Casein & milk proteins</dt><dd>Also provide high-quality protein. Casein digests more slowly than whey; milk proteins combine both. We choose whey as our sole protein source, while these alternatives can also support muscle nutrition.</dd></div>
      <div><dt>The result depends on the whole routine</dt><dd>Isolate does not guarantee better training results than every other protein. Getting enough total protein, eating well, and training consistently matter more than an ingredient name alone.</dd></div>
    </dl></div>
    <p className="fine sources">Further reading: <a href={issn} target="_blank" rel="noreferrer">International Society of Sports Nutrition position stand on protein and exercise</a>. These comparisons describe protein ingredients, not a clinical comparison of TNAT with another drink.</p>
  </section>;
}
