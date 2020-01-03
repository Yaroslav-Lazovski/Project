let money;
let time;


let start = function () {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
};
 
start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpensis: {},
  income: [],
  savings: true
};

let chooseExpenses = function () {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');

    if ((typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a !== '' && b !== '' && a.length < 50) {
      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
};

chooseExpenses();

let detectDayBudget = function () {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert('Eжедневный бюджет: ' + appData.moneyPerDay);
};

detectDayBudget();


let detectLevel = function () {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
};

detectLevel();


let checkSavings = function () {
  if (appData.savings === true) {
    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = save / 100 / 12 * percent;
    alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
  }
};

checkSavings();


let chooseOptExpenses = function () {
  for (let i = 0; i < 3; i++) {
    let questionOptExpenses = prompt('Статья необязательных расходов?');
    appData.optionalExpensis[i + 1] = questionOptExpenses;
  }
};

chooseOptExpenses();
