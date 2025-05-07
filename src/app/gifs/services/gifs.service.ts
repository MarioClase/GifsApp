import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

// Para hacerlo con una constante
// const GIPHY_API_KEY = 'puqDZua4j5VpgpCiPSgiFCTkHpMOfrHi';

@Injectable({providedIn: 'root'})
export class GifsService {


  public gifsList: Gif[] = [];


  private _tagsHistory: string[] = [];

  private apikey:     string = 'puqDZua4j5VpgpCiPSgiFCTkHpMOfrHi';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';



  constructor( private http: HttpClient) {
    this.loadLocalStorage();
    console.log(' Gifs Service Ready');

  }



  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistoyry(tag: string){

    // Se pasa a minuscula
    tag = tag.toLowerCase();

    if(this.tagsHistory.includes(tag)){

      // Solo deja pasar los tag diferentes al del listado
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    // limita la busqueda a 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();

  }

  // Para salvar en el local storage
  private saveLocalStorage():void{
    // JSON.stringify convierte un objeto a un string
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
  }

  private loadLocalStorage():void{
    if( !localStorage.getItem('history')) return;

    // JSON.parse convierte un string a un objeto
    // se usa el simbolo(!) para asegurarnos de que no sea nulo
    this._tagsHistory = JSON.parse( localStorage.getItem('history' )!);

    if(this._tagsHistory.length===0 ) return;
    this.searchTag(this._tagsHistory[0]);

  }

   searchTag(tag: string):void {

    if ( tag.length === 0 ) return;
    this.organizeHistoyry(tag);

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag )

    this.http.get<SearchResponse>(`${this.serviceUrl}/search?` , {params} )
    .subscribe( (resp) => {

      this.gifsList  = resp.data;


    })



    // // Forma de hacer una petición HTTP , utilizada en JavaScript
    // fetch('http://api.giphy.com/v1/gifs/trending?aki_key=oJsOpAWF4sxgzH7w7MUti9ogFIhcea96&q=valorant=limit=10')
    // // Se serializa la respuesta a json
    //   .then( resp => resp.json() )
    // // Se extrae la data
    //   .then ( data => console.log(data));

  }
}
