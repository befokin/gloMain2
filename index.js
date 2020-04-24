'use strict';

let start = document.getElementById('start'),

btnPlus = document.getElementsByTagName('button'),

incomePlus = btnPlus[0],
expensesPlus = btnPlus[1],


checkbox = document.querySelector('#deposit-check'),

incomeTitle = document.querySelector('.income-title'),
// incomeAmount = document.querySelector('.income-amount'),

additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
additionalIncomeValue = document.querySelectorAll('.additional_income-value'),


budgetDayValue = document.getElementsByClassName('budget_day-value')[0],

expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],

additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],

incomePeriodValue = document.getElementsByClassName('income_period-value')[0],

targetMonthValue = document.getElementsByClassName('target_month-value')[0],

salaryAmount = document.querySelector('.salary-amount'),

expensesTitle = document.querySelector('.expenses-title'),
expensesItems = document.querySelectorAll('.expenses-items'),


additionalExpensesItem = document.querySelector('.additional_expenses-item'),

depositAmount = document.querySelector('.deposit-amount'),

depositPercent = document.querySelector('.deposit-percent'),

targetAmount = document.querySelector('.target-amount'),

periodSelect = document.querySelector('.period-select'),
periodAmount = document.querySelector('.period-amount'),

budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],

range =document.querySelector('[type="range"]'),

incomeItems = document.querySelectorAll('.income-items');




 
    let appData = {
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        incomes: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        expensesMonth: 0,
        addExpenses: [],
        addNumber: 0,
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
              
        start: function() {

                    if(salaryAmount.value === ' ') {
                        alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
                        return;
                    }
                    appData.budget = +salaryAmount.value;
           
            console.log('salaryAmount.value:  ', salaryAmount.value);
           
            appData.getExpenses();
          
            appData.getIncome();
            appData.getExpensesMonth();
            
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();
            appData.getAddNumber();
          
            appData.showResult();
        },   
            showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
        
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');

            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcPeriod();
        //    periodAmount.value = appData.addNumber();


        },
        addExpensesBlock: function(){
          
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

        addIncomeBlock: function(){
            
     
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');

            if(incomeItems.length === 3) {
                incomePlus.style.display = 'none';
            }
        },

        getIncome: function(){
            incomeItems.forEach (function(item){
                console.log(item)
                let itemIncomes = item.querySelector('.income-title').value;
                 let cashIncomes = item.querySelector('.income-amount').value;
                if(itemIncomes !== ' ' && cashIncomes !== ' '){
                appData.incomes[itemIncomes] = cashIncomes;
                }
            });
             
           for (let key in appData.incomes){
                appData.incomeMonth += +appData.incomes[key];
              }
         },
  
        

        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(' , ');
            addExpenses.forEach(function(item){
                item = item.trim( );
                if (item !== ' ' ){
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
                        appData.budgetDay = Math.round(appData.budgetMonth / 30);
                     },

                     getTargetMonth: function() {
                        return  targetAmount.value / appData.budgetMonth;
                    },

                    
                                  
                        
                        
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

                         getAddNumber: function() {
                            console.log(range.value);
                           
                           
                            // = range.value 
                        },
};

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock); 

// let x = 0;
// let eventFunc = function(event) {
//     // console.log(event.target.value);
//     x = event.target.value;
//     console.log(x);
// };

range.addEventListener('change', getAddNumber());

// periodAmount.addEventListener('input', eventFunc);


// Плюсик появляется

appData.getTargetMonth();
appData.getStatusIncome();
appData.calcPeriod();


    
    
if (appData. getTargetMonth() >= 0) {
    console.log('Цель будет достигнута');
} else if (appData. getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
}





// console.log('Цель будет достигнута за период ' + appData.getTargetMonth + ' месяцев');


 
// for (let key in appData){
    //   console.log('Наша программа включает в себя данные:    свойства :  '+ key + '  значения ' + appData[key]);
// }
// console.log(Object.keys(appData).length);

// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
