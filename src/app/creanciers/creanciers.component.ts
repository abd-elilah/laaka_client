import { Component, OnInit } from '@angular/core';
import { CreancierServiceService } from './creancier-service.service';
import { creancier } from './list-creancier';

@Component({
  selector: 'app-creanciers',
  templateUrl: './creanciers.component.html',
  styleUrls: ['./creanciers.component.css']
})
export class CreanciersComponent implements OnInit {
 
   creancier = creancier  ;
  // public service:string=["gftf"];
  public service:any[] ;
  
  constructor(private c_service:CreancierServiceService) {
   
   this.service=c_service.getServices(this.creancier);
   }

  ngOnInit(): void {
  }

}
