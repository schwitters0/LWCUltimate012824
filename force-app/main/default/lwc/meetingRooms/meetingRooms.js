import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    
    // PROPERTIES
    @track selectedMeetingRoomInfo;
    
    meetingRoomsInfo = [
        {roomName: 'A-01', roomCapacity: '12'},
        {roomName: 'A-02', roomCapacity: '20'},
        {roomName: 'A-03', roomCapacity: '10'},
        {roomName: 'B-01', roomCapacity: '8'},
        {roomName: 'B-02', roomCapacity: '5'},
        {roomName: 'C-01', roomCapacity: '30'}
    ];

    
    // CONSTRUCTORS
    constructor(){
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
    
    
    // METHODS
    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoomInfo = meetingRoomInfo.roomName;
    }

}