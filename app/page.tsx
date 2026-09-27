'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Bell,
  BusFront,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Gauge,
  MapPin,
  Menu,
  Navigation,
  Plus,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserRound,
  X,
} from 'lucide-react'

const routes = [
  { name: 'Notun Bazar', type: 'Local route', eta: '8 min', distance: '4.2 km', load: 62, stops: ['UIU Campus', 'Bashundhara', 'Notun Bazar'], color: '#16856f' },
  { name: 'Kuril', type: 'Local route', eta: '14 min', distance: '6.8 km', load: 76, stops: ['UIU Campus', 'Jamuna Future Park', 'Kuril'], color: '#1769aa' },
  { name: 'Aftabnagar', type: 'Local route', eta: '21 min', distance: '9.1 km', load: 48, stops: ['UIU Campus', 'Rampura Bridge', 'Aftabnagar'], color: '#9c4d22' },
]

export default function Page() {
  const [activeRoute, setActiveRoute] = useState('Notun Bazar')
  const [booked, setBooked] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const route = routes.find((item) => item.name === activeRoute) ?? routes[0]

  return (
    <main className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand"><div className="brand-mark"><BusFront size={20} strokeWidth={2.4} /></div><span>UIU<span className="brand-accent"> Shuttle</span></span></div>
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
        <div className="profile-card"><div className="avatar">AR</div><div><strong>Arif Rahman</strong><span>Free student plan</span></div><ChevronDown size={16} className="muted-icon" /></div>
        <nav className="nav-list" aria-label="Main navigation">
          <a className="nav-item active" href="#overview"><Gauge size={18} /> Overview</a>
          <a className="nav-item" href="#routes"><Route size={18} /> Browse routes</a>
          <a className="nav-item" href="#bookings"><Ticket size={18} /> My bookings <span className="nav-badge">1</span></a>
          <a className="nav-item" href="#alerts"><Bell size={18} /> Service alerts</a>
        </nav>
        <div className="sidebar-bottom"><div className="help-box"><CircleHelp size={18} /><div><strong>Need a hand?</strong><span>Visit the help center</span></div><ArrowRight size={16} /></div><a className="nav-item" href="#account"><UserRound size={18} /> Account settings</a></div>
      </aside>

      <section className="main-content">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button><div className="breadcrumb"><span>Workspace</span><span>/</span><strong>Overview</strong></div><div className="top-actions"><button className="icon-button" aria-label="Notifications"><Bell size={19} /><i /></button><div className="top-avatar">AR</div></div></header>
        <div className="content-wrap" id="overview">
          <div className="page-heading"><div><p className="eyebrow">Monday, 24 June 2024</p><h1>Good morning, Arif<span className="heading-dot">.</span></h1><p className="subheading">Plan your ride and stay ahead of the crowd.</p></div><button className="primary-button" onClick={() => document.getElementById('routes')?.scrollIntoView({ behavior: 'smooth' })}><Plus size={17} /> Book a shuttle</button></div>
          <section className="alert-banner"><div className="alert-icon"><Sparkles size={17} /></div><div><strong>Exam week traffic expected</strong><p>Demand is usually 30% higher between 8:00–10:00 AM. Book early to secure your seat.</p></div><button className="alert-close" aria-label="Dismiss alert"><X size={16} /></button></section>

          <div className="section-header"><div><h2>Live network</h2><p>Track shuttles across the UIU corridor</p></div><span className="live-pill"><i /> Live updates</span></div>
          <section className="network-grid"><div className="map-card"><div className="map-top"><div><span className="card-label">ACTIVE SHUTTLES</span><strong>3 buses on the move</strong></div><button className="map-control" aria-label="Center map"><Navigation size={16} /></button></div><div className="map-art"><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" /><div className="map-water" /><div className="map-label campus">UIU Campus</div><div className="map-label kuril">Kuril</div><div className="map-label bazar">Notun Bazar</div><div className="map-pin pin-one"><BusFront size={14} /></div><div className="map-pin pin-two"><BusFront size={14} /></div><div className="map-pin pin-three"><BusFront size={14} /></div><div className="map-stop stop-one" /><div className="map-stop stop-two" /><div className="map-stop stop-three" /></div><div className="map-footer"><span><i className="legend-bus" /> Shuttle location</span><span><i className="legend-stop" /> Pickup point</span><a href="#map">Open full map <ArrowRight size={14} /></a></div></div>
            <div className="stats-stack"><div className="stat-card"><div className="stat-icon teal"><BusFront size={18} /></div><div><span>Shuttles active</span><strong>3 <small>of 5</small></strong></div><span className="stat-trend">+1 today</span></div><div className="stat-card"><div className="stat-icon blue"><Clock3 size={18} /></div><div><span>Average wait</span><strong>11 <small>min</small></strong></div><span className="stat-trend neutral">On schedule</span></div><div className="stat-card"><div className="stat-icon amber"><ShieldCheck size={18} /></div><div><span>Seats available</span><strong>64 <small>across routes</small></strong></div><span className="stat-trend">Healthy</span></div></div></section>

          <div className="section-header routes-heading" id="routes"><div><h2>Choose a route</h2><p>See live capacity before you book</p></div><button className="text-button">View all routes <ArrowRight size={15} /></button></div>
          <section className="route-grid">{routes.map((item) => <button className={`route-card ${activeRoute === item.name ? 'selected' : ''}`} key={item.name} onClick={() => { setActiveRoute(item.name); setBooked(false) }}><div className="route-card-top"><div className="route-color" style={{ background: item.color }}><BusFront size={19} /></div><div className="route-title"><strong>{item.name}</strong><span>{item.type} · {item.distance}</span></div><ArrowRight size={17} className="route-arrow" /></div><div className="route-line"><span>{item.stops[0]}</span><div className="line-track"><i /><i /><i /></div><span>{item.stops[2]}</span></div><div className="route-meta"><span><Clock3 size={14} /> {item.eta} away</span><span className="capacity"><span className="capacity-bar"><i style={{ width: `${item.load}%` }} /></span>{100 - item.load} seats left</span></div></button>)}</section>

          <section className="booking-card" id="bookings"><div className="booking-copy"><span className="card-label">YOUR NEXT RIDE</span><h2>{booked ? 'Seat reserved.' : 'Ready to ride?'}</h2><p>{booked ? `Your seat on the ${activeRoute} shuttle is confirmed. Show this pass when boarding.` : `Reserve a seat on the ${activeRoute} route and skip the queue at your pickup point.`}</p>{booked ? <div className="booking-confirm"><Check size={16} /> Booking confirmed · Today, 8:30 AM</div> : <button className="primary-button" onClick={() => setBooked(true)}>Reserve a seat <ArrowRight size={16} /></button>}</div><div className="ticket-visual"><div className="ticket-hole top" /><div className="ticket-hole bottom" /><div className="ticket-route"><MapPin size={16} /><strong>UIU Campus</strong><ArrowRight size={15} /><strong>{activeRoute}</strong></div><div className="ticket-time"><span>DEPARTS IN</span><strong>{route.eta}</strong></div><div className="ticket-line" /></div></section>
          <footer><span>UIU Shuttle · Built for smoother campus journeys</span><span>Need support? <strong>help@uiu.ac.bd</strong></span></footer>
        </div>
      </section>
    </main>
  )
}
