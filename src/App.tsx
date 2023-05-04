import React from 'react';
// import { Example2 } from './Component/Example2';
// import { Example } from './Component/Example';
// import { FootBall } from './Component/FootBall';
// import { Garage } from './Component/Garage';
// import CustomStyles from './Component/CustomStyles';
// import Btn from './Component/MUi';
import { StyledEngineProvider } from '@mui/material/styles';
// import BasicCard from './Component/BasicCard';
// import OutlinedCard from './Component/OutlineCard';
import Blinkist from './Component/Blinkist';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import { Link } from '@mui/material';

const App:React.FC=()=> {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>

      // <div>
        //  <Example2 text='hello'person={{firstName:"sam",lastName:"king"}} />
        // // <Example/>
        // // <FootBall/>
        // // <Garage/> */}
        // /* <CustomStyles /> cd
        // <Btn /> 
        // <StyledEngineProvider injectFirst>
        //   <BasicCard />
        //   <OutlinedCard/>
        //     <Blinkist/>
        // </StyledEngineProvider>
      /* </div> */
  );
};

export default App;




        