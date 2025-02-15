/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramaticadesc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,38],$V1=[1,15],$V2=[1,16],$V3=[1,40],$V4=[1,42],$V5=[1,43],$V6=[1,44],$V7=[1,45],$V8=[1,46],$V9=[1,47],$Va=[1,48],$Vb=[1,49],$Vc=[1,55],$Vd=[1,61],$Ve=[1,62],$Vf=[1,63],$Vg=[1,64],$Vh=[1,34],$Vi=[1,35],$Vj=[1,36],$Vk=[1,37],$Vl=[1,38],$Vm=[1,39],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,50],$Vr=[1,51],$Vs=[1,33],$Vt=[5,89],$Vu=[1,68],$Vv=[5,11,89],$Vw=[1,71],$Vx=[5,11,15,89],$Vy=[5,11,15,18,19,20,21,22,23,89],$Vz=[1,81],$VA=[1,82],$VB=[5,11,15,18,19,20,21,22,23,28,29,89],$VC=[1,85],$VD=[1,86],$VE=[1,87],$VF=[5,11,15,18,19,20,21,22,23,28,29,33,34,35,89],$VG=[1,90],$VH=[5,11,15,18,19,20,21,22,23,28,29,33,34,35,39,89],$VI=[1,96],$VJ=[1,95],$VK=[5,11,15,18,19,20,21,22,23,28,29,33,34,35,39,43,45,89],$VL=[1,98],$VM=[5,11,15,18,19,20,21,22,23,28,29,33,34,35,39,43,45,88,89],$VN=[5,11,15,28,29,33,34,35,43,45,57,58,60,61,62,63,64,65,66,67,73,76,77,78,81,82,83,84,85,86,89,95,96,97,98,99,100],$VO=[67,73,76,77,78];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"XPATH":3,"EXPR":4,"EOF":5,"EXPRESIONSIMPLE":6,"OREXPRESION":7,"ANDEXPRESION":8,"OREXPRESIONL1":9,"OREXPRESIONL2":10,"or_":11,"COMPARACIONEXPRESION":12,"ANDEXPRESIONL1":13,"ANDEXPRESIONL2":14,"and_":15,"STRINGCONCATENA":16,"COMPARACIONGENERAL":17,"igual":18,"diferente":19,"menorq":20,"menorigual":21,"mayorq":22,"mayorigual":23,"SUMAEXPRESION":24,"MULTIPLICACIONEXPRESION":25,"SUMAEXPRESIONL1":26,"SUMAEXPRESIONL2":27,"mas":28,"menos":29,"UNIONEXPRESION":30,"MULTIPLICACIONEXPRESIONL1":31,"MULTIPLICACIONEXPRESIONL2":32,"mul":33,"div_":34,"mod_":35,"INTERSECCINEXPRESION":36,"UNIONEXPRESIONL1":37,"UNIONEXPRESIONL2":38,"simpleor":39,"INSTACIAEXPRESION":40,"EXPRESIONUNARIA":41,"PATHEXPRESION":42,"ddiagonal":43,"RUTARELATIVA":44,"sdiagonal":45,"PASOEXPRESION":46,"RUTARELATIVAL1":47,"RUTARELATIVAL2":48,"POSTEXPRESION":49,"AXISEXPRESION":50,"REVERSOPASO":51,"PREDICADO":52,"DELANTEPASO":53,"ABREVIATURADESPUESPASO":54,"DELANTEAXIS":55,"NODOPRUEBA":56,"arroba":57,"child":58,"ddospuntos":59,"descendant":60,"attribute":61,"self":62,"descendant_or_self":63,"following":64,"following_sibling":65,"namespace":66,"NOMBRETEST":67,"PRIMERTEST":68,"METODONODO":69,"METODOTEXTO":70,"METODOLAST":71,"METODOPOSITION":72,"node":73,"lparen":74,"rparen":75,"text":76,"last":77,"position":78,"REVERSOAXIS":79,"ABREVIATURAREVERSEPASO":80,"parent":81,"ancestor_or_self":82,"ancestor":83,"preceding_sibling":84,"preceding":85,"dpunto":86,"EXPRESIONPRIMARIA":87,"lcorchete":88,"rcorchete":89,"LITERAL":90,"ITEMEXPRESION":91,"EXPRESIONSTRING":92,"EXPRESIONNUMERICA":93,"EXPRESIONARROBA":94,"identifier":95,"DecimalLiteral":96,"IntegerLiteral":97,"StringLiteral":98,"CharLiteral":99,"spunto":100,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"or_",15:"and_",18:"igual",19:"diferente",20:"menorq",21:"menorigual",22:"mayorq",23:"mayorigual",28:"mas",29:"menos",33:"mul",34:"div_",35:"mod_",39:"simpleor",43:"ddiagonal",45:"sdiagonal",57:"arroba",58:"child",59:"ddospuntos",60:"descendant",61:"attribute",62:"self",63:"descendant_or_self",64:"following",65:"following_sibling",66:"namespace",67:"NOMBRETEST",73:"node",74:"lparen",75:"rparen",76:"text",77:"last",78:"position",81:"parent",82:"ancestor_or_self",83:"ancestor",84:"preceding_sibling",85:"preceding",86:"dpunto",88:"lcorchete",89:"rcorchete",95:"identifier",96:"DecimalLiteral",97:"IntegerLiteral",98:"StringLiteral",99:"CharLiteral",100:"spunto"},
productions_: [0,[3,2],[4,1],[6,1],[7,2],[7,1],[9,2],[9,1],[10,2],[8,2],[8,1],[13,2],[13,1],[14,2],[12,3],[12,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[16,1],[24,2],[24,1],[26,2],[26,1],[27,2],[27,2],[25,2],[25,1],[31,2],[31,1],[32,2],[32,2],[32,2],[30,2],[30,1],[30,0],[37,2],[37,1],[38,2],[36,1],[40,1],[41,1],[42,2],[42,2],[42,1],[42,1],[42,1],[44,2],[44,1],[47,2],[47,1],[48,2],[48,2],[46,1],[46,1],[50,2],[50,2],[50,1],[50,1],[53,1],[53,2],[54,2],[54,1],[55,2],[55,2],[55,2],[55,2],[55,2],[55,2],[55,2],[55,2],[56,1],[56,1],[68,1],[68,1],[68,1],[68,1],[69,3],[70,3],[71,3],[72,3],[51,2],[51,1],[79,2],[79,2],[79,2],[79,2],[79,2],[80,1],[49,2],[49,1],[52,3],[87,1],[87,1],[90,1],[90,1],[90,1],[94,2],[94,2],[93,1],[93,1],[92,1],[92,1],[92,1],[91,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

                        this.$= new Nodito("INICIO","Xpath");
		       //this.$.addHijos($$[$0-1]);
                     return { ErrorLexico:arreglolexico,msj:"Analisis XPath Ascendenete Finalizado.\n.",diagramaAST:this.$};
       
        
break;
case 2:
    
                          
                        
break;
case 105:
    
                               // this.$ = new Nodo($$[$0],"EXPRESIONSTRING:charliteral");
                             
break;
case 106:
    
                               // this.$ = new Nodo($$[$0],"EXPRESIONSTRING:identificador");
                            
break;
}
},
table: [o([5,11,15,18,19,20,21,22,23,28,29,33,34,35],$V0,{3:1,4:2,6:3,7:4,8:5,12:6,16:7,24:8,25:9,30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),{1:[3]},{5:[1,65]},o($Vt,[2,2]),o($Vt,[2,3]),o($Vt,[2,5],{9:66,10:67,11:$Vu}),o($Vv,[2,10],{13:69,14:70,15:$Vw}),o($Vx,[2,15],{17:72,18:[1,73],19:[1,74],20:[1,75],21:[1,76],22:[1,77],23:[1,78]}),o($Vy,[2,22]),o($Vy,[2,24],{26:79,27:80,28:$Vz,29:$VA}),o($VB,[2,30],{31:83,32:84,33:$VC,34:$VD,35:$VE}),o($VF,[2,37],{37:88,38:89,39:$VG}),o($VH,[2,42]),o($VH,[2,43]),o($VH,[2,44]),o($VH,[2,47],{46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,44:91,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VH,[2,48],{46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,44:92,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VH,[2,49]),o($VH,[2,51],{47:93,48:94,43:$VI,45:$VJ}),o($VK,[2,56]),o($VK,[2,57]),o($VK,[2,93],{52:97,88:$VL}),o($VK,[2,60],{52:99,88:$VL}),o($VK,[2,61],{52:100,88:$VL}),o($VM,[2,95]),o($VM,[2,96]),{56:101,67:$Vc,68:56,69:57,70:58,71:59,72:60,73:$Vd,76:$Ve,77:$Vf,78:$Vg},o($VM,[2,85]),o($VM,[2,62]),{56:102,67:$Vc,68:56,69:57,70:58,71:59,72:60,73:$Vd,76:$Ve,77:$Vf,78:$Vg},o($VM,[2,97]),o($VM,[2,98]),o($VM,[2,99]),o($VM,[2,107]),{59:[1,103]},{59:[1,104]},{59:[1,105]},{59:[1,106]},{59:[1,107]},o($VM,[2,91]),{33:[1,110],56:108,67:$Vc,68:56,69:57,70:58,71:59,72:60,73:$Vd,76:$Ve,77:$Vf,78:$Vg,95:[1,109]},o($VM,[2,65]),{59:[1,111]},{59:[1,112]},{59:[1,113]},{59:[1,114]},{59:[1,115]},{59:[1,116]},{59:[1,117]},{59:[1,118]},o($VM,[2,104]),o($VM,[2,105]),o($VM,[2,106]),o($VM,[2,102]),o($VM,[2,103]),o($VM,[2,74]),o($VM,[2,75]),o($VM,[2,76]),o($VM,[2,77]),o($VM,[2,78]),o($VM,[2,79]),{74:[1,119]},{74:[1,120]},{74:[1,121]},{74:[1,122]},{1:[2,1]},o($Vt,[2,4],{10:123,11:$Vu}),o($Vv,[2,7]),o($VF,$V0,{12:6,16:7,24:8,25:9,30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,8:124,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($Vv,[2,9],{14:125,15:$Vw}),o($Vx,[2,12]),o($VF,$V0,{16:7,24:8,25:9,30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,12:126,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o([5,11,15,28,29,33,34,35,89],$V0,{24:8,25:9,30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,16:127,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VN,[2,16]),o($VN,[2,17]),o($VN,[2,18]),o($VN,[2,19]),o($VN,[2,20]),o($VN,[2,21]),o($Vy,[2,23],{27:128,28:$Vz,29:$VA}),o($VB,[2,26]),o($VF,$V0,{30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,25:129,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VF,$V0,{30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,25:130,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VB,[2,29],{32:131,33:$VC,34:$VD,35:$VE}),o($VF,[2,32]),o($VF,$V0,{36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,30:132,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VF,$V0,{36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,30:133,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VF,$V0,{36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,30:134,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VF,[2,36],{38:135,39:$VG}),o($VH,[2,40]),{36:136,40:12,41:13,42:14,43:$V1,44:17,45:$V2,46:18,49:19,50:20,51:22,53:23,54:28,55:29,56:41,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,68:56,69:57,70:58,71:59,72:60,73:$Vd,76:$Ve,77:$Vf,78:$Vg,79:26,80:27,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,87:21,90:24,91:25,92:30,93:31,94:32,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs},o($VH,[2,45]),o($VH,[2,46]),o($VH,[2,50],{48:137,43:$VI,45:$VJ}),o($VK,[2,53]),{46:138,49:19,50:20,51:22,53:23,54:28,55:29,56:41,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,68:56,69:57,70:58,71:59,72:60,73:$Vd,76:$Ve,77:$Vf,78:$Vg,79:26,80:27,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,87:21,90:24,91:25,92:30,93:31,94:32,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs},{46:139,49:19,50:20,51:22,53:23,54:28,55:29,56:41,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,68:56,69:57,70:58,71:59,72:60,73:$Vd,76:$Ve,77:$Vf,78:$Vg,79:26,80:27,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,87:21,90:24,91:25,92:30,93:31,94:32,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs},o($VK,[2,92]),o([11,15,18,19,20,21,22,23,28,29,33,34,35,89],$V0,{6:3,7:4,8:5,12:6,16:7,24:8,25:9,30:10,36:11,40:12,41:13,42:14,44:17,46:18,49:19,50:20,87:21,51:22,53:23,90:24,91:25,79:26,80:27,54:28,55:29,92:30,93:31,94:32,56:41,68:56,69:57,70:58,71:59,72:60,4:140,43:$V1,45:$V2,57:$V3,58:$V4,60:$V5,61:$V6,62:$V7,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,73:$Vd,76:$Ve,77:$Vf,78:$Vg,81:$Vh,82:$Vi,83:$Vj,84:$Vk,85:$Vl,86:$Vm,95:$Vn,96:$Vo,97:$Vp,98:$Vq,99:$Vr,100:$Vs}),o($VK,[2,58]),o($VK,[2,59]),o($VM,[2,84]),o($VM,[2,63]),o($VO,[2,86]),o($VO,[2,87]),o($VO,[2,88]),o($VO,[2,89]),o($VO,[2,90]),o($VM,[2,64]),o($VM,[2,100]),o($VM,[2,101]),o($VO,[2,66]),o($VO,[2,67]),o($VO,[2,68]),o($VO,[2,69]),o($VO,[2,70]),o($VO,[2,71]),o($VO,[2,72]),o($VO,[2,73]),{75:[1,141]},{75:[1,142]},{75:[1,143]},{75:[1,144]},o($Vv,[2,6]),o($Vv,[2,8]),o($Vx,[2,11]),o($Vx,[2,13]),o($Vx,[2,14]),o($VB,[2,25]),o($VB,[2,27]),o($VB,[2,28]),o($VF,[2,31]),o($VF,[2,33]),o($VF,[2,34]),o($VF,[2,35]),o($VH,[2,39]),o($VH,[2,41]),o($VK,[2,52]),o($VK,[2,54]),o($VK,[2,55]),{89:[1,145]},o($VM,[2,80]),o($VM,[2,81]),o($VM,[2,82]),o($VM,[2,83]),o($VK,[2,94])],
defaultActions: {65:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


    const Nodito= require('./Nodito').default;
    var arreglolexico = "Codigo:";

 
       
        
    
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 83;
break;
case 1:return 82;
break;
case 2:return 61;
break;
case 3:return 58;
break;
case 4:return 60;
break;
case 5:return 63;
break;
case 6:return 64;
break;
case 7:return 65;
break;
case 8:return 'namespace_node';
break;
case 9:return 81;
break;
case 10:return 85;
break;
case 11:return 84;
break;
case 12:return 62;
break;
case 13:return 'null';
break;
case 14:return 'true';
break;
case 15:return 'false';
break;
case 16:return 73;
break;
case 17:return 76;
break;
case 18:return 77;
break;
case 19:return 78;
break;
case 20:return 34;
break;
case 21:return 11;
break;
case 22:return 15;
break;
case 23:return 35;
break;
case 24:return 39;
break;
case 25:return 28;
break;
case 26:return 29;
break;
case 27:return 33;
break;
case 28:return 18;
break;
case 29:return 19;
break;
case 30:return 20;
break;
case 31:return 21;
break;
case 32:return 22;
break;
case 33:return 23;
break;
case 34:return 74;
break;
case 35:return 75;
break;
case 36:return 88;
break;
case 37:return 89;
break;
case 38:return 43; //Probar Esto
break;
case 39:return 45;
break;
case 40:return 86;
break;
case 41:return 100;
break;
case 42:return 57;
break;
case 43:return 59;
break;
case 44:/*skip comment */
break;
case 45:/* skip whitespace */
break;
case 46:return 96;
break;
case 47:return 97;
break;
case 48:return 95;
break;
case 49:return 98;
break;
case 50:return 99;
break;
case 51:
                                        console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                    
break;
case 52:return 5;
break;
}
},
rules: [/^(?:ancestor\b)/,/^(?:ancestor-or-self\b)/,/^(?:attribute\b)/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:descendant-or-self\b)/,/^(?:following\b)/,/^(?:following-sibling\b)/,/^(?:namespace-node\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:preceding-sibling\b)/,/^(?:self\b)/,/^(?:null\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:node\b)/,/^(?:text\b)/,/^(?:last\b)/,/^(?:position\b)/,/^(?:div\b)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:mod\b)/,/^(?:\|)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:=)/,/^(?:!=)/,/^(?:<)/,/^(?:<=)/,/^(?:>)/,/^(?:>=)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\/\/)/,/^(?:\/)/,/^(?:\.\.)/,/^(?:\.)/,/^(?:@)/,/^(?:::)/,/^(?:(\(:((\\([\'\"\\bfnrtv]))|([^\:)\\]+)):\)))/,/^(?:\s+)/,/^(?:((([0-9]+)\.[0-9]*)|(\.([0-9]+))))/,/^(?:([0-9]+))/,/^(?:[a-zA-Z_][a-zA-Z0-9_ñÑ]*)/,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]+))*"))/,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]+))*'))/,/^(?:.)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramaticadesc;
exports.Parser = gramaticadesc.Parser;
exports.parse = function () { return gramaticadesc.parse.apply(gramaticadesc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}