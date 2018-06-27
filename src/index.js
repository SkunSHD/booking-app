import React from 'react';
import ReactDOM from 'react-dom';
import { spy } from "mobx";
import registerServiceWorker from './registerServiceWorker';
import App from 'components/App';

import './styles/index.scss';

registerServiceWorker();


// MobX spy goes here
spy((event)=> {
    switch(event.type) {
        case 'action':
            if(event.name.match('@reaction')) return console.log('%c' + event.name, 'color: lightgreen');
            if(event.name.match('-WARNING')) return console.log('%c' + event.name, 'color: darkorange');
            if(event.name.match('-ERROR')) return console.log('%c' + event.name, 'color: darkred');
            if(event.name.match('-SUCCESS')) return console.log('%c' + event.name, 'color: green');
            break;
        default :
            break;
    }
});

const render = AppComponent => {
    ReactDOM.render(
        <AppComponent/>,
        document.getElementById('root')
    );
};

render(App);

// This is a workaround to HMR support because babel-plugin-dva-hmr is not available with create-react-app
if (module.hot) {
    module.hot.accept('components/App', () => {
        const NextApp = require('components/App').default;
        render(NextApp);
    });
}
