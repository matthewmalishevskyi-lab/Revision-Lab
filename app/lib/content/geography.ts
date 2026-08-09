// GEOGRAPHY — Year 9 written; Years 10 and 11 planned and registered.
//
// ⚠️ Geography splits into PHYSICAL (how the earth works) and HUMAN (how people
// live on it), and boards divide them differently. AQA, Edexcel and OCR all
// examine hazards, ecosystems, urban change and resources, but the case studies
// they name are not the same — and case studies are where a lot of the marks
// are. Learn your school's named examples alongside the general processes here.
//
// ⚠️ CASE STUDIES: the examples used here are the most widely taught ones, but
// they are examples, not requirements. Swap in whatever your school uses.
//
// FIGURES: population, development and climate numbers change every year. Where
// a figure is approximate or contested, that is said.

import type { TopicContent } from "./index";

export const GEOGRAPHY: Record<string, TopicContent> = {
  "geography/map-skills": {
    summary:
      "Every other topic in Geography ends up on a map, so this is the one that pays back most. Grid references, contours, scale, direction and symbols are all learnable rules rather than things you have to understand — and they turn up in every paper, often as the easiest marks available.",
    keyFacts: [
      {
        heading: "Grid references",
        points: [
          "Four-figure references identify a whole 1 km square: read the easting (the line up the LEFT of the square) then the northing (the line along the BOTTOM).",
          "Six-figure references identify a point to the nearest 100 m: split each square mentally into tenths and add a digit to each pair.",
          "Always go ALONG the corridor and UP the stairs — eastings before northings, every time.",
          "Eastings increase to the east (right); northings increase to the north (up).",
          "The commonest error by a distance is reversing the pairs, which puts you somewhere completely different on the map.",
        ],
      },
      {
        heading: "Scale and distance",
        points: [
          "A 1:25,000 map means 1 cm on the map is 25,000 cm on the ground — 250 m. 4 cm to the kilometre.",
          "A 1:50,000 map means 1 cm is 500 m, so 2 cm to the kilometre.",
          "Straight-line distance: measure with a ruler and convert using the scale.",
          "Curved distance, such as a road or river: lay a piece of string or the edge of paper along it, mark each bend, then straighten and measure.",
          "Always state units. A number with no unit is not an answer.",
        ],
      },
      {
        heading: "Height, contours and relief",
        points: [
          "Contour lines join points of equal height above sea level, and are usually 5 m or 10 m apart on OS maps.",
          "Contours close together mean a steep slope; far apart means gentle.",
          "Contours forming a V pointing UPHILL show a valley, usually with a river in it. A V pointing downhill would be a spur.",
          "Concentric closed rings show a hill; the innermost ring is the summit.",
          "Spot heights and triangulation pillars give exact heights at specific points.",
          "Relief means the shape and height of the land, described in words: steep, gentle, undulating, flat.",
        ],
      },
      {
        heading: "Direction, symbols and cross-sections",
        points: [
          "Compass directions run clockwise: north, north-east, east, south-east, south, south-west, west, north-west.",
          "Bearings are measured clockwise from north in three figures — the same convention as in Maths.",
          "OS symbols must be read from the key: blue for water, green for woodland and access land, brown contours, black for buildings and boundaries.",
          "A cross-section is a side view along a line: mark where each contour crosses, plot height against distance, and join the points.",
          "Describing a route means using direction, distance and named features together — not just 'it goes past a wood'.",
        ],
      },
    ],
    flashcards: [
      { term: "Easting", definition: "A vertical grid line, numbered from west to east. Always read first in a grid reference." },
      { term: "Northing", definition: "A horizontal grid line, numbered from south to north. Always read second." },
      { term: "Four-figure grid reference", definition: "A reference identifying a whole 1 km square, using two digits for the easting and two for the northing." },
      { term: "Six-figure grid reference", definition: "A reference identifying a point to the nearest 100 m, by dividing each square into tenths." },
      { term: "Scale", definition: "The ratio between distance on a map and distance on the ground, such as 1:25,000." },
      { term: "Contour line", definition: "A line joining points of equal height above sea level." },
      { term: "Contour interval", definition: "The height difference between one contour and the next, usually 5 m or 10 m on OS maps." },
      { term: "Relief", definition: "The shape and height of the land surface." },
      { term: "Spot height", definition: "A dot with a number giving the exact height at that point." },
      { term: "Triangulation pillar", definition: "A marked survey point on a summit, shown with its exact height." },
      { term: "Cross-section", definition: "A side-on drawing of the land along a chosen line, showing how height changes." },
      { term: "Bearing", definition: "A direction measured clockwise from north, written with three figures." },
      { term: "Key", definition: "The list explaining what each symbol on the map means. Always check it rather than guessing." },
    ],
    examTips: [
      {
        tip: "Along the corridor, up the stairs",
        detail:
          "Eastings before northings, always. Reversing them is the single most common error on this topic and it puts your answer in a different part of the country.",
      },
      {
        tip: "Learn the two scales as 'cm to the kilometre'",
        detail:
          "1:25,000 is 4 cm to the km; 1:50,000 is 2 cm to the km. Far quicker in an exam than working from the ratio each time.",
      },
      {
        tip: "Read contour spacing before describing a slope",
        detail:
          "Close together means steep. It sounds obvious and it is the evidence examiners want quoted, along with the actual heights.",
      },
      {
        tip: "Use direction AND distance when describing",
        detail:
          "'The river flows south-east for about 2 km past the wood at 342178' scores; 'the river goes past a wood' does not.",
      },
      {
        tip: "Always give units and check them",
        detail:
          "Metres for height, kilometres for distance. A bare number is an incomplete answer even when the arithmetic is right.",
      },
      {
        tip: "Use the key, don't guess symbols",
        detail:
          "OS symbols are not always intuitive, and the key is printed for you. Guessing costs marks that were being handed over.",
      },
    ],

    workedExamples: [
      {
        question: "Give the four-figure and then the six-figure grid reference for a church that sits three tenths across and seven tenths up square 3421.",
        steps: [
          "Four-figure first: the easting is 34 and the northing is 21, so the square is 3421.",
          "For six figures, divide the square into tenths in both directions.",
          "The church is three tenths east of the left-hand line, so the easting becomes 343.",
          "It is seven tenths north of the bottom line, so the northing becomes 217.",
          "Put them together, eastings first: 343217.",
        ],
        answer: "Four-figure: 3421. Six-figure: 343217.",
      },
      {
        question:
          "On a 1:50,000 map, two points are 7 cm apart in a straight line. How far apart are they on the ground?",
        steps: [
          "1:50,000 means 1 cm on the map is 50,000 cm on the ground.",
          "50,000 cm = 500 m = 0.5 km, so 1 cm represents half a kilometre.",
          "7 cm therefore represents 7 × 0.5 km.",
          "7 × 0.5 = 3.5.",
          "State the unit: 3.5 km.",
        ],
        answer: "3.5 km",
      },
      {
        question:
          "Describe the relief shown by contours that are tightly packed on the west of a map and widely spaced on the east, rising from 50 m to 320 m.",
        steps: [
          "Start with the overall pattern: the land rises from 50 m in the east to 320 m in the west, a difference of 270 m.",
          "Tightly packed contours in the west mean the slope there is steep.",
          "Widely spaced contours in the east mean a gentle, more level surface.",
          "Put it into geographical language: an escarpment — steep on one side, gently sloping on the other.",
          "Quote the evidence: the height figures and the contour spacing, not just the words.",
        ],
        answer:
          "The land rises from 50 m in the east to 320 m in the west. The tightly packed contours in the west show a steep slope, while the widely spaced contours in the east show gentle, almost flat ground — the asymmetric profile of an escarpment.",
      },
      {
        question:
          "How would you measure the length of a winding river on a map?",
        steps: [
          "A ruler will not work, because it measures the straight line rather than the actual course.",
          "Lay a piece of string along the river, following each bend, or use the edge of a strip of paper and pivot it at each turn.",
          "Mark the start and end points on the string or paper.",
          "Straighten it against a ruler and read the length in centimetres.",
          "Convert using the scale — on 1:25,000, divide by 4 to get kilometres.",
        ],
        answer:
          "Follow the course with string or the edge of a strip of paper, marking each bend, then straighten it against a ruler and convert with the map's scale. A ruler alone measures the straight line, which is always shorter than the river.",
      },
    ],

    practice: [
      { question: "Which is read first in a grid reference, eastings or northings?",
        accept: ["eastings", "easting"],
        answer: "Eastings — along the corridor, then up the stairs. Reversing them is the commonest error on this topic." },
      { question: "How many figures identify a 1 km square?",
        accept: ["4", "four"],
        answer: "Four. Six figures narrow it to the nearest 100 m." },
      { question: "How precise is a six-figure grid reference, in metres?",
        accept: ["100", "100m", "100 m"],
        answer: "To the nearest 100 m, by dividing each square into tenths." },
      { question: "On a 1:25,000 map, how many metres does 1 cm represent?",
        accept: ["250", "250m", "250 m"],
        answer: "250 m — which is 4 cm to the kilometre." },
      { question: "On a 1:50,000 map, how many metres does 1 cm represent?",
        accept: ["500", "500m", "500 m"],
        answer: "500 m — 2 cm to the kilometre." },
      { question: "What do contour lines join?",
        accept: ["points of equal height", "equal height", "points of the same height", "same height"],
        answer: "Points of equal height above sea level." },
      { question: "Do contours close together mean a steep or a gentle slope?",
        accept: ["steep"],
        answer: "Steep. Widely spaced contours mean gentle ground." },
      { question: "Contours forming a V pointing uphill usually show what landform?",
        accept: ["valley", "a valley", "river valley"],
        answer: "A valley, usually with a river in it. A V pointing downhill would be a spur." },
      { question: "What is the term for the shape and height of the land?",
        accept: ["relief"],
        answer: "Relief — described with words like steep, gentle, undulating and flat." },
      { question: "What is a side-on drawing of the land along a line called?",
        accept: ["cross section", "cross-section", "crosssection"],
        answer: "A cross-section, plotting height against distance." },
      { question: "How many figures should a bearing be written with?",
        accept: ["3", "three"],
        answer: "Three — the same convention as in Maths. 70° is written 070°." },
      { question: "What colour are woodland and access land usually shown in on OS maps?",
        accept: ["green"],
        answer: "Green. Blue is water, brown is contours, black is buildings and boundaries." },
      { question: "On a 1:25,000 map, 8 cm represents how many kilometres?",
        accept: ["2", "2km", "2 km"],
        answer: "2 km, since 4 cm is one kilometre on that scale." },
      { question: "What is the usual contour interval on an OS map, in metres? Give either common value.",
        accept: ["5", "10", "5m", "10m"],
        answer: "Usually 5 m or 10 m, depending on the map." },
      { question: "What do concentric closed rings of contours show?",
        accept: ["a hill", "hill", "summit", "a summit"],
        answer: "A hill, with the innermost ring at the summit." },
      { question: "What should you always check before interpreting a symbol?",
        accept: ["the key", "key", "the legend", "legend"],
        answer: "The key. OS symbols are not always intuitive, and guessing throws away easy marks." },
      { question: "Explain why you cannot measure a winding river with a ruler.",
        answer: "Because a ruler measures the straight-line distance between two points, and a river almost never travels in a straight line. Every meander adds length that the ruler simply skips, so the figure you get is always too small — sometimes dramatically so on a heavily meandering lowland river. The method that works is to follow the actual course with a piece of string or the edge of a strip of paper, marking each bend as you turn, then straighten it against a ruler and convert using the map's scale. The general point matters beyond rivers: measure the path something actually takes, not the gap between its ends. (Mark this one yourself.)" },
      { question: "Explain how contour patterns let you picture a landscape you have never seen.",
        answer: "Because the spacing and shape of the lines encode the three-dimensional surface. Spacing gives you steepness: lines crammed together mean the ground rises sharply over a short distance, while widely spaced lines mean a gentle gradient. The numbers give you absolute height, so you know whether you are looking at a hill or a mountain. And the shapes give you landforms: concentric closed rings are a summit, a V pointing uphill is a valley with water in the bottom, and a V pointing downhill is a spur pushing out from higher ground. Read together, a flat sheet of paper tells you what the land would feel like to walk across. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Northings come first in a grid reference.\"",
        right: "Eastings always come first — along the corridor, then up the stairs. Reversing them places your answer somewhere entirely different." },
      { wrong: "\"A larger scale number means a more detailed map.\"",
        right: "The opposite. 1:25,000 shows more detail than 1:50,000, because each centimetre covers less ground." },
      { wrong: "\"Contours show what the land is made of.\"",
        right: "They show height only. Geology, land use and vegetation are shown by other symbols and colours." },
      { wrong: "\"You can measure a river's length with a ruler.\"",
        right: "A ruler gives the straight-line distance and ignores every bend. Use string or the edge of paper, following the course." },
      { wrong: "\"A V-shape in the contours always means a valley.\"",
        right: "Only when it points uphill, towards higher numbers. Pointing downhill it is a spur — high ground projecting outwards." },
      { wrong: "\"Describing a route just means listing what you pass.\"",
        right: "It needs direction, distance and named features together. 'South-east for 2 km past the wood at 342178' is the level expected." },
    ],
  },

  "geography/weather-and-climate": {
    summary:
      "Weather is what the atmosphere is doing today; climate is what it does on average over thirty years or more. Confusing the two is the single most common error in this topic and the one that causes most muddle later, when climate change comes up. This covers how weather is measured, why the UK gets the weather it does, air masses, depressions and anticyclones, and how to read a synoptic chart.",
    keyFacts: [
      {
        heading: "Weather, climate and measurement",
        points: [
          "Weather is the state of the atmosphere at a place at a moment: temperature, rainfall, wind, cloud, pressure, humidity.",
          "Climate is the average pattern over a long period, conventionally at least 30 years.",
          "Temperature is measured in a Stevenson screen — white, louvred, 1.25 m above the ground, to keep the thermometer in shade and moving air.",
          "Rainfall is measured with a rain gauge sunk into the ground and away from buildings and trees, in millimetres.",
          "Wind is measured with an anemometer for speed and a wind vane for direction — and wind is named after where it comes FROM, not where it is going.",
          "Pressure is measured with a barometer in millibars; around 1013 mb is average at sea level.",
        ],
      },
      {
        heading: "Why the UK's weather is what it is",
        points: [
          "Latitude: Britain sits in the mid-latitudes, where warm tropical air meets cold polar air, which makes the weather changeable.",
          "The North Atlantic Drift, an extension of the Gulf Stream, brings warm water north-east and keeps Britain milder than other places at the same latitude.",
          "Prevailing winds come from the south-west, crossing the Atlantic and arriving warm and moist.",
          "Distance from the sea matters: coastal places are milder in winter and cooler in summer than inland ones, because water heats and cools slowly.",
          "Altitude: temperature falls roughly 1°C for every 100 m of height.",
          "Relief rainfall means the west gets far more rain — air is forced up over western hills, cools, and drops its moisture, leaving the east in a rain shadow.",
        ],
      },
      {
        heading: "Air masses, depressions and anticyclones",
        points: [
          "An air mass takes its character from where it forms: tropical maritime is warm and wet, polar continental is cold and dry, and so on.",
          "A depression is an area of LOW pressure, formed where warm and cold air meet. It brings cloud, rain and strong winds, and moves quickly.",
          "In a depression, the warm front brings steady rain, the warm sector is mild and cloudy, and the cold front brings heavy showers and a temperature drop.",
          "An anticyclone is an area of HIGH pressure with sinking air. It brings settled weather: clear skies, light winds, hot days in summer, frost and fog in winter.",
          "Anticyclones move slowly or sit still, which is why settled spells last for days.",
          "The three types of rainfall: relief (air forced over hills), frontal (warm air rising over cold at a front), and convectional (ground heats, air rises, thunderstorms).",
        ],
      },
      {
        heading: "Reading a synoptic chart",
        points: [
          "Isobars join points of equal pressure. Close together means a steep pressure gradient and strong winds.",
          "L marks low pressure — a depression; H marks high pressure — an anticyclone.",
          "A warm front is drawn with semicircles, a cold front with triangles, and an occluded front with both alternating.",
          "In the northern hemisphere, air spirals anticlockwise into a low and clockwise out of a high.",
          "To describe the weather at a place, read the pressure, the fronts nearby, the isobar spacing and the position relative to the low.",
        ],
      },
    ],
    flashcards: [
      { term: "Weather", definition: "The state of the atmosphere at a place at a particular moment." },
      { term: "Climate", definition: "The average pattern of weather over a long period, conventionally at least 30 years." },
      { term: "Stevenson screen", definition: "A white louvred box 1.25 m above ground, keeping thermometers shaded and ventilated." },
      { term: "Anemometer", definition: "The instrument measuring wind speed. A wind vane gives direction." },
      { term: "Millibar", definition: "The unit of air pressure. Average sea-level pressure is around 1013 mb." },
      { term: "North Atlantic Drift", definition: "The warm ocean current keeping Britain milder than other places at the same latitude." },
      { term: "Prevailing wind", definition: "The direction wind most often comes from — in the UK, the south-west." },
      { term: "Air mass", definition: "A large body of air taking its temperature and humidity from the region where it formed." },
      { term: "Depression", definition: "An area of low pressure bringing cloud, rain and strong winds, and moving quickly." },
      { term: "Anticyclone", definition: "An area of high pressure with sinking air, bringing settled, dry weather that can last for days." },
      { term: "Front", definition: "The boundary between two air masses. Warm fronts bring steady rain; cold fronts bring heavy showers." },
      { term: "Isobar", definition: "A line joining points of equal air pressure. Close spacing means strong winds." },
      { term: "Relief rainfall", definition: "Rain caused by air being forced to rise over hills, cooling and condensing." },
      { term: "Convectional rainfall", definition: "Rain caused by the ground heating, air rising rapidly and forming thunderstorms." },
      { term: "Rain shadow", definition: "The drier area on the far side of hills, where air has already lost its moisture." },
    ],
    examTips: [
      {
        tip: "Define weather and climate separately, every time",
        detail:
          "Weather is now; climate is the thirty-year average. Getting this right at the start protects every later answer, especially on climate change.",
      },
      {
        tip: "Wind is named after where it comes FROM",
        detail:
          "A westerly wind blows from the west. It catches people out constantly, and it changes the meaning of a whole answer.",
      },
      {
        tip: "Low pressure means bad weather, high means settled",
        detail:
          "Two words worth memorising: low is unsettled, high is settled. Most synoptic chart questions start from that.",
      },
      {
        tip: "Give the west-east rainfall difference a cause",
        detail:
          "Prevailing south-westerlies cross the Atlantic, are forced up over western hills, cool and rain — leaving the east in a rain shadow. Name the mechanism, not just the pattern.",
      },
      {
        tip: "Learn the three rainfall types with an example each",
        detail:
          "Relief in the Lake District, frontal with a depression, convectional on a hot summer afternoon. Examples turn definitions into answers.",
      },
      {
        tip: "Use isobar spacing when describing wind",
        detail:
          "Close isobars mean a steep pressure gradient and strong winds. It is the evidence the question is looking for.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why western Britain is much wetter than eastern Britain.",
        steps: [
          "The prevailing wind comes from the south-west, crossing thousands of kilometres of Atlantic Ocean.",
          "Air travelling over the sea picks up moisture by evaporation, so it arrives warm and very moist.",
          "The first land it meets is the upland west — the mountains of Wales, the Lake District, western Scotland.",
          "Forced to rise over that high ground, the air cools, water vapour condenses, and it rains. This is relief rainfall.",
          "By the time the air crosses to the east it has lost most of its moisture, and it also warms as it descends, which reduces condensation further.",
          "The east therefore lies in a rain shadow — hence Manchester at roughly 800 mm a year against Cambridge at around 550 mm.",
        ],
        answer:
          "South-westerly winds cross the Atlantic and arrive moist, then are forced up over the western uplands where they cool and produce relief rainfall. Having lost that moisture, the air descends and warms over the east, leaving it in a rain shadow.",
      },
      {
        question:
          "Describe the sequence of weather as a depression passes over you.",
        steps: [
          "Ahead of the warm front: pressure falling, high cloud thickening and lowering, wind picking up.",
          "The warm front arrives: steady, prolonged rain and a rise in temperature.",
          "The warm sector: milder, cloudy, drizzle possible, pressure steady and winds moderate.",
          "The cold front arrives: heavy showers or thunderstorms, a sharp temperature drop, and a wind shift.",
          "Behind the cold front: pressure rising, brighter with scattered showers, cooler and fresher air.",
          "The whole sequence usually takes a day or two, because depressions move quickly.",
        ],
        answer:
          "Falling pressure and thickening cloud, then steady rain at the warm front, a mild cloudy warm sector, heavy showers and a temperature drop at the cold front, then rising pressure with bright, cool, showery weather behind it.",
      },
      {
        question:
          "Why does an anticyclone in winter bring frost and fog, but in summer bring heat?",
        steps: [
          "In an anticyclone air sinks, which prevents cloud forming — so skies are clear in both seasons.",
          "In summer, clear skies mean strong sunshine reaches the ground all day, so temperatures rise sharply.",
          "In winter, the sun is weak and the days short, so little heat arrives.",
          "At night, clear skies let heat radiate away freely instead of being trapped by cloud.",
          "In winter, long nights and rapid heat loss drop temperatures below freezing, producing frost, and cooling moist air to its dew point produces fog.",
          "So it is the same mechanism — clear skies — producing opposite results depending on how much energy is arriving.",
        ],
        answer:
          "Because sinking air clears the sky in both seasons, and clear skies let heat both in and out. In summer strong sunshine builds heat; in winter, weak sun and long clear nights let heat escape, producing frost and fog.",
      },
      {
        question:
          "A synoptic chart shows tightly packed isobars around a low centred west of Ireland. What weather would you expect in western Scotland?",
        steps: [
          "The low means a depression, so unsettled weather with cloud and rain.",
          "Tightly packed isobars mean a steep pressure gradient, so strong winds — possibly gales.",
          "Western Scotland is close to the centre and on the leading side, so fronts will be crossing it.",
          "Winds spiral anticlockwise into a low in the northern hemisphere, so they would be southerly or south-easterly at first.",
          "As the fronts pass, expect a period of steady rain then heavier showers and a wind shift.",
          "Temperature will rise in the warm sector and fall sharply behind the cold front.",
        ],
        answer:
          "Wet and very windy: strong to gale-force winds from the tight isobars, steady rain as the warm front crosses, heavier showers and a temperature drop behind the cold front, with winds veering as the depression passes.",
      },
    ],

    practice: [
      { question: "Over how many years is climate conventionally averaged?",
        accept: ["30", "30 years", "thirty"],
        answer: "At least 30 years. Weather is what is happening now; climate is the long-term pattern." },
      { question: "What instrument measures wind speed?",
        accept: ["anemometer", "an anemometer"],
        answer: "An anemometer. A wind vane gives direction." },
      { question: "What is the white louvred box holding thermometers called?",
        accept: ["stevenson screen", "a stevenson screen"],
        answer: "A Stevenson screen, 1.25 m above the ground to keep thermometers shaded and ventilated." },
      { question: "What unit is air pressure measured in?",
        accept: ["millibars", "millibar", "mb"],
        answer: "Millibars. Average sea-level pressure is around 1013 mb." },
      { question: "Which direction does the UK's prevailing wind come from?",
        accept: ["south west", "south-west", "southwest", "sw"],
        answer: "The south-west, crossing the Atlantic and arriving warm and moist." },
      { question: "Which ocean current keeps Britain milder than its latitude suggests?",
        accept: ["north atlantic drift", "gulf stream", "the north atlantic drift"],
        answer: "The North Atlantic Drift, an extension of the Gulf Stream." },
      { question: "Roughly how much does temperature fall per 100 m of altitude, in °C?",
        accept: ["1", "1c", "1°c", "1 degree"],
        answer: "About 1°C per 100 m, which is why upland areas are so much colder than the lowlands beside them." },
      { question: "Is a depression an area of high or low pressure?",
        accept: ["low", "low pressure"],
        answer: "Low pressure — bringing cloud, rain and strong winds, and moving quickly." },
      { question: "Is an anticyclone an area of high or low pressure?",
        accept: ["high", "high pressure"],
        answer: "High pressure, with sinking air and settled weather that can last for days." },
      { question: "What are lines joining points of equal pressure called?",
        accept: ["isobars", "isobar"],
        answer: "Isobars. Closely spaced isobars mean strong winds." },
      { question: "Which front brings steady, prolonged rain?",
        accept: ["warm front", "warm", "the warm front"],
        answer: "The warm front. The cold front brings heavier showers and a sharp temperature drop." },
      { question: "Name the type of rainfall caused by air rising over hills.",
        accept: ["relief", "relief rainfall", "orographic"],
        answer: "Relief rainfall, which is why western Britain is so much wetter than the east." },
      { question: "Name the type of rainfall caused by the ground heating and air rising rapidly.",
        accept: ["convectional", "convectional rainfall", "convection"],
        answer: "Convectional rainfall — typical of hot summer afternoons and thunderstorms." },
      { question: "What is the drier area beyond hills called?",
        accept: ["rain shadow", "a rain shadow", "the rain shadow"],
        answer: "A rain shadow, where air has already lost its moisture." },
      { question: "A westerly wind blows FROM which direction?",
        accept: ["west", "the west"],
        answer: "From the west. Winds are always named after where they come from." },
      { question: "In the northern hemisphere, does air spiral clockwise or anticlockwise into a low?",
        accept: ["anticlockwise", "counterclockwise", "anti clockwise"],
        answer: "Anticlockwise into a low, and clockwise out of a high." },
      { question: "Explain why coastal places have milder winters and cooler summers than inland places.",
        answer: "Because water heats up and cools down far more slowly than land. In summer the sea stays relatively cool while inland areas heat quickly, so onshore breezes moderate coastal temperatures downwards. In winter the sea holds heat gained over the summer and releases it slowly, so it stays warmer than the land and keeps coastal air above the temperatures found inland. The technical term is thermal capacity: the sea acts as an enormous store that smooths out extremes in both directions. It is why Cornwall rarely sees deep frost while similar latitudes in central Europe regularly do. (Mark this one yourself.)" },
      { question: "Explain why confusing weather with climate causes problems in discussions of climate change.",
        answer: "Because the two operate on completely different timescales, and evidence about one says almost nothing about the other. A single cold winter is weather — a fluctuation within the normal variability of the atmosphere — and it tells you nothing about the thirty-year averages that define climate. People frequently use one unusually cold spell to dismiss long-term warming, which is a category error: climate is the pattern the fluctuations happen within. The reverse mistake is just as common, treating one hot summer as proof on its own. The honest position is that climate change shows up in the statistics of decades and in the changing frequency of extremes, not in what happened last Tuesday. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Weather and climate mean roughly the same thing.\"",
        right: "Weather is the atmosphere now; climate is the average over 30 years or more. The confusion is what allows a cold week to be misread as evidence against warming." },
      { wrong: "\"A westerly wind blows towards the west.\"",
        right: "Winds are named after where they come FROM. A westerly blows from the west towards the east." },
      { wrong: "\"High pressure always means hot weather.\"",
        right: "High pressure means settled and clear. In summer that gives heat; in winter the same clear skies let heat escape overnight, producing frost and fog." },
      { wrong: "\"Britain is wet because it is an island.\"",
        right: "It is wet because moist Atlantic air is forced up over the western uplands. The east, in the rain shadow, is drier than much of Europe." },
      { wrong: "\"Depressions and anticyclones move at similar speeds.\"",
        right: "Depressions move quickly, which is why unsettled weather changes within a day. Anticyclones move slowly or stall, which is why settled spells persist." },
      { wrong: "\"The Gulf Stream warms Britain by blowing warm air.\"",
        right: "It is an ocean current, not a wind. It carries warm water north-east, and the prevailing south-westerlies then pick up that warmth as they cross it." },
    ],
  },

};
