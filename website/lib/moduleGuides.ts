/**
 * Full tutor guide data for all 50 course modules.
 *
 * Each guide contains:
 *  - topic / summary
 *  - sessionBreakdown  — timed agenda for the 2-hour session
 *  - slideOutline      — slide-by-slide content for presentations
 *  - deliveryScript    — verbatim tutor notes: what to say, section by section
 *  - activity          — hands-on interactive exercise with instructions
 *  - discussionPrompts — group discussion questions
 *  - resources         — UK-based signposting links and helplines
 *  - tutorNotes        — facilitator tips and safeguarding reminders
 */

export interface SessionSegment {
  time: string;
  label: string;
}

export interface Slide {
  title: string;
  bullets: string[];
}

export interface ModuleGuide {
  id: number;
  topic: string;
  summary: string;
  sessionBreakdown: SessionSegment[];
  slideOutline: Slide[];
  deliveryScript: string;
  activity: string;
  discussionPrompts: string[];
  resources: { label: string; url: string }[];
  tutorNotes: string;
  powerPoint?: string;
  videos?: { label: string; url: string }[];
}

export const SESSION_BREAKDOWN: SessionSegment[] = [
  { time: '0–10 min', label: 'Welcome & ground rules' },
  { time: '10–20 min', label: 'Introduction & objectives' },
  { time: '20–60 min', label: 'Evidence-based content (slides & discussion)' },
  { time: '60–80 min', label: 'Interactive activity' },
  { time: '80–100 min', label: 'Group discussion' },
  { time: '100–120 min', label: 'Wrap-up, reflection & resources' },
];

export const moduleGuides: ModuleGuide[] = [
  // ─────────────────────────────────────────────────────────────
  // MODULE 1
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    topic: 'Foundations of Mental Health',
    summary: 'What mental health is, why it matters, how stigma holds people back, and the simple daily habits that protect it.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      { title: 'What Is Mental Health?', bullets: ['WHO definition: "a state of well-being in which every individual realises his or her own potential"', 'Mental health exists on a spectrum — not just illness vs wellness', 'Everyone has mental health, just as everyone has physical health'] },
      { title: 'Scale of the Challenge', bullets: ['970 million people worldwide live with a mental disorder (WHO 2019)', '1 in 4 people in the UK will experience a mental health problem in any given year (Mind)', 'Mental ill-health costs the UK economy £105bn per year (Centre for Mental Health)'] },
      { title: 'Understanding Stigma', bullets: ['Stigma = negative stereotypes and discrimination', 'Self-stigma: internalising shame, delaying help-seeking', 'Structural stigma: barriers in healthcare, employment, media'] },
      { title: 'The Biopsychosocial Model', bullets: ['Biological: genetics, brain chemistry, physical health', 'Psychological: thoughts, emotions, behaviour patterns', 'Social: relationships, housing, employment, culture'] },
      { title: 'Protective Factors', bullets: ['Strong social connections', 'Regular physical activity and good sleep', 'Sense of purpose and meaning', 'Access to support and talking therapies'] },
      { title: 'Self-care Toolkit', bullets: ['HALT check: Hungry, Angry, Lonely, Tired?', '5 Ways to Wellbeing: Connect, Be Active, Take Notice, Keep Learning, Give', 'When to seek professional help'] },
    ],
    deliveryScript: `SLIDE 1 — What Is Mental Health?
"Welcome, everyone. Before we do anything else, let's agree some ground rules: this is a confidential, non-judgemental space. You never have to share anything personal — participation is always your choice. If anything feels difficult, stepping out for a moment is completely fine.

Let's start with a question: what do you think mental health actually means? Pause for 30 seconds, let people think.

The World Health Organization defines it as 'a state of well-being in which every individual realises his or her own potential, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community.' Notice that definition says nothing about the absence of distress — it's about thriving, not just surviving."

SLIDE 2 — Scale of the Challenge
"970 million people worldwide are living with a mental health disorder. In the UK, one in four of us will experience a mental health problem in any given year — so look around this room. It touches almost everyone, directly or indirectly.

The cost to the economy is staggering — over £105 billion per year — but the human cost is what we're really here to talk about. These are our family members, friends, colleagues, neighbours."

SLIDE 3 — Understanding Stigma
"Stigma is the single biggest barrier to people getting help. It comes in two forms: external stigma — the negative attitudes others hold — and self-stigma, which is often worse. Self-stigma is when someone has absorbed those negative messages and believes them about themselves. They think 'I'm weak' or 'I should just get on with it' and so they don't reach out.

Ask: Has anyone ever held back from telling someone they were struggling because of how they thought they'd be seen? You don't have to answer aloud — just notice whether that resonates."

SLIDE 4 — The Biopsychosocial Model
"Mental health isn't just 'all in your head'. It sits at the intersection of biology — our genes, our brain chemistry, our physical health — psychology — how we think, feel and behave — and social factors — our relationships, housing, money, cultural background. All three interact.

This is really important because it means there's no single 'cure', but there are many points of intervention. And it means that when someone is struggling, it's never simply their fault."

SLIDE 5 & 6 — Protective Factors and Self-care Toolkit
"Research consistently shows that certain things buffer us from mental illness. Strong relationships are probably the most powerful. Exercise comes next — even a 20-minute brisk walk three times a week has measurable effects on depression. Sleep is foundational — most of what goes wrong with mood and cognition worsens dramatically when we're sleep deprived.

The NHS 5 Ways to Wellbeing is a simple framework based on solid evidence: Connect with people around you; Be Active; Take Notice of the world around you; Keep Learning; and Give to others. These aren't just nice ideas — they are evidence-based protective factors."`,
    activity: `ACTIVITY — My Mental Health Audit (20 minutes)

Materials: printed worksheets OR ask participants to use their phone notes app.

Instructions to read aloud:
"I'm going to ask you to privately rate five areas of your own well-being right now, on a scale of 1 (really struggling) to 10 (doing really well). This is just for you — you won't be asked to share it.

The five areas are:
1. Physical health and sleep
2. Relationships and connection
3. Work or purpose
4. Emotional regulation (how well you manage difficult feelings)
5. Access to support

Take two minutes to rate each one.

Now — look at your lowest score. In the box provided, write ONE small, concrete thing you could do this week to nudge that score up by even half a point. Not a life overhaul — one small thing.

We'll take five minutes at the end for anyone who wants to share their 'one small thing' with the group, completely voluntarily."`,
    discussionPrompts: [
      'What would change if we treated mental health as routinely as physical health — for example, annual mental health check-ups?',
      'Where does stigma come from, and who is responsible for reducing it?',
      'Which of the 5 Ways to Wellbeing do you find easiest? Which is hardest, and why?',
      'What does "recovery" mean to you — does it mean going back to how you were before, or something else?',
    ],
    resources: [
      { label: 'Mind — What is mental health?', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/mental-health-problems-introduction/about-mental-health-problems/' },
      { label: 'NHS — 5 Steps to Mental Wellbeing', url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/' },
      { label: 'Mental Health Foundation — Statistics', url: 'https://www.mentalhealth.org.uk/explore-mental-health/statistics' },
      { label: 'Time to Change — Stigma', url: 'https://www.time-to-change.org.uk/mental-health-and-stigma' },
    ],
    tutorNotes: `SAFEGUARDING: If any participant discloses personal distress or crisis during this introductory session, acknowledge calmly, offer to speak privately afterwards, and signpost to your organisation's safeguarding lead. Keep Samaritans (116 123) and local crisis line numbers visible throughout.

FACILITATION TIP: This first session sets the tone for the whole programme. Warmth and non-judgement from the tutor are more important than any slide content. Spend extra time on ground rules if the group seems uncertain.

SLIDE PRESENTER NOTES: Slides should use dark background with orange MMH branding. Avoid clipart of distressed-looking people — use abstract imagery or calm nature photography instead.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 2
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    topic: 'Introduction to Mental Health Disorders',
    summary: 'A map of the main DSM-5 and ICD-11 diagnostic categories, what diagnosis means and does not mean, and how to speak about mental illness without stigma.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      { title: 'Why Diagnoses Matter (and Their Limits)', bullets: ['Diagnosis helps: access treatment, explain experiences, connect with others', 'Diagnosis also limits: labels, self-fulfilling prophecies, medical reductionism', 'Person-first language: "person with depression" not "depressive"'] },
      { title: 'The Diagnostic Systems', bullets: ['DSM-5 (Diagnostic and Statistical Manual, 5th edition) — USA/worldwide', 'ICD-11 (International Classification of Diseases, 11th edition) — WHO/UK', 'Both are tools, not ground truth — categories evolve over time'] },
      { title: 'Major Diagnostic Groups', bullets: ['Neurodevelopmental (autism, ADHD)', 'Mood disorders (depression, bipolar)', 'Anxiety disorders (GAD, phobias, OCD, PTSD)', 'Psychotic disorders (schizophrenia)', 'Personality disorders', 'Substance use, eating, sleep, somatic disorders'] },
      { title: 'Prevalence at a Glance', bullets: ['Anxiety disorders: 284 million people globally', 'Depression: 264 million', 'ADHD: 52 million; Bipolar: 45 million', 'Schizophrenia spectrum: 20 million'] },
      { title: 'Recovery and Treatment', bullets: ['Most mental health conditions are treatable', 'Treatment: medication, talking therapies (CBT, DBT, EMDR), lifestyle, peer support', 'Recovery does not always mean "cure" — it means living well'] },
    ],
    deliveryScript: `SLIDE 1 — Why Diagnoses Matter
"A diagnosis can be a door opening — suddenly there is a name for what you have been experiencing, you can find others who understand, and access appropriate help. But it can also become a cage. Once people know someone has a diagnosis, they can stop seeing the whole person.

So throughout this course we use person-first language. We say 'a person with schizophrenia', not 'a schizophrenic'. We say 'she is experiencing depression', not 'she is depressed' as though it defines her completely. Small language choices carry a big message."

SLIDE 2 — The Diagnostic Systems
"The two main systems are the DSM-5, published by the American Psychiatric Association, and the ICD-11, published by the World Health Organization and used by the NHS. They are tools — imperfect frameworks that help clinicians communicate and researchers study. They change over time. Homosexuality was classified as a disorder until 1973. The categories we use today will continue to evolve as our understanding deepens."

SLIDE 3 — Major Diagnostic Groups
"Rather than list every condition, let's map the landscape. [Walk through the main groups, pausing on each.] Notice that the groups overlap significantly — anxiety is present in nearly every diagnostic category. And notice that 'comorbidity' — having more than one diagnosis at once — is actually the norm rather than the exception."

SLIDE 4 — Prevalence
"Anxiety disorders are the most common mental health conditions in the world, affecting 284 million people. Depression affects 264 million. These are not rare conditions that happen to unfortunate people — they are part of the human experience at scale."

SLIDE 5 — Recovery
"The most important message of today: most mental health conditions are treatable, and many people recover fully or learn to manage symptoms so well that they live rich, full lives. Recovery looks different for everyone. For some it means remission. For others it means building a meaningful life alongside ongoing symptoms. Both are valid."`,
    activity: `ACTIVITY — Diagnostic Bingo & Myth-Busting (20 minutes)

Prepare a 3×3 bingo card for each participant with 9 common myths about mental illness written in the squares. Examples:
• "People with schizophrenia are violent"
• "Depression is just sadness"
• "You can snap out of anxiety if you try"
• "Mental illness is rare"
• "Therapy only helps 'weak' people"
• "Medication is the only effective treatment"
• "Children can't have mental illness"
• "People with bipolar are just moody"
• "Mental illness is a life sentence"

Tutor reads out a statement and the group collectively decides: MYTH or FACT? For each myth, spend 60 seconds on the correct evidence. First person to complete a line calls "Bingo!" — reward with a round of applause.`,
    discussionPrompts: [
      'Has receiving a diagnosis ever helped someone you know? Were there any downsides?',
      'Why do you think anxiety and depression are so much more common today than they were 50 years ago — or are they?',
      'What does "recovery" look like to you personally?',
      'How does the way media portrays mental illness affect how people seek help?',
    ],
    resources: [
      { label: 'Mind — Types of mental health problems', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/' },
      { label: 'NHS — Mental health conditions A–Z', url: 'https://www.nhs.uk/mental-health/conditions/' },
      { label: 'Rethink Mental Illness', url: 'https://www.rethink.org/advice-and-information/about-mental-illness/' },
      { label: 'SANE — Understanding mental illness', url: 'https://www.sane.org.uk/information-stories/facts-and-guides' },
    ],
    tutorNotes: `FACILITATION: Participants may have personal experience of diagnosis. Validate all perspectives — positive and negative experiences of receiving diagnoses are both legitimate. Avoid framing diagnosis as purely positive or negative.

LANGUAGE: Model person-first language consistently throughout this session and all future sessions.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 3
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    topic: 'Neurodevelopmental Disorders: Autism Spectrum',
    summary: 'Understanding autism as brain difference, not deficit; early signs across genders; supporting autistic people with communication and sensory needs.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      { title: 'What Is Autism?', bullets: ['Lifelong neurodevelopmental difference in how the brain processes information', 'Affects communication, social interaction, sensory processing', 'Estimated 1 in 100 people in the UK are autistic (NHS)'] },
      { title: 'The Spectrum', bullets: ['Autism is a spectrum — no two autistic people are the same', 'Old labels (Asperger\'s, "high-functioning") are now outdated and often unhelpful', 'Masking: hiding autistic traits to fit in — exhausting and harmful'] },
      { title: 'Signs Across Genders', bullets: ['Research has historically focused on white males — diagnosis is frequently missed in women, girls and non-binary people', 'Girls often "mask" more effectively, leading to later diagnosis and greater burnout', 'Co-occurring anxiety and depression are common, especially in those diagnosed late'] },
      { title: 'Sensory Processing', bullets: ['Hypersensitivity (over-responsive) or hyposensitivity (under-responsive) to light, sound, texture, smell', 'Sensory overload can cause meltdown or shutdown — not a tantrum, a neurological response', 'Reasonable adjustments: quiet spaces, warning of changes, flexible communication'] },
      { title: 'Supporting Autistic People', bullets: ['Clear, direct communication — avoid idioms and sarcasm without explanation', 'Predictability and advance notice of changes', 'Focus on strengths and interests; autistic people have unique abilities'] },
    ],
    deliveryScript: `SLIDE 1 — What Is Autism?
"Autism is not an illness to be cured — it is a different way of experiencing and processing the world. About 1 in 100 people in the UK are autistic, and many more are undiagnosed. The autistic brain processes social information, language, and sensory input differently — not wrongly, just differently.

I want to use the phrase 'autistic person' rather than 'person with autism' — because many autistic people prefer identity-first language and consider autism a fundamental part of who they are, not something separate. It's always best to ask individuals their preference."

SLIDE 2 — The Spectrum
"When people hear 'spectrum' they sometimes imagine a line from mild to severe. It's not like that. The spectrum is more like a colour wheel — autistic people can have very different profiles of strengths and difficulties. Someone might be highly articulate but find making eye contact deeply uncomfortable. Another person might have very limited verbal communication but extraordinary memory for detail.

Masking — consciously or unconsciously suppressing autistic traits to 'fit in' — is incredibly common, particularly in environments that aren't accommodating. It takes enormous energy and contributes significantly to burnout, anxiety and depression."

SLIDE 3 — Signs Across Genders
"The research base for autism was built almost entirely on studies of white boys and men. This means we missed — and continue to miss — autism in women, girls, and non-binary people at alarming rates. Women and girls tend to mask more effectively and from a younger age. They may appear to manage social situations well while privately experiencing extreme distress.

Late diagnosis, often in adulthood and sometimes triggered by the diagnosis of a child, can be both a relief and a grief — relief at finally having an explanation, and grief for the years of struggling without understanding why."

SLIDE 4 — Sensory Processing
"Sensory differences are one of the most impactful and least discussed aspects of autism. Imagine a fire alarm — for most of us, it's unpleasant. For a hypersensitive person, it can be physically agonising. A supermarket — the lights, the sounds, the unpredictability — can be genuinely overwhelming in a way that is impossible to just 'push through'.

When an autistic person has a meltdown, it is not a choice or a manipulation. It is a neurological response to overload — the system has hit its limit. The appropriate response is calm, reduced stimulation, and patience — never punishment or escalation."

SLIDE 5 — Supporting Autistic People
"The most important things: be direct, be clear, mean what you say. Autistic people often take language literally — so if you say 'take a seat' they might sit in the wrong place. Give advance notice of changes. Provide information in writing when possible. Focus on strengths — many autistic people have exceptional abilities in pattern recognition, attention to detail, honesty, and deep focus."`,
    activity: `ACTIVITY — Sensory Walk (20 minutes)

If in a physical space: Ask participants to take 5 minutes walking around the room/building and notice the sensory environment from a new perspective. What sounds, smells, lights, textures do they notice? Which might be overwhelming?

If online: Ask participants to take 3 minutes looking around their current environment and imagine experiencing it with heightened sensitivity.

Debrief questions:
1. What did you notice that you normally filter out?
2. If that sensitivity was turned up 10×, how would it affect your ability to concentrate, communicate, or feel safe?
3. What one adjustment could make this space more comfortable for someone with sensory differences?`,
    discussionPrompts: [
      'Why do you think autism diagnosis rates have increased so dramatically over the past 30 years?',
      'What barriers do autistic adults face in employment, and what adjustments make the biggest difference?',
      'How might late autism diagnosis in adulthood affect a person\'s sense of identity?',
      'What does an autism-friendly community or workplace look like in practice?',
    ],
    resources: [
      { label: 'National Autistic Society', url: 'https://www.autism.org.uk' },
      { label: 'Autism UK', url: 'https://www.autismuk.com' },
      { label: 'NHS — Autism', url: 'https://www.nhs.uk/conditions/autism/' },
      { label: 'Ambitious about Autism', url: 'https://www.ambitiousaboutautism.org.uk' },
    ],
    tutorNotes: `IMPORTANT: There may be autistic participants in the room who have not disclosed. Avoid "othering" language (e.g., "autistic people are like…"). Include autistic voices — play a short clip from an autistic speaker if available.

SAFEGUARDING: Co-occurring mental health conditions are very common in autistic people. If a participant discloses struggles, treat sensitively and signpost to autism-specific support.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 4
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    topic: 'Neurodevelopmental Disorders: ADHD',
    summary: 'ADHD beyond the stereotype — inattention, hyperactivity and impulsivity in adults; treatment; coping strategies; the ADHD tax.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      { title: 'What Is ADHD?', bullets: ['Neurodevelopmental disorder affecting executive function, attention, and impulse control', 'Three presentations: predominantly inattentive, predominantly hyperactive-impulsive, combined', 'UK prevalence: ~5% of children, ~3-4% of adults; many adults undiagnosed'] },
      { title: 'Beyond the Stereotype', bullets: ['Not just "hyperactive boys who can\'t sit still"', 'Inattentive ADHD is frequently missed, especially in girls and women', 'Hyperfocus is real — deep engagement in interests is common', 'Emotional dysregulation: intense emotions, rejection sensitivity dysphoria (RSD)'] },
      { title: 'The ADHD Tax', bullets: ['Lost items, missed appointments, late fees, impulsive purchases, job losses', 'Executive dysfunction is not laziness — the brain struggles with task initiation, planning, time blindness', 'Working memory and time perception are fundamentally different'] },
      { title: 'Treatment & Management', bullets: ['Medication: stimulants (methylphenidate, amphetamine salts) and non-stimulants (atomoxetine)', 'CBT adapted for ADHD — externalising reminders, breaking tasks, body doubling', 'Environmental adaptations: reducing distractions, written instructions, flexible deadlines'] },
      { title: 'ADHD in Adults', bullets: ['Often diagnosed after a child in the family receives diagnosis', 'Co-occurring anxiety, depression, sleep disorders very common', 'Strengths: creativity, risk-taking, energy, lateral thinking'] },
    ],
    deliveryScript: `SLIDE 1 — What Is ADHD?
"ADHD stands for Attention Deficit Hyperactivity Disorder, but that name is misleading — it's not a deficit of attention, it's a dysregulation of attention. People with ADHD can often focus intensely on things they find genuinely engaging — this is called hyperfocus. The difficulty is regulating where and when that attention goes.

ADHD is one of the most heritable psychiatric conditions we know of. If you have it, there's a good chance a parent or child also has it."

SLIDE 2 — Beyond the Stereotype
"The image of ADHD as a condition affecting bouncy boys in classrooms has done enormous damage. It has led to decades of girls and women going undiagnosed because their presentations looked different — more daydreaming, more people-pleasing, more internalised chaos while appearing organised on the outside.

Rejection sensitivity dysphoria — RSD — is one of the most painful aspects of ADHD that rarely gets discussed. It's an intense, sometimes overwhelming emotional response to perceived rejection or criticism. It can damage relationships and careers. It is not a personality flaw."

SLIDE 3 — The ADHD Tax
"The 'ADHD tax' refers to the very real financial and practical costs of living with the condition without adequate support: late fees from missed bill payments, replacing lost items repeatedly, impulse purchases, losing jobs due to disorganisation, paying for services that could be managed without executive dysfunction.

This isn't about intelligence — many people with ADHD are highly intelligent. It's about working memory and time blindness — the brain's inability to perceive and manage time as reliably as neurotypical brains."

SLIDE 4 — Treatment and Management
"Stimulant medication, primarily methylphenidate (Ritalin, Concerta) or amphetamine salts, is effective for the majority of people with ADHD when dosed correctly. It works by increasing dopamine availability in the prefrontal cortex. Non-stimulants like atomoxetine work differently and are often used when stimulants cause side effects or where there is a history of substance misuse.

CBT adapted for ADHD focuses on externalising the reminders and structures that the internal executive function can't reliably provide: physical timers, visual planners, body doubling (working alongside another person), breaking tasks into micro-steps."

SLIDE 5 — ADHD in Adults
"Adults with ADHD often receive diagnosis as a result of their child being diagnosed, and finally recognise themselves in the description. This can be profound. It reframes decades of shame and underachievement. 'I'm not lazy — my brain works differently and I was never taught the strategies I needed.'"`,
    activity: `ACTIVITY — Executive Function Challenge (20 minutes)

Task 1 (5 mins): Give participants a page with 20 mixed tasks (e.g., "Write your name backwards", "Count all the vowels in this paragraph", "Draw a house"). Ask them to complete as many as possible in order. Then ask: How did it feel trying to switch between tasks? How many did you complete?

Task 2 (5 mins): Discuss "time blindness" — ask participants to estimate when 2 minutes has passed without looking at a clock. Note the variation in results.

Debrief (10 mins): How would these challenges feel in a work environment? What structures would help? Connect to ADHD-friendly adjustments.`,
    discussionPrompts: [
      'How might ADHD manifest differently in someone who has developed strong coping strategies by adulthood versus someone who hasn\'t?',
      'What workplace adjustments make the biggest difference for employees with ADHD?',
      'Why might ADHD be over-diagnosed in some settings and severely under-diagnosed in others?',
      'How does the intersection of ADHD and anxiety affect a person\'s daily life?',
    ],
    resources: [
      { label: 'ADHD UK', url: 'https://adhduk.co.uk' },
      { label: 'CHADD (ADHD information)', url: 'https://chadd.org' },
      { label: 'NHS — ADHD', url: 'https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/' },
      { label: 'ADDitude Magazine', url: 'https://www.additudemag.com' },
    ],
    tutorNotes: `FACILITATION: Adults with ADHD in the group may become visibly distracted during presentations — this is normal. Build in movement breaks, keep slides concise, use varied delivery methods. Never draw attention to inattention.

LANGUAGE: "ADHD brain" and "neurotypical" are widely used terms participants may relate to. Avoid "suffers from ADHD" — prefer "has ADHD" or "is ADHDer".`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 5
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    topic: 'Neurodevelopmental Disorders: Intellectual & Learning Disabilities',
    summary: 'Intellectual disability, learning difficulties (dyslexia, dyscalculia, dyspraxia) and global developmental delay; support and inclusive education.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      { title: 'Defining Intellectual Disability', bullets: ['Significantly impaired intellectual functioning AND adaptive behaviour, originating before age 18', 'IQ below ~70 as one indicator — but not the whole picture', 'UK prevalence: ~2% of the population; profound/severe disability ~0.4%'] },
      { title: 'Specific Learning Difficulties (SpLD)', bullets: ['Dyslexia: difficulties with reading, spelling, phonological processing', 'Dyscalculia: difficulties with numbers and mathematical reasoning', 'Dyspraxia (DCD): difficulties with coordination and motor planning', 'These are specific — they do not affect overall intelligence'] },
      { title: 'Mental Health & Intellectual Disability', bullets: ['People with intellectual disabilities are 3–4× more likely to develop a mental health condition', 'Diagnostic overshadowing: symptoms misattributed to the disability itself', 'Communication needs mean distress may not be expressed verbally'] },
      { title: 'Early Intervention & Education', bullets: ['Early diagnosis enables targeted support', 'EHCP (Education, Health and Care Plan) in England and Wales', 'Inclusive education: right to mainstream schooling with appropriate support', 'Adult support: day services, supported employment, independent living'] },
      { title: 'Supporting People', bullets: ['Use clear, simple language; check understanding without condescension', 'Visual supports, Easy Read materials', 'Focus on capacity and rights — not just limitations', 'Involve the person in decisions about their own life'] },
    ],
    deliveryScript: `SLIDE 1 — Defining Intellectual Disability
"Intellectual disability — or learning disability, as it is often called in the UK — refers to significant limitations in both intellectual functioning and adaptive behaviour (practical everyday skills), which originate before the age of 18. It is not the same as a learning difficulty like dyslexia.

An IQ below approximately 70 is one indicator, but IQ tests alone tell us very little. What matters more is how the person functions in their daily life, how much support they need, and crucially, what they can do — not just what they can't."

SLIDE 2 — Specific Learning Difficulties
"Specific learning difficulties are quite different from intellectual disability. A person with dyslexia typically has average or above-average intelligence — their difficulties are specific to reading, spelling and phonological processing. A person with dyscalculia struggles specifically with maths. These are neurological differences in how information is processed, not measures of intelligence or effort.

About 10% of the UK population has dyslexia. It's one of the most common learning differences, and yet many adults reach adulthood without diagnosis, having been told throughout their education that they were lazy, stupid, or careless."

SLIDE 3 — Mental Health and Intellectual Disability
"People with intellectual disabilities experience mental health conditions at much higher rates than the general population — three to four times more likely. Yet they are also less likely to receive appropriate diagnosis and treatment.

Diagnostic overshadowing is a major problem: clinicians attribute all difficulties to the intellectual disability rather than investigating whether there's also depression, anxiety or trauma. If someone without an intellectual disability was withdrawn, distressed and not eating, we'd investigate. People with intellectual disabilities deserve the same standard of care."

SLIDE 4 — Early Intervention
"The evidence is overwhelming: early intervention makes a profound difference. In England, children with significant support needs can get an EHCP — an Education, Health and Care Plan — which legally commits local authorities to providing specific support. The challenge is that getting one can require years of advocacy from families.

For adults, the picture is often more difficult — day services have been significantly cut, supported employment is underfunded, and waiting lists for appropriate housing are long."

SLIDE 5 — Supporting People
"The golden rule: ask, don't assume. Involve people in decisions about their own lives. Easy Read materials — which use simple language and images — make information accessible without being condescending. Visual timetables and step-by-step instructions reduce anxiety. And always, always address the person directly — not just the carer with them."`,
    activity: `ACTIVITY — Easy Read Design Challenge (20 minutes)

Split participants into groups of 3-4. Give each group a page from an official NHS or government document (choose something about health rights or benefits — something that affects people with intellectual disabilities).

Task: Rewrite the key information as an Easy Read version — using simple sentences (no more than 15 words each), active voice, and either describe or sketch a simple image for each key point.

Debrief: Share versions. Discuss: How hard was it? What did you have to cut? Does simplifying lose important nuance, or does it gain accessibility?`,
    discussionPrompts: [
      'What does "capacity" mean in the context of decision-making, and why is it important for people with intellectual disabilities?',
      'How has the shift from institutional care to community care changed life for people with intellectual disabilities?',
      'What adjustments would make your local community more accessible for people with learning disabilities?',
      'How can we support families and carers of people with intellectual disabilities without losing sight of the individual?',
    ],
    resources: [
      { label: 'Mencap', url: 'https://www.mencap.org.uk' },
      { label: 'Learning Disability England', url: 'https://www.learningdisabilityengland.org.uk' },
      { label: 'British Dyslexia Association', url: 'https://www.bdadyslexia.org.uk' },
      { label: 'NHS — Learning disabilities', url: 'https://www.nhs.uk/conditions/learning-disabilities/' },
    ],
    tutorNotes: `INCLUSION: If you know participants have learning difficulties, prepare Easy Read summaries of key points in advance. Allow extra time for activities. Written tasks can be done verbally.

LANGUAGE: In the UK, "learning disability" refers to intellectual disability. "Learning difficulty" refers to specific learning differences like dyslexia. Use correctly and clarify the distinction early.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 6
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    topic: 'Trauma & Stress: Acute Stress and Adjustment Disorders',
    summary: 'How the mind responds to sudden trauma and major life changes — recognising acute stress disorder and adjustment disorder, and the evidence-based strategies to stabilise and recover.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Are Stress-Related Disorders?',
        bullets: [
          'Acute Stress Disorder (ASD): severe distress within 3 days–1 month of a traumatic event (DSM-5)',
          'Adjustment Disorder: emotional/behavioural symptoms following an identifiable life stressor',
          'UK prevalence: adjustment disorder affects up to 2% of adults per year (Mental Health Foundation, 2023)',
          'Neither condition is weakness — both are the nervous system\'s natural response to overwhelming change',
          'BRANDED SLIDE: MMH orange header bar, logo bottom-right, white body text on dark background',
        ],
      },
      {
        title: 'Slide 2 — Recognising the Signs',
        bullets: [
          'ASD: intrusive memories, emotional numbing, dissociation, avoidance, hypervigilance',
          'Adjustment Disorder: tearfulness, anxiety, hopelessness, poor concentration, social withdrawal',
          'Physical symptoms: insomnia, appetite disruption, headaches, palpitations, fatigue',
          'Both can escalate to PTSD or major depression without timely support',
          'BRANDED SLIDE: two-column layout — ASD symptoms left, Adjustment right, orange divider',
        ],
      },
      {
        title: 'Slide 3 — Common Triggers',
        bullets: [
          'Single traumatic events: road traffic accidents, assault, sudden bereavement, medical emergencies',
          'Major life transitions: redundancy, divorce, serious illness diagnosis, relocation',
          'Cumulative stress: multiple smaller stressors can be as destabilising as one major event',
          'Individual vulnerability: prior trauma, social isolation, financial insecurity, lack of support',
          'BRANDED SLIDE: trigger wheel infographic with MMH colour palette',
        ],
      },
      {
        title: 'Slide 4 — Evidence-Based Interventions',
        bullets: [
          'Psychological First Aid (PFA): Safety → Calm → Connectedness → Self-efficacy → Hope',
          'Trauma-focused CBT for ASD — NICE recommended to prevent progression to PTSD',
          'Problem-focused vs emotion-focused coping — matching strategy to situation type',
          'Grounding techniques: 5-4-3-2-1 sensory anchoring, box breathing, safe-place visualisation',
          'BRANDED SLIDE: PFA five-step ladder graphic in MMH orange/white/black',
        ],
      },
      {
        title: 'Slide 5 — Recovery, Resilience and Referral',
        bullets: [
          'Post-traumatic growth: many people report positive change — deeper relationships, new priorities',
          'Stabilisation before processing: grounding and routine before trauma work begins',
          'When to refer: symptoms beyond 4 weeks, significant functional impairment, suicidal ideation',
          'UK crisis support: NHS Talking Therapies (self-referral) | Samaritans 116 123 | Mind helpline',
          'BRANDED SLIDE: recovery pathway flowchart with MMH branding and crisis numbers clearly displayed',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Are Stress-Related Disorders?
"Welcome to Module 6. Today we look at what happens to our minds and bodies when life throws something overwhelming at us — not everyday pressure, but the kind of events that stop us in our tracks.

Acute Stress Disorder develops within the first month following a traumatic event. Adjustment Disorder is broader: it is the mental health response to any significant life stressor — a redundancy, a divorce, a diagnosis. Both are common, both are real, and both are treatable. Neither is a sign of personal weakness. They are the nervous system doing exactly what it evolved to do: respond to threat. The problem is when that response gets stuck."

SLIDE 2 — Recognising the Signs
"Let's look at what these conditions actually look and feel like from the inside.

ASD can feel like early PTSD: memories of the event flooding back uninvited, a sense of unreality or numbness, avoiding anything that reminds you of what happened, being constantly on edge or startled by small things.

Adjustment Disorder often presents more quietly: a persistent inability to cope with something that — on paper — should be manageable. Tearfulness that appears from nowhere. Inability to concentrate. A growing distance from the people around you.

Ask the group: Has anyone ever had a reaction to a stressful event that felt much bigger than they expected? That disproportionate response is often exactly what these conditions feel like — and it is important to normalise it."

SLIDE 3 — Common Triggers
"The most important thing to understand about Adjustment Disorder is that the trigger does not need to be objectively catastrophic. What matters is the meaning of that event to that person. Losing a job may feel manageable to someone with financial security and a strong support network. For someone already under pressure — financially, relationally, physically — it can be the tipping point.

Cumulative stress is particularly dangerous and consistently underestimated. It is rarely one thing — it is twelve things in a row. Each one feels manageable individually, but together they overwhelm the system."

SLIDE 4 — Evidence-Based Interventions
"Psychological First Aid is the recommended immediate response — and critically, it is something any of us can provide without clinical training. The five principles are: ensure safety, promote calm, connect the person to support, help them feel capable of coping, and offer hope. These are human actions. You do not need a qualification to do this.

For formal treatment, trauma-focused CBT has the strongest evidence base for ASD and significantly reduces the risk of progression to PTSD. Grounding techniques — which we will practise in the activity — are tools from trauma therapy that anyone can use, any time."

SLIDE 5 — Recovery, Resilience and Referral
"I want to end this module on a genuinely hopeful note. The evidence on post-traumatic growth is robust: many people who go through serious adversity report emerging with deeper relationships, a clearer sense of priorities, and a greater appreciation for life. This is not inevitable, and we should never use it to minimise suffering. But it is a real possibility worth naming.

Know when to refer: if symptoms persist beyond four weeks, if the person is struggling significantly with daily functioning, or if there is any expression of suicidal ideation — refer to NHS Talking Therapies or your local mental health team."`,
    activity: `ACTIVITY — Stress Mapping (20 minutes)
Melksham Mental Health | Module 6 | Licensed Materials

MATERIALS: Printed A4 timeline worksheets (MMH branded) or plain paper

INSTRUCTIONS TO READ ALOUD:
"We are going to do a short reflective exercise. This is entirely private — you will not be asked to share details, only insights.

Draw a horizontal line across your page representing the last 12 months. On this line, mark the significant events of the past year — positive and negative. For each event, place a dot above the line if it increased your overall sense of wellbeing, or below the line if it depleted it. Connect the dots to create a line graph of your year.

Now look at your map. Where were you most depleted? What was happening during those periods? What — or who — helped you begin to recover?

Add a second layer: at each low point, circle the resources you had available: people, routines, professional support, financial stability. What was present? What was missing?

Take 5 minutes to reflect privately. Then share one insight with a partner — not the details of events themselves, but something you noticed about your own resilience patterns: when it showed up, when it was harder to find."

DEBRIEF (5 minutes, whole group):
What common patterns did we notice? What resources seem to make the biggest difference when we are depleted? How might we build more of those resources deliberately?`,
    discussionPrompts: [
      'How do we distinguish a normal stress response from one that needs professional support — and who should make that judgement call?',
      'Why do some people find it genuinely difficult to acknowledge that a life change has affected their mental health?',
      'What could employers do differently to support staff who are going through major life transitions?',
      'What does resilience actually mean to you personally — is it returning to where you were, or is it something different?',
    ],
    resources: [
      { label: 'Mind — Stress', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/stress/' },
      { label: 'NHS — Adjustment Disorder', url: 'https://www.nhs.uk/mental-health/conditions/adjustment-disorder/' },
      { label: 'NHS Talking Therapies (self-referral)', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
      { label: 'Samaritans 116 123 (24/7, free)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'NHS — What is acute stress disorder? (YouTube)', url: 'https://www.youtube.com/results?search_query=acute+stress+disorder+NHS' },
      { label: 'Mind — Understanding stress (YouTube)', url: 'https://www.youtube.com/results?search_query=Mind+charity+understanding+stress' },
      { label: 'Psychological First Aid — WHO training video', url: 'https://www.youtube.com/results?search_query=psychological+first+aid+WHO' },
    ],
    powerPoint: `MODULE 6 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black background (#0a0a0a), orange accents (#f97316), white text (#ffffff)
Font headers: Bold sans-serif (Montserrat or system equivalent), 36pt
Font body: Regular sans-serif, 18pt
Logo: MMH logo bottom-right every slide, 80px height
Slide count: 5 content slides + title slide + Q&A slide = 7 total
Title slide: Module number large (orange), topic title white, MMH logo centred, tagline "Licenced Training Materials — Not for Redistribution"
Each content slide: Orange header bar top, slide title in white, bullet points body, slide number bottom-left
Activity slide: Full-width orange banner "Group Activity", instructions in white on dark background
Watermark: "© Melksham Mental Health — Licensed" faint diagonal on every slide`,
    tutorNotes: `SAFEGUARDING: Participants may be going through their own major life changes right now. Normalise distress without minimising it. If someone appears to be in acute crisis during the session, speak to them privately afterwards and follow your organisation's safeguarding protocol. Have Samaritans (116 123) and local crisis line numbers visible throughout.

FACILITATION: The stress-mapping activity can surface significant personal material. Remind the group before the activity that sharing is always optional and that the exercise is for personal reflection only. Watch for anyone becoming visibly distressed.

LICENCE: These materials are licensed to the registered user only. Not for redistribution, resale, or delivery by unlicensed practitioners.

BRANDING: All slides must use the MMH brand template. Do not alter fonts, colours, or logo placement.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 7
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    topic: 'Trauma & Stress: PTSD and Complex PTSD',
    summary: 'How trauma becomes trapped in the brain and body; the distinction between PTSD and C-PTSD; and the NICE-recommended therapies — EMDR and TF-CBT — that support genuine, lasting recovery.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is PTSD?',
        bullets: [
          'Post-Traumatic Stress Disorder: develops after direct or witnessed exposure to a traumatic event',
          'UK prevalence: ~4% of adults; 1 in 3 people who experience trauma develop PTSD (NHS England, 2023)',
          'Higher rates in: emergency workers (~20%), veterans (~17%), survivors of sexual violence (~50%)',
          'PTSD is not weakness — it is the threat-detection system failing to switch off after danger has passed',
          'BRANDED SLIDE: MMH black/orange, brain graphic showing amygdala highlighted',
        ],
      },
      {
        title: 'Slide 2 — The Four Symptom Clusters',
        bullets: [
          'RE-EXPERIENCING: flashbacks, nightmares, intrusive memories — sensory, vivid, felt as present',
          'AVOIDANCE: staying away from people, places, sounds, smells, or feelings that trigger memories',
          'NEGATIVE COGNITION/MOOD: shame, guilt, emotional numbing, persistent negative beliefs about self',
          'HYPERAROUSAL: constant alertness, exaggerated startle, irritability, concentration problems, insomnia',
          'BRANDED SLIDE: four-quadrant grid, one cluster per quadrant, MMH orange headers',
        ],
      },
      {
        title: 'Slide 3 — Complex PTSD (C-PTSD)',
        bullets: [
          'Develops from prolonged, repeated interpersonal trauma: childhood abuse, domestic violence, torture, trafficking',
          'ICD-11 (2018) recognises C-PTSD as distinct from PTSD — not yet in DSM-5 but widely accepted clinically',
          'Core PTSD symptoms PLUS: severe emotional dysregulation, profound shame/self-blame, relational difficulties',
          'Often misdiagnosed as BPD, bipolar disorder, or treatment-resistant depression — average 6 years to correct diagnosis',
          'BRANDED SLIDE: Venn diagram — PTSD circle, C-PTSD additional features outside, overlap shown',
        ],
      },
      {
        title: 'Slide 4 — Trauma in the Body',
        bullets: [
          '"The body keeps the score" — trauma is physiological, not only psychological (van der Kolk, 2014)',
          'Nervous system dysregulation: freeze, fight, flight, and fawn survival responses',
          'Physical manifestations: chronic pain, GI problems, fatigue, immune dysfunction, early cardiovascular disease',
          'Window of Tolerance: the zone of nervous system activation where trauma processing is possible',
          'BRANDED SLIDE: nervous system window diagram, MMH branded with orange threshold lines',
        ],
      },
      {
        title: 'Slide 5 — NICE-Recommended Treatments',
        bullets: [
          'EMDR (Eye Movement Desensitisation and Reprocessing) — NICE recommended, strong RCT evidence',
          'Trauma-Focused CBT (TF-CBT) — NICE recommended, extensively evidenced across populations',
          'Stabilisation before processing — safety and grounding must come first, always',
          'Medication: SSRIs (sertraline, paroxetine) can help symptoms but are not curative — not first-line',
          'BRANDED SLIDE: treatment pathway timeline graphic, NICE badge, MMH branding',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is PTSD?
"PTSD was formally recognised in the context of Vietnam War veterans, but trauma is as old as human experience. What we now understand is that PTSD develops when the brain's threat-processing system becomes overwhelmed. Normally, memories are processed and filed in the past — with context, distance, and reduced emotional charge. In PTSD, the traumatic memory stays live. It does not get filed. It remains accessible as a present threat.

About 4% of UK adults have PTSD at any given time. In populations with repeated trauma exposure — survivors of sexual violence, domestic abuse, emergency service workers, military personnel — that figure is significantly higher."

SLIDE 2 — The Four Symptom Clusters
"The four symptom clusters of PTSD each have a logic to them when you understand what the nervous system is trying to do.

Re-experiencing keeps the person alert to the threat — the flashbacks are the brain's attempt to ensure the person does not get caught off guard again. Avoidance is a natural protective response — if the memory is so painful, of course you try to stay away from triggers. Negative changes in cognition and mood are the belief system updating to match a dangerous world: 'the world is unsafe', 'I am broken', 'it was my fault'. Hyperarousal is the constant surveillance state — never fully relaxing, because the threat might return at any moment.

The problem is that all four responses, while they made sense during the traumatic experience, become self-perpetuating and disabling in the aftermath."

SLIDE 3 — Complex PTSD
"Complex PTSD develops when trauma is not a single event but a prolonged experience — years of childhood abuse, sustained domestic violence, long-term captivity. The nervous system adapts to live in a state of chronic, inescapable threat.

Beyond the core PTSD symptoms, the additional features of C-PTSD — profound shame and self-blame, the deep sense of being permanently damaged or different from others, extreme difficulty forming or maintaining trusting relationships — are not personality defects. They are survival adaptations. They made sense in the traumatic environment. Understanding that is often the first thing that begins to shift how a survivor sees themselves."

SLIDE 4 — Trauma in the Body
"Bessel van der Kolk's work changed how the field thinks about trauma. The insight is that trauma is not merely a psychological phenomenon — it is physiological. The body literally keeps the score. Survivors often carry trauma in chronic pain, persistently tight muscles, a digestive system that never settles, a startle response that never switches off.

The Window of Tolerance is a key therapeutic concept. It describes the zone of nervous system activation in which processing is actually possible — not so calm that the person is dissociated from the material, and not so activated that they are overwhelmed by it. Effective trauma therapy works carefully within that window, expanding it gradually over time."

SLIDE 5 — NICE-Recommended Treatments
"NICE recommends both EMDR and Trauma-Focused CBT for PTSD, and the evidence for both is strong. The goal of both therapies is the same: to help the person integrate the traumatic memory — not erase it, but transform it so that it becomes a memory of the past rather than a present threat.

EMDR uses bilateral stimulation — typically guided eye movements — while the person holds aspects of the traumatic memory in mind. The mechanism is still being researched, but the outcomes data is excellent. Before any trauma processing begins in either approach, stabilisation is essential: safety, grounding, a therapeutic relationship. You cannot process what you cannot yet tolerate."`,
    activity: `ACTIVITY — Grounding Toolkit (20 minutes)
Melksham Mental Health | Module 7 | Licensed Materials

PURPOSE: Equip participants with evidence-based grounding techniques used in trauma-informed care. These are tools for daily use, not just for people with PTSD.

INTRODUCE: "Grounding techniques bring us back into the present moment when we feel overwhelmed, activated, or flooded by difficult memories or emotions. They work by engaging the sensory system — pulling attention into the body and the environment. These are tools used in trauma therapy, but they are useful for everyone."

PART 1 — 5-4-3-2-1 Sensory Grounding (5 minutes):
Read aloud: "Look around the room. Name 5 things you can see. Touch 4 things around you and notice their texture. Listen carefully for 3 distinct sounds. Identify 2 things you can smell. Notice 1 thing you can taste. Take a slow breath."
Practice together. Ask: How did that feel? What changed in your body?

PART 2 — Box Breathing (5 minutes):
"Breathe in for 4 counts. Hold for 4. Exhale for 4. Hold for 4. Repeat 4 times."
Practice together. Explain: this activates the parasympathetic nervous system, directly counteracting the fight-or-flight stress response. Used by military, emergency services, and elite athletes.

PART 3 — Safe Place Visualisation (5 minutes):
"Close your eyes if comfortable, or lower your gaze. Picture a place — real or imagined — where you feel completely safe and at ease. Fill in the sensory details: what do you see? What sounds are there? What does the air feel like? Spend a moment allowing your body to respond to this place."
After 3 minutes: "Gently bring your attention back to the room."

DEBRIEF (5 minutes): Which technique felt most useful? When in your daily life — or professional practice — could you use these? How might you introduce these to someone you are supporting?`,
    discussionPrompts: [
      'Why has PTSD historically been associated mainly with combat veterans, when trauma affects many different populations including survivors of abuse, refugees, and emergency workers?',
      'What does "healing from trauma" actually mean — is full recovery possible, or is it more about learning to live differently alongside what happened?',
      'How might the physical symptoms of trauma — chronic pain, GI problems, fatigue — be misunderstood or mismanaged in medical settings?',
      'What would a genuinely trauma-informed community, school, or workplace look like in practice — and what would need to change to create one?',
    ],
    resources: [
      { label: 'Mind — PTSD', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/post-traumatic-stress-disorder-ptsd/' },
      { label: 'NHS — PTSD overview and treatment', url: 'https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/' },
      { label: 'EMDR Association UK — find a therapist', url: 'https://emdrassociation.org.uk' },
      { label: 'Combat Stress (veteran PTSD)', url: 'https://combatstress.org.uk' },
      { label: 'Rape Crisis England & Wales', url: 'https://rapecrisis.org.uk' },
    ],
    videos: [
      { label: 'How PTSD changes the brain — TED-Ed (YouTube)', url: 'https://www.youtube.com/watch?v=mc7oKkFWOzc' },
      { label: 'EMDR explained — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=EMDR+therapy+explained+NHS' },
      { label: 'Bessel van der Kolk — The Body Keeps the Score (lecture)', url: 'https://www.youtube.com/results?search_query=bessel+van+der+kolk+body+keeps+score+lecture' },
    ],
    powerPoint: `MODULE 7 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black background (#0a0a0a), orange accents (#f97316), white text (#ffffff)
Slides: Title + 5 content + Activity + Q&A = 8 slides total
Slide 1 Title: "PTSD & Complex PTSD" | Module 7 | MMH logo centred | Licence watermark diagonal
Slide 2: Four-quadrant grid graphic — Re-experiencing / Avoidance / Negative Cognition / Hyperarousal, each in MMH orange bordered box
Slide 3: Venn diagram — PTSD and C-PTSD — orange on black
Slide 4: Window of Tolerance diagram — hyper/hypo arousal zones, window highlighted in orange
Slide 5: Treatment pathway — stabilisation → processing → integration — timeline format
Slide 6: NICE badge prominently — EMDR and TF-CBT in orange callout boxes
Activity slide: Full orange banner "Grounding Toolkit Practice"
Brand footer: "© Melksham Mental Health | Licensed Training | Not for Redistribution" every slide`,
    tutorNotes: `SAFEGUARDING — HIGH RISK SESSION: This session is likely to trigger personal disclosures of past trauma. Do not attempt any trauma processing work in the group setting. If someone becomes distressed: acknowledge them calmly and warmly, do not push for details, offer to speak privately after the session, and follow your organisation's safeguarding protocol. Have crisis numbers visible throughout — Samaritans 116 123, local crisis line.

GROUNDING ACTIVITY: The grounding activity is appropriate for all participants. However, some trauma survivors find visualisation activating — offer the sensory grounding as an alternative if needed. Never require anyone to close their eyes.

LANGUAGE: Avoid using "traumatised" casually or as a metaphor. Use "survivor" rather than "victim" unless the individual uses that term themselves. Do not use graphic descriptions of traumatic events under any circumstances.

LICENCE: These materials are licensed to the registered user only. Not for redistribution, resale, or delivery by unlicensed practitioners.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 8
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    topic: 'Trauma & Stress: Domestic & Intimate Partner Violence',
    summary: 'The mental health impact of domestic abuse and coercive control; trauma bonding and why leaving is complex; and how to respond safely, supportively, and without judgement.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Scale and Definition',
        bullets: [
          '1 in 4 women and 1 in 6 men experience domestic abuse in their lifetime in England and Wales (ONS, 2023)',
          '2 women killed every week in England and Wales by a current or former partner (femicide census)',
          'Domestic abuse: physical, sexual, emotional, psychological, and financial abuse',
          'Coercive control: a pattern of isolating, humiliating, and controlling behaviour — criminal offence since 2015 (Serious Crime Act)',
          'BRANDED SLIDE: MMH black/orange, statistics as large callout numbers in orange',
        ],
      },
      {
        title: 'Slide 2 — Mental Health Consequences',
        bullets: [
          'PTSD: 64% of survivors experience PTSD symptoms (Women\'s Aid, 2022)',
          'Depression and anxiety: almost universal; often misdiagnosed in primary care without asking about context',
          'Complex PTSD from sustained interpersonal trauma and systematic coercive control',
          'Children who witness domestic abuse: ACE with lasting impact on development, behaviour, and mental health',
          'BRANDED SLIDE: data visualisation — mental health consequences wheel, MMH branded',
        ],
      },
      {
        title: 'Slide 3 — Coercive Control',
        bullets: [
          'Strips autonomy over everyday life — who the person sees, what they wear, their access to money',
          'Tactics: isolation from friends/family, financial control, monitoring movements, gaslighting, humiliation',
          'Technology-facilitated abuse: tracking apps, smart home devices, hacking, monitoring messages',
          'Victim may not recognise it as abuse — reality has been systematically distorted',
          'BRANDED SLIDE: coercive control tactics infographic wheel, MMH branding',
        ],
      },
      {
        title: 'Slide 4 — Trauma Bonding: Why People Stay',
        bullets: [
          'Leaving is the most dangerous time — risk of homicide increases dramatically at the point of separation',
          'Trauma bond: powerful attachment formed through cycles of tension, explosion, honeymoon, and calm',
          'Intermittent reinforcement (reward unpredictability) mirrors the neurology of gambling addiction',
          'Financial dependency, housing, immigration status, children, isolation all create real barriers to leaving',
          'BRANDED SLIDE: the abuse cycle diagram — four stages — orange on black',
        ],
      },
      {
        title: 'Slide 5 — How to Respond Safely',
        bullets: [
          'Believe them — never challenge, minimise, or express disbelief',
          'Do not tell them what to do — support their autonomy; coercive control has already taken that',
          'Do NOT contact the perpetrator — this can escalate danger significantly and without warning',
          'National Domestic Abuse Helpline: 0808 2000 247 (Refuge, free, 24/7)',
          'BRANDED SLIDE: safe response protocol — green/red checklist in MMH style, helpline numbers prominent',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Scale and Definition
"Domestic abuse is one of the most common forms of trauma in the UK and one of the most underreported. The statistics are stark: one in four women and one in six men will experience it in their lifetime. On average, two women are killed every week in England and Wales by a current or former partner.

Coercive control — a pattern of behaviour that controls every aspect of a person's life without necessarily involving physical violence — was made a criminal offence in 2015. This was a landmark moment, because it recognised what survivors had always known: that the most damaging form of abuse is often psychological, not physical."

SLIDE 2 — Mental Health Consequences
"The mental health impact of domestic abuse is severe and wide-ranging. Nearly two-thirds of survivors experience PTSD symptoms. Depression and anxiety are almost universal. One of the most damaging aspects of how we currently respond to this is that survivors frequently present to GPs and mental health services with depression or anxiety — and nobody asks about their home circumstances. The underlying cause goes unidentified, and the treatment is inadequate.

Children who live with domestic abuse — even if they are never directly harmed — are experiencing one of the most significant adverse childhood experiences. The nervous system impact begins very early and is long-lasting."

SLIDE 3 — Coercive Control
"Coercive control is the aspect of domestic abuse that is hardest to explain to those who have not experienced it, and — critically — hardest to identify from inside it. It works by gradually, systematically dismantling a person's sense of reality, their relationships with family and friends, their access to money, and their confidence in their own perceptions.

Gaslighting — making someone doubt their own memory and judgement — is central to coercive control. The survivor may genuinely not recognise what is happening as abuse, especially if it began subtly and escalated slowly. This is not stupidity. It is the consequence of sustained psychological manipulation."

SLIDE 4 — Trauma Bonding
"I want to spend time on this because it is the most misunderstood aspect of domestic abuse. The question 'why doesn't she just leave?' has caused enormous harm. The answer has multiple layers.

First: leaving is the most dangerous moment. The risk of serious harm and killing increases dramatically at the point of separation — perpetrators often escalate when they feel they are losing control.

Second: trauma bonding. The cycle of tension, explosion, honeymoon and calm creates intermittent reinforcement — exactly the neurological mechanism that makes gambling addictive. The brain becomes conditioned to anticipate and hope for the honeymoon phase. The love is real. The bond is real. Understanding this should generate compassion, not judgment."

SLIDE 5 — How to Respond Safely
"If someone discloses to you, there are three things you must never do: challenge or disbelieve them, tell them what they should do, and contact the perpetrator.

The reason you do not contact the perpetrator should be obvious — but it is worth stating clearly. Any contact, even well-intentioned ('I need you to know I'm worried about your partner'), can tell the perpetrator that their partner has disclosed. This can escalate to serious harm.

What you can do: listen, believe, validate, and signpost. The National Domestic Abuse Helpline — 0808 2000 247 — is free, 24 hours a day, run by Refuge, and staffed by specialist advisers."`,
    activity: `ACTIVITY — Recognising Coercive Control (20 minutes)
Melksham Mental Health | Module 8 | Licensed Materials

MATERIALS: Case study cards (4 scenarios — prepared by facilitator in advance, see below)

INSTRUCTIONS:
Divide into groups of 3–4. Each group receives one scenario card describing a relationship. Some clearly depict coercive control; some are ambiguous; some describe healthy relationships with normal conflict.

Groups discuss for 10 minutes:
1. What patterns, if any, are present in this relationship?
2. What might the person in this scenario be experiencing emotionally?
3. If this person disclosed to you, what would your most helpful response be?

Whole-group debrief (10 minutes):
Share key observations. Facilitator addresses common misconceptions:
• "It's not abuse if it's not physical" — FALSE: coercive control is the most damaging form
• "He can't be a victim" — FALSE: men experience domestic abuse at significant rates
• "She must have done something to provoke it" — NEVER an appropriate response
• "They seem happy/normal in public" — coercive control thrives on public performance

SCENARIO CARDS GUIDANCE:
Scenario A: clearly coercive — financial control, isolation, monitoring
Scenario B: ambiguous — controlling behaviour that could be read as caring concern
Scenario C: healthy conflict — disagreement resolved through communication
Scenario D: emotional and psychological abuse without physical violence`,
    discussionPrompts: [
      'What cultural and societal factors make it harder for men, or people in same-sex relationships, to disclose domestic abuse and be believed?',
      'How could healthcare professionals better identify domestic abuse when it presents as depression, anxiety, or unexplained physical symptoms?',
      'What does genuinely trauma-informed support look like for a domestic abuse survivor — what does it include and what does it avoid?',
      'How do we shift the public conversation from "why doesn\'t she leave?" to "why does he abuse?" — and why does that shift matter?',
    ],
    resources: [
      { label: 'National Domestic Abuse Helpline: 0808 2000 247 (24/7)', url: 'https://www.nationaldahelpline.org.uk' },
      { label: 'Women\'s Aid — resources for survivors', url: 'https://www.womensaid.org.uk' },
      { label: 'ManKind Initiative (male survivors)', url: 'https://mankind.org.uk' },
      { label: 'Galop (LGBT+ domestic abuse)', url: 'https://galop.org.uk' },
      { label: 'SafeLives — research, tools and DASH risk assessment', url: 'https://safelives.org.uk' },
    ],
    videos: [
      { label: 'Coercive control explained — Women\'s Aid (YouTube)', url: 'https://www.youtube.com/results?search_query=coercive+control+explained+women%27s+aid' },
      { label: 'Why victims stay — TED Talk (YouTube)', url: 'https://www.youtube.com/results?search_query=why+domestic+violence+victims+don%27t+leave+ted+talk' },
      { label: 'Trauma bonding explained (YouTube)', url: 'https://www.youtube.com/results?search_query=trauma+bonding+domestic+abuse+explained' },
    ],
    powerPoint: `MODULE 8 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff) — full MMH brand
Slides: Title + 5 content + Activity + Q&A = 8 total
Slide 1: Large orange statistics — "1 in 4" "1 in 6" "2 per week" as hero numbers
Slide 4: Abuse cycle diagram — four stages in circular format, MMH orange on black
Slide 5: Green/red safe response checklist — DO / DO NOT columns clearly delineated
Activity slide: Orange banner "Case Study Activity", group instructions white on black
Crisis numbers displayed at the BOTTOM of EVERY slide in small text
Brand footer: "© Melksham Mental Health | Licensed Training | Not for Redistribution"
Watermark: faint diagonal "LICENSED — NOT FOR REDISTRIBUTION" on every slide`,
    tutorNotes: `SAFEGUARDING — CRITICAL: There are likely to be survivors of domestic abuse in the group — both current and historical. Do not require any personal disclosure at any point. If someone discloses during or after the session: listen, believe, do not push for details, and follow your organisation's safeguarding protocol. NEVER contact the perpetrator under any circumstances.

MANDATORY REPORTING: If a participant discloses that a child is currently at risk of harm, you must follow safeguarding procedures immediately. This overrides confidentiality.

FACILITATION: Maintain an empowering, non-judgmental tone throughout. Survivors are not defined by what happened to them. Do not allow any language that could be interpreted as placing responsibility for the abuse on the survivor.

CASE STUDIES: Case study scenarios should describe behavioural patterns and emotional dynamics — NOT graphic violence or sexual abuse. Test scenarios with a colleague before use.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 9
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    topic: 'Trauma & Stress: Childhood Trauma & ACEs',
    summary: 'How adverse childhood experiences shape brain development, physical health and life outcomes — the ACE framework, resilience and protective factors, and trauma-informed practice as the antidote.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Are ACEs?',
        bullets: [
          'Adverse Childhood Experiences: potentially traumatic events occurring before age 18',
          'CDC-Kaiser Permanente ACE Study (1998): landmark research linking childhood adversity to adult disease',
          '10 ACE categories: physical, sexual, emotional abuse; physical, emotional neglect; household dysfunction (witnessing violence, substance misuse, mental illness, incarceration, parental separation)',
          'UK data: 47% of adults report at least 1 ACE; 9% report 4 or more (Public Health Wales, 2022)',
          'BRANDED SLIDE: ACE categories listed in two columns, orange headers, MMH branding',
        ],
      },
      {
        title: 'Slide 2 — How ACEs Affect Brain Development',
        bullets: [
          'Toxic stress: repeated stress response activation without adequate recovery disrupts brain architecture',
          'Hippocampus (memory and context): reduced volume in children with high ACE scores',
          'Amygdala (threat detection): becomes hyperactive — always scanning for danger',
          'Prefrontal cortex (planning, impulse control, reasoning): slower development under chronic stress',
          'BRANDED SLIDE: brain diagram with affected regions highlighted in orange, labelled clearly',
        ],
      },
      {
        title: 'Slide 3 — Lifelong Health Consequences',
        bullets: [
          '4+ ACEs: 12× higher risk of suicide attempt, 7× higher risk of alcoholism (Public Health Wales)',
          'Higher rates of: heart disease, cancer, diabetes, chronic lung disease, liver disease',
          'Chronic inflammation from toxic stress — physical illness is not only behavioural consequence',
          'Social consequences: lower educational attainment, unemployment, homelessness, contact with criminal justice system',
          'BRANDED SLIDE: ACE pyramid graphic — adversity → disrupted development → disease → early death',
        ],
      },
      {
        title: 'Slide 4 — Resilience and Protective Factors',
        bullets: [
          'Resilience is NOT innate — it is built through relationships, environment, and opportunity',
          'A single stable, warm, consistent adult relationship can significantly buffer the impact of ACEs',
          'Protective factors: school connectedness, community belonging, economic stability, access to healthcare',
          'Neural plasticity: the brain retains the capacity to change and heal throughout the lifespan',
          'BRANDED SLIDE: protective factors shield graphic, warm orange tones',
        ],
      },
      {
        title: 'Slide 5 — Trauma-Informed Practice',
        bullets: [
          'Core question shift: from "What is wrong with you?" to "What happened to you?"',
          'SAMHSA 6 principles: Safety, Trustworthiness, Peer Support, Collaboration, Empowerment, Cultural Sensitivity',
          'Applicable everywhere: healthcare, education, social care, criminal justice, housing, community services',
          'Breaking the cycle: trauma-informed parenting support significantly reduces intergenerational transmission',
          'BRANDED SLIDE: six principles in hexagonal grid, MMH orange/black palette',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Are ACEs?
"The ACE study is one of the most important pieces of public health research of the past 30 years, and it is still not widely enough known outside specialist fields. Conducted by the CDC and Kaiser Permanente in the United States, and extensively replicated in the UK, it demonstrated with extraordinary clarity that what happens to us in childhood has profound, measurable effects on our health across the entire lifespan.

The ten ACE categories cover three broad domains: abuse, neglect, and household dysfunction. In Wales — which has conducted the most comprehensive UK ACE prevalence research — nearly half of all adults report at least one ACE. Nine percent report four or more. It is in that group where we see the most dramatic consequences."

SLIDE 2 — How ACEs Affect Brain Development
"Understanding what ACEs actually do to the developing brain is essential to understanding why their consequences are so long-lasting.

The stress response — the fight-or-flight system — is designed to activate in response to threat, and then return to baseline once the threat has passed. In a safe environment, this is normal and even healthy. In a chronically unsafe or unpredictable environment, the stress response activates repeatedly without adequate recovery. We call this toxic stress.

Over time, toxic stress literally reshapes the brain's architecture. The hippocampus — critical for memory and context — is smaller in children with high ACE scores. The amygdala — the brain's alarm system — becomes hyperactive, scanning constantly for danger. The prefrontal cortex — responsible for reasoning, impulse control, and planning — develops more slowly.

These children are not naughty. They are not difficult. They are neurologically dysregulated because their brains have adapted to live in danger."

SLIDE 3 — Lifelong Health Consequences
"The health consequences of ACEs are not limited to mental health. People with four or more ACEs are 12 times more likely to attempt suicide. They are significantly more likely to develop heart disease, cancer, diabetes, and chronic lung disease. This is not only because of lifestyle factors such as smoking or drinking — although those play a role. It is also because chronic toxic stress in childhood triggers inflammatory processes that damage the body at a cellular level over decades.

This reframes many of the people we encounter in health and social care settings who are labelled as 'hard to engage', 'chaotic', or 'non-compliant'. Many of them are people whose nervous systems were shaped by adversity, and who have never had the opportunity to heal."

SLIDE 4 — Resilience and Protective Factors
"Here is where the hope is — and it is genuine hope, not platitude. Resilience is not a fixed characteristic you either have or don't. It is built through relationships, through environment, through the presence of consistent, caring adults and supportive communities.

The research is clear: a single stable, warm, consistent relationship with an adult — a grandparent, a teacher, a youth worker, a neighbour — can make a statistically significant difference to a child's life outcomes, even when ACE scores are high.

Neural plasticity means the brain retains its capacity to change throughout life. Healing is not just possible — it is a normal response to the right conditions."

SLIDE 5 — Trauma-Informed Practice
"The most powerful shift that trauma-informed practice represents is this change in question: from 'What is wrong with you?' to 'What happened to you?' That shift changes everything about how we relate to someone who is struggling.

Trauma-informed practice is not a specialist intervention requiring advanced clinical training. It is a lens that any professional — any person — can apply. It costs nothing. It prevents retraumatisation. And it builds the safety that genuine healing requires."`,
    activity: `ACTIVITY — Protective Factors Mapping (20 minutes)
Melksham Mental Health | Module 9 | Licensed Materials

PURPOSE: Help participants identify what protects people from the impact of adversity, and how they can build or strengthen those factors.

PART 1 — Individual Reflection (7 minutes):
Ask participants to think about a time they faced significant difficulty — not necessarily childhood trauma, simply any period of genuine adversity. Write down privately:
• Who or what helped most during this time?
• What qualities did that person, place, or resource have?
• What was missing that would have made a significant difference?
• Did the difficulty change you — and if so, how?

PART 2 — Small Group Discussion (8 minutes):
In groups of 3–4, share your reflections (share only what feels comfortable). Together, identify common themes: what do protective factors have in common? What characteristics do they share?

PART 3 — Whole Group Synthesis (5 minutes):
Facilitator brings together key themes. Connect to ACE research: most of what participants identify as helpful (stable relationship, feeling safe, having someone who believed in them, economic security) maps directly onto the protective factors the evidence identifies.

Closing question: What is one thing each of us could do — in our personal or professional lives — to be a protective factor for someone else?`,
    discussionPrompts: [
      'How does an understanding of ACEs change the way we think about people experiencing homelessness, addiction, or contact with the criminal justice system?',
      'What would a genuinely trauma-informed school look like — what would be different about how staff respond to difficult behaviour?',
      'How do we balance accountability with compassion when someone\'s harmful behaviour stems from unprocessed childhood trauma?',
      'What can any individual do — as a neighbour, family member, community member, professional — to become a protective factor for a child?',
    ],
    resources: [
      { label: 'Public Health Wales — ACE research hub', url: 'https://phw.nhs.wales/topics/adverse-childhood-experiences/' },
      { label: 'NSPCC — understanding child abuse and neglect', url: 'https://www.nspcc.org.uk/what-is-child-abuse/' },
      { label: 'NHS — children\'s mental health', url: 'https://www.nhs.uk/mental-health/children-and-young-adults/' },
      { label: 'Centre for the Developing Child — Harvard (science of resilience)', url: 'https://developingchild.harvard.edu' },
      { label: 'NSPCC Helpline: 0808 800 5000', url: 'https://www.nspcc.org.uk/keeping-children-safe/our-services/nspcc-helpline/' },
    ],
    videos: [
      { label: 'The ACE study — how childhood trauma affects health (TED Talk, Nadine Burke Harris)', url: 'https://www.youtube.com/watch?v=95ovIJ3dsNk' },
      { label: 'Resilience: the biology of stress and the science of hope (documentary)', url: 'https://www.youtube.com/results?search_query=resilience+biology+stress+science+hope+documentary' },
      { label: 'Building resilience in children — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=building+resilience+children+NHS' },
    ],
    powerPoint: `MODULE 9 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Key graphics required:
— Slide 2: Brain diagram with hippocampus, amygdala, prefrontal cortex labelled and highlighted orange
— Slide 3: ACE pyramid (CDC model) adapted with MMH branding
— Slide 4: Protective factors shield graphic — warm orange tones
— Slide 5: SAMHSA 6 principles hexagonal grid, MMH orange/black
All slides: MMH logo bottom-right, crisis numbers footer, licence watermark
Title slide: "Childhood Trauma & ACEs" white large text, Module 9 orange badge, MMH logo centred
Activity slide: full orange header "Protective Factors Mapping"`,
    tutorNotes: `SAFEGUARDING: Participants may be reflecting on their own childhood trauma, sometimes for the first time in an educational context. Provide space, do not push for disclosure, and have clear signposting to counselling support available. If a participant discloses that a child is currently at risk, follow mandatory safeguarding reporting procedures immediately.

FACILITATION: This session contains both difficult material (ACE consequences) and genuinely hopeful material (resilience, neuroplasticity). Balance is essential — do not allow the session to become purely focused on damage and risk. The protective factors activity is as important as the risk data.

LANGUAGE: Never use "damaged" to describe ACE-impacted individuals. Use person-first language. Emphasise that behaviour is often adaptive, not inherently problematic.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 10
  // ─────────────────────────────────────────────────────────────
  {
    id: 10,
    topic: 'Trauma & Stress: Self-harm & Suicide Prevention',
    summary: 'Understanding self-harm and suicidal thoughts without stigma; safe-messaging principles for professionals and communities; how to ask directly and respond supportively; UK crisis resources.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Understanding Self-harm',
        bullets: [
          'Self-harm: deliberate injury to one\'s own body as a way of coping with overwhelming distress — not attention-seeking',
          'UK: 1 in 6 young people self-harms; also prevalent in adults, frequently hidden and under-reported',
          'Functions: releasing unbearable emotional pain, feeling real when numb, self-punishment, regaining sense of control',
          'Most people who self-harm feel profound shame — it is rarely disclosed; rarely performed for an audience',
          'BRANDED SLIDE: MMH black/orange, compassionate framing — "a coping strategy, not a character flaw"',
        ],
      },
      {
        title: 'Slide 2 — Understanding Suicidal Thoughts',
        bullets: [
          'Suicidal ideation: more common than widely understood — ~20% of people experience it at some point in their lives',
          'Having suicidal thoughts ≠ acting on them — thoughts exist on a spectrum from passive to active with plan',
          'UK: ~6,000 deaths by suicide per year; men account for ~75% (ONS 2023)',
          'Risk factors: previous attempt (single strongest predictor), mental illness, substance misuse, isolation, recent loss',
          'BRANDED SLIDE: spectrum diagram from passive ideation to active plan, clearly labelled, orange gradient',
        ],
      },
      {
        title: 'Slide 3 — Safe Messaging Principles',
        bullets: [
          'Do NOT describe or name methods — method exposure can increase risk, particularly in vulnerable people',
          'Do NOT present suicide as a solution, romantic, inevitable, or as the result of a single cause',
          'Language matters: "died by suicide" ✓ | "committed suicide" ✗ | "successful suicide" ✗',
          'ALWAYS include crisis resources alongside any content on suicide or self-harm',
          'BRANDED SLIDE: DO / DO NOT two-column checklist, green tick / red cross, MMH styling',
        ],
      },
      {
        title: 'Slide 4 — How to Ask and Respond',
        bullets: [
          'Asking directly about suicide does NOT plant the idea or increase risk — evidence consistently shows it REDUCES risk',
          'Direct question: "Are you thinking about suicide?" or "Are you having thoughts of ending your life?"',
          'Listen fully — do not minimise ("you have so much to live for"), advise, or immediately refer',
          'Stay present; help them access support; follow up; document if in a professional role',
          'BRANDED SLIDE: four-step response model — Ask → Listen → Stay → Support, orange step graphic',
        ],
      },
      {
        title: 'Slide 5 — Crisis Resources & Safety Planning',
        bullets: [
          'Samaritans: 116 123 — free, 24/7, confidential (any reason, any time)',
          'NHS 111 mental health option — available 24/7 across England for urgent mental health crisis',
          'PAPYRUS HOPELINEUK (under 35s): 0800 068 4141 | CALM (men/under 35s): 0800 58 58 58 (5pm–midnight)',
          'Safety planning: personal warning signs → coping strategies → people to call → reasons for living',
          'BRANDED SLIDE: crisis numbers in large orange text, safety plan template thumbnail, MMH logo',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Understanding Self-harm
"Before we begin, I want to acknowledge the weight of this session's content. Some of you may have personal experience of self-harm — your own or someone close to you. This is a space of complete non-judgement, and nothing personal is required of you at any point.

Self-harm is a coping mechanism. That is the most important framing I can offer. It is usually the only available response to a moment of overwhelming, unbearable distress. It is almost never about attention-seeking — in fact, the opposite is true: most people who self-harm go to significant lengths to hide it, and feel profound shame about it.

Understanding self-harm as a coping strategy — not a character flaw, not manipulation — is the foundation of being able to support someone."

SLIDE 2 — Understanding Suicidal Thoughts
"Suicidal ideation is far more common than most people realise. Research suggests around one in five people will experience suicidal thoughts at some point in their lives. Having those thoughts is not the same as acting on them. Most people who have suicidal thoughts never attempt suicide.

In the UK, around 6,000 people die by suicide each year. Three-quarters of them are men. That gender gap is one of the most significant and underexplored public health inequalities we have — and it is directly connected to the way our culture teaches men to handle emotional pain."

SLIDE 3 — Safe Messaging
"Safe messaging is not censorship — it is harm reduction. The evidence is clear that describing specific methods of suicide, even in a cautionary context, can increase risk in people who are already vulnerable. This is called the Werther effect, named after a surge in suicides following the publication of Goethe's novel in 1774.

The language we use carries enormous weight. 'Committed suicide' implies that suicide is a crime. 'Completed suicide' implies that other attempts were failures. 'Died by suicide' is the recommended, accurate, non-stigmatising term. Small words matter."

SLIDE 4 — How to Ask and Respond
"I want to address the most persistent myth in suicide prevention directly: asking someone about suicide does not plant the idea or make it more likely. This myth stops people from asking the question that could save a life.

The evidence — from multiple studies across multiple decades — consistently shows that direct, compassionate questioning about suicide reduces risk. It opens a door. It communicates: I can handle hearing the truth. You are not alone with this.

When someone discloses suicidal thoughts, the most helpful response is to listen — fully, without immediately trying to fix it or argue them out of it. Do not say 'you have so much to live for' — however well-intentioned, this often increases shame. Say: 'Thank you for telling me. I'm here. Let's think together about what you need right now.'"

SLIDE 5 — Crisis Resources and Safety Planning
"Everyone in this room should have the Samaritans number committed to memory: 116 123. Free. Available every single day of the year, 24 hours a day. No crisis is too small.

NHS 111 now has a mental health option available 24 hours a day across England — this is a significant expansion of access that not enough people know about.

Safety planning is a collaborative, practical process. It is not a contract not to attempt suicide — evidence suggests those contracts are ineffective and can increase shame. It is a personalised roadmap: what are my warning signs, what coping strategies help me, who can I call, what are my reasons to stay. It externalises knowledge that is hardest to access when most needed."`,
    activity: `ACTIVITY — Breaking Down Barriers to Asking (20 minutes)
Melksham Mental Health | Module 10 | Licensed Materials

PURPOSE: Build genuine confidence in asking directly about suicidal thoughts — the single most important skill this session teaches.

PART 1 — What Stops Us? (5 minutes):
In pairs, discuss: What would stop you from asking someone directly if you were worried they might be thinking about suicide? Make a list of your barriers.

Collect responses on a whiteboard. Common themes will include:
• Fear of planting the idea
• Fear of getting it wrong or making it worse
• Not knowing what to say next
• Fear of upsetting them
• Professional liability concerns
• Personal discomfort with the topic

PART 2 — Myth Busting (5 minutes):
Facilitator addresses each barrier with the evidence:
• "Planting the idea" — 50+ years of research shows direct questioning reduces, not increases, risk
• "Getting it wrong" — the greatest risk is not asking at all
• "What to say next" — you do not need to fix it; being present and listening is enough
• "Upsetting them" — people who are asked about suicide almost universally report feeling relieved and less alone
• Professional liability — in most professional contexts, not asking when warning signs are present is the greater risk

PART 3 — Practising the Question (10 minutes):
In pairs, take turns practising saying these words out loud — because saying them aloud is different from reading them:
"I've been worried about you. Are you thinking about suicide?"
"Sometimes when people go through what you're going through, they have thoughts of ending their life. Has that been true for you?"
"I want to ask you something directly because I care about you — are you thinking about harming yourself?"

After each practice: How did it feel to say those words? What made it easier or harder? What changed with repetition?`,
    discussionPrompts: [
      'Why are men in the UK so much more likely to die by suicide than women — and what would meaningful change look like?',
      'How has media coverage of suicide changed in recent years, and what further improvements to safe messaging would make a difference?',
      'What does our culture need to change to make it genuinely easier for people to disclose suicidal thoughts without fear of judgement or consequences?',
      'What is the difference between someone who is asking for help and someone who is in immediate danger — and how do we respond appropriately to both?',
    ],
    resources: [
      { label: 'Samaritans: 116 123 (free, 24/7)', url: 'https://www.samaritans.org' },
      { label: 'PAPYRUS HOPELINEUK (under 35s): 0800 068 4141', url: 'https://www.papyrus-uk.org' },
      { label: 'CALM (men and under 35s): 0800 58 58 58', url: 'https://www.thecalmzone.net' },
      { label: 'Zero Suicide Alliance — free online training (20 min)', url: 'https://www.zerosuicidealliance.com' },
      { label: 'Mind — understanding suicidal feelings', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/suicidal-feelings/' },
      { label: 'Samaritans safe messaging guidelines for media', url: 'https://www.samaritans.org/about-samaritans/research-policy/safe-reporting-suicide/guidelines-media/' },
    ],
    videos: [
      { label: 'How to ask about suicide — Zero Suicide Alliance training (YouTube)', url: 'https://www.youtube.com/results?search_query=zero+suicide+alliance+training' },
      { label: 'CALM — why men don\'t talk (YouTube)', url: 'https://www.youtube.com/results?search_query=CALM+why+men+dont+talk+suicide' },
      { label: 'Understanding self-harm — Mind UK (YouTube)', url: 'https://www.youtube.com/results?search_query=mind+charity+understanding+self+harm' },
    ],
    powerPoint: `MODULE 10 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
CRITICAL: Crisis numbers displayed at bottom of EVERY slide — Samaritans 116 123 always visible
Slide 3: DO/DO NOT checklist — green tick column left, red cross column right, clear and bold
Slide 4: Four-step response model — Ask → Listen → Stay → Support — step graphic in orange
Slide 5: Crisis numbers in extra-large orange text — this slide to be a resource leave-behind
Activity slide: "Breaking Down Barriers" — barrier list on left, evidence on right
ALL slides: sensitivity note in small text — "Safe space. Nothing personal required."
Watermark: "© Melksham Mental Health | Licensed | Not for Redistribution"`,
    tutorNotes: `SAFEGUARDING — CRITICAL SESSION: This is the highest-risk session in the programme. You MUST be prepared to respond to disclosures of current suicidal ideation.

IF SOMEONE DISCLOSES CURRENT SUICIDAL THOUGHTS:
1. Acknowledge warmly and calmly — "Thank you for telling me. I'm glad you did."
2. Ask directly: "Are you safe right now?"
3. Do not leave them alone if they are in immediate danger
4. Call 999 if there is immediate risk to life
5. Follow your organisation's safeguarding protocol
6. Document the disclosure and your response

FACILITATION: Do not describe any methods of self-harm or suicide at any point. Discuss them only in abstract terms (e.g., "harmful means"). Follow Samaritans' Media Guidelines throughout this session.

DEBRIEF: Allow at least 5 minutes at the end of the session for participants to ground themselves. Acknowledge the emotional weight of the content. Display Samaritans (116 123) and NHS 111 throughout.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 11
  // ─────────────────────────────────────────────────────────────
  {
    id: 11,
    topic: 'Mood Disorders: Major Depression',
    summary: 'Major depressive disorder in full — the complete symptom picture, biopsychosocial causes, what it actually feels like from inside, and the full evidence-based treatment pathway.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is Major Depression?',
        bullets: [
          'More than sadness: a pervasive change in mood, thinking, body, and behaviour lasting 2+ weeks',
          'Core diagnostic criteria: depressed mood most of the day AND/OR loss of interest or pleasure (anhedonia)',
          'UK: 1 in 6 people experience a depressive episode in their lifetime; ~3.3% of adults at any time (NHS, 2023)',
          'Most common mental health condition in the UK — yet still widely misunderstood and undertreated',
          'BRANDED SLIDE: MMH black/orange, "1 in 6" as hero statistic in large orange text',
        ],
      },
      {
        title: 'Slide 2 — The Full Symptom Picture',
        bullets: [
          'EMOTIONAL: persistent low mood, hopelessness, worthlessness, excessive guilt, emptiness, irritability',
          'COGNITIVE: poor concentration, memory impairment, negative automatic thoughts, suicidal ideation',
          'PHYSICAL: profound fatigue, insomnia or hypersomnia, appetite change (loss or increase), psychomotor retardation or agitation',
          'BEHAVIOURAL: social withdrawal, reduced activity, neglecting responsibilities, self-neglect',
          'BRANDED SLIDE: four-quadrant symptom grid — emotional/cognitive/physical/behavioural — MMH orange headers',
        ],
      },
      {
        title: 'Slide 3 — Causes: The Biopsychosocial Model',
        bullets: [
          'BIOLOGICAL: neurotransmitter dysregulation (serotonin, dopamine, noradrenaline), genetic predisposition, chronic inflammation',
          'PSYCHOLOGICAL: negative cognitive schemas (Beck), rumination, perfectionism, early attachment disruption',
          'SOCIAL: adverse life events, chronic stress, poverty, social isolation, discrimination, abuse, bereavement',
          'The "chemical imbalance" narrative alone is an oversimplification — social context is essential',
          'BRANDED SLIDE: biopsychosocial triangle graphic with examples in each segment, MMH branded',
        ],
      },
      {
        title: 'Slide 4 — What Depression Actually Feels Like',
        bullets: [
          'Often described as greyness, numbness, or absence — not sadness but the disappearance of feeling',
          '"Wearing a lead suit" — exhaustion that sleep does not repair',
          'Anhedonia: previously enjoyed activities feel hollow, pointless, inaccessible',
          'Cognitive symptoms frequently most disabling: can\'t concentrate, can\'t decide, negative thoughts feel like facts',
          'BRANDED SLIDE: quote-style slide with first-person descriptors in large white italic text on black',
        ],
      },
      {
        title: 'Slide 5 — Evidence-Based Treatment',
        bullets: [
          'NICE Step 1–4 model: guided self-help → CBT/counselling → antidepressants → specialist care',
          'CBT: gold-standard psychological therapy — challenges negative thinking and reduces avoidance',
          'SSRIs: effective for moderate–severe depression; 6–12 months minimum course; not first-line for mild',
          'Exercise: 30 min aerobic activity 3×/week has antidepressant effect equivalent to medication for mild-moderate depression (NICE)',
          'BRANDED SLIDE: NICE stepped care pyramid, MMH branding, treatment options at each level labelled',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is Major Depression?
"Depression is the most common mental health condition in the UK — and arguably the most misunderstood. When someone says they are depressed, they are often met with responses like 'just push through it' or 'try to be more positive'. Those responses reflect a fundamental misunderstanding of what major depression actually is.

This is not ordinary sadness. This is not a bad week. This is a condition that changes the entire way a person's brain functions — their ability to feel, think, remember, sleep, eat, and move through the world. One in six of us will experience a depressive episode in our lifetime. Most will wait far too long before seeking help, and many will never receive the treatment that could change their lives."

SLIDE 2 — The Full Symptom Picture
"I want to walk through the full symptom picture because depression is so much more than low mood.

The cognitive symptoms are often the most disabling in terms of daily functioning. You cannot do your job, maintain relationships, or make decisions when your concentration is severely impaired, when your memory is failing, and when every thought is filtered through a lens of absolute negativity that feels completely real.

The physical symptoms are often the most medically puzzling. Profound fatigue that no amount of sleep relieves. An appetite that either disappears completely or becomes compulsive. A body that moves more slowly or more restlessly than usual. These are not secondary features — they are core to the condition."

SLIDE 3 — Causes: The Biopsychosocial Model
"The simplest explanation for depression — that it is a 'chemical imbalance' — has done significant harm by removing the social and psychological dimensions from the picture. More recent research has significantly complicated and in some cases challenged the serotonin hypothesis.

What we do know, clearly, is that adverse life events — loss, trauma, chronic stress, poverty, discrimination, isolation — are among the strongest predictors of depression. Depression is a human response to unbearable circumstances, as well as a biological condition. Understanding both dimensions is essential for appropriate treatment and for reducing the stigma that still prevents people from seeking help."

SLIDE 4 — What Depression Actually Feels Like
"This slide is here because empathy requires understanding — and understanding requires getting closer to what this actually feels like from the inside.

People with depression frequently describe it not as intense sadness but as absence. A greyness where colour used to be. A disconnection from everything — from people they love, from activities that used to bring pleasure, from any sense of a future. Anhedonia — the inability to feel pleasure — is one of the cruellest aspects of depression. You do not merely feel sad. You feel nothing. And feeling nothing, for a person who used to feel everything, can be its own particular despair."

SLIDE 5 — Evidence-Based Treatment
"Depression is one of the most treatable conditions in mental health. The NICE stepped care model is designed to match treatment intensity to severity — guided self-help at the mild end, psychological therapy, antidepressants, and specialist input for the most severe presentations.

Exercise has surprisingly strong evidence as an antidepressant intervention. Three sessions of aerobic exercise per week has been shown to have antidepressant effects comparable to medication for mild to moderate depression. This is not a substitute for clinical treatment in severe cases — but it is a genuine, accessible adjunct, and a reason to take lifestyle seriously in the recovery conversation."`,
    activity: `ACTIVITY — Challenging Negative Automatic Thoughts (20 minutes)
Melksham Mental Health | Module 11 | Licensed Materials

BACKGROUND: CBT identifies negative automatic thoughts (NATs) as a key mechanism maintaining depression. The thought record is one of the most widely used CBT tools — it helps people examine the evidence for and against unhelpful thoughts, and develop more balanced, realistic alternatives.

INTRODUCE: "Depression doesn't just change how we feel — it fundamentally changes how we think. Negative thoughts feel completely real and completely factual when we are depressed. The thought record is a tool from cognitive behavioural therapy that helps us examine those thoughts from a slightly different angle."

PART 1 — Common NATs in Depression (5 minutes):
Share a list of common depression-related automatic thoughts:
• "I'm a burden to everyone around me"
• "Things will never get better"
• "I can't do anything right"
• "Nobody actually cares about me"
• "I don't deserve to feel better"
Ask participants to notice (privately) which feel familiar — from their own experience or from people they have supported.

PART 2 — The Thought Record in Pairs (10 minutes):
In pairs, take one thought from the list and work through it together:
1. What is the evidence that this thought is 100% true?
2. What is the evidence against it, or that complicates it?
3. What would you say to a close friend who had this thought?
4. What is a more balanced, realistic alternative thought?

DEBRIEF (5 minutes):
What was that process like? What made it difficult? (Key insight: the depressed brain fights hard against positive reframes — this is normal, and it gets easier with practice.)`,
    discussionPrompts: [
      'Why do so many people wait years — sometimes decades — before seeking help for depression, and what are the most significant barriers?',
      'How do cultural background, gender expectations, and age affect how depression is expressed, recognised, and treated?',
      'What is the role of social factors — poverty, isolation, discrimination — in depression, and can psychological therapy alone adequately address these causes?',
      'What does genuine, full recovery from depression look like — and how does a person know when they have reached it?',
    ],
    resources: [
      { label: 'Mind — depression', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression/' },
      { label: 'NHS — depression in adults', url: 'https://www.nhs.uk/mental-health/conditions/depression-in-adults/overview/' },
      { label: 'NHS Talking Therapies self-referral', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
      { label: 'CALM helpline: 0800 58 58 58 (5pm–midnight)', url: 'https://www.thecalmzone.net' },
      { label: 'Samaritans: 116 123 (24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'What is depression? — TED-Ed (YouTube)', url: 'https://www.youtube.com/watch?v=z-IR48Mb3W0' },
      { label: 'Living with depression — Mind UK (YouTube)', url: 'https://www.youtube.com/results?search_query=living+with+depression+mind+uk' },
      { label: 'CBT for depression explained — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=CBT+for+depression+explained+NHS' },
    ],
    powerPoint: `MODULE 11 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: "1 in 6" hero statistic — massive orange text on black, high impact
Slide 2: Four-quadrant symptom grid — emotional/cognitive/physical/behavioural in MMH orange bordered boxes
Slide 3: Biopsychosocial triangle — biological, psychological, social at each point, MMH branded
Slide 4: Quote-style slide — first-person depression descriptions in large italic white text, atmospheric
Slide 5: NICE stepped care pyramid, each step labelled, treatment options annotated, NICE badge
Activity slide: Thought record template reproduced on slide for participants to follow
All slides: Samaritans 116 123 in footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Depression and suicidal ideation co-occur frequently. Be alert to distress during the cognitive symptoms section and the activity. If anyone discloses thoughts of self-harm or suicide, apply Module 10 safeguarding protocols immediately.

FACILITATION: Some participants will have lived experience of depression — their own or a close family member's. Validate this explicitly. Do not allow dismissive attitudes ("just get on with it") to go unchallenged. Lived experience is a form of expertise.

CBT ACTIVITY: The thought record can feel confrontational or ineffective when someone is deeply depressed. Normalise this — it is a skill that takes practice, and the point is to understand the technique, not to immediately feel better.

LANGUAGE: Avoid "suffering from" — prefer "living with" or "experiencing" depression. Do not suggest exercise or lifestyle as cures for severe depression.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 12
  // ─────────────────────────────────────────────────────────────
  {
    id: 12,
    topic: 'Mood Disorders: Bipolar Disorder',
    summary: 'Bipolar I and II — what mania and depression actually feel like from inside; why it takes nearly a decade to diagnose; lithium and mood stabilisers; and how to support someone living with bipolar.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is Bipolar Disorder?',
        bullets: [
          'Characterised by episodes of mania or hypomania alternating with depressive episodes',
          'UK prevalence: ~2% of the population; affects men and women equally across all demographics',
          'Bipolar I: full manic episodes (≥7 days, often requiring hospitalisation) + depressive episodes',
          'Bipolar II: hypomanic episodes (shorter, less severe) + depressive episodes — NOT a milder form of Bipolar I',
          'Average time from symptom onset to correct diagnosis: 9.5 years (Bipolar UK, 2023)',
          'BRANDED SLIDE: MMH black/orange, "9.5 years" in large orange text — the diagnostic delay statistic',
        ],
      },
      {
        title: 'Slide 2 — Mania and Hypomania',
        bullets: [
          'Elevated or irritable mood, dramatically reduced need for sleep without fatigue',
          'Grandiosity, racing thoughts, pressured (rapid, unstoppable) speech, distractibility',
          'Increased goal-directed activity, severe impulsivity, high-risk behaviour (financial, sexual, business)',
          'Psychotic features in severe mania: delusions of grandeur, hallucinations, complete loss of insight',
          'BRANDED SLIDE: mania feature list with "INSIGHT IMPAIRED" callout in orange warning box',
        ],
      },
      {
        title: 'Slide 3 — The Depressive Phase',
        bullets: [
          'Bipolar depression is often more prolonged, severe, and treatment-resistant than unipolar depression',
          'Identical symptom profile to MDD but antidepressants ALONE can trigger manic switch — diagnosis matters',
          'Lifetime suicide risk: 20–30× higher than general population — bipolar carries the highest suicide risk of any psychiatric condition',
          'Most people with bipolar spend more total time depressed than elevated — the disorder is predominantly depressive',
          'BRANDED SLIDE: comparison bar chart — time in depression vs mania across bipolar subtypes',
        ],
      },
      {
        title: 'Slide 4 — Causes and Triggers',
        bullets: [
          'Strong genetic component: heritability estimated at 60–85% — one of the most heritable psychiatric conditions',
          'Sleep disruption is the single strongest environmental trigger for both mania and depression',
          'Substance misuse (especially cannabis, stimulants, alcohol) can trigger episodes and worsen course',
          'Stressful life events often precipitate first episodes; later episodes may occur with less obvious triggers',
          'BRANDED SLIDE: trigger web diagram with sleep at centre as primary trigger, MMH branded',
        ],
      },
      {
        title: 'Slide 5 — Treatment and Long-Term Management',
        bullets: [
          'Mood stabilisers: lithium (gold standard, 70+ years evidence), valproate, lamotrigine, quetiapine',
          'Lithium reduces suicide risk by up to 80% — one of the most potent anti-suicide interventions in all medicine',
          'Psychoeducation: learning personal early warning signs transforms long-term outcomes',
          'Lifestyle: sleep regularity is non-negotiable; avoid alcohol and stimulants; maintain daily routine',
          'BRANDED SLIDE: treatment pyramid — lifestyle base → mood stabiliser → psychoeducation → acute treatment at top',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is Bipolar Disorder?
"Bipolar disorder is one of the most misunderstood and most frequently misdiagnosed conditions in mental health. The average person with bipolar disorder waits 9.5 years from their first episode to receiving the correct diagnosis. That is nearly a decade — often spent being treated for depression alone, with antidepressants that can trigger mania, and without the mood stabilisation that is essential.

Two percent of the UK population has bipolar disorder. It affects men and women equally, across all demographics, and it is a lifelong condition that requires lifelong management — but with appropriate treatment and support, people with bipolar disorder lead full, productive, rich lives."

SLIDE 2 — Mania and Hypomania
"One of the most challenging aspects of mania is that in its early stages, it can feel wonderful. The person feels more energetic, more creative, more capable, more connected than they have in years. Ideas come rapidly. They need very little sleep and feel no fatigue. They start projects, make plans, feel invincible.

As mania progresses, insight begins to erode — and that erosion is part of the illness itself. The person may make catastrophic financial decisions, enter into risky relationships, go days without sleep, alienate people around them — and have little or no awareness that anything is wrong. This is part of what makes it so frightening for families and carers, and so hard to interrupt."

SLIDE 3 — The Depressive Phase
"There is a common misconception that bipolar disorder is characterised mainly by dramatic highs. In reality, most people with bipolar spend significantly more time in depressive phases. And bipolar depression is often more severe, more persistent, and harder to treat than unipolar depression.

The clinical implications of this are critical. Antidepressants given alone — without a mood stabiliser — can trigger a switch into mania or a rapid cycling pattern. This is why getting the diagnosis right is not merely academic. It changes the treatment completely. Misdiagnosis as unipolar depression, and subsequent prescription of antidepressants alone, can make things significantly worse."

SLIDE 4 — Causes and Triggers
"Bipolar disorder has a very strong genetic component — it is one of the most heritable psychiatric conditions we know. But genetics loads the gun; environment pulls the trigger. And among environmental triggers, sleep disruption is the most reliable and most researched.

This is not a small lifestyle consideration. Sleep regularity — waking and sleeping at consistent times, even at weekends, even when on holiday — is clinically essential for people with bipolar disorder. It is one of the most powerful things they can do to stabilise their mood."

SLIDE 5 — Treatment and Long-Term Management
"Lithium has been used for bipolar disorder for over 70 years. It remains the gold standard because it is effective at preventing both manic and depressive episodes, and its anti-suicide effect is extraordinary — up to 80% reduction in suicide risk. It requires regular blood monitoring, and not everyone can tolerate it, but for those who can, it is genuinely life-changing.

Psychoeducation — learning to recognise the personal, individual early warning signs that an episode is beginning — is perhaps equally important. The key is to build awareness before insight is impaired. That often means involving trusted others who can notice the signs before the person themselves does."`,
    activity: `ACTIVITY — Early Warning Signs and Personal Mood Map (20 minutes)
Melksham Mental Health | Module 12 | Licensed Materials

PURPOSE: Understand the clinical concept of a "relapse signature" and why early recognition transforms outcomes in bipolar disorder.

INTRODUCE: "Everyone's bipolar disorder has a personal signature — a pattern of early warning signs that an episode is beginning. These signs appear before the episode becomes severe, and — critically — before insight is impaired. Identifying and documenting these signs, and sharing them with trusted people, is one of the most powerful tools in long-term management."

PART 1 — Introduction to the Mood Map (5 minutes):
Explain the concept of the personal mood spectrum from -5 (severe depression) through 0 (stable) to +5 (full mania). Draw on whiteboard.

Common early warning signs of upswing (hypomania emerging):
• Sleeping less but feeling energised
• Increased spending or planning
• Racing thoughts or increased talkativeness
• Feeling unusually confident or special
• Becoming irritable or impatient

Common early warning signs of downswing:
• Sleeping more, not wanting to get up
• Withdrawing from social contact
• Losing interest in things that usually matter
• Negative rumination intensifying
• Physical slowness or heaviness

PART 2 — Personal Worksheet (10 minutes):
Participants complete privately (no sharing required):
• What are my earliest signs of an upswing?
• What are my earliest signs of a downswing?
• Who in my life is most likely to notice before I do?
• What three actions would I take if I noticed these signs?

DEBRIEF (5 minutes):
Why does early recognition matter so much in bipolar disorder? (Answer: because insight deteriorates precisely when it is most needed — which is why having a trusted other person involved in the plan is essential, not optional.)`,
    discussionPrompts: [
      'Why does bipolar disorder take an average of 9.5 years to be correctly diagnosed, and what would need to change to close that gap?',
      'How does the cultural myth of the "creative genius" with bipolar (e.g., romanticised portrayals in media) help or harm people who actually live with the condition?',
      'What can family members and close friends realistically offer in supporting someone with bipolar — and where are the limits of that support?',
      'How should employers respond when a member of staff is in a manic or depressive episode — what are the legal and ethical obligations?',
    ],
    resources: [
      { label: 'Bipolar UK — lived experience and support', url: 'https://www.bipolaruk.org' },
      { label: 'Mind — bipolar disorder', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/bipolar-disorder/' },
      { label: 'NHS — bipolar disorder overview', url: 'https://www.nhs.uk/mental-health/conditions/bipolar-disorder/' },
      { label: 'Rethink Mental Illness — bipolar', url: 'https://www.rethink.org/advice-and-information/about-mental-illness/learn-more-about-conditions/bipolar-disorder/' },
      { label: 'Samaritans: 116 123 (24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'What is bipolar disorder? — TED-Ed (YouTube)', url: 'https://www.youtube.com/watch?v=RrWBhVlD1H8' },
      { label: 'Living with bipolar — Bipolar UK (YouTube)', url: 'https://www.youtube.com/results?search_query=bipolar+UK+lived+experience' },
      { label: 'Lithium for bipolar — how it works (YouTube)', url: 'https://www.youtube.com/results?search_query=lithium+bipolar+disorder+how+it+works' },
    ],
    powerPoint: `MODULE 12 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: "9.5 years" diagnostic delay — massive orange hero number, immediate impact
Slide 2: Mania feature list — "INSIGHT IMPAIRED" warning callout box in orange border
Slide 3: Time-in-phase bar chart — depression vs elevated in Bipolar I vs II — comparative
Slide 4: Sleep trigger emphasis — "Sleep regularity is not optional — it is clinical" as pull quote
Slide 5: Treatment pyramid — lifestyle foundation → mood stabiliser → psychoeducation
Activity slide: Mood spectrum line (-5 to +5) printed for participants, warm/cold colour coding
All slides: Samaritans 116 123 footer, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING: Bipolar disorder carries the highest lifetime suicide risk of any psychiatric condition. Be alert to disclosures of suicidal ideation throughout this session. If someone appears currently unwell — either elevated or deeply depressed — check in privately and follow safeguarding protocol.

MEDICATION: Do not advise participants to start, stop, or change any medication under any circumstances. If someone raises medication questions, signpost to their GP or psychiatrist.

FACILITATION: Do not present the manic phase as desirable or as a "gift". Many people with bipolar are distressed by the loss of insight that comes with mania, and by the damage episodes cause to their relationships and careers. Equally, do not present bipolar as incompatible with a full life — many people with bipolar thrive with appropriate support.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 13
  // ─────────────────────────────────────────────────────────────
  {
    id: 13,
    topic: 'Mood Disorders: Seasonal & Persistent Depressive Disorders',
    summary: 'SAD, persistent depressive disorder (dysthymia) and cyclothymia — the longer, lower mood conditions that are chronically missed and undertreated, and the simple interventions that transform them.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Seasonal Affective Disorder (SAD)',
        bullets: [
          'Recurrent major depressive episodes with a clear seasonal pattern — typically autumn/winter onset, spring remission',
          'UK prevalence: ~3% diagnosable SAD; up to 20% experience sub-syndromal "winter blues" (SADA)',
          'Symptoms: low mood, hypersomnia (excessive sleep), carbohydrate craving, social withdrawal, fatigue',
          'Cause: disrupted circadian rhythms and melatonin/serotonin dysregulation in reduced natural light',
          'BRANDED SLIDE: split image — dark winter vs bright spring, mood line graph overlaid, MMH orange accent',
        ],
      },
      {
        title: 'Slide 2 — SAD Treatment',
        bullets: [
          'Light therapy: 10,000-lux broad-spectrum white lightbox, 20–30 minutes every morning — first-line',
          'Effectiveness: 50–80% improvement with consistent morning light therapy (NICE CG90)',
          'NOT a UV lamp or tanning light — specific light intensity is what matters',
          'CBT adapted for SAD (CBT-SAD): addresses winter behavioural withdrawal patterns',
          'SSRIs (sertraline, fluoxetine): effective for severe SAD; can be started prophylactically in September',
          'BRANDED SLIDE: lightbox image with technical spec callout (10,000 lux, 20–30 mins, morning)',
        ],
      },
      {
        title: 'Slide 3 — Persistent Depressive Disorder (Dysthymia)',
        bullets: [
          'Low-grade but persistent depression lasting ≥2 years in adults (≥1 year in children)',
          'UK prevalence: ~3% of adults; lifetime prevalence significantly higher',
          'Key features: chronic low mood most of the day, most days — not meeting full MDD criteria but causing real impairment',
          '"I\'ve always been like this" — the most common barrier to treatment; normalised over years or decades',
          'BRANDED SLIDE: timeline graphic showing years of persistent low mood, orange annotation "THIS IS TREATABLE"',
        ],
      },
      {
        title: 'Slide 4 — Cyclothymia',
        bullets: [
          'Persistent mood instability: hypomanic and depressive symptoms below diagnostic threshold for Bipolar II',
          'Duration requirement: ≥2 years in adults; symptoms present for at least half of that time',
          'Prevalence: 0.4–2.5% of the population; emotional volatility often normalised as "just my personality"',
          '15–50% progress to full Bipolar I or II disorder over time — monitoring is clinically important',
          'BRANDED SLIDE: mood fluctuation graph showing cyclothymia pattern vs bipolar vs stable baseline',
        ],
      },
      {
        title: 'Slide 5 — Treatment and Self-Management',
        bullets: [
          'Behavioural activation: scheduling rewarding and purposeful activities — highly effective for dysthymia and SAD',
          'Sleep and light regularity: most cost-effective intervention for both SAD and cyclothymia',
          'CBT, DBT, schema therapy: effective across all three conditions',
          'Medication: antidepressants for dysthymia and severe SAD; mood stabilisers for cyclothymia',
          'Validation: years of moderate suffering deserve professional recognition and active treatment',
          'BRANDED SLIDE: self-management toolkit infographic — light, sleep, activity, connection, therapy',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Seasonal Affective Disorder
"SAD is often treated as a mild inconvenience — 'I get a bit low in winter, doesn't everyone?' For some people, it genuinely is mild. For others, it is a severely disabling condition that reliably wipes out months of every year, year after year, often for decades. Three percent of the UK population has diagnosable SAD. That is roughly 2 million people.

The cause is one of the better-understood mechanisms in psychiatry: reduced light in autumn and winter disrupts the master circadian clock in the hypothalamus, leading to overproduction of melatonin and reduced serotonin synthesis. Essentially, the brain gets the wrong seasonal message."

SLIDE 2 — SAD Treatment
"Light therapy is one of the more underused effective treatments in medicine. Between 50 and 80% of people with SAD improve significantly with a 10,000-lux white lightbox used for 20 to 30 minutes first thing in the morning. Not a UV lamp — not a tanning light. The evidence is specifically for broad-spectrum white light at 10,000 lux used in the morning, because that is when it has the greatest effect on the circadian clock.

Lightboxes cost between £30 and £200. They are available without prescription. If someone you know describes the same depressive pattern every winter, suggesting a lightbox trial is one of the most genuinely useful things you can do."

SLIDE 3 — Persistent Depressive Disorder
"Persistent depressive disorder — formerly called dysthymia — is probably the most underdiagnosed condition in this entire programme. It is characterised by a low-grade, chronic depression that persists for years or decades. The person typically does not seek help because they have normalised it. 'I've always been a bit down. I'm just a pessimist. That's just how I am.'

This is a treatable medical condition. Years of grey, joyless, low-energy functioning are not inevitable. Not a personality trait. Not just introversion. They are symptoms of a condition that has a name, a cause, and effective treatments. The challenge is helping people believe that there is a genuinely different way of feeling available to them."

SLIDE 4 — Cyclothymia
"Cyclothymia describes persistent emotional volatility — a pattern of mild ups and mild downs that has been present for years without reaching the threshold for bipolar diagnosis. People often describe it as 'just how I am' — emotional, sensitive, up and down. Friends and family may have adapted around it.

Without recognition and support, between 15 and 50% of people with cyclothymia will go on to develop full bipolar disorder. This is not inevitable — but it underlines why identifying it matters, and why people with cyclothymia benefit from mood monitoring and prophylactic support."

SLIDE 5 — Treatment and Self-Management
"Across all three of these conditions, behavioural activation is one of the most consistently effective interventions. Rather than waiting to feel motivated before acting, behavioural activation reverses the sequence: act first, and let mood follow. Deliberately scheduling activities that provide a sense of achievement, connection, and pleasure — even when motivation is absent — begins to shift the mood over time.

The core message I want to leave this module with is this: a lifetime of moderate, grinding, persistent suffering is not inevitable. These conditions are real, they have names, and they have treatments. The first step is recognising that what someone is experiencing is a condition, not a personality."`,
    activity: `ACTIVITY — Light, Rhythm and Mood Audit (20 minutes)
Melksham Mental Health | Module 13 | Licensed Materials

PURPOSE: Explore how everyday lifestyle factors — particularly light exposure and sleep regularity — directly affect mood, and identify practical changes participants can make or recommend.

PART 1 — Self-Audit (7 minutes, private):
Participants privately complete a brief audit:

Light exposure:
• How much natural light do you get on a typical winter weekday?
• What time do you first go outside, or near a window?
• Do you notice your mood/energy change with the seasons?

Sleep and rhythm:
• What time do you typically wake on weekdays vs weekends?
• (Note: a >90-minute difference = "social jet lag" — associated with mood disruption)
• Do you use screens in the hour before bed?
• Is your sleep consistent or highly variable?

Activity:
• How does your level of physical and social activity change in winter?
• Do you have planned outdoor activities or do you tend to hibernate?

PART 2 — Pairs Discussion (8 minutes):
Compare your audit with a partner. What patterns do you notice? Which factors feel most modifiable?

PART 3 — Whole Group (5 minutes):
Facilitator draws out key insights. Introduce "sleep hygiene as mood medicine": consistent wake time, morning light, reduced evening screens. These are evidence-based interventions that are free, accessible, and effective for everyone — not just people with diagnosable conditions.`,
    discussionPrompts: [
      'Why are SAD and persistent depressive disorder so commonly missed in GP consultations, and what would improve their identification?',
      'How does the modern indoor lifestyle and reduced natural light exposure interact with the rising rates of depression — and what could be done at a societal level?',
      'What is the difference between a personality trait ("I\'m naturally a pessimist") and a treatable depressive condition — and how do we have that conversation sensitively?',
      'How might someone with dysthymia respond emotionally to being told that their years of low mood are a diagnosable, treatable condition — and how do we support that response?',
    ],
    resources: [
      { label: 'Mind — Seasonal Affective Disorder', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/seasonal-affective-disorder-sad/' },
      { label: 'NHS — SAD overview', url: 'https://www.nhs.uk/mental-health/conditions/seasonal-affective-disorder-sad/' },
      { label: 'SADA — Seasonal Affective Disorder Association', url: 'https://www.sada.org.uk' },
      { label: 'NHS — Persistent depressive disorder', url: 'https://www.nhs.uk/mental-health/conditions/dysthymia/' },
      { label: 'Bipolar UK — cyclothymia resources', url: 'https://www.bipolaruk.org' },
    ],
    videos: [
      { label: 'What is seasonal affective disorder? — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=seasonal+affective+disorder+NHS+explained' },
      { label: 'Light therapy for SAD — how it works (YouTube)', url: 'https://www.youtube.com/results?search_query=light+therapy+SAD+how+it+works' },
      { label: 'Behavioural activation for depression — explained (YouTube)', url: 'https://www.youtube.com/results?search_query=behavioural+activation+depression+explained' },
    ],
    powerPoint: `MODULE 13 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Split winter/summer image with mood line overlay — atmospheric, MMH branded header
Slide 2: Lightbox image with prominent spec callout — "10,000 LUX | 20–30 MINS | MORNING ONLY"
Slide 3: Timeline of persistent low mood — years marked, "THIS IS TREATABLE" annotation in orange
Slide 4: Mood graph comparing cyclothymia / Bipolar II / stable baseline — clear labels
Slide 5: Self-management toolkit wheel — 5 segments: light, sleep, activity, connection, therapy
Activity slide: Self-audit table for participants — light / sleep / activity columns
All slides: MMH logo, Samaritans 116 123 footer, licence watermark`,
    tutorNotes: `FACILITATION: Dysthymia often produces a powerful moment of recognition in participants who have never considered that their long-term low mood might be a condition rather than a character trait. This can be both relieving and grief-inducing — handle with care and allow space. Do not rush past this moment.

LIGHT THERAPY: Be precise — this is 10,000-lux broad-spectrum white light used in the morning. Not a UV lamp or tanning light. Do not confuse participants with incorrect product recommendations.

LANGUAGE: Avoid implying that cyclothymia or dysthymia are "not real" depression because they are sub-threshold. Duration and chronic impairment are real, and deserve real treatment.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 14
  // ─────────────────────────────────────────────────────────────
  {
    id: 14,
    topic: 'Anxiety Disorders: Generalised Anxiety Disorder',
    summary: 'The nature of chronic, pervasive worry in GAD — why intolerance of uncertainty drives it, the physical and cognitive symptoms, and the full evidence-based treatment toolkit.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is GAD?',
        bullets: [
          'Persistent, excessive, uncontrollable worry about multiple areas of daily life — not ordinary stress',
          'UK prevalence: 5–6% of adults; most common anxiety disorder; more prevalent in women (2:1 ratio)',
          'Worry is disproportionate to the realistic likelihood of feared outcomes and significantly impairs functioning',
          'Onset often gradual in early adulthood; tends to be chronic and fluctuating without treatment',
          'BRANDED SLIDE: MMH black/orange, worry word cloud in white — money, health, family, work, world',
        ],
      },
      {
        title: 'Slide 2 — Symptoms',
        bullets: [
          'PSYCHOLOGICAL: excessive worry, difficulty controlling it, feeling on edge or keyed up, irritability',
          'PHYSICAL: muscle tension, fatigue, sleep disturbance (difficulty falling or staying asleep), headaches, GI symptoms',
          'COGNITIVE: poor concentration, mind going blank, catastrophising, mental hypervigilance',
          'BEHAVIOURAL: avoidance, reassurance-seeking, over-preparing, procrastination, checking behaviours',
          'BRANDED SLIDE: four-quadrant symptom grid — psychological/physical/cognitive/behavioural, orange headers',
        ],
      },
      {
        title: 'Slide 3 — The Psychology of Worry',
        bullets: [
          'Core feature: intolerance of uncertainty — the inability to tolerate not knowing how something will resolve',
          '"What if" thinking: automatic escalation to worst-case outcomes regardless of probability',
          'Worry-as-coping belief: "If I worry enough, I can prevent bad things happening / stay prepared"',
          'The paradox: worry feels useful and responsible — which is why it is so hard to stop',
          'BRANDED SLIDE: worry cycle diagram — trigger → "what if" thought → anxiety → worry → temporary relief → sensitisation',
        ],
      },
      {
        title: 'Slide 4 — Evidence-Based Treatments',
        bullets: [
          'CBT: gold standard — mapping worry cycles, challenging catastrophic thinking, reducing avoidance',
          'Acceptance and Commitment Therapy (ACT): accepts uncertainty; focuses on values-based action despite anxiety',
          'Mindfulness-Based Cognitive Therapy (MBCT): reduces rumination, builds present-moment awareness',
          'Medication: SSRIs/SNRIs (sertraline, venlafaxine) — first-line pharmacological treatment',
          'BRANDED SLIDE: treatment comparison chart — CBT / ACT / MBCT / medication, evidence ratings',
        ],
      },
      {
        title: 'Slide 5 — Self-Management Strategies',
        bullets: [
          'Worry time: schedule a fixed 20-minute daily worry window — contains worry instead of letting it colonise the day',
          'Progressive muscle relaxation and diaphragmatic breathing — directly counter the physical anxiety response',
          'Exercise: one of the most effective non-pharmacological interventions for anxiety — 30 min 3×/week',
          'Caffeine and alcohol both significantly worsen anxiety symptoms — lifestyle matters clinically',
          'BRANDED SLIDE: self-management toolkit — worry time clock graphic, breathing diagram, lifestyle icons',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is GAD?
"Everyone worries. Worry in itself is adaptive — it prepares us for difficulty, motivates action, and can protect us from real threats. GAD is what happens when that system runs on high alert constantly, about multiple areas of life simultaneously, in a way that is disproportionate, uncontrollable, and significantly impairing.

Five to six percent of UK adults have GAD. It is the most common anxiety disorder in this country. Many more people live with significant anxiety that does not quite meet diagnostic criteria but is still significantly affecting their quality of life and their capacity to function."

SLIDE 2 — Symptoms
"One of the most important things to understand about GAD is that the physical symptoms are frequently the presenting complaint. People come to their GP with persistent headaches, GI problems, muscle tension, fatigue, or insomnia — and the anxiety driving all of those symptoms is not asked about or identified.

The behavioural symptoms are often the most overlooked: the constant reassurance-seeking, the over-preparation, the avoidance of anything that might activate worry. These behaviours are sensible responses to anxiety in the short term, but they maintain and strengthen GAD in the long term."

SLIDE 3 — The Psychology of Worry
"At the psychological heart of GAD is intolerance of uncertainty. This is the key insight from the cognitive model. The person with GAD cannot tolerate the experience of not knowing how something will turn out — so they worry as a way of feeling in control, of staying prepared, of avoiding being caught off guard.

Worry feels responsible. It feels like caring. It feels like competence. 'If I worry about it, at least I'm taking it seriously. If I stop worrying, something bad might happen.' This belief keeps the system running. The treatment has to gently challenge not just the content of worries, but the function they serve."

SLIDE 4 — Evidence-Based Treatments
"CBT for GAD is highly effective and is the NICE-recommended first-line psychological treatment. It works by mapping the worry cycle, identifying the unhelpful thinking patterns that drive it, testing whether the catastrophic outcomes actually happen, and reducing the avoidance and reassurance-seeking that maintain the anxiety.

ACT takes a different but complementary approach: instead of challenging thoughts, it teaches acceptance of uncertainty as an unavoidable part of life, and helps the person commit to valued action even in the presence of anxiety. Both approaches have strong evidence bases."

SLIDE 5 — Self-Management Strategies
"Worry time is one of the most counterintuitive but effective self-management tools for GAD. The idea is to designate a specific 20-minute window each day — say, 5pm — as the designated worry time. When worries appear at other times, the person notes them and defers them to worry time. This sounds too simple to work. The evidence says otherwise — it significantly reduces the pervasiveness of worry without eliminating it.

Physical exercise deserves emphasis here — it is one of the most consistently effective non-pharmacological interventions for anxiety, reducing cortisol, increasing GABA activity, and improving sleep. It is also free and available immediately."`,
    activity: `ACTIVITY — Mapping the Worry Cycle (20 minutes)
Melksham Mental Health | Module 14 | Licensed Materials

MATERIALS: Worry cycle worksheets (MMH branded) or plain paper

INTRODUCE: "We are going to map one recurring worry through the cycle to understand how it works and what keeps it going. This is a core CBT technique."

Draw the worry cycle on a whiteboard:
TRIGGER EVENT → "WHAT IF...?" THOUGHT → ANXIETY (body sensations) → WORRY BEHAVIOUR (avoid / check / reassure) → TEMPORARY RELIEF → INCREASED SENSITISATION OVER TIME → (back to triggers more easily)

PART 1 — Individual Mapping (8 minutes, private):
Each participant identifies one recurring worry and maps it through the cycle:
• What is the trigger? (A situation, a thought, a physical sensation)
• What is the "what if" thought? (The catastrophic version)
• What do I feel in my body when this happens?
• What do I do to reduce the anxiety? (Avoid, check, research, seek reassurance, over-prepare)
• What happens to the worry in the longer term?

PART 2 — Pairs Discussion (7 minutes):
Share what you noticed — not necessarily the content of the worry, but the pattern. How does the relief-seeking behaviour maintain the cycle? What would happen if you resisted the urge to seek relief?

PART 3 — Whole Group (5 minutes):
Key insight: the opposite of avoidance is approach; the opposite of reassurance-seeking is tolerating uncertainty. Both are uncomfortable in the short term and liberating in the long term. This is the CBT principle of habituation — anxiety reduces when you stay with it rather than escaping.`,
    discussionPrompts: [
      'How do we distinguish healthy vigilance and reasonable concern from GAD-level anxiety — and who should be making that distinction?',
      'What role does the 24-hour news cycle, social media and the always-on culture play in the rising rates of anxiety disorders?',
      'Why might someone with GAD be reluctant to give up their worry — what function is it serving, and how do we address that therapeutically?',
      'What workplace adjustments make the most significant difference for someone living with GAD?',
    ],
    resources: [
      { label: 'Mind — Generalised Anxiety Disorder', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/generalised-anxiety-disorder-gad/' },
      { label: 'NHS — GAD overview', url: 'https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder/' },
      { label: 'Anxiety UK — support and information', url: 'https://www.anxietyuk.org.uk' },
      { label: 'NHS Talking Therapies (self-referral)', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
      { label: 'No More Panic — UK community and resources', url: 'https://www.nomorepanic.co.uk' },
    ],
    videos: [
      { label: 'How anxiety works in the brain — TED-Ed (YouTube)', url: 'https://www.youtube.com/watch?v=ZidGozDhOjg' },
      { label: 'CBT for anxiety — worry postponement technique (YouTube)', url: 'https://www.youtube.com/results?search_query=CBT+worry+postponement+anxiety+technique' },
      { label: 'What is GAD? — Mind UK (YouTube)', url: 'https://www.youtube.com/results?search_query=generalised+anxiety+disorder+Mind+UK' },
    ],
    powerPoint: `MODULE 14 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Word cloud of worry topics — "health money family work world relationships future" in white/grey on black, MMH orange header
Slide 3: Worry cycle diagram — circular flow with labels at each stage, orange arrows
Slide 5: Self-management toolkit — worry time clock icon, breathing diagram, exercise icon — infographic style
Activity slide: Worry cycle worksheet reproduced for participant use
IMPORTANT: These slides should feel structured and reassuring — not alarmist. Design communicates "this is understandable and treatable"
All slides: MMH logo, Samaritans 116 123 footer, licence watermark`,
    tutorNotes: `FACILITATION: Many participants will have personal experience of anxiety. This is one of the most relatable sessions in the programme. Normalise anxiety explicitly — it is a universal human experience; GAD is when the system runs out of appropriate proportion and control. Use the worry cycle diagram to make the psychology tangible and non-threatening.

LANGUAGE: Avoid "just relax" or "stop worrying" — these are experienced as dismissive and unhelpful. Acknowledge that worry feels functional and even virtuous, even when it isn't.

ACTIVITY: Keep the mapping analytical rather than immersive — observe the pattern rather than inhabit the worry. Some participants may find this activating; if so, bring attention back to the breath and the room.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 15
  // ─────────────────────────────────────────────────────────────
  {
    id: 15,
    topic: 'Anxiety Disorders: Phobias & Panic Disorder',
    summary: 'Specific phobias, social anxiety disorder, and panic disorder — the fear-avoidance cycle, what a panic attack feels like neurologically, and the graduated exposure therapy that resolves them.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Phobias: Types and Prevalence',
        bullets: [
          'Specific phobia: intense, irrational fear of a specific object, situation, or activity that is avoided at significant cost',
          'Most common: animals (particularly spiders/dogs), heights, blood/injury/needles, flying, enclosed spaces',
          'Social anxiety disorder (social phobia): intense fear of social situations and scrutiny by others',
          'UK prevalence: specific phobias ~10% of adults; social anxiety ~7% (NICE, 2022)',
          'BRANDED SLIDE: phobia categories listed with icons, MMH orange accents on black',
        ],
      },
      {
        title: 'Slide 2 — Social Anxiety Disorder',
        bullets: [
          'Fear of being negatively judged, humiliated, or embarrassed in social situations',
          'Often described as: going red, saying something stupid, others thinking I\'m boring/weird/incompetent',
          'Can affect speaking in meetings, eating in public, phone calls, dating, job interviews',
          'Average onset: 13 years; often misidentified as shyness — most people never seek treatment',
          'BRANDED SLIDE: social anxiety thought cycle diagram — situation → self-consciousness → safety behaviours → confirmation of fear',
        ],
      },
      {
        title: 'Slide 3 — Panic Disorder',
        bullets: [
          'Recurrent unexpected panic attacks + persistent fear of further attacks + change in behaviour to avoid them',
          'Panic attack: sudden onset of intense fear peaking within 10 minutes — palpitations, sweating, trembling, shortness of breath, chest pain, dizziness, derealisation, fear of dying',
          'UK prevalence: 1.2–3.5% of adults; panic attacks without disorder much more common (~15%)',
          'Often misdiagnosed as cardiac emergency — extremely frightening but not physically dangerous',
          'BRANDED SLIDE: panic attack symptom body diagram — physical symptoms mapped to body outline, orange labels',
        ],
      },
      {
        title: 'Slide 4 — The Fear-Avoidance Cycle',
        bullets: [
          'Avoidance provides immediate relief but strengthens the association between stimulus and fear',
          'The brain learns: "I escaped, therefore I was in danger" — reinforcing the threat appraisal',
          'Agoraphobia: avoidance of situations where escape might be difficult — often develops secondary to panic disorder',
          'Safety behaviours (e.g., sitting near exits, checking exits before entering) maintain anxiety in the long term',
          'BRANDED SLIDE: fear-avoidance cycle diagram, orange arrows, avoidance labelled as "short-term relief / long-term trap"',
        ],
      },
      {
        title: 'Slide 5 — Graduated Exposure Therapy',
        bullets: [
          'Gold standard treatment across all phobias and panic disorder — NICE recommended',
          'Fear hierarchy: ranked list of feared situations from least to most scary (0–100 SUDS scale)',
          'Graded exposure: systematic, supported approach to feared situations without escape — each step repeated until anxiety reduces',
          'Interoceptive exposure (for panic): deliberately inducing sensations (spin, hyperventilate) to reduce fear of them',
          'Outcome: ~90% of specific phobias significantly improve with exposure therapy',
          'BRANDED SLIDE: exposure hierarchy ladder graphic, steps labelled, MMH orange rungs',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Phobias: Types and Prevalence
"Phobias are the most common mental health condition. Around one in ten UK adults has a specific phobia. Most never seek treatment because they have arranged their life around avoidance — and avoidance works, until it doesn't. Until the spider is in the room and you can't leave. Until the blood test is essential and you faint. Until your world has shrunk to the places where you never encounter the feared thing.

Social anxiety disorder is particularly important to understand because it is so commonly dismissed as shyness or introversion. It is neither. It is a persistent, specific fear of social situations that causes real impairment — affecting careers, relationships, education, and quality of life for millions of people who have never received treatment."

SLIDE 2 — Social Anxiety Disorder
"Social anxiety is not about not liking people. Most people with social anxiety want very much to connect with others — the anxiety is precisely about how others will perceive them. The terror is of humiliation: of saying something stupid, of visibly going red, of being exposed as somehow inadequate.

What maintains social anxiety is the same thing that maintains all phobias: avoidance and safety behaviours. Not making eye contact, speaking very quietly, rehearsing conversations in advance, leaving early, declining invitations — each behaviour provides temporary relief and permanently strengthens the anxiety."

SLIDE 3 — Panic Disorder
"A panic attack is one of the most frightening experiences a person can have. The physical sensations — racing heart, difficulty breathing, chest pain, dizziness, a feeling of unreality — are so severe that most people who experience their first panic attack call an ambulance, convinced they are having a heart attack or dying.

It is important to be clear: panic attacks are not physically dangerous. They cannot harm the heart, and they will always pass — typically within 10 minutes. What makes them so disabling is not the attacks themselves but the anticipatory anxiety: the constant fear of having another one, and the increasingly elaborate avoidance strategies people build to try to prevent them."

SLIDE 4 — The Fear-Avoidance Cycle
"Avoidance is the engine that powers all anxiety disorders. Each time you avoid a feared situation, you get immediate relief — which teaches the brain that the threat was real and that avoidance was the right response. The association between stimulus and fear grows stronger. The world gets smaller.

Safety behaviours are a subtler form of avoidance. The person with social anxiety who never makes eye contact feels temporarily protected — but they never discover that eye contact would not actually be catastrophic. The feared outcome never gets tested. That is the key insight that drives exposure therapy."

SLIDE 5 — Graduated Exposure Therapy
"Graduated exposure is one of the most effective psychological interventions in existence. The principle is straightforward: systematic, supported approach to feared situations without escape, repeated until the anxiety reduces. The brain learns — through direct experience, not through argument — that the feared outcome does not materialise, or that it is manageable.

For specific phobias, a single therapist-assisted exposure session can produce clinically significant improvement. For social anxiety and panic disorder, a structured 12–16 session course of CBT with exposure components produces lasting change in 60–80% of people. The work is uncomfortable. The results are transformative."`,
    activity: `ACTIVITY — Building an Exposure Hierarchy (20 minutes)
Melksham Mental Health | Module 15 | Licensed Materials

PURPOSE: Understand how exposure hierarchies are constructed and practise the technique using a low-stakes example — demonstrates the core mechanism of exposure therapy.

INTRODUCE: "An exposure hierarchy is the roadmap for graduated exposure therapy. It is a ranked list of feared situations — from least scary at the bottom to most scary at the top. Treatment works by systematically working up the hierarchy, staying in each situation until the anxiety reduces, then moving to the next step."

PART 1 — Introducing SUDS (5 minutes):
Introduce the Subjective Units of Distress scale (0 = no anxiety, 100 = maximum imaginable anxiety). This is the unit of measurement throughout exposure work. Ask participants to calibrate their scale: what would a 10 feel like? A 50? A 90?

PART 2 — Small Group Exercise (10 minutes):
In groups of 3–4, take a common phobia (options: public speaking, or flying, or needles — pre-written on cards). Build an exposure hierarchy of 8–10 steps together:
• What would 0–20 SUDS exposure look like? (e.g., for flying: watching a plane take off on YouTube)
• 20–40? (e.g., visiting an airport without flying)
• 40–60? (e.g., boarding a plane and disembarking)
• 60–80? (e.g., short domestic flight with a trusted companion)
• 80–100? (e.g., long-haul flight alone)

PART 3 — Debrief (5 minutes):
What makes a good exposure hierarchy? (Gradual, specific, repeated until anxiety reduces, NO safety behaviours during exposure.) Why is the order important? (Habituation at each level before escalating.) Why must the person NEVER escape during exposure? (Escape teaches the brain the threat was real.)`,
    discussionPrompts: [
      'When does healthy caution (avoiding genuinely dangerous situations) become phobic avoidance — and how do we make that distinction?',
      'Why is social anxiety so commonly dismissed as shyness or personality, and what are the consequences of that misidentification?',
      'What is the role of childhood experiences — overprotective parenting, bullying, embarrassing experiences — in the development of phobias?',
      'Exposure therapy requires approaching the feared thing — how do we support someone through the short-term discomfort to reach the long-term benefit?',
    ],
    resources: [
      { label: 'Anxiety UK — phobia support', url: 'https://www.anxietyuk.org.uk/our-services/anxiety-information/anxiety-disorders/phobia/' },
      { label: 'Mind — panic attacks and panic disorder', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/panic-attacks/' },
      { label: 'NHS — social anxiety disorder', url: 'https://www.nhs.uk/mental-health/conditions/social-anxiety/' },
      { label: 'No Panic UK helpline: 0300 772 9844', url: 'https://www.nopanic.org.uk' },
      { label: 'NHS Talking Therapies (self-referral)', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
    ],
    videos: [
      { label: 'How phobias are formed and treated — TED-Ed (YouTube)', url: 'https://www.youtube.com/results?search_query=how+phobias+are+formed+ted-ed' },
      { label: 'What happens during a panic attack — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=what+happens+during+panic+attack+NHS' },
      { label: 'Exposure therapy explained — Anxiety UK (YouTube)', url: 'https://www.youtube.com/results?search_query=exposure+therapy+explained+anxiety' },
    ],
    powerPoint: `MODULE 15 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 3: Panic attack body diagram — human silhouette with symptoms radiating outward, orange labels
Slide 4: Fear-avoidance cycle — circular flow diagram, "short-term relief / long-term trap" label in orange
Slide 5: Exposure hierarchy ladder — 8 rungs, lowest at bottom, most feared at top, orange rungs on dark background
Activity slide: SUDS scale (0–100) and blank hierarchy ladder template for participants
All slides: MMH logo, Samaritans 116 123 footer, No Panic 0300 772 9844 also in footer for this module, licence watermark`,
    tutorNotes: `FACILITATION: Panic attacks can be triggered by discussion about panic attacks — this is a real clinical phenomenon (interoceptive conditioning). If someone appears to be experiencing anxiety during this session, ground them gently: "Let's take a slow breath together. You are safe." Do not dramatise.

EXPOSURE ACTIVITY: Emphasise that this is an intellectual exercise, not actual exposure. Nobody should feel genuinely anxious during the activity — the goal is to understand the technique, not to practise it.

SOCIAL ANXIETY: This is likely to be the most personally resonant topic for a significant proportion of participants. Handle with care and explicitly normalise the experience of social anxiety.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 16
  // ─────────────────────────────────────────────────────────────
  {
    id: 16,
    topic: 'Anxiety Disorders: OCD & Related Conditions',
    summary: 'OCD demystified — the obsession-compulsion cycle, intrusive thoughts, Body Dysmorphic Disorder, hoarding, and how ERP therapy breaks the cycle.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is OCD?',
        bullets: [
          'Obsessive-Compulsive Disorder: recurrent obsessions (intrusive, unwanted thoughts/images/urges) + compulsions (mental or physical acts performed to neutralise them)',
          'UK prevalence: ~1–2% of adults; affects men and women equally; onset typically late teens to early 20s',
          'NOT about cleanliness or tidiness — obsessions can cover contamination, harm, blasphemy, sexuality, symmetry, relationship doubts, intrusive violent images',
          'OCD is ego-dystonic: the thoughts are experienced as alien, repugnant, and deeply distressing to the person',
          'BRANDED SLIDE: OCD obsession categories listed — contamination / harm / religion / symmetry / sexual / relationship, MMH orange accents',
        ],
      },
      {
        title: 'Slide 2 — The OCD Cycle',
        bullets: [
          'Intrusive thought → catastrophic appraisal ("this means something terrible about me") → intense anxiety',
          'Compulsion: any behaviour or mental ritual performed to reduce anxiety or prevent feared outcome',
          'Relief is temporary; anxiety returns more quickly; compulsions escalate over time',
          'Time spent: severe OCD can occupy 8+ hours per day, rendering normal functioning impossible',
          'BRANDED SLIDE: OCD cycle diagram — obsession → appraisal → anxiety → compulsion → relief → sensitisation',
        ],
      },
      {
        title: 'Slide 3 — Intrusive Thoughts',
        bullets: [
          '90–94% of non-clinical populations report intrusive unwanted thoughts — the content is often indistinguishable from OCD obsessions',
          'The difference: in OCD, the person attaches catastrophic significance to the thought ("having this thought means I am dangerous")',
          '"Pure O" OCD: primarily mental obsessions and mental compulsions — no visible rituals; often goes unrecognised',
          'Common Pure O themes: harming loved ones, blasphemy, paedophilia (ego-dystonic and deeply distressing)',
          'BRANDED SLIDE: comparison — "everyone has intrusive thoughts" vs "OCD attaches special meaning to them"',
        ],
      },
      {
        title: 'Slide 4 — Body Dysmorphic Disorder & Hoarding',
        bullets: [
          'BDD: preoccupation with perceived defect in appearance that is not observable or appears minor to others',
          'BDD prevalence: ~2% of UK adults; rates of 9–12% in cosmetic surgery settings',
          'BDD-related compulsions: mirror checking, camouflaging, reassurance-seeking, avoiding mirrors entirely',
          'Hoarding disorder: persistent difficulty discarding possessions regardless of actual value; significant impairment',
          'BRANDED SLIDE: BDD and hoarding as OCD-spectrum conditions — diagram showing relationship',
        ],
      },
      {
        title: 'Slide 5 — Treatment: ERP and Beyond',
        bullets: [
          'ERP (Exposure and Response Prevention): NICE gold standard — exposure to triggers WITHOUT performing compulsions',
          'Purpose: experience anxiety rising, then naturally reducing — learns that feared catastrophe does not occur and anxiety is tolerable',
          'Cognitive therapy: challenges the meaning attached to intrusive thoughts (defusion techniques)',
          'Medication: high-dose SSRIs (clomipramine, SSRIs) — effective adjunct; higher doses needed than for depression',
          'BRANDED SLIDE: ERP principle diagram — anxiety spike, response prevention, natural habituation curve',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is OCD?
"OCD is one of the most misrepresented conditions in popular culture. 'I'm so OCD about tidiness' has become a casual phrase — one that trivialises a genuinely debilitating condition. Real OCD is about intrusive, unwanted thoughts that arrive uninvited and cause intense distress, and the compulsive responses people perform to try to neutralise them. It is not about being neat. It can be about having terrifying thoughts about harming people you love, and spending hours every day trying to undo the perceived damage of having those thoughts.

This distinction matters clinically and it matters for stigma. People with OCD are not dangerous. They are often among the most gentle, conscientious, scrupulous people you will meet — the very content of their obsessions reflects what they most care about and most fear becoming."

SLIDE 2 — The OCD Cycle
"The cycle of OCD is elegant and brutal. An intrusive thought arrives. The person attaches catastrophic significance to it: 'the fact that this thought occurred means something terrible about me.' That appraisal generates intense anxiety. The compulsion is performed — checking, washing, repeating a phrase, seeking reassurance — and the anxiety temporarily reduces.

But the cycle tightens over time. Compulsions have to be performed more thoroughly, more times, in more specific ways to achieve the same relief. The triggers multiply. The time consumed increases. Severe OCD can consume the entire day, leaving no capacity for work, relationships, or self-care."

SLIDE 3 — Intrusive Thoughts
"One of the most important and therapeutic psychoeducational points in this session is this: between 90 and 94% of the general population report experiencing intrusive, unwanted thoughts — including thoughts about harm, sexuality, blasphemy, and violence. The content is often identical to OCD obsessions.

What distinguishes OCD is not the thought itself but the meaning attached to it. The person with OCD believes: 'having this thought means I am capable of acting on it; it says something fundamental about who I am.' This misappraisal, and the compulsive response to it, is the OCD — not the thought.

This insight is both clinically important and often deeply relieving to people with OCD who have carried their thoughts in secret shame for years."

SLIDE 4 — BDD and Hoarding
"Body Dysmorphic Disorder sits within the OCD spectrum. A person with BDD is preoccupied with a perceived physical defect — often facial features, skin, or hair — that is invisible or minor to everyone around them. They may spend hours checking mirrors, covering the perceived flaw, or avoiding social situations entirely.

BDD is particularly important to know about in cosmetic and aesthetic settings. Research suggests that 9–12% of people seeking cosmetic procedures have BDD — for whom surgery will not resolve the underlying distress and may worsen it."

SLIDE 5 — Treatment
"ERP — Exposure and Response Prevention — is the NICE-recommended first-line treatment. The principle is counterintuitive: you encounter the trigger, you allow the anxiety to rise, and you do not perform the compulsion. You stay with the anxiety. And — this is the key discovery — the anxiety reduces on its own. It always does. The brain learns, through direct experience, that the feared outcome does not materialise and that anxiety is survivable.

The work is profoundly uncomfortable in the short term. The outcomes are extraordinary."`,
    activity: `ACTIVITY — Defusing from Intrusive Thoughts (20 minutes)
Melksham Mental Health | Module 16 | Licensed Materials

INTRODUCE: "This activity comes from Acceptance and Commitment Therapy (ACT) and addresses one of the core features of OCD — the tendency to fuse with thoughts and treat them as meaningful signals about our identity. Defusion is the art of observing thoughts without being defined by them."

PART 1 — The Leaf on the Stream (7 minutes):
Guided mindfulness visualisation — read slowly aloud:
"Close your eyes or lower your gaze. Imagine you are sitting by a slow, gentle stream. Leaves float by on the surface. Whenever you notice a thought — any thought — place it gently on a leaf and watch it float downstream. You don't need to do anything with the thought. You don't need to figure it out, agree with it, or argue with it. Just notice it, and let it float."

Run for 4–5 minutes. Then: "Slowly bring your attention back to the room."

PART 2 — Pairs Discussion (8 minutes):
What happened when you placed thoughts on leaves? Did certain thoughts feel more 'sticky'? What happened when you tried to just let them float rather than engage with them?

Connect to OCD: in OCD, thoughts are not placed on leaves — they are grabbed, inspected from every angle, treated as incredibly important, and responded to urgently. The leaf metaphor illustrates what defusion looks like in practice.

PART 3 — Debrief (5 minutes):
Key insight: having a thought is not the same as acting on it, being defined by it, or agreeing with it. Thoughts are mental events — not facts, not instructions, not identity. The capacity to notice a thought without reacting to it is a skill that can be learned.`,
    discussionPrompts: [
      'Why does popular culture so persistently trivialise OCD as "just being clean and organised" — and what is the harm of this framing?',
      'How would you respond if someone disclosed OCD thoughts with themes of harming others — what do they need to hear?',
      'What are the particular challenges of treating "Pure O" OCD where compulsions are mental rather than visible?',
      'How can cosmetic and aesthetic practitioners better identify BDD and respond appropriately without causing harm?',
    ],
    resources: [
      { label: 'OCD Action — UK charity', url: 'https://www.ocdaction.org.uk' },
      { label: 'OCD UK — information and support', url: 'https://www.ocduk.org' },
      { label: 'Mind — OCD', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/obsessive-compulsive-disorder-ocd/' },
      { label: 'NHS — OCD treatment', url: 'https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/treatment/' },
      { label: 'BDD Foundation', url: 'https://bddfoundation.org' },
    ],
    videos: [
      { label: 'What is OCD really? — TED-Ed (YouTube)', url: 'https://www.youtube.com/watch?v=DhlRgwdDc-E' },
      { label: 'ERP therapy for OCD explained — OCD UK (YouTube)', url: 'https://www.youtube.com/results?search_query=ERP+therapy+OCD+explained' },
      { label: 'Intrusive thoughts — everyone has them (YouTube)', url: 'https://www.youtube.com/results?search_query=intrusive+thoughts+everyone+has+them+OCD' },
    ],
    powerPoint: `MODULE 16 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 2: OCD cycle — circular diagram, obsession/appraisal/anxiety/compulsion/relief clearly labelled, orange arrows
Slide 3: Comparison slide — "90–94% of people have intrusive thoughts" vs "OCD attaches special meaning" — two columns
Slide 5: ERP anxiety curve — spike up without compulsion → natural reduction curve → lower baseline, orange curve on dark background
Activity slide: Stream/leaves visualisation — atmospheric nature image with dark overlay, guided text
All slides: OCD Action helpline, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING: Some participants may disclose intrusive thoughts during or after this session for the first time. Receive these calmly, without shock. Normalise the experience of intrusive thoughts while signposting to appropriate professional support for OCD. Do not attempt to assess or diagnose.

FACILITATION: This session requires sensitivity. The OCD obsession themes (harm to loved ones, paedophilia, blasphemy) can be distressing to hear about. Present them factually and without moral commentary — the clinical point is that the ego-dystonic nature of these thoughts is what defines OCD. People with these thoughts are not dangerous.

LANGUAGE: Never describe OCD as a "quirk" or as positive ("at least you're very organised"). Never use it as a descriptor for general tidiness.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 17
  // ─────────────────────────────────────────────────────────────
  {
    id: 17,
    topic: 'Dissociative & Somatic Disorders',
    summary: 'Dissociation as a trauma response — from everyday detachment to DID; somatic symptom disorder; depersonalisation/derealisation; and trauma-informed therapeutic approaches.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is Dissociation?',
        bullets: [
          'Dissociation: a disconnection between thoughts, feelings, actions, sense of identity, and/or memory',
          'Normal dissociation: daydreaming, losing track of time, "highway hypnosis" — universal experiences',
          'Pathological dissociation: a spectrum from depersonalisation/derealisation to dissociative amnesia to DID',
          'Almost always a response to trauma — the mind\'s protection mechanism against overwhelming experience',
          'BRANDED SLIDE: dissociation spectrum diagram — mild/normal at left, DID at right, MMH orange gradient',
        ],
      },
      {
        title: 'Slide 2 — Depersonalisation/Derealisation Disorder',
        bullets: [
          'Depersonalisation: feeling detached from one\'s own body, thoughts, feelings — "watching myself from outside"',
          'Derealisation: the external world feels unreal, dreamlike, foggy, or artificial',
          'UK prevalence: ~1–2% persistent; transient episodes in 50%+ of general population',
          'Triggers: stress, sleep deprivation, anxiety, trauma, cannabis use, panic attacks',
          'BRANDED SLIDE: first-person quote descriptions — "like watching myself in a film" — white italic text on black',
        ],
      },
      {
        title: 'Slide 3 — Dissociative Identity Disorder',
        bullets: [
          'DID: presence of two or more distinct identity states, each with its own name, history, characteristics',
          'Previously "Multiple Personality Disorder" — name changed to better reflect the dissociative nature',
          'Exclusively associated with severe, chronic early childhood trauma — develops as a survival adaptation',
          'Not "split personality" in the Hollywood sense — transitions ("switches") are often subtle and not theatrical',
          'BRANDED SLIDE: accurate vs myth comparison — two columns, common misconceptions addressed',
        ],
      },
      {
        title: 'Slide 4 — Somatic Symptom Disorder',
        bullets: [
          'Real, often severe physical symptoms that cannot be fully explained by a medical condition',
          'Previously "psychosomatic" — a term now avoided as it implies symptoms are imagined or faked (they are not)',
          'Symptoms: pain, fatigue, neurological symptoms, GI problems — often multiple, changing, persistent',
          'Disproportionate distress and preoccupation with the symptoms drives significant impairment',
          'BRANDED SLIDE: "symptoms are REAL — distress is REAL — they are not imagined" as centred callout',
        ],
      },
      {
        title: 'Slide 5 — Trauma-Informed Treatment',
        bullets: [
          'Stabilisation is always first — safety, grounding, daily structure before any exploration of trauma',
          'Phase-based treatment: phase 1 (stabilisation) → phase 2 (trauma processing) → phase 3 (integration)',
          'EMDR, TF-CBT, schema therapy: adapted for dissociative presentations with specialist training',
          'Grounding techniques: essential tools for managing dissociative episodes in daily life',
          'DID specifically requires specialist trauma service input — not appropriate for generalist settings',
          'BRANDED SLIDE: three-phase treatment pathway, MMH orange step graphic',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is Dissociation?
"Dissociation is one of the most elegant protective mechanisms the human mind has. When an experience is too overwhelming to process fully — too painful, too terrifying, too incomprehensible — the mind can create a kind of internal distance between the person and the experience. It is like a psychological circuit breaker.

At mild levels, we all dissociate: daydreaming, losing track of time while driving, becoming absorbed in a film. At pathological levels, dissociation can involve losing hours or days, finding yourself in places you don't remember going, or feeling fundamentally disconnected from your own body and sense of self."

SLIDE 2 — Depersonalisation/Derealisation
"Depersonalisation and derealisation are far more common than most people realise. Brief episodes — triggered by extreme stress, anxiety, or sleep deprivation — affect more than half the population at some point. The persistent disorder affects 1–2% and can be extremely distressing.

People often describe it as 'watching myself from outside my body', 'feeling like I'm not real', or 'the world looks like a film set'. The experience is very difficult to describe and this often compounds distress — people feel unable to explain what is wrong, and may worry that they are losing their mind. They are not."

SLIDE 3 — Dissociative Identity Disorder
"DID is one of the most misrepresented conditions in popular culture. The Hollywood version is theatrical, dramatic, and largely fictional. The clinical reality is more subtle — and more understandable when seen through the lens of what it is: a survival adaptation to severe, chronic childhood trauma.

DID develops when a young child's nervous system cannot integrate overwhelming traumatic experience into a single coherent sense of self. Different aspects of experience and identity become partitioned. The person may have different identity states with different names, voices, ages, or memories. This is not performance. It is the extraordinary resilience of a mind that found the only possible way to survive."

SLIDE 4 — Somatic Symptom Disorder
"Somatic Symptom Disorder is perhaps the most medically mismanaged condition in this programme. Patients with SSD often spend years cycling through medical investigations that find nothing, receiving implicit or explicit messages that their symptoms are not real — that they are imagining them, exaggerating them, or seeking secondary gain.

Let me be absolutely clear: the symptoms are real. The pain is real. The fatigue is real. The neurological symptoms are real. What is real is the connection between psychological distress and physical experience — something that medicine has known since the early 20th century and still, in practice, struggles to apply."

SLIDE 5 — Treatment
"The common thread across all dissociative and somatic presentations is the importance of safety and stabilisation before any deeper work begins. You cannot process what you cannot tolerate. You cannot integrate trauma if the present moment is not yet safe enough to be in.

For anyone presenting with significant dissociation, the standard recommendation is specialist trauma services. In general practice settings, the priority is to provide stability, reduce shame, and ensure appropriate onward referral."`,
    activity: `ACTIVITY — Grounding for Dissociation (20 minutes)
Melksham Mental Health | Module 17 | Licensed Materials

PURPOSE: Equip participants with specific grounding tools for supporting someone who is experiencing a dissociative episode — and for managing dissociation in themselves.

INTRODUCE: "Dissociative episodes can look like many things: a person who goes very still and distant, someone who does not respond to their name, someone who appears confused about where they are, or someone who is unusually calm following a distressing disclosure. The first task is always to gently reconnect them with the present moment."

PART 1 — When Someone Is Dissociating (5 minutes):
What NOT to do:
• Do not raise your voice or add urgency — this increases arousal, not safety
• Do not touch without permission — physical touch can be triggering
• Do not discuss the traumatic content or push for more disclosure

What TO do:
• Gentle, calm voice: "You're in the room with me right now. Can you hear my voice?"
• Orient to the present: "What day is it today? What can you see around you?"
• Use sensory grounding: "Can you feel the chair beneath you? Can you press your feet into the floor?"
• Physical anchor: offer a cool glass of water or a textured object to hold

PART 2 — Sensory Grounding Practice (10 minutes):
Practice in pairs the facilitator script above — one person reads the grounding script, the other experiences being guided through it. Then swap.

Afterwards: How did it feel to be guided like that? What helped most? What would you change?

PART 3 — Debrief (5 minutes):
Key principle: grounding works by engaging the sensory-present system. Dissociation is, neurologically, a disconnection from the here-and-now — grounding re-establishes that connection. These tools can be used outside of a clinical context by anyone.`,
    discussionPrompts: [
      'Why is it so important to stop using the word "psychosomatic" to describe somatic symptom disorder — what message does that word send to patients?',
      'How might a professional without specialist training respond helpfully — and avoid causing harm — to someone who discloses DID?',
      'What does the existence of DID tell us about the capacity of the human mind to survive extraordinary adversity?',
      'How do we create clinical environments where people with dissociative disorders feel safe enough to disclose their experience?',
    ],
    resources: [
      { label: 'Mind — dissociation and dissociative disorders', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/dissociation-and-dissociative-disorders/' },
      { label: 'Depersonalisation Research Unit — IoP', url: 'https://www.depersonalisation.org.uk' },
      { label: 'ISSTD — International Society for the Study of Trauma and Dissociation', url: 'https://www.isst-d.org' },
      { label: 'NHS — somatic symptom disorder', url: 'https://www.nhs.uk/mental-health/conditions/somatic-symptom-disorder/' },
      { label: 'Samaritans: 116 123 (24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'Dissociation explained — Mind UK (YouTube)', url: 'https://www.youtube.com/results?search_query=dissociation+explained+mind+uk' },
      { label: 'Understanding DID — clinical explanation (YouTube)', url: 'https://www.youtube.com/results?search_query=dissociative+identity+disorder+clinical+explanation' },
      { label: 'Somatic symptoms and mental health — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=somatic+symptom+disorder+mental+health+NHS' },
    ],
    powerPoint: `MODULE 17 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Dissociation spectrum — gradient bar from "normal daydream" to "DID", MMH styled
Slide 2: First-person experience quotes — atmospheric, italic white text, dark background, no clinical diagrams
Slide 3: Myth vs reality two-column comparison — clear, orange headers per column
Slide 4: "SYMPTOMS ARE REAL" as full centred callout slide — bold, clear, compassionate
Slide 5: Three-phase treatment pathway — Stabilise → Process → Integrate — orange step graphic
Activity slide: Grounding script reproduced for participant reference
All slides: MMH logo, Samaritans 116 123 footer, licence watermark`,
    tutorNotes: `SAFEGUARDING: Discussions of dissociation, DID, and somatic disorders can be highly activating for trauma survivors. Watch for any participant who goes very still, appears glazed, or becomes unresponsive — this may indicate a dissociative episode. Use the grounding protocol from the activity. Do not continue the session until the person is re-oriented.

DID: If a participant discloses DID, respond warmly and matter-of-factly. Do not express shock or fascination. Do not ask to "meet" other parts. Follow up privately with appropriate safeguarding and referral.

SOMATIC DISORDER: Emphasise throughout that symptoms are real and that the mind-body connection is normal human physiology — not a weakness or a moral failing.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 18
  // ─────────────────────────────────────────────────────────────
  {
    id: 18,
    topic: 'Eating Disorders & Body Image',
    summary: 'Anorexia, bulimia, binge eating disorder, and ARFID — the psychology of disordered eating, the life-threatening medical consequences of anorexia, and what recovery-focused support looks like.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Are Eating Disorders?',
        bullets: [
          'NOT a lifestyle choice; NOT vanity — serious mental health conditions with the highest mortality of any psychiatric disorder',
          'Eating disorders affect 1.25 million people in the UK (Beat, 2023) — all genders, ages, and ethnicities',
          'Core types: Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder, ARFID, Other Specified',
          'Food is the symptom — the eating behaviour is the coping mechanism for underlying distress',
          'BRANDED SLIDE: "highest mortality of any psychiatric disorder" as orange hero statistic',
        ],
      },
      {
        title: 'Slide 2 — Anorexia Nervosa',
        bullets: [
          'Severe restriction of energy intake → significantly low body weight relative to expected minimum',
          'Intense fear of gaining weight OR persistent behaviour interfering with weight gain, even at very low weight',
          'Disturbed body image: sees self as fat when objectively dangerously underweight',
          'Medical consequences: cardiac arrhythmia, bone density loss, electrolyte imbalance, kidney failure — any of which can be fatal',
          'BRANDED SLIDE: medical consequences body diagram with organ labels, clinical urgency tone',
        ],
      },
      {
        title: 'Slide 3 — Bulimia & Binge Eating Disorder',
        bullets: [
          'Bulimia: recurrent binge episodes followed by compensatory behaviours (purging, fasting, excessive exercise)',
          'Binge Eating Disorder (BED): recurrent binges without compensatory behaviour — most common eating disorder',
          'Both associated with profound shame, secrecy, and impact on self-worth tied to eating/body',
          'BED: often misunderstood as "just overeating" — a serious mental health condition with significant medical risk',
          'BRANDED SLIDE: three-condition comparison table — Anorexia / Bulimia / BED — key features each',
        ],
      },
      {
        title: 'Slide 4 — ARFID and Body Image',
        bullets: [
          'ARFID (Avoidant/Restrictive Food Intake Disorder): extreme restriction NOT driven by weight/shape concerns',
          'ARFID drivers: sensory sensitivity, fear of choking/vomiting, lack of interest in food — common in autism/ADHD',
          'Body image: a spectrum from healthy appreciation to clinical body dysmorphia — media and social comparison significant factors',
          'Social media and filtered images: systematic distortion of normal body appearance with real clinical consequences',
          'BRANDED SLIDE: ARFID vs Anorexia comparison — key differentiators clearly shown',
        ],
      },
      {
        title: 'Slide 5 — Treatment and Recovery',
        bullets: [
          'FBT (Family-Based Treatment): gold standard for young people with anorexia — parents take control of renourishment',
          'CBT-E (Enhanced CBT): gold standard for adults — addresses cognitive maintenance of eating disorder',
          'Medical monitoring: eating disorders are medical emergencies at low weight — coordination with GP/physician essential',
          'BEAT helpline: 0808 801 0677 — specialist eating disorder charity, free helpline',
          'Recovery is possible — but takes time, specialist support, and patience with setbacks',
          'BRANDED SLIDE: recovery pathway — GP → CAMHS/eating disorder service → CBT-E/FBT, BEAT helpline prominent',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Are Eating Disorders?
"Eating disorders kill more people than any other mental health condition. That statistic bears repeating: anorexia nervosa has the highest mortality rate of any psychiatric disorder. And yet eating disorders are still widely dismissed as a lifestyle choice, a phase, or a form of vanity. That misunderstanding costs lives.

1.25 million people in the UK have an eating disorder. They affect all genders — although men are significantly underdiagnosed and underserved. They affect all ages, from pre-teen children to adults in their 70s. They are not about food. Food is the symptom. The eating disorder is the coping strategy for something far more fundamental."

SLIDE 2 — Anorexia Nervosa
"Anorexia is a condition in which starvation is the management strategy for unbearable psychological distress. The control over food and body provides a sense of safety, competence, and identity that feels unavailable any other way. The person sees themselves as overweight when they are dangerously underweight — not as delusion exactly, but as a profound distortion of self-perception driven by the disorder.

The medical consequences are severe and can be fatal. Cardiac arrhythmia from electrolyte imbalance is the most common cause of death. At very low weight, the body is in a medical emergency — and treatment requires medical stabilisation before psychological work can begin."

SLIDE 3 — Bulimia and Binge Eating Disorder
"Bulimia is characterised by an out-of-control relationship with food — episodes of binge eating followed by compensatory behaviour to undo it. The shame and secrecy surrounding bulimia is often profound. Many people with bulimia have been managing it for years, sometimes decades, before they tell anyone.

Binge Eating Disorder is the most common eating disorder and the most misunderstood. It is frequently dismissed as a failure of self-control. It is not. Like all eating disorders, the binge is a coping mechanism — for loneliness, shame, anxiety, emptiness, or trauma — and the shame that follows perpetuates the cycle."

SLIDE 4 — ARFID and Body Image
"ARFID is particularly important to understand in the context of autism and ADHD, where sensory sensitivities around food are common. It is not the same as fussy eating. It significantly impairs nutrition, growth, and social functioning. And it requires a completely different treatment approach to other eating disorders.

On body image: the research on social media and filtered images is now quite clear. Regular exposure to digitally altered, filtered, and curated body images is associated with increased body dissatisfaction, disordered eating, and depression — particularly in young people. This is not merely anecdotal. It is a public health issue."

SLIDE 5 — Treatment and Recovery
"Recovery from eating disorders is absolutely possible. It takes time, it is non-linear, and it requires specialist input. The key messages for anyone supporting someone with an eating disorder are: early intervention improves outcomes dramatically, medical safety must be assessed alongside psychological support, and recovery is measured in months and years, not weeks.

BEAT — Beat Eating Disorders — is the UK's leading eating disorder charity. Their helpline (0808 801 0677) is staffed by specialists and is free."`,
    activity: `ACTIVITY — Examining Our Relationship with Food and Body (20 minutes)
Melksham Mental Health | Module 18 | Licensed Materials

PURPOSE: Build self-awareness about cultural and personal body image messages; understand how these shape attitudes to food and body without pathologising normal variation.

NOTE TO FACILITATOR: This activity does NOT ask about personal eating behaviour. Participants are never asked to share specific information about their own relationship with food. Frame all discussion at a cultural and reflective level.

PART 1 — Media Analysis (8 minutes):
In small groups, discuss: What images of bodies do we see most commonly in mainstream media, social media, and advertising? What is their effect? What is systematically absent from these images?

Consider: What body types, ages, ethnicities, disabilities, and sizes are represented versus invisible? What message does this send about what bodies are "acceptable"?

PART 2 — Cultural Messages About Food (7 minutes):
What messages about food did you receive growing up? From family, from culture, from religion, from peers? Examples: "clean your plate", "comfort eating", "treat yourself", "nothing tastes as good as skinny feels", "food is love".

How do these cultural messages shape how we think and feel about food as adults? What impact might they have on someone vulnerable to an eating disorder?

PART 3 — Debrief (5 minutes):
What one change in how we talk about food and bodies — in our personal lives, in our professional practice, in our communities — could make a meaningful difference to the people around us?`,
    discussionPrompts: [
      'Why are men with eating disorders so underdiagnosed, and what cultural factors make it harder for them to seek or receive appropriate help?',
      'What is the responsibility of social media platforms for the impact of filtered and curated body images on mental health?',
      'How can parents and schools support healthy body image in children and young people without creating unhealthy preoccupation with food and weight?',
      'What does genuinely recovery-focused language and attitude look like for a professional supporting someone with an eating disorder?',
    ],
    resources: [
      { label: 'Beat Eating Disorders helpline: 0808 801 0677', url: 'https://www.beateatingdisorders.org.uk' },
      { label: 'Mind — eating problems', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/eating-problems/' },
      { label: 'NHS — eating disorders overview', url: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/' },
      { label: 'Men Get Eating Disorders Too', url: 'https://mengetedstoo.co.uk' },
      { label: 'ARFID Awareness UK', url: 'https://arfidawarenessuk.org' },
    ],
    videos: [
      { label: 'What is anorexia? — TED-Ed (YouTube)', url: 'https://www.youtube.com/results?search_query=anorexia+explained+ted-ed' },
      { label: 'Eating disorders in men — Beat (YouTube)', url: 'https://www.youtube.com/results?search_query=eating+disorders+men+Beat+charity' },
      { label: 'ARFID explained — Beat (YouTube)', url: 'https://www.youtube.com/results?search_query=ARFID+explained+eating+disorder' },
    ],
    powerPoint: `MODULE 18 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
CRITICAL: NO body size imagery, no weight data presented graphically, no triggering visual content
Slide 1: "Highest mortality of any psychiatric disorder" — orange hero text, high impact
Slide 2: Medical consequences diagram — body silhouette with organ labels (heart, kidneys, bones), clinical
Slide 3: Three-condition comparison table — Anorexia / Bulimia / BED — clean, readable
Slide 5: Treatment pathway and BEAT helpline — 0808 801 0677 in large orange text
Activity slide: Media analysis prompt questions — clean, discussion-facilitation format
All slides: Beat helpline in footer alongside Samaritans, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING — HIGH SENSITIVITY: There are very likely to be people in the group with current or historical eating disorders. This session should NEVER include discussion of specific weights, calorie numbers, food quantities, or purging methods. Keep all discussion at a conceptual level.

SAFE MESSAGING: Apply the same principles as suicide safe messaging — avoid detailed descriptions of specific behaviours. Focus on the psychological experience, not the behaviour itself.

LANGUAGE: Never describe eating disorders using terms like "just eating more" or "just needing more willpower". Never comment on anyone's body. Do not express admiration for thinness or "discipline" in relation to eating.

ACTIVITY: Watch for participants becoming distressed or unusually quiet during this activity. If someone appears activated, check in privately after the session and signpost to Beat (0808 801 0677).

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 19
  // ─────────────────────────────────────────────────────────────
  {
    id: 19,
    topic: 'Sleep & Circadian Rhythm Disorders',
    summary: 'The neuroscience of sleep and why it is the single most important pillar of mental health; insomnia, sleep apnoea, narcolepsy, parasomnias, and shift-work disorder; and CBT-I as the gold-standard treatment.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Why Sleep Matters',
        bullets: [
          'Sleep is the most potent mental health intervention available — yet chronically under-prioritised',
          'Glymphatic system: the brain\'s waste-clearance system operates only during sleep — clearing beta-amyloid and other toxins',
          'UK: 36% of adults struggle to sleep every week; one-third do not get recommended 7–9 hours (Sleep Council, 2023)',
          'Mental health impact: a single night of poor sleep measurably increases anxiety, emotional reactivity, and negative bias',
          'BRANDED SLIDE: MMH black/orange — glymphatic system brain diagram, "sleep is your brain\'s MOT"',
        ],
      },
      {
        title: 'Slide 2 — Insomnia',
        bullets: [
          'Clinical insomnia: difficulty initiating or maintaining sleep ≥3 nights/week for ≥3 months, causing daytime impairment',
          'UK prevalence: ~30% of adults have insomnia symptoms; ~10% have clinical insomnia',
          'Perpetuating factors: sleep anxiety, clock-watching, extended time in bed, irregular sleep schedule, napping',
          'CBT-I (Cognitive Behavioural Therapy for Insomnia): NICE first-line — more effective than sleeping pills long-term',
          'BRANDED SLIDE: perpetuating factors cycle diagram — insomnia → sleep anxiety → effort to sleep → arousal → insomnia',
        ],
      },
      {
        title: 'Slide 3 — Sleep Apnoea',
        bullets: [
          'Obstructive sleep apnoea (OSA): repeated upper airway collapse during sleep causing breathing pauses + arousals',
          'UK prevalence: estimated 1.5 million undiagnosed cases — one of the most undertreated conditions in medicine',
          'Symptoms: loud snoring, witnessed apnoeas, excessive daytime sleepiness, morning headaches, cognitive impairment',
          'Mental health link: untreated OSA associated with 2–4× higher risk of depression and anxiety',
          'Treatment: CPAP (continuous positive airway pressure) — highly effective when tolerated',
          'BRANDED SLIDE: OSA awareness slide — "most undiagnosed major condition in UK" in orange callout',
        ],
      },
      {
        title: 'Slide 4 — Narcolepsy, Parasomnias & Circadian Disorders',
        bullets: [
          'Narcolepsy: sudden, irresistible sleep attacks + cataplexy (muscle weakness triggered by emotion) — autoimmune cause',
          'Parasomnias: sleepwalking, night terrors, REM Sleep Behaviour Disorder — sleep behaviours outside normal',
          'Circadian rhythm disorders: misalignment of internal clock with external schedule (shift work, jet lag, delayed sleep phase)',
          'Delayed Sleep Phase Disorder: particularly common in adolescents — clinical, not laziness',
          'BRANDED SLIDE: circadian rhythm clock graphic showing misalignment, MMH orange',
        ],
      },
      {
        title: 'Slide 5 — Sleep Hygiene & CBT-I',
        bullets: [
          'Sleep restriction therapy: consolidates sleep by initially reducing time in bed — paradoxically improves sleep quality',
          'Stimulus control: bed only for sleep and sex — rebuilds the bed-sleep association',
          'Cognitive restructuring: challenges beliefs like "I must get 8 hours" that generate performance anxiety',
          'Sleep hygiene: consistent wake time, darkness, cool temperature, no screens 60 min before bed',
          'BRANDED SLIDE: CBT-I components infographic — sleep restriction / stimulus control / cognitive / relaxation',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Why Sleep Matters
"If I could prescribe one intervention for mental health above all others, it would be sleep. Not medication. Not therapy. Sleep. The research is unequivocal: sleep is foundational to every aspect of psychological functioning.

There is a remarkable system in the brain called the glymphatic system. It operates primarily during deep sleep, clearing the metabolic waste products that accumulate during waking brain activity — including beta-amyloid, the protein associated with Alzheimer's disease. We do not have another system for doing this. The only way to clean the brain is to sleep.

One disturbed night of sleep increases emotional reactivity, impairs the prefrontal cortex, and makes us more susceptible to anxiety and depression the following day. That is a measurable neurological effect from a single bad night."

SLIDE 2 — Insomnia
"Clinical insomnia affects around 10% of UK adults. It is not simply difficulty sleeping — it is difficulty sleeping that causes significant daytime impairment, that has persisted for months, and that the person has begun to organise their life around.

The perpetuating factors for insomnia are often more important than the triggering factors. Someone might start sleeping badly because of stress. But what maintains the insomnia — sometimes for years — is the anxiety about sleep, the clock-watching at 3am, the long lie-ins trying to make up for lost sleep, and the catastrophic thinking about tomorrow's consequences. CBT-I addresses all of these directly."

SLIDE 3 — Sleep Apnoea
"Sleep apnoea is one of the most underdiagnosed conditions in the UK. The NHS estimates there are around 1.5 million undiagnosed cases. People with OSA are repeatedly woken through the night by their airway collapsing and cutting off their oxygen supply — sometimes hundreds of times per night — without having any memory of it. They present to their GP with exhaustion, depression, and cognitive problems. The sleep disorder is rarely identified.

Treating OSA — with CPAP, which holds the airway open during sleep — resolves the associated depression and anxiety in a significant proportion of cases. Not because CPAP treats depression, but because it resolves the underlying sleep deprivation that was causing it."

SLIDE 4 — Narcolepsy and Circadian Disorders
"Narcolepsy is a rare but significant autoimmune condition in which the brain loses the neurons that maintain wakefulness. Sleep attacks can occur at any time — while eating, speaking, or driving. Cataplexy — sudden muscle weakness triggered by emotion, particularly laughter — can cause falls and is deeply disabling.

Delayed Sleep Phase Disorder is worth particular mention because it is so frequently misunderstood. Young people who genuinely cannot fall asleep before 2am and cannot wake before 10am are not being lazy — they have a clinically recognised circadian disorder. School and work structures that require early morning performance are genuinely disabling for these individuals."

SLIDE 5 — CBT-I
"CBT-I is not intuitive. Sleep restriction therapy — the most effective component — requires initially spending less time in bed, which sounds counter-productive. But it works by building sleep pressure, concentrating sleep, and rebuilding confidence in the ability to sleep. Stimulus control rebuilds the brain's association between bed and sleep — an association that becomes eroded in chronic insomnia.

These techniques require discipline and produce short-term discomfort for long-term gain. The evidence is outstanding: CBT-I outperforms sleeping medication in long-term outcomes, with no side effects and no risk of dependence."`,
    activity: `ACTIVITY — Sleep Audit and Hygiene Plan (20 minutes)
Melksham Mental Health | Module 19 | Licensed Materials

PURPOSE: Identify individual sleep patterns and build a personalised evidence-based sleep improvement plan.

PART 1 — Sleep Audit (8 minutes, private):
Participants complete the following honestly:

Timing:
• What time do you typically get into bed?
• What time do you typically fall asleep?
• What time do you wake up — with/without alarm?
• Do your weekday and weekend times differ significantly?

Quality:
• Do you wake during the night? How often?
• Do you feel rested when you wake?
• How alert do you feel in the afternoon?

Behaviours:
• Do you use screens in the hour before bed?
• Do you consume caffeine after 2pm?
• Do you exercise regularly? (If yes, what time?)
• Do you nap during the day?

PART 2 — Pairs Discussion (7 minutes):
Compare patterns. Which behaviours are most likely impacting sleep quality? Using the evidence from the slides, identify 2–3 evidence-based changes each person could make.

PART 3 — Debrief (5 minutes):
Facilitator highlights the single most impactful and underused evidence-based change: consistent wake time. Waking at the same time every day — regardless of how you slept — is the single most powerful thing most people can do to improve their sleep over time. Ask: who knew this? Who already does it?`,
    discussionPrompts: [
      'Why do we live in a culture that systematically glorifies sleep deprivation — "I only need 5 hours" — when the evidence for sleep\'s importance is so clear?',
      'What workplace and educational reforms would most significantly improve sleep health across the population?',
      'How should GPs and mental health professionals change their assessment practices to routinely screen for undiagnosed sleep disorders?',
      'How does shift work affect the mental health of workers in healthcare, transport, hospitality and emergency services — and what obligations do employers have?',
    ],
    resources: [
      { label: 'Sleepio — NHS-backed digital CBT-I programme', url: 'https://www.sleepio.com' },
      { label: 'NHS — insomnia overview', url: 'https://www.nhs.uk/conditions/insomnia/' },
      { label: 'NHS — sleep apnoea', url: 'https://www.nhs.uk/conditions/sleep-apnoea/' },
      { label: 'The Sleep Charity (UK)', url: 'https://thesleepcharity.org.uk' },
      { label: 'Narcolepsy UK', url: 'https://www.narcolepsy.org.uk' },
    ],
    videos: [
      { label: 'Why we sleep — Matthew Walker interview (YouTube)', url: 'https://www.youtube.com/results?search_query=matthew+walker+why+we+sleep+interview' },
      { label: 'What is CBT-I? — Sleep Foundation (YouTube)', url: 'https://www.youtube.com/results?search_query=CBT+for+insomnia+explained' },
      { label: 'Sleep apnoea explained — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=sleep+apnoea+explained+NHS' },
    ],
    powerPoint: `MODULE 19 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Brain glymphatic system diagram — atmospheric dark background, orange highlights
Slide 2: Insomnia perpetuating cycle — circular diagram, orange arrows, "performance anxiety" labelled
Slide 3: "1.5 million undiagnosed" — orange hero stat, OSA awareness
Slide 4: Circadian clock showing delayed sleep phase in adolescents vs adults — warm visual
Slide 5: CBT-I components — four quadrant infographic: sleep restriction / stimulus control / cognitive / hygiene
Activity slide: Sleep audit table reproduced for participant completion
All slides: MMH logo, The Sleep Charity reference, Samaritans 116 123, licence watermark`,
    tutorNotes: `FACILITATION: Sleep deprivation is nearly universal in modern life. This session often produces strong personal resonance. Encourage open discussion but keep the focus analytical rather than personal — the goal is understanding sleep science and clinical presentations, not diagnosing participants.

SLEEP RESTRICTION: Do not recommend sleep restriction therapy as a self-help intervention in this group setting — it should only be undertaken with professional guidance. Present it as a component of CBT-I for context.

LANGUAGE: Do not refer to any participant's sleep patterns as "bad habits" — frame as "patterns that can be modified" using evidence-based approaches.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 20
  // ─────────────────────────────────────────────────────────────
  {
    id: 20,
    topic: 'Impulse-Control & Disruptive Disorders',
    summary: 'IED, conduct disorder, ODD, and impulse-control conditions — understanding the neuroscience of impulse regulation, why these disorders are so often misread as moral failures, and evidence-based support.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Are Impulse-Control Disorders?',
        bullets: [
          'A group of conditions characterised by failure to resist impulses, drives, or urges to perform acts that are harmful to self or others',
          'Common thread: the urge overwhelms the inhibitory capacity of the prefrontal cortex',
          'Not a moral failing or lack of character — a dysregulation of the neurological systems governing impulse control',
          'Often co-occur with ADHD, bipolar disorder, substance use, trauma, and childhood adversity',
          'BRANDED SLIDE: brain diagram — prefrontal cortex (inhibition) vs limbic system (impulse), orange labels',
        ],
      },
      {
        title: 'Slide 2 — Intermittent Explosive Disorder (IED)',
        bullets: [
          'Recurrent outbursts of uncontrollable aggression — grossly disproportionate to the provocation',
          'After the outburst: often remorse, embarrassment, and confusion about the intensity of the response',
          'UK lifetime prevalence: ~5% — far more common than widely recognised',
          'Neurological basis: underactive orbitofrontal cortex + hyperactive amygdala — the "alarm with no off switch"',
          'Risk factors: head injury, ACEs, male sex, 18–35 age group, family history',
          'BRANDED SLIDE: brain alarm diagram — amygdala firing, prefrontal cortex failing to inhibit',
        ],
      },
      {
        title: 'Slide 3 — Conduct Disorder & ODD',
        bullets: [
          'Oppositional Defiant Disorder (ODD): persistent pattern of angry/irritable mood, argumentative behaviour, vindictiveness — in children',
          'Conduct Disorder: violation of others\' rights, serious rules, or social norms — persistent pattern',
          'Both most commonly reflect unmet needs, attachment disruption, trauma exposure, or neurodevelopmental difference',
          '"This child is difficult" vs "This child is dysregulated and needs something they are not getting"',
          'BRANDED SLIDE: reframing table — "difficult behaviour" vs "unmet need" — two columns',
        ],
      },
      {
        title: 'Slide 4 — Kleptomania, Pyromania and Pathological Gambling',
        bullets: [
          'Kleptomania: recurrent failure to resist impulses to steal items not needed for personal use or financial value',
          'Pyromania: recurrent, deliberate fire-setting for tension relief or pleasure — extremely rare in pure form',
          'All characterised by the cycle: tension/arousal → acting on impulse → relief/pleasure → guilt/remorse',
          'All require specialist assessment — do not attempt to manage in generalist settings without support',
          'Gambling disorder classified as a behavioural addiction — shares neural pathways with substance use disorder',
          'BRANDED SLIDE: impulse cycle diagram — tension → action → relief → guilt → tension',
        ],
      },
      {
        title: 'Slide 5 — Treatment Approaches',
        bullets: [
          'DBT (Dialectical Behaviour Therapy): evidence base for emotional dysregulation and impulse control',
          'CBT: identifying triggers, developing interrupt strategies, building tolerance of frustration',
          'Pharmacological: SSRIs, mood stabilisers, and naltrexone (for impulse-related conditions) in specialist care',
          'Treating underlying conditions: ADHD, bipolar, trauma — addressing co-morbidities often transforms presentation',
          'Environmental and systemic: for children — parenting support, school SEMH, trauma-informed practice',
          'BRANDED SLIDE: DBT skills overview — mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Are Impulse-Control Disorders?
"Every single person in this room has experienced an impulse they needed to resist. The ability to inhibit impulses — to feel an urge and choose not to act on it — is one of the most demanding cognitive functions the human brain performs. It is located primarily in the prefrontal cortex, and it develops slowly through childhood and into adulthood.

When that system is disrupted — by neurodevelopment, by trauma, by brain injury, by genetics — the result is not a moral failing. It is a clinical condition. Understanding this distinction is the foundation of everything we cover today."

SLIDE 2 — Intermittent Explosive Disorder
"IED affects approximately 5% of the UK population over a lifetime — far more common than most people realise. The person with IED does not have generally poor impulse control. They may function very well in most areas of life. But in response to specific triggers, their amygdala fires intensely and their orbitofrontal cortex fails to apply the brake.

Crucially, people with IED almost always feel profound remorse after an outburst. They are often confused and frightened by the intensity of their own responses. This is not someone who is comfortable with their aggression — it is someone who is living with a neurological dysregulation that has enormous consequences for their relationships and self-esteem."

SLIDE 3 — Conduct Disorder and ODD
"When we encounter a child with conduct disorder or ODD, the most important question to ask is not 'what is wrong with this child?' but 'what happened to this child, and what are they not getting that they need?'

The behaviour — the defiance, the aggression, the rule-breaking — is almost always a communication. It communicates: I am not safe. I do not feel seen. Nobody is in charge and it feels terrifying. Or: I was harmed and I learned that I must be the one who is powerful. These are adaptive responses to difficult circumstances, not innate bad character."

SLIDE 4 — Kleptomania and Other Impulse Disorders
"Kleptomania and pyromania are genuinely rare in their pure clinical forms — and they are frequently confused in public understanding with opportunistic theft or fire-setting. The clinical condition is specific: a tension that builds, is relieved only by acting on the impulse, and is followed by remorse. The items stolen in kleptomania are typically not needed or valued. The fire in pyromania is not for financial gain or revenge.

These are not excuses for harmful behaviour. They are explanations that should inform how we respond — clinically, legally, and humanely."

SLIDE 5 — Treatment
"DBT is the most evidence-based approach for the emotional dysregulation and impulse control difficulties that underlie most of these conditions. Originally developed for borderline personality disorder, its skills — mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness — have robust evidence across a wide range of presentations.

Perhaps the most important treatment message for this group: address the underlying conditions. Many of the people who appear to have an impulse-control problem primarily have undiagnosed ADHD, untreated bipolar disorder, or unprocessed trauma. Treat what is driving the dysregulation, and the surface behaviour often changes significantly."`,
    activity: `ACTIVITY — The Impulse Regulation Gap (20 minutes)
Melksham Mental Health | Module 20 | Licensed Materials

PURPOSE: Build understanding of the neurology of impulse regulation and develop practical interrupt strategies that can be used personally or recommended to clients.

PART 1 — The Gap Between Stimulus and Response (7 minutes):
Viktor Frankl: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom."

Introduce the concept of the "impulse gap": the milliseconds-to-seconds window between an impulse arriving and the action. Impulse control is the skill of expanding and using that gap.

Pairs exercise: Identify a situation where you have felt a strong impulse to do or say something that you later wished you had paused before acting on. (No sharing required — this is private reflection.) What helped you pause in similar moments? What made it harder?

PART 2 — TIPP Skills from DBT (8 minutes):
Introduce TIPP as a DBT distress tolerance skill for managing intense emotions before they escalate to impulsive action:
T — Temperature: cold water on face activates the diving reflex, rapidly reducing heart rate
I — Intense exercise: 20 minutes of vigorous exercise metabolises stress hormones physically
P — Paced breathing: slow exhale (longer than inhale) activates parasympathetic system
P — Progressive muscle relaxation: release muscular tension that accompanies emotional arousal

In pairs: Try paced breathing together (4-count in, 6-count out, 4 repetitions). Notice the effect.

PART 3 — Debrief (5 minutes):
What biological mechanisms explain why these techniques work? (Heart rate variability, vagal tone, cortisol metabolism.) Why is it important to practise these when calm, not just when in crisis?`,
    discussionPrompts: [
      'What are the consequences — for individuals, families, and society — of treating conduct disorder and ODD as moral failures rather than clinical presentations requiring support?',
      'How should the criminal justice system respond differently to people whose offending is directly driven by impulse-control disorders?',
      'What is the relationship between trauma and impulse dysregulation — and how does addressing trauma change the clinical picture?',
      'What does a trauma-informed classroom look like for a child with ODD or conduct disorder?',
    ],
    resources: [
      { label: 'Mind — managing difficult emotions', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/wellbeing/managing-difficult-emotions/' },
      { label: 'Young Minds — conduct and behaviour in children', url: 'https://www.youngminds.org.uk' },
      { label: 'NHS — conduct disorder in children', url: 'https://www.nhs.uk/mental-health/children-and-young-adults/conditions/conduct-disorder/' },
      { label: 'GamCare — gambling support helpline: 0808 8020 133', url: 'https://www.gamcare.org.uk' },
      { label: 'DBT Self Help UK', url: 'https://www.dbtselfhelp.com' },
    ],
    videos: [
      { label: 'DBT skills overview (YouTube)', url: 'https://www.youtube.com/results?search_query=DBT+skills+overview+dialectical+behaviour+therapy' },
      { label: 'What is IED? — intermittent explosive disorder explained (YouTube)', url: 'https://www.youtube.com/results?search_query=intermittent+explosive+disorder+explained' },
      { label: 'Conduct disorder in children — clinical explanation (YouTube)', url: 'https://www.youtube.com/results?search_query=conduct+disorder+children+explained+clinical' },
    ],
    powerPoint: `MODULE 20 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Brain diagram — amygdala vs prefrontal cortex, impulse vs inhibition balance, orange labels
Slide 2: "Alarm with no off switch" metaphor — visual alarm graphic, orange/red on black
Slide 3: Reframing table — "difficult child" vs "dysregulated child with unmet needs" — clear comparison
Slide 4: Impulse cycle — tension/action/relief/guilt circular diagram, orange flow arrows
Slide 5: DBT skills diamond — four sections, each skill named, brief description
Activity slide: TIPP skills card — T/I/P/P listed with brief description for each
All slides: MMH logo, GamCare 0808 8020 133, Samaritans 116 123 footer, licence watermark`,
    tutorNotes: `FACILITATION: The reframing of conduct disorder and ODD — from moral failure to clinical presentation — can generate strong reactions. Some participants may have experience of children or young people whose behaviour they found very challenging. Validate their experience while maintaining the neurodevelopmental and trauma-informed lens throughout.

LANGUAGE: Avoid describing any person as "a conduct disorder" or "an ODD". Use "a child experiencing conduct disorder" or "a young person diagnosed with ODD". Never use "bad", "evil", "dangerous", or "unteachable" in any context.

GAMBLING: If any participant discloses a personal gambling problem, signpost to GamCare (0808 8020 133) privately.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 21
  // ─────────────────────────────────────────────────────────────
  {
    id: 21,
    topic: 'Substance Use & Addiction',
    summary: 'The neuroscience of addiction — why it is a brain disorder, not a moral failing; alcohol, drugs, and behavioural addictions; harm reduction, motivational interviewing, and recovery-focused approaches.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Addiction as a Brain Disorder',
        bullets: [
          'Addiction: compulsive substance use or behaviour despite significant negative consequences',
          'Neurobiological basis: hijacking of the dopamine reward system — the same system that motivates survival behaviours',
          'UK: ~3 million people with alcohol use disorder; ~300,000 people dependent on heroin or crack cocaine (OHID, 2023)',
          '"Just stop" advice fails because it ignores the neurobiology — addiction structurally changes the brain',
          'BRANDED SLIDE: dopamine reward pathway diagram — nucleus accumbens, VTA — MMH orange highlights',
        ],
      },
      {
        title: 'Slide 2 — Types of Substance Use Disorder',
        bullets: [
          'Alcohol: most harmful substance in UK by total societal impact; dependence develops in 1 in 4 regular heavy drinkers',
          'Opioids: prescription opioid misuse rising sharply — not only illicit heroin; pharmacological dependence vs psychological addiction',
          'Cannabis: increasingly potent strains; clear association with psychosis in vulnerable individuals, particularly high-THC products',
          'Stimulants: cocaine, MDMA, amphetamines — primarily psychological dependence; significant mental health consequences',
          'BRANDED SLIDE: UK substance landscape overview — alcohol, opioids, cannabis, stimulants with key statistics',
        ],
      },
      {
        title: 'Slide 3 — Co-occurring Mental Health Disorders',
        bullets: [
          '"Dual diagnosis": mental health disorder + substance use disorder — the rule in specialist settings, not the exception',
          'Self-medication: many people use substances to manage anxiety, depression, trauma, or psychosis symptoms',
          'Chicken-and-egg: substances cause mental health problems AND mental health problems drive substance use',
          'Integrated treatment: addressing both simultaneously produces significantly better outcomes than sequential treatment',
          'BRANDED SLIDE: dual diagnosis overlap diagram — mental health disorders circle + substance use circle, large intersection',
        ],
      },
      {
        title: 'Slide 4 — Harm Reduction',
        bullets: [
          'Harm reduction: pragmatic, evidence-based approaches to minimise damage without requiring abstinence as a precondition',
          'Examples: needle exchange, naloxone distribution, supervised consumption rooms, drug checking services',
          'UK: naloxone (opioid reversal agent) available free to anyone at risk or whose family member is at risk',
          'Abstinence vs harm reduction: not either/or — the goal is to save lives and improve wellbeing using the best available evidence',
          'BRANDED SLIDE: harm reduction principle — meeting people where they are, not where we want them to be',
        ],
      },
      {
        title: 'Slide 5 — Motivational Interviewing & Recovery',
        bullets: [
          'Motivational Interviewing (MI): collaborative conversation style that elicits and strengthens intrinsic motivation to change',
          'Core MI spirit: Partnership, Acceptance, Compassion, Evocation (PACE)',
          'Stages of change (Prochaska): pre-contemplation → contemplation → preparation → action → maintenance',
          'Recovery is non-linear — relapse is not failure; it is a normal part of the change process for most people',
          'BRANDED SLIDE: stages of change wheel with MI skills mapped to each stage',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Addiction as a Brain Disorder
"Addiction is not a moral failing. This statement may sound simple, but it contradicts a deeply embedded cultural belief that people who become addicted simply lack willpower or character. That belief is not only wrong — it is harmful, because it drives shame and stigma that are the biggest barriers to treatment-seeking.

Addiction hijacks the brain's dopamine reward system — the same system that evolved to ensure we eat, drink water, and reproduce. Substances and addictive behaviours produce dopamine surges that dwarf those of normal survival activities. Over time, the brain adapts — natural rewards feel flat, and the substance becomes the primary motivator for behaviour. This is not a choice. It is a structural change in the brain that has an established neurobiology."

SLIDE 2 — Types of Substance Use Disorder
"Alcohol is the most harmful substance in the UK when you account for total societal damage — to individuals, families, and public services. One in four people who drink heavily regularly will develop alcohol use disorder. Alcohol withdrawal is also one of the few withdrawals that can be medically fatal — alongside benzodiazepines — which is why medical supervision is essential.

Cannabis deserves specific mention because of the significant increase in potency of available products over the past two decades. High-THC cannabis has clear causal associations with psychosis, particularly in people with genetic vulnerability and adolescent users."

SLIDE 3 — Co-occurring Disorders
"When I say that dual diagnosis is the rule rather than the exception in specialist addiction settings, I mean this statistically: the majority of people presenting for addiction treatment have a co-occurring mental health condition. Most commonly anxiety, depression, and PTSD — but also personality disorders and psychosis.

Self-medication is the key clinical concept here. People use substances to manage experiences that feel otherwise unmanageable. Treating the substance use without addressing what it was managing is one of the main reasons that treatment fails. Integrated care — addressing both simultaneously — is what the evidence supports."

SLIDE 4 — Harm Reduction
"Harm reduction sometimes feels controversial, but it is simply pragmatic public health. People are going to use drugs. Some of them are going to die unless we provide services that keep them alive until they are ready and able to engage with treatment. Needle exchange services have dramatically reduced HIV transmission in this country. Naloxone distribution saves lives from opioid overdose. These are not endorsements of drug use — they are acknowledgements of reality.

Naloxone — the opioid reversal agent — is available free from many pharmacies to anyone whose family member or close contact uses opioids. This fact is not widely known. Sharing it costs nothing and can save a life."

SLIDE 5 — Motivational Interviewing and Recovery
"Motivational Interviewing is one of the most important communication skills in mental health and addiction work. The core insight is that people change when they discover their own reasons to change — not when they are lectured at, threatened, or shamed. The MI practitioner's role is not to provide the motivation but to draw out the person's own values, goals, and reasons for change.

Recovery is not a destination — it is a process. Most people relapse. This does not mean treatment has failed. It means they are in the normal, non-linear process of change that characterises human behaviour. The question is never whether someone has relapsed, but whether they remain engaged with the possibility of change."`,
    activity: `ACTIVITY — Motivational Interviewing Practice (20 minutes)
Melksham Mental Health | Module 21 | Licensed Materials

PURPOSE: Experience the difference between a confrontational conversation about change and a motivational interviewing conversation; understand why MI produces better outcomes.

PART 1 — What NOT to Do (3 minutes):
Facilitator reads aloud a script of a confrontational, directive conversation about alcohol:
"You really need to cut down. You know it's bad for you. Why can't you just stop? You need to take this seriously."

Ask the group: How does it feel to be on the receiving end of that conversation? What is your instinctive response? (Expected: defensive, resistant, shut down.)

This is the righting reflex — the natural human impulse to correct and advise. It almost always triggers resistance.

PART 2 — The OARS Framework (5 minutes):
Introduce OARS — the core MI technique:
O — Open questions: "What concerns you about your drinking?" not "Do you drink too much?"
A — Affirmations: acknowledge strengths and efforts genuinely: "You've thought a lot about this."
R — Reflective listening: reflect back what you hear — the feeling behind the words
S — Summarise: "So if I understand you, you're worried about your health but feel like cutting down would be very hard right now."

PART 3 — Practice in Pairs (7 minutes):
One person plays the role of someone ambivalent about change (alcohol, smoking, or exercise — their choice). The other practises OARS: one open question, one reflection, one affirmation.

Then swap roles.

PART 4 — Debrief (5 minutes):
What felt different about being listened to in this way? What made it hard to resist offering advice? Key principle: resistance is information, not obstruction — it tells you where the person is in their change process.`,
    discussionPrompts: [
      'Why does society respond so differently to addiction to illegal substances versus addiction to alcohol — and what does that inconsistency reveal?',
      'What would genuinely integrated addiction and mental health services look like — and why are they so rare in the current NHS structure?',
      'How do we maintain compassion for someone whose addiction is significantly harming people around them — including children?',
      'What is the role of the environment — poverty, unemployment, housing instability, adverse childhood experiences — in the development of addiction?',
    ],
    resources: [
      { label: 'Talk to Frank — drug information and support', url: 'https://www.talktofrank.com' },
      { label: 'Drinkaware — alcohol support', url: 'https://www.drinkaware.co.uk' },
      { label: 'FRANK helpline: 0300 123 6600', url: 'https://www.talktofrank.com/get-help/find-support-near-you' },
      { label: 'Turning Point — UK addiction services', url: 'https://www.turning-point.co.uk' },
      { label: 'SMART Recovery UK (evidence-based self-help)', url: 'https://www.smartrecovery.org.uk' },
    ],
    videos: [
      { label: 'Everything you know about addiction is wrong — Johann Hari TED (YouTube)', url: 'https://www.youtube.com/watch?v=PY9DcIMGxMs' },
      { label: 'Motivational interviewing in 5 minutes (YouTube)', url: 'https://www.youtube.com/results?search_query=motivational+interviewing+explained+5+minutes' },
      { label: 'The neuroscience of addiction — NIDA (YouTube)', url: 'https://www.youtube.com/results?search_query=neuroscience+addiction+dopamine+explained' },
    ],
    powerPoint: `MODULE 21 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Dopamine pathway brain diagram — reward circuit highlighted, nucleus accumbens and VTA labelled in orange
Slide 3: Dual diagnosis Venn — large intersection zone, "this is the rule, not the exception" annotation
Slide 4: Harm reduction principle — "meeting people where they are" as pull quote in orange italic
Slide 5: Stages of change wheel — Prochaska model, MMH orange styling
Activity slide: OARS framework card — O/A/R/S with brief explanation each, reference card format
All slides: FRANK 0300 123 6600, Samaritans 116 123, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING: Participants may disclose active substance use — their own or a family member's — during this session. Receive disclosures compassionately and without judgement. Provide relevant helpline numbers. If a child is at risk due to a carer's substance use, follow mandatory safeguarding procedures.

FACILITATION: Adopt the MI spirit throughout this session — model the approach you are teaching. If group members express judgement about "addicts", explore this gently rather than challenging it directly.

LANGUAGE: "Person with addiction" or "person who uses drugs" — not "addict", "junkie", or "alcoholic". These labels increase shame and reduce treatment-seeking.

ALCOHOL: Be aware that some participants may have concerning levels of alcohol use. Do not draw attention to this. FRANK helpline is confidential and appropriate for self-referral.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 22
  // ─────────────────────────────────────────────────────────────
  {
    id: 22,
    topic: 'Psychotic Disorders: Schizophrenia & Related Conditions',
    summary: 'Schizophrenia and the psychosis spectrum — positive and negative symptoms, the dopamine hypothesis, antipsychotics, Early Intervention services, and how to engage safely and supportively.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is Psychosis?',
        bullets: [
          'Psychosis: a loss of contact with shared reality — hallucinations, delusions, or severely disorganised thinking and behaviour',
          'NOT the same as "split personality" — a persistent popular misconception with no clinical basis',
          '1 in 100 people experience a psychotic episode in their lifetime; schizophrenia affects ~0.7% of the UK population',
          'People with schizophrenia are far more likely to be the VICTIMS of violence than the perpetrators — the dangerous stereotype is harmful and wrong',
          'BRANDED SLIDE: MMH black/orange, "1 in 100" hero stat, "not dangerous — often vulnerable" as bold tagline',
        ],
      },
      {
        title: 'Slide 2 — Positive and Negative Symptoms',
        bullets: [
          'POSITIVE symptoms (additions to experience): hallucinations (most commonly auditory), delusions, thought disorder, disorganised behaviour',
          'NEGATIVE symptoms (reductions in function): flat affect, alogia (poverty of speech), avolition (lack of motivation), anhedonia, social withdrawal',
          'Negative symptoms often more disabling long-term than positive — and more resistant to treatment',
          'Cognitive symptoms: difficulties with memory, attention, executive function — significantly impair daily functioning',
          'BRANDED SLIDE: positive vs negative symptom comparison table — clear two-column layout, MMH branding',
        ],
      },
      {
        title: 'Slide 3 — Causes',
        bullets: [
          'Dopamine hypothesis: excess dopamine transmission in subcortical areas underlies positive symptoms',
          'Glutamate dysfunction: emerging evidence for NMDA receptor hypofunction — explains cognitive and negative symptoms',
          'Genetic: ~80% heritability; relatives of people with schizophrenia have significantly elevated risk',
          'Environmental: cannabis use (high-THC), urban birth, migration, childhood trauma, obstetric complications',
          'BRANDED SLIDE: cause web — genetic + environmental interaction diagram, dopamine graphic',
        ],
      },
      {
        title: 'Slide 4 — Treatment',
        bullets: [
          'Antipsychotics: reduce positive symptoms in ~80% of people — do NOT cure, but significantly improve function',
          'Clozapine: for treatment-resistant schizophrenia — most effective antipsychotic available; requires CPMS monitoring',
          'CBTp (CBT for psychosis): NICE recommended — helps people make sense of experiences and develop coping strategies',
          'Early Intervention in Psychosis (EIP): critical services — the sooner treatment begins, the better the long-term outcome',
          'BRANDED SLIDE: EIP pathway — DUP (duration of untreated psychosis) → prognosis correlation chart',
        ],
      },
      {
        title: 'Slide 5 — Supporting Someone with Psychosis',
        bullets: [
          'Never argue with or reinforce a delusion — calmly acknowledge distress without confirming the false belief',
          'Speak slowly and clearly; reduce sensory complexity; don\'t crowd or overwhelm',
          'If someone is acutely unwell and at risk: call 999 or take them to A&E — do not attempt to manage alone',
          'For family and carers: Rethink Mental Illness and Schizophrenia UK provide specialist support',
          'BRANDED SLIDE: safe engagement protocol — DO / DO NOT two-column list, green/red, Rethink helpline number',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is Psychosis?
"Psychosis is one of the most stigmatised mental health presentations in our culture — and also one of the most misunderstood. Let me address the most persistent misconception immediately: schizophrenia is not 'split personality'. That concept is a fiction popularised by a misreading of Bleuler's original work. Schizophrenia is a distinct clinical condition characterised by a partial loss of contact with shared reality.

The second misconception I want to address is the one that causes the most harm: that people with schizophrenia are dangerous. The evidence consistently shows the opposite. People with schizophrenia are significantly more likely to be the victims of violence — abuse, assault, exploitation — than the perpetrators. The stereotype is not only wrong — it prevents people from seeking help, and it makes their lives materially harder."

SLIDE 2 — Positive and Negative Symptoms
"The positive/negative distinction is one of the most useful conceptual frameworks in psychosis. Positive symptoms are what we might call additions to experience — things that shouldn't be there: hearing voices that others can't hear, holding beliefs that aren't shared by anyone else in the person's environment, seeing things that are not there.

Negative symptoms are reductions — things that should be there but aren't: the flatness of emotional expression, the poverty of speech, the profound loss of motivation and the withdrawal from social life. These are the symptoms that are hardest to treat and that cause the most long-term disability. They are also the symptoms that are most frequently read as laziness or indifference — which they are not."

SLIDE 3 — Causes
"The causes of schizophrenia represent one of the most complex gene-environment interactions in medicine. There is strong genetic loading — relatives of people with schizophrenia are at significantly elevated risk. But genetics alone is not destiny. The environmental factors that interact with genetic vulnerability — including cannabis use, childhood trauma, urban environment, social adversity — are critically important.

The dopamine hypothesis has dominated the field for decades and provides the rationale for antipsychotic medication. But increasing evidence for glutamate system dysfunction is expanding the model — and providing a better neurobiological explanation for the cognitive and negative symptoms that dopamine-focused models struggled to account for."

SLIDE 4 — Treatment
"Antipsychotics reduce positive symptoms in around 80% of people who take them. They do not cure the condition, and they do not adequately address negative or cognitive symptoms. But they allow most people to maintain some degree of functional life that would otherwise be impossible.

Early Intervention in Psychosis services are one of the most important developments in mental health provision in the last 30 years. The evidence is clear: every day of untreated psychosis matters. The faster treatment is initiated, the better the long-term outcome — in terms of relapse rates, functioning, and overall quality of life."

SLIDE 5 — Supporting Someone with Psychosis
"If you encounter someone who appears to be in a psychotic episode, the most important principle is to stay calm. Elevated emotional tone in the environment tends to escalate distress in someone who is already experiencing an altered reality. Speak slowly and clearly. Reduce sensory complexity. Acknowledge their distress without confirming the content of their delusions.

Do not argue with a delusion. Not because the belief is too fragile to challenge, but because argument is never effective and often harmful. What the person needs is to feel safe, seen, and not alone."`,
    activity: `ACTIVITY — Hearing Voices Simulation Exercise (20 minutes)
Melksham Mental Health | Module 22 | Licensed Materials

PURPOSE: Build empathy for the experience of auditory hallucinations by recreating a simplified version of the attentional challenge they present.

NOTE: This is an empathy-building exercise, not a clinical tool. It is adapted from the Hearing Voices Network's awareness techniques.

PART 1 — The Dual-Task Challenge (10 minutes):
In pairs, person A reads a complex paragraph aloud from a printed card (prepared by facilitator — a passage about mental health from the course materials). While they read, person B whispers a running commentary into person A's ear: "You're doing this wrong. Everyone is watching you. What are you going to say next? Stop. They don't believe you. You should stop talking now."

Person A tries to maintain the reading task while receiving the commentary.

After 2 minutes, swap roles.

PART 2 — Debrief (10 minutes):
How did it feel to try to concentrate while hearing a continuous stream of comment? Was it possible to ignore? What happened to your confidence and focus?

Now reflect: for many people who hear voices, this is the baseline experience of every waking hour — voices that are often hostile, commanding, or distressing. Voices that feel completely real and external, not internal.

What do we understand differently now about:
• Why someone with psychosis might appear distracted or detached?
• Why positive symptoms are so disabling?
• What "recovery" means in this context — which is often not the elimination of voices, but learning to relate to them differently?`,
    discussionPrompts: [
      'Where does the stereotype of "dangerous schizophrenic" come from, and what responsibilities do media organisations have in addressing it?',
      'How does the experience of early psychosis feel from the inside — and why might someone be reluctant to tell anyone what is happening?',
      'What would need to change in society for people with schizophrenia to be genuinely included in employment, community, and social life?',
      'What is the role of family and carers in supporting someone through a psychotic episode — and what support do they need themselves?',
    ],
    resources: [
      { label: 'Rethink Mental Illness — schizophrenia information and carer support', url: 'https://www.rethink.org/advice-and-information/about-mental-illness/learn-more-about-conditions/schizophrenia/' },
      { label: 'Hearing Voices Network UK', url: 'https://www.hearing-voices.org' },
      { label: 'Mind — psychosis', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/psychosis/' },
      { label: 'NHS — schizophrenia', url: 'https://www.nhs.uk/mental-health/conditions/schizophrenia/' },
      { label: 'Samaritans: 116 123 (24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'What is schizophrenia? — TED-Ed (YouTube)', url: 'https://www.youtube.com/watch?v=K2sc_ck5BZU' },
      { label: 'Hearing voices — lived experience (Hearing Voices Network, YouTube)', url: 'https://www.youtube.com/results?search_query=hearing+voices+lived+experience' },
      { label: 'Early intervention in psychosis — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=early+intervention+psychosis+NHS' },
    ],
    powerPoint: `MODULE 22 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: "Not dangerous — often vulnerable" as bold tagline, "1 in 100" statistic, strong design
Slide 2: Positive/negative symptom comparison table — clean, two-column, colour-coded headers
Slide 4: DUP-to-prognosis chart — duration of untreated psychosis vs outcome correlation, orange curve
Slide 5: DO/DO NOT engagement protocol — green tick / red cross columns, Rethink helpline prominent
Activity slide: Hearing voices simulation — instructions clearly laid out, empathy framing at top
All slides: Rethink helpline, Samaritans 116 123, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING: If a participant discloses current psychotic symptoms — either their own or someone they live with — do not attempt to manage this in the group setting. Speak with them privately after the session, and provide NHS 111 mental health option and local crisis team contact. If there is immediate risk, call 999.

HEARING VOICES ACTIVITY: This activity can be surprisingly powerful. Some participants find it more distressing than expected. Monitor the room during the exercise and be prepared to pause and check in. Offer the option to sit out if needed.

LANGUAGE: Never use "psycho", "schizo", "crazy" or other stigmatising terms. Never describe someone as "a schizophrenic" — "a person with schizophrenia" is the correct form. Do not use "split personality" in any context.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 23
  // ─────────────────────────────────────────────────────────────
  {
    id: 23,
    topic: 'Personality Disorders: Cluster A & B',
    summary: 'Paranoid, schizoid, antisocial, borderline (BPD), and histrionic personality disorders — understanding the attachment and trauma origins, what life feels like from inside, and therapeutic approaches.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Are Personality Disorders?',
        bullets: [
          'A persistent pattern of inner experience and behaviour that deviates markedly from cultural expectations, is pervasive and inflexible, causes distress or functional impairment',
          'UK prevalence: ~10% of adults have a personality disorder; most common in mental health settings and criminal justice',
          'DSM-5: 10 specific personality disorders in 3 clusters; ICD-11 moves to dimensional severity model',
          'CRITICAL FRAMING: personality disorders are best understood as adaptations to early adversity — not character defects',
          'BRANDED SLIDE: three clusters overview diagram — A (odd/eccentric), B (dramatic/erratic), C (anxious/fearful), MMH orange',
        ],
      },
      {
        title: 'Slide 2 — Cluster A: Paranoid, Schizoid, Schizotypal',
        bullets: [
          'Paranoid: pervasive distrust and suspiciousness — believes others are exploiting, harming, or deceiving them',
          'Schizoid: detachment from social relationships; restricted emotional expression; preference for solitude',
          'Schizotypal: acute discomfort with close relationships; cognitive/perceptual distortions; eccentric behaviour',
          'Cluster A closely related to schizophrenia spectrum — higher prevalence in biological relatives of people with psychosis',
          'BRANDED SLIDE: Cluster A feature table with key differentiators, MMH styled',
        ],
      },
      {
        title: 'Slide 3 — Antisocial Personality Disorder',
        bullets: [
          'Persistent disregard for and violation of others\' rights; deceitfulness, impulsivity, aggression, recklessness',
          'UK prevalence: ~3% of men, ~1% of women; significantly over-represented in prison population (~50–65%)',
          'NOT the same as psychopathy — a narrower construct characterised by lack of empathy and remorselessness',
          'Strong relationship with childhood abuse, neglect, and conduct disorder — risk factors are largely environmental',
          'BRANDED SLIDE: ASPD vs psychopathy comparison — misconceptions addressed, MMH branding',
        ],
      },
      {
        title: 'Slide 4 — Borderline Personality Disorder',
        bullets: [
          'BPD: intense and unstable emotions, self-image, and relationships; impulsivity; fear of abandonment; chronic emptiness; self-harm',
          'UK prevalence: ~1–2% of general population; ~20% of psychiatric inpatients',
          'Trauma association: 70–90% of people with BPD report childhood abuse or neglect',
          'Severe stigma within healthcare settings — professionals often reluctant to work with BPD, leading to worse outcomes',
          'DBT (Dialectical Behaviour Therapy): gold standard — specifically developed for BPD by Marsha Linehan (who had BPD herself)',
          'BRANDED SLIDE: BPD features infographic — emotional intensity graph, relationship pattern cycle',
        ],
      },
      {
        title: 'Slide 5 — Therapeutic Approaches',
        bullets: [
          'DBT: mindfulness + distress tolerance + emotion regulation + interpersonal effectiveness',
          'MBT (Mentalisation-Based Treatment): focuses on improving ability to understand mental states in self and others',
          'Schema Therapy: addresses deep maladaptive patterns (schemas) formed in childhood',
          'Therapeutic stance: non-judgmental, consistent, boundaried, warm — not reactive or punitive',
          'Recovery is possible: BPD has one of the best prognoses of any serious personality disorder with appropriate treatment',
          'BRANDED SLIDE: three therapies comparison — DBT / MBT / Schema, key features each, evidence ratings',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Are Personality Disorders?
"Personality disorders are among the most stigmatised diagnoses in mental health — and that stigma exists not only in the general public but within healthcare settings themselves. I want to reframe this from the outset.

Personality disorders represent patterns of thinking, feeling, and relating that were originally adaptive. They developed in response to early environments that were unsafe, unpredictable, or abusive. The patterns made sense then. They cause problems now because they are applied to all relationships and all situations, regardless of whether those conditions still apply.

They are adaptations, not character defects. That distinction matters enormously for how we approach people who have these diagnoses."

SLIDE 2 — Cluster A
"The Cluster A personality disorders share a common thread: difficulty trusting others and discomfort with intimacy. In paranoid PD, that manifests as suspiciousness and the belief that others have harmful intentions. In schizoid PD, it manifests as a genuine preference for solitude and limited emotional connection. In schizotypal, there are odd perceptual experiences and eccentric thinking that sit just below the threshold of psychosis.

These presentations are often lonely. The person may want connection but find it fundamentally unsafe or incomprehensible."

SLIDE 3 — Antisocial Personality Disorder
"ASPD is the most misrepresented personality disorder in popular culture, largely because of its conflation with psychopathy. Most people with ASPD are not psychopathic. They have significant impulsivity, a history of rule-breaking and harm to others, and difficulty maintaining consistent prosocial behaviour — but they are not without empathy or emotional responsiveness.

The criminal justice over-representation should prompt reflection on causation: the ACE profile of people with ASPD typically involves severe childhood abuse, neglect, instability, and conduct disorder. We imprison the consequences of childhoods we failed to protect."

SLIDE 4 — Borderline Personality Disorder
"BPD is simultaneously one of the most common and most poorly managed diagnoses in mental health services. The stigma is extraordinary — research shows that clinicians change their attitudes and willingness to help significantly when the diagnosis of BPD is disclosed. That is the opposite of what the evidence requires.

Marsha Linehan — the developer of DBT — disclosed publicly in 2011 that she had received a diagnosis of schizophrenia earlier in life, and later understood her presentation as what would now be called BPD. Her development of DBT was therefore not only academic — it was personal. DBT works because it was designed from the inside out."

SLIDE 5 — Therapeutic Approaches
"DBT, MBT, and Schema Therapy all share a common quality: they require the therapist to maintain a consistently non-judgmental, warm, boundaried presence with someone whose early experience of relationship was that it was dangerous, unpredictable, or punishing. The therapeutic relationship IS the treatment in many ways. Recovery from personality disorders is real, well-evidenced, and more common than many clinicians believe."`,
    activity: `ACTIVITY — Schema Identification (20 minutes)
Melksham Mental Health | Module 23 | Licensed Materials

PURPOSE: Understand the concept of early maladaptive schemas — the deep belief patterns that schema therapy addresses — and begin to see how these might inform personality disorder presentations.

INTRODUCE: "Schemas are deep patterns of thought and feeling about ourselves, others, and the world that form in childhood in response to early experience. When early environments are consistently unsafe, unreliable, or emotionally neglectful, the schemas that form can be profound and rigid. Schema therapy is a way of identifying and gradually changing these deep patterns."

PART 1 — The 18 Schemas (7 minutes):
Present a simplified list of the major early maladaptive schemas (from Young et al.):
• Abandonment/Instability: "People I love will always leave me"
• Mistrust/Abuse: "Others will hurt, abuse or humiliate me"
• Emotional Deprivation: "My emotional needs will never be met"
• Defectiveness/Shame: "I am fundamentally flawed and unlovable"
• Failure: "I will always fail"
• Dependence: "I can't cope without help"
• Subjugation: "I must suppress what I want to avoid punishment"
• Unrelenting Standards: "I must meet very high standards or I will be worthless"

In pairs, discuss: Which of these do you see most frequently in the people you work with or support? Which might underlie some of the presentations we've covered in today's module?

PART 2 — Schema Origins (8 minutes):
Where might each schema come from in terms of childhood experience? What kind of early environment might produce "Abandonment/Instability" as a core belief? "Defectiveness/Shame"?

Whole group discussion (5 minutes): How does understanding the schema origin change how you respond to the surface behaviour?`,
    discussionPrompts: [
      'How is the current healthcare system failing people with personality disorders — and what would a genuinely helpful service look like?',
      'What is the difference between a personality disorder and a personality — and who gets to make that judgement?',
      'How does BPD stigma in clinical settings manifest in practice — what does it look like, and what are the consequences?',
      'What training do all mental health professionals need in working with personality disorders, and why is this currently inadequate?',
    ],
    resources: [
      { label: 'Mind — personality disorders', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/personality-disorders/' },
      { label: 'Rethink — personality disorders', url: 'https://www.rethink.org/advice-and-information/about-mental-illness/learn-more-about-conditions/personality-disorders/' },
      { label: 'EUPD Resources — BPD UK', url: 'https://www.eupd.co.uk' },
      { label: 'DBT Self-Help — skills and resources', url: 'https://www.dbtselfhelp.com' },
      { label: 'NHS — personality disorders', url: 'https://www.nhs.uk/mental-health/conditions/personality-disorder/' },
    ],
    videos: [
      { label: 'What is borderline personality disorder? — TED-Ed (YouTube)', url: 'https://www.youtube.com/results?search_query=borderline+personality+disorder+explained+ted' },
      { label: 'Marsha Linehan — developing DBT (YouTube)', url: 'https://www.youtube.com/results?search_query=Marsha+Linehan+DBT+interview' },
      { label: 'Schema therapy explained (YouTube)', url: 'https://www.youtube.com/results?search_query=schema+therapy+explained' },
    ],
    powerPoint: `MODULE 23 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Three-cluster overview — A/B/C in three hexagons, brief descriptors, MMH orange styling
Slide 4: BPD emotional intensity graph — peaks and troughs on timeline, relationship cycle diagram
Slide 5: DBT/MBT/Schema comparison table — evidence ratings per therapy
Activity slide: Schema list as handout reference card — clean, readable, MMH branded
All slides: MMH logo, Samaritans 116 123, licence watermark`,
    tutorNotes: `SAFEGUARDING: BPD is strongly associated with self-harm and suicide. Follow all Module 10 safeguarding protocols. Have Samaritans (116 123) visible throughout.

LANGUAGE: Never describe anyone as "a borderline" or use the term dismissively. The term EUPD (Emotionally Unstable Personality Disorder) is used in some NHS settings — acknowledge this. Person-first language always. Never describe anyone with any personality disorder as "untreatable" or "difficult" — the evidence does not support this and it causes direct harm.

SCHEMA ACTIVITY: Keep this at an analytical and compassionate distance — this is about understanding patients and clients, not self-diagnosis. Ensure the group understands they are exploring schemas as a conceptual tool.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 24
  // ─────────────────────────────────────────────────────────────
  {
    id: 24,
    topic: 'Personality Disorders: Cluster C & Others',
    summary: 'Narcissistic, avoidant, dependent, and obsessive-compulsive personality disorders — the anxious/fearful cluster, the narcissistic wound, and therapeutic approaches that build genuine psychological flexibility.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Cluster C Overview',
        bullets: [
          'Cluster C: "anxious and fearful" — avoidant, dependent, and obsessive-compulsive personality disorders',
          'Most common cluster in community settings — less dramatic presentations but significant long-term suffering',
          'Common thread: pervasive anxiety, fear of negative evaluation, need for control or certainty, avoidance of distress',
          'Highly responsive to treatment: CBT, ACT, and schema therapy all have good evidence',
          'BRANDED SLIDE: Cluster C overview — three conditions in triangular layout, MMH orange',
        ],
      },
      {
        title: 'Slide 2 — Avoidant & Dependent Personality Disorders',
        bullets: [
          'Avoidant PD: social inhibition, feelings of inadequacy, hypersensitivity to negative evaluation — desperate for connection but too afraid to pursue it',
          'Dependent PD: excessive need for care, submissive and clinging behaviour, fear of separation, difficulty making independent decisions',
          'Both rooted in attachment patterns — avoidant in anxious attachment, dependent in insecure/anxious attachment',
          'Key therapeutic challenge: building a secure base from which to develop autonomy and social confidence',
          'BRANDED SLIDE: attachment type → personality pattern diagram, MMH styled',
        ],
      },
      {
        title: 'Slide 3 — Obsessive-Compulsive Personality Disorder',
        bullets: [
          'OCPD (NOT the same as OCD): preoccupation with order, perfectionism, and control at the expense of flexibility, openness, and efficiency',
          'Key features: rigidity, need for control, workaholism, hoarding of worn-out objects, stubbornness, excessive conscientiousness',
          'Often ego-syntonic: the person does not experience the traits as problematic — others do',
          'Unlike OCD: no intrusive unwanted thoughts or compulsions to undo anxiety — the traits feel like virtues',
          'BRANDED SLIDE: OCPD vs OCD clear comparison — two-column, MMH branding',
        ],
      },
      {
        title: 'Slide 4 — Narcissistic Personality Disorder',
        bullets: [
          'Grandiosity, need for admiration, lack of empathy — but underneath: extreme fragility and vulnerability to shame',
          'NPD prevalence: ~1% of general population; much higher in clinical settings',
          'The "narcissistic wound": beneath the grandiosity is typically a profound deficit in self-esteem and a terror of being found inadequate',
          'Challenging to treat because the presenting traits (superiority, entitlement) defend against engaging with the underlying pain',
          'BRANDED SLIDE: NPD iceberg graphic — grandiosity above water, fragility/shame below',
        ],
      },
      {
        title: 'Slide 5 — Treatment Across Cluster C & NPD',
        bullets: [
          'CBT: challenges core beliefs about self and others; builds more adaptive coping strategies',
          'ACT: builds psychological flexibility and values-based living despite anxiety',
          'Schema Therapy: accesses and reworks the underlying schemas that drive the personality patterns',
          'Group therapy: provides in-vivo relational experience that is central to change for many of these presentations',
          'Prognosis: Cluster C disorders are among the most treatable — outcome research is encouraging',
          'BRANDED SLIDE: treatment progression diagram — safety → challenge → growth → integration',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Cluster C Overview
"The Cluster C presentations are arguably the most common personality disorder presentations in outpatient mental health settings, and they are also the most treatable. The person with an avoidant personality disorder is not unavailable to connection — they desperately want it. They simply find the perceived risk of rejection or humiliation so overwhelming that they withdraw before they can be hurt.

The person with dependent personality disorder is not weak or immature. They are managing a profound attachment wound through a strategy of staying close to and deferring to whoever seems able to provide the care they need. It works, until it doesn't."

SLIDE 2 — Avoidant and Dependent PD
"Both avoidant and dependent personality disorders can be understood through the lens of attachment theory. Avoidant PD often develops in the context of anxious attachment — where connection was accompanied by the threat of rejection, humiliation, or abandonment. The solution: don't try, so you can't fail.

Dependent PD develops where the early experience was of being taken care of in a way that did not support the development of autonomy — or where independence was dangerous. The solution: stay close, agree with everything, and never allow yourself to be alone."

SLIDE 3 — OCPD
"OCPD is one of the most important distinctions in the whole programme — the confusion with OCD is widespread and leads to mismanagement. In OCD, the person is tormented by unwanted intrusive thoughts and performs compulsions to reduce anxiety. They experience their OCD as alien and distressing.

In OCPD, the traits — the rigid adherence to rules, the perfectionism, the need for control — feel entirely natural and right to the person. They are ego-syntonic. It is usually the people around them who are most affected. Treatment is very different precisely because the person may not experience their traits as a problem at all."

SLIDE 4 — Narcissistic Personality Disorder
"The iceberg is the most useful metaphor for NPD. Above the waterline, what you see is grandiosity, entitlement, a need for admiration, and what appears to be an absence of empathy. Below the waterline — invisible to almost everyone, often including the person themselves — is an extremely fragile sense of self, a profound vulnerability to shame, and a terror of being seen as inadequate or ordinary.

The grandiosity is not the opposite of shame. It is its management strategy. Understanding this is essential for anyone who works with or is affected by someone with NPD — because it explains why challenges to the grandiosity produce such explosive or devastating responses."

SLIDE 5 — Treatment
"Schema therapy has particularly strong evidence for NPD — because it reaches below the defensive structure to access the vulnerable schema underneath. The work requires enormous patience and consistency from the therapist: the presenting traits are designed, at a deep neurological level, to protect the person from exactly the kind of vulnerability that therapeutic work requires.

Group therapy has unique value for Cluster C presentations — because the relational patterns that need to change can be observed and worked with in real time, with real people, in a safe and structured environment."`,
    activity: `ACTIVITY — Core Belief Exploration (20 minutes)
Melksham Mental Health | Module 24 | Licensed Materials

PURPOSE: Understand how core beliefs about self and others drive the personality patterns in Cluster C and NPD, and begin to identify how these beliefs might be modified through therapeutic work.

INTRODUCE: "Core beliefs are the deepest level of thought in the CBT model — the fundamental assumptions about ourselves, others, and the world that shape how we interpret every situation. Beck identified two clusters particularly associated with personality difficulties: helplessness ('I am incapable, vulnerable, incompetent') and unlovability ('I am unacceptable, inferior, different from others')."

PART 1 — Mapping Core Beliefs to Presentations (8 minutes):
In small groups, take each of the four presentations from this module and identify the likely core belief or beliefs:
• Avoidant PD: likely core belief about self? About others?
• Dependent PD: likely core belief about self? About independence?
• OCPD: likely core belief about control? About uncertainty?
• NPD: what is the surface belief? What is the underlying belief?

PART 2 — What Maintains Them? (7 minutes):
If core beliefs form in childhood and are maintained over a lifetime, what keeps them going? What are the processing patterns that prevent updating?

Key concepts:
• Schema maintenance: seeking evidence that confirms the belief; dismissing disconfirming evidence
• Emotional reasoning: "I feel inadequate, therefore I am inadequate"
• Safety behaviours: avoidance prevents the person from discovering that their feared outcome would not actually materialise

PART 3 — Debrief (5 minutes):
How does understanding core beliefs change how you interpret surface behaviour? When you encounter someone who appears arrogant, clingy, rigid, or avoidant — what might be the core belief driving that presentation?`,
    discussionPrompts: [
      'How should we respond to the popular cultural use of "narcissist" as a casual pejorative, given that NPD is a genuine clinical condition with significant underlying pain?',
      'What does the avoidant personality disorder presentation tell us about the way our culture handles rejection, failure, and social evaluation?',
      'What are the specific challenges in delivering group therapy for personality disorder presentations — and why is the group experience so valuable?',
      'How do we help someone with OCPD engage with treatment when they may not experience their traits as a problem?',
    ],
    resources: [
      { label: 'Mind — personality disorders', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/personality-disorders/' },
      { label: 'Schema Therapy UK — find a therapist', url: 'https://www.schematherapy.co.uk' },
      { label: 'ACT for personality disorders — Association for Contextual Behavioural Science', url: 'https://contextualscience.org' },
      { label: 'NHS — personality disorder treatment', url: 'https://www.nhs.uk/mental-health/conditions/personality-disorder/treatment/' },
      { label: 'Samaritans: 116 123 (24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'What is narcissistic personality disorder? — TED-Ed (YouTube)', url: 'https://www.youtube.com/results?search_query=narcissistic+personality+disorder+explained' },
      { label: 'Schema therapy explained (YouTube)', url: 'https://www.youtube.com/results?search_query=schema+therapy+for+personality+disorders' },
      { label: 'Avoidant personality disorder — clinical explanation (YouTube)', url: 'https://www.youtube.com/results?search_query=avoidant+personality+disorder+explained' },
    ],
    powerPoint: `MODULE 24 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 2: Attachment type → personality pattern diagram — secure/anxious/avoidant attachment types linking to presentations
Slide 3: OCPD vs OCD comparison — clear two-column table, differentiation at a glance
Slide 4: NPD iceberg — grandiosity above waterline, fragility/shame below, atmospheric ocean blue-black background
Slide 5: Treatment progression — safety → challenge → growth → integration, step diagram
Activity slide: Core belief exploration worksheet — four presentations, columns for self-belief/other-belief
All slides: MMH logo, Samaritans 116 123, licence watermark`,
    tutorNotes: `FACILITATION: Personality disorder topics can provoke strong reactions when participants are in or have been in relationships with people who have these presentations. Maintain clinical neutrality — these sessions are not about making retrospective diagnoses of people in participants' lives. Keep the focus on understanding the condition and how to support someone who has it.

NPD: This topic generates particular reactivity given the current cultural use of "narcissist". Acknowledge this directly — the clinical diagnosis is far more nuanced and more compassionate than the popular use of the term.

OCPD/OCD DISTINCTION: Test this with a quick check-in: can participants state clearly what the key difference is? This is an exam-standard differentiation.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 25
  // ─────────────────────────────────────────────────────────────
  {
    id: 25,
    topic: 'Neurocognitive Disorders',
    summary: 'Dementia, Alzheimer\'s disease, Parkinson\'s disease, and delirium — understanding cognitive decline, distinguishing dementia from delirium, person-centred care, and supporting carers.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Scale of Dementia',
        bullets: [
          '1 in 3 people born today will develop dementia in their lifetime',
          'UK: ~900,000 people currently living with dementia; projected to reach 1.6 million by 2040 (Alzheimer\'s Society)',
          'Dementia: an umbrella term for progressive neurological conditions causing cognitive decline severe enough to interfere with daily life',
          'Most common types: Alzheimer\'s (60–70%), vascular dementia, Lewy body dementia, frontotemporal dementia',
          'BRANDED SLIDE: "1 in 3" as massive orange hero statistic, MMH black background',
        ],
      },
      {
        title: 'Slide 2 — Alzheimer\'s and Vascular Dementia',
        bullets: [
          'Alzheimer\'s: progressive accumulation of beta-amyloid plaques and tau tangles → neuron death; starts in hippocampus',
          'Early Alzheimer\'s: short-term memory loss, word-finding difficulties, repeated questions, getting lost in familiar places',
          'Vascular dementia: step-wise cognitive decline following TIAs or strokes — cardiovascular risk factors are modifiable',
          '14 modifiable risk factors for dementia: hearing loss, depression, physical inactivity, smoking, obesity (Lancet Commission, 2024)',
          'BRANDED SLIDE: Alzheimer\'s brain progression scan series, MMH branded overlay',
        ],
      },
      {
        title: 'Slide 3 — Lewy Body and Frontotemporal Dementia',
        bullets: [
          'Lewy Body Dementia (LBD): visual hallucinations, Parkinsonism, fluctuating cognition, REM sleep disorder — often misdiagnosed',
          'CRITICAL: people with LBD have severe adverse reactions to antipsychotics — can be fatal; medication awareness is essential',
          'Frontotemporal dementia (FTD): personality and behavioural changes before memory loss — often misdiagnosed as psychiatric disorder',
          'FTD onset often in 45–65 age group — affects working-age adults and is frequently misidentified for years',
          'BRANDED SLIDE: LBD safety warning — "ANTIPSYCHOTICS POTENTIALLY FATAL IN LEWY BODY DEMENTIA" in orange alert box',
        ],
      },
      {
        title: 'Slide 4 — Delirium: Acute Confusion',
        bullets: [
          'Delirium: acute, fluctuating disturbance of attention and cognition — a medical emergency, NOT dementia',
          'Causes: infection, medication, dehydration, pain, surgery, organ failure — always has a reversible cause',
          'Key distinguishing feature: SUDDEN onset, fluctuating, often reversible — dementia is gradual and progressive',
          'Hyperactive delirium (agitated, confused) and hypoactive delirium (quiet, withdrawn) — hypoactive frequently missed',
          'BRANDED SLIDE: delirium vs dementia comparison table — onset / course / attention / reversibility',
        ],
      },
      {
        title: 'Slide 5 — Person-Centred Care',
        bullets: [
          'Tom Kitwood\'s person-centred care model: focus on the person\'s identity, history, preferences — not just the diagnosis',
          'Meeting psychological needs: love/attachment, inclusion, occupation, identity, comfort',
          'Behaviours that challenge: communication of unmet need — not wilful difficulty',
          'Supporting carers: 700,000 people in UK caring for someone with dementia — carer mental health is a priority',
          'BRANDED SLIDE: Kitwood flower — five psychological needs in petals, MMH orange on dark background',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — The Scale of Dementia
"Dementia is one of the defining public health challenges of our time. 900,000 people in the UK are currently living with dementia. That number is projected to nearly double by 2040. One in three people born today will develop dementia in their lifetime. This affects us all — as potential patients, as carers, as family members, as professionals, and as a society that needs to decide how we value and care for people in the later stages of life.

Understanding dementia — what it is, what it isn't, how to communicate effectively with someone who has it, and how to support the people who care for them — is not a specialist skill. It is a fundamental life skill."

SLIDE 2 — Alzheimer's and Vascular Dementia
"Alzheimer's disease begins in the hippocampus — the brain region critical for forming new memories. This is why the earliest and most characteristic symptom is short-term memory loss. The person can often remember events from 40 years ago with vivid detail, but cannot remember what they had for breakfast.

The 2024 Lancet Commission identified 14 modifiable risk factors that account for approximately 45% of dementia cases. Twelve of these are addressable at a population level — including managing hearing loss, treating depression, reducing cardiovascular risk. This is extraordinary: nearly half of dementia cases may be preventable or delayed through changes we have the capacity to make."

SLIDE 3 — Lewy Body and FTD
"Lewy Body Dementia is critically important for anyone working in care settings to understand. People with LBD can have potentially fatal reactions to antipsychotics — including commonly prescribed medications like haloperidol that might otherwise be considered appropriate for an agitated or distressed patient. This is not a theoretical risk. It is documented, preventable, and requires absolute awareness in every clinical and care setting.

Frontotemporal dementia presents a different challenge: it predominantly affects personality, behaviour, and social functioning before memory, and it typically strikes at a younger age than other dementias. A person in their mid-50s who becomes disinhibited, impulsive, or socially inappropriate may be in the early stages of FTD — and may spend years being managed as a psychiatric condition before the neurological picture becomes clear."

SLIDE 4 — Delirium
"Delirium is one of the most important clinical distinctions in geriatric medicine and it is frequently missed. Delirium is acute confusion — it comes on suddenly, it fluctuates through the day, and it is caused by something specific and treatable. A urinary tract infection in an 80-year-old can produce a state of profound confusion, hallucinations, and agitation that might be mistaken for dementia or psychosis. Treat the UTI, and the delirium resolves.

Hypoactive delirium — where the person becomes quiet and withdrawn rather than agitated — is particularly frequently missed, because it is less disruptive. The person simply seems 'a bit off'. This is dangerous: the underlying cause still requires identification and treatment."

SLIDE 5 — Person-Centred Care
"Tom Kitwood's person-centred care model is one of the most important conceptual contributions to dementia care. The central insight is this: even as memory and cognition decline, personhood does not. The person with dementia retains their identity, their emotional life, their need for love and belonging, their preferences, their sense of humour, and their sense of dignity.

When a person with dementia behaves in a way that appears challenging — shouting, refusing care, becoming agitated — the person-centred approach asks: what unmet need is this communicating? Usually it is something very simple: pain, fear, the need for the toilet, loneliness, being approached in a way that feels threatening. Meeting the need resolves the behaviour, far more effectively and ethically than restraint or sedation."`,
    activity: `ACTIVITY — Life Story Work (20 minutes)
Melksham Mental Health | Module 25 | Licensed Materials

PURPOSE: Experience the power of life story and identity in dementia care; understand how knowing someone's personal history transforms the quality of care they receive.

INTRODUCE: "Life story work is a person-centred dementia care approach that builds a rich, detailed picture of a person's life history, preferences, relationships, and meaning. It provides care staff, family, and volunteers with the knowledge they need to provide truly personalised support — and it reminds everyone, including the person with dementia, that they are a full human being with a rich history."

PART 1 — Pairs Exercise: My Life Story (8 minutes):
In pairs, take 4 minutes each to share some of your life story with your partner — as if you were creating a life story document for your care:
• Where were you born? Where did you grow up?
• What did you do for work? What were you proud of?
• What are the most important relationships in your life?
• What do you love? Music? Particular foods? Activities?
• What comforts you when you are distressed?
• What are you afraid of? What would you want people to know about you?

PART 2 — Reflection (7 minutes):
How would knowing this information change how a care worker interacted with you if you had dementia? What specific comfort could be offered, based on what you just shared, if you were confused and distressed?

PART 3 — Debrief (5 minutes):
Life story work is transformative for both the person with dementia and the staff who provide care. When you know that the person shouting for "Mary" is calling for their mother who died 50 years ago, you respond entirely differently than if you know nothing about them. Person-centred care begins with knowing who the person is.`,
    discussionPrompts: [
      'How does the current care system fail people with dementia and their carers — and what would a genuinely good dementia care infrastructure look like?',
      'What is our societal relationship with cognitive decline and ageing — and how do the values of productivity and independence shape how we respond to dementia?',
      'What does advance care planning look like for someone with dementia — and why is it so important and so underused?',
      'How can communities and neighbourhoods become more dementia-friendly — and what would that look like in Melksham specifically?',
    ],
    resources: [
      { label: 'Alzheimer\'s Society — UK charity and helpline: 0333 150 3456', url: 'https://www.alzheimers.org.uk' },
      { label: 'Dementia UK — Admiral Nurses helpline: 0800 888 6678', url: 'https://www.dementiauk.org' },
      { label: 'NHS — dementia guide', url: 'https://www.nhs.uk/conditions/dementia/' },
      { label: 'Carers UK helpline: 0808 808 7777', url: 'https://www.carersuk.org' },
      { label: 'Lewy Body Society — LBD information', url: 'https://www.lewybody.org' },
    ],
    videos: [
      { label: 'Understanding Alzheimer\'s — Alzheimer\'s Society (YouTube)', url: 'https://www.youtube.com/results?search_query=understanding+alzheimers+disease+alzheimers+society' },
      { label: 'Person-centred dementia care — Tom Kitwood (YouTube)', url: 'https://www.youtube.com/results?search_query=person+centred+dementia+care+Kitwood' },
      { label: 'What is delirium? — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=what+is+delirium+NHS+explained' },
    ],
    powerPoint: `MODULE 25 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: "1 in 3" — massive hero statistic, warm/dignified tone
Slide 3: LBD antipsychotic warning — orange alert box, bold text: "ANTIPSYCHOTICS POTENTIALLY FATAL IN LBD"
Slide 4: Delirium vs Dementia comparison table — onset / course / reversibility / attention — clean tabular format
Slide 5: Kitwood flower — five psychological needs in petals: love/attachment/occupation/inclusion/identity/comfort — MMH orange
Activity slide: Life story prompt questions for participant use
All slides: Alzheimer's Society 0333 150 3456, Dementia UK 0800 888 6678, MMH logo, licence watermark`,
    tutorNotes: `FACILITATION: Many participants will have caring experience or personal family experience of dementia. This is a topic that generates deep emotional responses. Allow space for reflection. The life story activity can be moving — this is appropriate and valuable.

LBD MEDICATION WARNING: Emphasise this to any participant working in care settings. This is potentially life-saving clinical knowledge.

LANGUAGE: "A person with dementia" not "a dementia sufferer" or "demented". Always lead with personhood. Never describe cognitive decline as "just getting old" — dementia is a pathological process, not a normal feature of ageing.

CARERS: Acknowledge the enormous physical and emotional burden on carers. Signpost to Carers UK and Dementia UK Admiral Nurses.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULES 26–50 PLACEHOLDER
  // ─────────────────────────────────────────────────────────────
  ...([
    { id: 26, topic: 'Mental Health & Chronic Physical Conditions', category: 'social', condition: 'the bidirectional relationship between chronic physical illness and mental health' },
    { id: 9, topic: 'Trauma & Stress: Childhood Trauma & ACEs', category: 'trauma', condition: 'adverse childhood experiences (ACEs) and their lifelong impact' },
    { id: 10, topic: 'Trauma & Stress: Self-harm & Suicide Prevention', category: 'trauma', condition: 'self-harm, suicidal ideation, and safe-messaging suicide prevention' },
    { id: 11, topic: 'Mood Disorders: Major Depression', category: 'mood', condition: 'major depressive disorder' },
    { id: 12, topic: 'Mood Disorders: Bipolar Disorder', category: 'mood', condition: 'bipolar I and II disorders' },
    { id: 13, topic: 'Mood Disorders: Seasonal & Persistent Depressive Disorders', category: 'mood', condition: 'seasonal affective disorder (SAD), dysthymia and cyclothymia' },
    { id: 14, topic: 'Anxiety Disorders: Generalised Anxiety Disorder', category: 'anxiety', condition: 'generalised anxiety disorder (GAD)' },
    { id: 15, topic: 'Anxiety Disorders: Phobias & Panic Disorder', category: 'anxiety', condition: 'specific phobias, social anxiety disorder and panic disorder' },
    { id: 16, topic: 'Anxiety Disorders: OCD & Related Conditions', category: 'anxiety', condition: 'obsessive-compulsive disorder (OCD), body dysmorphic disorder and related conditions' },
    { id: 17, topic: 'Dissociative & Somatic Disorders', category: 'clinical', condition: 'dissociative disorders (DID, depersonalisation) and somatic symptom disorder' },
    { id: 18, topic: 'Eating Disorders & Body Image', category: 'clinical', condition: 'anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID and body image' },
    { id: 19, topic: 'Sleep & Circadian Rhythm Disorders', category: 'clinical', condition: 'insomnia, narcolepsy, sleep apnea, parasomnias and circadian rhythm disruption' },
    { id: 20, topic: 'Impulse-Control & Disruptive Disorders', category: 'clinical', condition: 'intermittent explosive disorder, conduct disorder, ODD, kleptomania and pyromania' },
    { id: 21, topic: 'Substance Use & Addiction', category: 'clinical', condition: 'substance use disorder, alcohol dependence, drug addiction and gambling disorder' },
    { id: 22, topic: 'Psychotic Disorders: Schizophrenia & Related Conditions', category: 'clinical', condition: 'schizophrenia spectrum and other psychotic disorders' },
    { id: 23, topic: 'Personality Disorders: Cluster A & B', category: 'personality', condition: 'paranoid, schizoid, antisocial, borderline and histrionic personality disorders' },
    { id: 24, topic: 'Personality Disorders: Cluster C & Others', category: 'personality', condition: 'narcissistic, avoidant, dependent and obsessive-compulsive personality disorders' },
    { id: 25, topic: 'Neurocognitive Disorders', category: 'neuro', condition: 'dementia, Alzheimer\'s disease, Parkinson\'s disease and delirium' },
    { id: 26, topic: 'Mental Health & Chronic Physical Conditions', category: 'social', condition: 'the bidirectional relationship between chronic physical illness and mental health' },
    { id: 27, topic: 'Workplace Mental Health & Burnout', category: 'social', condition: 'occupational stress, burnout and workplace mental health' },
    { id: 28, topic: 'Social Isolation & Loneliness', category: 'social', condition: 'loneliness, social isolation and their mental health consequences' },
    { id: 29, topic: 'Financial Stress & Mental Health', category: 'social', condition: 'poverty, financial stress, debt and their relationship to mental illness' },
    { id: 30, topic: 'Relationships & Attachment', category: 'social', condition: 'attachment theory, healthy relationships, codependency and relational trauma' },
    { id: 31, topic: 'Parenting Stress & Paternal Mental Health', category: 'social', condition: 'parenting-related stress, paternal postnatal depression and anxiety' },
    { id: 32, topic: 'Maternal Mental Health & Perinatal Disorders', category: 'social', condition: 'postpartum depression, perinatal anxiety, postpartum psychosis and birth trauma' },
    { id: 33, topic: 'Child & Adolescent Mental Health', category: 'identity', condition: 'mental health disorders in children and adolescents including anxiety, depression and self-harm' },
    { id: 34, topic: 'Older Adult Mental Health', category: 'identity', condition: 'depression, anxiety, dementia and suicide risk in older adults' },
    { id: 35, topic: 'LGBTQIA+ Mental Health', category: 'identity', condition: 'minority stress, discrimination and mental health in LGBTQIA+ people' },
    { id: 36, topic: 'Racism, Discrimination & Intersectionality', category: 'identity', condition: 'racism as a determinant of mental health and intersectional approaches to care' },
    { id: 37, topic: 'Gender & Sexuality', category: 'identity', condition: 'gender dysphoria, gender-based violence and sexuality-related mental health' },
    { id: 38, topic: 'Sexual Violence & Trauma', category: 'identity', condition: 'sexual assault, rape trauma syndrome, coercive control and recovery' },
    { id: 39, topic: 'Grief, Loss & Bereavement', category: 'wellbeing', condition: 'grief, bereavement, complicated grief and disenfranchised loss' },
    { id: 40, topic: 'Chronic Pain & Pain Management', category: 'wellbeing', condition: 'chronic pain, its mental health impact and psychological pain management' },
    { id: 41, topic: 'Sleep Hygiene & Circadian Health', category: 'wellbeing', condition: 'healthy sleep, sleep hygiene and the relationship between sleep and mental health' },
    { id: 42, topic: 'Nutrition, Exercise & Mental Health', category: 'wellbeing', condition: 'the role of diet, physical activity and lifestyle in mental health' },
    { id: 43, topic: 'Mindfulness, Meditation & Breathwork', category: 'wellbeing', condition: 'mindfulness-based approaches, meditation and breathwork for mental health' },
    { id: 44, topic: 'Creative Arts & Expressive Therapies', category: 'wellbeing', condition: 'art therapy, music therapy, movement and writing as therapeutic tools' },
    { id: 45, topic: 'Technology & Mental Health: Screen Time, Gaming & Social Media', category: 'modern', condition: 'problematic technology use, gaming disorder and social media\'s mental health impact' },
    { id: 46, topic: 'Climate Anxiety & Eco-distress', category: 'modern', condition: 'climate anxiety, eco-grief and mental health in the context of environmental crisis' },
    { id: 47, topic: 'Spirituality & Meaning', category: 'modern', condition: 'spirituality, religion, meaning-making and mental health' },
    { id: 48, topic: "Men's Mental Health & Masculinity", category: 'modern', condition: "masculine norms, help-seeking barriers and men's mental health" },
    { id: 49, topic: 'Military & Veteran Mental Health', category: 'modern', condition: 'combat-related PTSD, moral injury, traumatic brain injury and veteran mental health' },
    { id: 50, topic: 'Prison, Legal System & Mental Health', category: 'modern', condition: 'mental health in the criminal justice system, incarceration and reentry' },
  ] as { id: number; topic: string; category: string; condition: string }[]).map((m) => {
  // Extract the sub-topic after the colon (e.g. "PTSD" from "Trauma & Stress: PTSD").
  // Fall back to the full topic if there is no colon, ensuring no undefined in strings.
  const subTopic = m.topic.includes(':')
    ? (m.topic.split(':').pop()?.trim() ?? m.topic)
    : m.topic;

  return {
    id: m.id,
    topic: m.topic,
    summary: `Evidence-based 2-hour session on ${m.condition}. Includes facilitated discussion, interactive activity, and UK-specific resources.`,
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: `Understanding ${m.topic}`,
        bullets: [
          `Definition and diagnostic criteria for ${m.condition}`,
          'Prevalence and who is affected in the UK',
          'Common signs, symptoms and lived experience',
        ],
      },
      {
        title: 'Causes & Contributing Factors',
        bullets: [
          'Biological and neurological factors',
          'Psychological and cognitive factors',
          'Social, environmental and systemic factors',
        ],
      },
      {
        title: 'Evidence-Based Treatments & Interventions',
        bullets: [
          'NICE-recommended treatments and therapies',
          'Medication options where applicable',
          'Self-help strategies and peer support',
        ],
      },
      {
        title: 'Supporting Someone with ' + subTopic,
        bullets: [
          'What to say (and what NOT to say)',
          'Practical day-to-day support strategies',
          'When and how to seek professional help',
        ],
      },
      {
        title: 'UK Resources & Next Steps',
        bullets: [
          'NHS services and waiting list realities',
          'Third-sector organisations and helplines',
          'Self-referral pathways (IAPT/Talking Therapies)',
        ],
      },
    ],
    deliveryScript: `MODULE ${m.id} — ${m.topic}

INTRODUCTION (10 min)
"Welcome back. Today we are covering ${m.condition}. As always, this is a safe and confidential space. Some of what we discuss may resonate personally — that is completely fine. Please take care of yourself throughout.

Our objectives for today are: to understand what ${m.condition} looks like in real life; to explore the evidence on causes and treatments; and to build practical skills for supporting ourselves and others."

MAIN CONTENT (40 min)
[SLIDE 1 — Understanding]
"Let's start with what we're actually talking about. ${subTopic} affects a significant proportion of the UK population and yet is still widely misunderstood. [Share relevant UK prevalence statistics from the slide.] The lived experience varies enormously between individuals — always remember that a diagnosis is a starting point for understanding, not a complete description of a person."

[SLIDE 2 — Causes]
"No mental health condition has a single cause. We use the biopsychosocial model — biology, psychology and social factors all interact. For ${m.condition}, [describe the key causal factors on the slide]. The important message is: this is not a character flaw. There are real, understandable reasons why people develop these difficulties."

[SLIDE 3 — Treatments]
"NICE guidelines provide clear recommendations for treatment. [Walk through the slide content.] Psychological therapies — particularly CBT, which is available through the NHS Talking Therapies service — are first-line for many conditions. Waiting times can be long; third-sector organisations can often provide support more quickly."

[SLIDE 4 — Supporting Someone]
"If someone you know is living with ${m.condition}, the most important thing is to listen without judgement. Avoid phrases like 'just cheer up', 'other people have it worse' or 'have you tried yoga?' — however well-intentioned, these minimise the person's experience. Instead: 'I'm here', 'I believe you', 'what would help right now?'"

[SLIDE 5 — Resources]
"Before we move to the activity, let's map the support landscape. [Walk through the resources slide.] NHS Talking Therapies (formerly IAPT) accepts self-referrals in most areas — participants don't need a GP referral. Encourage everyone to look up their local service."`,
    activity: `ACTIVITY — Scenario Cards (20 min)

Prepare 6 scenario cards, each describing a person experiencing ${m.condition} in a realistic everyday situation.

Example format:
"Alex is 34 and has been struggling with [related symptom]. They recently confided in a friend. The friend wants to help but isn't sure what to say."

Groups of 3-4 choose a card and:
1. Identify the signs present in the scenario (5 min)
2. Draft what a supportive response might look, sound and feel like (5 min)
3. Share back with the room, facilitated group discussion (10 min)

Tutor reflects on what was noticed and any common themes.`,
    discussionPrompts: [
      `What barriers stop people with ${m.condition} from seeking help, and how could those barriers be reduced?`,
      'How does stigma around this condition specifically manifest, and what can individuals do to challenge it?',
      'What has surprised you most about what you have learned today?',
      'What will you do differently as a result of this session?',
    ],
    resources: [
      { label: 'NHS Mental Health Services', url: 'https://www.nhs.uk/mental-health/' },
      { label: 'Mind — Information & Support', url: 'https://www.mind.org.uk/information-support/' },
      { label: 'NHS Talking Therapies (Self-referral)', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
      { label: 'Samaritans (24/7)', url: 'https://www.samaritans.org' },
    ],
    tutorNotes: `SAFEGUARDING: Module ${m.id} covers ${m.condition}. Be prepared for personal disclosures. Have Samaritans (116 123), NHS 111 mental health option, and your local crisis line number visible. Follow your organisation's safeguarding protocol.

FACILITATION: Encourage questions throughout. If the group goes quiet, use a paired sharing exercise before whole-group discussion. Validate all contributions. Close the session by naming the strength it takes to engage with difficult topics.

SLIDES: Tutor should add current UK statistics from NHS Digital, Mind or MH Foundation to the slides before the session. Figures change; always verify before delivery.`,
  };
}),
];

/** Look up a single module guide by ID */
export function getModuleGuide(id: number): ModuleGuide | undefined {
  return moduleGuides.find((g) => g.id === id);
}
