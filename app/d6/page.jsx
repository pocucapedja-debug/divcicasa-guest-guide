'use client'

import { useState } from 'react'
import {
  Wifi, Phone, MapPin, Star, Home, Utensils, Trees,
  MessageCircle, Copy, Check, ShoppingBasket, Waves,
  Bike, Mountain, ShieldAlert
} from 'lucide-react'

const apt = {
  name: 'Apartman D6',
  address: 'Divčibare',
  wifiName: 'M&D 2.4G / M&D 5G',
  wifiPassword: 'EnjoyYourStay',
  phone: '+381 66 666 0015',
  phoneTel: '+381666660015',
  maps: 'https://maps.app.goo.gl/juLXoDXFnbHZPidG9',
  images: [
    '/images/WhatsApp Image 2026-09-14 at 18.18.25.jpeg',
    '/images/WhatsApp Image 2026-09-14 at 18.17.53.jpeg',
    '/images/WhatsApp Image 2026-09-14 at 18.18.31.jpeg',
    '/images/WhatsApp Image 2026-09-14 at 18.18.38.jpeg',
    '/images/WhatsApp Image 2026-09-14 at 18.18.43.jpeg',
    '/images/WhatsApp Image 2026-09-14 at 18.19.05.jpeg'
  ]
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

export default function D6Page() {
  const wa =
    `https://wa.me/381666660015?text=${encodeURIComponent(
      'Dobar dan, nalazimo se u apartmanu D6.'
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
          <h1>Apartman D6</h1>
          <p>Vaš digitalni vodič za prijatan boravak na Divčibarama.</p>
        </div>
      </header>

      <main>
        <section className="quickGrid" aria-label="Brze akcije">
          <a href="#wifi">
            <Wifi />
            <span>Wi-Fi</span>
          </a>

          <a href={apt.maps} target="_blank" rel="noreferrer">
            <MapPin />
            <span>Navigacija</span>
          </a>

          <a href={wa} target="_blank" rel="noreferrer">
            <MessageCircle />
            <span>WhatsApp</span>
          </a>

          <a href={`tel:${apt.phoneTel}`}>
            <Phone />
            <span>Pozovi</span>
          </a>
        </section>

        <section id="wifi" className="card wifiCard">
          <div>
            <p className="eyebrow">BRZO POVEZIVANJE</p>
            <h2><Wifi /> Wi-Fi</h2>

            <div className="credentials">
              <div>
                <span>Mreža</span>
                <strong>M&D 2.4G / M&D 5G</strong>
              </div>

              <div>
                <span>Šifra</span>
                <strong>EnjoyYourStay</strong>
              </div>
            </div>

            <CopyValue
              value="EnjoyYourStay"
              label="Kopiraj Wi-Fi šifru"
            />
            <img
  src="/images/d6-wifi-qr.png"
  alt="QR kod za povezivanje na Wi-Fi u apartmanu D6"
  style={{
    width: '100%',
    maxWidth: '320px',
    display: 'block',
    margin: '24px auto 0',
    borderRadius: '16px'
  }}
/>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">ULAZAK U APARTMAN</p>
          <h2><Home /> Pristup apartmanu</h2>

          <p>
            Šifra za ulazak u apartman D6 menja se za svaku rezervaciju.
            Vašu aktuelnu šifru dobićete u poruci pre dolaska.
          </p>

          <p>
            Ako imate bilo kakav problem sa ulaskom, kontaktirajte nas putem
            WhatsApp-a ili telefonom.
          </p>
        </section>

        <section className="card location">
          <div>
            <p className="eyebrow">VAŠA LOKACIJA</p>
            <h2><MapPin /> DivčiCasa D6</h2>
            <p>Otvorite Google Maps i pokrenite navigaciju direktno do apartmana.</p>

            <a
              className="smallBtn"
              href={apt.maps}
              target="_blank"
              rel="noreferrer"
            >
              Otvori navigaciju
            </a>
          </div>
        </section>

        <section className="gallery">
          {apt.images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Apartman D6 – fotografija ${index + 1}`}
            />
          ))}
        </section>

        <section className="card">
          <p className="eyebrow">TOKOM BORAVKA</p>
          <h2><Home /> Važne informacije</h2>

          <div className="rules">
            <div>🚭 <b>Pušenje nije dozvoljeno u apartmanu.</b></div>
            <div>🔇 Molimo za mir nakon 22h.</div>
            <div>🚪 Pri izlasku proverite da li su vrata zaključana.</div>
            <div>♻️ Pomozite nam da zajedno čuvamo prirodu Divčibara.</div>
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
              <p>
                Veoma dobra i specifična hrana, prijatan planinski ambijent
                i odličan izbor tokom boravka.
              </p>
            </article>

            <article className="mini">
              <h3>🍽 Vila Plamenac</h3>
              <p>
                Još jedna preporuka za obrok i predah na Divčibarama.
              </p>
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
              <p>Veća prodavnica za svakodnevnu kupovinu namirnica i potrepština.</p>
            </article>

            <article className="mini">
              <h3>🛒 Jutro</h3>
              <p>Praktična prodavnica za osnovne namirnice i svakodnevne potrebe.</p>
            </article>

            <article className="mini">
              <h3>🛍 Breza Shop</h3>
              <p>Lokalni proizvodi i praktične stvari za boravak na Divčibarama.</p>
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
              <p>
                Oko 10 minuta hoda od apartmana. SPA centar je dostupan
                i gostima koji nisu smešteni u hotelu.
              </p>
            </article>

            <article className="mini">
              <h3>🏍 Kvadovi – centar Divčibara</h3>
              <p>
                Za rezervaciju i informacije kontaktirajte organizatora
                pre polaska.
              </p>
            </article>

            <article className="mini">
              <h3>🐎 Jahanje na Divčibarama</h3>
              <p>
                Šetnje konjima za početnike i iskusne jahače, kao i kraće
                jahanje za decu.
              </p>
            </article>

            <article className="mini">
              <h3><Mountain /> Priroda & aktivan odmor</h3>
              <p>
                Šetnja i planinarenje, Crni vrh i vidikovci, biciklizam,
                a zimi skijanje i sankanje.
              </p>
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
  <p>
    Ako ste zadovoljni, mnogo bi nam značilo da podelite svoje
    iskustvo i ostavite Google recenziju.
  </p>

  <a
    className="smallBtn"
    href="https://g.page/r/CXbmnuEzExJVEBM/review"
    target="_blank"
    rel="noreferrer"
  >
    ⭐ Ostavi Google recenziju
  </a>
</section>
        <section className="thanks">
          <h2>❤️ Hvala što ste odabrali DivčiCasa.</h2>
          <p>
            Želimo vam prijatan boravak i nadamo se da ćete ponovo biti naši gosti.
          </p>
        </section>
      </main>

      <footer>
        <img src="/images/logo.jpg" alt="DivčiCasa" />
        <p>Apartman D6 · Divčibare</p>
        <a href={`tel:${apt.phoneTel}`}>{apt.phone}</a>
      </footer>
    </>
  )
}
