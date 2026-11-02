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
