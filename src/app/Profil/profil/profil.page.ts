import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
loginData: any
user: any
listAccept: any;
nbre:any;
nbreDemande: any
listDemande: any
alert:any
  constructor(private service : ServicesService) { }

  ngOnInit() {
    this.listerDemande()
    this.listerAccept();
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log(this.user);
  }
  listerAccept(){
    this.service.getAllAccept().subscribe((data:any)=>{
      console.log(data);
      for(let i = 0; i<data.length; i++){
        if(data[i].utilisateur.id != this.loginData.id){
          console.log(data[i]);
          this.alert.push(data[i]);
        }
      }
    this.listAccept=data;
    this.nbre= this.listAccept.length
      
    })
  }
  listerDemande(){
    this.service.getAllAction().subscribe((data)=>{
      console.log(data);

    this.listDemande=data;
    this.nbreDemande = this.listDemande.length
      
    })
  }




}
