export class Occurrence {
  constructor(
    public id?: number,
    public userId?: number,
    public latitude?: string,
    public longitude?: string,
    public location?: string,
    public name?: string,
    public description?: string,
    public occurrenceStatusId?: number,
    public occurrenceTypeId ?: number,
    public occurrenceUrgencyLevelId  ?: number,
    public active  ?: boolean
  ) {
  }
}


