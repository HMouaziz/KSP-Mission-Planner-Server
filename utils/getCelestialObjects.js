function getCelestialObjects() {
  return [
    {
      "id": 0,
      "name": "Sun",
      "bodyType": "Star",
      "radius": 696342000,
      "mass": 1.9884098713264222e+30,
      "stdGravParam": 132712440041939390000,
      "soi": null,
      "orbiting": null,
      "color": "#FFFF00"
    },
    {
      "id": 1,
      "name": "Mercury",
      "bodyType": "Planet",
      "radius": 2439700,
      "mass": 3.300987369461969e+23,
      "stdGravParam": 22031780000000.02,
      "soi": 112408990.75442436,
      "orbit": {
        "semiMajorAxis": 57908973645.88802,
        "eccentricity": 0.2056187266319207,
        "inclination": 28.60252108855048,
        "argOfPeriapsis": 66.90371044151551,
        "ascNodeLongitude": 10.86541167564728
      },
      "meanAnomaly0": 5.553920558995985,
      "epoch": 0,
      "orbiting": 0,
      "color": "#515059"
    },
    {
      "id": 2,
      "name": "Venus",
      "bodyType": "Planet",
      "radius": 6049000,
      "atmosphereAlt": 145000.0,
      "mass": 4.867305814842008e+24,
      "stdGravParam": 324858592000000.06,
      "soi": 616280853.7469519,
      "orbit": {
        "semiMajorAxis": 108209548790.4671,
        "eccentricity": 0.006810339650842032,
        "inclination": 24.46397633556437,
        "argOfPeriapsis": 123.7121294282329,
        "ascNodeLongitude": 7.981603378781639
      },
      "meanAnomaly0": 5.432267392125204,
      "epoch": 0,
      "orbiting": 0,
      "color": "#B26128"
    },
    {
      "id": 3,
      "name": "Earth",
      "bodyType": "Planet",
      "radius": 6371000,
      "atmosphereAlt": 140000.0,
      "mass": 5.9721683987249e+24,
      "stdGravParam": 398600435436096,
      "soi": 924649202.4610229,
      "orbit": {
        "semiMajorAxis": 149598261150.4425,
        "eccentricity": 0.01609636160505683,
        "inclination": 23.44603795469773,
        "argOfPeriapsis": 102.9720683296131,
        "ascNodeLongitude": 359.9965004168758
      },
      "meanAnomaly0": 6.231885654519576,
      "epoch": 0,
      "orbiting": 0,
      "color": "#4662"
    },
    {
      "id": 4,
      "name": "Moon",
      "bodyType": "Moon",
      "parentBody": "Earth",
      "radius": 1737100,
      "mass": 7.345789170645306e+22,
      "stdGravParam": 4902800066163.796,
      "soi": 66167158.6569544,
      "orbit": {
        "semiMajorAxis": 384308437.7707066,
        "eccentricity": 0.05328149353682574,
        "inclination": 28.36267790798491,
        "argOfPeriapsis": 199.7640930160823,
        "ascNodeLongitude": 2.296616161126016
      },
      "meanAnomaly0": 3.8868698006324554,
      "epoch": 0,
      "orbiting": 3,
      "color": "#FFFFFF"
    },
    {
      "id": 5,
      "name": "Mars",
      "bodyType": "Planet",
      "radius": 3375800,
      "atmosphereAlt": 125000.0,
      "mass": 6.416908682663215e+23,
      "stdGravParam": 42828373620699.09,
      "soi": 577254070.8724953,
      "orbit": {
        "semiMajorAxis": 227949699961.9763,
        "eccentricity": 0.09326110278323557,
        "inclination": 24.69272426910055,
        "argOfPeriapsis": 332.1022655295414,
        "ascNodeLongitude": 3.351911063089117
      },
      "meanAnomaly0": 2.9564361325350452,
      "epoch": 0,
      "orbiting": 0,
      "color": "#A06230"
    },
    {
      "id": 6,
      "name": "Phobos",
      "bodyType": "Moon",
      "parentBody": "Mars",
      "radius": 7250,
      "mass": 10619160161956240,
      "stdGravParam": 708754.6066894452,
      "soi": 7238.336130105763,
      "orbit": {
        "semiMajorAxis": 9378492.209088314,
        "eccentricity": 0.01539938155583979,
        "inclination": 36.32433410471867,
        "argOfPeriapsis": 357.7759243021914,
        "ascNodeLongitude": 46.48212553464923
      },
      "meanAnomaly0": 0.12540401573484683,
      "epoch": 0,
      "orbiting": 5,
      "color": "#8E7362"
    },
    {
      "id": 7,
      "name": "Deimos",
      "bodyType": "Moon",
      "parentBody": "Mars",
      "radius": 5456,
      "mass": 1440685861906164.5,
      "stdGravParam": 96155.69648120314,
      "soi": 8143.11240891536,
      "orbit": {
        "semiMajorAxis": 23458112.01759387,
        "eccentricity": 0.00032946807986617,
        "inclination": 38.2773701383231,
        "argOfPeriapsis": 263.8963868784089,
        "ascNodeLongitude": 47.51893570799763
      },
      "meanAnomaly0": 5.646210530657005,
      "epoch": 0,
      "orbiting": 5,
      "color": "#755E4F"
    },
    {
      "id": 8,
      "name": "Vesta",
      "bodyType": "Asteroid",
      "radius": 262700,
      "mass": 259027088523141020000,
      "stdGravParam": 17288244969.3,
      "soi": 39276806.01910567,
      "orbit": {
        "semiMajorAxis": 353346223803.158,
        "eccentricity": 0.0902068412255369,
        "inclination": 22.7696439720361,
        "argOfPeriapsis": 236.445369158826,
        "ascNodeLongitude": 18.1671232653234
      },
      "meanAnomaly0": 1.0657102610896119,
      "epoch": 0,
      "orbiting": 0,
      "color": "#FFFFFF"
    },
    {
      "id": 9,
      "name": "Ceres",
      "bodyType": "Dwarf",
      "radius": 473000,
      "mass": 938413017095425900000,
      "stdGravParam": 62632500000,
      "soi": 76962905.73054667,
      "orbit": {
        "semiMajorAxis": 413738762313.173,
        "eccentricity": 0.079363494880566,
        "inclination": 27.1273394923134,
        "argOfPeriapsis": 129.19102663711,
        "ascNodeLongitude": 23.4501727740666
      },
      "meanAnomaly0": 1.0500332058738224,
      "epoch": 0,
      "orbiting": 0,
      "color": "#7F7F7F"
    },
    {
      "id": 10,
      "name": "Jupiter",
      "bodyType": "Planet",
      "radius": 69373000,
      "atmosphereAlt": 1550000.0,
      "mass": 1.8981246710786271e+27,
      "stdGravParam": 126686534921800800,
      "soi": 48196176124.28713,
      "orbit": {
        "semiMajorAxis": 778188938659.7554,
        "eccentricity": 0.04872660654702194,
        "inclination": 23.25313306947884,
        "argOfPeriapsis": 10.75642751202877,
        "ascNodeLongitude": 3.262077289923354
      },
      "meanAnomaly0": 5.281038885954535,
      "epoch": 0,
      "orbiting": 0,
      "color": "#BE9666"
    },
    {
      "id": 11,
      "name": "Io",
      "bodyType": "Moon",
      "parentBody": "Jupiter",
      "radius": 1811300,
      "mass": 8.929649601322094e+22,
      "stdGravParam": 5959916033410.404,
      "soi": 7840344.603668602,
      "orbit": {
        "semiMajorAxis": 422018294.5236953,
        "eccentricity": 0.003545858426216978,
        "inclination": 25.46409538664874,
        "argOfPeriapsis": 231.2703460977786,
        "ascNodeLongitude": 358.046643167846
      },
      "meanAnomaly0": 3.4091064061869685,
      "epoch": 0,
      "orbiting": 10,
      "color": "#A4A05C"
    },
    {
      "id": 12,
      "name": "Europa",
      "bodyType": "Moon",
      "parentBody": "Jupiter",
      "radius": 1550800,
      "mass": 4.798613749641e+22,
      "stdGravParam": 3202738774922.892,
      "soi": 9727541.139687302,
      "orbit": {
        "semiMajorAxis": 671253637.5417169,
        "eccentricity": 0.009511727119926178,
        "inclination": 25.70364276471991,
        "argOfPeriapsis": 53.13210737539627,
        "ascNodeLongitude": 358.9360081847504
      },
      "meanAnomaly0": 4.821737415499958,
      "epoch": 0,
      "orbiting": 10,
      "color": "#C5C6AC"
    },
    {
      "id": 13,
      "name": "Ganymede",
      "bodyType": "Moon",
      "parentBody": "Jupiter",
      "radius": 2624100,
      "mass": 1.4814788746886034e+23,
      "stdGravParam": 9887834453334.145,
      "soi": 24359376.755679477,
      "orbit": {
        "semiMajorAxis": 1070823468.894524,
        "eccentricity": 0.001190086418361844,
        "inclination": 25.27071366962049,
        "argOfPeriapsis": 139.2992571342065,
        "ascNodeLongitude": 358.0125219248113
      },
      "meanAnomaly0": 4.060950472376478,
      "epoch": 0,
      "orbiting": 10,
      "color": "#947F64"
    },
    {
      "id": 14,
      "name": "Callisto",
      "bodyType": "Moon",
      "parentBody": "Jupiter",
      "radius": 2409300,
      "mass": 1.0756617714812444e+23,
      "stdGravParam": 7179289361397.27,
      "soi": 37703185.401052766,
      "orbit": {
        "semiMajorAxis": 1883812366.573522,
        "eccentricity": 0.007973319796896609,
        "inclination": 25.44080019822134,
        "argOfPeriapsis": 320.7359683492656,
        "ascNodeLongitude": 358.5022563372704
      },
      "meanAnomaly0": 0.27604372240404196,
      "epoch": 0,
      "orbiting": 10,
      "color": "#675642"
    },
    {
      "id": 15,
      "name": "Saturn",
      "bodyType": "Planet",
      "radius": 57216000,
      "atmosphereAlt": 2000000.0,
      "mass": 5.6831738906929933e+26,
      "stdGravParam": 37931207498652240,
      "soi": 54475312962.69387,
      "orbit": {
        "semiMajorAxis": 1424838758613.269,
        "eccentricity": 0.05347166506749872,
        "inclination": 22.56992281132335,
        "argOfPeriapsis": 85.04661202834268,
        "ascNodeLongitude": 5.970845343832233
      },
      "meanAnomaly0": 1.1775536145636776,
      "epoch": 0,
      "orbiting": 0,
      "color": "#E9D7B4"
    },
    {
      "id": 16,
      "name": "Mimas",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 198200,
      "mass": 37509911151731270000,
      "stdGravParam": 2503524000,
      "soi": 249664.42402284587,
      "orbit": {
        "semiMajorAxis": 186009285.922049,
        "eccentricity": 0.01776275223147744,
        "inclination": 1.572,
        "argOfPeriapsis": 222.2172789396715,
        "ascNodeLongitude": 139.7604722490289
      },
      "meanAnomaly0": 2.1919760798055545,
      "epoch": 0,
      "orbiting": 15,
      "color": "#FFFFFF"
    },
    {
      "id": 17,
      "name": "Enceladus",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 252100,
      "mass": 108048097415848870000,
      "stdGravParam": 7211454165.826,
      "soi": 488586.74254165136,
      "orbit": {
        "semiMajorAxis": 238413699.4838728,
        "eccentricity": 0.006227897999957464,
        "inclination": 0.009,
        "argOfPeriapsis": 115.5615886062458,
        "ascNodeLongitude": 128.4244161601446
      },
      "meanAnomaly0": 6.049837363294359,
      "epoch": 0,
      "orbiting": 15,
      "color": "#FFFFFF"
    },
    {
      "id": 18,
      "name": "Tethys",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 531100,
      "mass": 617459176638898600000,
      "stdGravParam": 41211077826.41,
      "soi": 1213919.4442904096,
      "orbit": {
        "semiMajorAxis": 294973462.3804425,
        "eccentricity": 0.001064868868083566,
        "inclination": 1.091,
        "argOfPeriapsis": 215.9196892523803,
        "ascNodeLongitude": 119.2518388332899
      },
      "meanAnomaly0": 6.105565273654561,
      "epoch": 0,
      "orbiting": 15,
      "color": "#FFFFFF"
    },
    {
      "id": 19,
      "name": "Dione",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 561400,
      "mass": 1.0954911599316785e+21,
      "stdGravParam": 73116366487.32,
      "soi": 1954777.8593541621,
      "orbit": {
        "semiMajorAxis": 377650651.501709,
        "eccentricity": 0.001679230905502774,
        "inclination": 0.028,
        "argOfPeriapsis": 123.671715604926,
        "ascNodeLongitude": 128.5606071129818
      },
      "meanAnomaly0": 2.9308839134421727,
      "epoch": 0,
      "orbiting": 15,
      "color": "#FFFFFF"
    },
    {
      "id": 20,
      "name": "Rhea",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 763800,
      "mass": 2.306496027351183e+21,
      "stdGravParam": 153942464353.5,
      "soi": 3675619.316702547,
      "orbit": {
        "semiMajorAxis": 527212645.707199,
        "eccentricity": 0.001168269515756326,
        "inclination": 0.331,
        "argOfPeriapsis": 172.7367089889645,
        "ascNodeLongitude": 130.3670574820431
      },
      "meanAnomaly0": 0.23542531935505198,
      "epoch": 0,
      "orbiting": 15,
      "color": "#FFFFFF"
    },
    {
      "id": 21,
      "name": "Titan",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 2573300,
      "atmosphereAlt": 600000.0,
      "mass": 1.3451395352321593e+23,
      "stdGravParam": 8977864800000,
      "soi": 43324121.40105091,
      "orbit": {
        "semiMajorAxis": 1221966238.511425,
        "eccentricity": 0.02891936561555365,
        "inclination": 6.460492679775526,
        "argOfPeriapsis": 182.0886765021483,
        "ascNodeLongitude": 126.4945233702913
      },
      "meanAnomaly0": 1.311809948776336,
      "epoch": 0,
      "orbiting": 15,
      "color": "#B27F3F"
    },
    {
      "id": 22,
      "name": "Iapetus",
      "bodyType": "Moon",
      "parentBody": "Saturn",
      "radius": 734500,
      "mass": 1.8056139026309878e+21,
      "stdGravParam": 120512088703.3,
      "soi": 22505227.67654332,
      "orbit": {
        "semiMajorAxis": 3560162593.02297,
        "eccentricity": 0.0288028628196961,
        "inclination": 7.489,
        "argOfPeriapsis": 314.3819081366686,
        "ascNodeLongitude": 50.29392880240187
      },
      "meanAnomaly0": 2.4359269334587883,
      "epoch": 0,
      "orbiting": 15,
      "color": "#FFFFFF"
    },
    {
      "id": 23,
      "name": "Uranus",
      "bodyType": "Planet",
      "radius": 24702000,
      "atmosphereAlt": 1400000.0,
      "mass": 8.680987253013813e+25,
      "stdGravParam": 5793951322279009,
      "soi": 51692514225.02219,
      "orbit": {
        "semiMajorAxis": 2866832853163.975,
        "eccentricity": 0.04620653158718433,
        "inclination": 23.67256993343676,
        "argOfPeriapsis": 169.6876790522249,
        "ascNodeLongitude": 1.846089669223938
      },
      "meanAnomaly0": 5.006070925851672,
      "epoch": 0,
      "orbiting": 0,
      "color": "#6093C6"
    },
    {
      "id": 24,
      "name": "Miranda",
      "bodyType": "Moon",
      "parentBody": "Uranus",
      "radius": 235700,
      "mass": 64718650633506140000,
      "stdGravParam": 4319516899.2321,
      "soi": 459755.1188786744,
      "orbit": {
        "semiMajorAxis": 129880047.634175,
        "eccentricity": 0.00118741261963413,
        "inclination": 78.5887546839913,
        "argOfPeriapsis": 326.7575256535064,
        "ascNodeLongitude": 169.064212054828
      },
      "meanAnomaly0": 4.4156939860723,
      "epoch": 0,
      "orbiting": 23,
      "color": "#FFFFFF"
    },
    {
      "id": 25,
      "name": "Ariel",
      "bodyType": "Moon",
      "parentBody": "Uranus",
      "radius": 578900,
      "mass": 1.2505198195721615e+21,
      "stdGravParam": 83463444317.70477,
      "soi": 2209608.9963886514,
      "orbit": {
        "semiMajorAxis": 190944364.477622,
        "eccentricity": 0.00190951361476287,
        "inclination": 74.8989043025419,
        "argOfPeriapsis": 169.996640499191,
        "ascNodeLongitude": 166.5671084714081
      },
      "meanAnomaly0": 0.810944190678705,
      "epoch": 0,
      "orbiting": 23,
      "color": "#FFFFFF"
    },
    {
      "id": 26,
      "name": "Umbriel",
      "bodyType": "Moon",
      "parentBody": "Uranus",
      "radius": 584700,
      "mass": 1.274940906835082e+21,
      "stdGravParam": 85093380944.89388,
      "soi": 3101969.6038675,
      "orbit": {
        "semiMajorAxis": 265992360.127656,
        "eccentricity": 0.0038334454580725,
        "inclination": 74.9939984108702,
        "argOfPeriapsis": 207.7259222157362,
        "ascNodeLongitude": 166.5601075193709
      },
      "meanAnomaly0": 1.995350222525624,
      "epoch": 0,
      "orbiting": 23,
      "color": "#FFFFFF"
    },
    {
      "id": 27,
      "name": "Titania",
      "bodyType": "Moon",
      "parentBody": "Uranus",
      "radius": 788900,
      "mass": 3.4002622053867046e+21,
      "stdGravParam": 226943700374.1248,
      "soi": 7532779.334918171,
      "orbit": {
        "semiMajorAxis": 436292682.967703,
        "eccentricity": 0.002486916,
        "inclination": 75.045766393,
        "argOfPeriapsis": 165.7455424030838,
        "ascNodeLongitude": 166.6555214910122
      },
      "meanAnomaly0": 3.711534845860309,
      "epoch": 0,
      "orbiting": 23,
      "color": "#FFFFFF"
    },
    {
      "id": 28,
      "name": "Oberon",
      "bodyType": "Moon",
      "parentBody": "Uranus",
      "radius": 761400,
      "mass": 3.0763290570331317e+21,
      "stdGravParam": 205323430253.5623,
      "soi": 9677834.494020225,
      "orbit": {
        "semiMajorAxis": 583435328.340603,
        "eccentricity": 0.00110558297330948,
        "inclination": 74.9349049752716,
        "argOfPeriapsis": 274.4599570542317,
        "ascNodeLongitude": 166.6887328903476
      },
      "meanAnomaly0": 4.651563202426656,
      "epoch": 0,
      "orbiting": 23,
      "color": "#FFFFFF"
    },
    {
      "id": 29,
      "name": "Neptune",
      "bodyType": "Planet",
      "radius": 24085000,
      "atmosphereAlt": 1250000.0,
      "mass": 1.0240923396370664e+26,
      "stdGravParam": 6835099502439672,
      "soi": 86636358530.1769,
      "orbit": {
        "semiMajorAxis": 4497455832811.736,
        "eccentricity": 0.008090397688364061,
        "inclination": 22.30735942964904,
        "argOfPeriapsis": 29.81485402991322,
        "ascNodeLongitude": 3.512610711801178
      },
      "meanAnomaly0": 2.829170831890268,
      "epoch": 0,
      "orbiting": 0,
      "color": "#305490"
    },
    {
      "id": 30,
      "name": "Triton",
      "bodyType": "Moon",
      "parentBody": "Neptune",
      "radius": 1353400,
      "atmosphereAlt": 110000.0,
      "mass": 2.138948115495309e+22,
      "stdGravParam": 1427598140725.034,
      "soi": 11964318.522340473,
      "orbit": {
        "semiMajorAxis": 354767243.5406647,
        "eccentricity": 0.0001688014359763687,
        "inclination": 156.834,
        "argOfPeriapsis": 220.4523286895169,
        "ascNodeLongitude": 197.1953239788069
      },
      "meanAnomaly0": 6.25973135910971,
      "epoch": 0,
      "orbiting": 29,
      "color": "#FFFFFF"
    },
    {
      "id": 31,
      "name": "Pluto",
      "bodyType": "Dwarf",
      "radius": 1187000,
      "atmosphereAlt": 110000.0,
      "mass": 1.3029288730816338e+22,
      "stdGravParam": 869613817760.8748,
      "soi": 3114585521.171567,
      "orbit": {
        "semiMajorAxis": 5845670624078.223,
        "eccentricity": 0.2462772488425983,
        "inclination": 23.61236405752844,
        "argOfPeriapsis": 184.4945352163909,
        "ascNodeLongitude": 44.36099836994975
      },
      "meanAnomaly0": 5.238251980021541,
      "epoch": 0,
      "orbiting": 0,
      "color": "#AC9078"
    },
    {
      "id": 32,
      "name": "Charon",
      "bodyType": "Moon",
      "parentBody": "Pluto",
      "radius": 603500,
      "mass": 1.586383423882476e+21,
      "stdGravParam": 105879988860.1881,
      "soi": 8440471.516897446,
      "orbit": {
        "semiMajorAxis": 19596193.83540397,
        "eccentricity": 5.082225659448947e-05,
        "inclination": 0.001,
        "argOfPeriapsis": 188.4738646852448,
        "ascNodeLongitude": 222.405373557001
      },
      "meanAnomaly0": 0.5393048609025978,
      "epoch": 0,
      "orbiting": 31,
      "color": "#C5B1A4"
    }
  ]
}

module.exports = getCelestialObjects
