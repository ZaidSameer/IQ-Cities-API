const city = [
  {
    id: 1,
    name: 'بغداد',
    towns: [
      'الكرادة',
      'المنصور',
      'الشعب',
      'بغداد ',
      'الكرخ ',
      'الرصافة ',
      'الفضل ',
      'الصدرية ',
      'باب الشيخ ',
      'العطيفية ',
      'الكاظمية ',
      'الأعظمية ',
      'الكريعات ',
      'الصليخ ',
      'حي القاهرة ',
      'حي المستنصرية',
      'زيونة ',
      'راغبة خاتون',
      'حي اليرموك ',
      'مدينة الصدر ',
      'الوزيرية ',
      'بغداد الجديدة ',
      'العبيدي ',
      'الرشاد',
      'الكمالية',
      'الأورفلي ',
      'البلديات ',
      'البياع ',
      'السيدية',
      'حي الخضراء ',
      'الراشدية',
      'حي الزهور',
      'الحسينية',
      'حي الاستقلال',
      'العامرية',
      ' الفحامة ',
      ' حي الشعب ',
      ' حي أور ',
      ' حي المنصور ',
      ' حي القادسية ',
      ' حي المأمون ',
      ' الدورة',
      ' الغزالية ',
      ' الجادرية ',
      ' الزعفرانية ',
      ' المدائن ',
      ' ابو غريب ',
      ' الشعلة ',
      ' الحرية ',
      ' شارع فلسطين ',
      ' التاجي ',
      ' الطارمية ',
      ' جسر ديالى ',
      ' حي العامل ',
      ' حي الجهاد ',
      ' حي الفرات',
      ' المحمودية',
      ' اليوسفية',
      ' الرشيد',
    ],
  },
  {
    id: 2,
    name: 'النجف',
    towns: [
      'النجف',
      'الكوفة',
      'المناذرة',
      'الحيرة',
      'العباسية',
      'المشخاب',
      'ناحية القادسية',
      'الحرية',
      'الحيدرية',
      'شبكة',
      'المهناوية',
      'الرحبة',
      'الرضوية',
    ],
  },
  {
    id: 3,
    name: 'البصرة',
    towns: [
      'البصرة',
      'أم قصر',
      'الفاو',
      'صفوان',
      'الزبير',
      'أبو الخصيب',
      'القرنة',
      'المدينة',
      'الهوير',
      'الهارثة',
      'التنومة',
      'الشعيبة',
      'الرميلة',
    ],
  },

  {
    id: 4,
    name: 'القادسية',
    towns: [
      ' الديوانية',
      'الشامية',
      'عفك',
      'الحمزة',
      'الدغارة',
      'الشنافية',
      'الصلاحية',
    ],
  },

  {
    id: 5,
    name: 'المثنى',
    towns: ['السماوة', 'الرميثة', 'الخضر', 'الدراجي', 'السلمان', 'بصية '],
  },
  {
    id: 6,
    name: 'ميسان',
    towns: [
      ' العمارة',
      ' علي الغربي',
      ' الميمونة',
      ' المجر',
      ' قلعة صالح',
      ' الكحلاء',
      ' علي الشرقي',
      ' كميت',
      ' المشرح',
      ' السلام',
      ' الخير',
      ' العدل',
      ' بني هاشم',
      ' العزير',
      ' احمد الرفاعي',
    ],
  },
  {
    id: 7,
    name: 'واسط',
    towns: [
      'الكوت',
      'الصويرة',
      'العزيزية',
      'الزبيدية',
      'النعمانية',
      'شيخ سعد',
      'الحي',
      'بدرة',
      'جصان',
    ],
  },
  {
    id: 8,
    name: 'بابل',
    towns: [
      'الحلة',
      'المحمودية',
      'سلمان باك',
      'الحمزة الغربي (المدحتية)',
      'الإسكندرية',
      'المسيب',
      'المحاويل',
      'الهاشمية',
      'الكفل',
      'المشروع',
      'اللطيفية',
      'الحصوة',
      'القاسم',
      'الامام',
      'المدحتية',
      'الكفل',
      'الشوملي',
    ],
  },
  {
    id: 9,
    name: 'كربلاء',
    towns: ['كربلاء', 'عين تمر', 'شثاثة', 'طويريج'],
  },
  {
    id: 10,
    name: 'السليمانية',
    towns: [
      'السليمانية',
      'رانية',
      'قلعة دزة',
      'حلبجة',
      'دوكان',
      'قضاء بنجوين',
      'جمجمال',
      'خرمال',
      'دربندخان',
      'ميدان سراي',
      'باوة نور',
    ],
  },
  {
    id: 11,
    name: 'دهوك',
    towns: [
      'دهوك',
      'زاخو',
      'دركار',
      'عقرة',
      'زاويته',
      'سرسنك',
      'العمادية',
      'شرانش',
      'سميل',
      'كاني ماسي',
      'سولاف',
      'باطوفا',
      'فايدة',
      'باتيل',
      'بامرني',
      'جامانكي',
      'مانكيشك',
      'هيزاوا',
    ],
  },
  {
    id: 12,
    name: 'صلاح الدين',
    towns: [
      'تكريت',
      'العوجة',
      'ناحية العلم',
      'الدور',
      'سامراء',
      'مكيشيفة',
      'المعتصم',
      'بيجي',
      'الصينية',
      'الشرقاط',
      'بلد',
      'الضلوعية',
      'يثرب',
      'عزيز بلد',
      'ناحية الإسحاقي',
      'الدجيل',
      'طوز خورماتو',
      'سليمان بيك',
      'آمرلي',
      'ينكجة',
    ],
  },
  {
    id: 13,
    name: 'ديالى',
    towns: [
      'بعقوبة ',
      'خانقين ',
      'جلولاء ',
      'بلدروز ',
      'كفري ',
      'قرة بولاق ',
      'قرة تبة ',
      'العظيم ',
      'المنصورية ',
      'بهرز ',
      'خان بني سعد ',
      'الخالص ',
      'مندلي ',
      'ترساق ',
      'نفط خانة ',
      'المقدادية ',
    ],
  },
  {
    id: 14,
    name: 'الانبار',
    towns: [
      'الرمادي',
      'الفلوجة',
      'القائم',
      'هيت',
      'حديثة',
      'الحبانية',
      'الخالدية',
      'الوليد',
      'الساجرية',
      'الرطبة',
      'عكاشات',
      'البغدادي',
      'الكرابلة',
      'كبيسة',
      'النخيب',
      'النعيمية',
      'السجر',
      'الرحالية',
      'الصقرة',
      'الجبه',
      'الحميرية',
      'الأوسط',
      'الرمانة',
      'الهبارية',
      'الكسرة',
      'الصقلاوية',
      'العبيدي',
      'عانة',
      'راوة',
      'العامرية',
      'بروانة',
      'الكرمة',
      'الحقلانية',
      'سعدة',
      'الزاوية',
      'الريحانة',
      'الفرات',
      'المحمدي',
      'حصيبة الشرقية',
    ],
  },
  {
    id: 15,
    name: 'كركوك',
    towns: [
      'كركوك',
      'تازة خورماتو أو تازة ',
      'الملتقى ',
      'شوان',
      'التون كوبري',
      'دبس',
      'داقوق',
      'ليلان',
      'الحويجة',
      'الزاب',
      'الرياض',
      'العباسي ',
      'الرشاد',
    ],
  },
  {
    id: 16,
    name: 'ذي قار',
    towns: [
      'الناصرية',
      'الشطرة',
      'البطحاء',
      'سوق الشيوخ',
      'قلعة سكر',
      'الرفاعي',
      'الغراف',
      'الحمار',
      'الجبايش',
      'الفهود',
    ],
  },
  {
    id: 17,
    name: 'اربيل',
    towns: [
      'أربيل',
      'ناحية كسنزان ',
      'ناحية الكلك ',
      'شقلاوة',
      'صلاح الدين ',
      'كوي سنجق ',
      'رواندوز',
      'عينكاوة',
      'سوران',
      'ميركسور',
      'جومان',
      'خبات',
      'بنصلاوة',
    ],
  },
  {
    id: 18,
    name: 'نينوى',
    towns: [
      'الموصل',
      'حمام العليل',
      'القيارة',
      'الشورة',
      'بعشيقة',
      'المحلبية',
      'حميدات',
      'تلعفر',
      'العياضية',
      'ربيعة',
      'زمار',
      'سنجار',
      'الشمال او سنوني',
      'البعاج',
      'القيروان',
      'القحطانية.',
      'الحضر',
      'تل عبطة',
      'الحمدانية',
      'برطلة',
      'تلكيف',
      'وانة',
      'القوش',
      'فايدة',
      'الشيخان',
      'مخمور',
      'الكوير',
      'قراج',
    ],
  },
];

module.exports = city;
