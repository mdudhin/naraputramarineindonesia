import {
  Home,
  Info,
  Mail,
  ShieldCheck,
  HeartHandshake,
  UsersRound,
  Gem,
  Anchor,
  Ship,
  Target,
  Award,
  Briefcase,
  Users,
  Shield,
  TrendingUp,
  Leaf,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import kps from "./assets/kps.png";
import der from "./assets/der.png";
import lde from "./assets/lde.png";
import mbs from "./assets/mbs.png";
import nei from "./assets/nei.png";
import tei from "./assets/tei.png";

// --- Type Definitions ---
export type Page = "home" | "about" | "services" | "contact";

interface SidebarLink {
  name: string;
  page: Page;
  icon: LucideIcon;
}

interface ContentItem {
  id: string;
  title: string;
  description: string;
}

interface CoreValue extends ContentItem {
  icon: LucideIcon;
}

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

interface MarketingPoint {
  icon: LucideIcon;
  title: string;
}

interface PriceItem {
  name: string;
  description: string;
}

// --- App Data ---
export const appData = {
  sidebarLinks: [
    { name: "Home", page: "home", icon: Home },
    { name: "About Us", page: "about", icon: Info },
    { name: "Our Services", page: "services", icon: Ship },
    { name: "Contact", page: "contact", icon: Mail },
  ] as SidebarLink[],

  introduction: {
    title: "PT Naraputra Marine Indonesia",
    text: "A company engaged in the field of coal transportation and shipping, established in 2021. Since its inception, we have been committed to providing safe, efficient, and timely coal transportation services to support the needs of the national and international energy industry. By prioritizing professionalism, integrity, and high safety standards, PT Naraputra Marine Indonesia continues to grow into a trusted partner in the energy supply chain. Our fleet is supported by experienced experts in shipping and logistics, as well as an operational system that follows applicable maritime regulations. We believe that the successful transportation of strategic commodities such as coal requires solid collaboration, continuous innovation, and dedication to customer satisfaction. Therefore, we continue to innovate to provide the best service to support the growth of the energy sector and environmental sustainability.",
  },

  mission:
    "To become a superior, trusted and globally competitive national shipping company in the transportation of coal and other energy commodities, prioritizing safety, eﬃciency and sustainability.",
  visionPoints: [
    {
      text: "Providing safe, timely and high quality coal transportation services.",
      icon: Shield,
    },
    {
      text: "Improving human resource competency through continuous training and professional development.",
      icon: TrendingUp,
    },
    {
      text: "Managing fleet and operations in accordance with national and international maritime safety standards and regulations.",
      icon: ShieldCheck,
    },
    {
      text: "Establishing mutually beneficial strategic partnerships with customers and other stakeholders.",
      icon: Users,
    },
    {
      text: "Contributing to environmental sustainability through environmentally friendly and eﬃcient operational practices.",
      icon: Leaf,
    },
  ],

  coreValues: [
    {
      id: "stakeholder",
      icon: HeartHandshake,
      title: "Stakeholder Satisfaction",
      description:
        "We are committed to creating real value and benefits for all stakeholders—from customers, business partners, employees, to the surrounding community.",
    },
    {
      id: "integrity",
      icon: Anchor,
      title: "Integrity",
      description:
        "Upholding honesty, transparency, and responsibility in every aspect of the company’s operations.",
    },
    {
      id: "professionalism",
      icon: Award,
      title: "Professionalism",
      description:
        "Providing the best service with high standards through competent and dedicated workers.",
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Safety and Reliability",
      description:
        "Prioritizing work safety, shipping security, and reliability in every transportation process.",
    },
    {
      id: "innovation",
      icon: Gem,
      title: "Innovation and Efficiency",
      description:
        "Continue to innovate in technology and work systems to achieve operational eﬃciency and customer satisfaction.",
    },
    {
      id: "sustainability",
      icon: UsersRound,
      title: "Sustainability",
      description:
        "Contributing to sustainable development by considering the environmental and social impacts in every business activity.",
    },
  ] as CoreValue[],

  ourTeam: {
    title: "Our Team",
    description:
      "We have a lean but eﬀective organization. We continue to develop quality human resources with several internal, external training and required certification.",
  },

  ourServices: {
    title: "Our Services",
    description:
      "We provide marine cargo transportation using 300ft barges, supported by experienced crews and reliable tugboats.",
    items: [
      "Bulk & General Cargo Transport (coal, sand, rocks, timber, etc)",
      "Transshipment to Mother Vessel (Ship-to-Ship)",
      "Tugboat & Barge Charter Service",
      "Operational & Logistics Management",
      "Safety & Environmental Compliance",
    ],
  },

  partners: [
    {
      name: "PT. Karyawaja Putra Sriwijaya (SHIPYARD)",
      logo: kps,
      website: "https://www.kps-shipyard.com/",
    },
    {
      name: "PT. Deriaz Energy Resources",
      logo: der,
      website: "https://deriazenergy.com/",
    },
    {
      name: "PT. Metalik Bara Sinergi",
      logo: mbs,
      website: "https://www.google.com/maps/place/Kantor+PT.+Metalik+Bara+Sinergi/data=!4m2!3m1!1s0x0:0xa55307fda236ffb8?sa=X&ved=1t:2428&ictx=111",
    },
    {
      name: "NEI Group",
      logo: nei,
      website: "https://www.nei.co.id/",
    },
    {
      name: "PT. Trans Energy Indonesia",
      logo: tei,
      website: "https://www.tei.co.id/",
    },
    {
      name: "PT. Lentera Dua Energi",
      logo: lde,
    },
  ] as Partner[],

  marketingPlan: {
    title: "Marketing Plan",
    points: [
      {
        icon: Target,
        title: "Increase brand awareness in the energy and logistics industry.",
      },
      {
        icon: Users,
        title: "Acquire new clients from the mining and energy sectors.",
      },
      {
        icon: Award,
        title:
          "Build a reputation as a reliable and professional transportation partner.",
      },
      {
        icon: Briefcase,
        title:
          "Establish long-term strategic partnerships with energy and logistics industry players.",
      },
    ] as MarketingPoint[],
  },

  product: {
    title: "Product",
    items: [
      "Coal transportation by sea (domestic and export)",
      "Ship chartering (barge, tugboat) for client needs",
      "Shipping logistics management from port of origin to destination",
      "Loading and unloading services",
      "Energy logistics consulting services for eﬃcient coal shipping",
    ],
  },

  price: {
    title: "Price",
    items: [
      {
        name: "Cost-based pricing",
        description:
          "Based on calculations of operational costs, fuel, port, crew, and reasonable margins.",
      },
      {
        name: "Project-Based pricing",
        description:
          "Special price oﬀers for long-term contracts or large volume.",
      },
      {
        name: "Price adjustments based on",
        description:
          "Shipping distance (route), Carrying capacity, Shipping frequency, Risk and complexity of destination port.",
      },
    ] as PriceItem[],
  },

  promotion: {
    title: "Promotion",
    items: [
      "Online Promotion",
      "Offline Promotion",
      "Reputation & Recommendations",
    ],
  },

  place: {
    title: "Place",
    description: "Main operational areas:",
    items: [
      "Kalimantan (East, South)",
      "Sumatera (South)",
      "Java (Industrial port destination)",
    ],
    potential: "Export potential to southeast Asian countries",
  },
};

