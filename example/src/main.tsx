import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import Composer from '@wuguishifu/context-composer';
import { HelloProvider } from './context/HelloProvider.tsx';
import { WorldProvider } from './context/WorldProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Composer components={[
            HelloProvider,
            WorldProvider
        ]}>
            <App />
        </Composer>
    </React.StrictMode>,
);