const resetScores = () => {
    if (getById("mmg").checked) localStorage.setItem("mgHighScore", 0)
    if (getById("ttt").checked) localStorage.setItem("ticTacToeScore", JSON.stringify({wins: 0, losses: 0}))
    if (getById("wam").checked) localStorage.setItem("whakamoleScore", 0)
    window.location.reload()
}