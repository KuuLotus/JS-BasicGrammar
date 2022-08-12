// 関数
function test() {
  // ES6
  let b = "局所変数";
  // ES6
  const c = "定数";

  // 定数は途中代入不可
  //c = '代入エラー'

  // let変数とvar変数はスコープが違う
  for (var i = 0; i < 1; ++i) {
    // なんか処理
  }
  for (let j = 0; j < 1; ++j) {
    // なんか処理
  }
  console.log(i); // varはforのブロックの範囲外でも参照できてしまう（Non Good）
  //console.log(j) // letはforのブロックの範囲外は参照不可
}
// 関数呼び出し
test();

const def = { test: "default" };
const obj = {};

// ３項演算子
console.log(def.test === "default" ? "defaultです" : "defaultじゃない");
// && 演算子(undefined, nullチェック)
obj.test && console.log("obj.testはundefinedなので実行されない");
// || 演算子(初期値代入)
const hoge = null;
obj.test = hoge || def.test;
console.log(obj.test); // hogeがnullなのでdef.testが代入（hogeがundefinedだとエラー）

// ES6だと変数をバッククォートで文字列に展開できる
const param = { obj: "param" };
const data = `${param.obj}を展開`;
console.log(data);

////// ====== 関数 ====== //////

// ES5
var testES5 = function (param) {
  console.log(param);
};
testES5("ES5");

// ES6はアロー関数でも記述できる
const testES6 = (param) => {
  console.log(param);
};
testES6("ES6");

// ES6では関数にデフォルト引数を持たせられる
const init = { obj: "obj" };
const testES6Def = (arg = init) => {
  console.log(arg);
};
testES6Def();

// オブジェクト引数を展開済みで渡す
const testES6Obj = ({ a, b }) => {
  console.log(a, b);
};
testES6Obj({ a: "a", b: "b" });

////// ====== クラス ====== //////

// ES5のクラス（prototype）
function classES5() {
  this.name = "ES5";
}

classES5.prototype.method = function () {
  console.log(this.name);
};

var clsES5 = new classES5();
clsES5.method();

// ES6のクラス
class classES6 {
  constructor() {
    this.name = "ES6";
  }
  method() {
    console.log(this.name);
  }
}

let clsES6 = new classES6();
clsES6.method();

// extendsで継承（親クラスのmethod、変数が使えます）
class childClass extends classES6 {
  // 親クラスと同名のメソッドを定義（override）
  method() {
    // 同名の親クラスのメソッドはsuper経由で呼ぶ
    super.method();
    console.log("ES6 child");
  }
}
clsES6 = new childClass();
clsES6.method();
