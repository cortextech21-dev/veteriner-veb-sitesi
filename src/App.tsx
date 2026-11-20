import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  PawPrint, Clock, CalendarCheck, Menu, X, Phone, MessageCircle,
  MapPin, ChevronRight, ChevronLeft, ArrowRight, Stethoscope, Syringe,
  Scissors, FlaskConical, Ambulance, Handshake, Heart, Star, Award,
  Send, CheckCircle2, Quote,
} from 'lucide-react'
import {
  clinic, navLinks, heroSlides, heroIntro, about, services,
  whyUs, stats, team, reviews, blogPosts,
} from './data'

type Language = 'tr' | 'en'

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({
  language: 'tr',
  setLanguage: () => undefined,
})

function useLanguage() {
  return useContext(LanguageContext)
}

function WhatsAppIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16 2.7a13.2 13.2 0 0 0-11.4 20L2.8 29.3l6.8-1.8A13.3 13.3 0 1 0 16 2.7Zm0 24.1c-2.1 0-4.1-.6-5.9-1.7l-.4-.2-4 .9 1-3.9-.3-.4a10.6 10.6 0 1 1 9.6 5.3Zm5.8-7.9c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.9-.9-3.1-1.6-4.3-3.6-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.9 2.1.9 2.9 1 3.9.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4Z" />
    </svg>
  )
}

const copy = {
  tr: {
    emergency: '7/24 Acil Servis',
    hours: 'Poliklinik saatlerimiz: 7/24 açık',
    whatsapp: 'WhatsApp Destek',
    appointment: 'Hızlı Randevu Al',
    clinic: 'VETERİNER KLİNİĞİ',
    home: 'Ana Sayfa',
    heroTitle: 'Dostlarınız 7/24 güvenli ellerde',
    appointmentButton: 'Randevu Al',
    call: 'Hemen Ara',
  },
  en: {
    emergency: '24/7 Emergency Service',
    hours: 'Our clinic is open 24/7',
    whatsapp: 'WhatsApp Support',
    appointment: 'Quick Appointment',
    clinic: 'VETERINARY CLINIC',
    home: 'Home',
    heroTitle: 'Your friends are in safe hands 24/7',
    appointmentButton: 'Book an Appointment',
    call: 'Call Now',
  },
}

const iconMap: Record<string, typeof Stethoscope> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  heart: Heart,
  scissors: Scissors,
  flask: FlaskConical,
  ambulance: Ambulance,
  paw: PawPrint,
  handshake: Handshake,
  clock: Clock,
  award: Award,
  star: Star,
}

function TopBar() {
  const { language, setLanguage } = useLanguage()
  const text = copy[language]
  return (
    <div className="relative overflow-x-clip bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-primary-300/20 blur-3xl" />
        <PawPrint className="absolute left-[38%] -top-6 h-32 w-32 -rotate-12 text-white/[0.06]" />
        <PawPrint className="absolute right-[14%] top-3 h-20 w-20 rotate-12 text-white/[0.06]" />
        <PawPrint className="absolute bottom-2 left-[62%] h-16 w-16 -rotate-6 text-white/[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
      <div className="relative mx-auto hidden h-[170px] max-w-[1280px] items-center justify-between gap-3 px-6 lg:flex xl:gap-6">
        <a href="#top" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 text-white xl:h-14 xl:w-14">
            <PawPrint className="h-6 w-6 xl:h-7 xl:w-7" />
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-base font-bold tracking-wide xl:text-xl">{clinic.shortName}</span>
            <span className="block whitespace-nowrap text-[10px] tracking-[0.2em] text-white/85 xl:text-[11px]">{text.clinic}</span>
          </span>
        </a>
        <div className="flex items-center gap-3 xl:gap-6">
          <div className="border-l border-white/20 pl-3 xl:pl-6">
            <div className="group flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-300 group-hover:bg-white/25 xl:h-12 xl:w-12">
                <Clock className="h-4 w-4 text-accent-200 xl:h-5 xl:w-5" />
              </span>
              <span className="leading-snug">
                <span className="block whitespace-nowrap text-[13px] font-bold xl:text-sm">{text.emergency}</span>
                <span className="block whitespace-nowrap text-[11px] text-white/85 xl:text-xs">{text.hours}</span>
              </span>
            </div>
          </div>
          <div className="border-l border-white/20 pl-3 xl:pl-6">
            <a href={clinic.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-300 group-hover:bg-white/25 xl:h-12 xl:w-12">
                <WhatsAppIcon className="h-5 w-5 text-[#25D366] xl:h-6 xl:w-6" />
              </span>
              <span className="leading-snug">
                <span className="block whitespace-nowrap text-[13px] font-bold xl:text-sm">{text.whatsapp}</span>
                <span className="block whitespace-nowrap text-[11px] text-white/85 xl:text-xs">{clinic.phoneDisplay}</span>
              </span>
            </a>
          </div>
        </div>
        <img src="/cat-and-dog.png" alt="Gri bir kedi ve sarı bir köpek yan yana" className="relative z-50 -mb-[6px] h-[130px] w-auto shrink-0 self-end object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] xl:-mb-[7px] xl:h-[170px]" />
        <div className="border-l border-white/20 pl-3 xl:pl-6">
          <a href={clinic.phoneHref} className="group flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-300 group-hover:bg-white/25 xl:h-12 xl:w-12">
              <CalendarCheck className="h-4 w-4 text-accent-200 xl:h-5 xl:w-5" />
            </span>
            <span className="leading-snug">
              <span className="block whitespace-nowrap text-[13px] font-bold xl:text-sm">{text.appointment}</span>
              <span className="block whitespace-nowrap text-[11px] text-white/85 xl:text-xs">{clinic.phoneDisplay}</span>
            </span>
          </a>
        </div>
        <div role="group" aria-label="Language selection" className="absolute right-6 top-4 flex overflow-hidden rounded text-xs font-bold">
          <button type="button" aria-pressed={language === 'tr'} onClick={() => setLanguage('tr')} className={language === 'tr' ? 'bg-white px-2.5 py-1 text-primary-800' : 'bg-white/15 px-2.5 py-1 text-white'}>TR</button>
          <button type="button" aria-pressed={language === 'en'} onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-white px-2.5 py-1 text-primary-800' : 'bg-white/15 px-2.5 py-1 text-white'}>EN</button>
        </div>
      </div>
    </div>
  )
}

function NavBar() {
  const { language } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')
  const labels = language === 'en' ? ['HOME', 'ABOUT US', 'SERVICES', 'OUR TEAM', 'BLOG', 'CONTACT'] : navLinks.map(l => l.label.toUpperCase())
  useEffect(() => {
    const handler = () => {
      for (const l of navLinks) {
        const el = document.querySelector(l.href)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) { setActive(l.href); break }
        }
      }
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <div className="sticky top-0 z-40 border-t border-white/10 bg-primary-800 shadow-lg shadow-primary-900/30">
      <div className="mx-auto flex h-[60px] max-w-[1280px] items-center gap-4 px-6">
        <div className="lg:hidden">
          <a href="#top" className="group flex shrink-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 text-white">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block whitespace-nowrap text-base font-bold tracking-wide">{clinic.shortName}</span>
              <span className="block whitespace-nowrap text-[10px] tracking-[0.2em] text-white/85">{copy[language].clinic}</span>
            </span>
          </a>
        </div>
        <nav aria-label="Ana menü" className="ml-auto hidden h-full items-center lg:flex xl:ml-0">
          {navLinks.map((l, i) => (
            <div key={l.href} className="flex h-full items-center">
              {i > 0 && <span aria-hidden className="h-5 w-px bg-white/25" />}
              <a href={l.href} className={"flex h-full items-center px-4 text-sm font-semibold tracking-wide transition-colors duration-200 xl:px-5 " + (active === l.href ? "bg-white text-primary-800" : "text-white hover:bg-white/10")}>{labels[i]}</a>
            </div>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto rounded-lg p-2 text-white lg:hidden" aria-label="Menü">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-primary-800 lg:hidden">
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={"block px-6 py-3 text-sm font-semibold tracking-wide " + (active === l.href ? "bg-white text-primary-800" : "text-white hover:bg-white/10")}>{labels[i]}</a>
          ))}
        </nav>
      )}
    </div>
  )
}

function Hero() {
  const { language } = useLanguage()
  const text = copy[language]
  const [current, setCurrent] = useState(0)
  const next = useCallback(() => setCurrent(c => (c + 1) % heroSlides.length), [])
  const prev = () => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)
  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])
  const slide = heroSlides[current]
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-60px)] items-center overflow-hidden bg-primary-900 text-white">
      <img src={slide.image} alt={slide.alt} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/55 to-primary-900/20" />
      <div className="absolute inset-0 bg-primary-700/20" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-24 lg:py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/40 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-300" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-400" />
            </span>
            {heroIntro.badge}
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {text.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{heroIntro.subtitle}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#iletisim" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-xl">
              <CalendarCheck className="h-5 w-5" /> {text.appointmentButton}
            </a>
            <a href={clinic.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-primary-800">
              <Phone className="h-5 w-5" /> {text.call}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={(i + 1) + ". görsele git"} className={"h-2.5 rounded-full transition-all " + (i === current ? "w-7 bg-accent-400" : "w-2.5 bg-white/60")} />
          ))}
        </div>
        <button onClick={prev} aria-label="Önceki görsel" className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 lg:left-8">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={next} aria-label="Sonraki görsel" className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 lg:right-8">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

function About() {
  const { language } = useLanguage()
  return (
    <section id="hakkimizda" className="bg-stone-50 py-16 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-stone-900/10">
            <img src="/pexels-photo-36407054.jpg" alt="Kırmızı minderde oturan sevimli bir yavru kedi" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
            <img src="/pexels-photo-39550296.jpg" alt="Kucaklanmak için bekleyen tatlı bir Maine Coon yavru kedisi" className="aspect-square w-full object-cover" />
          </div>
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">{language === 'en' ? 'About Us' : about.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{language === 'en' ? 'With love, knowledge and patience' : about.title}</h2>
          <p className="mt-5 leading-relaxed text-stone-600">{language === 'en' ? 'At Bayrampaşa Çapa Veterinary Clinic, we care for your companions like family members. We listen carefully, explain clearly and find the right decision together.' : about.body}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyUs.slice(0, 4).map(f => {
              const Icon = iconMap[f.icon] || Stethoscope
              return (
                <div key={f.title} className="flex items-start gap-3 rounded-xl border border-stone-100 bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-bold text-stone-900">{f.title}</div>
                    <div className="text-sm text-stone-500">{f.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const { language } = useLanguage()
  return (
    <section id="hizmetler" className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">{language === 'en' ? 'Services' : 'Hizmetlerimiz'}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{language === 'en' ? 'One address for every need' : 'Her ihtiyaç için tek adres'}</h2>
          <p className="mt-4 leading-relaxed text-stone-600">{language === 'en' ? 'From routine check-ups to emergency care, we provide a wide range of services for pets and street animals.' : 'Rutin kontrollerden acil müdahaleye, evcil ve sokak hayvanlarına kadar geniş bir hizmet yelpazesi sunuyoruz.'}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => {
            const Icon = iconMap[s.icon] || Stethoscope
            return (
              <div key={s.id} className="group overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-lg backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const { language } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-primary-900 py-16 text-white lg:py-24">
      <img src="/pexels-photo-26932295.jpg" alt="Veteriner kliniğinde sevimli kediler" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/75 to-primary-700/80" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent-300">{language === 'en' ? 'Why Us' : 'Neden Biz'}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{language === 'en' ? 'A clinic that makes you feel safe' : 'Sizi güvende hissettiren bir klinik'}</h2>
          <p className="mt-4 leading-relaxed text-white/85">{language === 'en' ? 'Everything you need for your companions’ health is under one roof.' : 'Dostlarınızın sağlığı için ihtiyaç duyduğunuz her şey tek bir çatının altında.'}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.slice(1).map(f => {
            const Icon = iconMap[f.icon] || Stethoscope
            return (
              <div key={f.title} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600/60 text-accent-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{f.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-11 grid overflow-hidden rounded-2xl border border-accent-300/30 bg-primary-700/80 shadow-xl backdrop-blur-sm sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className={"p-5 text-center sm:p-6 " + (i > 0 ? "border-t border-white/20 sm:border-l sm:border-t-0" : "")}>
              <div className="text-xs font-semibold text-white/80">{s.label}</div>
              <div className="mt-1 text-4xl font-bold text-white">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  const { language } = useLanguage()
  return (
    <section id="ekibimiz" className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">{language === 'en' ? 'Our Team' : 'Ekibimiz'}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{language === 'en' ? 'Our experienced veterinary team' : 'Alanında uzman veteriner hekimlerimiz'}</h2>
          <p className="mt-4 leading-relaxed text-stone-600">{language === 'en' ? 'Every member of our team combines knowledge, patience and love for your companions.' : 'Her hekimimiz dostlarınız için bilgi, sabır ve sevgiyi bir arada sunar.'}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(m => (
            <div key={m.id} className="group overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={m.image} alt={m.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-bold text-primary-800 backdrop-blur-sm">{language === 'en' ? 'Veterinarian' : 'Veteriner Hekim'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const { language } = useLanguage()
  return (
    <section className="bg-stone-50 py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">{language === 'en' ? 'Reviews' : 'Müşteri Yorumları'}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{language === 'en' ? 'What do our patient families say?' : 'Hasta ailelerimiz ne diyor?'}</h2>
          <p className="mt-4 leading-relaxed text-stone-600">{language === 'en' ? 'A selection of real experiences shared on Google.' : "Google'da paylaşılan gerçek deneyimlerden seçilmiş birkaç yorum."}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map(r => (
            <div key={r.id} className="flex flex-col rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-primary-200" />
              <p className="mt-3 flex-1 leading-relaxed text-stone-700">{r.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">{r.author[0]}</span>
                <div>
                  <div className="font-bold text-stone-900">{r.author}</div>
                  <div className="text-xs text-stone-500">{r.meta} · {r.time}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const { language } = useLanguage()
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <section id="blog" className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">{language === 'en' ? 'Blog' : 'Blog'}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{language === 'en' ? 'Useful information for your companions' : 'Dostlarınız için faydalı bilgiler'}</h2>
          <p className="mt-4 leading-relaxed text-stone-600">Sağlık, beslenme ve bakım üzerine kısa ve anlaşılır rehberler. Bir yazının üzerine gelin ya da dokunarak büyütün.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(p => {
            const isOpen = expanded === p.id
            return (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-700 shadow-sm backdrop-blur-sm">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-stone-900">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{p.excerpt}</p>
                  {isOpen && (
                    <p className="mt-3 rounded-lg bg-white p-3 text-sm leading-relaxed text-stone-600 ring-1 ring-stone-100">{p.body}</p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-stone-500">{p.readTime}</span>
                    <button onClick={() => setExpanded(isOpen ? null : p.id)} className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700">
                      {isOpen ? 'Kapat' : 'Devamını Oku'} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { language } = useLanguage()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [petType, setPetType] = useState('kedi')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) { setStatus('error'); return }
    setStatus('sending')
    const text = 'Hayvan türü: ' + petType + ' - ' + message.trim()
    const waBase = clinic.whatsappHref
    const url = waBase + '&text=' + encodeURIComponent(text)
    setTimeout(() => {
      setStatus('sent')
      window.open(url, '_blank')
      setName(''); setPhone(''); setMessage('')
      setTimeout(() => setStatus('idle'), 4000)
    }, 600)
  }
  return (
    <section id="iletisim" className="bg-stone-50 py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">{language === 'en' ? 'Contact' : 'İletişim'}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{language === 'en' ? 'Book an appointment, contact us' : 'Randevu alın, bize ulaşın'}</h2>
          <p className="mt-4 leading-relaxed text-stone-600">Formu doldurun, sizi en kısa sürede arayalım. Acil durumlarda doğrudan arayabilir ya da WhatsApp'tan yazabilirsiniz.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a href={clinic.phoneHref} className="group flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-primary-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">Telefon</div>
                <div className="font-bold text-stone-900">{clinic.phoneDisplay}</div>
              </div>
            </a>
            <a href={clinic.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-primary-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]/20">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">WhatsApp</div>
                <div className="font-bold text-stone-900">{clinic.phoneDisplay}</div>
              </div>
            </a>
            <a href={clinic.mapsLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-primary-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700 ring-1 ring-accent-200/50">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">Adres</div>
                <div className="font-bold text-stone-900">{clinic.address}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">Çalışma saatleri</div>
                <div className="font-bold text-stone-900">7/24 açık, kesintisiz hizmet</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-100 shadow-sm">
              <iframe title="Bayrampaşa Çapa Veteriner Kliniği konumu" src={clinic.mapsEmbed} className="h-56 w-full" loading="lazy" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-stone-900">Randevu Talebi</h3>
            <p className="mt-1 text-sm text-stone-500">Bilgilerinizi bırakın, ekibimiz sizi arasın.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700">Ad Soyad</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="Adınız Soyadınız" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700">Telefon</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="05XX XXX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700">Hayvan Türü</label>
                <div className="mt-2 flex gap-2">
                  {[
                    { value: 'kedi', label: 'Kedi' },
                    { value: 'kopek', label: 'Köpek' },
                    { value: 'diger', label: 'Diğer' },
                  ].map(opt => (
                    <button key={opt.value} type="button" onClick={() => setPetType(opt.value)} className={"flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors " + (petType === opt.value ? "border-primary-500 bg-primary-50 text-primary-700" : "border-stone-200 bg-white text-stone-600 hover:border-stone-300")}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700">Mesajınız</label>
                <textarea rows={3} value={message} onChange={e => setMessage(e.target.value)} className="mt-1.5 w-full resize-none rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="Dostunuzun adını, yaşını ve sorunuzu kısaca yazın..." />
              </div>
              {status === 'error' && <p className="text-sm font-semibold text-red-700">Lütfen adınızı ve soyadınızı girin.</p>}
              {status === 'sent' && (
                <div className="flex items-center gap-2 rounded-xl bg-primary-50 p-3 text-sm font-semibold text-primary-700">
                  <CheckCircle2 className="h-5 w-5" /> Talebiniz alındı, WhatsApp üzerinden yönlendiriliyorsunuz.
                </div>
              )}
              <button type="submit" disabled={status === 'sending'} className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
                {status === 'sending' ? 'Gönderiliyor...' : 'Randevu Talebi Gönder'} <Send className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-stone-500">Acil durumlarda doğrudan arayabilir veya WhatsApp'tan yazabilirsiniz.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function FloatingWhatsApp() {
  return (
    <a href={clinic.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişime geçin" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 ring-4 ring-white/80 transition-transform hover:scale-110">
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-primary-900 py-12 text-white">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-white/10">
                <PawPrint className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block font-bold tracking-wide">{clinic.shortName}</span>
                <span className="block text-[10px] tracking-[0.2em] text-white/70">VETERİNER KLİNİĞİ</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Acil durumlar için her gün, her saat ulaşabilirsiniz.</p>
            <a href={clinic.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5a]">
              <MessageCircle className="h-4 w-4" /> WhatsApp ile yazın
            </a>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Hızlı Erişim</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navLinks.map(l => (
                <li key={l.href}><a href={l.href} className="transition-colors hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" /> {clinic.phoneDisplay}</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" /> {clinic.address}</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" /> 7/24 açık, kesintisiz hizmet</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">7/24 Acil Servis</h4>
            <p className="mt-4 text-sm text-white/70">Gece, gündüz, hafta sonu fark etmeksizin acil durumlarda kliniğimiz yanınızda.</p>
            <a href={clinic.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-primary-800 transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <Phone className="h-4 w-4" /> Acil Ara
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {clinic.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [language, setLanguage] = useState<Language>('tr')
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-stone-50">
      <header className="text-white">
        <TopBar />
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
    </LanguageContext.Provider>
  )
}
