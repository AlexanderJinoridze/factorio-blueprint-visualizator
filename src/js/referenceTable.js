var referenceTable = {
    "accumulator": {
        "grid-size": 2,
        "image-size": 4,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [38, -39],
        "red-wire-point": [56, -41],
        "green-wire-point": [58, -55]
    },
    "arithmetic-combinator": {
        "grid-size": [1, 2],
        "image-size": 3,
        "rotate-dirs": 4,
        "combinator-display-size": [30, 22],

        "rotate-version": {
            "0": {
                "combinator-display-coord": [1, 9],
                "red-wire-point": [
                    [-17, -31],
                    [-17, 42]
                ],
                "green-wire-point": [
                    [20, 42],
                    [21, -31]
                ]
            },
            "2": {
                "combinator-display-coord": [1, 21],
                "red-wire-point": [
                    [-48, 28],
                    [46, 23]
                ],
                "green-wire-point": [
                    [46, -4],
                    [-48, 2]
                ]
            },
            "4": {
                "combinator-display-coord": [1, 9],
                "red-wire-point": [
                    [20, -32],
                    [20, 41]
                ],
                "green-wire-point": [
                    [-18, 40],
                    [-17, -33]
                ]
            },
            "6": {
                "combinator-display-coord": [1, 21],
                "red-wire-point": [
                    [-44, -3],
                    [51, 2]
                ],
                "green-wire-point": [
                    [-44, 24],
                    [51, 29]
                ]
            }
        }
    },
    "artillery-turret": {
        "grid-size": 3,
        "image-size": 9,
        "rotate-dirs": 4
    },
    "assembling-machine-1": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 4
    },
    "assembling-machine-2": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 4
    },
    "assembling-machine-3": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 4
    },
    "beacon": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 1,

        "slot-down-size": [50, 66],
        "slot-down-coord": [39, 23],
        "slot-up-size": [46, 44],
        "slot-up-coord": [-31, -30]
    },
    "big-electric-pole": {
        "grid-size": 2,
        "image-size": [3, 5],
        "image-coord": [0, 96],
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "yellow-wire-point": [1, 249],
                "red-wire-point": [60, 213],
                "green-wire-point": [-56, 213]
            },
            "2": {
                "yellow-wire-point": [33, 238],
                "red-wire-point": [41, 186],
                "green-wire-point": [-41, 244]
            },
            "4": {
                "yellow-wire-point": [47, 212],
                "red-wire-point": [1, 171],
                "green-wire-point": [2, 251]
            },
            "6": {
                "yellow-wire-point": [32, 190],
                "red-wire-point": [-40, 184],
                "green-wire-point": [41, 141]
            }
        }
    },
    "boiler": {
        "grid-size": [3,2],
        "image-size": 5,
        "rotate-dirs": 4
    },
    "burner-inserter": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 4
    },
    "burner-mining-drill": {
        "grid-size": 2,
        "image-size": 3,
        "rotate-dirs": 4,

        "circuit-connector-type": [1, 2],
        "circuit-connector-coord": [-21, 13],
        "red-wire-point": [-11, 4],
        "green-wire-point": [-20, -9]
    },
    "centrifuge": {
        "grid-size": 3,
        "image-size": 5,
        "rotate-dirs": 4
    },
    "chemical-plant": {
        "grid-size": 3,
        "image-size": 6,
        "rotate-dirs": 4
    },
    "constant-combinator": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "red-wire-point": [-16, 32],
                "green-wire-point": [15, 32]
            },
            "2": {
                "red-wire-point": [32, 31],
                "green-wire-point": [32, 4]
            },
            "4": {
                "red-wire-point": [19, -15],
                "green-wire-point": [-12, -15]
            },
            "6": {
                "red-wire-point": [-30, -1],
                "green-wire-point": [-30, 26]
            }
        }
    },
    "curved-rail": {
        "image-size": 10,
        "rotate-dirs": 8,

        "rotate-version": {
            "0": {
                "grid-size": [4, 8]
            },
            "1": {
                "grid-size": [4, 8]
            },
            "2": {
                "grid-size": [8, 4]
            },
            "3": {
                "grid-size": [8, 4]
            },
            "4": {
                "grid-size": [4, 8]
            },
            "5": {
                "grid-size": [4, 8]
            },
            "6": {
                "grid-size": [8, 4]
            },
            "7": {
                "grid-size": [8, 4]
            }
        },

        "end-points": {
            "0": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [-3, -3],
                            "rail-dir": 1,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-4, -6],
                            "rail-dir": 4,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-2, -3],
                    "rail-cover-direction": 7
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [1, 5],
                            "rail-dir": 0,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [0, 8],
                            "rail-dir": 5,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [2, 8],
                            "rail-dir": 4,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [1, 4],
                    "rail-cover-direction": 4
                }
            ],
            "1": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [3, -3],
                            "rail-dir": 7,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [4, -6],
                            "rail-dir": 5,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [2, -3],
                    "rail-cover-direction": 1
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [-1, 5],
                            "rail-dir": 0,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [2, 8],
                            "rail-dir": 5,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [0, 8],
                            "rail-dir": 4,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-1, 4],
                    "rail-cover-direction": 4
                }
            ],
            "2": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [3, -3],
                            "rail-dir": 3,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [6, -4],
                            "rail-dir": 6,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [3, -2],
                    "rail-cover-direction": 1
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [-5, 1],
                            "rail-dir": 2,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-8, 0],
                            "rail-dir": 7,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [-8, 2],
                            "rail-dir": 6,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-4, 1],
                    "rail-cover-direction": 6
                }
            ],
            "3": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [-5, -1],
                            "rail-dir": 2,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-8, -2],
                            "rail-dir": 7,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [-8, 0],
                            "rail-dir": 6,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-4, -1],
                    "rail-cover-direction": 6
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [3, 3],
                            "rail-dir": 1,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [6, 4],
                            "rail-dir": 7,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [3, 2],
                    "rail-cover-direction": 3
                }
            ],
            "4": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [-1, -5],
                            "rail-dir": 0,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-1, -8],
                            "rail-dir": 0,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [0, -8],
                            "rail-dir": 1,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-1, -4],
                    "rail-cover-direction": 0
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [3, 3],
                            "rail-dir": 5,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [4, 6],
                            "rail-dir": 0,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [2, 3],
                    "rail-cover-direction": 3
                }
            ],
            "5": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [1, -5],
                            "rail-dir": 0,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [0, -8],
                            "rail-dir": 0,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [1, -8],
                            "rail-dir": 1,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [1, -4],
                    "rail-cover-direction": 0
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [-3, 3],
                            "rail-dir": 3,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-4, 6],
                            "rail-dir": 1,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-2, 3],
                    "rail-cover-direction": 5
                }
            ],
            "6": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [5, -1],
                            "rail-dir": 2,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [8 -2],
                            "rail-dir": 2,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [8, 0],
                            "rail-dir": 3,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [4, -1],
                    "rail-cover-direction": 2
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [-3, 3],
                            "rail-dir": 7,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-6, 4],
                            "rail-dir": 2,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-3, 2],
                    "rail-cover-direction": 5
                }
            ],
            "7": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [-3, -3],
                            "rail-dir": 5,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-6, -4],
                            "rail-dir": 3,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-3, -2],
                    "rail-cover-direction": 7
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [5, 1],
                            "rail-dir": 2,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [8, 0],
                            "rail-dir": 2,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [8, 2],
                            "rail-dir": 3,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [4, 1],
                    "rail-cover-direction": 2
                }
            ]
        }
    },
    "decider-combinator": {
        "grid-size": [1, 2],
        "image-size": 3,
        "rotate-dirs": 4,
        "combinator-display-size": [30, 22],

        "rotate-version": {
            "0": {
                "combinator-display-coord": [1, 9],
                "red-wire-point": [
                    [-16, -31],
                    [-17, 41]
                ],
                "green-wire-point": [
                    [19, -31],
                    [20, 41]
                ]
            },
            "2": {
                "combinator-display-coord": [0, 27],
                "red-wire-point": [
                    [-47, 35],
                    [45, 34]
                ],
                "green-wire-point": [
                    [45, 5],
                    [-46, 6]
                ]
            },
            "4": {
                "combinator-display-coord": [1, 8],
                "red-wire-point": [
                    [20, -38],
                    [20, 36]
                ],
                "green-wire-point": [
                    [-16, 36],
                    [-18, -38]
                ]
            },
            "6": {
                "combinator-display-coord": [1, 27],
                "red-wire-point": [
                    [-41, 5],
                    [49, 7]
                ],
                "green-wire-point": [
                    [-42, 31],
                    [49, 35]
                ]
            }
        }
    },
    "electric-furnace": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 1
    },
    "electric-mining-drill": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [4, 0],
                "circuit-connector-coord": [-87, 80],
                "red-wire-point": [-85, 104],
                "green-wire-point": [-71, 104]
            },
            "2": {
                "circuit-connector-type": [0, 2],
                "circuit-connector-coord": [69, -62],
                "red-wire-point": [86, -53],
                "green-wire-point": [88, -66]
            },
            "4": {
                "circuit-connector-type": [0, 0],
                "circuit-connector-coord": [-69, -50],
                "red-wire-point": [-72, -59],
                "green-wire-point": [-86, -59]
            },
            "6": {
                "circuit-connector-type": [0, 6],
                "circuit-connector-coord": [-67, -76],
                "red-wire-point": [-89, -67],
                "green-wire-point": [-86, -53]
            }
        }
    },
    "express-splitter": {
        "grid-size": [2,1],
        "image-size": 3,
        "rotate-dirs": 4
    },
    "express-transport-belt": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "express-underground-belt": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 4
    },
    "fast-inserter": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "fast-splitter": {
        "grid-size": [2,1],
        "image-size": 3,
        "rotate-dirs": 4
    },
    "fast-transport-belt": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "fast-underground-belt": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 4
    },
    "filter-inserter": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "flamethrower-turret": {
        "grid-size": [2,3],
        "image-size": 5,
        "rotate-dirs": 4
    },
    "gate": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 2
    },
    "gun-turret": {
        "grid-size": 2,
        "image-size": 4,
        "rotate-dirs": 4
    },
    "heat-exchanger": {
        "grid-size": [3,2],
        "image-size": 5,
        "rotate-dirs": 4
    },
    "heat-pipe": {
        "grid-size": 1,
        "image-size": 1,
        "rotate-dirs": 2
    },
    "inserter": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "iron-chest": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "lab": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 4
    },
    "land-mine": {
        "grid-size": 1,
        "image-size": 1,
        "rotate-dirs": 1
    },
    "laser-turret": {
        "grid-size": 2,
        "image-size": 4,
        "rotate-dirs": 4
    },
    "logistic-chest-active-provider": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "logistic-chest-buffer": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "logistic-chest-passive-provider": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "logistic-chest-requester": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "logistic-chest-storage": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "long-handed-inserter": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 4
    },
    "medium-electric-pole": {
        "grid-size": 1,
        "image-size": [2, 5],
        "image-coord": [0, 64],
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "yellow-wire-point": [16, 201],
                "red-wire-point": [44, 182],
                "green-wire-point": [-13, 187]
            },
            "2": {
                "yellow-wire-point": [16, 199],
                "red-wire-point": [28, 167],
                "green-wire-point": [-7, 202]
            },
            "4": {
                "yellow-wire-point": [13, 198],
                "red-wire-point": [5, 168],
                "green-wire-point": [13, 209]
            },
            "6": {
                "yellow-wire-point": [16, 199],
                "red-wire-point": [-10, 175],
                "green-wire-point": [35, 202]
            }
        }
    },
    "nuclear-reactor": {
        "grid-size": 5,
        "image-size": 6,
        "rotate-dirs": 1
    },
    "offshore-pump": {
        "grid-size": [1,2],
        "image-size": 3,
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [0, 2],
                "circuit-connector-coord": [-26, 40],
                "red-wire-point": [-34, 32],
                "green-wire-point": [-43, 23]
            },
            "2": {
                "circuit-connector-type": [2, 3],
                "circuit-connector-coord": [44, -11],
                "red-wire-point": [62, -13],
                "green-wire-point": [64, -27]
            },
            "4": {
                "circuit-connector-type": [0, 3],
                "circuit-connector-coord": [-31, -17],
                "red-wire-point": [-37, -26],
                "green-wire-point": [-42, -37]
            },
            "6": {
                "circuit-connector-type": [2, 2],
                "circuit-connector-coord": [-45, -11],
                "red-wire-point": [-27, -13],
                "green-wire-point": [-25, -27]
            }
        }
    },
    "oil-refinery": {
        "grid-size": 5,
        "image-size": 7,
        "rotate-dirs": 4
    },
    "pipe": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 2
    },
    "pipe-to-ground": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "power-switch": {
        "grid-size": 2,
        "image-size": 3,
        "rotate-dirs": 1,

        "yellow-wire-point": [
            [-51, 62],
            [59, 59]
        ],
        "red-wire-point": [-39, -56],
        "green-wire-point": [-39, -56]
    },
    "programmable-speaker": {
        "grid-size": 1,
        "image-size": [2, 4],
        "image-coord": [0, 96],
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 2],
        "circuit-connector-coord": [1, 14],
        "red-wire-point": [20, 14],
        "green-wire-point": [21, -1]
    },
    "pump": {
        "grid-size": [1,2],
        "image-size": 3,
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [0, 3],
                "circuit-connector-coord": [-29, 15],
                "red-wire-point": [-35, 6],
                "green-wire-point": [-40, -5]
            },
            "2": {
                "circuit-connector-type": [2, 3],
                "circuit-connector-coord": [-31, -9],
                "red-wire-point": [-13, -11],
                "green-wire-point": [-11, -25]
            },
            "4": {
                "circuit-connector-type": [0, 3],
                "circuit-connector-coord": [-28, 15],
                "red-wire-point": [-37, -26],
                "green-wire-point": [-34, 6]
            },
            "6": {
                "circuit-connector-type": [2, 3],
                "circuit-connector-coord": [28, -11],
                "red-wire-point": [46, -13],
                "green-wire-point": [48, -27]
            }
        }
    },
    "pumpjack": {
        "grid-size": 3,
        "image-size": 5,
        "rotate-dirs": 4,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, 55],
        "red-wire-point": [25, 53],
        "green-wire-point": [27, 39]
    },
    "radar": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 1
    },
    "rail-chain-signal": {
        "grid-size": 1,
        "image-size": 7,
        "rotate-dirs": 8,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [6, 0],
                "circuit-connector-coord": [-3, -27],
                "red-wire-point": [-24, -27],
                "green-wire-point": [-20, -13]
            },
            "1": {
                "circuit-connector-type": [5, 0],
                "circuit-connector-coord": [-27, -32],
                "red-wire-point": [-40, -12],
                "green-wire-point": [-29, -4]
            },
            "2": {
                "circuit-connector-type": [4, 0],
                "circuit-connector-coord": [-42, -30],
                "red-wire-point": [-41, -6],
                "green-wire-point": [-26, -6]
            },
            "3": {
                "circuit-connector-type": [3, 0],
                "circuit-connector-coord": [12, -20],
                "red-wire-point": [25, -2],
                "green-wire-point": [36, -10]
            },
            "4": {
                "circuit-connector-type": [2, 0],
                "circuit-connector-coord": [8, -17],
                "red-wire-point": [25, -5],
                "green-wire-point": [28, -20]
            },
            "5": {
                "circuit-connector-type": [1, 0],
                "circuit-connector-coord": [-2, -18],
                "red-wire-point": [10, -20],
                "green-wire-point": [-1, -28]
            },
            "6": {
                "circuit-connector-type": [0, 0],
                "circuit-connector-coord": [-15, -17],
                "red-wire-point": [-18, -27],
                "green-wire-point": [-33, -27]
            },
            "7": {
                "circuit-connector-type": [7, 0],
                "circuit-connector-coord": [17, -27],
                "red-wire-point": [-17, -29],
                "green-wire-point": [-28, -21]
            }
        }
    },
    "rail-signal": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 8,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [4, 0],
                "circuit-connector-coord": [27, 12],
                "red-wire-point": [28, 36],
                "green-wire-point": [43, 36]
            },
            "1": {
                "circuit-connector-type": [3, 0],
                "circuit-connector-coord": [38, -18],
                "red-wire-point": [51, 0],
                "green-wire-point": [62, -8]
            },
            "2": {
                "circuit-connector-type": [2, 0],
                "circuit-connector-coord": [15, -45],
                "red-wire-point": [32, -33],
                "green-wire-point": [35, -48]
            },
            "3": {
                "circuit-connector-type": [1, 0],
                "circuit-connector-coord": [-11, -41],
                "red-wire-point": [-1, -44],
                "green-wire-point": [-10, -50]
            },
            "4": {
                "circuit-connector-type": [0, 0],
                "circuit-connector-coord": [-24, -28],
                "red-wire-point": [-27, -38],
                "green-wire-point": [-42, -38]
            },
            "5": {
                "circuit-connector-type": [7, 0],
                "circuit-connector-coord": [-30, 7],
                "red-wire-point": [-47, 5],
                "green-wire-point": [-58, 13]
            },
            "6": {
                "circuit-connector-type": [6, 0],
                "circuit-connector-coord": [-13, 27],
                "red-wire-point": [-34, 37],
                "green-wire-point": [-30, 51]
            },
            "7": {
                "circuit-connector-type": [5, 0],
                "circuit-connector-coord": [16, 22],
                "red-wire-point": [2, 42],
                "green-wire-point": [14, 50]
            }
        }
    },
    "roboport": {
        "grid-size": 4,
        "image-size": 5,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [38, -84],
        "red-wire-point": [56, -86],
        "green-wire-point": [58, -100]
    },
    "rocket-silo": {
        "grid-size": 9,
        "image-size": 10,
        "rotate-dirs": 1
    },
    "small-electric-pole": {
        "grid-size": 1,
        "image-size": [2,4],
        "image-coord": [0, 96],
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "yellow-wire-point": [0, 167],
                "red-wire-point": [26, 164],
                "green-wire-point": [-25, 164]
            },
            "2": {
                "yellow-wire-point": [4, 165],
                "red-wire-point": [24, 154],
                "green-wire-point": [-11, 182]
            },
            "4": {
                "yellow-wire-point": [6, 160],
                "red-wire-point": [10, 144],
                "green-wire-point": [11, 180]
            },
            "6": {
                "yellow-wire-point": [3, 176],
                "red-wire-point": [-18, 163],
                "green-wire-point": [18, 191]
            }
        }
    },
    "small-lamp": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [10, -18],
        "red-wire-point": [28, -20],
        "green-wire-point": [30, -34]
    },
    "solar-panel": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 1
    },
    "splitter": {
        "grid-size": [2,1],
        "image-size": 3,
        "rotate-dirs": 4
    },
    "stack-filter-inserter": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "stack-inserter": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "steam-engine": {
        "grid-size": [3, 5],
        "image-size": 7,
        "rotate-dirs": 2
    },
    "steam-turbine": {
        "grid-size": [3, 5],
        "image-size": 7,
        "rotate-dirs": 2
    },
    "steel-chest": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "steel-furnace": {
        "grid-size": 2,
        "image-size": 3,
        "rotate-dirs": 1
    },
    "stone-furnace": {
        "grid-size": 2,
        "image-size": 3,
        "rotate-dirs": 1
    },
    "stone-wall": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4,

        "circuit-connector-type": [6, 0],
        "circuit-connector-coord": [1, 31],
        "red-wire-point": [-20, 41],
        "green-wire-point": [-16, 54]
    },
    "storage-tank": {
        "grid-size": 3,
        "image-size": 4,
        "rotate-dirs": 2,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [0, 2],
                "circuit-connector-coord": [68, -39],
                "red-wire-point": [85, -30],
                "green-wire-point": [88, -45]
            },
            "2": {
                "circuit-connector-type": [1, 3],
                "circuit-connector-coord": [-66, -41],
                "red-wire-point": [-58, -49],
                "green-wire-point": [-56, -63]
            }
        }
    },
    "straight-rail": {
        "grid-size": 2,
        "image-size": 4,
        "rotate-dirs": 8,

        "end-points": {
            "0": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [0, -2],
                            "rail-dir": 0,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-1, -5],
                            "rail-dir": 0,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [1, -5],
                            "rail-dir": 1,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [0, -1],
                    "rail-cover-direction": 0
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [0, 2],
                            "rail-dir": 0,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [1, 5],
                            "rail-dir": 4,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [-1, 5],
                            "rail-dir": 5,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [0, 1],
                    "rail-cover-direction": 4
                }
            ],
            "1": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [0, -2],
                            "rail-dir": 5,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-3, -3],
                            "rail-dir": 3,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [0, -1],
                    "rail-cover-direction": 7
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [2, 0],
                            "rail-dir": 5,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [3, 3],
                            "rail-dir": 0,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [1, 0],
                    "rail-cover-direction": 3
                }
            ],
            "2": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [-2, 0],
                            "rail-dir": 2,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-5, 1],
                            "rail-dir": 6,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [-5, -1],
                            "rail-dir": 7,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-1, 0],
                    "rail-cover-direction": 6
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [2, 0],
                            "rail-dir": 2,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [5, -1],
                            "rail-dir": 2,
                            "rail-type": "curved-rail"
                        },
                        {
                            "coords": [5, 1],
                            "rail-dir": 3,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [1, 0],
                    "rail-cover-direction": 2
                }
            ],
            "3": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [2, 0],
                            "rail-dir": 7,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [3, -3],
                            "rail-dir": 5,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [1, 0],
                    "rail-cover-direction": 1
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [0, 2],
                            "rail-dir": 7,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-3, 3],
                            "rail-dir": 2,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [0, 1],
                    "rail-cover-direction": 5
                }
            ],
            "5": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [-2, 0],
                            "rail-dir": 1,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-3, -3],
                            "rail-dir": 4,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-1, 0],
                    "rail-cover-direction": 7
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [0, 2],
                            "rail-dir": 1,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [3, 3],
                            "rail-dir": 7,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [0, 1],
                    "rail-cover-direction": 3
                }
            ],
            "7": [
                {
                    "rail-path-vars": [
                        {
                            "coords": [0, -2],
                            "rail-dir": 3,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [3, -3],
                            "rail-dir": 6,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [0, -1],
                    "rail-cover-direction": 1
                },
                {
                    "rail-path-vars": [
                        {
                            "coords": [-2, 0],
                            "rail-dir": 3,
                            "rail-type": "straight-rail"
                        },
                        {
                            "coords": [-3, 3],
                            "rail-dir": 1,
                            "rail-type": "curved-rail"
                        }
                    ],
                    "rail-cover-coord": [-1, 0],
                    "rail-cover-direction": 5
                }
            ]
        }
    },
    "substation": {
        "grid-size": 2,
        "image-size": [3, 6],
        "image-coord": [0, 64],
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "yellow-wire-point": [2, 169],
                "red-wire-point": [45, 160],
                "green-wire-point": [-41, 160]
            },
            "2": {
                "yellow-wire-point": [-1, 168],
                "red-wire-point": [-31, 182],
                "green-wire-point": [30, 139]
            },
            "4": {
                "yellow-wire-point": [-1, 168],
                "red-wire-point": [0, 192],
                "green-wire-point": [-1, 130]
            },
            "6": {
                "yellow-wire-point": [-1, 169],
                "red-wire-point": [31, 184],
                "green-wire-point": [-31, 141]
            }
        }
    },
    "train-stop": {
        "grid-size": 2,
        "image-size": 8,
        "rotate-dirs": 4,

        "rotate-version": {
            "0": {
                "circuit-connector-type": [4, 3],
                "circuit-connector-coord": [10, 107],
                "red-wire-point": [16, 124],
                "green-wire-point": [23, 113]
            },
            "2": {
                "circuit-connector-type": [2, 3],
                "circuit-connector-coord": [-42, 111],
                "red-wire-point": [-24, 109],
                "green-wire-point": [-22, 95]
            },
            "4": {
                "circuit-connector-type": [0, 3],
                "circuit-connector-coord": [-9, 176],
                "red-wire-point": [-15, 167],
                "green-wire-point": [-20, 156]
            },
            "6": {
                "circuit-connector-type": [5, 1],
                "circuit-connector-coord": [22, 74],
                "red-wire-point": [15, 96],
                "green-wire-point": [2, 89]
            }
        }
    },
    "transport-belt": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 4
    },
    "underground-belt": {
        "grid-size": 1,
        "image-size": 3,
        "rotate-dirs": 4
    },
    "wooden-chest": {
        "grid-size": 1,
        "image-size": 2,
        "rotate-dirs": 1,

        "circuit-connector-type": [2, 3],
        "circuit-connector-coord": [7, -13],
        "red-wire-point": [25, -15],
        "green-wire-point": [27, -29]
    },
    "stone-path": {
        "grid-size": 1,
        "image-size": [1, 2]
    },
    "concrete": {
        "grid-size": 1,
        "image-size": 1
    },
    "hazard-concrete-left": {
        "grid-size": 1,
        "image-size": 1
    },
    "hazard-concrete-right": {
        "grid-size": 1,
        "image-size": 1
    },
    "refined-concrete": {
        "grid-size": 1,
        "image-size": 1
    },
    "refined-hazard-concrete-left": {
        "grid-size": 1,
        "image-size": 1
    },
    "refined-hazard-concrete-right": {
        "grid-size": 1,
        "image-size": 1
    }
}


export default referenceTable;