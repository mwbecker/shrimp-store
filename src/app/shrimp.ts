export interface Shrimp {
    id: number;
    name: string;
    imageUrl: string;
    price:string;
  }

  export interface ShrimpCart extends Shrimp{
    quantity: number,
    isAdded: boolean
  }