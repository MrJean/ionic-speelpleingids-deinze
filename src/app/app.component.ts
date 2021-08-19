import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Initialize deferredPrompt for use later to show browser install prompt.
  private deferredPrompt;

  constructor() {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  windowBeforeInstallPrompt(event: any) {
    console.log(event);
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    //showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  }
}
