import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    
    // PROPERTIES
    @api meetingRoomInfo = {roomName: '', roomCapacity: ''};
    @api showRoomInfo = false;


    // METHODS
    tileClickHandler(){
        const tileClicked = new CustomEvent('tileclick', {detail : this.meetingRoomInfo, bubbles:true});
        this.dispatchEvent(tileClicked);
    }

}