// The diagram registry — every name the content files are allowed to use.
//
// One flat namespace across all subjects, deliberately. A key-fact block just
// says `diagrams: ["angles-on-a-line"]` without also having to say which
// subject that came from, and the same picture can be used by two subjects
// when it genuinely is the same picture.
//
// Names are kebab-case and must be unique across every subject file. That is
// enforced by TypeScript: two identical keys in the object below is an error.

import * as biology from "./biology";
import * as chemistry from "./chemistry";
import * as maths from "./maths";
import * as physics from "./physics";

export const DIAGRAMS = {
  // Angles and 2D shapes
  "angles-on-a-line": maths.AnglesOnALine,
  "angles-around-a-point": maths.AnglesAroundAPoint,
  "vertically-opposite": maths.VerticallyOpposite,
  "angles-in-a-triangle": maths.AnglesInATriangle,
  "parallel-corresponding": maths.ParallelCorresponding,
  "parallel-alternate": maths.ParallelAlternate,
  "parallel-co-interior": maths.ParallelCoInterior,
  "exterior-angle-triangle": maths.ExteriorAngleTriangle,
  "polygon-exterior-angles": maths.PolygonExteriorAngles,
  "triangle-perpendicular-height": maths.TrianglePerpendicularHeight,
  "trapezium-area": maths.TrapeziumArea,

  // Circle theorems
  "circle-parts": maths.CircleParts,
  "circle-angle-at-centre": maths.CircleAngleAtCentre,
  "circle-semicircle": maths.CircleSemicircle,
  "circle-same-segment": maths.CircleSameSegment,
  "circle-cyclic-quadrilateral": maths.CircleCyclicQuadrilateral,
  "circle-tangent-radius": maths.CircleTangentRadius,
  "circle-alternate-segment": maths.CircleAlternateSegment,
  "circle-sector-arc": maths.CircleSectorArc,

  // Pythagoras and trigonometry
  "pythagoras": maths.Pythagoras,
  "sohcahtoa": maths.Sohcahtoa,
  "sine-rule": maths.SineRule,
  "cosine-rule": maths.CosineRule,

  // Constructions and bearings
  "perpendicular-bisector": maths.PerpendicularBisector,
  "angle-bisector": maths.AngleBisector,
  "bearing": maths.Bearing,

  // Probability
  "tree-diagram": maths.TreeDiagram,
  "venn-two-sets": maths.VennTwoSets,

  // ── Maths: statistics ────────────────────────────────────────────────────
  "box-plot": maths.BoxPlot,
  "cumulative-frequency": maths.CumulativeFrequency,
  "histogram": maths.Histogram,
  "scatter-correlation": maths.ScatterCorrelation,

  // ── Maths: straight-line graphs ──────────────────────────────────────────
  "gradient-intercept": maths.GradientIntercept,
  "parallel-perpendicular": maths.ParallelPerpendicular,

  // ── Maths: vectors and transformations ───────────────────────────────────
  "vector-addition": maths.VectorAddition,
  "transformation-reflection": maths.TransformationReflection,
  "transformation-rotation": maths.TransformationRotation,
  "transformation-translation": maths.TransformationTranslation,
  "transformation-enlargement": maths.TransformationEnlargement,

  // ── Maths: volume, surface area and similarity ───────────────────────────
  "prism-cross-section": maths.PrismCrossSection,
  "cylinder": maths.Cylinder,
  "cuboid-net": maths.CuboidNet,
  "similar-triangles": maths.SimilarTriangles,
  "area-volume-scale-factors": maths.AreaVolumeScaleFactors,

  // ── Physics ──────────────────────────────────────────────────────────────
  "series-circuit": physics.SeriesCircuit,
  "parallel-circuit": physics.ParallelCircuit,
  "ammeter-voltmeter": physics.AmmeterVoltmeter,
  "free-body-diagram": physics.FreeBodyDiagram,
  "resultant-force": physics.ResultantForce,
  "moments": physics.Moments,
  "transverse-wave": physics.TransverseWave,
  "longitudinal-wave": physics.LongitudinalWave,
  "reflection-law": physics.ReflectionLaw,
  "refraction": physics.Refraction,
  "distance-time-graph": physics.DistanceTimeGraph,
  "velocity-time-graph": physics.VelocityTimeGraph,
  "bar-magnet-field": physics.BarMagnetField,
  "atom-shells": physics.AtomShells,
  "pressure-in-liquids": physics.PressureInLiquids,

  // ── Chemistry ────────────────────────────────────────────────────────────
  "electron-shells": chemistry.ElectronShells,
  "isotope-notation": chemistry.IsotopeNotation,
  "ionic-bonding": chemistry.IonicBonding,
  "covalent-bonding": chemistry.CovalentBonding,
  "metallic-bonding": chemistry.MetallicBonding,
  "diamond-graphite": chemistry.DiamondGraphite,
  "fractional-distillation": chemistry.FractionalDistillation,
  "chromatography": chemistry.Chromatography,
  "reaction-profile-exothermic": chemistry.ReactionProfileExothermic,
  "reaction-profile-endothermic": chemistry.ReactionProfileEndothermic,
  "electrolysis-cell": chemistry.ElectrolysisCell,
  "rate-graph": chemistry.RateGraph,
  "collision-theory": chemistry.CollisionTheory,
  "alkane-alkene": chemistry.AlkaneAlkene,

  // ── Biology ──────────────────────────────────────────────────────────────
  "animal-cell": biology.AnimalCell,
  "plant-cell": biology.PlantCell,
  "osmosis": biology.Osmosis,
  "enzyme-lock-and-key": biology.EnzymeLockAndKey,
  "leaf-cross-section": biology.LeafCrossSection,
  "reflex-arc": biology.ReflexArc,
  "synapse": biology.Synapse,
  "double-circulation": biology.DoubleCirculation,
  "blood-vessels": biology.BloodVessels,
  "punnett-square": biology.PunnettSquare,
  "dna-double-helix": biology.DnaDoubleHelix,
  "food-chain": biology.FoodChain,
  "photosynthesis-limiting-factors": biology.PhotosynthesisLimitingFactors,
  "microscope-magnification": biology.MicroscopeMagnification,
} as const;

export type DiagramName = keyof typeof DIAGRAMS;

/**
 * Draws the diagrams a key-fact block asked for.
 *
 * An unknown name is skipped rather than crashing the page — but
 * check-content.mjs fails the build first, so it should never get here.
 */
export function DiagramRow({ names }: { names: readonly string[] }) {
  const found = names.filter((name): name is DiagramName => name in DIAGRAMS);
  if (found.length === 0) return null;

  return (
    <div
      className={`mt-5 grid gap-4 ${found.length > 1 ? "sm:grid-cols-2" : "max-w-sm"}`}
    >
      {found.map((name) => {
        const Diagram = DIAGRAMS[name];
        return (
          <div
            key={name}
            className="rounded-xl border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5"
          >
            <Diagram />
          </div>
        );
      })}
    </div>
  );
}
