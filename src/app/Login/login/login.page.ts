import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 loginInfo: any
 errorMessage:any
  constructor(private route:Router, private service:ServicesService, private toastCtrl:ToastController) { }

  ngOnInit() {
  
 
  }
  onLogin(form :NgForm){
    this.service.login(form.value.telephone,form.value.password).subscribe((res)=>{
      if(res){
        this.loginInfo = res;
       
        location.replace("/home-patient");
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
       
        return this.route.navigateByUrl("/home-patient")
       
      }
      // if(res==="telephone"){
      //   console.log("telephonnnnnnne");
        
      // }
        
      }, 
      err=>{
        
        this.presentToast();
        
        
      }
      )
    }
    async presentToast(){
      let toast = this.toastCtrl.create({
        message: 'telephone ou mot de passe incorrecte',
        duration: 3000,
         
        position: 'bottom',
        animated:true,
        cssClass:"my-custom-class"
      });
      (await toast).present();
     }
  }

