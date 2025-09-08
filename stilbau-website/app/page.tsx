'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [konfiguratorPrice, setKonfiguratorPrice] = useState(489)
  const [selectedMaterial, setSelectedMaterial] = useState('pvc')
  const [windowWidth, setWindowWidth] = useState(1200)
  const [windowHeight, setWindowHeight] = useState(1400)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const basePrice = 300
    const materialPrice = selectedMaterial === 'pvc' ? 0 : selectedMaterial === 'holz' ? 200 : 400
    const sizePrice = ((windowWidth * windowHeight) / 1000000) * 150
    setKonfiguratorPrice(Math.round(basePrice + materialPrice + sizePrice))
  }, [selectedMaterial, windowWidth, windowHeight])

  const products = [
    { id: 'fenster', name: 'Fenster', icon: '🪟', price: 'Ab 89€', desc: 'Kunststoff, Holz & Aluminium' },
    { id: 'tueren', name: 'Haustüren', icon: '🚪', price: 'Ab 1.299€', desc: 'Sicherheit trifft Design' },
    { id: 'rolladen', name: 'Rollläden', icon: '🔒', price: 'Ab 199€', desc: 'Schutz & Komfort' },
    { id: 'insekt', name: 'Insektenschutz', icon: '🦟', price: 'Ab 49€', desc: 'Frische Luft ohne Insekten' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(44, 64, 89, 0.3), transparent 50%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold tracking-wider">STILBAU</div>
              <div className="hidden sm:block text-xs text-gray-400 border-l border-gray-600 pl-3">
                SAUBER • FAIR • ZUVERLÄSSIG
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {['Produkte', '3D Konfigurator', 'Referenzen', 'Service', 'Über uns'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Kostenlose Beratung
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-6 py-4">
              {['Produkte', '3D Konfigurator', 'Referenzen', 'Service', 'Über uns'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full font-semibold">
                Kostenlose Beratung
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fadeIn">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-sm">
                  ✓ Offizieller Drutex Partner
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-sm">
                  ⭐ 4.9/5 Bewertung
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Premium{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Fenster
                </span>
                <br />nach Maß
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Konfigurieren Sie Ihre Traumfenster in <span className="text-white font-semibold">3D</span>,
                erhalten Sie <span className="text-white font-semibold">Live-Preise</span> und
                profitieren Sie von unserer <span className="text-white font-semibold">40-jährigen Expertise</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5">
                  3D Konfigurator starten →
                </button>
                <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Katalog ansehen
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    7.000+
                  </div>
                  <div className="text-sm text-gray-400">Zufriedene Kunden</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    3-4
                  </div>
                  <div className="text-sm text-gray-400">Wochen Lieferzeit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    10
                  </div>
                  <div className="text-sm text-gray-400">Jahre Garantie</div>
                </div>
              </div>
            </div>

            {/* Right: 3D Preview */}
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-2xl flex items-center justify-center text-8xl">
                  🪟
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  NEU: AR-Ansicht
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produkte" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Unser{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Produktsortiment
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hochwertige Bauelemente von Drutex - individuell konfigurierbar und in Premium-Qualität gefertigt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4">{product.desc}</p>
                <div className="text-2xl font-bold text-blue-400">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Konfigurator Section */}
      <section id="3d-konfigurator" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full text-sm mb-4">
              ⚡ Innovativ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Der intelligente{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                3D-Konfigurator
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gestalten Sie Ihre Fenster in Echtzeit, sehen Sie Live-Preise und erhalten Sie sofort ein verbindliches Angebot
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Configuration Panel */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-4">Konfiguration</h3>

                {/* Material Selection */}
                <div className="bg-white/5 p-4 rounded-xl">
                  <label className="text-sm text-gray-400 mb-2 block">Material</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['PVC', 'Holz', 'Alu'].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat.toLowerCase())}
                        className={`py-2 px-3 rounded-lg transition-all duration-300 ${
                          selectedMaterial === mat.toLowerCase()
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Input */}
                <div className="bg-white/5 p-4 rounded-xl">
                  <label className="text-sm text-gray-400 mb-2 block">Maße (B x H in mm)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      value={windowWidth}
                      onChange={(e) => setWindowWidth(Number(e.target.value))}
                      className="bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      value={windowHeight}
                      onChange={(e) => setWindowHeight(Number(e.target.value))}
                      className="bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Verglasung */}
                <div className="bg-white/5 p-4 rounded-xl">
                  <label className="text-sm text-gray-400 mb-2 block">Verglasung</label>
                  <select className="w-full bg-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>3-fach (Ug 0.5)</option>
                    <option>2-fach (Ug 1.0)</option>
                  </select>
                </div>
              </div>

              {/* 3D View */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-8xl animate-spin-slow">🪟</div>
                  <button className="absolute bottom-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-lg hover:bg-white/20 transition-all">
                    AR-Ansicht 📱
                  </button>
                </div>

                {/* Price Display */}
                <div className="mt-6 p-6 bg-gradient-to-r from-green-900/30 to-transparent rounded-2xl border border-green-500/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Ihr Preis inkl. MwSt.</p>
                      <p className="text-4xl font-bold">{konfiguratorPrice},00 €</p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-all">
                      Angebot anfordern →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: '⚡', title: 'Live-Preise', desc: 'Sofortige Berechnung' },
                { icon: '👁️', title: 'AR-Ansicht', desc: 'Bei Ihnen zuhause' },
                { icon: '⚙️', title: 'Millimetergenau', desc: 'Exakte Anfertigung' },
                { icon: '💾', title: 'Speichern', desc: 'Jederzeit abrufbar' }
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Warum{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  STILBAU
                </span>{' '}
                wählen?
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'Offizieller Drutex Premium Partner', desc: 'Direkter Zugang zu allen Drutex-Innovationen' },
                  { title: '3-4 Wochen Expressfertigung', desc: 'Schnellste Lieferzeiten durch optimierte Prozesse' },
                  { title: '100% Transparenz', desc: 'Live-Preise, keine versteckten Kosten' },
                  { title: 'Rundum-Service', desc: 'Von Beratung über Montage bis Wartung' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-green-400 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '98%', label: 'Kundenzufriedenheit' },
                { value: '24h', label: 'Angebotserstellung' },
                { value: '10J', label: 'Garantie' },
                { value: 'A++', label: 'Energieeffizienz' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Flexible Zahlungsmöglichkeiten</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['💳 Kreditkarte', '📱 PayPal', '🍎 Apple Pay', '🏦 Überweisung'].map((payment) => (
              <div
                key={payment}
                className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
              >
                {payment}
              </div>
            ))}
            <div className="px-6 py-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-xl border border-purple-500/50">
              ✨ Klarna Ratenzahlung
            </div>
          </div>
          <p className="text-gray-400">
            Finanzierung möglich ab 500€ • 0% Zinsen bei 6 Monaten Laufzeit
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10">
            <h2 className="text-4xl font-bold mb-4">
              Bereit für Ihre neuen{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Traumfenster
              </span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Starten Sie jetzt mit unserem 3D-Konfigurator oder lassen Sie sich kostenlos beraten
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-all">
                3D-Konfigurator starten →
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                📞 Rückruf anfordern
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Produkte</h4>
              <ul className="space-y-2 text-gray-400">
                {['Fenster', 'Haustüren', 'Rollläden', 'Insektenschutz'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service</h4>
              <ul className="space-y-2 text-gray-400">
                {['3D-Konfigurator', 'Aufmaß-Service', 'Montage', 'Wartung'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-400">
                {['Über uns', 'Referenzen', 'Karriere', 'Partner'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 0800 - STILBAU</li>
                <li>✉️ info@stilbau.de</li>
                <li>📍 Göppingen, Baden-Württemberg</li>
                <li className="pt-2 flex gap-3">
                  <a href="#" className="hover:text-white transition-colors">FB</a>
                  <a href="#" className="hover:text-white transition-colors">IG</a>
                  <a href="#" className="hover:text-white transition-colors">YT</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center text-sm text-gray-400">
            <p>© 2024 STILBAU GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
