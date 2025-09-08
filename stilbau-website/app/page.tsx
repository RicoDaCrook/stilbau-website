'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Menu, X, Phone, Mail, MapPin, Check, Star, Shield, Clock, Zap, Eye, Cpu, CreditCard, Home, Settings, Users, ArrowRight, Award, TrendingUp, Layers, Box } from 'lucide-react';

const StilbauWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState('fenster');
  const [konfiguratorPrice, setKonfiguratorPrice] = useState(489);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const products = {
    fenster: { name: 'Fenster', icon: '🪟', price: 'Ab 89€' },
    tueren: { name: 'Haustüren', icon: '🚪', price: 'Ab 1.299€' },
    rolladen: { name: 'Rollläden', icon: '🔒', price: 'Ab 199€' },
    insekt: { name: 'Insektenschutz', icon: '🦟', price: 'Ab 49€' }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1f2e 25%, #2c4059 50%, #1a1f2e 75%, #0a0a0a 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Animated Background Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(44, 64, 89, 0.3) 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 50,
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px' }}>
              STILBAU
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#999',
              borderLeft: '2px solid #333',
              paddingLeft: '0.5rem',
              marginLeft: '0.5rem'
            }}>
              SAUBER • FAIR • ZUVERLÄSSIG
            </div>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem', alignItems: 'center' }}>
              {['Produkte', '3D Konfigurator', 'Referenzen', 'Service', 'Über uns'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#4a6fa5'}
                  onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button style={{
              background: 'linear-gradient(135deg, #2c4059, #3a5073)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              fontSize: '0.9rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 30px rgba(44, 64, 89, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              Kostenlose Beratung
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ display: window.innerWidth <= 768 ? 'block' : 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(44, 64, 89, 0.2)',
                  border: '1px solid rgba(44, 64, 89, 0.3)',
                  borderRadius: '30px',
                  fontSize: '0.85rem'
                }}>
                  <Check size={16} /> Offizieller Drutex Partner
                </span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(44, 64, 89, 0.2)',
                  border: '1px solid rgba(44, 64, 89, 0.3)',
                  borderRadius: '30px',
                  fontSize: '0.85rem'
                }}>
                  <Star size={16} /> 4.9/5 Bewertung
                </span>
              </div>

              <h1 style={{ 
                fontSize: window.innerWidth > 768 ? '4rem' : '2.5rem', 
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '1.5rem'
              }}>
                Premium <span style={{
                  background: 'linear-gradient(135deg, #ffffff, #4a6fa5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Fenster</span><br />
                nach Maß
              </h1>

              <p style={{ 
                fontSize: '1.25rem', 
                color: '#b0b0b0',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Konfigurieren Sie Ihre Traumfenster in <span style={{ color: '#fff', fontWeight: '600' }}>3D</span>, 
                erhalten Sie <span style={{ color: '#fff', fontWeight: '600' }}>Live-Preise</span> und 
                profitieren Sie von unserer <span style={{ color: '#fff', fontWeight: '600' }}>40-jährigen Expertise</span>.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #2c4059, #3a5073)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}>
                  3D Konfigurator starten <ArrowRight size={20} />
                </button>
                <button style={{
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                  Katalog ansehen
                </button>
              </div>

              {/* Stats */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a6fa5' }}>7.000+</div>
                  <div style={{ fontSize: '0.85rem', color: '#999' }}>Zufriedene Kunden</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a6fa5' }}>3-4</div>
                  <div style={{ fontSize: '0.85rem', color: '#999' }}>Wochen Lieferzeit</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4a6fa5' }}>10</div>
                  <div style={{ fontSize: '0.85rem', color: '#999' }}>Jahre Garantie</div>
                </div>
              </div>
            </div>

            {/* Right: 3D Preview */}
            <div style={{ 
              position: 'relative',
              transform: `translateY(${Math.sin(Date.now() / 1000) * 10}px)`
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(44, 64, 89, 0.1), rgba(255, 255, 255, 0.05))',
                borderRadius: '20px',
                padding: '3rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  aspectRatio: '1',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem',
                  position: 'relative'
                }}>
                  🪟
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: '#00ff00',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    NEU: AR-Ansicht
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '5rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Unser <span style={{
              background: 'linear-gradient(135deg, #ffffff, #4a6fa5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Produktsortiment</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#999',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Hochwertige Bauelemente von Drutex - individuell konfigurierbar und in Premium-Qualität gefertigt
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
            gap: '2rem'
          }}>
            {Object.entries(products).map(([key, product]) => (
              <div 
                key={key}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 64, 89, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ color: '#999', marginBottom: '1rem' }}>Premium Qualität</p>
                <div style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold',
                  color: '#4a6fa5'
                }}>
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Konfigurator Section */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(44, 64, 89, 0.1)', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(44, 64, 89, 0.2)',
              border: '1px solid rgba(44, 64, 89, 0.3)',
              borderRadius: '30px',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              <Zap size={16} /> Innovativ
            </span>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Der intelligente <span style={{
                background: 'linear-gradient(135deg, #ffffff, #4a6fa5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>3D-Konfigurator</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#999', maxWidth: '800px', margin: '0 auto' }}>
              Gestalten Sie Ihre Fenster in Echtzeit, sehen Sie Live-Preise und erhalten Sie sofort ein verbindliches Angebot
            </p>
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 968 ? '1fr 2fr' : '1fr', gap: '2rem' }}>
              {/* Configuration Panel */}
              <div style={{ space: 'y-4' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Konfiguration</h3>
                
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.85rem', color: '#999' }}>Produkttyp</label>
                  <select style={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '5px',
                    padding: '0.5rem',
                    color: 'white',
                    marginTop: '0.5rem'
                  }}>
                    <option>Fenster</option>
                    <option>Haustür</option>
                    <option>Terrassentür</option>
                  </select>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.85rem', color: '#999' }}>Material</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <button style={{
                      padding: '0.5rem',
                      background: '#2c4059',
                      border: 'none',
                      borderRadius: '5px',
                      color: 'white',
                      cursor: 'pointer'
                    }}>PVC</button>
                    <button style={{
                      padding: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRadius: '5px',
                      color: 'white',
                      cursor: 'pointer'
                    }}>Holz</button>
                    <button style={{
                      padding: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRadius: '5px',
                      color: 'white',
                      cursor: 'pointer'
                    }}>Alu</button>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#999' }}>Maße (B x H in mm)</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <input 
                      type="number" 
                      defaultValue="1200" 
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '5px',
                        padding: '0.5rem',
                        color: 'white'
                      }}
                    />
                    <input 
                      type="number" 
                      defaultValue="1400" 
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '5px',
                        padding: '0.5rem',
                        color: 'white'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 3D View */}
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(44, 64, 89, 0.2), rgba(0, 0, 0, 0.5))',
                  borderRadius: '15px',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🪟</div>
                    <p style={{ color: '#999' }}>3D-Ansicht wird geladen...</p>
                    <button style={{
                      marginTop: '1rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRadius: '10px',
                      color: 'white',
                      cursor: 'pointer'
                    }}>
                      AR-Ansicht aktivieren 📱
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.1), transparent)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 255, 0, 0.3)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontSize: '0.85rem', color: '#999' }}>Ihr Preis inkl. MwSt.</p>
                      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{konfiguratorPrice},00 €</p>
                    </div>
                    <button style={{
                      background: 'linear-gradient(135deg, #2c4059, #3a5073)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      Angebot anfordern <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                { icon: <Zap size={24} />, title: 'Live-Preise', desc: 'Sofortige Berechnung' },
                { icon: <Eye size={24} />, title: 'AR-Ansicht', desc: 'Bei Ihnen zuhause' },
                { icon: <Settings size={24} />, title: 'Millimetergenau', desc: 'Exakte Anfertigung' },
                { icon: <Shield size={24} />, title: 'Speichern', desc: 'Jederzeit abrufbar' }
              ].map((feature, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#4a6fa5', marginBottom: '0.5rem' }}>{feature.icon}</div>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{feature.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#999' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '5rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                Warum <span style={{
                  background: 'linear-gradient(135deg, #ffffff, #4a6fa5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>STILBAU</span> wählen?
              </h2>
              
              <div style={{ space: 'y-4' }}>
                {[
                  { title: 'Offizieller Drutex Premium Partner', desc: 'Direkter Zugang zu allen Drutex-Innovationen' },
                  { title: '3-4 Wochen Expressfertigung', desc: 'Schnellste Lieferzeiten durch optimierte Prozesse' },
                  { title: '100% Transparenz', desc: 'Live-Preise, keine versteckten Kosten' },
                  { title: 'Rundum-Service', desc: 'Von Beratung über Montage bis Wartung' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Check size={24} color="#4a6fa5" />
                    <div>
                      <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: '#999' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '98%', label: 'Kundenzufriedenheit' },
                { value: '24h', label: 'Angebotserstellung' },
                { value: '10J', label: 'Garantie' },
                { value: 'A++', label: 'Energieeffizienz' }
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #ffffff, #4a6fa5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#999' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(to bottom, transparent, rgba(44, 64, 89, 0.1))', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Flexible Zahlungsmöglichkeiten</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            {['💳 Kreditkarte', '📱 PayPal', '🍎 Apple Pay', '🏦 Überweisung'].map((payment) => (
              <div key={payment} style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px'
              }}>
                {payment}
              </div>
            ))}
            <div style={{
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.2), rgba(255, 0, 128, 0.2))',
              border: '1px solid rgba(128, 0, 128, 0.3)',
              borderRadius: '10px'
            }}>
              ✨ Klarna Ratenzahlung
            </div>
          </div>
          <p style={{ color: '#999' }}>
            Finanzierung möglich ab 500€ • 0% Zinsen bei 6 Monaten Laufzeit
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(44, 64, 89, 0.2), rgba(128, 0, 128, 0.1))',
            borderRadius: '30px',
            padding: '4rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Bereit für Ihre neuen <span style={{
                background: 'linear-gradient(135deg, #ffffff, #4a6fa5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Traumfenster</span>?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Starten Sie jetzt mit unserem 3D-Konfigurator oder lassen Sie sich kostenlos beraten
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{
                background: 'linear-gradient(135deg, #2c4059, #3a5073)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                3D-Konfigurator starten <ArrowRight size={20} />
              </button>
              <button style={{
                background: 'transparent',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                📞 Rückruf anfordern
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Produkte</h4>
              <ul style={{ listStyle: 'none', padding: 0, space: 'y-2' }}>
                {['Fenster', 'Haustüren', 'Rollläden', 'Insektenschutz'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#999', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Service</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['3D-Konfigurator', 'Aufmaß-Service', 'Montage', 'Wartung'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#999', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Unternehmen</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Über uns', 'Referenzen', 'Karriere', 'Partner'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a href="#" style={{ color: '#999', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Kontakt</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#999' }}>
                <li style={{ marginBottom: '0.5rem' }}>📞 0800 - STILBAU</li>
                <li style={{ marginBottom: '0.5rem' }}>✉️ info@stilbau.de</li>
                <li style={{ marginBottom: '0.5rem' }}>📍 Göppingen</li>
                <li style={{ marginTop: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: '#999' }}>FB</a>
                    <a href="#" style={{ color: '#999' }}>IG</a>
                    <a href="#" style={{ color: '#999' }}>YT</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ 
            paddingTop: '2rem', 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>© 2024 STILBAU GmbH. Alle Rechte vorbehalten.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.85rem' }}>Impressum</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.85rem' }}>Datenschutz</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none', fontSize: '0.85rem' }}>AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default StilbauWebsite;
