export default {
    1: {
        'id': 1,
        'title': 'Work',
        'clicks': 10,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1,
        'starter': true,
    },
    2: {
        'id': 2,
        'title': 'Study',
        'clicks': 10,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1,
        'starter': true,
    },
    3: {
        'id': 3,
        'title': 'Take a walk',
        'clicks': 5,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1,
        'starter': true,
    },
    4: {
        'id': 4,
        'title': 'Pet a cat',
        'clicks': 2,
        'anxietyPerTick': 0,
        'anxietyRelief': 3,
        'happinessRelief': 2,
    },
    5: {
        'id': 5,
        'title': 'Get a cat',
        'clicks': 5,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 10,
        'unlocks': [4, 6],
        'uniqueLine': true,
        'starter': true,
    },
    6: {
        'id': 6,
        'title': 'Clean the litter box',
        'clicks': 10,
        'anxietyPerTick': 0.3,
        'anxietyRelief': 1,
        'happinessRelief': 1,
    },
    7: {
        'id': 7,
        'title': 'Fix the air conditioner',
        'clicks': 8,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 0,
        'happinessRelief': 4,
        'unique': false,
        'uniqueLine': true,
        'unlocks': [7],
        'starter': true,
    },
    8: {
        'id': 8,
        'title': 'Fix the sink',
        'clicks': 7,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': 0,
        'unique': false,
        'uniqueLine': true,
        'unlocks': [8],
        'starter': true,
    },
    9: {
        'id': 9,
        'title': 'Mop the floor',
        'clicks': 3,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': 0,
        'unique': false,
        'uniqueLine': true,
        'unlocks': [9],
        'starter': true,
    },
    10: {
        'id': 10,
        'title': 'Buy a retro computer',
        'clicks': 30,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 10,
        'unlocks': 0,
        'uniqueLine': true,
    },
    11: {
        'id': 11,
        'title': 'Buy a mini retro console',
        'clicks': 20,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': -5,
        'unlocks': 0,
        'unique': true,
        'starter': true,
    },
    12: {
        'id': 12,
        'title': 'Watch a video on how to cook',
        'clicks': 3,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 1,
        'unlocks': [13],
        'uniqueLine': true,
        'starter': true,
    },
    13: {
        'id': 13,
        'title': 'Try to cook the recipe from that video',
        'clicks': 12,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 0,
        'happinessRelief': 1,
        'unlocks': [12],
        'uniqueLine': true
    },
    14: {
        'id': 14,
        'title': 'Talk with Mr. Foreira',
        'clicks': 8,
        'anxietyPerTick': 0.5,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': [15],
        'unique': false,
        'uniqueLine': true,
        'starter': true,
    },
    15: {
        'id': 15,
        'title': 'Listen Mr. Foreira\'s complaints',
        'clicks': 4,
        'anxietyPerTick': 0.5,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': [16],
        'unique': false
    },
    16: {
        'id': 16,
        'title': 'Plan on how to kill Mr. Foreira',
        'clicks': 30,
        'anxietyPerTick': 0,
        'anxietyRelief': 2,
        'happinessRelief': 7,
        'unlocks': [17],
        'locks': [15, 14],
        'unique': true
    },
    17: {
        'id': 17,
        'title': 'Kill Mr. Foreira',
        'clicks': 60,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 2,
        'happinessRelief': 10,
        'unique': true
    },
    // 18: {
    //     'id': 18,
    //     'title': 'Start a fire on my neighbor\'s trashcan',
    //     'clicks': 3,
    //     'anxietyPerTick': 0.2,
    //     'anxietyRelief': 1,
    //     'happinessRelief': 4,
    //     'unique': false
    // },
    // 19: {
    //     'id': 19,
    //     'title': 'Ignore the voices',
    //     'clicks': 6,
    //     'anxietyPerTick': 0.1,
    //     'anxietyRelief': 0,
    //     'happinessRelief': 1,
    //     'unique': false
    // },
    // 20: {
    //     'title': 'Listen to the voices',
    //     'clicks': 4,
    //     'anxietyPerTick': 0,
    //     'anxietyRelief': 1,
    //     'happinessRelief': 1,
    //     'unique': false
    // },
    // 21: {
    //     'title': 'Look at the pointy knife',
    //     'clicks': 3,
    //     'anxietyPerTick': 0,
    //     'anxietyRelief': 0,
    //     'happinessRelief': 0,
    //     'unlocks': [22],
    //     'unique': false
    // },
    // 22: {
    //     'title': 'Print a photo of my neighbor',
    //     'clicks': 4,
    //     'anxietyPerTick': 0.1,
    //     'anxietyRelief': 0,
    //     'happinessRelief': 0,
    //     'unlocks': [23],
    //     'unique': true
    //     },
    // 23: {
    //     'title': 'Stab my neighbor\'s photo with the pointy knife',
    //     'clicks': 10,
    //     'anxietyPerTick': 0.1,
    //     'anxietyRelief': 2,
    //     'happinessRelief': 5,
    //     'unique': false
    // },
    24: {
        'id': 24,
        'title': 'Buy a teddy bear',
        'clicks': 7,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 2,
        'unlocks': [25],
        'unique': true,
        'starter': true,
    },
    25: {
        'id': 25,
        'title': 'Spend quality time with Teddy',
        'clicks': 12,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 5,
        'unlocks': [26],
        'unique': false
    },
    26: {
        'id': 26,
        'title': 'Listen to Teddy',
        'clicks': 5,
        'anxietyPerTick': 0.5,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': [27],
        'unique': true
    },
    27: {
        'id': 27,
        'title': 'Sacrifice my belongings to teddy',
        'clicks': 13,
        'anxietyPerTick': 0.9,
        'anxietyRelief': 0,
        'happinessRelief': 4,
        'unique': true
    },
    // 28: {
    //     'id': 28,
    //     'title': 'Be scared of death',
    //     'clicks': 8,
    //     'anxietyPerTick': 1,
    //     'anxietyRelief': 0,
    //     'happinessRelief': 0,
    //     'unique': false,
    //     'minAnxiety': 500
    // },

    // TUTORIAL TICKETS
    29: {
        'id': 29,
        'title': 'CLICK ME',
        'clicks': 1,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 10,
        'unique': false,
    },
    30: {
        'id': 30,
        'title': 'CLICK ME MORE',
        'clicks': 3,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 10,
        'unique': false,
    },
    31: {
        'id': 31,
        'title': 'Tickets stacking up make you anxious',
        'clicks': 1,
        'anxietyPerTick': 1,
        'anxietyRelief': 100,
        'happinessRelief': 10,
        'unique': false,
    },
    32: {
        'id': 32,
        'title': 'Anxiety makes you unhappy over time',
        'clicks': 1,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unique': false,
    },
    33: {
        'id': 33,
        'title': 'Finishing things makes you happy',
        'clicks': 1,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 50,
        'unique': false,
    },
    34: {
        'id': 34,
        'title': 'Just like in real life!',
        'clicks': 1,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unique': false,
    },
    35: {
        'id': 35,
        'title': 'Now the fun begins',
        'clicks': 1,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 10,
        'unique': false,
    },
    36: {
        'id': 36,
        'title': 'Start making your dream game',
        'clicks': 5,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 30,
        'unique': true,
        'unlocks': [37, 38, 39],
        'starter': true,
    },
    37: {
        'id': 37,
        'title': 'Learn a bit of programming',
        'clicks': 20,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 10,
        'unique': true,
        'unlocks': [40],

    },
    38: {
        'id': 38,
        'title': 'Learn how to make sprites',
        'clicks': 20,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 10,
        'unique': true,
    },
    39: {
        'id': 39,
        'title': 'Learn a bit of sound design',
        'clicks': 20,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 10,
        'unique': true,
    },
    40: {
        'id': 40,
        'title': 'Do Programming on your game',
        'clicks': 30,
        'anxietyPerTick': 0.3,
        'anxietyRelief': 0,
        'happinessRelief': 20,
        'unique': true,
        'unlocks': [41, 44],
    },
    41: {
        'id': 41,
        'title': 'Fix bug in your game',
        'clicks': 10,
        'anxietyPerTick': 0.4,
        'anxietyRelief': 10,
        'happinessRelief': 10,
        'unique': true,
        'unlocks': [42],
    },
    42: {
        'id': 42,
        'title': 'Fix another bug in your game',
        'clicks': 10,
        'anxietyPerTick': 0.6,
        'anxietyRelief': 10,
        'happinessRelief': 10,
        'unique': true,
        'unlocks': [43],
    },
    43: {
        'id': 43,
        'title': 'Fix yet another bug',
        'clicks': 20,
        'anxietyPerTick': 0.8,
        'anxietyRelief': 10,
        'happinessRelief': 10,
        'unique': true,
        'unlocks': [44],
    },
    44: {
        'id': 44,
        'title': 'Learn more programming and math',
        'clicks': 40,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 0,
        'happinessRelief': 20,
        'unique': true,
        'unlocks': [45],
    },
    45: {
        'id': 45,
        'title': 'Keep working on your game',
        'clicks': 40,
        'anxietyPerTick': 0.3,
        'anxietyRelief': 5,
        'happinessRelief': 5,
        'unique': false,
        'uniqueLine': true,
        'unlocks': [45],
        'unlocksWhen': {
            'number': 10,
            'unlocks': [46],
            'locksItself': true,
        }
    },
    46: {
        'id': 46,
        'title': 'Polish your game',
        'clicks': 30,
        'anxietyPerTick': 0.5,
        'anxietyRelief': 2,
        'happinessRelief': 3,
        'unique': false,
        'uniqueLine': true,
        'unlocks': [46],
        'unlocksWhen': {
            'number': 5,
            'unlocks': [46],
            'locksItself': true,
        }
    },
    47: {
        'id': 47,
        'title': 'PUBLISH YOUR GAME',
        'clicks': 100,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 200,
        'happinessRelief': 400,
        'unique': true,
    },
    48: {
        id: 48,
        title: 'Do taxwork',
        clicks: 10,
        anxietyPerTick: 0.1,
        anxietyRelief: 10,
        happinessRelief: 0,
        starter: true,
        unlocksWhen: {
            number: 2,
            unlocks: [49],
            locksItself: true,
        }
    },
    49: {
        id: 49,
        title: 'Do taxwork (hey these are easy)',
        clicks: 10,
        anxietyPerTick: 0.1,
        anxietyRelief: 10,
        happinessRelief: 0,
        unlocksWhen: {
            number: 3,
            unlocks: [50],
            locksItself: true,
        }
    },
    50: {
        id: 50,
        title: 'Do taxwork (wait what does "Unearned income" mean?)',
        clicks: 10,
        anxietyPerTick: 0.3,
        anxietyRelief: 10,
        happinessRelief: 0,
        unique: true,
        unlocks: [51]
    },
    51: {
        id: 51,
        title: 'Do taxwork (where\'s that f@$#ing receipt?!)',
        clicks: 20,
        anxietyPerTick: 0.3,
        anxietyRelief: 10,
        happinessRelief: 0,
        unlocksWhen: {
            number: 4,
            unlocks: [52],
            locksItself: true,
        }
    },
    52: {
        id: 52,
        title: 'Finish yearly taxes',
        clicks: 40,
        anxietyPerTick: 0.3,
        anxietyRelief: 10,
        happinessRelief: 0,
        unique: true,
        unlocks: [53]
    },
    53: {
        id: 53,
        title: 'OH GOD THE TAX DEADLINE IS TOMORROW',
        clicks: 10,
        anxietyPerTick: 0.7,
        anxietyRelief: 300,
        happinessRelief: 100,
        unique: true,
    },
    54: {
        id: 54,
        title: 'Watch a documentary on Japan',
        clicks: 10,
        anxietyPerTick: 0,
        anxietyRelief: 0,
        happinessRelief: 20,
        unique: true,
        unlocks: [55],
        starter: true,
    },
    55: {
        id: 55,
        title: 'Research budget for going to Japan',
        clicks: 13,
        anxietyPerTick: 0.1,
        anxietyRelief: 10,
        happinessRelief: 20,
        unique: true,
        unlocks: [56]
    },
    56: {
        id: 56,
        title: 'Buy tickets to Japan',
        clicks: 5,
        anxietyPerTick: 0.5,
        anxietyRelief: 30,
        happinessRelief: 50,
        unique: true,
        unlocks: [57]
    },
    57: {
        id: 57,
        title: 'Go on vacations to Japan!',
        clicks: 100,
        anxietyPerTick: 0.1,
        anxietyRelief: 500,
        unique: true,
        happinessRelief: 500,
    },
    58: {
        id: 58,
        title: 'Meet your friends',
        clicks: 10,
        anxietyPerTick: 0.1,
        anxietyRelief: 10,
        happinessRelief: 20,
        starter: true,
    },
    // 59: {
    //     id: 59,
    //     title: 'Look up COVID statistics',
    //     clicks: 3,
    //     anxietyPerTick: 0,
    //     anxietyRelief: 10,
    //     happinessRelief: 0,
    //     starter: true,
    // },
    60: {
        id: 60,
        title: 'Check twitter',
        clicks: 3,
        anxietyPerTick: 0,
        anxietyRelief: 20,
        happinessRelief: -5,
        starter: true,
    },
    61: {
        id: 61,
        title: 'Drink some vodka',
        clicks: 3,
        anxietyPerTick: 0,
        anxietyRelief: 50,
        happinessRelief: -10,
        starter: true,
    }


}
