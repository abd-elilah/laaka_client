import { Injectable } from '@angular/core';
import { creancier } from './list-creancier';

@Injectable({
  providedIn: 'root'
})
export class CreancierServiceService {
  // creancier = creancier;
   

  getServices(creancier : any){
    return creancier.service;
  }
  constructor() { }
}
