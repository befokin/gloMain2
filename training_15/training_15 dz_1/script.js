
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
    
    
class AppData {
        constructor() {
    
        this.budget = 0;
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

};

AppData.prototype.start = () => {

    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddIncome();
    this.getAddExpenses();
    this.getBudget();
    this.showResult();
};
// заносим методы

AppData.prototype.showResult = () => {
       
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();

                periodSelect.addEventListener('input', () => incomePeriodValue.value = this.calcPeriod());
};

AppData.prototype.addExpensesBlock = () => {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3) {
                expensesPlus.style.display = 'none';
        }
};

AppData.prototype.getExpenses = () => {

        expensesItems.forEach((item) => {
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;

                if(itemExpenses !== '' && cashExpenses !== ''){
                        this.expenses[itemExpenses] = cashExpenses;
                }
        });
};

AppData.prototype.addIncomeBlock = () => {
   
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3) {
                incomePlus.style.display = 'none';
        }
};

AppData.prototype.getIncome = function() {
    
        incomeItems.forEach ((item) => {
                let itemIncomes = item.querySelector('.income-title').value;
                let cashIncomes = item.querySelector('.income-amount').value;
                
                if(itemIncomes !== '' && cashIncomes !== ''){
                        this.incomes[itemIncomes] = cashIncomes;
                }
        });

        for (let key in this.incomes) {
                this.incomeMonth += +this.incomes[key];
        }
};

AppData.prototype.getAddExpenses = () => {
        
        let addExpenses = additionalExpensesItem.value.split(', ');

        addExpenses.forEach((item) => {
                item = item.trim();

                if (item !== ''){
                    this.addExpenses.push(item);
                }
        });
};

AppData.prototype.getAddIncome = function() {
   
        additionalIncomeItem.forEach((item) => {
                let itemValue = item.value.trim();

                if(itemValue !== '') {
                        this.addIncome.push(itemValue);
                }
        });
};

AppData.prototype.getExpensesMonth = () => {

        for (let key in this.expenses) {
                this.expensesMonth += +this.expenses[key];
        }   
        return;
};
        
AppData.prototype.getBudget = () => {
        this.budgetMonth  = this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.round(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = () => targetAmount.value / this.budgetMonth;
                        
AppData.prototype.calcPeriod = () => this.budgetMonth * periodSelect.value;

AppData.prototype.getStatusIncome = () => {
        if (this.budgetDay >= 1200) {
                return ('У вас высокий уровень дохода');

        } else if ((this.budgetDay >= 600) && (this.budgetDay <= 1200)) {
                return ('У вас средний уровень дохода');

        } else if ((this.budgetDay < 600) && (this.budgetDay >= 0)) {
                return ('К сожалению у вас уровень дохода ниже среднего');

        } else {
                return('Что то пошло не так');
        } 
};

AppData.prototype.periodSelect = () => periodAmount.textContent = periodSelect.value;

AppData.prototype.startAm = () => {
        if(salaryAmount.value === '') {
                alert('Вы не ввели месячный доход');
        } else if (log === false) {
                log = true;
                this.start.call(this);
                start.style.display = 'none';
                cancel.style.display = 'inline-block';
        }
};

AppData.prototype.cancel = () => {
        
        if(log === true) {
                log = false;
                cancel.style.display = 'none';
                start.style.display = 'inline-block';

                let stringCount = document.querySelectorAll('input');
                        stringCount.forEach((item) => { 
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
};
             
AppData.prototype.eventListeners = () => {

        cancel.addEventListener('click', this.cancel.bind(this));
        start.addEventListener('click', this.startAm.bind(this));
        expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
        incomePlus.addEventListener('click', this.addIncomeBlock.bind(this)); 
        periodSelect.addEventListener('input', this.periodSelect.bind(this));
};
    
const appData = new AppData();
appData.eventListeners();


let log = false;