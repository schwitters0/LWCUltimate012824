import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    
    // PROPERTIES
    @track value = [];
    options = [
            { label: 'Red Marker', value: 'red' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Green Marker', value: 'green'},
            { label: 'Black Marker', value: 'black' }
    ];

    
    // FUNCTIONS
    @api selectCheckbox(checkboxValue){
        const selectedCheckbox = this.options.find(checkbox => {
            return checkboxValue === checkbox.value;
        })

        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully Checked";
        }
        
        return "No Checkbox Found";
    }

}