namespace FifaTeamMaker.Constants;

public static class Constants
{
    public static string FifaApiUrl = "https://api.fifa.com/api/v3/teams/1883725/squad?idCompetition=103&idSeason=285026&language=en";
    public static Dictionary<string, string> Countries { get; set; } = new Dictionary<string, string>(){
        {"argentina", "1884881"},
        {"australia", "1882891"},
        {"denmark", "1883719"},
        {"vietnam", "1886308"},
        {"costa-rica", "1884880"},
        {"spain", "1884823"},
        {"brazil", "1882881"},
        {"netherlands", "1884883"},
        {"south-africa", "1885031"},
        {"colombia", "1885035"},
        {"japan", "1883723"},
        {"italy", "1883722"},
        {"new-zealand", "1883725"},
        {"jamaica", "1885011"},
        {"england", "1883720"},
        {"switzerland", "1884203"},
        {"haiti", "1885012"},
        {"morocco", "1884821"},
        {"usa", "1882884"},
        {"france", "1884761"},
        {"norway", "1882882"},
        {"republic-of-ireland", "1884884"},
        {"sweden", "1882883"},
        {"zambia", "1885017"},
        {"portugal", "1884822"},
        {"china-pr", "1882892"},
        {"philippines", "1885027"},
        {"panama", "1889512"},
        {"germany", "1882879"},
        {"korea-republic", "1885010"},
        {"nigeria", "1882893"},
        {"canada", "1883718"},
    };
}