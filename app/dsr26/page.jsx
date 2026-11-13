
'use client'

import { useState } from 'react'

const apt = {
  name: 'DSR26',
  address: 'DSR Divčigora, Divčibare',
  wifiName: 'B530_8F58',
  wifiPass: 'qDY9H23bgG7',
  phone: '+381666660015',
  images: Array.from(
    { length: 15 },
    (_, i) => `/images/dsr26-${String(i + 1).padStart(2, '0')}.jpg`
  ),
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      alert('Kopirajte podatak ručno.')
    }
  }

  return (
    <button
      onClick={copy}
      style={{
        padding: '9px 15px',
        borderRadius: 10,
        border: '1px solid #d8e1eb',
        background: '#eaf2fa',
        color: '#17456e',
        cursor: 'pointer',
        fontWeight: 700,
      }}
    >
      {copied ? 'Kopirano ✓' : 'Kopiraj'}
    </button>
  )
}

export default function DSR26Page() {
  const whatsapp = `https://wa.me/381666660015?text=${encodeURIComponent(
    'Dobar dan, nalazimo se u apartmanu DSR26.'
  )}`

  return (
    <>
      <header className="hero">
        <nav className="topbar">
          <img
            src="/images/logo.jpg"
            className="logoImg"
            alt="DivčiCasa"
          />
          <span className="guideLabel">Guest Guide</span>
        </nav>

        <div className="heroText">
          <p className="eyebrow light">DOBRO DOŠLI U DIVČICASA</p>
          <h1>Apartman DSR26</h1>
          <p>Vaš digitalni vodič za prijatan boravak na Divčibarama.</p>
        </div>
      </header>

      <main>
        <section className="quickGrid" aria-label="Brze akcije">
          <a href="#wifi">Wi-Fi</a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=DSR+Divcigora+Divcibare"
            target="_blank"
            rel="noreferrer"
          >
            Navigacija
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+381666660015">Pozovi</a>
        </section>

        <section className="card" id="wifi">
          <h2>📶 Wi-Fi internet</h2>
          <p><strong>Naziv mreže:</strong> {apt.wifiName}</p>
          <CopyButton value={apt.wifiName} />
          <p><strong>Lozinka:</strong> {apt.wifiPass}</p>
          <CopyButton value={apt.wifiPass} />
        </section>

        <section className="card">
          <h2>🏡 Informacije o apartmanu</h2>
          <p><strong>Kompleks:</strong> DSR Divčigora</p>
          <p><strong>Apartman:</strong> DSR26</p>
          <p><strong>Sprat:</strong> Prvi sprat</p>
          <p><strong>Lift:</strong> Zgrada ima lift</p>
          <p><strong>Prijava:</strong> od 14:00</p>
          <p><strong>Odjava:</strong> do 11:00</p>
          <p><strong>Parking:</strong> U okviru kompleksa</p>
          <p><strong>Pušenje:</strong> Nije dozvoljeno u apartmanu</p>
        </section>

        <section className="card">
          <h2>🌲 Uživajte na Divčibarama</h2>
          <p>
            Apartman ima terasu sa pogledom na prirodu.
            Za dodatne informacije o restoranima, šetnjama,
            aktivnostima i SPA sadržajima kontaktirajte nas.
          </p>
          <p>
            U blizini se nalaze prodavnica Breza Shop,
            restoran Divčibar i drugi sadržaji.
          </p>
        </section>

        <section className="card">
          <h2>📸 Fotografije apartmana DSR26</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            {apt.images.map((slika, index) => (
              <img
                key={index}
                src={slika}
                alt={`Apartman DSR26 – fotografija ${index + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            ))}
          </div>
        </section>

        <section className="card">
          <h2>💬 Potrebna vam je pomoć?</h2>
          <p>Tu smo za sva pitanja tokom vašeg boravka.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            Kontaktirajte nas putem WhatsApp-a
          </a>
        </section>
      </main>
    </>
  )
}
