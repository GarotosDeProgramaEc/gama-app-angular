import {Violation} from "./violation.model";

export class Fine {
  constructor(
    public id?: number,
    public active  ?: boolean,
    public licensePlate?: string,
    public latitude?: number,
    public longitude?: number,
    public trafficViolations?: Violation[],
    public imageUrl?: string
  ) {
  }
}


