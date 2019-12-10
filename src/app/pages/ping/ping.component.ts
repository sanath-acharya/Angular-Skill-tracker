import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent implements OnInit {
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
