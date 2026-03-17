export type Locale = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contact",
      consultation: "Consultation gratuite",
    },
    hero: {
      tagline: "Cabinet d'Expertise, de Conseil et de Services",
      title: "Votre expert depuis 2000",
      subtitle:
        "Plus de 20 ans d'excellence en audit, conseil en management et renforcement des capacités au service des gouvernements, entreprises et organisations internationales.",
      cta: "Nous contacter",
      ctaSecondary: "Nos services",
    },
    about: {
      sectionLabel: "À propos",
      title: "Un cabinet de référence en Afrique et en Suisse",
      description:
        "Fondé en 2000, le Cabinet CECOS est une société de personnes à responsabilité limitée (SPRL) de droit Burundais, spécialisée dans l'audit, le conseil en management, le renforcement des capacités, les évaluations de projets et programmes, les études et la recherche.",
      description2:
        "Avec son siège à Bujumbura au Burundi et une filiale à Genève en Suisse, CECOS intervient dans un environnement international et multiculturel, au service des secteurs public, privé et des organisations non gouvernementales.",
      experience: "Années d'expérience",
      projects: "Missions réalisées",
      countries: "Pays d'intervention",
      partners: "Partenaires internationaux",
      pageTitle: "À propos de CECOS",
      pageSubtitle:
        "Découvrez notre histoire, notre équipe et notre engagement envers l'excellence professionnelle depuis plus de deux décennies.",
      history: "Notre histoire",
      historyText:
        "Créé en 2000 et immatriculé au Registre du Commerce sous le numéro 50488, le Cabinet CECOS s'est imposé comme un acteur incontournable dans le domaine de l'audit et du conseil en Afrique subsaharienne. Avec une présence à Bujumbura et à Genève, nous offrons une expertise internationale de haut niveau.",
      historyText2:
        "Notre cabinet est agréé et consulté par la Banque Africaine de Développement pour faire partie des firmes shortlistées dans plusieurs pays africains, dont le Burundi, le Rwanda, le Togo, Djibouti et le Gabon.",
      strategy: "Stratégie opérationnelle",
      strategyText:
        "Pour mieux s'adapter aux changements du monde et aux exigences professionnelles, la société assure régulièrement la formation professionnelle continue de son personnel et fait des partenariats stratégiques avec des firmes des pays développés ou en voie de développement.",
      structure: "Structure organisationnelle",
      structureText:
        "La structure du cabinet comprend un Conseil d'Administration et un Conseil de direction dont les membres sont tous agréés par l'Ordre des Professionnels Comptables Burundais. Le cabinet dispose d'un staff administratif et d'une gamme importante de consultants spécialisés.",
      team: "Notre équipe dirigeante",
      ceo: {
        name: "Dr. Frédéric NTEZIMANA",
        role: "Fondateur & CEO",
        bio: "Titulaire d'un Doctorat en Business Administration (Université de Lyon / BSI Luxembourg), d'un MBA et d'un DEA en Gestion des Risques (Université de Genève). Certifié CPA (KASNEB). Plus de 20 ans d'expérience internationale en audit, planification, gestion des risques et développement des compétences. Consultant auprès de l'OMS, du Fonds Mondial, de GAVI et de l'ONUSIDA.",
      },
      dg: {
        name: "NTWARI Emery",
        role: "Directeur Général & Auditeur Senior",
        bio: "Licencié en Sciences de Gestion, auditeur au sein de CECOS depuis 2008. Plus de 10 ans d'expérience en audit financier, organisationnel et interne. En formation CPA (KASNEB). Affilié à l'Ordre des Professionnels Comptables Burundais.",
      },
    },
    services: {
      sectionLabel: "Nos services",
      title: "Des solutions sur mesure pour votre organisation",
      subtitle:
        "Nous offrons une gamme complète de services professionnels adaptés aux besoins des gouvernements, entreprises et organisations internationales.",
      audit: {
        title: "Audit financier et organisationnel",
        description:
          "Audit externe et interne conforme aux normes ISA et IFRS, audit de conformité, audit de performance et revue des systèmes de contrôle interne.",
        longDescription:
          "Notre équipe d'auditeurs certifiés CPA réalise des missions d'audit rigoureuses conformes aux Normes Internationales d'Audit (ISA) et aux Normes Comptables Internationales (IAS/IFRS). Nous intervenons auprès d'organisations financées par les principaux bailleurs internationaux — Banque Mondiale, Union Européenne, Banque Africaine de Développement, Fonds Mondial, GAVI — en garantissant une assurance indépendante et objective sur la fiabilité de l'information financière.",
        deliverables: [
          "Audit financier externe des états financiers annuels",
          "Audit interne et évaluation des dispositifs de contrôle",
          "Audit de conformité réglementaire et contractuelle",
          "Audit de performance et d'efficience opérationnelle",
          "Revue des systèmes de contrôle interne et recommandations",
          "Audit des projets financés par les bailleurs internationaux",
        ],
        standards: "Normes ISA, IAS, IFRS",
        clients: "Gouvernements, sociétés publiques et privées, ONG, projets financés par les bailleurs internationaux",
      },
      consulting: {
        title: "Conseil en management",
        description:
          "Accompagnement stratégique, optimisation organisationnelle, mise en place de procédures de gestion, business plan et conseil en investissement.",
        longDescription:
          "CECOS accompagne les dirigeants et organisations dans leurs décisions stratégiques et leur transformation organisationnelle. Notre approche combine rigueur analytique et connaissance approfondie du contexte africain pour délivrer des recommandations opérationnelles et réalistes. De la conception de business plans à la restructuration de la gouvernance, nous mettons notre expertise au service de votre performance durable.",
        deliverables: [
          "Diagnostic organisationnel et plan de transformation",
          "Élaboration de business plans et études d'investissement",
          "Conception et mise en place de procédures de gestion",
          "Optimisation des processus et amélioration de la performance",
          "Conseil en gouvernance et structuration institutionnelle",
          "Accompagnement au pilotage stratégique et budgétaire",
        ],
        standards: "Méthodologies internationales de conseil en management",
        clients: "Entreprises, institutions publiques, organisations internationales",
      },
      capacity: {
        title: "Renforcement des capacités",
        description:
          "Formation professionnelle continue, développement des compétences, transfert de savoir-faire et coaching en gestion financière et organisationnelle.",
        longDescription:
          "Le renforcement des capacités est au cœur de notre mission. Nous concevons et animons des programmes de formation sur mesure destinés aux équipes financières, aux gestionnaires de projets et aux cadres dirigeants. Nos formateurs, dont le Dr. Ntezimana — consultant auprès de l'OMS, du Fonds Mondial et de GAVI — conjuguent expertise académique de niveau doctoral et expérience terrain acquise sur plus de 20 ans de missions en Afrique subsaharienne.",
        deliverables: [
          "Formations en comptabilité, finance et normes IFRS",
          "Formation en planification et budgétisation",
          "Ateliers de contrôle de gestion et audit interne",
          "Coaching en gestion de projets et suivi-évaluation",
          "Transfert de compétences et accompagnement post-formation",
          "Programmes de certification et de développement professionnel",
        ],
        standards: "Normes CPA (KASNEB), IAS, IFRS",
        clients: "Équipes de projets, cadres financiers, gestionnaires d'ONG, institutions gouvernementales",
      },
      evaluation: {
        title: "Évaluation de projets et programmes",
        description:
          "Évaluation à mi-parcours et finale, évaluation d'impact, revue de portefeuille et analyse de performance des projets financés par les bailleurs internationaux.",
        longDescription:
          "Nous réalisons des évaluations indépendantes de projets et programmes financés par les principaux bailleurs de fonds internationaux. Nos évaluations fournissent une analyse objective de la pertinence, de l'efficacité, de l'efficience, de l'impact et de la durabilité des interventions, conformément aux critères du CAD de l'OCDE. Nos conclusions et recommandations orientent la prise de décision et améliorent la conception des programmes futurs.",
        deliverables: [
          "Évaluation à mi-parcours et ajustement stratégique",
          "Évaluation finale et capitalisation des leçons apprises",
          "Évaluation d'impact et analyse de la théorie du changement",
          "Revue de portefeuille et analyse de la performance globale",
          "Enquêtes de terrain, collecte et analyse de données",
          "Rapports d'évaluation conformes aux standards des bailleurs",
        ],
        standards: "Critères CAD/OCDE, standards d'évaluation des bailleurs",
        clients: "Banque Mondiale, Union Européenne, BAD, Fonds Mondial, GAVI, FIDA, KFW, USAID",
      },
      studies: {
        title: "Études et recherche",
        description:
          "Études de faisabilité, études sectorielles, recherche appliquée et analyses économiques pour orienter la prise de décision stratégique.",
        longDescription:
          "Notre pôle études et recherche produit des analyses approfondies qui éclairent la prise de décision stratégique. Qu'il s'agisse d'études de faisabilité pour de nouveaux investissements, d'analyses sectorielles ou de recherche appliquée, nous mobilisons des méthodologies rigoureuses — quantitatives et qualitatives — pour délivrer des conclusions fiables et actionnables. Le CEO du cabinet, Dr. Ntezimana, apporte sa perspective académique de niveau doctoral (DBA, Université de Lyon / BSI Luxembourg).",
        deliverables: [
          "Études de faisabilité technique, économique et financière",
          "Études sectorielles et analyses de marché",
          "Recherche appliquée en gestion et management",
          "Analyses économiques et modélisation financière",
          "Enquêtes quantitatives et qualitatives",
          "Rapports d'étude et notes de politique (policy briefs)",
        ],
        standards: "Méthodologies de recherche académique et appliquée",
        clients: "Gouvernements, bailleurs de fonds, institutions de recherche, secteur privé",
      },
      risk: {
        title: "Gestion des risques",
        description:
          "Identification, évaluation et mitigation des risques opérationnels, financiers et stratégiques. Mise en place de cadres de gouvernance des risques.",
        longDescription:
          "Fort de l'expertise de son CEO titulaire d'un DEA en Gestion des Risques de l'Université de Genève, CECOS accompagne les organisations dans la mise en place de dispositifs robustes de gestion des risques. Nous identifions les vulnérabilités, évaluons leur probabilité et leur impact, et concevons des stratégies de mitigation adaptées au contexte opérationnel de chaque client. Notre approche couvre les risques financiers, opérationnels, stratégiques et de conformité.",
        deliverables: [
          "Cartographie et évaluation des risques organisationnels",
          "Conception de cadres de gouvernance des risques",
          "Élaboration de plans de mitigation et de continuité",
          "Audit des dispositifs de gestion des risques existants",
          "Formation des équipes à la culture du risque",
          "Mise en place de systèmes de veille et d'alerte précoce",
        ],
        standards: "ISO 31000, COSO ERM, normes Bâle",
        clients: "Institutions financières, entreprises, organisations internationales, gouvernements",
      },
      pageTitle: "Nos services",
      pageSubtitle:
        "Une expertise complète au service de votre performance et de votre conformité.",
    },
    testimonials: {
      sectionLabel: "Témoignages",
      title: "Ce que disent nos partenaires",
    },
    partners: {
      sectionLabel: "Nos partenaires et bailleurs",
      title: "Des collaborations de confiance à l'échelle mondiale",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Discutons de votre projet",
      subtitle:
        "Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous accompagner.",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        organization: "Organisation",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer",
        sending: "Envoi en cours...",
        success: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
        error: "Une erreur est survenue. Veuillez réessayer.",
      },
      info: {
        headquarters: "Siège social",
        headquartersAddress: "Chaussée Prince Louis Rwagasore N°12, Bujumbura, Burundi",
        branch: "Filiale",
        branchAddress: "80, Rue de la Servette, 1202 Genève, Suisse",
        email: "info@cecos.bi",
        phone: "+257 79 992 432",
        phoneAlt: "+41 78 836 9470",
      },
    },
    footer: {
      description:
        "Cabinet d'Expertise, de Conseil et de Services. Votre partenaire de confiance depuis 2000.",
      quickLinks: "Liens rapides",
      contactInfo: "Coordonnées",
      rights: "Tous droits réservés.",
    },
    cta: {
      title: "Prêt à transformer votre organisation ?",
      subtitle:
        "Contactez nos experts pour une consultation personnalisée et découvrez comment CECOS peut vous accompagner vers l'excellence.",
      button: "Demander une consultation",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      consultation: "Free consultation",
    },
    hero: {
      tagline: "Expertise, Consulting and Services Firm",
      title: "Your expert since 2000",
      subtitle:
        "Over 20 years of excellence in audit, management consulting and capacity building serving governments, businesses and international organizations.",
      cta: "Contact us",
      ctaSecondary: "Our services",
    },
    about: {
      sectionLabel: "About us",
      title: "A leading firm in Africa and Switzerland",
      description:
        "Founded in 2000, CECOS is a limited liability partnership under Burundian law, specialized in audit, management consulting, capacity building, project and program evaluations, studies and research.",
      description2:
        "With its headquarters in Bujumbura, Burundi and a branch in Geneva, Switzerland, CECOS operates in an international and multicultural environment, serving the public, private and non-governmental sectors.",
      experience: "Years of experience",
      projects: "Completed missions",
      countries: "Countries of operation",
      partners: "International partners",
      pageTitle: "About CECOS",
      pageSubtitle:
        "Discover our history, our team and our commitment to professional excellence for over two decades.",
      history: "Our history",
      historyText:
        "Founded in 2000 and registered under trade number 50488, CECOS has established itself as a key player in audit and consulting in sub-Saharan Africa. With offices in Bujumbura and Geneva, we offer high-level international expertise.",
      historyText2:
        "Our firm is approved and consulted by the African Development Bank to be part of shortlisted firms in several African countries, including Burundi, Rwanda, Togo, Djibouti and Gabon.",
      strategy: "Operational strategy",
      strategyText:
        "To better adapt to global changes and professional requirements, the firm regularly provides continuing professional development to its staff and forms strategic partnerships with firms in developed and developing countries.",
      structure: "Organizational structure",
      structureText:
        "The firm's structure includes a Board of Directors and a Management Board, all members of which are certified by the Burundian Professional Accountants Association. The firm has administrative staff and a wide range of specialized consultants.",
      team: "Our leadership team",
      ceo: {
        name: "Dr. Frédéric NTEZIMANA",
        role: "Founder & CEO",
        bio: "Holds a Doctorate in Business Administration (University of Lyon / BSI Luxembourg), an MBA and a DEA in Risk Management (University of Geneva). CPA certified (KASNEB). Over 20 years of international experience in audit, planning, risk management and skills development. Consultant for WHO, Global Fund, GAVI and UNAIDS.",
      },
      dg: {
        name: "NTWARI Emery",
        role: "General Director & Senior Auditor",
        bio: "Bachelor's in Management Sciences, auditor at CECOS since 2008. Over 10 years of experience in financial, organizational and internal audit. CPA training (KASNEB). Member of the Burundian Professional Accountants Association.",
      },
    },
    services: {
      sectionLabel: "Our services",
      title: "Tailored solutions for your organization",
      subtitle:
        "We offer a comprehensive range of professional services adapted to the needs of governments, businesses and international organizations.",
      audit: {
        title: "Financial and organizational audit",
        description:
          "External and internal audit compliant with ISA and IFRS standards, compliance audit, performance audit and internal control system review.",
        longDescription:
          "Our team of CPA-certified auditors conducts rigorous audit engagements in compliance with International Standards on Auditing (ISA) and International Accounting Standards (IAS/IFRS). We work with organizations funded by major international donors — World Bank, European Union, African Development Bank, Global Fund, GAVI — providing independent and objective assurance on the reliability of financial information.",
        deliverables: [
          "External financial audit of annual financial statements",
          "Internal audit and control system assessment",
          "Regulatory and contractual compliance audit",
          "Performance and operational efficiency audit",
          "Internal control system review and recommendations",
          "Audit of internationally funded projects",
        ],
        standards: "ISA, IAS, IFRS Standards",
        clients: "Governments, public and private companies, NGOs, internationally funded projects",
      },
      consulting: {
        title: "Management consulting",
        description:
          "Strategic support, organizational optimization, implementation of management procedures, business plans and investment advisory.",
        longDescription:
          "CECOS supports leaders and organizations in their strategic decisions and organizational transformation. Our approach combines analytical rigor with deep understanding of the African context to deliver operational and realistic recommendations. From business plan design to governance restructuring, we put our expertise at the service of your sustainable performance.",
        deliverables: [
          "Organizational diagnosis and transformation plan",
          "Business plan development and investment studies",
          "Design and implementation of management procedures",
          "Process optimization and performance improvement",
          "Governance advisory and institutional structuring",
          "Strategic steering and budget management support",
        ],
        standards: "International management consulting methodologies",
        clients: "Businesses, public institutions, international organizations",
      },
      capacity: {
        title: "Capacity building",
        description:
          "Continuing professional development, skills building, knowledge transfer and coaching in financial and organizational management.",
        longDescription:
          "Capacity building is at the heart of our mission. We design and deliver tailored training programs for finance teams, project managers and senior executives. Our trainers, including Dr. Ntezimana — consultant for WHO, the Global Fund and GAVI — combine doctoral-level academic expertise with field experience gained over 20+ years of missions across sub-Saharan Africa.",
        deliverables: [
          "Training in accounting, finance and IFRS standards",
          "Planning and budgeting workshops",
          "Management control and internal audit workshops",
          "Project management and M&E coaching",
          "Knowledge transfer and post-training support",
          "Certification and professional development programs",
        ],
        standards: "CPA (KASNEB), IAS, IFRS Standards",
        clients: "Project teams, finance officers, NGO managers, government institutions",
      },
      evaluation: {
        title: "Project and program evaluation",
        description:
          "Mid-term and final evaluation, impact assessment, portfolio review and performance analysis of internationally funded projects.",
        longDescription:
          "We conduct independent evaluations of projects and programs funded by major international donors. Our evaluations provide objective analysis of relevance, effectiveness, efficiency, impact and sustainability of interventions, in line with OECD-DAC criteria. Our findings and recommendations guide decision-making and improve the design of future programs.",
        deliverables: [
          "Mid-term evaluation and strategic adjustment",
          "Final evaluation and lessons learned capitalization",
          "Impact evaluation and theory of change analysis",
          "Portfolio review and overall performance analysis",
          "Field surveys, data collection and analysis",
          "Evaluation reports compliant with donor standards",
        ],
        standards: "OECD-DAC criteria, donor evaluation standards",
        clients: "World Bank, European Union, AfDB, Global Fund, GAVI, IFAD, KFW, USAID",
      },
      studies: {
        title: "Studies and research",
        description:
          "Feasibility studies, sector studies, applied research and economic analysis to guide strategic decision-making.",
        longDescription:
          "Our studies and research unit produces in-depth analyses that inform strategic decision-making. Whether it involves feasibility studies for new investments, sector analyses or applied research, we deploy rigorous quantitative and qualitative methodologies to deliver reliable and actionable conclusions. The firm's CEO, Dr. Ntezimana, brings his doctoral-level academic perspective (DBA, University of Lyon / BSI Luxembourg).",
        deliverables: [
          "Technical, economic and financial feasibility studies",
          "Sector studies and market analysis",
          "Applied research in management and business",
          "Economic analysis and financial modeling",
          "Quantitative and qualitative surveys",
          "Study reports and policy briefs",
        ],
        standards: "Academic and applied research methodologies",
        clients: "Governments, donors, research institutions, private sector",
      },
      risk: {
        title: "Risk management",
        description:
          "Identification, assessment and mitigation of operational, financial and strategic risks. Implementation of risk governance frameworks.",
        longDescription:
          "Drawing on the expertise of its CEO who holds a DEA in Risk Management from the University of Geneva, CECOS supports organizations in implementing robust risk management systems. We identify vulnerabilities, assess their likelihood and impact, and design mitigation strategies tailored to each client's operational context. Our approach covers financial, operational, strategic and compliance risks.",
        deliverables: [
          "Organizational risk mapping and assessment",
          "Risk governance framework design",
          "Mitigation and business continuity planning",
          "Audit of existing risk management systems",
          "Risk culture training for teams",
          "Early warning and monitoring system implementation",
        ],
        standards: "ISO 31000, COSO ERM, Basel standards",
        clients: "Financial institutions, businesses, international organizations, governments",
      },
      pageTitle: "Our services",
      pageSubtitle:
        "Comprehensive expertise serving your performance and compliance.",
    },
    testimonials: {
      sectionLabel: "Testimonials",
      title: "What our partners say",
    },
    partners: {
      sectionLabel: "Our partners and donors",
      title: "Trusted collaborations on a global scale",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's discuss your project",
      subtitle:
        "Contact us for a free consultation and discover how we can support you.",
      form: {
        name: "Full name",
        email: "Email address",
        organization: "Organization",
        subject: "Subject",
        message: "Your message",
        send: "Send",
        sending: "Sending...",
        success: "Your message has been sent successfully. We will respond as soon as possible.",
        error: "An error occurred. Please try again.",
      },
      info: {
        headquarters: "Headquarters",
        headquartersAddress: "Chaussée Prince Louis Rwagasore N°12, Bujumbura, Burundi",
        branch: "Branch office",
        branchAddress: "80, Rue de la Servette, 1202 Geneva, Switzerland",
        email: "info@cecos.bi",
        phone: "+257 79 992 432",
        phoneAlt: "+41 78 836 9470",
      },
    },
    footer: {
      description:
        "Expertise, Consulting and Services Firm. Your trusted partner since 2000.",
      quickLinks: "Quick links",
      contactInfo: "Contact info",
      rights: "All rights reserved.",
    },
    cta: {
      title: "Ready to transform your organization?",
      subtitle:
        "Contact our experts for a personalized consultation and discover how CECOS can guide you towards excellence.",
      button: "Request a consultation",
    },
  },
} as const;

export type TranslationKey = (typeof translations)[Locale];
