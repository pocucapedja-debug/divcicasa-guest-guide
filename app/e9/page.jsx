
'use client'

import { useState } from 'react'
import {
  Wifi, Phone, MapPin, Star, Home, Utensils, Trees,
  MessageCircle, Copy, Check, ShoppingBasket, Waves,
  Mountain, ShieldAlert
} from 'lucide-react'

const apt = {
  name: 'Apartman E9',
  address: 'Divčigora, Divčibare – prvi sprat',
  wifiName: 'ApartmanE9',
  wifiPassword: 'apartmane9',
  phone: '+381 66 666 0015',
  phoneTel: '+381666660015',
  maps: 'https://maps.app.goo.gl/juLXoDXFnbHZPidG9'
}

function CopyValue({ value, label }) {
  const [ok, setOk] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setOk(true)
      setTimeout(() => setOk(false), 1500)
    } catch {}
  }

  return (
    <button className="copyBtn" onClick={copy}>
      {ok ? <Check size={18} /> : <Copy size={18} />}
      {ok ? 'Kopirano' : label}
    </button>
  )
}

export default function E9Page() {
  const wa = `https://wa.me/381666660015?text=${encodeURIComponent(
    'Dobar dan, nalazimo se u apartmanu E9.'
  )}`

  return (
    <>
      <header className="hero">
        <nav className="topbar">
          <img src="/images/logo.jpg" className="logoImg" alt="DivčiCasa" />
          <span className="guideLabel">Guest Guide</span>
        </nav>
        <div className="heroText">
          <p className="eyebrow light">DOBRO DOŠLI U DIVČICASA</p>
          <h1>Apartman E9</h1>
          <p>Vaš digitalni vodič za prijatan boravak na Divčibarama.</p>
        </div>
      </header>

      <main>
        <section className="quickGrid" aria-label="Brze akcije">
          <a href="#wifi"><Wifi /><span>Wi-Fi</span></a>
          <a href={apt.maps} target="_blank" rel="noreferrer">
            <MapPin /><span>Navigacija</span>
          </a>
          <a href={wa} target="_blank" rel="noreferrer">
            <MessageCircle /><span>WhatsApp</span>
          </a>
          <a href={`tel:${apt.phoneTel}`}>
            <Phone /><span>Pozovi</span>
          </a>
        </section>

        <section id="wifi" className="card wifiCard">
          <div>
            <p className="eyebrow">BRZO POVEZIVANJE</p>
            <h2><Wifi /> Wi-Fi</h2>
            <div className="credentials">
              <div><span>Mreža</span><strong>{apt.wifiName}</strong></div>
              <div><span>Šifra</span><strong>{apt.wifiPassword}</strong></div>
            </div>
            <CopyValue value={apt.wifiPassword} label="Kopiraj Wi-Fi šifru" />
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">ULAZAK U APARTMAN</p>
          <h2><Home /> Pristup apartmanu</h2>
          <p>
            Informacije i šifre za ulazak u zgradu i apartman
            dobićete privatnom porukom putem WhatsApp-a pre dolaska.
          </p>
          <p>
            Ako imate problem sa ulaskom, kontaktirajte nas putem
            WhatsApp-a ili telefonom.
          </p>
        </section>

        <section className="card location">
          <div>
            <p className="eyebrow">VAŠA LOKACIJA</p>
            <h2><MapPin /> DivčiCasa E9</h2>
            <p>Kompleks Divčigora, prvi sprat.</p>
            <a className="smallBtn" href={apt.maps}
              target="_blank" rel="noreferrer">
              Otvori navigaciju
            </a>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">O APARTMANU</p>
          <h2><Home /> Oprema i sadržaji</h2>
          <div className="rules">
            <div>👨‍👩‍👧‍👦 <b>Kapacitet:</b> 4–5 osoba.</div>
            <div>🛏️ <b>Spavaća soba:</b> krevet na sprat, donji ležaj za dve osobe, gornji za jednu.</div>
            <div>🛋️ <b>Dnevna soba:</b> sofa na razvlačenje za dve osobe.</div>
            <div>🍳 <b>Kuhinja:</b> frižider, ploča za kuvanje, posuđe i pribor za jelo.</div>
            <div>☕ <b>Kafa:</b> Nespresso aparat.</div>
            <div>📺 <b>Televizori:</b> u dnevnoj i spavaćoj sobi.</div>
            <div>♨️ <b>Grejanje:</b> radijatori.</div>
            <div>🚿 <b>Kupatilo:</b> tuš-kabina i fen za kosu.</div>
            <div>🧺 Mašina za pranje i sušenje veša.</div>
            <div>👔 Pegla i daska za peglanje.</div>
            <div>🛏️ Posteljina i peškiri su obezbeđeni.</div>
            <div>🅿️ Besplatan parking u okviru kompleksa.</div>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">TOKOM BORAVKA</p>
          <h2><Home /> Važne informacije</h2>
          <div className="rules">
            <div>🕑 <b>Prijava:</b> od 14:00.</div>
            <div>🕚 <b>Odjava:</b> do 11:00.</div>
            <div>🚭 <b>Pušenje nije dozvoljeno.</b></div>
            <div>🐾 Kućni ljubimci nisu dozvoljeni.</div>
            <div>🔇 Molimo za mir nakon 22h.</div>
            <div>🚪 Pri izlasku proverite da li su vrata zaključana.</div>
            <div>♻️ Pomozite nam da čuvamo prirodu Divčibara.</div>
          </div>
        </section>

        <section id="food">
          <div className="sectionHead">
            <p className="eyebrow">PREPORUKE DIVČICASA</p>
            <h2><Utensils /> Gde jesti?</h2>
          </div>
          <div className="recommendGrid">
            <article className="mini">
              <h3>🍽 Divčibar</h3>
              <p>Veoma dobra hrana i prijatan planinski ambijent.</p>
              <a className="smallBtn" href="tel:+381646439776">📞 Pozovi restoran</a>
              <a className="smallBtn" href="https://maps.app.goo.gl/G2eXxA4KY4WizN959"
                target="_blank" rel="noreferrer">📍 Lokacija</a>
            </article>
            <article className="mini">
              <h3>🍽 Vila Plamenac</h3>
              <p>Preporuka za obrok i predah na Divčibarama.</p>
              <a className="smallBtn" href="tel:+381646439766">📞 Pozovi restoran</a>
              <a className="smallBtn" href="https://maps.app.goo.gl/g3YKSQAkZYhcjATr6"
                target="_blank" rel="noreferrer">📍 Lokacija</a>
            </article>
          </div>
        </section>

        <section>
          <div className="sectionHead">
            <p className="eyebrow">SVE ŠTO VAM ZATREBA</p>
            <h2><ShoppingBasket /> Prodavnice</h2>
          </div>
          <div className="recommendGrid">
            <article className="mini">
              <h3>🛒 Maxi</h3>
              <p>Prodavnica za namirnice i svakodnevne potrebe.</p>
              <a className="smallBtn" href="https://www.google.com/maps/search/?api=1&query=Maxi+Divcibare"
                target="_blank" rel="noreferrer">📍 Lokacija</a>
            </article>
            <article className="mini">
              <h3>🛒 Jutro</h3>
              <p>Praktična prodavnica za osnovne namirnice.</p>
              <a className="smallBtn" href="https://www.google.com/maps/search/?api=1&query=Dobro+jutro+prodavnica+Divcibare"
                target="_blank" rel="noreferrer">📍 Lokacija</a>
            </article>
            <article className="mini">
              <h3>🛍 Breza Shop</h3>
              <p>Lokalni proizvodi i praktične stvari za boravak.</p>
              <a className="smallBtn" href="https://maps.app.goo.gl/PWYtgKjM7LgqCSMj6"
                target="_blank" rel="noreferrer">📍 Lokacija</a>
            </article>
          </div>
        </section>

        <section id="activities">
          <div className="sectionHead">
            <p className="eyebrow">DOŽIVITE DIVČIBARE</p>
            <h2><Trees /> Aktivnosti</h2>
          </div>
          <div className="recommendGrid">
            <article className="mini feature">
              <h3><Waves /> Crni Vrh SPA</h3>
              <p>SPA centar dostupan je i gostima koji nisu smešteni u hotelu.</p>
              <a href="tel:+381143155511">📞 +381 14 31 55 511</a>
            </article>
            <article className="mini">
              <h3>🏍 Kvadovi</h3>
              <p>Za rezervaciju kontaktirajte organizatora.</p>
              <a href="tel:+38163535559">📞 Dejan: +381 63 535 559</a>
            </article>
            <article className="mini">
              <h3>🐎 Jahanje</h3>
              <p>Šetnje konjima i jahanje na Divčibarama.</p>
              <a href="tel:+381612595322">📞 +381 61 259 5322</a>
            </article>
            <article className="mini">
              <h3><Mountain /> Priroda i aktivan odmor</h3>
              <p>Šetnja, planinarenje, biciklizam, skijanje i sankanje.</p>
            </article>
          </div>
        </section>

        <section className="card emergency">
          <p className="eyebrow">ZA SVAKI SLUČAJ</p>
          <h2><ShieldAlert /> Hitni brojevi</h2>
          <div className="emergencyGrid">
            <a href="tel:112">🆘 112 – Hitne službe</a>
            <a href="tel:192">👮 192 – Policija</a>
            <a href="tel:193">🚒 193 – Vatrogasci</a>
            <a href="tel:194">🚑 194 – Hitna pomoć</a>
          </div>
        </section>

        <section className="review">
          <Star size={36} />
          <h2>Kako vam se dopao boravak?</h2>
          <p>Ako ste zadovoljni, mnogo bi nam značilo da ostavite Google recenziju.</p>
          <a className="smallBtn"
            href="https://g.page/r/CXbmnuEzExJVEBM/review"
            target="_blank" rel="noreferrer">
            ⭐ Ostavi Google recenziju
          </a>
        </section>

        <section className="thanks">
          <h2>❤️ Hvala što ste odabrali DivčiCasa.</h2>
          <p>Želimo vam prijatan boravak i nadamo se da ćete ponovo biti naši gosti.</p>
        </section>
      </main>

      <footer>
        <img src="/images/logo.jpg" alt="DivčiCasa" />
        <p>Apartman E9 · Divčibare</p>
        <a href={`tel:${apt.phoneTel}`}>{apt.phone}</a>
      </footer>
    </>
  )
}
