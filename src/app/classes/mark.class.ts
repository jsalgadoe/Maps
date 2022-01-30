export class Mark {
  public lat:number;
  public lng:number;

  public title:string =  "sin titulo";
  public desc:string = "sin descripcion";

  constructor( lat:number,lng:number) {
    this.lat =  lat;
    this.lng =  lng;
  }
}
