let map = [];
let currentPosition = { row: 2, col: 2, Player: true, Monster: false, Item: false, Obsticle: false }
let previousPosition = { row: 0, col: 0, Player: false, Monster: false, Item: false, Obsticle: false }
let currPosIdx = 0;
let prevPosIdx = 0;
let currTileIdx
let wallIndicator = 0;

// Cloning function for Objects
function clone(src) {
    return Object.assign({}, src);
}

for (let rowCount = 0; rowCount < 10; rowCount++) {
    $("#map").append(`<div class="row" id="row${rowCount}"></div>`);
    for (let colCount = 0; colCount < 10; colCount++) {
        $(`#row${rowCount}`).append(`<div class="col" id="col${colCount}row${rowCount}"></div>`);
        map.push({ row: rowCount, col: colCount, Player: false, Monster: false, Item: false, Obsticle: false });
    }
}

$(document).keydown(function (e) {

    // Change Color of previous Tile
    $(`#col${previousPosition.col}row${previousPosition.row}`).css('background-color', 'rgb(136, 199, 144)')
    $(`#col${currentPosition.col}row${currentPosition.row}`).css('background-color', 'rgb(136, 199, 144)')

    // Iherit index and position
    prevPosIdx = currPosIdx;
    previousPosition = clone(currentPosition);

    // Change coordinates of Player
    move(e.which);

    // Get current Index
    function findTile(tile) {
        return tile.row == currentPosition.row && tile.col == currentPosition.col;
    }

    currTileIdx = map.findIndex(findTile);

    currPosIdx = currTileIdx;

    // Player on/off tile
    map[currPosIdx].Player = true;
    currentPosition = clone(map[currPosIdx]);
    map[prevPosIdx].Player = false;
    previousPosition = clone(map[prevPosIdx]);

    currentPosition.Monster = true;

    // Change Color of current Tile
    $(`#col${currentPosition.col}row${currentPosition.row}`).css('background-color', 'blue');

    if (wallIndicator === 1) {
        $(`#col${currentPosition.col}row${currentPosition.row}`).css('background-color', 'red');
        wallIndicator = 0;
    }
});

const populateObsitcles = function (array) {

}

const move = function (key) {
    console.log("Row: " + currentPosition.row)
    console.log("Col: " + currentPosition.col)
    switch (key) {
        case 38:
            if (currentPosition.row === 0) {
                wallIndicator = 1;
            } else {
                currentPosition.row--
            }
            // Up
            break;

        case 40:
            if (currentPosition.row === 9) {
                wallIndicator = 1;
            } else {
                currentPosition.row++
            }
            // Down
            break;

        case 39:
            if (currentPosition.col === 9) {
                wallIndicator = 1;
            } else {
                currentPosition.col++
            }
            // Right
            break;

        case 37:
            if (currentPosition.col === 0) {
                wallIndicator = 1;
            } else {
                currentPosition.col--
            }
            // Left
            break;

        default:
            break;
    }
}