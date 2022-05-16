import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string [] = ['position', 'image', 'name']
  data: any [] = []
  dataSource = new MatTableDataSource<any>(this.data)
  pokemons = []

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private PokeSevice: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    let pokemonData;
    for(let i = 1; i <=150; i++){
      this.PokeSevice.getPokemons(i).subscribe(
        res =>{
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          }
          this.data.push(pokemonData)
          this.dataSource = new MatTableDataSource<any>(this.data)
          this.dataSource.paginator = this.paginator
        },
        err =>{
          console.log(err)
        }
        
      )
    }
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

