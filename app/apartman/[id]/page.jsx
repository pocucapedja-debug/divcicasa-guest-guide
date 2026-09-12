'use client'
import { useState } from 'react'
import { Wifi, Phone, MapPin, Star, Home, Utensils, Trees, MessageCircle, Copy, Check, ShoppingBasket, Waves, Bike, Mountain, ShieldAlert } from 'lucide-react'

const apt = {
  name:'Apartman F7', address:'Žike Pavlovića 21, Divčibare', wifiName:'A1_SRB_B9F7D3', wifiPassword:'4KFhG7Tf',
  buildingCode:'0651#0651#', apartmentCode:'8657', phone:'+381 66 666 0015', phoneTel:'+381666660015',
  maps:'https://maps.app.goo.gl/RB1aB7ypUF73GSGV6', review:'https://g.page/r/CXbmnuEzExJVEBM/review'
}
function CopyValue({value,label}) { const [ok,setOk]=useState(false); async function copy(){try{await navigator.clipboard.writeText(value);setOk(true);setTimeout(()=>setOk(false),1600)}catch{}} return <button className="copy" onClick={copy}>{ok?<Check size={17}/>:<Copy size={17}/>} {ok?'Kopirano':label}</button> }
function Call({number,children}) { return <a className="smallBtn" href={`tel:${number}`}>📞 {children}</a> }
export default function ApartmentPage(){
 const wa=`https://wa.me/381666660015?text=${encodeURIComponent('Dobar dan, nalazimo se u apartmanu F7.')}`
 return <>
  <header className="hero">
   <nav className="topbar"><img src="/images/logo.jpg" className="logoImg" alt="DivčiCasa"/><span className="guideLabel">Guest Guide</span></nav>
   <div className="heroText"><p className="eyebrow light">DOBRO DOŠLI U DIVČICASA</p><h1>Apartman F7</h1><p>Vaš digitalni vodič za prijatan i bezbrižan boravak na Divčibarama.</p></div>
  </header>
  <main>
   <section className="quickGrid" aria-label="Brze akcije">
    <a href="#wifi">📶<span>Wi‑Fi</span></a><a href={apt.maps} target="_blank">📍<span>Navigacija</span></a><a href={wa} target="_blank">💬<span>Piši domaćinu</span></a><a href={`tel:${apt.phoneTel}`}>📞<span>Pozovi domaćina</span></a>
   </section>
   <section id="wifi" className="card wifiCard"><div><p className="eyebrow">BRZO POVEZIVANJE</p><h2><Wifi/> Wi‑Fi</h2><div className="credential"><span>Mreža</span><strong>{apt.wifiName}</strong><CopyValue value={apt.wifiName} label="Kopiraj"/></div><div className="credential"><span>Šifra</span><strong>{apt.wifiPassword}</strong><CopyValue value={apt.wifiPassword} label="Kopiraj šifru"/></div></div></section>
   <section className="card"><p className="eyebrow">ULAZAK U APARTMAN</p><h2>🔑 Pristupne šifre</h2><div className="codeGrid"><div><span>Ulaz u zgradu</span><strong>{apt.buildingCode}</strong><CopyValue value={apt.buildingCode} label="Kopiraj"/></div><div><span>Ulaz u apartman</span><strong>{apt.apartmentCode}</strong><CopyValue value={apt.apartmentCode} label="Kopiraj"/></div></div></section>
   <section className="card location"><div><p className="eyebrow">VAŠA LOKACIJA</p><h2><MapPin/> DivčiCasa F7</h2><p><strong>{apt.address}</strong></p></div><a className="btn" href={apt.maps} target="_blank">Pokreni navigaciju</a></section>
   <section className="gallery"><img src="/images/f7-living.webp"/><img src="/images/f7-kitchen.webp"/><img src="/images/f7-bedroom.webp"/><img src="/images/f7-terrace.webp"/><img src="/images/f7-bathroom.webp"/><img src="/images/f7-playground.jpg"/></section>
   <section className="card"><p className="eyebrow">TOKOM BORAVKA</p><h2><Home/> Važne informacije</h2><div className="rules"><div>🕑 <b>Check‑in:</b> od 14:00</div><div>🕚 <b>Check‑out:</b> do 11:00</div><div>🕰 Ako nije rezervisan sledeći termin, rado ćemo omogućiti kasniji izlazak uz prethodni dogovor.</div><div>🚭 Pušenje nije dozvoljeno u apartmanu.</div><div>🔇 Molimo za mir posle 22:00.</div><div>🚪 Pri izlasku zaključajte vrata.</div><div>♻️ Čuvajmo prirodu i okolinu Divčibara.</div></div></section>
   <section id="food"><div className="sectionHead"><p className="eyebrow">PREPORUKE DIVČICASA</p><h2><Utensils/> Gde jesti</h2></div>
    <div className="recommendGrid"><article className="mini"><h3>🍽️ Divčibar</h3><p>Veoma dobra i specifična hrana, prijatan planinski ambijent i odličan izbor tokom boravka.</p><div className="actions"><a href="https://maps.app.goo.gl/7VLuwW8bBpoD2LP29" target="_blank">📍 Navigacija</a><Call number="0646439776">Pozovi</Call></div></article>
    <article className="mini"><h3>🍽️ Vila Plamenac</h3><p>Još jedna preporuka za obrok i predah na Divčibarama.</p><div className="actions"><a href="https://maps.app.goo.gl/RCvgrEhqUgngA487A" target="_blank">📍 Navigacija</a><Call number="0646439766">Pozovi</Call></div></article></div>
   </section>
   <section><div className="sectionHead"><p className="eyebrow">SVE ŠTO VAM ZATREBA</p><h2><ShoppingBasket/> Prodavnice</h2></div><div className="recommendGrid">
    <article className="mini"><h3>🛒 Maxi</h3><p>Veća prodavnica za svakodnevnu kupovinu namirnica i potrepština.</p><a className="smallBtn" href="https://maps.app.goo.gl/1aUg9uky2ZmjMZceA" target="_blank">📍 Navigacija</a></article>
    <article className="mini"><h3>🛒 Jutro</h3><p>Praktična prodavnica za osnovne namirnice i svakodnevne potrepštine.</p><a className="smallBtn" href="https://maps.app.goo.gl/8pkELQTHwZdqNFPM7" target="_blank">📍 Navigacija</a></article>
    <article className="mini"><h3>🛍️ Breza Shop</h3><p>Lokalni proizvodi i praktične stvari za boravak na Divčibarama.</p><div className="actions"><a href="https://maps.app.goo.gl/YWxJVQQsnoemTtpv7" target="_blank">📍 Navigacija</a><Call number="0646427246">Pozovi</Call></div></article>
   </div></section>
   <section id="activities"><div className="sectionHead"><p className="eyebrow">DOŽIVITE DIVČIBARE</p><h2><Trees/> Aktivnosti</h2></div><div className="recommendGrid">
    <article className="mini feature"><h3><Waves/> Crni Vrh SPA</h3><p>Na oko <b>10 minuta hoda od DivčiCasa F7</b>. SPA centar je dostupan i eksternim gostima.</p><p>🕘 <b>09:00–23:00</b><br/>🔞 <b>21:00–23:00 samo za odrasle</b></p><Call number="0143155511">Pozovi SPA</Call></article>
    <article className="mini"><h3>🏍️ Kvadovi – centar Divčibara</h3><p>Za rezervaciju i informacije pozovite Dejana. Prilikom rezervacije recite da ste gosti DivčiCasa.</p><Call number="+38163535559">Dejan</Call></article>
    <article className="mini"><h3>🐎 Jahanje na Divčibarama</h3><p>Šetnje konjima za početnike i iskusne jahače, kao i kraće jahanje za decu.</p><p>🕘 Svaki dan po dogovoru, <b>09:00–18:00</b><br/>📍 Tačna lokacija po dogovoru</p><Call number="+381612595322">Rezerviši jahanje</Call></article>
    <article className="mini"><h3><Mountain/> Priroda & aktivan odmor</h3><p>Šetnja i planinarenje, Crni vrh i vidikovci, biciklizam, a zimi skijanje i sankanje.</p></article>
   </div></section>
   <section className="card emergency"><p className="eyebrow">ZA SVAKI SLUČAJ</p><h2><ShieldAlert/> Hitni brojevi</h2><div className="emergencyGrid"><a href="tel:192">👮 Policija <b>192</b></a><a href="tel:193">🚒 Vatrogasci <b>193</b></a><a href="tel:194">🚑 Hitna pomoć <b>194</b></a><a href="tel:112">🆘 Opšti hitni broj <b>112</b></a></div></section>
   <section className="review"><Star size={36}/><h2>Kako vam se dopao boravak?</h2><p>Ako ste zadovoljni, mnogo bi nam značilo da podelite svoje iskustvo.</p><a className="reviewBtn" href={apt.review} target="_blank">⭐⭐⭐⭐⭐ Ostavi Google recenziju</a></section>
   <section className="thanks"><h2>❤️ Hvala što ste odabrali DivčiCasa.</h2><p>Želimo vam prijatan boravak i nadamo se da ćete ponovo biti naši gosti.</p></section>
  </main>
  <footer><img src="/images/logo.jpg" alt="DivčiCasa"/><p>{apt.address}</p><p><a href={`tel:${apt.phoneTel}`}>{apt.phone}</a> · <a href="https://divcicasa.rs/" target="_blank">🏡 Pogledaj apartmane</a></p></footer>className="bottomNav"><a href="#wifi"><Wifi/><span>Wi‑Fi</span></a><a href="#food"><Utensils/><span>Hrana</span></a><a href="#activities"><Bike/><span>Aktivnosti</span></a><a href={wa} target="_blank"><MessageCircle/><span>Kontakt</span></a></nav>
 </>
}
