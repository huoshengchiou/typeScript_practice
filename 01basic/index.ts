// type

let myName = "Maxwell";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

nothingLiterally = "123";

let x1: string | null;
x1 = "123";

let obj: object = { hello: "world" };
obj.hello = "ok";
obj.hello = null;
obj.newProp = null;
obj = { key: "123" };
obj = [1, 2, 3];
obj = () => console.log("ok");
obj = new Number(42);

let arrObj = [1, 2, 3];
arrObj.pop = () => 123;
arrObj.pop = () => console.log("ok");
arrObj.pop = () => "123";

const add = (num1, num2) => num1 + num2;
let add2 = (num1: number, num2: number) => num1 + num2;

add2 = (num1: string, num2: string) => num1 + num2;
add2 = (num1: string, num2: string) => console.log("123");

let nums = [1, 2, 3];
nums[0] = "1";
nums[0] = 2;
nums.push("3");
nums.push(3);
let arr2 = [2, 3, 4];
let arr3 = ["2", "3", "4"];
nums = [...arr2, ...nums];
nums = [...arr3, ...nums];
nums = ["1", "2", "3"];

nums.filter((val) => val !== 0);

let nums2 = [1, 2, 3, "4"];

let arr = [
  { A: 123, B: "123", C: null },
  { A: 123, B: "123", C: [] },
  { A: 123, B: "123", C: true },
];

type customType = [string, string, string, Date];
let arr4: customType = ["123", "123", "12", new Date()];
let arr5 = <customType>["123", "123", "12", new Date()];
let arr6 = ["123", "123", "12", new Date()] as customType;

type car = {
  brand: string;
  type: string;
  color: string;
  manufactureDate: Date;
};
let car1: car = { brand: "string", type: "string", color: "string", manufactureDate: new Date() };

let arr7: (string | Date)[] = ["123", "123", "12", new Date()];

enum week {
  sun,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
}

let day = week.sun;
let day2: week = week.sun;
let test = week[day];
console.log({ day, day2, test });

let addOpp: (n1: number, n2: number) => number;
let subOpp: (n1: number, n2: number) => number;

type mathOp = (n1: number, n2: number) => number;

const add3: (n1: number, n2: number) => number = (n1: number, n2: number): number => n1 + n2;
const add4: mathOp = (t1, t2) => t1 + t2;
const add5 = <mathOp>(n1: number, n2: number) => n1 + n2;

console.log(add4("1", 3));

type people = {
  name: string;
  age: number;
};

const printInfo = (info: people) => info;

let moreInfo = {
  name: "sheng",
  age: 20,
  skill: "sing",
};

printInfo({ name: "sheng", age: 20, skill: "sing" });

printInfo(moreInfo);

type AccountInfoA = {
  account: string;
  pwd: string;
};

type AccountInfoB = {
  birth?: Date;
  gender?: string;
  subscribed?: boolean;
};

type Account = AccountInfoA & AccountInfoB;

const AccountA: Account = {
  account: "k",
  pwd: "4546",
};

const play = (t1: string, t2?: string) => {
  if (t2) {
    return { t1, t2 };
  }
  return t1;
};
type arr = [string, string, Date?];

console.log(play("swim", "kill"));

const test5 = (): number | never => {
  throw new Error("ok");
};

const safeParseJson = (str: string): unknown => JSON.parse(str);

let acceppt: unknown = safeParseJson("123");
let b = safeParseJson("123") as string;

console.log((<string>acceppt).length);

let d: any & unknown;
