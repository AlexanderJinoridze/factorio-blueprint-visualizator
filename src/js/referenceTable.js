var referenceTable = {
    accumulator: {
        "grid-size": 2,
        "image-size": 256,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [6, 7],

        "wire-connectors": {
            "1": {
                "red-wire": [56, 41],
                "green-wire": [58, 55],
            },
        },

        "shadow-size": [234, 106],
        "shadow-image-pos": 0,
        "shadow-offset": [-58, -40],
    },
    "arithmetic-combinator": {
        "grid-size": [1, 2],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "combinator-display-offset": [-14, -20],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-17, 31],
                        "green-wire": [21, 31],
                    },
                    "2": {
                        "red-wire": [-17, -42],
                        "green-wire": [20, -42],
                    },
                },

                "shadow-size": [94, 84],
                "shadow-image-pos": 234,
                "shadow-offset": [-31, -28],
            },
            {
                "combinator-display-offset": [-14, -32],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-48, -28],
                        "green-wire": [-48, -1],
                    },
                    "2": {
                        "red-wire": [46, -23],
                        "green-wire": [46, 4],
                    },
                },

                "shadow-size": [127, 65],
                "shadow-image-pos": 328,
                "shadow-offset": [-46, -21],
            },
            {
                "combinator-display-offset": [-14, -20],

                "wire-connectors": {
                    "1": {
                        "red-wire": [20, -41],
                        "green-wire": [-18, -40],
                    },
                    "2": {
                        "red-wire": [20, 32],
                        "green-wire": [-17, 32],
                    },
                },

                "shadow-size": [94, 83],
                "shadow-image-pos": 455,
                "shadow-offset": [-32, -26],
            },
            {
                "combinator-display-offset": [-14, -32],

                "wire-connectors": {
                    "1": {
                        "red-wire": [51, -2],
                        "green-wire": [51, -29],
                    },
                    "2": {
                        "red-wire": [-44, 3],
                        "green-wire": [-44, -24],
                    },
                },

                "shadow-size": [126, 65],
                "shadow-image-pos": 549,
                "shadow-offset": [-34, -22],
            },
        ],
    },
    "artillery-turret": {
        "grid-size": 3,
        "image-size": 576,
        "dir-count": 4,

        "dir-versions": [
            {
                "shadow-size": [374, 219],
                "shadow-image-pos": 675,
                "shadow-offset": [-103, -109],
            },
            {
                "shadow-size": [580, 149],
                "shadow-image-pos": 1049,
                "shadow-offset": [-103, -44],
            },
            {
                "shadow-size": [377, 246],
                "shadow-image-pos": 1629,
                "shadow-offset": [-102, -44],
            },
            {
                "shadow-size": [364, 149],
                "shadow-image-pos": 2006,
                "shadow-offset": [-103, -44],
            },
        ],
    },
    "assembling-machine-1": {
        "grid-size": 3,
        "image-size": 256,

        "shadow-size": [190, 165],
        "shadow-image-pos": 2370,
        "shadow-offset": [-78, -71],
    },
    "assembling-machine-2": {
        "grid-size": 3,
        "image-size": 256,
        "dir-count": 4,

        "shadow-size": [193, 163],
        "shadow-image-pos": 2560,
        "shadow-offset": [-75, -72],

        "dir-versions": [
            {
                "pipe-connectors": [[0, -1]],

                "shadow-size": [193, 203],
                "shadow-image-pos": 2753,
                "shadow-offset": [-76, -112],
            },
            {
                "pipe-connectors": [[1, 0]],

                "pipe-outputs": [
                    {
                        "output-coord": [2, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [193, 163],
                "shadow-image-pos": 2560,
                "shadow-offset": [-75, -72],
            },
            {
                "pipe-connectors": [[0, 1]],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [193, 168],
                "shadow-image-pos": 2946,
                "shadow-offset": [-76, -72],
            },
            {
                "pipe-connectors": [[-1, 0]],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, 0],
                        "cover-pos": [384, 0],
                    },
                ],

                "shadow-size": [193, 163],
                "shadow-image-pos": 2560,
                "shadow-offset": [-75, -72],
            },
        ],
    },
    "assembling-machine-3": {
        "grid-size": 3,
        "image-size": 256,
        "dir-count": 4,

        "shadow-size": [231, 162],
        "shadow-image-pos": 3139,
        "shadow-offset": [-74, -73],

        "dir-versions": [
            {
                "pipe-connectors": [[0, -1]],

                "shadow-size": [231, 201],
                "shadow-image-pos": 3370,
                "shadow-offset": [-75, -112],
            },
            {
                "pipe-connectors": [[1, 0]],

                "pipe-outputs": [
                    {
                        "output-coord": [2, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [231, 162],
                "shadow-image-pos": 3139,
                "shadow-offset": [-74, -73],
            },
            {
                "pipe-connectors": [[0, 1]],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [231, 171],
                "shadow-image-pos": 3601,
                "shadow-offset": [-74, -73],
            },
            {
                "pipe-connectors": [[-1, 0]],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, 0],
                        "cover-pos": [384, 0],
                    },
                ],

                "shadow-size": [253, 162],
                "shadow-image-pos": 3832,
                "shadow-offset": [-96, -73],
            },
        ],
    },
    beacon: {
        "grid-size": 3,
        "image-size": 256,

        "beacon-slot-down-offset": [-63, -2],
        "beacon-slot-up-offset": [7, -55],

        "shadow-size": [244, 176],
        "shadow-image-pos": 4085,
        "shadow-offset": [-97, -86],
    },
    "big-electric-pole": {
        "grid-size": 2,
        "image-size": [192, 320],
        "image-offset": [-96, -256],
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [1, -249],
                        "red-wire": [60, -213],
                        "green-wire": [-56, -213],
                    },
                },

                "shadow-size": [374, 94],
                "shadow-image-pos": 4329,
                "shadow-offset": [-67, -45],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [33, -238],
                        "red-wire": [41, -186],
                        "green-wire": [-41, -244],
                    },
                },

                "shadow-size": [374, 94],
                "shadow-image-pos": 4703,
                "shadow-offset": [-67, -45],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [47, -212],
                        "red-wire": [1, -171],
                        "green-wire": [2, -251],
                    },
                },

                "shadow-size": [374, 94],
                "shadow-image-pos": 5077,
                "shadow-offset": [-67, -45],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [32, -190],
                        "red-wire": [-40, -184],
                        "green-wire": [41, -241],
                    },
                },

                "shadow-size": [374, 94],
                "shadow-image-pos": 5451,
                "shadow-offset": [-67, -45],
            },
        ],
    },
    boiler: {
        "grid-size": [3, 2],
        "image-size": 320,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [0, -0.5],
                    [1, 0.5],
                    [-1, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [2, 0.5],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-2, 0.5],
                        "cover-pos": [384, 0],
                    },
                ],

                "shadow-size": [274, 180],
                "shadow-image-pos": 5825,
                "shadow-offset": [-96, -80],
            },
            {
                "pipe-connectors": [
                    [-0.5, -1],
                    [0.5, 0],
                    [-0.5, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [1.5, 0],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-0.5, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [186, 228],
                "shadow-image-pos": 6099,
                "shadow-offset": [-34, -112],
            },
            {
                "pipe-connectors": [
                    [-1, -0.5],
                    [0, 0.5],
                    [1, -0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, -0.5],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [0, 1.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [2, -0.5],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [311, 131],
                "shadow-image-pos": 6285,
                "shadow-offset": [-96, -40],
            },
            {
                "pipe-connectors": [
                    [0.5, -1],
                    [-0.5, 0],
                    [0.5, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [0.5, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [206, 234],
                "shadow-image-pos": 6596,
                "shadow-offset": [-64, -112],
            },
        ],
    },
    "burner-inserter": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "burner-mining-drill": {
        "grid-size": 2,
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "circuit-connector-pos": 640,
                "circuit-connector-offset": [-53, -45],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-11, -4],
                        "green-wire": [-20, 9],
                    },
                },

                "shadow-size": [177, 150],
                "shadow-image-pos": 7031,
                "shadow-offset": [-62, -76],
            },
            {
                "circuit-connector-pos": 640,
                "circuit-connector-offset": [-53, -45],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-11, -4],
                        "green-wire": [-20, 9],
                    },
                },

                "shadow-size": [185, 128],
                "shadow-image-pos": 7208,
                "shadow-offset": [-66, -62],
            },
            {
                "circuit-connector-pos": 640,
                "circuit-connector-offset": [-53, -45],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-11, -4],
                        "green-wire": [-20, 9],
                    },
                },

                "shadow-size": [174, 137],
                "shadow-image-pos": 7393,
                "shadow-offset": [-67, -62],
            },
            {
                "circuit-connector-pos": 640,
                "circuit-connector-offset": [-53, -45],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-11, -4],
                        "green-wire": [-20, 9],
                    },
                },

                "shadow-size": [176, 130],
                "shadow-image-pos": 7567,
                "shadow-offset": [-74, -62],
            },
        ],
    },
    centrifuge: {
        "grid-size": 3,
        "image-size": 320,

        "shadow-size": [346, 203],
        "shadow-image-pos": 7743,
        "shadow-offset": [-95, -94],
    },
    "chemical-plant": {
        "grid-size": 3,
        "image-size": 384,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [-1, -1],
                    [1, -1],
                    [-1, 1],
                    [1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1, 2],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [1, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [282, 211],
                "shadow-image-pos": 8089,
                "shadow-offset": [-91, -111],
            },
            {
                "pipe-connectors": [
                    [-1, -1],
                    [1, -1],
                    [-1, 1],
                    [1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, -1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [2, -1],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-2, 1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [2, 1],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [283, 171],
                "shadow-image-pos": 8371,
                "shadow-offset": [-98, -67],
            },
            {
                "pipe-connectors": [
                    [-1, -1],
                    [1, -1],
                    [-1, 1],
                    [1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1, 2],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [1, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [242, 235],
                "shadow-image-pos": 8654,
                "shadow-offset": [-96, -111],
            },
            {
                "pipe-connectors": [
                    [-1, -1],
                    [1, -1],
                    [-1, 1],
                    [1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, -1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [2, -1],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-2, 1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [2, 1],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [306, 179],
                "shadow-image-pos": 8896,
                "shadow-offset": [-96, -67],
            },
        ],
    },
    "constant-combinator": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-16, -32],
                        "green-wire": [15, -32],
                    },
                },

                "shadow-size": [98, 66],
                "shadow-image-pos": 9202,
                "shadow-offset": [-31, -21],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [32, -31],
                        "green-wire": [32, -4],
                    },
                },

                "shadow-size": [98, 66],
                "shadow-image-pos": 9300,
                "shadow-offset": [-31, -21],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [19, 15],
                        "green-wire": [-12, 15],
                    },
                },

                "shadow-size": [98, 66],
                "shadow-image-pos": 9398,
                "shadow-offset": [-31, -21],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-30, 1],
                        "green-wire": [-30, -26],
                    },
                },

                "shadow-size": [98, 66],
                "shadow-image-pos": 9496,
                "shadow-offset": [-31, -21],
            },
        ],
    },
    "curved-rail": {
        "grid-size": [4, 8],
        "image-size": 640,
        "dir-count": 8,

        "dir-versions": [
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-3, -3],
                                "rail-dir": 1,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-4, -6],
                                "rail-dir": 4,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-2, -3],
                        "rail-cover-dir": 7,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[1, 5],
                                "rail-dir": 0,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[0, 8],
                                "rail-dir": 5,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[2, 8],
                                "rail-dir": 4,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [1, 4],
                        "rail-cover-dir": 4,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[3, -3],
                                "rail-dir": 7,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[4, -6],
                                "rail-dir": 5,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [2, -3],
                        "rail-cover-dir": 1,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-1, 5],
                                "rail-dir": 0,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[2, 8],
                                "rail-dir": 5,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[0, 8],
                                "rail-dir": 4,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-1, 4],
                        "rail-cover-dir": 4,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[3, -3],
                                "rail-dir": 3,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[6, -4],
                                "rail-dir": 6,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [3, -2],
                        "rail-cover-dir": 1,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-5, 1],
                                "rail-dir": 2,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-8, 0],
                                "rail-dir": 7,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[-8, 2],
                                "rail-dir": 6,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-4, 1],
                        "rail-cover-dir": 6,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-5, -1],
                                "rail-dir": 2,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-8, -2],
                                "rail-dir": 7,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[-8, 0],
                                "rail-dir": 6,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-4, -1],
                        "rail-cover-dir": 6,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[3, 3],
                                "rail-dir": 1,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[6, 4],
                                "rail-dir": 7,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [3, 2],
                        "rail-cover-dir": 3,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-1, -5],
                                "rail-dir": 0,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-1, -8],
                                "rail-dir": 0,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[0, -8],
                                "rail-dir": 1,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-1, -4],
                        "rail-cover-dir": 0,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[3, 3],
                                "rail-dir": 5,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[4, 6],
                                "rail-dir": 0,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [2, 3],
                        "rail-cover-dir": 3,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[1, -5],
                                "rail-dir": 0,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[0, -8],
                                "rail-dir": 0,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[1, -8],
                                "rail-dir": 1,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [1, -4],
                        "rail-cover-dir": 0,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-3, 3],
                                "rail-dir": 3,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-4, 6],
                                "rail-dir": 1,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-2, 3],
                        "rail-cover-dir": 5,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[5, -1],
                                "rail-dir": 2,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[8 - 2],
                                "rail-dir": 2,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[8, 0],
                                "rail-dir": 3,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [4, -1],
                        "rail-cover-dir": 2,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-3, 3],
                                "rail-dir": 7,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-6, 4],
                                "rail-dir": 2,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-3, 2],
                        "rail-cover-dir": 5,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-3, -3],
                                "rail-dir": 5,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-6, -4],
                                "rail-dir": 3,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-3, -2],
                        "rail-cover-dir": 7,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[5, 1],
                                "rail-dir": 2,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[8, 0],
                                "rail-dir": 2,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[8, 2],
                                "rail-dir": 3,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [4, 1],
                        "rail-cover-dir": 2,
                    },
                ],
            },
        ],
    },
    "decider-combinator": {
        "grid-size": [1, 2],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "combinator-display-offset": [-14, -20],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-16, 31],
                        "green-wire": [19, 31],
                    },
                    "2": {
                        "red-wire": [-17, -41],
                        "green-wire": [20, -41],
                    },
                },

                "shadow-size": [96, 83],
                "shadow-image-pos": 9594,
                "shadow-offset": [-31, -22],
            },
            {
                "combinator-display-offset": [-15, -38],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-47, -35],
                        "green-wire": [-46, -6],
                    },
                    "2": {
                        "red-wire": [45, -34],
                        "green-wire": [45, -5],
                    },
                },

                "shadow-size": [134, 66],
                "shadow-image-pos": 9690,
                "shadow-offset": [-53, -27],
            },
            {
                "combinator-display-offset": [-14, -19],

                "wire-connectors": {
                    "1": {
                        "red-wire": [20, -36],
                        "green-wire": [-16, -36],
                    },
                    "2": {
                        "red-wire": [20, 38],
                        "green-wire": [-18, 38],
                    },
                },

                "shadow-size": [94, 83],
                "shadow-image-pos": 9824,
                "shadow-offset": [-31, -17],
            },
            {
                "combinator-display-offset": [-14, -38],

                "wire-connectors": {
                    "1": {
                        "red-wire": [49, -7],
                        "green-wire": [49, -35],
                    },
                    "2": {
                        "red-wire": [-41, -5],
                        "green-wire": [-42, -31],
                    },
                },

                "shadow-size": [126, 65],
                "shadow-image-pos": 9918,
                "shadow-offset": [-37, -30],
            },
        ],
    },
    "electric-furnace": {
        "grid-size": 3,
        "image-size": 256,

        "shadow-size": [227, 171],
        "shadow-image-pos": 10044,
        "shadow-offset": [-90, -69],
    },
    "electric-mining-drill": {
        "grid-size": 3,
        "image-size": 256,
        "dir-count": 4,

        "dir-versions": [
            {
                "circuit-connector-pos": 256,
                "circuit-connector-offset": [-119, -112],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-85, -104],
                        "green-wire": [-71, -104],
                    },
                },

                "shadow-size": [244, 204],
                "shadow-image-pos": 10271,
                "shadow-offset": [-95, -108],
            },
            {
                "circuit-connector-pos": 128,
                "circuit-connector-offset": [37, 30],

                "wire-connectors": {
                    "1": {
                        "red-wire": [86, 53],
                        "green-wire": [88, 66],
                    },
                },

                "shadow-size": [247, 182],
                "shadow-image-pos": 10515,
                "shadow-offset": [-92, -89],
            },
            {
                "circuit-connector-pos": 0,
                "circuit-connector-offset": [-101, 18],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-72, 59],
                        "green-wire": [-86, 59],
                    },
                },

                "shadow-size": [245, 204],
                "shadow-image-pos": 10762,
                "shadow-offset": [-95, -98],
            },
            {
                "circuit-connector-pos": 384,
                "circuit-connector-offset": [-99, 44],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-89, 67],
                        "green-wire": [-86, 53],
                    },
                },

                "shadow-size": [263, 182],
                "shadow-image-pos": 11007,
                "shadow-offset": [-108, -91],
            },
        ],
    },
    "express-splitter": {
        "grid-size": [2, 1],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "belt-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-0.5, -1],
                        "cover-pos": [0, 128],
                    },
                    {
                        "output-coord": [0.5, -1],
                        "cover-pos": [0, 128],
                    },
                    {
                        "output-coord": [-0.5, 1],
                        "cover-pos": [128, 128],
                    },
                    {
                        "output-coord": [0.5, 1],
                        "cover-pos": [128, 128],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-1, -0.5],
                        "cover-pos": [0, 0],
                    },
                    {
                        "output-coord": [-1, 0.5],
                        "cover-pos": [0, 0],
                    },
                    {
                        "output-coord": [1, -0.5],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [1, 0.5],
                        "cover-pos": [128, 0],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-0.5, -1],
                        "cover-pos": [384, 128],
                    },
                    {
                        "output-coord": [0.5, -1],
                        "cover-pos": [384, 128],
                    },
                    {
                        "output-coord": [-0.5, 1],
                        "cover-pos": [256, 128],
                    },
                    {
                        "output-coord": [0.5, 1],
                        "cover-pos": [256, 128],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-1, -0.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [-1, 0.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [1, -0.5],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1, 0.5],
                        "cover-pos": [384, 0],
                    },
                ],
            },
        ],
    },
    "express-transport-belt": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,
    },
    "express-underground-belt": {
        "grid-size": 1,
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, 0.5],
                            "cover-pos": [128, 128],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, -0.5],
                            "cover-pos": [0, 128],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [-0.5, 0],
                            "cover-pos": [0, 0],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0.5, 0],
                            "cover-pos": [128, 0],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, -0.5],
                            "cover-pos": [384, 128],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, 0.5],
                            "cover-pos": [256, 128],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0.5, 0],
                            "cover-pos": [384, 0],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [-0.5, 0],
                            "cover-pos": [256, 0],
                        },
                    ],
                }
            },
        ],
    },
    "fast-inserter": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "fast-splitter": {
        "grid-size": [2, 1],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "belt-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-0.5, -1],
                        "cover-pos": [0, 128],
                    },
                    {
                        "output-coord": [0.5, -1],
                        "cover-pos": [0, 128],
                    },
                    {
                        "output-coord": [-0.5, 1],
                        "cover-pos": [128, 128],
                    },
                    {
                        "output-coord": [0.5, 1],
                        "cover-pos": [128, 128],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-1, -0.5],
                        "cover-pos": [0, 0],
                    },
                    {
                        "output-coord": [-1, 0.5],
                        "cover-pos": [0, 0],
                    },
                    {
                        "output-coord": [1, -0.5],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [1, 0.5],
                        "cover-pos": [128, 0],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-0.5, -1],
                        "cover-pos": [384, 128],
                    },
                    {
                        "output-coord": [0.5, -1],
                        "cover-pos": [384, 128],
                    },
                    {
                        "output-coord": [-0.5, 1],
                        "cover-pos": [256, 128],
                    },
                    {
                        "output-coord": [0.5, 1],
                        "cover-pos": [256, 128],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-1, -0.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [-1, 0.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [1, -0.5],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1, 0.5],
                        "cover-pos": [384, 0],
                    },
                ],
            },
        ],
    },
    "fast-transport-belt": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,
    },
    "fast-underground-belt": {
        "grid-size": 1,
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, 0.5],
                            "cover-pos": [128, 128],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, -0.5],
                            "cover-pos": [0, 128],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [-0.5, 0],
                            "cover-pos": [0, 0],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0.5, 0],
                            "cover-pos": [128, 0],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, -0.5],
                            "cover-pos": [384, 128],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, 0.5],
                            "cover-pos": [256, 128],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0.5, 0],
                            "cover-pos": [384, 0],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [-0.5, 0],
                            "cover-pos": [256, 0],
                        },
                    ],
                }
            },
        ],
    },
    "filter-inserter": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "flamethrower-turret": {
        "grid-size": [2, 3],
        "image-size": 320,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [-0.5, 1],
                    [0.5, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, 1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1.5, 1],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [167, 172],
                "shadow-image-pos": 11270,
                "shadow-offset": [-64, -66],
            },
            {
                "pipe-connectors": [
                    [-1, -0.5],
                    [-1, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1, 1.5],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [260, 133],
                "shadow-image-pos": 11437,
                "shadow-offset": [-68, -69],
            },
            {
                "pipe-connectors": [
                    [-0.5, -1],
                    [0.5, -1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, -1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1.5, -1],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [176, 156],
                "shadow-image-pos": 11697,
                "shadow-offset": [-64, -65],
            },
            {
                "pipe-connectors": [
                    [1, -0.5],
                    [1, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [1, 1.5],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [204, 136],
                "shadow-image-pos": 11873,
                "shadow-offset": [-71, -72],
            },
        ],
    },
    gate: {
        "grid-size": 1,
        "image-size": 192,
        "dir-count": 2,

        "shadow-image-pos": 12077,
    },
    "gun-turret": {
        "grid-size": 2,
        "image-size": 256,
        "dir-count": 4,

        "dir-versions": [
            {
                "shadow-size": [250, 124],
                "shadow-image-pos": 12461,
                "shadow-offset": [-86, -56],
            },
            {
                "shadow-size": [250, 124],
                "shadow-image-pos": 12711,
                "shadow-offset": [-86, -56],
            },
            {
                "shadow-size": [250, 124],
                "shadow-image-pos": 12961,
                "shadow-offset": [-86, -56],
            },
            {
                "shadow-size": [250, 124],
                "shadow-image-pos": 13211,
                "shadow-offset": [-86, -56],
            },
        ],
    },
    "heat-exchanger": {
        "grid-size": [3, 2],
        "image-size": 320,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [0, -0.5],
                    [1, 0.5],
                    [-1, 0.5],
                ],

                "heat-pipe-connectors": [
                    [0, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [2, 0.5],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-2, 0.5],
                        "cover-pos": [384, 0],
                    },
                ],

                "heat-pipe-outputs": [
                    {
                        "output-coord": [0, 1.5],
                        "cover-pos": [0, 0],
                    },
                ],

                "shadow-size": [274, 180],
                "shadow-image-pos": 5825,
                "shadow-offset": [-96, -80],
            },
            {
                "pipe-connectors": [
                    [-0.5, -1],
                    [0.5, 0],
                    [-0.5, 1],
                ],

                "heat-pipe-connectors": [
                    [-0.5, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [1.5, 0],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-0.5, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "heat-pipe-outputs": [
                    {
                        "output-coord": [-1.5, 0],
                        "cover-pos": [64, 0],
                    },
                ],

                "shadow-size": [229, 228],
                "shadow-image-pos": 6802,
                "shadow-offset": [-77, -112],
            },
            {
                "pipe-connectors": [
                    [-1, -0.5],
                    [0, 0.5],
                    [1, -0.5],
                ],

                "heat-pipe-connectors": [
                    [0, -0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, -0.5],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [0, 1.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [2, -0.5],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [311, 131],
                "shadow-image-pos": 6285,
                "shadow-offset": [-96, -40],
            },
            {
                "pipe-connectors": [
                    [0.5, -1],
                    [-0.5, 0],
                    [0.5, 1],
                ],

                "heat-pipe-connectors": [
                    [0.5, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [0.5, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "heat-pipe-outputs": [
                    {
                        "output-coord": [1.5, 0],
                        "cover-pos": [192, 0],
                    },
                ],

                "shadow-size": [206, 234],
                "shadow-image-pos": 6596,
                "shadow-offset": [-64, -112],
            },
        ],
    },
    "heat-pipe": {
        "grid-size": 1,
        "image-size": 64,

        "shadow-image-pos": 13461,
    },
    inserter: {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "iron-chest": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [110, 50],
        "shadow-image-pos": 14065,
        "shadow-offset": [-34, -12],
    },
    lab: {
        "grid-size": 3,
        "image-size": 256,
        "dir-count": 4,

        "shadow-size": [243, 136],
        "shadow-image-pos": 14175,
        "shadow-offset": [-94, -45],
    },
    "land-mine": {
        "grid-size": 1,
        "image-size": 64,
    },
    "laser-turret": {
        "grid-size": 2,
        "image-size": 256,
        "dir-count": 4,

        "dir-versions": [
            {
                "shadow-size": [239, 96],
                "shadow-image-pos": 14418,
                "shadow-offset": [-53, -42],
            },
            {
                "shadow-size": [239, 96],
                "shadow-image-pos": 14657,
                "shadow-offset": [-53, -42],
            },
            {
                "shadow-size": [239, 96],
                "shadow-image-pos": 14896,
                "shadow-offset": [-53, -42],
            },
            {
                "shadow-size": [238, 96],
                "shadow-image-pos": 15135,
                "shadow-offset": [-53, -42],
            },
        ],
    },
    "logistic-chest-active-provider": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [113, 47],
        "shadow-image-pos": 15373,
        "shadow-offset": [-31, -13],
    },
    "logistic-chest-buffer": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [113, 47],
        "shadow-image-pos": 15373,
        "shadow-offset": [-31, -13],
    },
    "logistic-chest-passive-provider": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [113, 47],
        "shadow-image-pos": 15373,
        "shadow-offset": [-31, -13],
    },
    "logistic-chest-requester": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [113, 47],
        "shadow-image-pos": 15373,
        "shadow-offset": [-31, -13],
    },
    "logistic-chest-storage": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [113, 47],
        "shadow-image-pos": 15373,
        "shadow-offset": [-31, -13],
    },
    "long-handed-inserter": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "medium-electric-pole": {
        "grid-size": 1,
        "image-size": [128, 320],
        "image-offset": [-64, -224],
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [16, -201],
                        "red-wire": [44, -182],
                        "green-wire": [-13, -187],
                    },
                },

                "shadow-size": [280, 64],
                "shadow-image-pos": 15486,
                "shadow-offset": [-26, -33],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [16, -199],
                        "red-wire": [28, -167],
                        "green-wire": [-7, -202],
                    },
                },

                "shadow-size": [280, 64],
                "shadow-image-pos": 15766,
                "shadow-offset": [-26, -33],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [13, -198],
                        "red-wire": [5, -168],
                        "green-wire": [13, -209],
                    },
                },

                "shadow-size": [280, 64],
                "shadow-image-pos": 16046,
                "shadow-offset": [-26, -33],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [16, -199],
                        "red-wire": [-10, -175],
                        "green-wire": [35, -202],
                    },
                },

                "shadow-size": [280, 64],
                "shadow-image-pos": 16326,
                "shadow-offset": [-26, -33],
            },
        ],
    },
    "nuclear-reactor": {
        "grid-size": 5,
        "image-size": 384,
        "image-pos": [0, 256],

        "heat-pipe-connectors": [
            [-2, -2],
            [0, -2],
            [2, -2],
            [2, 0],
            [2, 2],
            [0, 2],
            [-2, 2],
            [-2, 0],
        ],

        "heat-pipe-outputs": [
            {
                "output-coord": [-2, -3],
                "cover-offset": [-160, -160],
                "cover-pos": [0, 0],
            },
            {
                "output-coord": [0, -3],
                "cover-offset": [-32, -160],
                "cover-pos": [64, 0],
            },
            {
                "output-coord": [2, -3],
                "cover-offset": [96, -160],
                "cover-pos": [128, 0],
            },
            {
                "output-coord": [3, -2],
                "cover-offset": [96, -160],
                "cover-pos": [192, 0],
            },
            {
                "output-coord": [3, 0],
                "cover-offset": [96, -32],
                "cover-pos": [256, 0],
            },
            {
                "output-coord": [3, 2],
                "cover-offset": [96, 96],
                "cover-pos": [320, 0],
            },
            {
                "output-coord": [2, 3],
                "cover-offset": [96, 96],
                "cover-pos": [0, 64],
            },
            {
                "output-coord": [0, 3],
                "cover-offset": [-32, 96],
                "cover-pos": [64, 64],
            },
            {
                "output-coord": [-2, 3],
                "cover-offset": [-160, 96],
                "cover-pos": [128, 64],
            },
            {
                "output-coord": [-3, 2],
                "cover-offset": [-160, 96],
                "cover-pos": [192, 64],
            },
            {
                "output-coord": [-3, 0],
                "cover-offset": [-160, -32],
                "cover-pos": [256, 64],
            },
            {
                "output-coord": [-3, -2],
                "cover-offset": [-160, -160],
                "cover-pos": [320, 64],
            },
        ],

        "shadow-size": [525, 323],
        "shadow-image-pos": 16606,
        "shadow-offset": [-159, -162],
    },
    "offshore-pump": {
        "grid-size": [1, 2],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [0, -0.5],
                ],

                "circuit-connector-pos": 576,
                "circuit-connector-offset": [-58, -72],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-34, -32],
                        "green-wire": [-43, -23],
                    },
                },

                "shadow-size": [160, 158],
                "shadow-image-pos": 17131,
                "shadow-offset": [-49, -80],
            },
            {
                "pipe-connectors": [
                    [0.5, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [1.5, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [12, -21],

                "wire-connectors": {
                    "1": {
                        "red-wire": [62, 13],
                        "green-wire": [64, 27],
                    },
                },

                "shadow-size": [172, 65],
                "shadow-image-pos": 17291,
                "shadow-offset": [-60, -16],
            },
            {
                "pipe-connectors": [
                    [0, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 1.5],
                        "cover-pos": [256, 0],
                    },
                ],

                "circuit-connector-pos": 768,
                "circuit-connector-offset": [-63, -15],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-37, 26],
                        "green-wire": [-42, 37],
                    },
                },

                "shadow-size": [149, 133],
                "shadow-image-pos": 17463,
                "shadow-offset": [-48, -48],
            },
            {
                "pipe-connectors": [
                    [-0.5, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, 0],
                        "cover-pos": [384, 0],
                    },
                ],

                "circuit-connector-pos": 704,
                "circuit-connector-offset": [-77, -21],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-27, 13],
                        "green-wire": [-25, 27],
                    },
                },

                "shadow-size": [176, 65],
                "shadow-image-pos": 17612,
                "shadow-offset": [-64, -16],
            },
        ],
    },
    "oil-refinery": {
        "grid-size": 5,
        "image-size": 448,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [-2, -2],
                    [0, -2],
                    [2, -2],
                    [-1, 2],
                    [1, 2],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1, 3],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [1, 3],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [624, 420],
                "shadow-image-pos": 17788,
                "shadow-offset": [-173, -176],
            },
            {
                "pipe-connectors": [
                    [-2, -1],
                    [-2, 1],
                    [2, -2],
                    [2, 0],
                    [2, 2],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-3, -1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [-3, 1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [3, -2],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [3, 0],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [3, 2],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [596, 412],
                "shadow-image-pos": 18412,
                "shadow-offset": [-161, -149],
            },
            {
                "pipe-connectors": [
                    [-1, -2],
                    [1, -2],
                    [-2, 2],
                    [0, 2],
                    [2, 2],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, 3],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [0, 3],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [2, 3],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [518, 360],
                "shadow-image-pos": 19008,
                "shadow-offset": [-168, -176],
            },
            {
                "pipe-connectors": [
                    [-2, -2],
                    [-2, 0],
                    [-2, 2],
                    [2, -1],
                    [2, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-3, -2],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [-3, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [-3, 2],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [3, -1],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [3, 1],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [662, 426],
                "shadow-image-pos": 19526,
                "shadow-offset": [-160, -161],
            },
        ],
    },
    pipe: {
        "grid-size": 1,
        "image-size": 128,

        "shadow-image-pos": 20188,
    },
    "pipe-to-ground": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "shadow-image-pos": 20700,
            },
            {
                "pipe-outputs": [
                    {
                        "output-coord": [1, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-image-pos": 20828,
            },
            {
                "pipe-outputs": [
                    {
                        "output-coord": [0, 1],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-image-pos": 20956,
            },
            {
                "pipe-outputs": [
                    {
                        "output-coord": [-1, 0],
                        "cover-pos": [384, 0],
                    },
                ],

                "shadow-image-pos": 21084,
            },
        ],
    },
    "power-switch": {
        "grid-size": 2,
        "image-size": 192,

        "wire-connectors": {
            "1": {
                "red-wire": [-39, 56],
                "green-wire": [-39, 56],
            },
            "Cu0": {
                "yellow-wire": [-51, -62]
            },
            "Cu1": {
                "yellow-wire": [59, -59]
            },
        },

        "shadow-image-pos": 21212,
    },
    "programmable-speaker": {
        "grid-size": 1,
        "image-size": [128, 256],
        "image-offset": [-64, -224],

        "circuit-connector-pos": 704,
        "circuit-connector-offset": [-31, -46],

        "wire-connectors": {
            "1": {
                "red-wire": [20, -14],
                "green-wire": [21, 1],
            },
        },

        "shadow-size": [237, 50],
        "shadow-image-pos": 21596,
        "shadow-offset": [-12, -30],
    },
    pump: {
        "grid-size": [1, 2],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 1.5],
                        "cover-pos": [256, 0],
                    },
                ],

                "circuit-connector-pos": 768,
                "circuit-connector-offset": [-61, -47],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-35, -6],
                        "green-wire": [-40, 5],
                    },
                },

                "shadow-size": [70, 169],
                "shadow-image-pos": 23017,
                "shadow-offset": [-3, -80],
            },
            {
                "pipe-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1.5, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-63, -23],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-13, 11],
                        "green-wire": [-11, 25],
                    },
                },

                "shadow-size": [128, 69],
                "shadow-image-pos": 23087,
                "shadow-offset": [-64, -12],
            },
            {
                "pipe-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 1.5],
                        "cover-pos": [256, 0],
                    },
                ],

                "circuit-connector-pos": 768,
                "circuit-connector-offset": [-60, -47],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-34, -6],
                        "green-wire": [-39, 5],
                    },
                },

                "shadow-size": [83, 144],
                "shadow-image-pos": 23215,
                "shadow-offset": [-3, -80],
            },
            {
                "pipe-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1.5, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1.5, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-4, -21],

                "wire-connectors": {
                    "1": {
                        "red-wire": [46, 13],
                        "green-wire": [48, 27],
                    },
                },

                "shadow-size": [130, 56],
                "shadow-image-pos": 23298,
                "shadow-offset": [-65, -1],
            },
        ],
    },
    pumpjack: {
        "grid-size": 3,
        "image-size": 320,
        "dir-count": 4,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [1, -1],
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-25, -87],

                "wire-connectors": {
                    "1": {
                        "red-wire": [25, -53],
                        "green-wire": [27, -39],
                    },
                },

                "shadow-size": [296, 209],
                "shadow-image-pos": 21833,
                "shadow-offset": [-112, -115],
            },
            {
                "pipe-connectors": [
                    [1, -1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [2, -1],
                        "cover-pos": [128, 0],
                    },
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-25, -87],

                "wire-connectors": {
                    "1": {
                        "red-wire": [25, -53],
                        "green-wire": [27, -39],
                    },
                },

                "shadow-size": [296, 184],
                "shadow-image-pos": 22129,
                "shadow-offset": [-111, -76],
            },
            {
                "pipe-connectors": [
                    [-1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-1, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-25, -87],

                "wire-connectors": {
                    "1": {
                        "red-wire": [25, -53],
                        "green-wire": [27, -39],
                    },
                },

                "shadow-size": [296, 184],
                "shadow-image-pos": 22425,
                "shadow-offset": [-111, -81],
            },
            {
                "pipe-connectors": [
                    [-1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, 1],
                        "cover-pos": [384, 0],
                    },
                ],

                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-25, -87],

                "wire-connectors": {
                    "1": {
                        "red-wire": [25, -53],
                        "green-wire": [27, -39],
                    },
                },

                "shadow-size": [296, 176],
                "shadow-image-pos": 22721,
                "shadow-offset": [-111, -74],
            },
        ],
    },
    radar: {
        "grid-size": 3,
        "image-size": 288,

        "shadow-size": [305, 173],
        "shadow-image-pos": 23428,
        "shadow-offset": [-107, -58],
    },
    "rail-chain-signal": {
        "grid-size": 1,
        "image-size": 448,
        "dir-count": 8,

        "dir-versions": [
            {
                "circuit-connector-pos": 384,
                "circuit-connector-offset": [-35, 5],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-24, 27],
                        "green-wire": [-20, 13],
                    },
                },
            },
            {
                "circuit-connector-pos": 320,
                "circuit-connector-offset": [-59, 0],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-40, 12],
                        "green-wire": [-29, 4],
                    },
                },
            },
            {
                "circuit-connector-pos": 256,
                "circuit-connector-offset": [-74, -2],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-41, 6],
                        "green-wire": [-26, 6],
                    },
                },
            },
            {
                "circuit-connector-pos": 192,
                "circuit-connector-offset": [-20, -12],

                "wire-connectors": {
                    "1": {
                        "red-wire": [25, 2],
                        "green-wire": [36, 10],
                    },
                },
            },
            {
                "circuit-connector-pos": 128,
                "circuit-connector-offset": [-24, -15],

                "wire-connectors": {
                    "1": {
                        "red-wire": [25, 5],
                        "green-wire": [28, 20],
                    },
                },
            },
            {
                "circuit-connector-pos": 64,
                "circuit-connector-offset": [-34, -14],

                "wire-connectors": {
                    "1": {
                        "red-wire": [10, 20],
                        "green-wire": [-1, 28],
                    },
                },
            },
            {
                "circuit-connector-pos": 0,
                "circuit-connector-offset": [-47, -15],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-18, 27],
                        "green-wire": [-33, 27],
                    },
                },
            },
            {
                "circuit-connector-pos": 448,
                "circuit-connector-offset": [-15, -5],

                "wire-connectors": {
                    "1": {
                        "red-wire": [0, 29],
                        "green-wire": [-11, 21],
                    },
                },
            },
        ],
    },
    "rail-signal": {
        "grid-size": 1,
        "image-size": 192,
        "dir-count": 8,

        "dir-versions": [
            {
                "circuit-connector-pos": 256,
                "circuit-connector-offset": [-5, -44],

                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -36],
                        "green-wire": [43, -36],
                    },
                },
            },
            {
                "circuit-connector-pos": 192,
                "circuit-connector-offset": [6, -14],

                "wire-connectors": {
                    "1": {
                        "red-wire": [51, 0],
                        "green-wire": [62, 8],
                    },
                },
            },
            {
                "circuit-connector-pos": 128,
                "circuit-connector-offset": [-17, 13],

                "wire-connectors": {
                    "1": {
                        "red-wire": [32, 33],
                        "green-wire": [35, 48],
                    },
                },
            },
            {
                "circuit-connector-pos": 64,
                "circuit-connector-offset": [-43, 9],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-1, 44],
                        "green-wire": [-10, 50],
                    },
                },
            },
            {
                "circuit-connector-pos": 0,
                "circuit-connector-offset": [-56, -4],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-27, 38],
                        "green-wire": [-42, 38],
                    },
                },
            },
            {
                "circuit-connector-pos": 448,
                "circuit-connector-offset": [-62, -39],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-47, -5],
                        "green-wire": [-58, -13],
                    },
                },
            },
            {
                "circuit-connector-pos": 384,
                "circuit-connector-offset": [-45, -59],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-34, -37],
                        "green-wire": [-30, -51],
                    },
                },
            },
            {
                "circuit-connector-pos": 320,
                "circuit-connector-offset": [-16, -54],

                "wire-connectors": {
                    "1": {
                        "red-wire": [2, -42],
                        "green-wire": [14, -50],
                    },
                },
            },
        ],
    },
    roboport: {
        "grid-size": 4,
        "image-size": 320,

        "circuit-connector-pos": 704,
        "circuit-connector-offset": [6, 52],

        "wire-connectors": {
            "1": {
                "red-wire": [56, 86],
                "green-wire": [58, 100],
            },
        },

        "shadow-size": [294, 201],
        "shadow-image-pos": 23733,
        "shadow-offset": [-89, -61],
    },
    "rocket-silo": {
        "grid-size": 9,
        "image-size": 640,

        "shadow-image-pos": 24027,
    },
    "small-electric-pole": {
        "grid-size": 1,
        "image-size": [128, 256],
        "image-offset": [-64, -224],
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [0, -167],
                        "red-wire": [26, -164],
                        "green-wire": [-25, -164],
                    },
                },

                "shadow-size": [256, 52],
                "shadow-image-pos": 24667,
                "shadow-offset": [-26, -20],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [4, -165],
                        "red-wire": [24, -154],
                        "green-wire": [-11, -182],
                    },
                },

                "shadow-size": [256, 52],
                "shadow-image-pos": 24923,
                "shadow-offset": [-26, -20],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [6, -160],
                        "red-wire": [10, -144],
                        "green-wire": [11, -180],
                    },
                },

                "shadow-size": [256, 52],
                "shadow-image-pos": 25179,
                "shadow-offset": [-26, -20],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [3, -176],
                        "red-wire": [-18, -163],
                        "green-wire": [18, -191],
                    },
                },

                "shadow-size": [256, 52],
                "shadow-image-pos": 25435,
                "shadow-offset": [-26, -20],
            },
        ],
    },
    "small-lamp": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-22, -14],

        "wire-connectors": {
            "1": {
                "red-wire": [28, 20],
                "green-wire": [30, 34],
            },
        },

        "shadow-size": [76, 47],
        "shadow-image-pos": 25691,
        "shadow-offset": [-29, -13],
    },
    "solar-panel": {
        "grid-size": 3,
        "image-size": 256,

        "shadow-size": [219, 180],
        "shadow-image-pos": 25767,
        "shadow-offset": [-91, -77],
    },
    splitter: {
        "grid-size": [2, 1],
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                "belt-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-0.5, -1],
                        "cover-pos": [0, 128],
                    },
                    {
                        "output-coord": [0.5, -1],
                        "cover-pos": [0, 128],
                    },
                    {
                        "output-coord": [-0.5, 1],
                        "cover-pos": [128, 128],
                    },
                    {
                        "output-coord": [0.5, 1],
                        "cover-pos": [128, 128],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-1, -0.5],
                        "cover-pos": [0, 0],
                    },
                    {
                        "output-coord": [-1, 0.5],
                        "cover-pos": [0, 0],
                    },
                    {
                        "output-coord": [1, -0.5],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [1, 0.5],
                        "cover-pos": [128, 0],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [-0.5, 0],
                    [0.5, 0],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-0.5, -1],
                        "cover-pos": [384, 128],
                    },
                    {
                        "output-coord": [0.5, -1],
                        "cover-pos": [384, 128],
                    },
                    {
                        "output-coord": [-0.5, 1],
                        "cover-pos": [256, 128],
                    },
                    {
                        "output-coord": [0.5, 1],
                        "cover-pos": [256, 128],
                    },
                ],
            },
            {
                "belt-connectors": [
                    [0, -0.5],
                    [0, 0.5],
                ],

                "belt-outputs": [
                    {
                        "output-coord": [-1, -0.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [-1, 0.5],
                        "cover-pos": [256, 0],
                    },
                    {
                        "output-coord": [1, -0.5],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [1, 0.5],
                        "cover-pos": [384, 0],
                    },
                ],
            },
        ],
    },
    "stack-filter-inserter": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "stack-inserter": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [35, 8],
                        "green-wire": [27, 17],
                    },
                },

                "shadow-size": [85, 65],
                "shadow-image-pos": 13717,
                "shadow-offset": [-29, -17],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [-9, -21],
                        "green-wire": [-22, -17],
                    },
                },

                "shadow-size": [91, 52],
                "shadow-image-pos": 13802,
                "shadow-offset": [-36, -16],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [28, -15],
                        "green-wire": [35, -4],
                    },
                },

                "shadow-size": [84, 51],
                "shadow-image-pos": 13893,
                "shadow-offset": [-28, -9],
            },
            {
                "wire-connectors": {
                    "1": {
                        "red-wire": [18, -20],
                        "green-wire": [29, -15],
                    },
                },

                "shadow-size": [88, 43],
                "shadow-image-pos": 13977,
                "shadow-offset": [-34, -6],
            },
        ],
    },
    "steam-engine": {
        "grid-size": [3, 5],
        "image-size": 448,
        "dir-count": 2,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [0, -2],
                    [0, 2],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 3],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [327, 295],
                "shadow-image-pos": 25986,
                "shadow-offset": [-84, -135],
            },
            {
                "pipe-connectors": [
                    [-2, 0],
                    [2, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-3, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [3, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [489, 156],
                "shadow-image-pos": 26313,
                "shadow-offset": [-160, -32],
            },
        ],
    },
    "steam-turbine": {
        "grid-size": [3, 5],
        "image-size": 448,
        "dir-count": 2,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [0, -2],
                    [0, 2],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [0, 3],
                        "cover-pos": [256, 0],
                    },
                ],

                "shadow-size": [302, 344],
                "shadow-image-pos": 26802,
                "shadow-offset": [-72, -165],
            },
            {
                "pipe-connectors": [
                    [-2, 0],
                    [2, 0],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-3, 0],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [3, 0],
                        "cover-pos": [128, 0],
                    },
                ],

                "shadow-size": [435, 149],
                "shadow-image-pos": 27104,
                "shadow-offset": [-160, -39],
            },
        ],
    },
    "steel-chest": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [110, 46],
        "shadow-image-pos": 27539,
        "shadow-offset": [-30, -5],
    },
    "steel-furnace": {
        "grid-size": 2,
        "image-size": 192,

        "shadow-size": [277, 85],
        "shadow-image-pos": 27649,
        "shadow-offset": [-59, -19],
    },
    "stone-furnace": {
        "grid-size": 2,
        "image-size": 192,

        "shadow-size": [164, 74],
        "shadow-image-pos": 27926,
        "shadow-offset": [-52, -10],
    },
    "stone-wall": {
        "grid-size": 1,
        "image-size": 192,

        "circuit-connector-pos": 384,
        "circuit-connector-offset": [-31, -63],

        "wire-connectors": {
            "1": {
                "red-wire": [-20, -41],
                "green-wire": [-16, -54],
            },
        },

        "shadow-size": [192, 192],
        "shadow-image-pos": 31628,
        "shadow-offset": [-64, -64],
    },
    "storage-tank": {
        "grid-size": 3,
        "image-size": 256,
        "dir-count": 2,

        "dir-versions": [
            {
                "pipe-connectors": [
                    [-1, -1],
                    [1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, -1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [2, 1],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [1, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "circuit-connector-pos": 576,
                "circuit-connector-offset": [36, 7],

                "wire-connectors": {
                    "1": {
                        "red-wire": [85, 30],
                        "green-wire": [88, 45],
                    },
                },

                "shadow-size": [283, 233],
                "shadow-image-pos": 28090,
                "shadow-offset": [-78, -112],
            },
            {
                "pipe-connectors": [
                    [1, -1],
                    [-1, 1],
                ],

                "pipe-outputs": [
                    {
                        "output-coord": [-2, 1],
                        "cover-pos": [384, 0],
                    },
                    {
                        "output-coord": [-1, 2],
                        "cover-pos": [128, 0],
                    },
                    {
                        "output-coord": [-1, 2],
                        "cover-pos": [256, 0],
                    },
                ],

                "circuit-connector-pos": 832,
                "circuit-connector-offset": [-98, 9],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-58, 49],
                        "green-wire": [-56, 63],
                    },
                },

                "shadow-size": [283, 227],
                "shadow-image-pos": 28373,
                "shadow-offset": [-96, -112],
            },
        ],
    },
    "straight-rail": {
        "grid-size": 2,
        "image-size": 256,
        "dir-count": 8,

        "dir-versions": [
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[0, -2],
                                "rail-dir": 0,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-1, -5],
                                "rail-dir": 0,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[1, -5],
                                "rail-dir": 1,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [0, -1],
                        "rail-cover-dir": 0,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[0, 2],
                                "rail-dir": 0,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[1, 5],
                                "rail-dir": 4,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[-1, 5],
                                "rail-dir": 5,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [0, 1],
                        "rail-cover-dir": 4,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[0, -2],
                                "rail-dir": 5,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-3, -3],
                                "rail-dir": 3,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [0, -1],
                        "rail-cover-dir": 7,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[2, 0],
                                "rail-dir": 5,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[3, 3],
                                "rail-dir": 0,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [1, 0],
                        "rail-cover-dir": 3,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-2, 0],
                                "rail-dir": 2,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-5, 1],
                                "rail-dir": 6,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[-5, -1],
                                "rail-dir": 7,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-1, 0],
                        "rail-cover-dir": 6,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[2, 0],
                                "rail-dir": 2,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[5, -1],
                                "rail-dir": 2,
                                "rail-type": "curved-rail",
                            },
                            {
                                "rail-coord-offset":[5, 1],
                                "rail-dir": 3,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [1, 0],
                        "rail-cover-dir": 2,
                    },
                ],
            },
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[2, 0],
                                "rail-dir": 7,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[3, -3],
                                "rail-dir": 5,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [1, 0],
                        "rail-cover-dir": 1,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[0, 2],
                                "rail-dir": 7,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-3, 3],
                                "rail-dir": 2,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [0, 1],
                        "rail-cover-dir": 5,
                    },
                ],
            },
            {},
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-2, 0],
                                "rail-dir": 1,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-3, -3],
                                "rail-dir": 4,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-1, 0],
                        "rail-cover-dir": 7,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[0, 2],
                                "rail-dir": 1,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[3, 3],
                                "rail-dir": 7,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [0, 1],
                        "rail-cover-dir": 3,
                    },
                ],
            },
            {},
            {
                "end-points": [
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[0, -2],
                                "rail-dir": 3,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[3, -3],
                                "rail-dir": 6,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [0, -1],
                        "rail-cover-dir": 1,
                    },
                    {
                        "rail-path-vars": [
                            {
                                "rail-coord-offset":[-2, 0],
                                "rail-dir": 3,
                                "rail-type": "straight-rail",
                            },
                            {
                                "rail-coord-offset":[-3, 3],
                                "rail-dir": 1,
                                "rail-type": "curved-rail",
                            },
                        ],
                        "rail-cover-coord-offset": [-1, 0],
                        "rail-cover-dir": 5,
                    },
                ],
            },
        ],
    },
    substation: {
        "grid-size": 2,
        "image-size": [192, 384],
        "image-offset": [-96, -256],
        "dir-count": 4,

        "dir-versions": [
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [2, -169],
                        "red-wire": [45, -160],
                        "green-wire": [-41, -160],
                    },
                },

                "shadow-size": [370, 104],
                "shadow-image-pos": 28656,
                "shadow-offset": [-60, -33],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [-1, -168],
                        "red-wire": [-31, -182],
                        "green-wire": [30, -139],
                    },
                },

                "shadow-size": [370, 104],
                "shadow-image-pos": 29026,
                "shadow-offset": [-60, -33],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [-1, -168],
                        "red-wire": [0, -192],
                        "green-wire": [-1, -130],
                    },
                },

                "shadow-size": [370, 104],
                "shadow-image-pos": 29396,
                "shadow-offset": [-60, -33],
            },
            {
                "wire-connectors": {
                    "1": {
                        "yellow-wire": [-1, -169],
                        "red-wire": [31, -184],
                        "green-wire": [-31, -141],
                    },
                },

                "shadow-size": [370, 104],
                "shadow-image-pos": 29766,
                "shadow-offset": [-60, -33],
            },
        ],
    },
    "train-stop": {
        "grid-size": 2,
        "image-size": 512,
        "dir-count": 4,

        "dir-versions": [
            {
                "circuit-connector-pos": 1024,
                "circuit-connector-offset": [-22, -139],

                "wire-connectors": {
                    "1": {
                        "red-wire": [16, -124],
                        "green-wire": [23, -113],
                    },
                },

                "shadow-size": [434, 142],
                "shadow-image-pos": 30136,
                "shadow-offset": [-178, -44],
            },
            {
                "circuit-connector-pos": 896,
                "circuit-connector-offset": [-74, -143],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-24, -109],
                        "green-wire": [-22, -95],
                    },
                },

                "shadow-size": [339, 220],
                "shadow-image-pos": 30570,
                "shadow-offset": [-101, -176],
            },
            {
                "circuit-connector-pos": 768,
                "circuit-connector-offset": [-41, -208],

                "wire-connectors": {
                    "1": {
                        "red-wire": [-15, -167],
                        "green-wire": [-20, -156],
                    },
                },

                "shadow-size": [386, 146],
                "shadow-image-pos": 30909,
                "shadow-offset": [-64, -96],
            },
            {
                "circuit-connector-pos": 512,
                "circuit-connector-offset": [-10, -106],

                "wire-connectors": {
                    "1": {
                        "red-wire": [15, -96],
                        "green-wire": [2, -89],
                    },
                },

                "shadow-size": [333, 172],
                "shadow-image-pos": 31295,
                "shadow-offset": [-104, 30],
            },
        ],
    },
    "transport-belt": {
        "grid-size": 1,
        "image-size": 128,
        "dir-count": 4,
    },
    "underground-belt": {
        "grid-size": 1,
        "image-size": 192,
        "dir-count": 4,

        "dir-versions": [
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, 0.5],
                            "cover-pos": [128, 128],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, -0.5],
                            "cover-pos": [0, 128],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [-0.5, 0],
                            "cover-pos": [0, 0],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0.5, 0],
                            "cover-pos": [128, 0],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, -0.5],
                            "cover-pos": [384, 128],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [0, 0.5],
                            "cover-pos": [256, 128],
                        },
                    ],
                }
            },
            {
                input: {
                    "belt-outputs": [
                        {
                            "output-coord": [0.5, 0],
                            "cover-pos": [384, 0],
                        },
                    ],
                },
                output: {
                    "belt-outputs": [
                        {
                            "output-coord": [-0.5, 0],
                            "cover-pos": [256, 0],
                        },
                    ],
                }
            },
        ],
    },
    "wooden-chest": {
        "grid-size": 1,
        "image-size": 128,

        "circuit-connector-pos": 896,
        "circuit-connector-offset": [-25, -19],

        "wire-connectors": {
            "1": {
                "red-wire": [25, 15],
                "green-wire": [27, 29],
            },
        },

        "shadow-size": [104, 40],
        "shadow-image-pos": 32396,
        "shadow-offset": [-29, -7],
    },
    "stone-path": {
        "grid-size": 1,
        "image-size": 64,
    },
    concrete: {
        "grid-size": 1,
        "image-size": 64,
    },
    "hazard-concrete-left": {
        "grid-size": 1,
        "image-size": 64,
    },
    "hazard-concrete-right": {
        "grid-size": 1,
        "image-size": 64,
    },
    "refined-concrete": {
        "grid-size": 1,
        "image-size": 64,
    },
    "refined-hazard-concrete-left": {
        "grid-size": 1,
        "image-size": 64,
    },
    "refined-hazard-concrete-right": {
        "grid-size": 1,
        "image-size": 64,
    },

    "tile-mask": {
        "grid-size": 1,
        "image-size": 96,
    },
    "curb": {
        "grid-size": 1,
        "image-size": 64,
    },

    "combinator-display-size": [30, 22],
    "circuit-connector-size": [64, 64],
    "beacon-slot-size": [64, 64],

    "belt-circuit-connector-wires": [
        {
            "red-wire": [27, -45],
            "green-wire": [43, -34],
        },
        {
            "red-wire": [23, -42],
            "green-wire": [39, -32],
        },
        {
            "red-wire": [25, -55],
            "green-wire": [41, -45],
        },
        {
            "red-wire": [23, -36],
            "green-wire": [36, -24],
        },
        {
            "red-wire": [26, -43],
            "green-wire": [43, -33],
        },
    ],

    comparator: {
        none: [0, 0],
        "+": [30, 0],
        "-": [60, 0],
        "*": [90, 0],
        "/": [120, 0],
        "%": [150, 0],
        "^": [0, 22],
        "<<": [30, 22],
        ">>": [60, 22],
        AND: [90, 22],
        OR: [120, 22],
        XOR: [150, 22],
        ">": [0, 44],
        "<": [30, 44],
        "=": [60, 44],
        "???": [90, 44],
        "???": [120, 44],
        "???": [150, 44],
    },

    "beacon-slot": {
        none: {
            "top-slot": [0, 0],
            "bottom-slot": [192, 0],
        },
        "effectivity-module": {
            "top-slot": [0, 64],
            "bottom-slot": [192, 64],
        },
        "effectivity-module-2": {
            "top-slot": [64, 64],
            "bottom-slot": [256, 64],
        },
        "effectivity-module-3": {
            "top-slot": [128, 64],
            "bottom-slot": [320, 64],
        },
        "speed-module": {
            "top-slot": [0, 128],
            "bottom-slot": [192, 128],
        },
        "speed-module-2": {
            "top-slot": [64, 128],
            "bottom-slot": [256, 128],
        },
        "speed-module-3": {
            "top-slot": [128, 128],
            "bottom-slot": [320, 128],
        },
    },
};

export default referenceTable;
