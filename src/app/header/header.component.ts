import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  displayContent = true;
    constructor(  private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.setDisplayForSmallDevices();
    // this.setDisplayFor1024widthDevices();
  }

  setDisplayForSmallDevices() {
    this.breakpointObserver
    .observe(['(max-width: 1023px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.displayContent = false;
      } else {
        this.displayContent = true;
      }
      console.log('match ', this.displayContent);
    });
  }

  // setDisplayFor1024widthDevices() {
  //   this.breakpointObserver
  //   .observe(['(max-width: 1024px)'])
  //   .subscribe((state: BreakpointState) => {
  //     if (state.matches) {
  //       this.displayFirstGrid = false;
  //     } else {
  //       this.displayFirstGrid = true;
  //     }
  //   });
  // }
}
