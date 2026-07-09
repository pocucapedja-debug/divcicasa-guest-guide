
:root{
  --blue:#123A8F; --sky:#2EA8FF; --green:#12372F; --cream:#F7F1E8;
  --paper:#FFFDF8; --ink:#111827; --muted:#667085; --wood:#B98245;
  --line:rgba(17,24,39,.10); --shadow:0 24px 80px rgba(17,24,39,.12);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;
  background:radial-gradient(circle at top left,rgba(46,168,255,.18),transparent 32rem),linear-gradient(180deg,#f7f1e8 0%,#fff 58%);
  color:var(--ink);
  padding-bottom:88px;
}
a{text-decoration:none;color:inherit}
svg{vertical-align:middle}
.hero{
  min-height:94vh;
  color:white;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:24px;
  background:
    linear-gradient(180deg,rgba(4,12,18,.15),rgba(4,12,18,.92)),
    url("/images/divcibar-hero.png");
  background-size:cover;
  background-position:center;
}
.topbar{display:flex;justify-content:space-between;align-items:center;gap:12px}
.brand img{height:48px;max-width:280px;object-fit:contain;border-radius:10px}
.topPill{
  display:flex;gap:7px;align-items:center;
  background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.24);
  backdrop-filter:blur(14px);padding:10px 14px;border-radius:999px;font-weight:850
}
.heroInner{max-width:760px;padding-bottom:58px}
.eyebrow{text-transform:uppercase;letter-spacing:.18em;color:var(--wood);font-weight:950;font-size:12px}
.hero h1{font-size:clamp(52px,12vw,108px);line-height:.86;letter-spacing:-.07em;margin:10px 0 18px}
.heroLead{font-size:19px;line-height:1.55;color:rgba(255,255,255,.88);max-width:660px}
.heroActions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px;max-width:660px}
.heroActions a{
  display:flex;align-items:center;justify-content:center;gap:8px;
  background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);
  backdrop-filter:blur(14px);border-radius:20px;padding:15px 14px;font-weight:900
}
main{width:min(1120px,100%);margin:0 auto;padding:20px}
.quickGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:-54px;position:relative;z-index:3}
.quickCard,.panel,.place,.activity,.mapCard,.route{
  background:rgba(255,253,248,.9);
  border:1px solid var(--line);
  border-radius:32px;
  box-shadow:var(--shadow);
}
.quickCard{
  min-height:112px;padding:22px;display:flex;flex-direction:column;gap:10px;font-weight:950;
  backdrop-filter:blur(18px)
}
.quickCard svg{color:var(--blue)}
.panel{padding:26px;margin:22px 0}
.panel h2,.section h2{font-size:clamp(30px,5vw,48px);letter-spacing:-.05em;margin:8px 0 12px;display:flex;align-items:center;gap:10px}
.muted{color:var(--muted);line-height:1.6}
.wifiPanel{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:center;background:linear-gradient(135deg,#fff,#eef8f5)}
.wifiBox{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center}
.wifiBox div,.codeCard{
  background:#f5f6f3;border:1px solid var(--line);border-radius:20px;padding:16px
}
.wifiBox small,.codeCard small,.mapCard small,.route small{display:block;color:var(--muted);font-weight:700;margin-bottom:5px}
.wifiBox strong,.codeCard strong{font-size:22px;letter-spacing:.02em}
button,.btn{
  border:0;cursor:pointer;border-radius:18px;padding:13px 16px;
  background:var(--green);color:white;font-weight:950;display:inline-flex;gap:8px;align-items:center;justify-content:center
}
.btn.light{background:#eef4ff;color:var(--blue)}
.privateHead{display:flex;justify-content:space-between;align-items:center;gap:18px}
.codeGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:18px}
.section{margin:48px 0 22px}
.section h2{display:flex;gap:12px;align-items:center}
.rules{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.rules div{padding:16px;background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:0 12px 32px rgba(17,24,39,.06)}
.places{display:grid;gap:18px}
.place{overflow:hidden;display:grid;grid-template-columns:43% 57%}
.placeImage{min-height:360px;background-size:cover;background-position:center}
.placeText{padding:28px}
.placeText span,.activity span{
  display:inline-block;background:#f3e6c7;color:#6f4b10;border-radius:999px;padding:8px 12px;font-weight:950;font-size:13px
}
.placeText h3{font-size:36px;letter-spacing:-.05em;margin:16px 0 10px}
.placeText p,.activity p{color:#344054;line-height:1.65}
.actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.mapCards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.mapCard{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:18px}
.mapCard strong{font-size:18px}
.mapCard svg{color:var(--blue)}
.activityGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.activity{padding:24px}
.emoji{font-size:42px;margin-bottom:10px}
.activity h3{font-size:26px;letter-spacing:-.04em;margin:14px 0 10px}
.routeGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.route{padding:18px;display:flex;gap:14px;align-items:flex-start}
.route b{font-size:28px}
.route strong{display:block;font-size:18px;margin-bottom:4px}
.discount{
  margin:46px 0;padding:38px;border-radius:38px;color:white;
  background:linear-gradient(135deg,var(--blue),var(--sky));
  box-shadow:var(--shadow);text-align:center
}
.discount p{text-transform:uppercase;letter-spacing:.16em;font-weight:950;font-size:12px;opacity:.85}
.discount h2{font-size:clamp(54px,12vw,104px);line-height:.88;margin:8px 0;letter-spacing:-.07em}
.discount span{font-size:20px;font-weight:850}
.review{
  margin:46px 0 24px;padding:40px;border-radius:38px;color:white;text-align:center;
  background:linear-gradient(135deg,var(--green),#071512);box-shadow:var(--shadow)
}
.review svg{width:38px;height:38px;color:#f4c95d}
.review h2{font-size:clamp(34px,7vw,64px);letter-spacing:-.06em;line-height:.94;margin:14px 0}
.review p{color:rgba(255,255,255,.8);max-width:650px;margin:0 auto 24px;line-height:1.6}
footer{text-align:center;padding:34px;color:var(--muted)}
footer img{height:42px;max-width:260px;object-fit:contain}
footer a{font-weight:950;color:var(--blue)}
.bottomNav{
  position:fixed;left:12px;right:12px;bottom:12px;z-index:50;
  background:rgba(255,255,255,.9);backdrop-filter:blur(18px);
  border:1px solid var(--line);border-radius:26px;
  display:grid;grid-template-columns:repeat(5,1fr);
  box-shadow:0 18px 60px rgba(17,24,39,.18);overflow:hidden
}
.bottomNav a{text-align:center;padding:10px 4px;font-weight:950;color:#14231f}
.bottomNav span{display:block;font-size:10px;margin-top:2px}
@media(max-width:880px){
  .hero{padding:18px}
  .brand img{height:38px;max-width:220px}
  .heroActions,.quickGrid,.wifiPanel,.rules,.mapCards,.activityGrid,.routeGrid{grid-template-columns:1fr}
  .quickGrid{margin-top:-38px}
  .place{grid-template-columns:1fr}
  .placeImage{min-height:270px}
  .privateHead{align-items:flex-start;flex-direction:column}
  .codeGrid{grid-template-columns:1fr}
  main{padding:14px}
}
