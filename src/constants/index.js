import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Soy un apasionado desarrollador full stack con una habilidad especial para crear aplicaciones web robustas y escalables. Con 2 años de experiencia práctica, he mejorado mis habilidades en tecnologías de front-end como React y Angular, así como en tecnologías de back-end como Node.js, MySQL, PostgreSQL y Ruby on Rails. Además, tengo experiencia en la creación de automatizaciones y en el web scraping utilizando Python. Mi objetivo es aprovechar mi experiencia para crear soluciones innovadoras que impulsen el crecimiento empresarial y ofrezcan experiencias de usuario excepcionales.`;

export const ABOUT_TEXT = `Soy un desarrollador full stack dedicado y versátil con una pasión por crear aplicaciones web eficientes y fáciles de usar. Con 2 años de experiencia profesional, he trabajado con una variedad de tecnologías, incluyendo React, Angular, Node.js, MySQL, PostgreSQL y Ruby on Rails. Mi camino en el desarrollo web comenzó con una profunda curiosidad por entender cómo funcionan las cosas, y ha evolucionado en una carrera donde continuamente me esfuerzo por aprender y adaptarme a nuevos desafíos. Disfruto trabajando en entornos colaborativos y resolviendo problemas complejos para ofrecer soluciones de alta calidad. Fuera del mundo de la programación, me gusta mantenerme activo, explorar nuevas tecnologías y contribuir a proyectos de código abierto.`;

export const EXPERIENCES = [
  {
    year: "jul 2023 - actualidad",
    role: "Semi-Senior Full Stack Developer",
    company: "Valuelist",
    description: ` Implementación de metodologías ágiles (Scrum) en la gestión de proyectos (Líder de equipo TI). Encargado de la migración de la plataforma desde Google Cloud Plataform (GCP) hacia Amazon Web Services (AWS).`,
    technologies: ["Angular", "Ruby on Rails", "AWS", "SCRUM","Python", "Git"],
  },
  {
    year: "mar 2023 - julio 2023",
    role: "Junior Fullstack Developer (Práctica Profesional)",
    company: "Valuelist",
    description: `Desarrollo y mantenimiento de aplicaciones web utilizando Ruby on Rails, creación de automatizaciones con Python`,
    technologies: ["Ruby on Rails", "Angular","MySQL", "Docker", "mySQL","Git"],
  },
  {
    year: "dic 2022 - mar 2023",
    role: "Frontend Developer (Práctica Básica)",
    company: "Valuelist",
    description: `Creación de componentes en Angular, Optimización de bases de datos y desarrollo de estrategias de web scraping`,
    technologies: ["Python", "Angular", "Google Cloud Plataform", "Postgres","Git"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Un sitio web de comercio electrónico completamente funcional con características como listado de productos, carrito de compras y autenticación de usuarios.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Automatización para Ingresar Precios de Cierre",
    image: project2,
    description:
      "Se desarrolló una automatización con Python para el ingreso recurrente de precios de cierre en la plataforma. Esta solución accede a APIs de terceros y programa procesos en máquinas virtuales, implementándolo todo en GCP.",
    technologies: ["GCP", "Git", "Python", "PostgreSQL", "MySQL"],
  },
  {
    title: "Migración de GCP a AWS",
    image: project3,
    description:
      "Encargado de liderar la migración de Google Cloud Platform a AWS, considerando mover todos los servicios del proyecto, tanto del frontend como del backend. También se implementó Amazon Textract para leer información con IA desde imágenes.",
    technologies: ["GCP", "AWS", "App Engine", "Beanstalk", "Amplify", "Textract"],
  },
  {
    title: "Creación de Módulo de Rentabilidad",
    image: project4,
    description:
      "Se creó un nuevo módulo en la plataforma a pedido de un cliente (Davant). Se lideró el equipo como Scrum Master y se implementaron diversas funcionalidades tanto en el backend como en el frontend. Estas permiten realizar cálculos de rentabilidad por fecha, ver movimientos de activos y otras funcionalidades. Los datos se recopilan mediante web scraping de diferentes plataformas financieras utilizando automatizaciones con Python.",
    technologies: ["GCP", "Angular", "Ruby on Rails", "Python", "Scrum"],
  },
];

export const CONTACT = {
  address: "Valparaíso",
  phoneNo: "+569 5974 5417 ",
  email: "emiliano@valuelist.cl",
};
