console.log("9. Programming Patterns, publisher/subscriber");

const button = {
    _subscriber: {
        'click': [],
        'focus': [],
    },
    click() {
        this._subscriber['click'].forEach(subscriber => subscriber()) // rerender
    },
    addEventListener(eventName, subcriber) {
        this._subscriber[eventName].push(subcriber)
        // return subcriber // можно вернуть сабскрайбера для отписки

        // return () => {
        //     this.removeEventListener(eventName, subcriber) // можно сделать возврат функции, присваивать значение и вызывать для отписки, Примерно аналогично работает useEffect
        // }
    },
    removeEventListener(eventName, subcriber) {
        this._subscriber[eventName] = this._subscriber[eventName].filter(event => event !== subcriber)
    }
}

const subscriber1 = () => console.log('button was clicked')
button.addEventListener('click', subscriber1)

button.addEventListener('click', () => {
    console.log('button was clicked2');
})

button.addEventListener('click', () => {
    console.log('button was clicked3');
})

// button.addEventListener('focus', () => { })

button.click()

button.removeEventListener('click', subscriber1)

button.click()


//-----------------------------------------------------------------------------------------

class EventBus {
    subscribers = {
        'USER_CREATED': []
    }

    subscribe(eventName, subscriber) {
        this.subscribers[eventName] = this.subscribers[eventName].push(subscriber)
    }

    unsubscribe(eventName, subscriber) {
        this.subscribers[eventName] = this.subscribers[eventName].filter((sub) => sub !== subscriber)
    }

    publish(eventName, data) {
        this.subscribers[eventName].forEach(subscriber => subscriber(data))
    }
}

const eventBus = new EventBus();

//app.user('registration', registration)
const registration = ({ name: string, email: string }) => {
    //call bd

    //eventBus.publish('USER_CREATED', { name: body.name, email: body.email });
    sendEmail(body)
}
//
eventBus.subscribe('USER_CREATED', sendEmail);
eventBus.subscribe('USER_CREATED', sendSms);


function sendEmail(data) {
    eventBus.subscribe('USER_CREATED', () => {
        throw new Error('somew errro')
    });
}

function sendSms(data) {
    eventBus.subscribe('USER_CREATED', () => {
        console.log('send sms')
    });
}

const updateUser = ({ name: string, email: string }) => {
    //call bd

    eventBus.publish('USER_UPDATED', null);
}

function sendSmsWhenUserCreated(data) {
    eventBus.subscribe('USER_UPDATED', () => {
        console.log('send sms when user updated')
    });
}

eventBus.subscribe('USER_UPDATED', sendEmail);
eventBus.subscribe('USER_UPDATED', sendSms);

//-----------------------------------------------------------------------------------------

