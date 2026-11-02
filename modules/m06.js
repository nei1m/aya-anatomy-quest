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
