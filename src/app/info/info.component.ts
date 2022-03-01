import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  public currentSection = 0;
  public fan = faFan;
  constructor( private router: Router) { }

  public ngOnInit(): void {
  }
  public changeSection(delta: number): void {
    // some checks
    this.currentSection += delta;
  }
  public goToquiz() {
  this.router.navigate(['quiz']);
  }
}
