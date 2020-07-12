export default {
    1: {
        'id': 1,
        'title': 'work',
        'clicks': 10,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1
    },
    2: {
        'id': 2,
        'title': 'study',
        'clicks': 10,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1
    },
    3: {
        'id': 3,
        'title': 'take a walk',
        'clicks': 5,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1
    },
    4: {
        'id': 4,
        'title': 'pet a cat',
        'clicks': 2,
        'anxietyPerTick': 0,
        'anxietyRelief': 3,
        'happinessRelief': 2
    },
    5: {
        'id': 5,
        'title': 'get a cat',
        'clicks': 5,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 10,
        'unlocks': [4, 6],
        'unique': true
    },
    6: {
        'id': 6,
        'title': 'clean the litter box',
        'clicks': 10,
        'anxietyPerTick': 0.3,
        'anxietyRelief': 1,
        'happinessRelief': 1
    },
    7: {
        'id': 7,
        'title': 'Fix the air conditioner',
        'clicks': 8,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 0,
        'happinessRelief': 4,
        'unique': false
    },
    8: {
        'id': 8,
        'title': 'Fix the sink',
        'clicks': 7,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': 0,
        'unique': false
    },
    9: {
        'id': 9,
        'title': 'Mop the floor',
        'clicks': 3,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': 0,
        'unique': false
    },
    10: {
        'id': 10,
        'title': 'Buy a retro computer',
        'clicks': 30,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 10,
        'unlocks': 0,
        'unique': false
    },
    11: {
        'id': 11,
        'title': 'Buy a mini retro console',
        'clicks': 20,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': -5,
        'unlocks': 0,
        'unique': false
    },
    12: {
        'id': 12,
        'title': 'Watch a video on how to cook',
        'clicks': 3,
        'anxietyPerTick': 0,
        'anxietyRelief': 0,
        'happinessRelief': 1,
        'unlocks': [13],
        'unique': false
    },
    13: {
        'id': 13,
        'title': 'Try to cook the recipe from that video',
        'clicks': 12,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 0,
        'happinessRelief': 1,
        'unlocks': 0,
        'unique': true
    },
    14: {
        'id': 14,
        'title': 'Talk with Mr. Foreira',
        'clicks': 8,
        'anxietyPerTick': 0.5,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': 0,
        'unique': false
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
        'unique': true
    },
    17: {
        'id': 17,
        'title': 'Kill Mr. Foreira',
        'clicks': 60,
        'anxietyPerTick': 0.2,
        'anxietyRelief': 2,
        'happinessRelief': 10,
        'unlocks': 0,
        'unique': true
    },
    // 18: {
    //     'id': 18,
    //     'title': 'Start a fire on my neighbor\'s trashcan',
    //     'clicks': 3,
    //     'anxietyPerTick': 0.2,
    //     'anxietyRelief': 1,
    //     'happinessRelief': 4,
    //     'unlocks': 0,
    //     'unique': false
    // },
    // 19: {
    //     'id': 19,
    //     'title': 'Ignore the voices',
    //     'clicks': 6,
    //     'anxietyPerTick': 0.1,
    //     'anxietyRelief': 0,
    //     'happinessRelief': 1,
    //     'unlocks': 0,
    //     'unique': false
    // },
    // 20: {
    //     'title': 'Listen to the voices',
    //     'clicks': 4,
    //     'anxietyPerTick': 0,
    //     'anxietyRelief': 1,
    //     'happinessRelief': 1,
    //     'unlocks': 0,
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
    //     'unlocks': 0,
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
        'unique': true
    },
    25: {
        'id': 25,
        'title': 'Spend quality time with teddy',
        'clicks': 12,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 5,
        'unlocks': 0,
        'unique': false
    },
    26: {
        'id': 26,
        'title': 'Listen to teddy',
        'clicks': 5,
        'anxietyPerTick': 0.5,
        'anxietyRelief': 0,
        'happinessRelief': 0,
        'unlocks': 0,
        'unique': true
    },
    27: {
        'id': 27,
        'title': 'Sacrifice my belongings to teddy',
        'clicks': 13,
        'anxietyPerTick': 0.9,
        'anxietyRelief': 0,
        'happinessRelief': 4,
        'unlocks': 0,
        'unique': true
    },
    // 28: {
    //     'id': 28,
    //     'title': 'Be scared of death',
    //     'clicks': 8,
    //     'anxietyPerTick': 1,
    //     'anxietyRelief': 0,
    //     'happinessRelief': 0,
    //     'unlocks': 0,
    //     'unique': false,
    //     'minAnxiety': 500
    // },
}