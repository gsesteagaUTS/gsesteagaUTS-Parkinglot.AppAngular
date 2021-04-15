import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-access-control',
  templateUrl: './add-access-control.component.html',
  styleUrls: ['./add-access-control.component.css']
})
export class AddAccessControlComponent implements OnInit {

  constructor(private userService: UserService, private rabbitMqService: RxStompService) { }

  ngOnInit(): void {
  }

  addAccess() {
    //this.rabbitMqService.publish("/topic/")
    const data = { "FullDate": "2021-01-01", "UserId": "5ff922479b7b12712737d6af", "AccessType": 0 };
    this.userService.AddAccessControl(data);

  }

  closeContentBar(){
    const data = { "FullDate": "2021-01-01", "UserId": "5ff922479b7b12712737d6af", "AccessType": 1 };
    this.rabbitMqService.publish({
      destination: '/topic/Parkinglot.CloseContaintBar',
      body: JSON.stringify(data)
    });

  }

}
