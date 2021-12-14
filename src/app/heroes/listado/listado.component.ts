import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
   heroes: string[] = ['Spider Man','iron Man', 'Hulk']
   heroeBorrado: string = '';
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
  }

  borrarHeroe(indice: number): void{
    this.heroeBorrado= this.heroes[indice];
    this.heroes.splice(indice,1);
  }
}
