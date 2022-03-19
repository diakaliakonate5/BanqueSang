import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services-service.service';
//import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {
  isSubmitted: boolean;
 ionicForm : FormGroup
 listGroupe
 loginData: any
 user: any
 utilisateur: any
  constructor( private toastCtrl:ToastController, private formBuilder: FormBuilder, private service : ServicesService, private router : Router) { }

  ngOnInit() {
    this.listerGroupe();

    this.ionicForm = this.formBuilder.group({
    
  
     nbrepoche: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      groupeSanguin: ['', Validators.required],
      nomHopital: ['', Validators.required],
    
     
      
    })
    
    this.loginData = localStorage['isLogin'];
    this.user=JSON.parse(localStorage.getItem("isLogin") || '{}');
    console.log( "login " + this.user);
  }
 
  
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    // console.log("dfghfdfgh" + this.ionicForm.value.utilisateur);
    if (!this.ionicForm.valid) {
     this.present()
      return false;
  }
    var obj: { [id: string]: any} = {};
    obj['id']= this.ionicForm.value.groupeSanguin; 
    this.ionicForm.value.groupeSanguin = obj;
console.log("sdfgfdf" + this.ionicForm.value.groupeSanguin.id);

    var ob: { [id: string]: any} = {};
    ob['id']= this.user.id;
    this.ionicForm.value.utilisateur = ob;
   
    this.service.DemandeSang(this.ionicForm.value).subscribe((res: any)=>{
      res.utilisateur = this.user.id;
     
        this.presentToast()
        return this.router.navigateByUrl('/home-patient')
     
     
   
    
      }
      )
     
   
 
  
 
}
    listerGroupe(){
      this.service.listGroupe().subscribe((data)=>{
        console.log(data);
        return this.listGroupe=data;
      })
    }
    async presentToast(){
      let toast = this.toastCtrl.create({
        message: 'Demande a été effectué',
        duration: 100,
         color:'success',
        position: 'top'
      });
      (await toast).present();
     }
     async present(){
      let toast = this.toastCtrl.create({
        message: 'veuillez renseigner tous les champs',
        duration: 500,
         color:'danger',
        position: 'top'
      });
      (await toast).present();
     }
}
