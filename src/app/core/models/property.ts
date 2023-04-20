import { Index } from "./index";

export interface Property {
  id: string;
  address: string | null;
  planning: string | null;
  dataSource: string | null;
  indexData: any[];
}

