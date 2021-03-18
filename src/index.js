import {addImage} from './add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import {Heading} from './components/heading/heading';

const button = new HelloWorldButton();
const heading = new Heading('new heading');
heading.render()
button.render()
addImage()
