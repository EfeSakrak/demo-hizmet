import React from 'react';
import { Phone, MapPin, MessageCircle, Star, Clock, CheckCircle2, Wrench } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Detaylı İç & Dış Yıkama',
    description: 'Buharlı koltuk temizliği, anti-bakteriyel ozon dezenfeksiyonu ve cilalı dış yıkama.',
    price: '750 TL',
    duration: '90 Dk'
  },
  {
    id: 2,
    title: 'Pasta Cila & Boya Koruma',
    description: 'Kılcal çizik giderme, 3 aşamalı polisaj işlemi ve 1 yıl etkili boya koruma uygulaması.',
    price: '3.500 TL',
    duration: '1 Gün'
  },
  {
    id: 3,
    title: 'Seramik Kaplama Paket',
    description: '9H sertlikte seramik kaplama, hidrofobik su itici cam kaplama ve jant koruma.',
    price: '7.500 TL',
    duration: '2 Gün'
  }
];

const REVIEWS = [
  {
    id: 1,
    author: 'Ahmet Y.',
    rating: 5,
    comment: 'Aracımı ilk günkü temizliğinde teslim aldım. Pasta cila işçiliği gerçekten mükemmel.'
  },
  {
    id: 2,
    author: 'Mehmet K.',
    rating: 5,
    comment: 'Randevu saatine tam uyuluyor, bekleme derdi yok. Esnaflıkları ve güler yüzleri harika.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 font-sans">
      {/* Hero Header */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1000&auto=format&fit=crop&q=60')` }}>
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> Açık (08:30 - 19:00)
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Prestij Oto Detay</h1>
          <p className="text-slate-300 text-sm mt-1">Profesyonel Araç Bakım & Seramik Kaplama</p>
          
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400" /> 4.9 (180+ Google Yorumu)
            </span>
            <span>•</span>
            <span>İzmir</span>
          </div>
        </div>
      </div>

      {/* İletişim Butonları */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-slate-900 border-b border-slate-800 text-xs">
        <a href="tel:05555555555" className="flex flex-col items-center justify-center p-2.5 bg-slate-800 rounded-lg text-slate-200 active:scale-95 transition">
          <Phone className="w-4 h-4 mb-1 text-emerald-400" />
          Hemen Ara
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2.5 bg-slate-800 rounded-lg text-slate-200 active:scale-95 transition">
          <MapPin className="w-4 h-4 mb-1 text-amber-400" />
          Yol Tarifi
        </a>
        <a href="https://wa.me/905555555555" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2.5 bg-slate-800 rounded-lg text-slate-200 active:scale-95 transition">
          <MessageCircle className="w-4 h-4 mb-1 text-green-400" />
          Randevu Al
        </a>
      </div>

      {/* Hizmetler ve Fiyat Listesi */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Wrench className="w-5 h-5 text-amber-400" /> Hizmetlerimiz & Paketler
        </h2>

        {SERVICES.map((item) => (
          <div key={item.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-slate-100 text-base">{item.title}</h3>
              <span className="font-bold text-amber-400 text-base">{item.price}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Garanti Kapsamında
              </span>
              <span>•</span>
              <span>Tahmini Süre: {item.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Müşteri Yorumları */}
      <div className="p-4 max-w-2xl mx-auto space-y-3 border-t border-slate-900 mt-4">
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Müşteri Değerlendirmeleri</h2>
        {REVIEWS.map((rev) => (
          <div key={rev.id} className="p-3 bg-slate-900/60 border border-slate-800/60 rounded-lg text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-200">{rev.author}</span>
              <div className="flex text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-slate-400 italic">"{rev.comment}"</p>
          </div>
        ))}
      </div>

      {/* Mobil Alt Sabit Aksiyon Çubuğu */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-3 flex gap-3 z-50 max-w-md mx-auto">
        <a href="tel:05555555555" className="flex-1 bg-amber-500 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95 transition">
          <Phone className="w-4 h-4" /> Randevu İçin Ara
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-slate-800 text-slate-200 p-3 rounded-xl flex items-center justify-center active:scale-95 transition">
          <MapPin className="w-4 h-4 text-amber-400" />
        </a>
      </div>
    </div>
  );
}