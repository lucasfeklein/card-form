export interface CardData {
  number: string;
  name: string;
  expDate: {
    month: string;
    year: string;
  };
  cvc: string;
}
