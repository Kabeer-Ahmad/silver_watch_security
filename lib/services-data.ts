export interface ServiceItem {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  highlights?: string[];
  image?: string;
  imagePlaceholder?: string;
}

export const services: ServiceItem[] = [
  {
    slug: "security-guards",
    name: "Security Guards",
    shortDescription: "Trained, SIA-licensed professionals for your site.",
    description: "Our static and site security guards are SIA-licensed and trained to protect your premises, staff and assets. We provide professional manned guarding for offices, retail, warehouses, construction sites and more. Each guard is vetted, uniformed and equipped to handle access control, patrols and incident reporting.",
    highlights: ["SIA-licensed personnel", "Uniformed and professional", "Access control and patrols", "Tailored to your site"],
    image: "/Secuirty_Guards.jpg",
  },
  {
    slug: "mobile-patrols",
    name: "Mobile Patrols",
    shortDescription: "Visible presence and rapid response across multiple locations.",
    description: "Mobile patrols give you a visible security presence without the cost of a full-time guard. Our teams visit your sites on a schedule you choose—random or fixed—checking perimeters, outbuildings and alarms. We provide detailed reports and can respond to incidents or call-outs as part of the service.",
    highlights: ["Random or scheduled visits", "Detailed incident reports", "Multi-site coverage", "Cost-effective presence"],
    image: "/property-inspections.webp",
  },
  {
    slug: "alarm-response",
    name: "Alarm Response",
    shortDescription: "24/7 key-holder and alarm response services.",
    description: "When your alarm activates, you need a reliable key-holder. Our alarm response service provides 24/7 attendance at your premises to meet emergency services, secure the building and complete handover. We work with your ARC and can attend within agreed response times.",
    highlights: ["24/7 availability", "Key-holder attendance", "ARC integration", "Rapid response times"],
    image: "/Alarm-Response.png",
  },
  {
    slug: "key-holding",
    name: "Key Holding",
    shortDescription: "Secure key holding and access management.",
    description: "We hold your keys in secure, audited storage and provide access for contractors, emergency services or your team when needed. Key holding removes the burden from your staff and ensures only authorised access. Ideal for multi-site operations and out-of-hours requirements.",
    highlights: ["Secure storage", "Audited access", "Contractor handover", "Out-of-hours support"],
    image: "/maintenance-and-repairs.webp",
  },
  {
    slug: "concierge",
    name: "Concierge Services",
    shortDescription: "Reception and front-of-house security.",
    description: "Our concierge and reception security staff combine access control with a welcoming front-of-house presence. They manage sign-in, visitor passes, deliveries and reception duties while maintaining security standards. Perfect for corporate offices, residential developments and premium buildings.",
    highlights: ["Reception and access control", "Visitor management", "Professional presentation", "Residential and corporate"],
    image: "/Concierge-Security.jpg",
  },
  {
    slug: "empty-property",
    name: "Empty Property Security",
    shortDescription: "Protection for vacant buildings and sites.",
    description: "Vacant properties are at risk of trespass, vandalism and theft. We provide dedicated empty property security through regular patrols, alarm response and, where needed, static guards. Our solutions help you meet insurer requirements and protect assets until sale or reoccupation.",
    highlights: ["Vacant building protection", "Insurer compliance", "Patrols and response", "Flexible terms"],
    image: "/Construction_Site_security.jpg",
  },
  {
    slug: "gatehouse-control",
    name: "Gatehouse Control",
    shortDescription: "Access control and visitor management.",
    description: "Gatehouse and barrier control ensures only authorised people and vehicles enter your site. Our staff manage entry/exit logs, issue passes and coordinate with site management. We serve distribution centres, industrial estates, construction sites and secure facilities.",
    highlights: ["Vehicle and pedestrian control", "Visitor logging", "Barrier and ANPR", "Site integration"],
    image: "/Security-monitoring-cctv.webp",
  },
  {
    slug: "student-housing",
    name: "Student Housing Security",
    shortDescription: "Campus and student accommodation security.",
    description: "Student accommodation needs security that balances safety with a positive living environment. We provide reception, patrols and incident response tailored to PBSA and university accommodation. Our staff are trained in conflict resolution and working with young adults.",
    highlights: ["PBSA and university sites", "Reception and patrols", "Conflict resolution", "24/7 coverage"],
    image: "/residential_security_guard.jpg",
  },
  {
    slug: "club-bar",
    name: "Club & Bar Security",
    shortDescription: "Door supervision and venue security.",
    description: "Our door supervisors are SIA-licensed for front-line door supervision and provide a professional, proportionate presence at bars, clubs and late-night venues. We support licensees with entry policy, crowd management and liaison with police and emergency services.",
    highlights: ["SIA door supervision", "Crowd management", "Licensing support", "Venue experience"],
    image: "/Personal_protection.jpg",
  },
  {
    slug: "events",
    name: "Events Security",
    shortDescription: "Crowd management and event stewarding.",
    description: "From corporate events and conferences to festivals and sports, we supply trained event security and stewards. We handle access control, crowd flow, VIP areas and incident response so your event runs safely and smoothly.",
    highlights: ["Corporate and public events", "Crowd management", "Access and VIP", "Pre-event planning"],
    image: "/Event_security.jpg",
  },
  {
    slug: "cctv-cscs",
    name: "CCTV & CSCS",
    shortDescription: "Monitoring and construction site security.",
    description: "We provide CCTV monitoring support and construction site security staff who hold CSCS cards where required. Our teams understand site safety and security, from static guarding to mobile patrols and alarm response on construction and industrial projects.",
    highlights: ["CCTV awareness", "CSCS where required", "Construction experience", "Site safety knowledge"],
    image: "/CCTV-Installation-Monitoring-1.png",
  },
  {
    slug: "dog-handling",
    name: "Dog Handling",
    shortDescription: "Professional K9 security teams.",
    description: "Our dog handling teams provide a strong deterrent and search capability for large sites, warehouses and high-risk premises. Handlers and dogs are trained and licensed to industry standards. K9 units can be deployed for patrols, search and response to incidents.",
    highlights: ["Licensed handlers and dogs", "Deterrent and search", "Large site coverage", "Incident response"],
    image: "/Security-Services-guard_talking.png",
  },
  {
    slug: "retail-security",
    name: "Retail Security",
    shortDescription: "Loss prevention and customer safety.",
    description: "Retail security requires a balance of theft prevention and a positive customer experience. Our retail guards are trained in loss prevention, conflict resolution and store procedures. We support single stores and multi-site retail chains with consistent, professional coverage.",
    highlights: ["Loss prevention", "Customer-focused", "Multi-site retail", "Incident reporting"],
    image: "/Security-guard-looking-over-a-rail.jpg",
  },
  {
    slug: "corporate-security",
    name: "Corporate Security",
    shortDescription: "Office and HQ protection.",
    description: "Corporate headquarters and offices need security that reflects your brand and protects your people and data. We provide reception security, access control and patrols tailored to corporate environments, including out-of-hours and weekend cover.",
    highlights: ["Reception and access", "Corporate environment", "Out-of-hours cover", "Discreet and professional"],
    image: "/Security-Services-main-hero.jpg",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
