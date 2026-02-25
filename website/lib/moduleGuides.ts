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
  // MODULES 12–50 PLACEHOLDER
  // ─────────────────────────────────────────────────────────────
  ...([
    { id: 12, topic: 'Mood Disorders: Bipolar Disorder', category: 'mood', condition: 'bipolar I and II disorders' },
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
