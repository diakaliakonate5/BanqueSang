import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-retour-notification',
  templateUrl: './retour-notification.page.html',
  styleUrls: ['./retour-notification.page.scss'],
})
export class RetourNotificationPage implements OnInit {
  alertAccept: any;
 
  constructor( private service : ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.alertAccept = this.service.getAlertAccept();
    console.log(this.alertAccept);
  }

}
