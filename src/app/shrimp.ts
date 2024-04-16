export interface Shrimp {
    id: number;
    name: string;
    imageUrl: string;
    price:string;
  }

export interface ShrimpWithFile extends Shrimp{
   file:File;
}