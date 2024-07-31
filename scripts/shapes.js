const SHAPES = [
    // I
    [
        [1, 1, 1, 1]
    ],
    // J
    [
        [2, 0, 0],
        [2, 2, 2]
    ],
    // L
    [
        [0, 0, 3],
        [3, 3, 3]
    ],
    // O
    [
        [4, 4],
        [4, 4]
    ],
    // S
    [
        [0, 5, 5],
        [5, 5, 0]
    ],
    // T
    [
        [0, 6, 0],
        [6, 6, 6]
    ],
    // Z
    [
        [7, 7, 0],
        [0, 7, 7]
    ]
];

const COLORS = [
    'cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'
];

function getRandomShape() {
    const index = getRandomInt(SHAPES.length);
    const shape = SHAPES[index].map(row => row.map(value => (value ? COLORS[index] : 0)));
    return { shape, color: COLORS[index] };
}
