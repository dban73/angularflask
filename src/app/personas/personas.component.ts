import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas = [
    {id:'1', nombre:'nombre1', telefono:'48489',email:'nombre@main.com'},
    {id:'2', nombre:'nombre2', telefono:'48489',email:'nombre@main.com'},
    {id:'3', nombre:'nombre3', telefono:'48489',email:'nombre@main.com'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
