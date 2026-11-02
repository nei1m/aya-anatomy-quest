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
