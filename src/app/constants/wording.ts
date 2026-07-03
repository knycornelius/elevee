export type Lang = "EN" | "ID";

export const WORDINGS = {
  EN: {
    nav: {
      story: "Story",
      location: "Location",
      residences: "Residences",
      amenities: "Amenities",
      gallery: "Gallery",
      cta: "Schedule a Visit",
    },
    hero: {
      location: "Alam Sutera · Tangerang",
      headline1: "Elevated Living,",
      headline2: "Rooted in Nature.",
      sub: "Premium homes in the heart of Alam Sutera, wrapped around a 4-hectare Central Forest. An impressive way of living, designed to be felt and not just seen.",
      cta1: "Schedule a Visit",
      cta2: "View Residences",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "The Meaning Behind Elevee",
      headline1: "A name rooted in",
      headline2: "elevation.",
      body: "Elevée, from the French for ‘elevated,’ is home to two residence collections, each carrying a meaning of its own. Together they represent a residence designed not just to be seen, but to be lived in fully: spacious, naturally lit, and connected to green space rarely found this close to the city center.",
      vivre_fr: "VIVRE",
      vivre_en: "to live",
      vivre_desc:
        "Generous floor plans built around family life, with dedicated space for study, gathering, and stillness.",
      lumiere_fr: "LUMIÈRE",
      lumiere_en: "light",
      lumiere_desc:
        "Efficient, precisely planned residences where every window is positioned to carry the forest light indoors.",
    },
    location: {
      eyebrow: "Connectivity",
      headline1: "At the Center",
      headline2: "of Everything.",
      body: "Positioned on Jalur Sutera Barat, Elevee places you minutes from the airport, an upcoming MRT line, and the Jakarta Tangerang toll, with the daily needs of a full lifestyle district already on your doorstep.",
      stats: [
        {
          value: "1 min",
          label: "Jakarta Tangerang Toll Gate",
        },
        {
          value: "2 min",
          label: "Transjakarta Bus Stop",
        },
        {
          value: "5 min",
          label: "Upcoming MRT Station",
        },
        {
          value: "15 min",
          label: "Soekarno-Hatta International Airport",
        },
      ],
      districtEyebrow: "Lifestyle District",
      districtHeadline: "Everything you need is already here.",
      groups: [
        {
          category: "Shopping & Leisure",
          items: [
            "Jakarta Premium Outlets",
            "Decathlon",
            "Pasar 8 Alam Sutera",
            "Flavor Bliss",
            "IKEA",
            "Mall @ Alam Sutera",
            "The Broadway",
            "Living World Alam Sutera",
          ],
        },
        {
          category: "Education",
          items: [
            "BINUS University",
            "Bunda Mulia University",
            "Swiss German University",
            "St. Laurensia School",
          ],
        },
        {
          category: "Healthcare",
          items: ["EMC Hospital"],
        },
      ],
      address:
        "Jl. Jalur Sutera Barat No. Kav. 8, Alam Sutera,\nTangerang, Banten, Indonesia",
    },
    forest: {
      eyebrow: "The Signature Differentiator",
      headline1: "4 Hectares of Forest,",
      headline2: "right outside your window.",
      body: "Few residences in any city can offer this: a private urban forest as your front yard. The Central Forest is a living, breathing presence between you and the city, designed for morning walks, quiet evenings, and cleaner air every day.",
      captions: [
        "Forest trails begin at ground level",
        "A living presence between you and the city",
        "Every outlook is a forest view",
      ],
    },
    residences: {
      eyebrow: "Residence Collections",
      headline1: "Two collections.",
      headline2: "One address.",
      tab_vivre: "VIVRE",
      tab_lumiere: "LUMIÈRE",
      vivre_sub: "To live. Space and flexibility for family life.",
      lumiere_sub: "Light. Efficient, luminous, and modern.",
      table_headers: ["Type", "Size", "Bed / Bath", "Study"],
      note: "Every residence includes a dedicated study, built for the way people actually live and work today. Floor-to-ceiling glazing in living areas ensures the forest is always part of the view.",
      floor_vivre: "Vivre Floorplan",
      cta_vivre: "Enquire About Vivre",
      floor_lumiere: "Lumière Floorplan",
      cta_lumiere: "Enquire About Lumière",
    },
    amenities: {
      eyebrow: "Facilities",
      headline1: "A resort’s worth",
      headline2: "of facilities, every day.",
      body: "From sunrise laps to sunset lounges, Elevee’s amenities are built for a life that never requires leaving home to feel like a getaway. Over 40 facilities across four categories.",
      captions: ["Infinity pool · Palm terrace", "Grand lobby · Smart access"],
      groups: [
        {
          icon: "Waves",
          label: "Wellness & Recreation",
          items: [
            "Lap pool",
            "Infinity pool",
            "Indoor gym",
            "Meditation alcoves",
            "Pedestrian & cycling tracks",
          ],
        },
        {
          icon: "Users",
          label: "Family & Social",
          items: [
            "Kids’ play areas",
            "Co-working space",
            "Rooftop lounge",
            "BBQ deck",
            "Forest café",
          ],
        },
        {
          icon: "Shield",
          label: "Convenience & Security",
          items: [
            "Smart home system",
            "Touchless entry",
            "24/7 CCTV & command center",
            "EV charging",
            "High-speed internet",
          ],
        },
        {
          icon: "Leaf",
          label: "Green Living",
          items: [
            "4 Ha Central Forest",
            "Shaded pedestrian paths",
            "Urban garden plots",
            "Natural ventilation design",
            "Water-efficient landscaping",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      headline: "See it as it is.",
      alts: [
        "Central Forest canopy viewed from the promenade",
        "Vivre residence with floor-to-ceiling windows framing the forest",
        "Palm-lined infinity pool at sunset",
        "Lumière residence living area bathed in natural light",
        "Grand lobby with warm wood accents",
        "Vivre 3 open-plan living space",
      ],
    },
    stats: [
      { value: "4 Ha", label: "Central Forest" },
      { value: "15 min", label: "To the Airport" },
      { value: "40+", label: "Facilities" },
    ],
    contact: {
      eyebrow: "Visit Elevee Residences",
      headline1: "Begin your",
      headline2: "elevated life.",
      body: "Our sales team is available to walk you through both collections, arrange a private site visit, and help you find a residence matched to how you live.",
      addressLabel: "Address",
      address:
        "Jl. Jalur Sutera Barat No. Kav. 8\nAlam Sutera, Tangerang, Banten",
      hoursLabel: "Sales Gallery Hours",
      hours: "Daily · 08:30 – 18:00 WIB",
      callUs: "Call Us",
      whatsapp: "WhatsApp",
      formHeadline: "Enquiry Form",
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+62 8xx xxxx xxxx",
      collectionLabel: "Preferred Collection",
      collectionPlaceholder: "Select a collection",
      collectionVivre: "VIVRE · 138 to 156 sqm",
      collectionLumiere: "LUMIÈRE · 87.8 to 111.7 sqm",
      collectionUndecided: "Not decided yet",
      submit: "Send Enquiry",
      privacy:
        "Your details are used only to arrange your visit and will never be shared.",
      successTitle: "Thank you.",
      successBody:
        "Our team will reach out within one business day to arrange your visit.",
    },
    footer: {
      sub: "Residences · Alam Sutera Group",
      credit:
        "Architecture by Broadway Malyan · Jl. Jalur Sutera Barat, Alam Sutera, Tangerang",
    },
  },

  ID: {
    nav: {
      story: "Cerita",
      location: "Lokasi",
      residences: "Hunian",
      amenities: "Fasilitas",
      gallery: "Galeri",
      cta: "Jadwalkan Kunjungan",
    },
    hero: {
      location: "Alam Sutera · Tangerang",
      headline1: "Hidup Lebih Tinggi,",
      headline2: "Berakar pada Alam.",
      sub: "Hunian premium di jantung Alam Sutera, dikelilingi 4 hektare Hutan Sentral. Cara hidup yang mengesankan, dirancang untuk dirasakan dan bukan sekadar dilihat.",
      cta1: "Jadwalkan Kunjungan",
      cta2: "Lihat Hunian",
      scroll: "Scroll",
    },
    story: {
      eyebrow: "Makna di Balik Elevee",
      headline1: "Sebuah nama yang berakar pada",
      headline2: "ketinggian.",
      body: "Elevée, dari bahasa Prancis yang berarti ‘ditinggikan,’ adalah rumah bagi dua koleksi hunian yang masing-masing membawa maknanya sendiri. Bersama-sama, keduanya mewakili hunian yang dirancang bukan sekadar untuk dilihat, melainkan untuk dihayati sepenuhnya: luas, terang alami, dan terhubung dengan ruang hijau yang jarang ditemukan sedekat ini dari pusat kota.",
      vivre_fr: "VIVRE",
      vivre_en: "untuk hidup",
      vivre_desc:
        "Denah lantai luas yang dirancang untuk kehidupan keluarga, dengan ruang khusus untuk belajar, berkumpul, dan beristirahat.",
      lumiere_fr: "LUMIÈRE",
      lumiere_en: "cahaya",
      lumiere_desc:
        "Hunian efisien yang terencana presisi, di mana setiap jendela diposisikan untuk membawa cahaya hutan ke dalam ruangan.",
    },
    location: {
      eyebrow: "Konektivitas",
      headline1: "Di Pusat",
      headline2: "Segalanya.",
      body: "Berlokasi di Jalur Sutera Barat, Elevee menempatkan Anda hanya dalam hitungan menit dari bandara, jalur MRT yang akan segera hadir, dan tol Jakarta Tangerang, dengan kebutuhan gaya hidup sehari-hari yang sudah tersedia di depan pintu Anda.",
      stats: [
        {
          value: "1 mnt",
          label: "Gerbang Tol Jakarta Tangerang",
        },
        {
          value: "2 mnt",
          label: "Halte Transjakarta",
        },
        {
          value: "5 mnt",
          label: "Stasiun MRT yang Akan Datang",
        },
        {
          value: "15 mnt",
          label: "Bandara Internasional Soekarno-Hatta",
        },
      ],
      districtEyebrow: "Kawasan Gaya Hidup",
      districtHeadline: "Semua yang Anda butuhkan sudah ada di sini.",
      groups: [
        {
          category: "Belanja & Hiburan",
          items: [
            "Jakarta Premium Outlets",
            "Decathlon",
            "Pasar 8 Alam Sutera",
            "Flavor Bliss",
            "IKEA",
            "Mall @ Alam Sutera",
            "The Broadway",
            "Living World Alam Sutera",
          ],
        },
        {
          category: "Pendidikan",
          items: [
            "Universitas BINUS",
            "Universitas Bunda Mulia",
            "Swiss German University",
            "St. Laurensia School",
          ],
        },
        {
          category: "Kesehatan",
          items: ["RS EMC"],
        },
      ],
      address:
        "Jl. Jalur Sutera Barat No. Kav. 8, Alam Sutera,\nTangerang, Banten, Indonesia",
    },
    forest: {
      eyebrow: "Keunggulan Utama",
      headline1: "4 Hektare Hutan,",
      headline2: "tepat di luar jendela Anda.",
      body: "Sedikit hunian di kota manapun yang bisa menawarkan ini: hutan kota pribadi sebagai halaman depan Anda. Hutan Sentral adalah kehadiran nyata yang hidup dan bernapas antara Anda dan kota, dirancang untuk jalan pagi, malam yang tenang, dan udara lebih bersih setiap hari.",
      captions: [
        "Jalur hutan dimulai dari lantai dasar",
        "Kehadiran nyata antara Anda dan kota",
        "Setiap pandangan adalah pemandangan hutan",
      ],
    },
    residences: {
      eyebrow: "Koleksi Hunian",
      headline1: "Dua koleksi.",
      headline2: "Satu alamat.",
      tab_vivre: "VIVRE",
      tab_lumiere: "LUMIÈRE",
      vivre_sub:
        "Untuk hidup. Ruang dan fleksibilitas untuk kehidupan keluarga.",
      lumiere_sub: "Cahaya. Efisien, bercahaya, dan modern.",
      table_headers: ["Tipe", "Luas", "KT / KM", "Ruang Kerja"],
      note: "Setiap hunian dilengkapi ruang kerja khusus, dibangun untuk cara orang benar-benar hidup dan bekerja hari ini. Kaca lantai-ke-langit-langit di ruang tamu memastikan hutan selalu menjadi bagian dari pandangan.",
      floor_vivre: "Floorplan Vivre",
      cta_vivre: "Tanya tentang Vivre",
      floor_lumiere: "Floorplan Lumière",
      cta_lumiere: "Tanya tentang Lumière",
    },
    amenities: {
      eyebrow: "Fasilitas",
      headline1: "Fasilitas selengkap resor,",
      headline2: "setiap hari.",
      body: "Dari berenang saat fajar hingga bersantai saat senja, fasilitas Elevee dirancang untuk kehidupan yang tidak pernah mengharuskan Anda meninggalkan rumah agar terasa seperti liburan. Lebih dari 40 fasilitas dalam empat kategori.",
      captions: ["Kolam infinity · Teras palem", "Lobi utama · Akses pintar"],
      groups: [
        {
          icon: "Waves",
          label: "Kebugaran & Rekreasi",
          items: [
            "Kolam renang lap",
            "Kolam infinity",
            "Gym indoor",
            "Sudut meditasi",
            "Jalur pejalan kaki & sepeda",
          ],
        },
        {
          icon: "Users",
          label: "Keluarga & Sosial",
          items: [
            "Area bermain anak",
            "Ruang co-working",
            "Lounge rooftop",
            "Dek BBQ",
            "Kafe hutan",
          ],
        },
        {
          icon: "Shield",
          label: "Kenyamanan & Keamanan",
          items: [
            "Sistem rumah pintar",
            "Akses tanpa sentuh",
            "CCTV 24/7 & pusat komando",
            "Pengisian EV",
            "Internet berkecepatan tinggi",
          ],
        },
        {
          icon: "Leaf",
          label: "Hidup Hijau",
          items: [
            "4 Ha Hutan Sentral",
            "Jalur pejalan kaki berteduh",
            "Kebun taman urban",
            "Desain ventilasi alami",
            "Lansekap hemat air",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Galeri",
      headline: "Lihat apa adanya.",
      alts: [
        "Kanopi Hutan Sentral dilihat dari promenade",
        "Hunian Vivre dengan jendela lantai-ke-langit-langit yang membingkai hutan",
        "Kolam infinity berbaris palem saat senja",
        "Ruang tamu Lumière yang disinari cahaya alami",
        "Lobi utama dengan aksen kayu yang hangat",
        "Ruang tamu terbuka Vivre 3",
      ],
    },
    stats: [
      { value: "4 Ha", label: "Hutan Sentral" },
      { value: "15 mnt", label: "Ke Bandara" },
      { value: "40+", label: "Fasilitas" },
    ],
    contact: {
      eyebrow: "Kunjungi Elevee Residences",
      headline1: "Mulai hidup Anda",
      headline2: "yang lebih tinggi.",
      body: "Tim penjualan kami siap memandu Anda melalui kedua koleksi, mengatur kunjungan lokasi secara pribadi, dan membantu Anda menemukan hunian yang sesuai dengan cara hidup Anda.",
      addressLabel: "Alamat",
      address:
        "Jl. Jalur Sutera Barat No. Kav. 8\nAlam Sutera, Tangerang, Banten",
      hoursLabel: "Jam Galeri Penjualan",
      hours: "Setiap hari · 08:30 – 18:00 WIB",
      callUs: "Hubungi Kami",
      whatsapp: "WhatsApp",
      formHeadline: "Formulir Pertanyaan",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Nama Anda",
      phoneLabel: "Telepon / WhatsApp",
      phonePlaceholder: "+62 8xx xxxx xxxx",
      collectionLabel: "Koleksi yang Diminati",
      collectionPlaceholder: "Pilih koleksi",
      collectionVivre: "VIVRE · 138 hingga 156 m²",
      collectionLumiere: "LUMIÈRE · 87,8 hingga 111,7 m²",
      collectionUndecided: "Belum memutuskan",
      submit: "Kirim Pertanyaan",
      privacy:
        "Detail Anda hanya digunakan untuk mengatur kunjungan dan tidak akan pernah dibagikan.",
      successTitle: "Terima kasih.",
      successBody:
        "Tim kami akan menghubungi Anda dalam satu hari kerja untuk mengatur kunjungan Anda.",
    },
    footer: {
      sub: "Residences · Alam Sutera Group",
      credit:
        "Arsitektur oleh Broadway Malyan · Jl. Jalur Sutera Barat, Alam Sutera, Tangerang",
    },
  },
};
