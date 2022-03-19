import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import {  Router } from '@angular/router';
import { DetailGroupPage } from 'src/app/DetailGroup/detail-group/detail-group.page';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-groupe-sanguin',
  templateUrl: './groupe-sanguin.page.html',
  styleUrls: ['./groupe-sanguin.page.scss'],
})
export class GroupeSanguinPage implements OnInit {
listGroupe:any
donne: any;
dataReturned: any;
  constructor( public popover: PopoverController, public modalController: ModalController,private service: ServicesService, public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {
    this.listerGroupe()
  }
   listerGroupe(){
    this.service.listGroupe().subscribe((data)=>{
      console.log(data);
     return this.listGroupe=data;
    })
    
  
  }
  async detail(id: any) {
    const popover = await this.popoverController.create({
      component: DetailGroupPage,
      cssClass: 'my-custom-class',
     
      translucent: true
    });
    await popover.present();
  
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  
  }
  

  // GetById(id: any){
  //   return this.service.getbyIdGroup(id).subscribe(
  //     data1=>{
  //       console.log(this.donne);
  //       let extraNav: NavigationExtras={
  //       queryParams:
  //       {special:'bonjour'}
  //     }
  //      this.router.navigate(['/popups/:id'], extraNav);
  //   })
  // }
 
}
