import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ionicForm: any;
  loginData: any;
  isSubmitted: boolean;
  ajoutinfo;
  errorMessage: any

  listGroupe:any
  constructor(public formBuilder: FormBuilder, private service: ServicesService, private router: Router, private toastCtrl: ToastController) { }
  ngOnInit() {
    
    
    this.listerGroupe();
    this.ionicForm = this.formBuilder.group({
     nomComplet: ['', [Validators.required, Validators.minLength(2)]],
    
      adresse: ['', [Validators.required, Validators.minLength(2)]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      groupeSanguin: ['', Validators.required],
      profils: ['', Validators.required],
    })
  }
 
  
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    var obj: { [id: string]: any} = {};
     
    obj.id = this.ionicForm.value.groupeSanguin; 
    this.ionicForm.value.groupeSanguin = obj;
     this.isSubmitted = true;
    if(this.ionicForm.value){
    this.service.AjoutUsers(this.ionicForm.value).subscribe((res)=>{
      // if (res==="telephone"){
      //   console.log("incorrect telephone");
      //   this.presentToast();
      

      // }
      this.toast();
      return this.router.navigateByUrl('/login')
      
         },err=>{
          this.errorMessage = err.error.message
          console.log("hjkl"  + this.errorMessage);
          
          this.presentToast();
         
        }
      )
     }}
    listerGroupe(){
      this.service.listGroupe().subscribe((data)=>{
        console.log(data);
        return this.listGroupe=data;
      })
    }
    async presentToast(){
      let toast = this.toastCtrl.create({
        message:this.errorMessage,
        duration: 4000,
         color:'danger',
        position: 'top'
      });
      (await toast).present();
     }
     async toast(){
      let toast = this.toastCtrl.create({
        message:'Inscription effectué avec succès! connectez-vous avec votre telephone et mot de passe',
        duration: 3000,
         color:'success',
        position: 'top'
      });
      (await toast).present();
     }
  
  
  }

