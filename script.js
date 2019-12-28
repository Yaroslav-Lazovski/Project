let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpensis: {},
  income: [],
  savings: false
};

let mainExpenses1 = prompt('Введите обязательную статью расходов в этом месяце');
let sum1 = prompt('Во сколько обойдется?');
let mainExpenses2 = prompt('Введите обязательную статью расходов в этом месяце');
let sum2 = prompt('Во сколько обойдется?');

appData.expenses.mainExpenses1 = sum1;
appData.expenses.mainExpenses2 = sum2;

alert(appData.budget / 30);