// import React ,{useState , useEffect} from 'react'

// import { projectsData } from './Data'
// import { projectsNav } from './Data'
// import WorkItems from './WorkItems'

// const Works = () => {

// const [item, setItem] = useState({ name:'all'});
// const [projects,setProjects] = useState([]);
// const [active,setActive] = useState(0);

// useEffect(() => {
// if(item.name === "all"){
//   setProjects(projectsData);
// }
// else{
//   const newProjects = projectsData.filter((project)=>{
//     return project.category.toLowerCase()=== item.name;
//   });
//   setProjects(newProjects)
// }
// }, [item])

// const handleClick = (e , index) => {
//   setItem({name:e.target.textContent});
//   setActive(index);
// };


//   return (
//     <><div className='work__filters '>
//           {projectsNav.map((item, index) => {
//               return (
//                   <span
//                   onClick= {(e)=>{
//                     handleClick(e,index);
//                   }}
//                    className= {`${active === index ? 'active-work': ""} work__item`} key={index}>{item.name}</span>
//               )
//           })}
//       </div><div className='work__container container grid'>
//         {projects.map((item)=>{
//             return (
//                 <WorkItems  item={item} key={item.id} />
//             )

//         })}
//       </div></>
//   )
// }

// export default Works
import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <Box component="section" py={8}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          My Projects
        </Typography>

        {/* Filter Buttons */}
        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" my={4}>
          {projectsNav.map((navItem, index) => (
            <Button
              key={index}
              variant={active === index ? 'contained' : 'outlined'}
              color="primary"
              onClick={(e) => handleClick(e, index)}
              sx={{ textTransform: 'capitalize' }}
            >
              {navItem.name}
            </Button>
          ))}
        </Box>

        {/* Project Cards */}
        <Grid container spacing={4}>
          {projects.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <WorkItems item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Works;
