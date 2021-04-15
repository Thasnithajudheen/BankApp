import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const options={
  withCredentials:true
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails: any = {
    1000: { acno: 1000, name: "Akhil", balance: 5000, password: "user1" },
    1002: { acno: 1002, name: "Rajan", balance: 3000, password: "user2" },
    1003: { acno: 1003, name: "Amaya", balance: 4000, password: "user3" },
    1004: { acno: 1004, name: "Anaya", balance: 3500, password: "user4" },
    1005: { acno: 1005, name: "Nayana", balance: 2000, password: "user5" }
  }

  currentUser: any;

  constructor(private http: HttpClient) {
    this.getDetails()
  }


  saveDetails() {
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails))
    localStorage.setItem(" currentUser", JSON.stringify(this.currentUser))
  }

  getDetails() {

    this.accountDetails = localStorage.getItem("accountDetails")
    this.currentUser = localStorage.getItem("currentUser")
  }

  register(acno: any, name: any, password: any) {

    const data = {

      acno,
      name,
      balace: 0,
      password

    }

    return this.http.post("http://localhost:3003/register", data)


    // if(acno in this.accountDetails){
    //   alert("User already exist. Please Login")
    //   return false;
    // }


    //   this.saveDetails();
      alert("Registration successful")
    //   console.log(this.accountDetails);
    //   return true;
  }

  checkLogin(acno: any, password: any) {
    const data = {

      acno,

      password
     // this.currentUser = dataset[acno].name;

    }

    return this.http.post("http://localhost:3003/checkLogin", data, options)


    //let dataset=this.accountDetails;
    // if (acno in dataset) {
    //   if (password == dataset[acno].password) {
     // this.currentUser = dataset[acno].name;
    //     this.saveDetails();
    //    alert("login successfull")
    //     return true;
    //   }
    //   else {
    //     alert("incorrect password")
    //     return false;
    //   }
    // }
    // else {
    //   alert("no user exist with provided account number")
    //   return false;
    // }
    }
  userDeposit(acno: any, password: any, amount: any) {
    const data = {

      acno,

      password,
   
  amount
    }

    return this.http.post("http://localhost:3003/userDeposit", data, options)

//     var newAmount=parseInt(amount)
//     let dataset=this.accountDetails;
//     if (acno in dataset) {
//       var password1=dataset[acno].password
//       if (password ==password1) {
       
//         dataset[acno].balance +=newAmount;

//         this.saveDetails();
//         console.log(this.accountDetails);
// alert("amount credited")
//         return true;
//       }
//       else {
//         alert("incorrect password")
//         return false;
//       }
//     }
//     else {
//       alert("")
//       return false;
//     }
  }

  userWithdraw(acno: any, password: any, amount: any) {
    const data = {

      acno,

      password,
   
  amount
    }

    return this.http.post("http://localhost:3003/userWithdraw", data,options)
  }
}

  //   if (acno in this.accountDetails) {
  //     if (password == this.accountDetails[acno].password) {
  //       let existingAmount = this.accountDetails[acno].balance;
  //       let newAmount = parseInt(existingAmount) - parseInt(amount);
  //       this.accountDetails[acno].balance = newAmount;
  //       this.saveDetails();
  //       console.log(this.accountDetails);

  //       return true;
  //     }
  //     else {
  //       return false;
  //     }
  //   }
  //   else {
  //     return false;
  //   }
  // }
