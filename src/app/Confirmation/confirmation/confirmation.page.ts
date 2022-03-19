import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
alertConfirm
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.alertConfirm = this.service.getAlertConfirm();
    console.log(this.alertConfirm);
    
  }

}
