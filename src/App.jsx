import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './pages/Loading'; 
import 'react-tooltip/dist/react-tooltip.css'

const HomePage = lazy(() => import('./pages/Home'));
const FloorPage = lazy(() => import('./pages/Floor'));

const App = () => {
  return (
    <div className=" h-screen ">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/floor/:id" element={<FloorPage />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
