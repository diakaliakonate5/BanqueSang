import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-detail-accept',
  templateUrl: './detail-accept.page.html',
  styleUrls: ['./detail-accept.page.scss'],
})
export class DetailAcceptPage implements OnInit {
   loginData: any
   detailAlert: any
   id : any
   isAccept: any=[]
   detailRdv: any
   nbreIsAccept: any;
   acceptData: any
   isConfirmed: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: ServicesService) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
   // this.id = this.route.snapshot.params['id'];
    this.service.detailAccept(this.route.snapshot.params.id).subscribe((data:any)=>{
      this.detailAlert = data;
      this.service.detailAccept(this.detailAlert.id).subscribe((accept: any)=>{
        this.acceptData = accept
        let acceptBody = {"id": this.acceptData.id}
        this.service.isconfirm(acceptBody).subscribe((data: any)=>{
          if(data)
          {
            this.isConfirmed = true;
            
          }
          
        })
      });
      
      // this.service.getAllConfirm().subscribe((confirm: any)=>{
      //   for(let i=0; i< confirm.length; i++){
      //     if(confirm.utilisateur.id == this.loginData.id && confirm.accepter.id == data.id){
      //       this.isAccept.push(confirm[i]);
      //     }
      //   }
      //   this.nbreIsAccept = this.isAccept.length;
      //   console.log(this.nbreIsAccept);
        
      // })
    })
      this.service.detailRdv(this.route.snapshot.params.id).subscribe((dat1)=>{
        this.detailRdv = dat1;
    });

    
  }

  confirmer(id: any){
    this.service.detailAccept(id).subscribe((accept: any)=>{
      let confirmer = {data: new Date(), accepter: accept, utilisateur:  this.loginData, etat: 'non_lu'}
      this.service.AjoutConfirmer(confirmer).subscribe((data: any)=>{
        this.router.navigate(['home-patient']);
      })
    })
  }


}
