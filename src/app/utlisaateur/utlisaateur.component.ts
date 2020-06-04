import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utlisaateur',
  templateUrl: './utlisaateur.component.html',
  styleUrls: ['./utlisaateur.component.css']
})
export class UtlisaateurComponent implements OnInit {
nom : string;
age: number;
email: string;
hobby: hobby;


  constructor() {
    this.nom='Sylla';
    this.age=28;
    this.email='sylla@seysoo.org'
    this.hobby={
      hobbyUn: 'Basket',
      hobbyDeux: 'Foot Ball',
      hobbyTrois: 'Apprendre'

    }
   }

  ngOnInit() {}
onClick(){
  window.alert("Aucune informations suplementaire pour le moment")
}
}
interface hobby{
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;

}