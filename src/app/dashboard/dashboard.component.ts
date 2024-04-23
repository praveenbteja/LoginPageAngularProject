import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  IsRegisterForm = true;
  registerForm = {
    name: '',
    email: '',
    phone: '',
    city: ''
  }
  list = [];
  currentIndex = null;

  constructor(public storage: StorageService, private router: Router) { }

  ngOnInit() {
    this.list = this.storage.getSessionStorage('tabList') || [];
    this.currentIndex = null;
  }



  submit() {
    this.list.push(this.registerForm);
    this.storage.setSessionStorage('tabList', this.list);
    this.emptyRegisterForm();
  }

  updateListForm() {
    if(this.currentIndex !== null) {
      this.list[this.currentIndex] = this.registerForm;
    this.storage.setSessionStorage('tabList', this.list);
      this.IsRegisterForm = false;
      this.currentIndex = null;
    this.emptyRegisterForm();

    }

  }

  emptyRegisterForm() {
      this.registerForm = {
    name: '',
    email: '',
    phone: '',
    city:''
  }
  }

  deleteData(index) {
    this.list.splice(index, 1);
    this.storage.setSessionStorage('tabList', this.list);
  }
  updateData(item, index) {
    this.currentIndex = index
    this.registerForm = this.list[index];
    this.IsRegisterForm = true;
  }
  logout() {
    this.router.navigate(['/login'])
  }
}
