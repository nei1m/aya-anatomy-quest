import subprocess,json,glob
js="""var MODULES=[],EXAMQ=[];\n"""
for f in sorted(glob.glob('modules/m*.js')): js+=open(f).read()+"\n"
tail="""
MODULES.sort((a,b)=>a.num-b.num);
var COURSE={title:"Aya’s Anatomy Quest",subtitle:"Anatomy Basics · Nervous System · Upper Limb — Units 1–3",
 units:{1:"Anatomy Basics",2:"Nervous System",3:"Upper Limb"},weeks:MODULES,
 exam:{id:"exam",title:"Mock Midterm",mins:120,flower:"🏆",
  blurb:EXAMQ.length+" multiple-choice questions in exam order (Unit 1 → Unit 3), weighted like the real exam. Answers revealed at the end. Aim for 70%+.",
  items:EXAMQ.slice().sort((a,b)=>a.unit-b.unit)}};
"""
open('content.js','w').write("/* built by build.py — edit modules/*.js */\n"+js+tail)
