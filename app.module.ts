import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
  import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent} from './about/about.component';
// import { ArtistComponent} from './artist/artist.component';
// import { AlbumComponent} from './album/album.component';


const appRoutes: Routes = [
  {path:'', component:SearchComponent}
  // {path:'about', component:AboutComponent},
  //  {path:'artist/:id', component:ArtistComponent},
  //  {path:'album/:id', component:AlbumComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    // AboutComponent,
    //  ArtistComponent,
    //  AlbumComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
    .forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
