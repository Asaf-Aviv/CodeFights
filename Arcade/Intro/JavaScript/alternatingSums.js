const alternatingSums = a => {
    let team1 = 0,
        team2 = 0;
    
    a.map((v, i) => i % 2 ? team2 += a[i] : team1 += a[i])
    return [team1, team2];
}
