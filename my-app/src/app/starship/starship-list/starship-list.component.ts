import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../starship.service';
import { Starship } from '../starship';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starships: Starship[] = [];
  rebellionCount: number = 0;
  empireCount: number = 0;
  neutralCount: number = 0;

  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    this.starshipService.getStarships().subscribe((data) => {
      this.starships = data;
      this.countFactions();
    });
  }

  countFactions(): void {
    this.rebellionCount = this.starships.filter(s => s.bando === 'Rebelión').length;
    this.empireCount = this.starships.filter(s => s.bando === 'Imperio').length;
    this.neutralCount = this.starships.filter(s => s.bando === 'Neutral').length;
  }
}





