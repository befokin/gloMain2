'use strict';

let start = document.getElementById('start'),


// пункт b

btnPlus = document.getElementsByTagName('button'),

incomePlus = btnPlus[0],
expensesPlus = btnPlus[1];

// const expensesAdd = document.getElementsByTagName('button')[1];
// console.log(expensesAdd);

// пункт c

const checkbox = document.querySelector('#deposit-check');
console.log(checkbox);

// пункт d

const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalIncomeItem);

// пункт e

const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue);

const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log(expensesMonthValue);

const additionalIncomeValue = document.getElementsByClassName('additional_income-value');
console.log(additionalIncomeValue);

const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log(additionalExpensesValue);

const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log(incomePeriodValue);

const targetMonthValue = document.getElementsByClassName('target_month-value');
console.log(targetMonthValue);

// Пункт f

const salaryAmount = document.querySelector('.salary-amount');


const incomeTitle = document.querySelector('.income-title');
console.log(incomeTitle);

const incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);

const expensesTitle = document.querySelector('.expenses-title');
console.log(expensesTitle);

let expensesItems = document.querySelectorAll('.expenses-items');


const additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);

const depositAmount = document.querySelector('.deposit-amount');
console.log(depositAmount);

const depositPercent = document.querySelector('.deposit-percent');
console.log(depositPercent);

const targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

const periodSelect = document.querySelector('.period-select');
console.log(periodSelect);

const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
console.log(budgetMonthValue);

const range =document.querySelector('[type="range"]');
console.log(range);



//////////////////////////////////////////////////////////////////////////////////////////////////

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};
 
    let appData = {
        budget: 0,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
       
        period: 3,
        start: function() {
           
            if(salaryAmount.value === ' '){
                alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
                return;
            }
            appData.budget = salaryAmount.value;
            console.log('salaryAmount.value:  ', salaryAmount.value);
            appData.getExpenses();
            // appData.asking();
            appData.getExpensesMonth();
            appData.getBudget();
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.showResult();
        },   
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());

        },
        addExpensesBlock: function(){
            // let expensesItems = document.querySelectorAll('.expenses-items');
            // console.log(expensesItems.parentNode);
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');

            if(expensesItems.length === 3) {
                expensesPlus.style.display = 'none';
            }
        },
        getExpenses: function(){
            expensesItems.forEach(function(item) {
               // console.log(item);
               let itemExpenses = item.querySelector('.expenses-title').value;
               let cashExpenses = item.querySelector('.expenses-amount').value;
               if(itemExpenses !== ' ' && cashExpenses !== ' ' ){
                   appData.expenses[itemExpenses] = cashExpenses;
               }
            });
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(' , ');
            addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ' ' ){
                    appData.addExpenses.push(item);
                }

            });
        },
        getAddIncome: function() {
            additionalIncomeItem.forEach(function(item){
                    let itemValue = item.value.trim();
                    if(itemValue !== ' '){
                        appData.addIncome.push(itemValue);
                    }
            });
        },
        asking: function(){

             if(confirm('Есть ли у вас дополнительный источник заработка?')) {

                let itemIncome;
                let cashIncome;
           

                // appData.getItemIncome = function() {
                    
                    for(let i = 0; i < 2; i++) {

                            do {
                            itemIncome = prompt('Какой у вас есть дополнительный зарабток?' , 'Таксую');
                            }
                            while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null); 
                            
                            do {
                            cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?' , '10000');
                            }
                            while (!isNumber(cashIncome));

                                appData.income[itemIncome] = +cashIncome;
                                // console.log(appData.income);
                    }           
            }

                    let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую').split(' , ');
                    let newAddExpenses = '  ';
                    for (let key in addExpenses) {
                        addExpenses[key] = addExpenses[key].trim();
                        newAddExpenses += addExpenses[key].substr(0, 1).toUpperCase() + addExpenses[key].substr(1).toLowerCase()  +  '  ';
                    }
                     console.log(newAddExpenses);
           


       
            
          
            // appData.getExpensesMonth = function() {
               
                    // let answer1;
                    // let answer2;

                    // for (let i = 0; i < 2;  i++) {
                
                           
                    //     do {
                    //         answer1  = prompt('Введите обязательную статью расходов?', 'еда');
                    //     }  
                    //     while (!isNaN(answer1) || answer1.trim() === '' || answer1 === null); 
                       
                                              
                    //     do {
                    //         answer2 = prompt('Во сколько это обойдется?', '15000');
                    //     }
                    //     while (!isNumber(answer2)); 


                    //     appData.expenses[answer1] = +answer2;

                    //             // console.log(appData.expenses);
                    //  } 
                     
                     appData.deposit = confirm('Есть ли у вас депозит в банке?');
                     if(appData.deposit) {
                      
                        do {
                          answer1 = prompt('Какой годовой процент?', '10');
                        }
                        while (!isNumber(answer1)); 
                
                        do {
                          answer2 = prompt('Какая сумма заложена?', '10000');
                        }
                        while (!isNumber(answer2)); 
                    }
                          appData.percentDeposit = +answer1;
                           
                          appData.moneyDeposit = +answer2;
        } ,


                    getExpensesMonth:  function() {
                        for (let key in appData.expenses) {
                            appData.expensesMonth += +appData.expenses[key];
                        }   
                           return;
                    },
                    
                    getBudget:  function() {
                        appData.budgetMonth  = appData.budget - appData.expensesMonth;
                        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
                     },

                     getTargetMonth: function() {
                        return  targetAmount.value / appData.budgetMonth;
                    },

                    
                    //  getInfoDeposit = function() {
                        // let answer1 = 0;
                        // let answer2 = 0;
                      
                        
                        
                     calcSavedMoney: function() {
                        return  appData.budgetMonth * appData.period;
                    },

                        getStatusIncome: function() {
                            if (appData.budgetDay >= 1200) {
                                return ('У вас высокий уровень дохода');
                            } else if ((appData.budgetDay >= 600) && (appData.budgetDay <= 1200)) {
                                return ('У вас средний уровень дохода');
                             } else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)) {
                                return ('К сожалению у вас уровень дохода ниже среднего');
                             } else {
                                return('Что то пошло не так');
                            } 
                         },
};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);

// appData.getTargetMonth();
appData.getStatusIncome();
appData.calcSavedMoney();


    
    
if (appData. getTargetMonth() >= 0) {
    console.log('Цель будет достигнута');
} else if (appData. getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
}





console.log('Цель будет достигнута за период ' + appData.res + ' месяцев');


 
for (let key in appData){
    //   console.log('Наша программа включает в себя данные:    свойства :  '+ key + '  значения ' + appData[key]);
}
console.log(Object.keys(appData).length);

// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
