import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

  constructor() { }

  public static copyJSON(obj:any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
