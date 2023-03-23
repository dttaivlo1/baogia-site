import { Index } from 'src/app/models';
export interface Property {
  id: string;
  address: string | null;
  planning: string | null;
  source: string | null;
  indexData: Index[];
}

