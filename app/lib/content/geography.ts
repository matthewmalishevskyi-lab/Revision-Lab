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

  "geography/tectonic-hazards": {
    summary:
      "Earthquakes and volcanoes are not scattered randomly — almost all of them sit along the boundaries between the plates that make up the earth's surface. Once you know what a boundary is doing, you can predict what kind of hazard it produces. The other half of this topic is more uncomfortable: the same earthquake kills tens of people in one country and tens of thousands in another, and the reason is wealth.",
    keyFacts: [
      {
        heading: "Plate tectonics",
        points: [
          "The earth's crust is broken into tectonic plates that move a few centimetres a year, driven by convection currents in the mantle and by slab pull at subduction zones.",
          "Continental crust is thicker, older and less dense. Oceanic crust is thinner, younger and denser — which is why it subducts beneath continental crust rather than the other way round.",
          "Destructive (convergent) margins: plates move together. Oceanic subducts under continental, producing violent earthquakes and explosive volcanoes — the Andes, for example.",
          "Constructive (divergent) margins: plates move apart, magma rises to fill the gap, producing gentle volcanoes and mild earthquakes — Iceland, on the Mid-Atlantic Ridge.",
          "Conservative (transform) margins: plates slide past each other. No volcanoes, because no crust is created or destroyed, but severe earthquakes — the San Andreas Fault.",
          "Collision margins: two continental plates meet and crumple upwards, forming fold mountains such as the Himalayas. Earthquakes, no volcanoes.",
        ],
      },
      {
        heading: "Earthquakes",
        points: [
          "Pressure builds where plates lock together, then releases suddenly as the rock fractures.",
          "The focus is the point underground where it happens; the epicentre is the point on the surface directly above it.",
          "A shallow focus produces far more surface damage than a deep one of the same magnitude.",
          "The Richter and moment magnitude scales are logarithmic: each whole number is about 32 times more energy released.",
          "Secondary hazards often kill more than the shaking: tsunamis, landslides, fires from broken gas mains, and disease from broken water supplies.",
          "Liquefaction happens where saturated loose ground behaves like a liquid during shaking, and buildings sink or tilt.",
        ],
      },
      {
        heading: "Volcanoes",
        points: [
          "Composite (strato) volcanoes form at destructive margins: steep, made of alternating ash and lava, with thick sticky lava and violent eruptions.",
          "Shield volcanoes form at constructive margins and hot spots: broad and gently sloping, with runny lava and gentle eruptions.",
          "Hot spots such as Hawaii sit in the middle of a plate, over a plume of rising magma, which is why they break the boundary rule.",
          "Hazards include lava flows, ash falls, pyroclastic flows (fast-moving clouds of gas and rock, the most lethal), lahars (mudflows) and gas.",
          "Why people live there anyway: volcanic soils are extremely fertile, geothermal energy is cheap, minerals are mined, tourism brings income, and often it is simply home.",
        ],
      },
      {
        heading: "Why the same earthquake kills different numbers",
        points: [
          "Primary effects happen immediately: buildings collapse, people are killed and injured, roads and pipes break.",
          "Secondary effects follow: fire, disease, homelessness, unemployment, and economic loss.",
          "Responses are immediate (search and rescue, water, shelter, medical aid) or long-term (rebuilding, retrofitting, planning laws, insurance).",
          "Wealth is the biggest single factor. Richer countries have enforced building codes, emergency services, monitoring, and money to rebuild.",
          "Comparison worth learning: Haiti 2010, magnitude 7.0, around 220,000 deaths in one of the poorest countries in the hemisphere; Chile 2010, magnitude 8.8 — around 500 times more energy — around 500 deaths, in a country with strict building codes.",
          "Management works: prediction is still poor for earthquakes, but preparation, planning and protection demonstrably save lives.",
        ],
      },
    ],
    flashcards: [
      { term: "Tectonic plate", definition: "A large slab of the earth's crust that moves a few centimetres a year over the mantle." },
      { term: "Convection current", definition: "The circulation of heat in the mantle, one of the forces driving plate movement." },
      { term: "Destructive margin", definition: "A boundary where plates move together and oceanic crust subducts, causing violent earthquakes and explosive volcanoes." },
      { term: "Constructive margin", definition: "A boundary where plates move apart and magma rises, causing gentle volcanoes and mild earthquakes." },
      { term: "Conservative margin", definition: "A boundary where plates slide past each other, causing severe earthquakes but no volcanoes." },
      { term: "Collision margin", definition: "A boundary where two continental plates meet and crumple upwards, forming fold mountains." },
      { term: "Subduction", definition: "The sinking of denser oceanic crust beneath lighter continental crust at a destructive margin." },
      { term: "Focus", definition: "The point underground where an earthquake originates." },
      { term: "Epicentre", definition: "The point on the surface directly above the focus, where shaking is usually strongest." },
      { term: "Composite volcano", definition: "A steep volcano of alternating ash and lava, with thick lava and violent eruptions, formed at destructive margins." },
      { term: "Shield volcano", definition: "A broad, gently sloping volcano with runny lava and gentle eruptions, formed at constructive margins and hot spots." },
      { term: "Pyroclastic flow", definition: "A fast-moving cloud of superheated gas and rock — the most lethal volcanic hazard." },
      { term: "Lahar", definition: "A volcanic mudflow of ash and water, which can travel far beyond the volcano itself." },
      { term: "Liquefaction", definition: "Saturated loose ground behaving like a liquid during shaking, causing buildings to sink or tilt." },
      { term: "Primary effect", definition: "Damage caused directly and immediately by the hazard, such as buildings collapsing." },
      { term: "Secondary effect", definition: "Damage that follows on, such as fire, disease, homelessness or economic loss." },
    ],
    examTips: [
      {
        tip: "Name the margin type before explaining the hazard",
        detail:
          "Destructive, constructive, conservative or collision. The hazard follows from the boundary, so naming it first makes the explanation almost automatic.",
      },
      {
        tip: "Remember no volcanoes at conservative margins",
        detail:
          "Crust is neither created nor destroyed there, so there is no magma route to the surface. Severe earthquakes, no eruptions — a favourite exam distinction.",
      },
      {
        tip: "Use Haiti and Chile together",
        detail:
          "2010, both. Chile's quake released around 500 times more energy and killed roughly 500 people; Haiti's killed around 220,000. That single comparison answers most 'why does wealth matter' questions.",
      },
      {
        tip: "Separate primary from secondary effects",
        detail:
          "Examiners often ask for one or the other specifically. Collapse and immediate deaths are primary; fire, disease and unemployment are secondary.",
      },
      {
        tip: "Split responses into immediate and long-term",
        detail:
          "Search and rescue and emergency aid in the first days; rebuilding, retrofitting and planning laws over years. The two need different examples.",
      },
      {
        tip: "Explain WHY people live in hazardous places",
        detail:
          "Fertile soil, geothermal energy, minerals, tourism — and that it is home, with family and work there. 'They have no choice' is too simple and loses marks.",
      },
      {
        tip: "Say the magnitude scale is logarithmic",
        detail:
          "Each whole number is about 32 times the energy, so 8.0 is not twice 4.0. It shows you understand the measurement rather than just quoting it.",
      },
    ],

    workedExamples: [
      {
        question: "Explain why volcanoes form at destructive margins.",
        steps: [
          "At a destructive margin, oceanic and continental plates move together.",
          "Oceanic crust is denser, so it subducts — sinks beneath the continental plate.",
          "As it descends it heats up and melts, and the water it carries lowers the melting point of the surrounding mantle.",
          "The molten rock is less dense than the material around it, so it rises through cracks in the crust.",
          "Where it reaches the surface it erupts, building a composite volcano.",
          "The lava is thick and sticky because it is rich in silica, which is why eruptions here are explosive rather than gentle.",
        ],
        answer:
          "Denser oceanic crust subducts beneath continental crust, melts as it descends, and the resulting magma rises through the crust to erupt. The silica-rich, sticky lava produces the steep composite volcanoes and violent eruptions typical of these margins.",
      },
      {
        question:
          "The 2010 Haiti earthquake (magnitude 7.0) killed around 220,000 people. The 2010 Chile earthquake (magnitude 8.8) killed around 500. Explain the difference.",
        steps: [
          "Note first that Chile's quake was far larger — the scale is logarithmic, so 8.8 released roughly 500 times the energy of 7.0.",
          "Buildings: Chile had strict, enforced earthquake building codes; much of Haiti's construction was unreinforced concrete with no code enforcement.",
          "Preparation: Chile had drills, monitoring and an emergency plan. Haiti had almost none.",
          "Emergency services: Chile could deploy its own trained rescue teams within hours; Haiti's government buildings, including the presidential palace, had themselves collapsed.",
          "Wealth: Chile could fund its own recovery. Haiti was the poorest country in the western hemisphere and depended on international aid that arrived slowly.",
          "Population density and location: Haiti's epicentre was close to Port-au-Prince, a densely built capital.",
          "Judgement: magnitude explains almost none of it. Wealth, and what wealth buys in codes, services and preparation, explains almost all of it.",
        ],
        answer:
          "Because the death toll depends far more on development than on magnitude. Chile's much larger quake killed fewer people because it had enforced building codes, trained emergency services, preparation and the money to respond. Haiti had almost none of those, and its epicentre was beside a densely built capital.",
      },
      {
        question:
          "Explain why people continue to live close to active volcanoes.",
        steps: [
          "Soil: volcanic ash weathers into extremely fertile soil, so farming yields are high — a strong reason in agricultural economies.",
          "Energy: geothermal power is cheap and reliable, and Iceland generates most of its electricity and heating this way.",
          "Minerals: sulphur, copper and other valuable deposits form in volcanic areas.",
          "Tourism: visitors bring income and jobs, in places where alternatives may be limited.",
          "Risk perception: eruptions may be decades or centuries apart, so the danger feels remote compared with the daily benefits.",
          "And simply: it is home. Family, land, work and community are there, and moving is expensive and often impossible.",
        ],
        answer:
          "Fertile volcanic soils, cheap geothermal energy, valuable minerals and tourist income — set against a risk that may not materialise for decades. And for most people it is simply where they live, with family, work and land there, and no realistic means of leaving.",
      },
      {
        question:
          "Why are earthquakes so much harder to predict than volcanic eruptions?",
        steps: [
          "Volcanoes give warning signs: swelling of the ground, increased small tremors, changes in gas emissions, and rising temperatures.",
          "Those signs can be monitored continuously with tiltmeters, seismometers and gas sensors, often over weeks.",
          "Earthquakes give almost no reliable precursors. Stress builds invisibly, deep underground, and releases in seconds.",
          "Historical records can identify which faults are likely and roughly how often, but not when.",
          "So management differs: for volcanoes, prediction and evacuation genuinely work. For earthquakes, the effort goes into preparation and protection instead.",
          "That is why building codes, drills and retrofitting matter so much — they are the only defence available.",
        ],
        answer:
          "Because volcanoes announce themselves — ground swelling, tremors and gas changes can be monitored for weeks — while earthquake stress builds invisibly and releases in seconds. Faults can be identified but not timed, which is why earthquake management relies on building codes and preparation rather than evacuation.",
      },
    ],

    practice: [
      { question: "What is the boundary called where plates move together?",
        accept: ["destructive", "destructive margin", "convergent"],
        answer: "A destructive (convergent) margin, producing violent earthquakes and explosive volcanoes." },
      { question: "What is the boundary called where plates move apart?",
        accept: ["constructive", "constructive margin", "divergent"],
        answer: "A constructive (divergent) margin, producing gentle volcanoes and mild earthquakes." },
      { question: "What is the boundary called where plates slide past each other?",
        accept: ["conservative", "conservative margin", "transform"],
        answer: "A conservative (transform) margin — severe earthquakes, but no volcanoes." },
      { question: "Are there volcanoes at conservative margins? Answer yes or no.",
        accept: ["no"],
        answer: "No. No crust is created or destroyed there, so there is no route for magma to reach the surface." },
      { question: "What is the sinking of oceanic crust beneath continental crust called?",
        accept: ["subduction"],
        answer: "Subduction. It happens because oceanic crust is denser." },
      { question: "Which is denser, oceanic or continental crust?",
        accept: ["oceanic"],
        answer: "Oceanic — which is why it subducts rather than the other way round." },
      { question: "What is the point underground where an earthquake starts called?",
        accept: ["focus", "the focus", "hypocentre"],
        answer: "The focus. The point on the surface directly above it is the epicentre." },
      { question: "What is the point on the surface above the focus called?",
        accept: ["epicentre", "epicenter", "the epicentre"],
        answer: "The epicentre, where shaking is usually strongest." },
      { question: "Roughly how many times more energy does each whole number on the magnitude scale represent?",
        accept: ["32", "about 32"],
        answer: "About 32 times. The scale is logarithmic, so 8.0 is vastly more than twice 4.0." },
      { question: "Which volcano type is steep, with thick lava and violent eruptions?",
        accept: ["composite", "composite volcano", "stratovolcano", "strato"],
        answer: "A composite (strato) volcano, formed at destructive margins." },
      { question: "Which volcano type is broad and gently sloping with runny lava?",
        accept: ["shield", "shield volcano"],
        answer: "A shield volcano, formed at constructive margins and hot spots." },
      { question: "What is the most lethal volcanic hazard, a fast-moving cloud of gas and rock?",
        accept: ["pyroclastic flow", "pyroclastic flows", "pyroclastic"],
        answer: "A pyroclastic flow, which can travel at hundreds of kilometres per hour." },
      { question: "What is a volcanic mudflow called?",
        accept: ["lahar", "a lahar", "lahars"],
        answer: "A lahar, which can travel far beyond the volcano itself." },
      { question: "What is it called when saturated ground behaves like a liquid during shaking?",
        accept: ["liquefaction"],
        answer: "Liquefaction. Buildings sink or tilt even when their structure is intact." },
      { question: "Which fault is the classic example of a conservative margin?",
        accept: ["san andreas", "the san andreas", "san andreas fault"],
        answer: "The San Andreas Fault in California." },
      { question: "Which mountain range formed at a collision margin between two continental plates?",
        accept: ["himalayas", "the himalayas", "himalaya"],
        answer: "The Himalayas, where the Indian and Eurasian plates are still crumpling upwards." },
      { question: "Explain why wealth matters more than magnitude in determining how many people die.",
        answer: "Because almost everything that keeps people alive in an earthquake costs money. Enforced building codes mean structures flex instead of collapsing, and collapsing buildings are what kill most people. Trained, equipped emergency services reach the trapped within the first hours, when survival rates are highest. Monitoring, drills and public education mean people know what to do. Hospitals stay standing and functioning. And afterwards, a wealthy country can fund its own reconstruction rather than waiting for aid. The 2010 comparison makes it unarguable: Chile's earthquake released roughly 500 times the energy of Haiti's and killed around 500 people against roughly 220,000. (Mark this one yourself.)" },
      { question: "Explain why hot spots such as Hawaii appear to break the rule that volcanoes occur at plate boundaries.",
        answer: "Because they are fed from below rather than from a boundary. A hot spot is a plume of unusually hot material rising from deep in the mantle, and it stays roughly fixed while the plate slides over the top of it. Magma burns through the middle of the plate and builds a volcano on the surface, nowhere near an edge. Over millions of years the plate carries that volcano away from the plume, the volcano becomes extinct, and a new one forms behind it — which is why Hawaii is a chain of islands that gets progressively older towards the north-west. The rule about boundaries still holds for the great majority of volcanoes; hot spots are the explained exception. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Volcanoes occur at all plate boundaries.\"",
        right: "Not at conservative or collision margins. No crust is created or destroyed there, so magma has no route to the surface — severe earthquakes, no eruptions." },
      { wrong: "\"A magnitude 8 earthquake is twice as strong as a magnitude 4.\"",
        right: "The scale is logarithmic. Each whole number is about 32 times the energy, so magnitude 8 releases roughly a million times more than magnitude 4." },
      { wrong: "\"The bigger the earthquake, the more people die.\"",
        right: "Development matters far more. Chile 2010 was around 500 times more powerful than Haiti 2010 and killed roughly 500 people against 220,000." },
      { wrong: "\"People near volcanoes are too poor to move.\"",
        right: "Poverty is one factor, but volcanic soils are highly fertile, geothermal energy is cheap, and tourism and mining bring income. For most people it is also simply home." },
      { wrong: "\"Earthquakes can be predicted like the weather.\"",
        right: "Faults can be identified and their rough frequency estimated, but not the timing. Volcanoes give weeks of warning signs; earthquakes give almost none." },
      { wrong: "\"The shaking is what kills people.\"",
        right: "Collapsing buildings kill people — which is why building codes save so many lives — along with secondary hazards like tsunamis, fire and disease." },
    ],
  },

  "geography/fieldwork-and-enquiry": {
    summary:
      "Every GCSE Geography student does two pieces of fieldwork — one physical, one human — and is then examined on them in writing. The exam does not ask what you found; it asks whether you understood WHY you did it that way. That makes fieldwork one of the most predictable parts of the course, because the enquiry process is always the same six stages whatever you actually measured.",
    keyFacts: [
      {
        heading: "The enquiry process",
        points: [
          "1. Question or hypothesis — a clear, testable statement, such as 'river velocity increases downstream'.",
          "2. Data collection — planning what to measure, where, when and how.",
          "3. Data presentation — turning results into maps, graphs and diagrams.",
          "4. Data analysis — describing patterns, quoting figures, spotting anomalies.",
          "5. Conclusion — answering the original question directly, with evidence.",
          "6. Evaluation — how reliable the data was, what went wrong, and what you would change.",
          "Every fieldwork question in the exam sits somewhere in that sequence, so knowing the order is half the battle.",
        ],
      },
      {
        heading: "Primary and secondary data",
        points: [
          "Primary data is collected by you in the field: measurements, counts, questionnaires, photographs, field sketches.",
          "Secondary data comes from someone else: census data, Environment Agency river records, historical maps, Met Office statistics.",
          "Quantitative data is numerical — width in metres, pedestrian counts, decibel readings. It is easy to graph and compare.",
          "Qualitative data is descriptive — opinions, sketches, photographs, environmental quality judgements. It captures things numbers miss.",
          "Good enquiries use both. Numbers show the pattern; descriptions explain what it feels like on the ground.",
        ],
      },
      {
        heading: "Sampling, and why it matters",
        points: [
          "You cannot measure everything, so you sample — and how you choose the sample shapes everything that follows.",
          "Random sampling: every point has an equal chance of selection, usually via random numbers. Unbiased, but may miss areas by chance.",
          "Systematic sampling: at regular intervals — every 50 m along a river, every fifth shop. Even coverage, but can miss a pattern that repeats at the same interval.",
          "Stratified sampling: the sample is divided in proportion to something known, such as sampling more sites in the areas with more housing. Fairer for uneven populations, but needs data in advance.",
          "Sample size matters: too few sites and one odd reading distorts everything.",
          "Sampling is where most fieldwork evaluation marks live, because every method has a weakness you can name.",
        ],
      },
      {
        heading: "Presenting and analysing",
        points: [
          "Choose the presentation method that suits the data: line graphs for continuous change, bar charts for comparison, pie charts for proportion, scatter graphs for relationships between two variables.",
          "Located methods put data on a map: proportional symbols, choropleth shading, flow lines, and pie charts placed at their sites.",
          "Cross-sections and field sketches work well for river and coastal profiles.",
          "Analysis means describing the trend, quoting figures, and identifying anomalies — then explaining them using geographical knowledge.",
          "An anomaly is not a mistake to hide. Explaining why one site broke the pattern is often the most impressive part of an answer.",
        ],
      },
      {
        heading: "Evaluation — the part most students rush",
        points: [
          "Reliability: would the same method give the same result if repeated? More sites and repeat readings improve it.",
          "Accuracy: did the equipment measure what you intended? A flow meter held at the wrong depth measures the wrong thing.",
          "Bias: questionnaires done at 10am on a Tuesday reach a very particular set of people.",
          "Limitations of conditions: weather, tide, time of day and season all affect results, and were probably outside your control.",
          "Improvements must be realistic and specific: 'measure at three depths per site' beats 'collect more data'.",
          "Honest evaluation scores better than pretending the data was perfect. Examiners reward recognising a weakness far more than claiming there was none.",
        ],
      },
    ],
    flashcards: [
      { term: "Hypothesis", definition: "A clear, testable statement that fieldwork sets out to support or reject." },
      { term: "Primary data", definition: "Data you collect yourself in the field, such as measurements, counts or questionnaires." },
      { term: "Secondary data", definition: "Data collected by someone else, such as census figures or Environment Agency records." },
      { term: "Quantitative data", definition: "Numerical data that can be counted or measured and easily graphed." },
      { term: "Qualitative data", definition: "Descriptive data such as opinions, sketches and photographs, capturing what numbers miss." },
      { term: "Random sampling", definition: "Selecting sites so every point has an equal chance — unbiased, but can leave gaps by chance." },
      { term: "Systematic sampling", definition: "Selecting sites at regular intervals, giving even coverage but risking a repeating pattern being missed." },
      { term: "Stratified sampling", definition: "Dividing the sample in proportion to a known characteristic, so each group is fairly represented." },
      { term: "Anomaly", definition: "A result that does not fit the pattern. Explaining one is often worth more than ignoring it." },
      { term: "Reliability", definition: "Whether repeating the method would give the same result." },
      { term: "Accuracy", definition: "Whether the equipment and technique measured what you actually intended to measure." },
      { term: "Bias", definition: "A systematic distortion in data caused by how, when or where it was collected." },
      { term: "Choropleth map", definition: "A map using shading density to show how a value varies between areas." },
      { term: "Proportional symbols", definition: "Map symbols drawn in sizes proportional to the value they represent." },
      { term: "Scatter graph", definition: "A graph plotting two variables against each other to reveal a relationship." },
    ],
    examTips: [
      {
        tip: "Learn the six stages in order",
        detail:
          "Question, collection, presentation, analysis, conclusion, evaluation. Every fieldwork question sits somewhere in that sequence, and naming the stage focuses the answer instantly.",
      },
      {
        tip: "Justify methods, don't just describe them",
        detail:
          "'We used systematic sampling every 50 m BECAUSE it gave even coverage along the whole reach' is the level. Description alone is the lower band.",
      },
      {
        tip: "Name a weakness for every method you used",
        detail:
          "There is no perfect sampling technique. Saying which weakness yours had, and what it did to your results, is where evaluation marks live.",
      },
      {
        tip: "Use YOUR actual data",
        detail:
          "Quote real figures and real place names from your own fieldwork. Generic answers about 'a river' cannot reach the top bands.",
      },
      {
        tip: "Explain anomalies rather than hiding them",
        detail:
          "One site that broke the pattern, with a geographical explanation for why, is more impressive than pretending every result was neat.",
      },
      {
        tip: "Make improvements specific",
        detail:
          "'Repeat velocity readings three times per site and take a mean' beats 'collect more data'. Vague improvements earn nothing.",
      },
      {
        tip: "Match the graph to the data",
        detail:
          "Continuous change gets a line graph; comparison gets bars; proportions get a pie; relationships get a scatter. Choosing wrongly costs marks even when the data is right.",
      },
    ],

    workedExamples: [
      {
        question: "Justify the use of systematic sampling for measuring river width downstream.",
        steps: [
          "State the method precisely: sites every 500 m along the river's course from source towards mouth, for example.",
          "Reason one — even coverage: it guarantees the whole length is represented, rather than clustering in the easy-to-reach parts.",
          "Reason two — it suits the hypothesis: the question is about change WITH DISTANCE, so equal spacing makes the comparison meaningful.",
          "Reason three — it is repeatable: someone else could follow the same rule and get comparable sites, which supports reliability.",
          "Then the weakness, because justification includes limitations: if some feature recurs at a similar interval — a weir, a bridge — the sample could systematically catch or miss it.",
          "And practicality: access, safety and time all constrain where measurement is possible at all.",
        ],
        answer:
          "Because the hypothesis is about change with distance, so equally spaced sites make the comparison meaningful and cover the whole reach rather than clustering where access is easy. It is also repeatable. The weakness is that any feature recurring at a similar spacing could be systematically over- or under-sampled.",
      },
      {
        question:
          "Your pedestrian count in a town centre was taken at 11am on a Wednesday. Evaluate that decision.",
        steps: [
          "Strength: mid-morning midweek avoids both the rush hour and the weekend peak, so it captures a fairly typical trading day.",
          "Strength: it is safe, and it is a time a school group can realistically be there.",
          "Weakness — time bias: it misses the commuter peak, the lunchtime surge and evening activity, so it under-represents total footfall.",
          "Weakness — day bias: Wednesday is not Saturday, and retail geography differs enormously between them.",
          "Weakness — one-off: a single count cannot separate a normal day from an unusual one, and weather alone can change footfall substantially.",
          "Improvement, made specific: count at three times of day on both a weekday and a Saturday, and take a mean.",
        ],
        answer:
          "It captures a fairly typical trading period and is practical and safe, but it is a single snapshot: it misses commuter, lunchtime and evening peaks, ignores weekend patterns, and cannot separate a normal day from an unusual one. Counting at three times of day on both a weekday and a Saturday, and averaging, would fix most of that.",
      },
      {
        question:
          "One site in your river study had a velocity far lower than the trend. How should you handle it?",
        steps: [
          "Do not delete it. An anomaly is data, and hiding it weakens the whole enquiry.",
          "Identify it clearly on the graph and in the analysis, and say by how much it departs from the trend.",
          "Look for a geographical explanation: a wider, shallower channel at that point, an obstruction, dense vegetation, or an artificial structure slowing the flow.",
          "Consider a methodological explanation too: was the flow meter held at a different depth, or in an eddy near the bank?",
          "State which explanation you think most likely and why.",
          "Then use it in the evaluation: if it is methodological, that is a genuine limitation to name.",
        ],
        answer:
          "Keep it, identify it explicitly, and explain it. Look first for a geographical cause — a wider shallower channel, vegetation or an obstruction — and then for a methodological one, such as the meter being held at the wrong depth. Explaining an anomaly is worth far more than quietly removing it.",
      },
      {
        question:
          "Why does the choice of sampling method matter so much to the conclusion?",
        steps: [
          "Because the sample is all the evidence the conclusion rests on — nothing outside it was measured.",
          "A biased sample produces a confident conclusion about the wrong thing. Measuring only accessible riverbanks means measuring the gentlest sites.",
          "Random sampling removes deliberate bias but can leave large gaps purely by chance, especially with few sites.",
          "Systematic sampling guarantees coverage but can lock onto a repeating feature.",
          "Stratified sampling is fairest where the population is uneven, but requires knowing the proportions in advance.",
          "So the method has to be chosen for the question being asked, and its weakness stated honestly in the evaluation.",
        ],
        answer:
          "Because the sample is the entire evidence base — anything not sampled is invisible to the conclusion. Each method has a characteristic weakness: random can leave gaps, systematic can lock onto a repeating feature, stratified needs prior data. Naming which weakness applies to yours is what the evaluation is for.",
      },
    ],

    practice: [
      { question: "How many stages are there in the enquiry process as taught here?",
        accept: ["6", "six"],
        answer: "Six: question, data collection, presentation, analysis, conclusion, evaluation." },
      { question: "What is a clear, testable statement that fieldwork sets out to test called?",
        accept: ["hypothesis", "a hypothesis"],
        answer: "A hypothesis, such as 'river velocity increases downstream'." },
      { question: "What is data you collect yourself in the field called?",
        accept: ["primary", "primary data"],
        answer: "Primary data — measurements, counts, questionnaires, sketches and photographs." },
      { question: "What is data collected by someone else called?",
        accept: ["secondary", "secondary data"],
        answer: "Secondary data, such as census figures or Environment Agency river records." },
      { question: "What is numerical data called?",
        accept: ["quantitative", "quantitative data"],
        answer: "Quantitative data — easy to graph and compare." },
      { question: "What is descriptive data such as opinions and sketches called?",
        accept: ["qualitative", "qualitative data"],
        answer: "Qualitative data. It captures things numbers cannot." },
      { question: "Which sampling method uses regular intervals?",
        accept: ["systematic", "systematic sampling"],
        answer: "Systematic sampling — even coverage, but it can lock onto a repeating feature." },
      { question: "Which sampling method gives every point an equal chance of selection?",
        accept: ["random", "random sampling"],
        answer: "Random sampling — unbiased, but it can leave gaps purely by chance." },
      { question: "Which sampling method divides the sample in proportion to a known characteristic?",
        accept: ["stratified", "stratified sampling"],
        answer: "Stratified sampling, which is fairest when the population is uneven." },
      { question: "What is a result that does not fit the pattern called?",
        accept: ["anomaly", "an anomaly", "outlier"],
        answer: "An anomaly. Explaining one is worth far more than removing it." },
      { question: "Which graph type best shows a relationship between two variables?",
        accept: ["scatter", "scatter graph", "scattergraph", "scatter plot"],
        answer: "A scatter graph, which reveals whether two things vary together." },
      { question: "Which map type uses shading density to show variation between areas?",
        accept: ["choropleth", "choropleth map"],
        answer: "A choropleth map, where darker shading means a higher value." },
      { question: "What is it called when repeating the method would give the same result?",
        accept: ["reliability", "reliable"],
        answer: "Reliability. Accuracy is a separate question — whether you measured the right thing." },
      { question: "Which stage of the enquiry process comes last?",
        accept: ["evaluation", "the evaluation"],
        answer: "Evaluation — reliability, limitations and realistic improvements." },
      { question: "Should you delete an anomalous result? Answer yes or no.",
        accept: ["no"],
        answer: "No. Identify it, explain it, and use it in your evaluation." },
      { question: "Which graph type is best for showing continuous change over distance?",
        accept: ["line graph", "line", "a line graph"],
        answer: "A line graph. Bars are for comparison, pies for proportion." },
      { question: "Explain why honest evaluation scores better than claiming your data was perfect.",
        answer: "Because no fieldwork is perfect, and examiners know it. Every sampling method has a characteristic weakness, every measurement has a margin of error, and conditions like weather, tide and time of day are largely outside a student's control. Claiming otherwise signals that you have not understood the method well enough to see its limits, which is precisely what the evaluation is testing. Recognising that your pedestrian count missed the evening peak, or that measuring only accessible riverbanks biased the sample towards gentler sites, shows you understand what your data can and cannot support — and that is a more advanced skill than collecting it in the first place. (Mark this one yourself.)" },
      { question: "Explain why the sampling method chosen shapes the conclusion as much as the measurements do.",
        answer: "Because the sample is the whole evidence base: anything you did not measure is completely invisible to your conclusion, however confidently it is stated. If you only measured where the riverbank was safe to reach, you measured the gentlest sites and your conclusion describes those, not the river. Random sampling avoids deliberate bias but can leave whole stretches unmeasured by chance, especially with few sites. Systematic sampling guarantees coverage but can accidentally align with a repeating feature like bridges or weirs. Stratified sampling is fairest for uneven populations but needs data you may not have in advance. The method has to be chosen to fit the question, and its weakness stated. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"The exam asks what you found in your fieldwork.\"",
        right: "It mostly asks WHY you did it that way — how methods were chosen, what their limitations were, and how you would improve them." },
      { wrong: "\"Anomalies should be removed so the graph looks better.\"",
        right: "An anomaly is data. Identifying and explaining one is often the most impressive part of an analysis." },
      { wrong: "\"Random sampling is always the best method.\"",
        right: "It removes deliberate bias but can leave large gaps by chance. Systematic suits change along a transect; stratified suits uneven populations." },
      { wrong: "\"'Collect more data' is a good improvement.\"",
        right: "Too vague to earn marks. 'Take three velocity readings per site and average them' is specific enough to be worth something." },
      { wrong: "\"Reliability and accuracy mean the same thing.\"",
        right: "Reliability is whether repeating gives the same answer; accuracy is whether you measured the right thing. Data can be reliably wrong." },
      { wrong: "\"Qualitative data is less valuable than numbers.\"",
        right: "It captures what numbers miss — how a place feels, why people behave as they do. The strongest enquiries use both together." },
    ],
  },

  "geography/maps-graphs-and-statistics": {
    summary:
      "Roughly a tenth of the marks in GCSE Geography come from skills questions, and they are the most reliably winnable marks on the paper — because unlike a case study, nothing here depends on remembering the right example. Choosing the right graph, reading a scale correctly and calculating a mean or a median are rules, and rules can simply be learned.",
    keyFacts: [
      {
        heading: "Choosing the right graph",
        points: [
          "Line graph: continuous change, especially over time or distance. Climate graphs use a line for temperature.",
          "Bar chart: comparing separate categories. Climate graphs use bars for rainfall.",
          "Histogram: like a bar chart but for continuous data grouped into classes, with no gaps between the bars.",
          "Pie chart: proportions of a single whole. Useless for comparing two different totals.",
          "Scatter graph: the relationship between two variables, with a line of best fit if a trend exists.",
          "Choosing wrongly loses marks even when the data is right, so read what the data actually is before deciding.",
        ],
      },
      {
        heading: "Maps that carry data",
        points: [
          "Choropleth: areas shaded by value, darker for higher. Easy to read, but it hides variation within each area.",
          "Isoline: lines joining equal values, like contours for height or isobars for pressure.",
          "Proportional symbols: circles or bars sized by value, placed at their location.",
          "Flow line: arrows whose width shows the volume of movement — traffic, migration, trade.",
          "Dot map: one dot per fixed quantity, showing distribution and density.",
          "Desire line: straight lines from origin to destination, showing where people travelled from.",
        ],
      },
      {
        heading: "Averages, spread and what they hide",
        points: [
          "Mean: add all values and divide by how many. Uses every value, but a single extreme figure drags it badly.",
          "Median: the middle value when ordered. Unaffected by extremes, which makes it better for skewed data like income.",
          "Mode: the most common value. The only average that works for categories.",
          "Range: highest minus lowest — a crude measure of spread that depends entirely on two values.",
          "Interquartile range: the spread of the middle 50%, found as upper quartile minus lower quartile. Far more robust than the range.",
          "Quoting a mean without any measure of spread hides how varied the data was, and that is exactly what an examiner is checking for.",
        ],
      },
      {
        heading: "Percentages, density and change",
        points: [
          "Percentage: part ÷ whole × 100.",
          "Percentage change: (new − old) ÷ old × 100. Note it is divided by the ORIGINAL value, not the new one.",
          "Population density: total population ÷ area, usually in people per square kilometre.",
          "Ratios express one quantity relative to another, such as a dependency ratio.",
          "Always keep units consistent before calculating, and state the unit in the answer.",
          "A percentage change of 200% means it tripled, not doubled — the commonest slip in this whole topic.",
        ],
      },
      {
        heading: "Describing data properly",
        points: [
          "Describe the overall trend first: rising, falling, fluctuating, steady.",
          "Quote figures with units, including the start and end values and the size of the change.",
          "Identify anomalies — points that break the trend — and say by how much.",
          "Use directional and locational language on maps: 'highest in the south-east, falling towards the north-west'.",
          "Do not explain when asked to describe. 'Describe' means say what it shows; 'explain' means say why. Doing the wrong one wastes time and earns nothing.",
        ],
      },
    ],
    flashcards: [
      { term: "Line graph", definition: "A graph showing continuous change, usually over time or distance." },
      { term: "Histogram", definition: "A chart for continuous data grouped into classes, drawn with no gaps between the bars." },
      { term: "Scatter graph", definition: "A graph plotting two variables against each other to show whether they are related." },
      { term: "Line of best fit", definition: "A straight line drawn through a scatter graph to summarise the trend." },
      { term: "Choropleth map", definition: "A map shading areas by value, darker for higher — easy to read, but it hides variation inside each area." },
      { term: "Isoline", definition: "A line joining points of equal value, such as a contour or an isobar." },
      { term: "Proportional symbols", definition: "Symbols drawn in sizes proportional to the values they represent, placed at their locations." },
      { term: "Flow line", definition: "An arrow whose width shows the volume of movement between two places." },
      { term: "Dot map", definition: "A map using one dot per fixed quantity to show distribution and density." },
      { term: "Mean", definition: "The total divided by the number of values. Uses every value, but is distorted by extremes." },
      { term: "Median", definition: "The middle value when the data is put in order. Unaffected by extreme values." },
      { term: "Mode", definition: "The most frequently occurring value — the only average that works for categories." },
      { term: "Range", definition: "Highest value minus lowest value. A crude measure of spread resting on just two figures." },
      { term: "Interquartile range", definition: "Upper quartile minus lower quartile — the spread of the middle 50% of the data." },
      { term: "Percentage change", definition: "(new − old) ÷ old × 100. Always divided by the ORIGINAL value." },
      { term: "Population density", definition: "Total population divided by area, usually people per square kilometre." },
    ],
    examTips: [
      {
        tip: "Read whether it says describe or explain",
        detail:
          "Describe means say what the data shows. Explain means say why. Writing the wrong one is the most common way to lose skills marks with a perfectly good answer.",
      },
      {
        tip: "Quote figures with units, every time",
        detail:
          "'Rainfall fell from 120 mm in January to 45 mm in July' is worth far more than 'rainfall decreased'. The numbers are what turns a statement into evidence.",
      },
      {
        tip: "Divide by the ORIGINAL for percentage change",
        detail:
          "(new − old) ÷ old × 100. Dividing by the new value is the classic error, and it gives an answer that looks plausible.",
      },
      {
        tip: "Use the median for skewed data",
        detail:
          "Income, house prices and settlement sizes all have long tails. One billionaire drags a mean; the median ignores them. Saying WHY you chose it earns the mark.",
      },
      {
        tip: "Always give the spread alongside the average",
        detail:
          "Two places can share a mean temperature and have completely different climates. Quoting range or interquartile range shows you know that.",
      },
      {
        tip: "Name the anomaly",
        detail:
          "Point out the value that breaks the trend and say by how much. It shows you read the data rather than skimming its shape.",
      },
      {
        tip: "Match the graph type to the data type",
        detail:
          "Proportions of one whole get a pie; separate categories get bars; continuous change gets a line; relationships get a scatter.",
      },
    ],

    workedExamples: [
      {
        question: "A town's population rose from 24,000 to 30,000. Calculate the percentage change.",
        steps: [
          "Percentage change = (new − old) ÷ old × 100.",
          "Find the change: 30,000 − 24,000 = 6,000.",
          "Divide by the ORIGINAL value, not the new one: 6,000 ÷ 24,000.",
          "6,000 ÷ 24,000 = 0.25.",
          "Multiply by 100: 25%.",
          "Check it makes sense: a quarter of 24,000 is 6,000. ✓",
        ],
        answer: "A 25% increase.",
      },
      {
        question:
          "Nine settlements have populations of 300, 420, 450, 480, 510, 560, 610, 700 and 24,000. Which average best describes them, and why?",
        steps: [
          "Calculate the mean: the total is 28,030, divided by 9 gives about 3,114.",
          "But eight of the nine settlements are under 800. A 'typical' value of 3,114 describes none of them.",
          "The single value of 24,000 has dragged the mean upwards — that is what an extreme value does.",
          "Find the median: with nine values in order, the middle one is the fifth, which is 510.",
          "510 sits comfortably among the others and genuinely represents a typical settlement here.",
          "So the median is the better choice, and the reason — skewed data with one extreme value — is what earns the mark.",
        ],
        answer:
          "The median, at 510. The mean of about 3,114 is dragged up by the single settlement of 24,000 and describes none of the nine. The median is unaffected by extremes, which is exactly why it suits skewed data.",
      },
      {
        question:
          "Describe the pattern shown by a choropleth map where population density is darkest in the south-east and palest in the north-west, ranging from 5 to 4,800 people per km².",
        steps: [
          "Start with the overall pattern and its direction: density decreases from south-east to north-west.",
          "Quote the extremes with units: from around 4,800 people per km² in the south-east to about 5 in the north-west.",
          "Comment on the scale of the difference — nearly a thousand-fold.",
          "Look for anomalies: an isolated dark patch in a generally pale region, which would be a city.",
          "Use proper locational language rather than 'here' and 'there'.",
          "And stop. The question said describe, so do not start explaining why cities are where they are.",
        ],
        answer:
          "Population density decreases from south-east to north-west, from around 4,800 people per km² at its highest to about 5 at its lowest — close to a thousand-fold difference. Any isolated dark area in the sparse north-west would be an anomaly, most likely a city.",
      },
      {
        question:
          "Why is a choropleth map sometimes misleading?",
        steps: [
          "It shades a whole area a single colour, which implies the value is uniform across it.",
          "In reality a large region may contain a dense city and vast empty countryside averaged together.",
          "The class boundaries chosen change the picture: wide classes hide variation, narrow ones exaggerate it.",
          "Large areas draw the eye more than small ones, so a big sparsely populated region can look more significant than a small dense one.",
          "It also cannot show anything below the scale of the mapped units.",
          "It remains useful for showing broad regional patterns — but the pattern it shows depends partly on how the map was drawn.",
        ],
        answer:
          "Because shading a whole area one colour implies a uniformity that rarely exists — a region containing a dense city and empty countryside is averaged into one shade. The chosen class boundaries also change the impression, and large areas dominate visually regardless of their population.",
      },
    ],

    practice: [
      { question: "Which graph type is best for continuous change over time?",
        accept: ["line graph", "line", "a line graph"],
        answer: "A line graph. Bars are for comparing separate categories." },
      { question: "Which chart shows continuous grouped data with no gaps between bars?",
        accept: ["histogram", "a histogram"],
        answer: "A histogram. The absence of gaps is what distinguishes it from a bar chart." },
      { question: "Which graph shows the relationship between two variables?",
        accept: ["scatter", "scatter graph", "scatter plot"],
        answer: "A scatter graph, often with a line of best fit." },
      { question: "Which map type shades areas by value?",
        accept: ["choropleth", "choropleth map"],
        answer: "A choropleth map — easy to read, but it hides variation within each area." },
      { question: "What is a line joining points of equal value called?",
        accept: ["isoline", "an isoline", "isolines"],
        answer: "An isoline — contours and isobars are both examples." },
      { question: "Which map type uses arrows whose width shows volume of movement?",
        accept: ["flow line", "flow lines", "flow line map"],
        answer: "A flow line map, used for traffic, migration and trade." },
      { question: "Which average is the middle value when data is ordered?",
        accept: ["median", "the median"],
        answer: "The median. It is unaffected by extreme values." },
      { question: "Which average is the most common value?",
        accept: ["mode", "the mode"],
        answer: "The mode — the only average that works for categories." },
      { question: "Which average is distorted most by one extreme value?",
        accept: ["mean", "the mean"],
        answer: "The mean, because it uses every value including the extreme one." },
      { question: "What is the spread of the middle 50% of data called?",
        accept: ["interquartile range", "iqr", "inter quartile range"],
        answer: "The interquartile range — far more robust than the plain range." },
      { question: "A value rises from 40 to 50. What is the percentage change?",
        accept: ["25", "25%"],
        answer: "25%. The change is 10, divided by the ORIGINAL 40, times 100." },
      // Reworded, because the checker was right to reject the first version.
      // It asked for "the percentage change" on a fall and accepted both -25
      // and 25 — two genuinely different numbers, which is the exact pattern
      // that once let a wrong answer be marked correct. Asking for the SIZE of
      // the decrease has one right answer and is a clearer question anyway.
      { question: "A value falls from 80 to 60. By what percentage has it decreased?",
        accept: ["25", "25%"],
        answer: "25%. The change of 20, divided by the ORIGINAL 80, times 100." },
      { question: "In percentage change, do you divide by the original or the new value?",
        accept: ["original", "the original", "old", "the old value"],
        answer: "The original. Dividing by the new value is the classic error." },
      { question: "How is population density calculated?",
        accept: ["population divided by area", "population/area", "population ÷ area"],
        answer: "Total population divided by area, usually giving people per square kilometre." },
      { question: "A percentage increase of 200% means the value has done what?",
        accept: ["tripled", "trebled", "x3", "times 3"],
        answer: "Tripled. An increase OF 200% means the original plus twice itself — the commonest slip in this topic." },
      { question: "Does 'describe' mean say what the data shows, or say why?",
        accept: ["what", "what it shows", "say what it shows"],
        answer: "What it shows. 'Explain' means say why, and doing the wrong one earns nothing." },
      { question: "Explain why quoting a mean without a measure of spread can be misleading.",
        answer: "Because two datasets with an identical mean can be completely different. Two places might both average 12°C across the year: one could sit between 10°C and 14°C all year while the other swings from −10°C to 34°C, and the mean alone would make them look the same. The mean is also dragged by extremes, so a single very high or very low value can produce a figure that describes none of the actual data — as happens with incomes and settlement sizes. Quoting the range, or better the interquartile range, tells the reader how varied the underlying data was, which is what makes an average interpretable rather than merely arithmetic. (Mark this one yourself.)" },
      { question: "Explain why skills questions are the most reliably winnable marks in Geography.",
        answer: "Because they do not depend on memory. A case study question can go wrong if you have revised a different example from the one that suits the question, and an explanation question can go wrong if you have half-remembered a process. Skills questions test rules that are always the same: percentage change is always divided by the original value, the median is always the middle of the ordered data, a choropleth always shades areas by value. Nothing changes between papers, so the same practice works every year. They also account for roughly a tenth of the total marks, which makes them a disproportionately good return on revision time compared with learning another case study. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Percentage change is divided by the new value.\"",
        right: "It is divided by the ORIGINAL value: (new − old) ÷ old × 100. Using the new value gives a plausible-looking wrong answer." },
      { wrong: "\"The mean is the best average.\"",
        right: "It is the best when data is fairly even. For skewed data like incomes or settlement sizes, one extreme value drags it and the median describes reality better." },
      { wrong: "\"A choropleth map shows exactly where people live.\"",
        right: "It shades whole areas one colour, averaging dense cities with empty countryside. The class boundaries chosen also change the impression it gives." },
      { wrong: "\"An increase of 200% means it doubled.\"",
        right: "It tripled. An increase OF 200% adds twice the original on top of it — going TO 200% would be doubling." },
      { wrong: "\"Describe and explain mean roughly the same thing.\"",
        right: "Describe means say what the data shows; explain means say why. Answering the wrong one wastes time and earns no marks at all." },
      { wrong: "\"A pie chart can compare two different places.\"",
        right: "It shows proportions of a single whole. Comparing two pies with different totals is misleading unless the totals are stated." },
    ],
  },

  "geography/rivers-and-flooding": {
    summary:
      "A river is a system that moves water and sediment from high ground to the sea, and in doing so carves and builds the landscape it runs through. This covers the processes, the landforms they create, and why floods happen — including the uncomfortable fact that many of the worst floods are made worse by things people built.",
    keyFacts: [
      {
        heading: "The drainage basin",
        points: [
          "A drainage basin is the area of land drained by a river and its tributaries. Its edge is the watershed — the high ground separating one basin from the next.",
          "Source: where the river begins. Mouth: where it enters the sea or a lake. Confluence: where two rivers join. Tributary: a smaller river joining a larger one.",
          "Inputs, flows and outputs: precipitation in; interception, infiltration, surface runoff and throughflow within; evaporation and river discharge out.",
          "Discharge is the volume of water passing a point per second, measured in cumecs (cubic metres per second).",
          "A hydrograph plots discharge against time after a storm. Lag time is the gap between peak rainfall and peak discharge.",
        ],
      },
      {
        heading: "Erosion, transport and deposition",
        points: [
          "Four erosion processes: hydraulic action (water forcing into cracks), abrasion (load scraping the bed), attrition (rocks colliding and rounding), and solution (chemical dissolving).",
          "Four transport processes: traction (rolling), saltation (bouncing), suspension (carried in the flow), and solution (dissolved).",
          "Vertical erosion dominates the upper course, cutting downwards; lateral erosion dominates the lower course, cutting sideways.",
          "Deposition happens when the river loses energy: on the inside of bends, at the mouth, and when it floods onto the floodplain.",
          "Load becomes smaller and rounder downstream because of attrition — a classic fieldwork hypothesis.",
        ],
      },
      {
        heading: "Landforms along the course",
        points: [
          "Upper course: V-shaped valleys, interlocking spurs, waterfalls and gorges. A waterfall forms where hard rock lies over soft; the soft rock erodes, a plunge pool forms, the overhang collapses, and the waterfall retreats upstream leaving a gorge.",
          "Middle course: meanders and river cliffs. Fastest flow on the outside of a bend erodes a river cliff; slowest flow on the inside deposits a slip-off slope.",
          "An oxbow lake forms when a meander neck narrows until the river cuts through in a flood, and deposition seals off the old loop.",
          "Lower course: floodplains, levees and deltas. Levees are natural embankments built from the coarsest sediment dropped first when a river overtops its banks.",
          "A delta forms where a river meets still water, loses energy and deposits faster than the sea can remove it.",
        ],
      },
      {
        heading: "Flooding, and why people make it worse",
        points: [
          "Physical causes: prolonged or intense rainfall, snowmelt, steep slopes, impermeable rock, and saturated ground.",
          "Human causes: deforestation removes interception; urbanisation replaces soil with tarmac and drains, so water reaches the river faster; and building on floodplains puts people in the way.",
          "Urbanisation shortens lag time and raises peak discharge — the hydrograph becomes flashy.",
          "Hard engineering: dams, embankments, channel straightening, flood walls. Effective and expensive, and often moves the problem downstream.",
          "Soft engineering: floodplain zoning, afforestation, river restoration, warning systems. Cheaper, more sustainable, and requires accepting that some land will flood.",
          "The modern shift is towards working with the river rather than against it, because concrete solutions have repeatedly failed further down the catchment.",
        ],
      },
    ],
    flashcards: [
      { term: "Drainage basin", definition: "The area of land drained by a river and its tributaries." },
      { term: "Watershed", definition: "The high ground forming the boundary between two drainage basins." },
      { term: "Discharge", definition: "The volume of water passing a point per second, measured in cumecs." },
      { term: "Lag time", definition: "The gap between peak rainfall and peak river discharge on a hydrograph." },
      { term: "Hydraulic action", definition: "Erosion caused by the force of water forcing air into cracks in the bank and bed." },
      { term: "Abrasion", definition: "Erosion caused by the river's load scraping against the bed and banks." },
      { term: "Attrition", definition: "Rocks in the load colliding and wearing each other smaller and rounder." },
      { term: "Saltation", definition: "Transport in which small stones bounce along the river bed." },
      { term: "Meander", definition: "A bend in a river, eroding on the outside and depositing on the inside." },
      { term: "Oxbow lake", definition: "A curved lake left behind when a river cuts through a meander neck and the old loop is sealed off." },
      { term: "Floodplain", definition: "The flat land beside a river that floods, built up by repeated deposition." },
      { term: "Levee", definition: "A natural embankment of coarse sediment built up along a riverbank during floods." },
      { term: "Delta", definition: "A landform of deposited sediment where a river enters still water and loses energy." },
      { term: "Hard engineering", definition: "Built defences such as dams and flood walls — effective, expensive, and often shifting problems downstream." },
      { term: "Soft engineering", definition: "Working with natural processes: zoning, afforestation, restoration and warning systems." },
    ],
    examTips: [
      {
        tip: "Name the process, not just the effect",
        detail:
          "'Hydraulic action widened the crack' scores; 'the water wore it away' does not. There are four named erosion processes and examiners want them by name.",
      },
      {
        tip: "Describe landform formation as a sequence",
        detail:
          "Waterfalls and oxbow lakes are marked in stages. Number them and give each one its process — most marks are awarded per correct step in order.",
      },
      {
        tip: "Link urbanisation to the hydrograph",
        detail:
          "Tarmac and drains mean water reaches the river faster, so lag time shortens and peak discharge rises. That chain is the answer to most flood-cause questions.",
      },
      {
        tip: "Give hard engineering its downside",
        detail:
          "It usually protects one place by sending water somewhere else faster. Saying so is what turns a description into an evaluation.",
      },
      {
        tip: "Use upper, middle and lower course as a structure",
        detail:
          "Vertical erosion and V-shaped valleys, then meanders, then floodplains and deltas. It organises almost any river question instantly.",
      },
      {
        tip: "Remember attrition rounds the load",
        detail:
          "It is why stones get smaller and smoother downstream, and it is the reasoning behind one of the most common fieldwork hypotheses.",
      },
    ],

    workedExamples: [
      {
        question: "Explain the formation of a waterfall and gorge.",
        steps: [
          "Start with the geology: a band of hard, resistant rock lies over softer rock.",
          "The river erodes the soft rock downstream faster, by hydraulic action and abrasion, creating a step.",
          "Water falling over the step erodes a deep plunge pool at the base, undercutting the hard rock above.",
          "The overhanging hard rock is left unsupported and eventually collapses.",
          "The collapsed rock swirls in the plunge pool and deepens it further by abrasion.",
          "Repeating this cycle makes the waterfall retreat upstream, leaving a steep-sided gorge in the valley behind it.",
        ],
        answer:
          "Hard rock over soft rock; the soft rock erodes faster creating a step; a plunge pool forms and undercuts the hard rock; the overhang collapses; the process repeats and the waterfall retreats upstream, leaving a gorge.",
      },
      {
        question:
          "Explain how an oxbow lake forms.",
        steps: [
          "A meander develops, with fastest flow on the outside of the bend eroding a river cliff.",
          "Slowest flow on the inside deposits sediment as a slip-off slope.",
          "Continued erosion on both outer bends narrows the neck of land between them.",
          "During a flood, the river has enough energy to cut straight across the neck, taking the shorter route.",
          "The new straighter channel carries most of the flow, so the old loop receives little water.",
          "Deposition seals the ends of the loop, leaving a curved lake separated from the river.",
        ],
        answer:
          "Erosion on the outside of two bends narrows the neck between them until a flood lets the river cut straight across. The old loop, now bypassed, is sealed off by deposition and left as a curved lake.",
      },
      {
        question:
          "Explain why building a housing estate upstream can increase flood risk downstream.",
        steps: [
          "Soil and vegetation intercept rain and let it infiltrate slowly, so water reaches the river over hours or days.",
          "Tarmac and roofs are impermeable, so almost none of the rain soaks in.",
          "Drains and gutters are designed to remove water quickly, which is exactly the problem — they deliver it to the river fast.",
          "Lag time therefore shortens and peak discharge rises: the hydrograph becomes flashy.",
          "Downstream, that larger volume arrives in a shorter time, so the channel is more likely to be overtopped.",
          "Removing vegetation for the estate reduces interception further, compounding the effect.",
        ],
        answer:
          "Because impermeable surfaces and drains deliver rainfall to the river far faster than soil and vegetation would. Lag time shortens and peak discharge rises, so a larger volume arrives downstream in a shorter time and is more likely to overtop the channel.",
      },
      {
        question:
          "Compare hard and soft engineering approaches to flooding.",
        steps: [
          "Hard engineering builds structures: dams, flood walls, embankments, straightened channels.",
          "Strengths: it works reliably for the place protected, can allow development on valuable land, and provides visible reassurance.",
          "Weaknesses: very expensive, needs maintenance, damages habitats, and often speeds water downstream to somewhere without defences.",
          "Soft engineering works with processes: floodplain zoning, planting trees, restoring meanders, and flood warning systems.",
          "Strengths: cheaper, sustainable, better for wildlife, and it addresses the cause rather than the symptom.",
          "Weaknesses: it requires accepting that some land will flood, needs land that may already be built on, and works slowly.",
          "Judgement: hard engineering protects a specific place now; soft engineering reduces risk across the whole catchment over time. Most modern schemes combine both.",
        ],
        answer:
          "Hard engineering reliably protects a specific place but is expensive, damages habitats and often pushes the problem downstream. Soft engineering is cheaper and more sustainable and treats the cause, but requires accepting that some land will flood. Most modern schemes use both.",
      },
    ],

    practice: [
      { question: "What is the area of land drained by a river and its tributaries called?",
        accept: ["drainage basin", "a drainage basin", "catchment"],
        answer: "A drainage basin, bounded by the watershed." },
      { question: "What is the high ground between two drainage basins called?",
        accept: ["watershed", "the watershed"],
        answer: "The watershed — usually a ridge of high ground, since water flows away from it on both sides." },
      { question: "What is the volume of water passing a point per second called?",
        accept: ["discharge"],
        answer: "Discharge, measured in cumecs — cubic metres per second." },
      { question: "What unit is river discharge measured in?",
        accept: ["cumecs", "cumec", "m3/s"],
        answer: "Cumecs, meaning cubic metres per second." },
      { question: "What is the gap between peak rainfall and peak discharge called?",
        accept: ["lag time", "lag"],
        answer: "Lag time. Urbanisation shortens it, which is why cities flood quickly." },
      { question: "Which erosion process involves water forcing air into cracks?",
        accept: ["hydraulic action", "hydraulic"],
        answer: "Hydraulic action. Air trapped in the crack is compressed by the water, and the pressure widens it." },
      { question: "Which erosion process involves the load scraping the bed?",
        accept: ["abrasion", "corrasion"],
        answer: "Abrasion — the river's load acting like sandpaper on the channel." },
      { question: "Which process makes stones smaller and rounder downstream?",
        accept: ["attrition"],
        answer: "Attrition — rocks colliding with each other and wearing down." },
      { question: "Which transport process involves stones bouncing along the bed?",
        accept: ["saltation"],
        answer: "Saltation. Traction is rolling; suspension is carried in the flow." },
      { question: "Which valley shape is typical of a river's upper course?",
        accept: ["v shaped", "v-shaped", "v shaped valley", "vshaped"],
        answer: "A V-shaped valley, cut by vertical erosion." },
      { question: "What is a curved lake cut off from a meander called?",
        accept: ["oxbow lake", "oxbow", "an oxbow lake"],
        answer: "An oxbow lake, formed when a flood cuts through the meander neck." },
      { question: "What is the natural embankment of coarse sediment beside a river called?",
        accept: ["levee", "levees", "a levee"],
        answer: "A levee, built up by the coarsest sediment dropped first during floods." },
      { question: "What landform forms where a river deposits sediment entering still water?",
        accept: ["delta", "a delta"],
        answer: "A delta, where deposition outpaces the sea's ability to remove sediment." },
      { question: "Does urbanisation lengthen or shorten lag time?",
        accept: ["shorten", "shortens", "shorter"],
        answer: "Shortens it. Impermeable surfaces and drains deliver water to the river far faster." },
      { question: "Name one example of hard engineering.",
        accept: ["dam", "dams", "flood wall", "embankment", "channel straightening", "levee", "flood barrier"],
        answer: "Dams, flood walls, embankments or channel straightening." },
      { question: "Name one example of soft engineering.",
        accept: ["afforestation", "planting trees", "floodplain zoning", "zoning", "river restoration", "warning systems", "flood warnings"],
        answer: "Afforestation, floodplain zoning, river restoration or flood warning systems." },
      { question: "Explain why building on floodplains is a problem, given that floodplains are attractive places to build.",
        answer: "Floodplains are flat, close to water and often near existing towns, which makes them cheap and convenient to build on — that is exactly why so much has been built there. The problem is that a floodplain is not land that might flood; it is land the river has built by flooding, repeatedly, over thousands of years. Building on it puts people and property directly in the river's path, and covering it with tarmac and roofs removes the very storage capacity that used to absorb high flows, raising peak discharge downstream. It also creates political pressure for expensive hard defences that would not otherwise be needed, which then push the problem further down the catchment. (Mark this one yourself.)" },
      { question: "Explain why modern flood management increasingly works with rivers rather than against them.",
        answer: "Because decades of hard engineering showed that concrete solves a local problem by creating a wider one. Straightening a channel moves water downstream faster, so the next town gets a bigger peak arriving sooner. Embankments protect the land behind them but remove the floodplain storage that used to absorb high flows. Defences also need permanent maintenance and eventually fail, often catastrophically and against a flood larger than the one they were designed for. Soft approaches — restoring meanders, planting trees, zoning land, and warning people — slow water down across the whole catchment rather than rushing it through one section, and they cost far less. The trade is accepting that some land will flood, which is a political argument as much as a geographical one. (Mark this one yourself.)" },
    ],

    misconceptions: [
      { wrong: "\"Rivers only erode.\"",
        right: "They erode, transport AND deposit, and which one dominates depends on energy. Deposition builds floodplains, levees and deltas." },
      { wrong: "\"Flooding is a purely natural event.\"",
        right: "Heavy rain is natural; the scale of the damage often is not. Deforestation, urbanisation and building on floodplains all increase both the peak and the cost." },
      { wrong: "\"Hard engineering solves flooding.\"",
        right: "It protects a particular place, often by moving water downstream faster to somewhere less protected. It also fails eventually, against a flood bigger than its design." },
      { wrong: "\"Rivers get faster as they go downhill and slower lower down.\"",
        right: "Counter-intuitively, rivers usually flow FASTER in the lower course. The channel is smoother and deeper, so there is far less friction than among the boulders upstream." },
      { wrong: "\"A delta forms at every river mouth.\"",
        right: "Only where deposition outpaces removal. Strong tides or currents carry sediment away, which is why many large rivers have estuaries instead." },
      { wrong: "\"Oxbow lakes form slowly and gently.\"",
        right: "The cut-through usually happens during a single flood, when the river has enough energy to take the shorter route across the neck." },
    ],
  },

};
