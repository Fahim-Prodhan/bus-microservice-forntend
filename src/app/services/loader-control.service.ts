import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class LoaderControlService {

  private showLoader = true;

  constructor(private ngxUiLoaderService: NgxUiLoaderService) {}

  setShowLoader(show: boolean): void {
    this.showLoader = show;
    if (show) {
      this.ngxUiLoaderService.start();
    } else {
      this.ngxUiLoaderService.stop();
    }
  }

  shouldShowLoader(): boolean {
    return this.showLoader;
  }
}
