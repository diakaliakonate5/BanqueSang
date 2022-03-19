import { Component, OnInit } from '@angular/core';



import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services-service.service';

@Component({

  selector: 'app-home-patient',
  templateUrl: './home-patient.page.html',
  styleUrls: ['./home-patient.page.scss'],
})
export class HomePatientPage implements OnInit {

  loginData: any
  message:any
  user: any
  nbreAlert: any;
  nbreAlertAccept: any;
  alert: any = [];
  alertAccept: any = [];
  alertConfirm: any=[];
  nbreAlertConfim: any
  
  constructor(private service : ServicesService, private route:Router, private toast : ToastController ) { }

  ngOnInit() {
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log(this.user);
    this.loginData = JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData);
    if(this.loginData){
      this.presentToast();
    }

    this.service.getAllAction().subscribe((dat: any)=>{
      
    for(let i = 0; i<dat.length; i++){
      if(dat[i].utilisateur.id != this.loginData.id){
        console.log(dat[i]);
        this.alert.push(dat[i]);
      }
    }
    console.log(this.alert);
    
    this.service.setAlert(this.alert);
    this.nbreAlert = this.alert.length;
    });
    this.service.AcceptByUser(this.user.id).subscribe((data: any)=>{
      this.service.setAlertAccept(data);
      this.nbreAlertAccept = data.length
    })

    // Alerts confirmés
    this.service.getAllConfirm().subscribe((cf: any)=>{
      for(let i = 0; i<cf.length; i++){
        console.log(cf[i].accepter.demande.utilisateur.id);
        console.log(this.user.id);
        
        
        if(cf[i].accepter.accepteur.id == this.user.id && cf[i].etat == 'non_lu'){
          this.alertConfirm.push(cf[i]);
        }
      }
      this.service.setAlertConfirm(this.alertConfirm);
      this.nbreAlertConfim = this.alertConfirm.length;
      });

}
  
  
  
  

async presentToast(){
  let toast = this.toast.create({
    message: 'Bienvenue  ' + this.loginData.nomComplet,
    duration: 100,
     color:'success',
    position: 'top'
  });
  (await toast).present();
 }
 logOut(){
  localStorage.removeItem('isLogin');
this.route.navigateByUrl('/login');
}


}