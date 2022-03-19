import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loginData:any;
stateRoute:any;
  ngOnInit(): void {
    
    

  }
  logOut(){
      localStorage.removeItem('isLogin');
    this.route.navigateByUrl('/login');
  }
  navigate: any;  
  constructor(   
    private platform: Platform,  
 
    private statusBar: StatusBar  , public route : Router
  ) {   
    this.sideMenu();  
    this.initializeApp();  
  }  
 
  initializeApp() {  
    this.platform.ready().then(() => {  
      this.statusBar.styleDefault();  
     
    
    });  
  }  
  sideMenu() {  
    this.navigate =   
    [  
      { 
        title : 'Aide',  
        url   : '/home',  
        icon  : 'help'  
      },  
        
      { 
        title : 'Accueil',  
        url   : '/home-patient',  
        icon  : 'home'  
      },   
       
      {  
        title : 'Deconnexion',  
        url   : '/login',  
        icon  : 'power'  
      },   
      
    ];  
  }  
 
  
}   