
let b : number = 0;

enum eNormal {red, blue, green}

const enred = eNormal[eNormal.red];

enum eFruit {apple = "apple", orange = "orange"}

const enorange = eFruit.orange;

enum eStrange {a = 2, b, c=6, d=4, e, f="bla"};
const enstr = eStrange[eStrange.f];

b = eStrange.c; 
