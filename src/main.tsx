import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css';
import App from './pages/Home/App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './pages/MainLayout.tsx';
import ArrayMapping from './components/ArrayMapping.tsx';
import PostCard from './components/PostCard.tsx';
import SignInSignUp from './pages/SignInSignUp.tsx';
import SignUp from './pages/SignUp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<App />} />
          <Route path='/map' element={<ArrayMapping />} />
          <Route path='/sign-in' element={<SignUp />} />
          <Route
            path='/post-card'
            element={
              <PostCard
                textContent='I agree, why?...'
                imgSrc='https://picsum.photos/800/600'
                avatarSrc='https://picsum.photos/40'
                author='Bill Browning'
                date='43 minutes ago'
                numLikes={11}
                numComments={0}
                numReposts={3}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
