import { Component, HostListener } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Initialize deferredPrompt for use later to show browser install prompt.
  private deferredPrompt;

  constructor(public toastController: ToastController) {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  windowBeforeInstallPrompt(event: any) {
    console.log('beforeInstallPrompt', event);
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    this.showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  }

  @HostListener('window:appinstalled', ['$event'])
  windowAppInstalled(event: any) {
    // Hide the app-provided install promotion
    // this.hideInstallPromotion();
    // Clear the deferredPrompt so it can be garbage collected
    this.deferredPrompt = null;
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed');
  }

  private async triggerInstallPrompt() {
    // Hide the app provided install promotion
    // this.hideInstallPromotion();
    // Show the install prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await this.deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
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
            console.log('Install clicked');
            this.triggerInstallPrompt();
          }
        }, {
          side: 'start',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

/*   private hideInstallPromotion() {

  } */
}
