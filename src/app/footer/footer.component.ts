import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
declare var $: any;


library.add(fas, far, fab);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  handleClickGoToTop(){
    $("a[href='#top']").click(function(){
      $("html, body").animate({scrollTop:0}, "slow");
      return false;
    });
  }

  ngOnInit() {
   this.handleClickGoToTop();
  }

}
