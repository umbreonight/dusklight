export default function getCurrentWeek() {
  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
  }

  var today = new Date();
  var weekNumber = today.getWeek();

  return weekNumber;
}
