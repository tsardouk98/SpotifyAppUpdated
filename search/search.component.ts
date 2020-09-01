// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { SearchService } from './search.service';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//   inputField: FormControl = new FormControl();
//   searchResults: any[] = [];
//   constructor(private searchService: SearchService) { }

//   ngOnInit() {
//     this.inputField.valueChanges
//     .subscribe(inputField => this.searchService.searchArtists(inputField)
//     .subscribe((result: Response) => {
//       if(result.status===400){return;}
//       else { this.searchResults = (result as any).artists.items;}
//     }
      
//       ));

//   }

// }
import { Component } from '@angular/core';
import {SearchService} from './search.service';
// import {Artist} from '../../../Artist'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers : [SearchService]
})

export class SearchComponent {

    searchStr:string;
    searchRes: any[]

    constructor(private searchService: SearchService) {

    }

    searchArtist(){
      this.searchService.searchArtists(this.searchStr)
      .subscribe(res =>{
        this.searchRes = (res as any).artists.items;
      })
    }
}