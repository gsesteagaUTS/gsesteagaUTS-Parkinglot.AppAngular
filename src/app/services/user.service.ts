import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async AddAccessControl(data) {
    let header = new Headers();
    header.append('Content-Type', 'Application/json');
    let json = JSON.stringify(data);
    console.log(json);
    //http://localhost:5000/
    const req = await fetch(environment.serverHost + 'User/AddAccessControl',
      {
        headers: header,
        body: json,
        method: 'POST'
      });
    const response = await req.json();
    return response;
  }
}
