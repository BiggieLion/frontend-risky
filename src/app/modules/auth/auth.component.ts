import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  animationState: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onActivate(): void {
    this.animationState = this.route.firstChild?.snapshot.data['routeIdx'];
  }
}
