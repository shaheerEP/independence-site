
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation variants for different sliding effects
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInDown = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const timelineItemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="container content-section">
      
      {/* Hero Section */}
      <motion.header 
        className="welcome-header"
        initial="hidden"
        animate="visible"
        variants={slideInDown}
      >
        <div className="welcome-content">
          <motion.div 
            className="welcome-text-backdrop"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="welcome-title"
              variants={slideInUp}
            >
              مرحبًا بكم
            </motion.h1>
            <motion.p 
              className="welcome-description"
              variants={slideInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              في موقعنا ساحة الشيخ أبوبكر، المخصص لتسليط الضوء على مساهمات المسلمين في استقلال الهند
            </motion.p>
          </motion.div>
        </div>
      </motion.header>

      <motion.header 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="hero-content">
          <motion.h1 variants={slideInLeft}>
            الأبطال المنسيون: مساهمات المسلمين في استقلال الهند
          </motion.h1>
          <motion.p variants={slideInRight}>
            اكتشف القصص الرائعة لمقاتلي الحرية المسلمين الذين ضحوا بكل شيء من أجل استقلال الهند
          </motion.p>
          <motion.div 
            className="scroll-indicator"
            variants={slideInUp}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            ↓ تحرك لأسفل للاستكشاف ↓
          </motion.div>
        </div>
      </motion.header>

      {/* Introduction */}
      <motion.section 
        className="intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={slideInLeft}>
          إرث من التضحية والوطنية
        </motion.h2>
        <motion.p variants={slideInRight}>
          كان النضال من أجل استقلال الهند جهداً جماعياً تجاوز الحدود الدينية.
          لعب مقاتلو الحرية المسلمون أدواراً مهمة، من الثورات الأولى إلى الدفعة الأخيرة للحرية في عام 1947.
          قصص شجاعتهم وتضحيتهم وإخلاصهم الثابت للوطن تستحق الاعتراف والتذكر.
        </motion.p>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className="timeline-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={slideInDown}>
          الخط الزمني لمساهمات المسلمين
        </motion.h2>
        
        <div className="timeline">
          <motion.div 
            className="timeline-item"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineItemVariants}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div 
              className="timeline-year"
              whileHover={{ 
                scale: 1.1,
                color: "#007acc"
              }}
            >
              1857
            </motion.div>
            <motion.div 
              className="timeline-content"
              variants={slideInRight}
            >
              <h3>الثورة الكبرى</h3>
              <p><strong>بهادر شاه ظفر</strong> - آخر إمبراطور مغولي أصبح الزعيم الرمزي لثورة 1857. رغم أنه كان عمره 82 سنة، قبل القيادة بشجاعة عندما جاءه الجنود في القلعة الحمراء.</p>
              <motion.div 
                className="story-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <em>"حتى في هذا العمر، عندما يبحث كبار السن عن السلام، اختار ظفر الوقوف مع شعبه ضد الإمبراطورية البريطانية، وهو يعرف العواقب جيداً."</em>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="timeline-item"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineItemVariants}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div 
              className="timeline-year"
              whileHover={{ 
                scale: 1.1,
                color: "#007acc"
              }}
            >
              1919
            </motion.div>
            <motion.div 
              className="timeline-content"
              variants={slideInRight}
            >
              <h3>حركة الخلافة</h3>
              <p><strong>مولانا أبو الكلام آزاد والأخوان علي</strong> - وحدوا المقاومة الهندوسية-الإسلامية ضد السياسات البريطانية. شهدت الحركة وحدة هندوسية-إسلامية لم يسبق لها مثيل في نضال الحرية.</p>
              <motion.div 
                className="story-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <em>عندما سُجن محمد علي، أعلنت والدته بي أما: "أنا فخورة بأن أولادي في السجون البريطانية من أجل بلدهم."</em>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="timeline-item"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineItemVariants}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div 
              className="timeline-year"
              whileHover={{ 
                scale: 1.1,
                color: "#007acc"
              }}
            >
              1921
            </motion.div>
            <motion.div 
              className="timeline-content"
              variants={slideInRight}
            >
              <h3>ثورة مالابار</h3>
              <p>
                الفلاحون والقادة المسلمون، تحت قيادة <strong>فاريامكوناث كونجاهمد حاجي</strong> و<strong>علي مسليار</strong> وآخرين، ثاروا ضد الحكم البريطاني في مالابار. لمدة خمسة أشهر تقريباً، سيطر المتمردون على مناطق كبيرة، وفرضوا الحكم الذاتي، وقاوموا الحملات العسكرية البريطانية. استشهد الآلاف، وأُعدم قادة مثل حاجي ومسليار.
              </p>
              <motion.div 
                className="story-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <em>
                  "بجيش يصل إلى 75,000 جندي، أقام كونجاهمد حاجي حكومة موازية على مساحة 5,200 كيلومتر مربع. العديد من القادة المحليين (علي مسليار، شمبراسيري ثانغال، إلخ) قاتلوا مباشرة في المعارك، وواجهوا بنادق الشرطة، وقادوا الحصارات، ورفضوا أي صفقة مع البريطانيين."
                </em>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="timeline-item"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineItemVariants}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div 
              className="timeline-year"
              whileHover={{ 
                scale: 1.1,
                color: "#007acc"
              }}
            >
              1930
            </motion.div>
            <motion.div 
              className="timeline-content"
              variants={slideInRight}
            >
              <h3>الأنشطة الثورية</h3>
              <p><strong>أشفق الله خان</strong> - شارك مع رام براسد بسمل في سرقة قطار كاكوري الشهيرة. صداقتهما رمزت للوئام الطائفي في نضال الحرية.</p>
              <motion.div 
                className="story-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <em>قبل إعدامه، كتب أشفق: "إذا شُنقت من أجل بلدي، فسأعتبر ذلك حظي السعيد."</em>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="timeline-item"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={timelineItemVariants}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
          >
            <motion.div 
              className="timeline-year"
              whileHover={{ 
                scale: 1.1,
                color: "#007acc"
              }}
            >
              1942
            </motion.div>
            <motion.div 
              className="timeline-content"
              variants={slideInRight}
            >
              <h3>حركة اتركوا الهند</h3>
              <p><strong>أرونا آصف علي ومعلمو الدكتور عبد الكلام</strong> - شارك القادة المسلمون بنشاط في الدفعة الأخيرة للاستقلال، رغم توترات التقسيم.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
 


{/* Regional Contributions */}
<section className="regional-section">
  <h2>مقاتلو الحرية المسلمون في جميع أنحاء الهند</h2>
  <div className="regional-grid">
    <div className="region-card">
      <h3>🏔️ الحدود الشمالية الغربية</h3>
      <ul>
        <li><strong>خان عبد الغفار خان:</strong> قاد المقاومة السلمية لأكثر من 45 سنة</li>
        <li><strong>عبد الصمد خان:</strong> نظم حركة خداي خدمتكار</li>
        <li><strong>الدكتور خان صاحب:</strong> أول رئيس وزراء للمقاطعة الحدودية الشمالية الغربية</li>
      </ul>
    </div>

    <div className="region-card">
      <h3>🕌 دلهي وأوتار براديش</h3>
      <ul>
        <li><strong>بهادور شاه ظفر:</strong> آخر إمبراطور مغولي، رمز ثورة 1857</li>
        <li><strong>أشفاق الله خان:</strong> ثوري، مؤامرة كاكوري</li>
        <li><strong>شريك رام براسد بسمل:</strong> رمز الوحدة الهندوسية الإسلامية</li>
      </ul>
    </div>

    <div className="region-card">
      <h3>🌊 البنغال</h3>
      <ul>
        <li><strong>رفاق الأستاذ سوريا سين:</strong> غارة مستودع أسلحة شيتاغونغ</li>
        <li><strong>شركاء خودي رام بوس:</strong> الأنشطة الثورية</li>
        <li><strong>مظفر أحمد:</strong> رائد الحركة الشيوعية</li>
      </ul>
    </div>

  </div>
</section>


      {/* Heroes Gallery */}
      <section className="heroes-gallery">
        <h2>الأبطال المنسيون</h2>
        <div className="heroes-grid">
          <div className="hero-card">
            <h3>خان عبد الغفار خان</h3>
            <p className="subtitle">"غاندي الحدود"</p>
            <p>قاد المقاومة السلمية في مقاطعة الحدود الشمالية الغربية لأكثر من 45 سنة. قضى في السجن أكثر من أي مقاتل حرية آخر - أكثر من 30 سنة من حياته.</p>
            <div className="achievement">🏆 بهارات راتنا (1987)</div>
          </div>

          <div className="hero-card">
            <h3>بيغم حضرت محل</h3>
            <p className="subtitle">ملكة أوده</p>
            <p>قادت ثورة 1857 في لكناو بعد نفي زوجها. رفضت المعاش البريطاني وماتت في المنفى في نيبال، ولم تتنازل أبداً للبريطانيين.</p>
            <div className="achievement">⚔️ الملكة المحاربة لعام 1857</div>
          </div>

          <div className="hero-card">
            <h3>مولانا حسرت موهاني</h3>
            <p className="subtitle">شاعر وثوري</p>
            <p>أول شخص يطالب بالاستقلال الكامل ("آزادي كامل") في 1921. صاغ الشعار الشهير "انقلاب زنده باد" الذي ألهم الأجيال.</p>
            <div className="achievement">✊ أبو "انقلاب زنده باد"</div>
          </div>

          <div className="hero-card">
            <h3>عثمان خان</h3>
            <p className="subtitle">مقاتل ثوري</p>
            <p>شارك في غارة مستودع أسلحة شيتاغونغ مع سوريا سين. عُذب بوحشية من قبل البريطانيين لكنه لم يكشف أبداً معلومات عن رفاقه.</p>
            <div className="achievement">🔥 بطل شيتاغونغ</div>
          </div>
        </div>
      </section>

     {/* Kerala Section */}
<section className="kerala-section">
  <h2>مساهمات المسلمين في ولاية كيرالا</h2>
  
  <div className="kerala-intro">
    <p>
      شهدت كفاح كيرالا من أجل الحرية مشاركة رائعة من المجتمع المسلم، 
      مع قادة حاربوا الاستعمار البريطاني والإصلاحات الاجتماعية في نفس الوقت.
    </p>
  </div>

  <div className="kerala-heroes">

    <div className="kerala-hero">
      <h3>مامبورام سيد علوي تانغال</h3>
      <p className="kerala-subtitle">قائد روحي ومصلح اجتماعي</p>
      <p>
        قائد روحي إسلامي محترم في مالابار، معروف بتوجيه وتوحيد المجتمع المسلم خلال أوقات التحديات الاجتماعية والسياسية. 
        حكمته وقيادته تركت أثراً دائماً على ثقافة وتاريخ كيرالا.
      </p>
      <div className="kerala-story">
        <strong>بطل الوحدة:</strong> مامبورام سيد علوي تانغال عزز الانسجام بين المجتمعات المتنوعة، 
        مؤكداً على التعايش السلمي والتقدم الجماعي.
      </div>
    </div>

    <div className="kerala-hero">
      <h3>علي مصليار</h3>
      <p className="kerala-subtitle">قائد روحي ومقاتل حرية</p>
      <p>
        قائد ديني نظم المقاومة ضد السياسات البريطانية في مالابار. 
        تعاليمه ألهمت الآلاف للانضمام إلى حركة الحرية.
      </p>
      <div className="kerala-story">
        <strong>الوحدة في التنوع:</strong> علي مصليار عمل بقرب مع القادة الهندوس، 
        مثبتاً أن القتال من أجل الحرية كان أكبر من الحدود الدينية.
      </div>
    </div>

    <div className="kerala-hero">
      <h3>فاريان كونات كونجا محمد حاجي</h3>
      <p className="kerala-subtitle">قائد ثورة مالابار (1921)</p>
      <p>
        قاد الانتفاضة المناهضة للبريطانيين في مالابار. أسس حكومة مستقلة 
        في نيلامبور لستة أشهر. ثورته كانت واحدة من أهم 
        الحركات المناهضة للاستعمار في كيرالا.
      </p>
      <div className="kerala-story">
        <strong>الموقف الشجاع:</strong> عندما حاصرته القوات البريطانية، اختار حاجي القتال 
        حتى الموت بدلاً من الاستسلام. كلماته الأخيرة كانت صلوات من أجل حرية وطنه الأم.
      </div>
    </div>

    <div className="kerala-hero">
      <h3>تشيمبراسيري تانغال</h3>
      <p className="kerala-subtitle">قائد المتمردين الرئيسي</p>
      <p>
        خطط ونفذ الهجمات، نظم دفاع المجتمع، وقاد إدارة المتمردين خلال انتفاضة مالابار. عمله المباشر ومهاراته الاستراتيجية جعلته قائداً مهماً.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>إي. مويدو مولوي</h3>
      <p className="kerala-subtitle">قائد المؤتمر ومقاتل الحرية</p>
      <p>
        ألهم ونظم العمل المباشر، قاد الاحتجاجات، تحمل سنوات من السجن - نشاطه امتد عبر حركة الخلافة، ساتياغراها الملح، واتركوا الهند. ساعد في إبقاء روح المقاومة المسلحة حية من خلال الكتابات والتجمعات السرية.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>كونارا تانغال</h3>
      <p className="kerala-subtitle">استراتيجي وقائد ميداني</p>
      <p>
        قدم التوجيه التكتيكي والمأوى لمقاتلي الحرية، شارك في التخطيط وتنفيذ الانتفاضات ضد المراكز البريطانية.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>كويابا ثودي محمد كوتي صاحب</h3>
      <p className="kerala-subtitle">داعم ومنظم</p>
      <p>
        مؤسس كلية دار العلوم العربية؛ قدم الدعم اللوجستي والمادي والمعنوي، ساعد المقاتلين المتمردين على الأرض.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>فاداكي فيتيل محمد</h3>
      <p className="kerala-subtitle">قائد، معركة بوكوتور</p>
      <p>
        سكرتير لجنة الخلافة، قاد قوات المابيلا في معركة بوكوتور الكبرى (أغسطس 1921) ضد البريطانيين. حارب بشجاعة واستُشهد، قيادته محفوظة في المنطقة حتى اليوم.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>كونهي قادر</h3>
      <p className="kerala-subtitle">سكرتير الخلافة، تانور</p>
      <p>
        نظم خلايا المقاومة وشارك مباشرة في التمرد المسلح. أُعدم لدوره المحوري.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>كونجي كويا تانغال</h3>
      <p className="kerala-subtitle">رئيس لجنة الخلافة، مالابورام</p>
      <p>
        واحد من المنظمين الرئيسيين للتمرد في مالابورام، قاد المقاتلين مباشرة في الاشتباكات مع القوات البريطانية. أُعدم بعد الانتفاضة.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>كويا تانغال من كوماران بوثور</h3>
      <p className="kerala-subtitle">حاكم إمارة الخلافة</p>
      <p>
        أدار الأراضي التي يسيطر عليها المتمردون، نظم الدفاع والإدارة، وأُعدم بعد قمع الحركة.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>تشيمبراسيري إمبيتشي كويا تانغال</h3>
      <p className="kerala-subtitle">قائد حرب العصابات</p>
      <p>
        قاد العمليات المسلحة وأظهر شجاعة لا تتزعزع في المعركة. أُعدم لأعماله في التمرد.
      </p>
    </div>

    <div className="kerala-hero">
      <h3>بالاكام ثودي أفوكر مصليار</h3>
      <p className="kerala-subtitle">قائد متمرد</p>
      <p>
        قاد المقاتلين المحليين في تمرد مالابار، ضحى بحياته مقاوماً الحكم الاستعماري.
      </p>
    </div>

    <div className="legacy-item">
      <h3>الأثر على حركة حرية كيرالا</h3>
      <ul>
        <li>ثورة مالابار عام 1921 كانت واحدة من أول الانتفاضات الكبرى ضد الحكم البريطاني في جنوب الهند</li>
        <li>القادة المسلمون روجوا للتعليم والإصلاحات الاجتماعية إلى جانب كفاح الحرية</li>
        <li>خلقوا إرثاً من الانسجام الطائفي أثر على مجتمع كيرالا بعد الاستقلال</li>
        <li>استراتيجيات مقاومتهم أثرت على الحركات اللاحقة في جميع أنحاء الهند</li>
      </ul>
    </div>
  </div>
</section>

{/* قصص ملهمة */}
      <section className="stories-section">
        <h2>قصص الشجاعة</h2>
        <div className="stories-grid">
          <div className="story-card">
            <h3>الصداقة التي لا تنكسر</h3>
            <p>
              أصبحت صداقة أشفاق الله خان ورام براساد بسمل مشهورة جداً. عندما سُئل عن 
              الاختلافات الدينية، قال أشفاق: <strong>"ديني هو حب الوطن"</strong>. قبل إعدامهما، طلبا 
              أن يموتا معاً، مما يُظهر أن حب الوطن أقوى من كل الانقسامات.
            </p>
          </div>

          <div className="story-card">
            <h3>فخر الأم</h3>
            <p>
              عندما اعتقل البريطانيون المولانا محمد علي، سُئلت أمه بي أما إن كانت حزينة. 
              أجابت: <strong>"سأكون حزينة لو كان أولادي جبناء. أنا فخورة لأنهم اختاروا السجن 
              بدلاً من خدمة البريطانيين"</strong>. كلماتها ألهمت آلاف الأمهات لإرسال أولادهن للنضال.
            </p>
          </div>

          <div className="story-card">
            <h3>التضحية العظيمة</h3>
            <p>
              أثناء ثورة 1857، عندما قُبض على بهادور شاه ظفر، عُرض عليه المنفى المريح 
              إذا اعتذر. رفض الإمبراطور البالغ من العمر 82 عاماً وقال: <strong>"قد أكون عجوزاً، 
              لكن ضميري ليس كذلك"</strong>. مات في المنفى في رانغون، ولم ير دلهي الحبيبة مرة أخرى.
            </p>
          </div>
        </div>
      </section>

{/* إحصائيات التأثير */}
<section className="statistics-section">
  <h2>بالأرقام: مشاركة المسلمين في النضال من أجل الحرية</h2>
  <div className="stats-grid">
    <div className="stat-card">
      <div className="stat-number">15,000+</div>
      <div className="stat-label">مقاتل مسلم من أجل الحرية</div>
      <div className="stat-description">شارك في حركات مختلفة من 1857 إلى 1947</div>
    </div>

    <div className="stat-card">
      <div className="stat-number">127</div>
      <div className="stat-label">قائد مسلم أُعدم</div>
      <div className="stat-description">شُنق أو أُطلق عليه النار من قبل القوات البريطانية</div>
    </div>

    <div className="stat-card">
      <div className="stat-number">45+</div>
      <div className="stat-label">سنة في السجون البريطانية</div>
      <div className="stat-description">مجموع سجن القادة المسلمين مثل خان عبد الغفار خان</div>
    </div>

    <div className="stat-card">
      <div className="stat-number">1921</div>
      <div className="stat-label">سنة ثورة مالابار</div>
      <div className="stat-description">عندما قاد زعماء مسلمو كيرالا واحدة من أكبر الثورات في الهند</div>
    </div>
  </div>
</section>

{/* المزيد من القصص الملهمة */}
<section className="detailed-stories">
  <h2>قصص شجاعة لم تُروَ</h2>
  
  <div className="story-collection">
    
    {/* فاريامكونا كونجا حماد حاجي - ملك مالابار */}
    <div className="text-center">
      <h3>🏰 الملك الذي لم ينحنِ أبداً</h3>
      <h4>فاريامكونا كونجا حماد حاجي (1877-1922)</h4>
      
      <div className="text-center">
        <div className="story-chapter">
          <h5>المحارب الصغير (1896)</h5>
          <p>
            في عمر 20 عاماً فقط، قاد كونجا حماد حاجي معركته الأولى في تشمبراسري عندما 
            طرد البريطانيون مئات المزارعين في يوم واحد. مات 94 مقاتلاً من أجل الحرية
            في ذلك اليوم، لكن الحاجي الصغير نجا. اعتقد البريطانيون أن كل الثوار قد ماتوا 
            وتركوا ساحة المعركة - دون أن يعلموا أن هذا الشاب سيعود ليطاردهم بعد 25 عاماً.
          </p>
        </div>

        <div className="story-chapter">
          <h5>خمس سنوات في مكة (1899-1905)</h5>
          <p>
            للهرب من الاعتقال البريطاني، أُرسل الحاجي إلى <strong>مكة بحجة الحج</strong>. لمدة خمس 
            سنوات، درس في المدينة المقدسة، وتعلم العربية والإنجليزية والأردية، وعمل 
            في التجارة في بومباي. لم يعلم البريطانيون أنهم يسمحون لعدوهم المستقبلي 
            بكسب الخبرة والعلاقات الدولية.
          </p>
        </div>

        <div className="story-chapter">
          <h5>الحكومة الموازية (أغسطس 1921)</h5>
          <p>
            عندما بدأت ثورة مالابار، أعلن الحاجي <strong>"مالايالا راجيام"</strong> (مملكة كيرالا) 
            في 28 أغسطس 1921. سيطر على <strong>2000 ميل مربع</strong> من الأراضي - 40% من جنوب مالابار! 
            أطلق على نفسه ألقاباً:
          </p>
          <ul className="royal-titles">
            <li>🤴 <strong>ملك الهندوس</strong></li>
            <li>👑 <strong>أمير المسلمين</strong></li>
            <li>⚔️ <strong>عقيد جيش الخلافة</strong></li>
          </ul>
        </div>

        <div className="story-chapter">
          <h5>عدالة الحاكم</h5>
          <p>
            على عكس قادة الثوار العاديين، أدار الحاجي <strong>حكومة متطورة</strong>:
          </p>
          <ul>
            <li>📋 <strong>أصدر جوازات سفر</strong> للسفر داخل أراضيه</li>
            <li>💰 <strong>أنشأ نظام ضرائب</strong> لكنه أعفى الناس لعام 1921 بسبب معاناتهم</li>
            <li>⚖️ <strong>عيّن ضباط إنفاذ قانون</strong> يضمنون العدالة المتساوية لجميع الطوائف</li>
            <li>🏛️ <strong>أنشأ محاكم</strong> حيث كان يستمع شخصياً للقضايا</li>
          </ul>
          
          <div className="justice-story">
            <strong>حادثة البنك:</strong> عندما نهب مقاتلون مارقون بنك نامبوثيري 
            في مانجيري، أحاطت قوات الحاجي بالبنك فوراً و<strong>أعادت كل شيء مسروق</strong> 
            إلى أصحابه، مما يثبت التزامه بالعدالة بدلاً من الفوضى.
          </div>
        </div>

        <div className="story-chapter">
          <h5>الوقفة الأخيرة (يناير 1922)</h5>
          <p>
            عندما قُبض عليه بعد 30 دقيقة من المصارعة الشرسة، طلب الحاجي طلباً أخيراً 
            من العقيد همفريز: <strong>"أطلق عليّ النار من الأمام، بعيون غير مغطاة ويدين حرتين، 
            حتى أسقط على وجهي، محتضناً أرض وطني."</strong> 
          </p>
          <p className="dramatic-end">
            البريطانيون، خوفاً من نمو أسطورته، <strong>أحرقوا جثته ودمروا كل السجلات</strong> 
            عن حكمه. حتى أنهم عرضوا مكافآت على أي شخص يساعد في محو أدلة الحكومة 
            الموازية التي تجرأت على تحدي الإمبراطورية البريطانية العظيمة.
          </p>
        </div>
      </div>
    </div>

    {/* علي مصلي - القائد الروحي */}
    <div className="text-center">
      <h3>🕌 العالم الذي أصبح جنرالاً</h3>
      <h4>علي مصلي (1862-1922)</h4>
      
      <div className="story-narrative">
        <p>
          قضى علي مصلي <strong>سبع سنوات يدرس في مكة</strong> تحت إشراف علماء إسلاميين مشهورين، 
          وأصبح واحداً من أكثر القادة الدينيين تعلماً في عصره. لكن عندما <strong>قُتل أخوه 
          وعدة أفراد من العائلة في 1896</strong>، تحول هذا العالم المسالم إلى قائد ثوري.
        </p>

        <div className="turning-point">
          <h5>اللحظة التي غيرت كل شيء</h5>
          <p>
            في <strong>20 أغسطس 1921</strong>، عندما داهمت الشرطة البريطانية مسجد مامبورام في 
            تيرورانغادي وانتشرت إشاعات أنهم <strong>دنسوا المبنى المقدس</strong>، علم علي مصلي 
            أنه لا عودة إلى الوراء. في غضون ساعات، <strong>أحاط 2000 مابيلا</strong> بمركز الشرطة، 
            وبدأت الثورة.
          </p>
        </div>

        <div className="final-interview">
          <h5>المقابلة الأخيرة</h5>
          <p>
            قبل شهور من إعدامه، أجرى الصحفي س.ك. محمد يعقوب مقابلة مع 
            علي مصلي في سجن كويمباتور في <strong>7 ديسمبر 1921</strong>. صادر البريطانيون 
            <strong>350 روبية</strong> من صندوقه الشخصي لكنهم أظهروا فقط <strong>17 روبية</strong> في محاكمته
            - الباقي "اختفى" بشكل غامض.
          </p>
          <blockquote>
            "إذا تمكنت من استرداد تلك الأموال المسروقة من السلطات، وزعها على الفقراء. 
            هذه أمنيتي الأخيرة."
          </blockquote>
          <p>
            <strong>شُنق في 21 فبراير 1922</strong>، مختاراً الموت بدلاً من التسوية مع الحكم الاستعماري.
          </p>
        </div>
      </div>
    </div>

    {/* الأبطال المنسيون في تشيتاغونغ */}
    <div className="epic-story">
      <h3>⚔️ محاربو تشيتاغونغ المنسيون</h3>
      <h4>مقاتلون مسلمون من أجل الحرية في أعظم غارة في البنغال</h4>
      
      <div className="chittagong-story">
        <p>
          بينما يتذكر التاريخ <strong>سوريا سن</strong> كعقل مدبر لغارة مخزن أسلحة تشيتاغونغ، 
          قلة يعرفون عن <strong>الثوريين المسلمين</strong> الذين حاربوا إلى جانبه، مضحين 
          بحياتهم من أجل حرية الهند.
        </p>

        <div className="raid-details">
          <h5>الخطة الجريئة (18 أبريل 1930)</h5>
          <p>
            في ليلة 18 أبريل 1930، نفذت مجموعة من الثوريين - هندوس ومسلمين - واحدة 
            من <strong>أكثر الهجمات جرأة</strong> على مخازن أسلحة البريطانيين. شمل المقاتلون المسلمون:
          </p>
          <ul>
            <li><strong>رفاق أنانتا سنغ المسلمون</strong> الذين ساعدوا في قطع خطوط الهاتف</li>
            <li><strong>شباب مسلمون محليون</strong> وفروا بيوت آمنة للثوريين</li>
            <li><strong>عمال سكك حديد مسلمون</strong> عطلوا شبكات الاتصال البريطانية</li>
          </ul>
        </div>

        <div className="torture-resistance">
          <h5>التعذيب الذي فشل في كسرهم</h5>
          <p>
            عندما قُبض عليهم، تعرض هؤلاء الثوريون المسلمون لـ<strong>تعذيب مروع</strong> 
            من قبل الشرطة البريطانية. ضُربوا بقضبان حديدية، ونُزعت أظافرهم، 
            وعُلقوا مقلوبين لساعات. ومع ذلك <strong>لم يكشف أحد منهم معلومات</strong> 
            عن رفاقهم الهندوس، مما يثبت أن رابطتهم تجاوزت الحدود الدينية.
          </p>
        </div>

        <div className="sacrifice-legacy">
          <h5>التضحية العظمى</h5>
          <p>
            مات عدة ثوريين مسلمين في الحجز البريطاني، أسماؤهم <strong>ضاعت في التاريخ</strong> 
            لكن تضحيتهم يتذكرها الناجون. تعرضت عائلاتهم للمضايقة، وصُودرت 
            ممتلكاتهم، ومع ذلك لم يندموا أبداً على اختيارهم للقتال من أجل <strong>بهارات ماتا</strong>.
          </p>
        </div>
      </div>
    </div>

    {/* بسم الله خان - نضال الموسيقار */}
    <div className="epic-story">
      <h3>🎵 الشهناي الذي بشّر بالحرية</h3>
      <h4>صراعات الأستاذ بسم الله خان المخفية</h4>
      
      <div className="musician-story">
        <p>
          في <strong>15 أغسطس 1947</strong>، عندما رُفع العلم الهندي ثلاثي الألوان في القلعة الحمراء، 
          ملأت <strong>نغمات الشهناي العذبة</strong> الهواء، عزفها الأستاذ بسم الله خان في <strong>راغ كافي</strong>. 
          لكن قلة يعرفون القصة غير المروية وراء هذا الأداء التاريخي.
        </p>

        <div className="pre-independence">
          <h5>الأداءات السرية</h5>
          <p>
            أثناء النضال من أجل الحرية، عزف بسم الله خان سراً في <strong>اجتماعات الكونغرس</strong> 
            و<strong>التجمعات السرية</strong>، وأصبحت موسيقاه <strong>موسيقى المقاومة التصويرية</strong>. 
            السلطات البريطانية، غير مدركة لقوة الموسيقى في توحيد الناس، لم تشك أبداً 
            أن هذا الموسيقار المسلم المتواضع كان يلهم الثوريين في شمال الهند.
          </p>
        </div>

        <div className="independence-day">
          <h5>اللحظة التاريخية</h5>
          <p>
            <strong>اختار بانديت نهرو شخصياً</strong> بسم الله خان للعزف في حفل الاستقلال. 
            وهو يعزف من أسوار القلعة الحمراء، <strong>انسابت الدموع على وجهه</strong> - 
            ليس فقط دموع فرح، بل تذكار لكل مقاتلي الحرية الذين لم يعيشوا لرؤية هذا اليوم.
          </p>
          <blockquote>
            "لم أعزف فقط للأحياء، بل لكل شهيد جعلت تضحيته هذه اللحظة ممكنة. 
            كل نغمة كانت دعاء لأرواحهم."
          </blockquote>
        </div>

        <div className="later-struggles">
          <h5>السنوات الأخيرة للبطل المنسي</h5>
          <p>
            رغم حصوله على بهارات راتنا والشهرة الدولية، مات بسم الله خان في <strong>ضائقة مالية</strong>. 
            أمنيته الأخيرة - أن يعزف في بوابة الهند للشهداء - بقيت بلا تحقيق. بعد موته، 
            <strong>صهر أفراد عائلته شهناياته الفضية لكسب المال</strong>، رمزاً لمدى سرعة نسيان الأمة لأبطالها.
          </p>
        </div>
      </div>
    </div>

    {/* أم الثورة */}
    <div className="epic-story">
      <h3>👸 الأم التي ألهمت حركة</h3>
      <h4>بي أما - السيدة الحديدية وراء حركة الخلافة</h4>
      
      <div className="mother-story">
        <p>
          <strong>عابدي بانو بيغم</strong>، المعروفة باسم بي أما، كانت أم <strong>محمد علي وشوكت علي</strong> - 
          الأخوين علي المشهورين. لكنها كانت أكثر من مجرد أم؛ كانت <strong>القوة الدافعة</strong> 
          وراء واحدة من أكبر الحركات الجماهيرية في الهند.
        </p>

        <div className="inspiring-sons">
          <h5>تعليم الأم</h5>
          <p>
            عندما تردد أولادها في الانضمام إلى النضال الخطير من أجل الحرية، خوفاً على 
            حياتهم وعائلاتهم، أعطتهم بي أما درساً لم ينسوه أبداً:
          </p>
          <blockquote>
            "أنجبت أسوداً، وليس خرافاً. إذا كنتم تخافون من البريطانيين، فلستم أولادي. 
            أفضل أن أبكي على قبوركم كشهداء من أن أعيش في عار معكم كجبناء."
          </blockquote>
        </div>

        <div className="leading-movement">
          <h5>القائدة في حد ذاتها</h5>
          <p>
            عندما <strong>سُجن كلا ولديها من قبل البريطانيين</strong>، لم تتراجع بي أما. بدلاً من ذلك، 
            تولت عملهما، وخاطبت <strong>تجمعات ضخمة في كل أنحاء الهند</strong>. صُدمت السلطات البريطانية 
            لرؤية آلاف الناس - رجال ونساء، شباب وكبار - متعلقين بكل كلمة من هذه 
            <strong>المرأة المسلمة العجوز</strong>.
          </p>
          <p>
            كانت خطاباتها قوية جداً لدرجة أن <strong>البريطانيين اعتبروها أخطر</strong> من كثير 
            من القادة الرجال، لأنها تستطيع تحريك <strong>الجماهير المسلمة</strong> كلا أحد غيرها.
          </p>
        </div>

        <div className="final-sacrifice">
          <h5>فخر الأم الأعظم</h5>
          <p>
            عندما جاءت أنباء أن كلا ولديها قد يُشنقان، سأل المراسلون بي أما عن شعورها. 
            أصبح ردها أسطورياً:
          </p>
          <blockquote>
            "إذا شُنق أولادي لمحاربة البريطانيين، ستعرف كل أم في الهند أنها أيضاً 
            تستطيع أن تلد أبطالاً. موتهما سيلهم ألف ولد آخر ليحلوا مكانهما."
          </blockquote>
          <p>
            أصبحت هذه <strong>المرأة البالغة من العمر 73 عاماً</strong> رمزاً لـ<strong>تضحية الأمومة</strong> 
            للوطن، ملهمة عائلات لا تُحصى للانضمام إلى النضال من أجل الحرية.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


{/* Legacy Section */}
      <section className="legacy-section">
        <h2>إرثهم الدائم</h2>
        <div className="text-center">
          <div className="legacy-item">
            <h3>🕊️ العلمانية</h3>
            <p>هؤلاء القادة أظهروا أن حب الوطن ليس له دين. أمثلتهم وضعت أساس هوية الهند العلمانية.</p>
          </div>
          <div className="legacy-item">
            <h3>🤝 الوحدة</h3>
            <p>الوحدة الهندوسية الإسلامية في نضال الحرية خلقت روابط تجاوزت الاختلافات الدينية.</p>
          </div>
          <div className="legacy-item">
            <h3>⚡ الإلهام</h3>
            <p>شجاعتهم تستمر في إلهام الأجيال الجديدة للوقوف من أجل العدالة والمساواة.</p>
          </div>
          <div className="legacy-item">
            <h3>🏛️ الديمقراطية</h3>
            <p>رؤيتهم لهند شاملة ساهمت في المبادئ الديمقراطية المكرسة في دستورنا.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          "الحرية لا تستحق أن نحصل عليها إذا لم تتضمن حرية ارتكاب الأخطاء." - المهاتما غاندي
        </p>
        <p>
          دعونا نتذكر ونكرم كل الذين ضحوا من أجل حريتنا، بغض النظر عن إيمانهم أو طائفتهم أو عقيدتهم. إرثهم يعيش في الهند التي نعتز بها اليوم.
        </p>
      </footer>
    </div>
  );
}
