import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const userUrl = 'https://mentalshowerbackend.ndrejr.dk/api/users/';
@Injectable({
    providedIn: 'root',
})

export class LoginService {

    constructor(private http: HttpClient) { }

    userlogin(email) {
        return this.http.get(userUrl + `${email}`);
    }
    userRegistration(data) {
        return this.http.post(userUrl, data);
    }
    getAllUsers(){
        return this.http.get(userUrl);
    }

}
