// What each diagram is CALLED, and WHY the thing it shows is true.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS
//
// Matthew: "make sure that every diagram has its name at the top of it and has
// an explanation at the bottom why it works this way."
//
// Both halves were genuinely missing, and in different ways.
//
// A diagram had no NAME. The library page used the key-fact heading it happened
// to be filed under, so the same picture was called "Extraction of metals" in
// one place and something else in another, and on a topic page it had no
// heading at all — a drawing floating in the middle of some prose. A teacher
// putting one on a board could not say what it was called.
//
// A diagram had no REASON. It had a caption, which states the rule: "alternate
// angles are equal", "steeper = faster, but the same amount of product". That
// is what to remember, not why it is so. A student who only has the rule can
// recall it and cannot rebuild it, which is the difference between the marks
// available on "state" and on "explain".
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY A SEPARATE FILE, AND WHY A Record RATHER THAN A Partial
//
// `Record<DiagramName, DiagramNote>` is doing real work: TypeScript refuses to
// compile if a diagram is missing an entry OR if there is an entry for a name
// that is not a diagram. So a new picture cannot be added without being named
// and explained, and a deleted one cannot leave an orphan behind. That is the
// same guarantee `known-topics.ts` gives progress slugs, bought here for free
// by a type rather than by a checker.
//
// The import is `import type`, which is erased at compile time — so this file
// has no runtime dependency on the registry at all, and the plain-Node content
// checker can read it without pulling in React.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE RULES THESE WERE WRITTEN TO, kept because they are what stops the next
// batch drifting:
//
//   title  2-5 words, sentence case, the name a teacher or an exam paper would
//          use. Unique across the whole site — two pictures with one name is
//          not a name. Never just the key with its hyphens taken out.
//
//   why    2-3 sentences giving the REASON, not the rule. It must be something
//          a student could reconstruct in an exam: "a straight line is half a
//          full turn, and a full turn is 360°". It must not restate the
//          caption, which is already on screen immediately above it, and it
//          must not talk about the drawing — it is about the maths.
//
// check-security.mjs enforces the mechanical half of that.

import type { DiagramName } from "./index";

export type DiagramNote = {
  /** The heading above the picture. */
  readonly title: string;
  /** Why the thing in the picture is true, shown underneath it. */
  readonly why: string;
};

export const DIAGRAM_NOTES: Record<DiagramName, DiagramNote> = {
  // Angles and 2D shapes
  "angles-on-a-line": {
    title: "Angles on a straight line",
    why: "A full turn about a point is 360°, and a straight line is exactly half of that turn. Whatever rays you draw from a point on the line, they only share out that same half turn, so the parts must always rebuild it — two angles or twenty.",
  },
  "angles-around-a-point": {
    title: "Angles at a point",
    why: "Set off facing one ray and sweep all the way round until you are facing it again: that is one complete turn. The rays simply chop that single turn into separate pieces, so however many pieces there are, together they must give the whole turn back.",
  },
  "vertically-opposite": {
    title: "Vertically opposite angles",
    why: "Each of the two angles shares a straight line with the angle sitting between them, so each one must be 180° minus that shared angle. Two amounts equal to the same thing are equal to each other. The pair must be across the crossing point, not just facing each other in a shape.",
  },
  "angles-in-a-triangle": {
    title: "Angle sum of a triangle",
    why: "Draw a line through one corner parallel to the opposite side and the other two angles reappear on it as alternate angles, one either side of the top corner. All three now sit along a straight line, which is 180°, so the angles inside the triangle must total the same.",
  },
  "parallel-corresponding": {
    title: "Corresponding angles",
    why: "Parallel lines never get closer or further apart, so sliding one crossing along the transversal onto the other lays the two crossings exactly on top of each other. Angles in matching positions land on one another, which is only possible if they are the same size.",
  },
  "parallel-alternate": {
    title: "Alternate angles",
    why: "One of the pair matches the corresponding angle at the other crossing, and that angle is vertically opposite the second one, so two equal steps link them. In an exam give the word alternate as your reason: calling it a Z shape on its own is not accepted wording.",
  },
  "parallel-co-interior": {
    title: "Co-interior angles",
    why: "One angle equals the alternate angle at the other crossing, and that alternate angle sits on a straight line with its neighbour, which uses up 180°. Some boards call them allied angles. The trap is treating them as equal when they in fact add to 180°.",
  },
  "exterior-angle-triangle": {
    title: "Exterior angle of a triangle",
    why: "The exterior angle and the interior angle next to it lie on a straight line, so the two make 180°. The three interior angles also make 180°. Take the shared angle away from both totals and what is left must match, giving a shortcut worth using rather than working right round.",
  },
  "polygon-exterior-angles": {
    title: "Exterior angles of a polygon",
    why: "Imagine walking once round the outside of the shape. At each corner you turn through one exterior angle, and by the time you are back at the start facing the way you began you have turned through one complete turn, 360°, however many sides there were.",
  },
  "triangle-perpendicular-height": {
    title: "Area of a triangle",
    why: "Any triangle takes up exactly half of a rectangle built on the same base with the same height, so halving base × height gives its area. The height has to be measured at a right angle to the base; the slanted side is longer, so using it makes the answer too big.",
  },
  "trapezium-area": {
    title: "Area of a trapezium",
    why: "Take a second copy, turn it upside down and fit it against the first: the two together form a parallelogram whose base is a + b and whose height is still h. That double shape covers (a + b) × h, so one of them covers half as much.",
  },

  // Circle theorems
  "circle-parts": {
    title: "Parts of a circle",
    why: "A chord joins two points on the edge, and the diameter is simply the longest chord there is, because it passes through the centre. A tangent is the limiting case where those two points slide together into one, which is why it grazes the edge instead of cutting across it.",
  },
  "circle-angle-at-centre": {
    title: "Angle at the centre",
    why: "Join the point on the edge to the centre and the shape splits into two triangles, each built from two radii, so each is isosceles. The exterior angle rule then doubles the part of the edge angle in each triangle, and adding the two halves gives the whole angle at the centre.",
  },
  "circle-semicircle": {
    title: "Angle in a semicircle",
    why: "A diameter makes a straight line through the centre, so the angle at the centre standing on it is 180°. The angle at the edge on the same arc is always half the angle at the centre, and half of 180° is 90°. It is the centre rule in disguise.",
  },
  "circle-same-segment": {
    title: "Angles in the same segment",
    why: "Both angles stand on the same chord, so both are half of the very same angle at the centre. Halving one fixed amount always gives one answer, so it makes no difference where on the arc you put the point. It fails if the two points are on opposite sides of the chord.",
  },
  "circle-cyclic-quadrilateral": {
    title: "Cyclic quadrilateral",
    why: "Opposite corners stand on the same chord but from opposite arcs, so between them they use both of the angles at the centre, and those two make a full turn of 360°. Each corner is half its own centre angle, so the pair comes to half of 360°.",
  },
  "circle-tangent-radius": {
    title: "Tangent and radius",
    why: "The radius drawn to the point of contact is the shortest distance from the centre to that line, and the shortest route from a point to a straight line is always the perpendicular one. At any other angle the line would dip inside and cut the circle twice, making it a chord.",
  },
  "circle-alternate-segment": {
    title: "Alternate segment theorem",
    why: "It follows from the tangent meeting the radius at 90° together with the angle at the centre being double the angle at the edge: the right angles either side cancel and the two angles are left equal. Higher tier, and the trap is choosing the segment on the wrong side of the chord.",
  },
  "circle-sector-arc": {
    title: "Arc length of a sector",
    why: "A sector is a fraction of the whole circle, and the angle at the centre tells you which fraction, measured against the 360° of a full turn. That same fraction works for the curved edge and, applied to πr², for the area inside the sector as well.",
  },

  // Pythagoras and trigonometry
  "pythagoras": {
    title: "Pythagoras' theorem",
    why: "The squares built on the two shorter sides can be cut up and fitted exactly inside the square built on the longest side, so their areas add to it. Only right-angled triangles behave this way, and c must be the side facing the right angle, so identify that side before squaring anything.",
  },
  "sohcahtoa": {
    title: "Opposite, adjacent and hypotenuse",
    why: "The hypotenuse never changes, since it always faces the right angle, but switching to the other acute angle swaps which side counts as opposite and which as adjacent. The ratios depend on the angle you are standing at, so mark θ first and label the sides from it, not from the page.",
  },
  "sine-rule": {
    title: "The sine rule",
    why: "In any triangle the longer sides face the bigger angles, and this rule makes that exact: each side divided by the sine of the angle opposite it gives the same value every time. Use it when you have a matched pair, an angle with its opposite side. Higher tier only.",
  },
  "cosine-rule": {
    title: "The cosine rule",
    why: "Think of it as Pythagoras with a correction. If A were 90° then cos A would be 0, the last term would vanish and you would be left with a² = b² + c². For any other angle the −2bc cos A adjusts for the corner being wider or narrower. Higher tier.",
  },

  // Constructions and bearings
  "perpendicular-bisector": {
    title: "Constructing a perpendicular bisector",
    why: "Because the compass keeps the same width, every crossing of the arcs is the same distance from both end points. The set of points that are equally far from two fixed points is exactly the line that cuts the join in half and meets it at a right angle.",
  },
  "angle-bisector": {
    title: "Constructing an angle bisector",
    why: "The first arc marks off equal distances along both arms, and the next two arcs are equal as well. Joining the vertex to where they cross makes two triangles with three matching sides, so the triangles are identical and the two halves of the angle have to be the same size.",
  },
  "bearing": {
    title: "Measuring a bearing",
    why: "North is the agreed starting direction and clockwise the agreed way to turn, so two people describing the same route land on the same number. Three figures with a leading zero where needed, such as 065°, stop any confusion, and turns past halfway simply keep counting up towards 360°.",
  },

  // Probability
  "tree-diagram": {
    title: "Two-stage probability tree",
    why: "Following one branch and then another means both events happen, and multiplying is how you find the chance of a combination. The branches leaving any point cover every possibility, so they add to 1; separate routes to the end are different outcomes, so those probabilities add.",
  },
  "venn-two-sets": {
    title: "Venn diagram",
    why: "The rectangle contains every possible outcome, and the two circles cut it into four separate regions: in both, in one only, in the other only, or in neither. Nothing is counted twice, so the four regions add back to the total. A whole circle includes the overlap, which is easy to forget.",
  },

  // ── Maths: statistics ────────────────────────────────────────────────────
  "box-plot": {
    title: "Box and whisker plot",
    why: "The quartiles are the values a quarter and three quarters of the way through the ordered data, so exactly half the values lie between them and that gap is the width of the box. The whiskers only reach the extremes, so a single unusual value can stretch one a long way.",
  },
  "cumulative-frequency": {
    title: "Cumulative frequency curve",
    why: "Each point gives a running total: how many values are at or below that reading, climbing to the full total at the top. The middle value must therefore be found where the running count has reached half the total, and the quartiles a quarter and three quarters of the way up.",
  },
  "histogram": {
    title: "Histogram with unequal widths",
    why: "With groups of different widths, plain heights would make a narrow group holding few values look as important as a wide one. Frequency density, which is frequency ÷ class width, fixes this, because height × width then hands the frequency back as the bar's area. Higher tier.",
  },
  "scatter-correlation": {
    title: "Scatter graph and correlation",
    why: "Points drifting upwards together suggest that as one measurement rises so does the other, and the line of best fit summarises that trend with roughly as many points above it as below. Correlation is not proof that one thing causes the other, and predicting beyond the plotted points is unreliable.",
  },

  // ── Maths: straight-line graphs ──────────────────────────────────────────
  "gradient-intercept": {
    title: "Gradient and y-intercept",
    why: "Putting x = 0 into y = mx + c leaves y = c, which is why c is the height at which the line crosses the vertical axis. Each step of 1 to the right then adds another m to y, so m measures steepness as rise ÷ run, and a negative m makes the line fall.",
  },
  "parallel-perpendicular": {
    title: "Parallel and perpendicular lines",
    why: "Two lines only stay the same distance apart if they climb at exactly the same rate, which is why parallel lines share a gradient. Turning a line through 90° swaps the rise and the run and reverses the sign, so you flip the fraction and change its sign to get the perpendicular gradient.",
  },

  // ── Maths: vectors and transformations ───────────────────────────────────
  "vector-addition": {
    title: "Adding vectors",
    why: "A vector records only how far across and how far up you move, never where you started. Doing one move and then the other leaves you exactly where a single move would, one whose across parts add and whose up parts add, so joining them nose to tail gives the sum.",
  },
  "transformation-reflection": {
    title: "Reflection in a mirror line",
    why: "A mirror sends each point straight across to a point the same distance away on the other side, travelling at right angles to the line. No distance between points changes, so the image is the same size and shape, only flipped, and anything already on the line does not move at all.",
  },
  "transformation-rotation": {
    title: "Rotation about a centre",
    why: "Every point travels round the centre on its own circle, staying the same distance from it, so the shape keeps its size and shape but ends up facing a new way. Move the centre and the image lands somewhere completely different, so leaving it out costs marks even when the turn is right.",
  },
  "transformation-translation": {
    title: "Translation by a vector",
    why: "Every point slides the same distance in the same direction, so nothing turns, flips or changes size. The top number counts movement to the right and the bottom number movement up, with negatives for left and down, so those two numbers pin down the whole move.",
  },
  "transformation-enlargement": {
    title: "Enlargement from a centre",
    why: "Rays from the centre stretch every distance by the same multiplier, so all lengths grow in proportion and the angles are untouched, leaving the shape the same but a different size. A fraction between 0 and 1 shrinks it, and a negative factor puts the image on the far side of the centre, upside down.",
  },

  // ── Maths: volume, surface area and similarity ───────────────────────────
  "prism-cross-section": {
    title: "Volume of a prism",
    why: "A prism is the same shape all the way through, so imagine it as a stack of identical thin slices. Each slice covers the area of the cross-section, and running that stack along the length just repeats that area over and over, which is why the two multiply together.",
  },
  "cylinder": {
    title: "Volume of a cylinder",
    why: "A cylinder is a prism whose cross-section happens to be a circle, and the area of that circle is πr². Pushing that area up through the height repeats it, giving πr²h. Watch for questions that hand you the diameter, and remember a radius in cm gives an answer in cm³.",
  },
  "cuboid-net": {
    title: "Net of a cuboid",
    why: "Opening the solid out flat lays every face side by side without stretching or squashing anything, so the flat shape covers exactly the same area as the outside of the solid. The faces come in three matching pairs, so work out three rectangles and double each one.",
  },
  "similar-triangles": {
    title: "Similar shapes",
    why: "Equal angles fix the shape, and a shape can only keep its angles if every length has been stretched by one common multiplier. Divide a pair of matching sides to find that multiplier, then use it on the side you want. Pair up sides that sit opposite equal angles, not sides that merely look alike.",
  },
  "area-volume-scale-factors": {
    title: "Area and volume scale factors",
    why: "Area comes from two lengths multiplied, so doubling every length multiplies area by 2 × 2 = 4. Volume comes from three, giving 2 × 2 × 2 = 8. In general a length factor k gives k² for area and k³ for volume, which is why they grow far faster than you expect. Higher tier.",
  },

  // ── Physics ──────────────────────────────────────────────────────────────
  "series-circuit": {
    title: "Series circuit",
    why: "Charge cannot pile up or leak away, and there is only one route for it to take, so every electron leaving the cell has to pass through each component in turn. That is why an ammeter gives an identical reading wherever you place it. What does get shared out is the cell's voltage.",
  },
  "parallel-circuit": {
    title: "Parallel circuit",
    why: "Both ends of every branch are joined to the same two points as the cell's terminals, so each branch feels the whole of the cell's push. The current is what splits instead. A classic trap is thinking more branches means more resistance; extra routes for charge actually lower the total resistance.",
  },
  "ammeter-voltmeter": {
    title: "Ammeter and voltmeter placement",
    why: "An ammeter measures the charge flowing past each second, so it has to be in the path itself, and it is built with almost no resistance so it barely alters the circuit. A voltmeter compares the energy carried by charge on either side of a component, so it goes across it, with very high resistance so hardly any current is stolen.",
  },
  "free-body-diagram": {
    title: "Balanced forces at steady speed",
    why: "Every arrow here is matched by another the same size pointing the other way, so the pairs cancel and the resultant force is zero. With nothing left over to change the motion, the object simply keeps the velocity it already has. Zero resultant does not mean zero forces; it means they add up to nothing.",
  },
  "resultant-force": {
    title: "Adding forces at right angles",
    why: "Force has a direction as well as a size, so two forces are added head to tail rather than as plain numbers. Drawn that way they form a right-angled triangle, and Pythagoras gives the diagonal: 3² + 4² = 5², so the resultant is 5 N. Simply adding 3 N and 4 N to get 7 N is the usual slip.",
  },
  "moments": {
    title: "Principle of moments",
    why: "A force twists an object more easily the further out it acts, so the turning effect depends on force × distance rather than on the force alone. A small force a long way out can therefore match a big force close in, leaving no overall turn. Measure the distance to the pivot, at right angles to the force.",
  },
  "transverse-wave": {
    title: "Wavelength and amplitude",
    why: "A wavelength must cover one full cycle of the repeating shape, so you measure from any point to the matching point on the next repeat; trough to trough works just as well. Amplitude is taken from the undisturbed rest line because it says how far a particle moves from where it would otherwise sit, so trough to crest doubles it.",
  },
  "longitudinal-wave": {
    title: "Compressions and rarefactions",
    why: "The particles vibrate backwards and forwards along the same line the wave travels, so they crowd into one region while thinning out in the next, and those pressure changes are the wave itself. Sound behaves like this, which is why it needs particles to squash and cannot cross a vacuum.",
  },
  "reflection-law": {
    title: "The law of reflection",
    why: "The normal is the line drawn at 90° to the surface, and measuring from it rather than from the mirror keeps the rule working even when the surface is tilted or curved. Because every ray obeys the same rule, a smooth mirror sends parallel rays away still parallel and you see a clear image; a rough surface scatters them instead.",
  },
  "refraction": {
    title: "Refraction through a glass block",
    why: "Light travels more slowly in glass than in air, so when a beam meets the surface at an angle one edge is slowed before the other and the beam swings round. Leaving the far side it speeds up and turns back by the same amount, so it ends up parallel to the original path but shifted sideways. A ray along the normal is not bent at all.",
  },
  "distance-time-graph": {
    title: "Distance-time graph",
    why: "The steepness tells you how far the object gets each second, and distance ÷ time is exactly what speed means, which is why the gradient is the speed. Where the line runs level, time ticks on but the distance reading never changes, so nothing is moving. A common slip is reading a high point as fast; it is the slope that matters.",
  },
  "velocity-time-graph": {
    title: "Velocity-time graph",
    why: "Acceleration is the change in velocity each second, and a gradient is a change in height divided by the time taken, so the two are the same calculation. Velocity × time gives distance, and multiplying a height by a width is exactly what finding an area does, which is why splitting the shape into triangles and rectangles works.",
  },
  "bar-magnet-field": {
    title: "Field around a bar magnet",
    why: "An arrow shows the way a free north pole would be pushed, and since north repels north but is pulled to south, the arrows outside must run one way only. Where the lines crowd together the field is stronger, so it is strongest at the poles. Lines never cross, because a force at one point can only act in one direction.",
  },
  "atom-shells": {
    title: "Structure of the atom",
    why: "A proton or a neutron has nearly two thousand times the mass of an electron, so practically all the mass sits in the nucleus even though it takes up a tiny fraction of the room. The electrons are held in shells far out from it. That huge gap is why most alpha particles fired at gold foil went straight through.",
  },
  "pressure-in-liquids": {
    title: "Pressure and depth",
    why: "The push at any point comes from the weight of all the liquid stacked above it, so the lower you go the more weight there is and the harder the liquid presses. Particles in a liquid move in every direction, so that push acts sideways and upwards too. It depends on depth and density, never on how wide the container happens to be.",
  },

  // ── Chemistry ────────────────────────────────────────────────────────────
  "electron-shells": {
    title: "Electronic structure of sodium",
    why: "Electrons sit as close to the nucleus as they can, because that is where the pull on them is strongest, so an inner shell fills up before the next one starts. Sodium's 11 electrons therefore go 2, 8, 1, and that single leftover outer electron is the reason it sits in group 1.",
  },
  "isotope-notation": {
    title: "Mass number and atomic number",
    why: "Nearly all of an atom's mass is in the nucleus, since protons and neutrons each count as one unit while electrons weigh almost nothing, so the top number totals both. The bottom number counts protons alone, and that is what fixes which element it is. Neutrons = top − bottom.",
  },
  "ionic-bonding": {
    title: "Electron transfer in sodium chloride",
    why: "A metal atom holds only one or two outer electrons, and losing them is far easier than gaining the six or seven it would need to fill the shell, so it turns into a positive ion while the non-metal becomes negative. Opposite charges pull in every direction, which is why you get a giant lattice, not a molecule.",
  },
  "covalent-bonding": {
    title: "Covalent bonds in water",
    why: "Two non-metal atoms both need extra electrons and neither gives any away easily, so sharing is the only way each can count a full outer shell. The shared pair is pulled by both nuclei at once, and that attraction is the bond. Water boils low because the forces between whole molecules are weak, not the bonds inside them.",
  },
  "metallic-bonding": {
    title: "Delocalised electrons in metals",
    why: "Each atom lets its outer electrons drift away, leaving positive ions held in place by their attraction to the shared electrons around them, and that pull acts in all directions, so melting points are high. Since those electrons can move, they carry charge and heat through the metal, and layers of ions slide without the bonding breaking.",
  },
  "diamond-graphite": {
    title: "Bonding in diamond and graphite",
    why: "Carbon has four outer electrons. In diamond all four are locked into strong bonds, giving a rigid network with nothing free to carry a current. In graphite each atom bonds to only three, so one electron per atom is delocalised and it conducts. Layers slide because the forces between them are weak — not because the bonds are.",
  },
  "fractional-distillation": {
    title: "Separating crude oil fractions",
    why: "Longer hydrocarbon chains attract each other more strongly, so they need more heat to stay as a gas and condense back to liquid low down where the column is hottest. Short chains hold on to each other only weakly and rise to the cool top still as gas. It is the forces between molecules being overcome, never the covalent bonds inside them.",
  },
  "chromatography": {
    title: "Separating dyes on paper",
    why: "Every substance in the mixture is torn between dissolving in the moving solvent and clinging to the paper, so the one that dissolves best and sticks least is carried furthest, and that is what pulls a mixture apart. Start the spots below the solvent and they just wash off into it; ink would travel and split up as well.",
  },
  "reaction-profile-exothermic": {
    title: "Exothermic energy profile",
    why: "Breaking bonds takes energy in and making new ones gives energy out, so when the bonds formed are stronger overall the spare energy escapes and the surroundings warm up. That leftover energy is exactly why the products end lower. Even so, the reactants must first be pushed over the activation energy hump to get started.",
  },
  "reaction-profile-endothermic": {
    title: "Endothermic energy profile",
    why: "When the bonds being broken are stronger overall than the new ones formed, the shortfall has to be taken from the surroundings, which is why the flask feels cold. The chemicals finish storing more energy than they began with, so the overall change is positive. Cold to the touch means energy absorbed, not energy lost.",
  },
  "electrolysis-cell": {
    title: "Electrolysis of a molten salt",
    why: "Ions can only carry a current once they are free to move, so a solid ionic compound conducts nothing until it is melted or dissolved. Each mobile ion is then pulled to the electrode of opposite charge, where it gains or loses electrons and becomes an uncharged atom or molecule again.",
  },
  "rate-graph": {
    title: "Product formed against time",
    why: "The gradient tells you how quickly product is appearing, and the line flattens once a reactant has run out, so waiting longer cannot produce any more. The final height depends only on how much of that limiting reactant you started with, which is why heating or adding a catalyst changes the steepness but never where the line levels off.",
  },
  "collision-theory": {
    title: "Concentration and collision frequency",
    why: "Particles react only when they crash into each other with at least the activation energy, so the rate depends on how often such crashes happen. Packing more particles into the same volume shortens the gap between collisions, but it does not make each one harder — only heating does that, which is why temperature has the bigger effect.",
  },
  "alkane-alkene": {
    title: "Saturated and unsaturated hydrocarbons",
    why: "In an alkane every carbon already carries as many hydrogens as it can, so there is nowhere for extra atoms to join and bromine water is left alone. An alkene's double bond can open, letting a bromine atom attach to each carbon, and using up the orange bromine is what turns the water colourless.",
  },

  // ── Biology ──────────────────────────────────────────────────────────────
  "animal-cell": {
    title: "Animal cell structure",
    why: "Every part earns its place: the nucleus holds the DNA that codes for proteins, the ribosomes build those proteins, and the mitochondria release energy by respiration to pay for the work. That is why a busy cell, such as a muscle cell, is packed with far more mitochondria than a fat cell.",
  },
  "plant-cell": {
    title: "Extra features of plant cells",
    why: "The cellulose wall is strong enough to stop the cell bursting when water floods in, which is why a plant cell survives in pure water and an animal cell does not. The sap-filled vacuole pushes outwards against that wall, and the pressure it creates is what holds an unwatered stem up.",
  },
  "osmosis": {
    title: "Water movement across membranes",
    why: "Water molecules are moving both ways all the time, but the dilute side has more free water molecules, so more of them happen to cross towards the concentrated side. Movement never actually stops; it only looks like it does once both sides match and the two flows cancel out.",
  },
  "enzyme-lock-and-key": {
    title: "The lock and key model",
    why: "The substrate fits only because its shape matches the active site, so anything that changes that shape stops the reaction being speeded up. High temperature or the wrong pH breaks the weak bonds holding the enzyme folded, and the usual trap is calling it killed: it was never alive, and it will not refold.",
  },
  "leaf-cross-section": {
    title: "Inside a leaf",
    why: "Light is strongest at the top surface, so the palisade cells sit there, tall and crammed with chloroplasts to absorb it before it is wasted. Below them the air spaces let carbon dioxide diffuse to every cell, and putting the stomata on the shaded underside means less water is lost as vapour.",
  },
  "reflex-arc": {
    title: "The reflex arc",
    why: "The impulse passes from sensory neurone to relay neurone to motor neurone inside the spinal cord, so it reaches the muscle by the shortest route available. Fewer synapses to cross means less time taken and no waiting on a conscious choice, which is why your hand has already moved before you feel any pain.",
  },
  "synapse": {
    title: "Signals crossing a synapse",
    why: "An impulse is electrical and cannot jump the gap, so it is turned into a chemical that diffuses across and sets off a new impulse on the other side. Transmitter is stored on one side only and receptors sit on the other, so nothing can travel backwards, and each crossing costs a little time.",
  },
  "double-circulation": {
    title: "The double circulatory system",
    why: "Blood loses most of its pressure squeezing through the narrow capillaries of the lungs, so it comes back to be pushed out a second time. That extra push drives oxygenated blood round the body quickly, letting mammals respire fast enough to stay warm and active.",
  },
  "blood-vessels": {
    title: "Artery, vein and capillary",
    why: "Blood leaves the heart in surges, so an artery needs a thick elastic wall that will not burst and that recoils to keep the blood moving between beats. By the time it returns the pressure is nearly gone, so valves are the only way to stop backflow, and one-cell-thick capillaries keep the distance a molecule must diffuse tiny.",
  },
  "punnett-square": {
    title: "A monohybrid cross",
    why: "Each parent carries two alleles but puts only one into each gamete, so the four boxes are simply every pairing that fertilisation could make. Three boxes contain at least one B, and a single dominant allele is enough to show the trait. It is a probability for each offspring, not a promise of three out of four.",
  },
  "dna-double-helix": {
    title: "DNA structure and base pairing",
    why: "A only pairs with T and C only with G because those are the combinations that fit the space between the strands and make the right hydrogen bonds. Because of that, either strand carries all the information needed to rebuild the other, which is how DNA is copied accurately before a cell divides.",
  },
  "food-chain": {
    title: "Energy flow in feeding",
    why: "Being eaten is how the energy moves, so each arrow runs from the organism eaten to the one eating it, never the other way round. Only about a tenth of the energy in one level reaches the next, as the rest goes into respiration, movement and waste, so chains rarely stretch past four or five links.",
  },
  "photosynthesis-limiting-factors": {
    title: "Limiting factors in photosynthesis",
    why: "Light provides the energy, so while light is the thing in short supply, every extra bit of it lets more reactions happen and the rate climbs steadily. The line flattens once a different requirement runs out, usually carbon dioxide or warmth, because the reaction can only go as fast as its scarcest ingredient allows.",
  },
  "microscope-magnification": {
    title: "Working out total magnification",
    why: "The objective enlarges the specimen first, and the eyepiece then enlarges that already enlarged image, so the two magnifications multiply instead of adding. A 10× eyepiece with a 40× objective gives 400×, which turns something 0.01 mm across into an image 4 mm wide.",
  },

  // ── Computer science ─────────────────────────────────────────────────────
  "flowchart-shapes": {
    title: "Flowchart symbols",
    why: "The outline is read before the words are, so a parallelogram tells you data is coming in or going out at a glance. A diamond needs one labelled exit for each possible answer, because a question whose answer cannot change the route the program takes is not really a decision.",
  },
  "flowchart-selection": {
    title: "An if-else structure",
    why: "The condition is tested once and only the matching branch runs, so the other is skipped completely rather than run and undone. Both paths meet again so everything after them is written once instead of twice, and a classic slip is putting a step after the join that was only meant for one branch.",
  },
  "flowchart-loop": {
    title: "A while loop",
    why: "The condition is checked before the body runs, so if it is already false the body runs zero times. Something inside the body has to change the value being tested, because otherwise the answer is the same on every pass and the loop never ends.",
  },
  "trace-table": {
    title: "Tracing a loop",
    why: "Working through by hand records the value actually held at each step, which is how you catch a loop that runs one time too many. Write a variable down only on the line that changes it, and settle the condition's answer before deciding whether another row exists at all.",
  },
  "array-indexing": {
    title: "Counting from zero",
    why: "An index really means how far along from the start an item sits, and the first item is no distance at all, so it is item 0. A loop that runs all the way up to the length therefore asks for one position past the end, which is where out-of-range errors come from.",
  },
  "subprogram-call": {
    title: "Calling a function",
    why: "Parameters are just local names for whatever the subprogram is handed, so the first argument lands in the first parameter whatever it was called outside. The answer only reaches the rest of the program if it is returned and then stored or used; calling the function and ignoring what comes back throws the result away.",
  },

  // ── Chemistry, second batch ──────────────────────────────────────────────
  "periodic-table-layout": {
    title: "Groups and periods",
    why: "Elements are ordered by proton number, and the way shells fill means atoms in the same column end up with the same number of outer electrons, so they react in similar ways. Moving across a row adds electrons to the same shell; a new row means a new shell has started. Group 0 atoms are already full, so they have no reason to react.",
  },
  "balancing-equations": {
    title: "Conservation of mass",
    why: "In a reaction the atoms are only rearranged into new combinations; none is created or destroyed, so every atom on the left must reappear on the right and the total mass cannot change. That is why you may only adjust the big numbers in front of a formula: altering a small subscript turns H₂O into something that is no longer water.",
  },
  "mole-triangle": {
    title: "Moles, mass and Mr",
    why: "One mole of a substance has a mass in grams equal to its relative formula mass, so dividing the mass you weighed out by that number counts how many moles you have. Everything else is just rearranging mass = moles × Mr. The usual slip is using a single atom's mass, when you should add up every atom in the formula.",
  },
  "ph-scale": {
    title: "Acids, alkalis and pH",
    why: "pH is really a measure of how crowded the hydrogen ions are: the more H⁺ ions in solution, the lower the number. One whole step multiplies that crowding by 10, so pH 3 holds 100× the hydrogen ions of pH 5. Strong is not the same as concentrated — a strong acid is one whose molecules split up fully in water.",
  },
  "reactivity-series": {
    title: "Metal displacement reactions",
    why: "How reactive a metal is comes down to how readily it hands over its outer electrons to form a positive ion. A metal higher up holds them more loosely, so it takes over the compound and leaves the less reactive metal behind as the pure element. The same order sets how each metal is extracted from its ore.",
  },
  "dynamic-equilibrium": {
    title: "Forward and backward reaction rates",
    why: "At the start there is plenty of reactant, so the forward change is fast; as products build up the backward change speeds up until the two match. From then on every substance is made exactly as fast as it is used, so the amounts stop changing even though nothing has stopped. Equal rates never means equal amounts.",
  },
  "addition-polymerisation": {
    title: "Making poly(ethene) from ethene",
    why: "The carbon to carbon double bond opens up, freeing a bond on each carbon to join to the next molecule, and the chain grows without anything being thrown out. Since no atoms leave, the repeat unit holds exactly the same atoms as the monomer, so draw single bonds only, with the brackets crossing them and an n outside.",
  },
  "gas-tests": {
    title: "Testing for common gases",
    why: "Every result has a cause: oxygen supports burning, so a glowing splint bursts back into flame, while hydrogen burns fast with the oxygen already in the tube and that small explosion is the pop. Limewater clouds because carbon dioxide reacts with it to make solid calcium carbonate. Chlorine bleaches only damp litmus, so wet the paper.",
  },
  "greenhouse-effect": {
    title: "Trapping heat in the atmosphere",
    why: "The Sun is extremely hot, so its radiation is short wavelength and passes straight through the atmosphere. The far cooler Earth re-emits that energy as longer wavelength infrared, and gases such as carbon dioxide, methane and water vapour absorb it and send some back down. The effect is natural and has nothing to do with the ozone layer.",
  },
  "water-treatment": {
    title: "Making water safe to drink",
    why: "Filtering only removes what can be trapped, such as grit and larger solids, while dissolved salts slip straight through, which is why treated water counts as safe rather than pure. Sterilising with chlorine, ozone or ultraviolet light then kills the microbes filtering leaves behind. In chemistry, pure means nothing but H₂O.",
  },

  // ── Physics, second batch ────────────────────────────────────────────────
  "sankey-diagram": {
    title: "Energy transfers in a lamp",
    why: "Energy is never created or destroyed, only shifted, so the arrows leaving have to add up to the hundred joules going in. Efficiency compares the useful output with the total input, here 25 ÷ 100, which is a quarter. The wasted 75 J has not vanished; it has spread into the surroundings, too thinly spread to be any use.",
  },
  "states-of-matter": {
    title: "Solids, liquids and gases",
    why: "Heating gives particles more energy to move, and once they have enough they break away from the forces holding them to their neighbours, which is what changes the arrangement. The particles themselves are untouched, so melting and boiling are physical changes and can be reversed. Mass stays the same too, though a gas fills far more space.",
  },
  "three-pin-plug": {
    title: "Inside a mains plug",
    why: "The fuse is fitted in the live wire so that a large current melts it and disconnects the appliance from the dangerous side of the supply. The earth pin is longer so it connects first, and it gives fault current a safe path to the ground instead of through anyone touching a metal case. Fixed colours let anyone identify the wires.",
  },
  "em-spectrum": {
    title: "The electromagnetic spectrum",
    why: "These are all the same kind of wave, and in a vacuum all travel at 3 × 10⁸ m/s. Because that speed is fixed, wave speed = frequency × wavelength means a shorter wavelength must come with a higher frequency, and higher frequency waves carry more energy in each packet. That is why gamma rays damage cells and radio waves do not.",
  },
  "half-life-graph": {
    title: "Radioactive decay curve",
    why: "Every nucleus that has not yet decayed has the same chance of going in the next second, so as fewer are left, fewer decay each second and the curve levels off. That fixed chance is why the halving time stays the same no matter how much you start with. Decay is random, so you can never say when one particular nucleus will go.",
  },
  "radiation-penetration": {
    title: "Penetrating power of radiation",
    why: "An alpha particle is large and doubly charged, so it knocks electrons off atoms constantly and spends all its energy within a few centimetres of air. Beta is far lighter, so it gets much further, and gamma has no charge or mass at all, so only dense material absorbs much of it. Ionising most makes alpha the most harmful inside the body.",
  },
  "star-life-cycle": {
    title: "Life cycle of a star",
    why: "A star holds its size while the outward push from fusion in its core balances gravity pulling inwards, and once the fuel runs low gravity wins. How hard gravity pulls depends on the mass, so a heavy star collapses far more violently and ends as a neutron star or black hole. The Sun is too light for that and fades as a white dwarf.",
  },

  // ── Biology, second batch ────────────────────────────────────────────────
  "mitosis-vs-meiosis": {
    title: "Two kinds of cell division",
    why: "Mitosis copies the chromosomes once and then divides once, so each new cell ends up with the same set as the parent, which is exactly what growth and repair need. Meiosis copies once but divides twice, so the number is halved and joining two gametes restores the normal count rather than doubling it.",
  },
  "digestive-system": {
    title: "The gut, stage by stage",
    why: "Food is only useful once it is broken into molecules small enough to cross the gut wall into the blood. Bile does its share of that physically rather than chemically: it neutralises stomach acid so intestinal enzymes meet the pH they work best at, and it splits fat into droplets so lipase has far more surface to attack.",
  },
  "respiration-comparison": {
    title: "Aerobic and anaerobic respiration",
    why: "With oxygen, glucose is broken right down to carbon dioxide and water, so nearly all of its energy is released. Without oxygen the breakdown stops at lactic acid, leaving most of the energy still locked inside that molecule, but nothing has to be delivered by the blood first so it can start immediately.",
  },
  "negative-feedback": {
    title: "Controlling blood glucose",
    why: "The response acts against whatever set it off, so insulin is only released while the glucose level is above normal. As glucose moves into cells and is stored as glycogen the level falls, the receptors detect less, and less insulin is sent out, so the correction eases off before it overshoots.",
  },
  "natural-selection": {
    title: "Four steps of natural selection",
    why: "The variation comes first, from random mutation, and it is already there before the environment changes; an organism cannot decide to grow a useful feature because it needs one. Those that happen to be better suited live long enough to breed and pass the allele on, so it grows commoner generation by generation.",
  },
  "classification-hierarchy": {
    title: "Levels of classification",
    why: "Each group sits inside the one above it, so anything in the same order already shares every feature its whole class shares, plus extra ones of its own. That is why two organisms in the same genus are far more alike than two that only share a kingdom.",
  },
  "carbon-cycle": {
    title: "The carbon cycle",
    why: "Carbon atoms are never used up, only passed on, moving from the air into plants, along the food chain, and eventually back into the air again. The balance matters more than the route: burning fossil fuels releases carbon that was locked away for millions of years far faster than plants can take it back out.",
  },

  // ── Maths, second batch ──────────────────────────────────────────────────
  "quadratic-graph": {
    title: "Graph of a quadratic",
    why: "Solving x² − 2x − 3 = 0 is asking where y has the value zero, and y is zero exactly where the curve meets the horizontal axis. Factorising into (x + 1)(x − 3) gives −1 and 3. The curve is symmetrical, so the turning point sits halfway between those two crossings.",
  },
  "inequality-number-line": {
    title: "Inequalities on a number line",
    why: "x > 1 does not allow 1 itself, so the circle is left hollow to show the end value is excluded, while x ≤ 3 does allow 3 and earns a solid circle. The arrow shows that every value further along works too, so the answer is a whole stretch of the line rather than a list.",
  },
  "ratio-bar-model": {
    title: "Sharing in a ratio",
    why: "Writing 3 : 5 means the money is cut into equal-sized parts, three for one share and five for the other, so there are eight parts in total. Dividing £40 by 8 shows one part is worth £5, and each share is its number of parts × £5. Check by adding the shares back to £40.",
  },
  "speed-formula-triangle": {
    title: "Speed, distance and time",
    why: "Speed is distance ÷ time, and distance = speed × time and time = distance ÷ speed are the very same statement rearranged, which is what the triangle stores for you. The units still have to agree, so a speed in km/h needs a time in hours, not in minutes.",
  },
  "bounds-number-line": {
    title: "Upper and lower bounds",
    why: "Rounding to the nearest whole number keeps every value that is closer to 24 than to any other whole number, which is everything from 23.5 up to just below 24.5. 23.5 rounds up to 24, so it counts, while 24.5 would round to 25 and is only the cut-off point.",
  },
  "expanding-brackets-grid": {
    title: "Expanding double brackets",
    why: "(x + 2)(x + 3) is the area of a rectangle that is x + 2 along and x + 3 up, and the grid works that area out one small rectangle at a time. Every term in the first bracket has to meet every term in the second, giving four products, then 3x and 2x collect into 5x.",
  },
  "percentage-multiplier": {
    title: "Percentage multipliers",
    why: "The starting amount is 100% of itself, so adding 20% leaves you with 120%, and 120% as a decimal is 1.2. Taking 20% away leaves 80%, or 0.8. Because each change is one multiplication, several changes in a row just multiply together, which is how compound interest builds up.",
  },
};
