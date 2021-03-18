import './heading.scss'


export class Heading {
    constructor(text) {
        this.text = text;
    }


    render() {
        const body = document.querySelector('body');
        const heading = document.createElement('h1');
        heading.innerText = this.text;
        heading.classList.add('heading');

        body.appendChild(heading);
    }
}
