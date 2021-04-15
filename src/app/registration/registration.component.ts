import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

 

  constructor(private dataService : DataService, private router : Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  }
  acno='';name='';password='';
  //accntno = '';username=''; password = '';
  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  });

  
  register(){
    if(this.registerForm.valid){

      var accntNo = this.registerForm.value.acno;
      console.log(accntNo);
      let user = this.registerForm.value.name;
      console.log(user);
      let pass = this.registerForm.value.password;
      console.log(pass);
     // console.log(acno+' '+user+' '+pass);
      
      //var result = 
      this.dataService.register(accntNo,user, pass)
     
     .subscribe((data:any)=>{
        if(data){
          alert(data.message)
         // alert("registration successful,plz login");
          this.router.navigateByUrl('checkLogin');
        }
      },(data:any)=>{
        alert(data.error.message);
      })




      // if(result){
      //   this.router.navigateByUrl('');
      // }
      
    }
    else{
      alert("Invalid form")
    }
    // let acno = this.accountno;
    // let user = this.username;
    // let pass = this.password;
    
  }
}