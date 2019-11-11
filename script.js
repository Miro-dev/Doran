let map = [];
let currentPosition = { row: 0, col: 0, Player: true, Monster: false, Item: false, Obsticle: false }
let previousPosition = { row: 0, col: 0, Player: false, Monster: false, Item: false, Obsticle: false }

for (let rowCount = 0; rowCount < 10; rowCount++) {
    $("#map").append(`<div class="row" id="row${rowCount}"></div>`);
    for (let colCount = 0; colCount < 10; colCount++) {
        $(`#row${rowCount}`).append(`<div class="col" id="col${colCount}row${rowCount}"></div>`);
        map.push({ row: rowCount, col: colCount, Player: false, Monster: false, Item: false, Obsticle: false });
    }
}

$(document).keydown(function (e) {
    $(`#col${previousPosition.col}row${previousPosition.row}`).css('background-color', 'green')
    move(e.which);
    let currentTileIdx = map.findIndex((tile) => {
        return tile.row === currentPosition.row && tile.col === currentPosition.col
    })
    map[currentTileIdx].Player = true;
    currentPosition = map[currentTileIdx];
    console.log(currentPosition);
    previousPosition = currentPosition;
    $(`#col${currentPosition.col}row${currentPosition.row}`).css('background-color', 'blue');
});

const move = function (key) {
    previousPosition = currentPosition;
    switch (key) {
        case 38:
            currentPosition.row--
            // Up
            break;

        case 40:
            currentPosition.row++
            // Down
            break;

        case 39:
            currentPosition.col++
            // Right
            break;

        case 37:
            currentPosition.col--
            // Left
            break;

        default:
            break;
    }
}