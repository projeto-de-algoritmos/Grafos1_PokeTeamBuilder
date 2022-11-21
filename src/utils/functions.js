function type(type_name,weakness) {
    this.type_name = type_name;
    this.weakness = weakness;
    
}
var typechart = [
    new type('normal',['fighting']),
    new type('fire',['water','ground','rock']),
    new type('water',['grass','eletric']),
    new type('grass',['fire','ice','poison','flying','bug']),
    new type('eletric',['ground']),
    new type('ice',['fire','fighting','rock','steel']),
    new type('fighting',['flying','psychic','fairy']),
    new type('poison',['ground','psychic']),
    new type('ground',['water','grass','ice']),
    new type('flying',['eletric','ice','rock']),
    new type('psychic',['bug','ghost','dark']),
    new type('bug',['fire','flying','rock']),
    new type('rock',['water','grass','fighting','ground','steel']),
    new type('ghost',['ghost','dark']),
    new type('dragon',['ice','fairy','dragon']),
    new type('dark',['fighting','bug','fairy']),
    new type('steel',['fire','fighting','ground']),
    new type('fairy',['poison','steel']),
];

/**-------------------------------------------------------------------------- */
function makeStruct(keys) {
    if (!keys) return null;
    const k = keys.split(', ');
    const count = k.length;
  
    /** @constructor */
    function constructor() {
      for (let i = 0; i < count; i++) this[k[i]] = arguments[i];
    }
    return constructor;
  }
    const user = new makeStruct("name, weakness");
    const grass = new user('grass', ['fire','ice','poison','flying','bug']);
    console.log();

    