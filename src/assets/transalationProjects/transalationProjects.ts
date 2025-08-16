// src/data/projects.ts

export type ProjectContent = {
  title: string;
  description: string;
  longDescription: string;
};

export type ProjectItem = {
  image: string;
  link: string;
  logo: string;
  date: string;
  type: string;
  // Objeto con las traducciones
  translations: {
    en: ProjectContent;
    es: ProjectContent;
    // Agrega más idiomas aquí según los necesites
  };
};

const projectsTranslate: ProjectItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
    logo: '/logo.png',
    date: 'Feb, 2024',
    type: 'Microservices / Backend',
    translations: {
      en: {
        title: 'LifePost',
        description: 'LifePost is an application designed to provide inspiration and motivation, as well as a sanctuary where people can freely express themselves.',
        longDescription: "A space where everyone has the opportunity to share their stories with the world.",
      },
      es: {
        title: 'LifePost',
        description: 'LifePost es una aplicación diseñada para brindar inspiración y motivación, así como un santuario donde las personas pueden expresarse libremente.',
        longDescription: "Un espacio donde todos tienen la oportunidad de compartir sus historias con el mundo.",
      },
    },
  },
  // Agrega el resto de tus proyectos aquí con sus traducciones
  {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
    logo: '/logo-nextjs.png',
    date: 'Jan, 2024',
    type: 'Frontend / Fullstack',
    translations: {
      en: {
        title: 'Image Optimizator',
        description: 'It is an MVC application designed to optimize and compress images, utilizing the JavaScript runtime environment Node.js and Express.js.',
        longDescription: "Optimize your images for your projects and websites.",
      },
      es: {
        title: 'Image Optimizator',
        description: 'Es una aplicación MVC cuya función es optimizar y comprimir imágenes, utilizando el entorno de ejecución de JavaScript Node js y Express-js.',
        longDescription: "Optimiza tus imágenes para tus trabajos y sitios web.",
      },
    },
  },
    {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
    logo: '/logo-nextjs.png',
    date: 'Jan, 2024',
    type: 'Frontend / Fullstack',
    translations: {
      en: {
        title: 'List-api',
        description: 'listuser-api is a mini API created for a technical test. Provides user management through functionalities such as user creation, listing, updating, and deletion.',
        longDescription: "listuser provides an efficient and easy way to manage and list users.",
      },
      es: {
        title: '',
        description: 'listuser-api es una mini API creada para una prueba técnica. Proporciona gestión de usuarios como creación, listado, actualización y eliminación de usuarios.',
        longDescription: "listuser proporciona una manera eficiente y sencilla de administrar y listar usuarios.",
      },
    },
  },
      {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
    logo: '/logo-nextjs.png',
    date: 'Jan, 2024',
    type: 'Frontend / Fullstack',
    translations: {
      en: {
        title: 'listuser',
        description: 'listuser is an application created to display the views of the listuser-api. It provides user management such as creating, listing, updating and deleting users.',
        longDescription: "The main objective of Listuser is to demonstrate an efficient and simple way of how the listuser-api works in real-time.",
      },
      es: {
        title: 'listuser',
        description: 'listuser es una aplicacion creada para mostar las vistas de la api listuser-api. Proporciona una forma sencilla de cómo funciona la API en tiempo real.',
        longDescription: "listuser Proporciona vistas de una forma sencilla para mostrar el funcionamiento de la API de lisuser-api en tiempo real.",
      },
    },
  },
  // ... más proyectos
];

export default projectsTranslate;