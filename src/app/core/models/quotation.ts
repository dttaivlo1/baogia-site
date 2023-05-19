import { Property } from "./property";

export class Quotation {
  id: string | null;
  name: string;
  phone: string;
  requestBy: string;
  responseBy: string;
  propertyData: any[];
  status: boolean | null| string;
  state: boolean;
  createAt: Date | null;

  public constructor(init?: Partial<Quotation>) {
    Object.assign(this, init);
}
}
