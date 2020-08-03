import {SponsorDTO} from './sponsorDTO';

export class EventDTO {
  id: number;
  title: string;
  location: string;
  maxNumber: number;
  imageUrl: string;
  plannedDate: Date;
  sponsors: Array<SponsorDTO>;
  description: string;
  ownerId: number;
}
