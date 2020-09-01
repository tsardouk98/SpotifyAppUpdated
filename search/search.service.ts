import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable() 
    export class SearchService {
        private clientId: string = '3c1affd8f67444769855c8916965d274';
        private artistsUrl: string;
        private albumsUrl: string;
        private albumUrl: string;
        private access_token = 'BQCrejGgdIPlEpCx1nslbhUufQ5b4NamPVgKNfBgtVPlC3FEvFk8q8HOeMP68yDfPSgK6SlxuEOr3BbIFdgNWtfN4X0vksgNgwsGjE6AAA37nig7JuuZzf1FnRBg901lwIamToIzrDAj0wL8sLcoCKlqzEqniQNqfUtHhxHuwTOq7YDEIjjiIVoqUCjhiv24xoI1DWL08D7F2e4u5KEEDBVLcZHEldn'; 
        //= 'https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5&client_id='+this.clientId+'&q=';
        
        constructor(private http: HttpClient){}

        searchArtists(searchTerm: string) {

            let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

      let url = 'https://api.spotify.com/v1/search?q='+ searchTerm + '&type=artist&market=US&limit=20&offset=0';
      return this.http.get(url, {headers: headers })
      .pipe(map(res => res));


            // let url = this.artistsUrl + searchTerm;
            // return this.http.get(url).pipe(map((res: any[]) => (res as any).json()));
          }

        //   getArtist(id:string){

        //     let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
      
        //     this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        //     return this.http.get(this.artistUrl, {headers: headers })
        //     .map(res => res);
        // }
      
        // getAlbums(artistId:string){
      
        //     let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        //     this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+ '/albums';
        //     return this.http.get(this.albumsUrl, {headers: headers })
        //     .map(res => res);
        // }
      
        // getAlbum(id:string){
      
        //     let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        //     this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        //     return this.http.get(this.albumUrl, {headers: headers })
        //     .map(res => res);
        // }

    }


    //url string = 'https://accounts.spotify.com/authorize?client_id=3c1affd8f67444769855c8916965d274&response_type=code&redirect_uri=;
