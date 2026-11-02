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
