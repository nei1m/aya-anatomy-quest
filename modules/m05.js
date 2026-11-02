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
