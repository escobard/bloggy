export const percentage = (totalVotes, voteCount, secondaryVotes) => {
    if (totalVotes == 0) {
        return "No votes yet"
    }
    if (voteCount == 0) {
        return "No votes yet"
    }
    if (secondaryVotes == 0) {
        return "100%"
    }
    if (secondaryVotes == 1 && voteCount == 1) {
        return "50%"
    }
    return voteCount / totalVotes * 100 + "%"
}
