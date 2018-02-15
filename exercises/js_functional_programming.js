let _ = require('lodash');

// SKIP TO 'exercise1', here all data is defined which will be used by the exercises

const impacts = require('./datasets/meteor-impacts');
const courses = [
  {
    "id": 1098,
    "name": "webapps",
    "teacher": "pieter",
    "hours": 3
  },
  {
    "id": 3872,
    "name": "android",
    "teacher": "jens",
    "hours": 2
  },
  {
    "id": 7291,
    "name": "ios",
    "teacher": "steven",
    "hours": 2
  },
  {
    "id": 0981,
    "name": "windows",
    "teacher": "joeri",
    "hours": 3
  }
];
//-------------------------------------------------------------------
//  START HERE
//-------------------------------------------------------------------
function exercise1() {
  // return the names of all the teachers  using forEach
  // (uncomment and complete the line below, in later exercises it 
  // won't simply be one liners, so you'll have to add code too)
  let courseNames = [];

  //courses.forEach(
  return courseNames;
}

function exercise2() {
  // Use forEach to create and add objects with only the {id, name} of all the courses to this array
  let idNameArray = [];
  
  // courses.forEach(
  return idNameArray;
}

function exercise3() {
  // this is the kind of problem where we'd use the map function, 
  // rewrite exercise2 using map

  // return courses.map(
}

function exercise4() {
  // use forEach to only map the courses which take 3 hours each week
  // return an array with those courses
}

function exercise5() {
  // once again, we have a built in version: 'filter', rewrite exercise4 using filter
 
  // return courses.filter(
}

function exercise6() {
  // real power comes from combining all these operators, use filter and map to only get the names of the teachers
  // from courses that take 3 hours
}

function exercise7() {
  // both map and filter work on one item at a time, sometimes you need to perform an operation
  // that needs to know about more, or all, items in the list
  // use forEach to return the course with the largest id
}

function exercise8() {
  // once again, there is a built in way to do this: reduce, rewrite exercise7 using the reduce function

//  return courses.reduce((acc, current) => {
  
}

function exercise9() {
  // let's use the acc(umulator) as an accumulator, return the sum of all hours the courses take combined
  // (you'll want to use parseInt())
  
}

//-------------------------------------------------------------------
// from now on, primarly use map / filter / reduce to solve the exercises
// while everything can be solved using elaborate forEach's too, 
// that's not really the point of these exercises
//
// (it's possible you have to write helper functions btw,
// or rather, you'll be able to reuse parts of one solution in
// other exercies

function exercise10() {
  // return the name of the teacher of the course with the smallest id

  // return courses.reduce(
}

///////////////////////////////////////////////////////////
//
// STARTING THIS EXERC?ISE, USE impacts DATA NOT COURSES
//
///////////////////////////////////////////////////////////
function exercise11() {
  
  // return the amount of meteor impacts that have a geolocation
  
//  return impacts.filter(
}

function exercise12() {
  // return an array with the names of all the impacts that have no geolocation
//  return impacts.filter(
}


// currying is a functional programming technique, simply put rather than creating a function with multiple
// arguments, you create a function with one argument, that returns a function that takes an argument, and so on
//
// so you wouldn't call it like fn(a, b, c), but rather fn(a)(b)(c)
// 
// this allows the partial application of a function's arguments. Simply put you can either pass all arguments
// a function is expecting and get the result, or pass a subset of those arguments and get a function back that's
// waiting for the rest of the arguments
//
// use this technique in the following exercise(s)

function _exercise13(impactSize) {
  // return an array with the names of all the impacts that have a greater mass than 'impactSize' (passed as parameter)
}

function _exercise14(age) {
  // return an array with the names of all the impacts that happened after a certain year
}

function exercise15() {
  // return an object of the type { year: #impacts } for example {1951: 2, 2012: 3, ...} of all impacts that happened after 1945
}

//-------------------------------------------------------------------
//  DO NOT TOUCH ANYTHING BELOW THIS LINE - 
//  this checks the correct output of your functions
//-------------------------------------------------------------------
function checkFunctionReturn(functionToCheck, expectedOutput) {
  const value = functionToCheck();
  let correct = _.isEqual(value, expectedOutput);
  if (!correct) {
    console.log("ERROR in " + functionToCheck.name + ", output: '" + JSON.stringify(value) + "' expected '" + JSON.stringify(expectedOutput) + "'");
    return false;
  } else {
    console.log(functionToCheck.name + " OK!");
    return true;
  }
}

cont = checkFunctionReturn(exercise1, ["pieter","jens","steven","joeri"]);
cont = cont && checkFunctionReturn(exercise2, [{"id":1098,"name":"webapps"},{"id":3872,"name":"android"},{"id":7291,"name":"ios"},{"id":981,"name":"windows"}])
cont = cont && checkFunctionReturn(exercise3, [{"id":1098,"name":"webapps"},{"id":3872,"name":"android"},{"id":7291,"name":"ios"},{"id":981,"name":"windows"}])
cont = cont && checkFunctionReturn(exercise4, [{"id":1098,"name":"webapps","teacher":"pieter","hours":3},{"id":981,"name":"windows","teacher":"joeri","hours":3}])
cont = cont && checkFunctionReturn(exercise5, [{"id":1098,"name":"webapps","teacher":"pieter","hours":3},{"id":981,"name":"windows","teacher":"joeri","hours":3}])
cont = cont && checkFunctionReturn(exercise6, ["pieter","joeri"])
cont = cont && checkFunctionReturn(exercise7, {"id":7291,"name":"ios","teacher":"steven","hours":2})
cont = cont && checkFunctionReturn(exercise8, {"id":7291,"name":"ios","teacher":"steven","hours":2})
cont = cont && checkFunctionReturn(exercise9, 10);
cont = cont && checkFunctionReturn(exercise10, "joeri");
cont = cont && checkFunctionReturn(exercise11, 988);
cont = cont && checkFunctionReturn(exercise12, ["Bulls Run","Clohars","Jalanash","Jemlapur","Cumulus Hills 04075","Maria Linden","Natal","Niger (L6)","Niger (LL6)","Dominion Range 03239","Dominion Range 03240","Talampaya"]);
let exercise13 = () => _exercise13(200000);
cont = cont && checkFunctionReturn(exercise13, ["Alfianello","Allende","Bjurböle","Boguslavka","Bruderheim","Estherville","Holbrook","Homestead","Jianshi","Jilin","Knyahinya","Kunya-Urgench","Millbillillie","Mocs","New Concord","Norton County","Ochansk","Omolon","Paragould","Pultusk","Putinga","Saint-Séverin","Sikhote-Alin","Sterlitamak","Suizhou"]);
let exercise14 = () => _exercise14(1920);
cont = cont && checkFunctionReturn(exercise14, ["Aarhus","Abee","Acapulco","Adzhi-Bogdo (stone)","Aguada","Aioun el Atrouss","Aïr","Akaba","Akwanga","Akyumak","Al Rais","Al Zarnkh","Alberta","Alby sur Chéran","Allende","Almahata Sitta","Alta'ameem","Andreevka","Andura","Ankober","Anlong","Aomori","Arbol Solo","Archie","Arroyo Aguiar","Ash Creek","Ashdon","Athens","Atoka","Avanhandava","Awere","Aztec","Bahjoi","Bald Mountain","Baldwyn","Ban Rong Du","Banten","Barwell","Bassikounou","Baszkówka","Battle Mountain","Bawku","Beardsley","Beddgelert","Bells","Belville","Benguerir","Beni M'hira","Benld","Benoni","Bensour","Benton","Berduc","Béréba","Berthoud","Beyrout","Bhawad","Bhola","Bilanga","Binningup","Birni N'konni","Black Moshannan Park","Bloomington","Bo Xian","Bogou","Boriskino","Boumdeid (2003)","Boumdeid (2011)","Bovedy","Breitscheid","Brient","Bruderheim","Bukhara","Bulls Run","Bunburra Rockhole","Bununu","Burnwell","Bursa","Buzzard Coulee","Cali","Campos Sales","Çanakkale","Canon City","Capilla del Monte","Carancas","Ceniceros","Centerville","Chadong","Chajari","Changde","Chaves","Chela","Chelyabinsk","Chergach ","Chernyi Bor","Cherokee Springs","Chervony Kut","Chiang Khan","Chicora","Chisenga","Chitado","Chitenay","Cilimus","Claxton","Coleman","Conquista","Crescent","Dahmani","Dashoguz","Daule","Denver","Dergaon","Desuri","Devgaon","Devri-Khera","Dhajala","Didim","Distrito Quebracho","Djermaia","Djoumine","Dong Ujimqin Qi","Dongtai","Dosso","Douar Mghila","Dowa","Dresden (Ontario)","Dubrovnik","Dunbogan","Dunhua","Duwun","Dwaleni","Dyarrl Island","Eagle","Ehole","Ekeby","El Idrissia","El Paso de Aguila","El Tigre","Elbert","Elenovka","Ellemeet","Enshi","Erakot","Essebi","Farmville","Fayetteville","Fenghsien-Ku","Fermo","Florence","Forest Vale","Forksville","Fort Flatters","Fuhe","Fuyang","Galim (a)","Galim (b)","Galkiv","Gao-Guenie","Garland","Gashua","Gasseltepaoua","Geidam","Git-Git","Glanerbrug","Glanggang","Glatton","Gorlovka","Granes","Grefsheim","Grimsby","Gualeguaychú","Guangmingshan","Guangnan","Guangrao","Guibga","Guidder","Gujargaon","Gujba","Gursum","Gyokukei","Hainaut","Hallingeberg","Hamlet","Haripura","Harleton","Haverö","Hedeskoga","Hiroshima","Hoima","Hökmark","Holetta","Hotse","Hoxie","Huaxi","Ibitira","Ibrisim","Ichkala","Idutywa","Iguaracu","Ijopega","Inner Mongolia","Innisfree","Ipiranga","Ishinga","Isthilart","Itqiy","Ivuna","Jajh deh Kot Lalu","Jalanash","Jartai","Jesenice","Jiange","Jilin","Jodiya","Johnstown","Jolomba","Juancheng","Jumapalo","Junan","Juromenha","Kabo","Kaidun","Kainsaz","Kalaba","Kamalpur","Kandahar (Afghanistan)","Kapoeta","Kaprada","Kaptal-Aryk","Karatu","Karewar","Karloowala","Karoonda","Kasamatsu","Kasauli","Katagum","Kavarpura","Kayakent","Kediri","Kemer","Kendleton","Kendrapara","Khanpur","Khmelevka","Khor Temiki","Kidairat","Kiel","Kiffa","Kilabo","Kingai","Kitchener","Kobe","Kokubunji","Komagome","Konovo","Košice","Krasnyi Klyuch","Krymka","Kukschin","Kulak","Kunashak","Kunya-Urgench","Kutais","Kuznetzovo","La Colina","La Criolla","Lahrauli","Cumulus Hills 04075","Långhalsen","Lanxi","Lanzenkirchen","Laochenzhen","Lavrentievka","Leedey","Leighlinbridge","Lichtenberg","Lillaverke","Lishui","Lohawat","Lorton","Lost City","Louisville","Łowicz","Lua","Lunan","Lusaka","Mabwe-Khoywa","Machinga","Macibini","Madhipura","Madiun","Mafra","Magombedze","Mahadevpur","Maigatari-Danduma","Malaga","Malakal","Malampaka","Malotas","Malvern","Mamra Springs","Mangwendi","Manych","Mardan","Maria Linden","Maribo","Maridi","Marilia","Maromandia","Maryville","Mason Gully","Mayo Belwa","Maziba","Mbale","Medanitos","Meru","Messina","Mezel","Mianchi","Mifflin","Mihonoseki","Mike","Millbillillie","Miller (Arkansas)","Min-Fan-Zhun","Molteno","Monahans (1998)","Monte das Fortes","Montferré","Monze","Moorleah","Morávka","Moss","Mount Tazerzait","Mtola","Muraid","Murchison","Murray","Muzaffarpur","Nadiabondi","Nagai","Nakhon Pathom","Nantong","Naoki","Naragh","Narellan","Nassirah","Natal","Neagari","Nejo","Neuschwanstein","New Halfa","New Orleans","Niger (L6)","Niger (LL6)","Nikolaevka","Nikolskoe","Ningbo","Ningqiang","Noblesville","Norton County","Noventa Vicentina","Noyan-Bogdo","Nuevo Mercurio","Numakai","Nyaung","Oesede","Ohuma","Ojuelos Altos","Okabe","Oldenburg (1930)","Olivenza","Olmedilla de Alarcón","Omolon","Orlando","Oterøy","Ouadangou","Oued el Hadjar","Oum Dreyga","Ourique","Padvarninkai","Palca de Aparzo","Palmyra","Palolo Valley","Dominion Range 03239","Pantar","Paragould","Parambu","Paranaiba","Park Forest","Parsa","Pasamonte","Patora","Patrimonio","Patti","Patwar","Pavel","Pavlodar (stone)","Pê","Peace River","Peckelsheim","Peekskill","Peña Blanca Spring","Perpeti","Pervomaisky","Pesyanoe","Pétèlkolé","Phum Sambo","Phuoc-Binh","Piancaldoli","Piplia Kalan","Pitts","Plantersville","Pleşcoi","Dominion Range 03240","Pollen","Pontlyfni","Portales Valley","Po-wang Chen","Prambachkirchen","Pribram","Puerto Lápice","Putinga","Qidong","Qingzhen","Queen's Mercy","Quija","Raco","Raghunathpura","Rahimyar Khan","Ramnagar","Ramsdorf","Rangala","Ras Tanura","Red Canyon Lake","Reliegos","Renca","Repeev Khutor","Revelstoke","Rewari","Uzcudun","Richland Springs","Rio Negro","Rose City","Ruhobobo","Rumuruti","Rupota","Sabrum","Saint-Séverin","Salem","Salzwedel","Samelia","San Juan Capistrano","San Michele","San Pedro de Quiles","San Pedro Jacuaro","Santa Cruz","Santa Isabel","Santa Lucia (2008)","São Jose do Rio Preto","Sayama","Sazovice","Schenectady","Selakopi","Seldebourak","Semarkona","Senboku","Seoni","Serra de Magé","Sfax","Sharps","Sheyang","Shikarpur","Shuangyang","Sikhote-Alin","Silao","Sinnai","Sioux County","Sivas","Sixiangkou","Soheria","Sołtmany","Songyuan","Sopot","Soroti","St. Louis","St.-Chinian","Ste. Marguerite","Sterlitamak","Stratford","St-Robert","Success","Suchy Dul","Suizhou","Sulagiri","Sungach","Sutter's Mill","Sylacauga","Tagish Lake","Tahara","Talampaya","Tambakwatu","Tamdakht","Taonan","Tatahouine","Tathlith","Tauk","Tauti","Thal","Thika","Thuathe","Tianzhang","Tilden","Tillaberi","Tirupati","Tissint","Tjerebon"]);
cont = cont && checkFunctionReturn(exercise15, {"1946":4,"1947":6,"1948":3,"1949":12,"1950":10,"1951":6,"1952":5,"1953":3,"1954":5,"1955":3,"1956":8,"1957":5,"1958":2,"1959":5,"1960":4,"1961":7,"1962":6,"1963":5,"1964":6,"1965":4,"1966":4,"1967":6,"1968":5,"1969":6,"1970":7,"1971":6,"1972":2,"1973":4,"1974":7,"1975":3,"1976":10,"1977":9,"1978":3,"1979":2,"1980":5,"1981":7,"1982":2,"1983":5,"1984":7,"1985":2,"1986":7,"1987":1,"1988":4,"1989":6,"1990":7,"1991":5,"1992":3,"1993":4,"1994":6,"1995":6,"1996":3,"1997":1,"1998":8,"1999":7,"2000":3,"2001":5,"2002":10,"2003":10,"2004":5,"2006":4,"2007":8,"2008":9,"2009":4,"2010":5,"2011":4,"2012":2,"2013":1});
