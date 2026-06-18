export interface IndonesianArticleTranslation {
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  mainExplanation: string;
  keyConcepts: { heading: string; text: string }[];
  visualDesc: string;
}

export const indonesianKnowledgeTranslations: Record<string, IndonesianArticleTranslation> = {
  "what-is-prismax": {
    title: "Apakah itu PrismaX",
    subtitle: "PRISMAX_FOUNDATION_OVERVIEW",
    category: "Introduction & Core",
    overview: "PrismaX berfungsi sebagai lapisan layanan terdesentralisasi terstandarisasi yang dirancang untuk menjembatani kesenjangan abstraksi antara model AI dasar dan kinematika mesin dunia nyata. Dengan menyintesis telemetri sensorik fisik dan pipa kontrol ke dalam aliran kecerdasan spasial yang terpadu, kami memungkinkan loop pembelajaran berkelanjutan dan umpan balik haptic bilateral sub-50ms.",
    mainExplanation: "PrismaX menghubungkan teleoperator, pengguna robot, pemilik armada, dan perusahaan robotika dalam jaringan terdesentralisasi yang terbuka. Alih-alih memaksa setiap perusahaan robotika membangun pipa pelatihan mandiri secara individual, PrismaX menstandarisasi perekaman telemetri dan konektivitas jarak jauh. Ini memisahkan variabilitas kegagalan mekanis menjadi kembar digital yang dapat diprediksi, dan menurunkan hambatan bagi robot humanoid bipedal dan lengan industri.",
    keyConcepts: [
      { heading: "Lapisan Abstraksi Terpadu", text: "Menstandarisasi batas aktuator mesin, konfigurasi sendi, dan struktur torsi yang beragam ke dalam satu kerangka kerja bersama." },
      { heading: "Lapisan Koordinasi Terbuka", text: "Menghubungkan tiga pilar penting secara langsung: operator manusia jarak jauh, host perangkat keras armada lokal, dan pelanggan data jaringan saraf." },
      { heading: "Penangkapan Nilai Terdesentralisasi", text: "Memungkinkan pemilik armada terdistribusi untuk menghubungkan perangkat ke jaringan global untuk menghasilkan pendapatan langsung tanpa perantara." }
    ],
    visualDesc: "PrismaX menerjemahkan koordinat ruang kerja fisik target secara langsung menjadi pulsa motor mekanis melalui konversi koordinat lokal."
  },
  "physical-ai": {
    title: "AI Fisik",
    subtitle: "EMBODIED_INTELLIGENCE_MODEL",
    category: "Introduction & Core",
    overview: "Tidak seperti perangkat lunak murni dan chatbot digital, AI Fisik mewakili model jaringan saraf yang beroperasi langsung di dunia nyata, terus belajar koordinat pergerakan dalam ruang tiga dimensi.",
    mainExplanation: "AI Fisik bekerja langsung dalam realitas fisik. Kecerdasan tidak terbatas pada teks atau piksel; ia mempengaruhi dunia melalui hukum ruang, waktu, dan kekuatan kontak. PrismaX adalah sistem pengembangan terpadu untuk AI Fisik, menyediakan skala tanpa batas untuk pelatihan robot.",
    keyConcepts: [
      { heading: "Pemahaman Geometri 3D", text: "Kemampuan mengenali kedalaman, tekstur, dan posisi spasial objek untuk manipulasi yang tepat." },
      { heading: "Umpan Balik Waktu Nyata", text: "Koreksi lintasan pergerakan berdasarkan data sensor instan setiap beberapa milidetik." },
      { heading: "Keamanan Interaksi Manusia", text: "Algoritme pembatasan gaya bawaan untuk mencegah cedera pada manusia dan kerusakan properti." }
    ],
    visualDesc: "Grafik menunjukkan pertukaran data siklis antara lingkungan fisik, sensor persepsi, dan aktuator robot."
  },
  "teleoperation": {
    title: "Teleoperasi Latensi Rendah",
    subtitle: "LOW_LATENCY_BILATERAL_CONTROL",
    category: "Robot Control & Operations",
    overview: "Kontrol jarak jauh robot oleh operator manusia adalah kunci untuk mengumpulkan data demonstrasi berkualitas tinggi. Jaringan kami mentransmisikan sinyal taktil dan video dengan latensi kurang dari 50ms melalui node terdesentralisasi.",
    mainExplanation: "Dengan teleoperasi PrismaX, gerakan manusia yang kompleks dikumpulkan untuk pelatihan demonstrasi. Teknologi kompresi inovatif dan streaming data memungkinkan operator di belahan bumi lain merasakan resistensi objek secara nyata, seolah-olah memegangnya sendiri.",
    keyConcepts: [
      { heading: "Kontrol Bilateral", text: "Sinkronisasi instan posisi operator and robot dengan umpan balik gaya resistensi secara real-time." },
      { heading: "Kompresi Data Adaptif", text: "Kompresi vektor pergerakan frekuensi tinggi dan telemetri taktil untuk transmisi tanpa lag melalui internet biasa." },
      { heading: "Node Relai Andal", text: "Jaringan server proksi global mengoptimalkan perutean paket data untuk mencapai ping seminimal mungkin." }
    ],
    visualDesc: "Skema menunjukkan transmisi sinyal dari stasiun operator melalui koordinat relai geo-teroptimasi ke node robot."
  },
  "data-layer": {
    title: "Lapisan Data",
    subtitle: "HIGHSPEEDED_TELEMETRY_DATALAKE",
    category: "Network & Economics",
    overview: "Data adalah fondasi AI modern. Lapisan data kami mengatur pengumpulan, verifikasi, dan tokenisasi jutaan langkah lintasan gerakan robot untuk membentuk kumpulan data pengalaman fisik yang masif.",
    mainExplanation: "Setiap detik pengoperasian perangkat keras menghasilkan megabita kecepatan sudut, tegangan motor, sentuhan taktil, dan aliran video. PrismaX merestrukturisasi sinyal mentah ini menjadi token terkuantisasi yang cocok untuk melatih model tindakan multimoda.",
    keyConcepts: [
      { heading: "Kuantisasi Lintasan", text: "Mengonversi pergerakan kontinu efektor akhir menjadi vektor waktu diskret atau kata kode terstruktur." },
      { heading: "Penyimpanan Terdistribusi IPFS", text: "Mengamankan paket data terenkripsi pada node terdistribusi untuk menghilangkan titik kegagalan terpusat." },
      { heading: "Audit Kualitas Otomatis", text: "Penyaringan algoritmik dari gerakan gagal, tidak realistis, atau kosong sebelum dimasukkan ke set pelatihan." }
    ],
    visualDesc: "Menunjukkan jalur data mentah sensorik yang diubah menjadi token tindakan untuk disimpan di danau data (data lake)."
  },
  "intelligence-layer": {
    title: "Lapisan Kecerdasan",
    subtitle: "COGNITIVE_REASONING_PIPELINE",
    category: "Introduction & Core",
    overview: "Lapisan Kecerdasan PrismaX mengarahkan pengambilan keputusan strategis tingkat tinggi, mengubah pengamatan visual dan spasial menjadi instruksi pergerakan logis bagi aktuator robot.",
    mainExplanation: "Kecerdasan fisik nyata membutuhkan perpaduan persepsi visual dan kesadaran kinestetik. Lapisan kecerdasan kami mengeksekusi model tindakan visual-taktil besar yang memprediksi tindakan motorik berikutnya berdasarkan kondisi lingkungan saat ini.",
    keyConcepts: [
      { heading: "Model Tindakan Besar (LAM)", text: "Jaringan saraf terlatih yang memprediksi lintasan gerakan koordinat 3D berikutnya langsung dari input kamera." },
      { heading: "Perencanaan Hierarkis", text: "Membagi instruksi abstrak tingkat tinggi menjadi serangkaian gerakan mikro-kinematik yang aman." },
      { heading: "Pembelajaran Fleksibel", text: "Mengadopsi keahlian taktis dari satu jenis robot ke robot lain melalui transfer pembelajaran lintas-hardware." }
    ],
    visualDesc: "Bagan pipa kecerdasan dari gambar visual input, melintasi inferensi LAM, hingga koordinat pergerakan motor."
  },
  "system-architecture": {
    title: "Arsitektur Sistem",
    subtitle: "PRISMAX_DECENTRALIZED_FABRIC",
    category: "Introduction & Core",
    overview: "Tinjauan mendalam tentang arsitektur jaringan PrismaX yang menghubungkan operator, host edge, pipa keamanan, dan node komputasi awan dalam sebuah kain terdesentralisasi terpadu.",
    mainExplanation: "Arsitektur modular PrismaX memisahkan lapisan jaringan, keamanan, dan eksekusi. Protokol ini memastikan bahwa meskipun koneksi awan terganggu, robot lokal tetap dapat beroperasi dengan aman menggunakan kontrol keselamatan bawaan.",
    keyConcepts: [
      { heading: "Blok Komputasi Edge", text: "Node lokal yang memproses koordinasi motorik kritis dan video latensi rendah secara langsung di dekat mesin fisik." },
      { heading: "Saluran Enkripsi Quantum-Safe", text: "Seluruh pertukaran sinyal kontrol robot dilindungi oleh enkripsi kunci asimetris tingkat lanjut untuk mencegah pembajakan." },
      { heading: "Konsensus Validasi Trajektori", text: "Konsensus jaringan yang memastikan integritas data pergerakan sebelum diunggah untuk kompensasi keuangan bagi penyedia." }
    ],
    visualDesc: "Skema jaringan terdistribusi yang menampilkan interaksi antara operator, node relay awan, dan node perangkat keras robot."
  },
  "robot-learning": {
    title: "Pembelajaran Robot",
    subtitle: "IMITATION_AND_REINFORCEMENT",
    category: "Robot Control & Operations",
    overview: "Bagaimana robot belajar dari demonstrasi manusia dan menyempurnakan keterampilannya sendiri melalui pelatihan penguatan dalam simulator fisika canggih.",
    mainExplanation: "Pembelajaran robot di PrismaX menggabungkan Pembelajaran Imitasi dari data teleoperasi manusia dengan Algoritme Pembelajaran Penguatan (RL). Teknik ini mengatasi sim-to-real gap dengan memperkenalkan noise realistis ke dalam lingkungan simulasi.",
    keyConcepts: [
      { heading: "Pembelajaran Imitasi", text: "Meniru gerakan presisi operator manusia untuk menguasai tugas manipulasi halus seperti memegang alat kecil." },
      { heading: "Penyesuaian Kebijakan", text: "Penyempurnaan otomatis parameter gerakan lokal berdasarkan deviasi gaya resistensi fisik nyata yang dihadapi." },
      { heading: "Simulasi Skala Besar", text: "Menjalankan jutaan iterasi gerakan dalam simulator fisika paralel sebelum menerapkannya ke perangkat keras nyata." }
    ],
    visualDesc: "Visualisasi loop umpan balik antara demonstrasi awal manusia, pemodelan simulasi, dan eksekusi pada robot fisik."
  },
  "digital-twins": {
    title: "Kembar Digital",
    subtitle: "REALTIME_PHYSICAL_REPLICATION",
    category: "Robot Control & Operations",
    overview: "Klon digital interaktif dari robot fisik yang diperbarui dalam hitungan milidetik untuk simulasi, diagnosis kesalahan, dan pemantauan kinerja jarak jauh.",
    mainExplanation: "Kembar Digital PrismaX mereproduksi status fisik robot nyata secara tepat dalam ruang virtual. Menggunakan telemetri koordinat sendi yang dikirimkan terus-menerus, simulator dapat memprediksi kegagalan fungsional atau kelelahan mekanis sebelum benar-benar terjadi.",
    keyConcepts: [
      { heading: "Pemetaan Kinematik Instan", text: "Sinkronisasi posisi sendi robot fisik ke representasi URDF 3D di dasbor operator dunia nyata." },
      { heading: "Prediksi Tabrakan Spasial", text: "Mengevaluasi secara virtual rute gerakan robot guna mendeteksi potensi tabrakan dengan objek sekitar sebelum dijalankan." },
      { heading: "Visualisasi Tekanan Mekanis", text: "Menampilkan representasi warna dinamis untuk mengidentifikasi beban torsi berlebih pada motor sendi robot." }
    ],
    visualDesc: "Representasi visual dari robot fisik di samping replika digitalnya yang bersinar, dihubungkan oleh panah telemetri."
  },
  "human-in-the-loop": {
    title: "Keterlibatan Manusia (HITL)",
    subtitle: "COOPERATIVE_HUMAN_ROBOT_LOGIC",
    category: "Robot Control & Operations",
    overview: "Strategi integrasi di mana operator manusia dan model AI berkolaborasi secara real-time, memungkinkan intervensi manusia seketika saat AI menghadapi ketidakpastian tinggi.",
    mainExplanation: "PrismaX menentang gagasan bahwa robot harus sepenuhnya mandiri sejak hari pertama. Menggunakan sistem deteksi ketidakpastian, model AI akan secara otomatis memanggil operator manusia melalui teleoperasi untuk menyelesaikan bagian tersulit dari suatu tugas sebelum melanjutkan operasi mandiri.",
    keyConcepts: [
      { heading: "Pemanggilan Intervensi Instan", text: "Transisi mulus dari otonom ke kendali jarak jauh manusia dalam waktu kurang dari 100ms ketika tingkat keyakinan AI rendah." },
      { heading: "Umpan Balik Gaya Haptic", text: "Mengirimkan tingkat resistensi mekanis kembali ke tangan operator jarak jauh untuk persepsi kegagalan memegang." },
      { heading: "Pengumpulan Data Koreksi", text: "Menyimpan intervensi manusia sebagai data pelatihan berharga berkualitas tinggi untuk melatih model AI di masa depan." }
    ],
    visualDesc: "Diagram alir penentuan keputusan otonom robot yang mengalirkan kontrol ke operator manusia saat menghadapi hambatan."
  },
  "fleet-operations": {
    title: "Operasi Armada",
    subtitle: "CROSS_HARDWARE_ORCHESTRATION",
    category: "Robot Control & Operations",
    overview: "Sistem koordinasi skala besar yang mengelola ratusan robot berbeda di berbagai lokasi geografis melalui satu dasbor kontrol terpadu.",
    mainExplanation: "Mengoperasikan armada robot heterogen membutuhkan protokol komunikasi yang aman dan terstandarisasi. Dasbor Armada PrismaX menyatukan berbagai jenis robot—dari lengan tunggal hingga robot humanoid bipedal—ke dalam satu antarmuka kontrol.",
    keyConcepts: [
      { heading: "Penugasan Dinamis", text: "Mengalokasikan tugas kerja secara otomatis ke unit robot terdekat dengan konfigurasi perangkat keras yang paling sesuai." },
      { heading: "Sinkronisasi Profil Gerak", text: "Menerjemahkan urutan gerakan yang sama ke dalam parameter motorik unik masing-masing produsen robot." },
      { heading: "Pemantauan Kesehatan Pusat", text: "Menganalisis suhu motor, daya baterai, dan stabilitas koneksi jaringan semua unit aktif secara terus-menerus." }
    ],
    visualDesc: "Dasbor pemantauan peta dunia yang dihiasi dengan ikon-ikon status robot yang tersebar di berbagai benua global."
  },
  "training-infrastructure": {
    title: "Infrastruktur Pelatihan",
    subtitle: "MASSIVE_PARALLEL_TRAINING_FABRIC",
    category: "Future & Roadmap",
    overview: "Infrastruktur komputasi canggih yang dirancang khusus untuk memproses telemetri spasial robotika dan melatih model AI Fisik skala besar.",
    mainExplanation: "Melatih model AI Fisik membutuhkan daya komputasi yang sangat besar yang dioptimalkan untuk data spasial 3D. Kluster komputasi PrismaX mengadopsi pipa pelatihan terdistribusi yang memilah data sensorik video dan taktil ke ribuan kartu grafis secara paralel.",
    keyConcepts: [
      { heading: "Pelatihan Multimoda Terdistribusi", text: "Pembagian beban kerja komputasi antara ribuan unit pemrosesan untuk melatih model visual-aksi secara cepat." },
      { heading: "Kompresi Data Pembelajaran", text: "Mengeliminasi data yang redundan dalam rekaman pergerakan robot untuk menghemat bandwidth dan ruang penyimpanan." },
      { heading: "Validasi Lintas Geometri", text: "Menguji kebijakan gerakan yang dipelajari pada model robot dengan dimensi fisik yang berbeda guna memastikan portabilitas." }
    ],
    visualDesc: "Ilustrasi aliran data dari danau data global menuju kluster server GPU berkinerja tinggi untuk pembaruan parameter kebijakan."
  },
  "action-models": {
    title: "Model Tindakan (LAM)",
    subtitle: "END_TO_END_VISUAL_MOTOR_POLICIES",
    category: "Evaluations & Analytics",
    overview: "Model neural khusus yang mengubah umpan video visual kamera langsung dan sensor haptic menjadi arah gerak mekanis secara langsung tanpa langkah perantara.",
    mainExplanation: "Berbeda dari pendekatan robotika tradisional yang memisahkan persepsi, perencanaan, dan kontrol secara manual, Model Tindakan Besar (LAM) PrismaX mengadopsi pendekatan ujung-ke-ujung (end-to-end). Hal ini meminimalkan latensi batin dalam sistem robot.",
    keyConcepts: [
      { heading: "Kebijakan Ujung-ke-Ujung", text: "Arsitektur jaringan saraf tunggal yang memproses gambar kamera mentah langsung menjadi torsi motor sendi." },
      { heading: "Persepsi Spasial Terpadu", text: "Model batiniah yang secara otomatis mengenali batas-batas geometri 3D dari lingkungan sekitar tanpa peta statis." },
      { heading: "Resistensi Kecepatan Tinggi", text: "Kemampuan komputasi model yang dapat berjalan pada unit lokal (edge) dengan kecepatan frekuensi di atas 200Hz." }
    ],
    visualDesc: "Visualisasi visual dari kamera input yang dipetakan oleh jaringan saraf transformer langsung menjadi instruksi torsi roda gigi."
  },
  "machine-perception": {
    title: "Persepsi Mesin",
    subtitle: "MULTIMODAL_SPATIAL_SENSORY_EARS",
    category: "Network & Economics",
    overview: "Mengintegrasikan penglihatan kamera, kedalaman lidar, dan sentuhan kapasitif untuk memberikan kesadaran lingkungan 360 derajat bagi robot fisik.",
    mainExplanation: "Persepsi Mesin adalah mata dan telinga dari AI Fisik. Menggunakan sensor jarak modern dan kamera berkecepatan tinggi, robot PrismaX dapat mendeteksi pergeseran sekecil apa pun di area kerja mereka dan menyesuaikan cengkeraman mereka dalam hitungan mikrodetik.",
    keyConcepts: [
      { heading: "Fusi Sensorik Dinamis", text: "Menggabungkan aliran data penglihatan dan data haptic untuk menciptakan model lingkungan yang andal." },
      { heading: "Estimasi Kedalaman Instan", text: "Menghitung jarak ke objek di sekitar robot secara real-time tanpa memerlukan perangkat keras lidar yang mahal." },
      { heading: "Pelacakan Objek Aktif", text: "Mengunci fokus visual pada alat kerja meskipun objek mengalami okklusi sebagian oleh tangan operator." }
    ],
    visualDesc: "Bagan fusi data sensorik yang menggabungkan point cloud visual dan matriks tekanan taktil ke satu representasi keadaan."
  },
  "simulation-systems": {
    title: "Sistem Simulasi",
    subtitle: "HIGH_FIDELITY_PHYSICS_SIMULATION",
    category: "Future & Roadmap",
    overview: "Lingkungan virtual ultra-realistis dengan simulasi fisika presisi tinggi tempat robot dilatih sebelum melakukan tugas di dunia nyata.",
    mainExplanation: "Sistem Simulasi PrismaX mensimulasikan gesekan udara, deformasi bahan lunak, dan interaksi fluida. Pelatihan intensif dalam simulasi ini menghasilkan model AI yang sangat tangguh saat pertama kali ditransfer ke perangkat fisik.",
    keyConcepts: [
      { heading: "Simulasi Geometri Lanjut", text: "Representasi akurat dari objek fleksibel seperti kain, tali, atau kabel untuk tugas perakitan industri." },
      { heading: "Loop Sim-to-Real Efektif", text: "Algoritme pengoptimalan yang meminimalkan deviasi perilaku antara lingkungan virtual dan fisik nyata." },
      { heading: "Simulasi Paralel Tak Terbatas", text: "Menjalankan puluhan ribu instans simulasi robot sekaligus di awan untuk mempercepat pengumpulan pengalaman taktis." }
    ],
    visualDesc: "Robot virtual mengeksekusi tugas memegang objek kompleks di dalam simulator fisika dengan grafik vektor visual."
  },
  "deployment-pipelines": {
    title: "Pipa Penerapan",
    subtitle: "AUTOMATED_MODEL_OTA_DELIVERY",
    category: "Future & Roadmap",
    overview: "Infrastruktur pengiriman aman yang mengirimkan pembaruan model AI terbaru secara langsung ke robot di lapangan tanpa menghentikan operasi.",
    mainExplanation: "Memperbarui robot dengan model motorik baru memerlukan jaminan keamanan yang ketat. Pipa penerapan PrismaX memvalidasi integritas model di lingkungan pengujian virtual lokal sebelum mengirimkannya melalui pembaruan udara (OTA).",
    keyConcepts: [
      { heading: "Pembaruan OTA Aman", text: "Pengiriman model terenkripsi secara efisien ke perangkat keras target di lokasi mana pun di seluruh dunia." },
      { heading: "Mekanisme Pemulihan Instan", text: "Secara otomatis mengembalikan perangkat keras ke model motorik stabil sebelumnya jika terjadi anomali perilaku." },
      { heading: "Pengujian Konformitas Virtual", text: "Menjalankan ribuan pemeriksaan keselamatan otomatis pada model baru sebelum diizinkan mengendalikan motor nyata." }
    ],
    visualDesc: "Diagram pipa pengiriman model AI dari server awan pusat, melewati proses tanda tangan digital, menuju robot di pabrik."
  },
  "physical-intelligence": {
    title: "Kecerdasan Fisik",
    subtitle: "CROSS_HARDWARE_SPECTRUM",
    category: "Introduction & Core",
    overview: "Kecerdasan dasar yang memungkinkan mesin memahami hukum gerak fisik, inersia, dan manipulasi objek di dunia fisik nyata.",
    mainExplanation: "Kecerdasan Fisik adalah hasil akhir dari penyatuan persepsi, aksi, dan penalaran. Jaringan PrismaX melatih kebijakan gerakan yang tidak bergantung pada satu robot tertentu, melainkan memahami prinsip-prinsip fisik manipulasi secara universal.",
    keyConcepts: [
      { heading: "Prinsip Universal Motorik", text: "Memahami cara memegang cangkir atau menggunakan obeng secara umum, apa pun jenis lengan robot yang digunakan." },
      { heading: "Adaptasi Inersia Dinamis", text: "Secara otomatis menyesuaikan gaya cengkeraman ketika berat objek yang dibawa tiba-tiba berubah." },
      { heading: "Persepsi Geometri Spasial", text: "Representasi internal yang kokoh tentang ruang tiga dimensi untuk menghindari rintangan bergerak secara dinamis." }
    ],
    visualDesc: "Representasi grafis yang menggambarkan bagaimana berbagai jenis robot mengunduh kecerdasan fisik dasar yang sama."
  },
  "robotics-data-collection": {
    title: "Pengumpulan Data Robotika",
    subtitle: "HIGH_FIDELITY_TELEMETRY_RECORDING",
    category: "Network & Economics",
    overview: "Metode perekaman telemetri robot secara real-time untuk membangun dataset pelatihan AI Fisik terbesar dan terlengkap di dunia.",
    mainExplanation: "Sinyal sensorik mentah harus direkam tanpa kehilangan detail kecil untuk memastikan kualitas pelatihan model. PrismaX mencatat pergerakan kinematik, torsi mesin, dan umpan visual secara sinkron pada skala milidetik.",
    keyConcepts: [
      { heading: "Sinkronisasi Telemetri Presisi", text: "Menyelaraskan rekaman video kamera langsung dengan data torsi motor pada waktu yang sangat akurat." },
      { heading: "Anonimisasi Data Area Kerja", text: "Menyaring informasi pribadi atau sensitif dari rekaman visual sebelum diunggah ke danau data global." },
      { heading: "Kompresi Aliran Kinematik", text: "Teknologi kompresi khusus yang mengurangi ukuran data pergerakan 3D hingga 90% tanpa kehilangan presisi koordinat." }
    ],
    visualDesc: "Aliran data sensorik yang dirangkai dan dikompresi menjadi satu file paket trajektori yang siap untuk dikirim."
  },
  "future-of-physical-ai": {
    title: "Masa Depan AI Fisik",
    subtitle: "NEXT_DECADE_EMBODIED_ROBOTICS",
    category: "Future & Roadmap",
    overview: "Visi masa depan di mana robot humanoid bipedal dan asisten mekanis mandiri berintegrasi sepenuhnya dalam kehidupan sehari-hari.",
    mainExplanation: "Dalam dekade berikutnya, AI Fisik akan mengubah wajah industri manufaktur, logistik, dan perawatan kesehatan domestik. PrismaX memimpin transformasi ini dengan membangun infrastruktur jaringan global untuk kolaborasi robot-manusia.",
    keyConcepts: [
      { heading: "Kembaran Dunia Fisik", text: "Penciptaan model spasial global yang diperbarui terus-menerus oleh jutaan robot yang beroperate di seluruh dunia." },
      { heading: "Otonomi Domestik Penuh", text: "Transisi robot dari tugas industri berulang ke tugas rumah tangga yang sangat dinamis dan tidak terstruktur." },
      { heading: "Ekonomi Robotika Terbuka", text: "Pasar terbuka tempat pengembang perangkat lunak AI dan pemilik perangkat keras robot bertukar data secara langsung." }
    ],
    visualDesc: "Ilustrasi konsep kota masa depan dengan robot pembantu yang beroperasi secara aman di samping manusia."
  },
  "eval-engine": {
    title: "Mesin Evaluasi",
    subtitle: "STANDARDIZED_PHYSICAL_BENCHMARKING",
    category: "Evaluations & Analytics",
    overview: "Mesin terkomputerisasi yang secara otomatis menganalisis dan menilai kinerja model gerakan robot berdasarkan kriteria presisi, keamanan, dan efisiensi energi.",
    mainExplanation: "Sebelum model AI Fisik baru diizinkan mengendalikan mesin mahal di dunia nyata, model tersebut harus lulus uji kelayakan batin. Mesin Evaluasi PrismaX menguji model terhadap ratusan skenario stres dalam simulasi virtual.",
    keyConcepts: [
      { heading: "Skor Akurasi Presisi Jaringan", text: "Menilai seberapa dekat lintasan pergerakan yang direncanakan model dengan rute teoretis terdekat." },
      { heading: "Metrik Efisiensi Konsumsi Energi", text: "Menganalisis penggunaan energi motor untuk menyingkirkan model yang menghasilkan gerakan kasar yang boros daya." },
      { heading: "Penilaian Batas Tabrakan", text: "Perhitungan statistik tentang seberapa sering model mendekati batas keselamatan atau menyentuh objek terlarang." }
    ],
    visualDesc: "Grafik dasbor analitis yang menampilkan nilai skor model AI yang diuji, lengkap dengan grafik kurva perbandingan."
  },
  "data-marketplace": {
    title: "Pasar Data",
    subtitle: "TOKENIZED_MOVEMENT_DATA_EXCHANGE",
    category: "Network & Economics",
    overview: "Pasar terdesentralisasi yang aman bagi peneliti AI untuk membeli dataset gerakan robot berkualitas tinggi yang diunggah oleh pemilik armada.",
    mainExplanation: "Data gerakan robot dunia nyata sangat langka dan mahal. Pasar Data PrismaX menyediakan wadah yang adil dan transparan bagi pemilik robot untuk memonetisasi telemetri pengoperasian perangkat mereka secara aman.",
    keyConcepts: [
      { heading: "Monetisasi Data Trajektori", text: "Memungkinkan pemilik robot mendapatkan imbalan token kompensasi langsung untuk setiap rekaman tugas yang diunggah." },
      { heading: "Lisensi Kepemilikan Data", text: "Melindungi hak cipta intelektual penyedia data melalui sertifikat kriptografi yang membatasi penggunaan data." },
      { heading: "Pencarian Dataset Spasial", text: "Sistem pencarian canggih yang membantu peneliti menemukan file pergerakan spesifik seperti 'membuka pintu' atau 'membawa gelas'." }
    ],
    visualDesc: "Visualisasi pasar data yang mempertemukan ikon pemilik robot armada dengan pengembang model AI."
  },
  "quick-return-bonus": {
    title: "Bonus Pengembalian Cepat",
    subtitle: "EARLY_CONTRIBUTOR_INCENTIVE_PROGRAM",
    category: "Network & Economics",
    overview: "Program penghargaan token intensif yang dirancang untuk memberikan insentif tinggi bagi pemilik armada robot yang bergabung lebih awal dalam jaringan.",
    mainExplanation: "Untuk mempercepat pengembangan database spasial dunia nyata kami, PrismaX memberikan imbalan tambahan bagi kontributor aktif yang secara konsisten mengirimkan telemetri berkualitas tinggi selama fase awal jaringan.",
    keyConcepts: [
      { heading: "Pengganda Imbalan Awal", text: "Meningkatkan imbalan token harian hingga tiga kali lipat bagi pemilik node yang aktif dalam 12 bulan pertama." },
      { heading: "Insentif Keberagaman Perangkat", text: "Bonus tambahan untuk kontributor yang mendaftarkan model robot baru yang belum ada dalam basis data jaringan." },
      { heading: "Hadiah Kualitas Telemetri", text: "Sistem penghargaan yang memberikan token bonus berdasarkan tingkat keberhasilan dan presisi koordinat gerakan yang dikirim." }
    ],
    visualDesc: "Grafik batang pertumbuhan imbalan token yang meningkat seiring dengan keaktifan pengiriman paket data trajektori."
  },
  "tokenomics-pix": {
    title: "Tokenomics $PRISMA",
    subtitle: "UTILITY_TOKEN_ECONOMIC_STRUCTURE",
    category: "Network & Economics",
    overview: "Struktur ekonomi token utilitas $PRISMA yang menggerakkan seluruh transaksi, pembayaran teleoperasi, dan kompensasi hosting data dalam ekosistem PrismaX.",
    mainExplanation: "Token $PRISMA adalah bahan bakar utama ekosistem kami. Ia menyelaraskan kepentingan ekonomi dari semua partisipan jaringan—operator, pemilik robot, peneliti kecerdasan buatan, dan penyedia node relai kontrol.",
    keyConcepts: [
      { heading: "Metode Pembayaran Teleoperasi", text: "Klien menggunakan token untuk membayar waktu sewa kontrol jarak jauh dengan robot fisik di seluruh dunia." },
      { heading: "Staking Keamanan Node", text: "Penyedia host mengunci token sebagai jaminan keamanan komitmen untuk memastikan kestabilan koneksi." },
      { heading: "Tata Kelola Terdistribusi", text: "Memberikan hak suara bagi pemegang token untuk menentukan arah pengembangan protokol dan alokasi dana kas komunitas." }
    ],
    visualDesc: "Bagan sirkulasi ekonomi token $PRISMA di antara operator manusia, pengembang AI, dan pemilik armada robot fisik."
  },
  "robots-as-miners": {
    title: "Robot sebagai Penambang",
    subtitle: "HARDWARE_COMPUTATIONAL_PROOF_OF_WORK",
    category: "Network & Economics",
    overview: "Konsep inovatif di mana robot fisik mendapatkan token kripto secara otomatis hanya dengan menjalankan tugas dunia nyata dan mengirimkan datanya ke jaringan.",
    mainExplanation: "PrismaX mendefinisikan ulang konsep penambangan kripto tradisional. Robot tidak lagi memecahkan teka-teki matematika tanpa manfaat nyata, melainkan menambang token dengan melakukan tugas fisik yang bermanfaat di dunia nyata.",
    keyConcepts: [
      { heading: "Bukti Tindakan Fisik (PoA)", text: "Mekanisme konsensus di mana token dicetak berdasarkan kuantitas dan kualitas rekaman trajektori gerakan nyata." },
      { heading: "Evaluasi Otonom Node", text: "Sistem bawaan robot yang memisahkan data kebisingan sebelum mengirimkan paket bukti penambangan ke rantai blok." },
      { heading: "Penerimaan Pendapatan Mandiri", text: "Dompet kripto bawaan robot yang memungkinkan perangkat membayar biaya perawatannya sendiri secara otonom." }
    ],
    visualDesc: "Ilustrasi robot humanoid yang bekerja mengangkat kotak di gudang, menghasilkan rantai token bersinar yang masuk ke dompetnya."
  },
  "motion-field-correction": {
    title: "Koreksi Medan Gerak",
    subtitle: "DYNAMIC_KINEMATIC_VECTOR_ADJUSTMENT",
    category: "Evaluations & Analytics",
    overview: "Sistem koreksi kinematik waktu nyata yang secara otomatis menyesuaikan lintasan gerakan robot untuk mencegah tabrakan tak terduga.",
    mainExplanation: "Saat robot bergerak, perubahan sekecil apa pun pada beban atau lingkungan dapat menggeser lintasan targetnya. Sistem ini menghitung vektor koreksi dinamis untuk mengembalikan robot ke rute kerja yang aman.",
    keyConcepts: [
      { heading: "Pemrosesan Kinematik Instan", text: "Menghitung penyesuaian sudut sendi robot pada frekuensi tinggi 500Hz guna menjamin stabilitas pergerakan." },
      { heading: "Deteksi Deviasi Beban", text: "Mengidentifikasi perubahan berat benda yang dibawa berdasarkan nilai tegangan motor sendi robot." },
      { heading: "Koreksi Jalur Otomatis", text: "Mengalihkan lintasan pergerakan effectors akhir secara instan saat mendekati rintangan tak terduga." }
    ],
    visualDesc: "Representasi jalur pergerakan robot yang melengkung secara dinamis demi menghindari kontak kasar dengan rintangan."
  },
  "unsupervised-training": {
    title: "Pelatihan Tanpa Pengawasan",
    subtitle: "SELF_SUPERVISED_SPATIAL_LEARNING",
    category: "Introduction & Core",
    overview: "Metode pelatihan model AI Fisik yang memungkinkan robot mempelajari aturan dasar gerakan dan interaksi objek secara mandiri tanpa label manusia.",
    mainExplanation: "Pelatihan berlabel manusia sangat lambat dan mahal untuk mengimbangi skala industri. Pelatihan tanpa pengawasan memungkinkan robot belajar dari jutaan jam eksperimen mandiri di lingkungan simulasi dan nyata.",
    keyConcepts: [
      { heading: "Prediksi Bingkai Masa Depan", text: "Model dilatih untuk memprediksi tampilan visual lingkungan beberapa detik ke depan berdasarkan tindakan motor saat ini." },
      { heading: "Pembelajaran Representasi Kontras", text: "Membantu AI mengidentifikasi objek-objek penting di area kerja dari latar belakang tanpa petunjuk eksternal." },
      { heading: "Eksplorasi Rasa Ingin Tahu Mandiri", text: "Algoritme intrinsik yang mengarahkan robot mencoba gerakan-gerakan baru untuk memaksimalkan pemahaman fisiknya." }
    ],
    visualDesc: "Ilustrasi loop pemodelan internal robot yang membandingkan prediksi visual masa depan dengan realitas hasil gerakan."
  },
  "video-compression-analogy": {
    title: "Analogi Kompresi Video",
    subtitle: "SPATIAL_DATA_REDUCTION_THEORY",
    category: "Evaluations & Analytics",
    overview: "Memahami bagaimana kompresi data gerakan robot bekerja dengan prinsip yang mirip dengan algoritme kompresi video modern.",
    mainExplanation: "Sama seperti kompresi video yang hanya menyimpan perubahan piksel antarbingkai daripada seluruh gambar, algoritme PrismaX hanya mentransmisikan perubahan koordinat fungsional robot untuk meminimalkan bandwidth.",
    keyConcepts: [
      { heading: "Penyimpanan Delta Gerakan", text: "Hanya merekam koordinat sendi yang bergerak aktif, mengabaikan bagian tubuh robot yang tetap diam." },
      { heading: "Kunci Bingkai Kinematik", text: "Menentukan titik-titik pose kunci utama lintasan dan merekonstruksi gerakan sisa secara matematis di sisi server." },
      { heading: "Sensitivitas Bandwidth Dinamis", text: "Secara otomatis menurunkan resolusi telemetri non-kritis ketika koneksi internet mengalami gangguan stabilitas." }
    ],
    visualDesc: "Analogi grafik yang membandingkan aliran video mentah berukuran besar dengan aliran data trajektori terkompresi yang ramping."
  },
  "codebook-quantization": {
    title: "Kuantisasi Buku Kode",
    subtitle: "DISCRETE_MOVEMENT_TOKENIZATION",
    category: "Evaluations & Analytics",
    overview: "Teknik memetakan koordinat pergerakan kontinu berdimensi tinggi menjadi token-token diskret terstandarisasi untuk pemrosesan AI yang efisien.",
    mainExplanation: "Data motorik kontinu sulit dipahami oleh arsitektur model transformer. Dengan memetakan gerakan ke dalam buku kode terstandarisasi, PrismaX menyederhanakan pelatihan model aksi spasial.",
    keyConcepts: [
      { heading: "Pemetaan Tetangga Terdekat", text: "Mengelompokkan vektor pergerakan tak teratur ke titik representasi terdekat dalam kamus buku kode komputer." },
      { heading: "Stabilisasi Kebisingan Sinyal", text: "Menyingkirkan gemetar kecil yang tidak disengaja dari tangan operator manusia untuk menghasilkan gerakan robot yang bersih." },
      { heading: "Representasi Token Efisien", text: "Mengonversi pergerakan fisik yang kompleks menjadi serangkaian token teks sederhana yang dapat diproses langsung oleh transformer." }
    ],
    visualDesc: "Bagan proses yang menunjukkan konversi jalur kontinu melengkung menjadi rangkaian titik token diskret sejajar."
  }
};
