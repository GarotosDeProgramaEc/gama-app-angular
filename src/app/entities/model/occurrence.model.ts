export class Occurrence {
  constructor(
    public id?: number,
    public latitude?: number,
    public longitude?: number,
    public location?: string,
    public name?: string,
    public description?: string,
    public occurrenceStatusId?: string,
    public occurrenceTypeId?: number,
    public occurrenceUrgencyLevelId ?: number,
    public active  ?: boolean
  ) {
  }
}


