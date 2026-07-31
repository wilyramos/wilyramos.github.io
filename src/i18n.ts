import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        projects: "PROYECTOS",
        about: "SOBRE MÍ",
        experience: "EXPERIENCIA",
        skills: "HABILIDADES"
      },
      projects: {
        title: "Proyectos",
        labels: {
          frontend: "Frontend",
          backend: "Backend",
          dataBase: "Base de Datos",
          infra: "Infraestructura"
        },
        items: [
          {
            title: "GoPhone - Ecommerce",
            description: "Aplicación de comercio electrónico completa con catálogo dinámico, checkout optimizado, POS integrado, pasarelas de pago (Izipay, Culqi, MercadoPago), panel de administración, reportes en PDF y notificaciones automatizadas por correo.",
            imageUrl: "https://res.cloudinary.com/dof0z9tt5/image/upload/v1785519659/Captura_de_pantalla_2026-07-31_124052_jowsvh.png",
            link: "https://gophone.pe/",
            githuburl: "https://github.com/wilyramos/ecommerce_nextjs_ts_frontend",
            frontend: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS 4", "Zustand", "Radix UI", "MercadoPago SDK"],
            backend: ["Node.js", "Express 5", "REST API", "Mongoose", "JWT Auth", "Nodemailer / Resend", "Node-cron"],
            dataBase: ["MongoDB"],
            infra: ["Cloudinary", "Vercel", "GitHub Actions (CI/CD)"]
          },
          {
            title: "NeoShop Importaciones",
            description: "Plataforma de e-commerce con integración de pasarela de pagos (MercadoPago), notificaciones por correo transaccionales automatizadas, backoffice de gestión y flujos de checkout fluidos.",
            imageUrl: "https://res.cloudinary.com/dof0z9tt5/image/upload/v1785519446/Captura_de_pantalla_2026-07-31_122311_uv8d3n.png",
            link: "https://www.neoshopimportaciones.com/",
            frontend: ["Next.js 15", "TypeScript", "TailwindCSS", "Zustand", "Radix UI"],
            backend: ["Node.js", "Express", "REST API", "JWT Auth", "Resend", "Cloudinary"],
            dataBase: ["MongoDB"],
            infra: ["Vercel", "GitHub Actions"]
          },
          {
            title: "SYC Mobile",
            description: "Plataforma de e-commerce con catálogo dinámico, procesamiento de pagos seguro, correos transaccionales automatizados, generación de códigos QR y gestión de tienda.",
            imageUrl: "https://res.cloudinary.com/dof0z9tt5/image/upload/v1785519446/Captura_de_pantalla_2026-07-31_122334_erpffn.png",
            link: "https://sycmobile.pe/",
            frontend: ["Next.js 15", "TypeScript", "TailwindCSS", "React Hook Form", "Zod"],
            backend: ["Node.js", "Express", "REST API", "JWT", "Nodemailer", "PDFKit"],
            dataBase: ["MongoDB"],
            infra: ["Cloudinary", "Vercel"]
          },
          {
            title: "BALENS - Fashion Store",
            description: "E-commerce enfocado en moda con configuraciones de productos variables, panel de administración, filtrado avanzado y diseño UI personalizado.",
            imageUrl: "/balens.jpg",
            githuburl: "https://github.com/wilyramos/ecommerce_angular_frontend",
            frontend: ["Angular", "TypeScript", "SCSS", "Reactive Forms"],
            backend: ["Node.js", "NestJS", "Cloud Functions"],
            dataBase: ["MongoDB"],
            infra: ["Firebase Hosting", "Firebase Storage", "AWS S3"]
          },
          {
            title: "GoGYM - Fitness App",
            description: "Plataforma de gestión de gimnasios con seguimiento de membresías, procesamiento de pagos, reportes analíticos y seguimiento del progreso de entrenamiento.",
            imageUrl: "/gym.webp",
            link: "https://gogym-pink.vercel.app/",
            githuburl: "https://github.com/wilyramos/backend_gym_nestjs",
            frontend: ["Next.js", "TypeScript", "TailwindCSS"],
            backend: ["Node.js", "NestJS", "REST API"],
            dataBase: ["PostgreSQL", "Prisma"],
            infra: ["Vercel", "Railway", "GitHub Actions"]
          },
          {
            title: "SonrisaDigital",
            description: "Plataforma de gestión para clínicas dentales con programación de especialistas, historias clínicas electrónicas y recordatorios automáticos de citas.",
            imageUrl: "/sonrisadigital3.webp",
            link: "https://sonrisadigital.vercel.app/",
            githuburl: "https://github.com/wilyramos/sonrisadigital_react_ts_frontend",
            frontend: ["React", "TypeScript", "TailwindCSS"],
            backend: ["Node.js", "Express", "Mailer Service"],
            dataBase: ["PostgreSQL", "Prisma"],
            infra: ["Vercel", "Railway", "SMTP Provider"]
          },
          {
            title: "SociaLynks",
            description: "Aplicación de bio-links digitales personalizable para agrupar enlaces sociales en un solo lugar al estilo Linktree.",
            imageUrl: "/socialynks.webp",
            link: "https://socialynks.vercel.app/",
            githuburl: "https://github.com/wilyramos/socialynks_express_frontend",
            frontend: ["React", "TypeScript", "TailwindCSS"],
            backend: ["Node.js", "Express"],
            dataBase: ["MongoDB"],
            infra: ["Vercel", "Railway"]
          }
        ]
      },
      presentation: {
        hi: "// Hola 👋, mi nombre es",
        roleText: "Ingeniero de Sistemas de la UNMSM con experiencia en desarrollo full stack, procesamiento de datos y arquitecturas cloud en AWS. Especializado en construir aplicaciones de extremo a extremo y pipelines escalables con S3, SageMaker y contenedores."
      },
      experience: {
        title: "Experiencia Laboral",
        techLabel: "Tecnologías:",
        items: [
          {
            company: "Indra Group (Minsait)",
            location: "Lima, Perú",
            roles: [
              {
                title: "Data Developer AWS",
                duration: "jun. 2026 - actualidad",
                skills: "AWS (S3, SageMaker, EC2, ECS, ECR), Python, Containers, Data Pipelines"
              },
              {
                title: "Programmer Analyst",
                duration: "abr. 2026 - may. 2026",
                skills: "PL/SQL, Java, Angular, Spring Boot"
              },
              {
                title: "Software Developer",
                duration: "dic. 2025 - abr. 2026",
                skills: "Java, Spring Boot, Bitbucket, Jira"
              }
            ],
            projects: [
              {
                name: "Proyecto BBVA (jun. 2026 - actualidad)",
                description: [
                  "Rol como Data Developer AWS enfocado en el desarrollo, orquestación y automatización de flujos e infraestructura de datos en la nube.",
                  "Implementación de arquitecturas con AWS (S3, SageMaker, EC2, ECS, ECR), contenedores y Python para el procesamiento de datos analíticos."
                ]
              },
              {
                name: "Proyecto MAPFRE - Mapfre Reef Centroamérica (dic. 2025 - may. 2026)",
                description: [
                  "Desarrollo, mantenimiento y configuración de productos de seguros core con Oracle PL/SQL, Java (Spring Boot) y Angular.",
                  "Análisis, modelamiento de datos y optimización de consultas complejas en PL/SQL."
                ]
              }
            ]
          },
          {
            company: "Freelancer",
            location: "Remoto",
            roles: [
              {
                title: "Software Developer",
                duration: "ene. 2025 - dic. 2025",
                skills: "AWS, Node.js, Next.js, Python, Docker"
              }
            ],
            projects: [
              {
                name: "Proyectos Varios (Full Stack & Cloud)",
                description: [
                  "Desarrollo e implementación de soluciones full stack, diseñando arquitecturas e integración eficiente de APIs.",
                  "Análisis y modelamiento de datos para la persistencia en bases de datos relacionales (PostgreSQL, MySQL) y NoSQL (MongoDB).",
                  "Despliegue automatizado de aplicaciones e infraestructura en la nube utilizando Docker y servicios cloud de AWS (EC2, S3, ECR, ECS)."
                ]
              }
            ]
          }
        ]
      },
      skills: {
        title: "Habilidades y Tecnologías"
      },
      about: {
        title: "Sobre Mí",
        p1: "¡Hola! Soy <1>Wily Ramos</1>, egresado de <3>Ingeniería de Sistemas</3> de la <5>Universidad Nacional Mayor de San Marcos</5>.",
        p2: "Cuento con sólida experiencia en <1>desarrollo backend y bases de datos</1>, especialmente en los sectores financiero y asegurador para grandes empresas. Me especializo en construir soluciones robustas usando <5>Java, Spring Boot, Oracle PL/SQL</5> y frontends modernos.",
        p3: "Mi objetivo profesional actual es desarrollarme en el rol de <1>Data Engineer / Data Developer</1> en la nube. Estoy expandiendo activamente mi experiencia en <3>Python, preprocesamiento de datos, orquestación y servicios cloud de AWS</3> para diseñar pipelines de datos de extremo a extremo.",
        p4: "Soy autodidacta, adaptable y siempre <1>abierto a nuevos retos</1> que me permitan aprovechar mi experiencia full stack dentro del ecosistema de ingeniería de datos."
      }
    }
  },
  en: {
    translation: {
      nav: {
        projects: "PROJECTS",
        about: "ABOUT ME",
        experience: "EXPERIENCE",
        skills: "SKILLS"
      },
      projects: {
        title: "Projects",
        labels: {
          frontend: "Frontend",
          backend: "Backend",
          dataBase: "Database",
          infra: "Infrastructure"
        },
        items: [
          {
            title: "GoPhone - Ecommerce",
            description: "Complete e-commerce application featuring dynamic catalog, optimized checkout, integrated POS, payment gateways (Izipay, Culqi, MercadoPago), admin panel, PDF reporting, and automated email notifications.",
            imageUrl: "https://res.cloudinary.com/dof0z9tt5/image/upload/v1785519659/Captura_de_pantalla_2026-07-31_124052_jowsvh.png",
            link: "https://gophone.pe/",
            githuburl: "https://github.com/wilyramos/ecommerce_nextjs_ts_frontend",
            frontend: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS 4", "Zustand", "Radix UI", "MercadoPago SDK"],
            backend: ["Node.js", "Express 5", "REST API", "Mongoose", "JWT Auth", "Nodemailer / Resend", "Node-cron"],
            dataBase: ["MongoDB"],
            infra: ["Cloudinary", "Vercel", "GitHub Actions (CI/CD)"]
          },
          {
            title: "NeoShop Importaciones",
            description: "Full e-commerce platform with payment gateway integration (MercadoPago), automated transactional email notifications, management backoffice, and seamless checkout flows.",
            imageUrl: "https://res.cloudinary.com/dof0z9tt5/image/upload/v1785519446/Captura_de_pantalla_2026-07-31_122311_uv8d3n.png",
            link: "https://www.neoshopimportaciones.com/",
            frontend: ["Next.js 15", "TypeScript", "TailwindCSS", "Zustand", "Radix UI"],
            backend: ["Node.js", "Express", "REST API", "JWT Auth", "Resend", "Cloudinary"],
            dataBase: ["MongoDB"],
            infra: ["Vercel", "GitHub Actions"]
          },
          {
            title: "SYC Mobile",
            description: "E-commerce platform with dynamic catalog, secure payment processing, automated transactional emails, QR code generation, and store management.",
            imageUrl: "https://res.cloudinary.com/dof0z9tt5/image/upload/v1785519446/Captura_de_pantalla_2026-07-31_122334_erpffn.png",
            link: "https://sycmobile.pe/",
            frontend: ["Next.js 15", "TypeScript", "TailwindCSS", "React Hook Form", "Zod"],
            backend: ["Node.js", "Express", "REST API", "JWT", "Nodemailer", "PDFKit"],
            dataBase: ["MongoDB"],
            infra: ["Cloudinary", "Vercel"]
          },
          {
            title: "BALENS - Fashion Store",
            description: "Fashion-focused e-commerce featuring variable product configurations, admin dashboard, advanced filtering, and fully customized UI design.",
            imageUrl: "/balens.jpg",
            githuburl: "https://github.com/wilyramos/ecommerce_angular_frontend",
            frontend: ["Angular", "TypeScript", "SCSS", "Reactive Forms"],
            backend: ["Node.js", "NestJS", "Cloud Functions"],
            dataBase: ["MongoDB"],
            infra: ["Firebase Hosting", "Firebase Storage", "AWS S3"]
          },
          {
            title: "GoGYM - Fitness App",
            description: "Gym management platform featuring membership tracking, payment handling, analytical reports, and individual workout progress tracking.",
            imageUrl: "/gym.webp",
            link: "https://gogym-pink.vercel.app/",
            githuburl: "https://github.com/wilyramos/backend_gym_nestjs",
            frontend: ["Next.js", "TypeScript", "TailwindCSS"],
            backend: ["Node.js", "NestJS", "REST API"],
            dataBase: ["PostgreSQL", "Prisma"],
            infra: ["Vercel", "Railway", "GitHub Actions"]
          },
          {
            title: "SonrisaDigital",
            description: "Dental clinic management platform with specialist scheduling, electronic health records, and automated appointment reminders.",
            imageUrl: "/sonrisadigital3.webp",
            link: "https://sonrisadigital.vercel.app/",
            githuburl: "https://github.com/wilyramos/sonrisadigital_react_ts_frontend",
            frontend: ["React", "TypeScript", "TailwindCSS"],
            backend: ["Node.js", "Express", "Mailer Service"],
            dataBase: ["PostgreSQL", "Prisma"],
            infra: ["Vercel", "Railway", "SMTP Provider"]
          },
          {
            title: "SociaLynks",
            description: "Customizable digital bio-link application designed to aggregate social links in a single location, Linktree-style.",
            imageUrl: "/socialynks.webp",
            link: "https://socialynks.vercel.app/",
            githuburl: "https://github.com/wilyramos/socialynks_express_frontend",
            frontend: ["React", "TypeScript", "TailwindCSS"],
            backend: ["Node.js", "Express"],
            dataBase: ["MongoDB"],
            infra: ["Vercel", "Railway"]
          }
        ]
      },
      presentation: {
        hi: "// Hi there 👋, my name is",
        roleText: "Systems Engineer from UNMSM with experience in full stack development, data processing, and AWS cloud architectures. Specialized in building end-to-end applications and scalable cloud data pipelines with S3, SageMaker, and containers."
      },
      experience: {
        title: "Work Experience",
        techLabel: "Technologies:",
        items: [
          {
            company: "Indra Group (Minsait)",
            location: "Lima, Peru",
            roles: [
              {
                title: "Data Developer AWS",
                duration: "Jun 2026 - Present",
                skills: "AWS (S3, SageMaker, EC2, ECS, ECR), Python, Containers, Data Pipelines"
              },
              {
                title: "Programmer Analyst",
                duration: "Apr 2026 - May 2026",
                skills: "PL/SQL, Java, Angular, Spring Boot"
              },
              {
                title: "Software Developer",
                duration: "Dec 2025 - Apr 2026",
                skills: "Java, Spring Boot, Bitbucket, Jira"
              }
            ],
            projects: [
              {
                name: "BBVA Project (Jun 2026 - Present)",
                description: [
                  "Role as Data Developer AWS focused on the development, orchestration, and automation of data workflows and cloud infrastructure.",
                  "Implementation of architectures with AWS (S3, SageMaker, EC2, ECS, ECR), containers, and Python for analytical data processing."
                ]
              },
              {
                name: "MAPFRE Project - Mapfre Reef Central America (Dec 2025 - May 2026)",
                description: [
                  "Development, maintenance, and configuration of core insurance products with Oracle PL/SQL, Java (Spring Boot), and Angular.",
                  "Data analysis, data modeling, and query optimization for complex PL/SQL statements."
                ]
              }
            ]
          },
          {
            company: "Freelancer",
            location: "Remote",
            roles: [
              {
                title: "Software Developer",
                duration: "Jan 2025 - Dec 2025",
                skills: "AWS, Node.js, Next.js, Python, Docker"
              }
            ],
            projects: [
              {
                name: "Various Projects (Full Stack & Cloud)",
                description: [
                  "Development and implementation of full-stack solutions, designing efficient architecture and API integrations.",
                  "Data analysis and modeling for persistence in relational databases (PostgreSQL, MySQL) and NoSQL (MongoDB).",
                  "Automated deployment of applications and cloud infrastructure using Docker and AWS cloud services (EC2, S3, ECR, ECS)."
                ]
              }
            ]
          }
        ]
      },
      skills: {
        title: "Skills & Technologies"
      },
      about: {
        title: "About Me",
        p1: "Hi! I’m <1>Wily Ramos</1>, a <3>Systems Engineering graduate</3> from <5>Universidad Nacional Mayor de San Marcos</5>.",
        p2: "I have solid experience in <1>backend development and databases</1>, specifically within the financial and insurance sectors for major companies. I specialize in building robust solutions using <5>Java, Spring Boot, Oracle PL/SQL</5>, and modern frontends.",
        p3: "My current professional objective is to transition into a <1>Data Engineer / Data Developer</1> role in the cloud. I am actively expanding my expertise in <3>Python, data preprocessing, orchestration, and AWS cloud services</3> to design end-to-end data pipelines.",
        p4: "I am highly self-taught, adaptable, and always <1>open to new challenges</1> that allow me to leverage my full stack background into the data engineering ecosystem."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;