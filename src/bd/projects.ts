interface IProject {
  name: string;
  subtitle: {es: string; en: string};
  banner: string;
  images: string[];
  scopes: string[];
  technologies: string[];
  description: {es: string; en: string};
  url: string;
  time: string[];
}
export const projects: IProject[] = [
  {
    name: 'Match Services APP',
    subtitle: {es: 'App de negocios', en: 'Business APP'},
    banner: '/images/match.png',
    images: [''],
    scopes: ['Frontend', 'Mobile', 'Backend', 'Microservices', 'Database'],
    technologies: [
      'React Native',
      'NodeJS',
      'Typescript',
      'Express',
      'MongoDB',
    ],
    time: ['12/2021', '04/2023'],
    description: {
      es: 'Aplicacion mobile desarrollada con react native, nextjs, redux, store. Exportada para Android y IOS. Backend en arquitectura de microservicios, desarrollado con patron de n-capas, en nodejs y typescript, con base de datos desarrollada con mongoDB. Para este software, se trabajo ademas con patron orchestator para administrar los microservicios, personalizando distintos backend for frontends para la web app, la app mobile y el backoffice',
      en: 'Mobile application developed with react native, nextjs, redux, store. Exported for Android and IOS. Backend in microservices architecture, developed with an n-layer pattern, in nodejs and typescript, with a database developed with mongoDB. For this software, we also work with pattern orchestrator to manage the microservices, customizing different backends for frontends for the web app, the mobile app and the backoffice.',
    },
    url: 'https://play.google.com/store/search?q=match%20services&c=apps&hl=es_419',
  },
  {
    name: 'Match Web APP',
    subtitle: {es: 'App de negocios', en: 'Business APP'},
    banner: '/images/match_webapp.png',
    images: [''],
    scopes: ['Frontend', 'Backend', 'Microservices', 'Database'],
    technologies: ['React', 'NextJS', 'Typescript', 'Express', 'MongoDB'],
    time: ['01/2023', '04/2023'],
    description: {
      es: 'Aplicacion web desarrollada con react, nextjs, redux, store. Backend en arquitectura de microservicios, desarrollado con patron de n-capas, en nodejs y typescript, con base de datos desarrollada con mongoDB. Para este software, se trabajo ademas con patron orchestator para administrar los microservicios, personalizando distintos backend for frontends para la web app, la app mobile y el backoffice',
      en: 'Web application developed with react, nextjs, redux, store. Backend in microservices architecture, developed with an n-layer pattern, in nodejs and typescript, with a database developed with mongoDB. For this software, we also work with pattern orchestrator to manage the microservices, customizing different backends for frontends for the web app, the mobile app and the backoffice.',
    },
    url: 'https://app.match.services/',
  },
  {
    name: 'Levelapp',
    subtitle: {es: 'Gestor de negocios', en: 'ERP'},
    banner: '/images/levelapp.png',
    images: [''],
    scopes: ['Frontend', 'Backend', 'Database'],
    technologies: ['React', 'NextJS', 'Typescript', 'Express', 'MongoDB'],
    time: ['08/2022', '03/2023'],
    description: {
      es: 'ERP multinegocios, creado para administrar ventas, compras, clientes, proveedores, productos, presupuestos y más.',
      en: 'Multi-business ERP, created to manage sales, purchases, customers, suppliers, products, budgets and more',
    },
    url: 'https://next-levelapp.vercel.app/',
  },
  {
    name: 'Alannia Backoffice',
    subtitle: {
      es: 'Gastor backoffice para reservas de hotel',
      en: 'Back office manager for hotel reservations',
    },
    banner: '/images/alannia_backoffice.png',
    images: [''],
    scopes: ['Frontend'],
    technologies: ['Angular', 'Angular Material'],
    time: [''],
    description: {
      es: 'Administrador backoffice desarrollado para manejar reservas, traducciones, multiples hoteles, clientes',
      en: 'Backoffice administrator developed to handle reservations, translations, multiple hotels, clients',
    },
    url: '',
  },
  {
    name: 'Deintimaciones',
    subtitle: {
      es: 'Gastor backoffice para reservas de hotel',
      en: 'Back office manager for hotel reservations',
    },
    banner: '/images/deintimaciones.png',
    images: [''],
    scopes: ['Frontend'],
    technologies: ['Angular', 'Angular Material'],
    time: [''],
    description: {
      es: 'Administrador backoffice desarrollado para manejar reservas, traducciones, multiples hoteles, clientes',
      en: 'Backoffice administrator developed to handle reservations, translations, multiple hotels, clients',
    },
    url: 'https://www.deintimaciones.com/',
  },
  {
    name: 'Catita Baby',
    subtitle: {
      es: 'Ecommerce',
      en: 'Ecommerce',
    },
    banner: '/images/catita.png',
    images: [''],
    scopes: ['Frontend', 'Backend', 'Database'],
    technologies: ['Angular', 'Angular Material'],
    time: [''],
    description: {
      es: 'Ecommerce',
      en: 'Ecommerce',
    },
    url: 'https://catita-baby.web.app/',
  },
];
