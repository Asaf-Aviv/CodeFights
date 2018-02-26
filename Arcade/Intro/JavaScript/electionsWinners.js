const electionsWinners = (votes, k) => {
    let leader = Math.max(...votes)
    let winners = votes.filter(v => v + k > leader || v === leader).length
    return k ? winners : winners === 1 ? 1 : 0
}