
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-forgot-password1',
  templateUrl: './forgot-password1.component.html',
  styleUrls: ['./forgot-password1.component.scss']
})
export class ForgotPassword1Component implements OnInit {
 
  forgotPass: FormGroup;
  email_id:string;

  constructor(private formBuilder:FormBuilder,
    private loginservice:LoginService,
    private router:Router) { }

  ngOnInit() {
  }

  osubmit(){
    console.log("thiis is anlkdsfkajdljfasdfurfhsef")
    console.log(this.email_id)
    this.loginservice.forgotPass(this.email_id).subscribe(response=>{
      alert("password has been sent to mail...")
                this.router.navigate(['/login']);

    })
  }

}
