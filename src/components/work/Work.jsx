
import React, { useState } from "react";
import WorkItems from "./WorkItems";
import { Box, Button, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// const projectsData = [
//   {
//     id: 1,
//     title: "React Movie App",
//     category: "Web",
//     image: "movie.jpg",
//     link: "https://ns-react-moviez.netlify.app/",
//   },
//   {
//     id: 2,
//     title: "Portfolio Site",
//     category: "Design",
//     image: "portfolio.jpg",
//     link: "https://example.com",
//   },
//   {
//     id: 3,
//     title: "Mobile App UI",
//     category: "App",
//     image: "app.jpg",
//     link: "https://example.com",
//   },
// ];
import movieImg from '../../assets/w.png';
import portfolioImg from '../../assets/portfolio.png';
import appImg from '../../assets/work4.jpg';

const projectsData = [
  { id: 1, title: "React Movie App", category: "Web", image: movieImg, link: "https://ns-react-moviez.netlify.app/" },
  { id: 2, title: "Portfolio Site", category: "Design", image: portfolioImg, link: "https://lts-application.netlify.app/" },
  { id: 3, title: "Mobile App UI", category: "App", image: appImg, link: "https://nj-todoapp-js.netlify.app/" },
];

const categories = ["All", "Web", "App", "Design"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === selectedCategory);

  return (
    <Box component="section" id="portfolio" py={8}>
      <Container>
        <Typography variant="h4" align="center"           color="primary"
 gutterBottom>
          My Projects
        </Typography>

        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} my={4}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "contained" : "outlined"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
        >
          {filteredProjects.map((item) => (
            <SwiperSlide key={item.id}>
              <Box display="flex" justifyContent="center">
                <WorkItems item={item} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Work;
