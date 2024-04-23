import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = {
    username: '',
    password: ''
  }
  IsLogin = true;

  constructor(private sessionStoargeService: StorageService, private router: Router,
    public toaster: ToasterService
  ) { }

  ngOnInit() {
  }

  OnLogin() {
    let getData = this.sessionStoargeService.getSessionStorage('userDetails');
    if(getData && this.userForm.username == getData.username && this.userForm.password == getData.password) {
      this.router.navigate(['/dashboard'])
    }else {
      this.toaster.pop('error', 'Login not Successfull')
    }
  }
  OnRegister() {
    if(!this.userForm.username || !this.userForm.password) {
      return;
    }
    this.sessionStoargeService.setSessionStorage('userDetails', this.userForm);
    this.IsLogin = true;
  }
  

}
