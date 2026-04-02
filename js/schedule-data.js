// ============================================
//  AL NOUR SCHOOL — SCHEDULE DATA
//  Mirrors content/schedule/index.json
//  Embedded directly so it works on file://
//  ─────────────────────────────────────────
//  Slots per day:
//    p1 = 08:30–09:30  |  p5 = 14:30–15:30
//    p2 = 09:30–10:30  |  p6 = 15:30–16:30
//    p3 = 10:30–11:30  |  p7 = 16:30–17:30
//    p4 = 11:30–12:30  |  p8 = 17:30–18:30
//    (lunch break 12:30–14:30)
//
//  Values per slot:
//    { subj: "arabic", teacher: "ذ. العلوي" }
//    null    → free period
//    "prayer"→ Friday afternoon prayer (p5 only)
//
//  Subject codes:
//    arabic · french · math · science · islamic
//    pe · physics · art · english · history
// ============================================

window.scheduleData = {
  levels: {
    // ─── S1 ─────────────────────────────────
    s1: {
      nameKey: 'schedule.level.s1',
      classes: 4,
      data: {
        c1: {
          monday:    { p1:{subj:'arabic',  teacher:'ذ. العلوي'},   p2:{subj:'math',    teacher:'ذ. بنعلي'},    p3:{subj:'science', teacher:'ذ. الحسني'},   p4:{subj:'french',  teacher:'ذ. الأمراني'},  p5:{subj:'pe',      teacher:'ذ. الزياني'},  p6:{subj:'art',     teacher:'ذ. المنصوري'}, p7:{subj:'math',    teacher:'ذ. بنعلي'},   p8:{subj:'arabic',  teacher:'ذ. العلوي'}   },
          tuesday:   { p1:{subj:'french',  teacher:'ذ. الأمراني'}, p2:{subj:'islamic', teacher:'ذ. الودغيري'}, p3:{subj:'arabic',  teacher:'ذ. العلوي'},   p4:{subj:'math',    teacher:'ذ. بنعلي'},    p5:{subj:'science', teacher:'ذ. الحسني'},   p6:{subj:'french',  teacher:'ذ. الأمراني'}, p7:{subj:'physics', teacher:'ذ. الطاهري'},  p8:{subj:'islamic', teacher:'ذ. الودغيري'} },
          wednesday: { p1:{subj:'math',    teacher:'ذ. بنعلي'},    p2:{subj:'pe',      teacher:'ذ. الزياني'},   p3:{subj:'arabic',  teacher:'ذ. العلوي'},   p4:{subj:'science', teacher:'ذ. الحسني'},   p5:null,             p6:null,              p7:null,             p8:null              },
          thursday:  { p1:{subj:'physics', teacher:'ذ. الطاهري'},  p2:{subj:'french',  teacher:'ذ. الأمراني'}, p3:{subj:'math',    teacher:'ذ. بنعلي'},    p4:{subj:'arabic',  teacher:'ذ. العلوي'},   p5:{subj:'art',     teacher:'ذ. المنصوري'}, p6:{subj:'science', teacher:'ذ. الحسني'},   p7:{subj:'french',  teacher:'ذ. الأمراني'}, p8:{subj:'math',    teacher:'ذ. بنعلي'}    },
          friday:    { p1:{subj:'arabic',  teacher:'ذ. العلوي'},   p2:{subj:'islamic', teacher:'ذ. الودغيري'}, p3:{subj:'french',  teacher:'ذ. الأمراني'}, p4:{subj:'math',    teacher:'ذ. بنعلي'},    p5:'prayer',        p6:null,              p7:null,             p8:null              },
          saturday:  { p1:{subj:'science', teacher:'ذ. الحسني'},   p2:{subj:'art',     teacher:'ذ. المنصوري'}, p3:{subj:'math',    teacher:'ذ. بنعلي'},    p4:{subj:'french',  teacher:'ذ. الأمراني'}, p5:null,             p6:null,              p7:null,             p8:null              },
        },
        c2: {
          monday:    { p1:{subj:'french',  teacher:'ذ. بنمسعود'},  p2:{subj:'arabic',  teacher:'ذ. الحراق'},   p3:{subj:'math',    teacher:'ذ. العمراني'}, p4:{subj:'science', teacher:'ذ. موحيل'},    p5:{subj:'pe',      teacher:'ذ. الزياني'},  p6:{subj:'arabic',  teacher:'ذ. الحراق'},   p7:{subj:'art',     teacher:'ذ. المنصوري'}, p8:{subj:'math',    teacher:'ذ. العمراني'} },
          tuesday:   { p1:{subj:'math',    teacher:'ذ. العمراني'}, p2:{subj:'physics', teacher:'ذ. السوسي'},   p3:{subj:'french',  teacher:'ذ. بنمسعود'},  p4:{subj:'arabic',  teacher:'ذ. الحراق'},   p5:{subj:'islamic', teacher:'ذ. الودغيري'}, p6:{subj:'math',    teacher:'ذ. العمراني'}, p7:{subj:'science', teacher:'ذ. موحيل'},    p8:{subj:'french',  teacher:'ذ. بنمسعود'}  },
          wednesday: { p1:{subj:'arabic',  teacher:'ذ. الحراق'},   p2:{subj:'math',    teacher:'ذ. العمراني'}, p3:{subj:'pe',      teacher:'ذ. الزياني'},   p4:{subj:'french',  teacher:'ذ. بنمسعود'},  p5:null,             p6:null,              p7:null,             p8:null              },
          thursday:  { p1:{subj:'french',  teacher:'ذ. بنمسعود'},  p2:{subj:'science', teacher:'ذ. موحيل'},    p3:{subj:'arabic',  teacher:'ذ. الحراق'},   p4:{subj:'math',    teacher:'ذ. العمراني'}, p5:{subj:'art',     teacher:'ذ. المنصوري'}, p6:{subj:'arabic',  teacher:'ذ. الحراق'},   p7:{subj:'math',    teacher:'ذ. العمراني'}, p8:{subj:'physics', teacher:'ذ. السوسي'}   },
          friday:    { p1:{subj:'math',    teacher:'ذ. العمراني'}, p2:{subj:'french',  teacher:'ذ. بنمسعود'},  p3:{subj:'arabic',  teacher:'ذ. الحراق'},   p4:{subj:'islamic', teacher:'ذ. الودغيري'}, p5:'prayer',        p6:null,              p7:null,             p8:null              },
          saturday:  { p1:{subj:'pe',      teacher:'ذ. الزياني'},  p2:{subj:'arabic',  teacher:'ذ. الحراق'},   p3:{subj:'science', teacher:'ذ. موحيل'},    p4:{subj:'math',    teacher:'ذ. العمراني'}, p5:null,             p6:null,              p7:null,             p8:null              },
        },
        c3: null,
        c4: null,
      },
    },

    // ─── S2 ─────────────────────────────────
    s2: {
      nameKey: 'schedule.level.s2',
      classes: 4,
      data: {
        c1: {
          monday:    { p1:{subj:'arabic',  teacher:'ذ. البكاري'},  p2:{subj:'math',    teacher:'ذ. الفاسي'},   p3:{subj:'physics', teacher:'ذ. العيادي'},  p4:{subj:'french',  teacher:'ذ. ميمون'},    p5:{subj:'english', teacher:'ذ. الغازي'},   p6:{subj:'math',    teacher:'ذ. الفاسي'},   p7:{subj:'arabic',  teacher:'ذ. البكاري'},  p8:{subj:'history', teacher:'ذ. الهلالي'}  },
          tuesday:   { p1:{subj:'history', teacher:'ذ. الهلالي'},  p2:{subj:'arabic',  teacher:'ذ. البكاري'},  p3:{subj:'math',    teacher:'ذ. الفاسي'},   p4:{subj:'science', teacher:'ذ. التازي'},   p5:{subj:'pe',      teacher:'ذ. الزياني'},  p6:{subj:'french',  teacher:'ذ. ميمون'},    p7:{subj:'physics', teacher:'ذ. العيادي'},  p8:{subj:'math',    teacher:'ذ. الفاسي'}   },
          wednesday: { p1:{subj:'french',  teacher:'ذ. ميمون'},    p2:{subj:'physics', teacher:'ذ. العيادي'},  p3:{subj:'arabic',  teacher:'ذ. البكاري'},  p4:{subj:'math',    teacher:'ذ. الفاسي'},   p5:null,             p6:null,              p7:null,             p8:null              },
          thursday:  { p1:{subj:'science', teacher:'ذ. التازي'},   p2:{subj:'french',  teacher:'ذ. ميمون'},    p3:{subj:'history', teacher:'ذ. الهلالي'},  p4:{subj:'arabic',  teacher:'ذ. البكاري'},  p5:{subj:'math',    teacher:'ذ. الفاسي'},   p6:{subj:'english', teacher:'ذ. الغازي'},   p7:{subj:'science', teacher:'ذ. التازي'},   p8:{subj:'arabic',  teacher:'ذ. البكاري'}  },
          friday:    { p1:{subj:'math',    teacher:'ذ. الفاسي'},   p2:{subj:'arabic',  teacher:'ذ. البكاري'},  p3:{subj:'physics', teacher:'ذ. العيادي'},  p4:{subj:'islamic', teacher:'ذ. الودغيري'}, p5:'prayer',        p6:null,              p7:null,             p8:null              },
          saturday:  { p1:{subj:'english', teacher:'ذ. الغازي'},   p2:{subj:'science', teacher:'ذ. التازي'},   p3:{subj:'art',     teacher:'ذ. المنصوري'}, p4:{subj:'french',  teacher:'ذ. ميمون'},    p5:null,             p6:null,              p7:null,             p8:null              },
        },
        c2: null, c3: null, c4: null,
      },
    },

    // ─── S3 ─────────────────────────────────
    s3: {
      nameKey: 'schedule.level.s3',
      classes: 3,
      data: {
        c1: {
          monday:    { p1:{subj:'arabic',  teacher:'ذ. الدريسي'},  p2:{subj:'math',    teacher:'ذ. قاسمي'},    p3:{subj:'physics', teacher:'ذ. الوردي'},   p4:{subj:'french',  teacher:'ذ. بنزيد'},    p5:{subj:'english', teacher:'ذ. الغازي'},   p6:{subj:'math',    teacher:'ذ. قاسمي'},    p7:{subj:'science', teacher:'ذ. التازي'},   p8:{subj:'arabic',  teacher:'ذ. الدريسي'}  },
          tuesday:   { p1:{subj:'french',  teacher:'ذ. بنزيد'},    p2:{subj:'arabic',  teacher:'ذ. الدريسي'},  p3:{subj:'history', teacher:'ذ. الهلالي'},  p4:{subj:'math',    teacher:'ذ. قاسمي'},    p5:{subj:'science', teacher:'ذ. التازي'},   p6:{subj:'french',  teacher:'ذ. بنزيد'},    p7:{subj:'physics', teacher:'ذ. الوردي'},   p8:{subj:'history', teacher:'ذ. الهلالي'}  },
          wednesday: { p1:{subj:'math',    teacher:'ذ. قاسمي'},    p2:{subj:'islamic', teacher:'ذ. الودغيري'}, p3:{subj:'arabic',  teacher:'ذ. الدريسي'},  p4:{subj:'pe',      teacher:'ذ. الزياني'},   p5:null,             p6:null,              p7:null,             p8:null              },
          thursday:  { p1:{subj:'physics', teacher:'ذ. الوردي'},   p2:{subj:'math',    teacher:'ذ. قاسمي'},    p3:{subj:'french',  teacher:'ذ. بنزيد'},    p4:{subj:'arabic',  teacher:'ذ. الدريسي'},  p5:{subj:'history', teacher:'ذ. الهلالي'},  p6:{subj:'math',    teacher:'ذ. قاسمي'},    p7:{subj:'english', teacher:'ذ. الغازي'},   p8:{subj:'french',  teacher:'ذ. بنزيد'}    },
          friday:    { p1:{subj:'arabic',  teacher:'ذ. الدريسي'},  p2:{subj:'english', teacher:'ذ. الغازي'},   p3:{subj:'math',    teacher:'ذ. قاسمي'},    p4:{subj:'islamic', teacher:'ذ. الودغيري'}, p5:'prayer',        p6:null,              p7:null,             p8:null              },
          saturday:  { p1:{subj:'science', teacher:'ذ. التازي'},   p2:{subj:'art',     teacher:'ذ. المنصوري'}, p3:{subj:'physics', teacher:'ذ. الوردي'},   p4:{subj:'french',  teacher:'ذ. بنزيد'},    p5:null,             p6:null,              p7:null,             p8:null              },
        },
        c2: null, c3: null,
      },
    },

    tc:    { nameKey: 'schedule.level.tc',    classes: 3, data: { c1:null, c2:null, c3:null } },
    s1bac: { nameKey: 'schedule.level.s1bac', classes: 2, data: { c1:null, c2:null } },
    s2bac: { nameKey: 'schedule.level.s2bac', classes: 2, data: { c1:null, c2:null } },
  },
};
