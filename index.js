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


const incomesTitle = document.querySelector('.income-title');
const incomesAmountValue = document.querySelector('.income-amount');


const additionalIncomeItem = document.getElementsByClassName('additional_income-item')[0];
// const additionalIncomeItem1 = document.getElementsByClassName('additional_income-item')[1];

// пункт e

const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue);

const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log(expensesMonthValue);




const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log(additionalExpensesValue);

const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log(incomePeriodValue);

const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
console.log(targetMonthValue);

// Пункт f

const salaryAmount = document.querySelector('.salary-amount');



// const incomeAmount = document.querySelector('.income-amount');
// console.log(incomeAmount);

const expensesTitle = document.querySelector('.expenses-title');
const expensesItems = document.querySelector('.expenses-amount');


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
const incomeItem = document.querySelectorAll('.income-items');


//////////////////////////////////////////////////////////////////////////////////////////////////

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};
 
    let appData = {
        budget: 0,
        incomes: {},
        incomesMonth: 0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
       
        
        start: function() {
           
            if(salaryAmount.value === ' '){
                alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
                return;
            }
            appData.budget = +salaryAmount.value;
            console.log('salaryAmount.value:  ', salaryAmount.value);
            // appData.getExpenses();
            // appData.asking();
        
            appData.getIncomesMonth();
            appData.getAddIncome();
            appData.getExpensesMonth();
        
            appData.getAddExpenses();
            
            appData.getBudget();
            appData.showResult();
        },   
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;

            incomesAmountValue.value = appData.incomesMonth;
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');

            additionalIncomeItem.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcPeriod();

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
        getIncome: function(){
            incomesAmountValue.forEach (function(item){
                let itemIncomes = item.querySelector('income-title').value;
                let cashIncomes = item.querySelector('income-amount').value;
                if(itemIncomes !== ' ' && cashIncomes !== ' '){
                appData.incomes[itemIncomes] = cashIncomes;
                }
            });
        },

            getIncomesMonth: function() {
            for (let key in appData.incomes){
                appData.incomesMonth += +appData.incomes[key];
            }
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
    
                    getExpensesMonth:  function() {
                        for (let key in appData.expenses) {
                            appData.expensesMonth += +appData.expenses[key];
                        }   
                           return;
                    },
                    
                    getBudget:  function() {
                        appData.budgetMonth  = appData.budget + appData.incomeMonth - appData.expensesMonth;
                        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
                     },

                     getTargetMonth: function() {
                        return  targetAmount.value / appData.budgetMonth;
                    },

                    
                    //  getInfoDeposit = function() {
                        // let answer1 = 0;
                        // let answer2 = 0;
                      
                        
                        
                     calcPeriod: function() {
                        return  appData.budgetMonth * periodSelect.value;
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
appData.calcPeriod();


    
    
if (appData. getTargetMonth() >= 0) {
    console.log('Цель будет достигнута');
} else if (appData. getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
}





console.log('Цель будет достигнута за период ' + appData.getTargetMonth + ' месяцев');


 
for (let key in appData){
    //   console.log('Наша программа включает в себя данные:    свойства :  '+ key + '  значения ' + appData[key]);
}
console.log(Object.keys(appData).length);

// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
