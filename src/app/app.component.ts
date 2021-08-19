import { Component, HostListener } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private userRejectedInstallation: boolean = false;

  // Initialize deferredPrompt for use later to show browser install prompt.
  private deferredPrompt;

  constructor(public toastController: ToastController) {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  windowBeforeInstallPrompt(event: any) {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = event;
    // When the user dismissed the installation, we can't show the prompt again
    if (this.userRejectedInstallation) return;
    // Update UI notify the user they can install the PWA
    this.showInstallPromotion();
  }

  @HostListener('window:appinstalled', ['$event'])
  windowAppInstalled(event: any) {
    // Clear the deferredPrompt so it can be garbage collected
    this.deferredPrompt = null;
  }

  private async triggerInstallPrompt() {
    // Show the install prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await this.deferredPrompt.userChoice;
    // When the user dismisses the installation, the beforeinstallprompt will be triggered again.
    // Hence we must set a flag so the toast doens't show again untill a fresh visit.
    // States of outcome: accepted or dismissed.
    if (outcome === 'dismissed') {
      this.userRejectedInstallation = true;
    }
    // We've used the prompt, and can't use it again, throw it away
    this.deferredPrompt = null;
  }

  private async showInstallPromotion() {
    const toast = await this.toastController.create({
      message: 'Installeer de applicatie om er snel naar terug te kunnen komen.',
      position: 'bottom',
      color: 'tertiary',
      buttons: [
        {
          side: 'end',
          text: 'Installeer',
          handler: () => {
            this.triggerInstallPrompt();
          }
        }, {
          side: 'start',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
  }
}
