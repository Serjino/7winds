import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppComponent } from '../shared/App.tsx';

window.addEventListener('load', () => {
    ReactDom.render(<AppComponent />, document.getElementById('reactRoot'));
    // module.hot.accept();
});