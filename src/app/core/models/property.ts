import { Index } from "./index";

export interface Property {
  propertyName: string;
  propertyAddress: string | null;
  propertyPlanning: string | null;
  propertySource: string | null;
  propertyDef: string | null;
  indexData: any[];
}