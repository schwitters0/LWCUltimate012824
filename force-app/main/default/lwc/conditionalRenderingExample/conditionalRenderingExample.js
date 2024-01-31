import { LightningElement, track} from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['Philly','Los Angeles', 'Nashville'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;

    };
}