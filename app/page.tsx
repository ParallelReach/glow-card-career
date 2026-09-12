import CheckoutButton from "./CheckoutButton";

export default function Home() {
  return (
    <main className="container">
      <nav className="nav">
        <div className="brand">glow-card-career</div>
        <a className="lang" href="/ar">العربية</a>
      </nav>
      <section className="hero">
        <div className="badge">Wave 1 MVP</div>
        <h1>Glow Card Career — ship visible progress</h1>
        <p className="lead">career OS as public progress cards</p>
        <div className="cta-row">
          <CheckoutButton label="Start — $10/week" />
          <span className="price">Cancel anytime · Stripe test mode</span>
        </div>
      </section>
      <section className="card">
        <h2>What you get</h2>
        <ul>
          <li>Career OS broken into public progress cards</li>
          <li>Weekly glow updates you can share</li>
          <li>Proof trail for interviews and intros</li>
        </ul>
      </section>
      <p className="footer">Parallel Reach · Stripe test · acct_1UEqg3KILdv5fyda</p>
    </main>
  );
}
