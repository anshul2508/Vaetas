export class Video {
  public id: number;
  public title: string;
  public thumbnail: string;
  public duration: number

  constructor( id: number, title: string, thumbnail: string, duration: number ) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.duration = duration;
  }
}
