import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services-service.service';
//import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-banque-sang',
  templateUrl: './banque-sang.page.html',
  styleUrls: ['./banque-sang.page.scss'],
})
export class BanqueSangPage implements OnInit {
listBanque: any
  constructor(private service : ServicesService) { }

  ngOnInit() { this.listerBanque();
   
    
  }

  listerBanque(){
    this.service.getAllbanque().subscribe((data)=>{
      console.log(data);
      return this.listBanque=data;

    })
  }

}
