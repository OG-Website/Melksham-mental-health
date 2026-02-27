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

/** Static map of module ID → PPTX filename (files served from /course-materials/) */
const PPTX_FILES: Record<number, string> = {
  1: 'Module_01_Foundations_of_Mental_Health.pptx',
  2: 'Module_02_Introduction_to_Mental-Health_Disorders.pptx',
  3: 'Module_03_Neurodevelopmental_Disorders_Autism_Spectrum.pptx',
  4: 'Module_04_Neurodevelopmental_Disorders_ADHD.pptx',
  5: 'Module_05_Neurodevelopmental_Disorders_Intellectual_and_Learning_.pptx',
  6: 'Module_06_Trauma_and_Stress_Acute_Stress_and_Adjustment_Disorders.pptx',
  7: 'Module_07_Trauma_and_Stress_PTSD_and_Complex_PTSD.pptx',
  8: 'Module_08_Trauma_and_Stress_Domestic_and_Intimate_Partner_Violenc.pptx',
  9: 'Module_09_Trauma_and_Stress_Childhood_Trauma_and_ACEs.pptx',
  10: 'Module_10_Trauma_and_Stress_Self-harm_and_Suicide_Prevention.pptx',
  11: 'Module_11_Mood_Disorders_Major_Depression.pptx',
  12: 'Module_12_Mood_Disorders_Bipolar_Disorder.pptx',
  13: 'Module_13_Mood_Disorders_Seasonal_and_Persistent_Depressive_Disor.pptx',
  14: 'Module_14_Anxiety_Disorders_Generalised_Anxiety_Disorder.pptx',
  15: 'Module_15_Anxiety_Disorders_Phobias_and_Panic_Disorder.pptx',
  16: 'Module_16_Anxiety_Disorders_OCD_and_Related_Conditions.pptx',
  17: 'Module_17_Dissociative_and_Somatic_Disorders.pptx',
  18: 'Module_18_Eating_Disorders_and_Body_Image.pptx',
  19: 'Module_19_Sleep_and_Circadian_Rhythm_Disorders.pptx',
  20: 'Module_20_Impulse-Control_and_Disruptive_Disorders.pptx',
  21: 'Module_21_Substance_Use_and_Addiction.pptx',
  22: 'Module_22_Psychotic_Disorders_Schizophrenia_and_Related_Condition.pptx',
  23: 'Module_23_Personality_Disorders_Cluster_A_and_B.pptx',
  24: 'Module_24_Personality_Disorders_Cluster_C_and_Others.pptx',
  25: 'Module_25_Neurocognitive_Disorders.pptx',
  26: 'Module_26_Mental_Health_and_Chronic_Physical_Conditions.pptx',
  27: 'Module_27_Workplace_Mental_Health_and_Burnout.pptx',
  28: 'Module_28_Social_Isolation_and_Loneliness.pptx',
  29: 'Module_29_Financial_Stress_and_Mental_Health.pptx',
  30: 'Module_30_Relationships_and_Attachment.pptx',
  31: 'Module_31_Parenting_Stress_and_Paternal_Mental_Health.pptx',
  32: 'Module_32_Maternal_Mental_Health_and_Perinatal_Disorders.pptx',
  33: 'Module_33_Child_and_Adolescent_Mental_Health.pptx',
  34: 'Module_34_Older_Adult_Mental_Health.pptx',
  35: 'Module_35_LGBTQIA_Plus_Mental_Health.pptx',
  36: 'Module_36_Racism_Discrimination_and_Intersectionality.pptx',
  37: 'Module_37_Gender_and_Sexuality.pptx',
  38: 'Module_38_Sexual_Violence_and_Trauma.pptx',
  39: 'Module_39_Grief_Loss_and_Bereavement.pptx',
  40: 'Module_40_Chronic_Pain_and_Pain_Management.pptx',
  41: 'Module_41_Sleep_Hygiene_and_Circadian_Health.pptx',
  42: 'Module_42_Nutrition_Exercise_and_Mental_Health.pptx',
  43: 'Module_43_Mindfulness_Meditation_and_Breathwork.pptx',
  44: 'Module_44_Creative_Arts_and_Expressive_Therapies.pptx',
  45: 'Module_45_Technology_and_Mental_Health.pptx',
  46: 'Module_46_Climate_Anxiety_and_Eco-distress.pptx',
  47: 'Module_47_Spirituality_and_Meaning.pptx',
  48: 'Module_48_Mens_Mental_Health_and_Masculinity.pptx',
  49: 'Module_49_Military_and_Veteran_Mental_Health.pptx',
  50: 'Module_50_Prison_Legal_System_and_Mental_Health.pptx',
};

/** Returns the public URL path for the PPTX file for a given module ID, or null if not found. */
export function getModulePptxPath(moduleId: number): string | null {
  const filename = PPTX_FILES[moduleId];
  return filename ? `/course-materials/${filename}` : null;
}

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
  // MODULE 26
  // ─────────────────────────────────────────────────────────────
  {
    id: 26,
    topic: 'Mental Health & Chronic Physical Conditions',
    summary: 'The bidirectional relationship between chronic physical illness and mental health — how each worsens the other, the evidence for integrated care, and practical strategies for supporting people with co-morbid conditions.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Vicious Cycle',
        bullets: [
          "People with a long-term physical condition are 2-3x more likely to experience depression or anxiety (NHS England / King's Fund)",
          '~15 million people in the UK live with a long-term condition; mental ill-health affects 30-50% of them',
          'The relationship is bidirectional: mental illness worsens physical outcomes; physical illness worsens mental health',
          'Depression reduces medication adherence, self-care and exercise — directly accelerating physical disease',
          "BRANDED SLIDE: two interlocking orange circles labelled 'Physical' and 'Mental' on black; '2-3x' as hero statistic",
        ],
      },
      {
        title: 'Slide 2 — Key Conditions & Their Mental Health Impact',
        bullets: [
          'Diabetes: 3x higher depression rates; depression raises blood glucose via cortisol and poor self-management',
          'Cardiovascular disease: depression doubles risk of a second heart attack; post-MI depression is a major mortality predictor',
          'Cancer: 25-30% prevalence of clinical anxiety or depression; fear of recurrence persists years after treatment',
          'Chronic pain: 30-50% of chronic pain patients have comorbid depression or anxiety; pain catastrophising maintains both',
          'BRANDED SLIDE: four condition cards (diabetes / CVD / cancer / pain) each with statistic — orange bordered boxes on black',
        ],
      },
      {
        title: 'Slide 3 — Why the Link Exists',
        bullets: [
          'Biological: chronic inflammation (raised CRP, IL-6) directly affects brain chemistry and drives depression',
          'Psychological: grief at diagnosis, loss of identity and role, fear of death, helplessness and catastrophising',
          'Social: financial stress, reduced employment, social withdrawal, carer burden, isolation',
          'Iatrogenic: some medications (steroids, beta-blockers, interferon) can directly cause depressive symptoms',
          'BRANDED SLIDE: biopsychosocial triangle with chronic illness examples in each segment — MMH orange headers',
        ],
      },
      {
        title: 'Slide 4 — Integrated Care: What Works',
        bullets: [
          'NICE CG91: routine depression screening for all patients with diabetes or coronary heart disease',
          'Collaborative care models (mental health clinician embedded in physical health team): ~20% improvement in outcomes',
          'CBT and ACT adapted for chronic conditions address both psychological distress and health behaviours',
          'Peer support: lived-experience volunteers reduce isolation and improve engagement in ways clinical input alone cannot',
          "BRANDED SLIDE: interconnected circles — GP / mental health / physical health / peer support — 'Integrated Care' header in orange",
        ],
      },
      {
        title: 'Slide 5 — UK Resources & Next Steps',
        bullets: [
          'NHS Talking Therapies: includes a long-term conditions pathway — self-referral, no GP needed',
          'Every Mind Matters (NHS): self-care plans and tools adapted for physical health challenges',
          'Condition-specific charities: Diabetes UK, British Heart Foundation, Versus Arthritis — all have mental health resources',
          'Wiltshire: AWP NHS Trust Talking Therapies — 0300 303 1320 for self-referral',
          'BRANDED SLIDE: QR codes to NHS Talking Therapies and Every Mind Matters; Wiltshire number prominent',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Vicious Cycle
"Let's start with a statistic that surprises most people. If you have a long-term physical health condition - diabetes, heart disease, chronic pain, cancer, COPD - you are two to three times more likely to develop depression or anxiety than the general population. Fifteen million people in the UK live with a long-term condition. That means tens of millions of people are navigating both physical and mental ill-health simultaneously, often with services that treat these as entirely separate problems.

The relationship is not one-directional. Depression makes physical conditions worse - it drains the energy and motivation needed for medication, clinic attendance, exercise and self-management. And physical conditions worsen mental health through pain, fatigue, loss of identity, and fear of the future. Understanding this cycle is the first step to breaking it."

SLIDE 2 - Key Conditions
"Let me make this concrete. Depression in diabetes is not just about the burden of management - the physiological link runs deep: depression elevates cortisol, which raises blood glucose directly. Post-MI depression is one of the strongest predictors of a second heart attack - stronger than many traditional cardiac risk factors. In cancer care, up to 30% of patients have clinically significant anxiety or depression, and fear of recurrence often persists for years after successful treatment. These are not minor psychological reactions. They are co-morbid conditions that require treatment in their own right."

SLIDE 3 - Why the Link Exists
"Three sets of mechanisms explain the link. Biologically: chronic inflammation - which underlies most long-term physical conditions - also drives depression. Psychologically: a diagnosis of chronic illness involves real, profound loss - loss of the health you had, of the future you imagined, of the person you thought you were. That grief is legitimate and deserves proper support. Socially: chronic illness frequently brings financial hardship, reduced work capacity, strain on relationships, and profound isolation.

There is also an iatrogenic dimension worth naming: some medications prescribed for physical conditions - including steroids, certain beta-blockers, and interferon - can directly cause or worsen depressive symptoms. This is essential knowledge for anyone supporting someone with a chronic condition."

SLIDE 4 - What Works
"NICE guidance is clear: people with diabetes and people with coronary heart disease should be routinely screened for depression. In practice, this rarely happens consistently. Mental health is still treated as an add-on rather than a core component of chronic disease management.

The evidence for integrated care is compelling. When a mental health practitioner is embedded in a physical health team, outcomes improve by around 20% across both physical and mental health measures. Cognitive behavioural therapy adapted for chronic conditions - sometimes called 'CBT for physical health problems' - addresses both the psychological distress and the health behaviours simultaneously. Peer support, connecting someone with the same condition who has found a way to live well, reduces isolation and instils hope in ways that clinical input alone cannot."

SLIDE 5 - Resources
"NHS Talking Therapies now includes a specific long-term conditions pathway - adapted CBT that takes physical health directly into account. Self-referral, no GP needed. In Wiltshire, the AWP Talking Therapies service accepts self-referrals on 0300 303 1320. Condition-specific charities - Diabetes UK, the British Heart Foundation, Versus Arthritis - all have mental health resources and peer support programmes. Encourage everyone in the room to look up their local Talking Therapies service today."`,
    activity: `ACTIVITY - The Inner Life of Chronic Illness (20 minutes)
Melksham Mental Health | Module 26 | Licensed Materials

PURPOSE: Build genuine empathy for the psychological experience of chronic physical illness; challenge the assumption that physical and mental health are separate domains.

INTRODUCE: "Managing a long-term physical health condition is not just a medical challenge - it is a psychological, emotional, and social one. This activity invites you to explore what that experience actually feels like from the inside."

PART 1 - Pairs Interview (8 minutes):
In pairs, take 4 minutes each. Person A asks Person B:
Imagine you've just been told you have a condition requiring daily medication, regular clinic appointments, dietary changes, and careful self-monitoring for the rest of your life. How does that land emotionally? What do you imagine losing? What would be hardest? Who would you tell, and how?
Then swap.

PART 2 - Group Mapping on Whiteboard (7 minutes):
Gather the group's responses and map them:
- What losses came up?
- What fears?
- What practical burdens?
- What effects on relationships and work?
- What would ACTUALLY help?

PART 3 - Debrief (5 minutes):
Key reflection: "Everything on this board is a mental health need. The person sitting in your GP surgery with poorly controlled diabetes may be struggling with grief, fear, hopelessness and isolation - not just blood sugar. How does recognising this change how we approach them?"

TUTOR NOTE: If participants have personal experience of chronic illness, invite them to share if comfortable - lived experience is the most powerful teaching in this room.`,
    discussionPrompts: [
      'Why do physical health services so routinely fail to address the mental health of people with long-term conditions, and what would genuinely integrated care actually look like in practice?',
      "How does the cultural expectation that people with chronic illness should 'stay positive' or 'be brave' affect their willingness to talk about emotional struggle?",
      'What can peer support offer that clinical services fundamentally cannot?',
      'How would you approach a conversation with someone who seems to be struggling emotionally with their physical health condition?',
    ],
    resources: [
      { label: 'NHS Talking Therapies - long-term conditions pathway', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
      { label: 'Every Mind Matters - NHS self-care tools', url: 'https://www.nhs.uk/every-mind-matters/' },
      { label: 'Mind - physical health and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/physical-activity-and-your-mental-health/' },
      { label: 'Diabetes UK - emotional wellbeing', url: 'https://www.diabetes.org.uk/living-with-diabetes/emotional-wellbeing' },
      { label: 'British Heart Foundation - mental health after heart attack', url: 'https://www.bhf.org.uk/informationsupport/heart-matters-magazine/wellbeing/depression' },
    ],
    videos: [
      { label: 'Living with a long-term condition and mental health - NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=living+with+long+term+condition+mental+health+NHS' },
      { label: 'Depression and diabetes explained - Diabetes UK (YouTube)', url: 'https://www.youtube.com/results?search_query=depression+diabetes+emotional+wellbeing+diabetes+uk' },
      { label: "Integrated care for long-term conditions - King's Fund (YouTube)", url: 'https://www.youtube.com/results?search_query=integrated+care+long+term+conditions+mental+health+kings+fund' },
    ],
    powerPoint: `MODULE 26 POWERPOINT SPECIFICATION - Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Two interlocking circles 'Physical' and 'Mental' with bidirectional orange arrows; '2-3x' as large hero statistic in orange
Slide 2: Four condition cards (diabetes/CVD/cancer/pain) each with key statistic in orange bordered boxes
Slide 3: Biopsychosocial triangle with chronic illness examples at each point
Slide 4: Integrated care model - four interconnected circles for GP/MH/PH/peer support
Slide 5: QR codes to NHS Talking Therapies and Every Mind Matters; AWP number 0300 303 1320
All slides: Samaritans 116 123 in footer, MMH skull logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Chronic illness and mental health is deeply personal. Many participants will have lived experience as a patient or carer. Be attentive to emotional responses - particularly around grief, fear of death and loss. Apply standard safeguarding protocols for serious disclosures.

FACILITATION: The pairs interview can surface powerful emotions. Create space for this; do not rush. The debrief question about blood sugar and grief is the heart of the session - give it time.

LANGUAGE: Avoid "suffering from" - prefer "living with". Never imply that positive thinking alone is sufficient treatment for depression in chronic illness. Acknowledge genuine grief.

STATISTICS: Update prevalence figures from NHS Digital, King's Fund and NICE before each delivery - these are regularly revised.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 27
  // ─────────────────────────────────────────────────────────────
  {
    id: 27,
    topic: 'Workplace Mental Health & Burnout',
    summary: 'Occupational stress, burnout and workplace mental health - recognising the signs, understanding the causes, and building workplaces where people can thrive rather than merely survive.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Scale of Workplace Mental Health',
        bullets: [
          'Mental health problems are the leading cause of sickness absence in the UK - 17 million working days lost per year (CIPD)',
          'Cost to UK employers: 56 billion per year in lost productivity, presenteeism and staff turnover (Deloitte 2022)',
          '1 in 6 workers experience a mental health problem in any given week (Mind)',
          '60% of employees say they have experienced a mental health problem due to work (Mind)',
          "BRANDED SLIDE: '17 million days' as hero statistic in massive orange text on black; MMH branding",
        ],
      },
      {
        title: 'Slide 2 — What is Burnout?',
        bullets: [
          'WHO ICD-11: burnout is an occupational phenomenon - exhaustion, cynicism, and reduced professional efficacy',
          'Three dimensions: emotional exhaustion, depersonalisation (cynicism / detachment), and reduced personal accomplishment',
          'Burnout vs. depression: burnout is context-specific (work); depression pervades all areas of life',
          'Risk factors: excessive workload, lack of control, insufficient reward, poor community, unfairness, values mismatch (Maslach & Leiter)',
          "BRANDED SLIDE: Maslach's three burnout dimensions as three pillars - orange headers on black",
        ],
      },
      {
        title: 'Slide 3 — Toxic Work Environments',
        bullets: [
          'WHO: poor job design, excessive demands, lack of autonomy, job insecurity and discrimination all harm mental health',
          'Long working hours: 55+ hours per week associated with 35% higher risk of stroke and 17% higher risk of heart disease (Lancet)',
          'Presenteeism: working while unwell costs UK employers more than absenteeism - estimated 25.9 billion/year',
          'Discrimination, bullying, and harassment are significant drivers of workplace mental ill-health',
          'BRANDED SLIDE: six toxic work factors listed in red-bordered boxes on dark background',
        ],
      },
      {
        title: 'Slide 4 — What Organisations & Individuals Can Do',
        bullets: [
          'Organisational: flexible working, manageable workloads, psychological safety, trained managers, Employee Assistance Programmes',
          'NICE NG212: employers should conduct risk assessments for work-related mental health and implement reasonable adjustments',
          'Mental health first aiders: trained staff who provide first-line support and signpost to services',
          'Individual strategies: boundary-setting, job crafting, peer support, early help-seeking, self-care',
          'BRANDED SLIDE: employer / employee two-column action list in MMH orange and white on black',
        ],
      },
      {
        title: 'Slide 5 — UK Resources & Rights',
        bullets: [
          'Acas: free advice on workplace rights and mental health adjustments - 0300 123 1100',
          "Mind's Workplace Wellbeing Programme - free resources for employers and employees",
          'NHS Talking Therapies: self-referral, includes work-focused CBT',
          'Employee rights: reasonable adjustments under Equality Act 2010; fit notes for mental health conditions',
          "BRANDED SLIDE: three key resources with logos; workers' rights summary box in orange",
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Scale of Workplace Mental Health
"Work is one of the most significant factors shaping our mental health. We spend more of our waking hours at work than almost anywhere else. And the statistics are stark: mental health problems are now the leading cause of sickness absence in the UK - 17 million working days lost every year. The cost to employers is estimated at 56 billion pounds annually in lost productivity, staff turnover, and the hidden cost of presenteeism - people dragging themselves into work while mentally unwell and operating at a fraction of their capacity.

This is not a personal failure. When 60% of employees report that work has caused or worsened their mental health problems, the problem is systemic, not individual."

SLIDE 2 - Burnout
"Burnout was officially recognised by the World Health Organisation in 2019 as an occupational phenomenon - important because that framing locates the problem in the work environment rather than in the individual. Burnout has three dimensions: emotional exhaustion - being utterly depleted; depersonalisation or cynicism - becoming emotionally detached, going through the motions; and reduced professional efficacy - the sense that what you do no longer makes any difference.

The critical distinction from depression: burnout is context-specific. Remove the person from the toxic work environment, and burnout often resolves. Depression pervades every area of life. Both require support, but the interventions differ significantly."

SLIDE 3 - Toxic Work Environments
"The World Health Organisation is clear: excessive workloads, poor job design, lack of control, job insecurity, discrimination, and harassment are not personal problems - they are workplace hazards with measurable mental health consequences. Working more than 55 hours a week is associated with a 35% higher risk of stroke. Presenteeism - turning up while mentally unwell - actually costs UK employers more than absenteeism, because people who are struggling operate at dramatically reduced effectiveness for far longer than they take off sick.

We need to stop framing workplace mental health primarily as a matter of individual resilience. Resilience training in toxic workplaces is like teaching people to swim faster in a riptide."

SLIDE 4 - What Works
"What the evidence supports: flexible working; manageable workloads; psychological safety - the ability to speak up without fear; trained managers who recognise distress and respond with support rather than performance management; Employee Assistance Programmes with genuinely confidential and accessible support.

NICE guidance for employers is explicit: conduct risk assessments for work-related mental health problems and implement reasonable adjustments. This is not optional good practice - it is a legal and ethical obligation.

For individuals: boundary-setting is not a luxury - it is a professional survival skill. Job crafting - reshaping your role toward your strengths - has strong evidence for protecting against burnout. And early help-seeking makes an enormous difference; the longer burnout progresses, the longer recovery takes."

SLIDE 5 - Resources
"Acas provides free, confidential advice on workplace rights and how to request mental health adjustments - on 0300 123 1100. Under the Equality Act 2010, employers have a legal duty to make reasonable adjustments for mental health conditions. NHS Talking Therapies offers work-focused CBT that directly addresses workplace anxiety and stress. And Mind's Workplace Wellbeing Programme provides free evidence-based resources for both employers and employees."`,
    activity: `ACTIVITY - Spotting the Warning Signs (20 minutes)
Melksham Mental Health | Module 27 | Licensed Materials

PURPOSE: Build skills in recognising early warning signs of burnout and workplace mental health problems in colleagues, and practise having supportive conversations.

INTRODUCE: "The earlier burnout is caught, the faster recovery is. This activity builds the skill of noticing - in ourselves and in the people around us at work."

PART 1 - Warning Signs Brainstorm (5 minutes):
As a group, brainstorm all the signs that someone might be struggling with workplace mental health or burnout. Write them all on the board:
Prompts if needed: changes in behaviour, attendance patterns, quality of work, social withdrawal, irritability, tearfulness, physical symptoms, comments they make.

PART 2 - Scenario Discussion in Pairs (10 minutes):
Read this scenario: "Jamie has been your colleague for three years. Recently they have been arriving late, leaving early, and making mistakes they would never normally make. In meetings they are quiet where they used to be engaged. They snapped at a client last week - completely out of character. When you ask how they are, they say 'fine, just tired'."

In pairs, discuss:
1. What signs are present? What might be going on?
2. What would you say to Jamie? Draft the opening line of a conversation.
3. What wouldn't you say - and why?

PART 3 - Debrief (5 minutes):
Share opening lines from the pairs. Key message: The most powerful thing you can do is notice and name it with care. "I've noticed you seem a bit different lately - are you okay?" can be the most important sentence someone hears all year.

TUTOR NOTE: Some participants will recognise themselves in Jamie. This is valuable and normal - create space for that recognition without forcing disclosure.`,
    discussionPrompts: [
      'Is resilience training in toxic workplaces ethical - and what does it tell us about how organisations frame responsibility for workplace mental health?',
      'What stops most people from disclosing mental health struggles at work, and what would actually need to change for that to feel safe?',
      'What is the difference between a mentally healthy workplace and a workplace that just looks like one - and how would you tell them apart?',
      'If you were designing a new organisation from scratch with mental health as a founding principle, what would it look like?',
    ],
    resources: [
      { label: 'Mind - Workplace Wellbeing Programme', url: 'https://www.mind.org.uk/workplace/mental-health-at-work/' },
      { label: 'Acas - mental health at work guidance (0300 123 1100)', url: 'https://www.acas.org.uk/supporting-mental-health-at-work' },
      { label: 'NICE NG212 - mental health at work', url: 'https://www.nice.org.uk/guidance/ng212' },
      { label: 'NHS Talking Therapies self-referral', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/' },
      { label: 'Health & Safety Executive - work-related stress', url: 'https://www.hse.gov.uk/stress/' },
    ],
    videos: [
      { label: 'What is burnout? - WHO definition explained (YouTube)', url: 'https://www.youtube.com/results?search_query=burnout+WHO+definition+occupational+mental+health+explained' },
      { label: 'Psychological safety at work - Google Project Aristotle (YouTube)', url: 'https://www.youtube.com/results?search_query=psychological+safety+workplace+google+project+aristotle' },
      { label: 'Workplace mental health - Mind UK (YouTube)', url: 'https://www.youtube.com/results?search_query=mental+health+at+work+mind+uk+employer' },
    ],
    powerPoint: `MODULE 27 POWERPOINT SPECIFICATION - Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '17 million days' as massive orange hero statistic; '56 billion cost' as secondary stat; MMH branding
Slide 2: Three burnout pillars (exhaustion / cynicism / reduced efficacy) as orange-bordered columns
Slide 3: Six toxic work factors in red-edged warning boxes on dark background
Slide 4: Two-column employer/employee action list in orange and white
Slide 5: Acas logo, Mind logo, NHS logo with key numbers; workers' rights summary
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Burnout and workplace mental health discussions can surface acute distress, particularly if someone is currently in a difficult work situation. Be attentive to signs of serious anxiety or depression during this session.

FACILITATION: The Jamie scenario usually generates rich discussion. Some participants will identify strongly. Create space for personal reflection without forcing disclosure. The 'resilience training in toxic workplaces' slide can prompt strong reactions - this is productive.

LANGUAGE: Consistently locate responsibility at the systemic/organisational level, not solely with the individual. Avoid framing burnout as weakness or poor coping.

LEGAL NOTE: Signpost participants to Acas and the Equality Act for workplace rights - but note that this session is educational and does not constitute employment law advice.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 28
  // ─────────────────────────────────────────────────────────────
  {
    id: 28,
    topic: 'Social Isolation & Loneliness',
    summary: 'The mental health consequences of loneliness and social isolation - who is affected, why it is so damaging, and evidence-based approaches to rebuilding connection.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Loneliness: A Public Health Crisis',
        bullets: [
          'UK: 3.83 million people say they are always or often lonely (Campaign to End Loneliness / ONS)',
          'Loneliness is as damaging to health as smoking 15 cigarettes a day (Holt-Lunstad meta-analysis)',
          'Loneliness increases risk of depression by 2x, anxiety by 1.7x, and early death by 26% (Campaign to End Loneliness)',
          'COVID-19 significantly worsened loneliness across all age groups; young adults and older adults most affected',
          "BRANDED SLIDE: '15 cigarettes a day' comparison as striking hero statistic in orange on black",
        ],
      },
      {
        title: 'Slide 2 — Loneliness vs Social Isolation',
        bullets: [
          'Social isolation: objective lack of social contact or social network',
          'Loneliness: subjective distressing experience of inadequate or unsatisfying social connection',
          'You can be isolated without feeling lonely; you can feel profoundly lonely in a crowd or marriage',
          'Different causes require different interventions - addressing isolation =/= addressing loneliness',
          "BRANDED SLIDE: Venn diagram - 'Social Isolation' (objective) and 'Loneliness' (subjective) with overlap zone",
        ],
      },
      {
        title: 'Slide 3 — Who is Most Affected',
        bullets: [
          'Older adults: 1.4 million over-65s in UK chronically lonely; widowhood, health decline, loss of driving',
          'Young adults (16-24): counterintuitively, now the loneliest age group in the UK (ONS 2021)',
          'New parents; people with mental health problems; people with long-term conditions; carers',
          'Rural populations, ethnic minority communities, LGBTQIA+ people; people recently bereaved or divorced',
          'BRANDED SLIDE: silhouette icons of different demographic groups with statistics',
        ],
      },
      {
        title: 'Slide 4 — Evidence-Based Interventions',
        bullets: [
          'Social prescribing: GPs link patients to community activities, arts, volunteering - strong evidence for loneliness',
          'Group activities with shared purpose (befriending, walking groups, community gardens) more effective than one-to-one support',
          "CBT for loneliness: addresses negative social cognitions ('nobody wants me here') that maintain isolation",
          'Technology: video calls reduce loneliness in older adults, but not a substitute for in-person connection',
          'BRANDED SLIDE: social prescribing pathway diagram - GP to link worker to community activity',
        ],
      },
      {
        title: 'Slide 5 — UK Resources & Community',
        bullets: [
          'Campaign to End Loneliness: evidence-based resources and local connection map',
          'Silver Line: 0800 4 70 80 90 - free confidential helpline for older people (24/7)',
          'Age UK: befriending services and community groups nationwide',
          'NHS Social Prescribing: ask your GP to refer to a link worker',
          'BRANDED SLIDE: local Melksham community assets + national resources with phone numbers',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - Loneliness as a Public Health Crisis
"In 2018, the UK appointed the world's first Minister for Loneliness. That fact alone tells you something significant: loneliness has become a public health problem of sufficient scale that it requires a government ministerial portfolio. Nearly four million people in the UK say they are always or often lonely. And the consequences are not merely emotional - they are physiological. Research by Julianne Holt-Lunstad found that loneliness is as damaging to physical health as smoking 15 cigarettes a day. It increases the risk of early death by 26%.

This is not weakness. This is not failing to try hard enough. This is a fundamental human need - for connection, belonging, and being known by others - that is going unmet for millions of people."

SLIDE 2 - Loneliness vs Isolation
"It's important to distinguish between social isolation and loneliness, because they are different problems requiring different responses. Social isolation is objective: you don't have much social contact. Loneliness is subjective: it's the painful experience of feeling your social connections are insufficient or unsatisfying.

You can be socially isolated and not feel lonely - some people genuinely thrive in solitude. And - and this is important - you can feel profoundly lonely in a room full of people, in a marriage, at a party. What matters is the quality and meaning of connection, not the quantity of contact. Addressing isolation by forcing people into social situations doesn't reliably address loneliness - and can sometimes make it worse."

SLIDE 3 - Who is Most Affected
"When most people imagine a lonely person, they picture an elderly person living alone. And it's true that 1.4 million over-65s in the UK are chronically lonely - widowhood, declining health, loss of mobility and driving all contribute to this.

But there's a finding that surprises most people: in the UK, the loneliest age group is now 16-24 year olds. Young adults, despite being the most digitally connected generation in history, report the highest rates of loneliness. This tells us something profound: digital connection and social media do not reliably meet the fundamental human need for belonging. Knowing someone's Instagram feed is not the same as being known."

SLIDE 4 - What Works
"Social prescribing is one of the most promising developments in addressing loneliness. Rather than prescribing medication, a GP refers a patient to a link worker who connects them to community activities - a walking group, a community garden, a befriending service. The evidence is strong: shared purposeful activity, particularly with a group that has something in common, is significantly more effective for loneliness than one-to-one clinical support.

CBT for loneliness addresses the cognitive dimension - the negative social beliefs that maintain isolation ('I'm not interesting', 'nobody wants me here', 'I'll only embarrass myself'). These beliefs become self-fulfilling prophecies when left unchallenged."

SLIDE 5 - Resources
"The Silver Line is a free, confidential helpline for older people - 0800 4 70 80 90, available 24 hours a day. Age UK has befriending services that match volunteers with lonely older adults. NHS Social Prescribing is available through any GP surgery - ask to be referred to a link worker. And locally in Wiltshire, there are a range of community activities and befriending services - encourage participants to find out what's available in their area."`,
    activity: `ACTIVITY - The Quality of Connection (20 minutes)
Melksham Mental Health | Module 28 | Licensed Materials

PURPOSE: Explore the difference between quantity of social contact and quality of connection; build awareness of our own social needs and the signs of loneliness in others.

INTRODUCE: "Loneliness is about the quality of our connections, not the quantity. This activity helps us get specific about what genuine connection actually feels, looks and sounds like - and notice when it's missing."

PART 1 - Individual Reflection (5 minutes, silent):
Give participants a minute to reflect quietly on these questions (do not share yet):
- Think of a moment when you felt genuinely connected to someone. What was happening? What made it feel connecting?
- Now think of a time you felt lonely - even surrounded by people. What was missing?

PART 2 - Small Groups: Connection vs Presence (8 minutes):
In groups of 3-4, discuss:
What is the difference between being present with someone and feeling genuinely connected to them? What creates genuine connection?
Build a list: what are the ingredients of a truly connecting interaction?

PART 3 - Debrief: Designing for Connection (7 minutes):
Share the lists. Tutor facilitates reflection:
- If these are the ingredients of connection, what stops them happening in everyday life?
- What environments, cultures, or habits create them - and what destroys them?
- What one thing could you do this week to offer genuine connection to someone who might need it?

TUTOR NOTE: Some participants may find this activity surfaces their own loneliness. Create safety for that. The exercise is not about fixing people - it is about building empathy and awareness.`,
    discussionPrompts: [
      'Why are young adults - the most digitally connected generation in history - also among the loneliest, and what does this tell us about the limits of social media?',
      'What is the difference between solitude (chosen and restorative) and loneliness (unchosen and painful), and why does the distinction matter?',
      'What responsibility do communities, employers, and the state have in addressing loneliness - and what are the limits of individual action?',
      'How do we build genuine connection in a culture that is moving faster, more online, and more privatised - and what local examples give you hope?',
    ],
    resources: [
      { label: 'Campaign to End Loneliness - evidence and resources', url: 'https://www.campaigntoendloneliness.org' },
      { label: 'Silver Line helpline for older people: 0800 4 70 80 90 (24/7)', url: 'https://www.thesilverline.org.uk' },
      { label: 'Age UK - befriending and community activities', url: 'https://www.ageuk.org.uk/services/befriending-services/' },
      { label: 'Mind - loneliness and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/' },
      { label: 'NHS Social Prescribing - find a link worker', url: 'https://www.england.nhs.uk/personalisedcare/social-prescribing/' },
    ],
    videos: [
      { label: 'The loneliness epidemic - BBC (YouTube)', url: 'https://www.youtube.com/results?search_query=loneliness+epidemic+UK+mental+health+BBC' },
      { label: 'Social prescribing explained - NHS England (YouTube)', url: 'https://www.youtube.com/results?search_query=social+prescribing+NHS+England+link+worker+explained' },
      { label: 'Why loneliness is a public health crisis - Vivek Murthy (YouTube)', url: 'https://www.youtube.com/results?search_query=Vivek+Murthy+loneliness+public+health+crisis' },
    ],
    powerPoint: `MODULE 28 POWERPOINT SPECIFICATION - Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '15 cigarettes a day' striking comparison stat in large orange text; '3.83 million lonely' as secondary stat
Slide 2: Venn diagram - Social Isolation (objective) and Loneliness (subjective) in orange circles on black
Slide 3: Demographic silhouettes with statistics - varied groups across age/life stage
Slide 4: Social prescribing pathway - GP to link worker to community - simple clear diagram in orange
Slide 5: Silver Line 0800 4 70 80 90 prominent; local Melksham assets listed; QR code
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Loneliness is deeply personal and can be acute. Some participants may disclose significant isolation. Be ready to signpost to Silver Line (0800 4 70 80 90) or Samaritans (116 123) for anyone in acute distress.

FACILITATION: The individual reflection part of the activity requires genuine stillness - allow the silence. Some participants will find this module unexpectedly emotional; this is appropriate and valuable. Do not pathologise it.

YOUNG ADULTS: The finding that 16-24 year olds are the loneliest group often generates surprise and lively discussion - use this productively. Avoid framing social media as simply bad; explore the distinction between connection and contact.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 29
  // ─────────────────────────────────────────────────────────────
  {
    id: 29,
    topic: 'Financial Stress & Mental Health',
    summary: 'How money problems cause and maintain mental ill-health, and how mental ill-health causes money problems - breaking the debt-depression cycle with evidence-based financial and psychological support.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Money & Mental Health: The Scale',
        bullets: [
          '46% of people in problem debt also have a mental health problem (Money and Mental Health Policy Institute)',
          'People with mental health problems are 3.5x more likely to be in problem debt',
          'UK household debt: average unsecured debt per UK adult is over 4,000 pounds; 9 million people in serious financial difficulty',
          'Financial stress is one of the most common triggers for mental health crisis presentations in A&E',
          "BRANDED SLIDE: '46%' as large orange statistic; 'Money & Mental Health' in white on black",
        ],
      },
      {
        title: 'Slide 2 — How Financial Stress Harms Mental Health',
        bullets: [
          'Chronic financial stress activates the HPA axis (stress hormones) continuously - same pathway as trauma',
          'Scarcity mindset: financial stress consumes cognitive bandwidth, reducing decision-making capacity',
          'Shame and stigma: debt is still heavily stigmatised - people hide it, which prevents help-seeking',
          'Sleep disruption, anxiety, hypervigilance, avoidance (not opening letters) are core responses to debt',
          "BRANDED SLIDE: 'Scarcity Mindset' diagram - cognitive bandwidth drain illustrated with orange",
        ],
      },
      {
        title: 'Slide 3 — How Mental Illness Causes Financial Problems',
        bullets: [
          'Depression reduces work capacity, causing income loss and missed bills',
          'Mania in bipolar disorder: impulsive spending during manic episodes can destroy financial stability',
          'ADHD: impulsivity and executive function difficulties make financial management genuinely harder',
          'Avoidance: anxiety drives people to stop opening letters, checking accounts, engaging with creditors',
          'BRANDED SLIDE: bidirectional arrows diagram - mental illness to financial problems to mental illness (vicious cycle)',
        ],
      },
      {
        title: 'Slide 4 — Breaking the Cycle',
        bullets: [
          'Integrated support: debt advice and mental health support delivered together is most effective',
          'StepChange, Citizens Advice and Money Helper offer free confidential debt advice',
          "Mental health 'breathing space': Debt Respite Scheme gives 60 days protection from creditor action for people with mental health crisis",
          'Benefits: many people with mental health problems are not claiming entitlements (PIP, ESA, Universal Credit) - welfare rights advice is key',
          "BRANDED SLIDE: 'Breathing Space' scheme headline with key steps; StepChange and Citizens Advice logos",
        ],
      },
      {
        title: 'Slide 5 — UK Resources',
        bullets: [
          'StepChange Debt Charity: free debt advice - 0800 138 1111',
          'Citizens Advice: free advice on debt, benefits, rights - 0800 144 8848',
          'Money Helper (MoneyHelper.org.uk): free government-backed financial guidance',
          'Money and Mental Health Policy Institute: research and policy advocacy',
          'BRANDED SLIDE: four key resources with phone numbers prominently displayed in orange on black',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Scale
"Money and mental health are profoundly linked - and the relationship runs in both directions. Forty-six percent of people in problem debt also have a mental health problem. That is not a coincidence - that is a systematic relationship between two of the most stigmatised and difficult experiences in contemporary British life.

Nine million people in the UK are in serious financial difficulty. Average unsecured debt per adult is over four thousand pounds. And financial stress is one of the most common triggers for crisis presentations in emergency departments - not because A&E can solve debt, but because financial distress pushes people to breaking point."

SLIDE 2 - How Financial Stress Harms Mental Health
"Chronic financial stress is physiologically similar to chronic trauma. It activates the HPA axis - the cortisol stress response - continuously. Living with debt means never being fully calm. Waking up at 3am calculating whether you can make rent is not a psychological failing; it is what a human nervous system does when it is under sustained threat.

The work of Sendhil Mullainathan and Eldar Shafir on scarcity is compelling: financial stress consumes cognitive bandwidth. People in financial difficulty have measurably less mental capacity for everything else - decision-making, planning, relationships, parenting. This is not character - it is cognitive architecture. And the shame that surrounds debt silences people and prevents them from getting help that exists and is often free."

SLIDE 3 - How Mental Illness Causes Financial Problems
"The other direction matters just as much. Depression makes working full-time impossible for many people - income drops, bills pile up. A manic episode in bipolar disorder can result in thousands of pounds of impulsive spending in a matter of days. ADHD makes financial management genuinely neurologically harder - impulsivity, difficulty with forward planning, and time blindness all create vulnerability to debt.

Anxiety drives avoidance - and avoidance of debt letters, bank statements, and creditor calls is one of the most damaging financial behaviours there is. It feels like it reduces anxiety in the moment; it makes the situation catastrophically worse over time. Understanding that avoidance is anxiety's mechanism - not a character flaw - is essential for anyone supporting someone in debt."

SLIDE 4 - Breaking the Cycle
"The most effective interventions integrate debt advice and mental health support. When someone sitting with Citizens Advice has both their debt plan and a mental health referral on the table at the same time, outcomes are substantially better than either service working in isolation.

The Mental Health Breathing Space scheme - created in 2021 - is genuinely transformative for people in crisis. It gives up to 60 days of protection from creditor action, including enforcement action, while someone receives mental health treatment. If you know someone in mental health crisis who is also in debt, this scheme could be the most important thing you tell them about today."

SLIDE 5 - Resources
"StepChange Debt Charity provides free, confidential debt advice - 0800 138 1111. Citizens Advice covers debt, benefits, employment rights and much more - 0800 144 8848. MoneyHelper is a free government-backed service combining money guidance with mental health awareness. And the Money and Mental Health Policy Institute conducts brilliant research and advocates for better-integrated services."`,
    activity: `ACTIVITY - The Debt Spiral (20 minutes)
Melksham Mental Health | Module 29 | Licensed Materials

PURPOSE: Build understanding of how debt and mental health interact in a self-reinforcing spiral; practise compassionate, non-judgemental responses to financial disclosure.

INTRODUCE: "Debt is one of the last remaining taboos. Most people would find it easier to tell someone they have depression than to tell them they are in debt. This activity explores that stigma and its consequences."

PART 1 - The Spiral Mapping (8 minutes):
As a group, build a 'debt spiral' on the board. Start with: 'Sarah loses her job due to depression.'
Add consequences and reactions, building the spiral step by step. Participants suggest what happens next:
- Bills not paid -> letters arrive -> anxiety rises -> letters go unopened -> late fees added -> more debt
- Shame increases -> withdraws from friends -> loneliness deepens -> depression worsens -> less able to work
Keep going until the group sees the full spiral. How did we get here from a single starting point?

PART 2 - The Breaking Point: Supportive Response (7 minutes):
In pairs: "A close friend has just told you they are in serious debt and have been hiding it for two years. They are ashamed and frightened."
Draft: What is the first thing you would say? What would you NOT say? What practical help could you offer?

PART 3 - Debrief (5 minutes):
Key messages:
- Non-judgement and compassion are the most important first responses
- Practical signposting (StepChange, Citizens Advice) is enormously helpful
- Never shame - it makes everything worse
- The Breathing Space scheme may be the most important thing someone hears

TUTOR NOTE: Some participants may have personal experience of debt. Be attentive and create safety without forcing disclosure.`,
    discussionPrompts: [
      'Why is debt still so heavily stigmatised in the UK, and how does that stigma make the mental health consequences worse?',
      'Is austerity and the welfare system a mental health issue - and if so, what responsibilities does that create for mental health professionals and advocates?',
      "What would a truly integrated financial and mental health support service look like - and why don't we have one yet?",
      'What practical things could you do to support someone you know who is struggling financially without making them feel judged or inadequate?',
    ],
    resources: [
      { label: 'StepChange Debt Charity - free debt advice: 0800 138 1111', url: 'https://www.stepchange.org' },
      { label: 'Citizens Advice - debt, benefits, rights: 0800 144 8848', url: 'https://www.citizensadvice.org.uk' },
      { label: 'MoneyHelper - free financial guidance', url: 'https://www.moneyhelper.org.uk' },
      { label: 'Money and Mental Health Policy Institute', url: 'https://www.moneyandmentalhealth.org' },
      { label: 'Mental Health Breathing Space (Debt Respite) Scheme - GOV.UK', url: 'https://www.gov.uk/guidance/debt-respite-breathing-space-scheme-creditors-and-mental-health-crisis-moratorium' },
    ],
    videos: [
      { label: 'Money and mental health - the link explained (YouTube)', url: 'https://www.youtube.com/results?search_query=money+mental+health+debt+anxiety+depression+UK' },
      { label: 'Mental Health Breathing Space scheme explained (YouTube)', url: 'https://www.youtube.com/results?search_query=mental+health+breathing+space+debt+respite+scheme+UK+explained' },
      { label: 'Scarcity mindset and poverty - Sendhil Mullainathan (YouTube)', url: 'https://www.youtube.com/results?search_query=scarcity+mindset+poverty+cognitive+bandwidth+Mullainathan' },
    ],
    powerPoint: `MODULE 29 POWERPOINT SPECIFICATION - Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '46%' as massive orange statistic; 'Money & Mental Health' header in white on black
Slide 2: Scarcity mindset diagram - cognitive bandwidth bar depleted by financial stress
Slide 3: Bidirectional vicious cycle arrows - mental illness to debt to mental illness
Slide 4: Mental Health Breathing Space scheme - 60 days, key steps, prominent orange callout box
Slide 5: Four resources with phone numbers in large orange text on black
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Financial distress is closely linked to suicidal ideation - debt is a major risk factor. Be alert to signs of acute distress during this module. Have Samaritans (116 123) and local crisis line numbers visible and share them proactively.

FACILITATION: The spiral-mapping activity can feel unexpectedly confronting. Give it time - the moment when participants see how a single job loss cascades into a full mental health crisis is a powerful learning moment.

CONFIDENTIALITY: If participants disclose current financial crisis, signpost immediately to StepChange (0800 138 1111) and the Breathing Space scheme. Do not offer financial advice yourself.

BENEFITS: Note that many people with mental health problems are not claiming benefits they are entitled to. Signpost to Citizens Advice for welfare rights advice.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 30
  // ─────────────────────────────────────────────────────────────
  {
    id: 30,
    topic: 'Relationships & Attachment',
    summary: 'Attachment theory, healthy relationship skills, codependency, relational trauma, and how our earliest bonds shape our adult mental health and relationships throughout life.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Attachment: Wired for Connection',
        bullets: [
          "Bowlby's attachment theory: humans are biologically driven to form close bonds - this is not weakness, it is survival",
          'Four attachment styles: secure, anxious-preoccupied, dismissive-avoidant, fearful-avoidant (disorganised)',
          'Attachment style is largely formed in the first year of life through the responsiveness of primary caregivers',
          '~55% of adults have secure attachment; ~45% have insecure attachment styles (research consensus)',
          'BRANDED SLIDE: four attachment style descriptions in four quadrants - orange headers on black',
        ],
      },
      {
        title: 'Slide 2 — Attachment in Adult Relationships',
        bullets: [
          'Secure attachment: comfortable with intimacy and autonomy; tolerates conflict without catastrophising',
          'Anxious attachment: fear of abandonment; hypervigilance to relationship cues; protest behaviours',
          'Avoidant attachment: discomfort with intimacy; dismisses emotional needs; self-reliance as defence',
          'Disorganised attachment: trauma-linked; both drawn to and frightened by closeness; associated with BPD',
          'BRANDED SLIDE: adult relationship patterns for each style with real-world examples',
        ],
      },
      {
        title: 'Slide 3 — Codependency & Relational Patterns',
        bullets: [
          'Codependency: excessive emotional reliance on another person; losing self in a relationship',
          "Enabling: supporting behaviours (e.g. addiction, avoidance) that maintain the other person's problems",
          'Enmeshment: loss of individual identity within a relationship; difficulty knowing where you end and they begin',
          'Healthy interdependence vs codependency: two whole people choosing to be together vs two incomplete people needing to be',
          'BRANDED SLIDE: two circles for healthy interdependence (overlapping but separate) vs enmeshment (one circle)',
        ],
      },
      {
        title: 'Slide 4 — Relational Trauma & Healing',
        bullets: [
          'Relational trauma: harm caused by people who were supposed to provide safety - parents, partners, carers',
          'Effects: difficulty trusting, hypervigilance in relationships, self-blame, shame, emotional dysregulation',
          'Earned secure attachment: through safe relationships and therapy, insecure adults can develop secure attachment',
          'Evidence-based approaches: Emotionally Focused Therapy (EFT), Attachment-Based CBT, schema therapy',
          "BRANDED SLIDE: 'Earned Secure Attachment' as hopeful headline in orange - recovery is possible",
        ],
      },
      {
        title: 'Slide 5 — Relationship Support in the UK',
        bullets: [
          "Relate: UK's largest relationship counselling service - 0300 100 1234",
          'NHS Talking Therapies: includes couples therapy and individual therapy for relationship difficulties',
          'The Mix: relationship support for under-25s - 0808 808 4994',
          'Refuge and SafeLives: support for those experiencing domestic abuse in relationships',
          'BRANDED SLIDE: Relate logo, Refuge logo, The Mix logo with numbers in orange on black',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - Attachment: Wired for Connection
"John Bowlby's attachment theory is one of the most important and well-evidenced frameworks in psychology. His central insight was simple and profound: human beings are biologically wired for close emotional bonds. This is not weakness - it is how our species survives. Infants who form close attachments to responsive caregivers survive; those who do not are in danger. Our entire social and emotional architecture is built around this fundamental need.

The attachment style we develop in infancy - largely shaped by how consistently and sensitively our primary caregivers responded to our needs - creates an internal working model: a set of beliefs and expectations about relationships that we carry into every relationship for the rest of our lives. About 55% of adults have secure attachment. The remaining 45% have insecure styles that can create recurring difficulties in relationships - not because of moral failing, but because of early experience."

SLIDE 2 - Attachment in Adult Relationships
"Each attachment style shows up distinctively in adult relationships. Secure attachment: 'I can be close to you without losing myself. I can tolerate disagreement without catastrophising. I trust that you will come back.'

Anxious or preoccupied attachment: 'I need constant reassurance that you love me. When you're quiet, I assume it's my fault. I'm hypervigilant to any sign you might leave.' This pattern often creates the dynamic it most fears - exhausting partners and pushing them away.

Avoidant attachment: 'I don't need anyone. I prefer to handle things myself. Emotional intimacy feels uncomfortable and threatening.' Often the result of caregivers who consistently dismissed or minimised emotional needs.

Disorganised attachment is associated with early trauma - the caregiver was simultaneously the source of danger and comfort. Adults with this pattern often want and fear closeness simultaneously - it is associated with borderline personality disorder and complex PTSD."

SLIDE 3 - Codependency
"Codependency describes a relationship pattern where someone's sense of identity, wellbeing and self-worth becomes excessively tied to another person - usually a partner, family member, or friend who has their own struggles. The codependent person organises their life around managing, fixing or enabling the other person.

The distinction that matters most: healthy interdependence looks like two whole, separate people choosing to be in a relationship together. Codependency looks like two people who feel they cannot function independently - who need the relationship to feel complete, valid, or safe. Codependency often develops in families with addiction, mental illness, or abuse - where children learned that their value came from managing other people's emotions."

SLIDE 4 - Relational Trauma and Healing
"The most damaging trauma is often relational trauma - harm inflicted by the people who were supposed to provide safety. When the caregiver is both the source of danger and the only available source of comfort, the child's attachment system cannot resolve the conflict. The result is disorganised attachment - and often, a lifetime of difficulty trusting anyone who gets close.

The hopeful message - and this is important - is earned secure attachment. Adults who had insecure or traumatic early attachment can develop secure attachment through safe, responsive relationships and through therapy. The brain retains plasticity. Healing is possible. Emotionally Focused Therapy, schema therapy, and attachment-based CBT all have strong evidence for helping adults develop more secure relational patterns."

SLIDE 5 - Resources
"Relate is the UK's leading relationship counselling service - 0300 100 1234. NHS Talking Therapies includes both individual therapy for relationship difficulties and couples counselling. The Mix provides relationship support for young people under 25. And for anyone in a relationship involving domestic abuse, Refuge and SafeLives provide specialist support."`,
    activity: `ACTIVITY - Mapping My Attachment (20 minutes)
Melksham Mental Health | Module 30 | Licensed Materials

PURPOSE: Build personal awareness of attachment patterns and how they show up in relationships; develop language for relational needs and responses.

INTRODUCE: "We all have an attachment style - a set of largely automatic patterns in how we relate to people who matter to us. This activity invites gentle self-exploration. Nothing you discover about yourself here is fixed - awareness is the beginning of change."

PART 1 - Attachment Style Self-Assessment (8 minutes, individual and private):
Give participants a simple attachment style description card for each of the four styles. Ask them to read all four and reflect privately:
Which description resonates most with how you tend to behave in close relationships?
- What reassures you?
- What triggers anxiety or withdrawal?
- What do you find hardest to ask for?
This is private - participants do not share unless they choose to.

PART 2 - Pairs: Relational Needs (7 minutes):
In pairs, without disclosing your attachment style, discuss:
In a healthy relationship, what do you most need? (Security? Space? Reassurance? Honesty? Predictability?)
What makes you feel safe in a relationship? What makes you feel unsafe?

PART 3 - Debrief (5 minutes):
Key messages:
- Knowing your attachment style is not a diagnosis - it is information
- All attachment styles developed as adaptations to our early environment; none is a character flaw
- Secure attachment is available to everyone, at any age, through safe relationships and/or therapy

TUTOR NOTE: Do not require anyone to share their attachment style. This is a private self-exploration tool. If participants ask 'which is best', the answer is: secure, but every style has its strengths and every person can move toward greater security.`,
    discussionPrompts: [
      'How much of your relationship patterns do you think come from your early experiences - and how much is changeable?',
      "What does 'healthy interdependence' look like in practice - and how does it differ from either codependency or emotional detachment?",
      'How can understanding attachment theory change the way we approach conflict in relationships?',
      'What would a relationship-literate society look like - and where should relationship education begin?',
    ],
    resources: [
      { label: 'Relate - relationship counselling: 0300 100 1234', url: 'https://www.relate.org.uk' },
      { label: 'Attachment theory explained - Psychology Today', url: 'https://www.psychologytoday.com/gb/basics/attachment' },
      { label: 'The Mix - relationships for under-25s: 0808 808 4994', url: 'https://www.themix.org.uk/sex-and-relationships' },
      { label: 'Refuge - domestic abuse support: 0808 2000 247', url: 'https://www.refuge.org.uk' },
      { label: 'NHS - relationship counselling and couples therapy', url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/relationship-counselling/' },
    ],
    videos: [
      { label: 'Attachment theory explained - TED talk (YouTube)', url: 'https://www.youtube.com/results?search_query=attachment+theory+explained+adult+relationships+TED' },
      { label: 'Secure vs insecure attachment - how it shows up in relationships (YouTube)', url: 'https://www.youtube.com/results?search_query=secure+insecure+attachment+adult+relationships+explained' },
      { label: 'What is earned secure attachment? (YouTube)', url: 'https://www.youtube.com/results?search_query=earned+secure+attachment+healing+insecure+attachment' },
    ],
    powerPoint: `MODULE 30 POWERPOINT SPECIFICATION - Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Four attachment style quadrants with descriptions - orange headers on black; Bowlby quote
Slide 2: Adult relationship patterns per attachment style - real-world speech bubbles
Slide 3: Two circles diagram - healthy interdependence (separate but overlapping) vs enmeshment (merged)
Slide 4: 'Earned Secure Attachment' in large orange text; hopeful recovery message central
Slide 5: Relate 0300 100 1234, Refuge 0808 2000 247, The Mix 0808 808 4994 in orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Discussions of relationships and attachment frequently surface disclosures of domestic abuse, childhood trauma, or relational trauma. Be attentive, apply standard protocols, and have Refuge (0808 2000 247) and NSPCC numbers ready.

FACILITATION: The attachment style self-assessment can be confronting. Emphasise throughout that no style is a character flaw - all are adaptive responses to early experience. Create safety for the private reflection component.

LANGUAGE: Avoid "dysfunctional" for attachment styles - prefer "insecure" or "anxious/avoidant". Emphasise that all styles are changeable with support.

DOMESTIC ABUSE: If the discussion turns to controlling or abusive relationships, do not attempt to manage this within the group - follow safeguarding protocols and signpost individually.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 31
  // ─────────────────────────────────────────────────────────────
  {
    id: 31,
    topic: 'Parenting Stress & Paternal Mental Health',
    summary: 'The mental health impact of parenting including paternal postnatal depression, parenting stress across the life course, and support available for fathers and co-parents.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Parenting and Mental Health: The Invisible Struggle',
        bullets: [
          '1 in 10 new fathers experience postnatal depression — the same rate as mothers (PANDAS Foundation)',
          'Paternal postnatal depression (PPND) is almost entirely absent from routine UK screening programmes',
          'Children with depressed parents are 2-3x more likely to develop mental health problems themselves',
          'Parenting stress is a significant risk factor for depression and anxiety across the whole life course',
          'BRANDED SLIDE: "Fathers get it too" in large orange text; 1-in-10 as hero statistic on black background',
        ],
      },
      {
        title: 'Slide 2 — How PPND Presents in Fathers',
        bullets: [
          'Classic PPND: low mood, withdrawal, inability to bond with baby, feeling irrelevant or excluded',
          'How it often presents in men: irritability, overworking, increased alcohol use, emotional numbing',
          'Risk factors: own history of depression, relationship difficulties, financial stress, sleep deprivation',
          'Screening gap: fathers are almost never asked about their mental health at postnatal appointments',
          'BRANDED SLIDE: two-column symptoms table — typical vs how it presents in men — orange/white on black',
        ],
      },
      {
        title: 'Slide 3 — Parenting Stress Across the Life Course',
        bullets: [
          'New parenthood: sleep deprivation, loss of identity and freedom, couple relationship strain',
          'Toddler years: relentlessness, isolation, the invisible weight of emotional labour',
          'Parenting teenagers: acute worry, conflict, fear for safety, loss of control',
          'Parenting children with additional needs: significantly elevated rates of depression and anxiety in parents',
          'BRANDED SLIDE: life-course timeline from birth to empty nest with orange stress markers at each stage',
        ],
      },
      {
        title: 'Slide 4 — What Works',
        bullets: [
          'Peer support groups for new dads: strongest evidence — normalises shared experience, breaks isolation',
          'Couple communication: relationship quality is the strongest predictor of parental mental health outcomes',
          'Practical support: equitable sharing of domestic labour, accepting help when offered',
          'Professional support: PANDAS helpline, Talking Therapies, GP assessment — early intervention is key',
          'BRANDED SLIDE: "Ask fathers too" call to action in orange; PANDAS 0808 1961 776 prominent',
        ],
      },
      {
        title: 'Slide 5 — UK Support for Parents',
        bullets: [
          'PANDAS Foundation: PND support for mothers AND fathers — 0808 1961 776 (Mon-Sun 9am-8pm, free)',
          'Dad Matters: peer support for new and expectant fathers with mental health needs',
          'Family Lives: general parenting support helpline — 0808 800 2222',
          'Home-Start: volunteer support for families with under-5s who are struggling',
          'BRANDED SLIDE: four resource cards with logos and phone numbers; PANDAS most prominent',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - Parenting and Mental Health
"We talk a great deal about postnatal depression in mothers — and rightly so. But there is a significant group whose mental health is almost entirely invisible in the system: fathers and co-parents. One in ten new fathers experiences postnatal depression. The same rate as mothers. And yet most screening, most services, and most awareness campaigns are targeted exclusively at women.

The consequences of this blind spot are serious. Paternal depression affects the quality of parenting, the couple relationship, and child development itself. Children with depressed parents have two to three times the risk of developing mental health problems. Paternal mental health is a family mental health issue."

SLIDE 2 - How PPND Presents
"Paternal postnatal depression often looks very different from the classic picture. Rather than tearfulness and withdrawal, fathers more commonly present with irritability, overworking, increased alcohol use, and an emotional numbness that gets dismissed as not being engaged.

The screening gap is stark. Mothers are routinely assessed with the Edinburgh Postnatal Depression Scale. Fathers are almost never asked how they are. A simple question — 'And how are you finding it?' — could open the door to support that changes outcomes for the whole family."

SLIDE 3 - Life Course
"Parenting stress does not end when the postnatal period ends. It shifts. The relentlessness of toddlerhood — loss of sleep, adult identity, couple intimacy and freedom — is a significant mental health challenge. The adolescent years bring acute worry, conflict, and helplessness. And then the empty nest — frequently overlooked as a mental health transition. When the last child leaves, many parents experience profound loss of purpose that can trigger depression."

SLIDE 4 - What Works
"The evidence is strongest for peer support. Groups of new fathers normalise the experience and break isolation in ways individual therapy often cannot. Knowing other dads feel the same is enormously powerful. Couple communication is the single strongest predictor of parental mental health outcomes. For anyone at clinical threshold, NHS Talking Therapies and GP assessment are the first step."

SLIDE 5 - Resources
"PANDAS Foundation — 0808 1961 776 — free, seven days a week, 9am to 8pm. Dad Matters provides peer support for new fathers. Family Lives has a general parenting line on 0808 800 2222. Home-Start provides volunteer home visiting for families with under-5s who are struggling."`,
    activity: `ACTIVITY - The Cost of Keeping It Together (20 minutes)
Melksham Mental Health | Module 31 | Licensed Materials

PURPOSE: Explore the hidden costs of parenting stress and the cultural pressures that prevent parents — especially fathers — from seeking help.

INTRODUCE: "There is enormous pressure on parents to appear to be coping. 'How are you doing?' is rarely answered honestly. This activity explores what gets hidden and why."

PART 1 - Role Cards (3 minutes, individual):
Participants receive one of four role cards and read privately:
Card A: New father, 6 weeks after birth, not sleeping, feeling irrelevant, resentful, ashamed of these feelings
Card B: Parent of a teenager with an eating disorder — exhausted, isolated, protecting privacy
Card C: Single parent, working full-time, worried about money, no family support, 'managing'
Card D: Father whose last child left home two months ago — loss of purpose, not sure who he is

PART 2 - Two Answers (10 minutes in pairs):
Person A holds their role card. Person B asks: "How are you? How's everything at home?"
Person A answers twice:
1. What they would ACTUALLY say (surface answer)
2. What they WISH they could say (honest answer)
Then swap.

PART 3 - Debrief (7 minutes):
What made the honest answer hard? What would have made it safe?
Key message: The gap between what we say and what we feel is where mental illness grows.`,
    discussionPrompts: [
      'Why is paternal postnatal depression so under-recognised — and whose responsibility is it to change this?',
      'What cultural messages about fatherhood make it hardest for men to admit they are struggling?',
      'How does parental mental health affect child development — and what does this mean for early intervention?',
      'What would parent-responsive mental health services look like in practice?',
    ],
    resources: [
      { label: 'PANDAS Foundation — PND support: 0808 1961 776 (Mon-Sun 9am-8pm)', url: 'https://www.pandasfoundation.org.uk' },
      { label: 'Dad Matters — peer support for fathers', url: 'https://www.dadmatters.org.uk' },
      { label: 'Family Lives — parenting helpline: 0808 800 2222', url: 'https://www.familylives.org.uk' },
      { label: 'Home-Start — volunteer support for families', url: 'https://www.home-start.org.uk' },
      { label: 'NHS — postnatal depression overview', url: 'https://www.nhs.uk/mental-health/conditions/post-natal-depression/' },
    ],
    videos: [
      { label: 'Paternal postnatal depression — Dad Matters (YouTube)', url: 'https://www.youtube.com/results?search_query=paternal+postnatal+depression+fathers+PPND+UK' },
      { label: 'New dad mental health — PANDAS Foundation (YouTube)', url: 'https://www.youtube.com/results?search_query=new+dad+mental+health+PANDAS+foundation+perinatal' },
      { label: 'Parenting stress and mental health (YouTube)', url: 'https://www.youtube.com/results?search_query=parenting+stress+mental+health+invisible+struggle' },
    ],
    powerPoint: `MODULE 31 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: 'Fathers get it too' in large orange; 1-in-10 statistic on black
Slide 2: Two-column PPND table — typical vs male presentation — orange headers
Slide 3: Life-course timeline from birth to empty nest with orange markers
Slide 4: 'Ask fathers too' in orange; PANDAS 0808 1961 776 prominent
Slide 5: Four resource cards — PANDAS, Dad Matters, Family Lives, Home-Start
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Parenting discussions can surface acute distress. Have PANDAS (0808 1961 776) and Samaritans (116 123) visible.

FACILITATION: Parenting is both rewarding and genuinely hard — hold both truths. Role-play can surface unexpected emotion; create safety for this.

LANGUAGE: Use 'parent' and 'co-parent' as well as 'father' to include all family structures.

CROSS-REFERENCE: Module 32 covers maternal mental health. These modules work well together.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 32
  // ─────────────────────────────────────────────────────────────
  {
    id: 32,
    topic: 'Maternal Mental Health & Perinatal Disorders',
    summary: 'Postpartum depression, perinatal anxiety, postpartum psychosis and birth trauma — the full spectrum of maternal mental health, evidence-based treatments, and how to support affected women.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Full Spectrum of Perinatal Mental Health',
        bullets: [
          '1 in 5 women experience a perinatal mental health problem; only 50% receive any support (Maternal MH Alliance)',
          'Economic cost: untreated perinatal mental illness costs the UK £8.1 billion per birth cohort (Centre for MH)',
          'Conditions: perinatal depression, anxiety, tokophobia, birth trauma/PTSD, postpartum psychosis',
          'Perinatal = from conception to one year after birth — a period of profound biological and psychological change',
          'BRANDED SLIDE: perinatal timeline from conception to 12 months with conditions mapped across it in orange',
        ],
      },
      {
        title: 'Slide 2 — Postpartum Depression',
        bullets: [
          'Affects ~10-15% of new mothers; rates doubled between 2010 and 2021 (BMJ research)',
          'Distinct from baby blues (days 2-4, mild, brief) — PPD is persistent, debilitating, requires treatment',
          'Core features: inability to bond with baby, profound guilt and shame, intrusive thoughts',
          'NICE recommends Edinburgh Postnatal Depression Scale (EPDS) screening at 4-6 weeks and 3-4 months',
          'BRANDED SLIDE: PPD vs baby blues comparison table; EPDS reference; MMH branding',
        ],
      },
      {
        title: 'Slide 3 — Birth Trauma & PTSD',
        bullets: [
          '4-5% of women who give birth develop PTSD; up to 30% have significant PTSD symptoms (Birth Trauma Association)',
          'Birth trauma is subjective — complications, loss of control, feeling unheard, emergency procedures',
          'Symptoms: flashbacks, nightmares, avoidance of healthcare settings, hypervigilance',
          '"But the baby is fine" is one of the most harmful dismissals in perinatal care',
          'BRANDED SLIDE: "But the baby is fine" challenged; birth trauma reality in white/orange on black',
        ],
      },
      {
        title: 'Slide 4 — Postpartum Psychosis',
        bullets: [
          'Rare but serious: 1-2 in 1,000 new mothers — almost always requires hospital admission',
          'Rapid onset within 2 weeks of birth: hallucinations, delusions, confusion, mania',
          'Medical emergency: if suspected, call 999 or go to A&E immediately — highly treatable',
          'High risk in women with bipolar disorder or personal/family history of postpartum psychosis',
          'BRANDED SLIDE: "CALL 999 — Postpartum Psychosis is a Medical Emergency" in bold orange — unmissable',
        ],
      },
      {
        title: 'Slide 5 — Treatment & UK Support',
        bullets: [
          'First-line: CBT, interpersonal therapy, peer support; many SSRIs safe during breastfeeding',
          'Specialist Perinatal Mental Health Teams: community-based integrated care in most of England',
          'Mother and Baby Units (MBUs): inpatient with baby — 19 in England; life-changing care',
          'PANDAS: 0808 1961 776; APNI: 0207 386 0868 — specialist helplines',
          'BRANDED SLIDE: MBU map of England; PANDAS and APNI numbers in large orange',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Full Spectrum
"The perinatal period — from conception through to a year after birth — is one of the highest-risk periods for mental health problems across a woman's entire life. One in five women experiences a perinatal mental health problem. Only around half of those women receive any support. The economic cost is estimated at eight-point-one billion pounds per birth cohort. This is a major, under-addressed public health challenge."

SLIDE 2 - Postpartum Depression
"Postpartum depression is distinct from the baby blues. The baby blues affect most new mothers in the first few days — mild weepiness resolving by around day five. PPD is persistent, often beginning within weeks and continuing for months.

The inability to bond with the baby — the absence of the love you expected to feel — is one of the most shame-laden experiences in perinatal mental health. Intrusive thoughts about harm to the baby are present in most cases of PPD and are ego-dystonic: distressing precisely because they are contrary to everything the person wants. They are a symptom, not a risk factor for action."

SLIDE 3 - Birth Trauma
"Birth trauma is defined by the subjective experience — not the medical outcome. A birth can go obstetric textbook and still be profoundly traumatic if the woman felt out of control, unheard, or violated. Four to five percent develop full PTSD; up to 30% have significant symptoms. 'But the baby is fine' is one of the most harmful responses — it invalidates the experience and prevents help-seeking."

SLIDE 4 - Postpartum Psychosis
"Postpartum psychosis is rare but a psychiatric emergency. It develops rapidly — within the first two weeks — with hallucinations, delusions, and profound disorientation. If you suspect it, call 999. This is treatable; with prompt response, most women make a full recovery. The danger is delay."

SLIDE 5 - Resources
"Specialist Perinatal Mental Health Teams exist in most of England. Mother and Baby Units keep mothers and babies together during inpatient care. PANDAS on 0808 1961 776 and APNI on 0207 386 0868 provide specialist helpline support."`,
    activity: `ACTIVITY - Recognition Practice (20 minutes)
Melksham Mental Health | Module 32 | Licensed Materials

PURPOSE: Build skills in recognising perinatal mental health conditions and responding compassionately.

INTRODUCE: "Perinatal mental health is still surrounded by shame. New mothers are often expected to be happy above all else. This activity builds recognition and response skills."

PART 1 - What Is This? (5 minutes):
Present 6 brief case descriptions. Participants identify the condition:
1. Crying on day 3, resolves by day 6 — [Baby blues]
2. Five weeks post-birth, no bond with baby, intrusive thoughts, guilt — [PPD]
3. Flashbacks of emergency C-section, avoids midwife, nightmares — [Birth trauma/PTSD]
4. Two weeks post-birth, seeing people, believing baby replaced — [Postpartum psychosis — CALL 999]
5. Anxious about baby's breathing, checking constantly, cannot sleep — [Perinatal anxiety]
6. Tearful, overwhelmed, significantly improved by day 5 — [Baby blues]

PART 2 - Supportive Response (10 minutes in pairs):
"A friend has told you she feels nothing for her baby and is scared she is a terrible mother."
Draft: what would you say? What would you NOT say? What practical help could you offer?
Key messages: don't minimise; don't say 'enjoy every moment'; DO mention PANDAS; DO offer practical help.

PART 3 - Debrief (5 minutes):
Why do so many women suffer in silence? What cultural changes would help most?`,
    discussionPrompts: [
      'Why does the cultural narrative that new mothers should feel only joy make perinatal mental health worse — and whose responsibility is it to challenge this?',
      '"But the baby is fine" — why is this harmful, and what should we say instead?',
      'What barriers prevent women from disclosing perinatal mental health struggles to healthcare professionals?',
      'How would you support a friend or family member you suspected was experiencing postpartum depression?',
    ],
    resources: [
      { label: 'PANDAS Foundation — perinatal mental health: 0808 1961 776', url: 'https://www.pandasfoundation.org.uk' },
      { label: 'APNI — postnatal illness support: 0207 386 0868', url: 'https://apni.org' },
      { label: 'Birth Trauma Association', url: 'https://www.birthtraumaassociation.org.uk' },
      { label: 'Maternal Mental Health Alliance', url: 'https://maternalmentalhealthalliance.org' },
      { label: 'NHS — postpartum psychosis (emergency information)', url: 'https://www.nhs.uk/mental-health/conditions/post-partum-psychosis/' },
    ],
    videos: [
      { label: 'Postpartum depression explained — NHS (YouTube)', url: 'https://www.youtube.com/results?search_query=postpartum+depression+explained+NHS+postnatal' },
      { label: 'Birth trauma and PTSD (YouTube)', url: 'https://www.youtube.com/results?search_query=birth+trauma+PTSD+Birth+Trauma+Association+UK' },
      { label: 'Postpartum psychosis — what to look for (YouTube)', url: 'https://www.youtube.com/results?search_query=postpartum+psychosis+signs+emergency+UK' },
    ],
    powerPoint: `MODULE 32 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Perinatal timeline from conception to 12 months with conditions in orange
Slide 2: PPD vs baby blues comparison table; EPDS reference
Slide 3: 'But the baby is fine' challenged — birth trauma reality in white/orange on black
Slide 4: 'CALL 999 — Postpartum Psychosis is a Medical Emergency' in large bold orange
Slide 5: MBU map of England; PANDAS 0808 1961 776, APNI 0207 386 0868 in orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Postpartum psychosis is a medical emergency. If anyone discloses current acute symptoms, escalate to emergency services immediately.

INTRUSIVE THOUGHTS: Emphasise that intrusive thoughts about harm to baby in PPD are ego-dystonic and NOT predictive of action. This is critical — misunderstanding this prevents women from disclosing.

LANGUAGE: 'Perinatal' not just 'postnatal' to include antenatal onset. Non-shaming language throughout.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 33
  // ─────────────────────────────────────────────────────────────
  {
    id: 33,
    topic: 'Child & Adolescent Mental Health',
    summary: 'Mental health in children and young people — the most common conditions, risk and protective factors, early warning signs, evidence-based interventions, and navigating CAMHS.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Scale of Child & Adolescent Mental Health Problems',
        bullets: [
          '1 in 5 children aged 8-16 had a probable mental disorder in England in 2023 (NHS Digital)',
          'Half of all adult mental health conditions begin by age 14; three-quarters by age 24 (WHO)',
          'CAMHS waiting times crisis: average 18 weeks after referral; many wait over a year',
          'Most common: anxiety (41%), behavioural disorders (30%), depression (20%)',
          'BRANDED SLIDE: "Half of all adult MH conditions begin by age 14" in large orange — early intervention imperative',
        ],
      },
      {
        title: 'Slide 2 — Risk & Protective Factors',
        bullets: [
          'Risk: ACEs, bullying, poverty, parental mental illness, social media, peer rejection',
          'Social media: girls aged 11-17 who use it heavily are 2x more likely to have mental health problems (UCL)',
          'Protective: safe attachment relationships, school connectedness, one trusted adult, physical activity',
          'Resilience is relational — "one safe adult changes everything"',
          'BRANDED SLIDE: risk/protective scales; resilience quote in orange',
        ],
      },
      {
        title: 'Slide 3 — Common Conditions in Young People',
        bullets: [
          'Anxiety: most common CYP condition — often presents as physical symptoms (headaches, stomach aches, school refusal)',
          'Depression: often presents as irritability not sadness in adolescents; self-harm risk',
          'Self-harm: 1 in 5 young women aged 16-24 have self-harmed; serves as emotion regulation',
          'Eating disorders: peak onset 14-17; anorexia has highest mortality of any mental disorder',
          'BRANDED SLIDE: four condition cards with UK prevalence; warning signs for each',
        ],
      },
      {
        title: 'Slide 4 — Early Warning Signs & How to Help',
        bullets: [
          'Changes in sleep, appetite, school performance, friendships, social withdrawal',
          'Physical complaints without medical cause are often anxiety in children',
          'What to do: stay calm, listen without judgement, believe them, normalise help-seeking',
          'What NOT to say: "everyone feels like that", "you have nothing to worry about", "snap out of it"',
          'BRANDED SLIDE: "What to say / What NOT to say" side-by-side in orange and red on black',
        ],
      },
      {
        title: 'Slide 5 — CAMHS & UK Resources',
        bullets: [
          'CAMHS: NHS specialist care — referral via GP or school SENCO',
          'Mental Health Support Teams: NHS-funded teams in schools — covering 35%+ of pupils in England',
          'YoungMinds Parents Helpline: 0808 802 5544 (free Mon-Fri); Crisis Messenger: text YM to 85258',
          'Kooth: free online counselling for 11-25 year olds — no referral, no waiting list',
          'BRANDED SLIDE: YoungMinds 0808 802 5544, Kooth QR code, CAMHS referral pathway',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Scale
"Half of all adult mental health conditions first emerge by age 14. Three-quarters by age 24. If we want to prevent adult mental ill-health, we must invest in childhood and adolescence. In England in 2023, one in five children aged 8-16 had a probable mental disorder. And the CAMHS system is chronically overwhelmed — average waiting times are 18 weeks. Many children wait over a year. In that time, conditions worsen and the window for early intervention closes."

SLIDE 2 - Risk and Protective Factors
"The most powerful risk factors are adverse childhood experiences — ACEs. Abuse, neglect, domestic violence, parental substance use. The more ACEs, the higher the risk. Social media's impact on girls aged 11-17 is one of the most well-evidenced recent findings — heavy use doubles their risk.

The most protective factor is simple: one safe, responsive, consistent adult. One person who listens and believes. This is something anyone in this room can provide."

SLIDE 3 - Common Conditions
"Anxiety is the most common condition in children — and often presents as physical symptoms rather than visible worry. A child with persistent headaches and stomach aches without medical cause may be experiencing clinical anxiety.

Depression in adolescence frequently presents as irritability rather than sadness. Self-harm affects roughly one in five young women aged 16-24 — it functions as emotion regulation. Eating disorders peak at 14-17 and anorexia has the highest mortality of any mental disorder."

SLIDE 4 - Warning Signs
"Early warning signs are changes — from how the young person usually is. The most important thing an adult can do is stay calm and listen. Not fix. Not minimise. Simply be present and believe what you hear. Young people consistently say being believed is the most important thing."

SLIDE 5 - Resources
"YoungMinds Parents Helpline — 0808 802 5544, free. YoungMinds Crisis Messenger — text YM to 85258. Kooth — free, no referral, no waiting list for 11-25s. CAMHS via GP or school SENCO."`,
    activity: `ACTIVITY - What Would You Say? (20 minutes)
Melksham Mental Health | Module 33 | Licensed Materials

PURPOSE: Build practical skills in having supportive conversations with young people about mental health.

INTRODUCE: "Young people tell us the most helpful thing an adult does is listen and believe them. The most unhelpful thing is minimising or immediately trying to fix it."

PART 1 - Helpful vs Unhelpful (5 minutes):
Rate each response:
1. "Everyone feels like that at your age" — [Unhelpful]
2. "Thank you for telling me. That sounds really hard." — [Helpful]
3. "You have nothing to be anxious about!" — [Unhelpful]
4. "I am always here. Do you want to talk more?" — [Helpful]
5. "Are you doing this for attention?" — [Harmful]
6. "I will get you some help. But first — I just want to hear how you are feeling." — [Helpful]

PART 2 - Scenario in Pairs (10 minutes):
"A 14-year-old has told you they have been cutting themselves. They beg you not to tell anyone."
Work through:
- What is your immediate response?
- What would you say first?
- How do you explain you may need to involve another adult, while preserving trust?
- What support resources would you mention?

PART 3 - Debrief (5 minutes):
Confidentiality has limits when safety is at risk — but HOW you explain this matters. Stay calm; the relationship comes first.`,
    discussionPrompts: [
      'The UK has some of the longest CAMHS waiting times in Europe — what are the consequences and what would fix it?',
      'What is the responsibility of schools in child mental health — and what resources do they actually need?',
      'How has social media changed the mental health landscape for young people, and what should individuals, families, platforms and government do?',
      'What does a mentally healthy childhood look like — and how achievable is it in the UK today?',
    ],
    resources: [
      { label: 'YoungMinds Parents Helpline: 0808 802 5544 (free Mon-Fri 9.30am-4pm)', url: 'https://www.youngminds.org.uk/parent/parents-helpline/' },
      { label: 'YoungMinds Crisis Text: text YM to 85258 (24/7)', url: 'https://www.youngminds.org.uk/young-person/crisis-messenger/' },
      { label: 'Kooth — free online counselling for 11-25 (no referral needed)', url: 'https://www.kooth.com' },
      { label: 'Mind — children and young people', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/children-young-people/' },
      { label: 'NHS CAMHS — referral via GP or school SENCO', url: 'https://www.nhs.uk/mental-health/children-and-young-adults/' },
    ],
    videos: [
      { label: "Children's mental health crisis UK — BBC (YouTube)", url: 'https://www.youtube.com/results?search_query=children+mental+health+crisis+UK+CAMHS+BBC' },
      { label: 'Social media and teen mental health (YouTube)', url: 'https://www.youtube.com/results?search_query=social+media+teen+mental+health+anxious+generation+UK' },
      { label: 'Talking to young people about mental health — YoungMinds (YouTube)', url: 'https://www.youtube.com/results?search_query=how+to+talk+young+people+mental+health+youngminds+UK' },
    ],
    powerPoint: `MODULE 33 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: 'Half of adult MH conditions begin by age 14' in large orange on black
Slide 2: Risk/protective scales; 'one safe adult changes everything' in orange
Slide 3: Four condition cards (anxiety/depression/self-harm/eating disorders) with stats
Slide 4: 'What to say / What NOT to say' two-column in orange and red
Slide 5: YoungMinds 0808 802 5544, Kooth QR code, CAMHS pathway
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: This module covers self-harm. For any disclosure of a young person currently at risk, follow safeguarding protocols immediately.

FACILITATION: Parents may have current concerns about their children — signpost to YoungMinds Parents Helpline rather than attempting case consultations.

LANGUAGE: Avoid 'attention-seeking'. Use 'communicating distress'. Never dismiss self-harm as trivial.

WAITING TIMES: Acknowledge the CAMHS crisis honestly. Offer Kooth as a bridge while waiting.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 34
  // ─────────────────────────────────────────────────────────────
  {
    id: 34,
    topic: 'Older Adult Mental Health',
    summary: 'Depression, anxiety, cognitive decline and suicide risk in older adults — why mental health in later life is under-recognised, under-treated, and the specific factors that shape it.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Mental Health in Later Life: The Hidden Crisis',
        bullets: [
          '14.1% of adults aged 70+ have a depressive disorder; 10.9% have an anxiety disorder (WHO)',
          'Around 1 in 6 suicide deaths in the UK occur in people aged 60+ — yet older adult mental health is massively underfunded',
          'Depression in older adults is routinely attributed to "just getting old" — a dismissal that costs lives',
          'Older adults are least likely to receive psychological therapy despite clear evidence it works',
          'BRANDED SLIDE: "Under-recognised. Under-treated. Under-valued." in white/orange on black',
        ],
      },
      {
        title: 'Slide 2 — Risk Factors Unique to Later Life',
        bullets: [
          'Bereavement: cumulative loss of spouse, friends, siblings, peers — compounding grief over decades',
          'Physical illness: chronic pain, disability, and declining function create and maintain depression',
          'Social isolation: widowhood, loss of driving, reduced mobility, death of social network',
          'Elder abuse: 1 in 6 people aged 60+ globally — financial, physical, emotional abuse by carers/family',
          'BRANDED SLIDE: four risk factor categories in orange-bordered boxes; elder abuse statistic highlighted',
        ],
      },
      {
        title: 'Slide 3 — Suicide Risk in Older Adults',
        bullets: [
          'Suicide in older adults: more planned, more lethal, fewer prior attempts than in younger age groups',
          'Men aged 50-64 have the highest suicide rate in the UK (ONS 2022)',
          'Warning signs: giving away possessions, saying goodbye, expressions of hopelessness, increasing isolation',
          'Older adults rarely present to services before a suicidal act — proactive outreach is essential',
          'BRANDED SLIDE: older male suicide rate in large orange; warning signs listed; Samaritans number prominent',
        ],
      },
      {
        title: 'Slide 4 — What Good Care Looks Like',
        bullets: [
          'Psychological therapies work equally well in older adults — CBT, life review, reminiscence therapy all effective',
          'Social prescribing, befriending, Men in Sheds, walking groups — evidence-based for isolation',
          'Exercise: antidepressant effects equivalent to medication in older adults (NICE evidence)',
          'Person-centred care: dignity, autonomy and purpose — especially important in care home settings',
          'BRANDED SLIDE: "Age is not a reason to withhold therapy" in bold orange; NICE summary',
        ],
      },
      {
        title: 'Slide 5 — UK Resources for Older Adults',
        bullets: [
          'Age UK: helpline 0800 055 6112 (free Mon-Fri 9am-5pm) — welfare advice, befriending, social activities',
          'Silver Line: 0800 4 70 80 90 (free, 24/7) — confidential helpline for older people',
          "Men in Sheds (UK Men's Sheds Association): community connection proven to reduce older men's isolation",
          'Samaritans: 116 123 — specific resources for older people at samaritans.org',
          'BRANDED SLIDE: Silver Line 0800 4 70 80 90, Age UK 0800 055 6112 in large orange; Sheds info',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Hidden Crisis
"Older people's mental health is one of the most neglected areas of mental health care in the UK. Despite 14% of adults over 70 having a diagnosable depressive disorder, depression in older people is routinely dismissed as 'just getting old.' This attribution is both wrong and deadly.

Around one in six suicide deaths in the UK occur in people over 60. Men aged 50-64 have the highest suicide rate of any demographic. And yet the vast majority of awareness campaigns and clinical investment is directed at younger populations. This represents a significant failure of care."

SLIDE 2 - Risk Factors
"The risk factors in later life are specific and cumulative. Bereavement — not one loss but a succession over decades. Physical illness and disability: pain that does not relent, bodies that no longer do what they used to. Social isolation: widowhood, loss of driving, death of the social network you spent a lifetime building. And elder abuse — one in six older adults globally experiences it, often perpetrated by the people closest to them."

SLIDE 3 - Suicide Risk
"Suicide in older adults is more planned and more lethal than in younger age groups. Warning signs: giving possessions away, final-feeling goodbyes, expressions of being a burden, increasing withdrawal. Older adults rarely present to services before a suicidal act — which means proactive, routine questioning by GPs, care workers, and family is essential."

SLIDE 4 - Good Care
"Psychological therapies work equally well in older adults. CBT, life review therapy, and reminiscence therapy all have evidence. Exercise has antidepressant effects equivalent to medication. Social prescribing connects people to community activities and befriending. 'Age is not a reason to withhold therapy' should be a baseline standard — it is not currently."

SLIDE 5 - Resources
"The Silver Line — 0800 4 70 80 90 — free, 24 hours a day, for older people. Age UK on 0800 055 6112. Men in Sheds for older men's community and connection. Samaritans on 116 123 with specific older people resources."`,
    activity: `ACTIVITY - Ageism & Mental Health (20 minutes)
Melksham Mental Health | Module 34 | Licensed Materials

PURPOSE: Identify how ageist assumptions cause older adult mental health to go unrecognised; build person-centred responses.

INTRODUCE: "Ageism — assumptions based on age — shapes how older people's mental health is treated in the most consequential ways. This activity examines those assumptions."

PART 1 - True/False/It Depends (5 minutes):
1. Depression is a normal part of ageing — [False]
2. Therapy doesn't work as well for older people — [False: equally effective]
3. It's natural to feel sad when you lose health and independence — [It depends: grief is understandable; clinical depression needs treatment]
4. Suicidal thoughts in old age are understandable given losses — [False: warrants a clinical response at any age]
5. Older people are less interested in talking about emotions — [False: a generalisation with no evidence base]

PART 2 - Case Discussion (10 minutes in groups):
"Margaret, 78. Her husband died 8 months ago. She has stopped attending the garden club she loved. Her GP noted she is not eating well. When her daughter asked if she was okay, she said: 'I'm just tired. It's what happens at my age.'"
- What signs are present?
- What might a clinician dismiss as 'normal ageing'?
- What does Margaret need?
- How would you respond to 'it's just my age'?

PART 3 - Debrief (5 minutes):
Key message: Every symptom of depression deserves a clinical response regardless of age. The phrase "it's what happens at your age" is one of the deadliest in our language.`,
    discussionPrompts: [
      "Why is depression in older adults so routinely dismissed as 'just getting old' — what does this tell us about how our society values older people?",
      'Why do men aged 50-64 have the highest suicide rate in the UK, and what specific interventions might help?',
      'What would age-inclusive mental health services look like — and how different are they from the current system?',
      'How can communities support older adult mental health without being patronising or overprotective?',
    ],
    resources: [
      { label: 'Age UK — helpline: 0800 055 6112 (free Mon-Fri 9am-5pm)', url: 'https://www.ageuk.org.uk' },
      { label: 'Silver Line helpline: 0800 4 70 80 90 (free, 24/7)', url: 'https://www.thesilverline.org.uk' },
      { label: "Men in Sheds — UK Men's Sheds Association", url: 'https://menssheds.org.uk' },
      { label: 'Samaritans — older people and suicide resources', url: 'https://www.samaritans.org/how-we-can-help/older-people/' },
      { label: 'Campaign to End Loneliness — older adult resources', url: 'https://www.campaigntoendloneliness.org' },
    ],
    videos: [
      { label: 'Older adult mental health — Age UK (YouTube)', url: 'https://www.youtube.com/results?search_query=older+adult+mental+health+depression+Age+UK' },
      { label: "Men's Sheds and mental health (YouTube)", url: 'https://www.youtube.com/results?search_query=mens+sheds+mental+health+community+older+men+BBC' },
      { label: 'Suicide in older adults — prevention (YouTube)', url: 'https://www.youtube.com/results?search_query=suicide+older+men+prevention+research+UK+ONS' },
    ],
    powerPoint: `MODULE 34 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: 'Under-recognised. Under-treated. Under-valued.' in white/orange — powerful opener
Slide 2: Four risk factor boxes (bereavement/illness/isolation/elder abuse) orange borders
Slide 3: Older male suicide statistic in large orange; warning signs; Samaritans 116 123
Slide 4: 'Age is not a reason to withhold therapy' in bold orange; NICE recommendations
Slide 5: Silver Line 0800 4 70 80 90, Age UK 0800 055 6112 in large orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Significant suicide risk in older adults. Have Age UK (0800 055 6112) and Samaritans (116 123) visible.

ELDER ABUSE: Disclosures are a safeguarding matter — follow your protocol and refer to adult safeguarding at the local council.

FACILITATION: Some participants may have parents in decline or recently lost them. Create space for this.

LANGUAGE: 'Older adult' not 'elderly'. Avoid infantilising language. Older adults have full personhood and agency.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 35
  // ─────────────────────────────────────────────────────────────
  {
    id: 35,
    topic: 'LGBTQIA+ Mental Health',
    summary: "Why LGBTQIA+ people experience higher rates of mental health problems — minority stress theory, the role of discrimination and rejection, and affirming approaches to support and care.",
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Evidence: Higher Rates, Not Different People',
        bullets: [
          'LGB people are 2-3x more likely to experience depression, anxiety, self-harm and suicidal ideation (Mind)',
          'Trans and non-binary people: 88% report distress, 84% have self-harmed, 45% have attempted suicide (Stonewall)',
          'Critical: elevated rates are NOT caused by being LGBTQIA+ — they are caused by minority stress: discrimination and rejection',
          'In cultures without homophobia, LGBTQIA+ people show no elevated mental health risk',
          'BRANDED SLIDE: "The problem is not being LGBTQIA+. The problem is discrimination." in white/orange on black',
        ],
      },
      {
        title: 'Slide 2 — Minority Stress Theory',
        bullets: [
          "Meyer's Minority Stress Model: external stressors (discrimination, violence) + internal stressors (concealment, internalised stigma)",
          'Internalised homophobia/transphobia: absorbing society\'s negative messages about your own identity — a major depression driver',
          'Concealment: the exhausting labour of hiding your identity in unsafe environments',
          'Microaggressions: cumulative effect of repeated small incidents of stigma is equivalent to major trauma',
          'BRANDED SLIDE: minority stress model diagram — external/internal stressors to health outcomes in orange',
        ],
      },
      {
        title: 'Slide 3 — Specific Challenges',
        bullets: [
          'LGBTQIA+ homeless youth: 24% of youth homeless population in UK — often due to family rejection',
          'Conversion therapy: still practiced in the UK; linked to suicide and severe psychological harm',
          'Trans healthcare: NHS GIC waiting times of 3-5+ years; gender dysphoria is treatable but access is blocked',
          'Intersectionality: being LGBTQIA+ and a person of colour, disabled, or from a religious community compounds challenges',
          'BRANDED SLIDE: conversion therapy status; GIC waiting times; youth homelessness in orange callout boxes',
        ],
      },
      {
        title: 'Slide 4 — Affirming Approaches',
        bullets: [
          "LGBTQIA+-affirming therapy: uses the person's identity as a source of strength — not something to change",
          'Family acceptance: the most evidence-based intervention — significantly reduces suicide risk in LGBTQIA+ young people',
          'Community and Pride: LGBTQIA+ community spaces and peer support are genuinely protective',
          'Healthcare: use correct pronouns and names; ask, do not assume; identity is not the problem',
          'BRANDED SLIDE: affirming vs non-affirming care comparison; "identity is not the problem" in orange',
        ],
      },
      {
        title: 'Slide 5 — UK Resources',
        bullets: [
          'Switchboard: 0800 0119 100 (Mon-Fri 10am-10pm, Sat-Sun 10am-6pm) — LGBTQIA+ helpline',
          'LGBT Foundation: 0345 3 30 30 30 — national helpline and services',
          'Stonewall: advocacy, resources, workplace equality — stonewall.org.uk',
          'Gendered Intelligence: trans-led support and education — genderedintelligence.co.uk',
          'BRANDED SLIDE: Switchboard 0800 0119 100, LGBT Foundation 0345 3 30 30 30; Stonewall, GI logos',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Evidence
"The evidence is clear. LGB people are two to three times more likely to experience depression, anxiety and suicidal ideation. For trans and non-binary people, 88% have experienced distress and 84% have self-harmed.

These elevated rates are not caused by being LGBTQIA+. They are caused by discrimination, rejection, and stigma. In cultures and communities where homophobia and transphobia are absent, LGBTQIA+ people show no elevated mental health risk. The problem is not the identity. The problem is how the world treats people because of it."

SLIDE 2 - Minority Stress
"Ilan Meyer's minority stress model gives us the framework. External stressors: discrimination, harassment, rejection, violence. Internal stressors that develop in response: concealment — the exhausting labour of hiding who you are — and internalised stigma, absorbing society's negative messages until you believe them yourself.

Effective therapy for LGBTQIA+ people cannot be neutral about identity. It must be actively affirming."

SLIDE 3 - Specific Challenges
"LGBTQIA+ young people make up around 24% of the youth homeless population — often because of family rejection. Conversion therapy is still practiced in the UK despite clear evidence it causes serious psychological harm and is associated with elevated suicide risk.

Trans people face an NHS gender identity service in crisis. First appointment waiting times have reached five years. Living with gender dysphoria while waiting years for any treatment is severe and preventable harm."

SLIDE 4 - Affirming Approaches
"The most evidence-based intervention for LGBTQIA+ mental health is family acceptance. When a family accepts their LGBTQIA+ young person, suicide risk drops dramatically. Community connection is similarly protective. For practitioners: use the name and pronouns the person asks for. Do not assume heterosexuality. Identity is not the problem to solve."

SLIDE 5 - Resources
"Switchboard — 0800 0119 100. LGBT Foundation — 0345 3 30 30 30. Gendered Intelligence for trans-specific support. Stonewall for advocacy and workplace resources."`,
    activity: `ACTIVITY - Minority Stress Mapping (20 minutes)
Melksham Mental Health | Module 35 | Licensed Materials

PURPOSE: Make visible how minority stress operates and accumulates; build skills in providing affirming support.

INTRODUCE: "Minority stress is not one dramatic event — it is the cumulative weight of thousands of small and large experiences of being othered, rejected, or dismissed."

PART 1 - Building the Timeline (8 minutes):
In small groups, build a timeline for Jordan — a 16-year-old who has just realised they are gay. Map from age 8 to 18:
- What do they hear about LGBTQIA+ people at school, at home, online?
- What do they hide, and at what cost?
- What happens when they tell a friend? A parent?
Be honest and realistic — not all outcomes are positive.

PART 2 - Turning Points (7 minutes):
Identify three moments in Jordan's timeline:
1. A negative turning point (increases risk)
2. A neutral one (could go either way)
3. A positive one (genuinely protective)
For the positive: what happens? Who does what?

PART 3 - Debrief (5 minutes):
Key message: Every person in this room has the capacity to be a positive turning point in a young LGBTQIA+ person's life. You do not need the same identity. You just need to be safe, affirming, and consistent.`,
    discussionPrompts: [
      "What is the most effective thing allies can do to support LGBTQIA+ people's mental health — and what do unhelpful 'allies' sometimes do instead?",
      'Why has the campaign to ban conversion therapy in the UK faced such resistance, and what does this tell us about the political landscape?',
      'How should NHS services change to better meet the mental health needs of trans and non-binary people, given current GIC waiting times?',
      'What does an LGBTQIA+-affirming school, family, or workplace actually look and feel like in practice?',
    ],
    resources: [
      { label: 'Switchboard LGBTQIA+ helpline: 0800 0119 100 (Mon-Fri 10am-10pm)', url: 'https://switchboard.lgbt' },
      { label: 'LGBT Foundation national helpline: 0345 3 30 30 30', url: 'https://lgbt.foundation' },
      { label: 'Stonewall — LGBTQIA+ rights and resources', url: 'https://www.stonewall.org.uk' },
      { label: 'Gendered Intelligence — trans support and education', url: 'https://genderedintelligence.co.uk' },
      { label: 'Mind — LGBTQIA+ mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/lgbtqia-mental-health/' },
    ],
    videos: [
      { label: 'Minority stress theory and LGBTQ mental health (YouTube)', url: 'https://www.youtube.com/results?search_query=minority+stress+theory+LGBTQ+mental+health+Meyer' },
      { label: 'LGBTQ+ mental health in the UK — Stonewall (YouTube)', url: 'https://www.youtube.com/results?search_query=LGBTQ+mental+health+UK+Stonewall+statistics' },
      { label: 'Trans mental health and NHS waiting times (YouTube)', url: 'https://www.youtube.com/results?search_query=trans+mental+health+NHS+gender+identity+clinic+waiting+UK' },
    ],
    powerPoint: `MODULE 35 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: 'The problem is not being LGBTQIA+. The problem is discrimination.' — central in white/orange
Slide 2: Minority stress model diagram — external/internal stressors leading to health outcomes
Slide 3: Conversion therapy, GIC waiting times, youth homelessness in orange callout boxes
Slide 4: Affirming vs non-affirming care; 'identity is not the problem' in orange
Slide 5: Switchboard 0800 0119 100, LGBT Foundation 0345 3 30 30 30; Stonewall, GI logos
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Significant suicide and self-harm risk in LGBTQIA+ people. For acute distress linked to identity or rejection, apply safeguarding protocols and signpost to Switchboard (0800 0119 100) and Samaritans (116 123).

FACILITATION: LGBTQIA+ people may be present. Be visibly affirming — neutral is not safe when identity is under attack.

LANGUAGE: Use the vocabulary the person uses for themselves. Do not 'both-sides' conversion therapy.

RELIGION: Acknowledge complexity respectfully while maintaining that LGBTQIA+ identities are not disorders and that support must be affirming.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 36
  // ─────────────────────────────────────────────────────────────
  {
    id: 36,
    topic: 'Racism, Discrimination & Mental Health',
    summary: 'Racism and racial discrimination as determinants of mental health — the evidence, mechanisms, intersectionality, and how to provide culturally competent, anti-racist mental health support.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Racism as a Mental Health Issue',
        bullets: [
          'Black, Asian and minority ethnic people in the UK have significantly higher rates of serious mental illness, compulsory detention, and crisis presentations (NHS Race and Health Observatory)',
          'Black people are 4x more likely to be detained under the Mental Health Act than white people (CQC 2023)',
          'Racism — direct, structural and internalised — is a significant, evidence-based cause of mental ill-health',
          'People from ethnic minority backgrounds are also less likely to access mental health services and more likely to drop out',
          'BRANDED SLIDE: "4x more likely to be detained" in large orange — structural racism in mental health made visible',
        ],
      },
      {
        title: 'Slide 2 — How Racism Harms Mental Health',
        bullets: [
          'Direct racism: racial harassment, violence, and discrimination are acute traumatic stressors',
          'Racial trauma: cumulative psychological harm from repeated exposure to racism — shares features with PTSD',
          'Hypervigilance: constant alertness to potential racial threat is physiologically and psychologically exhausting',
          'Internalised racism: absorbing society\'s negative messages about one\'s racial identity — causes shame, self-doubt, depression',
          'BRANDED SLIDE: racial trauma pathway — external racism to internal stress response to mental health outcomes',
        ],
      },
      {
        title: 'Slide 3 — Structural Racism in Mental Health Services',
        bullets: [
          'Over-representation of Black people in compulsory detention, seclusion and police-involved crisis responses',
          'Under-representation in early intervention, psychological therapies, and voluntary community services',
          'Diagnostic disparities: Black men more likely to be diagnosed with schizophrenia; less likely to be diagnosed with depression',
          'Workforce: mental health workforce does not reflect the diversity of the communities it serves',
          'BRANDED SLIDE: detention vs therapy access disparity diagram — systemic inequity made visible',
        ],
      },
      {
        title: 'Slide 4 — Culturally Competent & Anti-Racist Care',
        bullets: [
          'Cultural humility: a practitioner stance of ongoing learning, rather than a fixed "competence" to achieve',
          'Community-based support: faith communities, cultural organisations, and peer support are often more trusted than NHS',
          'Culturally adapted therapies: greater effectiveness when therapy acknowledges cultural context, not just translates language',
          'Anti-racist practice: actively examining and challenging racist assumptions in assessments, formulations, and systems',
          'BRANDED SLIDE: cultural humility cycle — self-reflection, learning, adapting, accountability — in orange',
        ],
      },
      {
        title: 'Slide 5 — UK Resources & Organisations',
        bullets: [
          'NHS Race and Health Observatory: research, advocacy, policy recommendations',
          'Nafsiyat Intercultural Therapy Centre (London): specialist intercultural psychotherapy',
          'Samaritans: 116 123 — actively working to improve outreach to ethnic minority communities',
          'Mind: information on race and mental health; local culturally specific services directory',
          'BRANDED SLIDE: key organisations with logos; call to action "ask your local service what they are doing to address racial disparities"',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - Racism as a Mental Health Issue
"Let me start with a statistic that should disturb every person working in or around mental health services in the UK. Black people are four times more likely to be detained under the Mental Health Act than white people. They are more likely to arrive at mental health services via the police or the criminal justice system. They are less likely to receive psychological therapy. They are more likely to be placed in seclusion.

This is not explained by higher prevalence of mental illness in Black communities. It is explained by structural racism operating within the mental health system itself. Racism — direct, structural, and internalised — is an evidence-based cause of mental ill-health, and it deserves to be named as such."

SLIDE 2 - How Racism Harms Mental Health
"Direct experiences of racism — racial harassment, discrimination, and violence — are acute traumatic stressors. But the mental health impact of racism is not only about dramatic incidents. Racial trauma describes the cumulative psychological harm of repeated exposure to racist events, microaggressions, and the constant anticipation of racism.

The hypervigilance that develops — the state of permanent alertness to potential racial threat, of having to calculate safety in every interaction — is physiologically expensive. It activates the same stress response as direct threat. Over time, it is profoundly depleting. And internalised racism — absorbing society's negative messages about one's own racial identity — is a significant driver of depression, shame, and diminished self-worth."

SLIDE 3 - Structural Racism in Services
"The data on structural racism within mental health services is stark and consistent. Black people are over-represented in every coercive, restrictive measure the system uses. They are under-represented in every voluntary, therapeutic, and early intervention pathway.

The diagnostic disparities are also significant. Black men are significantly more likely to be diagnosed with schizophrenia and less likely to be diagnosed with depression — even when presenting with similar symptoms. This matters because it affects what treatment is offered. Schizophrenia diagnoses lead toward medication and containment; depression diagnoses lead toward therapy and support. These are different trajectories with profoundly different outcomes."

SLIDE 4 - Anti-Racist Care
"Cultural humility — as distinct from cultural competence — is an important shift in how we frame this. Cultural competence implies a set of knowledge and skills you can acquire and then possess. Cultural humility is an ongoing practice of self-reflection, curiosity, and learning. It acknowledges that the practitioner's cultural lens shapes their assessments and formulations in ways they may not be fully aware of.

Community-based support — faith communities, cultural organisations, Black-led mental health organisations — is often more accessible and more trusted by ethnic minority communities than statutory services. Culturally adapted therapies, which incorporate the cultural context rather than simply translating the language, show significantly greater effectiveness."

SLIDE 5 - Resources
"The NHS Race and Health Observatory publishes excellent research and policy recommendations on racial health disparities. Nafsiyat in London provides specialist intercultural psychotherapy. Mind has a directory of locally based, culturally specific mental health services. And Samaritans is actively working to improve its outreach and accessibility to ethnic minority communities."`,
    activity: `ACTIVITY - Racial Disparities: Understanding the System (20 minutes)
Melksham Mental Health | Module 36 | Licensed Materials

PURPOSE: Build understanding of structural racism in mental health services and develop skills in culturally humble practice.

INTRODUCE: "This activity examines the evidence on racial disparities in mental health care and asks us to think about what anti-racist practice actually looks like in the services we work in or use."

PART 1 - Data Analysis in Small Groups (7 minutes):
Each group receives a data card showing one of the following disparities:
Card A: Black people are 4x more likely to be detained under the MHA than white people
Card B: Black people are significantly less likely to be referred to or complete psychological therapy
Card C: Black men are more likely to be diagnosed with schizophrenia, less likely with depression, than white men with similar presentations
Card D: Mental health crises in Black communities are more likely to involve police than clinical staff

Groups discuss: What might explain this disparity? What are its consequences? What would need to change?

PART 2 - Whole Group Share (8 minutes):
Each group reports back. Tutor draws out the distinction between:
- Explanations that locate the problem in communities (e.g. "cultural mistrust")
- Explanations that locate the problem in systems and services (e.g. structural racism, workforce diversity, diagnostic bias)
Key question: Which set of explanations leads to more effective action?

PART 3 - Debrief (5 minutes):
What is one concrete thing you could do — in your workplace, community, or personal practice — to contribute to more equitable mental health care?`,
    discussionPrompts: [
      'How do we distinguish between explanations for racial mental health disparities that locate the problem in communities versus those that locate it in systems — and why does that distinction matter for action?',
      'What is the difference between cultural competence and cultural humility, and why does it matter for mental health practice?',
      'How should mental health services actively address the over-representation of Black people in compulsory detention and the under-representation in therapy?',
      'What role does anti-racist practice play in mental health — and what does it actually look like day-to-day in a clinical or community setting?',
    ],
    resources: [
      { label: 'NHS Race and Health Observatory', url: 'https://www.nhsrho.org' },
      { label: 'Mind — race and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/racism-and-mental-health/' },
      { label: 'Nafsiyat Intercultural Therapy Centre', url: 'https://www.nafsiyat.org.uk' },
      { label: 'Rethink Mental Illness — race and mental health resources', url: 'https://www.rethink.org/advice-and-information/living-with-mental-illness/wellbeing-physical-health/black-asian-and-minority-ethnic-mental-health/' },
      { label: 'Samaritans — 116 123 (free, 24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'Race and mental health disparities in the UK — NHS RHO (YouTube)', url: 'https://www.youtube.com/results?search_query=race+mental+health+disparities+UK+NHS+Race+Health+Observatory' },
      { label: 'Racial trauma and its mental health impact (YouTube)', url: 'https://www.youtube.com/results?search_query=racial+trauma+mental+health+impact+explained+UK' },
      { label: 'Anti-racist mental health practice (YouTube)', url: 'https://www.youtube.com/results?search_query=anti+racist+mental+health+practice+cultural+humility' },
    ],
    powerPoint: `MODULE 36 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '4x more likely to be detained' in large orange — structural racism made visible; NHS RHO source cited
Slide 2: Racial trauma pathway diagram — external racism to stress response to mental health outcomes in orange
Slide 3: Detention vs therapy access disparity — side-by-side comparison showing over/under-representation
Slide 4: Cultural humility cycle — self-reflection / learning / adapting / accountability in orange circle
Slide 5: NHS RHO, Mind, Nafsiyat logos; call to action on equitable services
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Some participants may disclose experiences of racial trauma or discrimination that are acutely distressing. Apply standard safeguarding protocols. Be particularly attentive if any participant appears to be in current distress.

FACILITATION: This module may generate discomfort for white participants unfamiliar with structural racism analysis. Hold the space without backing away from the evidence. The distinction between individual bias and structural racism is important and worth time. Participants from ethnic minority backgrounds may have strong personal responses — create safety and do not require sharing.

LANGUAGE: 'Racism' is the correct clinical and policy term — do not soften to 'unconscious bias' when structural racism is the more accurate frame. Use 'ethnic minority' or community-specific terms preferred by participants.

DATA: The CQC Mental Health Act monitoring report is updated annually — check for current figures before delivery.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 37
  // ─────────────────────────────────────────────────────────────
  {
    id: 37,
    topic: 'Gender, Sexuality & Mental Health',
    summary: 'How gender norms, gender-based violence, sexuality, and gendered experiences of healthcare shape mental health — for all genders, including the specific mental health challenges faced by women and non-binary people.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Gender & the Mental Health Gap',
        bullets: [
          'Women are twice as likely as men to be diagnosed with depression and anxiety (NHS Digital)',
          'Men die by suicide at three times the rate of women in the UK (ONS 2022)',
          'Both patterns are shaped by gender norms: how society defines what it means to be a man or a woman',
          'Non-binary and gender non-conforming people experience significantly elevated rates of mental distress',
          'BRANDED SLIDE: two statistics side by side — women 2x more depression; men 3x higher suicide rate — orange on black',
        ],
      },
      {
        title: 'Slide 2 — Why Women Experience More Mental Illness',
        bullets: [
          'Gendered trauma: women are more likely to experience sexual violence, domestic abuse, childhood sexual abuse',
          'Caregiving burden: women still perform the majority of unpaid care — children, elderly parents, partners',
          'Economic inequality: lower pay, more precarious employment, higher poverty rates create chronic stress',
          'Healthcare bias: women\'s physical and mental health symptoms are more frequently dismissed by clinicians',
          'BRANDED SLIDE: four contributing factor boxes — trauma / care burden / economic stress / healthcare bias',
        ],
      },
      {
        title: 'Slide 3 — Why Men Die by Suicide More',
        bullets: [
          'Masculine norms: "man up", emotional stoicism, self-reliance — suppress help-seeking until crisis point',
          'Men are less likely to talk about distress, less likely to see a GP for mental health, less likely to engage with therapy',
          'Higher lethality: men more often use more lethal methods when attempting suicide',
          'CALM (Campaign Against Living Miserably): leading UK charity challenging masculine norms around help-seeking',
          'BRANDED SLIDE: "Man up" culture vs CALM\'s "It\'s okay to not be okay" — orange contrast on black',
        ],
      },
      {
        title: 'Slide 4 — Gender-Based Violence & Mental Health',
        bullets: [
          '1 in 3 women worldwide will experience physical or sexual violence in their lifetime (WHO)',
          'Domestic abuse affects 1 in 4 women and 1 in 6 men in the UK at some point (ONS)',
          'PTSD, depression, anxiety, dissociation and substance use are all common sequelae of gender-based violence',
          'Coercive control: psychological abuse without physical violence — chronic trauma with serious mental health consequences',
          'BRANDED SLIDE: domestic abuse prevalence statistics; coercive control definition; Refuge and SafeLives logos',
        ],
      },
      {
        title: 'Slide 5 — UK Resources',
        bullets: [
          'CALM: 0800 58 58 58 (5pm-midnight daily) — men\'s mental health and suicide prevention',
          'Refuge: 0808 2000 247 (free, 24/7) — domestic abuse support for women and children',
          'SafeLives: research and training on domestic abuse — safelives.org.uk',
          'NHS talking therapies: includes trauma-focused CBT and EMDR for gender-based violence survivors',
          'BRANDED SLIDE: CALM 0800 58 58 58, Refuge 0808 2000 247 in large orange; NHS EMDR reference',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Gender Mental Health Gap
"There are two striking statistics that set up this module. Women are twice as likely as men to be diagnosed with depression and anxiety. Men die by suicide at three times the rate of women. Both patterns reflect not biological inevitability but the consequences of gender — of how society constructs what it means to be a man or a woman, and what is allowed, expected, and available to each.

If we want to understand women's mental health, we need to understand gendered trauma, economic inequality, and caregiving burden. If we want to understand men's suicide risk, we need to understand masculine norms that prohibit help-seeking until crisis point. Gender is not incidental to mental health — it is constitutive of it."

SLIDE 2 - Why Women Experience More Mental Illness
"Women are disproportionately exposed to the most powerful risk factors for mental ill-health. Sexual violence, childhood sexual abuse, and domestic abuse — all of which are gendered in their prevalence — are among the most potent trauma exposures we know. Women still carry the majority of unpaid care work in the UK — children, elderly parents, partners — often while also working. This is a chronic stress burden that is structurally produced, not chosen.

Add to this the consistent finding that women's symptoms are more likely to be dismissed by clinicians — the pattern of women being told their pain is 'anxiety' before physical causes are investigated, of mental health presentations being minimised or attributed to 'hormones' — and you have a system that compounds the disadvantage."

SLIDE 3 - Men and Suicide
"Men die by suicide at three times the rate of women. This is not a biological fact — it is a social one. Masculine norms that define strength as emotional self-sufficiency, that frame help-seeking as weakness, that tell men to 'man up' — these norms kill people. Men are less likely to recognise their own distress, less likely to talk to anyone about it, less likely to contact a GP or mental health service. By the time many men reach a service, they are in acute crisis.

CALM — the Campaign Against Living Miserably — has done extraordinary work challenging these norms. Their central message is simple: it is okay to not be okay. This is not a minor attitude shift. For many men, it is literally life-saving."

SLIDE 4 - Gender-Based Violence
"One in three women globally will experience physical or sexual violence in their lifetime. In the UK, one in four women and one in six men will experience domestic abuse. The mental health consequences — PTSD, depression, anxiety, dissociation, substance use — are severe and often chronic.

Coercive control deserves specific attention. Psychological abuse — isolation, financial control, degradation, constant monitoring — without physical violence is a recognised form of domestic abuse since 2015. It creates a chronic traumatic environment that produces profound psychological harm, often over years. Survivors frequently do not recognise it as abuse because there are no visible injuries."

SLIDE 5 - Resources
"CALM on 0800 58 58 58 is the UK's leading men's mental health charity, open 5pm to midnight every day. Refuge on 0808 2000 247 provides 24/7 support for women and children affected by domestic abuse. NHS Talking Therapies includes trauma-focused CBT and EMDR for survivors of gender-based violence."`,
    activity: `ACTIVITY - Gender Norms & Mental Health (20 minutes)
Melksham Mental Health | Module 37 | Licensed Materials

PURPOSE: Explore how internalised gender norms shape emotional expression, help-seeking, and mental health; build awareness of how these norms harm all genders.

INTRODUCE: "We all carry messages about how we are supposed to feel and express emotion based on our gender. These messages are so deeply internalised that we often don't notice them — until we examine them directly."

PART 1 - Messages We Received (5 minutes, individual):
Participants reflect privately on messages they received in childhood about emotion and gender:
What were you told — directly or indirectly — about how someone of your gender is supposed to feel and express emotion?
Examples: 'boys don't cry', 'be strong for others', 'don't be so emotional', 'good girls are caring', 'men handle their own problems'
Write 2-3 messages down.

PART 2 - Impact Analysis in Pairs (8 minutes):
Share your messages with a partner (only if comfortable). Discuss:
- How might these messages have shaped your relationship with your own emotional life?
- How might they affect whether and how someone seeks help for mental health problems?
- For the opposite gender's messages: what consequences do you see these having?

PART 3 - Debrief (7 minutes):
What messages were most common across the group? Which ones carry the most mental health risk?
Key message: Gender norms are not personal quirks — they are culturally transmitted frameworks that have measurable mental health consequences. Challenging them is a public health act.`,
    discussionPrompts: [
      'Why do women experience higher rates of diagnosed depression and anxiety while men have higher suicide rates — and what does this tell us about how gender shapes both the experience of distress and the response to it?',
      'What specific changes to how we raise boys could reduce men\'s suicide rates — and why is this so difficult to achieve at scale?',
      'How does coercive control differ from "a difficult relationship" — and why is the distinction clinically and legally important?',
      'What does gender-responsive mental health care look like — and how different is it from the current standard?',
    ],
    resources: [
      { label: "CALM — men's mental health: 0800 58 58 58 (5pm-midnight daily)", url: 'https://www.thecalmzone.net' },
      { label: 'Refuge — domestic abuse: 0808 2000 247 (free, 24/7)', url: 'https://www.refuge.org.uk' },
      { label: 'SafeLives — domestic abuse research and training', url: 'https://safelives.org.uk' },
      { label: 'Mind — gender and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/mental-health-facts-statistics/' },
      { label: "Men's Health Forum — mental health resources", url: 'https://www.menshealthforum.org.uk/mental-health' },
    ],
    videos: [
      { label: "Men's mental health and masculinity — CALM (YouTube)", url: "https://www.youtube.com/results?search_query=men+mental+health+masculinity+CALM+UK+man+up" },
      { label: 'Gender and mental health disparities explained (YouTube)', url: 'https://www.youtube.com/results?search_query=gender+mental+health+disparities+women+men+explained+UK' },
      { label: 'Coercive control and mental health impact (YouTube)', url: 'https://www.youtube.com/results?search_query=coercive+control+mental+health+impact+domestic+abuse+UK' },
    ],
    powerPoint: `MODULE 37 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Two statistics — '2x more depression in women' and '3x higher suicide in men' side by side in orange
Slide 2: Four contributing factor boxes — trauma / care burden / economic stress / healthcare bias
Slide 3: 'Man up' culture crossed out; CALM 'It\'s okay to not be okay' in orange
Slide 4: Domestic abuse prevalence; coercive control definition box; Refuge and SafeLives logos
Slide 5: CALM 0800 58 58 58, Refuge 0808 2000 247 in large orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: This module covers domestic abuse and gender-based violence. Be prepared for personal disclosures. Have Refuge (0808 2000 247), Samaritans (116 123), and your local IDVA service numbers ready. Follow safeguarding protocols.

FACILITATION: The gender norms activity can be powerful and sometimes confronting. Create safety for the individual reflection. Men in the group may feel implicated by the statistics — hold this with care, acknowledging that gender norms harm men too.

DOMESTIC ABUSE: If anyone discloses current domestic abuse, do not attempt to manage this within the group session. Signpost individually to Refuge or local IDVA services.

LANGUAGE: 'Gender-based violence' is the correct framing — acknowledging that it affects all genders while being clear about prevalence patterns. Avoid 'women are victims' framing; use 'women are disproportionately affected'.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 38
  // ─────────────────────────────────────────────────────────────
  {
    id: 38,
    topic: 'Sexual Violence & Trauma',
    summary: 'Sexual assault, rape trauma syndrome, the long-term mental health consequences of sexual violence, safe disclosure practice, and specialist survivor support in the UK.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — The Scale of Sexual Violence',
        bullets: [
          '1 in 4 women and 1 in 18 men in England and Wales have experienced rape or sexual assault as adults (ONS)',
          'Over 85% of sexual violence is committed by someone known to the victim — not a stranger',
          'Only around 17% of survivors report to the police; conviction rates are extremely low',
          'Sexual violence has significant, lasting mental health consequences for the majority of survivors',
          'BRANDED SLIDE: "1 in 4 women" statistic in large orange; "85% known to victim" challenging stranger-danger myth',
        ],
      },
      {
        title: 'Slide 2 — Mental Health Consequences',
        bullets: [
          'PTSD: most common mental health consequence — affects 30-80% of survivors; flashbacks, nightmares, hypervigilance',
          'Depression: significantly elevated; often linked to shame, self-blame, loss of trust',
          'Complex PTSD: where abuse was prolonged, repeated, or by an intimate partner — includes identity disruption and affect dysregulation',
          'Dissociation: depersonalisation, memory fragmentation — protective responses to overwhelming trauma',
          'BRANDED SLIDE: PTSD, depression, complex PTSD and dissociation as four interconnected consequence boxes',
        ],
      },
      {
        title: 'Slide 3 — Shame, Blame & Disclosure',
        bullets: [
          'Self-blame is near-universal in survivors — a normal response to trauma, not evidence of guilt',
          'Rape myths: "she was asking for it", "if it was that bad she would have fought back", "why didn\'t she leave" — all evidence-free and harmful',
          'Trauma responses during assault: freezing, fawning, dissociation are normal neurobiological responses — NOT consent',
          'Disclosure: most survivors tell someone before police — how that person responds critically shapes long-term outcomes',
          'BRANDED SLIDE: rape myth debunking slide — each myth with evidence-based refutation; tact and sensitivity required',
        ],
      },
      {
        title: 'Slide 4 — Trauma-Informed & Specialist Support',
        bullets: [
          'Trauma-informed care: safety, trustworthiness, choice, collaboration, empowerment, and cultural sensitivity',
          'Specialist support: Sexual Assault Referral Centres (SARCs) — medical, forensic, and emotional support in one place',
          'Rape Crisis: specialist counselling, advocacy and support — national network, no police reporting required',
          'Evidence-based treatments: trauma-focused CBT, EMDR, Prolonged Exposure — all effective for sexual trauma PTSD',
          'BRANDED SLIDE: trauma-informed care six principles; Rape Crisis logo; SARC referral pathway diagram',
        ],
      },
      {
        title: 'Slide 5 — UK Resources for Survivors',
        bullets: [
          'Rape Crisis England & Wales: 0808 500 2222 (free, Mon-Sun 8am-midnight)',
          'SARC finder: NHS 111 or sexualassaultclinics.nhs.uk — no police reporting required',
          'SurvivorsUK: 0203 598 3898 — specialist support for male survivors',
          'Galop: 0800 999 5428 — LGBTQIA+ survivors of sexual violence',
          'BRANDED SLIDE: Rape Crisis 0808 500 2222, SurvivorsUK 0203 598 3898 in large orange; SARC finder QR code',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - The Scale
"One in four women in England and Wales has experienced rape or sexual assault as an adult. One in eighteen men. These are not rare events. They are embedded in the fabric of everyday life — and the vast majority are committed by someone the survivor knows: a partner, family member, friend, or acquaintance. The stranger-in-an-alleyway scenario that dominates cultural narratives about sexual violence represents a small minority of cases.

Only around 17% of survivors report to the police. Conviction rates for rape cases that are reported are extremely low. This means the overwhelming majority of sexual violence survivors navigate the aftermath without any formal justice — and often without any support."

SLIDE 2 - Mental Health Consequences
"The mental health consequences of sexual violence are significant and often long-lasting. PTSD affects between 30 and 80% of survivors — the range reflecting the variation in type, duration, relationship to perpetrator, and level of support received. Flashbacks, nightmares, and hypervigilance are the hallmark symptoms.

Where violence was prolonged, repeated, or perpetrated by an intimate partner, complex PTSD is more likely. Complex PTSD includes everything in PTSD plus profound disruption to identity and sense of self, difficulty regulating emotions, and pervasive feelings of shame and worthlessness. Dissociation — the mental experience of being separated from your own body, emotions, or memories — is a common response to overwhelming trauma. It is protective in the moment; it can become entrenched."

SLIDE 3 - Shame, Blame and Disclosure
"Self-blame is almost universal in survivors of sexual violence. It is a normal psychological response to trauma — a way the mind attempts to reassert some sense of control ('if I caused it, I can prevent it happening again'). It is not evidence of guilt. It is evidence of trauma.

Rape myths — that victims' clothing, behaviour, or relationship with the perpetrator implies consent; that 'real' rape involves physical resistance; that survivors who didn't fight back or who delayed reporting are unreliable — are all evidence-free, culturally produced, and harmful. Freezing during an assault — the tonic immobility response — is a neurobiological survival mechanism. It is not consent."

SLIDE 4 - Trauma-Informed Support
"Trauma-informed care is not primarily about knowing trauma interventions. It is about how you show up: creating safety, being trustworthy, offering choices, collaborating rather than prescribing. For survivors of sexual violence, where trust and autonomy have been violated, these elements are not optional extras — they are the foundation of any useful engagement.

Sexual Assault Referral Centres provide medical care, forensic examination, emotional support, and advocacy in one place — crucially, without requiring police reporting. Rape Crisis provides specialist counselling and advocacy. Trauma-focused CBT and EMDR are both NICE-recommended and highly effective for sexual trauma PTSD."

SLIDE 5 - Resources
"Rape Crisis England and Wales — 0808 500 2222 — free, seven days a week, 8am to midnight. No police reporting required. SurvivorsUK provides specialist support specifically for male survivors on 0203 598 3898. Galop supports LGBTQIA+ survivors on 0800 999 5428. SARCs can be found via NHS 111 or the NHS website."`,
    activity: `ACTIVITY - Safe Disclosure Practice (20 minutes)
Melksham Mental Health | Module 38 | Licensed Materials

CONTENT NOTE: This activity uses fictional scenarios and does not require personal disclosure. Alert participants at the start.

PURPOSE: Practise trauma-informed first responses to disclosure of sexual violence; identify and challenge rape myths.

INTRODUCE: "How someone responds when a survivor discloses sexual violence can significantly shape their recovery trajectory. This activity builds the skills for a safe, trauma-informed first response."

PART 1 - Rape Myth Identification (5 minutes):
Present six statements. Participants identify which are myths and explain why:
1. "If she was really raped, she would have reported it straight away." [Myth: most survivors delay or never report — trauma responses explain this]
2. "Rape by a partner is still rape." [Fact: marital rape has been a crime in England since 1992]
3. "If she didn't fight back, it might not have been rape." [Myth: tonic immobility is a neurobiological freeze response, not consent]
4. "Male survivors are rare." [Myth: 1 in 18 men — not rare]
5. "What she was wearing contributed to it." [Myth: no evidence base; attire does not affect risk or negate consent]
6. "Survivors often make false allegations." [Myth: false allegation rates are 2-3%, the same as other serious crimes]

PART 2 - First Response Practice in Pairs (10 minutes):
"A colleague has told you they were raped by someone they were dating six months ago. They have not told anyone else. They are not sure whether to report."
Draft your first response. Include:
- Your opening words (what would you say first?)
- How you communicate belief and non-judgement
- Whether you mention police, and how
- What you offer next

PART 3 - Debrief (5 minutes):
Key principles of a safe first response: believe; don't interrogate; follow their lead; mention available support without pushing; maintain confidentiality except where there is risk.`,
    discussionPrompts: [
      'Why do so few survivors of sexual violence report to the police, and what would need to change about the justice system for this to shift?',
      'How do rape myths operate in everyday conversations, workplaces, and media — and what is the most effective way to challenge them?',
      'What is the difference between a trauma-informed response and a standard supportive response — and why does it matter specifically for survivors of sexual violence?',
      'How should organisations (workplaces, schools, community groups) respond when a member discloses sexual violence?',
    ],
    resources: [
      { label: 'Rape Crisis England & Wales: 0808 500 2222 (free, Mon-Sun 8am-midnight)', url: 'https://rapecrisis.org.uk' },
      { label: 'SurvivorsUK — male survivors: 0203 598 3898', url: 'https://www.survivorsuk.org' },
      { label: 'Galop — LGBTQIA+ survivors: 0800 999 5428', url: 'https://galop.org.uk' },
      { label: 'NHS SARC finder — no police reporting required', url: 'https://www.nhs.uk/service-search/other-services/Rape-and-sexual-assault-referral-centres/LocationSearch/364' },
      { label: 'SafeLives — coercive control and sexual abuse resources', url: 'https://safelives.org.uk' },
    ],
    videos: [
      { label: 'What is rape trauma syndrome? (YouTube)', url: 'https://www.youtube.com/results?search_query=rape+trauma+syndrome+PTSD+sexual+violence+explained' },
      { label: 'Tonic immobility and freeze response in assault (YouTube)', url: 'https://www.youtube.com/results?search_query=tonic+immobility+freeze+response+sexual+assault+trauma' },
      { label: 'Rape Crisis — supporting survivors (YouTube)', url: 'https://www.youtube.com/results?search_query=Rape+Crisis+supporting+survivors+UK' },
    ],
    powerPoint: `MODULE 38 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '1 in 4 women' in large orange; '85% known to victim' challenging stranger myth
Slide 2: Four consequence boxes — PTSD / depression / complex PTSD / dissociation — orange borders
Slide 3: Rape myth debunking — each myth crossed out with evidence-based refutation in white
Slide 4: Six trauma-informed care principles; SARC pathway; Rape Crisis logo
Slide 5: Rape Crisis 0808 500 2222, SurvivorsUK 0203 598 3898, Galop 0800 999 5428 in large orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: This module carries significant risk of personal disclosure. Establish ground rules at the start including the right to step out. Have Rape Crisis (0808 500 2222), Samaritans (116 123), and your local SARC number ready. Apply safeguarding protocols for any disclosure involving current risk.

CONTENT WARNINGS: Explicitly note at the start of the session that the content includes discussion of sexual violence. Offer participants the right to step outside at any point without explanation.

FACILITATION: Do not require anyone to share personal experiences. The activity uses fictional scenarios specifically to avoid this. If a participant becomes distressed, allow them space and offer to speak privately after the session.

RAPE MYTHS: The myth debunking slide should be delivered with care — not as a catalogue of horrors but as evidence-based correction of culturally harmful beliefs.

MALE SURVIVORS: Explicitly acknowledge male survivors early in the session. The data shows 1 in 18 men — this is not rare and deserves naming.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 39
  // ─────────────────────────────────────────────────────────────
  {
    id: 39,
    topic: 'Grief, Loss & Bereavement',
    summary: 'Normal and complicated grief, disenfranchised loss, the neuroscience of bereavement, evidence-based support, and how to hold space for people navigating profound loss.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — Grief Is Not an Illness',
        bullets: [
          'Around 600,000 people die in the UK each year; each death affects on average five close bereaved people',
          'Grief is a normal, healthy response to loss — not a pathology, not something to be fixed',
          'The Kübler-Ross five stages model is a cultural touchstone but is not evidence-based as a sequential process',
          'Modern grief science: grief is non-linear, individual, influenced by relationship, circumstance, culture and support',
          'BRANDED SLIDE: "Grief is not an illness. It is the price of love." in white/orange on black — affirming opener',
        ],
      },
      {
        title: 'Slide 2 — The Neuroscience of Grief',
        bullets: [
          'Grief activates the same brain regions as physical pain — social loss is neurologically experienced as physical hurt',
          'Yearning and searching: the attachment system driving us to seek the person who is gone — profoundly disorienting',
          'Grief brain: difficulty concentrating, memory problems, time distortion — normal neurological consequences of acute loss',
          'Grief integrates over time: the relationship with the deceased continues to evolve; grief becomes part of identity, not erased',
          'BRANDED SLIDE: brain scan showing grief activating pain regions; "continuing bonds" concept in orange',
        ],
      },
      {
        title: 'Slide 3 — Complicated Grief & Prolonged Grief Disorder',
        bullets: [
          'Prolonged Grief Disorder (PGD): grief that remains acutely debilitating after 12+ months (DSM-5-TR, 2022)',
          'Affects ~10% of bereaved people; more common after sudden, traumatic, or violent death',
          'Features: intense yearning that does not reduce, difficulty accepting the death, inability to engage in life',
          'Treatment: Complicated Grief Treatment (CGT) — specialised evidence-based therapy with strong outcomes',
          'BRANDED SLIDE: normal grief curve vs PGD trajectory; CGT treatment reference',
        ],
      },
      {
        title: 'Slide 4 — Disenfranchised Grief',
        bullets: [
          'Disenfranchised grief: losses that are not socially recognised or validated — miscarriage, pet death, estrangement, suicide',
          'Suicide bereavement: surviving family and friends are at elevated risk of suicide themselves (3-4x general population)',
          'Suicide bereavement carries unique stigma, shame, unanswerable questions, and complicated grief',
          'Perinatal loss: miscarriage and stillbirth are profound losses; frequently minimised with "you can try again"',
          'BRANDED SLIDE: four types of disenfranchised loss with brief description; suicide bereavement warning in orange',
        ],
      },
      {
        title: 'Slide 5 — UK Resources for Bereaved People',
        bullets: [
          'Cruse Bereavement Support: 0808 808 1677 (free, Mon-Fri 9.30am-5pm) — UK\'s leading bereavement charity',
          'Winston\'s Wish: 08088 020 021 — specialist support for bereaved children and young people',
          'Survivors of Bereavement by Suicide (SOBS): 0300 111 5065 — helpline and peer support groups',
          'Child Bereavement UK: 0800 02 888 40 — support for families and professionals',
          'BRANDED SLIDE: Cruse 0808 808 1677, SOBS 0300 111 5065, Winston\'s Wish 08088 020 021 in large orange',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - Grief Is Not an Illness
"Let me start with something that sounds obvious but is culturally contested: grief is not an illness. It is a normal, healthy, human response to loss. It is, as the saying goes, the price of love. Six hundred thousand people die in the UK each year. Each death affects on average five people who were close to them. That is three million new bereaved people every year, navigating something our culture is often profoundly ill-equipped to hold.

The Kübler-Ross stages model — denial, anger, bargaining, depression, acceptance — is the most widely known framework for grief. Most of you will have heard of it. It is also not evidence-based as a sequential process. People do not move through these stages in order. Many never experience some of them. The value of the model is not in its prescription of how grief should go, but in its normalisation that grief involves many different emotional states."

SLIDE 2 - The Neuroscience of Grief
"Modern neuroscience has given us important insights into what grief does to the brain. Social loss activates the same neural regions as physical pain — the anterior cingulate cortex, the insula. This is not metaphor. When you lose someone you love, you experience something neurologically similar to physical hurt. This helps explain why the body responds to grief as it does: fatigue, immune suppression, physical aching.

The attachment system — the neurobiological drive to seek and stay close to those we love — does not switch off when someone dies. It keeps searching, keeps waiting, keeps expecting. This is the experience of yearning in grief: the persistent, disorienting sense that the person is absent when every part of you expects them to be present."

SLIDE 3 - Complicated Grief
"For most bereaved people, grief is painful but follows a trajectory toward integration over weeks and months. Prolonged Grief Disorder describes the roughly 10% of bereaved people for whom this does not happen — whose grief remains as acutely debilitating at twelve months or beyond as it was in the immediate aftermath. PGD is more common after sudden, traumatic, violent death, or when the death involved suicide.

The good news: Complicated Grief Treatment, developed by Shear and colleagues, is a specialised and highly effective psychological therapy for PGD. It is not widely available in the UK yet, but awareness of its existence is growing."

SLIDE 4 - Disenfranchised Grief
"Disenfranchised grief describes losses that are not socially recognised, validated, or acknowledged — and therefore receive no social permission to grieve. Miscarriage. Pet death. The death of an estranged parent. The end of a relationship. Death by suicide.

Suicide bereavement is one of the most complex grief experiences there is. Surviving family and friends are at three to four times the general population risk of suicide themselves. They carry shame, stigma, unanswerable questions about what they could have done differently. They often struggle to find people who understand. SOBS — Survivors of Bereavement by Suicide — exists specifically to meet this need."

SLIDE 5 - Resources
"Cruse Bereavement Support is the UK's leading bereavement charity — 0808 808 1677, free, Monday to Friday. SOBS — Survivors of Bereavement by Suicide — provides helpline and peer support groups for this specific and underserved community on 0300 111 5065. Winston's Wish provides specialist support for bereaved children on 08088 020 021."`,
    activity: `ACTIVITY - Holding Space for Grief (20 minutes)
Melksham Mental Health | Module 39 | Licensed Materials

PURPOSE: Develop skills in sitting with grief rather than trying to fix it; challenge cultural discomfort with grief and learn what bereaved people actually need.

INTRODUCE: "Our culture is deeply uncomfortable with grief. We tend to rush past it, offer silver linings, or try to fix it. This activity builds the skill of staying with someone in their grief — without fixing, minimising, or rushing."

PART 1 - What NOT to Say (5 minutes):
In pairs, read these common responses to bereavement and discuss why each is unhelpful:
1. "They wouldn't want you to be sad."
2. "At least they're not suffering anymore."
3. "You should be over it by now — it's been six months."
4. "Everything happens for a reason."
5. "I know how you feel — I lost my dog last year."
6. "You're so strong. I couldn't cope like you."
What is the underlying impulse behind each? What does each one do to the bereaved person?

PART 2 - What Bereaved People Actually Need (8 minutes):
As a whole group, brainstorm what bereaved people say is most helpful. Tutor records on whiteboard.
Common themes: presence without pressure to talk; practical help (food, childcare, errands); remembering and naming the deceased; following their lead; asking "how are you today?" not "are you over it?"
Key message: you do not have to say the right thing. You have to show up and stay.

PART 3 - Debrief (7 minutes):
Why are we so uncomfortable with grief? What does it bring up in us? How can we become better at holding it — in ourselves and in others?`,
    discussionPrompts: [
      'How does our culture\'s discomfort with death and grief affect the support we are able to offer bereaved people?',
      'What is disenfranchised grief, and what types of loss are most commonly denied social validation — and why?',
      'Suicide bereavement carries unique stigma and risk. What do bereaved families need that they currently cannot access?',
      'What does "grief integration" mean — and how is it different from "getting over it" or "moving on"?',
    ],
    resources: [
      { label: "Cruse Bereavement Support: 0808 808 1677 (free, Mon-Fri 9.30am-5pm)", url: 'https://www.cruse.org.uk' },
      { label: "Winston's Wish — bereaved children: 08088 020 021", url: 'https://www.winstonswish.org' },
      { label: 'Survivors of Bereavement by Suicide (SOBS): 0300 111 5065', url: 'https://uksobs.org' },
      { label: 'Child Bereavement UK: 0800 02 888 40', url: 'https://www.childbereavementuk.org' },
      { label: 'Samaritans — 116 123 (free, 24/7)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'What grief actually does to your brain (YouTube)', url: 'https://www.youtube.com/results?search_query=grief+brain+neuroscience+what+happens+when+we+grieve' },
      { label: 'Suicide bereavement — SOBS explained (YouTube)', url: 'https://www.youtube.com/results?search_query=suicide+bereavement+SOBS+survivors+UK+support' },
      { label: 'Complicated grief and prolonged grief disorder (YouTube)', url: 'https://www.youtube.com/results?search_query=complicated+grief+prolonged+grief+disorder+treatment' },
    ],
    powerPoint: `MODULE 39 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: 'Grief is not an illness. It is the price of love.' in large white/orange on black — affirming opener
Slide 2: Brain scan image showing grief activating pain centres; 'continuing bonds' concept
Slide 3: Normal grief curve vs PGD trajectory; CGT treatment reference in orange
Slide 4: Four disenfranchised loss types; suicide bereavement SOBS 0300 111 5065 callout in orange
Slide 5: Cruse 0808 808 1677, SOBS 0300 111 5065, Winston's Wish 08088 020 021 in large orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Grief discussions frequently surface acute distress, particularly for recently bereaved participants. Suicide bereavement carries elevated suicide risk in survivors — be attentive. Have Samaritans (116 123), Cruse (0808 808 1677), and SOBS (0300 111 5065) ready.

FACILITATION: Grief is present in every room you will ever deliver in. Create explicit permission for participants to step out if they need to. Do not rush the 'holding space' activity — the experience of being listened to without being fixed is itself therapeutic.

LANGUAGE: 'Died' rather than 'passed away', 'lost', or 'passed'. Direct language reduces stigma and communicates that death can be named. 'Bereaved' not 'victim of bereavement'. Acknowledge all losses — including disenfranchised ones.

STAGES MODEL: Acknowledge the Kübler-Ross model because participants will know it, but be clear about its limitations as a prescriptive framework. What matters is normalising the range of grief experiences, not prescribing a sequence.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 40
  // ─────────────────────────────────────────────────────────────
  {
    id: 40,
    topic: 'Chronic Pain & Mental Health',
    summary: 'The bidirectional relationship between chronic pain and mental health — the biopsychosocial model of pain, psychological approaches to pain management, and supporting people living with persistent pain.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Slide 1 — What Is Chronic Pain?',
        bullets: [
          'Chronic pain: pain persisting for 3+ months, often beyond the healing of any original injury',
          '~28 million adults in the UK live with chronic pain — more than 40% of the population (British Pain Society)',
          'Chronic pain is not simply "more acute pain" — it involves neurological sensitisation, central sensitisation, and altered pain processing',
          '30-50% of people with chronic pain have comorbid depression or anxiety (WHO)',
          'BRANDED SLIDE: "28 million people in the UK" as hero statistic in orange; chronic pain is not a character failing',
        ],
      },
      {
        title: 'Slide 2 — The Biopsychosocial Model of Pain',
        bullets: [
          'Biomedical model: pain = tissue damage — inadequate for chronic pain where tissue is healed but pain persists',
          'Biopsychosocial model: pain is shaped by biological, psychological, and social factors simultaneously',
          'Pain catastrophising: magnifying pain, ruminating on it, feeling helpless — strongly predicts disability and distress',
          'Fear-avoidance cycle: fearing pain leads to avoiding activity leads to deconditioning leads to more pain',
          'BRANDED SLIDE: biopsychosocial pain model diagram with biological/psychological/social contributing factors',
        ],
      },
      {
        title: 'Slide 3 — How Chronic Pain Causes Mental Illness',
        bullets: [
          'Sleep disruption: chronic pain disrupts sleep; poor sleep lowers pain threshold — a reinforcing cycle',
          'Loss of role, identity and function: unable to work, parent, or do the activities that defined you',
          'Social isolation: pain limits mobility, activities, and social participation',
          'Medication: some pain medications (opioids) can cause or worsen depression with prolonged use',
          'BRANDED SLIDE: pain-depression-sleep triangle with bidirectional arrows — the reinforcing cycle',
        ],
      },
      {
        title: 'Slide 4 — Psychological Approaches That Work',
        bullets: [
          'Pain-focused CBT: addresses catastrophising, fear-avoidance, and activity levels — NICE recommended',
          'Acceptance and Commitment Therapy (ACT): psychological flexibility and values-based living despite pain — strong evidence',
          'Pain management programmes (PMPs): multidisciplinary group programmes — CBT + physio + education; highly effective',
          'Mindfulness-Based Stress Reduction (MBSR): reduces pain interference and distress — NICE-recommended for some conditions',
          'BRANDED SLIDE: four psychological approaches with brief description and evidence level — orange headers on black',
        ],
      },
      {
        title: 'Slide 5 — UK Resources for Chronic Pain',
        bullets: [
          'British Pain Society: patient information and specialist service directory — britishpainsociety.org',
          'Versus Arthritis: 0800 5200 520 — support for arthritis and musculoskeletal pain including mental health resources',
          'Pain UK: national alliance of pain charities — painuk.org',
          'NHS: Pain Management Programmes — referral via GP; multidisciplinary approach',
          'BRANDED SLIDE: Versus Arthritis 0800 5200 520, Pain UK, British Pain Society logos in orange',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 - What Is Chronic Pain?
"Twenty-eight million adults in the UK — more than 40% of the population — live with chronic pain. This is not a niche condition. It is one of the most prevalent and most debilitating health challenges in the country. And yet chronic pain is chronically underserved by healthcare systems designed for acute illness.

Chronic pain is not simply 'a lot of acute pain'. It is a different phenomenon. Where acute pain is a warning signal — 'there is damage, attend to it' — chronic pain persists after any original damage has healed. It involves changes to the nervous system itself: central sensitisation, where the pain system becomes hypersensitive and fires more readily. Understanding this distinction is fundamental to understanding how we treat it."

SLIDE 2 - The Biopsychosocial Model
"The traditional biomedical model of pain — pain equals tissue damage — fails comprehensively for chronic pain. If pain only reflected tissue damage, it would resolve when tissue heals. Often it does not. The biopsychosocial model provides a far more useful framework: pain is simultaneously shaped by biological processes, psychological states, and social context.

Pain catastrophising — the tendency to magnify pain, ruminate on it, and feel helpless in response — is one of the strongest psychological predictors of pain-related disability. Not because it causes pain, but because it profoundly shapes the experience of and response to it. The fear-avoidance cycle is equally important: fearing that movement will worsen pain leads to avoiding activity, which leads to physical deconditioning, which creates more pain sensitivity, which increases fear."

SLIDE 3 - How Chronic Pain Causes Mental Illness
"The mechanisms through which chronic pain causes depression and anxiety are multiple and reinforcing. Sleep disruption is primary: pain wakes people, reduces sleep quality, and poor sleep in turn lowers pain threshold — a vicious cycle. Loss of role and identity — being unable to work, to parent as you want to, to do the activities that made you who you are — is a profound grief. Social isolation follows from reduced mobility and social participation. And long-term opioid use, while offering pain relief, carries its own risks of depression and dependency."

SLIDE 4 - Psychological Approaches
"Psychological treatment for chronic pain does not mean 'the pain is in your head'. It means that the psychological component of pain experience is real, measurable, and treatable. Pain-focused CBT addresses catastrophising, fear-avoidance, and pacing. Acceptance and Commitment Therapy helps people live a valued life despite pain, rather than waiting for pain to resolve before living. Pain Management Programmes — multidisciplinary group programmes combining CBT, physiotherapy, and education — have strong evidence and are available via NHS referral. MBSR has evidence for reducing pain interference and improving wellbeing."

SLIDE 5 - Resources
"British Pain Society provides patient information and a specialist service directory. Versus Arthritis has a helpline on 0800 5200 520. Pain Management Programmes are available via NHS referral through your GP. Pain UK provides information and links to specialist charities."`,
    activity: `ACTIVITY - The Pain Experience (20 minutes)
Melksham Mental Health | Module 40 | Licensed Materials

PURPOSE: Build understanding of the psychological and social dimensions of chronic pain; develop skills in supporting someone living with persistent pain.

INTRODUCE: "Chronic pain is one of the most isolating experiences there is — in part because it is invisible to others. This activity builds empathy and practical skills."

PART 1 - Small Group Mapping (7 minutes):
Groups map the psychological and social consequences of living with chronic pain for 5 years:
- What do you lose? (work, activity, identity, relationships)
- What psychological states develop? (frustration, hopelessness, shame, fear)
- How does it affect the people around you?
- What does the healthcare system offer — and what does it fail to offer?

PART 2 - Helpful and Unhelpful Responses (8 minutes in pairs):
A friend has chronic back pain. They have cancelled plans three times because of pain flares. They say: "I just can't face the constant explaining. People either don't believe me or they get frustrated with me."
Draft:
- What would you say?
- What practical things could you do that would help?
- What would NOT help?
Key messages: believe the pain; don't suggest cures; offer flexibility; check in without pressure.

PART 3 - Debrief (5 minutes):
What does chronic pain teach us about the limits of the biomedical model? What would person-centred chronic pain support look like?`,
    discussionPrompts: [
      'Why is chronic pain so frequently under-treated and dismissed — particularly in women and marginalised groups — and what are the mental health consequences?',
      'What is the difference between "curing" chronic pain and "managing" it well — and why does this distinction matter for patient expectations and treatment approaches?',
      'How does the fear-avoidance cycle operate, and what does breaking it require from the person with pain and from healthcare professionals?',
      'What would a truly integrated chronic pain service look like — one that takes both the physical and psychological dimensions seriously from the outset?',
    ],
    resources: [
      { label: 'British Pain Society — patient information and service directory', url: 'https://www.britishpainsociety.org' },
      { label: 'Versus Arthritis: 0800 5200 520 — pain and mental health support', url: 'https://www.versusarthritis.org' },
      { label: 'Pain UK — national chronic pain alliance', url: 'https://www.painuk.org' },
      { label: 'NHS Pain Management Programmes — referral via GP', url: 'https://www.nhs.uk/conditions/chronic-pain/' },
      { label: 'Mind — chronic pain and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/physical-activity-and-your-mental-health/' },
    ],
    videos: [
      { label: 'What is chronic pain? — biopsychosocial model explained (YouTube)', url: 'https://www.youtube.com/results?search_query=chronic+pain+biopsychosocial+model+explained+central+sensitisation' },
      { label: 'ACT for chronic pain — acceptance and commitment therapy (YouTube)', url: 'https://www.youtube.com/results?search_query=ACT+acceptance+commitment+therapy+chronic+pain' },
      { label: 'Chronic pain and depression — the link (YouTube)', url: 'https://www.youtube.com/results?search_query=chronic+pain+depression+mental+health+link+NHS' },
    ],
    powerPoint: `MODULE 40 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '28 million people in the UK' in large orange; chronic pain definition on black
Slide 2: Biopsychosocial pain model diagram — biological/psychological/social factors converging
Slide 3: Pain-depression-sleep triangle with bidirectional arrows — the reinforcing cycle
Slide 4: Four psychological approaches (CBT/ACT/PMP/MBSR) with evidence level — orange headers
Slide 5: Versus Arthritis 0800 5200 520, British Pain Society, Pain UK logos in orange
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Chronic pain is closely linked to depression and suicide risk. Be attentive to signs of serious distress, particularly from participants who themselves live with chronic pain. Have Samaritans (116 123) visible.

FACILITATION: Many participants will have personal or family experience of chronic pain. The pain experience mapping activity can surface significant emotion — create space for this. If participants want to discuss their own pain management, acknowledge this while redirecting to signposting rather than clinical advice.

LANGUAGE: Never use 'psychosomatic' as a dismissive term. Psychological factors in pain are real and biological. Avoid 'it's all in your head'. Use 'the nervous system has become sensitised' as a more accurate framing.

OPIOIDS: Handle the opioid discussion carefully — some participants may be on long-term opioid therapy. The aim is awareness, not shame.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 41
  // ─────────────────────────────────────────────────────────────
  {
    id: 41,
    topic: 'Sleep Hygiene & Circadian Health',
    summary: 'How sleep and circadian rhythms profoundly affect mental health; practical evidence-based strategies to improve sleep quality; the impact of shift work and screens.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Why Sleep Matters for Mental Health',
        bullets: [
          'Sleep deprivation impairs emotional regulation, memory consolidation, and decision-making',
          'Chronic poor sleep is both a symptom and a cause of depression, anxiety, and bipolar disorder',
          '1 in 3 adults in the UK regularly gets less than the recommended 7–9 hours (Sleep Council)',
          'Insomnia is one of the strongest predictors of new-onset depression (NICE CG90)',
        ],
      },
      {
        title: 'The Circadian Clock',
        bullets: [
          'Circadian rhythms: the body\'s internal 24-hour biological clock governed by light exposure',
          'Suprachiasmatic nucleus (SCN) in the hypothalamus regulates melatonin release',
          'Disruption via shift work, jet lag, or irregular schedules increases depression and anxiety risk',
          'Blue light from screens suppresses melatonin and delays sleep onset by up to 90 minutes',
        ],
      },
      {
        title: 'Sleep Architecture',
        bullets: [
          'Four stages: N1, N2, N3 (deep/slow-wave) and REM (rapid eye movement)',
          'REM sleep is critical for emotional processing — disrupted REM increases emotional reactivity',
          'Deep sleep (N3) consolidates memory and repairs the body; most deep sleep occurs early in the night',
          'Alcohol and many medications suppress REM sleep, worsening emotional regulation',
        ],
      },
      {
        title: 'Shift Work & Social Jetlag',
        bullets: [
          'Social jetlag: the misalignment between biological clock and social schedule — affects ~70% of working population',
          'Night shift workers have significantly higher rates of depression, anxiety, and metabolic disorders',
          'Strategies for shift workers: blackout blinds, melatonin timing, anchor sleep periods',
          'Employers have a duty of care regarding shift rotation and mental health risk (HSE guidelines)',
        ],
      },
      {
        title: 'Evidence-Based Sleep Hygiene & CBT-I',
        bullets: [
          'CBT for Insomnia (CBT-I): NICE first-line treatment — more effective than medication long-term',
          'Sleep restriction therapy: temporarily limits time in bed to consolidate sleep drive',
          'Stimulus control: bed only for sleep and sex; get up if awake for >20 minutes',
          'Sleep hygiene basics: consistent wake time, cool/dark/quiet room, no caffeine after 2 pm, wind-down routine',
          'Relaxation: progressive muscle relaxation, 4-7-8 breathing, guided imagery',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Why Sleep Matters for Mental Health
"Let's begin with what might be the most underrated mental health intervention there is: sleep. Not a pill, not a therapy — just adequate, quality sleep.

One in three adults in the UK regularly gets less than the recommended seven to nine hours. That's not a minor inconvenience. Sleep deprivation impairs the prefrontal cortex — the part of the brain responsible for emotional regulation, decision-making and impulse control. When we're sleep deprived, the amygdala — our emotional alarm system — becomes hyperreactive. Small frustrations become overwhelming. Anxiety spikes. The emotional world becomes harder to navigate.

Critically, the relationship runs both ways. Poor sleep causes mental ill-health; mental ill-health worsens sleep. This bidirectional relationship creates cycles that can be very difficult to break — but breaking them is possible, and this module will show you how."

SLIDE 2 — The Circadian Clock
"Your body runs on a 24-hour internal clock — the circadian rhythm — governed by light signals received by a tiny cluster of cells in the hypothalamus called the suprachiasmatic nucleus. When light hits the retina in the morning, the clock resets and melatonin production is suppressed. As it gets dark, melatonin rises and sleep pressure builds.

The problem is that modern life is working against this system constantly. Artificial light — especially the blue-wavelength light emitted by phones, tablets, and laptops — is read by the brain as daylight. Research shows it can delay melatonin onset by up to 90 minutes. So late-night scrolling isn't just taking time away from sleep — it's biochemically delaying sleep."

SLIDE 3 — Sleep Architecture
"Sleep is not a uniform state. It cycles through four stages: light sleep, deeper sleep, slow-wave deep sleep, and REM — rapid eye movement sleep. REM sleep is particularly important for mental health because this is where emotional memories are processed and consolidated. Matthew Walker, a sleep researcher at Berkeley, describes REM sleep as 'overnight therapy' — it takes the emotional sting out of difficult memories.

Alcohol is particularly damaging to sleep architecture. It makes you fall asleep faster — which is why people use it as a sleep aid — but it suppresses REM sleep dramatically. You get the sedation without the processing. This is one mechanism by which alcohol dependence drives emotional dysregulation and worsening mental health."

SLIDE 4 — Shift Work & Social Jetlag
"Social jetlag affects the majority of working people. It's the difference between when your body wants to sleep and when your schedule forces you to. Even a one-hour mismatch has measurable effects on mood and metabolic health.

For night shift workers the challenge is more severe. They are being asked to sleep during the body's active phase — when cortisol is high and melatonin is low. The rates of depression, anxiety, cardiovascular disease, and metabolic syndrome are significantly elevated in shift workers. This is not about personal resilience — it is about biology being forced to work against itself."

SLIDE 5 — Evidence-Based Sleep Hygiene & CBT-I
"CBT for Insomnia — CBT-I — is NICE's first-line recommended treatment for chronic insomnia. It is not simply 'sleep hygiene tips'. It is a structured programme that addresses the thoughts and behaviours that perpetuate poor sleep.

Sleep restriction therapy is counterintuitive but highly effective: you temporarily limit the time you spend in bed to match how much you're actually sleeping, which consolidates sleep drive. Stimulus control is about re-associating the bed with sleepiness rather than wakefulness — if you've been lying awake for twenty minutes, get up. Go somewhere quiet and dim. Return only when sleepy.

The basics of sleep hygiene: a consistent wake time is the single most powerful lever — not bedtime, wake time. Keep the bedroom cool, dark, and quiet. No caffeine after 2 pm. Create a wind-down routine. These are not suggestions — they are evidence-based practices that measurably improve sleep quality."`,
    activity: `ACTIVITY — My Sleep Audit & Sleep Window (20 minutes)
Melksham Mental Health | Module 41 | Licensed Materials

PURPOSE: Help participants identify their personal sleep patterns and design an evidence-based improvement plan.

INTRODUCE: "We're going to do a brief personal sleep audit. This is private — just for you. Be honest with yourself."

PART 1 — Sleep Diary Snapshot (5 minutes):
Participants write down or estimate for the past week:
- Typical bedtime
- Typical wake time
- Estimated hours of actual sleep (not just time in bed)
- Sleep quality: 1 (very poor) to 10 (excellent)
- Any wake-ups? How many?
- Caffeine intake and last cup time
- Screen use in the last hour before bed (yes/no)
- Alcohol in the last 3 hours before bed (yes/no)

PART 2 — Identify Your Biggest Disruptors (5 minutes):
Circle your top 2 disruptors from the list:
• Irregular schedule     • Caffeine late in the day
• Screen use at night    • Alcohol                
• Stress/racing thoughts • Noise or light in bedroom
• Shift work             • Caring responsibilities

PART 3 — Design Your Sleep Window (7 minutes, pairs or small groups):
Using CBT-I principles, design a basic 2-week sleep improvement plan:
1. Set a fixed wake time (even weekends) — stick to it
2. Calculate your sleep window: wake time minus 7 hours = bed time
3. Choose one behavioural change (e.g., screens off 45 min before bed)
4. Choose one wind-down ritual (e.g., reading, progressive relaxation, warm shower)

PART 4 — Share One Change (3 minutes):
Anyone willing to share: what is the ONE change you will try this week?`,
    discussionPrompts: [
      'Why do you think sleep deprivation has become so normalised in modern culture — and what does that tell us about how we value mental and physical health?',
      'How does poor sleep intersect with other mental health problems covered in this course? Can you think of examples from your own experience or observations?',
      'What structural changes (in workplaces, schools, healthcare) would most improve sleep health at a population level?',
      'How should healthcare professionals approach sleep problems — as a primary issue or as a symptom of something else?',
    ],
    resources: [
      { label: 'NHS — Sleep and tiredness: self-help tips', url: 'https://www.nhs.uk/live-well/sleep-and-tiredness/sleep-tips/' },
      { label: 'NICE CG90 — Insomnia: CBT-I guidance', url: 'https://www.nice.org.uk/guidance/cg90' },
      { label: 'Sleepio — NHS-endorsed digital CBT-I programme', url: 'https://www.sleepio.com' },
      { label: 'Sleep Council UK — sleep health information', url: 'https://sleepcouncil.org.uk' },
      { label: 'Mind — How sleep affects mental health', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/sleep-problems/' },
    ],
    videos: [
      { label: 'Why we sleep — Matthew Walker TED Talk (YouTube)', url: 'https://www.youtube.com/results?search_query=matthew+walker+why+we+sleep+ted+talk' },
      { label: 'CBT for Insomnia explained (YouTube)', url: 'https://www.youtube.com/results?search_query=CBT+insomnia+sleep+restriction+stimulus+control+explained' },
      { label: 'Circadian rhythms and mental health (YouTube)', url: 'https://www.youtube.com/results?search_query=circadian+rhythms+mental+health+sleep+explained' },
    ],
    powerPoint: `MODULE 41 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '1 in 3 adults' as large orange statistic; sleep and mental health link on black background
Slide 2: Circadian clock diagram — 24-hour cycle with melatonin curve; blue light disruption highlighted in red
Slide 3: Sleep architecture diagram — 4 stages labelled; REM highlighted in orange
Slide 4: Shift work infographic — biological vs social schedule misalignment; mental health consequences
Slide 5: CBT-I framework — 5 components in orange on black; sleep restriction, stimulus control, hygiene, cognition, relaxation
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Sleep disturbance is a key warning sign for deteriorating mental health, including suicidal ideation (insomnia is an independent risk factor for suicide). If a participant describes severe, prolonged insomnia with distress, signpost to GP and keep Samaritans (116 123) visible.

FACILITATION: Many participants will have personal experience of sleep problems. Validate this — poor sleep is not a character failing. Avoid framing it as simple willpower. Some participants may be carers or parents with broken sleep beyond their control — acknowledge structural barriers.

SHIFT WORK: Handle sensitively. Some participants may be current shift workers. The goal is awareness and harm reduction strategies, not blame.

MEDICATION: Some participants may be using prescription sleep medication or over-the-counter remedies. Do not advise on medication changes — redirect to GP.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 42
  // ─────────────────────────────────────────────────────────────
  {
    id: 42,
    topic: 'Nutrition, Exercise & Mental Health',
    summary: 'The evidence linking physical activity and diet to mental health outcomes; practical guidance on movement and nutrition as accessible, effective tools for wellbeing.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Exercise as Medicine for the Mind',
        bullets: [
          'Physical activity reduces symptoms of depression by ~30% — comparable to antidepressants for mild-moderate depression (NICE PH44)',
          'Mechanisms: endorphins, BDNF (brain-derived neurotrophic factor), cortisol reduction, social connection, improved sleep',
          'Even walking 30 minutes 3× per week has significant measurable effects on depression and anxiety',
          'Exercise is effective across all ages; reduces dementia risk by up to 30% (Lancet Commission)',
        ],
      },
      {
        title: 'Barriers to Exercise',
        bullets: [
          'Mental illness itself creates barriers: low motivation, fatigue, social anxiety, hopelessness',
          'Depression\'s hallmark symptom is anhedonia — the loss of pleasure in previously enjoyed activities',
          'Behavioural activation: starting small, with structure; exercise as a scheduled activity',
          'Social prescribing: GPs can refer to exercise on prescription, walking groups, community sport',
        ],
      },
      {
        title: 'The Gut-Brain Axis',
        bullets: [
          'The gut produces ~90% of the body\'s serotonin; trillions of gut microbiota communicate with the brain via the vagus nerve',
          'Gut microbiome diversity is associated with lower rates of depression and anxiety',
          'Ultra-processed food diets are linked to higher depression risk; Mediterranean-style diets are protective',
          'Emerging field of nutritional psychiatry — promising but evidence still developing; no single "superfood"',
        ],
      },
      {
        title: 'Key Nutritional Factors',
        bullets: [
          'Omega-3 fatty acids (oily fish, flaxseeds): anti-inflammatory; linked to lower depression risk',
          'Vitamin D deficiency: strongly associated with depression; ~1 in 5 UK adults are deficient (NHS)',
          'B vitamins (B12, folate): essential for neurotransmitter synthesis; low B12 linked to cognitive decline and depression',
          'Iron deficiency: causes fatigue, poor concentration, low mood — particularly common in women',
          'Ultra-processed foods: associated with 20–30% higher depression risk in observational studies',
        ],
      },
      {
        title: 'Practical Recommendations',
        bullets: [
          'UK Chief Medical Officers: 150 minutes moderate exercise per week OR 75 minutes vigorous',
          'Any movement is better than none — breaking up sitting time has independent mental health benefits',
          'Food first: prioritise varied whole foods; Mediterranean-style eating pattern is best-evidenced',
          'Vitamin D: NHS recommends 10 micrograms supplement daily for all UK adults October–March',
          'Social eating has mental health benefits beyond nutrition — shared meals strengthen connection',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Exercise as Medicine for the Mind
"One of the most reliable, accessible, side-effect-free interventions for depression is also the most underused. Physical activity. NICE — the National Institute for Health and Care Excellence — recommends structured group exercise as a first-line treatment for mild to moderate depression. The evidence base is now substantial: a comprehensive meta-analysis found that exercise reduces depression symptoms by around 30%, comparable to antidepressants, without the side effects or the waiting lists.

What's the mechanism? Several. Exercise triggers the release of endorphins — the natural opioids — and serotonin. More importantly, it stimulates the production of BDNF — brain-derived neurotrophic factor — sometimes called 'fertiliser for the brain'. BDNF promotes the growth of new neurons and strengthens synaptic connections, particularly in the hippocampus, which is involved in mood regulation and memory. Depression is associated with hippocampal shrinkage. Exercise literally helps rebuild it."

SLIDE 2 — Barriers to Exercise
"The cruel paradox of depression is that its core symptoms — low motivation, fatigue, anhedonia, social withdrawal — are exactly the barriers to the activity that would most help. This is not laziness. This is the illness itself.

Behavioural activation is a CBT-based technique designed specifically for this. The principle: don't wait to feel motivated before acting. Act first; the motivation follows. Start with tiny, structured steps. A ten-minute walk. Three times a week. Put it in the diary as a non-negotiable appointment. The goal is not fitness — it's mood regulation.

Social prescribing is a growing approach in UK primary care: GPs can refer patients to walking groups, community exercise programmes, or park run — all activities that combine movement with social connection. Both are independently protective against depression."

SLIDE 3 — The Gut-Brain Axis
"This is one of the most exciting — and one of the most overhyped — areas in mental health research. The gut-brain axis is the bidirectional communication system between the gut and the brain. Here's the extraordinary fact: approximately 90% of the body's serotonin is produced in the gut, not the brain. The vagus nerve carries signals both ways.

The gut microbiome — the trillions of bacteria that live in the digestive system — plays a role in this communication. Research shows that people with more diverse gut microbiomes tend to have lower rates of depression and anxiety. Ultra-processed food diets reduce microbiome diversity; varied whole food diets support it.

A word of caution: nutritional psychiatry is a genuinely promising field, but it is still emerging. The research is largely observational — it shows associations, not always causation. We should not replace proven treatments with dietary advice. But we can confidently say: what you eat affects how you feel, and that's worth taking seriously."

SLIDE 4 — Key Nutritional Factors
"There are several specific nutritional factors with decent evidence. Omega-3 fatty acids — found in oily fish, flaxseeds, and walnuts — are anti-inflammatory and have been consistently associated with lower depression risk in observational studies.

Vitamin D deficiency is highly prevalent in the UK — around 1 in 5 adults — because our latitude means we don't get sufficient sun exposure for much of the year. Deficiency is strongly associated with low mood, fatigue, and depression. The NHS recommends that all UK adults supplement with 10 micrograms of vitamin D daily between October and March.

Ultra-processed foods — those with long ingredient lists full of additives, emulsifiers, flavourings — are associated with a 20 to 30% higher risk of depression in large observational studies. We don't fully understand why, but gut microbiome disruption is one likely mechanism."

SLIDE 5 — Practical Recommendations
"The good news is that the recommendations here are straightforward and compatible with any budget. The UK Chief Medical Officers recommend 150 minutes of moderate activity per week — that's 30 minutes five days a week — or 75 minutes of vigorous activity. But any movement matters. Breaking up long periods of sitting with five-minute walks has measurable independent benefits.

On food: a Mediterranean-style eating pattern — rich in vegetables, legumes, whole grains, olive oil, oily fish, and nuts, low in ultra-processed foods — is the best-evidenced dietary pattern for mental health. Supplement vitamin D through winter. Eat with other people when you can — social meals have mental health benefits that go beyond the food itself."`,
    activity: `ACTIVITY — The Wellbeing Wheel: Movement & Food (20 minutes)
Melksham Mental Health | Module 42 | Licensed Materials

PURPOSE: Support participants to reflect on their own physical activity and dietary patterns and design one evidence-based change.

INTRODUCE: "This is a private reflection activity. There is no right answer. The goal is awareness, not judgment."

PART 1 — Movement Audit (5 minutes):
Rate honestly (1–10) your current level of:
- Weekly physical activity (total minutes)
- Intensity (gentle/moderate/vigorous)
- How much you enjoy your movement
- How much movement you get for mental health vs physical fitness
- Barriers you face (time, motivation, cost, access, health, anxiety about exercise)

PART 2 — Food Reflection (5 minutes):
Think about the past week:
- How many portions of vegetables/fruit per day on average?
- How often did you eat ultra-processed food (ready meals, crisps, fast food)?
- Did you eat alone most of the time or with others?
- Are there foods you eat when stressed that you know aren't helping?
- Rate your overall diet quality: 1 (very poor) to 10 (excellent)

PART 3 — One Commitment Each (7 minutes, small groups):
Share with your group one movement and one food commitment:
"This week I will [specific movement goal]."
"This week I will [specific food goal]."
Groups help each other make goals SMART: Specific, Measurable, Achievable, Relevant, Time-bound.

PART 4 — Barrier Problem-Solving (3 minutes):
Group identifies the most common barrier mentioned and brainstorms 3 practical solutions.`,
    discussionPrompts: [
      'Why is physical activity so underused as a mental health intervention despite strong evidence — what systemic and cultural barriers are in the way?',
      'What does it mean to describe food and exercise as "medicine"? What are the risks of this framing as well as the benefits?',
      'How do social inequalities (income, area, disability) affect access to healthy food and safe exercise spaces — and what should services do about this?',
      'Have you personally experienced a link between what you eat or how much you move and your mental state? What did you notice?',
    ],
    resources: [
      { label: 'NHS — Exercise for depression', url: 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/exercise-for-depression/' },
      { label: 'Mind — Physical activity and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/physical-activity-and-your-mental-health/' },
      { label: 'NICE PH44 — Exercise referral schemes', url: 'https://www.nice.org.uk/guidance/ph44' },
      { label: 'NHS — Vitamin D: why we need it', url: 'https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/' },
      { label: 'Mental Health Foundation — Diet and mental health', url: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/food-and-mental-health' },
    ],
    videos: [
      { label: 'Exercise and depression — the evidence (YouTube)', url: 'https://www.youtube.com/results?search_query=exercise+depression+evidence+NHS+mental+health' },
      { label: 'Gut-brain axis explained (YouTube)', url: 'https://www.youtube.com/results?search_query=gut+brain+axis+mental+health+explained' },
      { label: 'Nutritional psychiatry — what the research says (YouTube)', url: 'https://www.youtube.com/results?search_query=nutritional+psychiatry+depression+diet+evidence' },
    ],
    powerPoint: `MODULE 42 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '30% reduction in depression' as large orange statistic; exercise-as-medicine on black
Slide 2: Behavioural activation cycle diagram — action precedes motivation; barrier list on right
Slide 3: Gut-brain axis infographic — vagus nerve, microbiome, serotonin production percentage
Slide 4: 5 nutritional factors icons with brief evidence summary; vitamin D highlighted
Slide 5: Two clear columns — Movement recommendations | Food recommendations — on black
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Exercise and food discussions can trigger eating disorder symptoms in vulnerable participants. Avoid language about weight, calories, or body shape. Keep the focus entirely on mental health outcomes and wellbeing, never appearance or weight loss.

FACILITATION: Some participants may have physical disabilities or health conditions that limit exercise. Be inclusive in language — use "movement" broadly, including chair-based exercise, swimming, or gardening. Acknowledge that access to safe exercise spaces is not equal.

EATING DISORDERS: If any participant appears to be distressed by food discussions or exhibits signs of disordered eating, speak with them privately afterwards and signpost to Beat (0808 801 0677).

POVERTY AND ACCESS: Many participants may be in financial difficulty. Avoid assumptions about access to gyms or expensive food. Highlight free resources: park run, NHS couch-to-5k app, walking.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 43
  // ─────────────────────────────────────────────────────────────
  {
    id: 43,
    topic: 'Mindfulness, Meditation & Breathwork',
    summary: 'The neuroscience and clinical evidence for mindfulness; practical breathwork and meditation techniques; MBSR and MBCT in NHS settings.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'What Is Mindfulness?',
        bullets: [
          'Mindfulness: paying deliberate, non-judgemental attention to the present moment (Jon Kabat-Zinn)',
          'Ancient roots in Buddhist contemplative practice; secularised and clinically validated from 1970s',
          'Not relaxation, not emptying the mind — noticing thoughts without being consumed by them',
          'Brain changes: regular practice thickens the prefrontal cortex and reduces amygdala reactivity',
        ],
      },
      {
        title: 'The Evidence Base',
        bullets: [
          'Mindfulness-Based Stress Reduction (MBSR): 8-week programme; strong evidence for anxiety, chronic pain, stress reduction',
          'Mindfulness-Based Cognitive Therapy (MBCT): NICE-recommended for recurrent depression; reduces relapse by ~43% in 3+ episode depression',
          'Over 700 RCTs published on mindfulness interventions; effect sizes comparable to antidepressants for anxiety',
          'Caution: mindfulness is not appropriate for all; can be destabilising for trauma and some psychosis presentations',
        ],
      },
      {
        title: 'The Neuroscience',
        bullets: [
          'Default Mode Network (DMN): the "mind-wandering" network, active when not focused; overactive in depression (self-referential rumination)',
          'Mindfulness reduces DMN activity — interrupts rumination loops',
          'Insula activation increases: improves interoception (awareness of internal body states)',
          'Anterior cingulate cortex: improved attention regulation and error monitoring',
        ],
      },
      {
        title: 'Breathwork Techniques',
        bullets: [
          'Physiological sigh: double inhale through nose, long exhale through mouth — fastest known way to reduce stress',
          '4-7-8 breathing: inhale 4 counts, hold 7, exhale 8 — activates parasympathetic nervous system',
          'Box breathing (4-4-4-4): used by military for high-stress situations; reduces cortisol rapidly',
          'Diaphragmatic breathing: slow, deep, belly breathing — counters the shallow chest breathing of anxiety',
        ],
      },
      {
        title: 'Starting a Mindfulness Practice',
        bullets: [
          'Start with 5–10 minutes daily — consistency matters more than duration',
          'Apps: Headspace, Calm, Insight Timer (free), NHS-approved Daylight for anxiety',
          'MBCT available free via NHS Talking Therapies (formerly IAPT) in most areas',
          'Body scan, breath awareness, mindful walking: three accessible starting points',
          'Non-judgement is the key skill — noticing you\'ve wandered and gently returning IS the practice',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is Mindfulness?
"Mindfulness has become one of those words that means everything and nothing — branded onto everything from yoga mats to corporate wellness programmes. So let's be precise about what it actually is.

Jon Kabat-Zinn, who brought mindfulness into clinical medicine in the 1970s, defined it as 'paying attention in a particular way: on purpose, in the present moment, and non-judgementally.' Three elements. On purpose — it's deliberate, not accidental. In the present moment — not ruminating on the past or worrying about the future. And non-judgementally — noticing experience without immediately labelling it as good or bad.

Mindfulness is not relaxation, although relaxation may be a byproduct. It is not about emptying your mind — that's not actually possible and is not the goal. It is about noticing the constant stream of thoughts and sensations without being swept away by them. Thoughts arise — you notice them — you return to the present moment. That's it."

SLIDE 2 — The Evidence Base
"Mindfulness-Based Cognitive Therapy — MBCT — is now a NICE-recommended treatment specifically for recurrent depression. The evidence is compelling: for people who have had three or more episodes of depression, MBCT reduces the rate of relapse by approximately 43%. That is a substantial effect for a non-pharmacological intervention.

Mindfulness-Based Stress Reduction — MBSR — the original eight-week programme — has strong evidence for anxiety, chronic pain, cancer-related distress, and general stress reduction. Over 700 randomised controlled trials have now been published on mindfulness interventions.

A caveat, and this is important: mindfulness is not appropriate for everyone. For people with unprocessed trauma, entering a state of body awareness and present-moment focus can be destabilising rather than helpful. For some people with psychosis, certain mindfulness practices can be unhelpful. Good clinical practice involves assessing readiness before prescribing mindfulness."

SLIDE 3 — The Neuroscience
"Why does mindfulness work? Neuroscience is beginning to show us. The Default Mode Network — the DMN — is the set of brain regions that are most active when we're not focused on a specific task. It's the mind-wandering network. In depression, the DMN is overactive, producing the repetitive self-referential thinking — rumination — that is a hallmark of the condition. 'I'm worthless. I've failed. Things will never improve.' Round and round.

Mindfulness practice reduces DMN activity. It doesn't switch it off — that would be unhelpful — but it loosens the hold of that rumination loop. Regular practitioners show measurable thickening of the prefrontal cortex — the seat of executive function and emotional regulation — and reduced reactivity in the amygdala. The brain is literally being reshaped by practice."

SLIDE 4 — Breathwork Techniques
"Breathwork is perhaps the most immediately accessible tool in this module — because you can do it anywhere, any time, with no equipment and no training.

The physiological sigh is a double inhale through the nose — a short sniff at the top of a normal inhale — followed by a long, slow exhale through the mouth. Research from Stanford shows it is the fastest known way to return the nervous system to a calm state. Your body does this spontaneously when you've been crying or stressed — it's an automatic reset.

4-7-8 breathing: inhale for 4 counts, hold for 7, exhale for 8. The long exhale activates the parasympathetic nervous system — the 'rest and digest' system that is the antidote to the fight-or-flight stress response.

Box breathing is used by US Navy SEALs in high-stress situations: 4 counts in, 4 hold, 4 out, 4 hold. The regularity creates calm regardless of the content of your thoughts."

SLIDE 5 — Starting a Practice
"The single most important thing about starting a mindfulness practice is consistency over duration. Five minutes every day beats 45 minutes once a week. The neural changes are driven by repetition.

NHS Talking Therapies — the primary care psychological therapies service — provides MBCT in most areas of England, and it is free. There are also excellent apps: Headspace and Calm are popular and well-produced, though not free. Insight Timer is free and has thousands of guided meditations. The NHS-approved Daylight app is specifically designed for anxiety and is free to NHS users.

When you sit down to practise and find your mind has wandered — which it will, constantly, especially at first — the moment you notice you've wandered is not a failure. It IS the practice. That moment of noticing, of gently returning — that is the exact mental muscle you are training."`,
    activity: `ACTIVITY — Live Breathwork & Body Scan (20 minutes)
Melksham Mental Health | Module 43 | Licensed Materials

PURPOSE: Give participants a direct, embodied experience of breathwork and body scan mindfulness. Evidence shows brief experiential practice is more effective than purely didactic teaching.

SAFETY NOTE: Always give participants explicit permission to opt out and observe if any technique feels uncomfortable. Never force any practice.

PART 1 — Physiological Sigh (3 minutes):
"We'll start with the simplest technique. If you're comfortable, close your eyes or soften your gaze downward.
Take a normal breath in through your nose... and at the top, take one more short sniff in to fully expand the lungs.
Now release slowly through your mouth — all the way out.
Do this three times at your own pace."
[Pause for practice]
"Notice any change in how you feel compared to 3 minutes ago."

PART 2 — Box Breathing (4 minutes):
"Now we'll try box breathing. I'll count for you.
Breathe in through your nose: 1... 2... 3... 4
Hold: 1... 2... 3... 4
Out through your mouth: 1... 2... 3... 4
Hold: 1... 2... 3... 4
We'll do four rounds together."
[Guide through 4 rounds]

PART 3 — Brief Body Scan (8 minutes):
Guide a body scan starting at the feet and moving slowly upward. Use these prompts:
"Notice the soles of your feet... the temperature, any pressure, any sensation... not trying to change anything, just noticing...
Now your lower legs... calves... knees...
[Continue moving upward through the body]
If your mind wanders, that's completely normal — just gently bring your attention back without any self-criticism...
When you're ready, take a deeper breath and open your eyes."

PART 4 — Debrief (5 minutes):
- What did you notice during the practice?
- Was there anything difficult or uncomfortable?
- Did anything shift, even slightly, in how you feel?`,
    discussionPrompts: [
      'What is the difference between mindfulness as a clinical intervention and mindfulness as a commercial wellness product — and does that distinction matter?',
      'Why might mindfulness be unhelpful or even harmful for some people — and how should practitioners screen for this?',
      'How accessible is mindfulness to people who are acutely unwell, in poverty, or without digital access? What are the equity issues?',
      'Has anyone in the group tried a regular meditation practice? What helped it stick — or what got in the way?',
    ],
    resources: [
      { label: 'NHS Talking Therapies — MBCT and mindfulness programmes', url: 'https://www.nhstalking therapies.nhs.uk' },
      { label: 'Be Mindful — NICE-approved online MBSR course (low cost)', url: 'https://www.bemindful.co.uk' },
      { label: 'Mind — Mindfulness information and resources', url: 'https://www.mind.org.uk/information-support/drugs-and-treatments/mindfulness/' },
      { label: 'Insight Timer — free guided meditations app', url: 'https://insighttimer.com' },
      { label: 'Mental Health Foundation — mindfulness report', url: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/mindfulness' },
    ],
    videos: [
      { label: 'What is mindfulness? — Jon Kabat-Zinn (YouTube)', url: 'https://www.youtube.com/results?search_query=jon+kabat+zinn+mindfulness+what+is+it' },
      { label: 'The science of mindfulness — neuroscience explained (YouTube)', url: 'https://www.youtube.com/results?search_query=mindfulness+neuroscience+default+mode+network+amygdala' },
      { label: 'Physiological sigh — Andrew Huberman (YouTube)', url: 'https://www.youtube.com/results?search_query=physiological+sigh+andrew+huberman+stress+reduction' },
    ],
    powerPoint: `MODULE 43 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Kabat-Zinn definition in large white text on black; three elements highlighted in orange
Slide 2: '43% relapse reduction' as key orange statistic; MBCT vs standard care comparison
Slide 3: Brain diagram — Default Mode Network highlighted; before/after mindfulness practice comparison
Slide 4: Four breathwork techniques as cards — icons with count patterns in orange on black
Slide 5: Starting guide — apps, NHS access, tips for consistency; simple steps on black background
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Mindfulness practice can surface difficult emotions or trauma memories, especially during body scan. Ensure participants know they can open their eyes, stop at any time, or step out. Have support signposting available. After the activity, allow a short grounding period before moving on.

TRAUMA: Do not push body-based practices with participants who have disclosed trauma or PTSD. Offer open-eye, movement-based, or object-focused alternatives.

PSYCHOSIS: Mindfulness is generally not recommended for people currently experiencing psychosis or who have a history of psychosis-related dissociation. If you know this about a participant, offer them an alternative activity.

CULTURAL SENSITIVITY: Mindfulness has Buddhist roots. Some participants from certain religious backgrounds may have concerns. Acknowledge the secular clinical context clearly.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 44
  // ─────────────────────────────────────────────────────────────
  {
    id: 44,
    topic: 'Creative Arts & Expressive Therapies',
    summary: 'How art, music, movement, and writing support mental health; evidence for arts therapies; hands-on expressive exercises accessible to everyone.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Why Creative Expression Matters',
        bullets: [
          'Creative expression allows processing of experiences that are difficult to put into words',
          'Trauma is often stored somatically — art, movement and music can access non-verbal emotional material',
          'Creativity activates reward pathways; flow states reduce rumination and anxiety',
          'Social prescribing: arts and cultural activities prescribed by GPs to improve wellbeing (NHS England)',
        ],
      },
      {
        title: 'Art Therapy',
        bullets: [
          'Facilitated by HCPC-registered art therapists — distinct from art classes',
          'Used in PTSD, eating disorders, dementia, autism, chronic pain, psychosis',
          'Does not require artistic skill — process over product; the making matters, not the result',
          'Evidence: significant reductions in PTSD symptoms; improved self-esteem and emotional regulation',
        ],
      },
      {
        title: 'Music Therapy',
        bullets: [
          'Active (playing/singing) and receptive (listening) approaches; facilitated by HCPC-registered therapists',
          'Strong evidence in dementia: reduces agitation, improves mood, activates autobiographical memory',
          'Used in autism, depression, anxiety, palliative care, acquired brain injury',
          'Even informal music use — playlist creation, singing in groups — has measurable mood benefits',
        ],
      },
      {
        title: 'Movement & Writing Therapies',
        bullets: [
          'Dance/movement therapy: uses the body as a vehicle for emotional expression and integration',
          'Five Rhythms, Biodanza, authentic movement — group movement practices with therapeutic principles',
          'Expressive writing (Pennebaker paradigm): 15–20 minutes of free emotional writing over 3–4 days reduces distress and improves wellbeing',
          'Journaling: accessible daily practice; reduces anxiety, improves mood, supports trauma processing',
        ],
      },
      {
        title: 'Accessing Arts Therapies in the UK',
        bullets: [
          'NHS: art therapy available via CMHT referral, in CAMHS, dementia care, eating disorder units',
          'Social prescribing link workers: can connect to community arts projects, choirs, creative writing groups',
          'Arts Council England: funds community arts and wellbeing projects',
          'Online: Art Therapy Online; Open Arts; Cultural Care organisations',
          'DIY approaches: sketchbooks, free-writing, playlists, movement — no referral needed',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Why Creative Expression Matters
"Not everything that happens to us can be put into words. Trauma, grief, joy, love — the most profound human experiences are often the ones that language struggles to contain. Creative expression gives us other routes: through making, moving, sounding, writing.

There's solid neuroscience behind this. Trauma is stored not just as narrative memory but as sensory and bodily experience — what Peter Levine calls 'somatic memory'. Talk therapy accesses the verbal parts of the brain. Art, music, and movement can reach the parts that language doesn't get to.

And there's something else: creative flow. When we're absorbed in making something — painting, playing music, writing, dancing — the default mode network quietens. The rumination loop that drives anxiety and depression is interrupted. This isn't incidental to creativity. It is one of its primary mental health mechanisms."

SLIDE 2 — Art Therapy
"Art therapy is not an art class. The goal is not to produce good art — it's to use the process of making as a vehicle for exploring and expressing internal experience. HCPC-registered art therapists are clinically trained mental health professionals who happen to work with creative media.

Art therapy has evidence across a remarkably wide range of presentations. For PTSD, it allows processing of traumatic material through imagery without needing to narrate it directly — which can be safer for some people. For eating disorders, it can help explore body image in non-verbal ways. For dementia, it provides connection and creative engagement long after verbal communication becomes limited.

One of the most important things to communicate to participants who might be hesitant: you don't need to be able to draw. You do not need any artistic skill whatsoever. This is not about technical ability."

SLIDE 3 — Music Therapy
"Music and the brain have a remarkable relationship. Music activates more areas of the brain simultaneously than almost any other activity. It accesses autobiographical memory in profound ways — people with advanced dementia who may not recognise their family can often still sing every word of a song from their youth.

Music therapy has some of its strongest evidence in dementia care: it significantly reduces agitation, improves mood, and temporarily restores communicative capacity. But it is also used with autism, depression, anxiety, premature infants in NICU, and people in palliative care.

Even informal music use has measurable benefits. Creating playlists for different emotional states — what some researchers call 'musical first aid' — is an accessible, free mental health tool. Singing in groups combines music with social connection and physical benefits (controlled breathing, posture). The evidence for community choirs as a mental health intervention is growing."

SLIDE 4 — Movement & Writing Therapies
"Dance and movement therapy uses the body as the primary medium for therapeutic work. The premise is that mind and body are inseparable — that emotion is always physically expressed, even when suppressed. Dance therapists help clients become aware of and work with habitual movement patterns that may reflect psychological material.

For those who find body-based work too exposing, expressive writing is a profoundly accessible alternative. James Pennebaker's research — starting in the 1980s and replicated hundreds of times since — showed that writing about difficult emotional experiences for just 15 to 20 minutes a day over three to four days produces measurable improvements in psychological wellbeing, immune function, and even academic performance. The key is to write about both the facts and the feelings — not just a diary of events, but emotional processing."

SLIDE 5 — Accessing Arts Therapies in the UK
"Arts therapies are available through the NHS — primarily via Community Mental Health Teams, CAMHS, eating disorder services, and dementia care settings — but access varies significantly by area. Social prescribing is expanding access: link workers in GP practices can refer people to community arts projects, choirs, creative writing workshops, and gallery programmes.

For anyone who wants to start without a referral: a sketchbook and some pens, a free-writing notebook, a playlist, a dance in your kitchen — these are legitimate starting points. The therapeutic benefit is in the doing, not in the product, and not exclusively in the formal clinical setting."`,
    activity: `ACTIVITY — Expressive Arts Taster (20 minutes)
Melksham Mental Health | Module 44 | Licensed Materials

PURPOSE: Give participants a direct, low-barrier experience of three expressive arts approaches. No skill required — process over product.

SAFETY NOTE: These activities can evoke emotion. Participants have full permission to modify, skip, or simply observe. Remind the group of the ground rules.

OPTION A — Visual Expression (7 minutes):
Provide paper and pens/markers (or ask participants to draw on any available paper/phone notepad).
Instruction: "Without thinking about it too hard, draw or doodle how you are feeling right now. This is not about artistic ability — it might be shapes, colours, scribbles, a symbol, or something representational. You have 5 minutes."
After drawing, participants write one sentence underneath: "When I look at this, I notice..."
Optional brief share: "Anyone who wants to, describe your image — not what it 'means', just what you notice."

OPTION B — Free-Writing (7 minutes):
Instruction: "Write continuously for 5 minutes. Start with 'Right now I feel...' and keep writing without stopping to edit or cross things out. If you run out of things to say, write 'I don't know what to write' until something else comes. No one will read this — this is only for you."
After writing: fold the paper. Participants can take it away or destroy it.
Brief reflection: "Did anything surprise you in what came out?"

OPTION C — Sound/Music Response (6 minutes):
Play a short piece of music (2–3 minutes — choose something ambient and non-triggering, e.g. slow classical, nature sounds, or a simple melodic piece).
Instruction: "As you listen, let your attention rest on what the music evokes — images, memories, feelings, colours, textures. Just notice. Don't try to analyse."
Afterwards: share one word that captures what the music brought up.`,
    discussionPrompts: [
      'Why do you think creative arts therapies are often seen as "soft" or less serious than talking therapies — and what does this reveal about how we value different ways of knowing and healing?',
      'Have you ever used a creative activity (music, writing, drawing, dance) to process difficult feelings? What happened?',
      'How might arts therapies be especially valuable for people who find verbal therapies difficult — for example, children, people with learning disabilities, trauma survivors, or those from cultures with less verbal therapeutic tradition?',
      'What would it look like to make arts therapies genuinely accessible — not just a luxury for those with NHS referrals or who can pay privately?',
    ],
    resources: [
      { label: 'British Association of Art Therapists (BAAT)', url: 'https://www.baat.org' },
      { label: 'British Association for Music Therapy (BAMT)', url: 'https://www.bamt.org' },
      { label: 'Association for Dance Movement Psychotherapy UK', url: 'https://www.admp.org.uk' },
      { label: 'NHS — Social prescribing: arts and wellbeing', url: 'https://www.england.nhs.uk/personalisedcare/social-prescribing/' },
      { label: 'Mental Health Foundation — the arts and mental health', url: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/arts-and-mental-health' },
    ],
    videos: [
      { label: 'What is art therapy? — BAAT introduction (YouTube)', url: 'https://www.youtube.com/results?search_query=what+is+art+therapy+BAAT+introduction' },
      { label: 'Music therapy and dementia — the evidence (YouTube)', url: 'https://www.youtube.com/results?search_query=music+therapy+dementia+evidence+NHS' },
      { label: 'Expressive writing and mental health — Pennebaker research (YouTube)', url: 'https://www.youtube.com/results?search_query=pennebaker+expressive+writing+mental+health+research' },
    ],
    powerPoint: `MODULE 44 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Creative arts collage imagery on black; 'process over product' as orange tagline
Slide 2: Art therapy examples — abstract images; HCPC credential highlighted; 'no artistic skill needed'
Slide 3: Music and brain activity diagram; dementia evidence statistic in large orange
Slide 4: Two columns — Movement therapies | Writing therapies — Pennebaker stat highlighted
Slide 5: Access pathway diagram — NHS referral, social prescribing, self-directed; orange flow chart
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Creative activities can unexpectedly surface distressing material — trauma memories, grief, or difficult emotions may arise without warning. Be attentive during and after the activity. Give participants time to ground themselves before moving on.

FACILITATION: The key message to communicate repeatedly: no skill or experience required. Anticipate participants saying 'I can't draw' or 'I'm not creative'. Respond: 'You don't need to be. This is about expression, not quality.'

TRAUMA CONSIDERATIONS: Expressive arts can be powerful for trauma processing, but should not be used as trauma therapy without appropriate training. If a participant begins to dissociate or appears overwhelmed, gently offer grounding (feet on floor, name three things you can see) and a break.

DIVERSITY: Music and art have culturally specific meanings. Be sensitive to cultural context when using examples or playing music.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 45
  // ─────────────────────────────────────────────────────────────
  {
    id: 45,
    topic: 'Technology & Mental Health: Screen Time, Gaming & Social Media',
    summary: 'Evidence on how smartphones, social media, and gaming affect mental health; digital addiction; gaming disorder; practical strategies for healthier technology use.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Technology and the Modern Mind',
        bullets: [
          'Average UK adult spends 6+ hours per day on screens; teenagers 7–9 hours (Ofcom 2023)',
          'Smartphones are designed to maximise engagement — variable reward schedules mimic slot machine psychology',
          'Digital technology has transformed social connection, work, health access — not inherently harmful',
          'The question is not screens vs no screens but quality and context of use',
        ],
      },
      {
        title: 'Social Media & Mental Health',
        bullets: [
          'Meta internal research (2021): Instagram makes 32% of teenage girls feel worse about their bodies',
          'Social comparison theory: upward comparison on curated feeds drives envy, inadequacy, depression',
          'FOMO (fear of missing out) and constant availability increase anxiety and reduce downtime',
          'Evidence is mixed: some studies show social connection benefits; passive scrolling is most harmful',
          'Adolescent girls most vulnerable; association with self-harm and eating disorders is significant',
        ],
      },
      {
        title: 'Gaming & Gaming Disorder',
        bullets: [
          'WHO ICD-11 (2022): Gaming Disorder classified as a mental health condition — persistent gaming causing significant impairment',
          'Estimated 1–3% of gamers meet criteria; risk factors include pre-existing depression, ADHD, social anxiety',
          'Gaming has benefits: problem-solving, social connection, stress relief, accessibility for housebound people',
          'Red flags: neglecting basic needs (food, sleep, hygiene), withdrawal symptoms, lying about gaming time, loss of interest in other activities',
        ],
      },
      {
        title: 'Mechanisms of Digital Harm',
        bullets: [
          'Dopamine dysregulation: variable reward schedules (likes, notifications) create compulsive checking',
          'Blue light from screens disrupts melatonin and delays sleep onset (see Module 41)',
          'Cyberbullying: 1 in 5 young people experience online harassment; significant mental health impact',
          'Displacement of beneficial activities: screen time displaces sleep, exercise, face-to-face connection',
          'Attention fragmentation: context-switching reduces deep focus capacity over time',
        ],
      },
      {
        title: 'Healthy Digital Habits',
        bullets: [
          'Digital boundaries: no screens in bed; phone-free mealtimes; screen-free hour before sleep',
          'Intentional use: scheduled check-in times rather than continuous availability',
          'Curate your feed: unfollow accounts that trigger comparison or distress; prioritise uplifting content',
          'Digital detox: planned periods of reduced use — evidence shows mood improvements within 5–7 days',
          'For young people: NICE and CMO guidelines recommend no screens for under-2s; limited supervised use under 5',
          'Help resources: NHS gambling and tech addiction services; Childline for cyberbullying (0800 1111)',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Technology and the Modern Mind
"We'll start by acknowledging something: technology is not the enemy. The internet has transformed access to mental health information, peer support communities, crisis helplines, and talking therapies. Smartphones enable connections across distances, support isolated people, and give access to tools — like mindfulness apps — that genuinely help. The question is never 'screens or no screens' but 'what kind of use, in what contexts, for how long, at what age'.

That said — there are specific, evidence-based concerns about how certain technologies are designed and used. The average UK adult now spends over six hours a day on screens. Teenagers between seven and nine hours. And much of that time is being shaped by product design specifically engineered to maximise the time we spend on platforms — not because that time is good for us, but because it generates revenue."

SLIDE 2 — Social Media & Mental Health
"In 2021, Frances Haugen, a former Facebook data scientist turned whistleblower, published internal company research. One slide became infamous: it showed that Instagram makes 32% of teenage girls feel worse about their bodies — and that Facebook knew this. This wasn't an accident or an oversight. It was research conducted and then largely ignored because the alternative was a less engaging product.

Social comparison is a deeply human tendency — we measure ourselves against others as a way of calibrating our own position. Social media turbocharges this in a particular way: we're comparing our real, complex, messy lives against carefully curated highlight reels. We see the holiday, the promotion, the new relationship. We don't see the arguments, the anxiety, the loneliness behind the photograph.

Research consistently shows that passive scrolling — consuming content without actively connecting — is most associated with poor mental health outcomes. Active use — messaging friends, joining communities with shared interests — has more neutral or even positive effects."

SLIDE 3 — Gaming & Gaming Disorder
"Let's be careful about gaming. The dominant narrative in mainstream media is that gaming is harmful, particularly for young men. The evidence is more nuanced. For most people, gaming is a legitimate leisure activity that provides enjoyment, social connection, problem-solving, and stress relief. For some people who are housebound — due to disability, agoraphobia, or social anxiety — online gaming communities are a primary source of social connection and can be profoundly beneficial.

Gaming Disorder was classified by the WHO in 2022 as a mental health condition: persistent, prioritised gaming that causes significant impairment in personal, family, social, educational, occupational, or other important areas. The estimated prevalence is around 1 to 3% of regular gamers — not trivial, but also not the majority. Pre-existing mental health conditions — particularly depression, ADHD, and social anxiety — significantly increase risk."

SLIDE 4 — Mechanisms of Digital Harm
"How does harmful technology use damage mental health? Several overlapping mechanisms. Variable reward schedules — the unpredictable delivery of likes, comments, notifications — activate the same dopamine pathways as gambling. The unpredictability is the feature, not the bug. It creates compulsive checking behaviour: 'just one more scroll.'

Cyberbullying affects approximately 1 in 5 young people in the UK. Unlike traditional bullying it can follow victims into the home — the one place previously considered safe. The sense of exposure and helplessness associated with cyberbullying is strongly linked to depression, self-harm, and suicidal ideation.

And there's the displacement problem: every hour spent scrolling is an hour not spent sleeping, exercising, or talking face-to-face — activities that have robust mental health benefits."

SLIDE 5 — Healthy Digital Habits
"The good news is that relatively modest behavioural changes have measurable positive effects on mental health. Studies show that reducing social media use to 30 minutes per day leads to significant reductions in loneliness and depression within three weeks. Digital detoxes — planned periods of 5 to 7 days with no or minimal social media — produce mood improvements that participants consistently report as significant.

Some practical principles: treat your phone like a visitor, not a permanent resident. Create phone-free zones — the dinner table, the bedroom. Set specific times to check notifications rather than responding to every alert as it arrives. Audit your social media feeds: if someone's content consistently makes you feel inadequate or anxious, unfollow them. This is a small act of self-care with real impact."`,
    activity: `ACTIVITY — My Digital Life Audit (20 minutes)
Melksham Mental Health | Module 45 | Licensed Materials

PURPOSE: Help participants build honest awareness of their technology use and identify specific, manageable changes.

INTRODUCE: "Before we can change our digital habits, we need to understand them. Most people significantly underestimate how much time they spend on screens. We're going to do an honest audit."

PART 1 — Screen Time Check (3 minutes):
If participants have smartphones, ask them to check their weekly screen time report (Settings > Screen Time / Digital Wellbeing).
- What is your daily average total screen time?
- What are your top 3 most used apps?
- How does the number compare to what you expected?
Note: Participants who don't want to share their numbers absolutely don't have to.

PART 2 — Impact Assessment (7 minutes, individual):
For each of the following, rate honestly (1 = strongly disagree, 5 = strongly agree):
- My phone use helps me feel connected to people
- I often use my phone when I'm bored rather than for a specific reason
- I check my phone first thing in the morning and last thing at night
- Social media makes me feel better about myself
- I have tried to reduce my screen time and found it difficult
- My sleep is affected by phone/screen use
- I feel anxious when I can't check my phone

PART 3 — Behavioural Experiment Design (7 minutes, pairs):
Design a 7-day digital experiment:
Choose ONE specific change to try for 7 days. Examples:
- No phone in the bedroom
- Check social media only at 3 designated times per day (not continuously)
- Delete one app for a week
- No screens for 1 hour before bed
- Unfollow 10 accounts that make you feel worse about yourself
Partner A presents their experiment; Partner B helps make it specific and realistic.
Swap.

PART 3 — Group Reflection (3 minutes):
What is the most common change people are planning? What barriers might get in the way?`,
    discussionPrompts: [
      'Who is responsible for the mental health harms associated with social media — individuals, parents, platforms, or governments? What should each be doing?',
      'How do you think social media affects different generations differently? What do older adults miss that younger people don\'t notice, and vice versa?',
      'Is "digital addiction" a useful concept — or does it pathologise normal behaviour in an increasingly digital world? Where is the line?',
      'What does healthy technology use look like — and how realistic is that in a world where work, relationships, and services are increasingly mediated by screens?',
    ],
    resources: [
      { label: 'NHS — Screen time and mental health', url: 'https://www.nhs.uk/mental-health/children-and-young-people/advice-for-parents/children-and-young-people-screen-time/' },
      { label: 'Childline — cyberbullying support: 0800 1111', url: 'https://www.childline.org.uk/info-advice/bullying-abuse-safety/types-bullying/online-bullying/' },
      { label: 'Internet Matters — digital wellbeing resources for families', url: 'https://www.internetmatters.org' },
      { label: 'Mind — social media and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/online-mental-health/social-media-and-mental-health/' },
      { label: 'Centre for Humane Technology — research and resources', url: 'https://www.humanetech.com' },
    ],
    videos: [
      { label: 'The Social Dilemma — Netflix documentary trailer (YouTube)', url: 'https://www.youtube.com/results?search_query=social+dilemma+netflix+trailer+technology+mental+health' },
      { label: 'Social media and teenage mental health — the evidence (YouTube)', url: 'https://www.youtube.com/results?search_query=social+media+teenage+mental+health+evidence+jonathan+haidt' },
      { label: 'Gaming disorder — WHO classification explained (YouTube)', url: 'https://www.youtube.com/results?search_query=gaming+disorder+WHO+ICD11+explained' },
    ],
    powerPoint: `MODULE 45 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '6+ hours per day' as large orange statistic; phone screen imagery on black
Slide 2: Social comparison diagram — real life vs social media highlight reel; 32% stat in orange
Slide 3: Gaming: benefits vs Gaming Disorder criteria — two columns; WHO classification noted
Slide 4: Four mechanisms infographic — dopamine loop, blue light, cyberbullying, displacement — icons in orange
Slide 5: Healthy digital habits checklist — actionable steps on black; crisis contacts in orange
All slides: Samaritans 116 123 footer, Childline 0800 1111 (for cyberbullying), MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Cyberbullying disclosures may arise during this session — particularly for younger participants. Respond with standard safeguarding protocols. Childline (0800 1111) is free and available 24/7 for under-18s. For adults, the Revenge Porn Helpline is 0345 6000 459.

FACILITATION: Be aware that asking participants to check their screen time data can cause shame or embarrassment. Frame this as data, not judgment. If anyone's numbers feel alarming to them, remind them this is information — a starting point, not a verdict.

GAMING: Challenge stigma around gaming — avoid framing all gaming as problematic. Many participants or their loved ones will game. The goal is harm reduction and awareness of warning signs.

SOCIAL MEDIA: This topic can lead to heated discussion about platform responsibility vs individual responsibility. Facilitate both perspectives; avoid implying that people who struggle with social media are simply weak-willed.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 46
  // ─────────────────────────────────────────────────────────────
  {
    id: 46,
    topic: 'Climate Anxiety & Eco-distress',
    summary: 'Understanding climate anxiety and eco-grief as legitimate psychological responses; evidence-based approaches to managing climate-related distress without paralysis.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'What Is Climate Anxiety?',
        bullets: [
          'Climate anxiety: chronic fear of environmental doom, often accompanied by grief, anger, guilt and helplessness',
          'Distinguished from clinical anxiety disorder — it is a rational response to a real threat',
          '68% of UK adults say climate change causes them significant worry (YouGov 2021); highest in 18–34 age group',
          'Eco-grief: mourning for lost ecosystems, species, and futures — legitimate and growing',
          'Climate emotions range from anxiety to grief to guilt to rage — all are valid and normal',
        ],
      },
      {
        title: 'Who Is Most Affected?',
        bullets: [
          'Young people aged 16–25: 59% say they are very or extremely worried about climate change (Lancet 2021 global survey)',
          'Indigenous and Global South communities: frontline experience of climate impacts',
          'Environmental workers, scientists, and activists: vicarious and direct exposure to loss',
          'People with pre-existing anxiety or depression: amplification of existing distress',
          'Communities hit by flooding, wildfires, or extreme weather: acute trauma and loss',
        ],
      },
      {
        title: 'The Psychology of Climate Distress',
        bullets: [
          'Anticipatory grief: mourning losses that haven\'t yet fully happened but feel certain',
          'Solastalgia: distress caused by change in one\'s home environment (Glenn Albrecht)',
          'Paralysis vs action: anxiety can either motivate change or produce hopeless immobility',
          'Denial and dissociation: psychological defences against unbearable information',
          'Collective vs individual burden: internalising systemic problems as personal failure',
        ],
      },
      {
        title: 'Evidence-Based Approaches',
        bullets: [
          'Acknowledge the validity of climate emotions — do not pathologise or dismiss',
          'Climate Cafés and Good Grief Network: peer support for climate distress',
          'Values-based action: connecting distress to purposeful engagement rather than avoidance',
          'ACT principles: accepting difficult feelings, choosing values-based action, defusing catastrophic thoughts',
          'Community connection: shared action reduces isolation and builds agency',
          'Self-compassion: systemic problems are not individual moral failures',
        ],
      },
      {
        title: 'UK Resources & Support',
        bullets: [
          'Climate Psychology Alliance: clinician support and public resources — climatepsychologyalliance.org',
          'Good Grief Network — 10-step peer support programme for climate distress',
          'Force of Nature — mental health tools for young climate activists',
          'Active Hope (Joanna Macy): work that reconnects with the world',
          'Samaritans 116 123 — if distress becomes overwhelming',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — What Is Climate Anxiety?
"Climate anxiety is not a disorder. Let's start there. When 68% of UK adults report significant worry about climate change, we are not dealing with an irrational phobia. We are dealing with a rational psychological response to a genuinely alarming situation. The question is not how to make the fear go away — it is how to live well and act meaningfully in the presence of that fear.

Climate anxiety sits within a broader field of climate-related psychological experiences. Eco-grief is mourning for what is being lost — species, ecosystems, predictable seasons, a sense of a liveable future. Climate rage is anger at governments, corporations, and systems that continue to choose profit over survival. Climate guilt is the individual's sense of complicity. All of these are real, valid, and increasingly prevalent — especially in younger people who understand that they will live through the consequences of decisions being made now."

SLIDE 2 — Who Is Most Affected?
"The Lancet published a landmark global survey in 2021 looking at climate distress in young people aged 16 to 25 across ten countries. Fifty-nine percent described themselves as very or extremely worried about climate change. Eighty-three percent said people had failed to take care of the planet. Sixty-eight percent said the future was frightening.

These are not young people with clinical anxiety disorders — these are young people accurately perceiving a threat. The psychological burden falls disproportionately on those who are least responsible for the problem and most exposed to its consequences: people in the Global South, Indigenous communities, and the next generation."

SLIDE 3 — The Psychology of Climate Distress
"The Australian philosopher Glenn Albrecht coined the term solastalgia to describe the distress caused by change in one's home environment — the sense of loss felt by communities watching their landscape change irreversibly. This is a useful concept for anyone who has seen flooding devastate a familiar place, or drought transform agricultural land.

One of the central psychological challenges of climate distress is the tension between action and paralysis. Anxiety can be a mobilising force — it can drive people to campaign, change behaviour, connect with community. But when it becomes overwhelming and the scale of the problem feels unbearable, it often tips into hopeless immobility. The psychological task is not to eliminate the anxiety but to channel it."

SLIDE 4 — Evidence-Based Approaches
"The therapeutic literature on climate distress is still developing, but several approaches show promise. Acceptance and Commitment Therapy is particularly well-suited: it works with the principle that difficult emotions don't need to be eliminated before living a meaningful life. We can feel afraid and act anyway. We can feel grief and still choose engagement.

The Good Grief Network's 10-step peer support programme — modelled loosely on 12-step principles but specific to climate distress — has helped thousands of people move from isolation in their climate feelings to collective purpose. The key insight: this is not a problem for individuals to solve alone. It is a collective crisis that requires collective response."

SLIDE 5 — UK Resources
"The Climate Psychology Alliance brings together mental health practitioners working specifically on climate-related distress. They offer resources for both individuals and clinicians. Force of Nature has developed practical psychological tools specifically for young climate activists at risk of burnout. The Good Grief Network operates groups online and in person.

For anyone whose climate distress tips into something more acute — intrusive thoughts, sleep disruption, inability to function — standard mental health support is appropriate: NHS Talking Therapies, GP referral, Samaritans 116 123 in acute distress."`,
    activity: `ACTIVITY — Climate Emotions Mapping & Values Clarification (20 minutes)
Melksham Mental Health | Module 46 | Licensed Materials

PURPOSE: Create a safe space to name and normalise climate emotions; connect distress to purposeful values-based action.

INTRODUCE: "Climate distress is often experienced in silence — people feel embarrassed or overwhelmed by how strongly they feel. This activity creates space to name these feelings without judgment."

PART 1 — Emotions Check-In (5 minutes):
On a sheet of paper, participants draw a simple body outline (or just write without drawing).
In or around the body, write words for any climate-related emotions you carry:
Examples: dread, grief, rage, despair, numbness, guilt, overwhelm, helplessness, urgency, love for the world, fear for the future

Where do you feel these emotions in your body?
How long have you carried them?

PART 2 — What Matters Most (7 minutes, individual then share):
"Climate anxiety is often a signal about what we love and value."
Write answers to:
- What do I most fear losing (specific — a place, a species, a future for someone I love)?
- What do I want to protect?
- What kind of person do I want to be in this crisis?

Optional share in pairs: "The thing I care most about protecting is..."

PART 3 — One Step From Fear to Action (5 minutes, small groups):
Using the ACT framework: feelings are information, not instructions; values point to action.
Groups brainstorm: given what I care about, what ONE small action could I take this month that feels meaningful?
- Join a community project
- Change one behaviour I've been avoiding
- Have a conversation I've been putting off
- Find a climate grief group
- Simply allow myself to feel this without shame

PART 4 — Collective Naming (3 minutes):
Group calls out words for how it feels to talk about this together. Tutor reflects back: "This is not a room full of anxious people — this is a room full of people who care deeply."`,
    discussionPrompts: [
      'Is climate anxiety a mental health problem — or is it the appropriate response of a healthy mind to a genuine emergency? What are the implications of each framing?',
      'How can mental health professionals support people with climate distress without pathologising valid emotional responses?',
      'What is the difference between climate anxiety that motivates action and climate anxiety that leads to paralysis — and what determines which direction it goes?',
      'How should we talk to children and young people about climate change without inducing fear — or is fear sometimes an honest and appropriate response?',
    ],
    resources: [
      { label: 'Climate Psychology Alliance — UK resources and clinician directory', url: 'https://www.climatepsychologyalliance.org' },
      { label: 'Good Grief Network — peer support for climate distress', url: 'https://www.goodgriefnetwork.org' },
      { label: 'Force of Nature — mental health tools for climate activists', url: 'https://www.forceofnature.xyz' },
      { label: 'Mind — eco-anxiety and climate mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/nature-and-mental-health/' },
      { label: 'Samaritans — 116 123 (24/7 free)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'What is climate anxiety? — BBC explainer (YouTube)', url: 'https://www.youtube.com/results?search_query=climate+anxiety+eco+distress+BBC+explainer' },
      { label: 'Good Grief Network — how it works (YouTube)', url: 'https://www.youtube.com/results?search_query=good+grief+network+climate+distress+peer+support' },
      { label: 'Active Hope — Joanna Macy on climate grief (YouTube)', url: 'https://www.youtube.com/results?search_query=joanna+macy+active+hope+climate+grief' },
    ],
    powerPoint: `MODULE 46 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '68% of UK adults' as large orange statistic on black; climate emotions word cloud in white
Slide 2: Global South/young people disproportionate impact graphic; Lancet 59% stat in orange
Slide 3: Solastalgia definition slide; paralysis vs action diagram — two-direction arrows
Slide 4: ACT framework for climate distress — 3 steps in orange on black; Good Grief Network reference
Slide 5: UK resources list — Climate Psychology Alliance, Good Grief Network, Force of Nature — orange links
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Climate distress can intensify existing depression and suicidal ideation, particularly in young people. Monitor the room during the emotions activity. Normalise distress but be attentive to anyone who appears overwhelmed. Have Samaritans (116 123) visible.

FACILITATION: Create genuine psychological safety for this topic. Some participants may feel embarrassed by the depth of their feelings — or conversely, may be dismissive of others' distress. Hold space for the full range without shaming or minimising.

POLITICAL SENSITIVITY: Climate change is a political topic. Keep facilitation focused on psychological wellbeing rather than political debate. The module is about emotional response to climate change, not about policy positions.

HOPELESSNESS: Be attentive to participants who express profound hopelessness. Normalise grief and anxiety; distinguish this from clinical hopelessness that warrants mental health referral.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 47
  // ─────────────────────────────────────────────────────────────
  {
    id: 47,
    topic: 'Spirituality, Religion & Mental Health',
    summary: 'Exploring the complex relationship between spirituality, religion and mental health; protective and risk factors; how mental health services can engage respectfully with spiritual worldviews.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Defining Spirituality & Religion',
        bullets: [
          'Spirituality: a personal sense of meaning, connection, and transcendence — broader than religion',
          'Religion: organised belief systems, practices, communities and doctrines',
          '55% of UK adults describe themselves as non-religious (British Social Attitudes 2023), yet many report spiritual experiences',
          'Spirituality and mental health research spans diverse traditions: Christianity, Islam, Judaism, Hinduism, Buddhism, secular spirituality',
          'The two are distinct but overlapping; both can be protective or harmful depending on context',
        ],
      },
      {
        title: 'Spirituality as a Protective Factor',
        bullets: [
          'Religious attendance associated with lower rates of depression, suicide, and substance misuse in multiple large studies',
          'Mechanisms: community belonging, structured meaning-making, coping rituals, hope',
          'Prayer and meditation share neurological features; both activate calm and reduce cortisol',
          'Sense of purpose and coherence in suffering — "this has meaning" — is a significant buffer against despair',
          'Forgiveness practices: associated with reduced anger, lower blood pressure, improved mental health',
        ],
      },
      {
        title: 'When Religion & Spirituality Harm',
        bullets: [
          'Religious trauma: spiritual abuse, shame-based theology, rejection, and coercive control in religious contexts',
          'LGBTQ+ people in non-affirming religious communities: significantly elevated depression, anxiety, and suicide risk',
          'Conversion therapy: banned in England (2023) but still practiced globally; causes severe psychological harm',
          'Scrupulosity: OCD variant characterised by religious obsessions and compulsions',
          'Spiritual bypassing: using spiritual beliefs to avoid addressing psychological problems',
        ],
      },
      {
        title: 'Mental Health Services & Spiritual Care',
        bullets: [
          'NICE guidelines: spiritual/religious beliefs should be explored as part of holistic assessment',
          'NHS Chaplaincy: spiritual and pastoral care available in most NHS hospitals and hospices',
          'Cultural competence: understanding diverse faith traditions and not pathologising normal religious experiences',
          'Distinguishing spiritual experience from psychosis: critical and often complex clinical assessment',
          'Collaborative care: working with faith communities, chaplains, and community leaders',
        ],
      },
      {
        title: 'UK Resources & Signposting',
        bullets: [
          'Mind — Spirituality and mental health resources',
          'NHS Chaplaincy services — available in hospitals; some community chaplains',
          'Spiritual Crisis Network — support for spiritual emergencies and unusual experiences',
          'Survivors Voice (religious trauma and spiritual abuse support)',
          'Mermaids and Stonewall — LGBTQ+ support including for those in religious contexts',
          'Samaritans 116 123 — 24/7 support regardless of belief',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Defining Spirituality & Religion
"This is one of the most personal topics we will cover in this course — and one of the most important to handle with care. Spirituality and religion touch our deepest questions: what is the meaning of my life, why do I suffer, what happens when I die, am I connected to something larger than myself?

Let's be precise about the terms. Religion refers to organised systems of belief, practice, community, and doctrine — Christianity, Islam, Judaism, Hinduism, Buddhism, and so on. Spirituality is broader: a sense of meaning, purpose, connection, and transcendence that may or may not involve organised religion. Many people who describe themselves as non-religious — and in the UK that's now a majority — nonetheless report spiritual experiences: a sense of awe in nature, a feeling of connection to something larger, a search for meaning that goes beyond the material.

Both can profoundly affect mental health, and they can do so in strikingly different directions."

SLIDE 2 — Spirituality as a Protective Factor
"The research is clear: active religious participation is associated with lower rates of depression, suicide, and substance misuse. These are robust findings across multiple studies and multiple traditions. Why?

Several mechanisms operate simultaneously. Community belonging — having a group of people who share your worldview and care about your wellbeing — is one of the strongest protective factors against mental ill-health. Structured meaning-making — the capacity to say 'my suffering has meaning within a larger narrative' — is a profound buffer against despair. The existential question 'why is this happening to me?' is one of the most destabilising questions a human being can face, and religious and spiritual frameworks offer answers.

Prayer and meditation share neurological features — they both activate the parasympathetic nervous system, reduce cortisol, and promote calm. Whether or not you believe in the metaphysical claims involved, the psychological and physiological effects are real and measurable."

SLIDE 3 — When Religion & Spirituality Harm
"The relationship between religion and mental health is not straightforwardly positive. Religious communities can also be sites of profound harm.

Religious trauma is a growing area of clinical attention — a pattern of psychological harm resulting from spiritual abuse, shame-based theology, coercive religious control, or the experience of religious rejection. People who have been told they are sinful, shameful, or damned — particularly in childhood — can carry that damage into adulthood in ways that present clinically as depression, anxiety, complex PTSD, and difficulties with self-worth.

LGBTQ+ people in non-affirming religious contexts face dramatically elevated rates of depression, anxiety, self-harm, and suicide. Conversion therapy — the practice of attempting to change someone's sexual orientation or gender identity — was banned in England in 2023, but continues to operate globally and causes severe psychological harm. This is not a matter of opinion: it is a matter of evidence."

SLIDE 4 — Mental Health Services & Spiritual Care
"NICE guidelines are clear that spiritual and religious beliefs should be explored as part of holistic mental health assessment. This is not about endorsing any particular belief — it's about understanding what matters to this person, what their worldview is, and how their spiritual life is affecting their mental health.

One of the most complex clinical challenges in this area is distinguishing spiritual experience from psychosis. Hearing the voice of God, receiving visions, or having profound experiences of divine presence are reported across many religious traditions — and are entirely normal within those contexts. The same experience, in a different context, might be a symptom of a first episode of psychosis. Good clinical practice requires cultural competence, consultation with faith community leaders, and careful functional assessment rather than reflexive pathologising."

SLIDE 5 — UK Resources
"The Spiritual Crisis Network supports people having unusual spiritual experiences — including spiritual emergencies — that may be frightening or overwhelming. NHS Chaplaincy provides pastoral and spiritual care in hospitals; some areas have community chaplains. The NHS also has multi-faith chaplaincy resources for patients of all traditions.

For people who have experienced harm in religious contexts, Survivors Voice provides specific support. For LGBTQ+ people navigating religious identities, both Stonewall and Mermaids have dedicated resources."`,
    activity: `ACTIVITY — Spiritual Lifeline (20 minutes)
Melksham Mental Health | Module 47 | Licensed Materials

PURPOSE: Enable participants to explore the role of spirituality and meaning in their own lives and consider how this intersects with mental health. This activity is deeply personal and entirely voluntary.

SAFETY NOTE: This activity can evoke strong emotion. Respect everyone's privacy. Nothing shared here should be judged or challenged.

INTRODUCE: "This is a personal exploration — not a test of belief, not a debate. There are no right answers."

PART 1 — Personal Meaning Map (8 minutes, individual):
Draw or write your "meaning map" — the sources of meaning, purpose, and transcendence in your life (religious or secular):
- What gives your life a sense of purpose?
- Where do you turn when things are very hard?
- Do you have any practices that help you feel connected (prayer, meditation, time in nature, ritual, community)?
- What do you believe happens after death? Does this affect how you live?
- Has your sense of meaning or spirituality ever changed significantly?

PART 2 — Spiritual Timelines (5 minutes, pairs):
Share (only what you are comfortable sharing): one moment when your sense of meaning or spirituality supported you, and one time when a religious or spiritual experience added to your distress (or one time when the absence of a spiritual framework felt like a loss).

PART 3 — Reflections on Practice (5 minutes, small groups):
As future practitioners:
- How would you approach the topic of religion and spirituality in a mental health assessment?
- What would you need to know about someone's faith to support them well?
- What are the risks of ignoring someone's spiritual worldview in therapy?

PART 4 — Group Debrief (2 minutes):
One word from each person describing something they'll carry from this activity.`,
    discussionPrompts: [
      'How should mental health practitioners navigate their own religious beliefs (or lack of them) when working with clients from different traditions?',
      'Where is the line between religious experience and psychosis — and who has the authority to draw it?',
      'How has the decline of organised religion in the UK affected the mental health landscape — for better or worse?',
      'What obligations do faith communities have towards members with mental health difficulties — and what are the limits of what they can or should provide?',
    ],
    resources: [
      { label: 'Mind — spirituality and mental health', url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/spirituality-and-mental-health/' },
      { label: 'Spiritual Crisis Network — support for spiritual emergencies', url: 'https://spiritualcrisisnetwork.uk' },
      { label: 'NHS Chaplaincy — spiritual care in the NHS', url: 'https://www.england.nhs.uk/chaplaincy/' },
      { label: 'Stonewall — LGBTQ+ support including religious contexts', url: 'https://www.stonewall.org.uk' },
      { label: 'Samaritans — 116 123 (24/7, no belief required)', url: 'https://www.samaritans.org' },
    ],
    videos: [
      { label: 'Spirituality and mental health — NHS perspective (YouTube)', url: 'https://www.youtube.com/results?search_query=spirituality+mental+health+NHS+religion+wellbeing' },
      { label: 'Religious trauma syndrome explained (YouTube)', url: 'https://www.youtube.com/results?search_query=religious+trauma+syndrome+mental+health+explained' },
      { label: 'Distinguishing spiritual experience from psychosis (YouTube)', url: 'https://www.youtube.com/results?search_query=spiritual+experience+psychosis+difference+clinical+assessment' },
    ],
    powerPoint: `MODULE 47 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: Spirituality vs religion definition diagram — Venn overlap; '55% non-religious' UK stat in orange
Slide 2: Community/meaning/prayer — three protective mechanisms as icons on black
Slide 3: Religious harm categories — trauma, LGBTQ+ rejection, conversion therapy — with ban date highlighted
Slide 4: Clinical framework — distinguishing spiritual experience from psychosis; NICE guidance note
Slide 5: UK resources — Spiritual Crisis Network, NHS Chaplaincy, Stonewall — orange links on black
All slides: Samaritans 116 123 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: This session may surface disclosures of religious abuse, LGBTQ+ rejection in faith contexts, or spiritual crises. Respond with standard safeguarding protocols and warm signposting. Do not attempt to resolve theological questions or validate or challenge specific beliefs.

FACILITATION: You are likely to have participants with a wide range of religious and non-religious views. The goal is not consensus — it is respectful exploration. Be particularly careful not to allow dismissive comments about religious belief, or to allow any tradition to be singled out for criticism.

YOUR OWN BELIEFS: Be transparent about the role of your own beliefs (if any) and model respectful curiosity. This is not a space for proselytising or for debunking.

LGBTQ+ PARTICIPANTS: Be attentive to any participants who are both LGBTQ+ and religious. This intersection can involve significant ongoing pain. Affirm both identities.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 48
  // ─────────────────────────────────────────────────────────────
  {
    id: 48,
    topic: "Men's Mental Health & Masculinity",
    summary: "How masculinity norms shape men's relationship with mental health; the statistics on male suicide; evidence-based approaches to engaging men in mental health support.",
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: "The Male Mental Health Crisis",
        bullets: [
          'Men account for 75% of all UK suicides — approximately 4,000 deaths per year (ONS 2022)',
          'Men are significantly less likely to seek help: only 36% of NHS Talking Therapies referrals are male',
          'Middle-aged men (45–59) are the highest-risk group for suicide in the UK',
          'Men are more likely to use alcohol and drugs to cope with emotional distress',
          'Men die earlier than women in part due to poorer mental and physical health help-seeking',
        ],
      },
      {
        title: 'Masculinity & Help-Seeking',
        bullets: [
          'Traditional masculinity norms: self-reliance, stoicism, emotional control, toughness, provider role',
          'Alexithymia: difficulty identifying and describing emotional states — more prevalent in men',
          'The phrase "man up" encapsulates the cultural pressure to suppress vulnerability',
          '"Boys don\'t cry": messages received in childhood shape adult help-seeking across a lifetime',
          'Male identity closely tied to work — redundancy, retirement, and failure become existential threats',
        ],
      },
      {
        title: 'What Works for Men',
        bullets: [
          'Activity-based engagement: men often talk better while doing something (walking, sport, DIY)',
          '"Shed" model: Men\'s Sheds movement — practical activity + peer connection = mental health benefit',
          'Peer support: other men sharing experience — normalises help-seeking without clinical framing',
          'Language adjustment: "stress management" and "performance" often more accessible than "mental health"',
          'Trusted messengers: GPs, coaches, employers, male friends — more effective than clinical advertising',
        ],
      },
      {
        title: 'Intersectionality: Which Men?',
        bullets: [
          'Black men face stigma within cultural norms and racism within mental health services — double barrier',
          'Working-class men: economic insecurity, limited time, cost barriers, cultural stoicism',
          'Young men (15–24): second highest suicide rate group; social media, isolation, academic and social pressures',
          'LGBTQ+ men: higher rates of depression, anxiety, and suicide than heterosexual men',
          'Men in prison: 70% of prison population has two or more mental health conditions',
        ],
      },
      {
        title: 'UK Services & Campaigns',
        bullets: [
          'Campaign Against Living Miserably (CALM): 0800 58 58 58 — specifically for men',
          'Movember Foundation: funds male mental health research and community programmes',
          "Men's Sheds Association UK — community sheds as mental health resource",
          'Andy\'s Man Club — peer support groups across the UK; free; every Monday',
          'Heads Together: royally-backed campaign normalising mental health conversations for men',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — The Male Mental Health Crisis
"Seventy-five percent of all suicide deaths in the UK are male. That is approximately 4,000 men every year — more than eleven men every single day. This is one of the starkest public health statistics in the country, and it is largely invisible in public discourse.

Meanwhile, men account for only 36% of referrals to NHS Talking Therapies — despite experiencing mental health difficulties at rates broadly comparable to women. The gap between need and help-seeking is enormous. And it is not explained by men having fewer mental health problems — it is explained by a set of cultural, social, and structural factors that make it much harder for men to reach out, and much harder for services to reach in."

SLIDE 2 — Masculinity & Help-Seeking
"To understand why men don't seek help, we need to understand masculinity — not as biology but as a social construction that is taught, enforced, and internalised from early childhood.

Traditional masculinity norms cluster around certain themes: self-reliance (real men handle their own problems), stoicism (real men don't show weakness), emotional control (real men don't cry), and the provider role (a man's worth is measured by what he provides). These are not just individual beliefs — they are socially enforced. Deviation is punished with ridicule and exclusion.

Alexithymia — difficulty identifying and describing emotional states — is significantly more prevalent in men. This is not a fixed biological trait. It is the predictable result of teaching boys from infancy that emotional expression is unacceptable. You cannot seek help for feelings you have never been allowed to name."

SLIDE 3 — What Works for Men
"The evidence on effective male engagement in mental health support points consistently towards a few principles. Activity-based engagement is one of the most important: many men find it easier to talk about difficult things while doing something physical — walking, fixing a car, working with wood. The direct face-to-face therapeutic gaze of traditional talking therapy can feel confrontational or exposing; side-by-side activity removes that.

The Men's Sheds movement has spread across the UK for exactly this reason. Men gather in sheds to build things, fix things, and work on projects. Peer conversation happens naturally. Mental health support happens without a clinical label. The evidence for improvements in loneliness, depression, and social isolation from Men's Sheds is growing.

Andy's Man Club — free peer support groups meeting every Monday across the UK — uses the same principle: men talking to men, in a non-clinical setting, without professional facilitation. This normalises help-seeking in a way that clinical services often can't."

SLIDE 4 — Intersectionality: Which Men?
"We need to be careful not to talk about 'men' as a monolith. The barriers and risks are not uniform across men.

Black men face a double burden: the cultural stigma around mental health that operates within many Black communities — 'strong Black man' narratives — and the racism they encounter within mental health services, including over-diagnosis with psychosis and under-diagnosis with depression. Working-class men face economic barriers, time pressures, and cultural environments where vulnerability is particularly costly. LGBTQ+ men experience higher rates of depression, anxiety, and suicide than heterosexual men — with the additional strain of navigating identity in a world that is still hostile to queerness."

SLIDE 5 — UK Services & Campaigns
"CALM — the Campaign Against Living Miserably — runs a free helpline specifically designed for men: 0800 58 58 58, open from 5 pm to midnight every day. Andy's Man Club meets every Monday in locations across the UK — free, peer-facilitated, and specifically for men over 18.

Movember funds male mental health programmes globally and has been significant in normalising conversations about men's mental health. The Men's Sheds Association has over 600 sheds across the UK. These are not clinical services — they are community resources that reach men who would never walk into a GP surgery or therapy room."`,
    activity: `ACTIVITY — The Man Box (20 minutes)
Melksham Mental Health | Module 48 | Licensed Materials

PURPOSE: Use the 'Man Box' framework to explore how masculinity norms are taught and enforced; develop strategies for supporting men in breaking free from them.

INTRODUCE: "The 'Man Box' is a concept developed by anti-violence educator Paul Kivel to describe the rigid social rules that define 'real' manhood. We're going to map it together and then think about how it affects mental health."

PART 1 — Build the Man Box (7 minutes, small groups):
Each group draws a large box on a piece of paper.
INSIDE the box — write messages that define "real" masculinity (what men are told they should be/do/feel):
Examples: strong, provider, don't cry, tough, in control, sexual, never ask for help, fix things, take it like a man...

OUTSIDE the box — write what happens to men who break these rules:
Examples: wimp, weak, gay (used pejoratively), soft, loser, failure...

Groups share their boxes: "Does this feel familiar?"

PART 2 — Impact on Mental Health (5 minutes):
Pairs discuss: How does living inside the man box affect mental health?
Consider: Help-seeking, emotional expression, relationships, identity when the box's demands can't be met (e.g. redundancy, illness, ageing), coping strategies (alcohol, anger, withdrawal)

PART 3 — Service Design Challenge (5 minutes, small groups):
"You have been commissioned to design a mental health service that actually reaches men who would never normally seek help. It has a budget for one intervention."
Groups have 3 minutes to design their intervention. Present in 30 seconds each.
Debrief: what principles emerge? (Activity-based, peer-led, in trusted environments, reframed language)

PART 4 — Closing Reflection (3 minutes):
Anyone in the room who identifies as male (if comfortable): what is one message from the man box you are actively trying to unlearn?`,
    discussionPrompts: [
      "Why do men die by suicide at nearly three times the rate of women — and why has this gap been so persistent despite decades of mental health awareness campaigns?",
      "Is traditional masculinity itself a risk factor for mental ill-health — or is it a protective identity that services need to engage with rather than challenge?",
      "How should mental health services be redesigned to be more accessible and culturally relevant to men?",
      "What is the role of fathers, male role models, and schools in building emotionally literate boys — and what would this look like in practice?",
    ],
    resources: [
      { label: "CALM — Campaign Against Living Miserably: 0800 58 58 58", url: "https://www.thecalmzone.net" },
      { label: "Andy's Man Club — free peer support every Monday", url: "https://andysmanclub.co.uk" },
      { label: "Men's Sheds Association UK", url: "https://menssheds.org.uk" },
      { label: "Movember Foundation — men's mental health", url: "https://uk.movember.com" },
      { label: "Mind — men and mental health", url: "https://www.mind.org.uk/information-support/tips-for-everyday-living/men-and-mental-health/" },
    ],
    videos: [
      { label: "The Man Box — masculinity and mental health explained (YouTube)", url: "https://www.youtube.com/results?search_query=man+box+masculinity+mental+health+men+suicide" },
      { label: "Andy's Man Club — how it works (YouTube)", url: "https://www.youtube.com/results?search_query=andys+man+club+peer+support+men+mental+health" },
      { label: "CALM — male suicide and prevention (YouTube)", url: "https://www.youtube.com/results?search_query=CALM+male+suicide+prevention+UK" },
    ],
    powerPoint: `MODULE 48 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '75% of UK suicides are male' as large orange statistic; '4,000 men per year' on black
Slide 2: Man Box diagram — inside/outside rules illustrated; alexithymia definition highlighted
Slide 3: Three evidence-based approaches — activity-based, peer support, language reframe — orange icons
Slide 4: Four intersections — Black men, working-class, LGBTQ+, young men — brief barriers listed
Slide 5: CALM 0800 58 58 58, Andy's Man Club, Men's Sheds logos — orange on black
All slides: Samaritans 116 123, CALM 0800 58 58 58 footer, MMH logo bottom-right, licence watermark`,
    tutorNotes: `SAFEGUARDING: Male suicide is a core topic of this module. If any participant is personally affected — whether themselves or a bereavement — respond with sensitivity and standard signposting. CALM (0800 58 58 58) is specifically designed for men; Samaritans (116 123) for everyone.

FACILITATION: Be aware of the gender composition of your group. If predominantly male, create psychological safety for personal reflection. If mixed, manage group dynamics so that men do not feel watched or judged. The Man Box activity should feel illuminating, not accusatory.

WOMEN IN THE GROUP: Avoid framing this as 'men's problems vs women's' — women are often gatekeepers and key supports in men's help-seeking. Frame as a shared societal issue.

DIVERSITY: Challenge stereotypes while acknowledging statistical patterns. 'Men' is not monolithic.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 49
  // ─────────────────────────────────────────────────────────────
  {
    id: 49,
    topic: 'Military & Veteran Mental Health',
    summary: 'The psychological impact of military service; PTSD, moral injury, and transition challenges; specialist UK veteran mental health services.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'The Mental Health Burden of Military Service',
        bullets: [
          'UK armed forces: approximately 150,000 regular personnel; 2.4 million veterans in England',
          'Combat-related PTSD affects approximately 6–7% of UK veterans — higher for those in combat roles',
          'Alcohol misuse is significantly elevated: approximately 67% of male service personnel drink at hazardous levels (KCL research)',
          'Veterans are at higher suicide risk than the general population, particularly under-24s who have deployed',
          'Mental health stigma in military culture is a significant barrier — seeking help is seen as weakness',
        ],
      },
      {
        title: 'PTSD in Military Contexts',
        bullets: [
          'Military PTSD: flashbacks, nightmares, hypervigilance, avoidance — driven by combat, IED incidents, witnessing death',
          'Delayed onset PTSD: symptoms often emerge after leaving service, not during it — average gap 14 years',
          'Complex PTSD (C-PTSD): prolonged exposure to traumatic conditions; added features of emotional dysregulation, identity disruption, shame',
          'Evidence-based treatments: EMDR, trauma-focused CBT — NICE recommended; effective for military populations',
          'Comorbidities: depression, alcohol misuse, chronic pain, traumatic brain injury often co-occur',
        ],
      },
      {
        title: 'Moral Injury',
        bullets: [
          'Moral injury: psychological harm from perpetrating, witnessing, or failing to prevent acts that violate one\'s moral code',
          'Different from PTSD — driven by guilt, shame, and betrayal rather than fear',
          'Common in military: killing in combat, civilian casualties, orders followed that felt wrong, comrades lost due to command decisions',
          'Also affects medics, peacekeepers, and intelligence personnel',
          'Moral injury increases suicide risk independently of PTSD',
        ],
      },
      {
        title: 'Transition: Leaving Service',
        bullets: [
          'Leaving the military involves loss of identity, purpose, structure, and community simultaneously',
          'Transition to civilian life: unemployment, homelessness, and relationship breakdown are elevated',
          '6% of UK prison population is veterans; overrepresentation linked to untreated mental health and transition failure',
          'Reserve forces and their families: often overlooked; lack access to same welfare support as regulars',
          'Families of serving personnel: secondary trauma, deployment anxiety, frequent relocation',
        ],
      },
      {
        title: 'UK Veteran Support Services',
        bullets: [
          'Combat Stress: 0800 138 1619 — specialist veteran mental health charity; therapy and crisis support',
          'Op COURAGE: NHS specialist veteran mental health service — nationwide',
          'SSAFA: Armed Forces charity — welfare and mental health support',
          'Veterans\' Gateway: 0808 802 1212 — first point of contact for veteran support',
          'Samaritans: 116 123 — also offer specific veteran support programmes',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — The Mental Health Burden of Military Service
"There are approximately 2.4 million veterans in England. Many served in conflicts in Northern Ireland, the Falklands, the Gulf, Bosnia, Iraq, and Afghanistan. They return to civilian life carrying experiences that most of us will never encounter — and they often do so in silence.

Combat-related PTSD affects approximately 6 to 7% of UK veterans — but this rises significantly for those who served in front-line combat roles. Alcohol misuse is dramatically elevated: research from King's College London found that approximately 67% of male service personnel drink at hazardous levels. Mental health stigma in military culture is profound — seeking help is seen as weakness, as a threat to career, and as letting down your unit.

The critical fact about veteran mental health: it often doesn't surface until years after leaving service. The average gap between experiencing a traumatic event in service and seeking treatment is 14 years. Services need to be designed with this long latency in mind."

SLIDE 2 — PTSD in Military Contexts
"Military PTSD follows the familiar pattern of intrusion, avoidance, hyperarousal, and negative cognitions — but the content is specific to military experience: flashbacks to IED explosions, nightmares of combat, hypervigilance in crowded public spaces, inability to drive without scanning for threats.

Delayed onset is a feature that distinguishes military PTSD from some other presentations. During service, the demands of operational life, the social support of the unit, and the sense of purpose can contain symptoms. When someone leaves — loses the structure, the identity, the camaraderie — the containment goes, and the symptoms emerge.

The treatments work. EMDR — Eye Movement Desensitisation and Reprocessing — and trauma-focused CBT have strong evidence for military PTSD. The challenge is getting veterans into treatment. Op COURAGE — the NHS specialist veteran mental health service — provides a dedicated pathway."

SLIDE 3 — Moral Injury
"Moral injury is a concept that has transformed our understanding of veteran mental health. It was developed by psychiatrist Jonathan Shay and later by Brett Litz and colleagues to describe psychological harm that results from actions — or failures to act — that violate deeply held moral beliefs.

It is distinct from PTSD. PTSD is driven by fear — the nervous system response to life-threatening events. Moral injury is driven by guilt and shame — 'I did something wrong', 'I should have done something', 'the people in command betrayed us', 'innocent people died because of decisions I made or followed.' These are moral and existential wounds, not primarily anxiety disorders.

Moral injury increases suicide risk independently of PTSD. It responds less well to standard PTSD treatments and requires therapeutic approaches that address meaning, shame, and moral reckoning."

SLIDE 4 — Transition: Leaving Service
"Leaving military service is one of the most psychologically disorienting transitions a person can make. The military provides total structure: it tells you where to be, what to wear, what to do, who your community is, and why your life matters. Leaving means losing all of that simultaneously.

Rates of unemployment, homelessness, and relationship breakdown are significantly elevated in the veteran population in the immediate post-service period. Six percent of the UK prison population is veterans — a profound overrepresentation that reflects untreated mental health, the effects of alcohol misuse, and the failure of transition support.

Reserve forces — those who serve part-time — and their families are often invisible in this conversation. They may deploy to combat zones and return home with traumatic stress, but then return to civilian employment without any structured welfare support."

SLIDE 5 — UK Veteran Support Services
"Combat Stress is the UK's leading veteran mental health charity. They provide specialist therapy including for PTSD and moral injury, and a crisis line on 0800 138 1619 available 24/7. Op COURAGE is the NHS's dedicated veteran mental health service — referrals via GP or self-referral. Veterans' Gateway on 0808 802 1212 is a single point of contact that can direct veterans and families to appropriate support across a wide range of needs."`,
    activity: `ACTIVITY — Understanding Moral Injury (20 minutes)
Melksham Mental Health | Module 49 | Licensed Materials

PURPOSE: Develop a nuanced understanding of moral injury distinct from PTSD; build skills in supporting veterans and others with moral injury.

INTRODUCE: "Moral injury is a concept that applies beyond the military — it is relevant to anyone who has acted in ways that violated their values, or witnessed such actions. But it is most clearly understood through military experience."

PART 1 — Case Study Analysis (8 minutes, small groups):
Read and discuss two scenarios:

SCENARIO A — Corporal James, 34:
James served in Afghanistan. During a patrol, a decision was made by his commanding officer to call in an air strike on a compound suspected of harbouring insurgents. Three civilians, including two children, were killed. James was present and followed orders. He has flashbacks, not to the event itself, but to the faces of the children. He drinks heavily. He says: "I wasn't afraid. I was just wrong."
- Is this PTSD? Moral injury? Both?
- What does James need? What might not help?

SCENARIO B — Corporal Sarah, 28:
Sarah served as a medic. On three occasions, she was ordered to continue moving during contact and leave injured comrades who later died. She is tortured by the thought that she could have saved them if she had stayed. She has since left the forces. She says: "I followed my training. I still feel like a coward."
- What moral injuries does Sarah carry?
- How would you approach a conversation with her?

PART 2 — Distinguishing PTSD from Moral Injury (5 minutes):
Groups complete a two-column table:
Left: PTSD features (fear-based, flashbacks, hypervigilance, avoidance)
Right: Moral injury features (guilt/shame, violation of values, betrayal by leaders, "I did wrong")
Where do they overlap?

PART 3 — What Would Help? (5 minutes):
Groups discuss: what therapeutic approaches might address moral injury that standard PTSD treatment might not?
(Consider: narrative therapy, meaning-making, forgiveness, ethical reflection, community, spiritual care)

PART 4 — Reflection (2 minutes):
"Who else — beyond military personnel — experiences moral injury?"`,
    discussionPrompts: [
      'Why does mental health stigma remain so powerful in military culture — and what would have to change, culturally and structurally, for this to shift?',
      'Is moral injury a psychological disorder, a moral crisis, a spiritual wound — or all three? What are the treatment implications of each framing?',
      'How should the state balance its duty of care to veterans with the political need not to highlight the psychological costs of the wars it fights?',
      'What does the overrepresentation of veterans in prison tell us about the adequacy of transition support and the criminal justice system?',
    ],
    resources: [
      { label: 'Combat Stress — veteran mental health charity: 0800 138 1619', url: 'https://www.combatstress.org.uk' },
      { label: "Op COURAGE — NHS specialist veteran mental health service", url: 'https://www.nhs.uk/nhs-services/armed-forces-and-veterans-healthcare/' },
      { label: "Veterans' Gateway — 0808 802 1212", url: 'https://www.veteransgateway.org.uk' },
      { label: 'SSAFA — Armed Forces charity', url: 'https://www.ssafa.org.uk' },
      { label: 'Samaritans — veteran-specific support programmes', url: 'https://www.samaritans.org/support-us/our-campaigns/armed-forces/' },
    ],
    videos: [
      { label: 'What is moral injury? — Jonathan Shay explained (YouTube)', url: 'https://www.youtube.com/results?search_query=moral+injury+veterans+jonathan+shay+explained' },
      { label: 'Op COURAGE — NHS veteran mental health service (YouTube)', url: 'https://www.youtube.com/results?search_query=Op+COURAGE+NHS+veteran+mental+health+service' },
      { label: 'PTSD in veterans — treatment and recovery (YouTube)', url: 'https://www.youtube.com/results?search_query=PTSD+veterans+UK+treatment+recovery+EMDR' },
    ],
    powerPoint: `MODULE 49 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '2.4 million veterans in England' in large orange; '75% male suicide' stat cross-reference
Slide 2: Military PTSD infographic — delayed onset timeline; treatment options in orange
Slide 3: Moral injury vs PTSD — two-column comparison table; guilt/shame vs fear highlighted
Slide 4: Transition challenges — identity loss, unemployment, prison stat — timeline diagram
Slide 5: Combat Stress 0800 138 1619, Op COURAGE, Veterans' Gateway 0808 802 1212 — orange on black
All slides: Combat Stress 0800 138 1619 and Samaritans 116 123 footer, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING: Veterans are a high-risk group for suicide. If any participant discloses significant distress, current suicidal ideation, or active military trauma, respond with warmth, do not probe for details, and signpost to Combat Stress (0800 138 1619, 24/7) and Samaritans (116 123).

VETERANS IN THE ROOM: Be attentive to any participants with military backgrounds. This session can be triggering. Allow veterans to opt out of discussions or activities at any point without explanation.

MORAL INJURY: The moral injury case studies involve civilian casualties. Handle with care and sensitivity. The goal is understanding, not simulation of trauma.

POLITICS: Avoid political commentary on specific military operations or conflicts. The module is about psychological welfare, not foreign policy.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },

  // ─────────────────────────────────────────────────────────────
  // MODULE 50
  // ─────────────────────────────────────────────────────────────
  {
    id: 50,
    topic: 'Prison, the Legal System & Mental Health',
    summary: 'Mental health in the criminal justice system; the disproportionate burden of mental illness in prison; pathways into and out of the cycle of offending and detention.',
    sessionBreakdown: SESSION_BREAKDOWN,
    slideOutline: [
      {
        title: 'Mental Health & the Criminal Justice System',
        bullets: [
          '70% of people entering prison have two or more mental health conditions (Prison Reform Trust)',
          'The prison population is a concentration of the most disadvantaged: childhood trauma, poverty, abuse, addiction, homelessness',
          'Prison itself causes and worsens mental illness: isolation, violence, loss of autonomy, uncertainty',
          '10 times more people with severe mental illness are in prison than in psychiatric hospitals in the UK',
          'Self-harm in prison is at record levels: 69,000+ incidents per year (HMPPS 2022)',
        ],
      },
      {
        title: 'The Pipeline: From Adversity to Prison',
        bullets: [
          '24% of UK prisoners were in care as children (compared to 1% of the general population)',
          'ACEs (Adverse Childhood Experiences): the more ACEs, the higher the likelihood of offending and incarceration',
          'Neurodevelopmental conditions: 25–30% of offenders have ADHD; autism is significantly overrepresented',
          'Learning disabilities: estimated 7–10% of prison population have a learning disability — often unidentified',
          'Homelessness to prison pipeline: over 40% of people leaving prison have nowhere to live',
        ],
      },
      {
        title: 'Mental Health in Prison',
        bullets: [
          'Depression, anxiety, and PTSD are all far more prevalent in prison than in the general population',
          'Substance misuse: over 60% of people in prison have a drug dependency',
          'Suicide in prison: rate is approximately 10× higher than in the general population (Ministry of Justice)',
          'ACCT (Assessment, Care in Custody and Teamwork): the key suicide prevention framework in English prisons',
          'Women in prison: particularly high rates of abuse history, self-harm, and severe mental illness',
        ],
      },
      {
        title: 'Pathways to Change',
        bullets: [
          'Liaison and Diversion schemes: identify mental health needs at point of arrest/court; divert to treatment',
          'Mental Health Treatment Requirements (MHTR): community sentence alternative to prison for people with mental illness',
          'Psychologically Informed Planned Environments (PIPEs): therapeutic prison environments for complex needs',
          'Prison healthcare: NHS provides healthcare in prisons — but staffing, access, and quality vary enormously',
          'Release planning: without housing, benefits, and mental health support on release, reoffending is almost inevitable',
        ],
      },
      {
        title: 'UK Resources & Advocacy',
        bullets: [
          'Prison Reform Trust — research, advocacy, and family support',
          'Revolving Doors Agency — campaign for better mental health and criminal justice links',
          'Nacro — rehabilitation and mental health support for people in the criminal justice system',
          'Prisoner Advice Service: 0808 802 0060 — legal advice and welfare support',
          'Samaritans in prison: listener schemes — trained prisoners provide peer support',
        ],
      },
    ],
    deliveryScript: `SLIDE 1 — Mental Health & the Criminal Justice System
"Seventy percent of people entering prison in the UK have two or more mental health conditions. Read that again. Not ten percent. Not twenty. Seventy. The prison population is not a random cross-section of society. It is a concentration of people who have experienced the most severe adversity — childhood abuse and neglect, poverty, homelessness, addiction, neurodevelopmental difficulties — and who have received the least mental health support throughout their lives.

There are currently approximately 85,000 people in English and Welsh prisons. That means we are imprisoning more people with severe mental illness than we are treating in psychiatric hospitals. This is not an accident or an oversight. It is the consequence of decades of community mental health underfunding, housing shortages, and a criminal justice system that has become a de facto mental health system — one profoundly ill-equipped to provide care."

SLIDE 2 — The Pipeline: From Adversity to Prison
"The pathway from childhood adversity to adult imprisonment is well-documented. Twenty-four percent of UK prisoners were in local authority care as children — compared to 1% of the general population. The relationship between adverse childhood experiences — abuse, neglect, household dysfunction — and later offending is one of the most robust findings in criminological research.

Neurodevelopmental conditions are dramatically overrepresented. Approximately 25 to 30% of offenders have ADHD. Autism is significantly overrepresented. Learning disabilities — often unidentified — affect an estimated 7 to 10% of the prison population. People who could not access support from educational and health systems end up inside a system that is even less equipped to support them."

SLIDE 3 — Mental Health in Prison
"Prison does not treat mental illness. In many cases, it causes it. The features of the prison environment — isolation, unpredictability, violence, loss of autonomy, separation from family — are the very features most destructive to mental health.

The suicide rate in prison is approximately ten times higher than in the general population. Self-harm incidents in English and Welsh prisons exceeded 69,000 in a single year. Women in prison have particularly high rates of severe mental illness, sexual abuse histories, and self-harm — and yet women's prisons have consistently received fewer mental health resources than men's.

The ACCT system — Assessment, Care in Custody and Teamwork — is the primary suicide prevention framework in English prisons. It involves regular monitoring of at-risk prisoners. It is imperfect and understaffed, but it is the main safety net."

SLIDE 4 — Pathways to Change
"The evidence on what actually reduces the cycle of imprisonment is clear, even if the political will to implement it is not. Liaison and Diversion schemes — which identify mental health needs at the point of arrest or court appearance and divert people into treatment rather than prison — are cost-effective and reduce reoffending. Mental Health Treatment Requirements allow courts to mandate mental health treatment as a condition of a community sentence, keeping people out of prison entirely.

Release planning is perhaps the single most critical intervention. When someone leaves prison without housing, without benefits that have been set up, without a mental health appointment, and without social support — reoffending within a year is the most likely outcome. The revolving door is not a metaphor. It is a policy choice."

SLIDE 5 — UK Resources & Advocacy
"The Prison Reform Trust does vital research and advocacy work on mental health in the criminal justice system — their reports are essential reading for anyone working in this area. Revolving Doors Agency campaigns specifically on the link between mental illness, substance misuse, and repeated contact with the criminal justice system. Nacro provides rehabilitation and mental health support.

The Samaritans listener scheme trains prisoners to provide peer emotional support to fellow inmates — this is one of the most effective mental health interventions in prisons, precisely because it uses the peer trust that clinical services often lack."`,
    activity: `ACTIVITY — The Revolving Door: A System Mapping Exercise (20 minutes)
Melksham Mental Health | Module 50 | Licensed Materials

PURPOSE: Help participants understand the systemic pathways that lead to and perpetuate imprisonment; develop critical thinking about intervention points.

INTRODUCE: "The term 'revolving door' describes the experience of people who cycle repeatedly through the criminal justice system — arrest, court, prison, release, repeat. We're going to map the system to understand why this happens — and where it could be interrupted."

PART 1 — Build the Timeline (8 minutes, small groups):
Groups map a fictional person's journey from childhood to repeated imprisonment:
Character: Marcus, 32. In care from age 8. Excluded from school at 14. First arrest at 16 (theft). First prison sentence at 19. Released; no housing. Homeless within a month. Second arrest. Released again. Currently on his fourth sentence.

At each stage, groups mark:
- What mental health / support needs were present?
- What systems did Marcus encounter?
- What did each system fail to do?
- Where was the missed opportunity for intervention?

PART 2 — Intervention Design (7 minutes):
Groups choose ONE intervention point from their map and design a specific evidence-based intervention:
- What problem does it address?
- Who delivers it?
- What does it cost?
- What outcome would you measure?

PART 3 — Present & Debrief (5 minutes):
Each group shares their intervention. Whole group: where is the highest-leverage intervention point across all the options presented?

Note to tutor: Common high-leverage points include: early childhood support, care leaver mental health, Liaison and Diversion at arrest/court, and post-release housing and benefits support.`,
    discussionPrompts: [
      'Is it ethical to imprison people whose offending is directly caused by severe mental illness or neurodevelopmental conditions — and if not, what should we do instead?',
      'Why does the UK continue to imprison people with severe mental illness at such high rates despite the evidence that prison worsens mental health and increases reoffending?',
      'What would a genuinely rehabilitative criminal justice system look like — and what would have to change, politically and financially, to achieve it?',
      'How should mental health professionals engage with the criminal justice system without becoming instruments of surveillance and control?',
    ],
    resources: [
      { label: 'Prison Reform Trust — research and family support', url: 'https://prisonreformtrust.org.uk' },
      { label: 'Revolving Doors Agency — mental health and criminal justice', url: 'https://www.revolving-doors.org.uk' },
      { label: 'Nacro — rehabilitation and reintegration support', url: 'https://www.nacro.org.uk' },
      { label: 'Prisoner Advice Service: 0808 802 0060', url: 'https://www.prisoneradvice.org.uk' },
      { label: 'Samaritans Listener Scheme in prisons', url: 'https://www.samaritans.org/about-samaritans/our-work/our-work-in-prisons/' },
    ],
    videos: [
      { label: 'Mental health in prison — the crisis (YouTube)', url: 'https://www.youtube.com/results?search_query=mental+health+prison+UK+crisis+reform' },
      { label: 'Liaison and Diversion — how it works (YouTube)', url: 'https://www.youtube.com/results?search_query=liaison+diversion+criminal+justice+mental+health+NHS' },
      { label: 'ACEs and the pipeline to prison (YouTube)', url: 'https://www.youtube.com/results?search_query=adverse+childhood+experiences+ACEs+prison+pipeline+UK' },
    ],
    powerPoint: `MODULE 50 POWERPOINT SPECIFICATION — Melksham Mental Health
Brand: Black (#0a0a0a), orange (#f97316), white (#ffffff)
Slide 1: '70% of prisoners have 2+ mental health conditions' as full-width orange statistic on black
Slide 2: Pipeline diagram — ACEs to care to exclusion to prison; each stage in orange on black
Slide 3: Mental health statistics — depression, PTSD, suicide rate comparison infographic
Slide 4: Intervention pathway — Liaison & Diversion, MHTR, PIPE, release planning — flow diagram in orange
Slide 5: Resources list — Prison Reform Trust, Revolving Doors, Nacro, Prisoner Advice Service — orange links
All slides: Samaritans 116 123 footer, Prisoner Advice Service 0808 802 0060, MMH logo, licence watermark`,
    tutorNotes: `SAFEGUARDING: Some participants may have personal experience of the criminal justice system — as offenders, as victims, or as family members. Hold space for this without probing. The case study activity uses a fictional character but may feel very close to home for some. Allow people to opt out.

FACILITATION: This module can provoke strong reactions — both compassion and punitive attitudes towards people who have offended. Facilitate without silencing either, but ensure the evidence is heard: most people in prison have experienced profound disadvantage and have received virtually no support.

VICTIM PERSPECTIVE: Be sensitive to participants who have been victims of crime. The module's focus on offender mental health should not be framed as dismissing or minimising harm to victims.

POLITICAL SENSITIVITY: Criminal justice is politically contested. Focus on mental health evidence rather than partisan positions on sentencing or rehabilitation policy.

LICENCE: Licensed to registered user only. Not for redistribution.`,
  },
];

/** Look up a single module guide by ID */
export function getModuleGuide(id: number): ModuleGuide | undefined {
  return moduleGuides.find((g) => g.id === id);
}
