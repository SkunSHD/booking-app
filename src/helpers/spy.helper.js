import { spy } from 'mobx';

// MobX spy logging goes here
if(process.env.NODE_ENV !== "production") {
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
}

