// questions-data.js
const QUIZ_DATA = [
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
    category: "نباتات",
    base: "plants",
    questions: [
      {
        points: 200,
        question: "ما هذا النبات؟",
        image: "https://i.ibb.co/6wPqY90/flower-blur.jpg",   // استبدل برابط الصورة المشوشة
        answer: "وردة",
        answerImage: "https://i.ibb.co/2YzQ0dM/flower-clear.jpg" // صورة الوردة الواضحة
      },
      { points: 400, question: "ما هو أطول شجرة في العالم؟", answer: "شجرة السيكويا" },
      { points: 600, question: "ما هو الغاز الذي تمتصه النباتات؟", answer: "ثاني أكسيد الكربون" },
      { points: 800, question: "ما هي الفاكهة التي تلقب بملكة الفواكه؟", answer: "المانجو" },
      { points: 1000, question: "كم عدد أنواع الورود في العالم تقريباً؟", answer: "أكثر من 300 نوع" }
    ]
  },
  {
    category: "يطير",
    base: "fly",
    questions: [
      { points: 200, question: "حيوان يطير؟", answer: "الطائر" },
      { points: 400, question: "طائر لا يطير؟", answer: "النعامة" },
      { points: 600, question: "ما هو أسرع طائر؟", answer: "الصقر" },
      { points: 800, question: "كم عدد أجنحة النحلة؟", answer: "4" },
      { points: 1000, question: "كيف تطير الطائرة؟", answer: "بفعل قوة الرفع" }
    ]
  },
  {
    category: "اكل",
    base: "food",
    questions: [
      { points: 200, question: "ما هو الطبق السعودي المشهور؟", answer: "الكبسة" },
      { points: 400, question: "ما هي الفاكهة الحمراء؟", answer: "الفراولة" },
      { points: 600, question: "مكون رئيسي في الكبسة؟", answer: "الأرز" },
      { points: 800, question: "ما هو الكافيار؟", answer: "بيض السمك" },
      { points: 1000, question: "ما هو الزعفران؟", answer: "نوع من التوابل" }
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
];