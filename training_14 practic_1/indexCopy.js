// Из функции конструктора будет создаваться объект
'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    checkbox = document.querySelector('#deposit-check'),
    incomeTitle = document.querySelector('.income-title'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
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
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
        
    start: function() {
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddIncome();
    this.getAddExpenses();
    this.getBudget();
    this.showResult();
    console.log(this);
    },

    showResult: function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('input', function () {
        incomePeriodValue.value = appData.calcPeriod();
        });
    },

    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },

    getExpenses: function() {
        console.log(this);
        let _this = this;
        expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
        });
    },

    addIncomeBlock: function() {
        console.log(this);
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },

    getIncome: function() {
        console.log(this);
        let  _this = this;
        incomeItems.forEach (function(item){
        let itemIncomes = item.querySelector('.income-title').value;
        let cashIncomes = item.querySelector('.income-amount').value;
        if(itemIncomes !== '' && cashIncomes !== ''){
            _this.incomes[itemIncomes] = cashIncomes;
            }
        });

        for (let key in appData.incomes) {
            this.incomeMonth += +this.incomes[key];
        }
    },

    getAddExpenses: function() {
        let  _this = this;
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                _this.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function() {
        let _this = this;
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                _this.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth:  function() {
        for (let key in appData.expenses) {
            this.expensesMonth += +this.expenses[key];
        }   
        return;
    },
            
    getBudget:  function() {
        this.budgetMonth  = this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.round(this.budgetMonth / 30);
    },

    getTargetMonth: function() {
        return  targetAmount.value / this.budgetMonth;
    },
                            
    calcPeriod: function() {
        return  this.budgetMonth * periodSelect.value;
    },

    getStatusIncome: function() {
        if (this.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');

        } else if ((this.budgetDay >= 600) && (this.budgetDay <= 1200)) {
                    return ('У вас средний уровень дохода');

        } else if ((this.budgetDay < 600) && (this.budgetDay >= 0)) {
                    return ('К сожалению у вас уровень дохода ниже среднего');

        } else {
                return('Что то пошло не так');
        } 
    },

    periodSelect: function() {
        return   (periodAmount.textContent = periodSelect.value);
    },

    startAm: function() {
        if(salaryAmount.value === '') {
            alert('Вы не ввели месячный доход');
        } else if (log === false) {
            log = true;
            appData.start.call(appData);
            start.style.display = 'none';
            cancel.style.display = 'inline-block';
        }
    },

    cancel: function() {
        if(log === true) {
            log = false;
            cancel.style.display = 'none';
            start.style.display = 'inline-block';

            let stringCount = document.querySelectorAll('input');
                stringCount.forEach(function(item){ 
                item.value = '';
                });
            range.value = '1';
            periodAmount.textContent = '1'; 

        this.budget  = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.incomes = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        }
    }
};               
    let log = false;

    cancel.addEventListener('click', appData.cancel.bind(appData));
    start.addEventListener('click', appData.startAm.bind(appData));

    expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
    incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData)); 
    periodSelect.addEventListener('input', appData.periodSelect.bind(appData));

    appData.getTargetMonth();
    appData.getStatusIncome();
    appData.calcPeriod();

    if (appData. getTargetMonth() >= 0) {
        console.log('Цель будет достигнута');
    } else if (appData. getTargetMonth() < 0){
                console.log('Цель не будет достигнута');
    }

