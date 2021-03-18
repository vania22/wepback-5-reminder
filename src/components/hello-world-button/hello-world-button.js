import './hello-world-button.css'
import './hello-world-button.scss'

class HelloWorldButton {
    static render() {
        const body = document.querySelector('body');
        const button = document.createElement('button');
        button.innerText = 'Hello';
        button.classList.add('hello-world-button');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerText = 'Lorem ipsum dolor sit amet, sectetur';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        };

        body.appendChild(button);
    }
}

export default HelloWorldButton;
