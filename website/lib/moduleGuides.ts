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
  // MODULES 7–50 PLACEHOLDER (full content added in sequence)
  // ─────────────────────────────────────────────────────────────
  ...([
    { id: 7, topic: 'Trauma & Stress: PTSD and Complex PTSD', category: 'trauma', condition: 'post-traumatic stress disorder (PTSD) and complex PTSD (C-PTSD)' },
    { id: 7, topic: 'Trauma & Stress: PTSD and Complex PTSD', category: 'trauma', condition: 'post-traumatic stress disorder (PTSD) and complex PTSD (C-PTSD)' },
    { id: 8, topic: 'Trauma & Stress: Domestic & Intimate Partner Violence', category: 'trauma', condition: 'domestic and intimate partner violence and its mental health impact' },
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
