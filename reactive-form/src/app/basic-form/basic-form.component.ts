import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message:'',
      career:'',
    })

    this.myForm.valueChanges.subscribe(console.log)
  }
  

}
