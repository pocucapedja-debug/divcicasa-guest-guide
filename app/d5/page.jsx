
'use client'

import { useState } from 'react'
import { Wifi, Home, Phone, MessageCircle } from 'lucide-react'

export default function ApartmentPage() {
  const [copied, setCopied] = useState(false)

  const copyPassword = async () => {
    await navigator.clipboard.writeText('EnjoyYourStay')
    setCopied(true)
  }

  return (
    <>
      <header className="hero">
        <nav className="topbar">
          <img src="/images/logo.jpg" className="logoImg" alt="DivčiCasa" />
          <span className="guideLabel">Guest Guide</span>
        </nav>
        <div className="heroText">
          <p className="eyebrow light">DOBRO DOŠLI U DIVČICASA</p>
          <h1>Apartman D5</h1>
          <p>Vaš digitalni vodič za prijatan boravak na Divčibarama.</p>
        </div>
      </header>

      <main>
        <section id="wifi" className="card wifiCard">
          <p className="eyebrow">BRZO POVEZIVANJE</p>
          <h2><Wifi /> Wi-Fi</h2>

          <div className="credential">
            <span>Mreža 1</span>
            <strong>M&amp;D 2.4G</strong>
          </div>

          <div className="credential">
            <span>Mreža 2</span>
            <strong>M&amp;D 5G</strong>
          </div>

          <div className="credential">
            <span>Lozinka</span>
            <strong>EnjoyYourStay</strong>
          </div>

          <button className="smallBtn" onClick={copyPassword}>
            {copied ? '✓ Kopirano' : 'Kopiraj lozinku'}
          </button>
        </section>

        <section className="card">
          <p className="eyebrow">ULAZAK U APARTMAN</p>
          <h2><Home /> Pristup apartmanu</h2>
          <p>
            Informacije i šifre za ulazak u zgradu i apartman
            dobićete privatnom porukom putem WhatsApp-a pre dolaska.
          </p>
          <p>
            Ako imate bilo kakav problem sa ulaskom,
            kontaktirajte nas putem WhatsApp-a ili telefonom.
          </p>
        </section>

        <section className="card">
          <p className="eyebrow">TOKOM BORAVKA</p>
          <h2><Home /> Važne informacije</h2>

          <div className="rules">
            <div>🕑 <b>Check-in:</b> od 14:00</div>
            <div>🕚 <b>Check-out:</b> do 11:00</div>
            <div>🕰️ Ako nije rezervisan sledeći termin, rado ćemo omogućiti kasniji izlazak uz prethodni dogovor.</div>
            <div>🚭 <b>Pušenje nije dozvoljeno u apartmanu.</b></div>
            <div>🔇 Molimo za mir nakon 22h.</div>
            <div>🚪 Pri izlasku proverite da li su vrata zaključana.</div>
            <div>♻️ Pomozite nam da zajedno čuvamo prirodu Divčibara.</div>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">TU SMO ZA VAS</p>
          <h2><Phone /> Kontakt</h2>
          <p>DivčiCasa – Apartman D5</p>
          <p>+381 66 666 0015</p>

          <a className="smallBtn" href="tel:+381666660015">
            Pozovite nas
          </a>

          <a
            className="smallBtn"
            href="https://wa.me/381666660015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle /> WhatsApp
          </a>
        </section>
      </main>
    </>
  )
}
