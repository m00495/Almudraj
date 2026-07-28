// questions-data.js
const QUIZ_DATA = {
  1: [
    {
      category: "السعودية",
      base: "saudi",
      questions: [
        { points: 200, question: "ما هي عاصمة السعودية؟", answer: "الرياض" },
        { points: 400, question: "كم عدد مناطق السعودية؟", answer: "13" },
        { points: 600, question: "أين يوجد المسجد النبوي؟", answer: "المدينة المنورة" },
        { points: 800, question: "من هو مؤسس المملكة؟", answer: "الملك عبدالعزيز" },
        { points: 1000, question: "في أي عام تأسست المملكة؟", answer: "1932" }
      ]
    },
    {
      category: "علوم",
      base: "science",
      questions: [
        { points: 200, question: "ما هو العنصر الكيميائي للماء؟", answer: "H₂O" },
        { points: 400, question: "كم عدد الكواكب في المجموعة الشمسية؟", answer: "8" },
        { points: 600, question: "ما هي وحدة قياس القوة؟", answer: "نيوتن" },
        { points: 800, question: "ما اسم أسرع حيوان بري؟", answer: "الفهد" },
        { points: 1000, question: "ما هو قانون نيوتن الثاني؟", answer: "القوة = الكتلة × التسارع" }
      ]
    },
    {
      category: "مكياج",
      base: "makeup",
      questions: [
        { points: 200, question: "ما هو المكياج؟", answer: "مستحضرات تجميل" },
        { points: 400, question: "ما هو الفاونديشن؟", answer: "كريم أساس" },
        { points: 600, question: "ما هي أحمر الشفاه؟", answer: "روج" },
        { points: 800, question: "ما هو الماسكارا؟", answer: "مستحضر لتطويل الرموش" },
        { points: 1000, question: "ما هو الكحل؟", answer: "مستحضر لتحديد العينين" }
      ]
    },
    {
      category: "نباتات",
      base: "plants",
      questions: [
        { points: 200, question: "ما هذا النبات؟", image: "https://i.ibb.co/6wPqY90/flower-blur.jpg", answer: "وردة", answerImage: "https://i.ibb.co/2YzQ0dM/flower-clear.jpg" },
        { points: 400, question: "ما هو أطول شجرة في العالم؟", answer: "شجرة السيكويا" },
        { points: 600, question: "ما هو الغاز الذي تمتصه النباتات؟", answer: "ثاني أكسيد الكربون" },
        { points: 800, question: "ما هي الفاكهة التي تلقب بملكة الفواكه؟", answer: "المانجو" },
        { points: 1000, question: "كم عدد أنواع الورود في العالم تقريباً؟", answer: "أكثر من 300 نوع" }
      ]
    },
    {
      category: "حيوانات",
      base: "animals",
      questions: [
        { points: 200, question: "ما هو أسرع حيوان بري؟", answer: "الفهد" },
        { points: 400, question: "كم عدد قلوب الأخطبوط؟", answer: "3" },
        { points: 600, question: "ما هو أكبر حيوان على وجه الأرض؟", answer: "الحوت الأزرق" },
        { points: 800, question: "كم ساعة ينام الحلزون؟", answer: "3 سنوات" },
        { points: 1000, question: "ما هو الطائر الذي لا يطير؟", answer: "النعامة" }
      ]
    },
    {
      category: "ايموجي",
      base: "emoji",
      questions: [
        { points: 200, question: "😊", answer: "سعيد" },
        { points: 400, question: "😂", answer: "ضحك" },
        { points: 600, question: "❤️", answer: "حب" },
        { points: 800, question: "🔥", answer: "نار" },
        { points: 1000, question: "💯", answer: "مئة" }
      ]
    }
  ],
  2: [
    {
      category: "تاريخ",
      base: "history",
      questions: [
        { points: 200, question: "في أي عام وقعت معركة بدر؟", answer: "2 هـ" },
        { points: 400, question: "من هو أول خليفة للمسلمين؟", answer: "أبو بكر الصديق" },
        { points: 600, question: "ما هي عاصمة الدولة الأموية؟", answer: "دمشق" },
        { points: 800, question: "في أي عام فتحت مكة؟", answer: "8 هـ" },
        { points: 1000, question: "من هو القائد الذي فتح بلاد الشام؟", answer: "خالد بن الوليد" }
      ]
    },
    {
      category: "جغرافيا",
      base: "geo",
      questions: [
        { points: 200, question: "ما هو أكبر محيط في العالم؟", answer: "المحيط الهادي" },
        { points: 400, question: "ما هي أكبر قارة؟", answer: "آسيا" },
        { points: 600, question: "أين يقع نهر النيل؟", answer: "أفريقيا" },
        { points: 800, question: "ما هي أعلى قمة في العالم؟", answer: "إفرست" },
        { points: 1000, question: "كم عدد دول العالم؟", answer: "195" }
      ]
    },
    {
      category: "رياضة",
      base: "sports",
      questions: [
        { points: 200, question: "كم عدد لاعبي كرة القدم في الملعب؟", answer: "22" },
        { points: 400, question: "ما هي أسرع لعبة أولمبية؟", answer: "السباحة" },
        { points: 600, question: "من هو اللاعب الملقب بالجوهري؟", answer: "محمد صلاح" },
        { points: 800, question: "في أي عام استضافت السعودية كأس العالم؟", answer: "2034" },
        { points: 1000, question: "كم مرة فاز الهلال بدوري أبطال آسيا؟", answer: "4" }
      ]
    },
    {
      category: "تقنية",
      base: "tech",
      questions: [
        { points: 200, question: "ما هو اختصار الإنترنت؟", answer: "WWW" },
        { points: 400, question: "من أسس شركة آبل؟", answer: "ستيف جوبز" },
        { points: 600, question: "ما هي لغة البرمجة المستخدمة في الويب؟", answer: "JavaScript" },
        { points: 800, question: "ما هو نظام التشغيل المفتوح المصدر؟", answer: "Linux" },
        { points: 1000, question: "ما هو أول هاتف ذكي؟", answer: "iPhone" }
      ]
    },
    {
      category: "فنون",
      base: "arts",
      questions: [
        { points: 200, question: "من رسم لوحة الموناليزا؟", answer: "ليوناردو دافنشي" },
        { points: 400, question: "ما هو أشهر مسرح في لندن؟", answer: "شكسبير غلوب" },
        { points: 600, question: "ما هو النوع الفني الذي يستخدم الضوء؟", answer: "التصوير الفوتوغرافي" },
        { points: 800, question: "من هو أشهر شاعر عربي؟", answer: "المتنبي" },
        { points: 1000, question: "ما هي أطول لوحة في العالم؟", answer: "لوحة الصين العظيمة" }
      ]
    },
    {
      category: "ألغاز",
      base: "riddles",
      questions: [
        { points: 200, question: "ما هو الشيء الذي يمشي بلا أرجل؟", answer: "النهر" },
        { points: 400, question: "له عين ولا يرى؟", answer: "الإبرة" },
        { points: 600, question: "ما هو الشيء الذي كلما زاد نقص؟", answer: "العمر" },
        { points: 800, question: "يسمع بلا أذن ويتكلم بلا لسان؟", answer: "الهاتف" },
        { points: 1000, question: "ما هو الشيء الذي يحمل طعامه فوق رأسه؟", answer: "القلم" }
      ]
    }
  ]
};