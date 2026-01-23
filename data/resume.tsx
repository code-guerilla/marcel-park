import {
  ArrowRightLeft,
  Award,
  Briefcase,
  HomeIcon,
  LayoutTemplate,
  Mail,
  Server,
} from "lucide-react"
import { Icons } from "@/components/icons"

export const DATA = {
  name: "Marcel Park",
  initials: "MP",
  url: "https://marcelpark.dev",
  location: "Nürnberg, Deutschland",
  locationLink: "https://www.google.com/maps/place/Nuremberg",
  description:
    "Full-Stack Solution Architect & Lead Developer. Ich bringe Digitalisierung voran – vom Server bis zur Benutzeroberfläche.",
  summary:
    "Ursprünglich komme ich aus dem Handwerk: Nach meiner Ausbildung in der Wasserversorgung nahm ich mir von 2016 bis 2018 zwei Sabbatjahre, um die Welt zu bereisen, Spanisch autodidaktisch zu lernen und in verschiedensten Jobs zu arbeiten. Danach ging ich nach Berlin zu HMP Heidenhain Microprint – einem Leiterplattenhersteller – und überführte dort gemeinsam mit einem externen Team ein altes Steuerungssystem in eine vom Computer bedienbare, vollautomatische SPS-Steuerung. Dabei entdeckte ich meine Leidenschaft fürs Programmieren und wechselte zur Robert Bosch GmbH nach Nürnberg, um eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung zu absolvieren – verkürzt auf 2,5 Jahre und wie schon die erste Ausbildung mit Auszeichnung abgeschlossen. Die vorher kaum vorhandene Webentwicklungsstruktur am Standort baute ich quasi im Alleingang auf und bekam die erste Stelle als Vollzeitentwickler in dem Industrie-Fertigungsstandort NuP1. Dort entwickel ich komplexe Business-Webanwendungen mit Next.js, React, TypeScript und Prisma ORM – teilweise Bosch-weit bzw. weltweit genutzt.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL",
    "Prisma",
    "Linux (Red Hat)",
    "NGINX",
    "PM2",
    "GitHub Enterprise",
    "C#",
    "Blazor",
    ".NET",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Startseite" },
    {
      href: "/park-digital-solutions",
      icon: Briefcase,
      label: "Park Digital Solutions",
    },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#work", icon: Award, label: "Lebenslauf" },
    { href: "/#projects", icon: LayoutTemplate, label: "Projekte" },
    { href: "/#contact", icon: Mail, label: "Kontakt" },
  ],
  contact: {
    email: "marcel_park@gmx.de",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/code-guerilla",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "E-Mail senden",
        url: "mailto:marcel_park@gmx.de",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    links: [
      {
        href: "/imprint",
        label: "Impressum",
        target: "_self",
      },
      {
        href: "/privacy",
        label: "Datenschutz",
        target: "_self",
      },
    ],
  },

  work: [
    {
      company: "Park Digital Solutions",
      href: "https://park-digital-solutions.com",
      badges: ["Nebenberuflich", "Einzelunternehmen"],
      location: "Nürnberg",
      title: "Gründer & Full-Stack Developer",
      logoUrl: "/park-digital-solutions.png",
      logoClassName:
        " dark:bg-foreground w-full object-cover pt-1.5 h-10.5 rounded ",
      start: "2026",
      end: "heute",
      description:
        "Beratung und Entwicklung von maßgeschneiderten Softwarelösungen für Betriebe, Vereine und Organisationen. Fokus auf Prozessautomatisierung, individuelle Softwarelösungen und Webanwendungen mit Next.js und ggf. KI-Integrationen. Verantwortlich für den gesamten Product Lifecycle – von der Anforderungsanalyse bis zum Deployment.",
    },
    {
      company: "Robert Bosch GmbH",
      href: "https://www.bosch.de",
      badges: ["Full-Time"],
      location: "Nürnberg",
      title: "Full-Stack Developer & Solution Architect",
      logoUrl: "/bosch-invented-for-life.svg",
      logoClassName: "dark:bg-foreground py-1.5 rounded",
      start: "2021",
      end: "heute",
      description:
        "Betreue mehrere Red Hat Linux Terminal-Server (NGINX, PM2) sowie MSSQL-Datenbankserver. Administriere einen GitHub Enterprise Server mit über 126 Repositories und 30+ Nutzern. Entwickle komplexe Webanwendungen mit Next.js, React, TypeScript und Prisma ORM – teilweise Bosch-weit bzw. weltweit genutzt. Viele kleinere scripts und anwendungen die Mitarbeitern viel Zeit sparen. Habe Legacy C# Blazor Projekte auf moderne JavaScript-Frameworks migriert und ein standortweites Web-Template mit Bosch Corporate Design erstellt.",
    },
    {
      company: "HMP Heidenhain Microprint",
      badges: ["Full-Time"],
      href: "https://www.hmp-heidenhain.de/",
      location: "Berlin",
      title:
        "Wasseraufbereitung/Anlagenführer + Elektronik & Steuerungstechnik",
      logoUrl: "/hmp heidenhain-microprint768x131.png",
      start: "2018",
      end: "2021",
      logoClassName: "bg-[#706F6F] py-1.5 pl-1 rounded ",
      description:
        "Anlagenführer einer Wasseraufbereitung bis zur Modernisierung der Anlagensteuerung. Arbeit an alten Steuerungen und manuellen Schaltschränken. Fungierte als Ansprechpartner vor Ort für eine externe Firma zur Modernisierung der Anlagensteuerung. Gemeinsam wurde das System über zwei Jahre in eine vom Computer bedienbare, vollautomatische SPS-Steuerung überführt. Da erste Berührungspunkte mit der Programmierung und der Wunsch zur Neuorientierung zum Programmierer kam",
    },
    {
      company: "Stadtwerke Elmshorn",
      badges: ["Full-Time"],
      href: "https://www.stadtwerke-elmshorn.de/",
      location: "Elmshorn",
      title: "Facharbeiter & Ausbildung (Wasserversorgung)",
      logoClassName: "dark:bg-foreground px-0 dark:py-0.5 rounded ",
      logoUrl: "/stadtwerke-elmshorn.svg",
      start: "2012",
      end: "2016",
      description:
        "Ausbildung und Facharbeit im Bereich Wasserversorgung mit Schwerpunkten in Chemie, Elektro, Metall, Steuerungstechnik und Laboranalysen. Ausbildung mit Auszeichnung abgeschlossen.",
    },
  ],
  education: [
    {
      school: "Robert Bosch GmbH",
      href: "https://www.bosch.de",
      degree:
        "Fachinformatiker für Anwendungsentwicklung (verkürzt, mit Auszeichnung)",
      logoUrl: "/bosch-invented-for-life.svg",
      logoClassName: "dark:bg-foreground px-3 py-1.5 rounded",
      start: "2021",
      end: "2023",
    },
    {
      school: "Stadtwerke Elmshorn",
      href: "https://www.stadtwerke-elmshorn.de",
      degree: "Fachkraft für Wasserversorgungstechnik (mit Auszeichnung)",
      logoUrl: "/stadtwerke-elmshorn.svg",
      logoClassName: "dark:bg-foreground dark:py-0.5 rounded",
      start: "2012",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "drink2art",
      href: "https://www.drink2art.com",
      dates: "2024 - heute",
      active: true,
      description:
        "Eine Plattform, die es Gästen ermöglicht, mithilfe von KI einzigartige Kunstwerke direkt am Tisch zu kreieren. Durch automatisches Branding mit dem Logo der Bar wird die Markenbindung gestärkt und organisches Marketing auf Social Media gefördert. Basiert auf modernen KI-Modellen wie Googles Imagen.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Google Imagen",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.drink2art.com/",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/drink2art-landingPage.png",
      video: "",
    },
  ],
  boschProjects: [
    {
      title: "Manufacturing & Maintenance Suite (MMS)",
      role: "Sole Developer (End-to-End)",
      scope: "Werk NuP1 Produktion & Service",
      description:
        "Umfassendes Live-Monitoring und Incident-Management-System. Echtzeit-Tracking von Produktionslinien mit Heatmap-Visualisierung. SAP-Integration für direkte Issue-Erstellung. KI-gestützte Reparaturempfehlungen basierend auf 20 Jahren Issue-Daten.",
    },
    {
      title: "Strategic Personnel Planning (SPP)",
      role: "Lead Developer",
      scope: "HR-Abteilungen",
      description:
        "Strategisches HR-Tool zur dynamischen Personalplanung. Prognose von Renteneintritten, Vertragsendigungen und Trainee-Übernahmen. Dashboard zur Gap-Analyse zwischen aktuellem und benötigtem Personal.",
    },
    {
      title: "ITM-Location CMDB (Device Finder)",
      role: "Sole Developer",
      scope: "Werk NuP1",
      description:
        "Interaktive 2D-Raumkarte des Werks NuP1 mit über 3.000 gepinnten IT-Geräten. Geräte sind mit echten Koordinaten, Bildern und Beschreibungen verknüpft.",
    },
    {
      title: "My Stuff – Interner Marktplatz",
      role: "Contributor / Lead Developer",
      scope: "Bosch-weit (RB)",
      description:
        "Sichere interne Austauschplattform für gebrauchte Artikel (unter 25.000€). Erfolgreich auf Bosch-weite Nutzung skaliert – weltweit ca. 400.000 Mitarbeiter.",
    },
    {
      title: "ASM-Hub (Application Lifecycle Management)",
      role: "Developer / Contributor",
      scope: "Global (NuP1 → PS → BBM → RB)",
      description:
        "Zentrale Plattform für Software-Lifecycle-Management. Dokumentenhistorie, Templates und Versionskontrolle. Integration mit LeanIX für Enterprise Architecture Compliance.",
    },
  ],
  personalMilestones: [
    {
      title: "Custom Mechanical Keyboards & Ergonomie",
      dates: "2025 - 2026",
      location: "Privat",
      description:
        "Bau eigener Tastaturen mit Open Source Hardware von GitHub. Umstellung auf ergonomisches Colemak-DH Layout. Fertigung eigener PCBs (Totem 38 Keys, Anywhy) mit Lötstation, programmiert in C mit ZMK.",
      image: "/TOTEM_black_top.png",
      links: [
        {
          title: "Anywhy Flake",
          icon: <Icons.github className='h-4 w-4' />,
          href: "https://github.com/anywhy-io/flake",
        },
        {
          title: "TOTEM",
          icon: <Icons.github className='h-4 w-4' />,
          href: "https://github.com/GEIGEIGEIST/TOTEM",
        },
      ],
    },
    {
      title: "drink2art.com Launch",
      dates: "2025",
      location: "Privat",
      description:
        "Launch meiner eigenen KI-Kunstplattform für Bars. Gäste können mit KI einzigartige Kunstwerke erstellen, die automatisch mit dem Bar-Logo gebrandet werden.",
      image: "/drink2art.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className='h-4 w-4' />,
          href: "https://www.drink2art.com/",
        },
      ],
    },
    {
      title: "Fachinformatiker-Ausbildung mit Auszeichnung",
      dates: "2023",
      location: "Robert Bosch GmbH, Nürnberg",
      description:
        "Ausbildung zum Fachinformatiker für Anwendungsentwicklung auf 2,5 Jahre verkürzt und mit Auszeichnung abgeschlossen.",
      icon: Award,
      links: [],
    },
    {
      title: "Home-Server & Smart Home Automation",
      dates: "2022 - heute",
      location: "Privat",
      description:
        "Betrieb eines Home-Servers mit Proxmox: Pi-hole, NAS und Home Assistant. Vollständige Wohnungsautomatisierung über Zigbee-Geräte.",
      icon: Server,
      image: "/ha.svg",
      links: [],
    },
    {
      title: "GitHub Enterprise Server Administrator",
      dates: "2022 - heute",
      location: "Robert Bosch GmbH",
      description:
        "Administration der nup1-development Organisation mit über 126 Repositories und 50 Mitgliedern. Verantwortlich für Repository-Management, Zugriffssteuerung und Sicherheitsrichtlinien.",
      icon: Icons.github,
      links: [],
    },
    {
      title: "Enterprise Web Template & Design System",
      dates: "2022 - heute",
      location: "Robert Bosch GmbH",
      description:
        "Entwicklung eines wiederverwendbaren Web-Templates mit Entra ID Authentifizierung, Sicherheitsfeatures und vollständigem Bosch Corporate Design. Wird kontinuierlich aktualisiert und von Teams übernommen.",
      icon: LayoutTemplate,
      links: [],
    },
    {
      title: "Legacy C# → JavaScript Migration",
      dates: "2021 - 2022",
      location: "Robert Bosch GmbH",
      description:
        "Migration von Legacy C# Blazor Webseiten auf moderne JavaScript-Frameworks (Next.js/React). Einführung des JavaScript-Ökosystems am Standort.",
      icon: ArrowRightLeft,
      links: [],
    },
  ],
} as const
