/* built by build.py — edit modules/*.js */
var MODULES=[],EXAMQ=[];
MODULES.push({ id:"a1", num:1, unit:1, title:"Anatomical Terms, Planes & Movements",
 blurb:"Speak the language of anatomy: anatomical position, planes and axes, directional terms, cavities, regions and joint movements.",
 badge:{name:"Position Pro",icon:"🧭"},
 lessons:[
 {id:"a1l1",title:"Anatomical Position, Planes & Axes",mins:8,flower:"🌷",items:[
  {t:"learn",title:"Anatomical position",html:`<p>All anatomy is described relative to <span class="key">anatomical position</span>.</p>
<div class="defn">Standing upright, facing forward, arms hanging at the sides with <b>palms facing forward</b>; legs parallel, feet flat on the floor and facing forward.</div>
<p class="tip">Exam tip: in anatomical position the forearm is <b>supinated</b> (palms forward). Terms like "left" and "right" always refer to the patient's/specimen's sides, not the observer's.</p>`,slides:[4,5],explain:`<p>Anatomy needs one agreed "default pose" so everyone describes the same thing the same way. That pose is <b>anatomical position</b>: picture a person standing at attention, looking ahead, arms down by the sides, palms turned forward (thumbs point away from the body), feet flat and pointing forward.</p>
<ul><li><b>Supinated</b> = forearm rotated so the palm faces forward/up. Think of "carrying soup" in your palm.</li><li>Left and right are the <b>patient's</b> left and right, as if you were facing them, so their right is on your left.</li></ul>
<p class="tip">Memory hook: "palms forward, thumbs out".</p>
<p class="tip">Exam trap: a hand with palms facing the thighs is a relaxed pose, not anatomical position. All directional words (lateral, medial, anterior...) assume this pose, even if the person is lying down or the arm is raised.</p>`},
  {t:"mcq",q:"Which description matches anatomical position?",opts:["Standing, arms at sides, palms facing backward","Standing upright facing forward, arms at sides, palms facing forward","Lying supine with palms facing up","Standing with arms raised, palms facing medially"],a:1,why:"Anatomical position is upright, facing forward, palms forward, legs parallel and feet flat and forward. It is the reference for all anatomical description."},
  {t:"cloze",title:"Anatomical position",text:"In anatomical position the person stands [[upright]], faces forward, and the [[palms]] face forward with the feet [[parallel]] and flat on the floor.",bank:["upright","palms","parallel","supine","backs of the hands"]},
  {t:"learn",title:"Planes and axes",html:`<p>Movement occurs <b>in the planes, about the axes</b>.</p>
<table><tr><th>Plane</th><th>Divides body into</th><th>Axis</th></tr>
<tr><td><span class="key">Sagittal</span> (median = midline; parasagittal = off-midline)</td><td>Right / left</td><td>Frontal (coronal) axis</td></tr>
<tr><td><span class="key">Frontal (coronal)</span></td><td>Anterior / posterior</td><td>Sagittal axis</td></tr>
<tr><td><span class="key">Transverse</span> (horizontal, axial)</td><td>Superior / inferior</td><td>Longitudinal (vertical) axis</td></tr></table>
<p class="tip">The axis is always perpendicular to its plane, and movement in a plane happens about the <b>other-named</b> axis: sagittal plane → frontal axis; frontal plane → sagittal axis.</p>`,slides:[6,7],explain:`<p>A <b>plane</b> is an imaginary flat sheet slicing through the body. An <b>axis</b> is an imaginary straight rod (like a skewer or a door-hinge pin) that a body part spins around. Planes slice; axes are what movement pivots on.</p>
<ul><li><b>Sagittal</b>: splits left from right. Picture an arrow flying front to back (sagitta = arrow). The median one is the midline; parasagittal ones are off to either side.</li><li><b>Frontal (coronal)</b>: splits front from back, like the plane of a shop front.</li><li><b>Transverse</b>: a horizontal slice, top from bottom, like slicing a loaf.</li></ul>
<p>Think of a door: the door swings in a plane, about the hinge (axis). The hinge is at right angles to the door's swing.</p>
<p class="tip">Memory hook: the axis points <i>through</i> the plane's "missing" direction. Bending the elbow (sagittal plane) pivots about a side-to-side (frontal) axis; the arm raised sideways (frontal plane) pivots about a front-to-back (sagittal) axis.</p>
<p class="tip">Trap: the axis shares its name with the <i>other</i> plane, not its own.</p>`},
  {t:"match",title:"Plane ↔ axis it moves about",pairs:[["Sagittal plane","Frontal (coronal) axis"],["Frontal plane","Sagittal axis"],["Transverse plane","Longitudinal (vertical) axis"]]},
  {t:"mcq",q:"Which plane divides the body into anterior and posterior parts?",opts:["Median sagittal","Parasagittal","Transverse","Frontal (coronal)"],a:3,why:"The frontal (coronal) plane separates front from back. Sagittal planes separate left from right; transverse planes separate top from bottom."},
  {t:"mcq",q:"A sagittal plane that is NOT at the midline is called:",opts:["Median plane","Parasagittal plane","Axial plane","Coronal plane"],a:1,why:"The median sagittal plane runs through the midline; any other sagittal plane parallel to it is parasagittal."},
  {t:"sort",title:"Which axis does movement in each plane occur about?",buckets:["Frontal axis","Sagittal axis","Longitudinal axis"],items:[["Movements in the sagittal plane",0],["Movements in the frontal plane",1],["Movements in the transverse plane",2]]},
  {t:"learn",title:"Anatomical sections & imaging",html:`<p>Cuts through the body are named for the plane they follow: <span class="key">longitudinal</span>, <span class="key">transverse</span>, <span class="key">sagittal</span> and <span class="key">frontal (coronal)</span> sections.</p>
<div class="defn">Understanding planes and sections is important for interpreting medical imaging (transverse/horizontal views, sagittal views and frontal/coronal views).</div>`,slides:[6,7],explain:`<p>A <b>section</b> is what you see when the body is actually (or virtually) cut along a plane. CT and MRI scanners produce stacks of such slices, so reading a scan means knowing which plane you are looking at.</p>
<ul><li><b>Transverse (axial)</b> slice: like looking up at someone's cross-section from their feet. Common in CT.</li><li><b>Sagittal</b> slice: a side view, showing the profile of the spine and brain.</li><li><b>Frontal (coronal)</b> slice: a front view, like an X-ray of a standing person.</li><li><b>Longitudinal</b> section: any cut running along the long axis of an organ or limb.</li></ul>
<p class="tip">Memory hook: transverse = "trans-versing" across, like a belt around the waist.</p>
<p class="tip">Trap: "horizontal" and "axial" are just other names for transverse; do not treat them as new planes.</p>`},
  {t:"mcq",q:"A CT image shows the body as if sliced horizontally, as a cross-section from above. Which view is this?",opts:["Frontal (coronal)","Sagittal","Transverse (horizontal)","Parasagittal"],a:2,why:"Transverse (horizontal/axial) images are slices perpendicular to the long axis of the body, i.e., in the transverse plane."},
  {t:"order",title:"Order the planes from the one separating right/left, then front/back, then top/bottom",steps:["Sagittal plane","Frontal (coronal) plane","Transverse plane"],why:"Sagittal splits left from right, frontal splits anterior from posterior, transverse splits superior from inferior."}
 ]},
 {id:"a1l2",title:"Directional Terms, Cavities & Regions",mins:9,flower:"🌻",items:[
  {t:"learn",title:"Directional terms",html:`<table><tr><th>Term</th><th>Meaning / synonym</th></tr>
<tr><td><span class="key">Superior</span></td><td>Cranial / rostral (toward head)</td></tr>
<tr><td><span class="key">Inferior</span></td><td>Caudal (toward tail/feet)</td></tr>
<tr><td><span class="key">Anterior</span></td><td>Ventral (front)</td></tr>
<tr><td><span class="key">Posterior</span></td><td>Dorsal (back)</td></tr>
<tr><td><span class="key">Medial / Lateral</span></td><td>Toward / away from the midline</td></tr>
<tr><td><span class="key">Proximal / Distal</span></td><td>Closer to / farther from the trunk (point of attachment) of a limb</td></tr></table>`,slides:[8,9],explain:`<p>These are "GPS words" so you can say exactly where something is without pointing. Always assume anatomical position.</p>
<ul><li><b>Superior/inferior</b>: above/below. Cranial (toward the cranium/head) and rostral (toward the beak or nose) match superior; caudal (toward the tail) matches inferior.</li><li><b>Anterior/posterior</b>: front/back. Ventral (belly side) and dorsal (back side, like a shark's dorsal fin) are the synonyms.</li><li><b>Medial/lateral</b>: nearer to / farther from the midline. Your nose is medial to your ears.</li><li><b>Proximal/distal</b>: used for limbs. Proximal = nearer the trunk (where the limb attaches); distal = farther away. Elbow is proximal to the wrist.</li></ul>
<p class="tip">Memory hook: "proximal = proximity to the trunk".</p>
<p class="tip">Trap: medial/lateral are about the midline, proximal/distal are about the limb's attachment. The thumb is lateral to the little finger in anatomical position.</p>`},
  {t:"match",title:"Match the synonyms",pairs:[["Superior","Cranial / rostral"],["Inferior","Caudal"],["Anterior","Ventral"],["Posterior","Dorsal"]]},
  {t:"mcq",q:"The elbow is ______ to the wrist, and the wrist is ______ to the elbow.",opts:["distal; proximal","proximal; distal","medial; lateral","superficial; deep"],a:1,why:"Proximal means closer to the trunk/attachment of the limb; distal means farther away. The elbow is proximal to the wrist."},
  {t:"mcq",q:"In anatomical position, the thumb is ______ to the little finger.",opts:["medial","distal","lateral","posterior"],a:2,why:"In anatomical position (palms forward) the thumb is on the side away from the midline, so it is lateral to the little finger."},
  {t:"learn",title:"Other paired terms",html:`<ul><li><span class="key">Superficial</span> vs <span class="key">deep</span> – closer to vs farther from the surface</li>
<li><span class="key">Internal</span> vs <span class="key">external</span></li>
<li><span class="key">Central</span> vs <span class="key">peripheral</span></li>
<li><span class="key">Bilateral</span> (both sides) vs <span class="key">unilateral</span> (one side)</li>
<li><span class="key">Ipsilateral</span> (same side) vs <span class="key">contralateral</span> (opposite side)</li>
<li><span class="key">Palmar</span> vs <span class="key">dorsal</span> (hand); <span class="key">plantar</span> vs <span class="key">dorsal</span> (foot)</li>
<li><span class="key">Basal</span> vs <span class="key">apical</span> (base vs tip)</li></ul>
<p class="tip">Palmar = front of the hand; plantar = sole of the foot; dorsal = back of the hand or top of the foot.</p>`,slides:[8,9],explain:`<p>These extra pairs refine location and describe how many sides are affected.</p>
<ul><li><b>Superficial/deep</b>: skin is superficial to muscle; bone is deep to muscle.</li><li><b>Internal/external</b>: inside versus outside a cavity or organ wall.</li><li><b>Central/peripheral</b>: near the centre versus out towards the edge (e.g. brain and spinal cord are central, nerves out in the limbs are peripheral).</li><li><b>Bilateral/unilateral</b>: "bi" = two, "uni" = one side.</li><li><b>Ipsilateral/contralateral</b>: ipsi = same, contra = opposite (think "contrary").</li><li><b>Basal/apical</b>: base versus tip (the lung's base sits on the diaphragm; its apex is at the top).</li></ul>
<p>Palmar is the palm side of the hand; plantar is the sole of the foot ("plant your foot"). Dorsal is the "back" side: the back of the hand and the top of the foot.</p>
<p class="tip">Trap: a stroke affecting the arm and leg on one side is unilateral, not bilateral.</p>`},
  {t:"sort",title:"Hand or foot surface term?",buckets:["Palmar","Plantar","Dorsal (either)"],items:[["Surface of the palm",0],["Sole of the foot",1],["Back of the hand",2],["Top of the foot",2],["Anterior surface of the hand in anatomical position",0]]},
  {t:"mcq",q:"A stroke affects the right arm and right leg. This is best described as:",opts:["Bilateral","Contralateral","Unilateral","Peripheral"],a:2,why:"Both limbs on one side = unilateral (one side only), versus bilateral (both sides)."},
  {t:"mcq",q:"A bullet entering the right shoulder exits the left shoulder. The two wounds are ______ to each other.",opts:["Ipsilateral","Contralateral","Proximal","Superficial"],a:1,why:"Contralateral means on opposite sides of the body; ipsilateral means the same side."},
  {t:"learn",title:"Body cavities",html:`<ul><li><span class="key">Cranial cavity</span> (brain)</li>
<li><span class="key">Thoracic cavity</span>: right and left <b>pulmonary spaces</b> plus the <span class="key">mediastinum</span> (superior and inferior)</li>
<li><span class="key">Abdominopelvic cavity</span> = abdominal cavity + pelvic cavity</li></ul>
<div class="defn">The <b>diaphragm</b> closes the inferior thoracic aperture and separates the thoracic from the abdominal cavity.</div>
<p>Cavities are spaces bound by important landmark structures that contain vital organs.</p>`,slides:[10],explain:`<p>A body cavity is a fluid- or tissue-lined space inside the body that houses and protects organs. Here they are described by their surrounding walls and landmarks.</p>
<ul><li><b>Cranial cavity</b>: the inside of the skull; holds the brain.</li><li><b>Thoracic cavity</b>: the chest. It has left and right <b>pulmonary spaces</b> (one for each lung) with the <b>mediastinum</b>, the central compartment between them that contains the heart, great vessels, oesophagus and trachea.</li><li><b>Abdominopelvic cavity</b>: the abdominal cavity (digestive organs, kidneys) continuous with the pelvic cavity below (bladder, reproductive organs).</li></ul>
<p>The <b>diaphragm</b> is the dome-shaped muscle forming the floor of the chest and the roof of the abdomen. It closes the thoracic outlet (the "inferior thoracic aperture"), which is why it is the dividing line.</p>
<p class="tip">Memory hook: mediastinum = the "middle stuff" between the lungs.</p>
<p class="tip">Trap: the lungs are not in the mediastinum; they sit in their own pulmonary spaces.</p>`},
  {t:"cloze",title:"Cavities",text:"The thoracic cavity contains two [[pulmonary]] spaces and the [[mediastinum]]. The [[diaphragm]] closes the inferior thoracic aperture, and the abdominal and pelvic cavities together form the [[abdominopelvic]] cavity.",bank:["pulmonary","mediastinum","diaphragm","abdominopelvic","cranial"]},
  {t:"mcq",q:"Which structure closes the inferior thoracic aperture?",opts:["Sternum","Diaphragm","Costal margin","Pelvic floor"],a:1,why:"The diaphragm closes the inferior thoracic aperture, separating the thoracic from the abdominal cavity."},
  {t:"learn",title:"Regions of the abdomen",html:`<p><b>Nine-region system</b> (using midclavicular lines, a <span class="key">subcostal (transpyloric) line</span> at <b>L1</b> and a <span class="key">transtubercular line</span> at <b>L5</b>):</p>
<table><tr><td>Right hypochondriac</td><td>Epigastric</td><td>Left hypochondriac</td></tr>
<tr><td>Right lumbar</td><td>Umbilical</td><td>Left lumbar</td></tr>
<tr><td>Right inguinal</td><td>Pubic</td><td>Left inguinal</td></tr></table>
<p><b>Four-quadrant system:</b> upper right, upper left, lower right, lower left (centred on the umbilicus).</p>`,slides:[11],explain:`<p>Clinicians divide the belly into zones so a patient's pain or a scan finding can be located precisely. There are two systems.</p>
<ul><li><b>Nine regions</b>: like a tic-tac-toe grid. Two vertical lines (the midclavicular lines, dropping down from the middle of each collarbone) and two horizontal lines (the subcostal/transpyloric line at L1 and the transtubercular line at L5; L1 and L5 are vertebral levels in the lower back) create three rows: top (hypochondriac-epigastric-hypochondriac), middle (lumbar-umbilical-lumbar), bottom (inguinal-pubic-inguinal).</li><li><b>Four quadrants</b>: simply cross lines at the belly button (umbilicus); quick and common in the clinic.</li></ul>
<p class="tip">Memory hook: "hypo-chondriac" = under the cartilage of the ribs; "epi-gastric" = upon the stomach; "lumbar" = loin; "inguinal" = groin.</p>
<p class="tip">Trap: the middle-row sides are lumbar, the bottom-row sides are inguinal. Do not mix them up.</p>`},
  {t:"match",title:"Abdominal regions",pairs:[["Central, below the ribs and sternum","Epigastric region"],["Surrounds the umbilicus","Umbilical region"],["Central, lowest row","Pubic region"],["Lateral, middle row","Lumbar region"],["Lateral, lowest row","Inguinal region"],["Lateral, highest row","Hypochondriac region"]]},
  {t:"mcq",q:"Which vertebral level corresponds to the subcostal (transpyloric) line?",opts:["L5","T12","L1","S1"],a:2,why:"The subcostal (transpyloric) line is at L1; the transtubercular line is at L5."},
  {t:"mcq",q:"A patient reports pain in the left lateral part of the middle row of the abdomen. Which region?",opts:["Left hypochondriac","Left lumbar","Left inguinal","Umbilical"],a:1,why:"Middle row laterally = lumbar regions; top row = hypochondriac; bottom row = inguinal."}
 ]},
 {id:"a1l3",title:"Limb Regions",mins:6,flower:"🌼",items:[
  {t:"learn",title:"Regions of the upper limb",html:`<ul><li><span class="key">Shoulder</span>: deltoid region, scapular region (posteriorly)</li>
<li><span class="key">Axillary region</span> = armpit</li>
<li><span class="key">Arm</span> (shoulder to elbow)</li>
<li><span class="key">Elbow</span>: <span class="key">cubital fossa</span> anteriorly</li>
<li><span class="key">Forearm</span></li>
<li><span class="key">Wrist</span> = carpal region</li>
<li><span class="key">Hand</span>: palmar and dorsal surfaces</li></ul>
<p>The regions of the upper limb contain groups of muscles that work together to perform complex movements.</p>`,slides:[12],explain:`<p>The limb is named in sections from the trunk outward, and each section has its own muscle group, so these names appear constantly later.</p>
<ul><li><b>Shoulder</b> includes the rounded deltoid region (on the top/side) and the scapular region (behind, over the shoulder blade).</li><li><b>Axillary region</b> is the armpit, the hollow under the shoulder joint.</li><li><b>Arm</b> is only shoulder to elbow (everyday speech says "arm" for the whole thing, but anatomically it is not).</li><li><b>Cubital fossa</b>: the shallow triangular hollow at the front of the elbow where blood is drawn.</li><li><b>Forearm</b> elbow to wrist; <b>carpal region</b> = wrist; <b>hand</b> has a palmar (front) and dorsal (back) side.</li></ul>
<p class="tip">Memory hook: "fossa" = a hollow or ditch; "cubit" was an old unit measured from the elbow.</p>
<p class="tip">Trap: "arm" is NOT the forearm.</p>`},
  {t:"order",title:"Order the upper limb regions proximal → distal",steps:["Shoulder","Arm","Elbow","Forearm","Wrist","Hand"],why:"The upper limb runs shoulder → arm → elbow → forearm → wrist → hand."},
  {t:"mcq",q:"The cubital fossa is the anterior region of the:",opts:["Wrist","Shoulder","Elbow","Axilla"],a:2,why:"The cubital fossa is the anterior region of the elbow."},
  {t:"mcq",q:"The armpit is formally called the ______ region.",opts:["Axillary","Scapular","Deltoid","Carpal"],a:0,why:"Axillary region = armpit. The carpal region is the wrist; the deltoid and scapular regions are parts of the shoulder."},
  {t:"learn",title:"Regions of the lower limb",html:`<ul><li><span class="key">Hip</span>: gluteal region</li>
<li><span class="key">Thigh</span></li>
<li><span class="key">Knee</span>: <span class="key">popliteal fossa</span> (posterior)</li>
<li><span class="key">Leg</span> (knee to ankle)</li>
<li><span class="key">Ankle</span></li>
<li><span class="key">Foot</span>: dorsal and plantar surfaces</li></ul>
<p class="tip">Cubital fossa = front of the elbow; popliteal fossa = back of the knee. "Leg" is knee to ankle only, "arm" is shoulder to elbow only.</p>`,slides:[12],explain:`<p>Same idea as the upper limb: named from the trunk downward. Note that the slides' limb-region diagram is shown for the upper limb; the lower limb follows the same pattern.</p>
<ul><li><b>Hip</b>: includes the gluteal region (buttock).</li><li><b>Thigh</b>: hip to knee.</li><li><b>Knee</b> with the <b>popliteal fossa</b>, the hollow behind the knee (picture the soft diamond-shaped dent when you bend it).</li><li><b>Leg</b>: only knee to ankle, i.e. the shin and calf. Everyday "leg" is the whole limb, but not in anatomy.</li><li><b>Ankle</b> then <b>foot</b>, with a dorsal (top) and plantar (sole) surface.</li></ul>
<p class="tip">Memory hook: cubital fossa = Front, elbow; popliteal fossa = back (Posterior), knee. "Pop" your knee behind.</p>
<p class="tip">Trap: the thigh is not part of the "leg" in anatomical language.</p>`},
  {t:"match",title:"Region ↔ location",pairs:[["Cubital fossa","Anterior elbow"],["Popliteal fossa","Posterior knee"],["Gluteal region","Hip / buttock"],["Carpal region","Wrist"],["Plantar surface","Sole of foot"]]},
  {t:"mcq",q:"A patient has a laceration over the popliteal fossa. The injury is on the:",opts:["Front of the elbow","Back of the knee","Front of the knee","Back of the elbow"],a:1,why:"The popliteal fossa is the posterior region of the knee."},
  {t:"sata",q:"Which are correct pairings of body part and region name? (Select all)",opts:["Wrist – carpal region","Armpit – axillary region","Knee to ankle – thigh","Shoulder to elbow – arm"],a:[0,1,3],why:"Knee to ankle is the leg; the thigh is hip to knee."}
 ]},
 {id:"a1l4",title:"Movements",mins:9,flower:"🌺",items:[
  {t:"learn",title:"Frontal plane movements (about the sagittal axis)",html:`<ul><li><span class="key">Abduction</span> – movement away from the midline of the body</li>
<li><span class="key">Adduction</span> – movement toward the midline</li>
<li><span class="key">Lateral flexion</span> of the trunk/neck</li>
<li><span class="key">Eversion</span> / <span class="key">inversion</span> of the foot</li>
<li>Scapular movements (e.g. elevation/depression)</li>
<li>For fingers/hand: abduction/adduction relative to the <b>midline of the hand</b>; for the foot, the midline of the foot</li></ul>
<p class="tip">All movements in the frontal plane occur about the <b>sagittal axis</b>.</p>`,slides:[15],explain:`<p>Frontal-plane movements are the "side-to-side" ones, as in doing a jumping jack seen from the front. They swing about a front-to-back (sagittal) axis.</p>
<ul><li><b>Abduction</b>: moving a limb away from the midline (lifting your arm out sideways). Memory hook: "ab" = away, like abducted by aliens.</li><li><b>Adduction</b>: bringing it back toward the midline ("add" it back to the body).</li><li><b>Lateral flexion</b>: bending the neck or trunk to the side (ear toward shoulder).</li><li><b>Inversion/eversion</b>: tilting the sole of the foot inward (to face the other foot) or outward.</li><li><b>Scapular elevation/depression</b>: shrugging the shoulder blade up or pulling it down.</li></ul>
<p>For fingers and toes, "midline" means the midline of the hand or foot, not the body: spreading your fingers is abduction.</p>
<p class="tip">Trap: eversion/inversion are frontal, but dorsiflexion/plantarflexion are sagittal.</p>`},
  {t:"mcq",q:"Which movement occurs in the frontal plane?",opts:["Flexion of the elbow","Medial rotation of the arm","Abduction of the shoulder","Dorsiflexion of the ankle"],a:2,why:"Abduction/adduction, lateral flexion, and inversion/eversion occur in the frontal plane about a sagittal axis."},
  {t:"sort",title:"Frontal vs sagittal plane movements",buckets:["Frontal plane","Sagittal plane"],items:[["Abduction",0],["Adduction",0],["Eversion",0],["Inversion",0],["Lateral flexion",0],["Flexion",1],["Extension",1],["Dorsiflexion",1],["Plantarflexion",1]]},
  {t:"learn",title:"Sagittal plane movements (about the frontal axis)",html:`<ul><li><span class="key">Flexion</span> – decreases the angle between two body parts</li>
<li><span class="key">Extension</span> – increases the angle between two body parts</li>
<li><span class="key">Dorsiflexion</span> and <span class="key">plantarflexion</span> of the ankle/foot</li></ul>
<p class="tip">Flexion/extension of the elbow, knee, hip, shoulder, neck... all happen in the sagittal plane about the frontal (coronal) axis.</p>`,slides:[16],explain:`<p>Sagittal-plane movements are the forward-and-backward bending ones, like a side-on view of someone walking. The pivot is a side-to-side (frontal) axis, like a hinge pin passing from left to right through the joint.</p>
<ul><li><b>Flexion</b>: makes the angle at a joint smaller (bending the elbow, curling the knee, nodding the chin down).</li><li><b>Extension</b>: makes the angle larger, straightening back out.</li><li><b>Dorsiflexion</b>: pulling the top of the foot toward the shin (heels-on-ground, toes up).</li><li><b>Plantarflexion</b>: pointing the toes down like pressing a gas pedal or standing on tiptoe.</li></ul>
<p class="tip">Memory hook: "plantar" = the sole, so plantarflexion pushes the sole down; dorsiflexion lifts the "dorsum" (top) of the foot up.</p>
<p class="tip">Trap: at the shoulder and hip, flexion means lifting the limb forward, and at the knee it means the heel moves toward the buttock; do not rely on "direction" alone, think "angle gets smaller".</p>`},
  {t:"match",title:"Movement ↔ definition",pairs:[["Flexion","Decreases the angle between two parts"],["Extension","Increases the angle between two parts"],["Abduction","Away from the midline"],["Adduction","Toward the midline"]]},
  {t:"mcq",q:"Standing on tiptoes involves which ankle movement?",opts:["Dorsiflexion","Eversion","Inversion","Plantarflexion"],a:3,why:"Plantarflexion points the foot downward (toes down) in the sagittal plane; dorsiflexion pulls the top of the foot toward the shin."},
  {t:"mcq",q:"All movements in the sagittal plane occur about which axis?",opts:["Sagittal axis","Longitudinal axis","Frontal axis","Vertical axis"],a:2,why:"Sagittal-plane movements (flexion/extension) occur about the frontal (coronal) axis."},
  {t:"learn",title:"Transverse plane movements (about the longitudinal axis)",html:`<ul><li><span class="key">Rotation</span> – <b>medial (internal)</b> and <b>lateral (external)</b></li>
<li><span class="key">Protraction</span> / <span class="key">retraction</span> (e.g. scapula)</li>
<li>Rotation of the head/trunk</li></ul>
<div class="defn">Medial (internal) rotation: toward the midline. Lateral (external) rotation: away from the midline.</div>
<p class="tip">All movements in the transverse plane occur about the <b>longitudinal (vertical) axis</b>.</p>`,slides:[17],explain:`<p>Transverse-plane movements are turning or twisting motions, like a spinning-top or a swivel chair. The pivot is the vertical (longitudinal) axis running up through the body or along the length of a limb.</p>
<ul><li><b>Medial (internal) rotation</b>: the front surface of the limb turns toward the midline (e.g. turn your toes inward).</li><li><b>Lateral (external) rotation</b>: the front turns away from the midline.</li><li><b>Rotation of the head or trunk</b>: looking over your shoulder or twisting the torso.</li><li><b>Protraction/retraction</b>: moving a structure (such as the scapula) forward around the rib cage (reaching) or backward (squeezing the shoulder blades together).</li></ul>
<p class="tip">Memory hook: "transverse = twist".</p>
<p class="tip">Trap: shaking your head "no" is rotation (transverse); nodding "yes" is flexion/extension (sagittal).</p>`},
  {t:"cloze",title:"Planes, axes, movements",text:"Flexion and extension occur in the [[sagittal]] plane about the [[frontal]] axis, abduction and adduction occur in the [[frontal]] plane about the sagittal axis, and rotation occurs in the [[transverse]] plane about the [[longitudinal]] axis.",bank:["sagittal","frontal","transverse","longitudinal"]},
  {t:"mcq",q:"A patient turns the head to look over the shoulder. This movement is in the ______ plane about the ______ axis.",opts:["frontal; sagittal","sagittal; frontal","transverse; longitudinal","transverse; frontal"],a:2,why:"Rotation takes place in the transverse plane about the longitudinal (vertical) axis."},
  {t:"learn",title:"Complex & compound movements",html:`<ul><li><span class="key">Circumduction</span> – combination of flexion, extension, abduction and adduction (the limb traces a cone)</li>
<li><span class="key">Opposition</span> – thumb brought across to meet the fingers; <span class="key">reposition</span> returns it</li>
<li>Compound movements use several muscle groups working together</li></ul>`,slides:[18],explain:`<p>Some real-life actions are not a single movement at one joint; they combine several.</p>
<ul><li><b>Circumduction</b>: a smooth combination of flexion, abduction, extension and adduction one after another. The end of the limb draws a circle while the whole limb sweeps out a cone shape (picture a windmill arm or stirring a big pot). Possible at ball-and-socket joints such as the shoulder and hip.</li><li><b>Opposition</b>: bringing the thumb pad across the palm to touch another fingertip. It is what lets you pinch, grip a pen or hold a cup, and is the thumb's key human skill.</li><li><b>Reposition</b>: returns the thumb back to its normal position beside the hand.</li></ul>
<p>"Compound" simply means several muscle groups cooperate to produce the action.</p>
<p class="tip">Trap: circumduction is not the same as rotation. Rotation spins the bone about its own long axis, while circumduction swings the end of the limb in a circle.</p>`},
  {t:"mcq",q:"Which movement is a combination of flexion, extension, abduction and adduction?",opts:["Opposition","Circumduction","Reposition","Rotation"],a:1,why:"Circumduction sequentially combines those four movements so the distal end traces a circle."},
  {t:"flash",title:"Movement flashcards",cards:[["Opposition","Thumb pad brought to meet fingertips (compound movement)"],["Reposition","Return of the thumb from opposition"],["Circumduction","Flexion + extension + abduction + adduction in sequence"],["Dorsiflexion","Sagittal plane; ankle/foot top moves toward shin"],["Eversion/Inversion","Frontal plane foot movements"]]}
 ]},
 {id:"a1boss",title:"Anatomical Terms, Planes & Movements Boss Quiz",mins:7,flower:"👑",boss:true,items:[
  {t:"mcq",q:"Which pair is a correct synonym match?",opts:["Posterior – ventral","Inferior – cranial","Anterior – ventral","Superior – caudal"],a:2,why:"Anterior = ventral; posterior = dorsal; superior = cranial/rostral; inferior = caudal."},
  {t:"mcq",q:"Flexion of the elbow occurs in the ______ plane about the ______ axis.",opts:["frontal; sagittal","sagittal; frontal","transverse; longitudinal","sagittal; longitudinal"],a:1,why:"Flexion/extension occur in the sagittal plane about the frontal axis."},
  {t:"mcq",q:"Abducting the shoulder (raising arm out to the side) occurs in which plane/axis?",opts:["Frontal plane, sagittal axis","Sagittal plane, frontal axis","Transverse plane, longitudinal axis","Frontal plane, longitudinal axis"],a:0,why:"Abduction is a frontal-plane movement about the sagittal axis."},
  {t:"mcq",q:"The patient's left hand is injured. Which statement is correct regarding her right hand?",opts:["It is ipsilateral to the left hand","It is contralateral to the left hand","It is proximal to the left hand","It is deep to the left hand"],a:1,why:"Structures on opposite sides are contralateral."},
  {t:"sata",q:"Select all movements that occur in the sagittal plane.",opts:["Flexion","Plantarflexion","Eversion","Dorsiflexion","Medial rotation"],a:[0,1,3],why:"Flexion, extension, dorsiflexion and plantarflexion are sagittal. Eversion is frontal; rotation is transverse."},
  {t:"mcq",q:"The subcostal (transpyloric) line passes through which vertebral level?",opts:["T10","L5","L1","S2"],a:2,why:"Subcostal (transpyloric) line = L1; transtubercular line = L5."},
  {t:"mcq",q:"The cubital fossa is located on the:",opts:["Posterior knee","Anterior elbow","Posterior elbow","Anterior wrist"],a:1,why:"Cubital fossa = anterior elbow; popliteal fossa = posterior knee."},
  {t:"mcq",q:"A radiologist shows an image that separates the body into front and back halves. This is a:",opts:["Transverse view","Sagittal view","Frontal (coronal) view","Parasagittal view"],a:2,why:"Frontal (coronal) sections divide anterior from posterior."},
  {t:"match",title:"Quick match",pairs:[["Plantar","Sole of the foot"],["Palmar","Front of the hand"],["Ipsilateral","Same side"],["Caudal","Toward the feet"],["Medial","Toward the midline"]]},
  {t:"mcq",q:"Which structure separates the thoracic cavity from the abdominal cavity?",opts:["Mediastinum","Costal margin","Diaphragm","Transpyloric line"],a:2,why:"The diaphragm closes the inferior thoracic aperture."}
 ]}
]});

EXAMQ.push({t:"mcq",unit:1,mod:"a1",q:"Which statement about anatomical position is correct?",opts:["The palms face posteriorly","The palms face anteriorly","The feet are rotated laterally","The person is lying supine","The arms are abducted 90°"],a:1,why:"Anatomical position: upright, forward-facing, arms at sides, palms forward, feet parallel and forward."});
EXAMQ.push({t:"mcq",unit:1,mod:"a1",q:"A tumour is located superior and posterior to a reference point. Which pair of terms is also correct?",opts:["Caudal and ventral","Cranial and dorsal","Rostral and ventral","Cranial and ventral","Caudal and dorsal"],a:1,why:"Superior = cranial/rostral; posterior = dorsal."});
EXAMQ.push({t:"mcq",unit:1,mod:"a1",q:"A physiotherapist asks a patient to move the arm in the transverse plane. Which movement is she assessing?",opts:["Abduction","Flexion","Medial rotation","Lateral flexion","Elevation of the scapula"],a:2,why:"Rotation (medial/lateral) is the transverse-plane movement about the longitudinal axis."});
EXAMQ.push({t:"mcq",unit:1,mod:"a1",q:"Which of the following is NOT a frontal plane movement?",opts:["Adduction of the hip","Inversion of the foot","Lateral flexion of the trunk","Abduction of the fingers","Dorsiflexion of the ankle"],a:4,why:"Dorsiflexion is sagittal-plane (about a frontal axis). The others are frontal-plane movements about a sagittal axis."});

MODULES.push({ id:"a2", num:2, unit:1, title:"Bones",
 blurb:"The skeletal system: bone development, aging and fractures, bone types and landmarks, joints, the skull, spine and thorax.",
 badge:{name:"Bone Builder",icon:"🦴"},
 lessons:[
 {id:"a2l1",title:"Skeletal System, Development & Fractures",mins:9,flower:"🌷",items:[
  {t:"learn",title:"Musculoskeletal system & functions",html:`<table><tr><th>Muscular system</th><th>Skeletal system</th></tr>
<tr><td>Muscles, tendons/aponeuroses, motor unit</td><td>Bones, cartilage, ligaments</td></tr>
<tr><td>Skeletal movement; maintaining posture and position; opening and closing of orifices; maintaining homeostasis</td><td><b>Support, protection, force translation, blood cell production, mineral storage</b></td></tr></table>`,slides:[4,5,6],explain:`<p>The muscular and skeletal systems work as one team, the <b>musculoskeletal system</b>: bones are the rigid framework, muscles are the engines that pull on it.</p>
<ul><li><b>Skeletal system</b>: bones, cartilage (smooth, firm tissue) and ligaments (tough straps connecting bone to bone).</li><li><b>Muscular system</b>: muscles, tendons/aponeuroses (tough cords or flat sheets joining muscle to bone) and the motor unit (one nerve cell plus the muscle fibres it controls).</li></ul>
<p>Skeletal functions: <b>support</b> (body shape), <b>protection</b> (skull around brain, ribs around lungs), <b>force translation</b> (bones act as levers to transmit muscle pull into movement), <b>blood cell production</b> (in bone marrow) and <b>mineral storage</b> (calcium, phosphate).</p>
<p>Muscle functions: movement, posture, opening/closing openings (sphincters) and homeostasis (e.g. shivering makes heat).</p>
<p class="tip">Memory hook: bones = scaffolding, muscle = motor.</p>
<p class="tip">Trap: blood cell production and mineral storage are skeletal, not muscular.</p>`},
  {t:"sort",title:"Muscular or skeletal system function?",buckets:["Muscular","Skeletal"],items:[["Skeletal movement",0],["Maintaining posture and position",0],["Opening and closing of orifices",0],["Blood cell production",1],["Mineral storage",1],["Protection",1],["Force translation",1],["Maintaining homeostasis",0]]},
  {t:"mcq",q:"Which of these is a function of the skeletal system?",opts:["Opening and closing of orifices","Maintaining posture","Blood cell production","Maintaining homeostasis"],a:2,why:"Skeletal functions: support, protection, force translation, blood cell production, mineral storage."},
  {t:"learn",title:"Axial vs appendicular skeleton",html:`<p><span class="key">Axial skeleton</span> (trunk): skull and mandible, hyoid bone, vertebral column, ribs, sternum.</p>
<p><span class="key">Appendicular skeleton</span> (appendages): pectoral girdle, pelvic girdle, bones of the upper and lower limbs.</p>
<ul><li>Upper limb: scapula, clavicle (pectoral girdle); humerus (arm); radius, ulna (forearm); carpals (wrist); metacarpals, phalanges (hand)</li>
<li>Lower limb: ilium, ischium, pubis (pelvic girdle); femur, patella (thigh/knee); tibia, fibula (leg); tarsals (ankle); metatarsals, phalanges (foot)</li></ul>`,slides:[4,6],explain:`<p>The skeleton is sorted into two groups based on where bones sit.</p>
<ul><li><b>Axial</b> = the "axis" or central trunk: skull (and mandible), hyoid (a small floating bone in the neck), vertebral column, ribs and sternum. Think "bones along the midline".</li><li><b>Appendicular</b> = the "appendages", i.e. the limbs plus the girdles that attach them to the axial skeleton. The <b>pectoral girdle</b> (clavicle + scapula) hooks the arm on; the <b>pelvic girdle</b> (ilium, ischium, pubis) hooks the leg on.</li></ul>
<p>Limb bones run in the same pattern: one long bone proximally (humerus / femur), two in the next segment (radius + ulna / tibia + fibula), a cluster of small wrist/ankle bones (carpals / tarsals), then metacarpals/metatarsals and phalanges (fingers, toes).</p>
<p class="tip">Trap: the clavicle and scapula belong to the appendicular, not axial, skeleton.</p>`},
  {t:"sort",title:"Axial or appendicular?",buckets:["Axial","Appendicular"],items:[["Sternum",0],["Hyoid bone",0],["Ribs",0],["Vertebral column",0],["Clavicle",1],["Scapula",1],["Ischium",1],["Femur",1],["Mandible",0],["Metacarpals",1]]},
  {t:"mcq",q:"Which bone is part of the pectoral girdle?",opts:["Humerus","Sternum","Clavicle","Ilium"],a:2,why:"The pectoral girdle = scapula + clavicle. The ilium belongs to the pelvic girdle; the sternum is axial."},
  {t:"learn",title:"Bone development & aging",html:`<ul><li>Bone development begins in utero (~6 weeks gestation) and does not finish until ~<b>20 years</b> of age.</li>
<li><span class="key">Epiphyseal plates</span> (growth plates) are present in childhood; closure leaves <span class="key">epiphyseal lines</span> in adults. <b>Damage to the epiphyseal plate can affect further bone growth.</b></li>
<li><span class="key">Osteoblasts</span> produce bone; <span class="key">osteoclasts</span> absorb bone.</li>
<li>Early in life production &gt; absorption; equal in adolescence/early adulthood; in late middle age absorption &gt; production.</li>
<li>Aging: loss of bone mass, ↓ calcium, increased brittleness, ↓ collagen synthesis → <b>osteoporosis</b>.</li>
<li>Bone adapts to strain: mechanical stress promotes bone growth; lack of these forces contributes to bone loss.</li></ul>`,slides:[7,8],explain:`<p>Bone is living tissue that is constantly being built and removed.</p>
<ul><li>Bones start forming before birth (~6 weeks) and keep growing until about 20 years.</li><li>Children grow longer at the <b>epiphyseal plate</b> (growth plate), a layer of cartilage near each end of a long bone. When growth finishes it becomes bone and leaves the <b>epiphyseal line</b>. A plate injury in a child can stop or distort growth.</li><li><b>Osteoblasts</b> build bone ("blast" = builder); <b>osteoclasts</b> break it down ("clast" = break). Bone is remodelled by their balance.</li></ul>
<p>Balance by age: early life, building wins; early adulthood, equal; late middle age, breakdown wins, so bone thins, loses calcium and collagen and becomes brittle: <b>osteoporosis</b> (porous bone).</p>
<p>Stress is good: weight-bearing exercise tells bone to strengthen; lack of load (immobility, spaceflight) leads to loss.</p>
<p class="tip">Memory hook: osteoBlasts Build, osteoClasts Carve away.</p>`},
  {t:"match",title:"Cell / structure ↔ role",pairs:[["Osteoblasts","Bone production"],["Osteoclasts","Bone absorption"],["Epiphyseal plate","Growth zone in children"],["Epiphyseal line","Remnant after plate closure"]]},
  {t:"mcq",q:"A 7-year-old fractures through the growth plate of the distal radius. Why is this clinically concerning?",opts:["It always causes a compound fracture","Damage to the epiphyseal plate can affect further bone growth","Osteoclasts will be permanently inactive","Epiphyseal lines will form too early in the diaphysis"],a:1,why:"Epiphyseal plates are the sites of longitudinal growth; damage can impair subsequent growth of that bone."},
  {t:"mcq",q:"A 70-year-old has increased bone brittleness. Which relationship best describes her bone remodelling?",opts:["Osteoblast activity > osteoclast activity","Osteoblast activity = osteoclast activity","Osteoblast activity < osteoclast activity","Osteoclasts are absent"],a:2,why:"In later life bone absorption (osteoclasts) outpaces production (osteoblasts), producing bone loss and osteoporosis."},
  {t:"mcq",q:"Which would be expected to promote bone growth?",opts:["Prolonged bed rest","Weight-bearing exercise","Decreased calcium intake","Lack of mechanical stress"],a:1,why:"Bone strengthens in response to strain; lack of mechanical forces contributes to bone loss."},
  {t:"learn",title:"Fracture types",html:`<ul><li><span class="key">Greenstick</span> – young children (incomplete, bone bends)</li>
<li><span class="key">Epiphyseal fracture</span> – through the growth plate (children)</li>
<li><span class="key">Spiral</span>, <span class="key">depressed</span>, <span class="key">comminuted</span> (multiple fragments)</li>
<li><span class="key">Compression</span> – more common in elderly (brittle bones)</li>
<li><span class="key">Simple</span> – just bone; <span class="key">Compound</span> – bone pierces skin</li></ul>`,slides:[9],explain:`<p>A fracture is simply a broken bone. Names describe the pattern of the break.</p>
<ul><li><b>Greenstick</b>: children's bones are bendy, so the bone cracks on one side and bends like a young green twig, without snapping fully.</li><li><b>Epiphyseal</b>: a break through the growth plate, serious in kids because growth can be affected.</li><li><b>Spiral</b>: twisting force makes a corkscrew-shaped break.</li><li><b>Depressed</b>: a piece of (usually skull) bone pushed inward.</li><li><b>Comminuted</b>: bone shattered into several fragments.</li><li><b>Compression</b>: bone crushed down on itself; common in older, brittle (osteoporotic) bones, especially vertebrae.</li><li><b>Simple (closed)</b>: skin intact. <b>Compound (open)</b>: the bone breaks through the skin, with higher infection risk.</li></ul>
<p class="tip">Memory hook: comminuted = "minute" pieces.</p>
<p class="tip">Trap: "compound" does not mean multiple breaks; it means skin broken.</p>`},
  {t:"match",title:"Fracture ↔ description",pairs:[["Simple fracture","Just bone"],["Compound fracture","Bone pierces skin"],["Greenstick fracture","Young children"],["Comminuted fracture","Bone broken into multiple pieces"],["Compression fracture","More common in elderly"]]},
  {t:"mcq",q:"A broken bone has pierced through the skin. This is a:",opts:["Simple fracture","Greenstick fracture","Compound fracture","Compression fracture"],a:2,why:"Compound fractures have bone breaking through skin; simple fractures involve only the bone."}
 ]},
 {id:"a2l2",title:"Bone Types & Landmarks",mins:9,flower:"🌻",items:[
  {t:"learn",title:"Types of bones",html:`<table><tr><th>Type</th><th>Example</th><th>Function</th></tr>
<tr><td><span class="key">Long</span></td><td>Femur</td><td>Structure, limb mobility</td></tr>
<tr><td><span class="key">Short</span></td><td>Tarsal bones</td><td>Support, stability</td></tr>
<tr><td><span class="key">Flat</span></td><td>Parietal bone</td><td>Protection, muscle attachment</td></tr>
<tr><td><span class="key">Irregular</span></td><td>Vertebrae</td><td>Muscle attachment, protection</td></tr>
<tr><td><span class="key">Sesamoid</span></td><td>Patella</td><td>Tendon protection, efficiency</td></tr></table>
<p class="tip">Bone shape and type are clues about function.</p>`,slides:[10,11],explain:`<p>Bones are classified by shape, and shape tells you the job.</p>
<ul><li><b>Long</b> (femur): longer than wide; act as levers for movement.</li><li><b>Short</b> (tarsals): roughly cube-shaped; give support and stability with limited movement.</li><li><b>Flat</b> (parietal bone of the skull): thin plates protecting organs and giving broad surfaces for muscle attachment.</li><li><b>Irregular</b> (vertebrae): complex shapes that do both protection (spinal cord) and muscle attachment.</li><li><b>Sesamoid</b> (patella): small bone embedded in a tendon, like a sesame seed; it protects the tendon and improves its leverage ("efficiency").</li></ul>
<p class="tip">Memory hook: match the example to the type: femur-long, tarsal-short, parietal-flat, vertebra-irregular, patella-sesamoid.</p>
<p class="tip">Trap: the patella is the exam favourite for sesamoid; vertebrae are irregular, not long or short.</p>`},
  {t:"match",title:"Bone type ↔ example",pairs:[["Long","Femur"],["Short","Tarsal bones"],["Flat","Parietal bone"],["Irregular","Vertebrae"],["Sesamoid","Patella"]]},
  {t:"mcq",q:"The patella is classified as which type of bone?",opts:["Short","Sesamoid","Irregular","Flat"],a:1,why:"The patella is a sesamoid bone, protecting the quadriceps tendon and improving efficiency."},
  {t:"mcq",q:"A bone whose primary roles are protection and muscle attachment, e.g. the parietal bone, is a:",opts:["Long bone","Short bone","Flat bone","Sesamoid bone"],a:2,why:"Flat bones: protection and muscle attachment."},
  {t:"learn",title:"Articular landmarks (surfaces that form joints)",html:`<ul><li><span class="key">Head</span> – rounded articular end</li>
<li><span class="key">Condyle</span> – round articular prominence at the end of a bone</li>
<li><span class="key">Facet</span> – small flat articular surface</li>
<li><span class="key">Fossa</span> – cup-like depression (shallow depression in the attachment context)</li></ul>
<div class="defn">Articulations are surfaces that rub together to form joints.</div>`,slides:[12,13],explain:`<p>Landmarks are the bumps, hollows and holes on bones. They are named in a common vocabulary so you can find them on any bone. This card covers those used for joints (<b>articular</b> means "joint surface").</p>
<ul><li><b>Head</b>: a rounded knob at the end of a bone, such as the head of the femur fitting in the hip socket.</li><li><b>Condyle</b>: a rounded, knuckle-like bump that articulates with another bone (e.g. femoral condyles on the knee).</li><li><b>Facet</b>: a small, flat, smooth patch where bones glide, e.g. on the vertebrae.</li><li><b>Fossa</b>: a hollow or shallow dish that a neighbouring bone sits in.</li></ul>
<p>Think "ball (head/condyle) and cup (fossa)".</p>
<p class="tip">Memory hook: you can't have a joint without smooth surfaces; these are smooth.</p>
<p class="tip">Trap: the fossa also appears as a non-joint depression for attachments; read the context.</p>`},
  {t:"learn",title:"Attachment landmarks (anchor points for tendons/ligaments)",html:`<ul><li><span class="key">Process</span> – outgrowth or projection</li>
<li><span class="key">Epicondyle</span> – projection above a condyle</li>
<li><span class="key">Tuberosity</span> – rough projection</li>
<li><span class="key">Tubercle</span> – rounded projection</li>
<li><span class="key">Trochanter</span> – large blunt elevation</li>
<li><span class="key">Crest</span> – ridge</li>
<li><span class="key">Line</span> – linear elevated ridge</li></ul>`,slides:[12,13,14],explain:`<p>Muscles pull on bones via tendons, and ligaments connect bones. The places where they anchor are rough or raised so the tissue grips better, like a hook screwed into wood. The bigger the pull, the bigger the bump.</p>
<ul><li><b>Process</b>: any outgrowth or projection.</li><li><b>Epicondyle</b>: "upon the condyle"; a bump just above a condyle, e.g. where forearm muscles attach at the elbow.</li><li><b>Tuberosity</b>: a large rough bump; <b>tubercle</b>: a smaller, rounded one.</li><li><b>Trochanter</b>: a large blunt knob (the femur has these near the hip).</li><li><b>Crest</b>: a prominent ridge (like the iliac crest, felt at your hip); <b>line</b>: a fainter ridge.</li></ul>
<p class="tip">Memory hook: tuBERosity = BIG, tuBERcle = little.</p>
<p class="tip">Trap: epicondyle sits <i>above</i>, and is not a joint surface, unlike a condyle.</p>`},
  {t:"match",title:"Attachment landmark ↔ description",pairs:[["Epicondyle","Projection above a condyle"],["Tuberosity","Rough projection"],["Tubercle","Rounded projection"],["Trochanter","Large blunt elevation"],["Crest","Ridge"],["Line","Linear elevated ridge"]]},
  {t:"learn",title:"Pathway landmarks (for nerves, arteries, veins)",html:`<ul><li><span class="key">Foramen</span> – opening or hole</li>
<li><span class="key">Meatus</span> – canal</li>
<li><span class="key">Fissure</span> – natural division or crevice</li>
<li><span class="key">Notch</span> – indentation on edge of bone</li>
<li><span class="key">Groove</span> – elongated depression</li>
<li><span class="key">Sinus</span> – sac or cavity</li></ul>
<p class="tip">Depressions, holes and openings serve as pathways for nerves, arteries and veins.</p>`,slides:[12,13,14],explain:`<p>Nerves and blood vessels need safe routes through or past bone. Holes and channels in bone are like tunnels and gutters protecting them.</p>
<ul><li><b>Foramen</b>: a hole (foramen magnum = "great hole" at the skull base).</li><li><b>Meatus</b>: a tube-like canal, e.g. the ear canal.</li><li><b>Fissure</b>: a narrow slit or crevice.</li><li><b>Notch</b>: an indentation in the edge of a bone.</li><li><b>Groove</b>: a long, gutter-like depression where a vessel or nerve runs along the surface.</li><li><b>Sinus</b>: an air-filled cavity within a bone (like the sinuses in the face).</li></ul>
<p>When you see an opening, ask "what travels through it?" and you'll remember it better.</p>
<p class="tip">Memory hook: foramen = door, groove = gutter.</p>
<p class="tip">Trap: sinus here is a space in bone, not a blood vessel.</p>`},
  {t:"sort",title:"Landmark job",buckets:["Articulation (joint surface)","Attachment (tendon/ligament)","Pathway (nerve/vessel)"],items:[["Condyle",0],["Facet",0],["Head",0],["Tuberosity",1],["Trochanter",1],["Epicondyle",1],["Foramen",2],["Groove",2],["Fissure",2],["Meatus",2]]},
  {t:"mcq",q:"A nerve passes through an opening in a bone. That opening is a:",opts:["Tubercle","Foramen","Crest","Condyle"],a:1,why:"A foramen is an opening/hole; nerves and vessels use these to reach targets."},
  {t:"mcq",q:"Which landmark would MOST likely serve as an anchor for a muscle tendon?",opts:["Facet","Head","Tuberosity","Fossa (as joint surface)"],a:2,why:"Tuberosities, tubercles, trochanters, crests and epicondyles are attachment sites; facets and heads are articular."},
  {t:"cloze",title:"Landmark definitions",text:"A [[condyle]] is a round articular prominence, an [[epicondyle]] is a projection above it, a [[groove]] is an elongated depression, and a [[sinus]] is a sac or cavity.",bank:["condyle","epicondyle","groove","sinus","trochanter"]}
 ]},
 {id:"a2l3",title:"Joints",mins:8,flower:"🌼",items:[
  {t:"learn",title:"Joint types",html:`<div class="defn">Joint articulation = <span class="key">arthrosis</span>: a site where two skeletal elements come together.</div>
<p><b>Solid joints</b> are very stable and allow little or no movement; <b>synovial joints</b> allow large amounts of movement.</p>
<ul><li><span class="key">Fibrous</span> (very fixed): <b>suture</b> (skull), <b>gomphosis</b> (tooth in socket)</li>
<li><span class="key">Cartilaginous</span>: <b>synchondrosis</b> (hyaline cartilage); <b>symphysis</b> (fibrocartilage) – small amount of movement/flexibility</li></ul>`,slides:[16,17,18],explain:`<p>A <b>joint</b> (articulation, or <b>arthrosis</b>) is any place two bones meet. The basic trade-off is stability versus mobility.</p>
<ul><li><b>Solid joints</b>: the bones are bound by tissue, so they are very stable with little or no movement.</li><li><b>Fibrous</b>: held by fibrous tissue. <b>Suture</b>: skull bones locked like jigsaw seams. <b>Gomphosis</b>: a tooth peg set into its socket.</li><li><b>Cartilaginous</b>: held by cartilage. <b>Synchondrosis</b>: hyaline (glassy, smooth) cartilage, e.g. growth plates. <b>Symphysis</b>: a pad of fibrocartilage (tougher, more flexible) allowing slight movement, like discs between vertebrae or the pubic symphysis.</li><li><b>Synovial joints</b>: have a fluid-filled cavity and allow a lot of movement (see next cards).</li></ul>
<p class="tip">Memory hook: sutures = stitches, i.e. sewn firmly together.</p>
<p class="tip">Trap: sutures and gomphoses are fibrous, not cartilaginous.</p>`},
  {t:"match",title:"Joint ↔ type",pairs:[["Suture","Fibrous"],["Gomphosis","Fibrous"],["Synchondrosis","Cartilaginous (hyaline cartilage)"],["Symphysis","Cartilaginous (fibrocartilage)"]]},
  {t:"mcq",q:"Which joint is united by fibrocartilage and permits a small amount of movement?",opts:["Suture","Synchondrosis","Symphysis","Gomphosis"],a:2,why:"Symphyses (e.g. intervertebral symphysis) use fibrocartilage; synchondroses use hyaline cartilage."},
  {t:"learn",title:"Synovial joint features",html:`<ul><li><span class="key">Synovial cavity</span> filled with synovial fluid</li>
<li><span class="key">Articular cartilage</span> (hyaline)</li>
<li><span class="key">Joint capsule</span>: fibrous membrane + synovial membrane</li>
<li>Associated: <b>articular discs</b> (labrum, meniscus, etc.), <b>bursae</b>, <b>tendinous synovial sheaths</b>, <b>fat pads</b></li></ul>`,slides:[19],explain:`<p>Synovial joints (knee, hip, shoulder...) are built to move smoothly, like a well-oiled hinge. Each component has a job.</p>
<ul><li><b>Synovial cavity and fluid</b>: the joint space filled with slippery fluid (like engine oil, "syn-ovia" = egg-white-like).</li><li><b>Articular cartilage</b>: glassy hyaline cartilage covering bone ends, giving a low-friction, shock-absorbing surface.</li><li><b>Joint capsule</b>: a sleeve round the joint; the outer fibrous layer is tough, the inner synovial membrane makes the fluid.</li><li><b>Accessory structures</b>: <b>articular discs</b> (such as the meniscus in the knee or labrum in the shoulder/hip) deepen or cushion the fit; <b>bursae</b> are small fluid-filled cushions reducing friction; <b>tendinous synovial sheaths</b> wrap around tendons; <b>fat pads</b> fill gaps.</li></ul>
<p class="tip">Memory hook: cartilage = coating, fluid = lubricant, capsule = sleeve.</p>`},
  {t:"sort",title:"Part of the joint capsule or an associated structure?",buckets:["Capsule/cavity components","Associated protective structures"],items:[["Fibrous membrane",0],["Synovial membrane",0],["Synovial fluid",0],["Articular cartilage (hyaline)",0],["Bursae",1],["Fat pads",1],["Meniscus / labrum",1],["Tendinous synovial sheaths",1]]},
  {t:"mcq",q:"Which type of cartilage covers the articular surfaces of synovial joints?",opts:["Fibrocartilage","Elastic cartilage","Hyaline cartilage","Calcified cartilage"],a:2,why:"Articular cartilage is hyaline."},
  {t:"learn",title:"Synovial joint classification",html:`<table><tr><th>Axes</th><th>Joint types</th></tr>
<tr><td>Uniaxial</td><td><b>Pivot</b>, <b>hinge</b></td></tr>
<tr><td>Biaxial</td><td><b>Condyloid</b>, <b>saddle</b>, <b>planar (gliding)</b></td></tr>
<tr><td>Multiaxial</td><td><b>Ball and socket</b></td></tr></table>
<p>A joint's classification dictates the functions possible at that joint.</p>
<table><tr><th>Movement</th><th>Definition</th></tr>
<tr><td>Flexion / extension</td><td>Decrease / increase angle between two parts</td></tr>
<tr><td>Abduction / adduction</td><td>Away from / toward the midline</td></tr>
<tr><td>Medial (internal) / lateral (external) rotation</td><td>Toward / away from midline</td></tr>
<tr><td>Circumduction</td><td>Combination of flexion, extension, adduction, abduction</td></tr></table>`,slides:[20,21,22],explain:`<p>Synovial joints are grouped by how many axes (directions of spin) they allow, which determines what the joint can do.</p>
<ul><li><b>Uniaxial</b> (one axis): <b>hinge</b> (elbow: bends and straightens like a door) and <b>pivot</b> (one bone rotating on another, like the head turning on the atlas/axis).</li><li><b>Biaxial</b> (two axes): <b>condyloid</b> (oval end in a cup, e.g. knuckle: flexion/extension and abduction/adduction), <b>saddle</b> (like a rider on a saddle, e.g. the thumb base), <b>planar/gliding</b> (flat surfaces sliding).</li><li><b>Multiaxial</b> (three axes): <b>ball and socket</b> (shoulder, hip), the most mobile, allowing circumduction.</li></ul>
<p>The movement terms below the table are the vocabulary for what each axis permits.</p>
<p class="tip">Memory hook: more axes = more freedom = less stability (the shoulder dislocates more than the elbow).</p>
<p class="tip">Trap: circumduction needs a biaxial or multiaxial joint, not a hinge.</p>`},
  {t:"sort",title:"Axes of movement",buckets:["Uniaxial","Biaxial","Multiaxial"],items:[["Hinge",0],["Pivot",0],["Condyloid",1],["Saddle",1],["Planar (gliding)",1],["Ball and socket",2]]},
  {t:"mcq",q:"Which joint type allows movement in the most planes?",opts:["Hinge","Ball and socket","Pivot","Saddle"],a:1,why:"Ball-and-socket joints are multiaxial."},
  {t:"mcq",q:"The temporomandibular joint is described as a:",opts:["Fibrous suture","Modified hinge synovial joint","Symphysis","Planar joint"],a:1,why:"The TMJ is a modified hinge synovial joint, the only synovial joint in the skull."}
 ]},
 {id:"a2l4",title:"The Skull",mins:9,flower:"🌹",items:[
  {t:"learn",title:"Skull: neurocranium & viscerocranium",html:`<p>The skull has <b>22 bones</b>:</p>
<ul><li><span class="key">Neurocranium</span> (holds the brain) = <b>8</b></li>
<li><span class="key">Viscerocranium</span> (facial skeleton, jaw) = <b>14</b></li></ul>
<p><b>Neurocranium:</b> frontal (1), parietal (2), temporal (2), occipital (1), sphenoid (1), ethmoid (1).</p>
<p class="tip">Hand trick: Fingers = Frontal, Palm = Parietal, Thumb = Temporal, Eyes = Ethmoid, Other = Occipital, Something = Sphenoid.</p>`,slides:[27,29,30],explain:`<p>The skull is not one bone but 22 fused or locked ones, in two functional groups.</p>
<ul><li><b>Neurocranium</b> ("nerve/brain skull"): the 8-bone box that surrounds and protects the brain.</li><li><b>Viscerocranium</b> ("organ skull"): the 14 bones of the face and jaw, which frame the eyes, nose and mouth.</li></ul>
<p>Neurocranium bones: frontal (forehead, 1), parietal (top and sides, 2), temporal (sides near ears, 2), occipital (back and base, 1), sphenoid (a butterfly-shaped bone in the middle of the base, 1), ethmoid (between the eyes, part of the nasal cavity, 1). That adds up to 8.</p>
<p class="tip">Memory hook: use the hand trick above to recall the six neurocranium bones.</p>
<p class="tip">Trap: parietal and temporal come in pairs (2 each), while frontal, occipital, sphenoid and ethmoid are single.</p>`},
  {t:"cloze",title:"Skull numbers",text:"The skull has [[22]] bones: [[8]] in the neurocranium and [[14]] in the viscerocranium.",bank:["22","8","14","12","6"]},
  {t:"mcq",q:"Which bone is part of the neurocranium?",opts:["Maxilla","Sphenoid","Vomer","Zygomatic"],a:1,why:"Neurocranium: frontal, parietals, temporals, occipital, sphenoid, ethmoid."},
  {t:"sort",title:"Neurocranium or viscerocranium?",buckets:["Neurocranium","Viscerocranium"],items:[["Frontal",0],["Parietal",0],["Ethmoid",0],["Occipital",0],["Mandible",1],["Vomer",1],["Lacrimal",1],["Nasal",1],["Palatine",1],["Inferior nasal concha",1]]},
  {t:"learn",title:"Viscerocranium (14 bones)",html:`<ul><li>Maxilla (2)</li><li>Nasal (2)</li><li>Lacrimal (2)</li><li>Inferior nasal conchae (2)</li><li>Palatine (2)</li><li>Zygomatic (2)</li><li>Vomer (1)</li><li>Mandible (1)</li></ul>
<p>2+2+2+2+2+2+1+1 = <b>14</b></p>`,slides:[33],explain:`<p>The viscerocranium is the facial skeleton. Its job is to shape the face, hold the teeth, and form walls for the eye sockets (orbits), nasal cavity and mouth.</p>
<ul><li><b>Maxilla</b>: upper jaw/cheek (holds upper teeth).</li><li><b>Nasal</b>: bridge of the nose.</li><li><b>Lacrimal</b>: tiny bone at the inner eye (lacrima = tear).</li><li><b>Inferior nasal conchae</b>: curled shelves inside the nose that warm and humidify air.</li><li><b>Palatine</b>: back of the hard palate (roof of the mouth).</li><li><b>Zygomatic</b>: cheekbone.</li><li><b>Vomer</b>: the thin plate dividing the nose (a single midline bone).</li><li><b>Mandible</b>: lower jaw (single).</li></ul>
<p>Six pairs (12) plus vomer and mandible (2) = 14.</p>
<p class="tip">Memory hook: pairs everywhere except the two midline bones, vomer and mandible.</p>`},
  {t:"mcq",q:"How many of the viscerocranium bones are unpaired?",opts:["0","1","2","3"],a:2,why:"The vomer and the mandible are single; the other six types are paired."},
  {t:"learn",title:"Sutures, pterion & neonatal skull",html:`<ul><li>Cranial sutures are solid fibrous joints named for shape/orientation: <span class="key">coronal</span>, <span class="key">sagittal</span>, <span class="key">lambdoid</span> (λ), <span class="key">squamous</span>.</li>
<li><span class="key">Pterion</span> – Gr. 'wings' (Hermes).</li>
<li><b>Neonatal skull:</b> large neurocranium, small viscerocranium. <span class="key">Fontanels</span> ('soft spots') make the skull pliable for childbirth and facilitate rapid brain growth: anterior, posterior, anterolateral, posterolateral. As bones grow they press fontanels together, closing them and leaving sutures.</li></ul>`,slides:[31,32],explain:`<p>Skull bones are joined by <b>sutures</b>, fibrous joints that look like zigzag seams and let no movement in adults. They are named by shape or position:</p>
<ul><li><b>Coronal</b>: across the top between the frontal and parietal bones.</li><li><b>Sagittal</b>: down the midline between the two parietals.</li><li><b>Lambdoid</b>: at the back, shaped like the Greek letter lambda (λ), between the parietals and occipital.</li><li><b>Squamous</b>: a scale-like overlapping seam at the side (temporal against parietal).</li></ul>
<p>The <b>pterion</b> is the H-shaped meeting point of several bones on the side of the head ("pteron" = wing). It is thin, so a blow here can be dangerous (it overlies an important artery).</p>
<p><b>Newborns</b> have a large braincase relative to the face. Their <b>fontanels</b> (soft spots, areas of membrane between bones) let the skull squeeze through the birth canal and expand as the brain grows quickly; there are four types: anterior, posterior, anterolateral and posterolateral. They close as bone grows, leaving sutures.</p>
<p class="tip">Trap: a fontanel is a gap that closes into a suture.</p>`},
  {t:"match",title:"Skull term ↔ detail",pairs:[["Lambdoid suture","λ-shaped suture, posterior skull"],["Fontanels","Soft spots in neonatal skull"],["Pterion","Gr. 'wings'"],["Neonatal skull","Large neurocranium, small viscerocranium"]]},
  {t:"mcq",q:"What do fontanels become when the skull bones grow and close them off?",opts:["Foramina","Sutures","Sinuses","Fissures"],a:1,why:"Closure of fontanels leaves sutures behind."},
  {t:"learn",title:"Mandible & TMJ",html:`<ul><li>Mandible = lower jaw; features: <b>head</b> and <b>condylar process</b>, <b>angle</b>, <b>mental process</b>.</li>
<li>The <span class="key">temporomandibular joint (TMJ)</span> is formed with the <b>temporal bone</b>: a <b>modified hinge synovial joint</b>, the <b>only synovial joint in the skull</b>.</li></ul>`,slides:[34],explain:`<p>The mandible is the only movable bone of the skull; it is the lower jaw.</p>
<ul><li><b>Head and condylar process</b>: the knob at the top-back that fits into the skull's socket.</li><li><b>Angle</b>: the corner of your jawline below the ear.</li><li><b>Mental process</b>: the chin ("mental" = of the chin, not of the mind).</li></ul>
<p>The <b>temporomandibular joint (TMJ)</b> is where the mandible meets the temporal bone, right in front of your ear (put a finger there and open wide to feel it move). It is a <b>modified hinge</b>: it opens and closes like a hinge but also glides forward and side-to-side for chewing.</p>
<p>It is the <b>only synovial (freely movable) joint in the skull</b>; all the other skull joints are immovable sutures.</p>
<p class="tip">Memory hook: TMJ = "temporal + mandible + joint".</p>
<p class="tip">Trap: "mental" here means "of the chin", nothing to do with the mind.</p>`},
  {t:"mcq",q:"The only synovial joint of the skull is between the mandible and which bone?",opts:["Maxilla","Zygomatic","Temporal","Sphenoid"],a:2,why:"The TMJ is the articulation of the mandible with the temporal bone."},
  {t:"mcq",q:"A patient cannot open the jaw after a blow to the side of the face. The injured joint is a ______ joint.",opts:["Fibrous suture","Modified hinge synovial","Cartilaginous symphysis","Planar fibrous"],a:1,why:"The TMJ is a modified hinge synovial joint."}
 ]},
 {id:"a2l5",title:"Spine, Hyoid & Thorax",mins:10,flower:"🌸",items:[
  {t:"learn",title:"Vertebral column",html:`<p>24 vertebrae stacked on the sacrum and coccyx, separated by intervertebral discs:</p>
<table><tr><th>Region</th><th>Number</th><th>Curve</th></tr>
<tr><td>Cervical</td><td>7</td><td>Cervical lordosis</td></tr>
<tr><td>Thoracic</td><td>12</td><td>Thoracic kyphosis</td></tr>
<tr><td>Lumbar</td><td>5</td><td>Lumbar lordosis</td></tr>
<tr><td>Sacrum</td><td>1 (5 fused vertebrae)</td><td>Sacral kyphosis</td></tr>
<tr><td>Coccyx</td><td>1 (3–5 fused vertebrae)</td><td></td></tr></table>
<ul><li>Intervertebral discs (<b>intervertebral symphysis</b> joints): <span class="key">nucleus pulposus</span> inside, <span class="key">anulus fibrosus</span> outside. Vulnerable to <b>herniation</b>.</li>
<li><span class="key">Zygapophyseal joints</span> are synovial.</li><li>Abnormal curve: <b>scoliosis</b> (lateral).</li></ul>
<p class="tip">Hyoid bone: irregular 'floating' bone in the anterior neck, part of the axial skeleton.</p>`,slides:[35,36],explain:`<p>The vertebral column (spine) is a flexible stack of 24 separate vertebrae resting on the sacrum and coccyx. It carries weight, protects the spinal cord, and allows bending.</p>
<ul><li>Regions from the top: <b>7 cervical (neck), 12 thoracic (chest), 5 lumbar (lower back)</b>, then the <b>sacrum</b> (5 fused) and <b>coccyx</b> (tailbone, 3-5 fused).</li><li>Curves: <b>lordosis</b> = curve bulging forward (cervical, lumbar); <b>kyphosis</b> = curve bulging backward (thoracic, sacral). Curves act like a spring to absorb shock.</li><li><b>Intervertebral discs</b>: cushions between vertebral bodies. Jelly-like <b>nucleus pulposus</b> in the centre, tough ring <b>anulus fibrosus</b> outside. If the ring tears, the jelly can bulge out: a <b>herniated</b> (slipped) disc.</li><li><b>Zygapophyseal (facet) joints</b> between the back parts of vertebrae are synovial.</li><li><b>Scoliosis</b>: an abnormal sideways curve.</li></ul>
<p class="tip">Memory hook: breakfast at 7, lunch at 12, dinner at 5 (7-12-5).</p>`},
  {t:"match",title:"Region ↔ number",pairs:[["Cervical","7"],["Thoracic","12"],["Lumbar","5"],["Sacrum","5 fused vertebrae"],["Coccyx","3–5 fused vertebrae"]]},
  {t:"mcq",q:"Which pair is correct?",opts:["Cervical – kyphosis","Thoracic – lordosis","Lumbar – lordosis","Lumbar – kyphosis"],a:2,why:"Lordoses: cervical and lumbar; kyphoses: thoracic and sacral."},
  {t:"mcq",q:"A patient's disc herniation involves extrusion of the soft central portion through the outer ring. What are these called, respectively?",opts:["Anulus fibrosus; nucleus pulposus","Nucleus pulposus; anulus fibrosus","Zygapophysis; pedicle","Lamina; nucleus pulposus"],a:1,why:"The nucleus pulposus (central) herniates through the anulus fibrosus (outer)."},
  {t:"learn",title:"General vertebral anatomy",html:`<ul><li><span class="key">Vertebral body</span> (anterior)</li><li><span class="key">Pedicles</span> and <span class="key">laminae</span> form the arch</li><li><span class="key">Vertebral foramen</span> (spinal cord) – <span class="key">intervertebral foramen</span> (spinal nerve exit)</li><li>Spinous process; transverse processes; superior and inferior articular processes</li></ul>
<p>Regional features: <b>cervical</b> – bifid spinous process; <b>thoracic</b> – heart-shaped body (and costal facets); <b>lumbar</b> – large bodies. Cervical spine manipulation can put the <b>vertebral artery</b> at risk.</p>`,slides:[37,38],explain:`<p>Most vertebrae share a basic plan, like a ring with extra spikes.</p>
<ul><li><b>Body</b>: the thick front block that bears weight.</li><li><b>Vertebral arch</b>: formed by two <b>pedicles</b> (short stalks at the sides) and two <b>laminae</b> (flat plates behind). The arch and body surround the <b>vertebral foramen</b>, the hole through which the spinal cord passes; stacked, they form the vertebral canal.</li><li><b>Intervertebral foramen</b>: the side gap between neighbouring vertebrae where a spinal nerve exits.</li><li><b>Spinous process</b> (the bump you feel down the middle of the back), <b>transverse processes</b> (side wings for muscles/ribs) and <b>articular processes</b> (upper and lower, linking to neighbours).</li></ul>
<p>Regions differ: <b>cervical</b> = small, split (bifid) spine tip; <b>thoracic</b> = heart-shaped body with facets for ribs; <b>lumbar</b> = largest bodies, since they carry the most weight.</p>
<p class="tip">Trap: vertebral foramen (cord) is different from intervertebral foramen (nerve exit). Cervical manipulation can endanger the vertebral artery, which passes through the neck vertebrae.</p>`},
  {t:"mcq",q:"A bifid spinous process is characteristic of which vertebrae?",opts:["Cervical","Thoracic","Lumbar","Sacral"],a:0,why:"Cervical vertebrae have bifid spinous processes."},
  {t:"mcq",q:"A spinal nerve leaves the vertebral canal through the:",opts:["Vertebral foramen","Intervertebral foramen","Transverse foramen","Sacral hiatus only"],a:1,why:"Spinal nerves exit through the intervertebral foramina."},
  {t:"learn",title:"Atlas & axis",html:`<ul><li><span class="key">Atlas (CI)</span>: atlanto-occipital joint – <b>flexion and extension</b> (nodding).</li>
<li><span class="key">Axis (CII)</span>: atlanto-axial joints – <b>rotation</b> (shaking head).</li></ul>`,slides:[39],explain:`<p>The top two neck vertebrae are special because they allow the head's two big movements.</p>
<ul><li><b>Atlas (C1)</b>: named after the Greek Titan who held up the world; it carries the skull. Its joint with the occipital bone (atlanto-occipital joint) lets you nod "yes" (flexion/extension).</li><li><b>Axis (C2)</b>: has a tooth-like peg (the dens) projecting upward, around which the atlas pivots. These atlanto-axial joints allow you to shake "no" (rotation).</li></ul>
<p>C stands for cervical, and the number gives position from the top.</p>
<p class="tip">Memory hook: Atlas = "yes" nod; Axis = rotation about an axis.</p>
<p class="tip">Trap: do not swap the two movements.</p>`},
  {t:"match",title:"Joint ↔ movement",pairs:[["Atlanto-occipital joint","Flexion and extension"],["Atlanto-axial joint","Rotation"],["Intervertebral discs","Intervertebral symphysis joints"],["Zygapophyseal joints","Synovial"]]},
  {t:"mcq",q:"Nodding 'yes' mainly occurs at which joint?",opts:["Atlanto-axial","Atlanto-occipital","Zygapophyseal C5–C6","Temporomandibular"],a:1,why:"Atlanto-occipital joint = flexion/extension; atlanto-axial = rotation."},
  {t:"learn",title:"Ribs & thoracic cage",html:`<ul><li>12 ribs: <b>true</b> (1–7), <b>false</b> (8–10), <b>floating</b> (11–12).</li>
<li>Sternum: <b>manubrium</b> ('handle'), <b>body</b>, <b>xiphoid process</b> ('straight sword').</li>
<li>Superior thoracic aperture; inferior thoracic aperture bounded by the <b>costal margin</b> (infrasternal angle).</li>
<li>Each rib articulates with the <b>bodies of two adjacent vertebrae</b> (costovertebral joints, demi-facets) and <b>one transverse process</b> (costotransverse joint). A rib is numbered by the vertebra with which it articulates at the transverse process.</li></ul>`,slides:[41,42,43],explain:`<p>The thoracic cage (rib cage) is a bony cage made of the 12 thoracic vertebrae behind, 12 pairs of ribs around, and the sternum in front. It protects the heart and lungs and moves for breathing.</p>
<ul><li><b>True ribs</b> (1-7) attach straight to the sternum by their own cartilage. <b>False ribs</b> (8-10) attach indirectly via the cartilage above. <b>Floating ribs</b> (11-12) have no front attachment.</li><li><b>Sternum</b>: the <b>manubrium</b> (top, "handle" of the sword), <b>body</b> (middle blade) and <b>xiphoid process</b> (the small tip).</li><li>Openings: the <b>superior thoracic aperture</b> (top, where vessels and airway pass) and the <b>inferior aperture</b>, bounded by the <b>costal margin</b> (the lower rim of cartilage), closed by the diaphragm.</li><li>Each rib joins <b>two adjacent vertebral bodies</b> (via half-facets, "demi-facets") and <b>one transverse process</b> (costotransverse joint). It is numbered by the vertebra whose transverse process it meets.</li></ul>
<p class="tip">Memory hook: true = 7, false = 3, floating = 2 (7+3+2 = 12).</p>`},
  {t:"sort",title:"Rib classification",buckets:["True (1–7)","False (8–10)","Floating (11–12)"],items:[["Rib 3",0],["Rib 7",0],["Rib 8",1],["Rib 10",1],["Rib 11",2],["Rib 12",2]]},
  {t:"order",title:"Order the sternum from superior to inferior",steps:["Manubrium","Body","Xiphoid process"],why:"Manubrium ('handle'), body, then xiphoid process ('straight sword')."},
  {t:"mcq",q:"Rib 6 articulates with the bodies of which vertebrae, and which transverse process?",opts:["TV and TVI bodies; TVI transverse process","TVI and TVII bodies; TVII transverse process","TVI bodies only; TV transverse process","TIV and TV bodies; TVI transverse process"],a:0,why:"A rib articulates with two adjacent vertebral bodies (TV/TVI) and the transverse process of the vertebra of the same number (TVI)."}
 ]},
 {id:"a2boss",title:"Bones Boss Quiz",mins:7,flower:"👑",boss:true,items:[
  {t:"mcq",q:"Which cells absorb bone?",opts:["Osteoblasts","Osteoclasts","Chondrocytes","Fibroblasts"],a:1,why:"Osteoclasts absorb bone; osteoblasts produce it."},
  {t:"mcq",q:"Which bone is sesamoid?",opts:["Femur","Patella","Tarsal","Vertebra"],a:1,why:"Patella = sesamoid."},
  {t:"mcq",q:"Which landmark is a rough projection for muscle attachment?",opts:["Condyle","Tuberosity","Foramen","Facet"],a:1,why:"Tuberosity = rough projection (attachment)."},
  {t:"sata",q:"Select all bones of the neurocranium.",opts:["Frontal","Zygomatic","Sphenoid","Ethmoid","Mandible"],a:[0,2,3],why:"Frontal, sphenoid and ethmoid are neurocranial; zygomatic and mandible are viscerocranial."},
  {t:"mcq",q:"A child falls and has an incomplete fracture in which the bone bends. This is a:",opts:["Compound fracture","Comminuted fracture","Greenstick fracture","Compression fracture"],a:2,why:"Greenstick fractures occur in young children."},
  {t:"mcq",q:"Rotation of the head (shaking 'no') occurs mainly at:",opts:["Atlanto-occipital joint","Atlanto-axial joint","TMJ","C7–T1"],a:1,why:"Atlanto-axial joints permit rotation."},
  {t:"mcq",q:"Which ribs are 'false' ribs?",opts:["1–7","8–10","11–12","9–12"],a:1,why:"True 1–7; false 8–10; floating 11–12."},
  {t:"mcq",q:"The fibrous joint between the skull bones is a:",opts:["Gomphosis","Suture","Symphysis","Synchondrosis"],a:1,why:"Sutures join cranial bones; gomphosis is tooth-in-socket."},
  {t:"mcq",q:"Which is a multiaxial synovial joint?",opts:["Hinge","Pivot","Ball and socket","Saddle"],a:2,why:"Ball and socket is multiaxial."},
  {t:"match",title:"Quick match",pairs:[["Nucleus pulposus","Inner part of the intervertebral disc"],["Anulus fibrosus","Outer part of the disc"],["Xiphoid process","Straight sword"],["Pterion","Gr. 'wings'"]]}
 ]}
]});

EXAMQ.push({t:"mcq",unit:1,mod:"a2",q:"Which structure is NOT part of the axial skeleton?",opts:["Hyoid bone","Sternum","Scapula","Ribs","Vertebral column"],a:2,why:"The scapula belongs to the pectoral girdle (appendicular)."});
EXAMQ.push({t:"mcq",unit:1,mod:"a2",q:"A 65-year-old woman fractures a vertebral body with minimal trauma. Which age-related change contributes?",opts:["Osteoblast activity exceeds osteoclast activity","Increased calcium and collagen synthesis","Loss of bone mass and increased brittleness","Persistent open epiphyseal plates","Increased mechanical loading"],a:2,why:"Aging causes loss of bone mass, ↓ calcium, ↓ collagen synthesis and increased brittleness (osteoporosis)."});
EXAMQ.push({t:"mcq",unit:1,mod:"a2",q:"A landmark described as a 'large blunt elevation' for attachments is a:",opts:["Tubercle","Epicondyle","Trochanter","Crest","Facet"],a:2,why:"Trochanter = large blunt elevation."});
EXAMQ.push({t:"mcq",unit:1,mod:"a2",q:"A mother notices the soft spot on her newborn's head is firm and closed at 4 years. Fontanels normally close because:",opts:["Sutures dissolve","Growing skull bones press the fontanels together, leaving sutures","The viscerocranium shrinks","Osteoclasts remove the membranes","Epiphyseal plates close"],a:1,why:"As skull bones grow they press the fontanels together and close them, leaving sutures."});
EXAMQ.push({t:"mcq",unit:1,mod:"a2",q:"Which statement about the temporomandibular joint is correct?",opts:["Fibrous joint between mandible and maxilla","Synchondrosis with temporal bone","Modified hinge synovial joint with the temporal bone","Ball-and-socket joint with the sphenoid","Symphysis at the mental process"],a:2,why:"TMJ = modified hinge synovial joint, mandible with temporal bone; only synovial joint of the skull."});
EXAMQ.push({t:"mcq",unit:1,mod:"a2",q:"A person with an increased thoracic curvature has:",opts:["Lordosis","Kyphosis","Scoliosis","Herniation","Spondylolisthesis"],a:1,why:"The thoracic curve is a kyphosis; the cervical and lumbar curves are lordoses; scoliosis is a lateral curve."});

MODULES.push({
 id:'b1', num:3, unit:1, title:'Joints & Cartilage',
 blurb:'Hyaline cartilage vs fibrocartilage, joint classes, synovial joint shapes and components, stability vs mobility, and sprains.',
 badge:{name:'Joint Master',icon:'🦴'},
 lessons:[
 {id:'b1l1',title:'Cartilage Types',mins:8,flower:'🌸',items:[
  {t:'learn',title:'The three cartilages',slides:[4,5],explain:`<p>Think of <b>cartilage</b> as the body's firm-but-bendy padding: tougher than fat, softer than bone. Its living cells are <b>chondrocytes</b> ("chondro" = cartilage, "cyte" = cell).</p>
<ul><li><b>Tendons</b> join muscle to bone; <b>aponeuroses</b> are flat sheet-like tendons; <b>ligaments</b> join bone to bone. A <b>motor unit</b> is one nerve cell plus the muscle fibres it controls.</li>
<li><b>Hyaline</b> (glassy): the smooth Teflon coating on bone ends, plus the tube-holders in the airway and the growth zones in kids' bones (<b>epiphyseal plates</b>).</li>
<li><b>Fibrocartilage</b>: a rope-like, collagen-packed shock absorber, like a car tyre. Used where heavy pressure hits.</li>
<li><b>Elastic</b>: springy, snaps back to shape, like the ear or the lid of the windpipe (epiglottis).</li></ul>
<p class="tip">Hook: Hyaline = Smooth, Fibro = Force, Elastic = Ear/Epiglottis.</p>
<p><b>Exam trap:</b> hyaline is the <i>most common</i> but also the <i>weakest</i>; students assume most common means toughest.</p>`,html:`<p>The musculoskeletal system = <b>muscular</b> (muscles, tendons/aponeuroses, motor unit) + <b>skeletal</b> (bones, cartilage, ligaments). Skeletal functions: support, protection, force translation, blood cell production, mineral storage.</p>
<table><tr><th>Type</th><th>Key features</th><th>Where</th></tr>
<tr><td><b>Hyaline</b></td><td>Most abundant, but <b>weakest</b>; smooth surface for glide, flexibility, support</td><td>Articular cartilage of synovial joints, trachea/bronchi, epiphyseal plates</td></tr>
<tr><td><b>Fibrocartilage</b></td><td>Durable shock-absorber; high collagen; support + cushioning</td><td>Intervertebral discs, pubic symphysis, menisci</td></tr>
<tr><td><b>Elastic</b></td><td>Elastic fibers; strength + elasticity to maintain shape</td><td>Epiglottis, auricle, laryngeal cartilages</td></tr></table>
<p class="tip">The cells of cartilage are <b>chondrocytes</b>. Hyaline = weakest but smoothest; fibro = toughest.</p>`},
  {t:'mcq',q:'Which is the most abundant but weakest type of cartilage?',opts:['Fibrocartilage','Hyaline cartilage','Elastic cartilage','Articular disc'],a:1,why:'Hyaline cartilage is the most abundant type, but it is pliable and relatively weak.'},
  {t:'match',title:'Match the cartilage to its location',pairs:[['Hyaline','Epiphyseal plates'],['Fibrocartilage','Intervertebral discs'],['Elastic','Epiglottis'],['Fibrocartilage','Menisci']]},
  {t:'sort',title:'Sort the structure by cartilage type',buckets:['Hyaline','Fibrocartilage','Elastic'],items:[['Articular cartilage',0],['Trachea/bronchi',0],['Pubic symphysis',1],['Menisci',1],['Auricle',2],['Laryngeal cartilages',2]]},
  {t:'mcq',q:'Which cartilage is a durable shock-absorber with a high amount of collagen?',opts:['Elastic','Hyaline','Fibrocartilage','Articular'],a:2,why:'Fibrocartilage is dense in collagen, giving joint support and cushioning.'},
  {t:'learn',title:'Hyaline cartilage: articular cartilage',slides:[7,8],explain:`<p>A <b>synovial joint</b> is a joint with a fluid-filled space between the bones (e.g. knee, shoulder). The bone ends are lined with a thin glassy layer of hyaline cartilage, called <b>articular cartilage</b> because "articulate" means "to form a joint".</p>
<ul><li><b>Viscoelastic</b> = acts partly like a squishy solid and partly like a thick fluid, so it spreads a load out like a memory-foam mattress instead of letting one spot take all the pressure.</li>
<li><b>Avascular</b> = "no vessels": no blood, no lymph drainage, and no nerves. That is why it has trouble healing and why damage there is not itself painful.</li>
<li><b>Type II collagen</b> = the specific kind of protein rope that makes up hyaline cartilage.</li>
<li>Three layers: top (superficial) spreads force, middle stores fluid, deep anchors onto bone.</li></ul>
<p class="tip">Hook: Surface = Spreads, Middle = Moisture, Deep = Dock to bone.</p>
<p><b>Exam trap:</b> "synchondrosis" joints also have hyaline cartilage, but no joint cavity.</p>`,html:`<p>Hyaline cartilage covers the ends of articulating bones inside <b>synovial joints</b> – hence its alternative name <span class="key">articular cartilage</span>. It is also found in <b>synchondrosis</b> joints.</p>
<ul><li><b>Viscoelastic</b> connective tissue: distributes load over a wider area to decrease stress on joint surfaces</li>
<li>Smooth surface reduces friction</li>
<li>Pliable and relatively weak</li>
<li><b>Avascular</b>: no blood supply, no lymph channels, no nerve supply</li>
<li>Collagen fibers are <b>Type II</b></li></ul>
<div class="defn">Layers: <b>superficial</b> = force distribution; <b>middle</b> = fluid storage; <b>deep</b> = bony connection.</div>`},
  {t:'sata',q:'Which of the following are true of hyaline cartilage? (Select all)',opts:['It is avascular','It has a rich nerve supply','It contains Type II collagen','It is found on the ends of bones in synovial joints','It is the strongest cartilage'],a:[0,2,3],why:'Hyaline cartilage has no blood, lymph or nerve supply, contains Type II collagen, and covers bone ends in synovial joints; it is the weakest, not strongest, type.'},
  {t:'mcq',q:'Why can damaged articular cartilage cause no pain by itself?',opts:['It is too thin','It has no nerve supply','It is covered by periosteum','It has a rich blood supply'],a:1,why:'Hyaline cartilage is avascular and lacks lymph channels and nerves, so it cannot signal pain directly.'},
  {t:'learn',title:'How does avascular cartilage stay alive?',slides:[9],explain:`<p>Every living tissue needs food in and waste out. Most tissues use blood vessels. Articular cartilage has none, so it relies on the <b>synovial fluid</b>, the slippery liquid inside the joint, and on <i>movement</i> to pump it.</p>
<ul><li>Picture a kitchen sponge sitting in a shallow tray of soapy water.</li>
<li><b>Squeeze</b> (you stand, walk, land): fluid and waste are pushed out of the middle layer into the joint space.</li>
<li><b>Let go</b>: the sponge expands and sucks fresh, nutrient-rich fluid back in.</li></ul>
<p>So healthy cartilage needs a regular cycle of load and unload. A joint that never moves, for example in a cast, gets poorly fed.</p>
<p class="tip">Hook: "Squeeze out, soak in." Movement is the cartilage's food delivery.</p>
<p><b>Exam trap:</b> the nutrients come from synovial fluid, not from blood vessels, nerves or lymph.</p>`,html:`<p>Nutrient and waste exchange occur <b>via synovial fluid</b>. When the joint is <b>loaded</b>, pressure forces fluid out of the <b>middle</b> section of the cartilage into the synovial cavity. When pressure is released, <b>fresh fluid with nutrients rushes in</b>.</p>
<p class="tip">Compression squeezes out waste; release sucks in nutrients – like a sponge. Movement = cartilage nutrition.</p>`},
  {t:'order',title:'Order the nutrient exchange cycle in articular cartilage',steps:['Joint is loaded (e.g., body weight)','Pressure forces fluid out of the middle layer into the synovial cavity','Load is released','Fresh nutrient-rich synovial fluid rushes back into the cartilage'],why:'Loading expels fluid and waste; unloading draws nutrient-rich fluid back in, which is how avascular cartilage is fed.'},
  {t:'cloze',title:'Fill in the blanks',text:'Hyaline cartilage receives nutrients through [[synovial fluid]] because it is [[avascular]]. The middle layer of the cartilage is responsible for [[fluid storage]].',bank:['synovial fluid','avascular','fluid storage','force distribution','vascular']},
  {t:'mcq',q:'Which layer of articular cartilage forms the bony connection?',opts:['Superficial','Middle','Deep','All equally'],a:2,why:'Superficial = force distribution, middle = fluid storage, deep = bony connection.'},
  {t:'learn',title:'Arthritis',slides:[9],explain:`<p><b>Arthritis</b> literally means "joint inflammation" ("arthr" = joint, "-itis" = inflammation), but it covers two quite different diseases.</p>
<ul><li><b>Osteoarthritis (OA)</b>: the "wear and tear" type. Over years the hyaline cartilage thins, like the tread on a tyre, until bone grinds on bone. It mostly hits weight-bearing joints, so hips and knees often get replaced.</li>
<li><b>Rheumatoid arthritis (RA)</b>: <b>autoimmune</b>, meaning the immune system mistakenly attacks the body's own tissue, here the synovial membrane (the joint lining). The inflamed lining and fluid disrupt the cartilage's nutrient exchange, so the cartilage breaks down and bone ends are exposed. Fibrous (scar-like) tissue can grow in and "fuse" the joint, so it stiffens.</li></ul>
<p class="tip">Hook: OA = Old/Overuse/"Oh, worn out". RA = Rogue immune system, often several joints at once.</p>
<p><b>Exam trap:</b> do not describe OA as autoimmune. Inflammation of the synovium points to RA.</p>`,html:`<table><tr><th></th><th>Osteoarthritis (OA)</th><th>Rheumatoid arthritis (RA)</th></tr>
<tr><td>Nature</td><td>Most common arthritis; gradual loss of cartilage from "wear and tear"</td><td><b>Autoimmune</b> disease</td></tr>
<tr><td>Process</td><td>Loss of hyaline cartilage</td><td>Inflammation of synovial cavity (membrane + fluid) and cartilage; mobility decreases over time; cartilage degrades (nutrient exchange issues) exposing bone ends; fibrous tissue infiltration can "fuse" the joint</td></tr>
<tr><td>Clinical</td><td>Common cause of <b>hip and knee replacements</b></td><td>Severe inflammation</td></tr></table>`},
  {t:'sort',title:'OA or RA?',buckets:['Osteoarthritis','Rheumatoid arthritis'],items:[['Autoimmune',1],['Wear and tear',0],['Common reason for hip/knee replacement',0],['Synovial membrane inflammation',1],['Fibrous tissue infiltration can fuse joint',1],['Most common type of arthritis',0]]},
  {t:'mcq',q:'A 72-year-old has gradually worsening knee pain, with loss of articular cartilage on imaging and no systemic inflammation. Most likely diagnosis?',opts:['Rheumatoid arthritis','Osteoarthritis','Sprain','Bursitis only'],a:1,why:'Gradual wear-and-tear loss of cartilage in an older patient is osteoarthritis, a common reason for knee replacement.'}
 ]},
 {id:'b1l2',title:'Fibrocartilage & Joint Classes',mins:8,flower:'🌼',items:[
  {t:'learn',title:'Fibrocartilage',slides:[12,11],explain:`<p>Fibrocartilage is hyaline cartilage that has been "reinforced" with extra dense connective tissue (tough collagen cables), like concrete with steel rebar. That is why it has <b>Type I and Type II</b> collagen: Type II from the hyaline part, Type I from the reinforcement.</p>
<ul><li><b>Symphysis joint</b>: two bones joined by a pad of fibrocartilage (spine discs, pubic symphysis). Little movement, but great at taking big forces.</li>
<li>Inside synovial joints it forms cushions and rims:
<ul><li><b>Menisci</b> (singular meniscus): C-shaped wedges in the knee that deepen the shallow shelf of the tibia.</li>
<li><b>Labrum</b>: a ring around a socket (e.g. shoulder) that makes the cup deeper, like a rubber seal.</li>
<li><b>Articular disc</b>: a pad splitting a joint into two compartments.</li></ul></li></ul>
<p class="tip">Hook: Hyaline = Type II only; Fibro = I + II ("fibro has more").</p>
<p><b>Exam trap:</b> intervertebral discs are fibrocartilage, not hyaline.</p>`,html:`<p>Essentially <b>hyaline cartilage + dense connective tissue</b>; contains <b>Type I and Type II</b> collagen.</p>
<ul><li>Strong support – found in <b>symphysis</b> joints (withstand large forces)</li>
<li>Forms disc-like structures within joints to increase stability: <b>labrums, menisci, articular discs</b></li>
<li>e.g., lateral and medial <b>menisci</b> stabilize the knee; <b>glenohumeral labrum</b> in the shoulder; pubic symphysis</li></ul>
<p class="tip">Hyaline = Type II only. Fibro = Type I + II.</p>`},
  {t:'mcq',q:'Which collagen types are in fibrocartilage?',opts:['Type II only','Type I only','Type I and Type II','Type III and IV'],a:2,why:'Fibrocartilage = hyaline cartilage plus dense connective tissue, so it has Type I and II collagen.'},
  {t:'sata',q:'Which are fibrocartilage structures? (Select all)',opts:['Medial meniscus','Glenohumeral labrum','Articular cartilage of femoral condyles','Pubic symphysis','Epiglottis'],a:[0,1,3],why:'Menisci, labrums and the pubic symphysis are fibrocartilage; femoral condyle cartilage is hyaline and the epiglottis is elastic.'},
  {t:'mcq',q:'What is the main function of menisci and labrums in synovial joints?',opts:['Produce synovial fluid','Increase joint stability and cushioning','Attach muscle to bone','Supply blood to cartilage'],a:1,why:'These fibrocartilage elements create disc-like structures that increase stability.'},
  {t:'learn',title:'Joint classification',slides:[11,14],explain:`<p>Joints are sorted by what holds the bones together, which also predicts how much they move.</p>
<ul><li><b>Fibrous</b>: bones joined by tough fibre "glue". A <b>suture</b> is the zigzag seam between skull bones; a <b>gomphosis</b> is a tooth peg fixed in its socket. Almost no movement.</li>
<li><b>Cartilaginous</b>: bones joined by cartilage.
<ul><li><b>Synchondrosis</b> = hyaline cartilage (e.g. growth plate of a child's bone).</li>
<li><b>Symphysis</b> = fibrocartilage (spine discs, pubic symphysis).</li></ul></li>
<li><b>Synovial</b>: a fluid-filled cavity, with hyaline cartilage on the bone ends. Most movable, and it covers six shapes (next card).</li></ul>
<p class="tip">Hook: "Chondro" is in the name = hyaline; "physis" sounds like physique = strong = fibrocartilage.</p>
<p><b>Exam trap:</b> a synchondrosis has hyaline cartilage but <i>no</i> synovial cavity.</p>`,html:`<table><tr><th>Class</th><th>Subtype</th><th>Tissue</th></tr>
<tr><td><b>Fibrous</b></td><td>Suture, gomphosis</td><td>Fibrous connective tissue</td></tr>
<tr><td><b>Cartilaginous</b></td><td><b>Synchondrosis</b></td><td><b>Hyaline</b> cartilage</td></tr>
<tr><td><b>Cartilaginous</b></td><td><b>Symphysis</b></td><td><b>Fibrocartilage</b></td></tr>
<tr><td><b>Synovial</b></td><td>Planar, pivot, hinge, saddle, condyloid, ball and socket</td><td>Hyaline cartilage on bone ends, synovial cavity</td></tr></table>
<p class="tip">Sy<b>n</b>chondrosis = hyaline ("chondro"); sym<b>physis</b> = fibrocartilage ("strong, force-bearing").</p>`},
  {t:'match',title:'Match the joint to its tissue',pairs:[['Synchondrosis','Hyaline cartilage'],['Symphysis','Fibrocartilage'],['Suture','Fibrous tissue'],['Synovial joint','Articular (hyaline) cartilage + cavity']]},
  {t:'mcq',q:'The pubic symphysis is which type of joint?',opts:['Fibrous','Cartilaginous – synchondrosis','Cartilaginous – symphysis','Synovial'],a:2,why:'Symphyses contain fibrocartilage to withstand large forces; the pubic symphysis is the classic example.'},
  {t:'sort',title:'Sort by joint class',buckets:['Fibrous','Cartilaginous','Synovial'],items:[['Suture',0],['Gomphosis',0],['Synchondrosis',1],['Symphysis',1],['Hinge',2],['Ball and socket',2]]},
  {t:'mcq',q:'Which joint type contains hyaline cartilage but NO synovial cavity?',opts:['Symphysis','Synchondrosis','Gomphosis','Suture'],a:1,why:'Hyaline cartilage is found in synovial joints and synchondroses; only the synchondrosis lacks a synovial cavity.'},
  {t:'learn',title:'Synovial joint shapes',slides:[14],explain:`<p>The shape of the two bone ends decides which way the joint can move, and how snugly it fits. <b>Axis</b> = an imaginary line the bone turns around, so "uniaxial" means movement in one plane/direction only.</p>
<ul><li><b>Hinge</b> (uniaxial): like a door hinge, bends and straightens only (elbow).</li>
<li><b>Pivot</b> (uniaxial): a peg turning in a ring, like shaking your head "no" (top two neck bones).</li>
<li><b>Saddle and condyloid</b> (biaxial): move in two directions, like a rider rocking forward-back and side-to-side. A saddle example is the thumb base; condyloid is the knuckle.</li>
<li><b>Ball and socket</b> (multiaxial): like a joystick, goes any way (shoulder, hip).</li>
<li><b>Planar</b>: flat surfaces sliding over each other, like a book sliding on a table.</li></ul>
<p class="tip">Hook: 1 - 2 - many: Hinge/Pivot, Saddle/Condyloid, Ball-and-socket.</p>
<p><b>Exam trap:</b> planar is not given an axis count here; it is "gliding".</p>`,html:`<p>Joint shape dictates function <b>and</b> stability (how tight the contacts between bones are).</p>
<table><tr><th>Axes</th><th>Shapes</th></tr>
<tr><td>Uniaxial</td><td><b>Pivot</b>, <b>Hinge</b></td></tr>
<tr><td>Biaxial</td><td><b>Saddle</b>, <b>Condyloid</b></td></tr>
<tr><td>Multiaxial</td><td><b>Ball and socket</b></td></tr>
<tr><td>—</td><td><b>Planar</b> (gliding)</td></tr></table>
<p class="tip">Think: stability of a planar joint vs a hinge joint – tighter contacts = more stable, less mobile.</p>`},
  {t:'sort',title:'Sort by number of axes',buckets:['Uniaxial','Biaxial','Multiaxial'],items:[['Hinge',0],['Pivot',0],['Saddle',1],['Condyloid',1],['Ball and socket',2]]},
  {t:'mcq',q:'Which synovial joint shape is multiaxial?',opts:['Hinge','Pivot','Saddle','Ball and socket'],a:3,why:'Ball and socket joints permit movement in multiple axes (e.g., glenohumeral, hip).'},
  {t:'flash',title:'Synovial joint shapes',cards:[['Hinge','Uniaxial'],['Pivot','Uniaxial'],['Saddle','Biaxial'],['Condyloid','Biaxial'],['Ball and socket','Multiaxial'],['Planar','Gliding']]}
 ]},
 {id:'b1l3',title:'Synovial Components & Stability',mins:8,flower:'🌻',items:[
  {t:'learn',title:'Synovial joint components',slides:[15],explain:`<p>Picture a synovial joint like a well-packaged hinge on a gate: parts that connect, parts that slide, and parts that cushion.</p>
<ul><li><b>Articular (hyaline) cartilage</b>: smooth lining on bone ends.</li>
<li><b>Joint capsule</b>: a sleeve around the joint. Outer layer = <b>fibrous membrane</b> (tough, holds it together); inner layer = <b>synovial membrane</b> (makes the oil).</li>
<li><b>Synovial cavity / fluid</b>: the oily space inside, the joint's lubricant and nutrient supply.</li>
<li><b>Labrum / meniscus</b>: fibrocartilage rims and wedges that make the fit tighter.</li>
<li><b>Bursae</b>: little water-balloon cushions where tendons or skin rub over bone.</li>
<li><b>Tendinous synovial sheaths</b>: slippery tunnels wrapped around tendons so they glide.</li>
<li><b>Fat pads</b>: soft packing that fills gaps.</li></ul>
<p class="tip">Hook: Bursa = "balloon", sheath = "sock", fat pad = "pillow".</p>
<p><b>Exam trap:</b> gomphosis is a joint type, not a synovial component.</p>`,html:`<table><tr><th>Component</th><th>Role</th></tr>
<tr><td>Bones (at least two)</td><td>Articulation</td></tr>
<tr><td><b>Hyaline (articular) cartilage</b></td><td>Covers articulation points</td></tr>
<tr><td><b>Joint capsule</b></td><td>Fibrous membrane (outer) + synovial membrane (inner)</td></tr>
<tr><td><b>Synovial cavity</b></td><td>Filled with synovial fluid</td></tr>
<tr><td><b>Fibrocartilage elements</b> (labrum, meniscus)</td><td>Stability</td></tr>
<tr><td><b>Bursae</b></td><td>Sacs of synovial fluid to reduce friction</td></tr>
<tr><td><b>Tendinous synovial sheaths</b></td><td>Reduce friction</td></tr>
<tr><td><b>Fat pads</b></td><td>Cushioning</td></tr></table>`},
  {t:'match',title:'Match the component to its function',pairs:[['Bursa','Sac of synovial fluid reducing friction'],['Fat pad','Cushioning'],['Labrum/meniscus','Stability'],['Tendinous synovial sheath','Reduces friction around tendons'],['Synovial membrane','Inner layer of joint capsule']]},
  {t:'cloze',title:'Joint capsule',text:'The joint capsule consists of an outer [[fibrous]] membrane and an inner [[synovial]] membrane, enclosing the synovial [[cavity]] filled with synovial fluid.',bank:['fibrous','synovial','cavity','hyaline','elastic']},
  {t:'mcq',q:'Which element of a synovial joint is a sac of fluid that reduces friction?',opts:['Fat pad','Labrum','Bursa','Meniscus'],a:2,why:'Bursae are sacs filled with synovial fluid; fat pads cushion, labrums/menisci add stability.'},
  {t:'learn',title:'Stability vs. mobility',slides:[16,13],explain:`<p><b>Stability</b> = how hard it is to knock the joint out of place. <b>Mobility</b> = how far it moves. They trade off, like a car: a stiff suspension is stable but not flexible.</p>
<ul><li><b>Shape of the surfaces:</b> the shoulder (glenohumeral) is a big ball on a tiny shallow dish, like a golf ball on a tee: huge movement, easy to dislocate. The elbow's humeroulnar joint is a tight nut-and-bolt fit: stable but only bends one way. A labrum or meniscus deepens the dish and adds stability.</li>
<li><b>Ligaments</b> (bone-to-bone straps) crossing the joint: more and tighter = more stable. They can sit outside the capsule (<b>extracapsular</b>) or inside it (<b>intracapsular</b>).</li>
<li><b>Muscle tone</b> = the constant light tension in muscles at rest. Higher tone, like the rotator cuff around the shoulder, holds the joint in. With ageing or injury, muscle shrinks (<b>atrophy</b>) and the joint loosens.</li></ul>
<p class="tip">Hook: "Tight, Tense, Tied = Stable."</p>
<p><b>Exam trap:</b> atrophy means less stability, more mobility, not the other way round.</p>`,html:`<p>It is a balancing act: more stability = less mobility.</p>
<ul><li><b>Shape/arrangement of articulating surfaces</b> – e.g., glenohumeral (shallow, mobile) vs humeroulnar (tight, stable); extra structures (menisci, labrums)</li>
<li><b>Ligaments crossing the joint</b> – elbow vs knee; <b>more and tighter ligaments = more stability</b>. Ligaments may be <b>extracapsular</b> or <b>intracapsular</b></li>
<li><b>Surrounding muscles</b> – higher tone = more stability (e.g., rotator cuff). <b>Aging and injury → atrophy → more mobility / less stability</b></li></ul>`},
  {t:'mcq',q:'Which change would INCREASE mobility and decrease stability at a joint?',opts:['Tighter ligaments','Higher muscle tone','Muscle atrophy after injury','Addition of a labrum'],a:2,why:'Muscle loss reduces dynamic support, so the joint is less stable and more mobile.'},
  {t:'sata',q:'Which factors increase joint stability? (Select all)',opts:['More ligaments crossing the joint','Tighter ligaments','Higher surrounding muscle tone','Shallower articular surfaces','Fibrocartilage labrum'],a:[0,1,2,4],why:'Ligaments, muscle tone and labrums/menisci add stability; shallow surfaces favour mobility.'},
  {t:'mcq',q:'Compared with the humeroulnar joint, the glenohumeral joint is:',opts:['More stable, less mobile','Less stable, more mobile','Equally stable','Uniaxial'],a:1,why:'The shallow glenohumeral ball-and-socket (aided by a labrum and rotator cuff) trades stability for a large range of motion.'},
  {t:'mcq',q:'An elderly patient has repeated shoulder instability after a long period of immobilization. What best explains this?',opts:['Increased rotator cuff tone','Muscle atrophy reducing stabilizing support','Thickened labrum','More tight ligaments'],a:1,why:'Aging and injury cause atrophy, lowering muscular stability and increasing mobility.'},
  {t:'learn',title:'Ligament sprains',slides:[17],explain:`<p>Know the pair of words: <b>ligament</b> (bone-to-bone strap) tears are <b>sprains</b>; <b>muscle or tendon</b> (muscle-to-bone cord) tears are <b>strains</b>. Just link them as pairs: ligament-sprain, muscle-strain.</p>
<ul><li><b>Grade 1</b>: over-stretched, a few fibres frayed (like a stretched rubber band).</li>
<li><b>Grade 2</b>: partly torn, some fibres still hold.</li>
<li><b>Grade 3</b>: completely torn; this one may need surgery.</li></ul>
<p><b>PRICE</b> is first-aid for sprains: <b>P</b>rotection (guard it from more harm), <b>R</b>est, <b>I</b>ce (limits swelling), <b>C</b>ompression (bandage), <b>E</b>levation (raise it above heart level so fluid drains).</p>
<p class="tip">Hook: Higher grade = higher damage; 1-2-3 = stretch, part, all.</p>
<p><b>Exam trap:</b> "Grade 3 strain of the ACL" is wrong wording - the ACL is a ligament, so it is a sprain.</p>`,html:`<p><b>Torn ligaments = sprains</b>; torn muscles or tendons = <b>strains</b>.</p>
<table><tr><th>Grade</th><th>Injury</th></tr><tr><td>1</td><td>Stretching or slight tearing</td></tr><tr><td>2</td><td>Incomplete tear</td></tr><tr><td>3</td><td>Complete tear (surgery)</td></tr></table>
<p>Management: <b>PRICE</b> – Protection, Rest, Ice, Compression, Elevation.</p>
<p class="tip">Ligament → sprain; muscle/tendon → strain.</p>`},
  {t:'order',title:'Order sprain grades from mildest to most severe',steps:['Grade 1: stretching or slight tearing','Grade 2: incomplete tear','Grade 3: complete tear'],why:'Severity increases from stretch, to partial tear, to complete rupture (grade 3 may require surgery).'},
  {t:'cloze',title:'PRICE',text:'PRICE stands for [[Protection]], Rest, [[Ice]], Compression, and [[Elevation]].',bank:['Protection','Ice','Elevation','Pressure','Immobilization']},
  {t:'mcq',q:'A complete ligament tear is called a:',opts:['Grade 3 strain','Grade 3 sprain','Grade 1 sprain','Grade 2 strain'],a:1,why:'Ligament injuries are sprains; grade 3 = complete tear.'},
  {t:'mcq',q:'Which of these is a STRAIN?',opts:['Torn ACL','Torn hamstring tendon','Torn medial collateral ligament','Torn glenohumeral capsule ligament'],a:1,why:'Muscles and tendons strain; ligaments sprain.'}
 ]},
 {id:'b1boss',title:'Joints & Cartilage Boss Quiz',mins:6,flower:'👑',boss:true,items:[
  {t:'mcq',q:'Which cartilage is found in epiphyseal plates?',opts:['Fibrocartilage','Elastic','Hyaline','None'],a:2,why:'Hyaline cartilage forms epiphyseal plates, trachea/bronchi and articular cartilage.'},
  {t:'mcq',q:'How does articular cartilage receive nutrients?',opts:['Direct blood vessels','Lymph channels','Synovial fluid shifts with loading','Nerve fibers'],a:2,why:'It is avascular; loading/unloading moves nutrient-rich synovial fluid in and out.'},
  {t:'mcq',q:'A patient with autoimmune synovial inflammation and fibrous tissue that "fuses" the joint has:',opts:['Osteoarthritis','Rheumatoid arthritis','Grade 3 sprain','Bursa tear'],a:1,why:'RA is autoimmune with synovial inflammation and fibrous infiltration.'},
  {t:'mcq',q:'Which is a symphysis?',opts:['Suture of the skull','Intervertebral disc joint','Hinge joint','Gomphosis'],a:1,why:'Intervertebral discs (fibrocartilage) form symphyses.'},
  {t:'sata',q:'Which are true of fibrocartilage? (Select all)',opts:['Contains Type I and II collagen','Found in menisci','Is avascular and weakest cartilage','Found in labrums','Found in synchondroses'],a:[0,1,3],why:'Fibrocartilage is strong and includes menisci and labrums; synchondroses use hyaline.'},
  {t:'mcq',q:'Which synovial joint shape is biaxial?',opts:['Condyloid','Hinge','Pivot','Ball and socket'],a:0,why:'Saddle and condyloid are biaxial.'},
  {t:'mcq',q:'Which factor DECREASES joint stability?',opts:['Muscle atrophy','Additional extracapsular ligaments','Menisci','Increased muscle tone'],a:0,why:'Atrophy from aging/injury reduces muscular support.'},
  {t:'mcq',q:'A footballer partially tears his medial collateral ligament. Best term and grade?',opts:['Grade 2 strain','Grade 2 sprain','Grade 3 sprain','Grade 1 strain'],a:1,why:'Ligament = sprain; incomplete tear = grade 2.'},
  {t:'sata',q:'Synovial joint features that reduce friction or cushion: (Select all)',opts:['Bursae','Tendinous synovial sheaths','Fat pads','Epiglottis','Smooth hyaline cartilage'],a:[0,1,2,4],why:'Bursae, sheaths, fat pads and smooth hyaline cartilage reduce friction/cushion; the epiglottis is elastic cartilage elsewhere.'},
  {t:'mcq',q:'Which is the correct pairing?',opts:['Synchondrosis – fibrocartilage','Symphysis – hyaline','Synchondrosis – hyaline','Gomphosis – cartilaginous'],a:2,why:'Synchondroses have hyaline cartilage; symphyses have fibrocartilage; gomphoses are fibrous.'}
 ]}
 ]});

[
{q:'Which cartilage type would be found in the auricle of the ear?',opts:['Hyaline','Fibrocartilage','Elastic cartilage','Articular cartilage','Epiphyseal cartilage'],a:2,why:'Elastic cartilage (epiglottis, auricle, laryngeal cartilages) maintains shape with elasticity.'},
{q:'Which statement about articular cartilage is INCORRECT?',opts:['It is avascular','It contains Type II collagen','It receives nutrients via synovial fluid','It has a rich nerve supply','It distributes load over a wider area'],a:3,why:'Hyaline cartilage has no nerve, blood or lymph supply.'},
{q:'A runner with chronic knee osteoarthritis is told cartilage is lost gradually. Why is repair poor?',opts:['Cartilage is highly innervated','Cartilage is avascular','Cartilage contains Type I collagen','Synovial fluid is toxic','Cartilage is elastic'],a:1,why:'Avascular tissue has limited nutrient delivery and healing capacity.'},
{q:'A 45-year-old woman has symmetrical joint inflammation, morning stiffness, and bone ends exposed on imaging. Which process best explains the exposed bone?',opts:['Fibrocartilage hypertrophy','Cartilage degradation from synovial inflammation and impaired nutrient exchange','Muscle hypertrophy','Fusion of a suture','Loss of elastic fibers'],a:1,why:'In RA, synovial inflammation compromises nutrient exchange, so cartilage degrades and bone ends are exposed.'},
{q:'Which joint is a synchondrosis?',opts:['Pubic symphysis','Epiphyseal plate','Skull suture','Tooth in socket','Knee joint'],a:1,why:'Epiphyseal plates are hyaline cartilage joints (synchondroses).'},
{q:'Which pair is mismatched?',opts:['Menisci – fibrocartilage','Glenohumeral labrum – fibrocartilage','Trachea – hyaline','Epiglottis – elastic','Intervertebral disc – hyaline'],a:4,why:'Intervertebral discs are fibrocartilage.'},
{q:'Compared with a hinge joint, a planar (gliding) joint would typically be described as:',opts:['A synovial joint with a different shape and stability profile','A fibrous joint','A cartilaginous joint','A joint without a capsule','A symphysis'],a:0,why:'Planar joints are synovial joints; shape dictates stability and function.'},
{q:'Which is NOT a component of a typical synovial joint?',opts:['Fat pads','Bursae','Synovial membrane','Gomphosis','Articular cartilage'],a:3,why:'A gomphosis is a fibrous joint type, not a synovial component.'},
{q:'After a long cast immobilization, an athlete notices a joint that feels less stable. The most likely contributing factor is:',opts:['Muscle atrophy','Thicker ligaments','Gain of fibrocartilage','Extra bursae','Increased muscle tone'],a:0,why:'Muscle loss reduces stability and increases mobility.'},
{q:'Which joint is expected to be MOST stable?',opts:['Shallow ball-and-socket with few ligaments','Joint with many tight ligaments and deep surfaces','Joint with atrophied muscles','Joint with no menisci or labrum and lax capsule','Planar joint with loose capsule'],a:1,why:'More and tighter ligaments and congruent surfaces increase stability.'},
{q:'Which injury is a strain?',opts:['Grade 2 tear of the anterior cruciate ligament','Complete tear of the calcaneal tendon','Stretching of the lateral collateral ligament','Tear of the glenohumeral capsular ligament','Grade 1 ligament stretch'],a:1,why:'Tendon/muscle tears are strains; ligament tears are sprains.'},
{q:'A patient has a grade 1 ankle sprain. Which description fits?',opts:['Complete ligament rupture','Incomplete tear','Stretching or slight tearing','Muscle tear','Tendon avulsion'],a:2,why:'Grade 1 = stretching or slight tearing; initial care follows PRICE.'},
{q:'Which is NOT part of PRICE?',opts:['Protection','Rest','Ice','Compression','Immobilization'],a:4,why:'PRICE = Protection, Rest, Ice, Compression, Elevation.'},
{q:'Which cartilage would be most appropriate to withstand large forces at the midline joint between the pubic bones?',opts:['Fibrocartilage','Hyaline','Elastic','Articular','None'],a:0,why:'Symphysis joints use fibrocartilage for strong support.'},
{q:'What layer of articular cartilage mainly stores fluid?',opts:['Superficial','Middle','Deep','Perichondrium','Subchondral bone'],a:1,why:'Middle layer = fluid storage; superficial = force distribution; deep = bony connection.'}
].filter((x,i)=>[2,3,5,8,11].includes(i)).forEach(x=>EXAMQ.push(Object.assign({t:'mcq',unit:1,mod:'b1'},x)));

MODULES.push({
 id:'b2', num:4, unit:1, title:'Muscle Basics',
 blurb:'Muscle types and properties, skeletal muscle structure, sarcomeres, motor units, contraction types, agonists/antagonists, aging, exercise and strains.',
 badge:{name:'Muscle Maven',icon:'💪'},
 lessons:[
 {id:'b2l1',title:'Muscle Types & Structure',mins:8,flower:'🌺',items:[
  {t:'learn',title:'Three muscle types',slides:[6,5],explain:`<p>Muscle cells are called <b>myocytes</b> (myo = muscle). The three kinds are sorted by two questions: <i>striped or not?</i> and <i>can you choose to move it?</i></p>
<ul><li><b>Striated</b> = looks striped under a microscope, because the contractile proteins (<b>actin</b> and <b>myosin</b>) are lined up in neat repeating bands.</li>
<li><b>Voluntary</b> = you consciously control it; <b>involuntary</b> = it runs by itself.</li>
<li><b>Skeletal</b>: the muscles you flex, tied to bones by tendons. Striated + voluntary.</li>
<li><b>Cardiac</b>: heart. Striated + involuntary (you cannot will your heart to stop).</li>
<li><b>Smooth</b>: walls of the gut, blood vessels, and skin's tiny hair muscles. Not striated, involuntary.</li></ul>
<p>Their jobs: move the skeleton, hold posture, open/close openings (sphincters), and keep the body's internal balance (homeostasis) - e.g. pushing food along.</p>
<p class="tip">Hook: Only skeletal is voluntary; only smooth is smooth (not striped).</p>
<p><b>Exam trap:</b> cardiac is striated but involuntary - the mix that gets tested.</p>`,html:`<table><tr><th>Type</th><th>Where</th><th>Striated?</th><th>Control</th></tr>
<tr><td><b>Skeletal</b></td><td>Attached to bone</td><td>Yes (myosin + actin)</td><td>Voluntary</td></tr>
<tr><td><b>Cardiac</b></td><td>Heart</td><td>Yes</td><td>Involuntary</td></tr>
<tr><td><b>Smooth</b></td><td>Viscera, blood vessels, skin</td><td>No</td><td>Involuntary</td></tr></table>
<p>Muscle cells = <b>myocytes</b> (specialized by type). This course focuses mainly on skeletal muscle (some cardiac in Unit 5).</p>
<p>Muscular system functions: skeletal movement, maintaining posture and position, opening and closing of orifices, maintaining homeostasis.</p>`},
  {t:'sort',title:'Sort the feature by muscle type',buckets:['Skeletal','Cardiac','Smooth'],items:[['Voluntary control',0],['Found in the heart',1],['Not striated',2],['Found in viscera and blood vessels',2],['Striated, involuntary',1],['Striated with myosin and actin, attached by tendons',0]]},
  {t:'mcq',q:'Which muscle type is striated AND under involuntary control?',opts:['Skeletal','Cardiac','Smooth','Skeletal and smooth'],a:1,why:'Cardiac muscle is striated but involuntary; skeletal is striated and voluntary; smooth is non-striated and involuntary.'},
  {t:'learn',title:'Basic muscle properties',slides:[7],explain:`<p>These are four things every muscle can do, and they are easiest to learn with a rubber band and a light switch.</p>
<ul><li><b>Electrical excitability</b>: the "light switch" - muscle reacts to a signal. The signal can be electrical (heart rhythm) or chemical (a neurotransmitter crossing the <b>neuromuscular cleft</b>, the tiny gap between nerve and muscle).</li>
<li><b>Contractility</b>: it can shorten and generate force. Because skeletal muscles are tied to bone with tendons, shortening pulls bone, which makes movement.</li>
<li><b>Extensibility</b>: it can be stretched, within limits, without being damaged.</li>
<li><b>Elasticity</b>: it snaps back to its starting length afterwards, like a rubber band. Smooth muscle shows the most elasticity (think of a stomach or bladder filling and shrinking back).</li></ul>
<p class="tip">Hook: Excite - Contract - Extend - Elastic (E-C-E-E).</p>
<p><b>Exam trap:</b> extensibility (can be stretched) is not the same as elasticity (recoils afterwards).</p>`,html:`<ul><li><b>Electrical excitability</b> – responds to electrical signals (e.g., heart) and chemical signals (neuromuscular cleft)</li>
<li><b>Contractility</b> – contraction (shortening) produces force; skeletal muscles attach to bone via tendons so shortening produces movement</li>
<li><b>Extensibility</b> – can stretch/lengthen (to an extent) without damage</li>
<li><b>Elasticity</b> – returns to original length after contraction or extension; <b>greatest in smooth muscle</b></li></ul>`},
  {t:'match',title:'Match the property',pairs:[['Electrical excitability','Responds to electrical/chemical signals'],['Contractility','Shortens to produce force'],['Extensibility','Stretches without damage'],['Elasticity','Returns to original length']]},
  {t:'mcq',q:'Which muscle type shows the greatest elasticity?',opts:['Skeletal','Cardiac','Smooth','All equal'],a:2,why:'The slides state elasticity is greatest in smooth muscle.'},
  {t:'learn',title:'Skeletal muscle organization',slides:[8],explain:`<p>Think of a muscle as a rope made of smaller ropes, bundled in wrappers.</p>
<ul><li><b>Muscle</b> = the whole rope, wrapped in <b>epimysium</b> (epi = on top of), tied to bone by a <b>tendon</b>.</li>
<li><b>Fascicle</b> = a strand of fibres, wrapped in <b>perimysium</b> (peri = around).</li>
<li><b>Muscle fibre</b> = one muscle cell (a long thin cell), wrapped in <b>endomysium</b> (endo = within).</li>
<li><b>Myofibril</b> = a thread inside the cell, made of end-to-end <b>sarcomeres</b>, the tiny contracting machines built of actin (thin) and myosin (thick).</li></ul>
<p><b>Fascia</b> = the connective tissue sheath around the muscle. It carries the muscle's blood vessels and nerves, and also acts like a stocking, limiting how much the muscle bulges outward so more force goes along its length.</p>
<p class="tip">Hook: Epi-Peri-Endo = outside to inside; or a sandwich bag around a bundle of straws.</p>
<p><b>Exam trap:</b> a fascicle is a bundle of <i>fibres</i> not myofibrils.</p>`,html:`<p>From outside in:</p>
<ol><li><b>Muscle</b> (surrounded by <span class="key">epimysium</span> – epi = "upon"), anchored to bone by <b>tendon</b></li>
<li><b>Fascicle</b> – bundle of muscle fibers, wrapped by <span class="key">perimysium</span> (peri = "around")</li>
<li><b>Muscle fiber</b> = muscle cell – wrapped by <span class="key">endomysium</span> (endo = "within")</li>
<li><b>Myofibril</b> – repeating units of <b>sarcomeres</b> (a muscle fiber is a bundle of myofibrils)</li>
<li><b>Sarcomere</b>: <b>actin</b> (thin filament) + <b>myosin</b> (thick filament)</li></ol>
<p>Blood vessels and nerves supplying a muscle run in the <b>fascia</b>, which also helps force production by limiting muscle expansion during contraction.</p>
<p class="tip">EPI-PERI-ENDO: outside → inside. Muscle → Fascicle → Fiber → Myofibril → Sarcomere.</p>`},
  {t:'order',title:'Order from largest to smallest',steps:['Muscle','Fascicle','Muscle fiber (cell)','Myofibril','Sarcomere'],why:'A muscle contains fascicles, which are bundles of fibers; each fiber is a bundle of myofibrils made of repeating sarcomeres.'},
  {t:'match',title:'Connective tissue layers',pairs:[['Epimysium','Surrounds whole muscle'],['Perimysium','Surrounds fascicle'],['Endomysium','Surrounds individual fiber'],['Tendon','Anchors muscle to bone']]},
  {t:'mcq',q:'What is a fascicle?',opts:['A bundle of muscle fibers','A bundle of myofibrils','A single sarcomere','A thin filament'],a:0,why:'Fascicle = bundle of muscle fibers; a fiber is a bundle of myofibrils.'},
  {t:'mcq',q:'Which connective tissue wraps individual muscle fibers?',opts:['Epimysium','Perimysium','Endomysium','Tendon'],a:2,why:'Endo = "within", so endomysium lies within, around each fiber.'},
  {t:'learn',title:'Sarcomere & contraction direction',slides:[8],explain:`<p>A <b>sarcomere</b> is the smallest working piece of a muscle. Inside are two kinds of protein filament: thin <b>actin</b> and thick <b>myosin</b>. When we contract, myosin grabs actin and pulls it in, like hands hauling a rope. Many sarcomeres shortening together shorten the whole muscle.</p>
<ul><li><b>Concentric</b>: filaments slide together, the muscle gets shorter (lifting a cup upward).</li>
<li><b>Eccentric</b>: an outside force (gravity, a heavy load) is stronger, so the muscle lengthens even while you are still trying to pull - like a tug-of-war where you slowly lose ground.</li></ul>
<p>In both cases the muscle is actively "trying to shorten"; it is the load that determines the result.</p>
<p class="tip">Hook: Concentric = Closer; Eccentric = Extending (lengthening).</p>
<p><b>Exam trap:</b> eccentric is still a contraction (force is being made), not relaxation.</p>`,html:`<p>Sarcomeres contain <b>actin (thin)</b> and <b>myosin (thick)</b> filaments. To create force we actively try to bring actin and myosin together.</p>
<ul><li><b>Concentric</b>: actin and myosin come together → muscle <b>shortens</b></li>
<li><b>Eccentric</b>: muscle <b>lengthens</b> due to other forces (actin and myosin move apart)</li></ul>`},
  {t:'cloze',title:'Sarcomere',text:'The thin filament is [[actin]] and the thick filament is [[myosin]]. In a [[concentric]] contraction the muscle shortens, while in an [[eccentric]] contraction it lengthens.',bank:['actin','myosin','concentric','eccentric','isometric']},
  {t:'mcq',q:'Which structure is made of repeating units of sarcomeres?',opts:['Fascicle','Myofibril','Epimysium','Tendon'],a:1,why:'Myofibrils are repeating units of sarcomeres.'}
 ]},
 {id:'b2l2',title:'Motor Units & Contraction',mins:8,flower:'🌹',items:[
  {t:'learn',title:'Motor neurons and motor units',slides:[11],explain:`<p>A <b>motor neuron</b> is a nerve cell that carries a "move" command. The command travels in two hops, like a relay: the <b>upper motor neuron</b> starts in the brain and runs down; the <b>lower motor neuron</b> then carries it out to the muscle.</p>
<ul><li><b>Contralateral</b> = opposite side. The left brain drives the right side of the body (the pathways cross over). So a stroke in the left brain causes weakness on the right.</li>
<li><b>Motor unit</b> = one motor neuron plus every muscle fibre it connects to. Think of one tree trunk with its many branches and leaves.</li></ul>
<p>One neuron cannot supply a whole muscle, so a muscle is made of <b>several</b> motor units, each with different fibres. Using more units gives a stronger contraction.</p>
<p class="tip">Hook: "Upper then Lower; Left to Right."</p>
<p><b>Exam trap:</b> a motor unit is not a whole muscle, and not the neuron alone.</p>`,html:`<ul><li><b>Upper motor neuron</b> (brain) → <b>lower motor neuron</b> → skeletal muscle</li>
<li><b>Contralateral control</b>: left brain controls right body and vice versa</li>
<li><div class="defn"><b>Motor unit</b> = a motor neuron and all the muscle fibers it innervates.</div></li>
<li>Several motor units are required to innervate an entire muscle (neuron #1 = motor unit #1, neuron #2 innervating different fibers of the same muscle = motor unit #2)</li></ul>`},
  {t:'mcq',q:'What is a motor unit?',opts:['One muscle and all its nerves','One motor neuron and all the muscle fibers it innervates','A fascicle and its tendon','An upper and lower motor neuron'],a:1,why:'A single motor unit is one neuron plus all the fibers it supplies.'},
  {t:'mcq',q:'The left motor cortex controls voluntary movement of which side of the body?',opts:['Left','Right','Both equally','Neither'],a:1,why:'Control is contralateral.'},
  {t:'cloze',title:'Motor pathway',text:'The pathway runs from the [[upper]] motor neuron to the [[lower]] motor neuron, and each muscle contains [[several]] motor units.',bank:['upper','lower','several','one','smooth']},
  {t:'mcq',q:'How many motor units are needed to innervate a whole muscle?',opts:['Only one','Several','Exactly two','None; muscle is innervated directly by brain'],a:1,why:'Each neuron supplies only some fibers, so several motor units are needed.'},
  {t:'learn',title:'Origin, insertion, levers',slides:[12],explain:`<p>Every muscle ties onto at least two bones, and the two ends behave differently.</p>
<ul><li><b>Origin</b>: the anchor end. It stays put and is usually closer to the trunk (<b>proximal</b>).</li>
<li><b>Insertion</b>: the moving end, usually farther out (<b>distal</b>). When the muscle shortens it pulls the insertion toward the origin.</li>
<li>Muscles can only <b>pull</b> - the way a rope can pull but not push. To push something away, you pull on the far side with the opposite muscle.</li>
<li>A muscle can only move a joint that it <b>crosses</b> (passes over). A muscle that stays on one side of the elbow cannot move the elbow.</li>
<li><b>Lever</b>: bones are rigid bars, joints are pivots. <b>Mechanical advantage</b> is how much "leverage" you get: a door handle placed far from the hinge is much easier to push than one near the hinge.</li></ul>
<p class="tip">Hook: Origin = Orbit centre (fixed); Insertion = In motion.</p>
<p><b>Exam trap:</b> the origin/insertion can swap in some movements, but default to proximal = origin.</p>`,html:`<ul><li><b>Origin</b>: immobile attachment (usually proximal)</li>
<li><b>Insertion</b>: mobile attachment (usually distal)</li>
<li>Muscles can only <b>PULL</b>, never push</li>
<li>A muscle can only cause motion at the joint(s) that it <b>crosses</b></li>
<li>Muscles and joints are <b>levers</b>: the farther from the joint a muscle attaches, the greater its <b>mechanical advantage</b> and the more force at that joint (like a door handle far from the hinge)</li></ul>`},
  {t:'match',title:'Attachments',pairs:[['Origin','Immobile, usually proximal'],['Insertion','Mobile, usually distal'],['Mechanical advantage','Greater with attachment farther from joint'],['Muscle crossing a joint','Can act on that joint']]},
  {t:'mcq',q:'Which attachment of a muscle is typically mobile and distal?',opts:['Origin','Insertion','Fascicle','Epimysium'],a:1,why:'Insertion = mobile, usually distal.'},
  {t:'mcq',q:'Muscle X inserts 5 cm from a joint; muscle Y inserts 2 cm from it. All else equal, which can produce more force at that joint?',opts:['Y','X','Equal','Neither'],a:1,why:'The farther the attachment from the joint, the greater the mechanical advantage.'},
  {t:'mcq',q:'A muscle that does NOT cross the elbow joint can directly produce which of the following?',opts:['Elbow flexion','Elbow extension','Neither; it cannot cause motion at the elbow','Pushing the forearm'],a:2,why:'A muscle can only cause motion at joints it crosses, and muscles only pull.'},
  {t:'learn',title:'Types of contraction',slides:[13],explain:`<p>"Contraction" does not necessarily mean "shortening" - it means the muscle is <i>making force</i>. The slide says muscles are <b>always trying to shorten</b>, and what you see depends on the load.</p>
<ul><li><b>Isometric</b> ("same length"): force is made but the muscle stays the same length and nothing moves. Examples: holding a plank, pushing on a wall, holding a book out still.</li>
<li><b>Isotonic</b> ("same tension"): the muscle length changes. There are two kinds:
<ul><li><b>Concentric</b>: shortens (bringing a cup up to your mouth).</li>
<li><b>Eccentric</b>: lengthens under control (slowly lowering the cup, or a heavy weight, down).</li></ul></li></ul>
<p><b>Phasic</b> contractions are ones with movement - i.e. the isotonic ones.</p>
<p class="tip">Hook: Isometric = "Is it moving? No." Concentric = Compress/shorter; Eccentric = Extend/longer.</p>
<p><b>Exam trap:</b> lowering a weight is eccentric, not "relaxing" - the muscle is still working, just losing the tug-of-war on purpose.</p>`,html:`<p>Muscles produce force while shortening, lengthening or not moving – but they are <b>always trying to shorten</b>.</p>
<table><tr><th>Phasic</th><th></th></tr>
<tr><td><b>Isometric</b></td><td>Muscle contracts but does <b>not shorten</b>; no movement</td></tr>
<tr><td><b>Isotonic – concentric</b></td><td>Muscle <b>shortens</b> during contraction</td></tr>
<tr><td><b>Isotonic – eccentric</b></td><td>Muscle <b>lengthens</b> during contraction</td></tr></table>`},
  {t:'sort',title:'Which contraction?',buckets:['Isometric','Concentric','Eccentric'],items:[['Holding a plank, no movement',0],['Lifting a cup up',1],['Slowly lowering a heavy weight',2],['Pushing against a wall',0],['Biceps shortening during elbow flexion',1],['Muscle lengthening while resisting gravity',2]]},
  {t:'mcq',q:'You hold a book out steady with no change in elbow angle. Biceps is performing a(n):',opts:['Concentric contraction','Eccentric contraction','Isometric contraction','Relaxation'],a:2,why:'Force is produced with no shortening and no movement.'},
  {t:'mcq',q:'Which describes an eccentric contraction?',opts:['Muscle shortens and produces movement','Muscle contracts without shortening','Muscle lengthens while contracting','Muscle relaxes completely'],a:2,why:'Eccentric = muscle lengthens during contraction, controlled by other forces.'}
 ]},
 {id:'b2l3',title:'Agonists, Aging & Injury',mins:8,flower:'🌷',items:[
  {t:'learn',title:'Agonist, antagonist, synergist',slides:[14],explain:`<p>Muscles work as a team, like a rowing crew: a leader, helpers, and a brake.</p>
<ul><li><b>Agonist</b>: the main mover. It shortens (concentric).</li>
<li><b>Synergist</b>: a helper that also shortens and adds to the agonist's pull.</li>
<li><b>Antagonist</b>: the opposing muscle, usually on the other side of the joint. It lengthens (eccentric) to control and slow the movement, so it is smooth and not a jerk, like a brake pedal that stops the car.</li></ul>
<p>Example, bending the elbow: brachialis (agonist) and biceps (synergist) shorten; triceps lengthens as the brake. Straighten the elbow and the roles swap: triceps drives, biceps and brachialis brake.</p>
<p class="tip">Hook: Agonist = Active driver; Antagonist = Applies brakes.</p>
<p><b>Exam trap:</b> a muscle is not "an agonist" forever. The role depends on which movement you are naming. Also, "antagonist" does not mean it is fighting or switched off.</p>`,html:`<ul><li><b>Agonist</b>: primary driver of movement (concentric)</li>
<li><b>Antagonist</b>: controls, slows, or resists the agonist (eccentric)</li>
<li><b>Synergist</b>: additional muscles that assist the agonist (concentric)</li></ul>
<p><b>Elbow flexion</b>: brachialis = agonist (concentric); biceps brachii = synergist (concentric); triceps brachii = antagonist (eccentric).</p>
<p><b>Elbow extension</b>: roles flip – triceps becomes the agonist (concentric); biceps brachii and brachialis become antagonists (eccentric).</p>
<p class="tip">Roles depend on the movement, not the muscle.</p>`},
  {t:'match',title:'Role during elbow flexion',pairs:[['Brachialis','Agonist (concentric)'],['Biceps brachii','Synergist (concentric)'],['Triceps brachii','Antagonist (eccentric)']]},
  {t:'mcq',q:'During elbow extension, the biceps brachii and brachialis act as:',opts:['Agonists, concentric','Synergists, concentric','Antagonists, eccentric','Agonists, isometric'],a:2,why:'The relationship flips: triceps is now agonist; the flexors control the motion eccentrically.'},
  {t:'mcq',q:'Which describes an antagonist?',opts:['Primary driver, concentric','Assists agonist, concentric','Controls/slows/resists the agonist, eccentric','Fixed attachment point'],a:2,why:'Antagonists oppose the agonist, working eccentrically.'},
  {t:'mcq',q:'You slowly lower a heavy dumbbell by extending your elbow, against gravity. Biceps activity is mainly:',opts:['Concentric agonist','Eccentric contraction acting as antagonist','Isometric synergist','None'],a:1,why:'The flexors lengthen under load to control and slow the movement.'},
  {t:'learn',title:'Aging muscle atrophy',slides:[16],explain:`<p><b>Atrophy</b> = shrinking or wasting of a tissue. From about age 30, we gradually lose muscle, and the lost muscle is filled in with <b>fibrous connective tissue</b> (scar-like) and <b>fat</b> - like steak getting marbled.</p>
<p>Why does it happen? Three things combine:</p>
<ul><li><b>Loss of motor neurons</b>: when a nerve cell dies, all the fibres on its motor unit lose their "boss".</li>
<li><b>Slower conduction speeds</b>: nerve signals travel more slowly, so contractions are less sharp.</li>
<li><b>Loss of muscle fibres</b>: fewer "workers", so less force.</li></ul>
<p>The result is less power and strength, and since muscle helps hold joints in place (see Stability vs. mobility), joints also become less stable and falls become likelier.</p>
<p class="tip">Hook: "Nerves go, fibres go, fat grows."</p>
<p><b>Exam trap:</b> aging does not increase the number of fibres per motor unit; the list is all losses.</p>`,html:`<ul><li>Progressive muscle loss from about <b>age 30</b> onward</li>
<li>Muscle mass replaced by <b>fibrous connective tissue and adipose (fat)</b></li>
<li>Caused by <b>loss of motor neurons, slower conduction speeds, and loss of muscle fibers</b></li>
<li>Overall: less power and strength; atrophy also reduces joint stability</li></ul>`},
  {t:'sata',q:'Which contribute to age-related muscle atrophy? (Select all)',opts:['Loss of motor neurons','Slower conduction speeds','Loss of muscle fibers','Gain of motor units','Increased bone density only'],a:[0,1,2],why:'The lecture lists loss of motor neurons, slower conduction, and loss of muscle fibers.'},
  {t:'cloze',title:'Aging',text:'Muscle loss begins at about age [[30]] and mass is replaced by fibrous tissue and [[fat]]. The result is less [[power]] and strength.',bank:['30','fat','power','50','bone']},
  {t:'learn',title:'Exercise',slides:[17],explain:`<p>The slide calls exercise "whole-body medicine": it helps at any age, not just for athletes.</p>
<ul><li><b>Hypertrophy</b> = muscle fibres getting bigger (not more of them), so the muscle grows. It is the opposite of atrophy.</li>
<li><b>Increased neuron firing rate</b>: the nerves signal the muscle faster and more often, so you recruit your muscle better.</li>
<li><b>Increased bone density</b>: bone responds to the pull of muscle by getting stronger (think of a tree growing thicker trunk on the windy side).</li>
<li>It also helps the heart, the lungs, and the nervous system.</li></ul>
<p>Put together, exercise directly counters the age-related losses in the aging card: muscle, nerve drive and bone.</p>
<p class="tip">Hook: Exercise = M.N.B. - Muscle, Nerve, Bone.</p>
<p><b>Exam trap:</b> hypertrophy is growth in size; "hyperplasia" would mean more cells, and that is not the term here.</p>`,html:`<p>Benefits at every age – "whole-body medicine":</p>
<ul><li>Increases muscle mass (<b>hypertrophy</b>)</li><li>Increases <b>neuron firing rate</b></li><li>Increases <b>bone density</b></li>
<li>Plus cardiovascular, pulmonary and neural benefits; makes the musculoskeletal system more resilient to injury</li></ul>`},
  {t:'mcq',q:'Which is NOT a benefit of exercise listed in the lecture?',opts:['Muscle hypertrophy','Increased neuron firing rate','Increased bone density','Loss of motor units'],a:3,why:'Exercise increases mass, firing rate and bone density; loss of motor units is part of aging.'},
  {t:'learn',title:'Muscle strains',slides:[18],explain:`<p>This is the muscle/tendon version of the sprain card. The word that goes with the tissue is what matters: <b>strain</b> = muscle or tendon; <b>sprain</b> = ligament.</p>
<ul><li><b>Grade 1</b>: overstretched, a few fibres torn ("pulled muscle").</li>
<li><b>Grade 2</b>: part of the muscle is torn, but it still holds together.</li>
<li><b>Grade 3</b>: full tear, the muscle or tendon is split in two.</li></ul>
<p><b>PRICE</b> = Protection, Rest, Ice, Compression, Elevation: it limits swelling and further damage in the first days.</p>
<p>A practical point from the lecture: surgery is not always required, even for serious strains. Intensive <b>physiotherapy</b> (guided rehab exercise) can give outcomes just as good as, and sometimes better than, an operation.</p>
<p class="tip">Hook: Muscle/tendon = Strain; Ligament = Sprain.</p>
<p><b>Exam trap:</b> a torn hamstring tendon is a strain; a torn ankle ligament is a sprain. Same grades, different name.</p>`,html:`<p>Muscles and tendons <b>strain</b>; ligaments <b>sprain</b>.</p>
<table><tr><th>Grade</th><th></th></tr><tr><td>1</td><td>Stretching or slight tearing</td></tr><tr><td>2</td><td>Incomplete tear</td></tr><tr><td>3</td><td>Complete tear</td></tr></table>
<p>Management: <b>PRICE</b> (Protection, Rest, Ice, Compression, Elevation). Doesn't always need surgery – aggressive physiotherapy can give equal (sometimes better) outcomes to surgery for high-grade strains.</p>`},
  {t:'mcq',q:'A sprinter has an incomplete tear of the hamstring muscle. Best description?',opts:['Grade 2 strain','Grade 2 sprain','Grade 3 strain','Grade 1 sprain'],a:0,why:'Muscle = strain; incomplete tear = grade 2.'},
  {t:'mcq',q:'According to the lecture, high-grade muscle strains:',opts:['Always require surgery','Never heal','Can sometimes be managed with physiotherapy with outcomes equal to surgery','Must be immobilized permanently'],a:2,why:'Modern research shows aggressive physiotherapy can match or exceed surgery.'},
  {t:'learn',title:'Naming muscles',slides:[20],explain:`<p>Muscle names look scary but they are descriptions in Latin/Greek. Decode them and you can often guess the muscle without memorizing.</p>
<ul><li><b>Action</b>: what it does. <i>Levator scapulae</i> = "lifter of the scapula" (levator = lifts).</li>
<li><b>Shape</b>: <i>rhomboid major</i> is diamond-shaped ("rhomboid").</li>
<li><b>Size</b>: <i>major</i> = bigger, <i>minor</i> = smaller, so rhomboid minor is the smaller sibling.</li>
<li><b>Number of heads</b> (origins): <i>biceps</i> = two heads; <i>triceps</i> = three. <i>Brachii</i> = of the arm.</li>
<li><b>Attachment points</b>: <i>sternocleidomastoid</i> = attaches to sternum + clavicle (cleido) + mastoid process of the skull.</li></ul>
<p>The slide also notes that the direction of the fibres can be in the name (e.g. "oblique", "transverse"), which tells you the direction the muscle pulls.</p>
<p class="tip">Hook: name = Do / Draw / Dimension / Divisions / Docking sites.</p>
<p><b>Exam trap:</b> "major/minor" is about size, not importance.</p>`,html:`<p>Names come from Greek/Latin patterns:</p>
<ul><li><b>Action</b>: levator scapulae (use fiber direction too)</li><li><b>Shape</b>: rhomboid major</li><li><b>Size</b>: rhomboid minor</li>
<li><b>Number of heads</b>: biceps brachii</li><li><b>Points of attachment</b>: sternocleidomastoid</li></ul>`},
  {t:'match',title:'Naming clue',pairs:[['Levator scapulae','Action'],['Rhomboid major','Shape'],['Sternocleidomastoid','Attachment points'],['Rhomboid minor','Size']]}
 ]},
 {id:'b2boss',title:'Muscle Basics Boss Quiz',mins:6,flower:'👑',boss:true,items:[
  {t:'mcq',q:'Which muscle type is both striated and voluntary?',opts:['Cardiac','Smooth','Skeletal','All three'],a:2,why:'Skeletal muscle is striated and under voluntary control.'},
  {t:'mcq',q:'Which layer surrounds a fascicle?',opts:['Epimysium','Perimysium','Endomysium','Sarcolemma only'],a:1,why:'Peri = around the fascicle.'},
  {t:'mcq',q:'A motor unit consists of:',opts:['A muscle and its tendon','A motor neuron and all fibers it innervates','A sarcomere','Upper motor neuron only'],a:1,why:'By definition.'},
  {t:'mcq',q:'Which attachment is usually proximal and immobile?',opts:['Insertion','Origin','Tendon','Fascicle'],a:1,why:'Origin = immobile, usually proximal.'},
  {t:'mcq',q:'Which contraction produces force without muscle shortening or movement?',opts:['Concentric','Eccentric','Isometric','Phasic isotonic'],a:2,why:'Isometric.'},
  {t:'mcq',q:'During elbow flexion, the triceps brachii is:',opts:['Agonist','Synergist','Antagonist, eccentric','Origin'],a:2,why:'It opposes and controls flexion eccentrically.'},
  {t:'sata',q:'Which are true of aging muscle? (Select all)',opts:['Loss starts around age 30','Mass is replaced by fat and fibrous tissue','Motor neurons are lost','Strength increases','Joint stability decreases'],a:[0,1,2,4],why:'Atrophy leads to weakness and reduced stability.'},
  {t:'mcq',q:'A gardener has a stretched ligament at the ankle with slight tearing. This is a:',opts:['Grade 1 sprain','Grade 1 strain','Grade 3 sprain','Grade 2 strain'],a:0,why:'Ligament = sprain; slight tearing = grade 1.'},
  {t:'mcq',q:'Why is a muscle attached farther from a joint able to generate more force at the joint?',opts:['Greater mechanical advantage','More sarcomeres','Higher tone','It is smooth muscle'],a:0,why:'Lever mechanics: greater distance from the joint = greater mechanical advantage.'},
  {t:'sata',q:'Which are properties of muscle tissue? (Select all)',opts:['Electrical excitability','Contractility','Extensibility','Elasticity','Avascularity'],a:[0,1,2,3],why:'Avascularity is a cartilage feature.'}
 ]}
 ]});

[
{q:'A patient has right-sided weakness after a stroke. Using contralateral control, the lesion most likely involves which upper motor neurons?',opts:['Left side of the brain','Right side of the brain','Both sides equally','Lower motor neurons only','Cardiac muscle'],a:0,why:'The left brain controls the right body.'},
{q:'Which statement about muscle is INCORRECT?',opts:['Muscles can only pull','A muscle acts only at joints it crosses','Origin is usually proximal and immobile','Skeletal muscle is involuntary','Insertion is mobile and usually distal'],a:3,why:'Skeletal muscle is voluntary; cardiac and smooth are involuntary.'},
{q:'A weightlifter slowly lowers a barbell in a bench press. Which best describes the pectoral muscles in the lowering phase?',opts:['Isometric','Concentric agonist','Eccentric contraction','Relaxed','Synergist only'],a:2,why:'The muscle lengthens while resisting gravity.'},
{q:'Which combination correctly orders connective tissue from innermost to outermost?',opts:['Endomysium, perimysium, epimysium','Epimysium, perimysium, endomysium','Perimysium, endomysium, epimysium','Endomysium, epimysium, perimysium','Perimysium, epimysium, endomysium'],a:0,why:'Endo (within) → peri (around fascicle) → epi (upon whole muscle).'},
{q:'A 75-year-old has reduced strength and notes her muscle appears replaced by fatty tissue. Which is NOT a contributing mechanism?',opts:['Loss of motor neurons','Slower conduction speeds','Loss of muscle fibers','Increase in the number of muscle fibers per motor unit','Fibrous and adipose replacement'],a:3,why:'Aging involves loss of neurons and fibers, not a gain.'}
].forEach(x=>EXAMQ.push(Object.assign({t:'mcq',unit:1,mod:'b2'},x)));

MODULES.push({ id:"n1", num:5, unit:2, title:"Intro to Neuro",
 blurb:"Neurons, glia, myelin, white vs gray matter, and how the nervous system is divided (CNS/PNS, somatic/autonomic).",
 badge:{name:"Neuron Navigator",icon:"🧠"},
 lessons:[
 {id:"n1l1",title:"Cells of the nervous system",mins:8,flower:"🌸",items:[
  {t:"learn",title:"Neurons vs neuroglia",html:`<p>The nervous system controls and integrates bodily activity and reacts to constant changes in the external and internal environments. The <b>CNS</b> is the main processing centre and coordinator of all body functions.</p>
<ul><li><span class="key">Neurons</span>: basic unit of the nervous system; transmit electrical impulses to one another to communicate information.</li>
<li><span class="key">Neuroglia</span>: non-neuronal, <b>non-excitable</b> cells; about <b>5x as abundant</b> as neurons; support neurons (structure, nourishment, insulation, pathogen clearance).</li></ul>
<p class="tip">Glia = glue/support. They do not fire impulses, but outnumber neurons 5:1.</p>`,slides:[4, 5, 6],explain:`<p>Think of the nervous system as a company. <b>Neurons</b> are the employees who actually send messages (electrical impulses). <b>Neuroglia</b> ("glia", from Greek for glue) are the support staff: they hold things in place, feed neurons, insulate wires and clean up invaders.</p>
<ul><li><b>Non-excitable</b> means glia can't fire an impulse (action potential); only neurons can.</li>
<li><b>CNS</b> = central nervous system (brain + spinal cord): the "head office" that processes information and coordinates the body.</li>
<li>The "5x" figure just tells you glia vastly outnumber neurons.</li></ul>
<p class="tip">Exam trap: "most abundant" does not mean "does the signalling". Glia are numerous but silent; neurons are the functional unit.</p>`},
  {t:"mcq",q:"Which statement about neuroglia is correct?",opts:["They are excitable cells that transmit impulses","They are non-excitable support cells about 5x as abundant as neurons","They are the basic unit of the nervous system","They are fewer in number than neurons"],a:1,why:"Neuroglia are non-neuronal, non-excitable cells that support neurons and are ~5x as abundant."},
  {t:"match",title:"Cell type and role",pairs:[["Neuron","Basic unit; transmits electrical impulses"],["Neuroglia","Non-excitable support cells"],["Oligodendrocyte","Myelinates axons in the CNS"],["Schwann cell","Myelinates axons in the PNS"]]},
  {t:"learn",title:"Multipolar motor neuron",html:`<p>Motor neurons send signals <b>from the CNS to target organs</b>.</p>
<table><tr><th>Part</th><th>Function</th></tr>
<tr><td><span class="key">Dendrites</span></td><td>Collect information from other neurons/cells</td></tr>
<tr><td><span class="key">Cell body</span></td><td>Contains the nucleus</td></tr>
<tr><td><span class="key">Axon hillock</span> (trigger zone)</td><td>Signals summate to reach threshold and cause an action potential</td></tr>
<tr><td><span class="key">Axon</span></td><td>Transmits the action potential</td></tr>
<tr><td><span class="key">Myelin sheath</span></td><td>Insulates the axon</td></tr>
<tr><td><span class="key">Nodes of Ranvier</span></td><td>Gaps between myelin; active sites</td></tr>
<tr><td><span class="key">Axon terminals</span></td><td>Where synapse occurs with the next neuron or target organ</td></tr></table>`,slides:[7],explain:`<p>Picture a tree lying on its side: the signal flows from the branches to the trunk's far end. A motor neuron carries a command <b>out of the CNS to a muscle or gland</b>.</p>
<ul><li><b>Dendrites</b> (the "branches") listen: they collect messages from other cells. "Multipolar" = many dendrites coming off the cell body.</li>
<li><b>Cell body</b>: the control room holding the nucleus.</li>
<li><b>Axon hillock</b>: the decision point. Incoming signals are added up (<b>summation</b>); if the total reaches <b>threshold</b> (the minimum trigger level), an <b>action potential</b> (the electrical impulse) fires.</li>
<li><b>Axon</b> is the cable; <b>myelin</b> is its insulation; <b>nodes of Ranvier</b> are the little uninsulated gaps where the impulse is regenerated.</li>
<li><b>Axon terminals</b> hand the message to the next cell at a synapse.</li></ul>
<p class="tip">Hook: Dendrites Deliver in, Axons Away. Exam trap: the hillock, not the dendrites, is where the impulse is triggered.</p>`},
  {t:"order",title:"Direction of signal through a motor neuron",steps:["Dendrites collect information","Signals summate at axon hillock (trigger zone)","Action potential travels along the axon","Axon terminals synapse with next neuron/target organ"],why:"Dendrites receive, the hillock reaches threshold, the axon conducts, the terminals pass the signal on."},
  {t:"mcq",q:"Where do signals summate to reach threshold and trigger an action potential?",opts:["Node of Ranvier","Dendrite","Axon hillock","Axon terminal"],a:2,why:"The axon hillock is the trigger zone."},
  {t:"cloze",title:"Motor neuron parts",text:"[[Dendrites]] collect information, the [[axon]] transmits the action potential, and [[axon terminals]] are where synapse occurs.",bank:["Dendrites","axon","axon terminals","cell body","nodes of Ranvier"]},
  {t:"learn",title:"Pseudounipolar sensory neuron",html:`<p>Sensory neurons bring signals <b>from the periphery to the CNS</b>.</p>
<ul><li><span class="key">Peripheral process</span>: part of axon <b>distal</b> to the cell body.</li>
<li><span class="key">Central process</span>: part of axon <b>proximal</b> to the cell body.</li>
<li>The cell body sits off to the side, in a <span class="key">ganglion</span> = a collection of cell bodies from multiple neurons within a nerve.</li>
<li>Trigger zone, myelin sheath, nodes of Ranvier and axon terminals are as in the motor neuron.</li></ul>
<p class="tip">Motor = away from CNS (efferent) to organs; sensory = periphery to CNS (afferent).</p>`,slides:[8],explain:`<p>A sensory neuron is the opposite messenger: it carries information (touch, pain, stretch) <b>from the body into the CNS</b>. It is "pseudounipolar" because it looks like it has one process leaving the cell body, which then splits into a T shape.</p>
<ul><li><b>Peripheral process</b>: the limb of the T heading out to the skin or muscle (distal = further from the cell body). It acts like a dendrite but looks like an axon.</li>
<li><b>Central process</b>: the limb heading into the spinal cord (proximal side).</li>
<li>The cell body sits off to the side like a bus stop beside the highway, so signals bypass it. Many such cell bodies cluster together in a <b>ganglion</b> (a "knot" of cell bodies in the PNS).</li></ul>
<p class="tip">Hook: Sensory = Afferent = Arrives at the CNS; motor = Efferent = Exits. Exam trap: ganglion = cell bodies in the PNS; in the CNS the equivalent cluster is called a nucleus.</p>`},
  {t:"sort",title:"Motor or sensory neuron?",buckets:["Multipolar motor neuron","Pseudounipolar sensory neuron"],items:[["Signals from CNS to target organs",0],["Signals from periphery to CNS",1],["Has central and peripheral processes",1],["Multiple dendrites collecting information into the cell body",0],["Cell bodies grouped in a ganglion",1]]},
  {t:"mcq",q:"A ganglion is best defined as:",opts:["A bundle of axons in the CNS","A collection of cell bodies from multiple neurons within a nerve","A gap in the myelin sheath","The part of the axon distal to the cell body"],a:1,why:"Ganglion = collection of cell bodies from multiple neurons within a nerve (PNS)."},
  {t:"mcq",q:"In a pseudounipolar sensory neuron, the 'peripheral process' is:",opts:["Part of the axon proximal to the cell body","Part of the axon distal to the cell body","The dendrite tree in the CNS","The trigger zone"],a:1,why:"Peripheral process = distal to the cell body; central process = proximal."},
  {t:"flash",title:"Quick review",cards:[["Neuron","Basic unit; transmits electrical impulses"],["Neuroglia","Non-excitable support cells, ~5x as abundant"],["Axon hillock","Trigger zone: summation to threshold"],["Ganglion","Collection of cell bodies within a nerve"],["Node of Ranvier","Active site where depolarization occurs on myelinated axons"]]}
 ]},
 {id:"n1l2",title:"Myelin, white/gray matter, synapse",mins:8,flower:"🌼",items:[
  {t:"learn",title:"Myelination",html:`<p><span class="key">Myelin</span> insulates the axon to <b>increase speed of the signal</b> and is <b>white</b> in appearance.</p>
<table><tr><th></th><th>CNS</th><th>PNS</th></tr>
<tr><td>Cell</td><td>Oligodendrocyte</td><td>Schwann cell</td></tr>
<tr><td>Myelination</td><td>Forms <b>several</b> myelin sheaths around <b>multiple axons</b></td><td>Forms <b>one</b> myelin sheath around <b>one section of one axon</b></td></tr>
<tr><td>Disease</td><td>Multiple sclerosis: degradation of oligodendrocytes; symptoms vary</td><td>Guillain-Barré syndrome: degradation of Schwann cells; weakness and paralysis</td></tr></table>`,slides:[9, 11],explain:`<p><b>Myelin</b> is a fatty wrapping around axons, like rubber coating on an electrical wire. It makes signals travel much faster, and its fat makes tissue look white. Glia make it:</p>
<ul><li><b>Oligodendrocyte</b> (CNS): an octopus-like cell with many arms, each wrapping a piece of a <i>different</i> axon.</li>
<li><b>Schwann cell</b> (PNS): one cell wraps one stretch of <i>one</i> axon, like a single bead on a string.</li></ul>
<p>Because each cell type belongs to a different region, diseases hit different places. <b>Multiple sclerosis</b> damages CNS myelin, so symptoms vary with whichever brain/cord pathways are affected. <b>Guillain-Barré</b> damages PNS myelin, so peripheral nerves fail and you get weakness and paralysis.</p>
<p class="tip">Hook: Schwann = Single; Oligo = many. Exam trap: don't swap the two diseases; "peripheral nerve weakness" points to Schwann cells/Guillain-Barré.</p>`},
  {t:"match",title:"Myelin cells and diseases",pairs:[["Oligodendrocyte","CNS; many sheaths on multiple axons"],["Schwann cell","PNS; one sheath on one axon section"],["Multiple sclerosis","Degraded oligodendrocytes"],["Guillain-Barré","Degraded Schwann cells; weakness/paralysis"]]},
  {t:"mcq",q:"A patient develops ascending weakness and paralysis due to degradation of Schwann cells. This is:",opts:["Multiple sclerosis","Guillain-Barré syndrome","Parkinson disease","Spinal cord transection"],a:1,why:"Schwann cells myelinate PNS axons; their degradation is Guillain-Barré syndrome."},
  {t:"mcq",q:"Which cell forms several myelin sheaths around multiple axons?",opts:["Schwann cell","Astrocyte","Oligodendrocyte","Neuron"],a:2,why:"Oligodendrocytes (CNS) myelinate multiple axons; Schwann cells do one section of one axon."},
  {t:"learn",title:"Myelin and conduction speed",html:`<ul><li><b>Unmyelinated</b>: must depolarize at every point along the axon, so slow: <b>0.5-2 m/s</b>.</li>
<li><b>Myelinated</b>: only depolarizes at the <span class="key">nodes of Ranvier</span>; the signal jumps node to node: <b>3-120 m/s</b>.</li></ul>
<p class="tip">Think Newton's cradle: the impulse skips along the nodes.</p>`,slides:[11],explain:`<p>An action potential is a wave of <b>depolarization</b> (the membrane's electrical charge flips as ions flow in). In an unmyelinated axon this has to be regenerated at every point, like a stadium wave passing person by person: slow.</p>
<p>Myelin blocks leakage along most of the axon, so the signal only has to be regenerated at the gaps, the <b>nodes of Ranvier</b>. The impulse effectively leaps from node to node (called <b>saltatory conduction</b>), like skipping stones across a pond. That raises speed from about 0.5-2 m/s to 3-120 m/s.</p>
<p class="tip">Hook: Myelin = Move faster. Exam trap: myelin doesn't make its own action potentials; they still happen at the nodes.</p>`},
  {t:"sort",title:"Unmyelinated or myelinated?",buckets:["Unmyelinated","Myelinated"],items:[["0.5-2 m/s",0],["3-120 m/s",1],["Depolarizes at every point along the axon",0],["Signal jumps from node to node",1]]},
  {t:"mcq",q:"Why do myelinated axons conduct faster?",opts:["They are wider than all unmyelinated axons","Depolarization is needed only at nodes of Ranvier, so the signal jumps node to node","They have more dendrites","Myelin generates its own action potentials"],a:1,why:"Myelin insulates; depolarization occurs only at nodes of Ranvier."},
  {t:"learn",title:"White vs gray matter",html:`<ul><li><span class="key">Gray matter</span>: <b>cell bodies</b> (cortex and nuclei); cell bodies have no myelin. The 'buildings' that process and store information.</li>
<li><span class="key">White matter</span>: <b>myelinated axons</b>, appear white. The 'roads, transit lines, bike lanes' connecting buildings.</li></ul>`,slides:[10],explain:`<p>Look at a cut section of brain or cord: some tissue is pale, some is darker/pinkish-gray.</p>
<ul><li><b>Gray matter</b> = neuron <i>cell bodies</i> (no myelin, so not white). <b>Cortex</b> is gray matter on the surface; a <b>nucleus</b> (in the CNS) is a clump of cell bodies deeper in. Analogy: the <i>buildings</i> where information is processed and stored.</li>
<li><b>White matter</b> = bundles of <i>myelinated axons</i>. Analogy: the <i>roads and transit lines</i> linking the buildings.</li></ul>
<p class="tip">Hook: White = Wires (wrapped in white myelin). Exam trap: "white" is about the fatty myelin, not about the cell type.</p>`},
  {t:"sort",title:"Gray or white matter?",buckets:["Gray matter","White matter"],items:[["Neuronal cell bodies",0],["Myelinated axons",1],["Cortex and nuclei",0],["Connecting 'roads' that transmit information",1],["Processes and stores information",0]]},
  {t:"mcq",q:"White matter appears white because it contains:",opts:["Cell bodies","Myelinated axons","Dendrites only","Neuroglia only"],a:1,why:"Myelin is white; white matter = myelinated axons."},
  {t:"learn",title:"The synapse",html:`<ol><li>Nerve impulse arrives at axon terminal end bulb of the <b>presynaptic</b> neuron.</li>
<li>Impulse opens <b>calcium channels</b>; Ca<sup>2+</sup> rushes in.</li>
<li><b>Neurotransmitter</b> is released and crosses the synaptic cleft to trigger opening of <b>sodium channels</b> on the postsynaptic neuron.</li>
<li>Na<sup>+</sup> flows into the dendrite of the postsynaptic neuron to initiate a new impulse.</li></ol>`,slides:[12],explain:`<p>A <b>synapse</b> is the tiny gap where one neuron passes a message to the next. The sending cell is <b>presynaptic</b>; the receiving cell is <b>postsynaptic</b>; the gap is the <b>synaptic cleft</b>. The electrical signal can't jump the gap, so it is converted into a chemical one and back.</p>
<ol><li>Impulse arrives and opens <b>calcium (Ca<sup>2+</sup>) channels</b> (protein gates); calcium floods in.</li>
<li>The calcium makes vesicles release <b>neurotransmitter</b> (a chemical messenger) into the cleft.</li>
<li>Neurotransmitter binds receptors and opens <b>sodium (Na<sup>+</sup>) channels</b> on the next neuron; sodium entering starts a new impulse.</li></ol>
<p class="tip">Hook: Calcium Comes first (presynaptic), Sodium Second (postsynaptic). Exam trap: don't reverse the ions.</p>`},
  {t:"order",title:"Order the synaptic events",steps:["Impulse arrives at presynaptic axon terminal","Calcium channels open; Ca2+ enters","Neurotransmitter crosses synaptic cleft","Sodium channels open on postsynaptic neuron; Na+ enters dendrite"],why:"Calcium influx triggers neurotransmitter release; transmitter opens postsynaptic sodium channels."},
  {t:"cloze",title:"Synapse",text:"Arrival of the impulse opens [[calcium]] channels in the presynaptic terminal. Neurotransmitter then opens [[sodium]] channels on the postsynaptic neuron.",bank:["calcium","sodium","potassium","chloride"]}
 ]},
 {id:"n1l3",title:"Divisions of the nervous system",mins:9,flower:"🌻",items:[
  {t:"learn",title:"Structural divisions: CNS vs PNS",html:`<ul><li><span class="key">CNS</span>: brain and spinal cord.</li>
<li><span class="key">PNS</span>: cranial nerves, spinal nerves, ganglia, enteric plexuses, and sensory receptors.</li></ul>
<p class="tip">Structural = CNS/PNS. Functional = somatic/autonomic.</p>`,slides:[13, 14],explain:`<p>This split is about <b>where things are</b>. The <b>CNS</b> is the protected control centre: brain plus spinal cord. The <b>PNS</b> is everything that connects that centre to the rest of the body: <b>cranial nerves</b> (12 pairs from the brain), <b>spinal nerves</b> (from the cord), <b>ganglia</b> (clusters of cell bodies), <b>enteric plexuses</b> (the nerve networks in the gut wall) and <b>sensory receptors</b> (the endings that detect stimuli).</p>
<p>Picture the CNS as a city's main server and the PNS as the cables and sensors running to every house.</p>
<p class="tip">Exam trap: structural (CNS/PNS) and functional (somatic/autonomic) are two different ways to slice the same system; the ANS and somatic NS are both parts of the PNS.</p>`},
  {t:"sort",title:"CNS or PNS?",buckets:["CNS","PNS"],items:[["Brain",0],["Spinal cord",0],["Spinal nerves",1],["Cranial nerves",1],["Ganglia",1],["Sensory receptors",1]]},
  {t:"learn",title:"Functional divisions: somatic vs autonomic",html:`<table><tr><th></th><th>Somatic NS</th><th>Autonomic NS (ANS)</th></tr>
<tr><td>Innervates</td><td>All other tissues (muscles, skin)</td><td>Viscera (organs and glands)</td></tr>
<tr><td>Control</td><td>Voluntary motor control and peripheral sensation</td><td>Involuntary</td></tr></table>
<p>Both are components of the PNS.</p>`,slides:[14, 15, 16],explain:`<p>This split is about <b>what the nerves control</b>.</p>
<ul><li><b>Somatic</b> ("soma" = body): the parts you consciously move and feel with, i.e. skeletal muscle and skin. Example: deciding to lift your arm, or feeling a pinprick.</li>
<li><b>Autonomic</b> ("auto" = self): runs by itself, without you thinking. It controls <b>viscera</b> (internal organs such as heart, gut, bladder) and glands. Example: heartbeat, sweating, digestion.</li></ul>
<p>Both have sensory and motor sides, which is why you see "sensory" and "motor" under each in the overview slide.</p>
<p class="tip">Hook: Somatic = Skeletal = Self-directed; Autonomic = Automatic. Exam trap: gland and organ control is autonomic even though glands are in the body wall too.</p>`},
  {t:"mcq",q:"Voluntary motor control of skeletal muscle belongs to the:",opts:["Autonomic nervous system","Sympathetic nervous system","Somatic nervous system","Parasympathetic nervous system"],a:2,why:"Somatic NS = voluntary motor control and peripheral sensation."},
  {t:"mcq",q:"Which is NOT a part of the peripheral nervous system?",opts:["Spinal nerves","Enteric plexuses","Spinal cord","Ganglia"],a:2,why:"The spinal cord is CNS."},
  {t:"learn",title:"Sympathetic vs parasympathetic",html:`<table><tr><th></th><th>Sympathetic (SNS)</th><th>Parasympathetic (PSNS)</th></tr>
<tr><td>Nickname</td><td>'Fight, flight, or fright'</td><td>'Rest and digest' / 'Feed and breed'</td></tr>
<tr><td>Origin</td><td>Spinal segments <b>T1-L2</b> via the sympathetic chain/trunk</td><td>Cranial nerves and sacral spinal levels (<b>craniosacral</b>)</td></tr></table>`,slides:[15],explain:`<p>The autonomic system has two opposing teams that balance each other.</p>
<ul><li><b>Sympathetic</b>: the accelerator. Mobilizes the body for emergencies ("fight, flight, or fright"): heart races, pupils widen, digestion pauses. Its neurons leave the cord only at <b>T1-L2</b> (thoracic 1 to lumbar 2) and travel in the sympathetic chain.</li>
<li><b>Parasympathetic</b>: the brake. Saves energy and supports digestion and recovery ("rest and digest", "feed and breed"). Its neurons leave from the <b>brain (via cranial nerves)</b> and the <b>sacral</b> cord, called <b>craniosacral</b> outflow.</li></ul>
<p class="tip">Hook: Sympathetic = Spine middle (thoracolumbar); Parasympathetic = Peripheral ends (head and tail). Exam trap: don't call parasympathetic "thoracolumbar".</p>`},
  {t:"match",title:"Sympathetic vs parasympathetic features",pairs:[["Fight, flight, or fright","Sympathetic"],["Rest and digest","Parasympathetic"],["T1-L2","Sympathetic origin"],["Craniosacral","Parasympathetic origin"]]},
  {t:"mcq",q:"The sympathetic nervous system originates from which spinal levels?",opts:["C1-C8","T1-L2","L1-S4","S2-S4 and cranial nerves"],a:1,why:"All sympathetic signals come from T1-L2 via the sympathetic chain/trunk."},
  {t:"learn",title:"Dermatomes, myotomes, and the functional overview",html:`<p>Somatic motor and sensory components are spinal nerves tied to their level of origin, giving patterned <span class="key">myotomes</span> (muscle, motor) and <span class="key">dermatomes</span> (skin, sensory). Mapping them helps decide whether an injury is central or peripheral and diagnose its level (spinal level, brain region, nerve branch).</p>
<ul><li>Sensory: Autonomic (viscera, enteroceptors) and Somatic (body).</li><li>Motor: Somatic (skeletal muscle, voluntary) and Autonomic (organs and glands, involuntary).</li></ul>`,slides:[16, 14],explain:`<p>Each spinal nerve attaches to the cord at one level and serves a predictable strip of body.</p>
<ul><li><b>Dermatome</b> (derma = skin): the patch of skin that sends sensation to <i>one</i> spinal level. Think of a stack of horizontal stripes on the trunk.</li>
<li><b>Myotome</b> (myo = muscle): the group of muscles that <i>one</i> spinal level moves.</li></ul>
<p>Clinical use: if a patient lacks sensation or strength in a certain pattern, you can work backwards to the level involved, and tell whether the problem is in the brain or cord (central) or in a nerve outside them (peripheral). The overview also summarizes: sensory comes from viscera (autonomic) or body (somatic); motor goes to skeletal muscle (somatic, voluntary) or organs/glands (autonomic, involuntary).</p>
<p class="tip">Hook: Derma = Dermis = sensory skin; Myo = Muscle = movement.</p>`},
  {t:"match",title:"Dermatome vs myotome",pairs:[["Dermatome","Skin supplied by one spinal level (sensory)"],["Myotome","Muscle supplied by one spinal level (motor)"],["Somatic motor","Skeletal muscle, voluntary"],["Autonomic motor","Organs and glands, involuntary"]]},
  {t:"sata",q:"Select all that belong to the somatic nervous system.",opts:["Voluntary control of skeletal muscle","Sensation from skin","Control of glands","Involuntary control of viscera"],a:[0,1],why:"Control of glands and viscera is autonomic."},
  {t:"mcq",q:"Mapping dermatomes and myotomes is clinically useful to:",opts:["Measure conduction speed","Determine whether an injury is central or peripheral and its level","Identify oligodendrocytes","Distinguish white from gray matter"],a:1,why:"They allow diagnosis of the injury level."}
 ]},
 {id:"n1boss",title:"Intro to Neuro Boss Quiz",mins:7,flower:"👑",boss:true,items:[
  {t:"mcq",q:"Which cells are non-excitable, support neurons, and are ~5x more abundant than neurons?",opts:["Motor neurons","Neuroglia","Sensory neurons","Pseudounipolar cells"],a:1,why:"Neuroglia."},
  {t:"mcq",q:"Which structure collects information from other neurons?",opts:["Axon terminal","Dendrite","Node of Ranvier","Axon hillock"],a:1,why:"Dendrites collect information."},
  {t:"mcq",q:"A patient has multiple sclerosis. Which cells are degraded?",opts:["Schwann cells","Oligodendrocytes","Motor neuron cell bodies","Sensory ganglia"],a:1,why:"MS = loss of CNS myelin from oligodendrocyte degradation."},
  {t:"mcq",q:"Which cell myelinates just one section of one axon?",opts:["Oligodendrocyte","Schwann cell","Neuron","Dendrite"],a:1,why:"Schwann cell, PNS."},
  {t:"mcq",q:"The speed of a myelinated neuron is approximately:",opts:["0.5-2 m/s","3-120 m/s","200-300 m/s","Equal to unmyelinated"],a:1,why:"Myelinated 3-120 m/s; unmyelinated 0.5-2 m/s."},
  {t:"mcq",q:"Which is the first event after an impulse reaches the presynaptic terminal?",opts:["Sodium enters the dendrite","Calcium channels open","Neurotransmitter binds postsynaptic receptor","Myelin is shed"],a:1,why:"Ca2+ influx comes first, triggering neurotransmitter release."},
  {t:"mcq",q:"Gray matter consists of:",opts:["Myelinated axons","Cell bodies, e.g., cortex and nuclei","Only glia","Only dendrites"],a:1,why:"Cell bodies lack myelin and appear gray."},
  {t:"sata",q:"Select all that make up the PNS.",opts:["Cranial nerves","Spinal nerves","Brain","Ganglia"],a:[0,1,3],why:"The brain is CNS."},
  {t:"mcq",q:"A patient needs a drug that mimics 'rest and digest'. Which division does that target?",opts:["Sympathetic","Parasympathetic","Somatic","Central"],a:1,why:"Parasympathetic = rest and digest / feed and breed."},
  {t:"mcq",q:"Sensory neuron cell bodies grouped within a nerve are called a:",opts:["Nucleus","Ganglion","Plexus","Cortex"],a:1,why:"Ganglion."}
 ]}
]});
EXAMQ.push({t:"mcq",unit:2,mod:"n1",q:"Which of the following BEST describes the function of the axon hillock?",opts:["Collects information from other neurons","Site where signals summate to reach threshold and trigger an action potential","Insulates the axon","Site of synapse with the target organ","Contains the nucleus"],a:1,why:"The axon hillock is the trigger zone."});
EXAMQ.push({t:"mcq",unit:2,mod:"n1",q:"A patient presents with weakness and paralysis due to autoimmune destruction of myelin-forming cells in peripheral nerves. Which cells are affected, and which condition is this?",opts:["Oligodendrocytes; multiple sclerosis","Schwann cells; Guillain-Barré syndrome","Schwann cells; multiple sclerosis","Oligodendrocytes; Guillain-Barré syndrome","Astrocytes; Guillain-Barré syndrome"],a:1,why:"PNS myelin comes from Schwann cells; their degradation is Guillain-Barré."});
EXAMQ.push({t:"mcq",unit:2,mod:"n1",q:"Compared with an unmyelinated axon, a myelinated axon conducts faster because:",opts:["It depolarizes at every point along the axon","It depolarizes only at nodes of Ranvier","It contains more cell bodies","It has no action potentials","It has more dendrites"],a:1,why:"Saltatory conduction between nodes of Ranvier gives 3-120 m/s vs 0.5-2 m/s."});
EXAMQ.push({t:"mcq",unit:2,mod:"n1",q:"A tract in the brain appears white on dissection. Which statement is most accurate about it?",opts:["It is composed mainly of neuronal cell bodies","It is composed mainly of myelinated axons connecting regions","It is composed mainly of unmyelinated dendrites","It is the site where information is processed and stored","It contains only neuroglia"],a:1,why:"White matter = myelinated axons, the 'roads'; gray matter = cell bodies, the 'buildings'."});
EXAMQ.push({t:"mcq",unit:2,mod:"n1",q:"Which of the following is NOT part of the peripheral nervous system?",opts:["Cranial nerves","Dorsal root ganglia","Enteric plexuses","Sensory receptors","Spinal cord"],a:4,why:"The spinal cord is part of the CNS."});
EXAMQ.push({t:"mcq",unit:2,mod:"n1",q:"A runner is startled and has a rapid 'fight or flight' response. The relevant outflow originates from:",opts:["Cranial nerves III, VII, IX, X","Spinal segments T1-L2","Spinal segments S2-S4","Spinal segments C5-T1","Spinal segments L1-S4"],a:1,why:"Sympathetic outflow arises from T1-L2 via the sympathetic trunk; parasympathetic is craniosacral."});

MODULES.push({ id:"n2", num:6, unit:2, title:"Peripheral Nervous System",
 blurb:"Brain and spinal cord basics, meninges and spaces, spinal nerve structure, plexuses, the sympathetic trunk and cranial nerve overview.",
 badge:{name:"Nerve Network Navigator",icon:"🕸️"},
 lessons:[
 {id:"n2l1",title:"Brain and spinal cord",mins:8,flower:"🌺",items:[
  {t:"learn",title:"The brain",html:`<p>The <span class="key">cerebrum</span> is split into lobes and areas that control higher functioning and much of the integration/processing of signals from the periphery.</p>
<ul><li><b>Temporal lobe</b>: auditory, smell, and memory processing.</li>
<li><span class="key">Brainstem</span>: midbrain, pons, medulla oblongata (basal functions and pathways).</li>
<li><span class="key">Cerebellum</span>: many functions.</li></ul>`,slides:[6, 7],explain:`<p>The brain is the CNS's top floor. The <b>cerebrum</b> is the large wrinkled upper part, divided into <b>lobes</b>, each with specialties; it handles higher functions like thought, planning, and interpreting incoming signals. The <b>temporal lobe</b> (beside your temples/ears) handles hearing, smell and memory.</p>
<ul><li><b>Brainstem</b>: the stalk joining brain to spinal cord, made of <b>midbrain</b> (top), <b>pons</b> (middle bulge) and <b>medulla oblongata</b> (bottom). It runs basic life functions and is the highway for signals going up and down.</li>
<li><b>Cerebellum</b>: the "little brain" at the back, mostly coordination and balance of movement (the slide just says "many functions").</li></ul>
<p class="tip">Hook for the stem, top to bottom: M-P-M (Midbrain, Pons, Medulla), then the cord.</p>`},
  {t:"mcq",q:"Which lobe is listed as handling auditory, smell, and memory processing?",opts:["Temporal lobe","Cerebellum","Pons","Medulla oblongata"],a:0,why:"Temporal lobe: auditory, smell, memory."},
  {t:"order",title:"Brainstem from superior to inferior",steps:["Midbrain","Pons","Medulla oblongata"],why:"The brainstem runs midbrain, pons, medulla, then continues as the spinal cord."},
  {t:"learn",title:"Spinal cord regions and enlargements",html:`<ul><li>Regions: cervical, thoracic, lumbar, sacral, coccygeal.</li>
<li><span class="key">Cervical enlargement</span>: brachial plexus (<b>C5-T1</b>).</li>
<li><span class="key">Lumbar enlargement</span>: lumbosacral plexus (<b>L1-S4</b>).</li>
<li>Enlargements are levels where the limbs form and many nerves are required.</li>
<li>The cord ends at about <b>LI-LII</b> because of differential growth: the cord stops growing early but the body continues.</li></ul>`,slides:[8, 9],explain:`<p>The cord is divided into five regions named after the vertebrae next to them: cervical (neck), thoracic (chest), lumbar (low back), sacral, coccygeal (tailbone).</p>
<p>It bulges in two places because the <b>limbs</b> attach there. Arms and legs contain lots of muscle and skin, so lots of nerve cells are needed, making the cord thicker. The <b>cervical enlargement</b> feeds the arms through the <b>brachial plexus</b> (C5-T1); the <b>lumbar enlargement</b> feeds the legs through the <b>lumbosacral plexus</b> (L1-S4). A <b>plexus</b> is a braided network of nerves.</p>
<p>Odd fact: the adult cord ends high, near vertebra <b>L1-L2</b>, although the spine goes much lower. In development the vertebral column keeps growing longer than the cord (<b>differential growth</b>), so the cord ends up shorter than its bony canal.</p>
<p class="tip">Exam trap: cord ends at LI-LII, but the meningeal sac and nerves continue lower.</p>`},
  {t:"match",title:"Enlargements and plexuses",pairs:[["Cervical enlargement","Brachial plexus, C5-T1"],["Lumbar enlargement","Lumbosacral plexus, L1-S4"],["Spinal cord termination","About LI-LII"],["Reason cord ends high","Differential growth"]]},
  {t:"mcq",q:"The spinal cord terminates at about which vertebral level in the adult?",opts:["T12","LI-LII","SII","Coccyx"],a:1,why:"The cord ends around LI-LII due to differential growth."},
  {t:"mcq",q:"Why do the cervical and lumbar enlargements exist?",opts:["More CSF is stored there","The limbs form at these levels, requiring many nerves","The cord is wider because of extra meninges","They house the sympathetic trunk"],a:1,why:"Enlargements correspond to limb innervation."},
  {t:"learn",title:"Conus medullaris, cauda equina, filum terminale",html:`<ul><li><span class="key">Conus medullaris</span>: the tapered end of the cord (~LI-LII).</li>
<li><span class="key">Cauda equina</span> ('horse's tail'): spinal nerves to lower lumbar, sacral and coccygeal targets that leave the cord at its termination and descend.</li>
<li><span class="key">Filum terminale</span>: an extension of <b>pia mater</b>.</li></ul>`,slides:[9, 10],explain:`<p>Because the cord ends high but nerves still need to exit at lower vertebral levels, the leftover nerves have to travel down inside the canal.</p>
<ul><li><b>Conus medullaris</b>: the cone-shaped tip where the cord tapers off (about L1-L2).</li>
<li><b>Cauda equina</b> (Latin "horse's tail"): the bundle of lower lumbar, sacral and coccygeal nerve roots streaming down past the cord's end, looking like a ponytail.</li>
<li><b>Filum terminale</b> ("terminal thread"): a thin strand of <b>pia mater</b> (the innermost covering of the cord) that anchors the end of the cord downward.</li></ul>
<p class="tip">Hook: Conus = Cone; Cauda = Tail; Filum = Filament/thread. Exam trap: the filum is not nervous tissue; it's pia mater.</p>`},
  {t:"cloze",title:"Cord end",text:"The cord ends at the conus [[medullaris]]. The nerves below form the [[cauda equina]], and the [[filum terminale]] is an extension of pia mater.",bank:["medullaris","cauda equina","filum terminale","denticulate ligament","arachnoid"]},
  {t:"mcq",q:"The filum terminale is an extension of which layer?",opts:["Dura mater","Arachnoid mater","Pia mater","Epidural fat"],a:2,why:"Filum terminale = extension of pia mater."},
  {t:"mcq",q:"The cauda equina consists of:",opts:["Spinal nerves to lower lumbar, sacral and coccygeal areas descending below the cord's termination","Cranial nerves in the posterior fossa","The sympathetic trunk","Dorsal root ganglia only"],a:0,why:"Cauda equina = 'horse's tail' of descending lumbar/sacral/coccygeal nerves."}
 ]},
 {id:"n2l2",title:"Meninges, spaces and cord cross-section",mins:8,flower:"🌹",items:[
  {t:"learn",title:"Meninges",html:`<p>Tissue layers that wrap the brain and spinal cord to anchor and protect them.</p>
<table><tr><th>Layer</th><th>Meaning</th></tr>
<tr><td><span class="key">Pia mater</span></td><td>'Tender/soft mother'; innermost; forms denticulate ligaments</td></tr>
<tr><td><span class="key">Arachnoid mater</span></td><td>'Spider-like mother'</td></tr>
<tr><td><span class="key">Dura mater</span></td><td>'Tough/hard mother'; outermost</td></tr></table>
<p><span class="key">CSF</span> lies within the <b>subarachnoid space</b>.</p>
<p class="tip">Deep to superficial: Pia, Arachnoid, Dura (PAD).</p>`,slides:[11],explain:`<p><b>Meninges</b> are three membranes wrapping the brain and cord like layered packaging. Their Latin names are all "mother" because they were thought to nurture and protect the nervous tissue.</p>
<ul><li><b>Pia mater</b> (tender mother): thin, hugging the cord surface. It forms <b>denticulate ligaments</b>, little tooth-like side anchors that suspend the cord in its canal.</li>
<li><b>Arachnoid mater</b> (spider-like): a delicate web-like layer.</li>
<li><b>Dura mater</b> (tough mother): thick outer layer.</li></ul>
<p>The <b>subarachnoid space</b>, between pia and arachnoid, contains <b>CSF</b> (cerebrospinal fluid), the clear liquid cushioning the CNS.</p>
<p class="tip">Hook: PAD from inside out: Pia, Arachnoid, Dura. Exam trap: CSF is under the arachnoid (sub-arachnoid), not outside the dura.</p>`},
  {t:"order",title:"Meninges, deep to superficial",steps:["Pia mater","Subarachnoid space (CSF)","Arachnoid mater","Dura mater"],why:"CSF is in the subarachnoid space, between pia and arachnoid."},
  {t:"match",title:"Meninges",pairs:[["Pia mater","Tender/soft mother"],["Arachnoid mater","Spider-like mother"],["Dura mater","Tough/hard mother"],["Subarachnoid space","Contains CSF"]]},
  {t:"mcq",q:"Which meningeal structure forms the denticulate ligaments?",opts:["Dura mater","Arachnoid mater","Pia mater","Filum terminale"],a:2,why:"Denticulate ligaments are listed with pia mater."},
  {t:"learn",title:"Spaces and clinical procedures",html:`<ul><li><b>Subarachnoid space</b>: <span class="key">lumbar puncture</span> for CSF sample or <b>fast-acting</b> spinal anesthesia.</li>
<li><b>Epidural space</b>: target for <b>slow diffusion</b> of anesthetic.</li>
<li><b>Subdural space</b>: a <b>potential</b> space.</li>
<li>Lumbar spinous processes are more horizontal, so it is easier to pass a needle between them. Procedures are done below the cord's end (LII), in the region down to about SII.</li></ul>`,slides:[12],explain:`<p>Around the cord there are spaces, and where you put a needle determines what happens.</p>
<ul><li><b>Subarachnoid space</b> holds CSF. A <b>lumbar puncture</b> (spinal tap) puts a needle here to sample CSF, or to inject anesthetic that spreads in the fluid and works <b>fast</b>.</li>
<li><b>Epidural space</b> lies outside the dura (fat and vessels). Anesthetic here must seep through the dura, so it acts <b>slowly</b> (think labour epidurals).</li>
<li><b>Subdural space</b> is only a <b>potential</b> space: normally the layers touch, and a gap appears only with something like bleeding.</li></ul>
<p>Why go in at the lower lumbar spine? The cord has already ended (by LII), so a needle there only meets floating nerves of the cauda equina, which usually slip aside. Lumbar spinous processes also point more horizontally, leaving a wider gap to pass through.</p>
<p class="tip">Hook: Sub-arachnoid = fast; Epidural = slow.</p>`},
  {t:"sort",title:"Which space?",buckets:["Subarachnoid","Epidural","Subdural"],items:[["Lumbar puncture for CSF",0],["Fast-acting spinal anesthesia",0],["Slow diffusion of anesthetic",1],["Potential space",2]]},
  {t:"mcq",q:"An anesthetist needs rapid-onset spinal anesthesia. Where is the drug delivered?",opts:["Epidural space","Subarachnoid space","Subdural potential space","Pia mater"],a:1,why:"Subarachnoid targets give fast-acting anesthesia; epidural diffuses slowly."},
  {t:"mcq",q:"Why are lumbar punctures performed at lumbar levels below LII?",opts:["Spinous processes are horizontal, easing needle passage, and the cord has ended","The dura is thinner","There is no CSF higher up","The cauda equina is absent"],a:0,why:"Horizontal lumbar spinous processes ease access, and the cord ends around LII."},
  {t:"learn",title:"Spinal cord cross-section",html:`<p>Gray matter forms an 'H' around the central canal (containing CSF); white matter is outside.</p>
<ul><li><b>Posterior horn</b>: sensory input.</li><li><b>Lateral horn</b>: autonomic output (T1-L2).</li><li><b>Anterior horn</b>: motor output.</li></ul>
<p>Cell bodies of peripheral <b>motor</b> neurons lie in the anterior and lateral horns. Cell bodies of peripheral <b>sensory</b> neurons lie in the <span class="key">dorsal root ganglion</span>.</p>`,slides:[14, 18],explain:`<p>Slice the cord and you see a gray butterfly or "H" in the middle surrounded by white matter. The small hole at its centre is the <b>central canal</b>, which holds CSF.</p>
<ul><li><b>Posterior (dorsal) horn</b>: sensory information coming in.</li>
<li><b>Anterior (ventral) horn</b>: motor commands going out to skeletal muscle.</li>
<li><b>Lateral horn</b>: the small side bump with autonomic neurons, present only at T1-L2 (sympathetic).</li></ul>
<p>Motor cell bodies are inside the cord (anterior and lateral horns). Sensory cell bodies are <i>outside</i> the cord in the <b>dorsal root ganglion</b>, a swelling on the posterior root. Remember a ganglion is a cluster of cell bodies in the PNS.</p>
<p class="tip">Hook: Posterior = Perceive (sensory); Anterior = Action (motor). Exam trap: sensory cell bodies are never in the posterior horn; that horn only receives their axons.</p>`},
  {t:"match",title:"Cord locations",pairs:[["Posterior horn","Sensory input"],["Anterior horn","Motor output"],["Lateral horn","Autonomic output"],["Dorsal root ganglion","Sensory neuron cell bodies"]]},
  {t:"mcq",q:"Cell bodies of peripheral sensory neurons are found in the:",opts:["Anterior horn","Lateral horn","Dorsal root ganglion","Central canal"],a:2,why:"Sensory cell bodies are in the dorsal root ganglion, outside the cord."},
  {t:"sata",q:"Which horns contain cell bodies of peripheral motor neurons?",opts:["Anterior horn","Posterior horn","Lateral horn","Central canal"],a:[0,2],why:"Anterior (somatic motor) and lateral (autonomic) horns."}
 ]},
 {id:"n2l3",title:"Spinal nerves and plexuses",mins:9,flower:"🌷",items:[
  {t:"learn",title:"Anatomy of a spinal nerve",html:`<p>Spinal nerves extend from between vertebrae (intervertebral foramen) at each cord level. Think of a tree: roots/rootlets anchor to the cord, rami branch out.</p>
<table><tr><th>Structure</th><th>Content</th></tr>
<tr><td>Posterior (dorsal) rootlets/root (with dorsal root ganglion)</td><td><b>Sensory</b></td></tr>
<tr><td>Anterior (ventral) rootlets/root</td><td><b>Motor</b></td></tr>
<tr><td>Spinal nerve</td><td>Motor and sensory</td></tr>
<tr><td>Posterior (dorsal) ramus</td><td>Motor and sensory to intrinsic back muscles and skin of the back</td></tr>
<tr><td>Anterior (ventral) ramus</td><td>Motor and sensory to all other muscles and skin</td></tr></table>`,slides:[13, 15],explain:`<p>Picture a tree: <b>rootlets</b> are tiny threads that attach to the cord and merge into a <b>root</b>; the two roots then join to form the main <b>spinal nerve</b>, which splits into branches called <b>rami</b>.</p>
<ul><li><b>Posterior (dorsal) root</b>: sensory only, carries information into the cord, and has the dorsal root ganglion.</li>
<li><b>Anterior (ventral) root</b>: motor only, carries commands out.</li>
<li><b>Spinal nerve</b>: the roots have fused, so it carries both. It's very short, exiting through the <b>intervertebral foramen</b> (the gap between adjacent vertebrae).</li>
<li><b>Posterior ramus</b>: supplies the deep (intrinsic) back muscles and back skin. <b>Anterior ramus</b>: supplies everything else (limbs, front of the trunk).</li></ul>
<p class="tip">Hook: Dorsal = Data in (sensory); Ventral = Vroom out (motor). Exam trap: once past the roots, everything is mixed, so damage there causes both motor and sensory loss.</p>`},
  {t:"sort",title:"Sensory only, motor only, or both?",buckets:["Sensory only","Motor only","Motor and sensory"],items:[["Posterior root",0],["Anterior root",1],["Spinal nerve",2],["Anterior ramus",2],["Posterior ramus",2],["Posterior rootlets",0]]},
  {t:"mcq",q:"Which structure carries motor signals only?",opts:["Posterior ramus","Anterior root","Dorsal root","Spinal nerve"],a:1,why:"Anterior (ventral) roots are motor; dorsal roots sensory; spinal nerve and rami are mixed."},
  {t:"mcq",q:"The posterior ramus supplies:",opts:["All muscles and skin except the back","Intrinsic back muscles and skin of the back","Only skin of the back","Viscera"],a:1,why:"Posterior ramus: motor and sensory to intrinsic back muscles and skin of the back."},
  {t:"learn",title:"Efferent vs afferent, motor unit",html:`<ul><li>Motor = <b>efferent</b>; sensory = <b>afferent</b>.</li>
<li><b>Proximal to the spinal nerve</b>: posterior = sensory, anterior = motor.</li>
<li><b>In and distal to the spinal nerve</b> (both rami): motor AND sensory.</li>
<li><span class="key">Motor unit</span>: one neuron that innervates multiple muscle fibres.</li></ul>`,slides:[15, 16],explain:`<p>Two direction words to learn: <b>efferent</b> = signals Exiting the CNS (motor); <b>afferent</b> = signals Arriving at the CNS (sensory).</p>
<p>Where the nerve is mixed matters for diagnosis: <i>before</i> the roots join, the posterior root is purely sensory and the anterior root purely motor. From the spinal nerve onward (including both rami), each branch carries both kinds of fibre in one cable, like a two-way road.</p>
<p>A <b>motor unit</b> is one motor neuron plus all the muscle fibres it controls. When the neuron fires, all those fibres contract together. Fine movements (eye, fingers) use small units with few fibres; big postural muscles use large ones.</p>
<p class="tip">Exam trap: the motor unit is one neuron to many fibres, not the reverse.</p>`},
  {t:"cloze",title:"Roots and rami",text:"Posterior roots carry [[sensory]] signals, anterior roots carry [[motor]] signals, and all [[rami]] carry both.",bank:["sensory","motor","rami","autonomic"]},
  {t:"mcq",q:"A tumour compresses only the anterior roots of a spinal nerve. The expected deficit is:",opts:["Loss of sensation only","Loss of motor function only","Loss of both","No deficit"],a:1,why:"Anterior roots are motor only; sensory fibres travel in posterior roots."},
  {t:"mcq",q:"A motor unit is:",opts:["One muscle fibre and many neurons","One neuron innervating multiple muscle fibres","One spinal nerve","A dermatome and myotome pair"],a:1,why:"Motor unit = one neuron plus the muscle fibres it innervates."},
  {t:"learn",title:"Plexuses and dermatomes",html:`<p>Spinal nerves from different levels combine and separate within <span class="key">plexuses</span> to create peripheral nerves with fibres from multiple spinal levels.</p>
<ul><li><b>Dermatome</b>: skin innervated by a single spinal nerve.</li>
<li><b>Nerve map</b>: skin innervated by a single peripheral nerve.</li>
<li>Mixing of spinal nerves means a peripheral nerve (e.g., radial n., C5-T1) contributes to multiple dermatomes.</li>
<li>Brachial plexus: C5-T1 (cervical enlargement); lumbosacral plexus: L1-S4 (lumbar enlargement).</li></ul>`,slides:[17, 19],explain:`<p>Spinal nerves don't run straight to their targets. Near the limbs, their anterior rami weave together in a <b>plexus</b> (Latin for braid), swapping fibres, and then separate into named <b>peripheral nerves</b>. Think of several ropes being unravelled and re-twisted into new ropes.</p>
<p>The result: each peripheral nerve holds fibres from several spinal levels. Therefore two maps differ:</p>
<ul><li><b>Dermatome</b>: skin supplied by one spinal level (strips following the cord).</li>
<li><b>Peripheral nerve map</b>: skin supplied by one named nerve (patches following branches).</li></ul>
<p>Example: the radial nerve carries C5-T1 fibres, so it touches several dermatomes. This explains why a nerve injury and a root injury give different numbness patterns, a key clinical clue.</p>
<p class="tip">Hook: Dermatome = spinal Level; nerve map = named Nerve.</p>`},
  {t:"match",title:"Skin maps",pairs:[["Dermatome","Skin innervated by a single spinal nerve"],["Peripheral nerve map","Skin innervated by a single peripheral nerve"],["Plexus","Spinal nerves combine and separate"],["Radial n.","Carries fibres from C5-T1"]]},
  {t:"mcq",q:"Why does a single peripheral nerve supply skin from more than one dermatome?",opts:["Dermatomes do not exist in limbs","Spinal nerves mix within plexuses so peripheral nerves carry fibres from multiple levels","Sensory fibres bypass the plexus","Peripheral nerves are only motor"],a:1,why:"Plexus mixing creates nerves with multi-level fibres."}
 ]},
 {id:"n2l4",title:"Sympathetic trunk, ANS origins, cranial nerves",mins:8,flower:"🌻",items:[
  {t:"learn",title:"Sympathetic trunk",html:`<ul><li>Sympathetic neurons arise from the <b>lateral horn</b> of the cord at <b>T1-L2</b> and join the <span class="key">sympathetic trunk</span> (chain).</li>
<li>Neurons ascend or descend the trunk to carry signals throughout the periphery.</li>
<li>The trunk attaches to spinal nerves T1-L2 but extends above and below that.</li></ul>`,slides:[20, 21],explain:`<p>The sympathetic neurons start in the <b>lateral horn</b> at <b>T1-L2</b> only, but their targets are everywhere: head, limbs, organs. So they use a distribution highway: the <b>sympathetic trunk</b> (or chain), a pair of cords running alongside the vertebral column from the neck to the pelvis.</p>
<p>Fibres leave the cord, enter the trunk via the spinal nerves T1-L2, and then travel <b>up or down</b> the trunk to reach levels that have no sympathetic outflow of their own (such as the neck and lower pelvis). Think of a motorway with on-ramps only in the middle but exits all along its length.</p>
<p class="tip">Exam trap: the trunk is attached to spinal nerves only at T1-L2, yet it extends above and below that. It's part of the PNS, not the CNS.</p>`},
  {t:"mcq",q:"The sympathetic trunk is directly attached to spinal nerves of which levels?",opts:["C1-C8","T1-L2","L1-S4","S2-S4"],a:1,why:"Sympathetic outflow T1-L2, though the trunk extends above and below."},
  {t:"mcq",q:"Sympathetic cell bodies lie in which part of the spinal gray matter?",opts:["Posterior horn","Lateral horn","Anterior horn","Central canal"],a:1,why:"Lateral horn = autonomic output."},
  {t:"learn",title:"Parasympathetic: craniosacral",html:`<p>Parasympathetic outflow is <span class="key">craniosacral</span>: cranial nerves <b>III, VII, IX, X</b> and sacral levels <b>S2-S4</b>.</p>
<table><tr><th>Cranial nerve</th><th>PSNS role</th></tr>
<tr><td>Oculomotor (CN III)</td><td>Pupillary constriction</td></tr>
<tr><td>Facial (CN VII)</td><td>Tears (lacrimal gland); saliva (sublingual, submandibular); mucus (nasal cavity, palate)</td></tr>
<tr><td>Glossopharyngeal (CN IX)</td><td>Saliva (parotid gland)</td></tr>
<tr><td>Vagus (CN X)</td><td>Bronchi/lungs, heart, esophagus, foregut and midgut</td></tr></table>`,slides:[22, 25],explain:`<p>Parasympathetic fibres come from the two ends: the brain (travelling in four cranial nerves) and the sacral cord (S2-S4), hence "craniosacral".</p>
<ul><li><b>CN III (oculomotor)</b>: constricts the pupil (less light in).</li>
<li><b>CN VII (facial)</b>: tears from the lacrimal gland, saliva from the sublingual and submandibular glands, nasal/palate mucus.</li>
<li><b>CN IX (glossopharyngeal)</b>: saliva from the parotid gland (the cheek gland).</li>
<li><b>CN X (vagus)</b>: the "wandering" nerve to heart, lungs and the gut down to the midgut.</li></ul>
<p>Everything on this list is "rest and digest": watery eyes, saliva, slowed heart, active gut.</p>
<p class="tip">Hook: 3-7-9-10 = Pupil, Tears, Parotid, everything-else-Vagus. Exam trap: CN VII and IX both make saliva, but IX serves the parotid only.</p>`},
  {t:"match",title:"Parasympathetic cranial nerves",pairs:[["CN III","Pupillary constriction"],["CN VII","Tears; submandibular/sublingual saliva"],["CN IX","Parotid saliva"],["CN X","Heart, lungs, foregut and midgut"]]},
  {t:"mcq",q:"A patient has dilated pupil that cannot constrict. Which parasympathetic nerve is implicated?",opts:["CN VII","CN III","CN IX","CN X"],a:1,why:"Oculomotor n. (CN III) provides pupillary constriction."},
  {t:"mcq",q:"Which nerve provides parasympathetic production of saliva in the parotid gland?",opts:["Facial","Glossopharyngeal","Vagus","Oculomotor"],a:1,why:"CN IX to parotid; CN VII to sublingual/submandibular."},
  {t:"sort",title:"Sympathetic or parasympathetic origin?",buckets:["Sympathetic","Parasympathetic"],items:[["T1-L2",0],["Cranial nerves III, VII, IX, X",1],["Sacral S2-S4",1],["Via sympathetic trunk",0],["Craniosacral",1]]},
  {t:"learn",title:"Cranial nerves (overview)",html:`<p>Twelve pairs: I Olfactory, II Optic, III Oculomotor, IV Trochlear, V Trigeminal (V1 ophthalmic, V2 maxillary, V3 mandibular), VI Abducent, VII Facial, VIII Vestibulocochlear, IX Glossopharyngeal, X Vagus, XI Spinal accessory, XII Hypoglossal.</p>
<ul><li>General somatic: skeletal muscle, skin</li><li>General visceral: blood vessels, glands, intraocular muscles</li><li>Special somatic: vision, hearing</li><li>Special visceral: taste, smell</li></ul>
<p class="tip">The slides say not to memorize all of these; focus on III, VII, IX, X as parasympathetic.</p>`,slides:[23, 24],explain:`<p>Cranial nerves are the 12 pairs that exit directly from the brain (not the spinal cord) and are numbered in Roman numerals from front to back. A classic mnemonic helps with the list order.</p>
<p>Each nerve is made of one or more fibre types:</p>
<ul><li><b>General</b> = ordinary body functions: <b>somatic</b> (skeletal muscle, skin) and <b>visceral</b> (glands, vessels, internal smooth muscle such as the eye's iris).</li>
<li><b>Special</b> = the special senses: <b>special somatic</b> (vision, hearing) and <b>special visceral</b> (taste, smell).</li></ul>
<p>The trigeminal (CN V) has three sensory branches to the face: V1 near the eyes (ophthalmic), V2 the cheek/upper jaw (maxillary), V3 the lower jaw (mandibular).</p>
<p class="tip">Don't memorize everything: the slides stress CN III, VII, IX, X for parasympathetic. Exam trap: smell (I) is "special visceral", not somatic.</p>`},
  {t:"mcq",q:"The trigeminal nerve (CN V) divisions are:",opts:["Ophthalmic, maxillary, mandibular","Ophthalmic, facial, vagal","Optic, maxillary, mandibular","Maxillary, mandibular, hypoglossal"],a:0,why:"V1 ophthalmic, V2 maxillary, V3 mandibular."},
  {t:"flash",title:"Cranial nerve fibre categories",cards:[["Special somatic","Vision, hearing"],["Special visceral","Taste, smell"],["General visceral","Blood vessels, glands, intraocular muscles"],["General somatic","Skeletal muscle, skin"]]}
 ]},
 {id:"n2boss",title:"Peripheral Nervous System Boss Quiz",mins:7,flower:"👑",boss:true,items:[
  {t:"mcq",q:"Which spinal levels does the cervical enlargement serve?",opts:["C1-C4","C5-T1","T1-L2","L1-S4"],a:1,why:"Brachial plexus C5-T1."},
  {t:"mcq",q:"The lumbosacral plexus emerges from which levels (lumbar enlargement)?",opts:["T1-L2","C5-T1","L1-S4","S2-S4 only"],a:2,why:"L1-S4."},
  {t:"mcq",q:"Lumbar puncture targets which space?",opts:["Epidural","Subarachnoid","Subdural","Central canal"],a:1,why:"Subarachnoid space holds CSF."},
  {t:"mcq",q:"Which meningeal layer is the 'spider-like mother'?",opts:["Pia","Arachnoid","Dura","Epidural"],a:1,why:"Arachnoid mater."},
  {t:"mcq",q:"Which cell bodies lie in the dorsal root ganglion?",opts:["Somatic motor","Sensory","Sympathetic preganglionic","Parasympathetic"],a:1,why:"Peripheral sensory neurons."},
  {t:"mcq",q:"A lesion of the posterior ramus of a thoracic spinal nerve would affect:",opts:["Intercostal muscles","Intrinsic back muscles and skin of the back","Viscera","Sympathetic trunk"],a:1,why:"Posterior ramus supplies the back."},
  {t:"sata",q:"Select all structures that carry BOTH motor and sensory fibres.",opts:["Spinal nerve","Anterior ramus","Posterior root","Anterior root","Posterior ramus"],a:[0,1,4],why:"Roots are unimodal; spinal nerve and rami are mixed."},
  {t:"mcq",q:"Sympathetic neurons arise from which gray matter region and levels?",opts:["Anterior horn, C5-T1","Lateral horn, T1-L2","Posterior horn, L1-S4","Lateral horn, S2-S4"],a:1,why:"Lateral horn at T1-L2."},
  {t:"mcq",q:"Which cranial nerve provides parasympathetic supply to the heart and lungs?",opts:["CN III","CN VII","CN IX","CN X"],a:3,why:"Vagus n."},
  {t:"mcq",q:"The cord terminates at LII mainly because:",opts:["Differential growth of body vs cord","The dura ends","The filum terminale pulls it","Vertebrae fuse"],a:0,why:"Cord stops growing early; body continues."}
 ]}
]});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"The cauda equina is composed of:",opts:["Cranial nerve roots","Spinal nerves for lower lumbar, sacral and coccygeal areas that leave the cord at its termination","Extensions of dura mater","Dorsal root ganglia","Sympathetic chain ganglia"],a:1,why:"The 'horse's tail' of descending spinal nerves."});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"A patient requires slow diffusion of anesthetic for a prolonged analgesia. Which space is the target?",opts:["Subarachnoid","Subdural","Epidural","Central canal","Ventricle"],a:2,why:"Epidural = slow diffusion; subarachnoid = fast-acting."});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"A needle passes through a lumbar interspinous gap to sample CSF. Which structure is NOT directly necessary to cross before reaching CSF?",opts:["Dura mater","Arachnoid mater","Epidural space","Spinous process of a lumbar vertebra","Subarachnoid space"],a:3,why:"The needle passes between spinous processes, not through them; CSF is in the subarachnoid space deep to dura and arachnoid."});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"Which statement about spinal roots is correct?",opts:["The anterior root contains sensory fibres and a ganglion","The posterior root contains sensory fibres and the dorsal root ganglion","The posterior root is motor","Both roots are purely motor","The anterior root contains cell bodies of sensory neurons"],a:1,why:"Posterior roots with DRG are sensory; anterior roots are motor."});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"A patient has loss of sensation but preserved motor function in the territory of one spinal nerve; compression is most likely at the:",opts:["Anterior rootlets","Posterior rootlets/root","Anterior ramus","Posterior ramus","Spinal nerve itself"],a:1,why:"Only the posterior roots carry exclusively sensory fibres; compression elsewhere would affect both."});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"Which is TRUE of the sympathetic trunk?",opts:["It attaches to spinal nerves C1-S5","It attaches to spinal nerves T1-L2 but extends above and below","It carries the craniosacral outflow","It is part of the CNS","It arises from the anterior horn"],a:1,why:"Sympathetic outflow T1-L2 from the lateral horn; the trunk extends above and below."});
EXAMQ.push({t:"mcq",unit:2,mod:"n2",q:"A patient has loss of pupillary constriction and reduced tear production. Which parasympathetic cranial nerves are most plausibly involved?",opts:["CN III and CN VII","CN IX and CN X","CN VII and CN X","CN III and CN IX","CN X only"],a:0,why:"CN III = pupillary constriction; CN VII = tears from the lacrimal gland."});

MODULES.push({ id:'n3', num:7, unit:2, title:'Autonomic Nervous System',
blurb:'Homeostasis, sympathetic vs parasympathetic, two-neuron pathways, the sympathetic trunk, splanchnic nerves, referred pain and the four parasympathetic cranial nerves.',
badge:{name:'Homeostasis Hero',icon:'⚖️'},
lessons:[
{id:'n3l1',title:'Homeostasis & the Big Picture',mins:8,flower:'🌸',items:[
 {t:'learn',title:'Homeostasis',slides:[5, 6, 7],explain:`<p><b>Homeostasis</b> just means "keeping things steady". Your body wants temperature, blood pressure, blood sugar and so on to stay in a narrow safe range, like a thermostat that clicks the heating on or off without you thinking about it.</p>
<ul><li><b>Hypothalamus</b>: a small control-centre deep in the brain (part of the diencephalon). It is the "thermostat": it collects information, compares it to the set-point and sends out corrections.</li><li><b>Input (afferent)</b> = signals coming IN: pain from organs, stretch (e.g. a full stomach), and chemoreceptors (sensors that detect chemistry such as O<sub>2</sub>/CO<sub>2</sub>).</li><li><b>Output (efferent)</b> = orders going OUT to cardiac muscle, smooth muscle (gut, vessels) and glands.</li><li><b>Pituitary</b>: the hormone gland hanging below the hypothalamus on a stalk, the <b>infundibulum</b> ("funnel").</li></ul>
<p class="tip">Memory hook: hypothalamus = thermostat; infundibulum = funnel-shaped stalk. Exam trap: homeostasis is unconscious, so don't call it voluntary.</p>`,html:`<div class="defn"><span class="key">Homeostasis</span> (Greek: "similar state") = a neutral state maintained in the body for stability despite changing internal and external environments. It happens <b>unconsciously</b>.</div>
<p>Think of a thermostat (Google Nest) – the body constantly senses and adjusts.</p>
<p>The <span class="key">hypothalamus</span> (diencephalon) is the main brain area that receives and integrates sensory information and generates a motor response to maintain homeostasis.</p>
<ul><li><b>Input</b> from PNS: visceral pain, stretch receptors, chemoreceptors</li><li><b>Output</b> to: cardiac muscle, smooth muscle, glands</li></ul>
<p>The <span class="key">pituitary gland</span> is endocrine, attached to the hypothalamus by the <b>infundibulum</b>, and plays a large role in regulating mood.</p>`},
 {t:'mcq',q:'Which brain structure is the main area responsible for receiving and integrating sensory information to maintain homeostasis?',opts:['Cerebellum','Hypothalamus','Pituitary gland','Brainstem (medulla only)'],a:1,why:'The hypothalamus integrates visceral sensory input and drives motor output to cardiac muscle, smooth muscle and glands.'},
 {t:'mcq',q:'The pituitary gland is attached to the hypothalamus by the:',opts:['Infundibulum','Falx cerebri','Corpus callosum','Tentorium'],a:0,why:'The pituitary is an endocrine structure attached to the hypothalamus via the infundibulum.'},
 {t:'cloze',title:'Homeostasis',text:'Homeostasis is a [[neutral]] state maintained for [[stability]] despite changing environments, and is regulated mostly by the [[hypothalamus]].',bank:['neutral','stability','hypothalamus','thalamus','excited']},
 {t:'learn',title:'Functional overview of the nervous system',slides:[9, 10, 11],explain:`<p>Think of the nervous system as a family tree. <b>CNS</b> = brain + spinal cord. <b>PNS</b> = all the nerves outside it. The PNS carries information two ways: <b>sensory</b> (afferent, toward the CNS) and <b>motor</b> (efferent, away from the CNS). Each of those is split into <b>somatic</b> (body wall: skin, skeletal muscle) and <b>autonomic</b> (internal organs, "viscera").</p>
<ul><li><b>Somatic motor</b>: you decide to move your arm, so it is voluntary.</li><li><b>Autonomic motor</b>: your gut, heart and glands act without asking you, so it is involuntary. Targets are smooth muscle, cardiac muscle and glands.</li><li><b>Enteroceptors</b> are sensors inside the body (gut, vessels) reporting on the "inside".</li></ul>
<p>The autonomic motor side has two opposing teams: <b>sympathetic</b> (emergency/activity) and <b>parasympathetic</b> (rest and maintenance).</p>
<p class="tip">Hook: "Feed and breed / rest and digest" = parasympathetic; "fight, flight, fright" = sympathetic. Trap: autonomic is not only motor, it also has a sensory (visceral afferent) part.</p>`,html:`<p>CNS → PNS. The PNS has sensory and motor divisions, each with a somatic and autonomic part:</p>
<table><tr><th></th><th>Somatic</th><th>Autonomic</th></tr>
<tr><td><b>Sensory</b></td><td>Body (general sensory)</td><td>Viscera and enteroceptors</td></tr>
<tr><td><b>Motor</b></td><td>Skeletal muscle – <b>voluntary</b></td><td>Organs and glands (smooth muscle, cardiac muscle, glands) – <b>involuntary</b></td></tr></table>
<p>The autonomic motor system has two divisions:</p>
<ul><li><span class="key">Parasympathetic (PSNS)</span>: "rest and digest", "feed and breed"</li><li><span class="key">Sympathetic (SNS)</span>: "fight, flight, or fright"</li></ul>`},
 {t:'sort',title:'Somatic or autonomic?',buckets:['Somatic','Autonomic'],items:[['Voluntary control of skeletal muscle',0],['Involuntary control of organs and glands',1],['Visceral afferents',1],['General sensory from the body',0],['Smooth muscle, cardiac muscle and glands as targets',1],['Musculoskeletal movements and reflexes',0]]},
 {t:'match',title:'Match the division',pairs:[['Rest and digest','Parasympathetic'],['Feed and breed','Parasympathetic'],['Fight, flight, or fright','Sympathetic'],['Voluntary skeletal muscle','Somatic motor']]},
 {t:'learn',title:'Homeostasis example: standing up',slides:[8],explain:`<p>When you stand, gravity drags blood down into your legs, so less blood returns to the heart and pressure in the arteries dips. If nothing happened you would feel faint.</p>
<ul><li>The <b>carotid sinus</b> (a bulge in the neck artery) and <b>aortic arch</b> contain stretch sensors (baroreceptors). Less pressure = less stretch = they <b>fire less</b>.</li><li>The brainstem/hypothalamus read "firing is low, pressure is low".</li><li>The fix: turn the sympathetic dial UP and the parasympathetic dial DOWN, so the heart beats faster and harder and pressure rises.</li></ul>
<p>This is a <b>negative feedback loop</b>: the change is detected and the response pushes it back toward normal.</p>
<p class="tip">Hook: low pressure, low firing, so "go!" (SNS up). Exam trap: don't say receptor firing increases on standing. It decreases. The tip about muscles: squeezing leg muscles (somatic) pushes blood back up and nudges the autonomic system.</p>`,html:`<ol><li>Gravity pools blood in the lower limbs</li><li>Blood pressure drops in systemic arteries</li><li>Decreased firing rate of visceral receptors in the <b>carotid sinus</b> and <b>arch of the aorta</b></li><li>Integrated in <b>brainstem and hypothalamus</b></li><li>Efferent (motor) pathway: <b>↑SNS and ↓PSNS</b> activity</li><li>↑ heart rate and contraction force → ↑ blood pressure → balance restored</li></ol>
<p class="tip">Here the <b>somatic</b> system (lower limb muscles) is leveraged to force the autonomic system into a sympathetic state – so exercise can be used to manipulate autonomic state.</p>`},
 {t:'order',title:'Order the baroreceptor response to standing up',steps:['Blood pools in lower limbs due to gravity','Systemic arterial blood pressure drops','Firing of carotid sinus/aortic arch visceral receptors decreases','Brainstem and hypothalamus integrate the signal','↑SNS and ↓PSNS activity','Heart rate and force increase, blood pressure restored'],why:'A drop in BP reduces receptor firing; the CNS responds with sympathetic dominance to raise heart rate/force and restore BP.'},
 {t:'mcq',q:'On standing up quickly, visceral receptors in the carotid sinus and aortic arch change their firing rate how, and what is the efferent response?',opts:['Increase; ↑PSNS','Decrease; ↑SNS and ↓PSNS','Decrease; ↑PSNS and ↓SNS','Increase; ↑SNS'],a:1,why:'Blood pressure falls so receptor firing decreases, producing sympathetic activation (↑HR and contraction force).'},
 {t:'flash',title:'Quick flash',cards:[['Homeostasis','Neutral stable state maintained despite changing environments; unconscious'],['Hypothalamus','Integrates sensory input and generates motor response for homeostasis'],['Infundibulum','Attaches pituitary to hypothalamus'],['Carotid sinus & aortic arch','Sites of visceral receptors sensing blood pressure']]}
]},
{id:'n3l2',title:'Somatic vs Autonomic Pathways',mins:9,flower:'🌼',items:[
 {t:'learn',title:'One neuron vs two neurons',slides:[12, 13],explain:`<p>Count the "relay runners" between the CNS and the target.</p>
<ul><li><b>Somatic motor</b>: one neuron runs the whole way from the CNS to the skeletal muscle. Direct line.</li><li><b>Autonomic motor</b>: two neurons. Neuron 1 (<b>presynaptic/preganglionic</b>) starts in the CNS and runs to a <b>ganglion</b> (a cluster of nerve cell bodies outside the CNS, like a relay station). There it hands over to neuron 2 (<b>postsynaptic/postganglionic</b>), which runs on to the organ.</li></ul>
<p>"Pre" and "post" refer to the ganglion: before it and after it. <b>Visceral afferents</b> bring sensation from organs; <b>efferents</b> carry commands out.</p>
<p><b>Sympathetic trunk</b>: a pair of chains running beside the vertebral column that all sympathetic fibres use. Parasympathetic is "craniosacral": it leaves from the brain (cranial nerves) and the sacral cord, and never uses the trunk.</p>
<p class="tip">Common mistake: thinking the postsynaptic neuron is in the CNS. It is in the PNS.</p>`,html:`<ul><li><b>Somatic motor</b> = a <b>one-neuron</b> system (CNS → skeletal muscle).</li>
<li><b>Visceral (autonomic) motor</b> = <b>two neurons</b>: a <span class="key">presynaptic (preganglionic)</span> neuron from the CNS, and a <span class="key">postsynaptic (postganglionic)</span> neuron in the PNS. They synapse in a <b>ganglion</b>.</li></ul>
<p>Autonomic: visceral afferents (sensory input from organs) and visceral efferents (motor output to smooth muscle, cardiac muscle, glands).</p>
<p class="tip">All sympathetic innervation travels through the <b>sympathetic trunk</b>, whereas the parasympathetic system is <b>craniosacral</b> – cranial nerves and sacral spinal nerves.</p>`},
 {t:'mcq',q:'How many neurons are in the somatic motor pathway to skeletal muscle?',opts:['One','Two','Three','Four'],a:0,why:'Somatic motor is a one-neuron system; visceral motor uses a presynaptic and postsynaptic neuron.'},
 {t:'mcq',q:'The postsynaptic (postganglionic) neuron of the autonomic system has its cell body and axon located in the:',opts:['Spinal cord lateral horn','Brainstem','PNS','Anterior horn'],a:2,why:'The presynaptic neuron begins in the CNS; the postsynaptic neuron lies in the PNS, after the ganglion.'},
 {t:'sort',title:'One or two neurons?',buckets:['One neuron (somatic)','Two neurons (autonomic)'],items:[['Quadriceps contraction',0],['Heart rate increase',1],['Salivation',1],['Biceps brachii flexing the elbow',0],['Bronchoconstriction',1]]},
 {t:'learn',title:'Neurotransmitters & fibre lengths',slides:[12, 13, 36],explain:`<p>A <b>neurotransmitter</b> is the chemical messenger released at a synapse. <b>ACh</b> = acetylcholine. Norepinephrine is noradrenaline, the "adrenaline family" chemical.</p>
<ul><li>Both systems: neuron 1 is <b>myelinated</b> (fatty insulation, so it looks white) and releases ACh.</li><li>Neuron 2 is <b>unmyelinated</b> (grey). In the SNS it releases (nor)epinephrine; in the PSNS it releases ACh.</li></ul>
<p><b>Why the lengths differ:</b> the ganglion's position decides it. Sympathetic ganglia sit in the trunk right next to the spinal column, so neuron 1 is short and neuron 2 has a long way to go. Parasympathetic ganglia sit in or next to the target organ, so neuron 1 is long and neuron 2 is tiny.</p>
<p class="tip">Hook: SNS = "short then long", PSNS = "long then short". Only ONE synapse in the whole system (sympathetic neuron 2 onto the target) uses norepinephrine; everything else is ACh. (Sympathetic sweat glands are a known exception in textbooks, but keep to the slide rule for the exam.)</p>`,html:`<table><tr><th></th><th>SNS</th><th>PSNS</th></tr>
<tr><td>Presynaptic neuron</td><td><b>Short</b>; myelinated; ACh</td><td><b>Long</b>; myelinated; ACh</td></tr>
<tr><td>Ganglion</td><td>Near CNS (sympathetic trunk/paravertebral)</td><td>Near/in target organ</td></tr>
<tr><td>Postsynaptic neuron</td><td><b>Long</b>; unmyelinated; <b>(nor)epinephrine</b></td><td><b>Short</b>; unmyelinated; ACh</td></tr></table>
<ul><li>Presynaptic neurons <b>begin in the CNS</b>, are <b>myelinated</b> (white).</li><li>Postsynaptic neurons <b>synapse in periphery</b> with a neuron from the CNS and are <b>unmyelinated</b>.</li><li>Length of the presynaptic neuron dictates where the peripheral ganglia will be found.</li></ul>
<p class="tip">Epinephrine = adrenaline. SNS: short–long, ends with norepinephrine. PSNS: long–short, ACh throughout.</p>`},
 {t:'mcq',q:'Which neurotransmitter is released by the postsynaptic neuron of the sympathetic system onto the target organ?',opts:['Acetylcholine','(Nor)epinephrine','Dopamine','Serotonin'],a:1,why:'Sympathetic postsynaptic neurons release (nor)epinephrine; all other autonomic synapses use acetylcholine.'},
 {t:'match',title:'Fibre features',pairs:[['SNS presynaptic','Short, myelinated, ACh'],['SNS postsynaptic','Long, unmyelinated, norepinephrine'],['PSNS presynaptic','Long, myelinated, ACh'],['PSNS postsynaptic','Short, unmyelinated, ACh']]},
 {t:'sata',q:'Select ALL true statements about presynaptic autonomic neurons.',opts:['They begin in the CNS','They are myelinated','They are unmyelinated','They release norepinephrine in the SNS','They release acetylcholine'],a:[0,1,4],why:'Presynaptic neurons begin in the CNS, are myelinated and release ACh in both SNS and PSNS.'},
 {t:'mcq',q:'Why do sympathetic ganglia lie close to the CNS while parasympathetic ganglia lie near the target?',opts:['SNS presynaptic neurons are short, PSNS presynaptic neurons are long','SNS uses ACh only','PSNS postsynaptic neurons are long','Sympathetic fibres are unmyelinated'],a:0,why:'The length of the presynaptic neuron dictates ganglion location: short in SNS, long in PSNS.'},
 {t:'learn',title:'Effects of the autonomic system',slides:[14],explain:`<p>Easiest way to learn this table is to picture the situation. <b>Sympathetic</b> = being chased by a bear: heart pounds, airways open wide (<b>bronchodilation</b>) to get more oxygen, pupils widen to see more, blood is sent to muscles and away from digestion, you sweat to cool down, and your hair stands on end. Digestion, tears and saliva aren't a priority, so they drop.</p>
<p><b>Parasympathetic</b> = relaxing after dinner: heart slows, airways narrow a bit (<b>bronchoconstriction</b>), pupils constrict, saliva, tears and gut movement go up, urination is encouraged.</p>
<ul><li>Sweat glands and hair erection get <b>sympathetic supply only</b>, so no parasympathetic opposite exists.</li></ul>
<p class="tip">Hook: "Point and shoot": P = erection (point), S = ejaculation (shoot). Exam trap: constrict/dilate are easy to flip. Sympathetic dilates pupils and bronchi; parasympathetic constricts both.</p>`,html:`<table><tr><th>Target</th><th>SNS</th><th>PSNS</th></tr>
<tr><td>Heart</td><td>↑ rate and contraction force</td><td>↓ rate and contraction force</td></tr>
<tr><td>Lungs</td><td>Bronchodilation, faster breathing</td><td>Bronchoconstriction, slower breathing</td></tr>
<tr><td>Digestive</td><td>↓ activity; blood diverted to periphery</td><td>↑ activity</td></tr>
<tr><td>Saliva/tears</td><td>↓</td><td>↑</td></tr>
<tr><td>Pupil</td><td>Dilation</td><td>Constriction</td></tr>
<tr><td>Reproductive/urinary</td><td>Orgasm/ejaculation; ↓ urinary function</td><td>Arousal/erection; ↑ urinary function</td></tr>
<tr><td>Sweat glands, hair erection</td><td><b>SNS only</b></td><td>–</td></tr></table>
<p class="tip">Point and shoot: "P"arasympathetic = erection ("point"), "S"ympathetic = ejaculation ("shoot").</p>`},
 {t:'sort',title:'SNS or PSNS effect?',buckets:['Sympathetic','Parasympathetic'],items:[['Bronchodilation',0],['Pupillary constriction',1],['↑ digestive activity',1],['Sweat gland secretion',0],['↑ saliva and tear production',1],['Hair erection',0],['↓ urinary function',0],['Erection',1]]},
 {t:'mcq',q:'A runner has dilated pupils, rapid breathing, increased heart rate and decreased digestion. Which system dominates?',opts:['Sympathetic','Parasympathetic','Somatic only','Enteric only'],a:0,why:'These are all sympathetic ("fight, flight, fright") effects.'},
 {t:'cloze',title:'Neurotransmitters',text:'Both PSNS neurons release [[acetylcholine]], while the SNS postsynaptic neuron releases [[(nor)epinephrine]], where epinephrine is also called [[adrenaline]].',bank:['acetylcholine','norepinephrine','adrenaline','dopamine']}
]},
{id:'n3l3',title:'The Sympathetic System',mins:9,flower:'🌻',items:[
 {t:'learn',title:'Origin & the sympathetic trunk',slides:[15, 16, 17],explain:`<p>Picture a cross-section of the spinal cord: gray matter shaped like a butterfly or "H". It has <b>horns</b> (projections): the <b>posterior horn</b> receives sensory input, the <b>anterior horn</b> sends out somatic motor commands to skeletal muscle, and the small <b>lateral horn</b> in between sends out sympathetic commands.</p>
<p>The lateral horn exists only in the segments <b>T1 to L2</b> (thoracic 1 to lumbar 2), which is why the sympathetic system is called <b>thoracolumbar</b>.</p>
<ul><li>Fibres enter the <b>sympathetic trunk</b> (a chain of ganglia running vertically beside the vertebrae) only between T1 and L2.</li><li>Once in, they can travel up or down the chain, like getting on a motorway at a few on-ramps but exiting at any junction. This is how the neck and pelvis are reached despite having no lateral horn.</li><li>The trunk's ganglia are <b>paravertebral</b> ("para" = beside).</li></ul>
<p class="tip">Trap: above T1 and below L2 fibres can only EXIT the trunk, never enter.</p>`,html:`<p>Spinal cord gray matter ("H"): <b>posterior horn</b> = sensory input; <b>lateral horn</b> = <span class="key">sympathetic output</span>; <b>anterior horn</b> = motor output.</p>
<div class="defn">Sympathetic neurons arise from the <b>lateral horn</b> of the spinal cord at levels <b>T1–L2</b> and join the <span class="key">sympathetic trunk</span> (chain).</div>
<ul><li>All sympathetic fibres enter the trunk between <b>T1 and L2</b>.</li><li>Neurons then ascend or descend the trunk to reach the whole periphery.</li><li>Above T1 and below L2, signals can only <b>leave</b> the trunk, not join it.</li><li>The trunk contains <span class="key">paravertebral ganglia</span> (sympathetic ganglia).</li></ul>
<p class="tip">Sympathetic = thoracolumbar outflow (T1–L2). Parasympathetic = craniosacral.</p>`},
 {t:'mcq',q:'Sympathetic preganglionic neurons arise from which part of the spinal cord gray matter, at which levels?',opts:['Anterior horn, C1–C8','Lateral horn, T1–L2','Posterior horn, T1–L2','Lateral horn, S2–S4'],a:1,why:'Sympathetic output arises from the lateral horn at T1–L2.'},
 {t:'mcq',q:'At which spinal level can sympathetic fibres NOT enter the sympathetic trunk?',opts:['T1','T6','L2','L4'],a:3,why:'Input is only between T1 and L2; below L2 (e.g. L4) fibres can only leave the trunk.'},
 {t:'sort',title:'Horns of the spinal cord',buckets:['Posterior horn','Lateral horn','Anterior horn'],items:[['Sensory input',0],['Sympathetic output',1],['Somatic motor output',2]]},
 {t:'learn',title:'Rami communicantes',slides:[17, 18],explain:`<p>A <b>ramus communicans</b> (plural rami communicantes) is a short "connecting branch" between a spinal nerve and the sympathetic trunk. There are two kinds, named by colour, which comes from myelin.</p>
<ul><li><b>White ramus</b>: carries the myelinated (shiny white) presynaptic fibre INTO the trunk. Because fibres only enter at T1 to L2, white rami exist only at those levels.</li><li><b>Gray ramus</b>: carries the unmyelinated (duller gray) postsynaptic fibre OUT of the trunk and back onto the spinal nerve, so it can travel to sweat glands, hair muscles and vessels in the body wall and limbs. Every spinal level needs this, so gray rami are present at <b>all levels</b>.</li></ul>
<p>Think of the trunk as a train station: white rami = the entrance, gray rami = the exits.</p>
<p class="tip">Hook: White = Within (in), Gray = Going out. Exam trap: at L5 or C5 you will find gray rami but NO white rami.</p>`,html:`<ul><li>Because presynaptic neurons are myelinated they create <span class="key">white rami communicantes</span> where they <b>enter</b> the sympathetic trunk.</li>
<li>Unmyelinated postsynaptic neurons create <span class="key">gray rami communicantes</span> as they <b>leave</b> the trunk (to join spinal nerves).</li>
<li>No input above T1 or below L2 → <b>no white rami</b> in those areas (gray rami are present at all levels).</li></ul>
<p class="tip">White = Within (enter, myelinated). Gray = Going out (unmyelinated).</p>`},
 {t:'match',title:'Rami',pairs:[['White ramus communicans','Myelinated presynaptic fibres entering trunk'],['Gray ramus communicans','Unmyelinated postsynaptic fibres leaving trunk'],['Paravertebral ganglia','Ganglia of the sympathetic trunk'],['Lateral horn','Origin of sympathetic presynaptic neurons']]},
 {t:'mcq',q:'White rami communicantes are found only between which levels?',opts:['C1–T1','T1–L2','L2–S4','C1–S4'],a:1,why:'White rami only exist where presynaptic fibres enter the trunk, T1–L2.'},
 {t:'mcq',q:'A surgeon examines the sympathetic trunk at the L5 level. Which would be present?',opts:['White ramus only','Gray ramus only','Both white and gray rami','Neither'],a:1,why:'Below L2 there are no white rami, but gray rami exist at every level to distribute postsynaptic fibres.'},
 {t:'learn',title:'Sympathetic pathways',slides:[19, 20, 21, 22],explain:`<p>Once a presynaptic fibre has entered the trunk through a white ramus, it has four choices. Remember that the synapse can happen wherever the cell body of neuron 2 is.</p>
<ol><li><b>Same level</b>: synapse in the ganglion right there, leave by a gray ramus to the body wall.</li><li><b>Up or down</b>: travel along the trunk first (needed to reach head/neck or legs), synapse, then leave.</li><li><b>Pass straight through</b> without synapsing and leave as a <b>splanchnic nerve</b> ("splanchnic" = relating to the viscera/guts). It synapses later in a <b>prevertebral ganglion</b> (lying in front of the vertebral column, in the abdomen) and then supplies abdominal and pelvic organs.</li><li><b>To the suprarenal (adrenal) gland</b>: the fibre runs there and synapses directly on the gland's cells, which act like a postsynaptic neuron and release adrenaline into the blood.</li></ol>
<p class="tip">Hook: paravertebral = trunk (beside); prevertebral = abdomen (in front). Trap: splanchnic nerves are PRESYNAPTIC, so they are myelinated.</p>`,html:`<p>A presynaptic neuron can take one of these routes:</p>
<ol><li><b>Synapse at the same level</b> it entered and exit via a gray ramus.</li><li><b>Ascend or descend</b> the trunk, synapse at a different level, then exit.</li><li><b>Exit without synapsing</b> as <span class="key">splanchnic nerves</span> → synapse in <span class="key">prevertebral ganglia</span> in the abdomen → supply abdominal and pelvic organs.</li><li>Follow splanchnic nerves all the way to the <b>suprarenal (adrenal) glands</b> and synapse directly within them.</li></ol>`},
 {t:'order',title:'Typical sympathetic pathway to a body-wall target at the same level',steps:['Presynaptic neuron leaves lateral horn','Enters trunk via white ramus communicans','Synapses in paravertebral ganglion','Postsynaptic neuron exits via gray ramus communicans','Reaches target organ'],why:'Myelinated pre fibre enters through a white ramus, synapses in the trunk, and the unmyelinated post fibre leaves via a gray ramus.'},
 {t:'mcq',q:'Splanchnic nerves carry which fibres and where do they synapse?',opts:['Postsynaptic fibres; in paravertebral ganglia','Presynaptic fibres; in prevertebral ganglia','Parasympathetic fibres; in the sympathetic trunk','Somatic fibres; in dorsal root ganglia'],a:1,why:'Presynaptic sympathetic fibres exit the trunk without synapsing and synapse in prevertebral ganglia in the abdomen.'},
 {t:'mcq',q:'Sympathetic presynaptic neurons that synapse directly within an organ without a ganglion go to the:',opts:['Heart','Liver','Suprarenal (adrenal) gland','Spleen'],a:2,why:'Presynaptic neurons follow splanchnic nerves to the suprarenal glands and synapse directly in them.'},
 {t:'sata',q:'Which are possible fates of a sympathetic presynaptic neuron entering the trunk?',opts:['Synapse at the same level','Ascend and synapse at a higher level','Descend and synapse at a lower level','Exit as a splanchnic nerve without synapsing','Exit via a cranial nerve'],a:[0,1,2,3],why:'Sympathetic fibres can synapse at the same, higher or lower trunk levels or pass as splanchnic nerves; they do not use cranial nerves.'},
 {t:'learn',title:'Referred pain',slides:[23, 24],explain:`<p>Pain from an organ is often felt somewhere else on the body surface. That's <b>referred pain</b>.</p>
<p>Why? Visceral sensory (afferent) fibres from the organ enter the spinal cord at the same levels, by the same posterior route, as the ordinary sensory fibres from skin and muscle. Your brain has had a lifetime of pain signals from the skin and almost none from the organs, so when a signal arrives on that shared pathway it assumes the skin or limb is the source. Like a phone line shared by two houses: the operator guesses the more common caller.</p>
<ul><li><b>Heart example</b>: in a heart attack (<b>myocardial infarction</b>, MI; heart muscle starved of oxygen) the pain is felt in the chest and arm, because those areas send sensation into the same spinal levels, C4 to T5.</li><li>The <b>cardiac plexus</b> is the network of nerves around the heart carrying both sympathetic and parasympathetic fibres.</li></ul>
<p class="tip">Trap: the arm isn't injured and doesn't get any heart nerves. It's a brain misinterpretation.</p>`,html:`<p>Visceral afferent (sensory) fibres that accompany the sympathetic system follow the <b>posterior pathway with somatosensory fibres</b>. The brain can't tell the difference and interprets the pain as coming from the periphery (somatic).</p>
<p><b>Heart example:</b> myocardial infarction (↓ oxygen = pain) via the cardiac plexus (mixed SNS and PSNS) is referred to the same spinal levels as the <b>chest and upper limb (C4–T5)</b>.</p>
<p class="tip">Heart pain → chest, left arm: the brain misreads visceral signals as somatic.</p>`},
 {t:'mcq',q:'A patient having a myocardial infarction feels pain in the chest and upper limb. This is explained by:',opts:['Visceral afferents following the same pathway as somatic sensory fibres','Phrenic nerve compression','Vagal motor fibres','Gray rami of the brachial plexus carrying motor signals'],a:0,why:'Referred pain: visceral afferents travel with somatic sensory fibres to the same spinal levels (C4–T5), confusing the brain.'},
 {t:'cloze',title:'Referred pain',text:'Visceral pain from the heart is referred to spinal levels [[C4]] to [[T5]] because visceral afferents follow the [[posterior]] pathway with somatosensory fibres.',bank:['C4','T5','posterior','anterior','T12']}
]},
{id:'n3l4',title:'The Parasympathetic System',mins:9,flower:'🌺',items:[
 {t:'learn',title:'Craniosacral outflow',slides:[25, 26, 27],explain:`<p>"Outflow" means where the motor fibres leave the CNS. The parasympathetic leaves from two ends: the <b>cranium</b> (brain, through cranial nerves) and the <b>sacrum</b> (the lower spinal cord, via pelvic nerves from S2 to S4). The middle of the cord (the sympathetic's territory) isn't involved. Hence "craniosacral".</p>
<ul><li>Only <b>four</b> of the 12 cranial nerves carry parasympathetic fibres: III, VII, IX, X.</li><li>None of these pass through the sympathetic trunk. The two systems have separate wiring.</li></ul>
<p>The tip lists cranial nerve fibre types. <b>General</b> = found throughout the body; <b>special</b> = special senses. <b>Somatic</b> = body wall, <b>visceral</b> = organs/glands. So "special somatic" = vision, hearing; "special visceral" = taste, smell.</p>
<p class="tip">Hook: chant "3, 7, 9, 10" for III, VII, IX, X. Trap: S2 to S4 not S1 to S2. Sympathetic is T1 to L2; keep them apart.</p>`,html:`<div class="defn">The <span class="key">parasympathetic system is craniosacral</span>: its components arise from the <b>brain (cranial nerves)</b> and the <b>sacral region (pelvic nerves, S2–S4)</b>.</div>
<p>Of the 12 pairs of cranial nerves, four carry parasympathetic fibres:</p>
<ul><li><b>CN III</b> – Oculomotor</li><li><b>CN VII</b> – Facial</li><li><b>CN IX</b> – Glossopharyngeal</li><li><b>CN X</b> – Vagus</li></ul>
<p class="tip">The parasympathetic neurons are not found in the sympathetic trunk. Cranial nerve fibre types: general somatic (skeletal muscle, skin), general visceral (blood vessels, glands, intraocular muscles), special somatic (vision, hearing), special visceral (taste, smell).</p>`},
 {t:'mcq',q:'Which spinal levels give rise to the sacral parasympathetic outflow (pelvic nerves)?',opts:['S1–S2','S2–S4','S3–S5','L2–S1'],a:1,why:'The pelvic nerves arise from S2–S4.'},
 {t:'sata',q:'Select the cranial nerves that carry parasympathetic fibres.',opts:['Oculomotor (CN III)','Trochlear (CN IV)','Facial (CN VII)','Glossopharyngeal (CN IX)','Vagus (CN X)'],a:[0,2,3,4],why:'The four parasympathetic cranial nerves are III, VII, IX and X.'},
 {t:'learn',title:'Oculomotor & Facial nerves',slides:[28, 29],explain:`<p>Both nerves are named for what they do: <b>oculomotor</b> = "eye mover"; <b>facial</b> = face.</p>
<ul><li><b>CN III</b>: the parasympathetic part makes the circular <b>sphincter pupillae</b> squeeze, so the pupil gets small (bright light, or reading up close). A sphincter is a ring-shaped muscle that closes an opening. Its other job is moving the eye.</li><li>The opposite muscle, the radial <b>dilator pupillae</b>, widens the pupil and is sympathetic (fibres from T1 to T4, going up through the trunk).</li><li><b>CN VII</b> has three jobs: parasympathetic secretion (tears from the <b>lacrimal gland</b>; saliva from the <b>submandibular</b> and <b>sublingual</b> glands under the jaw/tongue; mucus in the nose and palate), taste from the front of the tongue, and movement of facial-expression muscles.</li></ul>
<p class="tip">Hook: Facial = "tears and 2 under the tongue/jaw", parotid is NOT facial (that's IX). Trap: sphincter pupillae = constriction = parasympathetic.</p>`,html:`<p><span class="key">Oculomotor n. (CN III)</span>: parasympathetic to the <b>sphincter pupillae</b> → <b>pupillary constriction</b> (lets less light in). It also supplies muscles that move the eye.</p>
<p>The opposite, pupillary dilation (<b>dilator pupillae</b>, lets more light in), is sympathetic via the sympathetic trunk <b>T1–T4</b>.</p>
<p><span class="key">Facial n. (CN VII)</span>:</p>
<ul><li>Parasympathetic: <b>lacrimal gland</b> (tears), <b>sublingual and submandibular glands</b> (saliva), mucosal glands of the nose and palate (mucus)</li><li>Special sensory: taste to <b>anterior tongue</b></li><li>Motor: muscles of facial expression</li></ul>`},
 {t:'match',title:'Eye & facial nerve targets',pairs:[['Sphincter pupillae','Constriction (PSNS, CN III)'],['Dilator pupillae','Dilation (SNS, T1–T4)'],['Lacrimal gland','Tears (CN VII)'],['Submandibular & sublingual glands','Saliva (CN VII)']]},
 {t:'mcq',q:'Which nerve provides taste sensation to the anterior tongue?',opts:['Glossopharyngeal','Facial','Vagus','Oculomotor'],a:1,why:'The facial nerve carries special sensory taste from the anterior tongue; CN IX supplies the posterior 1/3.'},
 {t:'mcq',q:'In bright light the pupil constricts. This is mediated by:',opts:['Dilator pupillae via the sympathetic trunk','Sphincter pupillae via CN III','Sphincter pupillae via CN VII','Dilator pupillae via CN III'],a:1,why:'CN III parasympathetic fibres contract sphincter pupillae.'},
 {t:'learn',title:'Glossopharyngeal & Vagus nerves',slides:[30, 31, 34],explain:`<p><b>Glossopharyngeal</b> literally means "tongue-throat". CN IX handles the back third of the tongue (taste and touch) and the pharynx muscles. Its parasympathetic job is just one gland: the <b>parotid</b> (the big saliva gland in front of the ear). It also carries sensory information from the <b>carotid sinus</b>, the pressure sensor from the standing-up example.</p>
<p><b>Vagus</b> means "wanderer": it travels from the brainstem down through the neck and chest into the abdomen. It supplies most of the body's parasympathetic fibres: bronchi and lungs, heart, esophagus, and the <b>foregut and midgut</b> (the embryonic names for roughly the stomach to the first two-thirds of the transverse colon). Parasympathetic supply to the hindgut comes from the sacral pelvic nerves instead.</p>
<p class="tip">Hook: IX = parotid; X = everything else in the chest and abdomen ("X marks the spot, the vagus wanders everywhere"). Trap: the parotid is IX, while submandibular and sublingual are VII.</p>`,html:`<p><span class="key">Glossopharyngeal n. (CN IX)</span>:</p>
<ul><li>Parasympathetic to the <b>parotid gland</b> (saliva)</li><li>Visceral sensory from the <b>carotid sinus</b> (chemoreceptors – help sense blood pressure changes)</li><li>General and special sensory to <b>posterior 1/3 of tongue</b></li><li>Motor to pharyngeal muscles</li></ul>
<p><span class="key">Vagus n. (CN X)</span> ("wanderer"): the most widespread cranial nerve, providing the vast majority of parasympathetic innervation: <b>bronchi and lungs, heart, esophagus, foregut and midgut</b> (thoracic and upper abdominal organs).</p>
<table><tr><th>Nerve</th><th>Parasympathetic function</th></tr><tr><td>CN III</td><td>Pupillary constriction</td></tr><tr><td>CN VII</td><td>Tears, saliva (sublingual, submandibular), mucus</td></tr><tr><td>CN IX</td><td>Saliva (parotid)</td></tr><tr><td>CN X</td><td>Bronchi/lungs, heart, esophagus, foregut, midgut</td></tr></table>`},
 {t:'sort',title:'Which cranial nerve?',buckets:['CN III','CN VII','CN IX','CN X'],items:[['Pupillary constriction',0],['Lacrimal gland tears',1],['Parotid gland saliva',2],['Heart and lungs',3],['Submandibular gland',1],['Carotid sinus visceral sensory',2],['Midgut',3]]},
 {t:'mcq',q:'Which gland receives its parasympathetic supply from the glossopharyngeal nerve?',opts:['Submandibular','Sublingual','Parotid','Lacrimal'],a:2,why:'CN IX → parotid; CN VII → submandibular, sublingual and lacrimal glands.'},
 {t:'mcq',q:'A patient has dry eyes and reduced submandibular saliva but normal parotid saliva. Which nerve is most likely affected?',opts:['Glossopharyngeal','Facial','Vagus','Oculomotor'],a:1,why:'CN VII supplies lacrimal, submandibular and sublingual glands; the parotid is CN IX.'},
 {t:'learn',title:'Leveraging the interface: breathing',slides:[32],explain:`<p>Most of the autonomic system can't be controlled by will, but breathing is special: it's automatic, yet you can take over consciously. That makes it a "doorway" between the voluntary (somatic) and involuntary (autonomic) systems.</p>
<ul><li>The <b>phrenic nerves</b> are somatic motor nerves driving the <b>diaphragm</b>, the dome-shaped muscle under the lungs that does most of the work of breathing.</li><li>Slow, deep diaphragmatic breaths are thought to increase activity in the <b>vagus nerve</b> (the main parasympathetic nerve), shifting you toward "rest and digest" and counteracting long-term stress, which is chronic sympathetic activity.</li></ul>
<p>Similarly, exercise or standing uses somatic muscles to push the autonomic system toward sympathetic. So voluntary actions can be used to tune the involuntary state.</p>
<p class="tip">Hook: phrenic (somatic, moves diaphragm) leads to vagus (parasympathetic, calms). Trap: the phrenic nerve is not the one that calms you; it is the voluntary lever.</p>`,html:`<p>The <b>phrenic nn.</b> (somatic, voluntary) supply the <b>diaphragm</b>, the primary muscle of respiration. Conscious deep breathing can leverage the somatic system (phrenic n.) to activate the parasympathetic system (<b>vagus n.</b>) and reduce harmful effects of chronic stress (sympathetic activity).</p>
<p class="tip">Somatic phrenic → ↑ vagal (PSNS) tone → calm. Likewise standing up/exercise uses the somatic system to drive the SNS.</p>`},
 {t:'mcq',q:'Mindful breathing is proposed to reduce stress by linking which two nerves?',opts:['Phrenic (somatic) → vagus (parasympathetic)','Vagus → phrenic','Oculomotor → vagus','Facial → phrenic'],a:0,why:'Voluntary breathing uses the phrenic n. (somatic) to activate parasympathetic vagal activity.'},
 {t:'cloze',title:'Vagus',text:'The vagus n. is CN [[X]], meaning [[wanderer]], and supplies the heart, lungs, esophagus, foregut and [[midgut]].',bank:['X','wanderer','midgut','hindgut','IX']},
 {t:'flash',title:'Parasympathetic summary',cards:[['CN III','Pupillary constriction'],['CN VII','Tears, saliva (sublingual/submandibular), nasal & palate mucus'],['CN IX','Parotid saliva; carotid sinus sensory'],['CN X','Bronchi, lungs, heart, esophagus, foregut, midgut'],['Pelvic nn. S2–S4','Sacral parasympathetic outflow']]}
]},
{id:'n3boss',title:'Autonomic Nervous System Boss Quiz',mins:8,flower:'👑',boss:true,items:[
 {t:'mcq',q:'Which is the correct combination for the sympathetic system?',opts:['Long presynaptic, short postsynaptic, ACh only','Short presynaptic, long postsynaptic, norepinephrine at target','Long presynaptic, long postsynaptic, ACh','Short presynaptic, short postsynaptic, norepinephrine only'],a:1,why:'SNS: short myelinated presynaptic (ACh), long unmyelinated postsynaptic ((nor)epinephrine).'},
 {t:'mcq',q:'Where do white rami communicantes exist?',opts:['At all spinal levels','Only T1–L2','Only cervical levels','Only S2–S4'],a:1,why:'White rami exist only where sympathetic presynaptic fibres enter the trunk (T1–L2).'},
 {t:'mcq',q:'A tumour compresses the sympathetic trunk at T1–T4. Which finding is expected?',opts:['Impaired pupillary dilation','Impaired pupillary constriction','Loss of taste on anterior tongue','Loss of tears via CN VII'],a:0,why:'Sympathetic fibres to dilator pupillae travel via the trunk (T1–T4).'},
 {t:'sata',q:'Which are sympathetic effects?',opts:['Bronchodilation','Increased heart rate','Increased digestive activity','Sweat gland secretion','Pupillary constriction'],a:[0,1,3],why:'SNS: bronchodilation, ↑HR, sweating. Digestion ↑ and pupil constriction are PSNS.'},
 {t:'mcq',q:'Splanchnic nerves contain mainly:',opts:['Presynaptic sympathetic fibres that synapse in prevertebral ganglia','Postsynaptic sympathetic fibres','Somatic motor fibres','Cranial parasympathetic fibres'],a:0,why:'They exit the trunk without synapsing and synapse in prevertebral ganglia.'},
 {t:'mcq',q:'Which nerve provides the vast majority of parasympathetic innervation to thoracic and upper abdominal organs?',opts:['Facial','Oculomotor','Glossopharyngeal','Vagus'],a:3,why:'The vagus ("wanderer") is the most widespread parasympathetic cranial nerve.'},
 {t:'mcq',q:'A patient with an MI reports pain in the chest and upper limb. This is because:',opts:['Visceral afferents follow somatic sensory pathways at C4–T5','The heart has somatic innervation','Phrenic fibres carry heart pain','Gray rami carry pain to the brain'],a:0,why:'Referred pain results from visceral afferents following the same posterior pathway as somatosensory fibres.'},
 {t:'order',title:'Order a sympathetic pathway to a splanchnic-supplied abdominal organ',steps:['Presynaptic neuron arises from lateral horn (T1–L2)','Enters sympathetic trunk via white ramus','Passes through trunk without synapsing','Exits as splanchnic nerve','Synapses in prevertebral ganglion','Postsynaptic neuron reaches abdominal/pelvic organ'],why:'Splanchnic nerves are presynaptic and synapse in prevertebral ganglia, not in the trunk.'},
 {t:'match',title:'Cranial nerve – parasympathetic target',pairs:[['CN III','Sphincter pupillae'],['CN VII','Lacrimal gland'],['CN IX','Parotid gland'],['CN X','Heart and lungs']]},
 {t:'mcq',q:'Which statement about the parasympathetic system is correct?',opts:['It is thoracolumbar','It uses cranial nerves and S2–S4','It runs through the sympathetic trunk','Its postsynaptic neurons are long and release norepinephrine'],a:1,why:'PSNS is craniosacral (CN III, VII, IX, X and pelvic nerves S2–S4).'}
]}
]});

EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'Which of the following is the correct pairing of nerve and parasympathetic target?',opts:['CN III – parotid gland','CN VII – sphincter pupillae','CN IX – parotid gland','CN X – lacrimal gland','CN VII – heart'],a:2,why:'CN IX supplies the parotid; CN III the sphincter pupillae; CN VII lacrimal/submandibular/sublingual; CN X the heart and lungs.'});
EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'A patient has difficulty constricting the pupil in bright light, but can still dilate it. Which structure is most likely impaired?',opts:['Sympathetic trunk at T1–T4','Oculomotor parasympathetic fibres','Facial nerve','Glossopharyngeal nerve','Dilator pupillae muscle'],a:1,why:'Constriction (sphincter pupillae) is parasympathetic via CN III; dilation is intact via sympathetic fibres.'});
EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'Which statement about rami communicantes is correct?',opts:['White rami contain unmyelinated postsynaptic fibres','Gray rami are found only at T1–L2','White rami are found only between T1 and L2','Gray rami carry presynaptic fibres into the trunk','White rami are present at all spinal levels'],a:2,why:'White rami (myelinated presynaptic, entering) exist only T1–L2; gray rami (unmyelinated postsynaptic, leaving) exist at all levels.'});
EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'A person upright suddenly stands and blood pools in the legs. Which response restores blood pressure?',opts:['↑ firing of carotid sinus receptors and ↑PSNS','↓ firing of carotid sinus and aortic arch receptors, ↑SNS and ↓PSNS','↑ firing of carotid sinus receptors, ↓SNS','↓ firing of receptors with ↑PSNS to the heart','Direct somatic motor response by the phrenic nerve'],a:1,why:'Reduced baroreceptor firing leads to sympathetic dominance: ↑ heart rate and contraction force.'});
EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'Which is NOT a feature of a sympathetic presynaptic neuron?',opts:['Arises from the lateral horn','Is myelinated','Releases acetylcholine','Is relatively short','Is unmyelinated and releases norepinephrine'],a:4,why:'Presynaptic neurons are myelinated and release ACh; unmyelinated norepinephrine-releasing neurons are postsynaptic.'});
EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'Which statement correctly contrasts somatic and autonomic motor pathways?',opts:['Both use a single neuron','Somatic uses one neuron to skeletal muscle; autonomic uses two neurons to smooth muscle, cardiac muscle or glands','Somatic uses two neurons; autonomic uses one','Autonomic targets skeletal muscle voluntarily','Both are under voluntary control'],a:1,why:'Somatic motor is a one-neuron voluntary system; visceral motor has presynaptic and postsynaptic neurons and is involuntary.'});
EXAMQ.push({t:'mcq',unit:2,mod:'n3',q:'A patient with myocardial ischaemia reports pain in the left upper limb and chest. Which explanation is best?',opts:['The heart is innervated by somatic nerves of the arm','Visceral afferents travel with somatic sensory fibres, so the brain mislocalizes pain to C4–T5 dermatomes','Vagus nerve fibres synapse in the brachial plexus','Phrenic nerve carries cardiac pain','Gray rami deliver pain to the arm'],a:1,why:'Referred pain: visceral and somatic afferents share the posterior pathway; the brain interprets the pain as coming from the periphery.'});

MODULES.push({ id:'u1', num:8, unit:3, title:'Axilla', blurb:'Regions, bones and joints of the upper limb, the axilla\'s walls and contents, compartments, and the arteries and veins of the limb.', badge:{name:'Armpit Ace',icon:'💪'},
lessons:[
{id:'u1l1',title:'Regions, Bones & Joints',mins:7,flower:'🌷',items:[
 {t:'learn',title:'Regions of the upper limb',slides:[5, 6],explain:`<p>Anatomists describe the arm in order from the body outward: <b>proximal</b> = closer to the trunk, <b>distal</b> = further away (your shoulder is proximal to your hand). Each stretch has its own name so everyone points to the same place.</p>
<ul><li><b>Shoulder</b> = where the limb joins the trunk; the <b>axillary region</b> is simply the armpit.</li><li><b>Arm</b> strictly means shoulder-to-elbow only. <b>Forearm</b> = elbow-to-wrist. (Everyday speech blurs this; anatomy doesn't.)</li><li><b>Cubital fossa</b> = the shallow dip on the <i>front</i> of the elbow (where blood is drawn). "Fossa" just means hollow.</li><li><b>Carpal</b> = wrist; <b>dorsum</b> = back (of the hand), <b>palmar</b> = the palm side.</li></ul>
<p class="tip">Hook: cubital = "cube-ital", think elbow (Latin <i>cubitum</i> = elbow). Exam trap: "arm" does not include the forearm.</p>`,html:`<p>The upper limb is studied <b>proximal to distal</b> by region:</p>
<table><tr><th>Segment</th><th>Regions / notes</th></tr>
<tr><td>Shoulder</td><td>Deltoid region, scapular region, axillary region (armpit)</td></tr>
<tr><td>Arm</td><td>Anterior and posterior compartments</td></tr>
<tr><td>Elbow</td><td>Cubital fossa</td></tr>
<tr><td>Forearm</td><td>Anterior and posterior compartments</td></tr>
<tr><td>Wrist</td><td>Carpal region</td></tr>
<tr><td>Hand</td><td>Palmar and dorsal; back of hand = dorsum</td></tr></table>
<p class="tip">The axillary region = armpit. The cubital fossa = front of the elbow.</p>`},
 {t:'match',title:'Match the region to its location',pairs:[['Axillary region','Armpit'],['Cubital fossa','Elbow'],['Carpal region','Wrist'],['Deltoid region','Shoulder']]},
 {t:'mcq',q:'Which region of the upper limb is known as the "armpit"?',opts:['Cubital region','Axillary region','Scapular region','Deltoid region'],a:1,why:'The axillary region is the armpit; the cubital fossa is at the elbow.'},
 {t:'learn',title:'Bones & joints defining the segments',slides:[4, 6],explain:`<p>The segments aren't arbitrary: each boundary is a <b>joint</b> (where two bones meet), and the joint's name comes from the bones forming it.</p>
<ul><li><b>Sternoclavicular joint</b>: collarbone (clavicle) meets the top of the breastbone (manubrium of the sternum). This is the only bony attachment of the whole limb to the trunk, so everything hangs off it.</li><li><b>Shoulder joint</b>: ball of the humerus in the socket of the scapula (shoulder blade). Divides shoulder from arm.</li><li><b>Elbow joint</b>: humerus meets the two forearm bones, radius and ulna. Divides arm from forearm.</li><li><b>Wrist joint</b>: forearm bones meet the small <b>carpal</b> bones, which in turn meet the <b>metacarpals</b> (the hand's long bones). Divides forearm from hand.</li></ul>
<p class="tip">Hook: "shoulder = humerus + scapula; elbow = humerus + 2 forearm bones". Trap: the sternoclavicular joint is not the shoulder joint.</p>`,html:`<ul><li><b>Clavicle</b> articulates with the <b>manubrium of the sternum</b> → <span class="key">sternoclavicular joint</span>.</li>
<li><b>Humerus + scapula</b> (proximally) → <span class="key">shoulder joint</span>; separates shoulder from arm.</li>
<li><b>Humerus + radius and ulna</b> (distally) → <span class="key">elbow joint</span>; separates arm from forearm.</li>
<li><b>Carpal bones</b> fill the space between radius/ulna (proximally) and metacarpals (distally) → <span class="key">wrist joint</span>; separates forearm from hand.</li></ul>`},
 {t:'cloze',title:'Fill in the joints',text:'The clavicle meets the manubrium at the [[sternoclavicular]] joint. The humerus and scapula form the [[shoulder]] joint, which separates the shoulder from the [[arm]].',bank:['sternoclavicular','shoulder','arm','forearm','acromioclavicular']},
 {t:'mcq',q:'Which joint distinguishes the arm from the forearm?',opts:['Shoulder joint','Wrist joint','Elbow joint','Sternoclavicular joint'],a:2,why:'The humerus articulates distally with the radius and ulna at the elbow, dividing arm from forearm.'},
 {t:'mcq',q:'The carpal bones lie between which two sets of bones?',opts:['Humerus and radius/ulna','Radius/ulna and metacarpals','Metacarpals and phalanges','Scapula and humerus'],a:1,why:'Carpals sit between the radius/ulna proximally and the metacarpals distally, forming the wrist.'},
 {t:'order',title:'Order the segments from proximal to distal',steps:['Shoulder','Arm','Elbow','Forearm','Wrist','Hand'],why:'The lecture runs through the limb proximal to distal.'},
 {t:'sort',title:'Which joint separates the two segments?',buckets:['Shoulder joint','Elbow joint','Wrist joint'],items:[['Shoulder from arm',0],['Arm from forearm',1],['Forearm from hand',2],['Humerus + radius/ulna',1],['Humerus + scapula',0],['Carpals between forearm and metacarpals',2]]}
]},
{id:'u1l2',title:'Borders & Contents of the Axilla',mins:8,flower:'🌻',items:[
 {t:'learn',title:'The axilla: a neurovascular funnel',slides:[7, 8],explain:`<p>Think of the axilla as the <b>doorway between the neck/chest and the arm</b>. Everything that feeds or drains the limb (arteries, nerves, veins, lymph vessels) has to pass through it, packed together and cushioned by fat.</p>
<ul><li><b>Neurovascular</b> = nerves + blood vessels. <b>Funnel</b> = a narrow passage that bunches them together.</li><li>There are three such funnels down the limb: the axilla (biggest, at the top), the cubital fossa (elbow) and the carpal tunnel (wrist). Each is a spot where structures are crowded, so injury or swelling there matters.</li><li>It is shaped like a triangular pyramid. The "start" is the first rib (the top entrance from the neck) and the "end" is the lower edge of teres major, a muscle on the back of the shoulder blade.</li></ul>
<p class="tip">Hook: "Axilla = Airport hub; the biggest of 3". Exam trap: the other two funnels are cubital fossa and carpal tunnel, not the deltopectoral groove.</p>`,html:`<div class="defn">The <span class="key">axilla</span> is a triangular, muscle-bordered space in the armpit. It is the <b>largest of three neurovascular "funnels"</b> in the upper limb (the others: <b>cubital fossa</b> and <b>carpal tunnel</b>).</div>
<p><b>Starts</b> at the <b>first rib</b>; <b>ends</b> at the <b>teres major m.</b></p>`},
 {t:'mcq',q:'The axilla begins at the ____ and ends at the ____.',opts:['clavicle; latissimus dorsi','first rib; teres major','second rib; teres minor','scapular spine; pectoralis major'],a:1,why:'It starts at the first rib and ends at teres major (where axillary a. becomes brachial a.).'},
 {t:'mcq',q:'Which is NOT one of the three neurovascular "funnels" of the upper limb?',opts:['Axilla','Cubital fossa','Carpal tunnel','Deltopectoral groove'],a:3,why:'The three funnels are axilla (largest), cubital fossa and carpal tunnel.'},
 {t:'learn',title:'Walls of the axilla',slides:[8],explain:`<p>Picture the axilla as a tent with four walls. You are looking from the armpit inward:</p>
<ul><li><b>Front wall</b>: the chest muscles, <b>pectoralis major</b> (superficial) and <b>pectoralis minor</b> (deeper). When you grab the front fold of your armpit you're holding these.</li><li><b>Back wall</b>: the muscles of the back fold: <b>subscapularis</b> (on the front face of the scapula), <b>teres major</b> and <b>latissimus dorsi</b> (the big back muscle).</li><li><b>Inner (medial) wall</b>: <b>serratus anterior</b>, the finger-shaped muscle lying on the ribs, i.e. the side of your chest.</li><li><b>Outer (lateral) wall</b>: just the <b>humerus</b>, at a groove (intertubercular groove) at the top of the bone. Bone, not muscle.</li></ul>
<p class="tip">Hook: Anterior = Pecs; Medial = Serratus; Posterior = S-T-L. Trap: pec minor is anterior, not medial; the lateral wall is bone.</p>`,html:`<table><tr><th>Wall</th><th>Structures</th></tr>
<tr><td>Anterior</td><td>Pectoralis major + pectoralis minor mm.</td></tr>
<tr><td>Posterior</td><td>Subscapularis, teres major, latissimus dorsi mm.</td></tr>
<tr><td>Medial</td><td>Serratus anterior m. (over the ribs)</td></tr>
<tr><td>Lateral</td><td>Humerus (intertubercular groove)</td></tr></table>
<p class="tip">Anterior = Pecs. Medial = Serratus. Posterior = three "S/T/L" muscles: Subscapularis, Teres major, Latissimus dorsi.</p>`},
 {t:'sort',title:'Sort each muscle to its axillary wall',buckets:['Anterior wall','Posterior wall','Medial wall'],items:[['Pectoralis major',0],['Pectoralis minor',0],['Subscapularis',1],['Teres major',1],['Latissimus dorsi',1],['Serratus anterior',2]]},
 {t:'mcq',q:'Which muscle forms the medial wall of the axilla?',opts:['Subscapularis','Pectoralis minor','Serratus anterior','Latissimus dorsi'],a:2,why:'Serratus anterior lies on the thoracic wall and forms the medial wall.'},
 {t:'sata',q:'Select ALL muscles that form the posterior wall of the axilla.',opts:['Subscapularis','Teres major','Pectoralis minor','Latissimus dorsi','Serratus anterior'],a:[0,1,3],why:'Posterior wall: subscapularis, teres major, latissimus dorsi. Pec minor is anterior; serratus anterior is medial.'},
 {t:'learn',title:'Contents of the axilla',slides:[9, 10],explain:`<p>The axilla is a crowded passageway, and traffic runs in two directions:</p>
<ul><li><b>Axillary sheath</b>: a tube of connective tissue wrapping the <b>axillary artery</b> (blood in), <b>axillary vein</b> (blood out) and the <b>brachial plexus</b> (the nerve network supplying the limb). Think of a cable bundle in one conduit.</li><li><b>Axillary lymph nodes</b>: little filter stations which collect lymph (tissue fluid) from the arm and breast. This is why breast cancer is checked here.</li><li><b>Fat</b> packs around everything as padding.</li><li>Tendons of <b>biceps brachii</b> (both heads) and <b>coracobrachialis</b> pass through its outer side on the way to the arm.</li></ul>
<p>Direction: artery and nerves go <i>into</i> the limb; vein and lymph go <i>out</i> toward the chest.</p>
<p class="tip">Trap: the cephalic vein is superficial, not in the sheath; biceps tendons pass through but aren't in the sheath.</p>`,html:`<p>The axilla is packed with <b>fat</b> surrounding the major vessels, nerves and lymph nodes.</p>
<ul><li><b>Axillary sheath:</b> axillary a., axillary v., brachial plexus</li><li><b>Axillary lymph nodes</b></li><li><b>Tendons</b> of anterior arm compartment muscles passing through the lateral part: <b>biceps brachii</b> (long and short heads) and <b>coracobrachialis</b></li></ul>
<p><b>Direction of travel:</b> axillary a. and brachial plexus go <b>from neck/thorax into the limb</b>; axillary v. and lymph <b>drain from the limb into the thorax</b>.</p>`},
 {t:'mcq',q:'Which structures drain from the upper limb into the thorax via the axilla?',opts:['Axillary artery and brachial plexus','Axillary vein and lymph nodes','Axillary artery and axillary vein','Brachial plexus and lymph nodes'],a:1,why:'Artery and plexus travel into the limb; vein and lymphatics drain out of it.'},
 {t:'sata',q:'Select ALL structures contained in the axillary sheath.',opts:['Axillary artery','Axillary vein','Brachial plexus','Cephalic vein','Biceps tendon'],a:[0,1,2],why:'The axillary sheath contains the axillary a., axillary v. and brachial plexus. The cephalic v. is superficial.'},
 {t:'cloze',title:'Axilla contents',text:'The axilla is packed with [[fat]] around the vessels, nerves and [[lymph nodes]]. Tendons of the [[biceps brachii]] and coracobrachialis pass through its lateral part.',bank:['fat','lymph nodes','biceps brachii','triceps brachii','bone']},
 {t:'flash',title:'Axilla quick facts',cards:[['Largest neurovascular funnel of the upper limb?','Axilla'],['Anterior wall','Pectoralis major + minor'],['Medial wall','Serratus anterior'],['Lateral wall','Humerus (intertubercular groove)'],['Anterior-arm tendons in the axilla','Biceps brachii (long and short heads), coracobrachialis']]}
]},
{id:'u1l3',title:'Compartments',mins:7,flower:'🌼',items:[
 {t:'learn',title:'What is a compartment?',slides:[12],explain:`<p>Imagine several sausages wrapped in tough cling film: each wrapped group is a <b>compartment</b>. In the limb, the wrapping is <b>fascia</b>, a strong sheet of connective tissue. Fascia hardly stretches, which helps muscles push against something firm and so produce more force.</p>
<ul><li><b>Synergistic</b> = working together (syn = together, ergon = work). Muscles in the same compartment do similar jobs on the joint they cross, such as all being flexors.</li><li>Because they do a similar job, they usually share one <b>neurovascular bundle</b>: one main nerve, artery and vein serve the whole group. That's why knowing a compartment tells you its nerve.</li></ul>
<p class="tip">Hook: Compartment = same wrap, same job, same nerve. Trap: compartments are not antagonistic; opposite actions sit in <i>different</i> compartments.</p>`,html:`<div class="defn"><span class="key">Compartment</span> = a group of muscles contained by thick layers of connective tissue (<b>fascia</b>), which resists stretch and contributes to force production.</div>
<ul><li>Muscles in a compartment typically act <b>synergistically</b> on the joint(s) they cross.</li><li>Each compartment usually has its own <b>neurovascular bundle</b> (a common artery, vein and nerve).</li></ul>`},
 {t:'mcq',q:'Which is a typical shared feature of muscles within one compartment?',opts:['Different nerves, opposite actions','Same nerve and similar (synergistic) action','Same origin but different arteries','Antagonistic actions on one joint'],a:1,why:'Muscles of a compartment usually share a neurovascular bundle and act synergistically.'},
 {t:'cloze',title:'Compartment basics',text:'Compartments are bound by thick [[fascia]], and muscles within them act [[synergistically]]. Each compartment generally has its own common nerve, artery and [[vein]].',bank:['fascia','synergistically','vein','antagonistically','tendon']},
 {t:'learn',title:'Upper limb compartments',slides:[13, 14],explain:`<p>The arm and the forearm are each split by fascia into a <b>front (anterior)</b> and <b>back (posterior)</b> compartment. In the upper limb, the front side mostly does <b>flexion</b> (bending, e.g. curling a dumbbell) and the back side <b>extension</b> (straightening).</p>
<ul><li><b>Arm front</b>: flexors (biceps), supplied by <b>musculocutaneous n.</b></li><li><b>Arm back</b>: extensors (triceps), supplied by <b>radial n.</b></li><li><b>Forearm front</b>: wrist/finger flexors plus <b>pronation</b> (turning the palm down). Supplied by <b>median n.</b> (middle part) and <b>ulnar n.</b> (medial part, pinky side).</li><li><b>Forearm back</b>: extensors plus <b>supination</b> (turning the palm up, as if holding soup). Supplied by <b>radial n.</b></li></ul>
<p class="tip">Hook: "Radial = Rear (posterior), always". Trap: forearm front also pronates, so flexion and pronation go together.</p>`,html:`<p>The <b>arm</b> and <b>forearm</b> are each divided into <b>anterior</b> and <b>posterior</b> compartments. In the upper limb, flexion = anterior movement; extension = posterior movement.</p>
<table><tr><th>Segment</th><th>Compartment</th><th>Action</th><th>Nerve</th></tr>
<tr><td>Arm</td><td>Anterior</td><td>Flexion</td><td>Musculocutaneous n.</td></tr>
<tr><td>Arm</td><td>Posterior</td><td>Extension</td><td>Radial n.</td></tr>
<tr><td>Forearm</td><td>Anterior</td><td>Flexion and pronation</td><td>Median n. (middle part), ulnar n. (medial part)</td></tr>
<tr><td>Forearm</td><td>Posterior</td><td>Extension and supination</td><td>Radial n.</td></tr></table>`},
 {t:'match',title:'Match the compartment to its main nerve',pairs:[['Anterior arm','Musculocutaneous n.'],['Posterior arm','Radial n.'],['Posterior forearm','Radial n.'],['Anterior forearm (middle part)','Median n.'],['Anterior forearm (medial part)','Ulnar n.']]},
 {t:'sort',title:'Flexor or extensor side?',buckets:['Flexion (anterior)','Extension (posterior)'],items:[['Anterior arm compartment',0],['Posterior arm compartment',1],['Anterior forearm: also pronation',0],['Posterior forearm: also supination',1]]},
 {t:'mcq',q:'The posterior compartments of the arm and forearm are both supplied by which nerve?',opts:['Median','Ulnar','Radial','Musculocutaneous'],a:2,why:'Radial n. supplies the posterior compartments of both arm and forearm.'},
 {t:'mcq',q:'Which movements are produced by the anterior compartment of the forearm?',opts:['Extension and supination','Flexion and pronation','Flexion and supination','Extension and pronation'],a:1,why:'Anterior forearm = flexion and pronation; posterior = extension and supination.'},
 {t:'learn',title:'Compartment syndrome',slides:[15],explain:`<p>Remember that the fascial wrap does not stretch. If something inside the compartment swells (after a fracture, crush injury, or a tight cast) there's nowhere for it to go, so <b>pressure rises</b> like inflating a balloon in a box.</p>
<ul><li>That pressure squeezes the small vessels and nerves first, cutting off blood flow and causing severe pain, often out of proportion to the injury. Muscle can die if it isn't relieved.</li><li><b>Fasciotomy</b> = a surgeon cuts open the fascia to release the pressure ("-otomy" = cutting into).</li><li>Common in the <b>leg</b> and <b>forearm</b>. Intense overuse (e.g. suddenly ramping up running) can cause a milder, chronic version that usually doesn't need surgery.</li></ul>
<p class="tip">Hook: Tight wrapper + swelling = pressure = pain. Trap: the problem is the unyielding fascia, not a failure of veins or bone.</p>`,html:`<p>Fascial sheaths <b>do not stretch</b>, so swelling or bleeding inside a compartment raises pressure.</p>
<ol><li>Trauma or ↑ blood flow</li><li>Swelling or bleeding</li><li>Increased pressure</li><li>Compressed blood and nerve supply → <b>pain</b></li></ol>
<ul><li>Most common sites: <b>leg</b> and <b>forearm</b>.</li><li>Acute cases need surgery: <span class="key">fasciotomy</span>. Overuse/rapidly intensified exercise can also cause it, without needing surgery.</li></ul>`},
 {t:'order',title:'Order the events of compartment syndrome',steps:['Trauma or increased blood flow','Swelling or bleeding','Increased pressure in the compartment','Compressed blood and nerve supply, pain'],why:'Inextensible fascia traps swelling, pressure rises and compresses the neurovascular supply.'},
 {t:'mcq',q:'A patient has severe forearm pain after a fracture, with a tense, swollen anterior forearm. The acute treatment is:',opts:['Fasciotomy','Allen\'s test','Cast tightening','Nerve transposition'],a:0,why:'Acute compartment syndrome is relieved surgically with a fasciotomy.'},
 {t:'mcq',q:'Why does swelling within a compartment cause compartment syndrome?',opts:['Muscles lose their nerve supply','Fascia is resistant to stretch, so pressure builds','Veins collapse proximally','Bone expands'],a:1,why:'The fibrous sheath cannot stretch, so pressure builds and compresses vessels and nerves.'}
]},
{id:'u1l4',title:'Arteries & Veins',mins:9,flower:'🌺',items:[
 {t:'learn',title:'Arterial path of the upper limb',slides:[16, 17],explain:`<p>It's one long artery that changes its name at landmarks, like a road becoming a different street at a bridge.</p>
<ol><li><b>Subclavian</b> ("under the clavicle"): starts from the aortic arch on the left, but on the right from the <b>brachiocephalic trunk</b> (a short branch off the aorta that splits to the right side).</li><li>Crosses the <b>first rib</b> → <b>axillary</b> (runs through the armpit).</li><li>Passes the lower edge of <b>teres major</b> → <b>brachial</b> (the arm).</li><li>In the <b>cubital fossa</b> it splits into <b>radial</b> (thumb side) and <b>ulnar</b> (pinky side).</li><li>In the hand they join to form <b>palmar arches</b>, then <b>digital arteries</b> to the fingers.</li></ol>
<p>Deep veins share the arteries' names and run alongside, carrying blood back.</p>
<p class="tip">Hook: "Rib → Teres → Fossa" are the name-change points. Pulse points: axillary, brachial, radial.</p>`,html:`<ol><li><b>Subclavian a.</b>: arises from the <b>arch of the aorta (left)</b> / <b>brachiocephalic trunk (right)</b></li>
<li>Becomes <b>axillary a.</b> after crossing the <b>first rib</b></li>
<li>Becomes <b>brachial a.</b> after crossing <b>teres major</b></li>
<li>Splits into <b>radial a.</b> and <b>ulnar a.</b> in the <b>cubital fossa</b></li>
<li>Join in the hand as <b>deep and superficial palmar arches</b> → digital aa.</li></ol>
<p class="tip">Pulse points: axillary, brachial and radial arteries. Deep veins follow the arteries (same names) but run in reverse.</p>`},
 {t:'order',title:'Order the arterial path from the heart',steps:['Subclavian a.','Axillary a.','Brachial a.','Radial and ulnar aa.','Palmar arches'],why:'Names change at landmarks: first rib (→axillary), teres major (→brachial), cubital fossa (→radial/ulnar).'},
 {t:'mcq',q:'The subclavian artery on the RIGHT side arises from:',opts:['Arch of the aorta','Brachiocephalic trunk','Common carotid a.','Axillary a.'],a:1,why:'Right subclavian from brachiocephalic trunk; left directly from the aortic arch.'},
 {t:'mcq',q:'The axillary artery becomes the brachial artery at the lower border of:',opts:['First rib','Pectoralis minor','Teres major','Cubital fossa'],a:2,why:'The artery changes name to brachial after crossing teres major.'},
 {t:'cloze',title:'Name changes',text:'The subclavian a. becomes the axillary a. after crossing the [[first rib]], and the brachial a. after crossing [[teres major]]. It splits into the radial and ulnar aa. in the [[cubital fossa]].',bank:['first rib','teres major','cubital fossa','clavicle','carpal tunnel']},
 {t:'learn',title:'Palmar arches & Allen\'s test',slides:[18, 19, 20],explain:`<p>The hand has a built-in backup: the radial and ulnar arteries link into two loops, the <b>superficial and deep palmar arches</b>, so either artery alone can usually feed the whole hand. <b>Allen's test</b> checks this.</p>
<ol><li>Make a tight fist (squeezes blood out).</li><li>Press firmly on both wrist arteries, radial and ulnar.</li><li>Open the hand: the palm looks pale (blanched).</li><li>Release just <b>one</b> artery and watch the colour come back.</li><li>Repeat with the other.</li></ol>
<p>Colour back in about <b>7 seconds</b> = good. If only half the hand pinks up, the test is <b>positive</b>: the arches are incomplete or an artery is blocked.</p>
<p class="tip">Trap: "positive" here is bad news (a problem). The index finger is the landmark dividing radial from ulnar supply.</p>`,html:`<p>Radial and ulnar aa. form the <b>deep and superficial palmar arches</b>, supplying the hand and digits. The <b>index finger (2nd digit)</b> is a landmark separating radial a. vs ulnar a. supply.</p>
<div class="defn"><span class="key">Allen's test</span>: assesses vascular anomalies/occlusions in the hand.</div>
<ol><li>Patient makes a fist</li><li>Pressure on radial and ulnar aa.</li><li>Patient opens hand: palm is blanched</li><li>Release one artery and watch colour return</li><li>Repeat releasing the other artery</li></ol>
<p>Colour returns in ~<b>7 seconds</b> = adequate supply. Blood returning to only <b>half the hand</b> = positive test (incomplete arches/occlusion).</p>`},
 {t:'mcq',q:'During Allen\'s test, normal colour return should occur in approximately:',opts:['2 seconds','7 seconds','20 seconds','1 minute'],a:1,why:'Return of colour in ~7 seconds indicates adequate blood supply.'},
 {t:'mcq',q:'When pressure on the ulnar artery is released, only the lateral half of the hand regains colour. This suggests:',opts:['A normal result','Incomplete palmar arches or occlusion','Radial nerve injury','Venous valve failure'],a:1,why:'Blood returning to only part of the hand is a positive Allen\'s test, indicating arches not fully patent.'},
 {t:'sort',title:'Artery or vein?',buckets:['Artery','Vein'],items:[['Brachial',0],['Basilic',1],['Cephalic',1],['Radial',0],['Median cubital',1],['Subclavian',0]]},
 {t:'learn',title:'Superficial veins',slides:[21, 16],explain:`<p>Superficial veins sit just under the skin, so you can see them and use them for <b>blood draws</b> and IV lines. Veins have one-way <b>valves</b> that stop blood flowing backward away from the heart, so a needle must go in the direction of flow.</p>
<ul><li><b>Dorsal venous arch</b>: the network on the back of the hand where the superficial veins begin.</li><li><b>Cephalic v.</b>: runs up the <i>lateral</i> (thumb) side, then sinks into the deltopectoral groove (between deltoid and pec major) to join the axillary vein.</li><li><b>Basilic v.</b>: runs up the <i>medial</i> side, joins the brachial v. and travels with the brachial artery into the axillary vein.</li><li><b>Median cubital v.</b>: a bridge at the elbow linking cephalic and basilic. It's the favourite spot for blood draws.</li></ul>
<p class="tip">Hook: Cephalic = Corner (lateral/thumb), Basilic = Back-in (medial, deep end). Trap: the median cubital is in the cubital fossa, not the axilla.</p>`,html:`<p>Superficial veins are used for <b>blood draws</b>. Veins have <b>valves</b> preventing backflow away from the heart; these can be obstacles when drawing blood.</p>
<table><tr><th>Vein</th><th>Course</th></tr>
<tr><td>Dorsal venous arch</td><td>On the dorsum of the hand; origin of the superficial veins</td></tr>
<tr><td>Cephalic v.</td><td>Lateral; runs in the deltopectoral triangle/groove → axillary v.</td></tr>
<tr><td>Basilic v.</td><td>Medial; joins the brachial v. and runs with the brachial a. → axillary v.</td></tr>
<tr><td>Median cubital v.</td><td>Connects cephalic and basilic at the cubital fossa</td></tr></table>`},
 {t:'mcq',q:'Which superficial vein travels in the deltopectoral groove?',opts:['Basilic','Cephalic','Median cubital','Brachial'],a:1,why:'The cephalic v. runs through the deltopectoral triangle/groove to the axillary v.'},
 {t:'mcq',q:'The basilic vein joins the ____ and runs with the ____.',opts:['cephalic v.; radial a.','brachial v.; brachial a.','axillary v.; ulnar a.','median cubital v.; radial a.'],a:1,why:'Basilic v. joins the brachial v. and accompanies the brachial a.'},
 {t:'flash',title:'Vessels review',cards:[['Pulse points of the upper limb','Axillary, brachial, radial arteries'],['Where do radial and ulnar aa. arise?','Cubital fossa (split of brachial a.)'],['Landmark separating radial vs ulnar supply in hand','Index finger (2nd digit)'],['Veins used for blood draws','Superficial veins (cephalic, basilic, median cubital)']]}
]},
{id:'u1boss',title:'Axilla Boss Quiz',mins:6,flower:'👑',boss:true,items:[
 {t:'mcq',q:'Which structure forms the lateral wall of the axilla?',opts:['Serratus anterior','Humerus (intertubercular groove)','Subscapularis','Pectoralis minor'],a:1,why:'The lateral wall is the humerus at the intertubercular groove.'},
 {t:'sata',q:'Select ALL muscles forming the anterior or posterior wall of the axilla.',opts:['Pectoralis major','Serratus anterior','Teres major','Biceps brachii','Subscapularis'],a:[0,2,4],why:'Serratus anterior is medial; biceps brachii tendons pass through but do not form a wall.'},
 {t:'mcq',q:'The axillary artery is the continuation of the:',opts:['Brachial a. past teres major','Subclavian a. after crossing the first rib','Radial a.','Brachiocephalic trunk'],a:1,why:'Subclavian → axillary at the first rib.'},
 {t:'mcq',q:'Which is NOT contained in the axilla?',opts:['Brachial plexus','Axillary lymph nodes','Median cubital vein','Axillary vein'],a:2,why:'The median cubital v. is at the cubital fossa.'},
 {t:'mcq',q:'Which nerve is associated with the posterior compartment of the arm?',opts:['Musculocutaneous','Radial','Median','Ulnar'],a:1,why:'Radial n. supplies the posterior compartments.'},
 {t:'mcq',q:'A runner develops severe pain and tense swelling in the leg that does not stretch. Which concept explains this?',opts:['Fascia resists stretch so pressure builds in the compartment','Venous valves fail','Palmar arch occlusion','Funnel entrapment at the axilla'],a:0,why:'Compartment syndrome: swelling in an inextensible fascial sheath.'},
 {t:'mcq',q:'After releasing the radial artery during Allen\'s test, the palm stays pale. This means:',opts:['Ulnar artery is blocked','Radial artery supply to the hand is inadequate or occluded','Superficial veins are thrombosed','The test is normal'],a:1,why:'Colour fails to return when released vessel is not supplying the hand; a positive result.'},
 {t:'mcq',q:'Where does the brachial artery divide into the radial and ulnar arteries?',opts:['Axilla','Carpal tunnel','Cubital fossa','Deltopectoral groove'],a:2,why:'The split occurs in the cubital fossa.'},
 {t:'mcq',q:'The anterior forearm compartment produces:',opts:['Extension and supination','Flexion and pronation','Extension and pronation','Flexion and supination'],a:1,why:'Anterior forearm = flexion and pronation.'}
]}
]});

EXAMQ.push({t:'mcq',unit:3,mod:'u1',q:'Which combination correctly lists the walls of the axilla?',opts:['Anterior: pectoralis major/minor; medial: serratus anterior; posterior: subscapularis, teres major, latissimus dorsi','Anterior: serratus anterior; medial: pectoralis major; posterior: teres minor','Anterior: subscapularis; posterior: pectoralis minor; medial: latissimus dorsi','Anterior: pectoralis major; posterior: deltoid; medial: rhomboids'],a:0,why:'Pecs anterior, serratus anterior medial, subscapularis/teres major/latissimus dorsi posterior.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u1',q:'A patient with a stab wound has bleeding from a vessel in the axilla. Which artery is most likely injured if it lies between the first rib and the inferior border of teres major?',opts:['Subclavian','Brachial','Axillary','Radial','Ulnar'],a:2,why:'The axillary a. extends from the first rib to the lower border of teres major.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u1',q:'A phlebotomist chooses a superficial vein in the cubital fossa that connects the cephalic and basilic veins. Which is it?',opts:['Brachial vein','Dorsal venous arch','Axillary vein','Radial vein','Median cubital vein'],a:4,why:'The median cubital v. links cephalic and basilic veins at the cubital fossa.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u1',q:'After a forearm fracture a patient has pain on passive finger extension and a tense swollen anterior forearm. Which statement is most accurate?',opts:['Swelling is easily absorbed because fascia stretches','Rising pressure in a fascia-bound compartment compresses vessels and nerves; fasciotomy may be needed','It is caused by palmar arch occlusion','It affects only the posterior compartment','It occurs only in the axilla'],a:1,why:'Fascia resists stretch, so pressure rises in the compartment, requiring fasciotomy in acute cases.'});

MODULES.push({ id:'u2', num:9, unit:3, title:'Brachial Plexus', blurb:'Roots, trunks, divisions, cords and branches of the brachial plexus; spinal levels, innervation gradients, myotomes and classic nerve injuries.', badge:{name:'Plexus Master',icon:'🕸️'},
lessons:[
{id:'u2l1',title:'Plexus Structure',mins:8,flower:'🌷',items:[
 {t:'learn',title:'The brachial plexus: roots',slides:[7, 8],explain:`<p>A <b>plexus</b> is a network where nerves exchange fibres, like a railway junction where lines merge and re-split. The brachial plexus (brachium = arm) takes nerves from the neck spinal cord and sorts them into the nerves for the whole arm.</p>
<ul><li><b>Roots</b> = the starting segments: the <b>anterior rami</b> (front branches) of spinal nerves <b>C5, C6, C7, C8 and T1</b>. C = cervical (neck), T = thoracic (chest).</li><li>Spinal nerves are mixed, so the plexus carries <b>motor</b> (movement) and <b>sensory</b> (feeling) fibres.</li><li>The roots pass between the <b>anterior and middle scalene</b> muscles (neck muscles on the side of the neck), then follow the subclavian/axillary artery into the armpit.</li></ul>
<p class="tip">Hook: Really Thirsty? Drink Cold Beer = Roots, Trunks, Divisions, Cords, Branches. Trap: anterior rami, not posterior; C5–T1, not C4–C8.</p>`,html:`<p>The brachial plexus gives branches that innervate the <b>entire upper limb</b>. It is formed from the <b>anterior rami of spinal nerves C5–T1</b>, which are its <span class="key">ROOTS</span>. Because they are spinal nerve rami, its nerves carry <b>both motor and sensory fibres</b>.</p>
<p>Roots pass between the <b>anterior and middle scalene mm.</b>, above the subclavian a., and the plexus travels into the axilla with the axillary a.</p>
<p class="tip">Mnemonic: <b>R</b>eally <b>T</b>hirsty? <b>D</b>rink <b>C</b>old <b>B</b>eer! = Roots, Trunks, Divisions, Cords, Branches.</p>`},
 {t:'mcq',q:'The roots of the brachial plexus are formed from:',opts:['Posterior rami of C5–T1','Anterior rami of C5–T1','Anterior rami of C4–C8','Posterior rami of C5–C8'],a:1,why:'Roots = anterior rami of C5, C6, C7, C8 and T1.'},
 {t:'order',title:'Order the components from proximal to distal',steps:['Roots','Trunks','Divisions','Cords','Branches'],why:'Really Thirsty? Drink Cold Beer!'},
 {t:'mcq',q:'Which statement about the brachial plexus is correct?',opts:['It carries only motor fibres','It carries only sensory fibres','It carries both motor and sensory fibres','It carries only autonomic fibres'],a:2,why:'It is made of anterior rami of spinal nerves, which are mixed.'},
 {t:'learn',title:'Trunks, divisions & cords',slides:[8, 9, 10, 11],explain:`<p>Follow the plexus like a river system, from the neck outward:</p>
<ul><li><b>Trunks (3)</b>: roots merge. Upper = C5+C6, middle = C7 alone, lower = C8+T1.</li><li><b>Divisions (6)</b>: each trunk splits into a front (<b>anterior</b>) and back (<b>posterior</b>) half. They sit behind the clavicle. Anterior divisions serve the flexor (front) side of the limb, posterior ones the extensor (back) side.</li><li><b>Cords (3)</b>: named by their position relative to the axillary artery. All 3 posterior divisions join into the <b>posterior cord</b>. Anterior divisions form the <b>lateral</b> and <b>medial</b> cords.</li></ul>
<p>The cords sit in the axilla and give off most of the branches.</p>
<p class="tip">Hook: the "M" shape: musculocutaneous, median, ulnar nerves form an M in front of the axillary artery. Trap: divisions are 6, not 3; they lie deep to the clavicle, not in the axilla.</p>`,html:`<ul><li>Roots combine → <b>3 trunks</b> (upper: C5–C6, middle: C7, lower: C8–T1).</li>
<li>Each trunk splits into an <b>anterior</b> and a <b>posterior division</b> (6 divisions). Divisions lie <b>deep to the clavicle</b>.</li>
<li><b>Posterior divisions</b> (all three) → <b>posterior cord</b>.</li>
<li><b>Anterior divisions</b> → <b>lateral</b> or <b>medial</b> cords.</li></ul>
<p>The axilla is where most of the action is: the cords give many small branches to the walls of the axilla and the rest of the limb.</p>
<p class="tip">The "<b>M</b>" formed by the musculocutaneous, median and ulnar nerves is a key landmark to orient yourself.</p>`},
 {t:'mcq',q:'The divisions of the brachial plexus are found:',opts:['Between the scalene muscles','Deep to the clavicle','In the cubital fossa','Superficial to pectoralis major'],a:1,why:'Divisions lie deep to the clavicle.'},
 {t:'cloze',title:'Divisions to cords',text:'The [[posterior]] divisions collect to form the posterior cord, while the anterior divisions contribute to the [[lateral]] or [[medial]] cords.',bank:['posterior','lateral','medial','anterior','upper']},
 {t:'sort',title:'Which cord do these divisions feed?',buckets:['Posterior cord','Lateral or medial cord'],items:[['Posterior division of upper trunk',0],['Anterior division of upper trunk',1],['Posterior division of lower trunk',0],['Anterior division of lower trunk',1],['Posterior division of middle trunk',0]]},
 {t:'mcq',q:'How many divisions does the brachial plexus have?',opts:['3','4','5','6'],a:3,why:'Each of the 3 trunks gives an anterior and a posterior division = 6.'},
 {t:'flash',title:'Plexus structure',cards:[['Roots','Anterior rami C5–T1'],['Trunks','3: upper, middle, lower'],['Divisions','Anterior and posterior; deep to clavicle'],['Cords','Lateral, medial, posterior'],['Landmark "M" nerves','Musculocutaneous, median, ulnar']]}
]},
{id:'u2l2',title:'Branches & Spinal Levels',mins:9,flower:'🌻',items:[
 {t:'learn',title:'Five main terminal branches',slides:[11, 17, 18],explain:`<p>"Terminal" means the plexus ends in these five big nerves, each running down the limb to a compartment you met in the axilla lesson.</p>
<ul><li><b>Axillary</b> (C5–C6, posterior cord): wraps around the top of the humerus to the deltoid and teres minor (lifts the arm sideways).</li><li><b>Radial</b> (C5–T1, posterior cord): the extensor nerve of the arm and forearm.</li><li><b>Musculocutaneous</b> (C5–C7, lateral cord): front of the arm, i.e. the elbow flexors.</li><li><b>Median</b> (C5–T1, medial AND lateral cords): front of the forearm and some hand muscles. It has two "arms" that join, like the middle stroke of the M.</li><li><b>Ulnar</b> (C8–T1, medial cord): pinky-side forearm and most small hand muscles.</li></ul>
<p class="tip">Hook: posterior cord = Axillary + Radial ("A, R, rear"). Radial carries every level, so it supplies a lot. Trap: median is the only one with two cords.</p>`,html:`<p>Five main branches travel the limb to innervate the compartments of each segment:</p>
<table><tr><th>Nerve</th><th>Levels</th><th>Cord</th><th>Muscles</th></tr>
<tr><td>Axillary</td><td>C5–C6</td><td>Posterior</td><td>Deltoid, teres minor</td></tr>
<tr><td>Radial</td><td>C5–T1</td><td>Posterior</td><td>Posterior arm and posterior forearm</td></tr>
<tr><td>Musculocutaneous</td><td>C5–C7</td><td>Lateral</td><td>Anterior arm</td></tr>
<tr><td>Median</td><td>C5–T1</td><td>Medial and lateral</td><td>Anterior forearm, some intrinsic hand</td></tr>
<tr><td>Ulnar</td><td>C8–T1</td><td>Medial</td><td>Some anterior forearm, intrinsic hand</td></tr></table>
<p class="tip">Radial carries ALL spinal levels (C5–T1) so it innervates A LOT.</p>`},
 {t:'match',title:'Match nerve to spinal levels',pairs:[['Axillary n.','C5–C6'],['Musculocutaneous n.','C5–C7'],['Ulnar n.','C8–T1'],['Radial n.','C5–T1']]},
 {t:'mcq',q:'Which terminal branch comes from the lateral cord and supplies the anterior arm?',opts:['Radial n.','Musculocutaneous n.','Axillary n.','Ulnar n.'],a:1,why:'Musculocutaneous (C5–C7), lateral cord, anterior compartment of the arm.'},
 {t:'mcq',q:'The ulnar nerve arises from which cord?',opts:['Lateral','Posterior','Medial','Lateral and posterior'],a:2,why:'Ulnar n. (C8–T1) comes from the medial cord.'},
 {t:'sata',q:'Select ALL terminal branches that arise from the posterior cord.',opts:['Axillary n.','Radial n.','Median n.','Musculocutaneous n.','Ulnar n.'],a:[0,1],why:'Posterior cord gives the axillary and radial nerves.'},
 {t:'learn',title:'Smaller branches (the simplified nerve chart)',slides:[19, 20],explain:`<p>Besides the five big nerves, the plexus gives off smaller branches, mostly to the shoulder and chest muscles. Sort them by <i>where</i> they leave: the higher up, the more of them go to muscles on the back and trunk.</p>
<ul><li><b>From roots</b>: <b>long thoracic</b> (serratus anterior, holds the scapula on the ribs) and <b>dorsal scapular</b> (rhomboids and levator scapulae, pull the scapula toward the spine/up).</li><li><b>From the trunk</b>: <b>suprascapular</b> (supraspinatus and infraspinatus, two rotator-cuff muscles on the back of the scapula).</li><li><b>From cords</b>: <b>pectoral nerves</b> (chest muscles; named medial/lateral for the cord), <b>thoracodorsal</b> (latissimus dorsi), <b>upper and lower subscapular</b> (subscapularis; teres major).</li></ul>
<p class="tip">Hook: "C5, C6, C7, fly to heaven" = long thoracic (C5–7) to serratus. Trap: medial and lateral pectoral nerves are named for the cord they leave, and both supply pectoralis major.</p>`,html:`<table><tr><th>Arises from</th><th>Nerve</th><th>Muscle(s)</th><th>Levels</th></tr>
<tr><td>Roots</td><td>Long thoracic</td><td>Serratus anterior</td><td>C5–C7</td></tr>
<tr><td>Roots</td><td>Dorsal scapular</td><td>Levator scapulae, rhomboid major &amp; minor</td><td>C5</td></tr>
<tr><td>Trunks</td><td>Suprascapular</td><td>Supraspinatus, infraspinatus</td><td>C5–C6</td></tr>
<tr><td>Cords</td><td>Medial pectoral</td><td>Pectoralis major, pectoralis minor</td><td>C8–T1</td></tr>
<tr><td>Cords</td><td>Lateral pectoral</td><td>Pectoralis major, (pectoralis minor)</td><td>C5–C7</td></tr>
<tr><td>Cords</td><td>Thoracodorsal</td><td>Latissimus dorsi</td><td>C6–C8</td></tr>
<tr><td>Cords</td><td>Upper subscapular</td><td>Subscapularis</td><td>C5–C6</td></tr>
<tr><td>Cords</td><td>Lower subscapular</td><td>Subscapularis, teres major</td><td>C5–C6</td></tr></table>
<p class="tip">"C5, C6, C7, fly to heaven!" = long thoracic n. (serratus anterior).</p>`},
 {t:'match',title:'Match the nerve to the muscle(s)',pairs:[['Long thoracic n.','Serratus anterior'],['Dorsal scapular n.','Rhomboids and levator scapulae'],['Suprascapular n.','Supraspinatus and infraspinatus'],['Thoracodorsal n.','Latissimus dorsi'],['Lower subscapular n.','Subscapularis and teres major']]},
 {t:'sort',title:'Where does each branch arise?',buckets:['Roots','Trunks','Cords'],items:[['Long thoracic n.',0],['Dorsal scapular n.',0],['Suprascapular n.',1],['Thoracodorsal n.',2],['Lateral pectoral n.',2],['Upper subscapular n.',2]]},
 {t:'mcq',q:'Which nerve innervates teres minor and deltoid?',opts:['Suprascapular','Axillary','Lower subscapular','Radial'],a:1,why:'Axillary n. (C5–C6) from the posterior cord.'},
 {t:'mcq',q:'Which nerve supplies the supraspinatus and infraspinatus?',opts:['Dorsal scapular','Suprascapular','Axillary','Thoracodorsal'],a:1,why:'Suprascapular n. (C5–C6) from the upper trunk.'},
 {t:'mcq',q:'Which single spinal level contributes to the dorsal scapular nerve?',opts:['C5','C6','C7','C8'],a:0,why:'Dorsal scapular n. is C5 only.'},
 {t:'cloze',title:'Axilla walls and their nerves',text:'Branches of the [[posterior]] cord (thoracodorsal, upper and lower subscapular) innervate muscles of the posterior wall of the axilla, while the medial and lateral [[pectoral]] nerves innervate the [[anterior]] wall.',bank:['posterior','pectoral','anterior','medial','long thoracic']}
]},
{id:'u2l3',title:'Gradients & Myotomes',mins:7,flower:'🌼',items:[
 {t:'learn',title:'Dermatomes and the innervation "gradient"',slides:[17, 18, 6],explain:`<p>A <b>dermatome</b> is a patch of skin supplied by one spinal nerve level, like a zone on a map. They overlap a bit, so one damaged nerve rarely numbs a perfectly sharp area.</p>
<p>The <b>gradient</b> is a simple rule that saves memorising: as you go down the spinal cord (C5 → T1), the nerves reach further down the limb.</p>
<ul><li>High levels (C5–C6) → <b>shoulder and upper arm</b>: axillary, upper musculocutaneous.</li><li>Middle (C7) → elbow and forearm extensors.</li><li>Low levels (C8–T1) → <b>forearm and hand</b>: ulnar, and the lower part of median.</li></ul>
<p>Anterior view: musculocutaneous → median → ulnar as you go distally. Posterior view: axillary (top) → radial (below).</p>
<p class="tip">Hook: "Higher number of spine = higher on the limb." Trap: it's a general trend, and radial is an exception that spans all levels.</p>`,html:`<div class="defn"><span class="key">Dermatome</span>: an area of skin supplied by one spinal nerve and its ganglion (some overlap exists).</div>
<p><b>Gradient:</b> anterior rami from <b>higher (more superior)</b> spinal levels innervate <b>more proximal</b> structures; <b>lower (more inferior)</b> levels innervate <b>more distal</b> structures.</p>
<ul><li><b>Anterior:</b> musculocutaneous (C5–C7, lateral cord) → anterior arm; median (C5–T1, medial &amp; lateral cords) → anterior forearm; ulnar (C8–T1, medial cord) → hand.</li>
<li><b>Posterior:</b> axillary (C5–C6) → deltoid and teres minor; radial (C5–T1) → posterior arm and forearm.</li></ul>`},
 {t:'mcq',q:'According to the innervation gradient, nerves from the LOWEST spinal levels (C8–T1) primarily supply:',opts:['The shoulder','The proximal arm','The hand','The scapular region'],a:2,why:'Lower levels supply more distal structures, e.g. ulnar n. to the hand.'},
 {t:'sort',title:'Proximal or distal emphasis?',buckets:['Proximal (higher levels)','Distal (lower levels)'],items:[['Axillary n. (C5–C6)',0],['Musculocutaneous n. (C5–C7)',0],['Ulnar n. (C8–T1)',1],['Dorsal scapular n. (C5)',0],['Medial pectoral n. (C8–T1)',1]]},
 {t:'learn',title:'Myotomes',slides:[22],explain:`<p>A <b>myotome</b> is to muscle what a dermatome is to skin: all the muscles supplied by one spinal level. Doctors test them by asking the patient to do a movement against resistance. If a certain movement is weak, that level may be damaged.</p>
<ul><li><b>C5</b> – arm abduction (lift out to the side, like a "chicken wing").</li><li><b>C6</b> – forearm flexion (bend the elbow, biceps).</li><li><b>C7</b> – forearm extension (straighten the elbow, triceps).</li><li><b>C8</b> – finger flexion (grip).</li><li><b>T1</b> – finger spread and squeeze (abduction/adduction using tiny hand muscles).</li></ul>
<p>Notice the pattern: it follows the gradient, from shoulder to elbow to fingers, in order.</p>
<p class="tip">Hook: "5 = side up, 6 = bend, 7 = straighten, 8 = grip, 1 = spread." Trap: C6 and C7 are flexion vs extension of the <i>forearm</i> (elbow), not the fingers.</p>`,html:`<div class="defn"><span class="key">Myotome</span>: a group of muscles innervated by the same spinal level. Clinicians test the action at the most distal limit of each level.</div>
<table><tr><th>Level</th><th>Test</th></tr><tr><td>C5</td><td>Arm abduction</td></tr><tr><td>C6</td><td>Forearm flexion</td></tr><tr><td>C7</td><td>Forearm extension</td></tr><tr><td>C8</td><td>Finger flexion</td></tr><tr><td>T1</td><td>Finger adduction and abduction</td></tr></table>`},
 {t:'match',title:'Match the myotome',pairs:[['C5','Arm abduction'],['C6','Forearm flexion'],['C7','Forearm extension'],['C8','Finger flexion'],['T1','Finger adduction and abduction']]},
 {t:'mcq',q:'A patient cannot extend the forearm against resistance. Which spinal level is most implicated?',opts:['C5','C6','C7','T1'],a:2,why:'C7 myotome = forearm extension.'},
 {t:'mcq',q:'Weakness of finger abduction and adduction suggests a lesion of which root?',opts:['C5','C7','C8','T1'],a:3,why:'T1 myotome = finger abduction/adduction (intrinsics).'},
 {t:'cloze',title:'Myotomes',text:'Arm abduction tests [[C5]], forearm flexion tests [[C6]], and finger flexion tests [[C8]].',bank:['C5','C6','C8','C7','T1']},
 {t:'flash',title:'Gradient review',cards:[['Which nerve carries ALL levels C5–T1 from posterior cord?','Radial n.'],['Axillary n. gradient role','Deltoid and teres minor (proximal)'],['Median n. cords','Medial and lateral cords'],['Ulnar n. cord','Medial cord']]}
]},
{id:'u2l4',title:'Lesions & Injuries',mins:9,flower:'🌺',items:[
 {t:'learn',title:'Upper vs lower trunk injury',slides:[15, 16],explain:`<p>Big rule: <b>everything distal (further down the path) to the lesion is affected</b>. So a lesion high on the plexus can wipe out a lot, and the level tells you which muscles fail.</p>
<ul><li><b>Upper trunk (C5–C6)</b>: <b>Erb-Duchenne palsy</b>. Caused by a violent sideways stretch of the neck (e.g. a baby's head pulled during difficult birth, or a fall onto the shoulder). Shoulder and upper-arm muscles weaken, so the arm hangs by the side, extended and rotated inward with the palm facing backwards, like a waiter discreetly taking a tip: <b>waiter's tip</b>.</li><li><b>Lower trunk (C8–T1)</b>: <b>Dejerine-Klumpke palsy</b>. Caused by pulling the arm upward (hyperabduction), e.g. grabbing a branch while falling. The small hand muscles and long finger flexors fail, giving a <b>clawed hand</b>.</li></ul>
<p class="tip">Hook: Erb = Early/upper (shoulder); Klumpke = the Knuckles/hand (lower). Trap: don't mix up which injury goes with a clawed hand (lower trunk).</p>`,html:`<p><b>Rule: everything distal to the lesion is impacted.</b> Symptoms can include weakness, paralysis, atrophy, and/or pain, numbness, or tingling in the affected dermatome.</p>
<table><tr><th></th><th>Upper trunk</th><th>Lower trunk</th></tr>
<tr><td>Eponym</td><td>Erb-Duchenne palsy</td><td>Dejerine-Klumpke palsy</td></tr>
<tr><td>Cause</td><td>Lateral hyperextension (excessive angle) of the neck</td><td>Hyperabduction of the arm</td></tr>
<tr><td>Affects</td><td>Proximal muscles: weakness/atrophy of shoulder external rotators and upper arm flexors</td><td>Distal muscles: long digital flexors and intrinsic hand muscles</td></tr>
<tr><td>Sign</td><td>"Waiter's tip" position (weak arm muscles and forearm extensors)</td><td>"Clawed" hand</td></tr>
<tr><td>Dermatomes</td><td>C5, C6</td><td>C8, T1 (and C7 region)</td></tr></table>`},
 {t:'match',title:'Match the injury',pairs:[['Erb-Duchenne palsy','Upper trunk; waiter\'s tip'],['Dejerine-Klumpke palsy','Lower trunk; clawed hand'],['Hyperabduction of the arm','Lower plexus injury'],['Lateral neck hyperextension','Upper plexus injury']]},
 {t:'mcq',q:'A newborn has an arm held adducted, medially rotated and extended ("waiter\'s tip") after a difficult delivery with neck stretching. Which injury?',opts:['Lower trunk, Klumpke','Upper trunk, Erb-Duchenne','Long thoracic n.','Radial n.'],a:1,why:'Upper trunk (C5–C6) injury from lateral neck hyperextension gives waiter\'s tip.'},
 {t:'mcq',q:'A climber grabs a branch while falling, hyperabducting the arm. Weeks later the hand is clawed with intrinsic muscle weakness. The injured part is the:',opts:['Upper trunk','Lower trunk','Axillary n.','Suprascapular n.'],a:1,why:'Hyperabduction injures the lower trunk (Dejerine-Klumpke), affecting distal muscles.'},
 {t:'order',title:'Order the mnemonic RTDCB for a lesion: which parts lie between roots and the arm?',steps:['Roots','Trunks','Divisions','Cords','Branches'],why:'Anything distal to the lesion is lost, so knowing the order determines the deficits.'},
 {t:'learn',title:'Specific nerve injuries',slides:[16, 23, 20],explain:`<p>Single-nerve injuries are predictable because each nerve supplies a specific set of muscles, so you can reason from the muscle to the sign.</p>
<ul><li><b>Long thoracic n.</b> (C5–C7) → <b>serratus anterior</b>, which pins the shoulder blade flat against the ribs. If it's paralysed, the medial edge of the scapula sticks out like a wing: <b>winged scapula</b>. It shows when the patient pushes against a wall. The nerve runs superficially down the side of the chest, so it's easy to injure in surgery.</li><li><b>Radial n.</b> compression, nicknamed "<b>Saturday Night Palsy</b>": someone passes out with their arm over a chair back, squeezing the nerve. The wrist extensors stop working, so the hand hangs limp (<b>wrist drop</b>), with numbness over the back of the limb.</li></ul>
<p class="tip">Hook: Radial = Raise the wrist; if it can't, wrist drop. Trap: winged scapula = long thoracic, not dorsal scapular; clawed hand is lower trunk/ulnar, not radial.</p>`,html:`<ul><li><b>Long thoracic n.</b> (C5–C7) lesion → <span class="key">winged scapula</span> (serratus anterior paralysis).</li>
<li><b>Radial n.</b> compression (e.g. "<b>Saturday Night Palsy</b>", passing out with arm over a chair) → wrist drop (inactive wrist extensors), loss of sensation over posterior upper limb. Radial n. is from the posterior cord.</li>
<li>Entire groups of muscles supplied by only one nerve show specific defects.</li></ul>`},
 {t:'mcq',q:'Winged scapula results from a lesion of the:',opts:['Dorsal scapular n.','Long thoracic n.','Thoracodorsal n.','Suprascapular n.'],a:1,why:'Long thoracic n. supplies serratus anterior; its loss causes a winged scapula.'},
 {t:'mcq',q:'A man falls asleep with his arm over the back of a chair and wakes with wrist drop. Which nerve is injured?',opts:['Ulnar','Median','Radial','Musculocutaneous'],a:2,why:'"Saturday Night Palsy": radial n. injury (posterior cord), with inactive wrist extensors.'},
 {t:'sata',q:'Select ALL features of Saturday Night Palsy.',opts:['Wrist drop','Loss of sensation on posterior upper limb','Winged scapula','Radial nerve involved','Clawed hand'],a:[0,1,3],why:'It is a radial nerve compression (wrist extensors inactive). Winged scapula = long thoracic; clawed hand = lower trunk/ulnar.'},
 {t:'mcq',q:'A lesion at the upper trunk is most likely to cause weakness of:',opts:['Intrinsic hand muscles','Shoulder external rotators and upper arm flexors','Long digital flexors only','Finger adduction'],a:1,why:'Upper trunk injury affects proximal muscles.'},
 {t:'cloze',title:'Injuries',text:'Lesions of the long thoracic nerve cause a [[winged scapula]]; a lower trunk injury causes a [[clawed]] hand; an upper trunk injury is called [[Erb-Duchenne]] palsy.',bank:['winged scapula','clawed','Erb-Duchenne','Klumpke','wrist drop']}
]},
{id:'u2boss',title:'Brachial Plexus Boss Quiz',mins:7,flower:'👑',boss:true,items:[
 {t:'mcq',q:'Which spinal levels form the roots of the brachial plexus?',opts:['C4–C8','C5–T1','C5–C8','C6–T2'],a:1,why:'Anterior rami C5–T1.'},
 {t:'mcq',q:'The posterior cord gives rise to which pair of terminal branches?',opts:['Median and ulnar','Axillary and radial','Musculocutaneous and median','Radial and ulnar'],a:1,why:'Posterior cord → axillary and radial nerves.'},
 {t:'mcq',q:'Which nerve innervates latissimus dorsi?',opts:['Thoracodorsal','Upper subscapular','Dorsal scapular','Long thoracic'],a:0,why:'Thoracodorsal n. (C6–C8).'},
 {t:'sata',q:'Select ALL muscles supplied by branches arising from the roots of the plexus.',opts:['Serratus anterior','Rhomboid major','Supraspinatus','Levator scapulae','Latissimus dorsi'],a:[0,1,3],why:'Long thoracic and dorsal scapular nerves arise from roots; suprascapular arises from the trunk.'},
 {t:'mcq',q:'A weight-lifter cannot abduct the arm and has C5 sensory loss. Which myotome is tested by arm abduction?',opts:['C5','C6','C7','C8'],a:0,why:'C5 myotome = arm abduction.'},
 {t:'mcq',q:'A lesion of the plexus affects which structures?',opts:['Only the lesion site','Everything distal to the lesion','Everything proximal to the lesion','Only the dermatomes'],a:1,why:'Everything distal to the lesion is impacted.'},
 {t:'mcq',q:'A patient with an upper trunk injury would NOT be expected to show:',opts:['Waiter\'s tip posture','Weak shoulder external rotation','Clawed hand','Weak upper arm flexion'],a:2,why:'Clawed hand is a lower trunk (distal) injury.'},
 {t:'mcq',q:'The pectoralis major receives innervation from which nerves?',opts:['Medial and lateral pectoral nn.','Thoracodorsal n.','Axillary n.','Suprascapular n.'],a:0,why:'Both pectoral nerves supply pectoralis major.'},
 {t:'mcq',q:'Which nerve contains ALL spinal levels C5–T1 and supplies posterior arm and forearm?',opts:['Ulnar','Radial','Axillary','Musculocutaneous'],a:1,why:'Radial n. (C5–T1).'},
 {t:'mcq',q:'Wrist drop with a normal shoulder after sleeping on a chair arm indicates injury to which nerve?',opts:['Median','Long thoracic','Radial','Ulnar'],a:2,why:'Radial n. injury.'}
]}
]});

EXAMQ.push({t:'mcq',unit:3,mod:'u2',q:'Which nerve arises from the lateral cord of the brachial plexus?',opts:['Radial','Axillary','Ulnar','Musculocutaneous','Thoracodorsal'],a:3,why:'Musculocutaneous (C5–C7) is a lateral cord branch.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u2',q:'A patient has difficulty raising the arm above horizontal and the medial border of the scapula protrudes when pushing against a wall. Which nerve and spinal levels?',opts:['Dorsal scapular, C5','Suprascapular, C5–C6','Long thoracic, C5–C7','Thoracodorsal, C6–C8','Axillary, C5–C6'],a:2,why:'Serratus anterior paralysis (long thoracic n., C5–C7) produces a winged scapula.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u2',q:'Which muscle is NOT innervated by a nerve arising directly from the posterior cord?',opts:['Teres major','Subscapularis','Latissimus dorsi','Deltoid','Supraspinatus'],a:4,why:'Supraspinatus is supplied by the suprascapular n. from the upper trunk.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u2',q:'A gymnast hyperabducts the arm. Which is the expected presentation?',opts:['Waiter\'s tip posture','Clawed hand with weak intrinsic hand muscles and long digital flexors','Isolated weakness of the deltoid','Winged scapula','Loss of shoulder external rotation only'],a:1,why:'Hyperabduction stresses the lower trunk (Dejerine-Klumpke), affecting distal muscles.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u2',q:'A lesion of the medial cord would be expected to impair which combination?',opts:['Medial pectoral nerve and ulnar nerve','Axillary and radial nerves','Musculocutaneous and lateral pectoral nerves','Thoracodorsal and subscapular nerves','Suprascapular and dorsal scapular nerves'],a:0,why:'The medial cord gives the medial pectoral and ulnar nerves (plus part of median).'});
EXAMQ.push({t:'mcq',unit:3,mod:'u2',q:'A patient cannot flex the fingers (C8 myotome) but can extend the forearm. Which statement fits best with the innervation gradient?',opts:['The lesion likely involves the lower roots/trunk, as lower levels supply more distal structures','The lesion is in the upper trunk','The suprascapular n. is injured','Only the dorsal scapular n. is affected','The axillary n. is injured'],a:0,why:'Lower spinal levels supply distal structures; distal deficits with preserved C7 point to a lower trunk lesion.'});

MODULES.push({
id:"u3", num:10, unit:3, title:"Shoulder",
blurb:"Pectoral girdle bones, joints and ligaments, shoulder dislocation vs separation, rotator cuff, deltoid, thoracoappendicular and back muscles, and the 0-180° abduction relay.",
badge:{name:"Shoulder Shark",icon:"🦈"},
lessons:[
{id:"u3l1",title:"Bones & Landmarks",mins:7,flower:"🌸",items:[
{t:"learn",title:"Regions & the pectoral girdle",slides:[4,5,6,7],explain:`<p><b>Proximal</b> means closer to the trunk, <b>distal</b> means farther away, so "proximal to distal" is just walking down the limb from the shoulder to the fingertips. A <b>girdle</b> is a belt-like ring of bones that anchors a limb to the body. Your pectoral girdle is an incomplete ring: the clavicle (collarbone) in front, and the spine of the scapula (shoulder blade) behind.</p>
<ul><li><b>Manubrium</b> = the top part of the breastbone (sternum). The clavicle plugs into it at the <b>sternoclavicular (SC) joint</b>.</li>
<li>The scapula has no bony joint to the ribs. It just hangs on the back of the chest, held by muscle.</li></ul>
<p>Picture the whole arm as a hanging lantern attached to your body by one tiny hook: the SC joint. Everything else is muscle "rope".</p>
<p class="tip">Exam trap: the <b>acromioclavicular</b> joint joins clavicle to scapula, not limb to trunk. Only the SC joint attaches the limb to the axial skeleton.</p>`,html:`<p>The upper limb is studied <b>proximal to distal</b> by region: <span class="key">deltoid region</span> (shoulder), <span class="key">scapular region</span>, <span class="key">axillary region</span> (armpit), then arm, elbow, forearm, hand.</p>
<ul><li>The shoulder region has <b>three bones</b>: <span class="key">clavicle</span>, <span class="key">scapula</span>, <span class="key">humerus</span>.</li>
<li>The <b>clavicle + spine of the scapula</b> together make the <span class="key">pectoral girdle</span>.</li>
<li>Clavicle articulates with the <b>manubrium of the sternum</b> = sternoclavicular joint.</li>
<li>Humerus articulates with the scapula proximally = <b>shoulder (glenohumeral) joint</b>, which distinguishes the shoulder from the arm.</li></ul>
<div class="defn">The only bony connection between the upper limb and the trunk is the clavicle at the <b>sternoclavicular joint</b> (everything else is muscle).</div>`},
{t:"mcq",q:"Which pair of structures makes up the pectoral girdle?",opts:["Clavicle and spine of the scapula","Clavicle and humerus","Scapula and manubrium","Humerus and glenoid cavity"],a:0,why:"The clavicle and the spine of the scapula together comprise the pectoral girdle."},
{t:"mcq",q:"What is the only bony attachment of the upper limb to the axial skeleton?",opts:["Acromioclavicular joint","Sternoclavicular joint","Glenohumeral joint","Scapulothoracic ‘joint’"],a:1,why:"The clavicle meets the manubrium at the sternoclavicular joint; apart from muscle, nothing else connects the limb to the body."},
{t:"mcq",q:"The joint that separates the shoulder from the arm is the:",opts:["Acromioclavicular joint","Sternoclavicular joint","Glenohumeral joint","Elbow joint"],a:2,why:"The humerus meeting the scapula forms the shoulder joint, which distinguishes shoulder from arm."},
{t:"learn",title:"Scapula landmarks",slides:[8,9],explain:`<p>A <b>landmark</b> is a bump, hollow or ridge on a bone. Most exist because a muscle or ligament grabs there, so learn each landmark as "what attaches here?".</p>
<ul><li><b>Fossa</b> = a shallow dish. The scapula's <b>supraspinous</b> (above the spine) and <b>infraspinous</b> (below the spine) fossae are the dishes where those two muscles start; <b>subscapular</b> fossa is the dish on the underside (facing the ribs).</li>
<li><b>Glenoid cavity</b> = the shallow socket for the humerus head.</li>
<li><b>Coracoid</b> ("crow's beak") = a hook sticking forward. <b>Acromion</b> = the flat tip of the spine, the "point" of the shoulder, which meets the clavicle.</li>
<li><b>Notch</b> = a dent where a nerve or vessel passes.</li></ul>
<p>"Palpable" means you can feel it through the skin; use these as landmarks on a living person. T III and T VIII are vertebral levels (thoracic vertebrae 3 and 8) so you can say where the scapula sits relative to the spine.</p>
<p class="tip">Memory hook: spine up high (T3), bottom corner low (T8), so the scapula spans roughly T2 to T7/8.</p>`,html:`<p>The scapula is complex with many landmarks that serve as <b>muscle attachments</b>. It is thin in the centre, but the rotator cuff muscles have broad attachments that surround and protect it.</p>
<table><tr><th>Landmark</th><th>Note</th></tr>
<tr><td>Spine of the scapula</td><td>Divides posterior surface; forms part of pectoral girdle</td></tr>
<tr><td>Supraspinous / infraspinous fossae</td><td>Origins of supraspinatus / infraspinatus</td></tr>
<tr><td>Subscapular fossa</td><td>Anterior surface; origin of subscapularis</td></tr>
<tr><td>Glenoid cavity</td><td>Socket for the head of the humerus</td></tr>
<tr><td>Coracoid process</td><td>Anterior hook (pec minor insertion)</td></tr>
<tr><td>Acromion</td><td>Lateral end of the spine; articulates with clavicle</td></tr>
<tr><td>Suprascapular notch</td><td>Superior border</td></tr>
<tr><td>Superior, inferior and lateral angles</td><td>Inferior angle ≈ T VII-VIII level; spine ≈ T III</td></tr></table>
<p class="tip">Palpable: acromion, coracoid process, spine of scapula (≈T III), inferior angle (≈T VIII), greater and lesser tubercles, clavicle.</p>`},
{t:"match",title:"Match the scapular landmark to its feature",pairs:[["Glenoid cavity","Socket for head of humerus"],["Coracoid process","Anterior hook-like process"],["Supraspinous fossa","Origin of supraspinatus"],["Infraspinous fossa","Origin of infraspinatus"],["Subscapular fossa","Anterior surface; origin of subscapularis"]]},
{t:"mcq",q:"At which vertebral level is the spine of the scapula palpated?",opts:["T I","T III","T VI","T X"],a:1,why:"Spine of scapula is at T III; the inferior angle is at about T VIII."},
{t:"cloze",title:"Scapula landmarks",text:"The inferior angle of the scapula is palpable at level [[TVIII]], while the spine of the scapula is at level [[TIII]].",bank:["TVIII","TIII","TI","TXII"]},
{t:"learn",title:"Humerus (proximal end)",slides:[14],explain:`<p>The <b>head</b> is the smooth ball. Just below it, the <b>tubercles</b> (small rounded bumps) are the attachment points for the rotator cuff muscles. Between the two tubercles runs a groove, the <b>intertubercular groove</b>, which holds the long head of biceps tendon and also acts as an attachment strip for three muscles.</p>
<ul><li><b>Epiphysial plate</b> = the growth plate. The <b>anatomical neck</b> marks where it was, just under the head, while the <b>surgical neck</b> is the narrower part lower down. It is called "surgical" because that is where fractures commonly need surgery.</li>
<li><b>Deltoid tuberosity</b> = a rough patch halfway down the shaft where the deltoid inserts.</li>
<li>The <b>radial groove</b> on the back of the shaft carries the radial nerve (see Arm module).</li></ul>
<p>Lateral lip / floor / medial lip: imagine the groove as a sandwich. The lat dorsi is the filling between pec major and teres major.</p>
<p class="tip">Exam trap: only <b>subscapularis</b> uses the lesser tubercle; the other three cuff muscles share the greater tubercle.</p>`,html:`<p>The <span class="key">head of the humerus</span> articulates with the glenoid cavity. Proximal prominences are muscle attachment sites:</p>
<ul><li><b>Greater tubercle</b> – lateral; supraspinatus, infraspinatus, teres minor insert here (superior, middle, inferior facets)</li>
<li><b>Lesser tubercle</b> – anterior; subscapularis inserts here</li>
<li><b>Intertubercular groove</b> between them – pec major (lateral lip), latissimus dorsi (floor), teres major (medial lip)</li>
<li><b>Anatomical neck</b> (at epiphysial plate) vs <b>surgical neck</b> (below the tubercles – common fracture site)</li>
<li><b>Deltoid tuberosity</b> on the shaft; <b>radial groove</b> on posterior shaft</li></ul>
<p class="tip">Lateral lip = Lady (pec major), floor = Lovely (lat dorsi), medial lip = Major (teres major). Lat dorsi sits between pec major and teres major: “P.L.T.” / “sandwich” – the lat dorsi is the filling.</p>`},
{t:"sort",title:"Where does it insert?",buckets:["Greater tubercle","Lesser tubercle","Intertubercular groove"],items:[["Supraspinatus",0],["Infraspinatus",0],["Teres minor",0],["Subscapularis",1],["Pectoralis major",2],["Latissimus dorsi",2],["Teres major",2]]},
{t:"mcq",q:"Which muscle is the ONLY rotator cuff muscle that does NOT insert on the greater tubercle?",opts:["Supraspinatus","Infraspinatus","Subscapularis","Teres minor"],a:2,why:"Subscapularis inserts on the lesser tubercle; the other three use the greater tubercle."},
{t:"order",title:"Order the proximal humerus landmarks from the head moving distally",steps:["Head","Anatomical neck","Greater/lesser tubercles","Surgical neck","Deltoid tuberosity"],why:"The head is capped by the anatomical neck; the tubercles flank the groove; the surgical neck lies just below them; the deltoid tuberosity is on the shaft."},
{t:"flash",title:"Humerus quick cards",cards:[["Lesser tubercle","Subscapularis insertion"],["Greater tubercle","Supraspinatus, infraspinatus, teres minor insertion"],["Deltoid tuberosity","Deltoid insertion (shaft)"],["Surgical neck","Just below tubercles; common fracture site"]]}
]},
{id:"u3l2",title:"Joints, Ligaments & Movements",mins:8,flower:"🌼",items:[
{t:"learn",title:"Joints of the shoulder",slides:[6,10,11],explain:`<p>A <b>joint</b> is where two bones meet. <b>Synovial</b> joints have a fluid-filled capsule that lets them move freely. <b>Ball and socket</b> means a round head sits in a cup so it can move in many directions (<b>multiaxial</b>).</p>
<ul><li><b>SC</b> = sternoclavicular, <b>AC</b> = acromioclavicular, <b>GH</b> = glenohumeral (humerus into glenoid). "Gleno-" = socket, "humeral" = humerus.</li>
<li>The <b>scapulothoracic</b> "joint" is the scapula sliding over the back of the rib cage like a plate on a tray. It has no joint capsule, so it is not a true joint, hence the quotation marks.</li></ul>
<p>Because the scapula is only attached to the body via the clavicle, every time the scapula moves the clavicle swings at the SC joint (with a little bit of give at AC).</p>
<ul><li>Elevation = shrug; depression = drop shoulders; protraction = reach forward (punching); retraction = squeeze shoulder blades together; upward rotation = glenoid turns to face up (lifting arm overhead).</li></ul>
<p class="tip">Exam trap: don't call the scapulothoracic a synovial joint.</p>`,html:`<ul><li><span class="key">Sternoclavicular (SC)</span> joint – clavicle to manubrium.</li>
<li><span class="key">Acromioclavicular (AC)</span> joint – clavicle to acromion.</li>
<li><span class="key">Glenohumeral (GH)</span> joint – humeral head in glenoid cavity; synovial, ball and socket, multiaxial.</li>
<li><span class="key">Scapulothoracic ‘joint’</span> – scapula gliding across the ribs. Not a true joint (not synovial or any other junction between bones).</li></ul>
<p>Because the scapulothoracic ‘joint’ isn’t a real joint, scapular movement technically occurs at the <b>sternoclavicular joint</b> (with some at the acromioclavicular joint).</p>
<div class="defn">Scapular movements: elevation/depression, protraction/retraction, lateral (upward) rotation/medial (downward) rotation.</div>`},
{t:"mcq",q:"Why is the scapulothoracic ‘joint’ in quotation marks?",opts:["It has no movement","It is a fibrous joint","It is not a synovial or any other junction between bones","It only moves during forced inhalation"],a:2,why:"The scapula just glides over the ribs; movement is technically at the SC joint (with some at the AC joint)."},
{t:"match",title:"Scapular movement pairs",pairs:[["Elevation","Shrugging up"],["Depression","Lowering the scapula"],["Protraction","Scapula moves anteriorly around the chest"],["Retraction","Scapulae pulled toward the spine"],["Lateral (upward) rotation","Needed for maximal abduction"]]},
{t:"mcq",q:"Maximal abduction of the arm (beyond 90°) requires which scapular movement?",opts:["Medial (downward) rotation","Depression","Lateral (upward) rotation","Protraction only"],a:2,why:"Initial ~90° abduction occurs at the GH joint; elevation at the SC joint and lateral (upward) rotation of the scapula allow beyond 90°."},
{t:"learn",title:"Clavicular ligaments & shoulder separation",slides:[12,13],explain:`<p>A <b>ligament</b> is a tough strap connecting bone to bone (tendons connect muscle to bone). Their job is to stop a joint from being pulled apart.</p>
<ul><li>Names tell you what they join: <b>costo-clavicular</b> = rib to clavicle; <b>coraco-clavicular</b> = coracoid to clavicle; <b>acromio-clavicular</b> = acromion to clavicle.</li>
<li>The <b>coracoacromial</b> ligament joins two parts of the same bone (scapula), so it doesn't hold a joint together. Instead it forms a roof over the humeral head, deepening the socket and stopping the head from sliding upward.</li></ul>
<p>The scapula and clavicle are held together at the AC joint like two boards tied by rope. In a <b>shoulder separation</b> (typically falling on the point of the shoulder) the ropes tear; the scapula drops and the clavicle appears to ride up, giving a visible step.</p>
<p class="tip">Dislocation vs separation: separation = AC joint (clavicle/scapula). Dislocation = GH joint (humerus/scapula). Exams love swapping these.</p>`,html:`<p><b>Ligaments</b> connect bone to bone and restrict external separation forces.</p>
<ul><li>SC joint: <b>sternoclavicular</b> and <b>costoclavicular</b> ligaments.</li>
<li>AC joint: <b>acromioclavicular</b> ligament.</li>
<li><b>Coracoclavicular</b> ligaments stabilize the clavicle to the coracoid.</li>
<li><span class="key">Coracoacromial ligament</span> – stretches between two parts of the scapula, so it does <b>not</b> stabilize a joint; it deepens the socket and limits <b>superior dislocation</b> of the humerus.</li></ul>
<div class="defn"><b>Shoulder separation</b> (not dislocation) = tearing of the AC and coracoclavicular ligaments (grade 3 = both torn, clavicle rides up).</div>
<p class="tip">Separation = AC joint ligaments. Dislocation = glenohumeral joint.</p>`},
{t:"mcq",q:"A hockey player is checked into the boards and tears the acromioclavicular and coracoclavicular ligaments. This injury is called a:",opts:["Shoulder dislocation","Shoulder separation","Rotator cuff tear","Labral tear"],a:1,why:"Tearing of these clavicular ligaments is a shoulder separation, not a dislocation of the GH joint."},
{t:"mcq",q:"Which ligament does NOT stabilize a joint because it spans two parts of the same bone?",opts:["Costoclavicular","Coracoacromial","Acromioclavicular","Sternoclavicular"],a:1,why:"The coracoacromial ligament runs between coracoid and acromion; it deepens the socket and limits superior humeral dislocation."},
{t:"sort",title:"Which joint does the ligament support?",buckets:["Sternoclavicular joint","Acromioclavicular joint","No joint (scapula to scapula)"],items:[["Sternoclavicular lig.",0],["Costoclavicular lig.",0],["Acromioclavicular lig.",1],["Coracoacromial lig.",2]]},
{t:"learn",title:"Glenohumeral joint",slides:[15,16,17],explain:`<p>The GH joint is the shoulder proper. It is like a golf ball on a tee: a big round head on a tiny shallow dish. That is why it has the greatest range of motion of any joint, and also why it dislocates most easily.</p>
<ul><li>The <b>glenoid labrum</b> is a rim of fibrocartilage (soft, rubbery tissue) around the edge of the socket that makes the dish deeper, like the lip of a cup.</li>
<li>The <b>capsule</b> is the sleeve around the joint; it is thin so ligaments (coracohumeral and the three glenohumeral ligaments) reinforce it.</li>
<li>A <b>bursa</b> is a small fluid-filled cushion that lets tendons slide over bone without friction.</li>
<li>The <b>long head of biceps</b> tendon runs inside the joint and hooks onto the top of the glenoid (supraglenoid tubercle), helping hold the head in.</li></ul>
<p>The <b>subacromial space</b> is the tight gap under the acromion where the supraspinatus tendon passes.</p>
<p class="tip">"Fetal position" flexion: arm swings forward, elbows toward the chest.</p>`,html:`<ul><li>Synovial, <b>ball and socket</b>, multiaxial.</li>
<li><span class="key">Glenoid labrum</span> cradles the head of the humerus in the glenoid cavity (deepens socket).</li>
<li>Capsule is <b>relatively thin</b> but supported by ligaments: <b>coracohumeral</b>, <b>superior, middle, inferior glenohumeral</b> ligaments.</li>
<li><b>Bursae</b> let muscles glide over the tubercles and head.</li>
<li>The tendon of the <b>long head of biceps brachii</b> passes through the joint cavity to attach above the glenoid fossa (supraglenoid tubercle), stabilizing the joint.</li>
<li><b>Subacromial space</b> – site of impingement of the supraspinatus.</li></ul>
<p>Movements: flexion, extension, abduction, adduction, medial/lateral rotation, circumduction. <i>Flexion = into the ‘fetal position’.</i></p>`},
{t:"cloze",title:"GH joint",text:"The [[labrum]] deepens the glenoid cavity, and the tendon of the long head of [[biceps brachii]] passes through the joint cavity. The site of supraspinatus impingement is the [[subacromial space]].",bank:["labrum","biceps brachii","subacromial space","triceps brachii","costoclavicular ligament"]},
{t:"learn",title:"Shoulder dislocation",slides:[18,19],explain:`<p>A <b>dislocation</b> means the ball has popped out of the socket. Because the GH joint is shallow, this usually happens when the arm is forced into abduction and external rotation; the head slips forward or down.</p>
<p>The <b>axilla</b> (armpit) is the crowded passageway where the main nerves and blood vessels pass from the neck into the arm, and the humeral head sits right beside it. A head that moves can stretch or squash them.</p>
<ul><li><b>Axillary nerve</b> wraps around the surgical neck of the humerus, just below the joint, so inferior dislocations stretch it. Result: deltoid weakness (can't abduct) and numb patch over the "regimental badge" area on the lateral shoulder.</li>
<li><b>Musculocutaneous nerve</b> supplies the front-of-arm muscles that flex the elbow, and skin on the lateral forearm.</li></ul>
<p>"Cord" = a bundle of nerves in the brachial plexus; the cords are named by position relative to the axillary artery.</p>
<p class="tip">Exam pattern: dislocation + weak abduction + numb lateral shoulder = axillary nerve.</p>`,html:`<p>Humeral head dislocation (anterior/superior or inferior) can impact <b>neurovascular structures in the axilla</b>.</p>
<ul><li><b>Axillary nerve</b> (posterior cord) – at risk with inferior dislocation: weak abduction (deltoid), lateral shoulder sensory loss.</li>
<li><b>Musculocutaneous nerve</b> (lateral cord) – anterior arm compartment; elbow flexion and lateral forearm sensation.</li></ul>
<p class="tip">Test the axillary n. by deltoid contraction/abduction and lateral shoulder sensation; musculocutaneous n. by elbow flexion/supination and lateral forearm sensation.</p>`},
{t:"mcq",q:"After an inferior shoulder dislocation, a patient has numbness over the lateral shoulder and difficulty abducting. Which nerve is most likely injured?",opts:["Musculocutaneous n.","Axillary n.","Suprascapular n.","Long thoracic n."],a:1,why:"Axillary n. (posterior cord) supplies deltoid and teres minor and skin of lateral shoulder."},
{t:"sata",q:"Select ALL that stabilize or are part of the glenohumeral joint:",opts:["Glenoid labrum","Coracohumeral ligament","Costoclavicular ligament","Tendon of the long head of biceps brachii","Inferior glenohumeral ligament"],a:[0,1,3,4],why:"The costoclavicular ligament supports the sternoclavicular joint, not the GH joint."}
]},
{id:"u3l3",title:"Rotator Cuff & Deltoid",mins:9,flower:"🌻",items:[
{t:"learn",title:"Rotator cuff: S.I.t.S.",slides:[20,21,22,23],explain:`<p>The four <b>rotator cuff</b> muscles form a cuff of tendons around the humeral head, like a sleeve around a ball. Their main job is not big movements but <b>holding the ball in the shallow socket</b> while the larger muscles move the arm.</p>
<ul><li><b>Origin</b> = the fixed end (usually closer to the trunk); <b>insertion</b> = the end that moves; <b>innervation</b> = the nerve that makes it contract.</li>
<li>Look at where each muscle lies: supraspinatus is above the spine (lifts, so abducts); infraspinatus and teres minor are behind the joint (pull the arm backward-outward = lateral rotation); subscapularis is in front (turns it inward = medial rotation).</li></ul>
<p>Lateral rotation = turning the thumb outward away from the body. Medial rotation = turning it inward toward the stomach.</p>
<p>"C5-C6" are the spinal-cord segments the nerve fibres come from.</p>
<p class="tip">Trap: teres <b>minor</b> is cuff (axillary n.); teres <b>major</b> isn't (lower subscapular n.).</p>`,html:`<div class="defn">Muscles pull, not push. A muscle can only cause an action at a joint if it crosses that joint.</div>
<p>The four rotator cuff muscles act on the humerus at the GH joint and together <b>stabilize the humeral head in the joint</b>.</p>
<table><tr><th>Muscle</th><th>Origin</th><th>Insertion</th><th>Action</th><th>Nerve</th></tr>
<tr><td><b>S</b>upraspinatus</td><td>Supraspinous fossa</td><td>Greater tubercle (superior facet)</td><td>Initiates abduction (~15°)</td><td>Suprascapular (C5–C6)</td></tr>
<tr><td><b>I</b>nfraspinatus</td><td>Infraspinous fossa</td><td>Greater tubercle (middle facet)</td><td>Lateral rotation</td><td>Suprascapular (C5–C6)</td></tr>
<tr><td><b>t</b>eres minor</td><td>Lateral border of scapula</td><td>Greater tubercle (inferior facet)</td><td>Lateral rotation</td><td>Axillary (C5–C6)</td></tr>
<tr><td><b>S</b>ubscapularis</td><td>Subscapular fossa (anterior scapula)</td><td>Lesser tubercle</td><td>Medial rotation</td><td>Upper & lower subscapular (C5–C6)</td></tr></table>
<p class="tip">S.I.t.S. = Supraspinatus, Infraspinatus, teres minor, Subscapularis. Subscapularis is the only one on the lesser tubercle and the only medial rotator.</p>`},
{t:"match",title:"Rotator cuff innervation",pairs:[["Supraspinatus","Suprascapular n."],["Infraspinatus","Suprascapular n."],["Teres minor","Axillary n."],["Subscapularis","Upper and lower subscapular nn."]]},
{t:"mcq",q:"Which rotator cuff muscle is a medial (internal) rotator of the humerus?",opts:["Teres minor","Infraspinatus","Subscapularis","Supraspinatus"],a:2,why:"Subscapularis is a ‘front-to-front’ muscle (anterior scapula to lesser tubercle) and medially rotates."},
{t:"sort",title:"Primary action of each rotator cuff muscle",buckets:["Initiates abduction","Lateral rotation","Medial rotation"],items:[["Supraspinatus",0],["Infraspinatus",1],["Teres minor",1],["Subscapularis",2]]},
{t:"mcq",q:"A patient has weakness of external rotation, and the injury is to a nerve that also innervates supraspinatus. Which muscle is most likely weak (besides supraspinatus)?",opts:["Teres minor","Infraspinatus","Subscapularis","Deltoid"],a:1,why:"Suprascapular n. supplies supraspinatus and infraspinatus; teres minor is axillary."},
{t:"learn",title:"Painful arc & supraspinatus",slides:[20,21],explain:`<p>Think of the subacromial space as a narrow tunnel between the acromion above and the humeral head below, with the supraspinatus tendon running through it. When you raise your arm sideways, the tunnel gets tighter, and if the tendon is inflamed or swollen it gets pinched. That is <b>impingement</b>.</p>
<ul><li><b>Painful arc</b>: it hurts in the middle of the movement (about 60-120°) because that's when the tendon is squeezed hardest, but is fine at the beginning and end when there is more room.</li>
<li><b>Supraspinatus</b> gets the arm started (first ~15°); the deltoid takes over for most of the lift.</li></ul>
<p>Since the coracoacromial ligament and acromion form a roof, the head can't pop upward; instead the tendon gets caught beneath it.</p>
<p class="tip">Hook: "arc" = middle of the arc hurts. Exam trap: pain through the entire range or only at the top is not the classic pattern.</p>`,html:`<p>The supraspinatus tendon runs between the <b>acromion and the humerus</b> in the <span class="key">subacromial space</span>, so it can be pinched on abduction.</p>
<div class="defn"><b>Painful arc (impingement) syndrome</b> – pain between <b>60°–120°</b> of abduction.</div>
<p>Supraspinatus <b>initiates</b> abduction (first ~15°); deltoid completes the bulk of it. Because the coracoacromial ligament deepens the socket, the humeral head cannot easily dislocate superiorly.</p>`},
{t:"mcq",q:"A patient has pain only between 60° and 120° of abduction that eases at higher and lower angles. What is the most likely condition?",opts:["Shoulder separation","Impingement of supraspinatus (painful arc)","Winged scapula","Radial nerve palsy"],a:1,why:"Supraspinatus is pinched between the acromion and humerus in this range."},
{t:"cloze",title:"Painful arc",text:"Painful arc syndrome produces pain between [[60°–120°]] of abduction because the [[supraspinatus]] is pinched in the [[subacromial space]].",bank:["60°–120°","supraspinatus","subacromial space","0°–15°","infraspinatus"]},
{t:"learn",title:"Deltoid",slides:[24,25],explain:`<p>The deltoid is the rounded cap of muscle over your shoulder (named for its triangle shape, like the Greek letter delta). It starts from the girdle bones (clavicle at the front, acromion at the top, scapular spine at the back) and runs down to a rough patch halfway down the humerus.</p>
<p>Because it wraps the shoulder, different fibres pull in different directions:</p>
<ul><li><b>Front</b> fibres lift the arm forward (flexion) and turn it inward.</li>
<li><b>Middle</b> fibres lift the arm out to the side (abduction).</li>
<li><b>Back</b> fibres swing the arm backward (extension) and turn it outward.</li></ul>
<p>All three parts are supplied by the <b>axillary nerve</b>, which wraps around the humerus's surgical neck and sits deep to the muscle.</p>
<p>Intramuscular injections ("flu shots") go into the middle part, a few fingers below the acromion, to stay clear of that nerve.</p>
<p class="tip">Hook: Anterior = Flexion; Posterior = Extension; Middle = Abduction. Trap: deltoid does the bulk of abduction, but supraspinatus starts it.</p>`,html:`<table><tr><th>Origin</th><th>Insertion</th><th>Nerve</th></tr><tr><td>Pectoral girdle (clavicle, acromion, spine of scapula)</td><td>Deltoid tuberosity</td><td>Axillary n. (C5–C6)</td></tr></table>
<ul><li><b>Anterior</b> part – flexion and medial rotation</li>
<li><b>Middle</b> part – abduction</li>
<li><b>Posterior</b> part – extension and lateral rotation</li></ul>
<p class="tip">“The deltoid does almost everything!” Middle deltoid is a common site for intramuscular injection, but the axillary nerve lies deep to it, so inject carefully.</p>`},
{t:"match",title:"Deltoid parts",pairs:[["Anterior deltoid","Flexion + medial rotation"],["Middle deltoid","Abduction"],["Posterior deltoid","Extension + lateral rotation"]]},
{t:"mcq",q:"Which nerve supplies both the deltoid and teres minor?",opts:["Axillary n.","Suprascapular n.","Radial n.","Lower subscapular n."],a:0,why:"The axillary n. (C5–C6) supplies deltoid and teres minor."},
{t:"sata",q:"Which muscles are innervated by the axillary nerve? (select all)",opts:["Deltoid","Teres minor","Teres major","Infraspinatus","Supraspinatus"],a:[0,1],why:"Teres major = lower subscapular; infraspinatus and supraspinatus = suprascapular."},
{t:"mcq",q:"Which part of the deltoid contributes to extension and lateral rotation of the humerus?",opts:["Anterior","Middle","Posterior","All parts equally"],a:2,why:"Posterior deltoid extends and laterally rotates; anterior flexes and medially rotates."}
]},
{id:"u3l4",title:"Thoracoappendicular Muscles",mins:9,flower:"🌺",items:[
{t:"learn",title:"Pectoral muscles",slides:[26,27],explain:`<p>"Pectoral" just means chest. These muscles run from the front of the chest wall to the shoulder region. The slides give detailed attachments for reference; focus on what each one does.</p>
<ul><li><b>Pectoralis major</b> is the big chest muscle. It pulls the humerus across the chest (adduction) and turns it inward (medial rotation) as in hugging or a push-up. Its upper fibres lift the arm forward (flexion); lower fibres bring it back down from raised (extension).</li>
<li><b>Pectoralis minor</b> lies underneath, from ribs 3-5 up to the coracoid process. It pulls the scapula forward and down. If the scapula is fixed, it can pull on the ribs to help forced inhalation.</li>
<li><b>Subclavius</b> ("under the clavicle") is a small muscle that anchors the clavicle toward rib 1, steadying the SC joint.</li></ul>
<p>Nerves are named by location: medial and lateral pectoral nerves for the pecs; "nerve to subclavius" for subclavius.</p>
<p class="tip">Trap: pec <b>major</b> acts on the humerus; pec <b>minor</b> acts on the scapula.</p>`,html:`<p>Muscle attachment detail is for reference; know the simplified chart.</p>
<table><tr><th>Muscle</th><th>Origin</th><th>Insertion</th><th>Action</th><th>Nerve</th></tr>
<tr><td><b>Pectoralis major</b> (acts on humerus at GH)</td><td>Clavicle, sternum, ribs</td><td>Lateral lip of intertubercular groove</td><td>All heads: medial rotation + adduction. Superior fibres: flexion; inferior fibres: extension (back to neutral)</td><td>Medial & lateral pectoral nn. (C5–C7; C8–T1)</td></tr>
<tr><td><b>Pectoralis minor</b> (acts on scapula)</td><td>Ribs 3–5</td><td>Coracoid process</td><td>Protraction + depression of scapula; assists forced inhalation when scapula fixed</td><td>Medial (and lateral) pectoral nn.</td></tr>
<tr><td><b>Subclavius</b></td><td>Rib 1</td><td>Inferior surface of clavicle</td><td>Stabilizes clavicle at SC joint</td><td>N. to subclavius (C5–C6)</td></tr></table>`},
{t:"match",title:"Pectoral muscles",pairs:[["Pectoralis major","Medial rotation + adduction of humerus"],["Pectoralis minor","Protraction and depression of scapula"],["Subclavius","Stabilizes the clavicle"],["N. to subclavius","C5–C6"]]},
{t:"mcq",q:"Pectoralis minor inserts on the:",opts:["Lesser tubercle","Coracoid process","Clavicle","Medial border of scapula"],a:1,why:"Pec minor runs from ribs 3–5 to the coracoid process."},
{t:"mcq",q:"Which muscle stabilizes the clavicle at the sternoclavicular joint, originating from rib 1?",opts:["Pectoralis minor","Subclavius","Serratus anterior","Levator scapulae"],a:1,why:"Subclavius: rib 1 to inferior clavicle, nerve to subclavius."},
{t:"learn",title:"Serratus anterior & winged scapula",slides:[28],explain:`<p><b>Serratus</b> means "saw-toothed": the muscle's origin looks like saw teeth on the side of the ribs. It runs around the side of the chest, then slips <i>under</i> the scapula to attach on its medial edge. Think of it as the muscle that holds the shoulder blade flat against the ribs.</p>
<ul><li>It pulls the scapula forward around the chest (protraction): the "boxer's muscle" for punching.</li>
<li>Its lower fibres rotate the scapula upward to help raise your arm overhead.</li></ul>
<p>The <b>long thoracic nerve</b> runs on the outer surface of the muscle down the side of the chest, so it is vulnerable (for example in breast or axillary surgery). If it is cut, the muscle stops working and the medial edge of the scapula sticks out from the back like a wing: <b>winged scapula</b>. It's most obvious when the patient pushes against a wall.</p>
<p class="tip">Hook: the long thoracic nerve is the one that runs "long" down the chest wall; trap: the dorsal scapular nerve goes to the rhomboids, not serratus.</p>`,html:`<table><tr><th>Origin</th><th>Insertion</th><th>Nerve</th></tr><tr><td>Lateral aspects of ribs</td><td>Medial border of scapula</td><td>Long thoracic n. (C5–C7)</td></tr></table>
<ul><li>Acts on scapula at the SC and scapulothoracic ‘joint’.</li>
<li>Protraction of the scapula; assists forced inhalation when scapula is fixed.</li>
<li><b>Superior</b> part → downward (medial) rotation (lowering the raised arm).</li>
<li><b>Inferior</b> part → upward (lateral) rotation (to raise the arm fully).</li></ul>
<div class="defn"><b>Paralysis of serratus anterior = winged scapula</b> (long thoracic n. injury).</div>`},
{t:"mcq",q:"A woman has a medial border of the scapula that lifts off the posterior thoracic wall when she pushes against a wall. Which nerve is injured?",opts:["Dorsal scapular n.","Long thoracic n.","Thoracodorsal n.","Spinal accessory n."],a:1,why:"Long thoracic n. (C5–C7) supplies serratus anterior; paralysis causes winged scapula."},
{t:"mcq",q:"Which part of serratus anterior contributes to upward rotation of the scapula to raise the arm fully?",opts:["Superior part","Inferior part","Middle only","None; it only protracts"],a:1,why:"Inferior part = upward rotation; superior part = downward rotation."},
{t:"cloze",title:"Serratus anterior",text:"Serratus anterior is innervated by the [[long thoracic]] nerve and its paralysis causes a [[winged scapula]]; it inserts on the [[medial]] border of the scapula.",bank:["long thoracic","winged scapula","medial","dorsal scapular","lateral"]},
{t:"learn",title:"Teres major & latissimus dorsi",slides:[29,31],explain:`<p>Both muscles run from the back to the front of the humerus, so both pull the arm <b>backward, inward and toward the body</b>: extension, adduction, medial rotation. Think of pulling yourself up a rope, or swimming freestyle.</p>
<ul><li><b>Latissimus dorsi</b> ("widest muscle of the back") is huge. It arises from the thoracolumbar fascia (the thick sheet of connective tissue over the lower back) and is one of the extrinsic back muscles, meaning it starts on the trunk and ends on the limb.</li>
<li><b>Teres major</b> is a small, round muscle starting on the lower lateral scapula. Sometimes called "lat's little helper".</li></ul>
<p>Their tendons both attach in the intertubercular groove, alongside pec major, hence the P.L.T. order from lateral to medial.</p>
<p class="tip">Trap: Teres major (lower subscapular n.) and lat dorsi (thoracodorsal n.) have different nerves despite similar actions.</p>`,html:`<table><tr><th>Muscle</th><th>Origin</th><th>Insertion</th><th>Action (GH)</th><th>Nerve</th></tr>
<tr><td><b>Teres major</b></td><td>Lateral border & inferior angle of scapula</td><td>Medial lip of intertubercular groove</td><td>Adduction, extension, medial rotation</td><td>Lower subscapular n. (C5–C6)</td></tr>
<tr><td><b>Latissimus dorsi</b></td><td>Thoracolumbar fascia</td><td>Floor of intertubercular groove</td><td>Adduction, extension, medial rotation</td><td>Thoracodorsal n. (C6–C8)</td></tr></table>
<p>Teres major is a “back-to-front” muscle. Latissimus dorsi is an <b>extrinsic back (thoracoappendicular)</b> muscle: originates on the thorax, inserts on the appendage.</p>
<p class="tip">P.L.T. = Pec major (lateral lip), Lat dorsi (floor), Teres major (medial lip) – the lat dorsi is the ‘sandwich filling’.</p>`},
{t:"order",title:"From lateral to medial in the intertubercular groove:",steps:["Pectoralis major (lateral lip)","Latissimus dorsi (floor)","Teres major (medial lip)"],why:"P.L.T. – Pec major, Lat dorsi, Teres major."},
{t:"mcq",q:"Which nerve supplies latissimus dorsi?",opts:["Thoracodorsal n.","Lower subscapular n.","Long thoracic n.","Dorsal scapular n."],a:0,why:"Thoracodorsal n. (C6–C8). Lower subscapular n. supplies teres major."},
{t:"sort",title:"Sort muscles by nerve",buckets:["Thoracodorsal","Lower subscapular","Long thoracic","Pectoral nn."],items:[["Latissimus dorsi",0],["Teres major",1],["Serratus anterior",2],["Pectoralis major",3],["Pectoralis minor",3]]},
{t:"sata",q:"Which muscles contribute to adduction AND medial rotation of the humerus? (select all)",opts:["Pectoralis major","Teres major","Latissimus dorsi","Teres minor","Infraspinatus"],a:[0,1,2],why:"Teres minor and infraspinatus laterally rotate."},
{t:"mcq",q:"Which muscle is both a medial rotator and extender of the humerus and arises from the thoracolumbar fascia?",opts:["Latissimus dorsi","Pectoralis major","Teres minor","Rhomboid major"],a:0,why:"Lat dorsi: adduction, extension, medial rotation."}
]},
{id:"u3l5",title:"Back Muscles & Full Abduction",mins:8,flower:"🌷",items:[
{t:"learn",title:"Trapezius",slides:[32],explain:`<p>The trapezius is a large diamond (trapezoid) shaped muscle, running from the base of the skull down to T XII and out to the clavicle, acromion and scapular spine. The two sides together make a trapezoid shape.</p>
<p>Because its fibres fan in different directions, it does many things to the scapula:</p>
<ul><li>Upper fibres <b>elevate</b> (shrug).</li>
<li>Middle fibres <b>retract</b> (pinch blades together).</li>
<li>Lower fibres <b>depress</b>.</li>
<li>Upper and lower fibres together <b>rotate upward</b> (turning the socket skyward so you can reach overhead).</li></ul>
<p>It can also tilt the head to the same side when the scapula is fixed.</p>
<p>"Extrinsic back muscles" are the ones that move the limb, not the spine (intrinsic muscles move the spine). They are called thoracoappendicular because they run from the thorax to the appendage.</p>
<p class="tip">Trap: the trapezius is supplied by cranial nerve XI (spinal accessory), not by the brachial plexus, so a neck-surgery nerve injury causes a drooping, weak shoulder.</p>`,html:`<p>Extrinsic back muscles are also the <b>thoracoappendicular</b> muscles (thorax → upper limb).</p>
<table><tr><th>Origin</th><th>Insertion</th><th>Action</th><th>Nerve</th></tr><tr><td>Vertebral column (base of skull to T XII)</td><td>Pectoral girdle (scapula/clavicle)</td><td>Elevation, depression, retraction, upward rotation of scapula; acting on neck: abducts (tilts) head to ipsilateral side</td><td>Spinal accessory n. (CN XI)</td></tr></table>
<p class="tip">Trapezius is supplied by CN XI, NOT a brachial plexus nerve.</p>`},
{t:"mcq",q:"Which cranial nerve supplies the trapezius?",opts:["CN IX","CN X","CN XI","CN XII"],a:2,why:"Spinal accessory n. (CN XI). (CN IX is glossopharyngeal.)"},
{t:"mcq",q:"A surgeon cuts the spinal accessory nerve during a neck node biopsy. Which finding is expected?",opts:["Winged scapula from serratus paralysis","Weak shrugging and drooping of the shoulder","Loss of lateral shoulder sensation","Loss of medial rotation"],a:1,why:"Trapezius weakness impairs elevation/retraction/upward rotation of the scapula."},
{t:"learn",title:"Levator scapulae & rhomboids",slides:[33],explain:`<p>These are the deep partners to trapezius, all attached between the spine and the scapula, and they do what their names suggest.</p>
<ul><li><b>Levator scapulae</b> = "lifter of the scapula". It runs from the side of the neck vertebrae to the top corner (superior angle) of the scapula, and shrugs the shoulder.</li>
<li><b>Rhomboids</b> (named after their diamond shape) run from the spinous processes (the bony bumps you feel down the midline of the back) to the medial border of the scapula. They pull the blade toward the spine = retraction, as in "squeeze your shoulder blades together".</li></ul>
<p>All three are supplied by the <b>dorsal scapular nerve</b> (C5), named because it supplies muscles behind the scapula. Remember "dorsal" = back.</p>
<p>Together the rhomboids and serratus anterior pin the medial border to the chest wall from either side, like a sling.</p>
<p class="tip">Hook: Levator = Lifts; Rhomboids = Reel in (retract). Trap: don't confuse with the trapezius (CN XI).</p>`,html:`<table><tr><th>Muscle</th><th>Origin</th><th>Insertion</th><th>Action</th><th>Nerve</th></tr>
<tr><td>Levator scapulae</td><td>Transverse processes of vertebrae</td><td>Superior angle of scapula</td><td>Elevation (mostly)</td><td>Dorsal scapular n. (C5)</td></tr>
<tr><td>Rhomboid minor</td><td>Spinous processes of vertebrae</td><td>Medial border of scapula</td><td>Retraction (mostly)</td><td>Dorsal scapular n.</td></tr>
<tr><td>Rhomboid major</td><td>Spinous processes of vertebrae</td><td>Medial border of scapula</td><td>Retraction (mostly)</td><td>Dorsal scapular n.</td></tr></table>
<p>All three act on the scapula at the SC and scapulothoracic ‘joint’.</p>`},
{t:"match",title:"Back muscles",pairs:[["Levator scapulae","Elevation of the scapula"],["Rhomboids","Retraction of the scapula"],["Trapezius","Spinal accessory n. (CN XI)"],["Dorsal scapular n.","Levator scapulae and rhomboids"]]},
{t:"mcq",q:"Levator scapulae inserts on the:",opts:["Medial border of scapula","Superior angle of scapula","Coracoid process","Inferior angle of scapula"],a:1,why:"Levator scapulae: transverse processes → superior angle; rhomboids → medial border."},
{t:"learn",title:"Full abduction 0°–180°: the relay",slides:[34,35],explain:`<p>Abduction means lifting the arm out to the side. To go from hanging at your side to straight overhead takes four muscles in sequence, like a relay race where each runner passes the baton on.</p>
<ul><li><b>0-15°:</b> supraspinatus gets the humerus moving at the GH joint.</li>
<li><b>15-90°:</b> the deltoid does the heavy lifting, also at GH.</li>
<li><b>90-160°:</b> by now the humerus is running out of room against the acromion, so the scapula itself must rotate. The trapezius tilts the scapula's socket upward.</li>
<li><b>160-180°:</b> serratus anterior finishes the rotation to point the arm to the ceiling.</li></ul>
<p>Each muscle has a different nerve, which is why a weak abduction at a particular angle tells you which nerve is injured.</p>
<p class="tip">Memory hook for the nerves: "Suprascapular, Axillary, Spinal accessory, Long thoracic" = S.A.S.L. in order. Trap: ranges overlap in real life, but exams use these numbers.</p>`,html:`<p>Abduction of the upper limb involves <b>four muscles supplied by four nerves</b>:</p>
<table><tr><th>Range</th><th>Joint</th><th>Muscle</th><th>Nerve</th></tr>
<tr><td>0–15°</td><td>Glenohumeral</td><td>Supraspinatus</td><td>Suprascapular n.</td></tr>
<tr><td>15–90°</td><td>Glenohumeral</td><td>Deltoid</td><td>Axillary n.</td></tr>
<tr><td>90–160°</td><td>SC / scapulothoracic</td><td>Trapezius</td><td>Spinal accessory n. (CN XI)</td></tr>
<tr><td>160–180°</td><td>SC / scapulothoracic</td><td>Serratus anterior</td><td>Long thoracic n.</td></tr></table>
<p class="tip">Sequence of nerves: Suprascapular → Axillary → Spinal accessory → Long thoracic.</p>`},
{t:"order",title:"Order the muscles that abduct the limb from 0° to 180°",steps:["Supraspinatus","Deltoid","Trapezius","Serratus anterior"],why:"0–15° supraspinatus, 15–90° deltoid, 90–160° trapezius, 160–180° serratus anterior."},
{t:"match",title:"Abduction range to nerve",pairs:[["0–15°","Suprascapular n."],["15–90°","Axillary n."],["90–160°","Spinal accessory n."],["160–180°","Long thoracic n."]]},
{t:"mcq",q:"A patient can abduct to about 90° but cannot raise the arm overhead, and the scapula does not rotate upward. Which pair is most likely affected?",opts:["Supraspinatus and deltoid","Trapezius and serratus anterior","Infraspinatus and teres minor","Pec major and lat dorsi"],a:1,why:"Beyond 90° scapular upward rotation by trapezius and serratus anterior is needed."},
{t:"flash",title:"Review cards: nerves",cards:[["Suprascapular n.","Supraspinatus, infraspinatus"],["Axillary n.","Deltoid, teres minor"],["Long thoracic n.","Serratus anterior"],["Dorsal scapular n.","Levator scapulae, rhomboids"],["Thoracodorsal n.","Latissimus dorsi"],["Lower subscapular n.","Teres major (and subscapularis)"]]}
]},
{id:"u3boss",title:"Shoulder Boss Quiz",mins:7,flower:"👑",boss:true,items:[
{t:"mcq",q:"The pectoral girdle consists of:",opts:["Clavicle and humerus","Clavicle and spine of the scapula","Scapula and ribs","Humerus and scapula"],a:1,why:"Clavicle + spine of scapula."},
{t:"mcq",q:"Which muscle is the only rotator cuff muscle inserting on the lesser tubercle?",opts:["Teres minor","Supraspinatus","Subscapularis","Infraspinatus"],a:2,why:"Subscapularis."},
{t:"mcq",q:"Winged scapula results from injury to which nerve?",opts:["Dorsal scapular","Long thoracic","Thoracodorsal","Suprascapular"],a:1,why:"Long thoracic n. → serratus anterior."},
{t:"sata",q:"Which muscles are laterally rotators of the humerus?",opts:["Infraspinatus","Teres minor","Subscapularis","Posterior deltoid","Teres major"],a:[0,1,3],why:"Subscapularis and teres major medially rotate."},
{t:"mcq",q:"A tear of the AC and coracoclavicular ligaments is a:",opts:["Shoulder dislocation","Shoulder separation","Impingement","Bankart lesion"],a:1,why:"Separation, not dislocation."},
{t:"mcq",q:"A patient has weak initiation of abduction (first ~15°) but good deltoid strength. Which nerve is most likely injured?",opts:["Axillary","Suprascapular","Long thoracic","Musculocutaneous"],a:1,why:"Supraspinatus is supplied by the suprascapular n."},
{t:"order",title:"Order the nerves for abduction from 0° to 180°",steps:["Suprascapular","Axillary","Spinal accessory","Long thoracic"],why:"Supraspinatus → deltoid → trapezius → serratus anterior."},
{t:"mcq",q:"Which muscle sits in the floor of the intertubercular groove?",opts:["Pectoralis major","Latissimus dorsi","Teres major","Deltoid"],a:1,why:"P.L.T. – lat dorsi is the floor."},
{t:"mcq",q:"Pain between 60° and 120° of abduction suggests:",opts:["Subscapularis tear","Supraspinatus impingement","Deltoid paralysis","AC separation"],a:1,why:"Painful arc syndrome."},
{t:"sata",q:"Select the muscles innervated by the dorsal scapular nerve or spinal accessory nerve:",opts:["Trapezius","Rhomboid major","Levator scapulae","Serratus anterior","Latissimus dorsi"],a:[0,1,2],why:"Serratus = long thoracic; lat dorsi = thoracodorsal."}
]}
]});
EXAMQ.push(
{t:"mcq",unit:3,mod:"u3",q:"Which structure is the only bony connection between the upper limb and the axial skeleton?",opts:["Acromioclavicular joint","Glenohumeral joint","Sternoclavicular joint","Scapulothoracic joint","Costovertebral joint"],a:2,why:"The clavicle articulates with the manubrium at the sternoclavicular joint."},
{t:"mcq",unit:3,mod:"u3",q:"A man falls on the tip of his shoulder; the clavicle sits high at the AC joint. Which ligaments are torn?",opts:["Glenohumeral and coracohumeral","Acromioclavicular and coracoclavicular","Costoclavicular and sternoclavicular","Coracoacromial only","Transverse humeral"],a:1,why:"Shoulder separation involves AC and coracoclavicular ligaments."},
{t:"mcq",unit:3,mod:"u3",q:"A patient with an inferior shoulder dislocation has difficulty abducting 15°–90° and lacks sensation over the lateral shoulder. Which nerve?",opts:["Suprascapular","Axillary","Musculocutaneous","Long thoracic","Radial"],a:1,why:"Axillary nerve supplies deltoid and skin over the lateral shoulder."},
{t:"mcq",unit:3,mod:"u3",q:"Which of the following is NOT a rotator cuff muscle?",opts:["Supraspinatus","Infraspinatus","Teres major","Teres minor","Subscapularis"],a:2,why:"Teres major is not part of the S.I.t.S. group."},
{t:"mcq",unit:3,mod:"u3",q:"Which muscle contributes to medial rotation and inserts on the lesser tubercle?",opts:["Teres major","Latissimus dorsi","Subscapularis","Infraspinatus","Pectoralis major"],a:2,why:"Subscapularis, lesser tubercle."}
);

MODULES.push({
id:"u4", num:11, unit:3, title:"Arm",
blurb:"Elbow bones, joints and ligaments, arm compartments, biceps/brachialis/coracobrachialis/triceps, radial and musculocutaneous nerves, cutaneous map, and the cubital fossa.",
badge:{name:"Elbow Ace",icon:"💪"},
lessons:[
{id:"u4l1",title:"Elbow Bones, Joints & Ligaments",mins:8,flower:"🌸",items:[
{t:"learn",title:"Arm vs shoulder vs forearm",slides:[2,4,5,6],explain:`<p>Anatomists use words more strictly than everyday speech. In anatomy the <b>arm</b> is only the segment between shoulder and elbow (the humerus part), and the <b>forearm</b> is elbow to wrist. So the two big joints are the dividing lines: the shoulder (GH) joint separates shoulder from arm, and the <b>elbow</b> separates arm from forearm.</p>
<ul><li><b>Cubital</b> = relating to the elbow (from the Latin for elbow).</li>
<li><b>Hinge</b> joint = moves like a door, bending and straightening only (flexion/extension).</li>
<li><b>Pivot</b> = rotating around an axis. When you turn your palm up and down (supination/pronation), the radius spins around the ulna at the elbow's radioulnar joint.</li>
<li>A <b>compartment</b> is a group of muscles with a shared function and nerve, wrapped in fascia (a sheet of connective tissue).</li></ul>
<p>The <b>cubital fossa</b> is the small triangular dip on the front of the elbow, where blood is drawn.</p>
<p class="tip">Trap: "arm" does not include the forearm in anatomy exams.</p>`,html:`<ul><li>Humerus + scapula = <b>shoulder joint</b> (separates shoulder from arm).</li>
<li>Humerus + radius + ulna = <span class="key">elbow joint</span> (separates arm from forearm).</li>
<li>The elbow (cubital joint) is synovial; acts mostly as a <b>hinge</b>, but also as a <b>pivot</b> during pronation/supination, where the radius rotates across the ulna.</li>
<li>The arm has <b>anterior and posterior compartments</b>; the <b>cubital fossa</b> is at the elbow.</li></ul>`},
{t:"mcq",q:"Which joint distinguishes the arm from the forearm?",opts:["Glenohumeral","Elbow","Wrist","Acromioclavicular"],a:1,why:"The humerus articulates with the radius and ulna distally to form the elbow joint."},
{t:"mcq",q:"The elbow acts as a pivot joint during:",opts:["Flexion","Pronation and supination","Abduction","Circumduction"],a:1,why:"The radius rotates across the ulna during pronation/supination."},
{t:"learn",title:"Distal humerus & elbow joints",slides:[7,8,9],explain:`<p>Distal means "far from the trunk", so this is the bottom end of the humerus, where it meets the two forearm bones. Its shape explains the joints.</p>
<ul><li><b>Trochlea</b> (pulley): spool-shaped, the notch of the ulna rides in it like a rope in a pulley, giving a smooth hinge.</li>
<li><b>Capitulum</b> ("little head"): the rounded ball that the radius head spins against.</li>
<li><b>Epicondyles</b>: the medial and lateral bumps you can feel at the sides of the elbow (the "funny bone" area).</li>
<li><b>Olecranon</b> = the point of the elbow (back of the ulna). When you straighten the arm it sits into the <b>olecranon fossa</b> (a hollow on the back of the humerus) like a key in a lock, stopping hyperextension (bending backwards). The <b>coronoid process</b> at the front of the ulna stops over-flexion.</li></ul>
<p>Three joints share one capsule: humeroulnar, humeroradial, and the proximal radioulnar (between the radius and ulna).</p>
<p class="tip">Trap: the humeroulnar and humeroradial together = the "cubital joint"; the radioulnar is separate.</p>`,html:`<ul><li><b>Trochlea</b> = ‘pulley’ (articulates with ulna); <b>capitulum</b> articulates with the head of the radius.</li>
<li><b>Medial and lateral epicondyles</b>.</li>
<li><b>Olecranon fossa</b> (posterior) receives the olecranon process; <b>coronoid</b> process of ulna (anterior).</li>
<li>Ulna: olecranon, coronoid process, ulnar tuberosity. Radius: head, radial tuberosity.</li></ul>
<table><tr><th>Joint</th><th>Articulation</th></tr><tr><td>Humeroulnar</td><td>Humerus + ulna</td></tr><tr><td>Humeroradial</td><td>Humerus + radius</td></tr><tr><td>Proximal radioulnar</td><td>Radius + ulna</td></tr></table>
<p>Humeroulnar + humeroradial = the cubital joint.</p>
<p class="tip">The olecranon process locks into the olecranon fossa to prevent hyperextension; the olecranon and coronoid processes limit hyperextension and hyperflexion.</p>`},
{t:"match",title:"Elbow bony landmarks",pairs:[["Trochlea","‘Pulley’"],["Olecranon fossa","Receives olecranon on extension"],["Capitulum","Articulates with the radial head"],["Coronoid process","Ulnar process limiting hyperflexion"]]},
{t:"mcq",q:"What prevents hyperextension at the elbow?",opts:["Annular ligament","Olecranon process locking in the olecranon fossa","Radial tuberosity","Coronoid fossa only"],a:1,why:"The olecranon process of the ulna locks in the olecranon fossa of the humerus."},
{t:"sort",title:"Which elbow joint?",buckets:["Humeroulnar","Humeroradial","Proximal radioulnar"],items:[["Trochlea + ulna",0],["Capitulum + radial head",1],["Radial head against ulna (annular lig.)",2],["Part of cubital joint (ulna side)",0]]},
{t:"learn",title:"Elbow ligaments",slides:[10,11],explain:`<p>Ligaments are the elbow's seat belts, bone-to-bone straps stopping sideways bending that the hinge isn't designed for.</p>
<ul><li><b>Radial collateral</b> (lateral side) stops the forearm from swinging <b>away</b> from the body's midline (abduction).</li>
<li><b>Ulnar collateral</b> (medial side) stops it from swinging <b>toward</b> the midline (adduction). This is the ligament throwers (baseball pitchers) strain; the Tommy John surgery replaces it.</li>
<li><b>Annular</b> ("ring-shaped") ligament wraps like a collar around the head of the radius, holding it against the ulna, but still letting it spin for pronation/supination.</li></ul>
<p>In a young child the radial head is small and the collar is loose. If someone yanks the child up by the hand, the radial head can slip partly out (a <b>subluxation</b>: partial dislocation) and the annular ligament gets caught. The child won't use the arm until it's reduced.</p>
<p class="tip">Hook: radial collateral is on the radius (lateral) side and stops abduction; ulnar collateral is on the ulna (medial) side and stops adduction.</p>`,html:`<table><tr><th>Ligament</th><th>Function</th></tr>
<tr><td>Radial collateral</td><td>Prevents <b>abduction</b> at the elbow</td></tr>
<tr><td>Ulnar collateral</td><td>Prevents <b>adduction</b> at the elbow (Tommy John surgery)</td></tr>
<tr><td>Annular ligament of radius</td><td>Anchors head of radius against ulna; supports proximal radioulnar joint</td></tr></table>
<p>Both collateral ligaments support the cubital joint.</p>
<div class="defn"><b>Radial head subluxation</b>: pinching of the annular ligament at the proximal radioulnar joint (pulled forearm, pronated).</div>`},
{t:"mcq",q:"Which ligament prevents adduction at the elbow?",opts:["Radial collateral","Ulnar collateral","Annular","Coracohumeral"],a:1,why:"Ulnar collateral prevents adduction; radial collateral prevents abduction."},
{t:"mcq",q:"A toddler is pulled up by the hand and refuses to use the arm; the annular ligament is pinched. This is:",opts:["Cubital joint dislocation","Radial head subluxation","Popeye sign","Compartment syndrome"],a:1,why:"The annular ligament anchors the radial head against the ulna; pinching causes subluxation."},
{t:"cloze",title:"Ligaments",text:"The [[annular]] ligament anchors the radial head, the [[radial collateral]] ligament prevents abduction, and the [[ulnar collateral]] ligament prevents adduction.",bank:["annular","radial collateral","ulnar collateral","coracoacromial"]}
]},
{id:"u4l2",title:"Arm Compartments & Muscles",mins:9,flower:"🌼",items:[
{t:"learn",title:"Compartments",slides:[12,13],explain:`<p>The arm is like two rooms separated by a wall. Layers of tough <b>deep fascia</b> (connective tissue wrapping) form the walls; the <b>intermuscular septum</b> is the wall between the front and back rooms.</p>
<ul><li><b>Anterior (front) compartment</b> = flexors (bend the elbow): biceps, brachialis, coracobrachialis; nerve = musculocutaneous.</li>
<li><b>Posterior (back) compartment</b> = extensors (straighten the elbow): triceps; nerve = radial.</li></ul>
<p>The logic is that muscles sharing a room share a nerve and a job. So when an exam question tells you one function is lost, you can infer the nerve.</p>
<p><b>Compartment syndrome</b>: since the fascia walls don't stretch, swelling or bleeding inside a room raises the pressure and squeezes the muscles and nerves inside, causing severe pain and loss of function. It is an emergency.</p>
<p class="tip">Hook: Front = Flexors = musculocutaneous (Muscle "M" for bending). Back = extensors = radial.</p>`,html:`<p>Muscles are grouped into compartments by thick layers of deep fascia (<span class="key">intermuscular septum</span>).</p>
<table><tr><th>Compartment</th><th>Type</th><th>Nerve</th></tr><tr><td>Anterior</td><td>Flexor</td><td>Musculocutaneous n.</td></tr><tr><td>Posterior</td><td>Extensor</td><td>Radial n.</td></tr></table>
<p>Inflammation within a compartment causes pain and functional deficits = <b>compartment syndrome</b>.</p>`},
{t:"mcq",q:"Which nerve innervates the entire flexor (anterior) compartment of the arm?",opts:["Radial","Median","Musculocutaneous","Ulnar"],a:2,why:"The musculocutaneous n. supplies the anterior compartment."},
{t:"mcq",q:"The only muscle in the posterior compartment of the arm is:",opts:["Brachialis","Triceps brachii","Coracobrachialis","Anconeus"],a:1,why:"Triceps brachii is the sole posterior arm compartment muscle."},
{t:"learn",title:"Triceps brachii",slides:[14,15],explain:`<p>"Tri-ceps" = three heads, "brachii" = of the arm. All three heads join into one tendon that attaches to the olecranon (the point of the elbow), so contracting pulls the ulna straight: elbow <b>extension</b>, like pushing a door open or doing a push-up.</p>
<ul><li>The <b>long head</b> starts on the scapula (infraglenoid tubercle, just under the socket), so it crosses the shoulder too and helps pull the arm backward/adduct.</li>
<li>The <b>lateral and medial heads</b> start on the humerus shaft above and below the radial groove.</li></ul>
<p>The <b>radial groove</b> is a diagonal spiral channel on the back of the humerus. The radial nerve and the deep brachial artery travel through it, tucked under the lateral head. Because it hugs the bone, a mid-shaft humerus fracture can hurt the nerve, giving "wrist drop" (can't extend the wrist/fingers).</p>
<p class="tip">Trap: the radial nerve supplies all the extensor muscles of both arm and forearm; so an injury there spares the elbow flexors.</p>`,html:`<table><tr><th>Head</th><th>Origin</th></tr>
<tr><td>Long</td><td>Infraglenoid tubercle of scapula</td></tr>
<tr><td>Lateral</td><td>Shaft of humerus <b>above</b> the radial groove</td></tr>
<tr><td>Medial</td><td>Shaft of humerus <b>below</b> the radial groove</td></tr></table>
<ul><li>Common insertion: <b>olecranon process</b> of ulna.</li><li>Nerve: <b>radial n.</b> (C5–T1).</li>
<li>All 3 heads: extension at elbow. Long head also: adduction and some extension at shoulder.</li></ul>
<p>The radial nerve runs with the <b>deep brachial artery</b> posterior to the humerus in the <span class="key">radial groove</span>, deep to the lateral head. The radial n. innervates all muscles in the posterior compartments of the arm and forearm.</p>`},
{t:"mcq",q:"Which head of triceps crosses the shoulder joint?",opts:["Long head","Lateral head","Medial head","All three"],a:0,why:"The long head originates from the infraglenoid tubercle and so also acts on the shoulder."},
{t:"mcq",q:"A midshaft humerus fracture damages the nerve in the radial groove. Which is expected?",opts:["Loss of elbow flexion","Loss of posterior forearm compartment (extensor) function","Loss of lateral forearm sensation only","Winged scapula"],a:1,why:"The radial nerve innervates all muscles in the posterior compartments of the arm and forearm, and runs in the radial groove."},
{t:"order",title:"Order from proximal to distal along the radial n. path in the arm",steps:["Axilla/posterior cord","Radial groove","Deep to lateral head of triceps","Cubital fossa (bifurcation)"],why:"Radial n. leaves the axilla, runs in the radial groove deep to the lateral head, and ends by bifurcating in the cubital fossa."},
{t:"match",title:"Triceps heads",pairs:[["Long head","Infraglenoid tubercle"],["Lateral head","Humerus above radial groove"],["Medial head","Humerus below radial groove"],["Common insertion","Olecranon process"]]},
{t:"learn",title:"Anterior compartment muscles",slides:[16,18],explain:`<p>The front of the arm is the flexor compartment, with three muscles, all supplied by the same nerve (musculocutaneous).</p>
<ul><li><b>Biceps brachii</b> ("two heads"): the one you flex in the mirror. It crosses both shoulder and elbow. Its best-known job is <b>supination</b> (turning the palm up, like turning a screwdriver or "carrying soup"), and it also bends the elbow.</li>
<li><b>Brachialis</b> lies under the biceps and attaches to the ulna. Since the ulna doesn't rotate, the brachialis flexes the elbow however the forearm is rotated: the "workhorse".</li>
<li><b>Coracobrachialis</b> runs from the coracoid process to the humeral shaft; it only crosses the shoulder, moving the arm forward and toward the body.</li></ul>
<p>Names help: "coraco-brachialis" = coracoid to arm.</p>
<p class="tip">Trap: biceps is a supinator first; brachialis is the strongest flexor, which is why a question about flexing a pronated forearm points to brachialis.</p>`,html:`<table><tr><th>Muscle</th><th>Origin</th><th>Insertion</th><th>Action</th></tr>
<tr><td><b>Biceps brachii</b></td><td>Long head: supraglenoid tubercle; short head: coracoid process</td><td>Radial tuberosity and bicipital aponeurosis</td><td><b>Supination</b> (main); flexion at shoulder and elbow</td></tr>
<tr><td><b>Coracobrachialis</b></td><td>Coracoid process</td><td>Shaft of humerus</td><td>Flexion and adduction at shoulder</td></tr>
<tr><td><b>Brachialis</b></td><td>Shaft of humerus</td><td>Ulnar tuberosity</td><td>Most powerful elbow flexor regardless of forearm position</td></tr></table>
<p>All are supplied by the <b>musculocutaneous n.</b> (C5–C7). Biceps crosses both shoulder and elbow.</p>
<p class="tip">Brachialis = ‘workhorse’ flexor (pronated or supinated). Biceps = supinator first, flexor second.</p>`},
{t:"mcq",q:"The main action of biceps brachii is:",opts:["Pronation","Supination of the forearm","Extension of the elbow","Abduction of the shoulder"],a:1,why:"Main action supination, plus flexion at shoulder and elbow."},
{t:"mcq",q:"Which muscle is the most powerful elbow flexor regardless of forearm position?",opts:["Biceps brachii","Brachialis","Coracobrachialis","Brachioradialis"],a:1,why:"Brachialis, ulnar tuberosity insertion."},
{t:"sort",title:"Which origin?",buckets:["Scapula","Humerus shaft"],items:[["Biceps long head",0],["Biceps short head",0],["Coracobrachialis",0],["Brachialis",1],["Triceps lateral head",1],["Triceps medial head",1]]},
{t:"match",title:"Insertions",pairs:[["Biceps brachii","Radial tuberosity"],["Brachialis","Ulnar tuberosity"],["Triceps brachii","Olecranon process"],["Coracobrachialis","Shaft of humerus"]]},
{t:"cloze",title:"Compartment nerves",text:"The anterior arm compartment is supplied by the [[musculocutaneous]] nerve and the posterior by the [[radial]] nerve; the latter runs through the [[radial groove]].",bank:["musculocutaneous","radial","radial groove","median","ulnar"]}
]},
{id:"u4l3",title:"Nerves, Clinical & Cubital Fossa",mins:9,flower:"🌻",items:[
{t:"learn",title:"Musculocutaneous nerve & Popeye sign",slides:[17,19],explain:`<p>The name tells you the job: <b>musculo</b> (muscle) + <b>cutaneous</b> (skin). It supplies muscles of the front of the arm, then continues as skin sensation.</p>
<ul><li>It <b>pierces the coracobrachialis</b>, a landmark showing where it passes into the arm.</li>
<li>After it supplies the anterior compartment, it carries on down the forearm as the <b>lateral cutaneous nerve of the forearm</b>, serving skin on the thumb side of the forearm.</li></ul>
<p>So a lesion causes weak elbow flexion plus numbness on the lateral forearm.</p>
<p><b>Popeye sign</b>: the biceps has two tendons at the top. If the <b>long head</b> tendon at the shoulder snaps, the freed muscle belly bunches up toward the elbow when contracted, like Popeye's ball of muscle. <b>Reverse Popeye</b>: the tendon at the elbow end tears, so the muscle bunches higher up the arm.</p>
<p class="tip">Trap: Popeye = proximal tear, bulge low; reverse = distal tear, bulge high.</p>`,html:`<ul><li>Pierces the <b>coracobrachialis</b> and innervates the entire anterior compartment.</li>
<li>Terminates as the <b>lateral cutaneous nerve of the forearm</b> (skin of lateral forearm).</li></ul>
<div class="defn"><b>Popeye sign</b>: a torn tendon of the long head of biceps makes the muscle cluster into a ball when flexed. <b>Reverse Popeye sign</b>: distal biceps tendon torn.</div>`},
{t:"mcq",q:"The musculocutaneous nerve pierces which muscle?",opts:["Brachialis","Coracobrachialis","Biceps brachii","Triceps"],a:1,why:"It pierces coracobrachialis, then supplies the anterior compartment."},
{t:"mcq",q:"After a proximal rupture of the long head of biceps tendon, flexing the elbow results in a bulge in the lower arm. This is the:",opts:["Reverse Popeye sign","Popeye sign","Winged scapula","Painful arc"],a:1,why:"The torn muscle clusters into a ball. Distal tendon rupture gives the reverse Popeye sign."},
{t:"learn",title:"Cutaneous nerve map",slides:[19],explain:`<p>"Cutaneous" means "of the skin". This card lists which nerve gives feeling to which patch of skin. It matters clinically because testing a skin patch lets you work out which nerve (and what level) is damaged.</p>
<ul><li><b>Axillary</b>: a round patch over the deltoid on the lateral shoulder.</li>
<li><b>Radial</b>: the back of the arm and forearm (the extensor side, which fits with its muscles).</li>
<li><b>Musculocutaneous</b>: ends as the lateral cutaneous nerve of the forearm, which covers the lateral (thumb-side) forearm.</li>
<li><b>Medial cutaneous nerves</b>: branches from the medial cord of the brachial plexus, covering the inner arm and forearm.</li></ul>
<p>Picture the limb with your palm facing forward: lateral = thumb side, medial = pinkie side. The skin pattern mirrors the muscle pattern: radial for back, musculocutaneous for lateral front.</p>
<p class="tip">Trap: lateral shoulder = axillary, not musculocutaneous.</p>`,html:`<table><tr><th>Nerve</th><th>Skin</th></tr>
<tr><td>Axillary</td><td>Lateral shoulder region</td></tr>
<tr><td>Radial</td><td>Posterior arm and forearm</td></tr>
<tr><td>Musculocutaneous (lateral cutaneous n. of forearm)</td><td>Lateral forearm</td></tr>
<tr><td>Medial cutaneous nn. of arm & forearm</td><td>Medial arm/forearm (from medial cord)</td></tr></table>`},
{t:"match",title:"Cutaneous nerves",pairs:[["Axillary n.","Lateral shoulder"],["Radial n.","Posterior arm and forearm"],["Musculocutaneous n.","Lateral forearm"],["Medial cord branches","Medial arm and forearm"]]},
{t:"mcq",q:"A patient loses sensation on the lateral forearm and has weak elbow flexion. Which nerve?",opts:["Radial","Musculocutaneous","Axillary","Median"],a:1,why:"Musculocutaneous n. supplies anterior compartment and lateral forearm skin."},
{t:"learn",title:"Cubital fossa",slides:[21,22,23],explain:`<p>A <b>fossa</b> is a hollow. The cubital fossa is the triangular dip on the front of the elbow, a "doorway" where important structures pass from arm to forearm. A <b>neurovascular funnel</b> is a narrow passage where nerves and vessels get squeezed together (others are the axilla and carpal tunnel).</p>
<ul><li><b>Sides:</b> brachioradialis on the lateral side, pronator teres on the medial side; the imaginary epicondyle line forms the top.</li>
<li><b>Roof:</b> bicipital aponeurosis, a flat sheet of tendon from biceps. The median cubital vein (the one used for blood draws) runs over it, and the aponeurosis protects the artery beneath it.</li>
<li><b>Floor:</b> brachialis and supinator.</li></ul>
<p><b>Contents:</b> lateral to medial, the radial nerve, biceps tendon, brachial artery (which divides into radial and ulnar arteries) and the median nerve.</p>
<p class="tip">T.A.N.: Tendon, Artery, Nerve. Trap: the radial nerve is the one on the lateral side, before T.A.N.; the musculocutaneous and ulnar nerves are not in the fossa.</p>`,html:`<p>The second <b>neurovascular funnel</b> of the upper limb (after the axilla); carpal tunnel is another. Five borders:</p>
<table><tr><th>Border</th><th>Structure</th></tr>
<tr><td>Superior</td><td>Imaginary line between the medial and lateral epicondyles</td></tr>
<tr><td>Lateral</td><td>Brachioradialis</td></tr>
<tr><td>Medial</td><td>Pronator teres</td></tr>
<tr><td>Anterior (roof)</td><td>Bicipital aponeurosis (median cubital v. crosses over)</td></tr>
<tr><td>Posterior (floor)</td><td>Supinator and brachialis</td></tr></table>
<p><b>Contents (lateral → medial):</b> Radial nerve (bifurcates into superficial and deep), tendon of biceps brachii, brachial artery (splits into radial and ulnar), median nerve.</p>
<p class="tip">T.A.N. – Tendon (biceps), Artery (brachial), Nerve (median), lateral to medial. Radial nerve sits lateral.</p>`},
{t:"order",title:"Order contents of the cubital fossa from lateral to medial",steps:["Radial nerve","Biceps brachii tendon","Brachial artery","Median nerve"],why:"Radial n., then the T.A.N. (tendon, artery, nerve)."},
{t:"match",title:"Cubital fossa borders",pairs:[["Lateral","Brachioradialis"],["Medial","Pronator teres"],["Roof","Bicipital aponeurosis"],["Floor","Supinator and brachialis"],["Superior","Line between epicondyles"]]},
{t:"mcq",q:"Which structure forms the roof of the cubital fossa?",opts:["Brachialis","Bicipital aponeurosis","Supinator","Pronator teres"],a:1,why:"Bicipital aponeurosis (with median cubital vein)."},
{t:"sata",q:"Which structures lie IN the cubital fossa? (select all)",opts:["Median nerve","Biceps tendon","Brachial artery","Musculocutaneous n. trunk","Radial nerve"],a:[0,1,2,4],why:"The musculocutaneous n. is in the anterior arm compartment, not in the fossa."},
{t:"mcq",q:"The brachial artery divides in the cubital fossa into:",opts:["Radial and ulnar arteries","Deep brachial and radial","Axillary and ulnar","Posterior and anterior interosseous"],a:0,why:"Brachial a. splits into radial and ulnar aa."},
{t:"flash",title:"Arm summary",cards:[["Anterior compartment","Musculocutaneous n. – biceps, coracobrachialis, brachialis"],["Posterior compartment","Radial n. – triceps"],["Brachialis action","Elbow flexion"],["Triceps long head","Infraglenoid tubercle"]]}
]},
{id:"u4boss",title:"Arm Boss Quiz",mins:6,flower:"👑",boss:true,items:[
{t:"mcq",q:"Which nerve innervates the triceps brachii?",opts:["Musculocutaneous","Radial","Median","Ulnar"],a:1,why:"Radial n."},
{t:"mcq",q:"The main action of biceps brachii is:",opts:["Elbow extension","Forearm supination","Shoulder abduction","Pronation"],a:1,why:"Supination."},
{t:"mcq",q:"The ulnar collateral ligament prevents:",opts:["Abduction","Adduction","Pronation","Hyperextension"],a:1,why:"Ulnar collateral prevents adduction."},
{t:"sata",q:"Which muscles are supplied by the musculocutaneous nerve?",opts:["Biceps brachii","Brachialis","Coracobrachialis","Triceps brachii","Brachioradialis"],a:[0,1,2],why:"Triceps = radial."},
{t:"mcq",q:"Which structure forms the medial border of the cubital fossa?",opts:["Brachioradialis","Pronator teres","Supinator","Brachialis"],a:1,why:"Pronator teres medial; brachioradialis lateral."},
{t:"order",title:"Order the cubital fossa contents lateral to medial",steps:["Radial nerve","Biceps tendon","Brachial artery","Median nerve"],why:"Radial n., then T.A.N."},
{t:"mcq",q:"A patient with a mid-humeral shaft fracture cannot extend the wrist; which nerve is damaged?",opts:["Median","Radial","Ulnar","Musculocutaneous"],a:1,why:"Radial nerve runs in the radial groove and supplies the posterior compartments."},
{t:"mcq",q:"What is the Popeye sign?",opts:["Ball-like bulge of biceps after tendon tear","Winging of the scapula","Radial head subluxation","Pain at 60°–120° abduction"],a:0,why:"Torn long head tendon → muscle clusters into a ball."},
{t:"mcq",q:"Which muscle pierced by the musculocutaneous nerve flexes and adducts the shoulder?",opts:["Brachialis","Coracobrachialis","Long head triceps","Deltoid"],a:1,why:"Coracobrachialis."}
]}
]});
EXAMQ.push(
{t:"mcq",unit:3,mod:"u4",q:"A patient has weak elbow flexion with forearm supinated or pronated, and loss of sensation over the lateral forearm. Which nerve is injured?",opts:["Radial","Median","Musculocutaneous","Axillary","Ulnar"],a:2,why:"Musculocutaneous n. supplies biceps, brachialis, coracobrachialis and the lateral forearm skin."},
{t:"mcq",unit:3,mod:"u4",q:"Which is NOT a border of the cubital fossa?",opts:["Pronator teres","Brachioradialis","Bicipital aponeurosis","Brachialis","Coracobrachialis"],a:4,why:"Coracobrachialis is in the arm, not part of the cubital fossa."},
{t:"mcq",unit:3,mod:"u4",q:"Which ligament anchors the head of the radius against the ulna?",opts:["Radial collateral","Ulnar collateral","Annular","Coracoacromial","Costoclavicular"],a:2,why:"Annular ligament of the radius."},
{t:"mcq",unit:3,mod:"u4",q:"The radial nerve travels with the deep brachial artery through the radial groove, and is deep to which structure?",opts:["Medial head of triceps only","Lateral head of triceps","Brachialis","Biceps brachii","Coracobrachialis"],a:1,why:"The radial nerve lies deep to the lateral head of the triceps brachii."}
);

MODULES.push({ id:'u5', num:12, unit:3, title:'Forearm & Wrist',
 blurb:'Radius, ulna, carpals, wrist ligaments, and every forearm muscle: compartments, actions, nerves, carpal tunnel, snuff box.',
 badge:{name:'Forearm Forger',icon:'💪'},
 lessons:[
 {id:'u5l1',title:'Bones, joints & ligaments',mins:8,flower:'🌼',items:[
  {t:'learn',title:'Forearm bones & radioulnar joints',slides:[8, 9, 10],explain:`<p>Picture the forearm as two parallel sticks: the <b>radius</b> on the thumb side and the <b>ulna</b> on the pinky side. Pronation/supination happens because the radius swings around the fixed ulna, like a bracelet-wrapped stick twisting around its neighbour.</p>
<ul><li><b>Annular ligament</b>: "annular" = ring. A ring that wraps the radial head so it can spin in place at the elbow end.</li>
<li><b>Interosseus membrane</b>: a tough sheet stretched between the bones, like webbing. When you fall on your hand, force enters through the wrist at the radius (the big wrist bone), but the elbow joint is built mainly around the ulna, so the sheet passes the force across to the ulna and on to the humerus.</li>
<li><b>Styloid process</b>: the small pointed bump at the end of each bone.</li></ul>
<p class="tip">Hook: force goes Hand → Radius → Membrane → Ulna → Humerus.</p>
<p><b>Exam trap:</b> don't mix up proximal (annular ligament, radial head) with distal (ulnar head, radioulnar ligaments).</p>`,html:`<p>The <span class="key">radius</span> (lateral) and <span class="key">ulna</span> (medial) are held together by the <span class="key">interosseus membrane</span> so they act as a single unit: the forearm.</p>
<ul><li><b>Proximal radioulnar joint:</b> radial head held by the <b>annular ligament</b>.</li>
<li><b>Distal radioulnar joint:</b> the <b>head of the ulna</b> articulates with the radius, enabling pronation and supination. Anterior/palmar and posterior/dorsal <b>radioulnar ligaments</b> hold the ulnar head against the radius.</li>
<li><b>Interosseus membrane:</b> vital for force transfer. Force from the hand goes to the radius, most is transmitted <b>radius → ulna</b> via the membrane, then ulna → humerus. Only a small amount goes radius → humerus.</li></ul>
<p>Styloid process fractures are common, especially of the radius. A distal radius fracture gives the <b>'dinner fork deformity'</b>.</p>`},
  {t:'mcq',q:'What is the main role of the interosseus membrane?',opts:['Allows the radius to glide on the carpals','Binds radius and ulna as one unit and transfers force from radius to ulna to humerus','Stabilizes the radial head in the annular ligament','Forms the roof of the carpal tunnel'],a:1,why:'It holds radius and ulna together; most force from the hand passes radius → ulna through it, then to the humerus.'},
  {t:'match',title:'Match structure to role',pairs:[['Annular ligament','Holds radial head at proximal radioulnar joint'],['Radioulnar ligaments','Hold ulnar head against radius at distal radioulnar joint'],['Interosseus membrane','Force transfer between radius and ulna'],['Dinner fork deformity','Distal radius fracture']]},
  {t:'mcq',q:'Which joint allows pronation and supination at the distal end of the forearm?',opts:['Radiocarpal joint','Ulnocarpal joint','Distal radioulnar joint','Midcarpal joint'],a:2,why:'The ulnar head articulates with the radius at the distal radioulnar joint, supported by the radioulnar ligaments.'},
  {t:'learn',title:'Carpal bones & the wrist',slides:[11, 12],explain:`<p>The <b>wrist</b> is not one bone but a cluster of <b>eight small carpal bones</b> arranged in two rows of four, like a tiny stack of pebbles. <b>Proximal</b> = closer to the forearm, <b>distal</b> = closer to the fingers. The <b>intercarpal joints</b> are just the small joints between neighbouring carpals, which let the bones glide on each other.</p>
<p>The carpals also form a curved trough, and a band stretched over it makes the <b>carpal tunnel</b> (see the nerves card).</p>
<p>Notice the rows run in a loop: proximal row goes thumb side → pinky side, then you turn the corner and the distal row comes back pinky side → thumb side. That's why the mnemonic "So Long To Pinky, Here Comes The Thumb" works: the "Pinky" lands at the turn.</p>
<p>The radiocarpal joint is where the radius (and a cartilage disc beside it) meets the proximal row. The <b>scaphoid</b> sits right there on the thumb side, which is why it breaks so often when people fall on an outstretched hand.</p>
<p><b>Exam trap:</b> the thumb has only 2 phalanges (proximal and distal), no middle one.</p>`,html:`<p>The wrist is made of <b>eight carpal bones</b> that articulate at <span class="key">intercarpal joints</span>. They fill the space between the radius/ulna proximally and metacarpals distally, and form the <b>carpal tunnel</b>. The <b>hand</b> = metacarpals + phalanges. The thumb has <b>no middle phalanx</b>.</p>
<table><tr><th>Proximal row (lateral→medial)</th><th>Distal row (medial→lateral)</th></tr><tr><td>Scaphoid, Lunate, Triquetrum, Pisiform</td><td>Hamate, Capitate, Trapezoid, Trapezium</td></tr></table>
<p class="tip">So Long To Pinky, Here Comes The Thumb.</p>
<p>The <b>radiocarpal joint</b> is between the radius (plus the <b>articular/ulnocarpal disc</b>) and the carpals. <b>Scaphoid fractures</b> are common.</p>`},
  {t:'order',title:'Carpals, proximal row lateral → medial, then distal row medial → lateral',steps:['Scaphoid','Lunate','Triquetrum','Pisiform','Hamate','Capitate','Trapezoid','Trapezium'],why:'"So Long To Pinky, Here Comes The Thumb" gives the order starting laterally and snaking back.'},
  {t:'mcq',q:'Which carpal bone is the most lateral of the proximal row?',opts:['Trapezium','Scaphoid','Lunate','Capitate'],a:1,why:'"So" = Scaphoid, first in the proximal row, on the thumb side.'},
  {t:'cloze',title:'Wrist vs hand',text:'The wrist consists of [[eight]] carpal bones, while the hand is made of metacarpals and [[phalanges]]. The thumb has no [[middle]] phalanx.',bank:['eight','phalanges','middle','seven','distal','carpals']},
  {t:'learn',title:'Wrist ligaments & digit joints',slides:[12, 13],explain:`<p>Ligaments are strong straps that connect bone to bone and stop joints from wobbling. The wrist has many because it has so many small bones: collateral ligaments run down the sides (radial side and ulnar side), radiocarpal/ulnocarpal ligaments tie the forearm bones to the carpals, and intercarpal ligaments tie carpals to each other.</p>
<p>Finger joint abbreviations, from the wrist outward: <b>CMC</b> (carpometacarpal, wrist-to-hand-bone), <b>MCP</b> (metacarpophalangeal, the knuckle), <b>PIP</b> (proximal interphalangeal, middle knuckle), <b>DIP</b> (distal interphalangeal, nearest the fingertip). The thumb has only one interphalangeal joint, so just "IP".</p>
<p><b>Arthritis:</b> osteoarthritis is "wear and tear", so it hits joints that work hardest: DIP and the thumb base (CMC). Rheumatoid arthritis is an autoimmune disease that attacks the knuckles and middle joints: MCP and PIP.</p>
<p class="tip">"I DIP, you PIP, we IP" tells you which joints each digit has (thumb "I" only).</p>
<p><b>Exam trap:</b> radioulnar ligaments are for the radioulnar joint, not the wrist.</p>`,html:`<p>Radioulnar ligaments stabilize the radioulnar joint, whereas the wrist/carpals are stabilized by:</p>
<ul><li><b>Radial</b> and <b>ulnar collateral ligaments</b> of the wrist</li><li><b>Radiocarpal</b> and <b>ulnocarpal</b> ligaments (anterior and posterior)</li><li><b>Intercarpal ligaments</b></li></ul>
<p>Digit joints: <b>CM/CMC</b> (carpometacarpal), <b>MCP</b>, <b>PIP</b>, <b>DIP</b> (thumb has just an <b>IP</b>). <span class="key">Osteoarthritis</span> usually affects the DIP and CMC (thumb base) joints; <span class="key">rheumatoid arthritis</span> usually affects the MCP and PIP joints.</p>
<p class="tip">"I DIP, you PIP, we IP."</p>`},
  {t:'sort',title:'Which arthritis usually hits which joint?',buckets:['Osteoarthritis','Rheumatoid arthritis'],items:[['DIP joints',0],['MCP joints',1],['PIP joints',1],['Carpometacarpal joint',0]]},
  {t:'mcq',q:'Which ligaments stabilize the radiocarpal (wrist) joint?',opts:['Annular and radioulnar ligaments','Radial and ulnar collateral, radiocarpal, ulnocarpal and intercarpal ligaments','Digital collateral ligaments','Palmar aponeurosis only'],a:1,why:'The radioulnar ligaments stabilize the radioulnar joint, not the wrist; the wrist uses collateral, radiocarpal, ulnocarpal and intercarpal ligaments.'},
  {t:'flash',title:'Bones & joints recap',cards:[['Carpal bones in wrist','Eight'],['Phalanges in thumb','Two (proximal & distal)'],['Common fracture causing dinner fork deformity','Distal radius'],['Joint stabilized by annular ligament','Proximal radioulnar joint'],['Joints between carpals and metacarpals','CM / CMC joints']]}
 ]},
 {id:'u5l2',title:'Anterior compartment (flexor/pronator)',mins:9,flower:'🌸',items:[
  {t:'learn',title:'Compartments & the common flexor origin',slides:[14, 15, 16],explain:`<p>A <b>compartment</b> is a section of the limb wrapped in connective tissue (fascia), grouping muscles that do the same job and share a nerve. The forearm has two: the front (anterior) bends the wrist and fingers and turns the palm down (pronates); the back (posterior) straightens them and turns the palm up (supinates).</p>
<p>Nerve logic: the anterior forearm is served by the median and ulnar nerves, the posterior forearm by the radial nerve. The brachial plexus splits into anterior and posterior divisions during development, and the radial nerve comes from the posterior cord. So "posterior forearm = radial" is a pattern, not a random fact.</p>
<p>The <b>epicondyles</b> are bumps on either side of the lower humerus (the elbow). Many muscles start from one shared tendon there, like several roots from one trunk:</p>
<ul><li><b>Medial epicondyle</b> → common <b>flexor</b> origin (CFO)</li><li><b>Lateral epicondyle</b> → common <b>extensor</b> origin (CEO)</li></ul>
<p class="tip">Hook: golfer's elbow hurts on the medial side where flexors start; tennis elbow on the lateral side.</p>
<p><b>Exam trap:</b> brachioradialis and anconeus aren't CFO/CEO muscles in the same way; the slide chart is what counts.</p>`,html:`<p>The forearm has two compartments:</p>
<ul><li><b>Anterior (flexor/pronator):</b> innervated by the <b>median</b> and <b>ulnar</b> nerves (from cords derived from anterior divisions).</li>
<li><b>Posterior (extensor/supinator):</b> innervated by the <b>radial n.</b> and its branches (posterior cord).</li></ul>
<p>Superficial and intermediate anterior muscles share the <span class="key">common flexor origin (CFO)</span> on the <b>medial epicondyle</b> of the humerus. Most posterior superficial muscles share the <span class="key">common extensor origin (CEO)</span> on the <b>lateral epicondyle</b>.</p>
<p class="tip">Details of attachments are for reference; the simplified muscle chart is what you must know.</p>`},
  {t:'mcq',q:'The muscles of the anterior forearm compartment are innervated by:',opts:['Radial n. only','Median and ulnar nn.','Musculocutaneous n.','Axillary and radial nn.'],a:1,why:'Anterior = flexor/pronator, median and ulnar. Radial n. runs the posterior compartment.'},
  {t:'match',title:'Match the origin',pairs:[['Common flexor origin','Medial epicondyle'],['Common extensor origin','Lateral epicondyle'],['Brachioradialis origin','Distal humerus'],['Anconeus origin','Lateral epicondyle']]},
  {t:'learn',title:'Pronators & wrist flexors',slides:[16, 17, 21],explain:`<p><b>Pronation</b> turns the palm down (or backward); <b>wrist flexion</b> bends the palm toward the forearm. <b>Origin</b> is the fixed end, <b>insertion</b> the end that moves.</p>
<p>Imagine where each muscle pulls: <b>pronator teres</b> runs obliquely from the inner elbow to the middle of the radius, so contracting it rolls the radius over the ulna. <b>Pronator quadratus</b> is a square muscle near the wrist linking ulna to radius, like a bracelet pulling the bones together and turning them.</p>
<p>The three wrist flexors fan out from the common flexor origin: FCR ends on the 2nd metacarpal (thumb side, so it flexes AND abducts, tilting the hand toward the thumb); FCU ends on the 5th metacarpal and (pisiform) so it flexes and adducts toward the pinky. Palmaris longus just tenses the palm's fibrous sheet.</p>
<p class="tip">Hook: "FCU = Flexor Carpi Ulnar = the ulnar-nerve one". Everything else in this chart is median.</p>
<p><b>Exam trap:</b> palmaris longus is missing in about 10% of people (normal variant). Pronator quadratus is supplied by the anterior interosseous branch, not the main median.</p>`,html:`<table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Action</th><th>Nerve</th></tr>
<tr><td>Pronator teres</td><td>Medial epicondyle → shaft of radius</td><td>Primary pronator</td><td>Median</td></tr>
<tr><td>Pronator quadratus</td><td>Ulna → radius (distal)</td><td>Assists pronation</td><td>Anterior interosseous (median)</td></tr>
<tr><td>Flexor carpi radialis</td><td>CFO → 2nd metacarpal</td><td>Wrist flexion + abduction</td><td>Median</td></tr>
<tr><td>Palmaris longus</td><td>CFO → palmar aponeurosis</td><td>Wrist flexion</td><td>Median</td></tr>
<tr><td>Flexor carpi ulnaris</td><td>CFO → 5th metacarpal</td><td>Wrist flexion + adduction</td><td>Ulnar (C8–T1)</td></tr></table>
<p class="tip">Palmaris longus is absent in ~10% of people. FCU is the one wrist flexor supplied by the ulnar n.</p>`},
  {t:'mcq',q:'Which muscle is the primary pronator of the forearm?',opts:['Pronator quadratus','Pronator teres','Flexor carpi radialis','Supinator'],a:1,why:'Pronator teres is primary; the bracelet-like pronator quadratus assists.'},
  {t:'mcq',q:'Which forearm flexor is innervated by the ulnar nerve and also adducts the wrist?',opts:['Flexor carpi radialis','Palmaris longus','Flexor carpi ulnaris','Flexor pollicis longus'],a:2,why:'FCU (C8–T1) flexes and adducts the hand at the wrist, working with extensor carpi ulnaris.'},
  {t:'sata',q:'Which muscles flex the wrist? (select all)',opts:['Flexor carpi radialis','Palmaris longus','Extensor carpi ulnaris','Flexor carpi ulnaris','Brachioradialis'],a:[0,1,3],why:'FCR, palmaris longus and FCU flex the hand at the wrist. ECU extends it; brachioradialis does not cross the wrist.'},
  {t:'sort',title:'Wrist movements',buckets:['Abduction','Adduction'],items:[['Flexor carpi radialis',0],['Extensor carpi radialis longus',0],['Flexor carpi ulnaris',1],['Extensor carpi ulnaris',1],['Extensor carpi radialis brevis',0]]},
  {t:'learn',title:'Digit flexors',slides:[18, 19, 20],explain:`<p>These muscles curl your fingers. Each finger has two flexor tendons stacked like a sandwich: FDS (superficial) and FDP (profundus = deep).</p>
<p>The logic of the insertions: FDS attaches to the <b>middle phalanx</b>, so it bends the PIP joint (and all joints before it). FDP attaches to the <b>distal phalanx</b>, so it is the only muscle that can bend the fingertip (DIP). That's why "can't bend the fingertip but can bend the middle joint" points to FDP.</p>
<p>The tendons share one route: FDS splits in two (the "forked tongue") to let the deeper FDP tendon slip through to the tip, like a hot dog bun being opened.</p>
<p><b>FPL</b> (flexor pollicis longus) is the thumb version: "pollicis" = thumb, "longus" = long.</p>
<p>Nerves: median runs most of the front. FDP is the exception with two nerves: the lateral half (index and middle) via median/anterior interosseous, the medial half (ring and little) via ulnar.</p>
<p class="tip">Hook: Ulnar = ring & little, so Ulnar supplies the medial half.</p>
<p><b>Exam trap:</b> the card says FPL is like "FDL" of the thumb; don't confuse it with the foot muscle.</p>`,html:`<table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Nerve</th></tr>
<tr><td>Flexor digitorum superficialis (FDS) <i>(intermediate)</i></td><td>Medial epicondyle (CFO), radius → <b>middle phalanges</b></td><td>Median</td></tr>
<tr><td>Flexor digitorum profundus (FDP) <i>(deep)</i></td><td>Ulna, interosseus membrane → <b>distal phalanges</b></td><td><b>Medial half ulnar</b> (C8–T1), <b>lateral half median</b></td></tr>
<tr><td>Flexor pollicis longus (FPL) <i>(deep)</i></td><td>Radius, interosseus membrane → distal phalanx of thumb</td><td>Anterior interosseous n. (median)</td></tr></table>
<p>FDS tendons have a <b>'forked tongue'</b> split letting FDP tendons pass through to the distal phalanges. FDS flexes every joint proximal to the PIP; FDP flexes every joint proximal to the fingertip. Both also flex the wrist. FPL = "flexor digitorum longus" of the thumb.</p>`},
  {t:'mcq',q:'A patient cannot flex the DIP joint of the index finger but can flex the PIP joint. Which muscle is affected?',opts:['Flexor digitorum superficialis','Flexor digitorum profundus','Lumbricals','Extensor digitorum'],a:1,why:'FDP is the only muscle inserting on distal phalanges (lateral half via median/anterior interosseous branch for the index).'},
  {t:'mcq',q:'Flexor digitorum profundus is innervated by:',opts:['Median only','Ulnar only','Medial half ulnar, lateral half median','Radial n.'],a:2,why:'FDP has dual innervation: ulnar (medial half) and median (lateral half).'},
  {t:'match',title:'Muscle → insertion',pairs:[['Flexor digitorum superficialis','Middle phalanges'],['Flexor digitorum profundus','Distal phalanges'],['Flexor pollicis longus','Distal phalanx of thumb'],['Palmaris longus','Palmar aponeurosis']]},
  {t:'learn',title:'Anterior nerves, vessels & carpal tunnel',slides:[22, 23],explain:`<p>Think of nerves as cables taking a route through the forearm. The <b>median nerve</b> dives between the two heads of pronator teres and gives off the <b>anterior interosseous nerve</b>, a branch to the deep muscles (FPL, pronator quadratus, lateral FDP). The <b>ulnar nerve</b> passes behind the medial epicondyle through the <b>cubital tunnel</b> (the "funny bone" spot), then travels with the ulnar artery in a separate passage at the wrist, the <b>ulnar canal</b>.</p>
<p>The <b>carpal tunnel</b> is a tight tube: carpal bones form the floor and arch, and a strong band, the <b>flexor retinaculum</b> (retinaculum = retaining strap), roofs it. Through it go the median nerve plus the digit flexor tendons, wrapped in slippery <b>synovial sheaths</b> (lubricating bags). Swelling in that tight space squeezes the median nerve, causing <b>carpal tunnel syndrome</b> (tingling, weak thumb). Surgery cuts the roof strap to free it.</p>
<p class="tip">Hook: median nerve = tunnel; ulnar nerve = canal.</p>
<p><b>Exam trap:</b> the ulnar nerve is NOT in the carpal tunnel.</p>`,html:`<ul><li><b>Median n.</b> pierces <b>pronator teres</b>, gives off the <b>anterior interosseous n.</b> (to FPL, pronator quadratus and lateral FDP).</li>
<li><b>Ulnar n.</b> enters the forearm through the <b>cubital tunnel</b> and later runs in the <b>ulnar canal</b> (with the ulnar a.) at the wrist, outside the carpal tunnel.</li>
<li>Brachial a. → <b>radial</b> and <b>ulnar</b> aa.; ulnar a. gives the posterior interosseous a.</li></ul>
<p>The <span class="key">carpal tunnel</span> is covered by the <b>flexor retinaculum</b>. It transmits the <b>median n.</b> and the <b>tendons of muscles that flex the digits</b> (in synovial sheaths). Compression causes <span class="key">carpal tunnel syndrome</span>; treated surgically by carpal tunnel release (cutting the flexor retinaculum).</p>`},
  {t:'mcq',q:'Which structure passes through the ulnar canal rather than the carpal tunnel?',opts:['Median n.','Ulnar n. and artery','Flexor digitorum profundus tendons','Flexor pollicis longus tendon'],a:1,why:'Ulnar n. and a. are in the ulnar canal; median n. and digit-flexor tendons are in the carpal tunnel.'},
  {t:'cloze',title:'Carpal tunnel',text:'The carpal tunnel is contained by the [[flexor retinaculum]] and transmits the [[median]] nerve plus tendons of the [[digit]] flexors.',bank:['flexor retinaculum','median','digit','ulnar','extensor retinaculum']},
  {t:'mcq',q:'The median nerve pierces which muscle in the proximal forearm?',opts:['Supinator','Brachioradialis','Pronator teres','Flexor carpi ulnaris'],a:2,why:'The median n. pierces pronator teres; the deep radial n. pierces supinator.'}
 ]},
 {id:'u5l3',title:'Posterior compartment (extensor/supinator)',mins:9,flower:'🌻',items:[
  {t:'learn',title:'Elbow-only muscles & wrist extensors',slides:[24, 25, 26],explain:`<p>The back of the forearm straightens things. All of these are supplied by the <b>radial nerve</b> (directly or via its deep branch, the posterior interosseus nerve).</p>
<p>Two odd ones only work at the <b>elbow</b>: <b>anconeus</b> (small, extends the elbow, helping triceps) and <b>brachioradialis</b> (bends the elbow, best seen when you hold a hammer-curl thumbs-up). Brachioradialis sits in the extensor group by position and nerve, but flexes the elbow.</p>
<p>The three wrist extensors follow the same logic as the flexors: ECRL and ECRB land on the 2nd and 3rd metacarpals (thumb side), so they extend and tilt (abduct) the hand toward the thumb; ECU lands on the 5th metacarpal, so it extends and tilts toward the pinky (adducts). To move the hand purely sideways, flexor and extensor of the same side team up: FCR + ECRL/ECRB abduct; FCU + ECU adduct.</p>
<p class="tip">Hook: radial = "R" for Raising (extending) the wrist.</p>
<p><b>Exam trap:</b> brachioradialis is the posterior-compartment muscle that FLEXES.</p>`,html:`<p>All posterior muscles are supplied by the <b>radial n.</b> or its branches (deep branch / <b>posterior interosseus n.</b>).</p>
<table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Action</th></tr>
<tr><td>Anconeus</td><td>Lateral epicondyle → ulna</td><td>Extension at <b>elbow</b></td></tr>
<tr><td>Brachioradialis</td><td>Distal humerus → styloid process of radius</td><td>Flexion at <b>elbow</b></td></tr>
<tr><td>Extensor carpi radialis longus</td><td>CEO → 2nd metacarpal</td><td>Wrist extension + abduction</td></tr>
<tr><td>Extensor carpi radialis brevis</td><td>CEO → 3rd metacarpal</td><td>Wrist extension + abduction</td></tr>
<tr><td>Extensor carpi ulnaris</td><td>CEO → 5th metacarpal</td><td>Wrist extension + adduction</td></tr></table>
<p class="tip">Anconeus and brachioradialis are the only posterior muscles that don't cross the wrist. ECRL/ECRB work with FCR to abduct; ECU works with FCU to adduct.</p>`},
  {t:'mcq',q:'Which muscle of the posterior forearm compartment flexes the elbow?',opts:['Anconeus','Supinator','Brachioradialis','Extensor carpi ulnaris'],a:2,why:'Brachioradialis is an elbow flexor despite being in the extensor compartment; anconeus extends the elbow.'},
  {t:'sata',q:'Which muscles do NOT cross the wrist joint? (select all)',opts:['Anconeus','Brachioradialis','Extensor carpi ulnaris','Extensor digitorum','Flexor carpi radialis'],a:[0,1],why:'Only anconeus and brachioradialis act purely at the elbow.'},
  {t:'sort',title:'Wrist actions combos',buckets:['Extension + abduction','Extension + adduction','Flexion + abduction','Flexion + adduction'],items:[['Extensor carpi radialis longus',0],['Extensor carpi ulnaris',1],['Flexor carpi radialis',2],['Flexor carpi ulnaris',3],['Extensor carpi radialis brevis',0]]},
  {t:'learn',title:'Digit extensors',slides:[26, 27],explain:`<p>These straighten the fingers and thumb. The main one, <b>extensor digitorum</b>, sends a tendon to digits 2-5; each tendon spreads into a hood called the <b>extensor expansion</b> that lies over the finger like a little sail, so pulling it straightens the knuckle and finger joints.</p>
<p>Because extensor digitorum tendons are linked, the index and pinky have back-up muscles: <b>extensor indicis</b> ("index finger", used to point) and <b>extensor digiti minimi</b> ("little finger"). They allow independent movement.</p>
<p>The three thumb muscles lie deep and are named for where they land: <b>APL</b> on the 1st metacarpal (moves the whole thumb out), <b>EPB</b> on the proximal phalanx, <b>EPL</b> on the distal phalanx (the further the insertion, the more joints it extends). All three are supplied by the posterior interosseus nerve.</p>
<p class="tip">Hook: Longus = reaches Last (distal phalanx); Brevis = Before (proximal).</p>
<p><b>Exam trap:</b> APL abducts the thumb but also helps abduct the wrist; the thumb extensors are deep, not superficial.</p>`,html:`<table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Action</th></tr>
<tr><td>Extensor digitorum</td><td>CEO → extensor expansions of digits 2–5</td><td>Extends all joints proximal (MCP etc.)</td></tr>
<tr><td>Extensor digiti minimi</td><td>CEO → digit 5</td><td>Extends 5th digit independently</td></tr>
<tr><td>Extensor indicis</td><td>Ulna, interosseus membrane → digit 2</td><td>Extends 2nd digit independently</td></tr>
<tr><td>Extensor pollicis longus</td><td>Ulna, interosseus membrane → distal phalanx of thumb</td><td>Thumb extension</td></tr>
<tr><td>Extensor pollicis brevis</td><td>Radius, interosseus membrane → proximal phalanx of thumb</td><td>Thumb extension</td></tr>
<tr><td>Abductor pollicis longus</td><td>Ulna, radius, interosseus membrane → 1st metacarpal</td><td>Thumb abduction (+ wrist abduction)</td></tr></table>
<p>The extensor indicis and extensor digiti minimi give the index and 'pinky' finer independent movement. All digit extensors assist with wrist extension; the three thumb muscles are <b>deep</b> and supplied by the <b>posterior interosseus n.</b></p>`},
  {t:'match',title:'Muscle → insertion',pairs:[['Extensor pollicis longus','Distal phalanx of thumb'],['Extensor pollicis brevis','Proximal phalanx of thumb'],['Abductor pollicis longus','1st metacarpal'],['Extensor indicis','Digit 2']]},
  {t:'mcq',q:'A patient can extend the middle, ring and little fingers but cannot point (extend the index independently). Which muscle is the best explanation?',opts:['Extensor digitorum','Extensor indicis','Extensor pollicis longus','Extensor digiti minimi'],a:1,why:'Extensor indicis gives the index independent extension, as extensor digiti minimi does for digit 5.'},
  {t:'cloze',title:'Thumb muscles',text:'Abductor pollicis longus inserts on the [[1st metacarpal]]; extensor pollicis longus inserts on the [[distal]] phalanx; extensor pollicis brevis inserts on the [[proximal]] phalanx.',bank:['1st metacarpal','distal','proximal','middle','2nd metacarpal']},
  {t:'learn',title:'Supinator, supination & the snuff box',slides:[21, 27, 29],explain:`<p><b>Supination</b> turns the palm up, as if carrying a bowl of soup. In pronation the radius is crossed over the ulna; supination uncrosses it. The <b>supinator</b> muscle wraps around the upper radius and unwinds it. <b>Biceps brachii</b> helps strongly, which is why you supinate when tightening a screw with the elbow bent.</p>
<p>The <b>deep branch of the radial nerve</b> passes through (pierces) supinator, which can compress it there.</p>
<p>The <b>anatomical snuff box</b> is the little hollow at the base of the thumb when you extend it. Its two walls are tendons: EPL on the medial wall; EPB and APL on the lateral wall. Its floor holds the <b>scaphoid</b> and the <b>radial artery</b>, so you can feel a pulse and press for scaphoid tenderness. The superficial radial nerve branch (skin sensation) crosses it too.</p>
<p><b>Testing tip:</b> locking the elbow stops shoulder rotation from faking forearm rotation.</p>
<p class="tip">Hook: Pierce = Supinator for the radial nerve; Pronator teres for median.</p>
<p><b>Exam trap:</b> the snuff box does not contain the median or ulnar nerve.</p>`,html:`<p><span class="key">Supinator</span> (CEO, ulna → radius; radial n.) works with <b>biceps brachii</b> to rotate the radius and uncross it from the ulna: supination (like holding a bowl of soup). The deep branch of the radial n. <b>pierces supinator</b>.</p>
<p>The <span class="key">anatomical snuff box</span> is bordered by tendons of <b>extensor pollicis longus</b> (medial) and <b>extensor pollicis brevis</b> and <b>abductor pollicis longus</b> (lateral). It's a landmark for the <b>radial a.</b> (pulse) and the <b>superficial branch of the radial n.</b> (cutaneous innervation to the dorsum of the hand; runs deep to brachioradialis). The <b>scaphoid</b> is palpable in the snuff box.</p>
<p>To isolate forearm pronation/supination from shoulder rotation, have the patient <b>lock the elbow</b>.</p>`},
  {t:'mcq',q:'Which two muscles produce supination?',opts:['Supinator and biceps brachii','Supinator and brachioradialis','Pronator teres and supinator','Biceps brachii and brachialis'],a:0,why:'Supinator works with biceps brachii to supinate.'},
  {t:'sata',q:'Which structures are associated with the anatomical snuff box? (select all)',opts:['Radial artery pulse','Superficial branch of radial n.','Extensor pollicis longus tendon','Median n.','Scaphoid'],a:[0,1,2,4],why:'The snuff box is bordered by EPL, EPB and APL tendons, houses the radial a. and superficial radial n. branch, and the scaphoid lies in its floor.'},
  {t:'mcq',q:'How can you isolate rotation at the shoulder from pronation/supination when testing hand rotation?',opts:['Have the patient lock the elbow','Flex the wrist','Abduct the arm to 90°','Fix the fingers'],a:0,why:'Locking the elbow prevents forearm rotation so only shoulder medial/lateral rotation remains.'},
  {t:'flash',title:'Posterior compartment recap',cards:[['Elbow extensor in posterior forearm','Anconeus'],['Elbow flexor in posterior forearm','Brachioradialis'],['Supinator partner','Biceps brachii'],['Nerve to posterior compartment','Radial n. (deep branch / posterior interosseus n.)'],['Percentage of people lacking palmaris longus','~10%']]}
 ]},
 {id:'u5l4',title:'Clinical: nerves, wrist drop & fractures',mins:7,flower:'🌺',items:[
  {t:'learn',title:'Posterior neurovasculature & wrist drop',slides:[29],explain:`<p>Think of the radial nerve as a tree trunk that forks near the elbow into a <b>motor</b> branch and a <b>sensory</b> branch.</p>
<ul><li><b>Deep branch</b> dives through supinator and becomes the <b>posterior interosseus nerve (PIN)</b>: it is mostly motor, going to the deep extensors and thumb muscles.</li>
<li><b>Superficial branch</b> stays on the surface under brachioradialis and carries skin sensation from the back of the hand.</li></ul>
<p><b>Wrist drop</b> is when you can't lift the hand at the wrist, so it hangs limp, because the extensors lost their nerve supply (like a puppet with a cut string).</p>
<p>The diagnostic logic: if the injury is high (above the fork), you lose both movement and sensation. If it's only the PIN (below the fork), the superficial branch survives, so the patient has weak finger extension but normal skin sensation on the back of the hand. So test sensation: numbness = radial nerve or superficial branch; no numbness with weakness = PIN.</p>
<p class="tip">Hook: PIN = Purely motor, sensation spared.</p>
<p><b>Exam trap:</b> a PIN lesion causes finger drop rather than a full classic wrist drop, since some wrist extensors are spared.</p>`,html:`<p>The radial n. divides near the elbow:</p>
<ul><li><b>Deep branch</b> pierces supinator → continues as the <span class="key">posterior interosseus n.</span> (with the posterior interosseous a.), supplying deep posterior muscles.</li>
<li><b>Superficial branch</b> runs deep to brachioradialis, supplies skin on the dorsum of the hand.</li></ul>
<p><span class="key">Wrist drop</span> is the classic sign of radial n. palsy (wrist extensors lost). The lecture asks how to test radial n. versus posterior interosseus n. paralysis: the PIN is the deep branch, so the <b>superficial branch</b> (cutaneous sensation to the dorsum of the hand) is spared in a PIN lesion, whereas a radial n. lesion above the split can also cause sensory loss there.</p>
<p class="tip">Think: sensory loss on the dorsum of the hand points to the radial n. itself or its superficial branch, not the PIN.</p>`},
  {t:'mcq',q:'A patient has weakness extending the fingers at the MCP joints with preserved sensation on the dorsum of the hand. Which nerve is most likely injured?',opts:['Radial n. in the axilla','Posterior interosseus n.','Superficial branch of radial n.','Median n.'],a:1,why:'The posterior interosseus n. is purely motor to deep/superficial extensors; the superficial branch (sensory) is spared.'},
  {t:'mcq',q:'Wrist drop is most characteristic of an injury to which nerve?',opts:['Ulnar n.','Median n.','Radial n.','Musculocutaneous n.'],a:2,why:'Loss of wrist extensors from radial n. injury produces wrist drop.'},
  {t:'sort',title:'Branch of radial n.',buckets:['Deep branch / posterior interosseus','Superficial branch'],items:[['Pierces supinator',0],['Runs deep to brachioradialis',1],['Supplies extensor indicis',0],['Cutaneous to dorsum of hand',1]]},
  {t:'learn',title:'Fractures & clinical correlations',slides:[8, 12, 23],explain:`<p>This card ties the anatomy to common injuries, each of which is easy to predict from structure.</p>
<ul><li><b>Distal radius fracture</b>: a fall on an outstretched hand sends force up through the radius; the broken end tilts back, giving a "dinner fork" bend in side view.</li>
<li><b>Scaphoid fracture</b>: pain deep in the snuff box. The scaphoid's blood supply enters at the far end and runs backward, so a break can cut off blood to the part nearer the thumb. <b>Avascular necrosis</b> means bone death from lost blood supply.</li>
<li><b>Carpal tunnel syndrome</b>: the median nerve is squeezed under the flexor retinaculum; surgery cuts the retinaculum to give space.</li>
<li><b>Ulnar nerve</b>: exposed at the elbow (cubital tunnel) and at the wrist (ulnar canal), so it is vulnerable at both.</li></ul>
<p class="tip">Hook: fall on hand + snuff box tenderness = scaphoid until proven otherwise.</p>
<p><b>Exam trap:</b> a scaphoid fracture may not show on the first X-ray; the key concern is avascular necrosis, not nerve damage.</p>`,html:`<ul><li><b>Distal radius fracture</b> → 'dinner fork deformity'.</li>
<li><b>Styloid process fractures</b> common (especially radius).</li>
<li><b>Scaphoid fracture</b> (tenderness in snuff box) — risk of avascular necrosis.</li>
<li><b>Carpal tunnel syndrome</b> — median n. compressed beneath the flexor retinaculum; treated by carpal tunnel release.</li>
<li><b>Ulnar n.</b> at the elbow in the cubital tunnel; at the wrist in the ulnar canal.</li></ul>`},
  {t:'mcq',q:'A woman falls on an outstretched hand and has tenderness in the anatomical snuff box. What complication is most feared?',opts:['Avascular necrosis of the scaphoid','Radial n. palsy','Pronator syndrome','Dislocation of the radial head'],a:0,why:'Scaphoid fractures can lead to avascular necrosis (tissue death).'},
  {t:'order',title:'Path of force from hand to humerus',steps:['Hand','Radius','Interosseus membrane','Ulna','Humerus'],why:'Most force goes radius → ulna via the interosseus membrane, then ulna → humerus.'},
  {t:'mcq',q:'Which nerve passes through the carpal tunnel?',opts:['Ulnar n.','Median n.','Radial n.','Posterior interosseus n.'],a:1,why:'Median n. and digit flexor tendons go through the carpal tunnel.'},
  {t:'mcq',q:'Which of these is NOT in the anterior forearm compartment?',opts:['Pronator quadratus','Flexor pollicis longus','Palmaris longus','Extensor indicis'],a:3,why:'Extensor indicis is a deep posterior (radial n./PIN) muscle.'}
 ]},
 {id:'u5boss',title:'Forearm & Wrist Boss Quiz',mins:8,flower:'👑',boss:true,items:[
  {t:'mcq',q:'Which carpal bone is palpable in the anatomical snuff box?',opts:['Lunate','Scaphoid','Pisiform','Hamate'],a:1,why:'The scaphoid lies in the floor of the snuff box.'},
  {t:'mcq',q:'Flexor carpi radialis causes:',opts:['Wrist flexion and abduction','Wrist flexion and adduction','Wrist extension and abduction','Elbow flexion'],a:0,why:'FCR flexes and abducts (radial deviation) the wrist; innervated by the median n.'},
  {t:'mcq',q:'Which forearm muscle inserts onto the middle phalanges?',opts:['Flexor digitorum profundus','Flexor digitorum superficialis','Extensor digitorum','Flexor pollicis longus'],a:1,why:'FDS = middle phalanges; FDP = distal phalanges.'},
  {t:'mcq',q:'Which muscle is supplied by the anterior interosseous n.?',opts:['Pronator teres','Flexor carpi ulnaris','Pronator quadratus','Supinator'],a:2,why:'Anterior interosseous (median) supplies FPL, pronator quadratus and lateral FDP.'},
  {t:'sata',q:'Which are extensors of the wrist? (select all)',opts:['Extensor carpi radialis longus','Extensor carpi radialis brevis','Extensor carpi ulnaris','Brachioradialis','Palmaris longus'],a:[0,1,2],why:'The three extensor carpi muscles extend the wrist; brachioradialis flexes the elbow.'},
  {t:'mcq',q:'Which muscle shares the nerve (ulnar) with the medial half of FDP in the anterior forearm?',opts:['Flexor carpi ulnaris','Flexor carpi radialis','Pronator teres','Flexor digitorum superficialis'],a:0,why:'FCU is the only other anterior forearm muscle supplied by the ulnar n.'},
  {t:'mcq',q:'The deep branch of the radial nerve pierces which muscle?',opts:['Pronator teres','Brachioradialis','Supinator','Anconeus'],a:2,why:'It pierces supinator and continues as the posterior interosseus n.'},
  {t:'mcq',q:'A person lacks palmaris longus. What is the likely consequence?',opts:['Loss of wrist flexion','No functional deficit; it is absent in ~10% of people','Loss of supination','Wrist drop'],a:1,why:'Palmaris longus is absent in ~10% with no major deficit since FCR and FCU flex the wrist.'},
  {t:'order',title:'Path of force from hand to humerus',steps:['Hand','Radius','Interosseus membrane','Ulna','Humerus'],why:'Most force passes radius → ulna via the interosseus membrane, then ulna → humerus.'},
  {t:'mcq',q:'Carpal tunnel syndrome involves compression of which nerve under which structure?',opts:['Ulnar n., extensor retinaculum','Median n., flexor retinaculum','Radial n., flexor retinaculum','Median n., annular ligament'],a:1,why:'The flexor retinaculum covers the carpal tunnel with the median n. inside.'}
 ]}
]});

EXAMQ.push({t:'mcq',unit:3,mod:'u5',q:'Which of the following correctly lists the carpal bones of the proximal row, lateral to medial?',opts:['Scaphoid, lunate, triquetrum, pisiform','Trapezium, trapezoid, capitate, hamate','Scaphoid, trapezium, lunate, pisiform','Lunate, scaphoid, pisiform, triquetrum','Hamate, capitate, trapezoid, trapezium'],a:0,why:'"So Long To Pinky": scaphoid, lunate, triquetrum, pisiform; the distal row follows (Here Comes The Thumb).'});
EXAMQ.push({t:'mcq',unit:3,mod:'u5',q:'After a fall on an outstretched hand, a patient has a deformity of the distal forearm resembling the back of a dinner fork. Which injury is most likely?',opts:['Scaphoid fracture','Distal radius fracture','Ulnar styloid dislocation only','Lunate dislocation','Radial head fracture'],a:1,why:'Distal radius fracture produces the "dinner fork deformity".'});
EXAMQ.push({t:'mcq',unit:3,mod:'u5',q:'A patient cannot flex the distal interphalangeal joint of the little finger, though PIP flexion is intact. Which nerve supplies this muscle portion?',opts:['Radial n.','Anterior interosseous n.','Ulnar n.','Musculocutaneous n.','Axillary n.'],a:2,why:'The medial half of FDP (digits 4–5) is innervated by the ulnar n.; FDS handles PIP flexion.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u5',q:'Which of the following muscles is NOT innervated by the radial nerve or its branches?',opts:['Brachioradialis','Supinator','Extensor pollicis longus','Anconeus','Abductor pollicis brevis'],a:4,why:'Abductor pollicis brevis is a thenar muscle (recurrent median n.); all others are radial-supplied.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u5',q:'A patient with a lesion of the posterior interosseus nerve would be expected to have:',opts:['Weak finger extension and no sensory loss over the dorsum of the hand','Complete wrist drop with sensory loss over the dorsum of the hand','Inability to flex the DIP joints','Loss of pronation','Loss of elbow flexion'],a:0,why:'PIN is the deep (motor) branch of the radial n.; the superficial branch giving sensation is spared.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u5',q:'Which structures pass through the carpal tunnel?',opts:['Ulnar n. and ulnar a.','Median n. and tendons of the digit flexors','Radial a. and superficial radial n.','Median n. and palmaris longus tendon only','Extensor tendons and posterior interosseus n.'],a:1,why:'The median n. plus FDS, FDP and FPL tendons pass under the flexor retinaculum; the ulnar structures run in the ulnar canal.'});

MODULES.push({ id:'u6', num:13, unit:3, title:'Hand', 
 blurb:'Digit joints and movements, thenar/hypothenar/central muscles, ulnar vs median hand injuries, palmar arches, nerve maps and dermatomes.',
 badge:{name:'Hand Master',icon:'✋'},
 lessons:[
 {id:'u6l1',title:'Hand bones, joints & movements',mins:8,flower:'🌼',items:[
  {t:'learn',title:'Bones & orientation of the hand',slides:[5, 6, 7, 8],explain:`<p>The hand skeleton is the <b>metacarpals</b> (the five long bones in the palm) plus the <b>phalanges</b> (finger bones). Fingers have three phalanges (proximal, middle, distal); the thumb has two.</p>
<p>Joint names follow the bones they join, read from the wrist outward: <b>CMC</b> (carpal-metacarpal), <b>MCP</b> (the knuckles, where a fist makes a bump), <b>PIP</b> and <b>DIP</b> (the finger hinges). Condyloid means an egg-in-cup shape: it moves in two directions (bend and spread). Hinge joints like a door: one direction only (bend/straighten).</p>
<p>In the hand, "anterior/posterior" is replaced by <b>palmar</b> (palm side) and <b>dorsal</b> (back side), since the hand can be turned in many ways.</p>
<p>Movements of the digits are measured against the hand's own midline, running through digit III (the middle finger). So spreading the fingers away from the middle finger is abduction, and squeezing them toward it is adduction.</p>
<p class="tip">Hook: "I DIP, you PIP, we IP".</p>
<p><b>Exam trap:</b> abduction isn't relative to the body's midline.</p>`,html:`<p>The hand = <b>metacarpals</b> + <b>phalanges</b>. Each finger has <b>proximal, middle and distal</b> phalanges; the thumb has only <b>proximal and distal</b>.</p>
<ul><li><span class="key">CMC</span>: carpals ↔ metacarpals</li><li><span class="key">MCP</span>: metacarpals ↔ phalanges (condyloid joints)</li><li><span class="key">IP</span>: phalanges ↔ each other (hinge joints): <b>PIP</b> and <b>DIP</b> in the fingers; a single <b>IP</b> in the thumb.</li></ul>
<p>Use <b>palmar</b> and <b>dorsal</b> instead of anterior and posterior. For digit movements, each hand is considered in isolation, with reference to the <b>midline of the hand</b> (through digit III), not the body. The digits' joints are supported by the <b>digital collateral ligaments</b>.</p>
<p class="tip">I DIP, you PIP, we IP.</p>`},
  {t:'mcq',q:'Which describes the interphalangeal joints?',opts:['Condyloid joints allowing abduction','Saddle joints','Hinge joints allowing only flexion/extension','Plane joints'],a:2,why:'IP joints are hinge joints; only flexion and extension occur.'},
  {t:'match',title:'Match the joint',pairs:[['CMC','Carpals ↔ metacarpals'],['MCP','Metacarpals ↔ proximal phalanges'],['PIP','Proximal ↔ middle phalanges'],['DIP','Middle ↔ distal phalanges']]},
  {t:'mcq',q:'Digit abduction and adduction are described relative to:',opts:['The anatomical position midline of the body','The midline of the hand (through the 3rd digit)','The radius','The thumb'],a:1,why:'The hand is considered in isolation, with reference to its own midline.'},
  {t:'learn',title:'Finger & thumb movements',slides:[6, 10],explain:`<p>Match the shape of the joint to the movement it allows. The <b>MCP</b> (knuckle) is condyloid so it can bend/straighten and also fan the fingers out (abduction) and in (adduction). The <b>IP joints</b> are hinges, so only bend and straighten.</p>
<p>The thumb's base joint (CMC) is a <b>saddle joint</b>: like sitting on a horse saddle, it curves in both directions and moves freely, allowing a circular motion. The extra movements are <b>opposition</b> (bringing the thumb pad across to touch the pinky, as in pinching or gripping a pen) and <b>reposition</b> (returning the thumb back out again).</p>
<p>The thumb is rotated about 90 degrees from the fingers, so its flexion/extension and abduction/adduction axes are different from those of the fingers; that's why it needs its own orientation.</p>
<p class="tip">Hook: saddle = sophisticated. No saddle, no opposition, and no ability to grip tools.</p>
<p><b>Exam trap:</b> opposition happens at the CMC, not the MCP or IP joint; and finger abduction/adduction happens only at the MCP.</p>`,html:`<table><tr><th>Joint</th><th>Movements</th></tr>
<tr><td>MCP</td><td>Flexion, extension, <b>abduction, adduction</b></td></tr>
<tr><td>IP (PIP, DIP)</td><td>Flexion and extension <b>only</b></td></tr>
<tr><td>Thumb CMC (saddle joint)</td><td>Flexion, extension, abduction, adduction, <b>opposition</b> (toward the fifth digit), <b>reposition</b> (away from fifth digit)</td></tr></table>
<p>The thumb has its own orientation and axis of motion. Flexion/extension of the thumb occur at the MCP and IP joints. <b>Opposition</b> allows sophisticated fine motor actions and gripping tools. The fifth digit also performs some opposition and reposition.</p>`},
  {t:'sort',title:'Where does the movement occur?',buckets:['MCP only','MCP and IP','Thumb CMC'],items:[['Finger abduction',0],['Finger adduction',0],['Finger flexion',1],['Opposition',2],['Reposition',2],['Finger extension',1]]},
  {t:'mcq',q:'The thumb CMC joint is classified as a:',opts:['Hinge joint','Saddle joint','Condyloid joint','Pivot joint'],a:1,why:'The saddle CMC joint allows opposition and reposition.'},
  {t:'cloze',title:'Movements',text:'Opposition moves the thumb [[toward]] the fifth digit and occurs at the [[carpometacarpal]] joint; reposition moves it [[away]] from the fifth digit.',bank:['toward','carpometacarpal','away','interphalangeal','metacarpophalangeal']},
  {t:'learn',title:'Long flexors/extensors across digit joints',slides:[7, 14],explain:`<p>These "long" muscles start in the forearm, so their tendons cross every joint between there and where they attach. A tendon acts on each joint it crosses, so the insertion point decides how many joints get moved.</p>
<ul><li><b>FDS</b> ends on the middle phalanx, so it can bend the PIP and anything before it (MCP, wrist), but not the fingertip.</li>
<li><b>FDP</b> ends on the distal phalanx, so it can bend the DIP as well, curling the entire finger.</li>
<li><b>Extensor digitorum</b> (through the extensor expansion, the tendon hood over the finger) straightens the finger back to the DIP level.</li></ul>
<p>Picture a puppet string: pull at the tip and the whole finger folds, pull at the middle and only the proximal part folds.</p>
<p class="tip">Hook: S = Second-last (middle phalanx), P = Pointing at the tip (distal).</p>
<p><b>Exam trap:</b> a cut FDP tendon means no DIP flexion, but PIP flexion remains thanks to FDS.</p>`,html:`<ul><li><b>Extensor digitorum</b> (with the extensor expansion) acts at <b>everything proximal to the DIPs</b>.</li>
<li><b>FDS</b> acts at everything proximal to the PIPs (inserts on middle phalanges).</li>
<li><b>FDP</b> acts at everything proximal to the DIPs/fingertip (inserts on distal phalanges).</li></ul>`},
  {t:'mcq',q:'Which tendon is cut if a patient cannot flex the DIP joint?',opts:['FDS','FDP','Lumbrical','Palmar interosseus'],a:1,why:'Only FDP crosses and flexes the DIP.'},
  {t:'flash',title:'Hand joints recap',cards:[['Joint of the thumb between phalanges','IP (no PIP/DIP)'],['Joints that can abduct/adduct digits','MCP'],['Ligaments supporting digit joints','Digital collateral ligaments'],['Terms used instead of anterior/posterior in the hand','Palmar and dorsal']]}
 ]},
 {id:'u6l2',title:'Thenar & hypothenar eminences',mins:8,flower:'🌸',items:[
  {t:'learn',title:'Thenar eminence',slides:[11, 12, 17],explain:`<p>The <b>thenar eminence</b> is the fleshy pad at the base of your thumb. "Intrinsic" muscles start and finish within the hand (unlike forearm "extrinsic" muscles), giving fine control.</p>
<p>Each name tells you its job: <b>abductor</b> moves the thumb away from the palm, <b>flexor</b> bends it, <b>opponens</b> swings it across toward the pinky for pinching, and <b>adductor</b> pulls it in against the palm (like holding a sheet of paper). "Pollicis" = of the thumb, "brevis" = short.</p>
<p>The nerve rule: three of the four muscles (APB, FPB, OP) are supplied by the <b>recurrent branch of the median nerve</b>, a little branch that doubles back ("recurs") to the thenar muscles. It is superficial, so a cut in the thenar region severs it easily. The adductor is the odd one out and gets the <b>deep branch of the ulnar nerve</b>.</p>
<p class="tip">Hook: "LOAF" muscles (Lumbricals 1-2, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis) = median.</p>
<p><b>Exam trap:</b> adductor pollicis is thenar but ulnar. If the median is cut, adduction still works.</p>`,html:`<p>Intrinsic muscles that move the thumb. They arise from carpals (and metacarpals).</p>
<table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Action</th><th>Nerve</th></tr>
<tr><td>Abductor pollicis brevis</td><td>Carpals → proximal phalanx</td><td>Abduction</td><td>Recurrent branch of median</td></tr>
<tr><td>Flexor pollicis brevis</td><td>Carpals → proximal phalanx</td><td>Flexion</td><td>Recurrent branch of median</td></tr>
<tr><td>Opponens pollicis</td><td>Carpals → 1st metacarpal</td><td>Opposition</td><td>Recurrent branch of median</td></tr>
<tr><td>Adductor pollicis</td><td>Carpals, metacarpals (transverse & oblique heads) → proximal phalanx</td><td>Adduction</td><td><b>Deep branch of ulnar</b> (C8–T1)</td></tr></table>
<p class="tip">Adductor pollicis is the exception: thenar muscle, but ulnar nerve. The recurrent branch of the median (C5–T1) supplies the rest. The median is the 'million-dollar nerve'.</p>`},
  {t:'mcq',q:'Which thenar muscle is NOT innervated by the recurrent branch of the median nerve?',opts:['Abductor pollicis brevis','Flexor pollicis brevis','Opponens pollicis','Adductor pollicis'],a:3,why:'Adductor pollicis is supplied by the deep branch of the ulnar n.'},
  {t:'match',title:'Thenar muscle → action',pairs:[['Abductor pollicis brevis','Thumb abduction'],['Flexor pollicis brevis','Thumb flexion'],['Opponens pollicis','Opposition'],['Adductor pollicis','Thumb adduction']]},
  {t:'mcq',q:'Opponens pollicis inserts on the:',opts:['Proximal phalanx','1st metacarpal','5th metacarpal','Distal phalanx'],a:1,why:'Opponens pollicis → 1st metacarpal; the abductor and flexor brevis insert on the proximal phalanx.'},
  {t:'mcq',q:'A laceration at the thenar region of the palm severs the recurrent branch of the median nerve. Which action is preserved?',opts:['Thumb abduction','Thumb opposition','Thumb adduction','Thumb flexion by FPB'],a:2,why:'Adductor pollicis is ulnar-supplied, so adduction persists.'},
  {t:'learn',title:'Hypothenar eminence',slides:[13],explain:`<p>The <b>hypothenar eminence</b> is the fleshy pad at the base of the little finger ("hypo" = under; it sits on the ulnar side of the palm). It mirrors the thenar eminence, with the same three jobs for the pinky: abduct (spread it away), flex (curl it), and oppose (draw it across toward the thumb, which helps cup the hand).</p>
<p>All three arise from carpal bones and attach to the proximal phalanx (abductor and flexor) or the 5th metacarpal (opponens). The names tell you everything: "digiti minimi" = of the smallest digit.</p>
<p>The nerve is simple: it's all <b>ulnar, deep branch</b>. This matches the general rule that the ulnar nerve is the main supplier of the hand's small muscles and sensory territory on the medial (pinky) side.</p>
<p class="tip">Hook: Hypothenar = pinky side = ulnar nerve.</p>
<p><b>Exam trap:</b> don't assign the abductor digiti minimi to the interossei; it abducts the pinky, while interossei abduct or adduct the other digits. Also note the opponens digiti minimi is small and sometimes absent.</p>`,html:`<p>Intrinsic muscles of the 5th digit, all innervated by the <b>deep branch of the ulnar n.</b> (C8–T1).</p>
<table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Action</th></tr>
<tr><td>Abductor digiti minimi</td><td>Carpals → proximal phalanx</td><td>Abduction of 'pinky'</td></tr>
<tr><td>Flexor digiti minimi</td><td>Carpals → proximal phalanx</td><td>Flexion of 'pinky'</td></tr>
<tr><td>Opponens digiti minimi</td><td>Carpals → 5th metacarpal</td><td>Opposition of 'pinky'</td></tr></table>
<p>Opponens digiti minimi is small; many people lack one.</p>`},
  {t:'sort',title:'Innervation of eminence muscles',buckets:['Median (recurrent)','Ulnar (deep branch)'],items:[['Opponens pollicis',0],['Abductor digiti minimi',1],['Adductor pollicis',1],['Flexor pollicis brevis',0],['Opponens digiti minimi',1],['Abductor pollicis brevis',0]]},
  {t:'mcq',q:'Which muscle abducts the little finger?',opts:['Dorsal interosseous','Palmar interosseous','Abductor digiti minimi','Opponens digiti minimi'],a:2,why:'Abductor digiti minimi (hypothenar, ulnar n.) abducts the pinky.'},
  {t:'cloze',title:'Eminences',text:'The thenar eminence is mostly supplied by the [[recurrent]] branch of the median n., whereas the hypothenar eminence is supplied by the [[deep]] branch of the [[ulnar]] n.',bank:['recurrent','deep','ulnar','superficial','radial']},
  {t:'flash',title:'Eminences recap',cards:[['Thenar exception (ulnar)','Adductor pollicis'],['Nerve to hypothenar muscles','Deep branch of ulnar n. (C8–T1)'],['Opponens digiti minimi insertion','5th metacarpal'],['Nerve nickname: "million-dollar nerve"','Median n.']]}
 ]},
 {id:'u6l3',title:'Central & interosseus compartments',mins:8,flower:'🌻',items:[
  {t:'learn',title:'Lumbricals',slides:[15, 16],explain:`<p>"Lumbrical" means earthworm-like: they are slim, worm-shaped muscles. Unusually, they start from a <b>tendon</b> (FDP tendons in the palm) rather than bone and attach to the <b>extensor expansion</b> (the tendon hood on the back of the finger).</p>
<p>That odd route explains their action. They pull from the palm side of the knuckle (MCP), so they bend the MCP, but they end on the back of the finger, so they straighten the IP joints. Picture the "table-top" or "writing grip" position: knuckles bent, fingertips straight, like holding a tray.</p>
<p>There are four, one per finger (2-5), and each takes the nerve of the neighbouring FDP half: lateral two (index, middle) = <b>median</b>; medial two (ring, little) = <b>deep ulnar</b>.</p>
<p class="tip">Hook: Lumbricals Link FDP to the extensor expansion: MCP flex, IP extend.</p>
<p><b>Exam trap:</b> they are intrinsic hand muscles in the central compartment, not part of the interossei group; and the nerve split is lateral 2 median / medial 2 ulnar, not the other way round.</p>`,html:`<p><span class="key">Lumbricals</span> originate from the <b>tendons of FDP</b> (central compartment) and insert on the <b>extensor expansions</b> of digits 2–5. Action: <b>flex the MCPs and extend the IPs</b>.</p>
<ul><li><b>Lateral two</b> lumbricals: <b>median n.</b></li><li><b>Medial two</b> lumbricals: <b>deep branch of the ulnar n.</b></li></ul>
<p class="tip">Lumbricals: MCP flexion, IP extension.</p>`},
  {t:'mcq',q:'The lumbrical muscles originate from:',opts:['Tendons of FDS','Tendons of FDP','Metacarpals','Carpal bones'],a:1,why:'Lumbricals arise from FDP tendons.'},
  {t:'mcq',q:'What is the combined action of the lumbricals?',opts:['Flex MCP and IP joints','Extend MCP and IP joints','Flex MCP joints and extend IP joints','Extend MCP and flex IP joints'],a:2,why:'They insert on the extensor expansions: MCP flexion, IP extension.'},
  {t:'mcq',q:'Which lumbricals are supplied by the median nerve?',opts:['Medial two','Lateral two','All four','None'],a:1,why:'Lateral two = median; medial two = ulnar.'},
  {t:'learn',title:'Interossei',slides:[16],explain:`<p>"Interosseus" means between bones: these muscles fill the gaps between the metacarpals and are responsible for spreading and closing the fingers.</p>
<p>Use the midline of the hand (the middle finger) as the reference point. The <b>dorsal</b> interossei (four, on the back) <b>ABduct</b> (fan the fingers out), the <b>palmar</b> interossei (on the palm side) <b>ADduct</b> (squeeze them together toward the middle finger). The middle finger can't move toward itself, so it has two dorsal muscles for side-to-side wiggling and no palmar one; that is why palmar interossei insert on digits 2, 4, 5 only.</p>
<p>All interossei are supplied by the deep branch of the ulnar nerve.</p>
<p class="tip">Hooks: PAD (Palmar ADduct), DAB (Dorsal ABduct). Think "Dorsal = Dab hands spread out".</p>
<p><b>Exam trap:</b> a patient with an ulnar nerve injury can't spread or squeeze the fingers (e.g. holding a sheet of paper between fingers falls out).</p>`,html:`<p>The interossei lie between the metacarpals; all are supplied by the <b>deep branch of the ulnar n.</b> (C8–T1). Origin: metacarpals; insertion: proximal phalanges / extensor expansions.</p>
<table><tr><th>Group</th><th>Insertion (digits)</th><th>Action</th></tr>
<tr><td><b>Palmar</b> interossei ('P.AD.')</td><td>2, 4, 5</td><td>ADduct digits</td></tr>
<tr><td><b>Dorsal</b> interossei ('D.AB.')</td><td>2–4</td><td>ABduct digits</td></tr></table>
<p class="tip">PAD and DAB: Palmar ADduct, Dorsal ABduct. Abduction is relative to the midline of the hand (3rd digit).</p>`},
  {t:'match',title:'Interossei',pairs:[['Palmar interossei','Adduct digits (2, 4, 5)'],['Dorsal interossei','Abduct digits (2–4)'],['Both groups','Deep branch of ulnar n.'],['Lumbrical origin','FDP tendons']]},
  {t:'mcq',q:'A patient with an ulnar nerve injury cannot spread (abduct) the fingers. Which muscles are weak?',opts:['Palmar interossei','Dorsal interossei','Lumbricals only','Thenar muscles'],a:1,why:'Dorsal interossei abduct (DAB), supplied by the deep ulnar n.'},
  {t:'sata',q:'Which intrinsic muscles are supplied by the deep branch of the ulnar nerve? (select all)',opts:['Dorsal interossei','Adductor pollicis','Opponens pollicis','Hypothenar muscles','Lateral two lumbricals'],a:[0,1,3],why:'Opponens pollicis and lateral lumbricals are median n.'},
  {t:'learn',title:'Palmaris brevis & summary chart',slides:[11, 16],explain:`<p><b>Palmaris brevis</b> is a tiny skin muscle on the ulnar side of the palm. It pulls the palm skin toward the middle, tightening it and making a dimple, which improves grip. Don't confuse it with palmaris longus in the forearm.</p>
<p>The summary table gives you the nerve map of the whole hand. The big picture: the <b>ulnar nerve</b> runs the majority of the little hand muscles (hypothenar, interossei, adductor pollicis, medial lumbricals, palmaris brevis), while the <b>median nerve</b> supplies a small lateral group (thenar muscles APB, FPB, OP and the lateral two lumbricals).</p>
<p>Within the ulnar nerve, the nerve splits into <b>deep</b> (nearly all muscles) and <b>superficial</b> (palmaris brevis and the skin) branches.</p>
<p class="tip">Hook: Deep for muscle, superficial for skin: the superficial branch is only a "muscle" for palmaris brevis.</p>
<p><b>Exam trap:</b> "Which intrinsic muscle is supplied by the superficial ulnar branch?" is always palmaris brevis.</p>`,html:`<p><b>Palmaris brevis</b> (palmar aponeurosis → skin of medial palm) tenses the skin of the palm; innervated by the <b>superficial branch of the ulnar n.</b> (C8–T1) - the muscular exception to the deep branch.</p>
<table><tr><th>Group</th><th>Nerve</th></tr><tr><td>Thenar (APB, FPB, OP)</td><td>Median (recurrent)</td></tr><tr><td>Adductor pollicis</td><td>Ulnar (deep)</td></tr><tr><td>Hypothenar</td><td>Ulnar (deep)</td></tr><tr><td>Lumbricals</td><td>Lateral 2: median; medial 2: ulnar</td></tr><tr><td>Interossei</td><td>Ulnar (deep)</td></tr><tr><td>Palmaris brevis</td><td>Ulnar (superficial)</td></tr></table>
<p>The ulnar n. innervates the <b>majority</b> of intrinsic hand muscles; the median innervates some on the lateral side.</p>`},
  {t:'mcq',q:'Which intrinsic hand muscle is supplied by the superficial branch of the ulnar nerve?',opts:['Palmaris brevis','Adductor pollicis','Abductor digiti minimi','Palmar interossei'],a:0,why:'Palmaris brevis tenses palm skin and has superficial ulnar innervation.'},
  {t:'flash',title:'Intrinsic recap',cards:[['Lumbrical insertion','Extensor expansions of digits 2–5'],['Palmar interossei mnemonic','PAD (palmar adduct)'],['Dorsal interossei mnemonic','DAB (dorsal abduct)'],['Tenses skin of the palm','Palmaris brevis']]}
 ]},
 {id:'u6l4',title:'Hand nerves, vessels & clinical',mins:9,flower:'🌺',items:[
  {t:'learn',title:'Ulnar nerve in the hand',slides:[19, 20],explain:`<p>The <b>ulnar canal</b> (Guyon's canal) is a small tunnel at the wrist beside the pisiform. It is a different route from the carpal tunnel, so carpal tunnel syndrome doesn't squeeze the ulnar nerve. The ulnar artery travels with it.</p>
<p>After the canal, the ulnar nerve divides: the <b>superficial branch</b> gives the palmaris brevis plus sensation to the pinky side of the palm, and the <b>deep branch</b> goes to most of the hand's small muscles.</p>
<p>At the elbow it runs behind the medial epicondyle with little padding, so a knock there sends a shock down the arm: the "funny bone".</p>
<p><b>Claw hand</b> happens when the ulnar nerve is injured at the wrist. Lacking the medial lumbricals, the ring and little fingers can't bend at the knuckle but over-extend there, while the IPs flex, forming a claw. (Counter-intuitive: injury at the wrist gives a more obvious claw than one higher up, because FDP is spared and keeps pulling the fingers into flexion.)</p>
<p class="tip">Hook: "Ulnar claw, Median ape."</p>`,html:`<p>The ulnar n. passes through the <b>ulnar canal</b> (separate from the carpal tunnel) with the ulnar a., and divides into <b>superficial</b> (palmaris brevis, skin) and <b>deep</b> (most intrinsics) branches, plus digital branches. At the elbow it passes behind the medial epicondyle: the <span class="key">'funny bone'</span>.</p>
<p>Injury at the wrist → <span class="key">claw hand</span> (ulnar n. injury at wrist).</p>`},
  {t:'mcq',q:'Which hand deformity is associated with an ulnar nerve injury at the wrist?',opts:['Ape hand','Claw hand','Wrist drop','Hand of benediction only'],a:1,why:'Claw hand = ulnar n. injury at wrist; ape hand = median.'},
  {t:'mcq',q:'Which passes through the ulnar canal?',opts:['Median n.','Ulnar n. and ulnar a.','Radial a.','FDP tendons'],a:1,why:'The ulnar canal is separate from the carpal tunnel.'},
  {t:'learn',title:'Median nerve in the hand',slides:[19, 21],explain:`<p>The median nerve is called the <b>"million-dollar nerve"</b> because the hand's thumb function and sensation depend on it; losing it makes the hand much less useful.</p>
<p>It enters the hand through the carpal tunnel. Right after, it gives the <b>recurrent branch</b>, a small branch that loops back up to the thenar muscles. Other branches are <b>palmar</b> and <b>digital</b> (skin of the thumb, index, middle and half the ring finger). The motor side is small: the thenar muscles plus the lateral two lumbricals.</p>
<p>An injury at the wrist (e.g. a deep cut or severe carpal tunnel syndrome) paralyzes the thenar muscles. Without them, the thenar pad flattens, and the thumb lies in line with the palm like a monkey's thumb: <b>ape hand</b>. The patient can't oppose the thumb.</p>
<p class="tip">Hook: "Median ape, Ulnar claw."</p>
<p><b>Exam trap:</b> the muscles are median, but adduction of the thumb is spared (ulnar).</p>`,html:`<p>The median n. (C5–T1), the <b>'million-dollar nerve'</b>, travels through the <b>carpal tunnel</b>, gives the <b>recurrent branch</b> (thenar muscles), and <b>palmar and digital branches</b> (skin). Injury at the wrist → <span class="key">ape hand</span> (loss of thenar function). It supplies some intrinsic muscles on the lateral side: thenar muscles + lateral two lumbricals.</p>`},
  {t:'mcq',q:'After a deep laceration at the wrist, a patient cannot oppose the thumb and has a flattened thenar eminence. Which nerve is injured?',opts:['Ulnar n.','Median n.','Radial n.','Musculocutaneous n.'],a:1,why:'Median n. injury at the wrist causes ape hand (loss of the recurrent branch to thenar muscles).'},
  {t:'sort',title:'Nerve → hand sign/feature',buckets:['Median n.','Ulnar n.'],items:[['Ape hand',0],['Claw hand',1],['Million-dollar nerve',0],['Funny bone',1],['Recurrent branch',0],['Superficial & deep branches',1]]},
  {t:'learn',title:'Arteries & the snuff box',slides:[22, 23],explain:`<p>The hand's blood supply is built like two connected loops. The <b>ulnar artery</b> mostly forms the <b>superficial palmar arch</b> (lying just under the palm skin and fascia), and the <b>radial artery</b> mostly forms the <b>deep palmar arch</b> (lying nearer the bones). An "arch" is a connected loop, so if one artery is blocked the other can compensate. The arches send <b>digital arteries</b> to each finger and the <b>princeps pollicis</b> (thumb's "principal" artery) to the thumb.</p>
<p>The radial artery reaches the deep arch by passing through the <b>anatomical snuff box</b> on the back of the wrist, the hollow between the EPL tendon and the EPB/APL tendons when the thumb is extended. This is where you can feel a pulse and where the scaphoid is palpable. The scaphoid has a fragile blood supply, so fractures can lead to <b>avascular necrosis</b> (bone death from lack of blood).</p>
<p class="tip">Hook: Ulnar = Up top (superficial); Radial = Real deep.</p>
<p><b>Exam trap:</b> the ulnar nerve does not go through the snuff box.</p>`,html:`<p>Blood supply: <b>ulnar a.</b> terminates as the <b>superficial palmar arch</b>; <b>radial a.</b> terminates as the <b>deep palmar arch</b>. The arches give off <b>digital aa.</b> and the <b>principis pollicis a.</b> to the digits.</p>
<p><b>Anatomical snuff box:</b> tendons of EPL, EPB and APL; contains the <b>radial a.</b> (pulse) and <b>superficial branch of the radial n.</b> (cutaneous). The <b>scaphoid</b> is palpable here; a scaphoid fracture may lead to <b>avascular necrosis</b>.</p>`},
  {t:'match',title:'Arteries',pairs:[['Ulnar a.','Superficial palmar arch'],['Radial a.','Deep palmar arch'],['Palmar arches','Give digital aa. and principis pollicis a.'],['Snuff box','Radial pulse and scaphoid']]},
  {t:'mcq',q:'Which artery terminates as the deep palmar arch?',opts:['Ulnar','Radial','Brachial','Posterior interosseous'],a:1,why:'Radial a. → deep arch; ulnar a. → superficial arch.'},
  {t:'learn',title:'Nerve maps vs dermatomes',slides:[25, 26],explain:`<p>There are two ways to map the skin of the arm, and they are not the same.</p>
<ul><li>A <b>dermatome</b> is the strip of skin supplied by one <b>spinal nerve root</b> (one level of the spinal cord, like C6). Dermatomes follow how the embryo's body segments developed, so they run like stripes down the limb.</li>
<li>A <b>peripheral nerve map</b> shows the skin supplied by one named nerve (like the ulnar nerve). Because a peripheral nerve is formed by the plexus merging fibres from several levels (the median has C5-T1), its territory covers parts of several dermatomes.</li></ul>
<p>Think of dermatomes as the "wiring from the fuse box" and peripheral nerves as the "cables after the junction": the same skin is described from two different points in the system.</p>
<p>The <b>ASIA scale</b> is a standard exam for spinal cord injury; it tests dermatomes (skin sensation) and myotomes (the muscle group supplied by one level) to find the level of injury.</p>
<p class="tip">Hook: Dermatome = spine root; nerve map = named nerve.</p>
<p><b>Exam trap:</b> numbness in a nerve map pattern means a peripheral nerve injury, while a stripe pattern suggests a root problem.</p>`,html:`<p><b>Nerve maps are different from dermatomes.</b> A peripheral nerve carries fibers from multiple spinal levels, so it contributes to several dermatomes. Dermatomes are based on <b>embryological development of spinal segments</b>.</p>
<ul><li>Median n.: C5–T1</li><li>Radial n.: C5–T1</li><li>Ulnar n.: C8–T1</li><li>Axillary n.: C5–C6</li><li>Musculocutaneous n. (lateral antebrachial): C5–C6</li><li>Medial cutaneous nn. of arm and forearm: from medial cord</li></ul>
<p>The <b>ASIA scale</b> uses dermatomes and myotomes to diagnose spinal cord injury.</p>`},
  {t:'mcq',q:'Which statement is correct?',opts:['A peripheral nerve map always matches a dermatome','Dermatomes are based on embryological development of spinal segments','The ulnar n. has C5–C6 fibres','The ASIA scale uses nerve maps only'],a:1,why:'Nerve maps differ from dermatomes; the ASIA scale uses dermatomes + myotomes.'},
  {t:'mcq',q:'The ulnar nerve carries fibres from which spinal levels?',opts:['C5–C6','C5–T1','C8–T1','C6–C7'],a:2,why:'Ulnar n. = C8–T1; median and radial = C5–T1.'},
  {t:'sata',q:'Which are correct for the snuff box? (select all)',opts:['Radial pulse can be felt','Scaphoid is palpable','Bordered by EPL, EPB and APL tendons','Ulnar nerve passes here'],a:[0,1,2],why:'Ulnar structures are in the ulnar canal.'}
 ]},
 {id:'u6boss',title:'Hand Boss Quiz',mins:8,flower:'👑',boss:true,items:[
  {t:'mcq',q:'Which thenar muscle is supplied by the ulnar n.?',opts:['Opponens pollicis','Adductor pollicis','Abductor pollicis brevis','Flexor pollicis brevis'],a:1,why:'Adductor pollicis = deep branch of ulnar.'},
  {t:'mcq',q:'Dorsal interossei:',opts:['Adduct digits','Abduct digits','Flex IP joints','Extend the wrist'],a:1,why:'DAB: Dorsal ABduct.'},
  {t:'mcq',q:'Lumbricals:',opts:['Extend MCP, flex IP','Flex MCP, extend IP','Flex all joints','Abduct digits'],a:1,why:'They flex the MCPs and extend the IPs.'},
  {t:'mcq',q:'An ape hand results from an injury to the:',opts:['Ulnar n. at wrist','Median n. at wrist','Radial n.','Axillary n.'],a:1,why:'Median n. injury at wrist → ape hand.'},
  {t:'mcq',q:'The hand muscle innervated by the superficial branch of the ulnar nerve is:',opts:['Palmaris brevis','Opponens digiti minimi','Palmar interossei','Medial lumbricals'],a:0,why:'Palmaris brevis only.'},
  {t:'mcq',q:'Which joint allows opposition of the thumb?',opts:['MCP','IP','Carpometacarpal (saddle)','Radiocarpal'],a:2,why:'The saddle CMC joint.'},
  {t:'sata',q:'Which muscles are supplied by the median nerve in the hand? (select all)',opts:['Abductor pollicis brevis','Lateral two lumbricals','Medial two lumbricals','Flexor pollicis brevis','Palmar interossei'],a:[0,1,3],why:'Thenar (recurrent branch) and lateral lumbricals are median; the rest are ulnar.'},
  {t:'mcq',q:'A patient with claw hand has an injury to which nerve?',opts:['Ulnar','Median','Radial','Axillary'],a:0,why:'Ulnar n. injury at the wrist gives claw hand.'},
  {t:'mcq',q:'Which artery terminates as the superficial palmar arch?',opts:['Radial a.','Ulnar a.','Brachial a.','Principis pollicis a.'],a:1,why:'Ulnar a. → superficial arch.'},
  {t:'mcq',q:'Which joints are most commonly affected by rheumatoid arthritis?',opts:['DIP and CMC','MCP and PIP','Wrist only','IP of the thumb only'],a:1,why:'RA usually hits MCP and PIP; OA hits DIP and CMC.'}
 ]}
]});

EXAMQ.push({t:'mcq',unit:3,mod:'u6',q:'A patient cannot hold a sheet of paper between the extended fingers when someone tries to pull it away. Which muscles are weak?',opts:['Palmar interossei','Dorsal interossei','Lumbricals','Opponens pollicis','Abductor digiti minimi'],a:0,why:'Palmar interossei adduct the digits (PAD), supplied by the deep ulnar n.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u6',q:'Which of the following is NOT innervated by the deep branch of the ulnar nerve?',opts:['Adductor pollicis','Flexor digiti minimi','Dorsal interossei','Opponens pollicis','Medial two lumbricals'],a:3,why:'Opponens pollicis is a thenar muscle supplied by the recurrent branch of the median n.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u6',q:'A deep wrist laceration produces a flattened thenar eminence and inability to oppose the thumb. Which statement is most accurate?',opts:['The ulnar n. is injured; claw hand results','The median n. is injured; ape hand results','The radial n. is injured; wrist drop results','The deep ulnar branch is injured; adductor weakness only','The anterior interosseous n. is injured; pronation lost'],a:1,why:'Median n. injury at the wrist affects the recurrent branch to the thenar muscles: ape hand.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u6',q:'Which pair of joints is most often involved in osteoarthritis of the hand?',opts:['MCP and PIP','DIP and CMC','Radiocarpal and MCP','PIP and IP of the thumb only','Radioulnar and DIP'],a:1,why:'OA usually occurs in the DIP and CMC joints; RA in the MCP and PIP.'});
EXAMQ.push({t:'mcq',unit:3,mod:'u6',q:'Regarding the lumbrical muscles, which statement is correct?',opts:['They originate from the FDS tendons','They are all innervated by the median n.','They insert on the extensor expansions and extend the IP joints','They flex the IP joints','They insert on the carpals'],a:2,why:'Lumbricals arise from FDP tendons, insert on extensor expansions, flex MCPs and extend IPs; the lateral two are median, medial two ulnar.'});


MODULES.sort((a,b)=>a.num-b.num);
var COURSE={title:"Ayah’s Anatomy Quest",subtitle:"Anatomy Basics · Nervous System · Upper Limb — Units 1–3",
 units:{1:"Anatomy Basics",2:"Nervous System",3:"Upper Limb"},weeks:MODULES,
 exam:{id:"exam",title:"Mock Midterm",mins:120,flower:"🏆",
  blurb:EXAMQ.length+" multiple-choice questions in exam order (Unit 1 → Unit 3), weighted like the real exam. Answers revealed at the end. Aim for 70%+.",
  items:EXAMQ.slice().sort((a,b)=>a.unit-b.unit)}};
