import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
alerts: any;
loginData : any
user: any
userId: any

  constructor(private service : ServicesService, private route:Router, private toast : ToastController) { }

  ngOnInit() {
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin") || '{}');
    this.userId = this.user.id
    console.log(this.userId);
    this.alerts = this.service.getAlert();
    
  }

}
