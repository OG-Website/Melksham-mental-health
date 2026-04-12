export interface SupportLink {
  title: string;
  description: string;
  url: string;
  phone?: string;
}

export interface SupportSection {
  title: string;
  description?: string;
  links: SupportLink[];
}

export const womensSupportSections: SupportSection[] = [
  {
    title: 'Periods, pain and hormonal health',
    description: 'Core NHS guidance for period health, heavy bleeding and pain that is affecting daily life.',
    links: [
      {
        title: 'NHS - Periods',
        description: 'Overview of periods, what is normal, and when changes need checking.',
        url: 'https://www.nhs.uk/conditions/periods/',
      },
      {
        title: 'NHS - Heavy periods',
        description: 'Signs, treatment options and when to speak to a GP about heavy bleeding.',
        url: 'https://www.nhs.uk/conditions/heavy-periods/',
      },
      {
        title: 'NHS - Period pain',
        description: 'Pain relief guidance and red flags for when pelvic or period pain needs urgent review.',
        url: 'https://www.nhs.uk/symptoms/period-pain/',
      },
    ],
  },
  {
    title: 'Stalking, abuse and relationship safety',
    description: 'Police and specialist services for stalking, coercive control, domestic abuse and unsafe partners.',
    links: [
      {
        title: 'Wiltshire Police - Clare\'s Law application',
        description: 'Apply for a Domestic Violence Disclosure Scheme check on a current or former partner.',
        url: 'https://www.wiltshire.police.uk/rqo/request/ri/request-information/cl/triage/v2/request-information-under-clares-law/',
      },
      {
        title: 'Wiltshire Police - Where else to report',
        description: 'Wiltshire guidance for anonymous reporting, online abuse and domestic abuse support options.',
        url: 'https://www.wiltshire.police.uk/police-forces/wiltshire-police/areas/campaigns/campaigns/we-are-listening/where-else-to-report/',
      },
      {
        title: 'National Domestic Abuse Helpline',
        description: '24/7 confidential support for women affected by domestic abuse.',
        url: 'https://www.nationaldahelpline.org.uk/',
        phone: '0808 2000 247',
      },
      {
        title: 'Report Harmful Content - Intimate image abuse',
        description: 'Guidance on reporting non-consensual intimate images and harmful online content.',
        url: 'https://reportharmfulcontent.com/harms/intimate-image-abuse/',
      },
      {
        title: 'Revenge Porn Helpline',
        description: 'Specialist UK support for adults affected by intimate image abuse and sextortion.',
        url: 'https://revengepornhelpline.org.uk/information-and-advice/need-help-and-advice/intimate-images-shared-without-consent/',
      },
    ],
  },
  {
    title: 'Money, child maintenance and practical support',
    description: 'Practical UK help when a parent is not contributing financially or when you need legal and money guidance.',
    links: [
      {
        title: 'Child Maintenance Service',
        description: 'Official GOV.UK service for arranging, reviewing or enforcing child maintenance.',
        url: 'https://www.gov.uk/child-maintenance-service',
      },
      {
        title: 'Citizens Advice - Child maintenance',
        description: 'Independent help understanding child maintenance, arrears and enforcement options.',
        url: 'https://www.citizensadvice.org.uk/family/children-and-young-people/child-maintenance/child-maintenance/',
      },
    ],
  },
];

export const mensSupportSections: SupportSection[] = [
  {
    title: 'Talking therapies and mental health treatment',
    description: 'Direct routes into NHS mental health support and crisis support for men who want to engage early.',
    links: [
      {
        title: 'NHS Talking Therapies',
        description: 'NHS guidance on accessing talking therapies for anxiety, depression and related conditions.',
        url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/',
      },
      {
        title: 'Samaritans',
        description: '24/7 free emotional support for anyone in distress or at risk.',
        url: 'https://www.samaritans.org/',
        phone: '116 123',
      },
      {
        title: 'CALM',
        description: 'Helpline and webchat support, often used by men dealing with crisis, isolation or suicidal thoughts.',
        url: 'https://www.thecalmzone.net/',
        phone: '0800 58 58 58',
      },
    ],
  },
  {
    title: 'Fatherhood, family and pregnancy support',
    description: 'Support for men trying to show up as partners and fathers, including pregnancy and early parenting guidance.',
    links: [
      {
        title: 'NHS Start for Life - Advice for partners during pregnancy',
        description: 'NHS guidance for partners and fathers on supporting pregnancy, appointments and birth.',
        url: 'https://www.nhs.uk/start-for-life/pregnancy/advice-for-partners/',
      },
      {
        title: 'Child Maintenance Service',
        description: 'Official GOV.UK route for maintenance responsibilities, payments and disputes.',
        url: 'https://www.gov.uk/child-maintenance-service',
      },
      {
        title: 'Gingerbread',
        description: 'Support, rights advice and practical guidance for single parents and separated families.',
        url: 'https://www.gingerbread.org.uk/',
      },
    ],
  },
  {
    title: 'Abuse, control and support for men',
    description: 'Men can also be victims of domestic abuse, coercive control and stalking.',
    links: [
      {
        title: 'ManKind Initiative',
        description: 'UK support and service directory for male victims of domestic abuse.',
        url: 'https://mankind.org.uk/',
        phone: '0808 800 1170',
      },
      {
        title: 'Wiltshire Police - Where else to report',
        description: 'Wiltshire guidance on reporting abuse, online harm, public abuse and anonymous options.',
        url: 'https://www.wiltshire.police.uk/police-forces/wiltshire-police/areas/campaigns/campaigns/we-are-listening/where-else-to-report/',
      },
    ],
  },
];

export const pregnancySupportSections: SupportSection[] = [
  {
    title: 'First steps after finding out you are pregnant',
    description: 'Official NHS guidance on what to do next, booking midwifery care and getting support early.',
    links: [
      {
        title: 'NHS - What to do when you find out you are pregnant',
        description: 'First-step NHS guidance after a positive pregnancy test.',
        url: 'https://www.nhs.uk/pregnancy/finding-out/what-to-do-when-you-find-out-youre-pregnant/',
      },
      {
        title: 'NHS Start for Life - Pregnancy',
        description: 'NHS pregnancy hub covering antenatal appointments, mental health, birth and newborn care.',
        url: 'https://www.nhs.uk/start-for-life/pregnancy/',
      },
    ],
  },
  {
    title: 'If the pregnancy is unplanned or you are unsure',
    description: 'Balanced routes for information, counselling and NHS-funded services.',
    links: [
      {
        title: 'BPAS - Pregnancy options',
        description: 'Options counselling and abortion information from a major UK provider.',
        url: 'https://www.bpas.org/abortion-care/considering-abortion/pregnancy-options/abortion/',
      },
      {
        title: 'MSI Reproductive Choices - I am pregnant, what are my options?',
        description: 'Independent UK information on pregnancy options and support.',
        url: 'https://www.msichoices.org.uk/support/i-am-pregnant-what-are-my-options/',
      },
    ],
  },
  {
    title: 'Wiltshire and nearby maternity services',
    description: 'Local maternity service routes commonly used around Melksham and Wiltshire.',
    links: [
      {
        title: 'Royal United Hospitals Bath - Antenatal care',
        description: 'Bath maternity information, antenatal care and patient resources.',
        url: 'https://www.ruh.nhs.uk/patients/services/maternity/Patient_Info_Antenatal.asp',
      },
      {
        title: 'Great Western Hospital - Maternity',
        description: 'Swindon maternity self-referral and maternity service overview.',
        url: 'https://www.gwh.nhs.uk/wards-and-services/maternity/',
        phone: '01793 607312',
      },
      {
        title: 'Salisbury District Hospital - Maternity Unit',
        description: 'Salisbury maternity information and online pregnancy registration.',
        url: 'https://www.salisbury.nhs.uk/wards-departments/departments/maternity/',
        phone: '01722 425185',
      },
    ],
  },
  {
    title: 'If you do not feel safe',
    description: 'Pregnancy can increase risk where there is coercion, violence or controlling behaviour.',
    links: [
      {
        title: 'National Domestic Abuse Helpline',
        description: '24/7 confidential support and safety planning.',
        url: 'https://www.nationaldahelpline.org.uk/',
        phone: '0808 2000 247',
      },
      {
        title: 'Wiltshire Police - Clare\'s Law application',
        description: 'Check whether a current or former partner has a history of abuse.',
        url: 'https://www.wiltshire.police.uk/rqo/request/ri/request-information/cl/triage/v2/request-information-under-clares-law/',
      },
    ],
  },
];

export const urgentSupportLinks: SupportLink[] = [
  {
    title: 'Emergency services',
    description: 'Call if there is immediate danger, violence or risk to life.',
    url: 'tel:999',
    phone: '999',
  },
  {
    title: 'Samaritans',
    description: '24/7 confidential emotional support.',
    url: 'https://www.samaritans.org/',
    phone: '116 123',
  },
  {
    title: 'Wiltshire mental health crisis line',
    description: 'Wiltshire urgent mental health support line.',
    url: 'https://www.awp.nhs.uk/',
    phone: '0800 953 0110',
  },
];
