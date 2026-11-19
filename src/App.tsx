import { useState, useEffect } from 'react'
import { PawPrint, Clock, CalendarCheck, Menu, X, Phone, MessageCircle, MapPin, ChevronRight, ArrowRight, Stethoscope, Syringe, Scissors, Microscope, Scan, Heart, Star, Send } from 'lucide-react'
import { clinicInfo, services, team, blogPosts } from './data'

const iconMap: Record<string, typeof Stethoscope> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  scissors: Scissors,
  microscope: Microscope,
  scan: Scan,
  heart: Heart,
}

function TopBar() {
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
            <span className="block whitespace-nowrap text-base font-bold tracking-wide xl:text-xl">{clinicInfo.name}</span>
            <span className="block whitespace-nowrap text-[10px] tracking-[0.2em] text-white/85 xl:text-[11px]">VETERİNER KLİNİĞİ</span>
          </span>
        </a>
        <div className="flex items-center gap-3 xl:gap-6">
          <div className="border-l border-white/20 pl-3 xl:pl-6">
            <div className="group flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-300 group-hover:bg-white/25 xl:h-12 xl:w-12">
                <Clock className="h-4 w-4 text-accent-200 xl:h-5 xl:w-5" />
              </span>
              <span className="leading-snug">
                <span className="block whitespace-nowrap text-[13px] font-bold xl:text-sm">7/24 Acil Servis</span>
                <span className="block whitespace-nowrap text-[11px] text-white/85 xl:text-xs">Poliklinik saatlerimiz: 7/24 açık</span>
              </span>
            </div>
          </div>
          <div className="border-l border-white/20 pl-3 xl:pl-6">
            <a href={clinicInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-300 group-hover:bg-white/25 xl:h-12 xl:w-12">
                <MessageCircle className="h-5 w-5 text-[#25D366] xl:h-6 xl:w-6" />
              </span>
              <span className="leading-snug">
                <span className="block whitespace-nowrap text-[13px] font-bold xl:text-sm">WhatsApp Destek</span>
                <span className="block whitespace-nowrap text-[11px] text-white/85 xl:text-xs">{clinicInfo.phone}</span>
              </span>
            </a>
          </div>
        </div>
        <img src="/cat-and-dog.png" alt="Gri bir kedi ve sarı bir köpek yan yana" className="relative z-50 -mb-[6px] h-[130px] w-auto shrink-0 self-end object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] xl:-mb-[7px] xl:h-[170px]" />
        <div className="border-l border-white/20 pl-3 xl:pl-6">
          <a href={`tel:${clinicInfo.phoneRaw}`} className="group flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 transition-colors duration-300 group-hover:bg-white/25 xl:h-12 xl:w-12">
              <CalendarCheck className="h-4 w-4 text-accent-200 xl:h-5 xl:w-5" />
            </span>
            <span className="leading-snug">
              <span className="block whitespace-nowrap text-[13px] font-bold xl:text-sm">Hızlı Randevu Al</span>
              <span className="block whitespace-nowrap text-[11px] text-white/85 xl:text-xs">{clinicInfo.phone}</span>
            </span>
          </a>
        </div>
        <div role="group" aria-label="Dil seçimi" className="absolute right-6 top-4 flex overflow-hidden rounded text-xs font-bold">
          <span aria-pressed className="bg-white px-2.5 py-1 text-primary-800">TR</span>
          <span aria-pressed={false} className="bg-white/15 px-2.5 py-1 text-white">EN</span>
        </div>
      </div>
    </div>
  )
}

function NavBar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')
  const links = [
    { href: '#top', label: 'ANA SAYFA' },
    { href: '#hakkimizda', label: 'HAKKIMIZDA' },
    { href: '#hizmetler', label: 'HİZMETLERİMİZ' },
    { href: '#ekibimiz', label: 'EKİBİMİZ' },
    { href: '#blog', label: 'BLOG' },
    { href: '#iletisim', label: 'İLETİŞİM' },
  ]
  useEffect(() => {
    const handler = () => {
      const sections = links.map(l => l.href)
      for (const sec of sections) {
        const el = document.querySelector(sec)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 120) { setActive(sec); break }
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
              <span className="block whitespace-nowrap text-base font-bold tracking-wide">{clinicInfo.name}</span>
              <span className="block whitespace-nowrap text-[10px] tracking-[0.2em] text-white/85">VETERİNER KLİNİĞİ</span>
            </span>
          </a>
        </div>
        <nav aria-label="Ana menü" className="ml-auto hidden h-full items-center lg:flex xl:ml-0">
          {links.map((l, i) => (
            <div key={l.href} className="flex h-full items-center">
              {i > 0 && <span aria-hidden className="h-5 w-px bg-white/25" />}
              <a href={l.href} className={`flex h-full items-center px-4 text-sm font-semibold tracking-wide transition-colors duration-200 xl:px-5 ${active === l.href ? 'bg-white text-primary-800' : 'text-white hover:bg-white/10'}`}>{l.label}</a>
            </div>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto rounded-lg p-2 text-white lg:hidden" aria-label="Menü">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-primary-800 lg:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block px-6 py-3 text-sm font-semibold tracking-wide ${active === l.href ? 'bg-white text-primary-800' : 'text-white hover:bg-white/10'}`}>{l.label}</a>
          ))}
        </nav>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 pb-16 pt-10 text-white lg:pb-24 lg:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <PawPrint className="absolute right-[10%] bottom-10 h-20 w-20 rotate-12 text-white/[0.06]" />
      </div>
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-300" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-400" />
            </span>
            7/24 Acil Servis Açık
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            Sevdikleriniz <span className="text-accent-300">güvenli ellerde</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Bayrampaşa Çapa Veteriner Kliniği olarak evcil ve sokak hayvanlarına 7/24 özenli tedavi sunuyoruz. Deneyimli ekibimiz, modern ekipmanlarımız ve sıcacık yaklaşımımızla yanınızdayız.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={`tel:${clinicInfo.phoneRaw}`} className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-primary-800 shadow-lg shadow-primary-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>
            <a href={clinicInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:shadow-xl">
              <MessageCircle className="h-5 w-5" />
              WhatsApp'tan Yaz
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-accent-300">15+</div>
              <div className="text-sm text-white/70">Yıllık Deneyim</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-300">10.000+</div>
              <div className="text-sm text-white/70">Mutlu Hasta</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-300">7/24</div>
              <div className="text-sm text-white/70">Acil Servis</div>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up lg:pl-8">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
            <img src="/pexels-photo-37143684.jpg" alt="Veteriner hekim bir kedi muayenesi yapıyor" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-auto sm:-right-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100">
                <Heart className="h-5 w-5 text-accent-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900">Sokak Hayvanı Desteği</div>
                <div className="text-xs text-stone-500">Ücretsiz ilk muayene</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const features = [
    { icon: Stethoscope, title: 'Deneyimli Ekip', desc: 'Alanında uzman veteriner hekimler ve teknikerler.' },
    { icon: Scan, title: 'Modern Ekipman', desc: 'Röntgen, ultrason ve tam donanımlı laboratuvar.' },
    { icon: Heart, title: 'Sevecen Yaklaşım', desc: 'Her hayvana şefkatle yaklaşan özenli bakım.' },
    { icon: Clock, title: '7/24 Hizmet', desc: 'Gündüz gece, hafta sonu, resmi tatil açık.' },
  ]
  return (
    <section id="hakkimizda" className="bg-stone-50 py-16 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-stone-900/10">
            <img src="/pexels-photo-36407054.jpg" alt="Veteriner kliniği muayene odası" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-64 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
            <img src="/pexels-photo-26932295.jpg" alt="Köpek muayene" className="aspect-square w-full object-cover" />
          </div>
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">Hakkımızda</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Hayvan sağlığında güvenilir adresiniz</h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            Bayrampaşa Çapa Veteriner Kliniği olarak 2010 yılından bu yana İstanbul'da evcil ve sokak hayvanlarına kaliteli veteriner hizmeti sunuyoruz. Kliniğimiz, deneyimli veteriner hekimler, modern tıbbi ekipmanlar ve sıcacık bir ortam ile her zaman yanınızda.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            Amacımız, her hastayı kendi evladı gibi görerek en iyi tedaviyi sağlamaktır. Sokak hayvanlarına da özenli ve uygun fiyatlı hizmet veriyoruz.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map(f => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-bold text-stone-900">{f.title}</div>
                  <div className="text-sm text-stone-500">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="hizmetler" className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">Hizmetlerimiz</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Sunduğumuz Veteriner Hizmetleri</h2>
          <p className="mt-4 leading-relaxed text-stone-600">Evcil ve sokak hayvanlarınız için ihtiyaç duyabileceğiniz tüm veteriner hizmetlerini tek çatı altında sunuyoruz.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.title} className="group overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-lg backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.desc}</p>
                  <a href="#iletisim" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700">
                    Detaylı Bilgi <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="ekibimiz" className="bg-stone-50 py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">Ekibimiz</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Deneyimli Veteriner Kadromuz</h2>
          <p className="mt-4 leading-relaxed text-stone-600">Hayvan sağlığı alanında uzmanlaşmış, şefkatli ve deneyimli ekibimizle tanışın.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(m => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900">{m.name}</h3>
                <p className="text-sm font-semibold text-primary-600">{m.role}</p>
                <p className="mt-2 text-sm text-stone-500">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="bg-white py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">Blog</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Bilgi ve Rehber Yazıları</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-600">Hayvan sağlığı, bakımı ve beslenmesi hakkında bilmeniz gerekenleri paylaşıyoruz.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(p => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-stone-100 bg-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-700 shadow-sm backdrop-blur-sm">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs text-stone-500">{p.date}</span>
                <h3 className="mt-2 font-bold text-stone-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{p.excerpt}</p>
                <a href="#blog" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700">
                  Devamını Oku <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }
  return (
    <section id="iletisim" className="bg-stone-50 py-16 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-600">İletişim</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Bize Ulaşın</h2>
          <p className="mt-4 leading-relaxed text-stone-600">Randevu almak veya herhangi bir sorunuz için bizimle iletişime geçin.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a href={`tel:${clinicInfo.phoneRaw}`} className="group flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-primary-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">Telefon</div>
                <div className="font-bold text-stone-900">{clinicInfo.phone}</div>
              </div>
            </a>
            <a href={clinicInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:shadow-primary-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]/20">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">WhatsApp</div>
                <div className="font-bold text-stone-900">{clinicInfo.phone}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700 ring-1 ring-accent-200/50">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">Adres</div>
                <div className="font-bold text-stone-900">{clinicInfo.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm text-stone-500">Çalışma Saatleri</div>
                <div className="font-bold text-stone-900">7/24 Açık</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-100 shadow-sm">
              <iframe title="Klinik Konumu" src="https://www.openstreetmap.org/export/embed.html?bbox=28.8%2C41.03%2C28.9%2C41.07&layer=mapnik" className="h-48 w-full" loading="lazy" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-stone-900">Randevu Talebi</h3>
            <p className="mt-1 text-sm text-stone-500">Formu doldurun, en kısa sürede sizi arayalım.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700">Ad Soyad</label>
                <input required type="text" className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="Adınız Soyadınız" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700">Telefon</label>
                <input required type="tel" className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="05XX XXX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700">Hayvan Türü</label>
                <select className="mt-1.5 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100">
                  <option>Kedi</option><option>Köpek</option><option>Kuş</option><option>Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700">Mesajınız</label>
                <textarea rows={3} className="mt-1.5 w-full resize-none rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="Sorununuzu kısaca açıklayın..." />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl">
                {sent ? 'Gönderildi!' : 'Gönder'} <Send className="h-4 w-4" />
              </button>
              {sent && <p className="text-center text-sm font-semibold text-primary-600">Talebiniz alındı, en kısa sürede sizinle iletişime geçeceğiz.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    { name: 'Selin K.', pet: 'Mırmır (Kedi)', text: '7/24 açık olması gece acil durumda çok hayatımı kurtardı. Çok ilgili ve şefkatli bir ekip.', stars: 5 },
    { name: 'Ahmet D.', pet: 'Paşa (Köpek)', text: 'Kısırlaştırma ameliyatını sorunsuz tamamladılar. Paşa aynı gün eve döndü. Teşekkürler.', stars: 5 },
    { name: 'Deniz Y.', pet: 'Lokum (Kedi)', text: 'Aşı takvimimi düzenli takip ediyorlar, hatırlatma mesajı atıyorlar. Çok düzenli bir klinik.', stars: 5 },
  ]
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-accent-300">Hasta Yorumları</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Müşterilerimiz Ne Diyor?</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map(r => (
            <div key={r.name} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-[3px]">
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="mt-4 leading-relaxed text-white/85">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 font-bold text-accent-300">{r.name[0]}</span>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs text-white/70">{r.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
                <span className="block font-bold tracking-wide">{clinicInfo.name}</span>
                <span className="block text-[10px] tracking-[0.2em] text-white/70">VETERİNER KLİNİĞİ</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Evcil ve sokak hayvanlarına 7/24 özenli veteriner hizmeti.</p>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Hızlı Erişim</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#hakkimizda" className="hover:text-white">Hakkımızda</a></li>
              <li><a href="#hizmetler" className="hover:text-white">Hizmetlerimiz</a></li>
              <li><a href="#ekibimiz" className="hover:text-white">Ekibimiz</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-accent-300" /> {clinicInfo.phone}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-accent-300" /> {clinicInfo.address}</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-accent-300" /> 7/24 Açık</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Acil Durumda</h4>
            <p className="mt-4 text-sm text-white/70">7/24 acil servisimiz açıktır. Hayvanınızın sağlığı için vakit kaybetmeyin.</p>
            <a href={`tel:${clinicInfo.phoneRaw}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-primary-800 transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <Phone className="h-4 w-4" /> Acil Ara
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {clinicInfo.fullName}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="text-white">
        <TopBar />
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
