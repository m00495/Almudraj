// game.js
const CURRENT_TEAM_KEY = 'currentTeam';
const SCORE_PREFIX = 'score_';
const TEAMS_ORDER = ['red', 'orange', 'green', 'blue'];

function getCurrentTeam() {
    return localStorage.getItem(CURRENT_TEAM_KEY) || 'red';
}

function setCurrentTeam(team) {
    localStorage.setItem(CURRENT_TEAM_KEY, team);
}

function getTeamScore(team) {
    return parseInt(localStorage.getItem(SCORE_PREFIX + team)) || 0;
}

function addCurrentTeamPoints(points) {
    const team = getCurrentTeam();
    let score = getTeamScore(team);
    score += points;
    localStorage.setItem(SCORE_PREFIX + team, score);
}

function nextTeam() {
    const current = getCurrentTeam();
    const idx = TEAMS_ORDER.indexOf(current);
    const nextIdx = (idx + 1) % TEAMS_ORDER.length;
    setCurrentTeam(TEAMS_ORDER[nextIdx]);
}