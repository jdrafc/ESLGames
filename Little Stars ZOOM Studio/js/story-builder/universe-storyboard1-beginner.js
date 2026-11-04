/* ==========================================================================
   STORY BUILDER CARTRIDGE: STORYBOARD 1 (BEGINNER)
   Storyboard 1 — 3 Distinct Settings & 4 Character Archetypes (6 Props Each)
   Heroes: 🐶 Max (Puppy), 👦 Leo (Boy), 👧 Eve (Girl), 🐱 Cleo (Kitten)
   ========================================================================== */

const CHARACTER_PROPS = {
    max: [
        { id: 'ball', name: 'Red Bouncing Ball', icon: '🔴', color: '#ef4444', desc: "The bright red ball to chase and recover across the grass" },
        { id: 'bone', name: 'Delicious Big Bone', icon: '🦴', color: '#e2e8f0', desc: "A special reward treat for a clever hero" },
        { id: 'frisbee', name: 'Flying Frisbee', icon: '🥏', color: '#f59e0b', desc: "A bright spinning flying disc for thrilling park throws and catches" },
        { id: 'duck', name: 'Squeaky Rubber Duck', icon: '🦆', color: '#facc15', desc: "A cheerful yellow squeaky duck toy that quacks when bitten" },
        { id: 'rope', name: 'Chewy Tug Rope', icon: '🪢', color: '#38bdf8', desc: "A thick braided knot rope made for fun tug-of-war games" },
        { id: 'biscuit', name: 'Golden Dog Biscuit', icon: '🍪', color: '#d97706', desc: "A crunchy golden dog biscuit baked into a bone shape" }
    ],
    leo: [
        { id: 'kite', name: 'Colorful Sky Kite', icon: '🪁', color: '#ec4899', desc: "A soaring diamond kite with rainbow fluttering ribbon tails" },
        { id: 'soccer', name: 'Classic Soccer Ball', icon: '⚽', color: '#f8fafc', desc: "A black-and-white patterned soccer ball ready to kick and score" },
        { id: 'glider', name: 'Toy Glider Plane', icon: '✈️', color: '#38bdf8', desc: "A sleek balsa wood glider airplane that swoops through the air" },
        { id: 'yoyo', name: 'High-Bounce Yo-Yo', icon: '🪀', color: '#10b981', desc: "A fast-spinning trick yo-yo on a winding cotton string" },
        { id: 'magnifier', name: 'Junior Magnifier', icon: '🔍', color: '#f59e0b', desc: "A brass nature explorer magnifying glass for inspecting leaves and bugs" },
        { id: 'canteen', name: 'Adventure Canteen', icon: '💧', color: '#0284c7', desc: "A sturdy steel canteen bottle filled with cold refreshing water" }
    ],
    eve: [
        { id: 'bubbles', name: 'Rainbow Bubble Wand', icon: '🫧', color: '#38bdf8', desc: "A magical bubble wand blowing iridescent, floating soap bubbles" },
        { id: 'scooter', name: 'Speedy Kick Scooter', icon: '🛴', color: '#ec4899', desc: "A sleek pastel scooter with fast-spinning wheels for park trails" },
        { id: 'sketchbook', name: 'Nature Art Sketchbook', icon: '🎨', color: '#f59e0b', desc: "A spiral sketchbook and bright crayons for drawing nature" },
        { id: 'camera', name: 'Instant Adventure Camera', icon: '📷', color: '#10b981', desc: "A pastel point-and-shoot camera for capturing instant wildlife photos" },
        { id: 'teddy', name: 'Cuddly Pocket Teddy', icon: '🧸', color: '#d97706', desc: "A soft, cheerful teddy bear companion on outdoor explorations" },
        { id: 'flowers', name: 'Daisy Flower Basket', icon: '🌸', color: '#f43f5e', desc: "A woven basket filled with fresh, colorful park wildflowers" }
    ],
    cleo: [
        { id: 'yarn', name: 'Rainbow Yarn Ball', icon: '🧶', color: '#a855f7', desc: "A bouncy ball of soft pastel yarn that unravels when batted" },
        { id: 'feather', name: 'Fluffy Feather Wand', icon: '🪶', color: '#ec4899', desc: "A springy play wand tipped with soft fluttery bird feathers" },
        { id: 'mouse', name: 'Wind-Up Toy Mouse', icon: '🐭', color: '#94a3b8', desc: "A tiny clockwork mouse with a wind-up key that scurries fast" },
        { id: 'bell', name: 'Jingle Bell Ball', icon: '🔔', color: '#facc15', desc: "A hollow sphere with a ringing brass bell inside that chimes on every roll" },
        { id: 'fish', name: 'Soft Catnip Fish', icon: '🐟', color: '#06b6d4', desc: "A cute felt fish stuffed with fragrant organic catnip" },
        { id: 'ribbon', name: 'Twirly Ribbon Wand', icon: '🎀', color: '#f43f5e', desc: "A twirling wand with long shimmering satin ribbons" }
    ]
};

const MAX_ADVENTURE_UNIVERSE = {
    id: 'storyboard_1',
    storyboardNumber: 1,
    masterTitle: 'Storyboard 1',
    level: 'beginner',
    levelLabel: '🟢 Level 1: Beginner',
    anchorTitle: 'Sunny Park Adventure',
    defaultTitle: "Sunny Park Adventure",
    summary: "Build an exciting 3-part park adventure with your chosen hero!",
    defaultSetting: 'park',
    defaultChar: 'max',
    defaultSecondaryChar: 'leo',
    defaultProp: 'ball',
    settings: [
        { id: 'park', name: 'Sunny Oak Park', icon: '🌳', desc: 'Lush green grass, giant oak tree & the green park bench' },
        { id: 'backyard', name: "Leo's Backyard", icon: '🏡', desc: 'Wooden doghouse, lawn, flower beds & red fence' },
        { id: 'creek', name: 'Whispering Creek', icon: '🦆', desc: 'Gentle pebble stream with wooden bridge and swimming ducks' }
    ],
    characters: [
        { id: 'max', name: 'Max the Puppy', icon: '🐶', avatar: '🐶', role: 'Hero Puppy', desc: 'Playful golden puppy with a fast-wagging tail' },
        { id: 'leo', name: 'Leo', icon: '👦', avatar: '👦', role: 'Adventurous Boy', desc: 'Friendly boy in a blue hoodie who loves park adventures' },
        { id: 'eve', name: 'Eve', icon: '👧', avatar: '👧', role: 'Adventurous Girl', desc: 'Cheerful blonde girl with hair ribbon bows who loves exploring the park' },
        { id: 'cleo', name: 'Cleo the Cat', icon: '🐱', avatar: '🐱', role: 'Curious Cat', desc: 'Sleek silver-grey tabby cat with bright green eyes and a graceful tail' }
    ],
    // Default prop array (Max's props) for backwards compatibility
    props: CHARACTER_PROPS.max,
    getPropsForCharacter: function(charId) {
        return CHARACTER_PROPS[charId] || CHARACTER_PROPS.max;
    },
    readingVocab: [
        { word: 'park', source: 'Reading Lab', def: 'A green outdoor place where kids and pets play 🌳.' },
        { word: 'behind', source: 'Reading Lab', def: 'At the back side of something (like the big tree) 🌲.' },
        { word: 'bench', source: 'Reading Lab', def: 'A long wooden seat for sitting and resting outside 🪵.' },
        { word: 'delicious', source: 'Reading Lab', def: 'Tasting wonderful, like a fresh juicy bone 🦴!' },
        { word: 'puppy', source: 'Reading Lab', def: 'A small, friendly, young dog full of energy 🐶.' },
        { word: 'sleeping', source: 'Reading Lab', def: 'Resting quietly with eyes closed in a warm spot 💤.' }
    ],
    morphology: [
        { word: 'playful', cat: 'tion', suffix: '-ful (Full of)', def: 'Full of games, fun and happy energy.' },
        { word: 'unlocked', cat: 'un', suffix: 'un- (Opposite)', def: 'Opened a gate or latch that was closed.' },
        { word: 'dangerous', cat: 'ous', suffix: '-ous (Full of)', def: 'Requiring caution near cars or deep water.' },
        { word: 'courageous', cat: 'ous', suffix: '-ous (Full of)', def: 'Brave when facing a big puddle or scary noise.' }
    ],
    twists: [
        { id: 'wind_gust', icon: '🍃', title: 'Sudden Wind Gust!', text: 'A powerful gust of wind sweeps across and leaves start swirling everywhere!', dialogue: 'Whoosh! Hold on tight, a strong breeze is blowing!' },
        { id: 'sun_shower', icon: '🌦️', title: 'Sun Shower & Rainbow!', text: 'A gentle sun shower sprinkles raindrops and a colorful rainbow arches across the sky!', dialogue: 'Look up! A sudden sun shower brought a bright rainbow!' },
        { id: 'butterfly_swarm', icon: '🦋', title: 'Fluttering Butterflies!', text: 'A cheerful flurry of colorful butterflies flutters around and circles overhead!', dialogue: 'Look at all the beautiful butterflies dancing in the air!' },
        { id: 'twilight_fireflies', icon: '✨', title: 'Twilight & Fireflies!', text: 'The sky glows warm golden amber as magical fireflies begin to float and twinkle!', dialogue: 'The sun is setting, and magic fireflies are lighting up!' }
    ],
    templates: [
        {
            panelIndex: 0,
            role: '1. Beginning (Setting & Hero)',
            roleBadge: 'Beginning',
            starters: ['One sunny morning,', 'The next Saturday,', 'Back at the park,'],
            defaultCaption: "One sunny morning, the hero arrived at the park ready for an adventure.",
            defaultSpeech: "Ready for an exciting adventure today!",
            speechChoices: ['Ready to explore!', 'Look around!', 'Best day ever!']
        },
        {
            panelIndex: 1,
            role: '2. The Problem (Incident)',
            roleBadge: 'The Problem',
            starters: ['Suddenly,', 'Unexpectedly,', 'To their surprise,'],
            defaultCaption: "Suddenly, the prop slipped away and got stuck near the landmark!",
            defaultSpeech: "Oh no! Where did it go?!",
            speechChoices: ['What is that?', 'Look over there!', 'I will check it out!']
        },
        {
            panelIndex: 2,
            role: '3. The Solution (Happy Ending)',
            roleBadge: 'Solution',
            starters: ['In the end,', 'Finally,', 'Luckily,'],
            defaultCaption: "In the end, the hero safely recovered the prop and celebrated!",
            defaultSpeech: "We did it! Mission complete!",
            speechChoices: ['Mission complete!', 'We solved the mystery!', 'Hooray!']
        }
    ]
};

/* ==========================================================================
   BEGINNER SETTING LANDMARKS (100% NON-OVERLAPPING & GEOGRAPHICALLY DISTINCT)
   ========================================================================== */

function getSettingLandmark(settingId) {
    switch (settingId) {
        case 'backyard':
            return {
                id: 'backyard',
                name: "Leo's Backyard",
                target: 'the wooden doghouse',
                shortTarget: 'the doghouse',
                prep: 'inside',
                rollPhrase: 'rolled right inside the wooden doghouse',
                slidePhrase: 'slid across the lawn and through the doghouse door',
                bouncePhrase: 'bounced across the lawn and slipped right inside the doghouse door',
                flyPhrase: 'soared across the lawn and wedged right beside the doghouse roof',
                dropPhrase: 'tumbled onto the soft lawn right by the doghouse door',
                scurryPhrase: 'scurried straight inside the wooden doghouse',
                retrieveHero: 'hurried into the doghouse, safely retrieved',
                retrieveDefault: 'safely recovered the prop from inside the doghouse'
            };
        case 'creek':
            return {
                id: 'creek',
                name: 'Whispering Creek',
                target: 'the wooden bridge',
                shortTarget: 'the wooden bridge',
                prep: 'under',
                rollPhrase: 'rolled down the path and right under the wooden bridge',
                slidePhrase: 'slid onto the pebble path and deep under the wooden bridge',
                bouncePhrase: 'bounced over the pebbles and splashed right under the wooden bridge',
                flyPhrase: 'soared over the water and wedged right under the wooden bridge',
                dropPhrase: 'tumbled onto the pebble bank right under the wooden bridge',
                scurryPhrase: 'scurried down the bank and right under the wooden bridge',
                retrieveHero: 'scrambled under the wooden bridge, safely retrieved',
                retrieveDefault: 'safely recovered the prop from under the wooden bridge'
            };
        case 'park':
        default:
            return {
                id: 'park',
                name: 'Sunny Oak Park',
                target: 'the park bench',
                shortTarget: 'the bench',
                prep: 'under',
                rollPhrase: 'rolled under the park bench',
                slidePhrase: 'slid deep under the park bench',
                bouncePhrase: 'bounced across the path and wedged right under the park bench',
                flyPhrase: 'soared over the grass and wedged right under the park bench',
                dropPhrase: 'tumbled onto the green grass right under the park bench',
                scurryPhrase: 'scurried fast and darted right under the park bench',
                retrieveHero: 'squeezed under the bench, safely retrieved',
                retrieveDefault: 'safely recovered the prop from under the bench'
            };
    }
}

/* ==========================================================================
   24 CURATED ESL PROP STORY ARCS (TAILORED TO CHARACTER & SETTING)
   ========================================================================== */

const BEGINNER_PROP_STORY_ARCS = {
    // ----------------------------------------------------------------------
    // 🐶 MAX THE PUPPY PROPS (6 Dog-Themed Items)
    // ----------------------------------------------------------------------
    ball: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} ran happily into ${s.name} carrying the ${p.name} in his mouth.`,
            speech: (h, s, p) => `Woof woof! I am so excited to chase my red ball at ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, while playing in ${s.name}, the ${p.name} bounced away and ${lm.rollPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Woof! The ${p.name} rolled right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and wagged his tail happily!`;
            },
            speech: (h, s, p) => `Woof woof! I got the red ball back! Mission complete!`
        }
    },
    bone: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} trotted into ${s.name} carrying the ${p.name} proudly in his mouth.`,
            speech: (h, s, p) => `Woof woof! This is the most delicious treat in all of ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ${p.name} slipped onto the path and ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Whine! My tasty bone slid ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, settled on the grass, and chewed his tasty reward happily!`;
            },
            speech: (h, s, p) => `Woof! Delicious Big Bone secured! Best snack ever!`
        }
    },
    frisbee: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} ran into ${s.name} gripping the bright ${p.name} in his teeth.`,
            speech: (h, s, p) => `Woof! Throw the frisbee across ${s.name}! I can jump and catch it!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a swift breeze swept the ${p.name} away, ${lm.flyPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Bark bark! The wind carried my frisbee ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} leaped forward, ${lm.retrieveHero} the ${p.name}, and pranced across the lawn!`;
            },
            speech: (h, s, p) => `Woof woof! Leaped, caught, and retrieved! Great flying catch!`
        }
    },
    duck: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} trotted happily into ${s.name} carrying his yellow ${p.name}.`,
            speech: (h, s, p) => `Squeak squeak! My yellow rubber duck is my favorite toy in ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ${p.name} bounced off a stone and ${lm.bouncePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Squeak! Oh no, my ducky bounced right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, giving it a cheerful squeak!`;
            },
            speech: (h, s, p) => `Woof! Squeak squeak! Ducky is back and ready to play!`
        }
    },
    rope: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} bounded into ${s.name} gripping the thick ${p.name} in his teeth.`,
            speech: (h, s, p) => `Grrr-woof! Who wants to play tug-of-war with me in ${s.name}?!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ${p.name} slipped onto the trail and ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Whine! The tug rope slid right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, giving it a triumphant shake!`;
            },
            speech: (h, s, p) => `Woof woof! I won the tug game! Let's play again!`
        }
    },
    biscuit: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} trotted through ${s.name} carrying a crunchy ${p.name} in his mouth.`,
            speech: (h, s, p) => `Sniff sniff! This baked golden biscuit smells delicious in ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ${p.name} tumbled from his mouth and ${lm.dropPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Whine! My crunchy biscuit rolled ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and crunched it down with a wagging tail!`;
            },
            speech: (h, s, p) => `Crunch crunch! Woof! That golden biscuit was delicious!`
        }
    },

    // ----------------------------------------------------------------------
    // 👦 LEO (KID ARCHETYPE) PROPS (6 Outdoor Kid Toys & Tools)
    // ----------------------------------------------------------------------
    kite: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} walked into ${s.name} holding the ${p.name} ready for the breeze.`,
            speech: (h, s, p) => `Look at the wind today in ${s.name}! Perfect for flying my sky kite!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a swirl of wind swooped the ${p.name} down, ${lm.flyPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh no! The wind swooped my kite right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and launched it high into the blue sky!`;
            },
            speech: (h, s, p) => `Hooray! The kite is soaring high over ${s.name}!`
        }
    },
    soccer: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} dribbled into ${s.name} with the ${p.name} ready to practice goal kicks.`,
            speech: (h, s, p) => `Ready to practice kicks at ${s.name}! Watch this curve shot!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a powerful kick sent the ${p.name} spinning and it ${lm.rollPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Whoops! The soccer ball rolled right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, kicked it into the goal, and cheered!`;
            },
            speech: (h, s, p) => `GOAL! Recovered the soccer ball and scored!`
        }
    },
    glider: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} held up his ${p.name}, ready for a long flight across ${s.name}.`,
            speech: (h, s, p) => `Cleared for takeoff! Let's see how far this glider plane can fly!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a gust of wind caught the wings and the ${p.name} ${lm.flyPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Mayday! The glider plane swooped right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, launched it on a safe glide, and cheered!`;
            },
            speech: (h, s, p) => `Safe landing! The glider plane is ready for another flight!`
        }
    },
    yoyo: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} walked through ${s.name} practicing tricks with his ${p.name}.`,
            speech: (h, s, p) => `Walking the dog and around the world! Check out these yo-yo tricks!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the string slipped and the ${p.name} spun away and ${lm.rollPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Uh oh! My yo-yo slipped and spun right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, rewound the string, and nailed a perfect spin!`;
            },
            speech: (h, s, p) => `Got it back! Perfect spin complete!`
        }
    },
    magnifier: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} explored ${s.name} with his ${p.name}, inspecting leaves and flowers.`,
            speech: (h, s, p) => `Let's investigate nature up close in ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, while kneeling by the trail, the ${p.name} slipped and ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Hold on! My magnifier slid right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and found a colorful ladybug on the lens!`;
            },
            speech: (h, s, p) => `Found it! And look—a friendly ladybug was resting right beside it!`
        }
    },
    canteen: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} hiked into ${s.name} carrying his cool ${p.name} filled with water.`,
            speech: (h, s, p) => `Staying hydrated on our grand exploration through ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the strap loosened and the ${p.name} ${lm.dropPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh no! My water canteen rolled right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the sturdy ${p.name}, dusted it off, and took a refreshing drink!`;
            },
            speech: (h, s, p) => `All good! The canteen is sturdy and cold water is refreshing!`
        }
    },

    // ----------------------------------------------------------------------
    // 👧 EVE (GIRL LEAD) PROPS (6 Creative & Active Outdoor Items)
    // ----------------------------------------------------------------------
    bubbles: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} danced into ${s.name} blowing colorful floating bubbles with her ${p.name}.`,
            speech: (h, s, p) => `Look at the shiny rainbow bubbles floating across ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a playful swirl of breeze caught the bubbles and the ${p.name} ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh no! The bubble wand slid right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and filled the sky with giant shimmering bubbles!`;
            },
            speech: (h, s, p) => `Hooray! The bubble wand is back! Giant rainbow bubbles for everyone!`
        }
    },
    scooter: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} glided happily into ${s.name} riding her ${p.name} along the path.`,
            speech: (h, s, p) => `Gliding through ${s.name} on my scooter is so fast and fun!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a pebble tipped the wheel and the ${p.name} ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Whoops! My scooter rolled right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, checked the spinning wheels, and zoomed ahead happily!`;
            },
            speech: (h, s, p) => `Scooter recovered and wheels spinning! Ready to zoom!`
        }
    },
    sketchbook: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} explored ${s.name} carrying her ${p.name} to draw park birds and flowers.`,
            speech: (h, s, p) => `I have my sketchbook and crayons! Time to draw the beautiful park!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a swift gust of wind fluttered the pages and the ${p.name} ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh dear! My sketchbook blew right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and held up a colorful drawing of ${s.name}!`;
            },
            speech: (h, s, p) => `Found it! Look at this lovely drawing of our sunny park adventure!`
        }
    },
    camera: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} hiked into ${s.name} with her ${p.name} ready to snap nature photos.`,
            speech: (h, s, p) => `Say cheese! I am taking pictures of all the animals and flowers in ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, while framing a shot, the strap loosened and the ${p.name} ${lm.dropPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Hold on! My camera slipped right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and captured a wonderful photo of the scenery!`;
            },
            speech: (h, s, p) => `Flash! Got the camera back and took the best photo of the day!`
        }
    },
    teddy: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} walked through ${s.name} holding her ${p.name} for a cozy stroll.`,
            speech: (h, s, p) => `My cuddly teddy loves fresh air and sunny days in ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, while resting on the grass, the ${p.name} tumbled down and ${lm.dropPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh no! My teddy bear rolled right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, hugged him tight, and smiled with joy!`;
            },
            speech: (h, s, p) => `Hooray! Teddy is safe and cozy in my arms again!`
        }
    },
    flowers: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} walked through ${s.name} carrying her ${p.name} filled with pretty blooms.`,
            speech: (h, s, p) => `Look at all the yellow and white daisies blooming in ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the handle tipped on the path and the ${p.name} ${lm.dropPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh dear! My flower basket tipped right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, gathered the fresh daisies, and celebrated!`;
            },
            speech: (h, s, p) => `All gathered! The daisy basket is full and smells wonderful!`
        }
    },

    // ----------------------------------------------------------------------
    // 🐱 CLEO (CAT ARCHETYPE) PROPS (6 Cat Toys & Chasers)
    // ----------------------------------------------------------------------
    yarn: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} crept playfully into ${s.name}, batting her soft ${p.name}.`,
            speech: (h, s, p) => `Purr! Watch how fast this colorful yarn unrolls across ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a quick swipe sent the ${p.name} rolling fast and it ${lm.rollPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Meow! My yarn ball rolled right ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and purred proudly!`;
            },
            speech: (h, s, p) => `Purr! Pounced and saved the yarn ball! Quick reflexes!`
        }
    },
    feather: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} padded into ${s.name} carrying her ${p.name} in her front paws.`,
            speech: (h, s, p) => `Meow! Those pink feathers flutter so gracefully in the breeze!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, a playful gust swept the ${p.name} out of reach and ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Hiss! The wind carried my feather wand ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and purred proudly!`;
            },
            speech: (h, s, p) => `Purr! Hooked it with one swift paw! Safe and sound!`
        }
    },
    mouse: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} watched her ${p.name} scurry along the path in ${s.name}.`,
            speech: (h, s, p) => `Click-clack! That wind-up mouse is fast, but I am faster!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the clockwork toy took a sharp turn and ${lm.scurryPhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Meow! The toy mouse zipped straight ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, and flicked her tail happily!`;
            },
            speech: (h, s, p) => `Gotcha! Caught the mouse right in my paws! Victory!`
        }
    },
    bell: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} rolled her ${p.name} through ${s.name}, listening to the sweet chime.`,
            speech: (h, s, p) => `Jingle jingle! The brass bell sounds like cheerful music in the sun!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ${p.name} bounced down the trail and ${lm.bouncePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Meow! I can hear the bell ringing ${lm.prep === 'inside' ? 'inside' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} followed the cheerful chime, ${lm.retrieveHero} the ${p.name}, and batted it happily!`;
            },
            speech: (h, s, p) => `Purr! Found by the sound of the bell! Back in my paws!`
        }
    },
    fish: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} carried her ${p.name} gently in her mouth into ${s.name}.`,
            speech: (h, s, p) => `Mmm, catnip! My favorite plush fish toy in all of ${s.name}!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ${p.name} slipped from her mouth and ${lm.slidePhrase}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Oh meow! My catnip fish slid ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} ${lm.retrieveHero} the ${p.name}, cuddled it with her paws, and purred!`;
            },
            speech: (h, s, p) => `Purr purr! My cozy fish toy is back safe and sound!`
        }
    },
    ribbon: {
        p1: {
            caption: (h, s, p) => `One sunny morning, ${h.name} danced across the lawn in ${s.name}, twirling the shimmering ${p.name}.`,
            speech: (h, s, p) => `Swish swish! Look at these lovely ribbons dancing in the air!`
        },
        p2: {
            defaultCaption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Suddenly, the ribbon caught on the breeze and the wand fluttered ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            },
            defaultSpeech: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `Meow! My ribbon wand fluttered ${lm.prep === 'inside' ? 'into' : 'under'} ${lm.shortTarget}!`;
            }
        },
        p3: {
            caption: (h, s, p) => {
                const lm = getSettingLandmark(s ? s.id : 'park');
                return `In the end, ${h.name} leapt gracefully, ${lm.retrieveHero} the ${p.name}, and danced with delight!`;
            },
            speech: (h, s, p) => `Purr! Ribbon dance complete! So graceful!`
        }
    }
};

function generateBeginnerStoryPanels(hero, setting, prop, twist) {
    const propId = (prop && prop.id) ? prop.id : 'ball';
    const arc = BEGINNER_PROP_STORY_ARCS[propId] || BEGINNER_PROP_STORY_ARCS.ball;

    // Panel 1: Beginning
    const p1Cap = arc.p1.caption(hero, setting, prop);
    const p1Speech = arc.p1.speech(hero, setting, prop);

    // Panel 2: The Problem
    const baseP2Cap = arc.p2.defaultCaption(hero, setting, prop);
    const baseP2Speech = arc.p2.defaultSpeech(hero, setting, prop);
    let p2Cap = twist ? `${baseP2Cap} Plus, ${twist.text}` : baseP2Cap;
    let p2Speech = twist ? `${twist.dialogue} ${baseP2Speech}` : baseP2Speech;

    // Panel 3: Resolution & Aftermath
    const baseP3Cap = arc.p3.caption(hero, setting, prop);
    const baseP3Speech = arc.p3.speech(hero, setting, prop);
    let p3Cap = baseP3Cap;
    let p3Speech = baseP3Speech;

    if (twist) {
        if (twist.id === 'sun_shower') {
            p3Cap = `${baseP3Cap} The sun shower cleared, leaving a brilliant rainbow shining overhead!`;
            p3Speech = `${baseP3Speech} Look at that gorgeous rainbow shining over us!`;
        } else if (twist.id === 'wind_gust') {
            p3Cap = `${baseP3Cap} The wild wind softened to a gentle breeze, leaving colorful autumn leaves dancing around them!`;
            p3Speech = `${baseP3Speech} The wind has calmed down, and the colorful leaves look amazing!`;
        } else if (twist.id === 'butterfly_swarm') {
            p3Cap = `${baseP3Cap} The cheerful butterflies danced in a circle overhead, celebrating the rescue!`;
            p3Speech = `${baseP3Speech} Look, the friendly butterflies are celebrating with us!`;
        } else if (twist.id === 'twilight_fireflies') {
            p3Cap = `${baseP3Cap} Friendly glowing fireflies lit up the evening twilight, sparkling across their victory!`;
            p3Speech = `${baseP3Speech} The fireflies are lighting up the twilight! What an incredible adventure!`;
        }
    }

    return [
        { panelIndex: 0, roleBadge: 'Beginning', caption: p1Cap, speech1: p1Speech, speech2: '' },
        { panelIndex: 1, roleBadge: 'The Problem', caption: p2Cap, speech1: p2Speech, speech2: '' },
        { panelIndex: 2, roleBadge: 'Solution', caption: p3Cap, speech1: p3Speech, speech2: '' }
    ];
}

MAX_ADVENTURE_UNIVERSE.generateStoryPanels = generateBeginnerStoryPanels;

/* ==========================================================================
   DYNAMIC PROP & CHARACTER RENDERING WITH LIVING KINETIC ACTION
   ========================================================================== */

function renderCarriedPropItem(propId, mode = 'held') {
    // ----------------------------------------------------------------------
    // 🐶 MAX'S PROPS (Clenched in puppy jaws at (0, 0))
    // ----------------------------------------------------------------------
    if (propId === 'ball') {
        return `
            <g transform="translate(0, 0)">
                <ellipse cx="0" cy="8" rx="8" ry="3" fill="rgba(0,0,0,0.2)"/>
                <!-- Glossy Red Bouncing Ball Body -->
                <circle cx="0" cy="0" r="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"/>
                <circle cx="-3" cy="-3" r="3.4" fill="#fca5a5" opacity="0.95"/>
                <path d="M-6 -2 Q-4 -6 0 -7" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                <!-- Dynamic Velocity Sheen Spin Arcs -->
                <path d="M-7 4 Q0 8 7 3" stroke="#fca5a5" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.8"/>
                <!-- Animated Gleam Glint Star (Living Action) -->
                <g class="story-anim-star-twinkle-fast" transform="translate(-4, -4)">
                    <polygon points="0,-3 0.8,-0.8 3,0 0.8,0.8 0,3 -0.8,0.8 -3,0 -0.8,-0.8" fill="#ffffff" filter="drop-shadow(0 0 3px #ffffff)"/>
                </g>
            </g>
        `;
    }
    if (propId === 'bone') {
        return `
            <g transform="rotate(-15)">
                <!-- Delicious Savory Aroma Scent Trails (Living Action) -->
                <g class="story-anim-scent-drift" transform="translate(0, -10)">
                    <path d="M-6 0 Q-3 -5 0 -10 T-3 -18" stroke="#fef08a" stroke-width="1.5" fill="none" opacity="0.85"/>
                    <path d="M4 0 Q7 -5 4 -10 T7 -18" stroke="#fde047" stroke-width="1.5" fill="none" opacity="0.85"/>
                </g>
                <!-- Appetizing Golden Star Sparkle -->
                <g class="story-anim-star-twinkle-fast" transform="translate(8, -8)">
                    <polygon points="0,-2.5 0.7,-0.7 2.5,0 0.7,0.7 0,2.5 -0.7,0.7 -2.5,0 -0.7,-0.7" fill="#facc15"/>
                </g>
                <path d="M-13 0 L13 0" stroke="#f8fafc" stroke-width="7.5" stroke-linecap="round"/>
                <circle cx="-13" cy="-4" r="4.2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
                <circle cx="-13" cy="4" r="4.2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
                <circle cx="13" cy="-4" r="4.2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
                <circle cx="13" cy="4" r="4.2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
                <line x1="-8" y1="-1" x2="8" y2="-1" stroke="#f1f5f9" stroke-width="1.2"/>
            </g>
        `;
    }
    if (propId === 'frisbee') {
        return `
            <g transform="rotate(-10)">
                <ellipse cx="0" cy="0" rx="15" ry="4.8" fill="#f59e0b" stroke="#d97706" stroke-width="1.6"/>
                <ellipse cx="0" cy="0" rx="10" ry="2.6" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
                <ellipse cx="0" cy="0" rx="4.5" ry="1.2" fill="#ffffff" opacity="0.85"/>
                <!-- High-Speed Aerodynamic Wind Streaks (Living Action) -->
                <g class="story-anim-gleam-sheen">
                    <line x1="-16" y1="-2" x2="-24" y2="-2" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
                    <line x1="-12" y1="2" x2="-20" y2="2" stroke="#fde047" stroke-width="1" stroke-linecap="round"/>
                </g>
                <!-- Speed Glint Line -->
                <line x1="-12" y1="-1" x2="12" y2="-1" stroke="#ffffff" stroke-width="1.2" opacity="0.85"/>
            </g>
        `;
    }
    if (propId === 'duck') {
        return `
            <g transform="translate(0, 2) scale(0.95)">
                <!-- Concentric Sound Squeak Wave Rings (Living Action) -->
                <g class="story-anim-sound-wave-ping" transform="translate(14, -10)">
                    <path d="M0 0 Q5 -5 10 0" fill="none" stroke="#facc15" stroke-width="1.4" stroke-linecap="round"/>
                </g>
                <!-- Musical Note Clean SVG Path -->
                <g class="story-anim-chime-note" transform="translate(16, -14)">
                    <circle cx="0" cy="0" r="1.8" fill="#f59e0b"/>
                    <line x1="1.8" y1="0" x2="1.8" y2="-7" stroke="#f59e0b" stroke-width="1.2"/>
                    <path d="M1.8 -7 Q5 -8 5 -4" stroke="#f59e0b" stroke-width="1.2" fill="none"/>
                </g>
                <!-- Rubber Duck Body -->
                <ellipse cx="0" cy="4" rx="10" ry="7" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
                <circle cx="6" cy="-2" r="6.2" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
                <path d="M11 -2 L17 -1 L11 1 Z" fill="#f97316" stroke="#ea580c" stroke-width="0.8"/>
                <circle cx="8" cy="-3" r="1.5" fill="#1e293b"/><circle cx="8.5" cy="-3.5" r="0.6" fill="#fff"/>
                <!-- Water Splash Droplet -->
                <circle cx="-10" cy="6" r="1.2" fill="#38bdf8" class="story-anim-star-twinkle-fast"/>
            </g>
        `;
    }
    if (propId === 'rope') {
        return `
            <g transform="rotate(-12)">
                <path d="M-15 0 L15 0" stroke="#0284c7" stroke-width="6.5" stroke-linecap="round"/>
                <circle cx="-13" cy="0" r="5.2" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
                <circle cx="13" cy="0" r="5.2" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2"/>
                <!-- Frayed knot tassels -->
                <path d="M-18 -3 L-22 -5 M-18 3 L-23 4 M18 -3 L22 -5 M18 3 L23 4" stroke="#94a3b8" stroke-width="1.6" stroke-linecap="round"/>
                <!-- Dynamic Tug Tension Waves (Living Action) -->
                <g class="story-anim-wobble-jitter">
                    <path d="M-10 -5 Q0 -8 10 -5" stroke="#38bdf8" stroke-width="1.2" fill="none" opacity="0.85"/>
                    <circle cx="0" cy="-6" r="1.2" fill="#facc15"/>
                </g>
            </g>
        `;
    }
    if (propId === 'biscuit') {
        return `
            <g transform="rotate(-15)">
                <!-- Baked Scent Crumb Dots & Steam (Living Action) -->
                <g class="story-anim-scent-drift" transform="translate(0, -8)">
                    <circle cx="-4" cy="0" r="1.2" fill="#f59e0b"/>
                    <circle cx="4" cy="-2" r="1.4" fill="#fbbf24"/>
                    <path d="M-2 0 Q0 -4 2 -8" stroke="#fef08a" stroke-width="1.2" fill="none" opacity="0.8"/>
                </g>
                <!-- Golden Baked Gleam Star -->
                <g class="story-anim-star-twinkle-fast" transform="translate(-6, -6)">
                    <polygon points="0,-2 0.6,-0.6 2,0 0.6,0.6 0,2 -0.6,0.6 -2,0 -0.6,-0.6" fill="#fde047"/>
                </g>
                <path d="M-12 0 L12 0" stroke="#d97706" stroke-width="7.5" stroke-linecap="round"/>
                <circle cx="-12" cy="-4" r="4" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                <circle cx="-12" cy="4" r="4" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                <circle cx="12" cy="-4" r="4" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                <circle cx="12" cy="4" r="4" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                <circle cx="-4" cy="0" r="0.9" fill="#92400e"/><circle cx="4" cy="0" r="0.9" fill="#92400e"/>
            </g>
        `;
    }

    // ----------------------------------------------------------------------
    // 👦 LEO'S PROPS (Held in boy's hand at (0, 0))
    // ----------------------------------------------------------------------
    if (propId === 'kite') {
        return `
            <g transform="translate(0, -12) scale(0.95)">
                <!-- Diamond Kite Body -->
                <polygon points="0,-18 14,0 0,18 -14,0" fill="#ec4899" stroke="#db2777" stroke-width="1.6"/>
                <polygon points="0,-18 0,18 14,0" fill="#f43f5e" opacity="0.3"/>
                <line x1="0" y1="-18" x2="0" y2="18" stroke="#fde047" stroke-width="1.4"/>
                <line x1="-14" y1="0" x2="14" y2="0" stroke="#fde047" stroke-width="1.4"/>
                <!-- Undulating Kite Tail Streamers with Colorful Bows (Living Action) -->
                <g class="story-anim-kite-flutter" transform="translate(0, 18)">
                    <path d="M0 0 Q-6 10 2 20 T-4 32" stroke="#f59e0b" stroke-width="1.8" fill="none"/>
                    <polygon points="-4,8 2,10 -2,12" fill="#38bdf8"/>
                    <polygon points="0,18 6,20 2,22" fill="#10b981"/>
                    <polygon points="-3,28 3,30 -1,32" fill="#facc15"/>
                    <polygon points="2,36 7,38 4,40" fill="#ec4899"/>
                </g>
                <!-- Wind Streamer Dashes -->
                <g class="story-anim-dash-flow">
                    <line x1="-18" y1="-8" x2="-28" y2="-8" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round" opacity="0.8"/>
                </g>
            </g>
        `;
    }
    if (propId === 'soccer') {
        return `
            <g transform="translate(0, 0)">
                <ellipse cx="0" cy="9" rx="8" ry="3" fill="rgba(0,0,0,0.2)"/>
                <circle cx="0" cy="0" r="11" fill="#f8fafc" stroke="#1e293b" stroke-width="1.8"/>
                <!-- Central Pentagon & Seams -->
                <polygon points="0,-3 3,0 2,4 -2,4 -3,0" fill="#1e293b"/>
                <line x1="0" y1="-3" x2="0" y2="-9" stroke="#1e293b" stroke-width="1.2"/>
                <line x1="3" y1="0" x2="8" y2="-2" stroke="#1e293b" stroke-width="1.2"/>
                <line x1="2" y1="4" x2="6" y2="8" stroke="#1e293b" stroke-width="1.2"/>
                <line x1="-2" y1="4" x2="-6" y2="8" stroke="#1e293b" stroke-width="1.2"/>
                <line x1="-3" y1="0" x2="-8" y2="-2" stroke="#1e293b" stroke-width="1.2"/>
                <!-- Dynamic Spin Motion Arc Lines (Living Action) -->
                <path d="M-8 -6 A11,11 0 0,1 7 -6" stroke="#94a3b8" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.8"/>
                <!-- Impact Star Sparkle -->
                <g class="story-anim-star-twinkle-fast" transform="translate(6, -6)">
                    <polygon points="0,-2.5 0.7,-0.7 2.5,0 0.7,0.7 0,2.5 -0.7,0.7 -2.5,0 -0.7,-0.7" fill="#facc15"/>
                </g>
            </g>
        `;
    }
    if (propId === 'glider') {
        return `
            <g transform="translate(0, -3) rotate(-15)">
                <!-- Aerodynamic Wingtip Vortex Trails (Living Action) -->
                <g class="story-anim-dash-flow">
                    <path d="M-18 -2 Q-26 -5 -34 -2" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="4,3" fill="none" opacity="0.85"/>
                    <path d="M-18 2 Q-26 5 -34 2" stroke="#60a5fa" stroke-width="1.2" stroke-dasharray="4,3" fill="none" opacity="0.75"/>
                </g>
                <ellipse cx="0" cy="0" rx="15" ry="4.2" fill="#38bdf8" stroke="#0284c7" stroke-width="1.4"/>
                <path d="M-4 0 L-2 -13 L4 -13 L2 0 Z" fill="#60a5fa" stroke="#0284c7" stroke-width="1.2"/>
                <polygon points="-13,0 -18,-7 -11,-2" fill="#ef4444"/>
                <circle cx="14" cy="0" r="2.8" fill="#facc15"/>
                <line x1="8" y1="-1" x2="13" y2="-1" stroke="#ffffff" stroke-width="1" stroke-linecap="round"/>
            </g>
        `;
    }
    if (propId === 'yoyo') {
        return `
            <g transform="translate(0, -6)">
                <!-- Finger Loop -->
                <circle cx="0" cy="-2" r="1.8" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
                <!-- Winding String cycling up & down (Living Action) -->
                <g class="story-anim-yoyo-cycle">
                    <line x1="0" y1="-1" x2="0" y2="8" stroke="#cbd5e1" stroke-width="1.4"/>
                </g>
                <!-- Spinning Yo-Yo Body cycling up & down -->
                <g class="story-anim-yoyo-spool">
                    <ellipse cx="0" cy="8" rx="8" ry="10" fill="#10b981" stroke="#047857" stroke-width="1.6"/>
                    <ellipse cx="0" cy="8" rx="5" ry="7" fill="#34d399"/>
                    <circle cx="0" cy="8" r="2.5" fill="#facc15" stroke="#ca8a04" stroke-width="0.8"/>
                    <!-- Speed Glint Line on Edge -->
                    <path d="M-5 4 Q0 1 5 4" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.8"/>
                    <circle cx="4" cy="5" r="1" fill="#fef08a" class="story-anim-star-twinkle-fast"/>
                </g>
            </g>
        `;
    }
    if (propId === 'magnifier') {
        return `
            <g transform="translate(0, -2) rotate(25)">
                <!-- Lens Rim & Glass -->
                <circle cx="0" cy="-6" r="9.5" fill="rgba(56, 189, 248, 0.25)" stroke="#d97706" stroke-width="2.2"/>
                <!-- Concentric Focal Discovery Rings (Living Action) -->
                <circle cx="0" cy="-6" r="6" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,2" opacity="0.8" class="story-anim-sound-wave-ping"/>
                <!-- Glass Reflection Glare Sheen (Living Action) -->
                <g class="story-anim-gleam-sheen">
                    <path d="M-5 -10 Q0 -14 6 -11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
                </g>
                <rect x="-2" y="3.5" width="4" height="13" rx="1.5" fill="#78350f" stroke="#451a03" stroke-width="1"/>
                <!-- Sparkle on Bezel -->
                <g class="story-anim-star-twinkle-fast" transform="translate(7, -12)">
                    <polygon points="0,-2 0.6,-0.6 2,0 0.6,0.6 0,2 -0.6,0.6 -2,0 -0.6,-0.6" fill="#facc15"/>
                </g>
            </g>
        `;
    }
    if (propId === 'canteen') {
        return `
            <g transform="translate(0, 2)">
                <rect x="-6" y="-6" width="12" height="16" rx="3.5" fill="#0284c7" stroke="#0369a1" stroke-width="1.6"/>
                <rect x="-3" y="-10" width="6" height="4" rx="1" fill="#94a3b8"/>
                <line x1="-6" y1="-1" x2="6" y2="-1" stroke="#38bdf8" stroke-width="1.4"/>
                <path d="M-6 -4 Q-10 6 -6 12" stroke="#475569" stroke-width="1.2" fill="none"/>
                <!-- Refreshing Liquid Wave Splash (Living Action) -->
                <g class="story-anim-liquid-slosh" transform="translate(0, -10)">
                    <circle cx="-3" cy="-2" r="1.4" fill="#38bdf8"/>
                    <circle cx="3" cy="-4" r="1.1" fill="#7dd3fc"/>
                    <circle cx="0" cy="-6" r="1.2" fill="#bae6fd"/>
                </g>
                <!-- Hydration Star Sparkle -->
                <g class="story-anim-star-twinkle-fast" transform="translate(6, 4)">
                    <polygon points="0,-2 0.5,-0.5 2,0 0.5,0.5 0,2 -0.5,0.5 -2,0 -0.5,-0.5" fill="#ffffff"/>
                </g>
            </g>
        `;
    }

    // ----------------------------------------------------------------------
    // 👧 EVE'S PROPS (Held in girl's hand at (0, 0))
    // ----------------------------------------------------------------------
    if (propId === 'bubbles') {
        return `
            <g transform="translate(0, 0)">
                <!-- Active Floating Soap Bubbles (Living Action) -->
                <g class="story-anim-bubble-rise" transform="translate(6, -14)">
                    <circle cx="0" cy="0" r="5" fill="rgba(56, 189, 248, 0.45)" stroke="#38bdf8" stroke-width="1.2"/>
                    <path d="M-2 -3 Q0 -5 2 -3" stroke="#ffffff" stroke-width="1" fill="none"/>
                </g>
                <g class="story-anim-bubble-rise" transform="translate(14, -22)" style="animation-delay: 0.8s;">
                    <circle cx="0" cy="0" r="3.5" fill="rgba(244, 114, 182, 0.45)" stroke="#f472b6" stroke-width="1"/>
                    <path d="M-1 -2 Q0 -3 1 -2" stroke="#ffffff" stroke-width="0.8" fill="none"/>
                </g>
                <g class="story-anim-bubble-rise" transform="translate(-6, -18)" style="animation-delay: 1.4s;">
                    <circle cx="0" cy="0" r="4.2" fill="rgba(250, 204, 21, 0.45)" stroke="#facc15" stroke-width="1"/>
                </g>
                <g class="story-anim-bubble-rise" transform="translate(4, -28)" style="animation-delay: 1.9s;">
                    <circle cx="0" cy="0" r="3" fill="rgba(168, 85, 247, 0.45)" stroke="#c084fc" stroke-width="0.9"/>
                </g>
                <!-- Pastel Bubble Wand Handle & Hoop -->
                <line x1="-8" y1="14" x2="4" y2="-4" stroke="#ec4899" stroke-width="2.2" stroke-linecap="round"/>
                <circle cx="6" cy="-6" r="6" fill="rgba(56, 189, 248, 0.25)" stroke="#db2777" stroke-width="2"/>
                <circle cx="6" cy="-6" r="3.5" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.8"/>
            </g>
        `;
    }
    if (propId === 'scooter') {
        return `
            <g transform="translate(0, 0)">
                <!-- Contact Shadow -->
                <ellipse cx="0" cy="18" rx="26" ry="4" fill="rgba(0,0,0,0.25)"/>
                <!-- Full-Sized Pink Scooter Deck -->
                <path d="M-24 10 L22 10 L20 14 L-24 14 Z" fill="#ec4899" stroke="#db2777" stroke-width="2"/>
                <!-- Rear Wheel with Chrome Rim & Spinning Spokes (Living Action) -->
                <g transform="translate(-22, 12)">
                    <circle cx="0" cy="0" r="5.5" fill="#334155" stroke="#1e293b" stroke-width="1.4"/>
                    <circle cx="0" cy="0" r="2.8" fill="#94a3b8"/>
                    <g class="story-anim-wheel-spin">
                        <line x1="-5" y1="0" x2="5" y2="0" stroke="#f8fafc" stroke-width="1"/>
                        <line x1="0" y1="-5" x2="0" y2="5" stroke="#f8fafc" stroke-width="1"/>
                    </g>
                </g>
                <!-- Front Wheel with Chrome Rim & Spinning Spokes -->
                <g transform="translate(22, 12)">
                    <circle cx="0" cy="0" r="5.5" fill="#334155" stroke="#1e293b" stroke-width="1.4"/>
                    <circle cx="0" cy="0" r="2.8" fill="#94a3b8"/>
                    <g class="story-anim-wheel-spin">
                        <line x1="-5" y1="0" x2="5" y2="0" stroke="#f8fafc" stroke-width="1"/>
                        <line x1="0" y1="-5" x2="0" y2="5" stroke="#f8fafc" stroke-width="1"/>
                    </g>
                </g>
                <!-- Ground Motion Speed Streaks -->
                <g class="story-anim-dash-flow">
                    <line x1="-28" y1="16" x2="-36" y2="16" stroke="#f472b6" stroke-width="1.2" stroke-linecap="round"/>
                </g>
                <!-- Full-Height Steering Column -->
                <line x1="20" y1="10" x2="18" y2="-28" stroke="#db2777" stroke-width="3" stroke-linecap="round"/>
                <line x1="21" y1="8" x2="19" y2="-26" stroke="#f472b6" stroke-width="1.2" stroke-linecap="round"/>
                <!-- T-Handlebars with Sunny Yellow Grips -->
                <line x1="10" y1="-28" x2="26" y2="-28" stroke="#facc15" stroke-width="3.5" stroke-linecap="round"/>
                <circle cx="10" cy="-28" r="2.2" fill="#eab308"/>
                <circle cx="26" cy="-28" r="2.2" fill="#eab308"/>
            </g>
        `;
    }
    if (propId === 'sketchbook') {
        return `
            <g transform="translate(0, 0) rotate(-10)">
                <!-- Hardcover Drawing Pad -->
                <rect x="-9" y="-12" width="18" height="23" rx="2.5" fill="#f59e0b" stroke="#d97706" stroke-width="1.8"/>
                <rect x="-7" y="-9" width="14" height="17" fill="#fef3c7"/>
                <!-- Spiral Ring Spine -->
                <circle cx="-8" cy="-8" r="1.2" fill="#475569"/><circle cx="-8" cy="-4" r="1.2" fill="#475569"/><circle cx="-8" cy="0" r="1.2" fill="#475569"/><circle cx="-8" cy="4" r="1.2" fill="#475569"/><circle cx="-8" cy="8" r="1.2" fill="#475569"/>
                <!-- Child's Flower Sketch on Page -->
                <circle cx="0" cy="0" r="2.5" fill="#ef4444"/>
                <circle cx="0" cy="-3" r="1.5" fill="#facc15"/>
                <line x1="0" y1="2" x2="0" y2="6" stroke="#22c55e" stroke-width="1.2"/>
                <!-- Creative Sparkle Stars Bursting Around (Living Action) -->
                <g class="story-anim-star-twinkle-fast" transform="translate(7, -8)">
                    <polygon points="0,-2.5 0.7,-0.7 2.5,0 0.7,0.7 0,2.5 -0.7,0.7 -2.5,0 -0.7,-0.7" fill="#ec4899"/>
                </g>
                <g class="story-anim-star-twinkle-fast" transform="translate(-6, 8)" style="animation-delay: 0.8s;">
                    <polygon points="0,-2 0.6,-0.6 2,0 0.6,0.6 0,2 -0.6,0.6 -2,0 -0.6,-0.6" fill="#38bdf8"/>
                </g>
            </g>
        `;
    }
    if (propId === 'camera') {
        return `
            <g transform="translate(0, 0)">
                <rect x="-9" y="-6" width="18" height="13" rx="2.5" fill="#10b981" stroke="#059669" stroke-width="1.6"/>
                <rect x="-5" y="-8" width="5" height="2" rx="0.5" fill="#047857"/>
                <!-- Big Lens with Reflection -->
                <circle cx="0" cy="0" r="5" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
                <circle cx="0" cy="0" r="3.2" fill="#38bdf8"/>
                <circle cx="-1" cy="-1" r="1" fill="#ffffff"/>
                <!-- Blinking Flash LED (Living Action) -->
                <circle cx="6" cy="-3" r="1.5" fill="#facc15" class="story-anim-led-1"/>
                <!-- High-Intensity Photo Flash Strobe Halo (Living Action) -->
                <g class="story-anim-prop-strobe-flash" transform="translate(6, -3)">
                    <circle cx="0" cy="0" r="6" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                    <circle cx="0" cy="0" r="2" fill="#ffffff"/>
                </g>
            </g>
        `;
    }
    if (propId === 'teddy') {
        return `
            <g transform="translate(0, 0)">
                <!-- Multiple Popping Love Hearts (Living Action) -->
                <g class="story-anim-heart-pop-1" transform="translate(-10, -14)">
                    <path d="M0 0 C-3 -4 -6 0 0 5 C6 0 3 -4 0 0 Z" fill="#f43f5e"/>
                </g>
                <g class="story-anim-heart-pop-2" transform="translate(10, -18)">
                    <path d="M0 0 C-2.5 -3 -5 0 0 4 C5 0 2.5 -3 0 0 Z" fill="#ec4899"/>
                </g>
                <g class="story-anim-heart-pop-3" transform="translate(2, -24)">
                    <path d="M0 0 C-2 -2.5 -4 0 0 3.5 C4 0 2 -2.5 0 0 Z" fill="#fb7185"/>
                </g>

                <!-- Teddy Bear Ears with Soft Inner Ear Pads -->
                <circle cx="-6" cy="-9" r="3.4" fill="#d97706" stroke="#b45309" stroke-width="1.2"/>
                <circle cx="-6" cy="-9" r="1.8" fill="#fde68a"/>
                <circle cx="6" cy="-9" r="3.4" fill="#d97706" stroke="#b45309" stroke-width="1.2"/>
                <circle cx="6" cy="-9" r="1.8" fill="#fde68a"/>

                <!-- Chubby Teddy Body with Soft Cream Tummy Patch -->
                <ellipse cx="0" cy="5" rx="8" ry="9.5" fill="#d97706" stroke="#b45309" stroke-width="1.4"/>
                <ellipse cx="0" cy="5.5" rx="5" ry="6" fill="#fde68a"/>

                <!-- Teddy Head with Cute Snout -->
                <circle cx="0" cy="-4" r="7" fill="#d97706" stroke="#b45309" stroke-width="1.4"/>
                <ellipse cx="0" cy="-2.5" rx="4" ry="2.8" fill="#fde68a"/>
                <circle cx="0" cy="-3.5" r="1.2" fill="#451a03"/>
                <path d="M-1.2 -2 Q0 -1 1.2 -2" stroke="#78350f" stroke-width="0.8" fill="none"/>
                <!-- Shiny Bead Eyes -->
                <circle cx="-2.5" cy="-6" r="1" fill="#1e293b"/><circle cx="-2.2" cy="-6.3" r="0.4" fill="#fff"/>
                <circle cx="2.5" cy="-6" r="1" fill="#1e293b"/><circle cx="2.8" cy="-6.3" r="0.4" fill="#fff"/>

                <!-- Red Bow Tie at Collar -->
                <polygon points="-3,-0.5 0,1 3,-0.5 0,-2" fill="#ef4444"/>
                <circle cx="0" cy="-0.5" r="0.8" fill="#facc15"/>

                <!-- Teddy Arms Reaching Out with Cute Paw Pads -->
                <path d="M-6 2 Q-11 5 -10 9 Q-8 11 -5 8 Z" fill="#d97706" stroke="#b45309" stroke-width="1.2"/>
                <circle cx="-8" cy="7" r="1.4" fill="#fde68a"/>
                <path d="M6 2 Q11 5 10 9 Q8 11 5 8 Z" fill="#d97706" stroke="#b45309" stroke-width="1.2"/>
                <circle cx="8" cy="7" r="1.4" fill="#fde68a"/>

                <!-- Seated Teddy Legs with Circular Foot Pads -->
                <ellipse cx="-6" cy="12" rx="4.5" ry="3.2" fill="#d97706" stroke="#b45309" stroke-width="1.2"/>
                <circle cx="-6" cy="12" r="2" fill="#fde68a"/>
                <ellipse cx="6" cy="12" rx="4.5" ry="3.2" fill="#d97706" stroke="#b45309" stroke-width="1.2"/>
                <circle cx="6" cy="12" r="2" fill="#fde68a"/>
            </g>
        `;
    }
    if (propId === 'flowers') {
        return `
            <g transform="translate(0, 0)">
                <!-- Popping Flower Blooms & Fluttering Petals (Living Action) -->
                <g class="story-anim-bloom-pop-1" transform="translate(8, -12)">
                    <circle cx="0" cy="0" r="3.2" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.8"/>
                    <circle cx="0" cy="0" r="1.4" fill="#facc15"/>
                </g>
                <g class="story-anim-bloom-pop-2" transform="translate(-7, -16)">
                    <circle cx="0" cy="0" r="2.8" fill="#f472b6" stroke="#db2777" stroke-width="0.6"/>
                    <circle cx="0" cy="0" r="1.1" fill="#fde047"/>
                </g>
                <g class="story-anim-bloom-pop-3" transform="translate(13, -20)">
                    <ellipse cx="0" cy="0" rx="2.5" ry="1.3" fill="#fbbf24" transform="rotate(30)"/>
                </g>
                <g class="story-anim-bloom-pop-4" transform="translate(-12, -10)">
                    <ellipse cx="0" cy="0" rx="2.2" ry="1.1" fill="#fda4af" transform="rotate(-25)"/>
                </g>

                <!-- Wicker Basket Body with Crosshatch Texture -->
                <path d="M-9 2 L9 2 L7 12 L-7 12 Z" fill="#d97706" stroke="#92400e" stroke-width="1.6"/>
                <line x1="-7" y1="5" x2="7" y2="5" stroke="#b45309" stroke-width="1"/>
                <line x1="-6" y1="8.5" x2="6" y2="8.5" stroke="#b45309" stroke-width="1"/>
                <line x1="-3" y1="2" x2="-2" y2="12" stroke="#b45309" stroke-width="0.9"/>
                <line x1="3" y1="2" x2="2" y2="12" stroke="#b45309" stroke-width="0.9"/>
                <!-- Braided Handle Arching Above -->
                <path d="M-8 2 C-8 -11 8 -11 8 2" stroke="#78350f" stroke-width="2" fill="none"/>

                <!-- Fresh Green Foliage Sprigs -->
                <path d="M-8 1 Q-12 -2 -10 -6 Q-7 -3 -6 1" fill="#16a34a"/>
                <path d="M8 1 Q12 -2 10 -6 Q7 -3 6 1" fill="#16a34a"/>
                <circle cx="0" cy="0" r="2" fill="#22c55e"/>

                <!-- Lush Blooming Daisies Inside Basket -->
                <!-- Center Daisy (Crisp White with Bright Gold Center) -->
                <g transform="translate(0, -2)">
                    <circle cx="-3" cy="0" r="1.5" fill="#ffffff"/><circle cx="3" cy="0" r="1.5" fill="#ffffff"/>
                    <circle cx="0" cy="-3" r="1.5" fill="#ffffff"/><circle cx="0" cy="3" r="1.5" fill="#ffffff"/>
                    <circle cx="-2" cy="-2" r="1.5" fill="#ffffff"/><circle cx="2" cy="-2" r="1.5" fill="#ffffff"/>
                    <circle cx="-2" cy="2" r="1.5" fill="#ffffff"/><circle cx="2" cy="2" r="1.5" fill="#ffffff"/>
                    <circle cx="0" cy="0" r="2.2" fill="#facc15" stroke="#ca8a04" stroke-width="0.6"/>
                </g>
                <!-- Left Daisy (Sunny Yellow) -->
                <g transform="translate(-5, 0)">
                    <circle cx="0" cy="0" r="3.2" fill="#fef08a" stroke="#facc15" stroke-width="0.6"/>
                    <circle cx="0" cy="0" r="1.5" fill="#f59e0b"/>
                </g>
                <!-- Right Daisy (Rose/White) -->
                <g transform="translate(5, -1)">
                    <circle cx="0" cy="0" r="3.4" fill="#ffffff" stroke="#f472b6" stroke-width="0.8"/>
                    <circle cx="0" cy="0" r="1.4" fill="#facc15"/>
                </g>
            </g>
        `;
    }

    // ----------------------------------------------------------------------
    // 🐱 CLEO'S PROPS (Held in kitten paws/mouth at (0, 0))
    // ----------------------------------------------------------------------
    if (propId === 'yarn') {
        return `
            <g transform="translate(0, 0)">
                <ellipse cx="0" cy="8" rx="7" ry="2.5" fill="rgba(0,0,0,0.2)"/>
                <circle cx="0" cy="0" r="9.5" fill="#a855f7" stroke="#7e22ce" stroke-width="1.6"/>
                <path d="M-6 -4 Q2 -8 7 -2" stroke="#d8b4fe" stroke-width="1.5" fill="none"/>
                <path d="M-7 3 Q-1 7 6 4" stroke="#e9d5ff" stroke-width="1.4" fill="none"/>
                <!-- Trailing unraveling string (Living Action) -->
                <g class="story-anim-ribbon-wave" transform="translate(3, 8)">
                    <path d="M0 0 Q9 6 15 2 T23 4" stroke="#c084fc" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                </g>
                <!-- Floating Wool Fuzz Specks -->
                <g class="story-anim-star-twinkle-fast" transform="translate(12, 6)">
                    <circle cx="0" cy="0" r="1" fill="#e9d5ff"/>
                </g>
            </g>
        `;
    }
    if (propId === 'feather') {
        return `
            <g transform="translate(0, -4) rotate(15)">
                <!-- Wand Handle Rod -->
                <line x1="-8" y1="14" x2="6" y2="-6" stroke="#d97706" stroke-width="1.8" stroke-linecap="round"/>
                <!-- Ferrule Cap at Wand Tip -->
                <circle cx="6" cy="-6" r="2.2" fill="#78350f"/>

                <!-- Attached Fluttering Feathers Anchored Firmly at Tip (0, 0) -->
                <g transform="translate(6, -6)">
                    <g class="story-anim-feather-sway" style="transform-origin: 0px 0px;">
                        <!-- Primary Magenta Feather -->
                        <path d="M 0 0 C 4 -8 11 -15 17 -18 C 15 -11 9 -5 0 0 Z" fill="#ec4899" stroke="#db2777" stroke-width="0.8"/>
                        <path d="M 0 0 Q 9 -10 16 -17" stroke="#ffffff" stroke-width="1" fill="none" opacity="0.9"/>

                        <!-- Secondary Sky Cyan Feather -->
                        <path d="M 0 0 C -3 -7 0 -15 6 -20 C 5 -12 1 -5 0 0 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="0.8"/>
                        <path d="M 0 0 Q 0 -10 5 -19" stroke="#ffffff" stroke-width="0.9" fill="none" opacity="0.9"/>

                        <!-- Tertiary Fluffy Gold Down Feather -->
                        <path d="M 0 0 C 6 -3 13 -4 18 -6 C 13 -3 7 -1 0 0 Z" fill="#facc15" stroke="#d97706" stroke-width="0.8"/>
                    </g>
                </g>
                <!-- Drifting Down Feather Fluff (Living Action) -->
                <g class="story-anim-scent-drift" transform="translate(18, -20)">
                    <ellipse cx="0" cy="0" rx="2" ry="0.8" fill="#fbcfe8" transform="rotate(25)"/>
                </g>
            </g>
        `;
    }
    if (propId === 'mouse') {
        return `
            <g transform="translate(0, 2)">
                <!-- Ground Contact Shadow -->
                <ellipse cx="0" cy="7" rx="10" ry="2.5" fill="rgba(0,0,0,0.2)"/>

                <!-- Underneath Mechanical Wheels -->
                <circle cx="5" cy="5.5" r="2.2" fill="#1e293b" stroke="#475569" stroke-width="0.8"/>
                <circle cx="-5" cy="5.5" r="2.2" fill="#1e293b" stroke="#475569" stroke-width="0.8"/>

                <!-- Teardrop Toy Mouse Chassis -->
                <path d="M-10 4 C-10 -4 4 -6 10 1 C8 5 0 7 -10 4 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>

                <!-- Pink Snout & Whiskers -->
                <circle cx="10" cy="1" r="1.5" fill="#f43f5e"/>
                <line x1="9" y1="0" x2="15" y2="-2" stroke="#475569" stroke-width="0.8"/>
                <line x1="9" y1="1" x2="15" y2="1" stroke="#475569" stroke-width="0.8"/>
                <line x1="9" y1="2" x2="14" y2="4" stroke="#475569" stroke-width="0.8"/>

                <!-- Big Rounded Mouse Ears with Pink Inner Cup -->
                <ellipse cx="1" cy="-4.5" rx="3.5" ry="4.5" fill="#64748b"/>
                <ellipse cx="1" cy="-4.5" rx="2.2" ry="3" fill="#fbcfe8"/>
                <ellipse cx="5" cy="-3.5" rx="2.5" ry="3.5" fill="#64748b"/>
                <ellipse cx="5" cy="-3.5" rx="1.5" ry="2.2" fill="#fbcfe8"/>

                <!-- Glossy Black Bead Eye with Catchlight -->
                <circle cx="6" cy="-0.5" r="1.4" fill="#0f172a"/>
                <circle cx="6.4" cy="-0.9" r="0.5" fill="#ffffff"/>

                <!-- Coiled Wire Spring Tail -->
                <path d="M-10 3 C-14 6 -17 2 -15 -2 C-13 -5 -10 -2 -12 1" stroke="#cbd5e1" stroke-width="1.6" fill="none" stroke-linecap="round"/>

                <!-- Classic Brass Wind-Up Butterfly Key on Back (Living Action) -->
                <g transform="translate(-2, -3)">
                    <line x1="0" y1="0" x2="0" y2="-5" stroke="#b45309" stroke-width="1.8"/>
                    <g class="story-anim-key-spin" transform="translate(0, -5)" style="transform-origin: 0px 0px;">
                        <path d="M-5 -2 C-5 -5 -1 -5 0 -2 C1 -5 5 -5 5 -2 C5 1 1 1 0 0 C-1 1 -5 1 -5 -2 Z" fill="#facc15" stroke="#b45309" stroke-width="1"/>
                        <circle cx="-2.5" cy="-2.5" r="1" fill="#b45309"/>
                        <circle cx="2.5" cy="-2.5" r="1" fill="#b45309"/>
                    </g>
                </g>
                <!-- Scurrying Motion Dust (Living Action) -->
                <g class="story-anim-dust-puff" transform="translate(-12, 6)">
                    <circle cx="0" cy="0" r="1.8" fill="#d97706" opacity="0.4"/>
                    <circle cx="-3" cy="-1" r="1.2" fill="#fbbf24" opacity="0.4"/>
                </g>
            </g>
        `;
    }
    if (propId === 'bell') {
        return `
            <g transform="translate(0, 0)">
                <!-- Sound Chime Waves & Clean SVG Floating Notes (Living Action) -->
                <g class="story-anim-chime-note" transform="translate(10, -8)">
                    <circle cx="0" cy="0" r="1.6" fill="#f59e0b"/>
                    <line x1="1.6" y1="0" x2="1.6" y2="-6" stroke="#f59e0b" stroke-width="1"/>
                    <path d="M1.6 -6 Q4 -7 4 -3" stroke="#f59e0b" stroke-width="1" fill="none"/>
                </g>
                <g class="story-anim-chime-note" transform="translate(15, -4)" style="animation-delay: 0.5s;">
                    <circle cx="0" cy="0" r="1.3" fill="#facc15"/>
                    <line x1="1.3" y1="0" x2="1.3" y2="-5" stroke="#facc15" stroke-width="0.9"/>
                </g>
                <!-- Gleaming Gold Sleigh Bell Body with Wobble -->
                <g class="story-anim-bell-jingle" style="transform-origin: 0px -8px;">
                    <!-- Top Attachment Eyelet Loop -->
                    <circle cx="0" cy="-8" r="2.4" fill="none" stroke="#b45309" stroke-width="1.6"/>
                    <rect x="-1.5" y="-6" width="3" height="2" fill="#b45309"/>

                    <!-- Spherical Bell Body -->
                    <circle cx="0" cy="0" r="8.5" fill="#facc15" stroke="#b45309" stroke-width="1.6"/>
                    <!-- Equatorial Seam Ridge -->
                    <line x1="-8" y1="-0.5" x2="8" y2="-0.5" stroke="#b45309" stroke-width="1.2"/>
                    <line x1="-7.5" y1="0.5" x2="7.5" y2="0.5" stroke="#fef08a" stroke-width="0.8"/>

                    <!-- Top-Left Glare Sheen Arc -->
                    <path d="M-5 -4 Q0 -7 5 -4" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round"/>

                    <!-- Bottom Bell Keyhole Cutout & Visible Clapper Bead -->
                    <circle cx="0" cy="3.5" r="2" fill="#451a03"/>
                    <path d="M-6 3.5 Q0 5 6 3.5" stroke="#451a03" stroke-width="1.4" fill="none"/>
                    <circle cx="0" cy="3.5" r="1" fill="#fef08a"/>
                </g>
                <!-- Flash Glint Star -->
                <g class="story-anim-star-twinkle-fast" transform="translate(-5, -3)">
                    <polygon points="0,-2 0.5,-0.5 2,0 0.5,0.5 0,2 -0.5,0.5 -2,0 -0.5,-0.5" fill="#ffffff"/>
                </g>
            </g>
        `;
    }
    if (propId === 'fish') {
        return `
            <g transform="translate(0, 0) rotate(-15)">
                <!-- Catnip Stuffed Fish Body -->
                <ellipse cx="0" cy="0" rx="11" ry="6" fill="#06b6d4" stroke="#0891b2" stroke-width="1.5"/>
                <!-- Playful Wagging Tail Fin (Living Action) -->
                <g class="story-anim-prop-wobble-play" transform="translate(-10, 0)" style="transform-origin: 0px 0px;">
                    <polygon points="0,0 -7,-5 -7,5" fill="#22d3ee" stroke="#0891b2" stroke-width="1"/>
                </g>
                <circle cx="6" cy="-1.5" r="1.5" fill="#1e293b"/>
                <circle cx="6.5" cy="-1.8" r="0.5" fill="#fff"/>
                <path d="M-2 -3 Q0 0 -2 3 M2 -3 Q4 0 2 3" stroke="#e0f2fe" stroke-width="1.2" fill="none"/>
                <!-- Aromatic Catnip Leaf Specks (Living Action) -->
                <g class="story-anim-scent-drift" transform="translate(4, -8)">
                    <ellipse cx="0" cy="0" rx="2" ry="1" fill="#22c55e" transform="rotate(-30)"/>
                    <circle cx="4" cy="-3" r="1" fill="#86efac"/>
                </g>
            </g>
        `;
    }
    if (propId === 'ribbon') {
        return `
            <g transform="translate(0, -4)">
                <!-- Wand Handle Rod -->
                <line x1="-6" y1="14" x2="6" y2="-6" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round"/>
                <!-- Ferrule Tip at Wand Point -->
                <circle cx="6" cy="-6" r="2.2" fill="#78350f"/>

                <!-- Attached Twirling Silk Ribbons Anchored Firmly at Tip (0, 0) -->
                <g transform="translate(6, -6)">
                    <g class="story-anim-ribbon-twirl" style="transform-origin: 0px 0px;">
                        <!-- Primary Crimson Ribbon Streamer -->
                        <path d="M 0 0 C 8 -10 16 6 24 -4 C 30 -11 36 2 44 -5" stroke="#f43f5e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                        <!-- Secondary Bright Pink Ribbon Streamer -->
                        <path d="M 0 0 C 6 -4 14 -12 22 -6 C 28 0 34 -8 40 -3" stroke="#fb7185" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.9"/>
                        <!-- Tertiary Golden Ribbon Streamer -->
                        <path d="M 0 0 C 10 2 18 -6 26 2 C 32 8 38 0 46 4" stroke="#facc15" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
                    </g>
                </g>
                <!-- Twirling Sparkle Stars (Living Action) -->
                <g class="story-anim-star-twinkle-fast" transform="translate(24, -12)">
                    <polygon points="0,-2 0.5,-0.5 2,0 0.5,0.5 0,2 -0.5,0.5 -2,0 -0.5,-0.5" fill="#facc15"/>
                </g>
            </g>
        `;
    }

    // Default Fallback
    return `
        <circle cx="0" cy="0" r="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
    `;
}

function renderBeginnerCharacter(charId, charX, groundY, pose = 'exploring', isSecondary = false, propId = 'ball', isCarryingProp = false) {
    const scaleFactor = isSecondary ? '0.88' : '1.0';
    const animClass = 'story-anim-walk-6steps';

    // ----------------------------------------------------------------------
    // 👦 LEO (KID LEAD)
    // ----------------------------------------------------------------------
    if (charId === 'leo') {
        const isAlarmed = (pose === 'alarmed');
        const isCelebrating = (pose === 'celebrating');

        if (isCelebrating) {
            return `
                <g class="${animClass}">
                    <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                        <!-- Left Arm: Cheering in air! -->
                        <path d="M-18 42 L-28 14 L-22 10 L-14 38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="-25" cy="12" r="5" fill="#fed7aa"/>

                        <!-- Head & Bob: Cheerful open smile -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                            <circle cx="0" cy="12" r="22" fill="#78350f"/>
                            <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                            <circle cx="-6" cy="18" r="3.5" fill="#1e293b"/><circle cx="-5" cy="16" r="1.3" fill="#fff"/>
                            <circle cx="6" cy="18" r="3.5" fill="#1e293b"/><circle cx="7" cy="16" r="1.3" fill="#fff"/>
                            <circle cx="-11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                            <circle cx="11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                            <path d="M-6 24 Q0 33 6 24" stroke="#9a3412" stroke-width="2.5" fill="#450a0a" stroke-linecap="round"/>
                            <path d="M-4.5 25 Q0 28 4.5 25" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                        </g>

                        <!-- Blue Hoodie Body -->
                        <path d="M-18 38 L18 38 L15 75 L-15 75 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.5"/>
                        <polygon points="0,44 -6,52 6,52" fill="#facc15"/>

                        <!-- Right Arm: Raised up holding recovered prop with sparkles! -->
                        <path d="M18 42 L28 14 L22 10 L14 38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="25" cy="12" r="5" fill="#fed7aa"/>
                        ${isCarryingProp ? `
                            <g transform="translate(27, 4)">
                                ${renderCarriedPropItem(propId, 'human')}
                                <g class="story-anim-sparkle-spin" transform="translate(14, -8)">
                                    <text x="0" y="0" font-size="12" fill="#facc15">✨</text>
                                </g>
                            </g>
                        ` : ''}

                        <!-- Red Sneakers firmly on ground (Y = 175) -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-14" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                            <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.2"/>
                            <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="2" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                            <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.2"/>
                            <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                    </g>
                </g>
            `;
        }

        if (isAlarmed) {
            return `
                <g class="${animClass}">
                    <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                        <!-- Blue Hoodie Body -->
                        <path d="M-18 38 L18 38 L15 75 L-15 75 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.5"/>
                        <polygon points="0,44 -6,52 6,52" fill="#facc15"/>

                        <!-- Surprised Head & Expression -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                            <circle cx="0" cy="12" r="22" fill="#78350f"/>
                            <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                            <circle cx="-6" cy="17" r="4.5" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
                            <circle cx="-5" cy="17" r="2.2" fill="#1e293b"/>
                            <circle cx="-4" cy="15.5" r="1" fill="#ffffff"/>
                            <circle cx="6" cy="17" r="4.5" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
                            <circle cx="7" cy="17" r="2.2" fill="#1e293b"/>
                            <circle cx="8" cy="15.5" r="1" fill="#ffffff"/>
                            <path d="M-10 9 Q-5 6 0 9" stroke="#78350f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                            <path d="M0 9 Q5 6 10 9" stroke="#78350f" stroke-width="2.2" fill="none" stroke-linecap="round"/>
                            <circle cx="-11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                            <circle cx="11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                            <ellipse cx="0" cy="27" rx="3.5" ry="4.5" fill="#450a0a" stroke="#78350f" stroke-width="1.2"/>
                        </g>

                        <!-- Both Hands Raised in Alarm! -->
                        <path d="M-18 42 L-26 26 L-20 22 L-14 38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="-23" cy="23" r="4.8" fill="#fed7aa"/>
                        <path d="M18 42 L26 26 L20 22 L14 38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="23" cy="23" r="4.8" fill="#fed7aa"/>

                        <!-- Sneakers -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-14" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                            <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.2"/>
                            <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="2" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                            <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.2"/>
                            <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                    </g>
                </g>
            `;
        }

        // Exploring Pose (Scene 1)
        if (propId === 'soccer' && isCarryingProp) {
            return `
                <g class="${animClass}">
                    <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                        <!-- Left Arm: Athletic balance back -->
                        <path d="M-18 42 L-32 30 L-28 25 L-14 38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="-30" cy="27" r="5" fill="#fed7aa"/>

                        <!-- Head & Bob: Joyful focused grin -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                            <circle cx="0" cy="12" r="22" fill="#78350f"/>
                            <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                            <circle cx="-6" cy="18" r="3.5" fill="#1e293b"/><circle cx="-5" cy="16" r="1.3" fill="#fff"/>
                            <circle cx="6" cy="18" r="3.5" fill="#1e293b"/><circle cx="7" cy="16" r="1.3" fill="#fff"/>
                            <circle cx="-11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                            <circle cx="11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                            <path d="M-6 24 Q0 33 6 24" stroke="#9a3412" stroke-width="2.5" fill="#450a0a" stroke-linecap="round"/>
                            <path d="M-4.5 25 Q0 28 4.5 25" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                        </g>

                        <!-- Blue Hoodie Body -->
                        <path d="M-18 38 L18 38 L15 75 L-15 75 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.5"/>
                        <polygon points="0,44 -6,52 6,52" fill="#facc15"/>

                        <!-- Right Arm: Athletic balance forward (Free hand, NOT holding ball!) -->
                        <path d="M18 42 L34 32 L30 27 L15 38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="32" cy="29" r="5" fill="#fed7aa"/>

                        <!-- Planted Left Leg firmly on ground -->
                        <g>
                            <rect x="-14" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                            <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.2"/>
                            <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                        </g>

                        <!-- Active Right Kicking Leg & Striking Sneaker (Living Action) -->
                        <g class="story-anim-soccer-kick">
                            <rect x="2" y="75" width="12" height="16" rx="2" fill="#1e293b"/>
                            <!-- Foot swung forward kicking ball -->
                            <path d="M4 90 L24 88 Q28 88 28 92 L28 96 L4 98 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.2"/>
                            <rect x="3" y="96" width="26" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                        </g>

                        <!-- Soccer Ball on Ground in Front of Foot with Dynamic Roll & Impact (Living Action) -->
                        <g transform="translate(42, 94)">
                            <ellipse cx="0" cy="9" rx="10" ry="3.5" fill="rgba(0,0,0,0.25)"/>
                            <!-- Kicking Motion Lines & Grass Flecks -->
                            <path d="M-16 4 Q-8 8 -2 6" stroke="#facc15" stroke-width="1.4" fill="none" opacity="0.8"/>
                            <circle cx="-12" cy="2" r="1.5" fill="#22c55e"/>
                            <circle cx="-8" cy="8" r="1.2" fill="#16a34a"/>
                            <!-- Rolling/Spinning Soccer Ball -->
                            <g class="story-anim-soccer-roll">
                                <circle cx="0" cy="0" r="11" fill="#f8fafc" stroke="#1e293b" stroke-width="1.8"/>
                                <polygon points="0,-3 3,0 2,4 -2,4 -3,0" fill="#1e293b"/>
                                <line x1="0" y1="-3" x2="0" y2="-9" stroke="#1e293b" stroke-width="1.2"/>
                                <line x1="3" y1="0" x2="8" y2="-2" stroke="#1e293b" stroke-width="1.2"/>
                                <line x1="2" y1="4" x2="6" y2="8" stroke="#1e293b" stroke-width="1.2"/>
                                <line x1="-2" y1="4" x2="-6" y2="8" stroke="#1e293b" stroke-width="1.2"/>
                                <line x1="-3" y1="0" x2="-8" y2="-2" stroke="#1e293b" stroke-width="1.2"/>
                            </g>
                        </g>
                    </g>
                </g>
            `;
        }

        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                    <!-- Left Arm on Hip -->
                    <path d="M-18 42 L-28 58 L-22 62 L-14 48 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                    <circle cx="-25" cy="62" r="5" fill="#fed7aa"/>

                    <!-- Head & Bob -->
                    <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                        <circle cx="0" cy="12" r="22" fill="#78350f"/>
                        <circle cx="0" cy="18" r="19" fill="#fed7aa" stroke="#78350f" stroke-width="2"/>
                        <circle cx="-6" cy="18" r="3.5" fill="#1e293b"/><circle cx="-5" cy="16" r="1.3" fill="#fff"/>
                        <circle cx="6" cy="18" r="3.5" fill="#1e293b"/><circle cx="7" cy="16" r="1.3" fill="#fff"/>
                        <circle cx="-11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                        <circle cx="11" cy="24" r="3" fill="#fca5a5" opacity="0.6"/>
                        <path d="M-6 24 Q0 33 6 24" stroke="#9a3412" stroke-width="2.5" fill="#450a0a" stroke-linecap="round"/>
                        <path d="M-4.5 25 Q0 28 4.5 25" stroke="#ffffff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
                    </g>

                    <!-- Blue Hoodie Body -->
                    <path d="M-18 38 L18 38 L15 75 L-15 75 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.5"/>
                    <polygon points="0,44 -6,52 6,52" fill="#facc15"/>

                    <!-- Right Arm: Walking & Carrying the prop -->
                    <g class="story-anim-arm-6steps" style="transform-origin: 18px 45px;">
                        <path d="M18 42 L34 50 L30 56 L15 48 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                        <circle cx="34" cy="52" r="5" fill="#fed7aa"/>
                        ${isCarryingProp ? `
                            <g transform="translate(42, 52)">
                                ${renderCarriedPropItem(propId, 'human')}
                            </g>
                        ` : ''}
                    </g>

                    <!-- Sneakers -->
                    <g class="story-anim-step-leg-left">
                        <rect x="-14" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                        <path d="M-14 93 L3 93 Q7 93 7 97 L7 101 L-14 101 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.2"/>
                        <rect x="-15" y="101" width="23" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                    </g>
                    <g class="story-anim-step-leg-right">
                        <rect x="2" y="75" width="12" height="18" rx="2" fill="#1e293b"/>
                        <path d="M2 93 L19 93 Q23 93 23 97 L23 101 L2 101 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1.2"/>
                        <rect x="1" y="101" width="23" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                    </g>
                </g>
            </g>
        `;
    }

    // ----------------------------------------------------------------------
    // 👧 EVE (GIRL LEAD)
    // ----------------------------------------------------------------------
    if (charId === 'eve') {
        const isAlarmed = (pose === 'alarmed');
        const isCelebrating = (pose === 'celebrating');

        if (isCelebrating) {
            if (propId === 'scooter' && isCarryingProp) {
                return `
                    <g class="${animClass}">
                        <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                            <!-- Head & Pigtails: Cheerful big smile with ribbon bow -->
                            <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                                <!-- Twin Bouncy Golden Blonde Pigtails -->
                                <g class="story-anim-hair-bounce">
                                    <circle cx="-20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                    <path d="M-22 14 Q-30 20 -24 30 Q-18 24 -18 16 Z" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                                    <polygon points="-19,15 -14,12 -16,19" fill="#f43f5e"/>
                                    <polygon points="-19,15 -24,12 -22,19" fill="#f43f5e"/>
                                    <circle cx="-19" cy="15" r="2.2" fill="#fda4af"/>
                                    <circle cx="20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                    <path d="M22 14 Q30 20 24 30 Q18 24 18 16 Z" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                                    <polygon points="19,15 14,12 16,19" fill="#f43f5e"/>
                                    <polygon points="19,15 24,12 22,19" fill="#f43f5e"/>
                                    <circle cx="19" cy="15" r="2.2" fill="#fda4af"/>
                                </g>
                                <!-- Face & Golden Blonde Hair Base -->
                                <circle cx="0" cy="12" r="21" fill="#facc15" stroke="#d97706" stroke-width="1.8"/>
                                <circle cx="0" cy="18" r="18" fill="#fed7aa" stroke="#d97706" stroke-width="1.6"/>
                                <path d="M-15 8 Q0 18 15 8" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                                <path d="M-9 8 Q-4 15 1 9" fill="#fef08a"/>
                                <!-- Bright communicative eyes with double highlights & delicate eyelashes -->
                                <circle cx="-6" cy="18" r="3.6" fill="#1e293b"/>
                                <circle cx="-5" cy="16.5" r="1.3" fill="#fff"/><circle cx="-7" cy="19" r="0.7" fill="#fff"/>
                                <path d="M-9 15 L-11 13 M-6 14 L-6 12" stroke="#1e293b" stroke-width="1" stroke-linecap="round"/>
                                <circle cx="6" cy="18" r="3.6" fill="#1e293b"/>
                                <circle cx="7" cy="16.5" r="1.3" fill="#fff"/><circle cx="5" cy="19" r="0.7" fill="#fff"/>
                                <path d="M9 15 L11 13 M6 14 L6 12" stroke="#1e293b" stroke-width="1" stroke-linecap="round"/>
                                <!-- Rosy Cheeks -->
                                <circle cx="-11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                                <circle cx="11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                                <path d="M-5 24 Q0 32 5 24" stroke="#be123c" stroke-width="2.2" fill="#881337" stroke-linecap="round"/>
                                <path d="M-4 25 Q0 27 4 25" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                            </g>

                            <!-- Coral/Pink Jacket Body with Gold Zipper -->
                            <path d="M-17 38 L17 38 L14 74 L-14 74 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2.2"/>
                            <polygon points="0,42 -5,50 5,50" fill="#fde047"/>

                            <!-- Left Arm: Resting confidently on scooter handlebar -->
                            <path d="M-14 42 L18 45 L15 50 L-11 46 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.8"/>
                            <circle cx="19" cy="46" r="4.2" fill="#fed7aa"/>

                            <!-- Right Arm: Raised high cheering with victory sparkles! -->
                            <path d="M17 42 L27 14 L21 10 L13 38 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                            <circle cx="24" cy="12" r="4.8" fill="#fed7aa"/>
                            <!-- Victory Sparkle Star Bursts -->
                            <g class="story-anim-sparkle-spin" transform="translate(26, -4)">
                                <text x="0" y="0" font-size="14" fill="#facc15">✨</text>
                            </g>
                            <g class="story-anim-sparkle-spin" transform="translate(-16, 20)" style="animation-delay: 0.6s;">
                                <text x="0" y="0" font-size="11" fill="#facc15">✨</text>
                            </g>

                            <!-- Full-Sized Recovered Scooter Mounted on Ground Under Eve -->
                            <g>
                                <!-- Rear Wheel -->
                                <g transform="translate(-24, 98)">
                                    <ellipse cx="0" cy="5" rx="6" ry="2" fill="rgba(0,0,0,0.2)"/>
                                    <circle cx="0" cy="0" r="5.5" fill="#334155" stroke="#1e293b" stroke-width="1.2"/>
                                    <circle cx="0" cy="0" r="2.8" fill="#94a3b8"/>
                                </g>

                                <!-- Pink Scooter Deck -->
                                <path d="M-24 96 L22 96 L20 99 L-24 99 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.5"/>

                                <!-- Front Wheel -->
                                <g transform="translate(24, 98)">
                                    <ellipse cx="0" cy="5" rx="6" ry="2" fill="rgba(0,0,0,0.2)"/>
                                    <circle cx="0" cy="0" r="5.5" fill="#334155" stroke="#1e293b" stroke-width="1.2"/>
                                    <circle cx="0" cy="0" r="2.8" fill="#94a3b8"/>
                                </g>

                                <!-- Steering Column -->
                                <line x1="22" y1="96" x2="21" y2="46" stroke="#db2777" stroke-width="2.5" stroke-linecap="round"/>
                                <!-- T-Handlebars with Sunny Yellow Grips -->
                                <line x1="14" y1="46" x2="28" y2="46" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                            </g>

                            <!-- Both Feet Proudly on Scooter Deck -->
                            <!-- Left Foot -->
                            <g>
                                <rect x="-8" y="74" width="10" height="20" rx="2" fill="#1e293b"/>
                                <path d="M-8 92 L6 92 Q9 92 9 95 L9 97 L-8 97 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.2"/>
                                <rect x="-9" y="97" width="19" height="3" rx="1" fill="#f8fafc" stroke="#94a3b8" stroke-width="0.8"/>
                            </g>
                            <!-- Right Foot -->
                            <g>
                                <rect x="4" y="74" width="10" height="20" rx="2" fill="#1e293b"/>
                                <path d="M4 92 L18 92 Q21 92 21 95 L21 97 L4 97 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.2"/>
                                <rect x="3" y="97" width="19" height="3" rx="1" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
                            </g>
                        </g>
                    </g>
                `;
            }

            return `
                <g class="${animClass}">
                    <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                        <!-- Left Arm: Joyfully raised! -->
                        <path d="M-18 42 L-28 14 L-22 10 L-14 38 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                        <circle cx="-25" cy="12" r="4.8" fill="#fed7aa"/>

                        <!-- Head & Pigtails: Cheerful big smile with ribbon bow -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                            <!-- Twin Bouncy Golden Blonde Pigtails -->
                            <g class="story-anim-hair-bounce">
                                <circle cx="-20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                <path d="M-22 14 Q-30 20 -24 30 Q-18 24 -18 16 Z" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                                <polygon points="-19,15 -14,12 -16,19" fill="#f43f5e"/>
                                <polygon points="-19,15 -24,12 -22,19" fill="#f43f5e"/>
                                <circle cx="-19" cy="15" r="2.2" fill="#fda4af"/>
                                <circle cx="20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                <path d="M22 14 Q30 20 24 30 Q18 24 18 16 Z" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                                <polygon points="19,15 14,12 16,19" fill="#f43f5e"/>
                                <polygon points="19,15 24,12 22,19" fill="#f43f5e"/>
                                <circle cx="19" cy="15" r="2.2" fill="#fda4af"/>
                            </g>
                            <!-- Face & Golden Blonde Hair Base -->
                            <circle cx="0" cy="12" r="21" fill="#facc15" stroke="#d97706" stroke-width="1.8"/>
                            <circle cx="0" cy="18" r="18" fill="#fed7aa" stroke="#d97706" stroke-width="1.6"/>
                            <path d="M-15 8 Q0 18 15 8" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                            <path d="M-9 8 Q-4 15 1 9" fill="#fef08a"/>
                            <!-- Bright communicative eyes with double highlights & delicate eyelashes -->
                            <circle cx="-6" cy="18" r="3.6" fill="#1e293b"/>
                            <circle cx="-5" cy="16.5" r="1.3" fill="#fff"/><circle cx="-7" cy="19" r="0.7" fill="#fff"/>
                            <path d="M-9 15 L-11 13 M-6 14 L-6 12" stroke="#1e293b" stroke-width="1" stroke-linecap="round"/>
                            <circle cx="6" cy="18" r="3.6" fill="#1e293b"/>
                            <circle cx="7" cy="16.5" r="1.3" fill="#fff"/><circle cx="5" cy="19" r="0.7" fill="#fff"/>
                            <path d="M9 15 L11 13 M6 14 L6 12" stroke="#1e293b" stroke-width="1" stroke-linecap="round"/>
                            <!-- Rosy Cheeks -->
                            <circle cx="-11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                            <circle cx="11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                            <path d="M-5 24 Q0 32 5 24" stroke="#be123c" stroke-width="2.2" fill="#881337" stroke-linecap="round"/>
                            <path d="M-4 25 Q0 27 4 25" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                        </g>

                        <!-- Coral/Pink Jacket Body with Gold Zipper -->
                        <path d="M-17 38 L17 38 L14 74 L-14 74 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2.2"/>
                        <polygon points="0,42 -5,50 5,50" fill="#fde047"/>

                        <!-- Right Arm: Raised up holding recovered prop with radiant sparkles! -->
                        <path d="M17 42 L27 14 L21 10 L13 38 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                        <circle cx="24" cy="12" r="4.8" fill="#fed7aa"/>
                        ${isCarryingProp ? `
                            <g transform="translate(26, 4)">
                                ${renderCarriedPropItem(propId, 'human')}
                                <g class="story-anim-sparkle-spin" transform="translate(14, -8)">
                                    <text x="0" y="0" font-size="12" fill="#facc15">✨</text>
                                </g>
                            </g>
                        ` : ''}

                        <!-- Tailored Navy Slacks & Pink/White Sneakers firmly on ground (Y = 175) -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-13" y="74" width="11" height="19" rx="2" fill="#1e293b"/>
                            <path d="M-13 93 L2 93 Q6 93 6 97 L6 101 L-13 101 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.2"/>
                            <rect x="-14" y="101" width="22" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="2" y="74" width="11" height="19" rx="2" fill="#1e293b"/>
                            <path d="M2 93 L18 93 Q22 93 22 97 L22 101 L2 101 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.2"/>
                            <rect x="1" y="101" width="22" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                    </g>
                </g>
            `;
        }

        if (isAlarmed) {
            return `
                <g class="${animClass}">
                    <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                        <!-- Coral/Pink Jacket Body -->
                        <path d="M-17 38 L17 38 L14 74 L-14 74 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2.2"/>
                        <polygon points="0,42 -5,50 5,50" fill="#fde047"/>

                        <!-- Surprised Head & Pigtails -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                            <g class="story-anim-hair-bounce">
                                <circle cx="-20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                <polygon points="-19,15 -14,12 -16,19" fill="#f43f5e"/>
                                <polygon points="-19,15 -24,12 -22,19" fill="#f43f5e"/>
                                <circle cx="-19" cy="15" r="2.2" fill="#fda4af"/>
                                <circle cx="20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                <polygon points="19,15 14,12 16,19" fill="#f43f5e"/>
                                <polygon points="19,15 24,12 22,19" fill="#f43f5e"/>
                                <circle cx="19" cy="15" r="2.2" fill="#fda4af"/>
                            </g>
                            <circle cx="0" cy="12" r="21" fill="#facc15" stroke="#d97706" stroke-width="1.8"/>
                            <circle cx="0" cy="18" r="18" fill="#fed7aa" stroke="#d97706" stroke-width="1.6"/>
                            <path d="M-15 8 Q0 18 15 8" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                            <path d="M-9 8 Q-4 15 1 9" fill="#fef08a"/>
                            <circle cx="-6" cy="17" r="4.2" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
                            <circle cx="-5" cy="17" r="2.2" fill="#1e293b"/>
                            <circle cx="-4" cy="15.5" r="1" fill="#ffffff"/>
                            <circle cx="6" cy="17" r="4.2" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
                            <circle cx="7" cy="17" r="2.2" fill="#1e293b"/>
                            <circle cx="8" cy="15.5" r="1" fill="#ffffff"/>
                            <path d="M-10 9 Q-5 6 0 9" stroke="#b45309" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <path d="M0 9 Q5 6 10 9" stroke="#b45309" stroke-width="2" fill="none" stroke-linecap="round"/>
                            <circle cx="-11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                            <circle cx="11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                            <ellipse cx="0" cy="26" rx="3.5" ry="4.5" fill="#450a0a" stroke="#be123c" stroke-width="1.2"/>
                        </g>

                        <!-- Both Hands Raised to Cheeks in Alarm! -->
                        <path d="M-17 42 L-25 26 L-19 22 L-13 38 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                        <circle cx="-22" cy="23" r="4.5" fill="#fed7aa"/>
                        <path d="M17 42 L25 26 L19 22 L13 38 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                        <circle cx="22" cy="23" r="4.5" fill="#fed7aa"/>

                        <!-- Sneakers -->
                        <g class="story-anim-step-leg-left">
                            <rect x="-13" y="74" width="11" height="19" rx="2" fill="#1e293b"/>
                            <path d="M-13 93 L2 93 Q6 93 6 97 L6 101 L-13 101 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.2"/>
                            <rect x="-14" y="101" width="22" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                        <g class="story-anim-step-leg-right">
                            <rect x="2" y="74" width="11" height="19" rx="2" fill="#1e293b"/>
                            <path d="M2 93 L18 93 Q22 93 22 97 L22 101 L2 101 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.2"/>
                            <rect x="1" y="101" width="22" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                        </g>
                    </g>
                </g>
            `;
        }

        // Exploring Pose (Scene 1)
        if (propId === 'scooter' && isCarryingProp) {
            return `
                <g class="${animClass}">
                    <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                        <!-- Twin Pigtails Streaming in the Wind (Living Action) -->
                        <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                            <g class="story-anim-hair-float">
                                <circle cx="-24" cy="16" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                <polygon points="-22,13 -17,10 -19,17" fill="#f43f5e"/>
                                <polygon points="-22,13 -27,10 -25,17" fill="#f43f5e"/>
                                <circle cx="-22" cy="13" r="2.2" fill="#fda4af"/>
                                <circle cx="16" cy="16" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                                <polygon points="15,13 10,10 12,17" fill="#f43f5e"/>
                                <polygon points="15,13 20,10 18,17" fill="#f43f5e"/>
                                <circle cx="15" cy="13" r="2.2" fill="#fda4af"/>
                            </g>
                            <circle cx="0" cy="12" r="21" fill="#facc15" stroke="#d97706" stroke-width="1.8"/>
                            <circle cx="0" cy="18" r="18" fill="#fed7aa" stroke="#d97706" stroke-width="1.6"/>
                            <path d="M-15 8 Q0 18 15 8" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                            <path d="M-9 8 Q-4 15 1 9" fill="#fef08a"/>
                            <circle cx="6" cy="18" r="3.6" fill="#1e293b"/><circle cx="7" cy="16.5" r="1.3" fill="#fff"/>
                            <circle cx="-11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                            <circle cx="11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                            <path d="M-5 24 Q0 32 5 24" stroke="#be123c" stroke-width="2.2" fill="#881337" stroke-linecap="round"/>
                            <path d="M-4 25 Q0 27 4 25" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                        </g>

                        <!-- Coral/Pink Jacket Body Leaned Forward in Ride -->
                        <path d="M-17 38 L17 38 L14 74 L-14 74 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2.2"/>
                        <polygon points="0,42 -5,50 5,50" fill="#fde047"/>

                        <!-- Left Arm Reaching to Scooter Handlebar Grip -->
                        <path d="M-14 42 L18 45 L15 50 L-11 46 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.8"/>
                        <circle cx="19" cy="46" r="4.2" fill="#fed7aa"/>

                        <!-- Right Arm Reaching to Scooter Handlebar Grip -->
                        <path d="M14 42 L24 45 L21 50 L11 46 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.8"/>
                        <circle cx="25" cy="46" r="4.2" fill="#fed7aa"/>

                        <!-- Kick Scooter Mounted Under Eve (Deck at Y=96, Wheels at Y=98) -->
                        <g>
                            <!-- Rear Wheel with Spinning Spokes & Ground Dust -->
                            <g transform="translate(-24, 98)">
                                <ellipse cx="0" cy="5" rx="6" ry="2" fill="rgba(0,0,0,0.2)"/>
                                <circle cx="0" cy="0" r="5" fill="#334155" stroke="#1e293b" stroke-width="1.2"/>
                                <g class="story-anim-wheel-spin">
                                    <line x1="-4" y1="0" x2="4" y2="0" stroke="#f8fafc" stroke-width="1"/>
                                    <line x1="0" y1="-4" x2="0" y2="4" stroke="#f8fafc" stroke-width="1"/>
                                </g>
                                <!-- Dust Trails Behind Rear Wheel -->
                                <circle cx="-8" cy="2" r="1.5" fill="#cbd5e1" opacity="0.6"/>
                                <circle cx="-13" cy="0" r="1.2" fill="#cbd5e1" opacity="0.4"/>
                            </g>

                            <!-- Pink Scooter Deck -->
                            <path d="M-24 96 L22 96 L20 99 L-24 99 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.5"/>

                            <!-- Front Wheel with Spinning Spokes -->
                            <g transform="translate(24, 98)">
                                <ellipse cx="0" cy="5" rx="6" ry="2" fill="rgba(0,0,0,0.2)"/>
                                <circle cx="0" cy="0" r="5" fill="#334155" stroke="#1e293b" stroke-width="1.2"/>
                                <g class="story-anim-wheel-spin">
                                    <line x1="-4" y1="0" x2="4" y2="0" stroke="#f8fafc" stroke-width="1"/>
                                    <line x1="0" y1="-4" x2="0" y2="4" stroke="#f8fafc" stroke-width="1"/>
                                </g>
                            </g>

                            <!-- Purple/Magenta Steering Column Rising to Handlebars -->
                            <line x1="22" y1="96" x2="21" y2="46" stroke="#db2777" stroke-width="2.5" stroke-linecap="round"/>
                            <!-- T-Handlebars with Sunny Yellow Grips -->
                            <line x1="14" y1="46" x2="28" y2="46" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
                        </g>

                        <!-- Planted Left Foot on Scooter Deck -->
                        <g>
                            <rect x="-8" y="72" width="10" height="22" rx="2" fill="#1e293b"/>
                            <path d="M-8 92 L6 92 Q9 92 9 95 L9 97 L-8 97 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.2"/>
                            <rect x="-9" y="97" width="19" height="3" rx="1" fill="#f8fafc" stroke="#94a3b8" stroke-width="0.8"/>
                        </g>

                        <!-- Hip Joint Group for Right Pushing Leg (Zero translation, pure hip rotation) -->
                        <g transform="translate(8, 74)">
                            <!-- Active Right Pushing/Kicking Leg Rotating Around Hip Joint (0, 0) -->
                            <g class="story-anim-scooter-push" style="transform-origin: 0px 0px;">
                                <rect x="-4" y="-2" width="10" height="20" rx="2" fill="#1e293b"/>
                                <path d="M-4 16 L12 16 Q15 16 15 19 L15 22 L-4 22 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.2"/>
                                <rect x="-5" y="22" width="21" height="3" rx="1" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"/>
                            </g>
                        </g>
                    </g>
                </g>
            `;
        }

        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 105}) scale(${scaleFactor})" style="transform-origin: 0px 105px;">
                    <!-- Left Arm swinging -->
                    <path d="M-17 42 L-26 58 L-20 62 L-13 48 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                    <circle cx="-23" cy="62" r="4.8" fill="#fed7aa"/>

                    <!-- Head & Pigtails -->
                    <g class="story-anim-head-bob" style="transform-origin: 0px 38px;">
                        <!-- Twin Bouncy Golden Blonde Pigtails -->
                        <g class="story-anim-hair-bounce">
                            <circle cx="-20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                            <polygon points="-19,15 -14,12 -16,19" fill="#f43f5e"/>
                            <polygon points="-19,15 -24,12 -22,19" fill="#f43f5e"/>
                            <circle cx="-19" cy="15" r="2.2" fill="#fda4af"/>
                            <circle cx="20" cy="18" r="9" fill="#facc15" stroke="#d97706" stroke-width="1.4"/>
                            <polygon points="19,15 14,12 16,19" fill="#f43f5e"/>
                            <polygon points="19,15 24,12 22,19" fill="#f43f5e"/>
                            <circle cx="19" cy="15" r="2.2" fill="#fda4af"/>
                        </g>
                        <!-- Face & Golden Blonde Hair Base -->
                        <circle cx="0" cy="12" r="21" fill="#facc15" stroke="#d97706" stroke-width="1.8"/>
                        <circle cx="0" cy="18" r="18" fill="#fed7aa" stroke="#d97706" stroke-width="1.6"/>
                        <path d="M-15 8 Q0 18 15 8" fill="#facc15" stroke="#d97706" stroke-width="1.2"/>
                        <path d="M-9 8 Q-4 15 1 9" fill="#fef08a"/>
                        <circle cx="-6" cy="18" r="3.6" fill="#1e293b"/><circle cx="-5" cy="16.5" r="1.3" fill="#fff"/>
                        <circle cx="6" cy="18" r="3.6" fill="#1e293b"/><circle cx="7" cy="16.5" r="1.3" fill="#fff"/>
                        <circle cx="-11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                        <circle cx="11" cy="23" r="3.2" fill="#fda4af" opacity="0.8"/>
                        <path d="M-5 24 Q0 32 5 24" stroke="#be123c" stroke-width="2.2" fill="#881337" stroke-linecap="round"/>
                        <path d="M-4 25 Q0 27 4 25" stroke="#ffffff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
                    </g>

                    <!-- Coral/Pink Jacket Body -->
                    <path d="M-17 38 L17 38 L14 74 L-14 74 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2.2"/>
                    <polygon points="0,42 -5,50 5,50" fill="#fde047"/>

                    <!-- Right Arm: Walking & Carrying the chosen prop -->
                    <g class="story-anim-arm-6steps" style="transform-origin: 17px 45px;">
                        <path d="M17 42 L33 50 L29 56 L14 48 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="2"/>
                        <circle cx="33" cy="52" r="4.8" fill="#fed7aa"/>
                        ${isCarryingProp ? `
                            <g transform="translate(40, 52)">
                                ${renderCarriedPropItem(propId, 'human')}
                            </g>
                        ` : ''}
                    </g>

                    <!-- Sneakers -->
                    <g class="story-anim-step-leg-left">
                        <rect x="-13" y="74" width="11" height="19" rx="2" fill="#1e293b"/>
                        <path d="M-13 93 L2 93 Q6 93 6 97 L6 101 L-13 101 Z" fill="#ec4899" stroke="#db2777" stroke-width="1.2"/>
                        <rect x="-14" y="101" width="22" height="4" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
                    </g>
                    <g class="story-anim-step-leg-right">
                        <rect x="2" y="74" width="11" height="19" rx="2" fill="#1e293b"/>
                        <path d="M2 93 L18 93 Q22 93 22 97 L22 101 L2 101 Z" fill="#f43f5e" stroke="#e11d48" stroke-width="1.2"/>
                        <rect x="1" y="101" width="22" height="4" rx="1.5" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
                    </g>
                </g>
            </g>
        `;
    }

    // ----------------------------------------------------------------------
    // 🐱 CLEO (GREY TABBY CAT LEAD)
    // ----------------------------------------------------------------------
    if (charId === 'cleo') {
        const isAlarmed = (pose === 'alarmed');
        const isCelebrating = (pose === 'celebrating');
        return `
            <g class="${animClass}">
                <g transform="translate(${charX}, ${groundY - 72}) scale(${scaleFactor})" style="transform-origin: 0px 72px;">
                    <!-- Sleek Silver-Grey Tabby Body & Arched Spine -->
                    <path d="M-22 46 C-26 32 -16 24 -2 26 C12 28 22 34 26 48 C22 56 12 58 -2 58 C-16 58 -24 54 -22 46 Z" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>

                    <!-- Dark Charcoal Tabby Tiger Stripes on Back -->
                    <path d="M-10 27 Q-8 35 -4 40" stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                    <path d="M0 26 Q2 34 6 39" stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                    <path d="M10 28 Q12 36 16 41" stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round"/>

                    <!-- Fluffy White Chest Bib -->
                    <path d="M10 32 Q18 36 22 44 Q14 50 6 46 Z" fill="#f8fafc"/>

                    <!-- Teal Velvet Collar with Gold Bell -->
                    <path d="M12 30 Q18 34 24 38" stroke="#0891b2" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="21" cy="40" r="3.2" fill="#facc15" stroke="#b45309" stroke-width="1"/>
                    <circle cx="21" cy="41" r="0.8" fill="#451a03"/>

                    <!-- Head with Tabby Markings & Feline Ears -->
                    <g class="story-anim-cat-head" style="transform-origin: 18px 22px;">
                        <!-- Cheek fur tufts -->
                        <polygon points="6,24 0,28 8,32" fill="#94a3b8"/>
                        <polygon points="28,24 34,28 26,32" fill="#94a3b8"/>

                        <!-- Pointed Triangular Cat Ears with Pink Inner Pads & White Fluff -->
                        <g class="story-anim-cat-ears" style="transform-origin: 18px 12px;">
                            <!-- Left Ear -->
                            <polygon points="7,2 16,16 3,16" fill="#475569" stroke="#334155" stroke-width="1.5"/>
                            <polygon points="8,5 14,15 5,15" fill="#fda4af"/>
                            <line x1="8" y1="11" x2="11" y2="13" stroke="#f8fafc" stroke-width="1.2"/>
                            <!-- Right Ear -->
                            <polygon points="21,2 30,16 17,16" fill="#475569" stroke="#334155" stroke-width="1.5"/>
                            <polygon points="22,5 28,15 19,15" fill="#fda4af"/>
                            <line x1="22" y1="11" x2="25" y2="13" stroke="#f8fafc" stroke-width="1.2"/>
                        </g>

                        <!-- Silver-Grey Head Base -->
                        <circle cx="17" cy="22" r="17" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>

                        <!-- Signature Tabby 'M' Forehead Marking -->
                        <path d="M11 9 L14 15 L17 10 L20 15 L23 9" stroke="#334155" stroke-width="1.6" fill="none" stroke-linecap="round"/>

                        ${isCelebrating ? `
                            <!-- Joyful Luminous Emerald Cat Eyes in Scene 3 with Golden Victory Catchlights -->
                            <!-- Left Eye -->
                            <path d="M8 20 Q12.5 15 17 20 Q12.5 24 8 20 Z" fill="#10b981" stroke="#0f172a" stroke-width="1.4"/>
                            <ellipse cx="12.5" cy="20" rx="1.6" ry="2.6" fill="#0f172a"/>
                            <circle cx="11.5" cy="18.8" r="1.1" fill="#ffffff"/>
                            <circle cx="13.5" cy="21" r="0.6" fill="#facc15"/>
                            <!-- Right Eye -->
                            <path d="M18 20 Q22 15 26 20 Q22 24 18 20 Z" fill="#10b981" stroke="#0f172a" stroke-width="1.4"/>
                            <ellipse cx="22" cy="20" rx="1.6" ry="2.6" fill="#0f172a"/>
                            <circle cx="21" cy="18.8" r="1.1" fill="#ffffff"/>
                            <circle cx="23" cy="21" r="0.6" fill="#facc15"/>
                        ` : isAlarmed ? `
                            <!-- Wide Curious/Startled Feline Eyes in Scene 2 Looking at Stuck Prop -->
                            <!-- Left Eye -->
                            <circle cx="12.5" cy="20" r="4.2" fill="#10b981" stroke="#0f172a" stroke-width="1.4"/>
                            <circle cx="12.5" cy="20" r="2.6" fill="#0f172a"/>
                            <circle cx="11.2" cy="18.8" r="1.2" fill="#ffffff"/>
                            <circle cx="13.8" cy="21.2" r="0.6" fill="#ffffff"/>
                            <!-- Right Eye -->
                            <circle cx="22" cy="20" r="4.2" fill="#10b981" stroke="#0f172a" stroke-width="1.4"/>
                            <circle cx="22" cy="20" r="2.6" fill="#0f172a"/>
                            <circle cx="20.8" cy="18.8" r="1.2" fill="#ffffff"/>
                            <circle cx="23.2" cy="21.2" r="0.6" fill="#ffffff"/>
                        ` : `
                            <!-- Large Luminous Feline Almond Eyes with Slit Pupil & Dual Highlights -->
                            <!-- Left Eye -->
                            <path d="M8 20 Q12.5 15 17 20 Q12.5 24 8 20 Z" fill="#10b981" stroke="#0f172a" stroke-width="1.4"/>
                            <ellipse cx="12.5" cy="20" rx="1.4" ry="2.8" fill="#0f172a"/>
                            <circle cx="11.5" cy="18.8" r="0.9" fill="#ffffff"/>
                            <circle cx="13.5" cy="21" r="0.5" fill="#ffffff"/>
                            <!-- Right Eye -->
                            <path d="M18 20 Q22 15 26 20 Q22 24 18 20 Z" fill="#10b981" stroke="#0f172a" stroke-width="1.4"/>
                            <ellipse cx="22" cy="20" rx="1.4" ry="2.8" fill="#0f172a"/>
                            <circle cx="21" cy="18.8" r="0.9" fill="#ffffff"/>
                            <circle cx="23" cy="21" r="0.5" fill="#ffffff"/>
                        `}

                        <!-- White Muzzle Cheek Pads -->
                        <ellipse cx="15" cy="27" rx="3.5" ry="2.5" fill="#f8fafc"/>
                        <ellipse cx="20" cy="27" rx="3.5" ry="2.5" fill="#f8fafc"/>

                        <!-- Cute Pink Triangular Nose & 'w' Cat Smile -->
                        <polygon points="16,25 19,25 17.5,27.5" fill="#f43f5e"/>
                        <path d="M15 28 Q16.5 30 17.5 28.5 Q18.5 30 20 28" stroke="#334155" stroke-width="1.2" fill="none" stroke-linecap="round"/>

                        <!-- Delicate Curving White Whiskers (3 on each side) -->
                        <g stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" opacity="0.95">
                            <line x1="12" y1="26" x2="-2" y2="24"/>
                            <line x1="12" y1="28" x2="-3" y2="28"/>
                            <line x1="12" y1="30" x2="-1" y2="32"/>
                            <line x1="23" y1="26" x2="36" y2="24"/>
                            <line x1="23" y1="28" x2="37" y2="28"/>
                            <line x1="23" y1="30" x2="35" y2="32"/>
                        </g>
                    </g>

                    <!-- Long Graceful S-Curving Tabby Tail with Dark Rings & Tip -->
                    <g class="${isCelebrating ? 'story-anim-rover-tail-fast' : 'story-anim-rover-tail'}" style="transform-origin: -20px 46px;">
                        <path d="M-20 46 C-32 40 -38 25 -32 14 C-28 6 -20 8 -22 14 C-24 20 -28 32 -18 40" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
                        <!-- Dark Tabby Rings on Tail -->
                        <path d="M-28 36 C-32 30 -33 24 -30 18" stroke="#334155" stroke-width="2" fill="none" stroke-linecap="round"/>
                        <path d="M-32 16 C-30 10 -24 8 -22 14" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round"/>
                    </g>

                    <!-- Paws with White Mittens firmly touching ground baseline (groundY = 175) -->
                    <!-- Hind Paw -->
                    <g class="story-anim-step-leg-left">
                        <rect x="-16" y="52" width="10" height="15" rx="3" fill="#64748b"/>
                        <ellipse cx="-11" cy="67" rx="8" ry="4.5" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
                        <line x1="-13" y1="65" x2="-13" y2="69" stroke="#94a3b8" stroke-width="1"/>
                        <line x1="-9" y1="65" x2="-9" y2="69" stroke="#94a3b8" stroke-width="1"/>
                    </g>
                    <!-- Front Paw -->
                    <g class="story-anim-step-leg-right">
                        <rect x="14" y="50" width="9" height="17" rx="3" fill="#94a3b8"/>
                        <ellipse cx="19" cy="67" rx="8" ry="4.5" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
                        <line x1="17" y1="65" x2="17" y2="69" stroke="#94a3b8" stroke-width="1"/>
                        <line x1="21" y1="65" x2="21" y2="69" stroke="#94a3b8" stroke-width="1"/>
                    </g>

                    <!-- Carried Prop at Paws / Mouth -->
                    ${isCarryingProp ? `
                        <g transform="translate(24, 62)">
                            ${renderCarriedPropItem(propId, 'cat')}
                            ${isCelebrating ? `
                                <g class="story-anim-sparkle-spin" transform="translate(14, -8)">
                                    <text x="0" y="0" font-size="12" fill="#facc15">✨</text>
                                </g>
                            ` : ''}
                        </g>
                    ` : ''}
                </g>
            </g>
        `;
    }

    // ----------------------------------------------------------------------
    // 🐶 MAX THE PUPPY (DEFAULT PUPPY LEAD)
    // ----------------------------------------------------------------------
    const isAlarmed = (pose === 'alarmed');
    const isCelebrating = (pose === 'celebrating');

    return `
        <g class="${animClass}">
            <g transform="translate(${charX}, ${groundY - 69.5}) scale(${scaleFactor})" style="transform-origin: 0px 69.5px;">
                <ellipse cx="0" cy="35" rx="32" ry="22" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
                <!-- Max's Signature Red Collar with Gold Bell (Always part of hero) -->
                <rect x="18" y="24" width="7" height="22" rx="2" fill="#ef4444"/>
                <circle cx="21" cy="48" r="4.5" fill="#facc15" stroke="#b45309" stroke-width="1.5"/>

                <!-- Head with Wiggling Ear -->
                <g class="story-anim-puppy-head" style="transform-origin: 20px 30px;">
                    <circle cx="28" cy="24" r="19" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
                    <g class="story-anim-puppy-ear" style="transform-origin: 20px 14px;">
                        <ellipse cx="20" cy="${isAlarmed ? '14' : '22'}" rx="7" ry="${isAlarmed ? '11' : '14'}" fill="#b45309"/>
                    </g>
                    <!-- Twinkling Eyes with highlights -->
                    <circle cx="32" cy="20" r="3.5" fill="#1e293b"/><circle cx="33" cy="18" r="1.2" fill="#fff"/>
                    <ellipse cx="42" cy="24" rx="4" ry="3" fill="#1e293b"/>

                    <!-- Mouth / Carried Prop -->
                    ${(isCarryingProp && !(isCelebrating && (propId === 'bone' || propId === 'biscuit'))) ? `
                        <g transform="translate(44, 26)">
                            ${renderCarriedPropItem(propId, 'puppy')}
                        </g>
                    ` : `
                        <!-- Panting Tongue -->
                        <g class="story-anim-puppy-tongue" style="transform-origin: 38px 28px;">
                            <ellipse cx="38" cy="32" rx="3.5" ry="${isCelebrating ? '7' : '5.5'}" fill="#f43f5e"/>
                        </g>
                    `}
                </g>

                <!-- Fast Wagging Tail on celebration -->
                <g class="${isCelebrating ? 'story-anim-rover-tail-fast' : 'story-anim-rover-tail'}" style="transform-origin: -28px 35px;">
                    <path d="M-28 35 Q-48 18 -40 5" stroke="#f59e0b" stroke-width="8" stroke-linecap="round" fill="none"/>
                    <path d="M-28 35 Q-48 18 -40 5" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                </g>

                <!-- Paws firmly on ground (Y = 175) -->
                <g class="story-anim-step-leg-left">
                    <rect x="-18" y="48" width="9" height="15" rx="3" fill="#d97706"/>
                    <ellipse cx="-12" cy="65" rx="9" ry="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                </g>
                <g class="story-anim-step-leg-right">
                    <rect x="14" y="48" width="9" height="15" rx="3" fill="#f59e0b"/>
                    <ellipse cx="20" cy="65" rx="9" ry="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
                </g>

                <!-- Scene 3: Chewed reward bone or biscuit resting at Max's paws with crumbs & sparkles! -->
                ${isCelebrating && propId === 'bone' ? `
                    <g transform="translate(16, 62)">
                        ${renderCarriedPropItem('bone', 'puppy')}
                        <g class="story-anim-sparkle-spin" transform="translate(14, -6)">
                            <text x="0" y="0" font-size="11" fill="#facc15">✨</text>
                        </g>
                    </g>
                ` : ''}
                ${isCelebrating && propId === 'biscuit' ? `
                    <g transform="translate(16, 62)">
                        ${renderCarriedPropItem('biscuit', 'puppy')}
                        <g class="story-anim-sparkle-spin" transform="translate(14, -6)">
                            <text x="0" y="0" font-size="11" fill="#facc15">✨</text>
                        </g>
                    </g>
                ` : ''}
            </g>
        </g>
    `;
}

function renderBeginnerPropSVG(propId, px, py, scale = 1, isProblem = false, settingId = 'park') {
    // Dynamic Catalyst Animation Classes based on prop physics
    let propAnimClass = 'story-anim-prop-hover-gentle';
    let shadowAnimClass = 'story-anim-prop-shadow-expand';

    if (propId === 'ball' || propId === 'soccer' || propId === 'yoyo') {
        propAnimClass = 'story-anim-prop-bounce-active';
        shadowAnimClass = 'story-anim-prop-shadow-expand';
    } else if (propId === 'frisbee' || propId === 'kite' || propId === 'glider' || propId === 'bubbles' || propId === 'feather' || propId === 'ribbon') {
        propAnimClass = 'story-anim-prop-hover-gentle';
        shadowAnimClass = 'story-anim-prop-hover-gentle';
    } else if (propId === 'mouse' || propId === 'rope' || propId === 'camera' || propId === 'scooter' || propId === 'bell') {
        propAnimClass = 'story-anim-prop-wobble-play';
        shadowAnimClass = '';
    } else {
        propAnimClass = 'story-anim-prop-hover-gentle';
        shadowAnimClass = 'story-anim-prop-shadow-expand';
    }

    return `
        <g transform="translate(${px}, ${py}) scale(${scale})">
            <!-- Dynamic Catalyst Stage Aura Rings (Highlights Mission Item) -->
            <circle cx="0" cy="8" r="16" fill="none" stroke="#f59e0b" stroke-width="1.6" class="story-anim-catalyst-glow-ring"/>
            <circle cx="0" cy="8" r="26" fill="none" stroke="#facc15" stroke-width="1.0" class="story-anim-catalyst-glow-ring" style="animation-delay: 1.2s;"/>

            <!-- Floating Twinkle Stars around Catalyst Prop -->
            <g transform="translate(-16, -16)">
                <g class="story-anim-star-twinkle-fast">
                    <polygon points="0,-4 1.2,-1.2 4,0 1.2,1.2 0,4 -1.2,1.2 -4,0 -1.2,-1.2" fill="#facc15" filter="drop-shadow(0 0 4px #fde047)"/>
                </g>
            </g>
            <g transform="translate(18, -12)">
                <g class="story-anim-star-twinkle-fast" style="animation-delay: 0.75s;">
                    <polygon points="0,-3.5 1,-1 3.5,0 1,1 0,3.5 -1,1 -3.5,0 -1,-1" fill="#38bdf8" filter="drop-shadow(0 0 4px #7dd3fc)"/>
                </g>
            </g>

            ${isProblem ? `
                <!-- Kinetic Trajectory Momentum Trail into Landmark -->
                <path d="M -95 -12 Q -45 -22 -10 -2" stroke="#ef4444" stroke-width="2.2" stroke-dasharray="4,4" fill="none" opacity="0.85"/>
                <!-- Ground Impact Dust Puff (Living Action) -->
                <g class="story-anim-dust-puff" transform="translate(-18, 4)">
                    <circle cx="0" cy="0" r="5" fill="#d97706" opacity="0.4"/>
                    <circle cx="4" cy="-2" r="3" fill="#fbbf24" opacity="0.5"/>
                    <circle cx="-3" cy="2" r="2.5" fill="#f59e0b" opacity="0.45"/>
                </g>
            ` : ''}

            <!-- Responsive Ground Contact Shadow (Breathes/Squishes in Sync) -->
            <g class="${shadowAnimClass}">
                <ellipse cx="0" cy="8" rx="14" ry="4" fill="rgba(0,0,0,0.25)"/>
            </g>

            <!-- Dynamic Animated Catalyst Prop (Nested Transform Pattern) -->
            <g class="${propAnimClass}">
                ${renderCarriedPropItem(propId, 'held')}
            </g>

            ${isProblem ? `
                <!-- Stuck Action Momentum Rings (Active Alarm) -->
                <circle cx="0" cy="0" r="16" fill="none" stroke="#ef4444" stroke-width="1.4" stroke-dasharray="3,3" opacity="0.8" class="story-anim-sound-wave-ping"/>
            ` : ''}
        </g>
    `;
}

function getTwistButterflySVG(x, y, scale, rot, fore, inner, trim, floatClass) {
    return `
    <g transform="translate(${x}, ${y})">
        <g class="${floatClass}">
            <g transform="scale(${scale}) rotate(${rot})">
                <!-- Left Wing -->
                <g class="story-anim-wing-left">
                    <path d="M 0,-2 C -8,-14 -20,-12 -16,0 C -14,6 -4,5 0,2 Z" fill="${fore}" stroke="${trim}" stroke-width="0.9"/>
                    <path d="M -2,-1 C -8,-9 -14,-7 -11,-1 C -9,4 -4,3 -2,-1 Z" fill="${inner}" opacity="0.85"/>
                    <path d="M 0,2 C -7,5 -12,12 -7,15 C -3,17 -1,8 0,3 Z" fill="${fore}" stroke="${trim}" stroke-width="0.8"/>
                    <path d="M -1,3 C -5,7 -8,11 -5,13 C -2,14 -1,8 -1,3 Z" fill="${inner}" opacity="0.85"/>
                </g>
                <!-- Right Wing -->
                <g class="story-anim-wing-right">
                    <path d="M 0,-2 C 8,-14 20,-12 16,0 C 14,6 4,5 0,2 Z" fill="${fore}" stroke="${trim}" stroke-width="0.9"/>
                    <path d="M 2,-1 C 8,-9 14,-7 11,-1 C 9,4 4,3 2,-1 Z" fill="${inner}" opacity="0.85"/>
                    <path d="M 0,2 C 7,5 12,12 7,15 C 3,17 1,8 0,3 Z" fill="${fore}" stroke="${trim}" stroke-width="0.8"/>
                    <path d="M 1,3 C 5,7 8,11 5,13 C 2,14 1,8 1,3 Z" fill="${inner}" opacity="0.85"/>
                </g>
                <!-- Slender Thorax, Head & Antennae -->
                <ellipse cx="0" cy="1" rx="1.8" ry="7" fill="#18181b"/>
                <circle cx="0" cy="-6" r="1.6" fill="#18181b"/>
                <path d="M -0.5,-7 C -3,-12 -6,-13 -7,-12" fill="none" stroke="#18181b" stroke-width="0.8" stroke-linecap="round"/>
                <circle cx="-7" cy="-12" r="0.8" fill="#18181b"/>
                <path d="M 0.5,-7 C 3,-12 6,-13 7,-12" fill="none" stroke="#18181b" stroke-width="0.8" stroke-linecap="round"/>
                <circle cx="7" cy="-12" r="0.8" fill="#18181b"/>
            </g>
        </g>
    </g>
    `;
}

function getTwistLeafSVG(x, y, scale, rot, type, color, strokeColor, animClass) {
    let shape = '';
    if (type === 'maple') {
        shape = `
            <path d="M 0,-14 L 3,-6 L 10,-8 L 6,1 L 11,9 L 4,7 L 0,14 L -4,7 L -11,9 L -6,1 L -10,-8 L -3,-6 Z" fill="${color}" stroke="${strokeColor}" stroke-width="0.9"/>
            <line x1="0" y1="14" x2="0" y2="18" stroke="${strokeColor}" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="0" y1="-8" x2="0" y2="13" stroke="${strokeColor}" stroke-width="0.6"/>
        `;
    } else if (type === 'oak') {
        shape = `
            <path d="M 0,-13 C 5,-10 7,-4 3,-1 C 9,2 8,7 2,10 C 6,12 4,16 0,17 C -4,16 -6,12 -2,10 C -8,7 -9,2 -3,-1 C -7,-4 -5,-10 0,-13 Z" fill="${color}" stroke="${strokeColor}" stroke-width="0.9"/>
            <line x1="0" y1="17" x2="0" y2="21" stroke="${strokeColor}" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="0" y1="-10" x2="0" y2="16" stroke="${strokeColor}" stroke-width="0.6"/>
        `;
    } else { // birch
        shape = `
            <path d="M 0,-13 C 8,-9 11,2 0,13 C -11,2 -8,-9 0,-13 Z" fill="${color}" stroke="${strokeColor}" stroke-width="0.9"/>
            <line x1="0" y1="13" x2="0" y2="17" stroke="${strokeColor}" stroke-width="1.2" stroke-linecap="round"/>
            <line x1="0" y1="-10" x2="0" y2="12" stroke="${strokeColor}" stroke-width="0.6"/>
        `;
    }
    return `
    <g transform="translate(${x}, ${y})">
        <g class="${animClass}">
            <g transform="scale(${scale}) rotate(${rot})">
                ${shape}
            </g>
        </g>
    </g>
    `;
}

function getTwistFireflySVG(x, y, auraR, coreR, glowClass, bobClass) {
    return `
    <g transform="translate(${x}, ${y})">
        <g class="${bobClass}">
            <circle cx="0" cy="0" r="${auraR}" fill="url(#fireflyAura)" class="${glowClass}"/>
            <circle cx="0" cy="0" r="${coreR}" fill="#ffffff"/>
            <ellipse cx="1" cy="-1" rx="1.6" ry="2.6" fill="#1e293b"/>
        </g>
    </g>
    `;
}

function renderEnvironmentalTwistOverlay(twist, panelIdx) {
    if (!twist) return '';

    const isClimax = (panelIdx === 1);
    const isResolution = (panelIdx === 2);

    const label = `${twist.icon} ${twist.title || 'Twist!'}`;
    const badgeW = Math.max(160, Math.round(label.length * 6.5) + 26);
    // Twist Badge Pill on Panel 2 (The Problem) - Centered in open upper sky to avoid blocking background graphics
    const badge = isClimax ? `
        <g transform="translate(200, 14)">
            <g class="story-anim-twist-badge">
                <rect x="${-badgeW / 2}" y="0" width="${badgeW}" height="25" rx="12.5" fill="#6d28d9" opacity="0.94" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.35))"/>
                <text x="0" y="16.5" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="bold" letter-spacing="0.2">${label}</text>
            </g>
        </g>
    ` : '';

    let visualFx = '';

    if (twist.id === 'sun_shower') {
        if (isClimax) {
            // Phase 1 (Panel 2): Sudden Sun Shower Rainfall
            visualFx = `
            <!-- 24 Sparkling Slanted Sun-Shower Raindroplets in Clear View Across Canvas -->
            <g stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round" opacity="0.9">
                <line x1="40" y1="35" x2="32" y2="52" class="story-anim-raindrop-1"/>
                <line x1="85" y1="45" x2="77" y2="62" class="story-anim-raindrop-2"/>
                <line x1="140" y1="30" x2="132" y2="47" class="story-anim-raindrop-3"/>
                <line x1="190" y1="40" x2="182" y2="57" class="story-anim-raindrop-1"/>
                <line x1="240" y1="35" x2="232" y2="52" class="story-anim-raindrop-2"/>
                <line x1="290" y1="45" x2="282" y2="62" class="story-anim-raindrop-3"/>
                <line x1="335" y1="30" x2="327" y2="47" class="story-anim-raindrop-1"/>
                <line x1="380" y1="40" x2="372" y2="57" class="story-anim-raindrop-2"/>

                <line x1="60" y1="85" x2="52" y2="102" class="story-anim-raindrop-3"/>
                <line x1="115" y1="90" x2="107" y2="107" class="story-anim-raindrop-1"/>
                <line x1="165" y1="80" x2="157" y2="97" class="story-anim-raindrop-2"/>
                <line x1="215" y1="95" x2="207" y2="112" class="story-anim-raindrop-3"/>
                <line x1="265" y1="85" x2="257" y2="102" class="story-anim-raindrop-1"/>
                <line x1="315" y1="90" x2="307" y2="107" class="story-anim-raindrop-2"/>
                <line x1="360" y1="80" x2="352" y2="97" class="story-anim-raindrop-3"/>

                <line x1="50" y1="130" x2="42" y2="147" class="story-anim-raindrop-2"/>
                <line x1="100" y1="135" x2="92" y2="152" class="story-anim-raindrop-1"/>
                <line x1="150" y1="125" x2="142" y2="142" class="story-anim-raindrop-3"/>
                <line x1="200" y1="135" x2="192" y2="152" class="story-anim-raindrop-2"/>
                <line x1="250" y1="130" x2="242" y2="147" class="story-anim-raindrop-1"/>
                <line x1="300" y1="135" x2="292" y2="152" class="story-anim-raindrop-3"/>
                <line x1="350" y1="125" x2="342" y2="142" class="story-anim-raindrop-2"/>
            </g>
            <!-- Ground Rain Splash Ripples -->
            <g stroke="#93c5fd" stroke-width="1.3" fill="none">
                <ellipse cx="65" cy="180" rx="7" ry="2.5" class="story-anim-rain-ripple"/>
                <ellipse cx="150" cy="182" rx="6" ry="2.2" class="story-anim-rain-ripple" style="animation-delay: 0.3s;"/>
                <ellipse cx="230" cy="185" rx="8" ry="2.7" class="story-anim-rain-ripple" style="animation-delay: 0.6s;"/>
                <ellipse cx="310" cy="180" rx="7" ry="2.4" class="story-anim-rain-ripple" style="animation-delay: 0.9s;"/>
                <ellipse cx="365" cy="183" rx="6" ry="2.2" class="story-anim-rain-ripple" style="animation-delay: 0.4s;"/>
            </g>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 3): Rain Clears, Glorious Rainbow Shines Over Victory!
            visualFx = `
            <!-- Full Radiant Rainbow Arc (Rain has cleared!) -->
            <g class="story-anim-rainbow-glow">
                <ellipse cx="200" cy="275" rx="220" ry="190" fill="none" stroke="#ef4444" stroke-width="3.8" opacity="0.8"/>
                <ellipse cx="200" cy="275" rx="216" ry="186" fill="none" stroke="#f97316" stroke-width="3.8" opacity="0.8"/>
                <ellipse cx="200" cy="275" rx="212" ry="182" fill="none" stroke="#eab308" stroke-width="3.8" opacity="0.8"/>
                <ellipse cx="200" cy="275" rx="208" ry="178" fill="none" stroke="#22c55e" stroke-width="3.8" opacity="0.8"/>
                <ellipse cx="200" cy="275" rx="204" ry="174" fill="none" stroke="#06b6d4" stroke-width="3.8" opacity="0.8"/>
                <ellipse cx="200" cy="275" rx="200" ry="170" fill="none" stroke="#8b5cf6" stroke-width="3.8" opacity="0.8"/>
            </g>
            <!-- Fresh Ground Rain Water Reflections -->
            <g stroke="#93c5fd" stroke-width="1.2" fill="none" opacity="0.7">
                <ellipse cx="140" cy="180" rx="9" ry="3"/>
                <ellipse cx="260" cy="183" rx="11" ry="3.5"/>
            </g>
            `;
        }
    } else if (twist.id === 'wind_gust') {
        if (isClimax) {
            // Phase 1 (Panel 2): Wild Gale Gusts & Tumbling Autumn Leaves
            visualFx = `
            <!-- Wind Gust Racing Streamlines -->
            <g opacity="0.85">
                <path d="M -15,35 C 75,18 175,55 265,30 C 315,15 355,25 415,20" fill="none" stroke="rgba(255,255,255,0.78)" stroke-width="2.5" stroke-dasharray="14 10" stroke-linecap="round" class="story-anim-wind-stream-1"/>
                <path d="M 265,30 C 285,20 300,32 290,42 C 280,50 265,42 273,34" fill="none" stroke="rgba(255,255,255,0.78)" stroke-width="2" stroke-linecap="round"/>
                <path d="M -25,85 C 85,65 185,110 295,75 C 345,60 375,70 425,65" fill="none" stroke="rgba(255,255,255,0.68)" stroke-width="2.2" stroke-dasharray="16 12" stroke-linecap="round" class="story-anim-wind-stream-2"/>
                <path d="M 35,135 C 125,118 215,155 315,132 C 365,122 395,132 435,128" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.8" stroke-dasharray="10 8" stroke-linecap="round" class="story-anim-wind-stream-1"/>
                <path d="M 70,165 C 160,150 250,175 350,155" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.5" stroke-dasharray="8 6" stroke-linecap="round" class="story-anim-wind-stream-2"/>
            </g>
            <!-- 11 Tumbling Autumn Leaves Across the Whole Screen (Protected by Nested Groups) -->
            <g id="windAutumnLeaves">
                ${getTwistLeafSVG(75, 45, 1.0, -25, 'maple', '#dc2626', '#991b1b', 'story-anim-wind-leaf-1')}
                ${getTwistLeafSVG(50, 105, 0.95, 30, 'birch', '#b45309', '#78350f', 'story-anim-wind-leaf-2')}
                ${getTwistLeafSVG(120, 85, 1.0, -15, 'oak', '#f59e0b', '#d97706', 'story-anim-wind-leaf-3')}
                ${getTwistLeafSVG(160, 145, 0.9, 40, 'birch', '#f59e0b', '#b45309', 'story-anim-wind-leaf-4')}
                ${getTwistLeafSVG(205, 52, 1.05, -30, 'oak', '#f59e0b', '#d97706', 'story-anim-wind-leaf-5')}
                ${getTwistLeafSVG(230, 90, 1.1, 25, 'maple', '#ea580c', '#c2410c', 'story-anim-wind-leaf-1')}
                ${getTwistLeafSVG(275, 135, 0.95, -10, 'birch', '#ea580c', '#9a3412', 'story-anim-wind-leaf-2')}
                ${getTwistLeafSVG(295, 75, 1.0, 35, 'maple', '#84cc16', '#65a30d', 'story-anim-wind-leaf-3')}
                ${getTwistLeafSVG(335, 40, 1.0, -20, 'maple', '#ea580c', '#c2410c', 'story-anim-wind-leaf-4')}
                ${getTwistLeafSVG(340, 145, 0.95, 15, 'oak', '#dc2626', '#991b1b', 'story-anim-wind-leaf-5')}
                ${getTwistLeafSVG(375, 95, 1.0, -35, 'birch', '#b45309', '#78350f', 'story-anim-wind-leaf-1')}
            </g>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 3): Gentle Breeze, Leaves Carpet the Ground in Celebration
            visualFx = `
            <!-- Gentle Soft Breeze Streamline -->
            <path d="M 60,65 C 160,50 260,75 360,55" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" stroke-dasharray="12 8" stroke-linecap="round" class="story-anim-wind-stream-1"/>
            <!-- 4 Leaves Drifting Gently in Sky -->
            ${getTwistLeafSVG(110, 60, 0.9, 15, 'oak', '#f59e0b', '#d97706', 'story-anim-wind-leaf-3')}
            ${getTwistLeafSVG(280, 55, 0.95, -20, 'maple', '#ea580c', '#c2410c', 'story-anim-wind-leaf-1')}
            <!-- Autumn Leaves Carpet Along the Meadow Floor Under Hero -->
            ${getTwistLeafSVG(120, 178, 0.9, 65, 'maple', '#dc2626', '#991b1b', 'story-anim-wind-leaf-2')}
            ${getTwistLeafSVG(155, 182, 0.85, -45, 'birch', '#b45309', '#78350f', 'story-anim-wind-leaf-4')}
            ${getTwistLeafSVG(245, 180, 0.95, 30, 'oak', '#f59e0b', '#d97706', 'story-anim-wind-leaf-5')}
            ${getTwistLeafSVG(275, 184, 0.85, -15, 'maple', '#ea580c', '#c2410c', 'story-anim-wind-leaf-1')}
            ${getTwistLeafSVG(320, 181, 0.9, 50, 'birch', '#ea580c', '#9a3412', 'story-anim-wind-leaf-3')}
            ${getTwistLeafSVG(360, 179, 0.85, -60, 'maple', '#84cc16', '#65a30d', 'story-anim-wind-leaf-2')}
            `;
        }
    } else if (twist.id === 'butterfly_swarm') {
        if (isClimax) {
            // Phase 1 (Panel 2): Flurry Across All Screen Quadrants
            visualFx = `
            <!-- Pollen & Golden Sparkle Dust Across Mid-Air -->
            <g fill="#fde047" opacity="0.85" class="story-anim-pollen-sparkle">
                <circle cx="65" cy="70" r="1.8"/>
                <circle cx="115" cy="110" r="2.2"/>
                <circle cx="155" cy="55" r="1.8"/>
                <circle cx="185" cy="130" r="2.0"/>
                <circle cx="215" cy="85" r="2.2"/>
                <circle cx="260" cy="60" r="1.8"/>
                <circle cx="280" cy="135" r="2.0"/>
                <circle cx="325" cy="90" r="2.2"/>
                <circle cx="360" cy="55" r="1.8"/>
                <circle cx="370" cy="130" r="2.0"/>
            </g>
            <!-- 11 Large Butterflies in Clear View Across Canvas (Protected by Nested Groups) -->
            <g id="flockOfButterflies">
                ${getTwistButterflySVG(55, 85, 0.95, -12, '#7c3aed', '#c084fc', '#5b21b6', 'story-anim-butterfly-float-1')}
                ${getTwistButterflySVG(95, 125, 1.0, 15, '#059669', '#6ee7b7', '#047857', 'story-anim-butterfly-float-2')}
                ${getTwistButterflySVG(135, 70, 0.95, -8, '#0284c7', '#38bdf8', '#0369a1', 'story-anim-butterfly-float-3')}
                ${getTwistButterflySVG(165, 155, 0.9, 20, '#eab308', '#fef08a', '#ca8a04', 'story-anim-butterfly-float-4')}
                ${getTwistButterflySVG(190, 54, 1.05, -15, '#ea580c', '#fbbf24', '#9a3412', 'story-anim-butterfly-float-5')}
                ${getTwistButterflySVG(235, 100, 1.1, 10, '#ea580c', '#fbbf24', '#9a3412', 'story-anim-butterfly-float-1')}
                ${getTwistButterflySVG(255, 150, 0.9, -18, '#7c3aed', '#c084fc', '#5b21b6', 'story-anim-butterfly-float-2')}
                ${getTwistButterflySVG(290, 120, 1.0, 12, '#0284c7', '#38bdf8', '#0369a1', 'story-anim-butterfly-float-3')}
                ${getTwistButterflySVG(295, 50, 1.0, -10, '#e11d48', '#f472b6', '#be185d', 'story-anim-butterfly-float-4')}
                ${getTwistButterflySVG(345, 115, 0.95, 18, '#e11d48', '#f472b6', '#be185d', 'story-anim-butterfly-float-5')}
                ${getTwistButterflySVG(370, 65, 0.9, -15, '#eab308', '#fef08a', '#ca8a04', 'story-anim-butterfly-float-1')}
            </g>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 3): Butterflies Form Celebratory Halo Around Hero and Rescued Prop!
            visualFx = `
            <!-- Pollen & Golden Sparkles -->
            <g fill="#fde047" opacity="0.9" class="story-anim-pollen-sparkle">
                <circle cx="160" cy="95" r="2.2"/>
                <circle cx="215" cy="85" r="2.4"/>
                <circle cx="270" cy="95" r="2.2"/>
                <circle cx="215" cy="130" r="2.0"/>
            </g>
            <!-- Butterflies Gathered Happily Around Victorious Hero -->
            <g id="celebratingButterflies">
                ${getTwistButterflySVG(130, 95, 1.0, 15, '#ea580c', '#fbbf24', '#9a3412', 'story-anim-butterfly-float-1')}
                ${getTwistButterflySVG(150, 55, 0.95, -12, '#0284c7', '#38bdf8', '#0369a1', 'story-anim-butterfly-float-2')}
                ${getTwistButterflySVG(215, 45, 1.1, 8, '#e11d48', '#f472b6', '#be185d', 'story-anim-butterfly-float-3')}
                ${getTwistButterflySVG(280, 55, 0.95, 18, '#eab308', '#fef08a', '#ca8a04', 'story-anim-butterfly-float-4')}
                ${getTwistButterflySVG(300, 95, 1.0, -15, '#7c3aed', '#c084fc', '#5b21b6', 'story-anim-butterfly-float-5')}
                ${getTwistButterflySVG(145, 145, 0.9, -20, '#059669', '#6ee7b7', '#047857', 'story-anim-butterfly-float-2')}
                ${getTwistButterflySVG(290, 145, 0.9, 20, '#ea580c', '#fbbf24', '#9a3412', 'story-anim-butterfly-float-1')}
            </g>
            `;
        }
    } else if (twist.id === 'twilight_fireflies') {
        const twilightDefs = `
        <defs>
            <linearGradient id="twilightSkyWash" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#312e81" stop-opacity="0.32"/>
                <stop offset="60%" stop-color="#581c87" stop-opacity="0.20"/>
                <stop offset="100%" stop-color="#c2410c" stop-opacity="0.22"/>
            </linearGradient>
            <radialGradient id="fireflyAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                <stop offset="45%" stop-color="#a3e635" stop-opacity="0.65"/>
                <stop offset="100%" stop-color="#84cc16" stop-opacity="0"/>
            </radialGradient>
        </defs>
        `;
        if (isClimax) {
            // Phase 1 (Panel 2): Dusk Drops & Fireflies Begin to Blink (Placed in Natural Meadow Heights)
            visualFx = `
            ${twilightDefs}
            <rect x="0" y="0" width="400" height="220" fill="url(#twilightSkyWash)" style="mix-blend-mode: multiply; pointer-events: none;"/>

            <!-- 11 Magical Blinking Fireflies Living Naturally in Trees & Grass (No Fake Sky Celestial Orbs!) -->
            <g id="magicFireflies">
                ${getTwistFireflySVG(45, 115, 10, 2.2, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(75, 90, 11, 2.4, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(105, 145, 10, 2.2, 'story-anim-firefly-glow-3', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(155, 110, 11, 2.4, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(185, 155, 9, 2.0, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(220, 95, 11, 2.4, 'story-anim-firefly-glow-3', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(250, 135, 10, 2.2, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(285, 110, 11, 2.4, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(315, 155, 9, 2.0, 'story-anim-firefly-glow-3', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(345, 125, 10, 2.2, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(370, 150, 9, 2.0, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-1')}
            </g>
            `;
        } else if (isResolution) {
            // Phase 2 (Panel 3): Magical Twilight Victory Celebration (Fireflies Gather Around Victorious Hero)
            visualFx = `
            ${twilightDefs}
            <rect x="0" y="0" width="400" height="220" fill="url(#twilightSkyWash)" style="mix-blend-mode: multiply; pointer-events: none;"/>

            <!-- Soft Fireflies Shining in a Halo Around Victorious Hero (No Competing Planets or Fake Moons!) -->
            <g id="celebratingFireflies">
                ${getTwistFireflySVG(140, 115, 11, 2.4, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(160, 85, 10, 2.2, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(195, 70, 12, 2.6, 'story-anim-firefly-glow-3', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(230, 85, 10, 2.2, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(250, 115, 11, 2.4, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(150, 150, 9, 2.0, 'story-anim-firefly-glow-3', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(240, 155, 9, 2.0, 'story-anim-firefly-glow-1', 'story-anim-firefly-bob-1')}
                ${getTwistFireflySVG(105, 130, 10, 2.2, 'story-anim-firefly-glow-2', 'story-anim-firefly-bob-2')}
                ${getTwistFireflySVG(290, 135, 10, 2.2, 'story-anim-firefly-glow-3', 'story-anim-firefly-bob-1')}
            </g>
            `;
        }
    }

    return `
    <g class="twist-overlay-group">
        ${visualFx}
        ${badge}
    </g>
    `;
}

function renderBeginnerComicSVG(settingId, charId, propId, panelIdx, level, twist, secondaryCharId) {
    let bgGraphic = '';
    let propGraphic = '';
    let charGraphic = '';
    let twistOverlay = '';

    const isSetup = (panelIdx === 0);
    const isClimax = (panelIdx === 1);
    const isResolution = (panelIdx === 2);

    const groundY = 175;
    let charX = 110;
    let propX = 160;
    let propY = 168;
    let charPose = 'exploring';

    // Staging coordinates
    if (isSetup) {
        charPose = 'exploring';
        charX = 110;
        propX = (charId === 'eve' || charId === 'leo') ? 150 : 155;
        propY = (charId === 'eve' || charId === 'leo') ? 145 : 168;
    } else if (isClimax) {
        charPose = 'alarmed';
        charX = 135;
        propX = 356;
        propY = 168;
    } else if (isResolution) {
        charPose = 'celebrating';
        charX = 195;
        propX = (charId === 'eve' || charId === 'leo') ? 228 : 240;
        propY = (charId === 'eve' || charId === 'leo') ? 116 : 166;
    }

    // ----------------------------------------------------------------------
    // 3 DISTINCT SCENIC ENVIRONMENTS (5-LAYER DEPTH HIERARCHY - SUPER VECTOR LIVING GRAPHICS)
    // ----------------------------------------------------------------------
    if (settingId === 'backyard') {
        // 🏡 Leo's Backyard: Radiant sun with rotating rays, red picket fence, flowerbed with fluttering butterfly, deluxe doghouse
        bgGraphic = `
            <defs>
                <linearGradient id="backyardSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#38bdf8"/>
                    <stop offset="60%" stop-color="#bae6fd"/>
                    <stop offset="100%" stop-color="#fef08a"/>
                </linearGradient>
                <radialGradient id="sunGlowBackyard" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                    <stop offset="50%" stop-color="#facc15" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="fencePlank" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#ef4444"/>
                    <stop offset="35%" stop-color="#f87171"/>
                    <stop offset="70%" stop-color="#dc2626"/>
                    <stop offset="100%" stop-color="#b91c1c"/>
                </linearGradient>
                <linearGradient id="doghouseRoof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ef4444"/>
                    <stop offset="100%" stop-color="#991b1b"/>
                </linearGradient>
                <linearGradient id="doghouseWood" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#f59e0b"/>
                    <stop offset="50%" stop-color="#d97706"/>
                    <stop offset="100%" stop-color="#b45309"/>
                </linearGradient>
            </defs>

            <!-- Layer 1: Atmospheric Backing & Radiant Pulsing Sun -->
            <rect width="400" height="220" fill="url(#backyardSky)"/>
            
            <!-- Living Sun with Pulsing Corona & Rotating Rays -->
            <circle cx="335" cy="35" r="32" fill="url(#sunGlowBackyard)" class="story-anim-sun-halo"/>
            <g transform="translate(335, 35)">
                <g class="story-anim-sun-burst">
                    <circle cx="0" cy="0" r="28" fill="#fde047" opacity="0.3"/>
                    <path d="M0 -34 L0 34 M-34 0 L34 0 M-24 -24 L24 24 M-24 24 L24 -24" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
                </g>
            </g>
            <circle cx="335" cy="35" r="21" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
            <circle cx="330" cy="30" r="7" fill="#fef08a" opacity="0.85"/>

            <!-- Parallax Drifting Cumulus Clouds -->
            <g class="story-anim-viewport-drift">
                <g transform="translate(45, 18)">
                    <circle cx="20" cy="14" r="14" fill="#ffffff" opacity="0.95"/>
                    <circle cx="35" cy="8" r="18" fill="#ffffff" opacity="0.95"/>
                    <circle cx="52" cy="14" r="13" fill="#ffffff" opacity="0.95"/>
                    <ellipse cx="36" cy="18" rx="28" ry="8" fill="#e0f2fe" opacity="0.5"/>
                </g>
                <g transform="translate(195, 30)">
                    <circle cx="15" cy="10" r="10" fill="#ffffff" opacity="0.85"/>
                    <circle cx="26" cy="6" r="13" fill="#ffffff" opacity="0.85"/>
                    <circle cx="38" cy="10" r="10" fill="#ffffff" opacity="0.85"/>
                </g>
            </g>

            <!-- Layer 2: Horizon Foliage & Red Picket Fence -->
            <!-- Distant Garden Treeline & Cottage Roofline -->
            <path d="M0 118 Q60 102 140 112 T280 108 T400 114 L400 145 L0 145 Z" fill="#86efac" opacity="0.7"/>
            <path d="M0 125 Q70 110 160 120 T310 115 T400 122 L400 148 L0 148 Z" fill="#4ade80" opacity="0.8"/>

            <!-- Red Picket Fence with Beveled Pickets and Rails -->
            <g transform="translate(0, 115)">
                <!-- Horizontal Rails -->
                <rect x="0" y="2" width="400" height="7" fill="#991b1b"/>
                <rect x="0" y="22" width="400" height="7" fill="#991b1b"/>
                <line x1="0" y1="2" x2="400" y2="2" stroke="#f87171" stroke-width="1.2"/>
                <line x1="0" y1="22" x2="400" y2="22" stroke="#f87171" stroke-width="1.2"/>
                <!-- 14 Sharp Gothic Pickets -->
                ${Array.from({length: 14}).map((_, i) => `
                    <g transform="translate(${i*30+5}, 0)">
                        <polygon points="0,35 0,-8 10,-18 20,-8 20,35" fill="url(#fencePlank)" stroke="#991b1b" stroke-width="1.2"/>
                        <line x1="1" y1="-7" x2="1" y2="34" stroke="#fecaca" stroke-width="1" opacity="0.75"/>
                        <circle cx="10" cy="5" r="1.5" fill="#450a0a"/>
                        <circle cx="10" cy="25" r="1.5" fill="#450a0a"/>
                    </g>
                `).join('')}
            </g>

            <!-- Flowerbed along fence base with Blooming Tulips & Daisies -->
            <rect x="0" y="146" width="400" height="6" fill="#78350f"/>
            <!-- Colorful Flower Clusters -->
            <g transform="translate(0, 136)">
                <!-- Pink & Red Daisies -->
                <circle cx="25" cy="8" r="4" fill="#f43f5e"/><circle cx="25" cy="8" r="1.8" fill="#fde047"/>
                <line x1="25" y1="12" x2="25" y2="16" stroke="#15803d" stroke-width="1.8"/>
                <circle cx="48" cy="6" r="4" fill="#fb7185"/><circle cx="48" cy="6" r="1.8" fill="#fde047"/>
                <line x1="48" y1="10" x2="48" y2="16" stroke="#15803d" stroke-width="1.8"/>
                <circle cx="115" cy="7" r="4" fill="#e11d48"/><circle cx="115" cy="7" r="1.8" fill="#fde047"/>
                <line x1="115" y1="11" x2="115" y2="16" stroke="#15803d" stroke-width="1.8"/>
                <circle cx="175" cy="6" r="4" fill="#ec4899"/><circle cx="175" cy="6" r="1.8" fill="#fde047"/>
                <line x1="175" y1="10" x2="175" y2="16" stroke="#15803d" stroke-width="1.8"/>
                <circle cx="240" cy="8" r="4" fill="#f43f5e"/><circle cx="240" cy="8" r="1.8" fill="#fde047"/>
                <line x1="240" y1="12" x2="240" y2="16" stroke="#15803d" stroke-width="1.8"/>
                <circle cx="295" cy="6" r="4" fill="#fb7185"/><circle cx="295" cy="6" r="1.8" fill="#fde047"/>
                <line x1="295" y1="10" x2="295" y2="16" stroke="#15803d" stroke-width="1.8"/>
            </g>

            <!-- Fluttering Garden Butterfly Near Flowers (Nested Relative Rig) -->
            <g transform="translate(85, 126)">
                <g class="story-anim-butterfly-flight">
                    <!-- Left Wing -->
                    <g class="story-anim-butterfly-wing-left">
                        <path d="M0 0 C-10 -12 -18 -8 -16 2 C-14 8 -6 8 0 2 Z" fill="#ec4899" stroke="#be185d" stroke-width="0.8"/>
                        <circle cx="-8" cy="-2" r="1.5" fill="#fef08a"/>
                    </g>
                    <!-- Right Wing -->
                    <g class="story-anim-butterfly-wing-right">
                        <path d="M0 0 C10 -12 18 -8 16 2 C14 8 6 8 0 2 Z" fill="#ec4899" stroke="#be185d" stroke-width="0.8"/>
                        <circle cx="8" cy="-2" r="1.5" fill="#fef08a"/>
                    </g>
                    <!-- Body & Antennae -->
                    <ellipse cx="0" cy="1" rx="1.5" ry="5" fill="#1e293b"/>
                    <path d="M-1 -4 Q-4 -8 -6 -9 M1 -4 Q4 -8 6 -9" stroke="#1e293b" stroke-width="0.8" fill="none"/>
                </g>
            </g>

            <!-- Layer 3 & 4: Lawn & Deluxe Doghouse at X=320 to 395 -->
            <rect x="0" y="150" width="400" height="70" fill="#22c55e"/>
            <rect x="0" y="175" width="400" height="45" fill="#16a34a"/>
            <!-- Grass Tufts along lawn edge -->
            <path d="M12 175 L15 168 L18 175 M65 175 L68 167 L71 175 M160 175 L163 166 L167 175 M250 175 L254 167 L258 175" stroke="#15803d" stroke-width="1.8" fill="none" stroke-linecap="round"/>

            <!-- Deluxe Wooden Doghouse with Plank Bevels & Bone Nameplate -->
            <g transform="translate(322, 106)">
                <!-- Drop shadow under doghouse base -->
                <ellipse cx="36" cy="69" rx="36" ry="6" fill="rgba(0,0,0,0.25)"/>
                <!-- Main Cedar Wood Siding Walls -->
                <rect x="4" y="26" width="66" height="42" rx="3" fill="url(#doghouseWood)" stroke="#78350f" stroke-width="1.8"/>
                <!-- Horizontal Plank Shadow Grooves -->
                <line x1="4" y1="36" x2="70" y2="36" stroke="#78350f" stroke-width="1.2"/>
                <line x1="4" y1="46" x2="70" y2="46" stroke="#78350f" stroke-width="1.2"/>
                <line x1="4" y1="56" x2="70" y2="56" stroke="#78350f" stroke-width="1.2"/>
                <!-- Red Gable Roof with Fascia Board -->
                <polygon points="-4,28 37,-4 78,28" fill="url(#doghouseRoof)" stroke="#7f1d1d" stroke-width="2"/>
                <!-- Roof Ridge Highlight Line -->
                <line x1="-3" y1="27" x2="37" y2="-3" stroke="#fca5a5" stroke-width="1.8"/>
                <line x1="37" y1="-3" x2="77" y2="27" stroke="#b91c1c" stroke-width="1.8"/>
                <!-- Deep Arched Doorway with Inner Darkness -->
                <path d="M22 68 L22 44 Q37 32 52 44 L52 68 Z" fill="#1c1917" stroke="#78350f" stroke-width="1.5"/>
                <!-- Cozy Straw Bedding Peeking Out -->
                <ellipse cx="37" cy="67" rx="12" ry="3.5" fill="#fde047"/>
                <path d="M27 67 L25 64 M34 67 L35 63 M43 67 L46 64" stroke="#ca8a04" stroke-width="1.4" stroke-linecap="round"/>
                <!-- Carved Wooden Dog Bone Plaque Above Door: "MAX" -->
                <g transform="translate(23, 29)">
                    <rect x="3" y="2" width="22" height="8" rx="2" fill="#fef3c7" stroke="#b45309" stroke-width="1"/>
                    <circle cx="3" cy="2" r="2.2" fill="#fef3c7" stroke="#b45309" stroke-width="0.8"/>
                    <circle cx="3" cy="10" r="2.2" fill="#fef3c7" stroke="#b45309" stroke-width="0.8"/>
                    <circle cx="25" cy="2" r="2.2" fill="#fef3c7" stroke="#b45309" stroke-width="0.8"/>
                    <circle cx="25" cy="10" r="2.2" fill="#fef3c7" stroke="#b45309" stroke-width="0.8"/>
                    <text x="14" y="9" font-family="Arial, sans-serif" font-size="6.5" font-weight="900" fill="#dc2626" text-anchor="middle">MAX</text>
                </g>
                <!-- Red Food Bowl with Bone Motif Beside Doghouse -->
                <ellipse cx="-8" cy="67" rx="8" ry="3.5" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>
                <ellipse cx="-8" cy="65" rx="6" ry="2" fill="#f87171"/>
            </g>

            <!-- Layer 5: Dynamic FX & Drifting Golden Dandelion Pollen Fluff -->
            <g class="story-anim-dandelion-drift">
                <g transform="translate(130, 95)">
                    <circle cx="0" cy="0" r="1.5" fill="#ffffff" opacity="0.9"/>
                    <line x1="-3" y1="-3" x2="3" y2="3" stroke="#fef08a" stroke-width="0.8"/>
                </g>
                <g transform="translate(205, 120)">
                    <circle cx="0" cy="0" r="1.8" fill="#ffffff" opacity="0.95"/>
                    <line x1="0" y1="-4" x2="0" y2="4" stroke="#fef08a" stroke-width="0.8"/>
                </g>
                <g transform="translate(270, 80)">
                    <circle cx="0" cy="0" r="1.4" fill="#ffffff" opacity="0.85"/>
                    <line x1="-3" y1="3" x2="3" y2="-3" stroke="#fef08a" stroke-width="0.8"/>
                </g>
            </g>
        `;
    } else if (settingId === 'creek') {
        // 🦆 Whispering Creek: Dawn turquoise sky, swimming duckling, swaying willow & reeds, arched wooden bridge
        bgGraphic = `
            <defs>
                <linearGradient id="creekSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#38bdf8"/>
                    <stop offset="50%" stop-color="#bae6fd"/>
                    <stop offset="100%" stop-color="#fed7aa"/>
                </linearGradient>
                <linearGradient id="riverWater" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0284c7"/>
                    <stop offset="40%" stop-color="#0369a1"/>
                    <stop offset="100%" stop-color="#075985"/>
                </linearGradient>
                <linearGradient id="bridgeWood" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#b45309"/>
                    <stop offset="50%" stop-color="#d97706"/>
                    <stop offset="100%" stop-color="#92400e"/>
                </linearGradient>
                <radialGradient id="sunGlowCreek" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                    <stop offset="50%" stop-color="#facc15" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                </radialGradient>
            </defs>

            <!-- Layer 1: Dawn Turquoise-Peach Atmospheric Sky & Radiant Morning Sun -->
            <rect width="400" height="220" fill="url(#creekSky)"/>
            
            <!-- Radiant Morning Sun at X=50, Y=35 -->
            <circle cx="50" cy="35" r="30" fill="url(#sunGlowCreek)" class="story-anim-sun-halo"/>
            <g transform="translate(50, 35)">
                <g class="story-anim-sun-burst">
                    <circle cx="0" cy="0" r="26" fill="#fde047" opacity="0.3"/>
                    <path d="M0 -30 L0 30 M-30 0 L30 0 M-21 -21 L21 21 M-21 21 L21 -21" stroke="#facc15" stroke-width="2.2" stroke-linecap="round" opacity="0.65"/>
                </g>
            </g>
            <circle cx="50" cy="35" r="19" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
            <circle cx="46" cy="31" r="6" fill="#fef08a" opacity="0.85"/>

            <!-- Parallax Drifting Clouds -->
            <g class="story-anim-viewport-drift">
                <g transform="translate(100, 24)">
                    <circle cx="15" cy="12" r="12" fill="#ffffff" opacity="0.92"/>
                    <circle cx="28" cy="8" r="15" fill="#ffffff" opacity="0.92"/>
                    <circle cx="42" cy="12" r="12" fill="#ffffff" opacity="0.92"/>
                </g>
            </g>

            <!-- Layer 2: Distant Layered Mountain & Forest Ridges -->
            <path d="M0 90 Q120 72 240 85 T400 78 L400 145 L0 145 Z" fill="#0d9488" opacity="0.55"/>
            <path d="M0 98 Q140 80 280 92 T400 86 L400 145 L0 145 Z" fill="#15803d"/>

            <!-- Swaying Weeping Willow Branch in Upper Left (X=0 to 85, Y=0 to 110) -->
            <g transform="translate(0, 0)">
                <path d="M0 25 Q45 28 85 55" stroke="#78350f" stroke-width="4.5" fill="none" stroke-linecap="round"/>
                <g class="story-anim-branch-sway" style="transform-origin: 30px 30px;">
                    <!-- Dangling Leafy Willow Tendrils -->
                    <path d="M25 30 Q22 55 26 80" stroke="#16a34a" stroke-width="1.8" fill="none"/>
                    <ellipse cx="25" cy="50" rx="3" ry="5" fill="#22c55e"/>
                    <ellipse cx="26" cy="70" rx="2.5" ry="4.5" fill="#4ade80"/>
                    <path d="M50 38 Q46 68 52 95" stroke="#16a34a" stroke-width="1.8" fill="none"/>
                    <ellipse cx="49" cy="60" rx="3.5" ry="5.5" fill="#22c55e"/>
                    <ellipse cx="51" cy="82" rx="3" ry="5" fill="#4ade80"/>
                    <path d="M75 50 Q72 75 78 102" stroke="#16a34a" stroke-width="1.8" fill="none"/>
                    <ellipse cx="74" cy="72" rx="3" ry="5" fill="#22c55e"/>
                    <ellipse cx="77" cy="92" rx="2.5" ry="4.5" fill="#4ade80"/>
                </g>
            </g>

            <!-- Grassy Left Riverbank & Meadow (X = 0 to 275) -->
            <path d="M0 145 L275 145 L268 220 L0 220 Z" fill="#22c55e"/>
            <path d="M0 175 L270 175 L265 220 L0 220 Z" fill="#16a34a"/>
            <!-- Grass Edge Detail -->
            <path d="M40 175 L43 168 L46 175 M120 175 L124 167 L128 175 M200 175 L204 168 L208 175" stroke="#15803d" stroke-width="1.8" fill="none" stroke-linecap="round"/>

            <!-- Layer 3: Flowing River Channel (X = 265 to 400) Spanning Under the Bridge -->
            <path d="M265 145 L400 145 L400 220 L260 220 Z" fill="url(#riverWater)"/>
            
            <!-- Animated Water Current Rays & Shimmer -->
            <path d="M265 155 Q330 148 400 155 L400 162 Q330 155 264 162 Z" fill="#38bdf8" opacity="0.85" class="story-anim-water-rays"/>
            <path d="M262 172 Q330 165 400 172 L400 180 Q330 173 260 180 Z" fill="#7dd3fc" opacity="0.8" class="story-anim-water-rays"/>
            <path d="M258 192 Q330 185 400 192 L400 200 Q330 193 256 200 Z" fill="#38bdf8" opacity="0.75" class="story-anim-water-rays"/>

            <!-- River Pebbles & Bank Rocks Along Water's Edge -->
            <ellipse cx="264" cy="176" rx="5" ry="3" fill="#94a3b8" stroke="#64748b" stroke-width="1"/>
            <ellipse cx="268" cy="182" rx="4" ry="2.5" fill="#64748b"/>
            <ellipse cx="260" cy="195" rx="6" ry="3.5" fill="#94a3b8" stroke="#64748b" stroke-width="1"/>
            <ellipse cx="388" cy="180" rx="5" ry="3" fill="#94a3b8"/>
            <ellipse cx="392" cy="192" rx="4.5" ry="2.5" fill="#64748b"/>

            <!-- Living Swimming Yellow Duckling with Bobbing Motion & Wake -->
            <g transform="translate(282, 185)">
                <g class="story-anim-duck-swim">
                    <!-- Duckling Wake Ripple -->
                    <ellipse cx="-10" cy="5" rx="9" ry="3" fill="none" stroke="#7dd3fc" stroke-width="1.2" class="story-anim-water-ripple-slow"/>
                    <!-- Yellow Body -->
                    <ellipse cx="0" cy="3" rx="12" ry="7" fill="#facc15" stroke="#ca8a04" stroke-width="1.2"/>
                    <!-- Wing Detail -->
                    <path d="M-4 1 Q2 -2 7 3 Q1 7 -4 1 Z" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
                    <!-- Duckling Head -->
                    <circle cx="9" cy="-3" r="6" fill="#facc15" stroke="#ca8a04" stroke-width="1.2"/>
                    <circle cx="11" cy="-4" r="1.4" fill="#0f172a"/><circle cx="11.5" cy="-4.5" r="0.6" fill="#ffffff"/>
                    <!-- Orange Bill -->
                    <ellipse cx="16" cy="-2" rx="3.2" ry="1.6" fill="#f97316"/>
                </g>
            </g>

            <!-- Floating Water Lily Pad with Blooming Lotus Blossom -->
            <g transform="translate(306, 204)">
                <g class="story-anim-flower-bob">
                    <ellipse cx="0" cy="0" rx="11" ry="4.5" fill="#15803d" stroke="#166534" stroke-width="1"/>
                    <polygon points="0,0 4,-4 5,-1" fill="#0369a1"/>
                    <circle cx="-1" cy="-2" r="3.8" fill="#f472b6"/>
                    <circle cx="-1" cy="-2" r="1.8" fill="#fde047"/>
                </g>
            </g>

            <!-- Swaying River Reeds / Cattails at Water's Edge -->
            <g transform="translate(258, 175)">
                <g class="story-anim-reeds-sway">
                    <path d="M0 0 Q-4 -18 -2 -34" stroke="#15803d" stroke-width="2" fill="none"/>
                    <ellipse cx="-2" cy="-27" rx="2.2" ry="5.5" fill="#78350f"/>
                    <path d="M4 0 Q6 -16 8 -28" stroke="#16a34a" stroke-width="1.8" fill="none"/>
                    <ellipse cx="8" cy="-21" rx="2" ry="4.5" fill="#78350f"/>
                    <path d="M-3 0 Q-7 -14 -9 -23" stroke="#22c55e" stroke-width="1.5" fill="none"/>
                </g>
            </g>

            <!-- Layer 4: Arched Wooden Footbridge Spanning From Left Bank (X=266) to Right Bank (X=398) -->
            <!-- Timber Foundation Piles in Riverbed -->
            <rect x="294" y="148" width="6" height="30" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
            <rect x="372" y="148" width="6" height="30" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>

            <!-- Bridge Deck Timber Plank Arch (Arching Over River from Bank to Bank) -->
            <path d="M266 168 Q332 134 398 168 L398 159 Q332 125 266 159 Z" fill="url(#bridgeWood)" stroke="#78350f" stroke-width="2"/>
            <!-- Bridge Walking Planks Surface Line with Sun Glint -->
            <path d="M266 159 Q332 125 398 159" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
            <!-- Under-Bridge Arch Clearance Shadow (Props nestle directly under this arch at X=356, Y=168!) -->
            <path d="M266 168 Q332 138 398 168" stroke="#451a03" stroke-width="2.5" fill="none"/>

            <!-- Bridge Handrail Balusters (Vertical Wood Posts) -->
            <line x1="280" y1="152" x2="280" y2="132" stroke="#78350f" stroke-width="2.2"/>
            <line x1="306" y1="140" x2="306" y2="120" stroke="#78350f" stroke-width="2.2"/>
            <line x1="332" y1="134" x2="332" y2="114" stroke="#78350f" stroke-width="2.2"/>
            <line x1="358" y1="140" x2="358" y2="120" stroke="#78350f" stroke-width="2.2"/>
            <line x1="384" y1="152" x2="384" y2="132" stroke="#78350f" stroke-width="2.2"/>
            <!-- Arched Upper Safety Handrail -->
            <path d="M266 142 Q332 110 398 142" stroke="#78350f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <path d="M266 140.5 Q332 108.5 398 140.5" stroke="#f59e0b" stroke-width="1.6" fill="none" stroke-linecap="round"/>

            <!-- Layer 5: Riverbed Splash Ripples Under Bridge Clearance Arch (X=356, Y=168) -->
            <ellipse cx="356" cy="172" rx="15" ry="4.5" fill="none" stroke="#38bdf8" stroke-width="1.5" class="story-anim-rain-ripple"/>
            <ellipse cx="348" cy="170" rx="4" ry="2" fill="#64748b"/>
            <ellipse cx="364" cy="173" rx="5" ry="2.5" fill="#94a3b8"/>
        `;
    } else {
        // 🌳 Sunny Oak Park (Default): Daylight sky, Grand ancient oak tree with swaying branches, swallowtail butterfly, park bench
        bgGraphic = `
            <defs>
                <linearGradient id="parkSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#60a5fa"/>
                    <stop offset="55%" stop-color="#bae6fd"/>
                    <stop offset="100%" stop-color="#fef08a"/>
                </linearGradient>
                <linearGradient id="parkOakTrunk" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#451a03"/>
                    <stop offset="45%" stop-color="#78350f"/>
                    <stop offset="100%" stop-color="#92400e"/>
                </linearGradient>
                <radialGradient id="sunGlowPark" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                    <stop offset="50%" stop-color="#facc15" stop-opacity="0.55"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="benchWood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f59e0b"/>
                    <stop offset="30%" stop-color="#d97706"/>
                    <stop offset="100%" stop-color="#b45309"/>
                </linearGradient>
            </defs>

            <!-- Layer 1: Golden Daylight Atmospheric Sky & Radiant Park Sun -->
            <rect width="400" height="220" fill="url(#parkSky)"/>
            
            <!-- Radiant Park Sun at X=340, Y=30 -->
            <circle cx="340" cy="30" r="32" fill="url(#sunGlowPark)" class="story-anim-sun-halo"/>
            <g transform="translate(340, 30)">
                <g class="story-anim-sun-burst">
                    <circle cx="0" cy="0" r="28" fill="#fde047" opacity="0.3"/>
                    <path d="M0 -34 L0 34 M-34 0 L34 0 M-24 -24 L24 24 M-24 24 L24 -24" stroke="#facc15" stroke-width="2.5" stroke-linecap="round" opacity="0.65"/>
                </g>
            </g>
            <circle cx="340" cy="30" r="21" fill="#facc15" filter="drop-shadow(0 0 10px #fde047)"/>
            <circle cx="335" cy="25" r="7" fill="#fef08a" opacity="0.85"/>

            <!-- Parallax Drifting Clouds -->
            <g class="story-anim-viewport-drift">
                <g transform="translate(70, 22)">
                    <circle cx="16" cy="14" r="14" fill="#ffffff" opacity="0.95"/>
                    <circle cx="32" cy="8" r="18" fill="#ffffff" opacity="0.95"/>
                    <circle cx="48" cy="14" r="14" fill="#ffffff" opacity="0.95"/>
                </g>
            </g>

            <!-- Layer 2: Rolling Park Hills & Distant Trees -->
            <path d="M0 125 Q100 100 220 118 T400 110 L400 220 L0 220 Z" fill="#86efac" opacity="0.6"/>
            <path d="M0 135 Q130 112 260 128 T400 120 L400 220 L0 220 Z" fill="#22c55e"/>
            <rect x="0" y="175" width="400" height="45" fill="#16a34a"/>
            <!-- Grass tuft highlights -->
            <path d="M90 175 L93 167 L96 175 M180 175 L184 168 L188 175 M270 175 L274 167 L278 175" stroke="#15803d" stroke-width="1.8" fill="none" stroke-linecap="round"/>

            <!-- Layer 3: Grand Ancient Oak Tree on Left (X=0 to 95, Y=15 to 175) -->
            <!-- Deep Back Canopy Cluster -->
            <circle cx="28" cy="52" r="38" fill="#14532d"/>
            <circle cx="68" cy="65" r="26" fill="#14532d"/>

            <!-- Massive Oak Trunk with Root Buttresses & Bark Texture -->
            <path d="M8 175 Q18 135 16 75 L32 75 Q30 135 44 175 Z" fill="url(#parkOakTrunk)" stroke="#271004" stroke-width="1.5"/>
            <!-- Bark Contour Lines -->
            <path d="M19 82 Q17 125 21 168" stroke="#271004" stroke-width="1.4" fill="none"/>
            <path d="M26 80 Q29 122 28 165" stroke="#92400e" stroke-width="1.2" fill="none"/>
            <!-- Spreading Main Branches -->
            <path d="M20 78 Q10 55 -5 45" stroke="#78350f" stroke-width="7" fill="none" stroke-linecap="round"/>
            <path d="M26 76 Q45 58 68 62" stroke="#78350f" stroke-width="6" fill="none" stroke-linecap="round"/>

            <!-- Midtone & Highlight Foliage Canopy Lobes -->
            <circle cx="24" cy="46" r="34" fill="#15803d"/>
            <circle cx="6" cy="56" r="24" fill="#16a34a"/>
            <circle cx="48" cy="42" r="28" fill="#15803d"/>
            <circle cx="32" cy="30" r="22" fill="#22c55e"/>
            <circle cx="58" cy="52" r="20" fill="#22c55e"/>

            <!-- Swaying Oak Lower Branch Cluster (Nested Transform Rig) -->
            <g transform="translate(32, 68)">
                <g class="story-anim-branch-sway" style="transform-origin: 0px 0px;">
                    <path d="M0 0 Q20 5 36 -4" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <ellipse cx="22" cy="0" rx="9" ry="6" fill="#22c55e"/>
                    <ellipse cx="36" cy="-4" rx="8" ry="5.5" fill="#4ade80"/>
                    <ellipse cx="28" cy="5" rx="7" ry="5" fill="#16a34a"/>
                </g>
            </g>

            <!-- Dancing Swallowtail Butterfly Near Bench & Flowers -->
            <g transform="translate(292, 96)">
                <g class="story-anim-butterfly-flight">
                    <!-- Left Wing -->
                    <g class="story-anim-butterfly-wing-left">
                        <path d="M0 0 C-12 -14 -20 -10 -18 2 C-16 10 -8 10 0 2 Z" fill="#facc15" stroke="#0f172a" stroke-width="0.9"/>
                        <path d="M-8 -6 C-14 -4 -12 2 -8 4" stroke="#0f172a" stroke-width="0.8" fill="none"/>
                        <circle cx="-14" cy="4" r="1.2" fill="#38bdf8"/>
                    </g>
                    <!-- Right Wing -->
                    <g class="story-anim-butterfly-wing-right">
                        <path d="M0 0 C12 -14 20 -10 18 2 C16 10 8 10 0 2 Z" fill="#facc15" stroke="#0f172a" stroke-width="0.9"/>
                        <path d="M8 -6 C14 -4 12 2 8 4" stroke="#0f172a" stroke-width="0.8" fill="none"/>
                        <circle cx="14" cy="4" r="1.2" fill="#38bdf8"/>
                    </g>
                    <!-- Body & Antennae -->
                    <ellipse cx="0" cy="1" rx="1.5" ry="5.5" fill="#0f172a"/>
                    <path d="M-1 -4 Q-4 -9 -7 -10 M1 -4 Q4 -9 7 -10" stroke="#0f172a" stroke-width="0.8" fill="none"/>
                </g>
            </g>

            <!-- Layer 4: Upgraded Victorian Park Bench on Far Right (X=328 to 396, Y=136 to 175) -->
            <g transform="translate(328, 136)">
                <!-- Drop shadow under bench on lawn -->
                <ellipse cx="34" cy="38" rx="36" ry="5" fill="rgba(0,0,0,0.25)"/>
                <!-- Scrolled Wrought Iron Legs & Armrests -->
                <path d="M6 38 L6 18 Q4 10 12 10 Q18 10 16 18" stroke="#1e293b" stroke-width="3" fill="none"/>
                <path d="M62 38 L62 18 Q60 10 68 10 Q74 10 72 18" stroke="#1e293b" stroke-width="3" fill="none"/>
                <!-- Curved Leg Details -->
                <path d="M6 25 Q12 32 8 38 M62 25 Q68 32 64 38" stroke="#1e293b" stroke-width="2.5" fill="none"/>
                <!-- Backrest Slat 1 (Top) -->
                <rect x="0" y="2" width="68" height="7" rx="2" fill="url(#benchWood)" stroke="#78350f" stroke-width="1"/>
                <line x1="2" y1="3" x2="66" y2="3" stroke="#fef08a" stroke-width="0.9" opacity="0.8"/>
                <!-- Backrest Slat 2 (Mid) -->
                <rect x="0" y="11" width="68" height="7" rx="2" fill="url(#benchWood)" stroke="#78350f" stroke-width="1"/>
                <line x1="2" y1="12" x2="66" y2="12" stroke="#fef08a" stroke-width="0.9" opacity="0.8"/>
                <!-- Seat Slat (Deep under-bench clearance shadow where props roll/wedge at Y=168!) -->
                <rect x="0" y="20" width="68" height="7" rx="2" fill="url(#benchWood)" stroke="#78350f" stroke-width="1"/>
                <line x1="2" y1="21" x2="66" y2="21" stroke="#fef08a" stroke-width="0.9" opacity="0.8"/>
            </g>

            <!-- Layer 5: Dynamic FX & Drifting Wind Leaves Across Park -->
            <g transform="translate(135, 70)">
                <g class="story-anim-wind-leaf-1">
                    <path d="M0 0 Q6 -4 11 0 Q6 6 0 0 Z" fill="#86efac" stroke="#15803d" stroke-width="0.7"/>
                </g>
            </g>
            <g transform="translate(245, 115)">
                <g class="story-anim-wind-leaf-2">
                    <path d="M0 0 Q-5 -4 -9 0 Q-5 5 0 0 Z" fill="#facc15" stroke="#ca8a04" stroke-width="0.7"/>
                </g>
            </g>
            <g transform="translate(190, 52)">
                <g class="story-anim-wind-leaf-3">
                    <path d="M0 0 Q5 -3 9 0 Q5 5 0 0 Z" fill="#4ade80" stroke="#16a34a" stroke-width="0.7"/>
                </g>
            </g>
        `;
    }

    // Contact Ground Shadow at Y = 175
    const heroShadow = `<g class="story-anim-shadow-6steps"><ellipse cx="${charX}" cy="${groundY + 3}" rx="32" ry="7" fill="rgba(0,0,0,0.3)"/></g>`;

    // Dynamic Solo Hero: Carries chosen prop in Scene 1 and Scene 3
    const isCarryingProp = (isSetup || isResolution);
    charGraphic = renderBeginnerCharacter(charId, charX, groundY, charPose, false, propId, isCarryingProp);

    // Catalyst Prop Graphics in Scene 2 (Climax)
    if (isClimax) {
        propGraphic = renderBeginnerPropSVG(propId, propX, propY, 1.0, true, settingId);
    }

    // Twist Dynamic Environmental Overlay (Two-Phase Continuity: Climax Panel 2 & Resolution Panel 3)
    if (twist && (isClimax || isResolution)) {
        twistOverlay = renderEnvironmentalTwistOverlay(twist, panelIdx);
    }

    return `
        <svg viewBox="0 0 400 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="story-comic-svg">
            ${bgGraphic}
            ${heroShadow}
            ${charGraphic}
            ${propGraphic}
            ${twistOverlay}
        </svg>
    `;
}

// Register Cartridge into Story Builder Cartridge System
if (typeof registerStoryUniverse === 'function') {
    registerStoryUniverse('beginner', MAX_ADVENTURE_UNIVERSE);
}
if (typeof registerStoryComicRenderer === 'function') {
    registerStoryComicRenderer('beginner', renderBeginnerComicSVG);
    registerStoryComicRenderer('storyboard_1', renderBeginnerComicSVG);
}
if (typeof window !== 'undefined') {
    window.CHARACTER_PROPS = CHARACTER_PROPS;
    window.MAX_ADVENTURE_UNIVERSE = MAX_ADVENTURE_UNIVERSE;
    window.Storyboard1_Beginner = MAX_ADVENTURE_UNIVERSE;
    window.renderBeginnerComicSVG = renderBeginnerComicSVG;
    window.generateBeginnerStoryPanels = generateBeginnerStoryPanels;
}
