import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private router: Router, private dataService:DataService, private loginbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  acno = 'Please Enter Your Account Number'; password= '';

  loginForm = this.loginbuilder.group({
    acno : ['',[Validators.required, Validators.pattern('[0-9]*')]],
    password : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  // getAcctNo(event:any){
  //   this.accntno = event.target.value;
  //   console.log(this.accntno);
    
  // }
  // passChange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
    
  // }
  login(){

    if(this.loginForm.valid){

      var accntNo = this.loginForm.value.acno;
     // console.log(accntNo);
      
      let pass = this.loginForm.value.password;
     // console.log(pass);
      
      let data = this.dataService.accountDetails;

      // var result = 
      this.dataService.checkLogin(accntNo, pass)
      .subscribe((data:any)=>{
        if(data){
          alert(data.message)
          localStorage.setItem("name",data.name)//
         // alert("login successfull");
          this.router.navigateByUrl('user-dashboard');
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

    //   if(result){
    //     //alert('login successful')
    //     this.router.navigateByUrl('user-dashboard');
    //   }
    //   else{
    //    // alert('login failed')
    //     this.router.navigateByUrl('');
    //   }
    // }
    // else{
    //   alert('Invalid Data')
    // }

      
    }
}