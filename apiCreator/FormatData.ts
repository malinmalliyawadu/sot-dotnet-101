import { PlayerData, Team } from "./team";

interface Stat {
  stat: String;
  count: Number;
}

interface Player {
  id: string;
  name: string;
  lastName: string;
  position: string;
  height: number;
  weight: number;
  number: number;
  birthday: string;
  stats?: Stat[];
}

interface TeamObject {
  id: string;
  country: String;
  code: String;
  players: Player[];
}
/**
 *
 * @param statData To get this data https://fdh-api.fifa.com/v1/stats/season/{IdSeason}/players.json
 * @param teamData To get this data https://api.fifa.com/api/v3/teams/1883725/squad?idCompetition=103&idSeason=285026&language=en
 * @returns
 */

export const convertToJson = (
  statData: PlayerData,
  teamData: Team
): TeamObject => {
  const players: Player[] = teamData.Players.map((player) => ({
    id: player.IdPlayer,
    name: player.PlayerName[0].Description,
    lastName: player.ShortName[0].Description,
    position: player.PositionLocalized[0].Description,
    height: player.Height,
    weight: player.Weight,
    number: player.JerseyNum,
    birthday: player.BirthDate,
  }));

  const teamObject: TeamObject = {
    id: teamData.IdTeam,
    country: teamData.TeamName[0].Description,
    code: teamData.IdCountry,
    players: players,
  };

  // asign stats to player
  players.forEach((player) => {
    const statArray = statData[player.id].map((stat) => ({
      stat: stat[0],
      count: stat[1],
    }));
    teamObject.players[player.id].stats = statArray;
  });

  return teamObject;
};
