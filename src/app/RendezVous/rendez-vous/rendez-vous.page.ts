import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.page.html',
  styleUrls: ['./rendez-vous.page.scss'],
})
export class RendezVousPage implements OnInit {
ionicForm: any
listBanque: any
loginData: any
idAlert: any
date1: Date = new Date();
isSubmitted: boolean = false;

  constructor ( private toastCtrl: ToastController, private formBuilder: FormBuilder, private router : Router, private service : ServicesService, private popover: PopoverController) { }

  ngOnInit() {
    this.idAlert = this.service.getIdAlert();
    this.loginData=JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData);
    
    this.listerBanque();
    this.ionicForm = this.formBuilder.group({
    date: ['',Validators.required],
    heure: ['', Validators.required],
    lieu: ['', Validators.required],
    qtepoche: ['', Validators.required, Validators.min(1)],
    banqueSang: [''],
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if(new Date(this.ionicForm.controls['date'].value) < this.date1){
      console.log("date non Valide");
     this.Toast();
      return;
  }

// if (!this.ionicForm.valid) {
//        this.presentToast("tous les champs sont obligatoires", "danger")
//         return false;
//     }

    // if(this.ionicForm.date < this.date1){
    //   this.presentToast("date du rendez vous ne doit pas inferieur", "danger")
    //   return false;
    // }
    this.service.detailAction(this.idAlert).subscribe((demande: any)=>{
      let accept = {demande: demande, accepteur: this.loginData, date: new Date(), etat:'non_lu'}
      
      this.service.AjoutAccepter(accept).subscribe(
        {
          next: data =>{
            if(!data)
            {
              this.presentToast("vous ne pouvez pas faire de don maintenant", "danger")
              return;
            }
           
            
            var obj: { [id: string]: any} = {};
            obj.id = this.ionicForm.value.banqueSang; 
            this.ionicForm.value.banqueSang = obj;
           
            this.service.AjoutRendezVous(this.ionicForm.value).subscribe((res: any)=>{
            //   if(this.date1 < this.date2){
            //     console.log("date non Valide");
            //    this.Toast();
            //     return;
            // }
              res.accepter = data;
              this.service.updateRdv(res.id, res).subscribe((rdv: any)=>{
                this.popover.dismiss();
                return this.router.navigateByUrl("/notification")
              })
            });
          },
          error: error=>{
            this.presentToast("error", "danger")

          }
        }
      )
    })



   
     
 }
  listerBanque(){
    this.service.getAllbanque().subscribe((data)=>{
      console.log(data);
      return this.listBanque=data;
    })
 
  }
  async presentToast(msg:string, color:string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      cssClass: "popup",
      
      position: 'top'
    });
    (await toast).present();
   }
  async Toast(){
    let toast = this.toastCtrl.create({
      message: 'date ne doit pas inferieur a la date aujourdhui',
      duration: 4000,
      color: "danger",
      
      position: 'top'
    });
    (await toast).present();
   }

}
