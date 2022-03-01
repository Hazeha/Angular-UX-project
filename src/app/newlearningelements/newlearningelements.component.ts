import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newlearningelements',
  templateUrl: './newlearningelements.component.html',
  styleUrls: ['./newlearningelements.component.css']
})
export class NewlearningelementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goNext() {
    this.router.navigate(['learningelement/info']);
  }
}
