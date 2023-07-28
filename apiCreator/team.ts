export const TeamIds = {
  argentina: "1884881",
  australia: "1882891",
  denmark: "1883719",
  vietnam: "1886308",
  "costa-rica": "1884880",
  spain: "1884823",
  brazil: "1882881",
  netherlands: "1884883",
  "south-africa": "1885031",
  colombia: "1885035",
  japan: "1883723",
  italy: "1883722",
  "new-zealand": "1883725",
  jamaica: "1885011",
  england: "1883720",
  switzerland: "1884203",
  haiti: "1885012",
  morocco: "1884821",
  usa: "1882884",
  france: "1884761",
  norway: "1882882",
  "republic-of-ireland": "1884884",
  sweden: "1882883",
  zambia: "1885017",
  portugal: "1884822",
  "china-pr": "1882892",
  philippines: "1885027",
  panama: "1889512",
  germany: "1882879",
  "korea-republic": "1885010",
  nigeria: "1882893",
  canada: "1883718",
};

// for the stats JSON

export interface Stat {
  name: string;
  value: number;
  flag: boolean;
}

export interface PlayerData {
  [playerId: string]: Stat[];
}

// For the team JSON

export interface LocalizedDescription {
  Locale: string;
  Description: string;
}

export interface PlayerPicture {
  Id: string;
  PictureUrl: string;
}

export interface Properties {
  IdIFES: string;
}

export interface Player {
  IdTeam: string;
  IdPlayer: string;
  IdSeason: string;
  PlayerName: LocalizedDescription[];
  ShortName: LocalizedDescription[];
  TeamType: null | string; // I've put string as type but it's unclear what the possible types are
  JerseyNum: number;
  MatchesPlayed: null | number; // Assuming MatchesPlayed is a number when not null
  Position: number;
  BirthDate: string;
  DebutDate: null | string; // Assuming DebutDate is a string when not null
  JoinDate: string;
  LeaveDate: string;
  PreferredFoot: null | string; // I've put string as type but it's unclear what the possible types are
  PictureUrl: null | string; // Assuming PictureUrl is a string when not null
  ThumbnailUrl: null | string; // Assuming ThumbnailUrl is a string when not null
  CompetitionDebut: null | string; // Assuming CompetitionDebut is a string when not null
  RealPosition: number;
  RealPositionSide: number;
  Goals: null | number; // Assuming Goals is a number when not null
  RedCards: null | number; // Assuming RedCards is a number when not null
  YellowCards: null | number; // Assuming YellowCards is a number when not null
  MediaContent: any[]; // Assuming MediaContent is an array but it's unclear what the possible types are
  PositionLocalized: LocalizedDescription[];
  RealPositionLocalized: LocalizedDescription[];
  RealPositionSideLocalized: LocalizedDescription[];
  SpecialStatus: number;
  Weight: number;
  Height: number;
  IdCountry: string;
  PlayerPicture: PlayerPicture;
  Properties: Properties;
  IsUpdateable: null | boolean; // Assuming IsUpdateable is a boolean when not null
}

export interface Team {
  IdCompetition: string;
  IdSeason: string;
  IdTeam: string;
  IdCountry: string;
  PictureUrl: string;
  TeamName: LocalizedDescription[];
  Players: Player[];
  ParticipationStatus: number;
  Properties: Object;
  IsUpdateable: null | boolean;
}
