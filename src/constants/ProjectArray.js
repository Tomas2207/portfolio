const projectsArray = [
  {
    img_path:
      'https://res.cloudinary.com/dbejjbpof/video/upload/v1690729958/Pet-Feed_z1k3qw.mp4',
    title: 'Pet Feed',
    code_url: 'https://github.com/Tomas2207/Pet-Feed',
    live_url: 'https://pet-feed-phi.vercel.app/',
    desc: 'Pet Feed is a social media app where pets take the center stage. It provides a platform for pet owners to create profiles for their beloved animals, share their adventures, and connect with other pet enthusiasts.',
    images: ['/icons/next.svg', '/icons/mongodb.svg'],
    animation_delay: 0,
    isVideo: true,
  },
  {
    img_path:
      'https://res.cloudinary.com/dbejjbpof/video/upload/v1681886964/next-booking/simplescreenrecorder-_4_wxbrqr.mp4',
    title: 'Planner',
    code_url: 'https://github.com/Tomas2207/next-booking',
    live_url: 'https://planner-tomas2207.vercel.app/',
    desc: 'Planner is a booking website that allows you to search for stays all around the world. The website uses the Booking.com API to fetch stays and Mapbox to display a map with the locations of these stays.',
    images: ['/icons/next.svg', '/icons/mongodb.svg'],
    animation_delay: 0,
    isVideo: true,
  },
  {
    img_path:
      'https://res.cloudinary.com/dbejjbpof/video/upload/v1681888109/expense-manager/simplescreenrecorder_fyq6ao.mp4',
    title: 'Expense Manager',
    code_url: 'https://github.com/Tomas2207/expenses_client',
    server: 'https://github.com/Tomas2207/expense_server',
    live_url: 'https://exp-manager.netlify.app/',
    desc: 'Expense manager app where you can manage and track your personal finances, as well as changing to different currencies on the spot.',
    images: [
      '/icons/postgres.svg',
      '/icons/express.svg',
      '/icons/react.svg',
      '/icons/nodejs.svg',
    ],
    animation_delay: 0,
    isVideo: true,
  },
  {
    img_path: '/img/movie-app.png',
    title: 'Movie Application',
    code_url: 'https://github.com/Tomas2207/movie-app-client',
    server: 'https://github.com/Tomas2207/movie-app-server',
    live_url: 'https://movieapp-client.netlify.app/',
    desc: 'Movie application based around The movie database API. User creation, authentication and customization, display of trending movies, search movies, rate them and add them to user watchlist',
    images: [
      '/icons/mongodb.svg',
      '/icons/express.svg',
      '/icons/react.svg',
      '/icons/nodejs.svg',
    ],
    animation_delay: 0,
    isVideo: false,
  },
];

export { projectsArray };
