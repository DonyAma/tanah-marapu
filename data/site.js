// ============================================================
// SUMBER DATA SEMENTARA (file lokal)
// Nanti diganti query Supabase tanpa mengubah komponen halaman.
// ============================================================

export const destinasi = [
  {
    slug: "bukit-tanarara",
    nama: "Bukit Tanarara",
    wilayah: "Sumba Timur",
    kategori: "Bukit & Sabana",
    badge: "baru", // baru | klasik
    gradien: "from-[#f0c878] to-[#9a3b2e]",
    ringkas:
      "\u201cBukit pelangi\u201d \u2014 perbukitan berlapis gradasi merah-hijau-emas, favorit fotografer saat sunrise.",
    deskripsi:
      "Dijuluki bukit pelangi karena perbukitannya berlapis-lapis dengan gradasi warna tanah \u2014 merah bata, hijau lumut, hingga emas \u2014 yang berubah mengikuti musim dan cahaya.",
    rute:
      "\u00b11 jam berkendara dari Waingapu. Jalan sebagian besar aspal, sisanya jalan tanah. Berangkat 04.30 untuk sunrise.",
    tips:
      "Bawa air minum sendiri (belum ada warung), alas kaki tertutup, dan hormati lahan gembala warga.",
    fakta: {
      tiket: "\u00b1 Rp10.000",
      jarak: "\u00b11 jam dari Waingapu",
      waktuTerbaik: "Sunrise (04.30)",
      durasi: "1\u20132 jam",
      sinyal: "Terbatas",
    },
    maps: "https://www.google.com/maps?q=Bukit+Tanarara+Sumba&output=embed",
    faq: [
      {
        q: "Kapan waktu terbaik ke Bukit Tanarara?",
        a: "Sunrise (sekitar 04.30\u201306.00) atau sore menjelang sunset \u2014 gradasi warna bukitnya paling dramatis saat cahaya miring.",
      },
      {
        q: "Apakah bisa naik mobil sampai atas?",
        a: "Mobil dan motor bisa mendekat, lalu jalan kaki ringan beberapa menit ke titik pandang.",
      },
    ],
    terdekat: ["pantai-walakiri", "air-terjun-waimarang"],
  },
  {
    slug: "pantai-walakiri",
    foto: "/destinasi/pantai-walakiri.jpg",
    nama: "Pantai Walakiri",
    wilayah: "Sumba Timur",
    kategori: "Pantai",
    badge: "klasik",
    gradien: "from-[#e8b56a] to-[#8c6a3a]",
    ringkas:
      "Mangrove \u201cmenari\u201d saat surut dengan latar sunset jingga \u2014 ikon visual Sumba.",
    deskripsi:
      "Pantai landai dengan pohon-pohon mangrove kecil yang siluetnya tampak menari saat air surut menjelang matahari terbenam \u2014 spot foto paling ikonik di Sumba.",
    rute: "\u00b130\u201340 menit dari Waingapu, akses mudah, jalan aspal.",
    tips: "Datang 1 jam sebelum sunset saat air mulai surut. Bawa sandal \u2014 berjalan di air dangkal.",
    fakta: {
      tiket: "Sukarela/parkir",
      jarak: "\u00b135 menit dari Waingapu",
      waktuTerbaik: "Sunset (17.00)",
      durasi: "1\u20132 jam",
      sinyal: "Cukup baik",
    },
    maps: "https://www.google.com/maps?q=Pantai+Walakiri&output=embed",
    faq: [
      {
        q: "Kenapa disebut mangrove menari?",
        a: "Bentuk pohon mangrove kerdilnya meliuk seperti menari, dan siluetnya dramatis berlatar sunset saat air surut.",
      },
    ],
    terdekat: ["bukit-tanarara", "air-terjun-waimarang"],
  },
  {
    slug: "air-terjun-waimarang",
    nama: "Air Terjun Waimarang",
    wilayah: "Sumba Timur",
    kategori: "Air Terjun",
    badge: "baru",
    gradien: "from-[#9fd0c8] to-[#3a7068]",
    ringkas:
      "Kolam alami toska tersembunyi di lembah batu. Trekking \u00b130 menit, terbayar lunas.",
    deskripsi:
      "Air terjun pendek dengan kolam alami berwarna toska jernih, dikelilingi dinding batu \u2014 cocok untuk berenang dan melompat dari tebing rendah.",
    rute:
      "\u00b11,5\u20132 jam dari Waingapu, dilanjutkan trekking menurun \u00b130 menit menyusuri jalur tanah dan sungai kecil.",
    tips: "Pakai sepatu/sandal gunung, bawa baju ganti dan dry bag. Sewa guide lokal di desa terakhir.",
    fakta: {
      tiket: "\u00b1 Rp20.000 + guide",
      jarak: "\u00b11,5\u20132 jam dari Waingapu",
      waktuTerbaik: "Pagi\u2013siang",
      durasi: "3\u20134 jam (incl. trek)",
      sinyal: "Tidak ada",
    },
    maps: "https://www.google.com/maps?q=Air+Terjun+Waimarang&output=embed",
    faq: [
      {
        q: "Apakah aman untuk berenang?",
        a: "Ya, kolamnya relatif tenang, tapi tetap waspada kedalaman dan ikuti arahan guide lokal.",
      },
    ],
    terdekat: ["bukit-tanarara", "pantai-walakiri"],
  },
  {
    slug: "laguna-weekuri",
    nama: "Laguna Weekuri",
    wilayah: "Sumba Barat Daya",
    kategori: "Laguna",
    badge: "klasik",
    gradien: "from-[#8fb6d8] to-[#3a5a7a]",
    ringkas:
      "Danau air asin sebening kaca, rembesan laut lewat karang. Bisa berenang.",
    deskripsi:
      "Laguna air asin yang terbentuk dari rembesan air laut melalui celah karang \u2014 airnya tenang, jernih, dan aman untuk berenang.",
    rute: "\u00b11\u20131,5 jam dari Tambolaka, jalan sudah cukup baik.",
    tips: "Datang pagi saat sepi dan air paling jernih. Ada penyewaan ban dan pelampung.",
    fakta: {
      tiket: "\u00b1 Rp10.000\u201320.000",
      jarak: "\u00b11,5 jam dari Tambolaka",
      waktuTerbaik: "Pagi",
      durasi: "2\u20133 jam",
      sinyal: "Terbatas",
    },
    maps: "https://www.google.com/maps?q=Danau+Weekuri&output=embed",
    faq: [
      {
        q: "Apakah airnya asin?",
        a: "Ya \u2014 ini laguna air asin dari rembesan laut, jadi terasa seperti berenang di laut yang sangat tenang.",
      },
    ],
    terdekat: ["kampung-ratenggaro"],
  },
  {
    slug: "kampung-ratenggaro",
    foto: "/destinasi/kampung-ratenggaro.jpg",
    nama: "Kampung Ratenggaro",
    wilayah: "Sumba Barat Daya",
    kategori: "Kampung Adat",
    badge: "klasik",
    gradien: "from-[#8fa3cf] to-[#1d2440]",
    ringkas: "Rumah menara setinggi 15 m dan kubur megalitik di tepi laut.",
    deskripsi:
      "Kampung adat dengan rumah menara (uma kelada) hingga 15 meter dan kubur batu megalitik, menghadap langsung ke laut \u2014 masih dihuni dan menjalankan adat Marapu.",
    rute: "\u00b11 jam dari Tambolaka ke arah selatan.",
    tips:
      "Minta izin dan berdonasi sebelum memotret warga. Sewa kain tenun lokal untuk foto \u2014 mendukung ekonomi kampung.",
    fakta: {
      tiket: "Donasi \u00b1 Rp20.000\u201350.000",
      jarak: "\u00b11 jam dari Tambolaka",
      waktuTerbaik: "Sore",
      durasi: "1\u20132 jam",
      sinyal: "Terbatas",
    },
    maps: "https://www.google.com/maps?q=Kampung+Adat+Ratenggaro&output=embed",
    faq: [
      {
        q: "Apakah kampungnya masih dihuni?",
        a: "Ya, Ratenggaro adalah kampung hidup \u2014 hormati privasi dan adat warga selama berkunjung.",
      },
    ],
    terdekat: ["laguna-weekuri"],
  },
  {
    slug: "bukit-wairinding",
    foto: "/destinasi/bukit-wairinding.jpg",
    nama: "Bukit Wairinding",
    wilayah: "Sumba Timur",
    kategori: "Bukit & Sabana",
    badge: "klasik",
    gradien: "from-[#b7c49a] to-[#5c6b4a]",
    ringkas:
      "Sabana berbukit tanpa batas: hijau saat musim hujan, keemasan saat kemarau.",
    deskripsi:
      "Hamparan perbukitan sabana yang seperti tak berujung \u2014 hijau segar di musim hujan dan berubah keemasan dramatis di musim kemarau. Anak-anak lokal sering bermain di sini dan ramah diajak berfoto.",
    rute: "\u00b130\u201345 menit dari Waingapu, akses mudah, kendaraan bisa parkir dekat titik pandang.",
    tips:
      "Datang pagi atau sore untuk cahaya terbaik. Beri tip sukarela kalau berfoto bersama anak-anak lokal.",
    fakta: {
      tiket: "\u00b1 Rp10.000\u201320.000",
      jarak: "\u00b140 menit dari Waingapu",
      waktuTerbaik: "Pagi / sore",
      durasi: "1\u20132 jam",
      sinyal: "Cukup baik",
    },
    maps: "https://www.google.com/maps?q=Bukit+Wairinding&output=embed",
    faq: [
      {
        q: "Musim apa yang paling bagus?",
        a: "Dua-duanya punya pesona: musim hujan (Des\u2013Mar) bukitnya hijau, kemarau (Jun\u2013Okt) keemasan khas Sumba.",
      },
    ],
    terdekat: ["bukit-tanarara", "pantai-walakiri"],
  },
  {
    slug: "air-terjun-tanggedu",
    nama: "Air Terjun Tanggedu",
    wilayah: "Sumba Timur",
    kategori: "Air Terjun",
    badge: "klasik",
    gradien: "from-[#9fd0c8] to-[#3a7068]",
    ringkas:
      "\u201cGrand Canyon Sumba\u201d \u2014 ngarai batu dengan kolam biru berlapis.",
    deskripsi:
      "Air terjun di tengah ngarai bebatuan unik berbentuk lempengan \u2014 dijuluki Grand Canyon-nya Sumba. Airnya jernih kebiruan dengan kolam-kolam alami berundak.",
    rute:
      "\u00b12 jam dari Waingapu melewati perbukitan sabana, lalu trekking \u00b130\u201345 menit. Jalur turun ke sungai cukup terjal \u2014 hati-hati.",
    tips:
      "Pakai sepatu dengan grip baik, bawa air minum, dan sebaiknya ditemani guide lokal dari desa terakhir.",
    fakta: {
      tiket: "\u00b1 Rp20.000 + guide",
      jarak: "\u00b12 jam dari Waingapu",
      waktuTerbaik: "Pagi",
      durasi: "4\u20135 jam (incl. trek)",
      sinyal: "Tidak ada",
    },
    maps: "https://www.google.com/maps?q=Air+Terjun+Tanggedu&output=embed",
    faq: [
      {
        q: "Apakah jalurnya berat?",
        a: "Sedang \u2014 trekking 30\u201345 menit dengan turunan terjal di akhir. Anak-anak dan lansia perlu pendampingan ekstra.",
      },
    ],
    terdekat: ["bukit-wairinding", "puru-kambera"],
  },
  {
    slug: "air-terjun-lapopu",
    nama: "Air Terjun Lapopu",
    wilayah: "Sumba Barat",
    kategori: "Air Terjun",
    badge: "klasik",
    gradien: "from-[#b7c49a] to-[#3f4f37]",
    ringkas:
      "90 meter bertingkat di TN Manupeu Tanah Daru \u2014 lokasi syuting \u201cPendekar Tongkat Emas\u201d.",
    deskripsi:
      "Salah satu air terjun tertinggi di Sumba (\u00b190 meter) dengan formasi bertingkat seperti tangga alam, berada di dalam Taman Nasional Manupeu Tanah Daru. Pernah menjadi lokasi syuting film Pendekar Tongkat Emas.",
    rute:
      "\u00b11 jam dari Waikabubak ke Desa Lapopu, Wanokaka, lalu jalan kaki ringan menyusuri jalur taman nasional.",
    tips:
      "Kunjungi saat kemarau agar debit air tidak terlalu deras dan kolamnya aman. Bayar tiket taman nasional di pos masuk.",
    fakta: {
      tiket: "\u00b1 Rp20.000\u201330.000",
      jarak: "\u00b11 jam dari Waikabubak",
      waktuTerbaik: "Kemarau (Jun\u2013Okt)",
      durasi: "2\u20133 jam",
      sinyal: "Terbatas",
    },
    maps: "https://www.google.com/maps?q=Air+Terjun+Lapopu&output=embed",
    faq: [
      {
        q: "Kenapa harus datang saat kemarau?",
        a: "Saat hujan debit airnya sangat deras sehingga berbahaya untuk mendekat atau berenang.",
      },
    ],
    terdekat: ["kampung-praijing"],
  },
  {
    slug: "kampung-praijing",
    nama: "Kampung Praijing",
    wilayah: "Sumba Barat",
    kategori: "Kampung Adat",
    badge: "klasik",
    gradien: "from-[#8fa3cf] to-[#1d2440]",
    ringkas:
      "Kampung adat di atas bukit dengan deretan rumah menara dan pemandangan lembah.",
    deskripsi:
      "Kampung adat di puncak bukit dekat Waikabubak dengan puluhan rumah menara tertata rapi dan panorama lembah hijau \u2014 salah satu kampung adat paling mudah diakses di Sumba.",
    rute: "\u00b115 menit dari pusat Waikabubak, jalan aspal sampai dekat kampung.",
    tips:
      "Isi buku tamu dan beri donasi. Warga menjual tenun dan kerajinan \u2014 membeli langsung sangat membantu ekonomi kampung.",
    fakta: {
      tiket: "Donasi sukarela",
      jarak: "\u00b115 menit dari Waikabubak",
      waktuTerbaik: "Pagi / sore",
      durasi: "1 jam",
      sinyal: "Baik",
    },
    maps: "https://www.google.com/maps?q=Kampung+Adat+Praijing&output=embed",
    faq: [
      {
        q: "Apa bedanya dengan Ratenggaro?",
        a: "Praijing di atas bukit dekat kota (akses mudah), Ratenggaro di tepi laut dengan rumah menara lebih tinggi dan kubur megalitik besar.",
      },
    ],
    terdekat: ["air-terjun-lapopu"],
  },
  {
    slug: "puru-kambera",
    nama: "Sabana Puru Kambera",
    wilayah: "Sumba Timur",
    kategori: "Sabana & Pantai",
    badge: "klasik",
    gradien: "from-[#e8b56a] to-[#8c6a3a]",
    ringkas:
      "Sabana luas tepi pantai tempat kuda-kuda Sumba merumput bebas.",
    deskripsi:
      "Padang sabana luas di tepi laut dengan pohon-pohon cemara dan kuda-kuda Sumba yang merumput bebas \u2014 lanskap yang sering disebut \u201cAfrika kecil\u201d di Indonesia.",
    rute: "\u00b145 menit dari Waingapu ke arah utara, jalan aspal mulus di tepi pantai.",
    tips:
      "Jangan terlalu dekat dengan kuda liar. Golden hour sore adalah waktu foto terbaik.",
    fakta: {
      tiket: "Gratis / parkir",
      jarak: "\u00b145 menit dari Waingapu",
      waktuTerbaik: "Sore",
      durasi: "1\u20132 jam",
      sinyal: "Cukup baik",
    },
    maps: "https://www.google.com/maps?q=Savana+Puru+Kambera&output=embed",
    faq: [
      {
        q: "Apakah kudanya jinak?",
        a: "Kuda di sini semi-liar milik warga \u2014 amati dari jarak aman dan jangan memberi makan.",
      },
    ],
    terdekat: ["pantai-walakiri", "air-terjun-tanggedu"],
  },
  {
    slug: "bukit-lendongara",
    nama: "Bukit Lendongara & Mondu",
    wilayah: "Sumba Barat Daya",
    kategori: "Bukit & Sabana",
    badge: "baru",
    gradien: "from-[#c9a3d8] to-[#6b4a7a]",
    ringkas:
      "Spot sunset baru yang mulai viral \u2014 sabana lembut menghadap laut.",
    deskripsi:
      "Duo bukit sabana di Barat Daya yang sedang naik daun sebagai spot sunset \u2014 perbukitan lembut berlapis menghadap laut, masih sepi dan tiketnya sangat murah.",
    rute: "\u00b130\u201345 menit dari Tambolaka, sebagian jalan masih tanah \u2014 motor lebih leluasa.",
    tips: "Datang 1 jam sebelum sunset. Bawa tikar dan camilan \u2014 belum banyak warung.",
    fakta: {
      tiket: "\u00b1 Rp5.000\u201310.000",
      jarak: "\u00b140 menit dari Tambolaka",
      waktuTerbaik: "Sunset",
      durasi: "1\u20132 jam",
      sinyal: "Terbatas",
    },
    maps: "https://www.google.com/maps?q=Bukit+Lendongara+Sumba&output=embed",
    faq: [
      {
        q: "Lebih bagus Lendongara atau Mondu?",
        a: "Keduanya berdekatan dan mirip \u2014 kalau waktumu cukup, kunjungi keduanya dalam satu sore.",
      },
    ],
    terdekat: ["laguna-weekuri", "kampung-ratenggaro"],
  },
  {
    slug: "pantai-mandorak",
    nama: "Pantai Mandorak",
    wilayah: "Sumba Barat Daya",
    kategori: "Pantai",
    badge: "klasik",
    gradien: "from-[#8fb6d8] to-[#3a5a7a]",
    ringkas:
      "Pantai mungil diapit dua tebing karang \u2014 tetangga sebelah Laguna Weekuri.",
    deskripsi:
      "Pantai kecil berpasir putih yang diapit dua tebing karang dengan celah sempit menghadap laut lepas \u2014 ombaknya kuat, lebih cocok untuk menikmati pemandangan daripada berenang.",
    rute: "\u00b15 menit dari Laguna Weekuri \u2014 selalu dikunjungi sepaket.",
    tips: "Gabungkan dengan Weekuri pagi hari. Hati-hati di celah karang saat ombak besar.",
    fakta: {
      tiket: "\u00b1 Rp10.000",
      jarak: "\u00b11,5 jam dari Tambolaka",
      waktuTerbaik: "Pagi",
      durasi: "30\u201360 menit",
      sinyal: "Terbatas",
    },
    maps: "https://www.google.com/maps?q=Pantai+Mandorak&output=embed",
    faq: [
      {
        q: "Bisa berenang di sini?",
        a: "Tidak disarankan \u2014 ombak dan arusnya kuat. Untuk berenang, Laguna Weekuri di sebelahnya jauh lebih aman.",
      },
    ],
    terdekat: ["laguna-weekuri", "kampung-ratenggaro"],
  },
];

export const artikel = [
  {
    slug: "itinerary-sumba-5-hari",
    judul: "Itinerary Sumba 5 Hari: Barat ke Timur Tanpa Buru-buru",
    kategori: "Itinerary",
    tanggal: "12 Juni 2026",
    baca: "8 menit",
    lede: "Masuk lewat Tambolaka, keluar lewat Waingapu \u2014 rute paling efisien menjelajah dua dunia Sumba dalam satu perjalanan.",
    isi: [
      {
        h: "Hari 1\u20132: Sumba Barat Daya",
        p: "Mendarat di Tambolaka sebelum siang, langsung menuju Kampung Ratenggaro \u2014 rumah menara 15 meter dan kubur megalitik di tepi laut. Sore tutup hari di Pantai Mandorak. Hari kedua: Laguna Weekuri pagi-pagi saat air paling jernih, lanjut sunset di Bukit Lendongara.",
      },
      {
        h: "Hari 3: Lintas tengah",
        p: "Perjalanan panjang \u00b15\u20136 jam ke arah timur. Mampir Air Terjun Lapopu di TN Manupeu Tanah Daru \u2014 90 meter bertingkat, lokasi syuting film Pendekar Tongkat Emas. Bermalam di Waingapu.",
      },
      {
        h: "Hari 4\u20135: Sumba Timur",
        p: "Sunrise di Bukit Tanarara, siang trekking ke kolam toska Waimarang, sore sunset mangrove Walakiri. Hari terakhir: sabana Puru Kambera dan Bukit Wairinding sebelum terbang dari Waingapu.",
      },
      {
        h: "Estimasi total biaya",
        p: "Untuk 2 orang: sewa mobil+sopir 5 hari \u00b1Rp3,75 juta, penginapan \u00b1Rp1,5 juta, makan & tiket \u00b1Rp1 juta. Total \u00b1Rp6,25 juta di luar pesawat \u2014 lebih hemat dari paket open trip jika berangkat berdua atau lebih.",
      },
    ],
    faq: [
      {
        q: "Apakah 5 hari cukup untuk keliling Sumba?",
        a: "Cukup untuk destinasi utama barat + timur dengan ritme santai. Kalau mau menyeluruh, idealnya 7\u201310 hari.",
      },
      {
        q: "Lebih baik open trip atau sewa mobil sendiri?",
        a: "Berdua atau lebih, sewa mobil + sopir biasanya lebih hemat dan fleksibel. Solo traveler lebih cocok open trip.",
      },
    ],
  },
];

export const direktori = [
  {
    nama: "Homestay Mama Rambu",
    tipe: "Homestay",
    lokasi: "Waingapu \u00b7 Sumba Timur",
    desc: "4 kamar AC, sarapan khas Sumba, 10 menit dari bandara. Mama Rambu juga penenun ikat.",
    harga: "Rp250rb",
    satuan: "/malam",
    premium: true,
    gradien: "from-[#e8b56a] to-[#8c6a3a]",
    wa: "6281319634257",
  },
  {
    nama: "Umbu Driver & Guide",
    tipe: "Guide",
    lokasi: "Lintas Sumba",
    desc: "Sopir + guide berpengalaman 8 tahun, hafal semua spot foto. Mobil Innova AC.",
    harga: "Rp800rb",
    satuan: "/hari (incl. BBM)",
    premium: true,
    gradien: "from-[#9fd0c8] to-[#3a7068]",
    wa: "6281319634257",
  },
  {
    nama: "Tarimbang Surf House",
    tipe: "Homestay",
    lokasi: "Tarimbang \u00b7 Sumba Timur",
    desc: "Bungalow tepi pantai untuk peselancar & pencari sunyi.",
    harga: "Rp350rb",
    satuan: "/malam",
    premium: false,
    gradien: "from-[#8fa3cf] to-[#1d2440]",
    wa: "6281319634257",
  },
  {
    nama: "Rental Motor Tambolaka",
    tipe: "Rental Motor",
    lokasi: "Tambolaka \u00b7 Barat Daya",
    desc: "Matic & trail, helm 2, antar-jemput bandara gratis.",
    harga: "Rp100rb",
    satuan: "/hari",
    premium: false,
    gradien: "from-[#f0c878] to-[#9a3b2e]",
    wa: "6281319634257",
  },
];
