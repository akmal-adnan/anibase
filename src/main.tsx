import App from '@/App';
import { store } from '@/store/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import './index.scss';
import { initializeDarkMode } from './utils/darkModeInitializer';

initializeDarkMode();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
