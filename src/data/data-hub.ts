import dataHubFromJson from './output.json';

export interface DataHub {
  Country: string;
  Code: string;
  Category: string;
  SubCategory: string;
  Name: string;
  ShortDesc: string;
  Description: string;
  Source: string;
  Frequency: string;
  Decimal: number;
  License: string;
  Interfaces: Array<string>;
}

export const dataHub = dataHubFromJson as unknown as DataHub[];
