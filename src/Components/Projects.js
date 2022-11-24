import Project from './Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  return (
    <div className="about" id="projects">
      <div className="about-content">
        <h3 className="about-title">Projects</h3>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Project
            props={{
              img_path: '/img/movie-app.png',
              project_name: 'Movie Application',
              code_url: 'https://github.com/Tomas2207/movie-app-client',
              server: 'https://github.com/Tomas2207/movie-app-server',
              live_url: 'https://movieapp-client.netlify.app/',
              desc: 'Movie application based around The movie database API. Made with MongoDb, Express, React, NodeJs, Javascript, HTML and CSS. User creation, authentication and customization, display of trending movies, search movies and add them to user watchlist',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            props={{
              img_path: '/img/school-database.png',
              project_name: 'School Database',
              code_url: 'https://github.com/Tomas2207/school-database-front',
              server: 'https://github.com/Tomas2207/school-database',
              live_url: 'https://school-database.netlify.app/',
              desc: "I'm currently teaching computer studies, programming and web development in a private school, so I decided to make a project to manage classes, teachers and students as an admin in this database, that I could also show to my class. Made with MongoDb, Express, React, NodeJs, Javascript, HTML and CSS. Create an admin profile and manage school information ",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            props={{
              img_path: '/img/members-message.png',
              project_name: 'Message App',
              code_url: 'https://github.com/Tomas2207/members-message',

              live_url: 'https://members-message-app.onrender.com/',
              desc: 'Realtime message application made with mongoDB, Express, NodeJs and Socket.io. User creation, authentication and customization. Add friends and create chatrooms',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            props={{
              img_path: '/img/bank-page.png',
              project_name: 'Bank Landing Page ',
              code_url: 'https://github.com/Tomas2207/bank-page',
              live_url: 'https://tomas2207.github.io/bank-page/',
              desc: 'Frontend app made with React. Simulates a Bank website with online banking and transactions between accounts ',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            props={{
              img_path: '/img/shopping-cart.png',
              project_name: 'E-commerce Site',
              code_url: 'https://github.com/Tomas2207/shopping-cart',
              live_url: 'https://tomas2207.github.io/shopping-cart/',
              desc: 'Frontend e-commerce React app ',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
