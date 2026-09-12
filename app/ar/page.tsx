import CheckoutButton from "../CheckoutButton";

export default function HomeAr() {
  return (
    <main className="container" dir="rtl" lang="ar">
      <nav className="nav">
        <div className="brand">glow-card-career</div>
        <a className="lang" href="/">English</a>
      </nav>
      <section className="hero">
        <div className="badge">الموجة ١ — MVP</div>
        <h1>Glow Card Career — أظهر تقدمك المهني</h1>
        <p className="lead">نظام تشغيل مهني كبطاقات تقدم عامة</p>
        <div className="cta-row">
          <CheckoutButton label="ابدأ — ١٠$ / أسبوع" />
          <span className="price">إلغاء في أي وقت · وضع اختبار Stripe</span>
        </div>
      </section>
      <section className="card">
        <h2>ماذا تحصل عليه</h2>
        <ul>
          <li>نظام مهني مقسم إلى بطاقات تقدم عامة</li>
          <li>تحديثات أسبوعية قابلة للمشاركة</li>
          <li>مسار إثبات للمقابلات والتعارف</li>
        </ul>
      </section>
      <p className="footer">Parallel Reach · Stripe test · acct_1UEqg3KILdv5fyda</p>
    </main>
  );
}
