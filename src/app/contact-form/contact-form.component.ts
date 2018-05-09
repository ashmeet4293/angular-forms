import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMethod=[
    {id :"1", method:"Email"},
    {id:"2", method:"Phone"}
  ];

  log(firstName){
    console.log(firstName);
  }
  submit(f){
    console.log(f.value);
  }

}
