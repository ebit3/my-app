import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kontak from './pages/Kontak';
import Sejarah from './pages/Sejarah';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<Kontak />
		<Sejarah />
		<About />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
