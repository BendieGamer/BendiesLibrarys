"use strict";

// WARNING! THIS IS A W.I.P



Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMoney = AddMoney;
exports.RemoveMoney = RemoveMoney;
ModAPI.meta.credits('BendieGames');
ModAPI.meta.icon('https://raw.githubusercontent.com/kipcole9/money/refs/heads/main/logo.png');
ModAPI.meta.title('Bendies Money LIB');
ModAPI.meta.description('This is a Money mod LIBRARY');
ModAPI.meta.version('v0.1');
var GetMoneyString = localStorage.getItem('Bendies_Money_Value');
var Bendies_Money = Number(GetMoneyString);
function AddMoney(Amount) {
    var Amount1 = Bendies_Money = +Amount;
    var Amount2 = Amount1.toString();
    var Moneyset = localStorage.setItem('Bendies_Money_Value', Amount2);
    Moneyset;
    console.log("Added " + Amount + "to the money cookie!");
}
;
function RemoveMoney(Amount) {
    var Amount1 = Bendies_Money -= Amount;
    var Amount2 = Amount1.toString();
    var MoneyRemove = localStorage.setItem('Bendies_Money_Value', Amount2);
    MoneyRemove;
}
;
function Loaded() {
    console.log('Bendies Money LIB loaded!');
}
;
ModAPI.addEventListener("loaded", Loaded);
