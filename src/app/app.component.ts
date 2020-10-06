import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-tracker';

  ngOnInit() {
    $(function() {
      var topoffset = 80; //variable for menu height
    
      //Use smooth scrolling when clicking on navigation
      $('.navbar-nav a').click(function() {
        if($('.navbar-toggler').css('display') != 'none'){
            $('.navbar-toggler').click(); //bootstrap 4.x, close menu on selection of an item.
        }

        if (location.pathname.replace(/^\//,'') === 
          this.pathname.replace(/^\//,'') && 
          location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top-topoffset
            }, 500);
            return false;
          }
        } //click function
      }); //smooth scrolling
    
    }); 
  }
}
