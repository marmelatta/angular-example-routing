import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.css']
})
export class SecondParentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    console.log('constructor second')
    this.route.params.subscribe(
      params => {
          let id = +params['id'];
          console.log('новый id', id);
          //this.getProduct(id);
      }
  );

  }

  ngOnInit(): void {
    console.log('on init')
  }

  ngOnChanges() {
       
    this.log(`OnChanges`);
  }
  ngDoCheck() {
     
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
     
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
     
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
     
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
     
    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
      //console.log(". " + msg);
  }
}
