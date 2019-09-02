import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// decorator (annotation in java)
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Welcome message'
  name = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // compilation error: this.message = 10
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

}