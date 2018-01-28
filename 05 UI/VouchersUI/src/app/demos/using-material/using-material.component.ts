import { Http } from '@angular/http';
import {Component, ElementRef, ViewChild,  OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MatSidenav, MatSidenavContainer, MatList, MatToolbar, MatIcon, MatMenu, MatCard, MatFormField} from '@angular/material';
import { Voucher } from '../../shared/index';

@Component({
  selector: 'app-using-material',
  templateUrl: './using-material.component.html',
  styleUrls: ['./using-material.component.scss']
})
export class UsingMaterialComponent implements OnInit {
  

  constructor(private http:Http) {  }

  ngOnInit() {
  }  
 
}