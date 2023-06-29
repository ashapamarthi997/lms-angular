import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent  {
  regForm:FormGroup

  constructor(){
    this.regForm=new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phoneNumber:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required,]),
      gender:new FormControl('',[Validators.required,]),
      subject:new FormControl('',[Validators.required])
    },this.passwordMatch);
  }
     passwordMatch(rf:any){
       let password= rf.controls['password'].value
       let confirmPassword= rf.controls['confirmPassword'].value

       if(password===confirmPassword){
            return null
       }
       else{
        return{
          'passwordsMatch':true
        }
       }
     }


     showpassword = false; 
     toggleshow(){
      this.showpassword=!this.showpassword
     }
    showpassword1= false;
    toggleshow1(){
    this.showpassword1 = !this.showpassword1
      console.log(this.regForm)
    }
   
   show(){
    console.log(this.regForm)
  }
}

