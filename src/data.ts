export const clinic = {
  name: "Bayrampaşa Çapa Veteriner Kliniği",
  shortName: "Bayrampaşa Çapa",
  phoneDisplay: "0507 186 74 05",
  phoneHref: "tel:+905071867405",
  whatsappHref: "https://wa.me/905071867405?text=Merhaba%2C%20randevu%20almak%20istiyorum.",
  address: "Yenidoğan, Abdi İpekçi Cd. 53A, 34093 Bayrampaşa / İstanbul",
  mapsLink: "https://maps.app.goo.gl/VwtAD5xnLspqWSGXA",
  mapsEmbed: "https://www.google.com/maps?q=41.0372,28.9120&z=17&output=embed",
  rating: 4.2,
  reviewCount: 497,
}

export const navLinks = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Ekibimiz", href: "#ekibimiz" },
  { label: "Blog", href: "#blog" },
  { label: "İletişim", href: "#iletisim" },
]

export const heroSlides = [
  { image: "/pexels-photo-6900232.jpg", alt: "Kırmızı minderde oturan sevimli bir yavru kedi", caption: "Minicik patiler, büyük sevgi" },
  { image: "/pexels-photo-36407054.jpg", alt: "Gözleri parlayan sevimli bir tekir kedi", caption: "Bakışlarıyla bile kalbinizi ısıtan dostlar" },
  { image: "/pexels-photo-38151480.jpg", alt: "Yumuşak yatağında huzurla uyuyan beyaz bir kedi", caption: "Huzurlu uykular, sağlıklı günler" },
  { image: "/pexels-photo-20292232.jpg", alt: "Mavi gözleriyle bakan tüylü bir Ragdoll kedi", caption: "Tatlı bakışlar, sağlıklı bir hayat" },
  { image: "/pexels-photo-33733226.jpg", alt: "Mavi gözlü bir Siam yavru kedisi", caption: "Merakla dünyayı keşfeden minik dostlar" },
]

export const heroIntro = {
  badge: "Şu an açık · Minicik patiler, büyük sevgi",
  subtitle: "Genel muayeneden acil müdahaleye, aşıdan cerrahiye kadar kedi ve köpekleriniz için deneyimli veteriner ekibimizle yanınızdayız.",
}

export const about = {
  eyebrow: "Hakkımızda",
  title: "Sevgiyle, bilgiyle ve sabırla",
  body: "Bayrampaşa Çapa Veteriner Kliniği olarak, dostlarınızın sağlığını her zaman bir aile üyesi gibi önemsiyoruz. Her muayenede dikkatli dinliyor, net bilgi veriyor ve birlikte en doğru kararı veriyoruz.",
}

export const services = [
  { id: "genel-muayene", icon: "stethoscope", title: "Genel Muayene", description: "Kapsamlı fiziki muayene ile sağlık durumunu düzenli olarak takip ediyoruz.", image: "/pexels-photo-39497325.jpg" },
  { id: "asi", icon: "syringe", title: "Aşı ve Koruyucu Hekimlik", description: "Yavrudan yaşlılığa aşı takvimi, parazit kontrolü ve kişiye özel sağlık planı.", image: "/pexels-photo-6816857.jpg" },
  { id: "kisirlastirma", icon: "heart", title: "Kısırlaştırma", description: "Güvenli anestezi protokolü ve deneyimli cerrahi ekiple kedi ve köpek kısırlaştırma.", image: "/pexels-photo-29296243.jpg" },
  { id: "cerrahi", icon: "scissors", title: "Cerrahi Operasyonlar", description: "Planlı ve acil cerrahi işlemlerde modern ekipman ve titiz takip.", image: "/pexels-photo-14730839.jpg" },
  { id: "laboratuvar", icon: "flask", title: "Laboratuvar ve Tahlil", description: "Kan, idrar ve görüntüleme tetkikleriyle hızlı ve net tanı desteği.", image: "/pexels-photo-37143684.jpg" },
  { id: "acil", icon: "ambulance", title: "Acil Müdahale", description: "7/24 açık kliniğimizde gece ve gündüz acil vakalara hemen müdahale.", image: "/pexels-photo-35864648.jpg" },
  { id: "sokak", icon: "paw", title: "Sokak Hayvanı Tedavisi", description: "Sokakta yaşayan dostlarımıza ücretsiz ilk muayene ve tedavi desteği.", image: "/pexels-photo-12661459.jpg" },
  { id: "sahiplendirme", icon: "handshake", title: "Sahiplendirme Desteği", description: "Tedavisi tamamlanan hayvanlar için yuva arayanlarla buluşma ve takip.", image: "/pexels-photo-9313622.jpg" },
]

export const whyUs = [
  { icon: "stethoscope", title: "Her ihtiyaç için tek adres", description: "Rutin kontrollerden acil müdahaleye, evcil ve sokak hayvanlarına kadar geniş bir hizmet yelpazesi sunuyoruz." },
  { icon: "clock", title: "7/24 açık kapılar", description: "Gece, gündüz, hafta sonu fark etmeksizin acil durumlarda kliniğimiz yanınızda." },
  { icon: "award", title: "Deneyimli ekip", description: "Yıllardır aynı özenle çalışan, alanında uzman veteriner hekimlerle hizmet veriyoruz." },
  { icon: "heart", title: "Eşit özen", description: "Evcil dostunuz da olsa sokakta bulduğunuz bir can da olsa aynı ilgi ve titizlikle bakıyoruz." },
  { icon: "star", title: "Güvenilir değerlendirmeler", description: `Google'da ${clinic.rating.toLocaleString("tr-TR")} puan ve ${clinic.reviewCount} değerlendirme ile hasta ailelerimizin güvenini kazanıyoruz.` },
]

export const stats = [
  { value: "7/24", label: "Kesintisiz hizmet" },
  { value: clinic.rating.toLocaleString("tr-TR"), label: "Google puanı (5 üzerinden)" },
  { value: `${clinic.reviewCount}+`, label: "Güvenen hasta ailesi" },
]

export const team = [
  { id: "ekip-1", image: "/pexels-photo-32788235.jpg", alt: "Veteriner hekim" },
  { id: "ekip-2", image: "/pexels-photo-10559203.jpg", alt: "Veteriner hekim" },
  { id: "ekip-3", image: "/pexels-photo-39550296.jpg", alt: "Veteriner hekim" },
]

export const reviews = [
  { id: "r1", author: "Y. Ü.", meta: "Yerel Rehber · 15 yorum", time: "6 ay önce", text: "İlk kedimi sahiplendiğim günden beri yaklaşık 6 yıldır çocuklarımı bu kliniğe getiriyorum ve çok memnunum. Ahmet Bey harika ve çok ilgili bir doktor, diğer tüm doktorlar da öyle. Çocuklarınızı güvenle emanet edebileceğiniz bir klinik." },
  { id: "r2", author: "Y. T.", meta: "3 yorum · 1 fotoğraf", time: "1 ay önce", text: "Yıllardır evcil hayvanımı emanet edebileceğim tek yer. Başta Ahmet Bey olmak üzere ekibi mükemmel, işinde gerçekten uzman. Bu ekiple tanıştığımız için çok mutluyuz." },
  { id: "r3", author: "D. K.", meta: "1 yorum", time: "1 ay önce", text: "Evcil ve sokak hayvanı ayrımı yapmadan gelen tüm hayvanlara aynı özeni gösteriyorlar. Bizi doğru yönlendirdiler, yaşadığımız sorunları kısa sürede çözmemizi sağladılar." },
]

export const blogPosts = [
  { id: "asi-takvimi", category: "Koruyucu Hekimlik", title: "Yavru kedi ve köpeklerde ilk aşı takvimi", excerpt: "Yavrunuzu eve aldığınız ilk haftadan itibaren hangi aşıların, hangi aralıklarla yapılması gerektiğini özetledik.", body: "Yavrular ilk haftalardan itibaren annelerinden aldıkları bağışıklıkla korunur. Bu koruma azaldıkça aşı takvimi devreye girer. Kliniğimizde her yavruya kendi gelişimine göre hazırlanmış bir plan çıkarıyoruz.", image: "/pexels-photo-6207406.jpg", imageAlt: "Battaniyede uyuyan tatlı bir yavru köpek", readTime: "4 dk okuma" },
  { id: "yaz-onlemleri", category: "Sağlık", title: "Yaz aylarında evcil dostlarınızı sıcaktan koruyun", excerpt: "Sıcak çarpması belirtileri ve yaz boyunca dostlarınızın serinliğini korumak için pratik öneriler.", body: "Bol ve temiz su, gölgeli dinlenme alanları ve sıcak saatlerde kısa gezintiler yaz için temel kurallardır. Halsizlik, aşırı soluma ya da kusma gibi belirtilerde vakit kaybetmeden kliniğimize ulaşmanızı öneririz.", image: "/pexels-photo-8379115.jpg", imageAlt: "Battaniyenin üzerinde yatan minik bir kedi yavrusu", readTime: "3 dk okuma" },
  { id: "kisirlastirma-gercekler", category: "Bilgi", title: "Kısırlaştırma hakkında bilmeniz gerekenler", excerpt: "Sık sorulan soruları ve kısırlaştırmanın sağlığa ve davranışa etkilerini sade bir dille anlattık.", body: "Kısırlaştırma, doğru yaşta ve güvenli anestezi ile yapıldığında hayvanın sağlığını destekler. Ameliyat sonrası bakım ve dinlenme dönemi de iyileşme için önemlidir. Tüm sorularınız için muayene randevusu alabilirsiniz.", image: "/pexels-photo-16299047.jpg", imageAlt: "Güneşli zeminde birbirine sarılan iki yavru köpek", readTime: "5 dk okuma" },
  { id: "kedi-beslenme", category: "Beslenme", title: "Kedinizin günlük su ve mama dengesi", excerpt: "Kedilerin az su içme eğilimi, idrar yolu sağlığını etkileyebilir. Dengeli beslenme için pratik ipuçları.", body: "Kediler doğal olarak az su içer, bu yüzden su kaplarını birkaç farklı noktaya koymak yardımcı olur. Mama seçiminde yaşa ve aktivite düzeyine göre hazırlanmış ürünleri tercih edin.", image: "/pexels-photo-39705290.jpg", imageAlt: "Oyuncak topla oynayan genç bir tekir kedi", readTime: "4 dk okuma" },
  { id: "ilk-muayene", category: "Rehber", title: "Kliniğe ilk ziyarette neler beklemelisiniz?", excerpt: "Ilk muayene öncesi hazırlık, getirmeniz gereken belgeler ve sürecin nasıl ilerlediği hakkında kısa bilgiler.", body: "Evcil dostunuzun varsa aşı kartını ve önceki tedavi kayıtlarını yanınıza alın. Muayene sırasında hekimimiz sizi bilgilendirir ve size uygun bakım planını birlikte belirler.", image: "/pexels-photo-39550277.jpg", imageAlt: "Veteriner muayenesinde turuncu bir kedi", readTime: "4 dk okuma" },
  { id: "kis-bakimi", category: "Bakım", title: "Kış aylarında köpekler için sıcak tutma rehberi", excerpt: "Soğuk havalarda tüy bakımı, yürüyüş süreleri ve sıcak barınak için temel öneriler.", body: "Kısa tüylü ve yaşlı köpekler soğuğa daha duyarlıdır. Yürüyüşleri kısaltın, ıslak tüyleri hemen kurulayın ve yatak alanını hava akımından uzak tutun.", image: "/pexels-photo-9313633.jpg", imageAlt: "Sokakta iki yavru köpekle oynayan bir kadın", readTime: "3 dk okuma" },
]
