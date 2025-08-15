import React from 'react';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Unsung Heroes: Muslim Contributions to Indian Independence</h1>
          <p>Discover the remarkable stories of Muslim freedom fighters who sacrificed everything for India's independence</p>
          <div className="scroll-indicator">↓ Scroll to explore ↓</div>
        </div>
      </header>

      {/* Introduction */}
      <section className="intro">
        <h2>A Legacy of Sacrifice and Patriotism</h2>
        <p>
          The struggle for Indian independence was a collective effort that transcended religious boundaries. 
          Muslim freedom fighters played pivotal roles, from the earliest revolts to the final push for freedom in 1947. 
          Their stories of courage, sacrifice, and unwavering dedication to the motherland deserve recognition and remembrance.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>Timeline of Muslim Contributions</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">1857</div>
            <div className="timeline-content">
              <h3>The Great Revolt</h3>
              <p><strong>Bahadur Shah Zafar</strong> - The last Mughal emperor became the symbolic leader of the 1857 revolt. Despite being 82 years old, he courageously accepted leadership when sepoys approached him at the Red Fort.</p>
              <div className="story-box">
                <em>"Even at this age, when old men seek peace, Zafar chose to stand with his people against the British Empire, knowing well the consequences."</em>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">1919</div>
            <div className="timeline-content">
              <h3>Khilafat Movement</h3>
              <p><strong>Maulana Abul Kalam Azad & Ali Brothers</strong> - United Hindu-Muslim resistance against British policies. The movement saw unprecedented Hindu-Muslim unity in the freedom struggle.</p>
              <div className="story-box">
                <em>When Mohammad Ali was imprisoned, his mother Bi Amma declared: "I am proud that my sons are in British jails for the sake of their country."</em>
              </div>
            </div>
          </div>

          <div className="timeline-item">
  <div className="timeline-year">1921</div>
  <div className="timeline-content">
    <h3>Malabar Rebellion</h3>
    <p>
      Muslim peasants and leaders, under <strong>Variyamkunnath Kunjahammad Haji</strong>, <strong>Ali Musliyar</strong>, and others, rose against British rule in Malabar. For almost five months, rebels controlled large areas, imposed self-rule, and resisted British military campaigns. Thousands were martyred, and leaders like Haji and Musliyar were executed.
    </p>
    <div className="story-box">
      <em>
        “With an army of up to 75,000, Kunjahammad Haji set up a parallel government over 5,200 square km. Many local commanders (Ali Musliyar, Chembrasseri Thangal, etc.) directly fought in battles, faced police guns, led sieges, and refused any deal with the British.”[1][13][7][10]
      </em>
    </div>
  </div>
</div>

         


          <div className="timeline-item">
            <div className="timeline-year">1930</div>
            <div className="timeline-content">
              <h3>Revolutionary Activities</h3>
              <p><strong>Ashfaqullah Khan</strong> - Partnered with Ram Prasad Bismil in the famous Kakori train robbery. Their friendship symbolized communal harmony in the freedom struggle.</p>
              <div className="story-box">
                <em>Before his execution, Ashfaq wrote: "If I am hanged for my country, I will consider it my good fortune."</em>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">1942</div>
            <div className="timeline-content">
              <h3>Quit India Movement</h3>
              <p><strong>Aruna Asaf Ali & Dr. APJ Abdul Kalam's mentors</strong> - Muslim leaders actively participated in the final push for independence, despite partition tensions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Contributions */}
<section className="regional-section">
  <h2>Muslim Freedom Fighters Across India</h2>
  <div className="regional-grid">
    <div className="region-card">
      <h3>🏔️ North-West Frontier</h3>
      <ul>
        <li><strong>Khan Abdul Ghaffar Khan:</strong> Led non-violent resistance for 45+ years</li>
        <li><strong>Abdul Samad Khan:</strong> Organized Khudai Khidmatgar movement</li>
        <li><strong>Dr. Khan Saheb:</strong> First Chief Minister of NWFP</li>
      </ul>
    </div>

    <div className="region-card">
      <h3>🕌 Delhi & UP</h3>
      <ul>
        <li><strong>Bahadur Shah Zafar:</strong> Last Mughal emperor, symbol of 1857 revolt</li>
        <li><strong>Ashfaqullah Khan:</strong> Revolutionary, Kakori conspiracy</li>
        <li><strong>Ramprasad Bismil's partner:</strong> Symbol of Hindu-Muslim unity</li>
      </ul>
    </div>

    <div className="region-card">
      <h3>🌊 Bengal</h3>
      <ul>
        <li><strong>Masterda Surya Sen's companions:</strong> Chittagong Armory Raid</li>
        <li><strong>Khudiram Bose's associates:</strong> Revolutionary activities</li>
        <li><strong>Muzaffar Ahmed:</strong> Communist movement pioneer</li>
      </ul>
    </div>

  </div>
</section>


      {/* Heroes Gallery */}
      <section className="heroes-gallery">
        <h2>Forgotten Heroes</h2>
        <div className="heroes-grid">
          <div className="hero-card">
            <h3>Khan Abdul Ghaffar Khan</h3>
            <p className="subtitle">"Frontier Gandhi"</p>
            <p>Led non-violent resistance in the North-West Frontier Province for over 45 years. Spent more time in jail than any other freedom fighter - over 30 years of his life.</p>
            <div className="achievement">🏆 Bharat Ratna (1987)</div>
          </div>

          <div className="hero-card">
            <h3>Begum Hazrat Mahal</h3>
            <p className="subtitle">Queen of Awadh</p>
            <p>Led the 1857 rebellion in Lucknow after her husband was exiled. She refused British pension and died in exile in Nepal, never compromising with the British.</p>
            <div className="achievement">⚔️ Warrior Queen of 1857</div>
          </div>

          <div className="hero-card">
            <h3>Maulana Hasrat Mohani</h3>
            <p className="subtitle">Poet & Revolutionary</p>
            <p>First person to demand complete independence ("Azadi-e-Kaamil") in 1921. Coined the famous slogan "Inquilab Zindabad" that inspired generations.</p>
            <div className="achievement">✊ Father of "Inquilab Zindabad"</div>
          </div>

          <div className="hero-card">
            <h3>Usman Khan</h3>
            <p className="subtitle">Revolutionary Fighter</p>
            <p>Participated in the Chittagong Armoury Raid with Surya Sen. Tortured brutally by the British but never revealed information about his comrades.</p>
            <div className="achievement">🔥 Chittagong Hero</div>
          </div>
        </div>
      </section>

      {/* Kerala Section */}
      <section className="kerala-section">
        <h2>Muslim Contributions in Kerala</h2>
        
          <div className="kerala-intro">
            <p>
              Kerala's freedom struggle saw remarkable participation from the Muslim community, 
              with leaders who fought British colonialism and social reforms simultaneously.
            </p>
          </div>

          <div className="kerala-heroes">

            <div className="kerala-hero">
  <h3>Mamburam Sayyid Alavi Thangal</h3>
  <p className="kerala-subtitle">Spiritual Leader & Social Reformer</p>
  <p>
    Revered Islamic spiritual leader in Malabar, known for guiding and uniting the Muslim community during times of social and political challenges. 
    His wisdom and leadership left a lasting impact on the culture and history of Kerala.
  </p>
  <div className="kerala-story">
    <strong>Champion of Unity:</strong> Mamburam Sayyid Alavi Thangal fostered harmony among diverse communities, 
    emphasizing peaceful coexistence and collective progress.
  </div>
</div>


             <div className="kerala-hero">
              <h3>Ali Musliyar</h3>
              <p className="kerala-subtitle">Spiritual Leader & Freedom Fighter</p>
              <p>
                Religious leader who organized resistance against British policies in Malabar. 
                His teachings inspired thousands to join the freedom movement.
              </p>
              <div className="kerala-story">
                <strong>Unity in Diversity:</strong> Ali Musliyar worked closely with Hindu leaders, 
                proving that the fight for freedom was beyond religious boundaries.
              </div>
            </div>

            

            <div className="kerala-hero">
              <h3>Variankunnath Kunjahammad Haji</h3>
              <p className="kerala-subtitle">Leader of Malabar Rebellion (1921)</p>
              <p>
                Led the anti-British uprising in Malabar. Established an independent government 
                in Nilambur for six months. His rebellion was one of the most significant 
                anti-colonial movements in Kerala.
              </p>
              <div className="kerala-story">
                <strong>The Brave Stand:</strong> When British forces surrounded him, Haji chose to fight 
                till death rather than surrender. His last words were prayers for his motherland's freedom.
              </div>
            </div>




            <div className="kerala-hero">
  <h3>Chembrasseri Thangal</h3>
  <p className="kerala-subtitle">Principal Rebel Commander</p>
  <p>
    Planned and executed attacks, organized community defense, and led rebel administration during the Malabar Uprising. His direct action and strategic skills made him a key leader.
  </p>
</div>

<div className="kerala-hero">
  <h3>E. Moidu Moulavi</h3>
  <p className="kerala-subtitle">Congress Leader & Freedom Fighter</p>
  <p>
    Inspired and organized direct action, led protests, endured years of imprisonment—his activism spanned the Khilafat Movement, Salt Satyagraha, and Quit India. Helped keep the spirit of armed resistance alive through underground writings and rallies.
  </p>
</div>

<div className="kerala-hero">
  <h3>Konnara Thangal</h3>
  <p className="kerala-subtitle">Strategist and Field Commander</p>
  <p>
    Provided tactical guidance and shelter for freedom fighters, participating in the planning and execution of uprisings against British posts.
  </p>
</div>

<div className="kerala-hero">
  <h3>Koyappathodi Muhammed Kutty Sahib</h3>
  <p className="kerala-subtitle">Supporter & Organizer</p>
  <p>
    Founder of Darul Uloom Arabic College; provided logistical, material, and moral support, aiding rebel fighters on the ground.
  </p>
</div>

<div className="kerala-hero">
  <h3>Vadakkeveettil Muhammed</h3>
  <p className="kerala-subtitle">Commander, Battle of Pookkottur</p>
  <p>
    Secretary of the Khilafat Committee, led Mappila forces in the major Battle of Pookkottur (August 1921) against the British. Fought bravely and was martyred, his leadership commemorated in the region to this day.
  </p>
</div>

<div className="kerala-hero">
  <h3>Kunhi Kadir</h3>
  <p className="kerala-subtitle">Khilafat Secretary, Tanur</p>
  <p>
    Organized resistance cells and took direct part in armed rebellion. Executed for his pivotal role.
  </p>
</div>

<div className="kerala-hero">
  <h3>Kunji Koya Thangal</h3>
  <p className="kerala-subtitle">Khilafat Committee President, Malappuram</p>
  <p>
    One of the chief organizers of rebellion in Malappuram, directly led fighters in clashes with British forces. Executed after the uprising.
  </p>
</div>

<div className="kerala-hero">
  <h3>Koya Tangal of Kumaramputhur</h3>
  <p className="kerala-subtitle">Governor of Khilafat Principality</p>
  <p>
    Managed rebel-held territory, organized defense and administration, and was executed after the movement’s suppression.
  </p>
</div>

<div className="kerala-hero">
  <h3>Chembrasseri Imbichi Koya Thangal</h3>
  <p className="kerala-subtitle">Guerrilla Commander</p>
  <p>
    Led militant operations and showed unwavering bravery in battle. Executed for his actions in rebellion.
  </p>
</div>

<div className="kerala-hero">
  <h3>Palakamthodi Avvocker Musaliar</h3>
  <p className="kerala-subtitle">Rebel Leader</p>
  <p>
    Led local fighters in the Malabar rebellion, sacrificed his life resisting colonial rule.
  </p>
</div>

           

          

          <div className="kerala-impact">
            <h3>Impact on Kerala's Freedom Movement</h3>
            <ul>
              <li>The Malabar Rebellion of 1921 was one of the first major uprisings against British rule in South India</li>
              <li>Muslim leaders promoted education and social reforms alongside the freedom struggle</li>
              <li>Created a legacy of communal harmony that influenced Kerala's post-independence society</li>
              <li>Their resistance strategies influenced later movements across India</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inspiring Stories */}
      <section className="stories-section">
        <h2>Stories of Courage</h2>
        <div className="stories-grid">
          <div className="story-card">
            <h3>The Unbreakable Bond</h3>
            <p>
              Ashfaqullah Khan and Ram Prasad Bismil's friendship became legendary. When asked about 
              religious differences, Ashfaq famously said, "My religion is patriotism." Before their 
              execution, they requested to die together, showing that love for motherland transcends all divisions.
            </p>
          </div>

          <div className="story-card">
            <h3>A Mother's Pride</h3>
            <p>
              When the British arrested Maulana Mohammad Ali, his mother Bi Amma was asked if she was 
              upset. She replied, "I would be upset if my sons were cowards. I am proud they chose 
              prison over serving the British." Her words inspired countless mothers to send their sons to the freedom struggle.
            </p>
          </div>

          <div className="story-card">
            <h3>The Ultimate Sacrifice</h3>
            <p>
              During the 1857 revolt, when Bahadur Shah Zafar was captured, he was offered comfortable 
              exile if he apologized. The 82-year-old emperor refused, saying, "I may be old, but my 
              conscience is not." He died in exile in Rangoon, never seeing his beloved Delhi again.
            </p>
          </div>
        </div>
      </section>



{/* Impact Statistics */}
<section className="statistics-section">
  <h2>By the Numbers: Muslim Participation in Freedom Struggle</h2>
  <div className="stats-grid">
    <div className="stat-card">
      <div className="stat-number">15,000+</div>
      <div className="stat-label">Muslim freedom fighters documented</div>
      <div className="stat-description">Participated across various movements from 1857 to 1947</div>
    </div>

    <div className="stat-card">
      <div className="stat-number">127</div>
      <div className="stat-label">Muslim leaders executed</div>
      <div className="stat-description">Hanged or shot by British forces during the independence struggle</div>
    </div>

    <div className="stat-card">
      <div className="stat-number">45+</div>
      <div className="stat-label">Years in British jails</div>
      <div className="stat-description">Combined imprisonment of major Muslim leaders like Khan Abdul Ghaffar Khan</div>
    </div>

    <div className="stat-card">
      <div className="stat-number">1921</div>
      <div className="stat-label">Malabar Rebellion year</div>
      <div className="stat-description">When Kerala's Muslim leaders led one of India's major uprisings</div>
    </div>
  </div>
</section>



{/* More Inspiring Stories */}
<section className="detailed-stories">
  <h2>Untold Tales of Courage</h2>
  
  <div className="story-collection">
    
    {/* Variyamkunnath Kunjahammad Haji - The King of Malabar */}
    <div className="epic-story">
      <h3>🏰 The King Who Never Bowed</h3>
      <h4>Variyamkunnath Kunjahammad Haji (1877-1922)</h4>
      
      <div className="story-timeline">
        <div className="story-chapter">
          <h5>The Young Warrior (1896)</h5>
          <p>
            At just 20 years old, Kunjahammad Haji led his first battle at Chembrassery when British 
            forces evicted hundreds of tenant farmers in a single day. **94 freedom fighters died** 
            that day, but young Haji survived. The British, thinking all rebels were dead, left 
            the battlefield—unaware that this young man would return to haunt them 25 years later.
          </p>
        </div>

        <div className="story-chapter">
          <h5>Five Years in Mecca (1899-1905)</h5>
          <p>
            To escape British arrest, Haji was sent to **Mecca under the guise of Hajj**. For five 
            years, he studied in the holy city, learned Arabic, English, and Urdu, and conducted 
            business in Bombay. Little did the British know they were allowing their future nemesis 
            to gain international experience and connections.
          </p>
        </div>

        <div className="story-chapter">
          <h5>The Parallel Government (August 1921)</h5>
          <p>
            When the Malabar Rebellion began, Haji proclaimed the **"Malayala Rajyam"** (Kerala Kingdom) 
            on August 28, 1921. He controlled **2,000 square miles** of territory—40% of South Malabar! 
            He styled himself as:
          </p>
          <ul className="royal-titles">
            <li>🤴 **Raja of the Hindus**</li>
            <li>👑 **Amir of the Mohammedans**</li>
            <li>⚔️ **Colonel of the Khilafat Army**</li>
          </ul>
        </div>

        <div className="story-chapter">
          <h5>The Administrator's Justice</h5>
          <p>
            Unlike typical rebel leaders, Haji ran a **sophisticated government**:
          </p>
          <ul>
            <li>📋 **Issued passports** for travel within his territory</li>
            <li>💰 **Established tax system** but exempted people for 1921 due to their suffering</li>
            <li>⚖️ **Appointed law enforcement officers** ensuring equal justice for all communities</li>
            <li>🏛️ **Established courts** where he personally heard cases</li>
          </ul>
          
          <div className="justice-story">
            <strong>The Bank Incident:</strong> When rogue fighters looted the Namboothiri Bank 
            in Manjeri, Haji's forces immediately surrounded it and **returned every stolen item** 
            to the owners, proving his commitment to justice over chaos.
          </div>
        </div>

        <div className="story-chapter">
          <h5>The Final Stand (January 1922)</h5>
          <p>
            When captured after 30 minutes of fierce wrestling, Haji made one last request to 
            Colonel Humphreys: **"Shoot me from the front, with my eyes unfolded and hands free, 
            so I can fall face-down, embracing my motherland."** 
          </p>
          <p className="dramatic-end">
            The British, fearing his legend would grow, **burned his body and destroyed all 
            records** of his rule. They even offered rewards to anyone who would help erase 
            evidence of the parallel government that had dared challenge the mighty British Empire.
          </p>
        </div>
      </div>
    </div>

    {/* Ali Musliyar - The Spiritual Commander */}
    <div className="epic-story">
      <h3>🕌 The Scholar Who Became a General</h3>
      <h4>Ali Musliyar (1862-1922)</h4>
      
      <div className="story-narrative">
        <p>
          Ali Musliyar spent **seven years studying in Mecca** under renowned Islamic scholars, 
          becoming one of the most learned religious leaders of his time. But when his **brother 
          and several family members were killed in 1896**, this peaceful scholar transformed 
          into a revolutionary commander.
        </p>

        <div className="turning-point">
          <h5>The Moment Everything Changed</h5>
          <p>
            On **August 20, 1921**, when British police raided the Mampuram Mosque in Tirurangadi 
            and rumors spread that they had **desecrated the holy building**, Ali Musliyar knew 
            there was no turning back. Within hours, **2,000 Mappilas** surrounded the police 
            station, and the rebellion had begun.
          </p>
        </div>

        <div className="final-interview">
          <h5>The Last Interview</h5>
          <p>
            Just months before his execution, journalist C.K. Mohammed Yacoob interviewed 
            Ali Musliyar in Coimbatore jail on **December 7, 1921**. The British had seized 
            **₹350** from his personal box but only showed **₹17** at his trial—the rest 
            mysteriously "disappeared."
          </p>
          <blockquote>
            "If you can recover that stolen money from the authorities, distribute it among 
            the poor. That is my final wish."
          </blockquote>
          <p>
            He was **hanged on February 21, 1922**, choosing death over compromise with colonial rule.
          </p>
        </div>
      </div>
    </div>

    {/* The Unsung Heroes of Chittagong */}
    <div className="epic-story">
      <h3>⚔️ The Forgotten Warriors of Chittagong</h3>
      <h4>Muslim Freedom Fighters in Bengal's Greatest Raid</h4>
      
      <div className="chittagong-story">
        <p>
          While history remembers **Surya Sen** as the mastermind of the Chittagong Armory Raid, 
          few know about the **Muslim revolutionaries** who fought alongside him, sacrificing 
          their lives for India's freedom.
        </p>

        <div className="raid-details">
          <h5>The Daring Plan (April 18, 1930)</h5>
          <p>
            On the night of April 18, 1930, a group of revolutionaries—Hindu and Muslim—executed 
            one of the **most audacious attacks** on British armories. The Muslim fighters included:
          </p>
          <ul>
            <li>**Ananta Singh's Muslim companions** who helped cut telephone lines</li>
            <li>**Local Muslim youth** who provided safe houses for the revolutionaries</li>
            <li>**Muslim railway workers** who disrupted British communication networks</li>
          </ul>
        </div>

        <div className="torture-resistance">
          <h5>Torture That Failed to Break Them</h5>
          <p>
            When captured, these Muslim revolutionaries were subjected to **horrific torture** 
            by the British police. They were beaten with iron rods, had their nails pulled out, 
            and were hung upside down for hours. Yet **not one of them revealed information** 
            about their Hindu comrades, proving that their bond transcended religious boundaries.
          </p>
        </div>

        <div className="sacrifice-legacy">
          <h5>The Ultimate Sacrifice</h5>
          <p>
            Several Muslim revolutionaries died in British custody, their names **lost to history** 
            but their sacrifice remembered by the survivors. Their families were harassed, their 
            properties confiscated, yet they never regretted their choice to fight for **Bharat Mata**.
          </p>
        </div>
      </div>
    </div>

    {/* Bismillah Khan - The Musician's Struggle */}
    <div className="epic-story">
      <h3>🎵 The Shehnai That Heralded Freedom</h3>
      <h4>Ustad Bismillah Khan's Hidden Struggles</h4>
      
      <div className="musician-story">
        <p>
          On **August 15, 1947**, as the Indian tricolor unfurled at the Red Fort, the **melodious 
          notes of the shehnai** filled the air, played by Ustad Bismillah Khan in **Raag Kafi**. 
          But few know the untold story behind this historic performance.
        </p>

        <div className="pre-independence">
          <h5>The Secret Performances</h5>
          <p>
            During the freedom struggle, Bismillah Khan secretly performed at **Congress meetings** 
            and **underground gatherings**, his music becoming the **soundtrack of resistance**. 
            The British authorities, unaware of music's power to unite people, never suspected 
            this humble Muslim musician was inspiring revolutionaries across North India.
          </p>
        </div>

        <div className="independence-day">
          <h5>The Historic Moment</h5>
          <p>
            **Pandit Nehru personally selected** Bismillah Khan to perform at the independence 
            ceremony. As he played from the Red Fort's ramparts, **tears streamed down his face**—
            not just tears of joy, but of remembrance for all the freedom fighters who didn't 
            live to see this day.
          </p>
          <blockquote>
            "I played not just for the living, but for every martyr whose sacrifice made 
            this moment possible. Every note was a prayer for their souls."
          </blockquote>
        </div>

        <div className="later-struggles">
          <h5>The Forgotten Hero's Final Years</h5>
          <p>
            Despite his Bharat Ratna and international fame, Bismillah Khan died in **financial distress**. 
            His final wish—to play at India Gate for the martyrs—remained unfulfilled. After his death, 
            his own family members **melted his silver shehnais for money**, symbolizing how quickly 
            a nation can forget its heroes.
          </p>
        </div>
      </div>
    </div>

    {/* The Mother of Revolution */}
    <div className="epic-story">
      <h3>👸 The Mother Who Inspired a Movement</h3>
      <h4>Bi Amma - The Iron Lady Behind the Khilafat Movement</h4>
      
      <div className="mother-story">
        <p>
          **Abadi Bano Begum**, known as Bi Amma, was the mother of **Mohammad Ali and Shaukat Ali**—
          the famous Ali Brothers. But she was much more than just a mother; she was the **driving 
          force** behind one of India's largest mass movements.
        </p>

        <div className="inspiring-sons">
          <h5>The Mother's Teaching</h5>
          <p>
            When her sons hesitated to join the dangerous freedom struggle, fearing for their 
            lives and families, Bi Amma gave them a lesson they never forgot:
          </p>
          <blockquote>
            "I gave birth to lions, not sheep. If you fear the British, then you are not my sons. 
            I would rather weep over your graves as martyrs than live in shame with you as cowards."
          </blockquote>
        </div>

        <div className="leading-movement">
          <h5>The Leader in Her Own Right</h5>
          <p>
            When both her sons were **imprisoned by the British**, Bi Amma didn't retreat. Instead, 
            she took over their work, addressing **massive rallies across India**. British authorities 
            were shocked to see thousands of people—men and women, young and old—hanging on to 
            every word of this **elderly Muslim woman**.
          </p>
          <p>
            Her speeches were so powerful that the **British considered her more dangerous** than 
            many male leaders, as she could mobilize the **Muslim masses** like no one else.
          </p>
        </div>

        <div className="final-sacrifice">
          <h5>The Ultimate Mother's Pride</h5>
          <p>
            When news came that both her sons might be hanged, reporters asked Bi Amma how she felt. 
            Her response became legendary:
          </p>
          <blockquote>
            "If my sons are hanged for fighting the British, every mother in India will know 
            that she too can give birth to heroes. Their death will inspire a thousand more sons 
            to take their place."
          </blockquote>
          <p>
            This **73-year-old woman** became the symbol of **motherly sacrifice** for the nation, 
            inspiring countless families to join the freedom struggle.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


      {/* Legacy Section */}
      <section className="legacy-section">
        <h2>Their Enduring Legacy</h2>
        <div className="legacy-content">
          <div className="legacy-item">
            <h3>🕊️ Secularism</h3>
            <p>These leaders showed that patriotism has no religion. Their examples laid the foundation for India's secular identity.</p>
          </div>
          <div className="legacy-item">
            <h3>🤝 Unity</h3>
            <p>Hindu-Muslim unity in the freedom struggle created bonds that transcended religious differences.</p>
          </div>
          <div className="legacy-item">
            <h3>⚡ Inspiration</h3>
            <p>Their courage continues to inspire new generations to stand up for justice and equality.</p>
          </div>
          <div className="legacy-item">
            <h3>🏛️ Democracy</h3>
            <p>Their vision of an inclusive India contributed to the democratic principles enshrined in our Constitution.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          "Freedom is not worth having if it does not include the freedom to make mistakes." - Mahatma Gandhi
        </p>
        <p>
          Let us remember and honor all those who sacrificed for our freedom, regardless of their faith, 
          caste, or creed. Their legacy lives on in the India we cherish today.
        </p>
      </footer>
    </div>
  );
}
