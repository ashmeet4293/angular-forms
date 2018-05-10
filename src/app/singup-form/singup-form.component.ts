import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent  {

 form=new FormGroup({
   account : new FormGroup({  
    username : new FormControl('',[Validators.required],UsernameValidators.shouldBeUnique),
    password : new FormControl('',Validators.required)
  })
 });
 login(){
   this.form.setErrors({
     invalidLogin:true
   });
 }

 get username(){
   return this.form.get('account.username');
 }
}
