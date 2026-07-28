// ========== game.js ==========

// أسماء الفرق ومفاتيح localStorage
const TEAMS = ['red', 'orange', 'green', 'blue'];
const CURRENT_TEAM_KEY = 'currentTeam';
const SCORE_PREFIX = 'score_';

// الحصول على الفريق الحالي
function getCurrentTeam() {
    return localStorage.getItem(CURRENT_TEAM_KEY) || 'red';
}

// تعيين الفريق الحالي
function setCurrentTeam(team) {
    localStorage.setItem(CURRENT_TEAM_KEY, team);
}

// جلب نقاط فريق معين
function getTeamScore(team) {
    return parseInt(localStorage.getItem(SCORE_PREFIX + team)) || 0;
}

// إضافة نقاط للفريق الحالي
function addCurrentTeamPoints(points) {
    const team = getCurrentTeam();
    let score = getTeamScore(team);
    score += points;
    localStorage.setItem(SCORE_PREFIX + team, score);
}

// الانتقال إلى الفريق التالي
function nextTeam() {
    const current = getCurrentTeam();
    const idx = TEAMS.indexOf(current);
    const nextIdx = (idx + 1) % TEAMS.length;
    setCurrentTeam(TEAMS[nextIdx]);
}

// تحديث واجهة إظهار الفريق الحالي في صفحة السؤال
function updateTeamDisplay() {
    const team = getCurrentTeam();
    const names = {
        red: 'الفريق الأحمر',
        orange: 'الفريق البرتقالي',
        green: 'الفريق الأخضر',
        blue: 'الفريق الأزرق'
    };
    const el = document.getElementById('teamIndicator');
    if (el) el.textContent = 'الدور: ' + (names[team] || team);
}