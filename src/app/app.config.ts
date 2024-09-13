import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // This is needed cause primeNgs official installation setup is not working since angular 17
    // broken primeNg docs: https://primeng.org/installation#animations
    // workaround: https://github.com/primefaces/primeng/issues/14843
    provideAnimations(),
  ],
};
