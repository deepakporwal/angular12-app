import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-react-form',
  templateUrl: './sample-react-form.component.html',
  styleUrls: ['./sample-react-form.component.css']
})
export class SampleReactFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
  });

  requiredForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.requiredForm = this.fb.group({
      name: ['', Validators.required ]
      });
  }

  test()
  {
    console.log(this.profileForm);
  }
  
}
