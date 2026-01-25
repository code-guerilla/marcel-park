Marcel Park

Beruflicher Werdegang
Ursprünglich komme ich aus dem Handwerk: Nach meiner Ausbildung in der Wasserversorgung habe ich mich dort in Elektronik und Steuerungstechnik vertieft. Von 2018 bis 2021 arbeitete ich in Berlin bei einem Leiterplattenhersteller an alten Steuerungen und manuellen Schaltschränken. Dort fungierte ich als Ansprechpartner vor Ort für eine externe Firma, da ich die Steuerung der Anlage im Detail kannte. Gemeinsam haben wir das System über zwei Jahre hinweg in eine moderne, vollautomatische SPS-Steuerung überführt.
Dabei entdeckte ich mein Interesse am Programmieren und setzte erste Hobbyprojekte um. Um dies zum Beruf zu machen, ging ich nach Nürnberg zur Robert Bosch GmbH und absolvierte eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung. Durch Vorwissen und Ehrgeiz konnte ich die Ausbildung auf 2,5 Jahre verkürzen und mit Auszeichnung abschließen.
Schon während der Ausbildung begann ich, die kaum vorhandene Softwareentwicklung am Standort zu modernisieren und auszubauen. Zuvor gab es lediglich 2–3 kleine .NET C# Webseiten. Ich habe diese migriert, übersetzt, optimiert und so schrittweise das JavaScript-Ökosystem eingeführt. Schließlich erhielt ich die erste Vollzeitstelle als Programmierer an diesem Standort.
Tech-Stack & Infrastruktur
Das System, das ich aufgebaut habe, ist mittlerweile sehr ausgereift. Ich betreue mehrere Red Hat Linux Terminal-Server für das Webhosting (Nginx als Reverse Proxy, PM2 für Prozessmanagement) sowie mehrere MSSQL-Datenbankserver. Zudem administriere ich einen GitHub Enterprise Server mit über 126 Repositories und 50 Mitgliedern.
Mein Tech-Stack umfasst Next.js, React, TypeScript, Prisma ORM und Tailwind CSS (shadcn). Ich nutze firmenspezifische Komponenten, Templates mit Utility-Funktionen sowie Linting/Formatierung (initial Prettier/ESLint, jetzt Biome) und ein festes Regelwerk für Clean Code.
Privates & Weiterbildung
Privat bilde ich mich leidenschaftlich gern weiter; schon beim Frühstück schaue ich Videos zu aktuellen Code-Themen. Auch sonst setze ich viele technische und analytische Projekte um. Ich baue meine eigenen Tastaturen (Open Source Hardware von GitHub) und beschäftige mich mit ergonomischen Layouts (Umstellung auf Colemak-DH). Mit meiner Lötstation fertige ich eigene PCBs, wie das Totem 38 Keys oder Anywhy, die ich in C mit ZMK programmiere. Zudem betreibe ich einen Home-Server mit Proxmox, auf dem Pi-hole, ein NAS und Home Assistant laufen, womit ich über Zigbee-Geräte meine gesamte Wohnung automatisiert habe.

Reisen & Persönliches
Ich bin viel gereist und habe mir gut zwei Sabbatjahre genommen, um verschiedene Länder und Kontinente zu erkunden – die meiste Zeit davon in Südamerika, aber auch in Asien und Europa. Dabei habe ich mir selbst Spanisch beigebracht und meine jetzige Frau kennengelernt. Zum Ausgleich gehe ich gerne wandern, auch mal Strecken von 600 km über mehrere Wochen. Den Jakobsweg (Camino de Santiago) bin ich bereits zweimal gelaufen.
Einstellung zu KI
Ich bin froh, dass meine Lernphase noch vor dem großen KI-Zeitalter lag. So habe ich alles "auf die harte Tour" über Dokumentationen, Stack Overflow und GitHub gelernt. Dadurch fällt es mir heute sofort auf, wenn eine KI unsinnigen Code erzeugt. Dennoch nutze ich KI intensiv als Werkzeug; ich weiß genau, wie man prompten muss, um guten Code zu erhalten – es beschleunigt die Arbeit einfach enorm.
Sprachen & Herkunft
Geboren bin ich in Elmshorn, meine Muttersprache ist Deutsch. Durch meine Reisen spreche ich recht gut Spanisch. Englisch spreche und lese ich täglich, da es zu Hause mit meiner Frau unsere Hauptsprache ist.

Eigene Projekte
Ein aktuelles Projekt von mir ist [drink2art](https://www.drink2art.com/), eine Plattform, die es Gästen ermöglicht, mithilfe von KI einzigartige Kunstwerke direkt am Tisch zu kreieren. Durch das automatische Branding mit dem Logo der Bar wird die Markenbindung gestärkt und organisches Marketing auf Social Media gefördert. Technisch basiert das Projekt auf modernen Modellen wie Googles Imagen. Ich nutze die Webseite primär als Experimentierfeld, um neueste Technologien auszuprobieren; bewähren sie sich dort, fließen diese Erfahrungen direkt in meine Hauptarbeit bei Bosch ein.


Meine Arbeits Robert Bosch Projekte
***

# Professional Portfolio
**Role:** Full-Stack Solution Architect & Lead Developer
> **Philosophy:** Bringing digitalization a bit further—from the server rack to the user interface.

### Professional Profile
I am a specialized developer capable of building and maintaining entire business applications independently. My expertise covers the full lifecycle: from gathering requirements directly with internal customers to designing the software architecture, managing high-availability infrastructure, and executing deployment.

### Technical Architecture & Operations
* **Infrastructure & Security:** Experienced Server Administrator for high-availability Linux NGINX web servers (Stage & Production). Proven ability to navigate and deploy within secured environments (Security Zones SL3/SL4).
* **Tech Stack:**
    * *Current Standard:* Next.js, React, TypeScript/JavaScript, Prisma ORM.
    * *Legacy Migration:* Migrated legacy C# Blazor projects to modern JavaScript frameworks to increase flexibility and performance.
    * *Automation:* Python scripting for complex data preparation and automated workflows.
* **CI/CD & DevOps:** Implementation of robust CI/CD pipelines with GitHub Actions and bash scripts to ensure smooth deployment. Usage of DevOps concepts to bridge the gap between development and operations. 

### Leadership & Methodology
* **GitHub Enterprise Organization Admin:** Administrator for the nup1-development organization with over 126 Repositories. Responsible for repository management, access control, security policies, and maintaining development standards.
* **Mentorship:** I actively support trainees through code reviews, providing technical advice, and conducting small training sessions to upskill the next generation of developers.
* **Project Management:** Independent management of customer relationships, including requirement analysis, timeline planning, and milestone tracking using Kanban boards.

### Strategic Internal Tooling
**Enterprise Web Template & Design System**
To increase development speed and standardization, I created a proprietary reusable web template.
* **Features:** Pre-configured Enterprise Authentication/Authorization (Entra ID), security features, and a library of reusable components and Functions.
* **Design:** Fully implemented Bosch Corporate Design (Colors, Supergraphic) to ensure immediate brand compliance.
* **Maintenance:** Continuously updated with the latest packages and frameworks to ensure security and longevity.

---

### Project Portfolio (Selected Works)


# Key Project PortfolioBB

### 1. Manufacturing & Maintenance Suite (MMS)
**Role:** Sole Developer (End-to-End)
**Scope:** Plant NuP1 Production & Service Teams

A comprehensive live-monitoring and incident management ecosystem designed to streamline production and repair workflows. This system connects physical machine performance with digital issue tracking.

* **Live Production Monitoring:** Real-time tracking of production lines, including "Last Part Passed" timing and heatmap visualizations to instantly identify bottlenecks.
* **SAP Integration:** Custom interface allowing operators to open SAP issues directly from the floor, bypassing complex standard GUIs.
* **Service Dashboard:** Priority-sorted dashboard for repair teams to monitor and react to incoming SAP issues.
* **AI-Assisted Repair:** implemented an AI engine trained on 20 years of issue data to provide predictive advice and solution recommendations to repair technicians.
* **Link:** `https://nup1-apps1.de.bosch.com/mms`

### 2. Strategic Personnel Planning (SPP)
**Role:** Lead Developer
**Scope:** HR Departments

A strategic HR tool designed to replace manual spreadsheet planning with dynamic, data-driven workforce analytics. It maps the current workforce against future organizational needs.

* **Workforce Mapping:** dynamic mapping of employees to job roles within specific departments per year.
* **Predictive Analytics:** Forecasting future movements, including retirement schedules, fixed-term contract expirations, and trainee conversions.
* **Gap Analysis:** Dashboard with extensive filtering to analyze current headcount vs. required roles to drive recruitment decisions.
* **Link:** `https://nup1-apps1.de.bosch.com/spp`

### 3. ITM-Location CMDB (Device Finder)
**Role:** Sole Developer
**Scope:** Plant NuP1

An interactive visualization tool solving the challenge of locating physical IT assets within a massive plant environment.

* **Interactive Mapping:** 2D Room Map of Plant NuP1 featuring over 3,000 pinned devices.
* **Precision Location:** Devices are pinned to real-world coordinates with metadata, including visual references (images) and descriptive location text.
* **Link:** `https://nup1-apps1.de.bosch.com/itm-lageplan`

### 4. My Stuff – Internal Marketplace
**Role:** Contributor / Lead Developer
**Scope:** Bosch-wide (RB)

A secure, internal exchange platform facilitating the circular economy within the company.

* **Exchange Platform:** Marketplace for buying, selling, or exchanging used items (under €25,000 value).
* **Adoption:** Successfully scaled for Bosch-wide usage.
* **Link:** `https://nup1-apps1.de.bosch.com/my-stuff`

### 5. ASM-Hub (Application Lifecycle Management)
**Role:** Developer / Contributor
**Scope:** Global Scale (NuP1 $\rightarrow$ PS $\rightarrow$ BBM $\rightarrow$ RB)

A unified platform for managing the entire lifecycle of software projects. Initially built for NuP1, the success of this tool led to it being scaled across multiple divisions and eventually Bosch-wide.

* **Lifecycle Management:** Centralized tracking of project progress, measures, and access control.
* **Document Standardization:** Central repository for document history, templates, and version control.
* **Compliance & Automation:** Automated import of measures via operator self-checks and integration with **LeanIX** for enterprise architecture compliance.
* **Link:** `https://rb-bbm-asm.app.bosch.com`



now with links for bosch specific offline internal usage:
---

***

# Professional Summary
**Full-Stack Solution Architect and DevOps Engineer.**
Specializing in independently developing complex business applications from concept to deployment. Proven track record of digitizing manual workflows, integrating custom services with enterprise systems (SAP, LeanIX), and scaling local solutions to global (RB-wide) adoption.

> **Core Philosophy:** Bringing digitalization further by bridging the gap between physical operations and digital strategy.

---

# Key Project Portfolio

### 1. Manufacturing & Maintenance Suite (MMS)
**Role:** Sole Developer (End-to-End)
**Scope:** Plant NuP1 Production & Service Teams

A comprehensive live-monitoring and incident management ecosystem designed to streamline production and repair workflows. This system connects physical machine performance with digital issue tracking.

* **Live Production Monitoring:** Real-time tracking of production lines, including "Last Part Passed" timing and heatmap visualizations to instantly identify bottlenecks.
* **SAP Integration:** Custom interface allowing operators to open SAP issues directly from the floor, bypassing complex standard GUIs.
* **Service Dashboard:** Priority-sorted dashboard for repair teams to monitor and react to incoming SAP issues.
* **AI-Assisted Repair:** implemented an AI engine trained on 20 years of issue data to provide predictive advice and solution recommendations to repair technicians.
* **Link:** `https://nup1-apps1.de.bosch.com/mms`

### 2. Strategic Personnel Planning (SPP)
**Role:** Lead Developer
**Scope:** HR Departments

A strategic HR tool designed to replace manual spreadsheet planning with dynamic, data-driven workforce analytics. It maps the current workforce against future organizational needs.

* **Workforce Mapping:** dynamic mapping of employees to job roles within specific departments per year.
* **Predictive Analytics:** Forecasting future movements, including retirement schedules, fixed-term contract expirations, and trainee conversions.
* **Gap Analysis:** Dashboard with extensive filtering to analyze current headcount vs. required roles to drive recruitment decisions.
* **Link:** `https://nup1-apps1.de.bosch.com/spp`

### 3. ITM-Location CMDB (Device Finder)
**Role:** Sole Developer
**Scope:** Plant NuP1

An interactive visualization tool solving the challenge of locating physical IT assets within a massive plant environment.

* **Interactive Mapping:** 2D Room Map of Plant NuP1 featuring over 3,000 pinned devices.
* **Precision Location:** Devices are pinned to real-world coordinates with metadata, including visual references (images) and descriptive location text.
* **Link:** `https://nup1-apps1.de.bosch.com/itm-lageplan`

### 4. My Stuff – Internal Marketplace
**Role:** Contributor / Lead Developer
**Scope:** Bosch-wide (RB)

A secure, internal exchange platform facilitating the circular economy within the company.

* **Exchange Platform:** Marketplace for buying, selling, or exchanging used items (under €25,000 value).
* **Adoption:** Successfully scaled for Bosch-wide usage.
* **Link:** `https://nup1-apps1.de.bosch.com/my-stuff`

### 5. ASM-Hub (Application Lifecycle Management)
**Role:** Developer / Contributor
**Scope:** Global Scale (NuP1 $\rightarrow$ PS $\rightarrow$ BBM $\rightarrow$ RB)

A unified platform for managing the entire lifecycle of software projects. Initially built for NuP1, the success of this tool led to it being scaled across multiple divisions and eventually Bosch-wide.

* **Lifecycle Management:** Centralized tracking of project progress, measures, and access control.
* **Document Standardization:** Central repository for document history, templates, and version control.
* **Compliance & Automation:** Automated import of measures via operator self-checks and integration with **LeanIX** for enterprise architecture compliance.
* **Link:** `https://rb-bbm-asm.app.bosch.com`

---

