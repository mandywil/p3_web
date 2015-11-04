// wrapped by build app
define("d3/src/locale/mk-MK", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
import "locale";

var d3_locale_mkMK = d3.locale({
  decimal: ",",
  thousands: ".",
  grouping: [3],
  currency: ["", " ден."],
  dateTime: "%A, %e %B %Y г. %X",
  date: "%d.%m.%Y",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
  shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
  months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
  shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
});

});
