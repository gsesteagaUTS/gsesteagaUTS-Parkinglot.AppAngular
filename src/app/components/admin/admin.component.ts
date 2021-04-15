import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscriptionCloseContaintBar: Subscription;

  parking = {
    entryState: false
  }

  constructor(private rabbitMqService: RxStompService) {
    this.parking
  }

  ngOnInit(): void {
    this.subscription = this.rabbitMqService.watch("/topic/DataFromAspNetCore")
      .subscribe(data => {
        console.log("Data", data.body);
        //Convertimos el string a un objeto en JavaScript
        let body = JSON.parse(data.body);
        //Preguntamos el valor que se agregará
        if (body.v > 80) {
          this.parking.entryState = true;
        }
        
      });

      this.subscriptionCloseContaintBar = this.rabbitMqService.watch("/topic/Parkinglot.CloseContaintBar")
      .subscribe(data => {
        this.parking.entryState = false;
      });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionCloseContaintBar.unsubscribe();

  }

}
