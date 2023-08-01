namespace FifaTeamMaker.Models;

public class Player
{
    public int IdPlayer { get; set; }
    public List<LocalizedString> PlayerName { get; set; }
    public List<LocalizedString> RealPositionLocalized { get; set; }
    public PlayerPicture PlayerPicture { get; set; }
    public string Country { get; set; }
}