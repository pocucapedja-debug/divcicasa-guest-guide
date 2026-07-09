import { apartments } from '../../../data/apartments'
import { restaurants, activities, routes } from '../../../data/places'
import { Wifi, Phone, MapPin, Star, Home, Utensils, Trees, Gift, MessageCircle } from 'lucide-react'

export function generateStaticParams() { return Object.keys(apartments).map((id) => ({ id })) }

export default function ApartmentPage({ params }) {
  const apt = apartments[params.id] || apartments.f7
  const waHost = `https://wa.me/${apt.hostPhoneWa}?text=Pozdrav,%20nalazim%20se%20u%20${encodeURIComponent(apt.name)}.`
  return (
    <>
      <header className="hero">
        <nav className="topbar">
          <div className="brand"><div className="logo">DC</div><div><strong>DivčiCasa</strong><span>Digital Guest Guide</span></div></div>
          <a className="pill" href={apt.instagramUrl} target="_blank">Instagram</a>
        </nav>
        <div className="heroText">
          <p className="eyebrow">Dobro došli</p><h1>{apt.name}</h1>
          <p>Želimo da se na Divčibarama osećate kao kod kuće. Sve što vam je potrebno za boravak nalazi se na jednom mestu.</p>
          <div className="quick"><a href="#wifi">📶 Wi‑Fi</a><a href={waHost} target="_blank">💬 Kontakt</a><a href="#explore">📍 Explore</a></div>
        </div>
      </header>
      <main>
        <section id="wifi" className="card info"><div><p className="eyebrow">Brzo povezivanje</p><h2><Wifi size={24}/> Wi‑Fi</h2><p><strong>Mreža:</strong> {apt.wifiName}</p><p><strong>Šifra:</strong> {apt.wifiPassword}</p></div><div className="badge">{apt.id.toUpperCase()}</div></section>
        <section className="grid2">
          <div className="card"><h2><MessageCircle size={23}/> Kontakt domaćina</h2><p>Za sva pitanja tokom boravka, pošaljite nam poruku direktno preko WhatsApp-a.</p><a className="btn" href={waHost} target="_blank">Otvori WhatsApp</a></div>
          <div className="card"><h2><Star size={23}/> Google recenzija</h2><p>Ako ste zadovoljni boravkom, značilo bi nam da ostavite kratku recenziju.</p><a className="btn" href={apt.reviewUrl} target="_blank">Ostavite recenziju</a></div>
        </section>
        <section id="apartment" className="card"><p className="eyebrow">Vaš apartman</p><h2><Home size={24}/> {apt.name}</h2><div className="rules"><div>🕑 <strong>Check‑in:</strong> od 14:00</div><div>🕚 <strong>Check‑out:</strong> do 11:00</div><div>🔇 Noćni mir: 22:00 – 08:00</div><div>🚭 Pušenje nije dozvoljeno u apartmanu</div><div>🔥 Roštilj koristiti odgovorno i ostaviti uredno</div><div>💡 Pri izlasku ugasiti svetla i uređaje</div><div>🐾 Ljubimci samo uz prethodni dogovor</div><div>🏡 Molimo čuvajte inventar i apartman kao svoj dom</div></div></section>
        <section id="food"><div className="sectionHead"><p className="eyebrow">Preporuke DivčiCasa</p><h2><Utensils size={32}/> Gde jesti</h2></div>{restaurants.map((r) => <article className="place" key={r.title}><div className={`image ${r.imageClass}`}></div><div className="placeBody"><span className="tag">{r.label}</span><h3>{r.title}</h3><p>{r.description}</p><ul>{r.hours.map((h) => <li key={h}>{h}</li>)}{r.address && <li>Adresa: {r.address}</li>}{r.phone && <li>Viber / WhatsApp: {r.phone}</li>}</ul><div className="action"><a href={r.maps} target="_blank">📍 Navigacija</a>{r.tel && <a href={`tel:${r.tel}`}>📞 Pozovi</a>}{r.whatsapp && <a href={`https://wa.me/${r.whatsapp}`} target="_blank">💬 WhatsApp</a>}</div></div></article>)}</section>
        <section id="activities"><div className="sectionHead"><p className="eyebrow">Doživite Divčibare</p><h2><Trees size={32}/> Aktivnosti</h2></div><div className="grid2">{activities.map((a) => <article className="mini" key={a.title}><h3>{a.emoji} {a.title}</h3><p>{a.description}</p>{a.details.map((d) => <p key={d}><strong>{d}</strong></p>)}<div className="action">{a.actions.map((x) => <a href={x.href} target="_blank" key={x.label}>{x.label}</a>)}</div></article>)}</div></section>
        <section id="explore"><div className="sectionHead"><p className="eyebrow">Domaćin preporučuje</p><h2><MapPin size={32}/> Explore Divčibare</h2></div><div className="mapGrid">{routes.map((r)=><a className="route" href={r.href} key={r.title}><div><strong>{r.icon} {r.title}</strong><small>{r.subtitle}</small></div><span>→</span></a>)}</div></section>
        <section className="card"><p className="eyebrow">Ekskluzivno za goste</p><h2><Gift size={24}/> Pogodnosti</h2><p className="discount">10%</p><p>popusta na Quad Safari Divčibare za goste DivčiCasa.</p></section>
        <section className="card"><h2>👥 Team Building</h2><p>Divčibare su odlična destinacija za firme i grupe: smeštaj, priroda, roštilj, aktivnosti, kvadovi, jahanje, sportski programi i restorani.</p><a className="btn" href={`https://wa.me/${apt.hostPhoneWa}?text=Pozdrav,%20zanima%20nas%20team%20building%20u%20DivčiCasa.`} target="_blank">Pošalji upit</a></section>
        <section className="review"><h2>Hvala što ste bili naši gosti ❤️</h2><p>Vaše mišljenje nam mnogo znači.</p><a className="btn" href={apt.reviewUrl} target="_blank">⭐⭐⭐⭐⭐ Ostavite Google recenziju</a></section>
      </main>
      <footer><strong>DivčiCasa</strong><p>Divčibare • {apt.name}</p><a href={apt.bookingUrl} target="_blank">Rezervišite direktno</a></footer>
      <nav className="bottomNav"><a href="#"><Home size={18}/><span>Start</span></a><a href="#wifi"><Wifi size={18}/><span>Wi‑Fi</span></a><a href="#food"><Utensils size={18}/><span>Hrana</span></a><a href="#explore"><MapPin size={18}/><span>Mape</span></a><a href={waHost} target="_blank"><Phone size={18}/><span>Kontakt</span></a></nav>
    </>
  )
}
