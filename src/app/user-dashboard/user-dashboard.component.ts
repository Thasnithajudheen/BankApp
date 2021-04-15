import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  
  depositForm = this.userdashboard.group({
    useraccntno : ['',[Validators.required, Validators.pattern('[0-9]*')]],
    userpassword : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    useramnt : ['',[Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.userdashboard.group({
    useraccntno : ['',[Validators.required, Validators.pattern('[0-9]*')]],
    userpassword : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    useramnt : ['',[Validators.required, Validators.pattern('[0-9]*')]]
  })

  name:any;

  constructor(private rouer: Router, public dataservice : DataService, private userdashboard: FormBuilder) { 
    this.name=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }


  deposit(){
    let uacntno = this.depositForm.value.useraccntno;
    let upass = this.depositForm.value.userpassword;
    let udepositamnt = this.depositForm.value.useramnt;
    if(this.depositForm.valid){
      //var result = 
      this.dataservice.userDeposit(uacntno,upass,udepositamnt)
    //   if(result){
    //     alert('Your Deposit is Success')
    //   }
    //   else{
    //     alert('Your Deposit is Not Success')
    //   }

    .subscribe((data:any)=>{
      if(data){
        alert(data.message)
        alert(data.balance);
      }
    },(data:any)=>{
      alert(data.error.message)
     })
    }
    else{
      alert("Invalid Deposit Form")
    }
  }

  withdraw(){
    let uacntno = this.depositForm.value.useraccntno;
    let upass = this.depositForm.value.userpassword;
    let udepositamnt = this.depositForm.value.useramnt;
    if(this.depositForm.valid){

     // var result = 
      this.dataservice.userWithdraw(uacntno,upass,udepositamnt)
      .subscribe((data:any)=>{
        if(data){
          alert(data.message)
          alert(data.balance);
        }
      },(data:any)=>{
        alert(data.error.message)
       })


      // if(result){
      //   alert('Your Withdraw is Success')
      // }
      // else{
      //   alert('Your Withdraw is Not Success')
      // }
    }
    else{
      alert("Invalid Withdraw Form")
    }
  }
}