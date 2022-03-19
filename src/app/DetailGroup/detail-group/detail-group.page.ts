import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/services-service.service';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.page.html',
  styleUrls: ['./detail-group.page.scss'],
})
export class DetailGroupPage implements OnInit {
id: any;
detailGroup: any
  constructor(public popover: PopoverController  ,private service : ServicesService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getbyIdGroup(this.id).subscribe(data=>{
      this.popover.dismiss();
      this.detailGroup = data;
     
      console.log(data);
    })
  }

}
