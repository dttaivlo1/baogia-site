import { Property } from "./property";

export class Quotation {
  $key: string | null;
  name: string;
  phone: string;
  requestBy: string;
  responseBy: string;
  propertyData: Property[];
  status: boolean | null| string;
  createAt: Date | null;


}
