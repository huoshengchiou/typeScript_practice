"use strict";
// type
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myName = "Maxwell";
var age = 20;
var hasPet = false;
var nothing = undefined;
var nothingLiterally = null;
nothingLiterally = "123";
var x1;
x1 = "123";
var obj = { hello: "world" };
obj.hello = "ok";
obj.hello = null;
obj.newProp = null;
obj = { key: "123" };
obj = [1, 2, 3];
obj = function () { return console.log("ok"); };
obj = new Number(42);
var arrObj = [1, 2, 3];
arrObj.pop = function () { return 123; };
arrObj.pop = function () { return console.log("ok"); };
arrObj.pop = function () { return "123"; };
var add = function (num1, num2) { return num1 + num2; };
var add2 = function (num1, num2) { return num1 + num2; };
add2 = function (num1, num2) { return num1 + num2; };
add2 = function (num1, num2) { return console.log("123"); };
var nums = [1, 2, 3];
nums[0] = "1";
nums[0] = 2;
nums.push("3");
nums.push(3);
var arr2 = [2, 3, 4];
var arr3 = ["2", "3", "4"];
nums = __spreadArray(__spreadArray([], arr2, true), nums, true);
nums = __spreadArray(__spreadArray([], arr3, true), nums, true);
nums = ["1", "2", "3"];
nums.filter(function (val) { return val !== 0; });
var nums2 = [1, 2, 3, "4"];
var arr = [
    { A: 123, B: "123", C: null },
    { A: 123, B: "123", C: [] },
    { A: 123, B: "123", C: true },
];
var arr4 = ["123", "123", "12", new Date()];
var arr5 = ["123", "123", "12", new Date()];
var arr6 = ["123", "123", "12", new Date()];
var car1 = { brand: "string", type: "string", color: "string", manufactureDate: new Date() };
var arr7 = ["123", "123", "12", new Date()];
var week;
(function (week) {
    week[week["sun"] = 0] = "sun";
    week[week["mon"] = 1] = "mon";
    week[week["tue"] = 2] = "tue";
    week[week["wed"] = 3] = "wed";
    week[week["thu"] = 4] = "thu";
    week[week["fri"] = 5] = "fri";
    week[week["sat"] = 6] = "sat";
})(week || (week = {}));
var day = week.sun;
var day2 = week.sun;
var test = week[day];
console.log({ day: day, day2: day2, test: test });
var addOpp;
var subOpp;
var add3 = function (n1, n2) { return n1 + n2; };
var add4 = function (t1, t2) { return t1 + t2; };
var add5 = function (n1, n2) { return n1 + n2; };
console.log(add4("1", 3));
var printInfo = function (info) { return info; };
var moreInfo = {
    name: "sheng",
    age: 20,
    skill: "sing",
};
printInfo({ name: "sheng", age: 20, skill: "sing" });
printInfo(moreInfo);
var AccountA = {
    account: "k",
    pwd: "4546",
};
var play = function (t1, t2) {
    if (t2) {
        return t1 + t2;
    }
    return t1;
};
console.log(play("swim", "kill"));
