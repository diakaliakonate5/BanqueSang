import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services-service.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
var: any
 id: any
loginData: any;
listGroupe: any

  constructor(private service : ServicesService, private route : ActivatedRoute, private router: Router) { }
  UpdateUser = new FormGroup({
    nomComplet : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    telephone : new FormControl('', Validators.required),
    groupeSanguin : new FormControl('', Validators.required),
    adresse : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  }

  );
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    console.log( this.id);
    
      this.listerGroupe()
    this.service.detailUser(this.route.snapshot.params.id).subscribe((result: any)=>{
      this.UpdateUser = new FormGroup({
        nomComplet : new FormControl(result['nomComplet']),
        email : new FormControl(result['email']),
        telephone : new FormControl(result['telephone']),
        adresse : new FormControl(result['adresse']),
        password : new FormControl(result['password']),
        groupeSanguin : new FormControl(result['groupeSanguin']),
      }

      );

    })
  }
  UpdateData(){
    var obj: { [id: string]: any} = {};
     
    obj.id = this.UpdateUser.value.groupeSanguin; 
    this.UpdateUser.value.groupeSanguin = obj;
    // console.log(this.addStudent.value);
    this.service.updateUser(this.route.snapshot.params.id,this.UpdateUser.value).subscribe((result: any)=>{
      return this.router.navigateByUrl("/profil");
    })

  }
  listerGroupe(){
    this.service.listGroupe().subscribe((data)=>{
      console.log(data);
      return this.listGroupe=data;
    })
  }
}
