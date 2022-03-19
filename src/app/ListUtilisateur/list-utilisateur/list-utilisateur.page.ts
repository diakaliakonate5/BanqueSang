import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.page.html',
  styleUrls: ['./list-utilisateur.page.scss'],
})
export class ListUtilisateurPage implements OnInit {
loginData:any
listUsers: any
  constructor(private service:ServicesService) { }

  ngOnInit() {
    this.listerUsers();
  }
  listerUsers(){
    this.service.getAllUsers().subscribe((data)=>{
      console.log(data);
      return this.listUsers=data;

    })
  }
  deleteUser(id:any):void{
    {
      let userId = this.loginData.id;
    this.service.deleteUser(id, userId).subscribe((data)=>{
      
      this.listerUsers();
    });
   }
    
   }

}
