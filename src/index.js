import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <StrictMode>
        <Provider>
            <App />
        </Provider>
    </StrictMode>
);
