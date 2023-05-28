import { Component, TemplateRef, ViewChild } from '@angular/core';
import { User } from './core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-risky';
  animationState: number = 0;
  @ViewChild(TemplateRef, { static: false }) user?: User | null;

  constructor(private route: ActivatedRoute) {}

  onActivate(): void {
    this.animationState = this.route.firstChild?.snapshot.data['routeIdx'];
  }
}
