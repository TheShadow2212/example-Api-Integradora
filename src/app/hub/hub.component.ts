import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {
  @ViewChild('bottom') bottom: ElementRef;
  
  constructor(private router: Router) { }

  scrollToBottom() {
    this.bottom.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
