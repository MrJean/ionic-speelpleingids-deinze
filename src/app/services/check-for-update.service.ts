import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject, concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {

  updateAvailablePromptUpdate$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(appRef: ApplicationRef, private updates: SwUpdate) {
    console.log('CheckForUpdateService constructor');
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    this.listenForAvailableUpdate();
    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
  }

  updateApplication(): void {
    console.log('update application');
    this.updateAvailablePromptUpdate$.next(false);
    this.updates.activateUpdate().then(() => document.location.reload());
  }

  private listenForAvailableUpdate(): void {
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.updateAvailablePromptUpdate$.next(true);
    });
  }

}