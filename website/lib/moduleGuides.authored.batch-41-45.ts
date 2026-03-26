import type { ModuleGuide, SessionSegment } from './moduleGuides.ts';

type Slide = { title: string; bullets: string[]; notes: string[] };
type Definition = Omit<ModuleGuide, 'slideOutline' | 'deliveryScript'> & { slides: Slide[] };

const TIMES = ['0-10 min', '10-25 min', '25-40 min', '40-60 min', '60-80 min', '80-100 min', '100-120 min'];

function buildSessionBreakdown(labels: string[]): SessionSegment[] {
  return TIMES.map((time, index) => ({ time, label: labels[index] ?? labels[labels.length - 1] ?? 'Module delivery' }));
}

function buildDeliveryScript(slides: Slide[]): string {
  return slides.map((slide, index) => `SLIDE ${index + 1} - ${slide.title}\n\n${slide.notes.join('\n\n')}`).join('\n\n');
}

function guide(definition: Definition): ModuleGuide {
  const { slides, ...rest } = definition;
  return {
    ...rest,
    slideOutline: slides.map(({ title, bullets }) => ({ title, bullets })),
    deliveryScript: buildDeliveryScript(slides),
  };
}

function resource(label: string, url: string) {
  return { label, url };
}

export const AUTHORED_MODULE_GUIDES_BATCH_41_45: Record<number, ModuleGuide> = {
  41: guide({
    id: 41,
    topic: 'Sleep Hygiene and Circadian Health',
    summary: 'A practical module on sleep routine, circadian rhythm, realistic sleep habits and when sleep problems need assessment.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and why sleep matters',
      'Circadian rhythm and sleep pressure',
      'Sleep hygiene that actually helps',
      'What to do when sleep stays poor',
      'Activity: make a sleep plan that fits real life',
      'Discussion on habits, shift work and barriers',
      'Wrap-up and next steps',
    ]),
    slides: [
      {
        title: 'Sleep Is a Core Health Process',
        bullets: [
          'Sleep affects mood, attention, stress and physical recovery.',
          'Poor sleep can worsen anxiety, depression and irritability.',
          'Circadian rhythm is the body clock that helps regulate sleep and waking.',
          'Small routine changes can make a real difference.',
        ],
        notes: [
          'Open by making sleep a health foundation rather than a lifestyle extra.',
          'Keep the tone practical and avoid over-technical explanations.',
        ],
      },
      {
        title: 'What Good Sleep Hygiene Looks Like',
        bullets: [
          'Regular wake time helps anchor the body clock.',
          'Light exposure, movement and meals during the day support sleep at night.',
          'Avoiding caffeine late in the day can help.',
          'The bedroom should feel restful and predictable.',
        ],
        notes: [
          'Explain sleep hygiene as a set of habits and environmental cues, not a rigid bedtime ritual.',
          'Keep the advice realistic for people with caring roles, shift work or chronic stress.',
        ],
      },
      {
        title: 'When Sleep Advice Is Not Enough',
        bullets: [
          'Insomnia can become persistent and needs specific treatment.',
          'Sleep apnoea, narcolepsy and parasomnias need medical assessment.',
          'Shift work and irregular schedules can disrupt the body clock.',
          'Tiredness can create safety risks at work and on the road.',
        ],
        notes: [
          'Teach the difference between ordinary poor sleep and sleep disorders that need further assessment.',
          'Make the safety angle explicit.',
        ],
      },
      {
        title: 'Common Barriers',
        bullets: [
          'Stress, screen use, grief and pain can all keep sleep problems going.',
          'Perfectionism around sleep often makes things worse.',
          'Caring responsibilities and shift work need tailored advice.',
          'Good sleep planning should fit real life.',
        ],
        notes: [
          'Encourage practical planning rather than idealised bedtime rules.',
          'Make it clear that the plan must be usable on a bad day.',
        ],
      },
      {
        title: 'A Realistic Sleep Plan',
        bullets: [
          'Choose one change to the evening routine.',
          'Choose one change to the bedroom environment.',
          'Choose one change to the morning routine.',
          'Review the plan after a week rather than expecting instant fixes.',
        ],
        notes: [
          'Close with a small, testable plan.',
          'The goal is consistency, not perfection.',
        ],
      },
    ],
    activity: 'ACTIVITY - Make the Plan Real: design a sleep plan for a busy week, then simplify it twice until it feels sustainable.',
    discussionPrompts: [
      'Why do people blame themselves for sleep problems?',
      'When is sleep hygiene enough and when does someone need assessment?',
      'How do work patterns change sleep advice?',
      'What one change would help your own sleep most this week?',
    ],
    resources: [
      resource('NHS - Sleep problems', 'https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/'),
      resource('NHS - Insomnia', 'https://www.nhs.uk/conditions/insomnia/'),
      resource('NHS - Sleep apnoea', 'https://www.nhs.uk/conditions/sleep-apnoea/'),
      resource('NHS - Narcolepsy', 'https://www.nhs.uk/conditions/narcolepsy/'),
    ],
    tutorNotes: 'Keep the pacing steady. Many participants will already be sleep deprived.',
    powerPoint: 'Use simple circadian and routine visuals. Avoid clutter.',
  }),
  42: guide({
    id: 42,
    topic: 'Nutrition, Exercise and Mental Health',
    summary: 'A balanced module on food, movement, mood, sleep, energy and the limits of lifestyle advice.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and expectations',
      'Nutrition, energy and mood',
      'Exercise as a mental health support',
      'Why extremes do not help',
      'Activity: build a practical wellbeing week',
      'Discussion on barriers and access',
      'Wrap-up and next steps',
    ]),
    slides: [
      {
        title: 'Food and Mood',
        bullets: [
          'Regular meals support energy, concentration and mood stability.',
          'Low blood sugar and dehydration can look like emotional distress.',
          'Nutrition is part of mental health, not a cure-all.',
          'The aim is consistency, not perfection.',
        ],
        notes: [
          'Teach food as a stabiliser rather than a morality topic.',
          'Keep the focus on functioning and routine.',
        ],
      },
      {
        title: 'Exercise Helps Mental Health',
        bullets: [
          'Physical activity can reduce anxiety and stress and lift mood.',
          'It can also improve sleep and self-esteem.',
          'Any amount of movement is better than none.',
          'The best activity is one the person can keep doing.',
        ],
        notes: [
          'Use movement as a realistic support, not a punishment.',
          'Do not frame exercise as an obligation to earn wellbeing.',
        ],
      },
      {
        title: 'Extremes Backfire',
        bullets: [
          'All-or-nothing diets are hard to maintain.',
          'Punishing exercise plans usually fail.',
          'Skipping meals can worsen mood and irritability.',
          'Rigid rules increase shame and drop-out.',
        ],
        notes: [
          'This module should resist diet-culture messaging.',
          'Practical, moderate habits are more sustainable.',
        ],
      },
      {
        title: 'Barriers Matter',
        bullets: [
          'Pain, disability, finances and time all affect movement and food choices.',
          'People need plans that fit their circumstances.',
          'Access to affordable food and safe places to move matters.',
          'Support should be realistic and non-judgemental.',
        ],
        notes: [
          'Do not blame people for structural barriers.',
          'Context always matters.',
        ],
      },
      {
        title: 'A Small Weekly Plan',
        bullets: [
          'Choose one food habit that supports routine.',
          'Choose one movement habit that feels doable.',
          'Choose one barrier to reduce this week.',
          'Review and adjust rather than restart from scratch.',
        ],
        notes: [
          'End with one small plan the group could actually use.',
          'The goal is steadier habits, not a lifestyle overhaul.',
        ],
      },
    ],
    activity: 'ACTIVITY - Build a practical wellbeing week with one food habit, one movement habit and one barrier to reduce.',
    discussionPrompts: [
      'Why do extreme diets often fail?',
      'How can exercise help mental health without becoming punishment?',
      'What barriers stop people eating or moving well?',
      'What is one realistic change that would help most people here?',
    ],
    resources: [
      resource('NHS - Be active for your mental health', 'https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/be-active-for-your-mental-health/'),
      resource('NHS - Exercise for depression', 'https://www.nhs.uk/conditions/stress-anxiety-depression/exercise-for-depression/'),
      resource('NHS - Eat well', 'https://www.nhs.uk/live-well/eat-well/'),
      resource('NHS - Every Mind Matters', 'https://www.nhs.uk/every-mind-matters/'),
    ],
    tutorNotes: 'Avoid diet talk and moralising. Keep the focus on sustainable habits and access.',
    powerPoint: 'Use clean lifestyle diagrams and avoid body-shaming imagery.',
  }),
  43: guide({
    id: 43,
    topic: 'Mindfulness, Meditation and Breathwork',
    summary: 'A practical introduction to mindfulness, breath regulation and when calming techniques help or do not help.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and what mindfulness is',
      'Attention, awareness and grounding',
      'Breathwork for stress and panic',
      'When mindfulness is not the right first step',
      'Activity: try a short grounding practice',
      'Discussion on access, culture and fit',
      'Wrap-up and next steps',
    ]),
    slides: [
      {
        title: 'Mindfulness Means Paying Attention on Purpose',
        bullets: [
          'Mindfulness is noticing the present moment without immediately reacting.',
          'It can help with stress and reactivity.',
          'It is a skill that improves with practice.',
          'It is not about emptying the mind.',
        ],
        notes: [
          'Keep the definition simple and usable.',
          'Avoid treating mindfulness as a moral achievement.',
        ],
      },
      {
        title: 'Breathwork Can Help Regulate Stress',
        bullets: [
          'Slow breathing can calm the body when stress is rising.',
          'Paced breathing should feel gentle and not forced.',
          'The technique works best when practised before a crisis.',
          'Some people need other grounding tools as well.',
        ],
        notes: [
          'Use breathing as a practical regulation tool.',
          'Do not force breathwork if it makes someone feel worse.',
        ],
      },
      {
        title: 'When to Be Careful',
        bullets: [
          'Mindfulness is not a cure for trauma or severe distress.',
          'Some people find inward focus overwhelming.',
          'Grounding, movement or social support may work better.',
          'The right tool depends on the person and the moment.',
        ],
        notes: [
          'This slide matters because not every calming exercise fits every person.',
          'Choose support to match need, not trend.',
        ],
      },
      {
        title: 'Practice Matters',
        bullets: [
          'Short, regular practice is easier to maintain.',
          'Start small and keep it simple.',
          'Use everyday moments rather than waiting for a perfect space.',
          'Notice what helps and what does not.',
        ],
        notes: [
          'Keep the exercises accessible.',
          'The aim is a usable habit, not a perfect technique.',
        ],
      },
      {
        title: 'What Good Support Looks Like',
        bullets: [
          'Explain the purpose of the exercise.',
          'Invite choice and opt-out.',
          'Offer alternatives such as grounding or movement.',
          'Respect cultural, religious and personal differences.',
        ],
        notes: [
          'Mindfulness works best when it is offered, not imposed.',
          'Choice matters.',
        ],
      },
    ],
    activity: 'ACTIVITY - Try a 3-minute grounding practice and then identify one version that would suit you better.',
    discussionPrompts: [
      'What is the difference between mindfulness and relaxation?',
      'When does breathwork help and when might it not?',
      'How do we make calming techniques inclusive?',
      'What is the smallest practice that might be sustainable?',
    ],
    resources: [
      resource('NHS - Breathing exercises for stress', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/'),
      resource('NHS - Bedtime meditation video', 'https://www.nhs.uk/live-well/sleep-and-tiredness/bedtime-meditation/'),
      resource('NHS - Mindfulness and relaxation resources', 'https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/meditation-and-mindfulness/'),
      resource('NHS England - Headspace', 'https://www.england.nhs.uk/supporting-our-nhs-people/support-now/wellbeing-apps/headspace/'),
    ],
    tutorNotes: 'Keep it invitational. Some participants will prefer movement or external grounding.',
    powerPoint: 'Use quiet visual language and avoid overcomplicated instructions.',
  }),
  44: guide({
    id: 44,
    topic: 'Creative Arts and Expressive Therapies',
    summary: 'A module on art, music and drama therapies, creativity, communication and emotional processing in NHS settings.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and what creative therapies are',
      'Art, music and drama as therapeutic tools',
      'Who creative therapies can help',
      'What the evidence-based role looks like',
      'Activity: create without performance pressure',
      'Discussion on access, identity and safety',
      'Wrap-up and signposting',
    ]),
    slides: [
      {
        title: 'Creative Therapies Use Making, Not Perfection',
        bullets: [
          'The goal is expression and communication, not producing good art.',
          'Creative therapies can support people who struggle to find words.',
          'Process matters more than performance.',
          'Choice and safety are central.',
        ],
        notes: [
          'Open by removing the fear of being judged on artistic skill.',
          'This is about expression and meaning, not performance.',
        ],
      },
      {
        title: 'Art, Music and Drama',
        bullets: [
          'Art therapy can help people explore thoughts and feelings visually.',
          'Music therapy can support expression, regulation and connection.',
          'Drama therapy can use role play and structured activity safely.',
          'Different forms suit different people.',
        ],
        notes: [
          'Teach the basic distinctions without overcomplicating the field.',
          'Emphasise fit and preference.',
        ],
      },
      {
        title: 'What They Can Help With',
        bullets: [
          'Disturbing thoughts, mood, withdrawal and communication difficulties.',
          'Stress, low self-worth and social isolation.',
          'Difficulties with emotion expression.',
          'Support for people who do not respond well to talking alone.',
        ],
        notes: [
          'Connect creative therapies to communication and wellbeing.',
          'Keep the explanation practical.',
        ],
      },
      {
        title: 'What Good Delivery Needs',
        bullets: [
          'Trained practitioners and a safe setting.',
          'Consent, pacing and collaboration.',
          'Clear referral and review routes.',
          'Not everyone wants or needs creative therapies, and that is fine.',
        ],
        notes: [
          'Explain that these are real therapies, not generic activities.',
          'Choice and boundaries matter.',
        ],
      },
      {
        title: 'Creativity Can Be Accessible',
        bullets: [
          'You do not need to be good at art, music or drama to benefit.',
          'Small, simple creative tasks can reduce pressure.',
          'The point is expression and reflection.',
          'A low-pressure approach supports safety.',
        ],
        notes: [
          'Make participation feel possible for everyone.',
          'Avoid turning the exercise into a skills test.',
        ],
      },
    ],
    activity: 'ACTIVITY - Create without performance pressure: a short, low-stakes drawing, rhythm or role-play exercise focused on expression rather than skill.',
    discussionPrompts: [
      'Why can creative therapies help people who struggle to talk?',
      'What makes a creative space feel safe?',
      'How do we avoid turning the activity into a talent test?',
      'Who might benefit most from a non-verbal therapeutic approach?',
    ],
    resources: [
      resource('Health Careers NHS - Art therapy', 'https://www.healthcareers.nhs.uk/printpdf/91'),
      resource('CNWL Arts Psychotherapies Service', 'https://www.cnwl.nhs.uk/professionals/cnwl-arts-psychotherapies-service'),
      resource('Surrey and Borders Partnership NHS - Arts therapies', 'https://www.sabp.nhs.uk/our-services/mental-health/arts-therapy'),
      resource('Great Ormond Street Hospital - Music therapy', 'https://www.gosh.nhs.uk/patients-and-families/support-services/music-therapy/about-music-therapy/'),
    ],
    tutorNotes: 'Keep the activity low-pressure and non-judgemental.',
    powerPoint: 'Use simple visual examples and leave space for the creative process.',
  }),
  45: guide({
    id: 45,
    topic: 'Technology and Mental Health',
    summary: 'A balanced module on screen time, gaming, social media, digital habits, sleep disruption and healthier use of tech.',
    sessionBreakdown: buildSessionBreakdown([
      'Welcome and the digital environment',
      'How technology affects mood and attention',
      'Gaming, scrolling and habit loops',
      'Sleep, boundaries and online safety',
      'Activity: redesign a digital day',
      'Discussion on benefits, harms and balance',
      'Wrap-up and next steps',
    ]),
    slides: [
      {
        title: 'Technology Can Help and Harm',
        bullets: [
          'Tech can connect people, deliver support and reduce isolation.',
          'It can also fragment attention and extend stress.',
          'The question is not tech or no tech.',
          'The question is how it is used and how it affects the person.',
        ],
        notes: [
          'Start with balance rather than panic.',
          'Avoid a simplistic anti-tech message.',
        ],
      },
      {
        title: 'Habit Loops and Overuse',
        bullets: [
          'Scrolling, gaming and notifications can become automatic habits.',
          'Reward loops make it hard to stop once started.',
          'Late-night use can damage sleep.',
          'Using tech to avoid feelings can keep distress going.',
        ],
        notes: [
          'Explain habit loops in plain language.',
          'Make the sleep link explicit.',
        ],
      },
      {
        title: 'Gaming and Problem Use',
        bullets: [
          'Gaming is not inherently harmful.',
          'For some people, control over gaming becomes a real problem.',
          'Impact on sleep, work, school or relationships matters.',
          'Support should look at function and context.',
        ],
        notes: [
          'Do not moralise gaming.',
          'Focus on impairment and balance.',
        ],
      },
      {
        title: 'Social Media and Comparison',
        bullets: [
          'Social media can support connection but also comparison and pressure.',
          'Curated content can distort what is normal.',
          'Boundaries and content choices matter.',
          'The effect differs from person to person.',
        ],
        notes: [
          'Keep the message specific and practical.',
          'Avoid treating all screen time as the same problem.',
        ],
      },
      {
        title: 'Healthier Digital Use',
        bullets: [
          'Set boundaries for notifications and bedtime use.',
          'Choose times to check rather than checking constantly.',
          'Use tech intentionally rather than by default.',
          'Review what leaves you feeling better or worse.',
        ],
        notes: [
          'End with simple boundary ideas people can actually try.',
          'Small changes are more likely to stick.',
        ],
      },
    ],
    activity: 'ACTIVITY - Redesign a digital day: map one normal day and choose three changes that reduce stress or protect sleep.',
    discussionPrompts: [
      'When does tech help connection and when does it become a problem?',
      'How does gaming affect the rest of life when it is out of balance?',
      'What online boundaries would help sleep the most?',
      'What is one digital habit you would change first?',
    ],
    resources: [
      resource('NHS - Every Mind Matters', 'https://www.nhs.uk/every-mind-matters/'),
      resource('NHS - Self-help', 'https://www.nhs.uk/mental-health/self-help/'),
      resource('NHS England - Social media guidance', 'https://www.england.nhs.uk/long-read/social-media/'),
      resource('NHS - Gaming disorder treatment', 'https://www.england.nhs.uk/2023/03/nhs-treats-hundreds-with-gaming-disorders/'),
    ],
    tutorNotes: 'Keep the tone balanced. Tech is part of life, not a moral failing.',
    powerPoint: 'Use simple habit-loop visuals and practical boundary examples.',
  }),
};
