
const generateId =() => `gloMax${Math.random(Math.random() * 1e8)}`

const totalBalance = document.querySelector('.total__balance'),
        totalMoneyIncome = document.querySelector('.total__money-income'),
        totalMoneyExpenses = document.querySelector('.total__money-expenses'),
        historyList = document.querySelector('.history__list'),
        form = document.querySelector('#form'),
        operationName = document.querySelector('.operation__name'),
        operationAmount = document.querySelector('.operation__amount');

        console.log(historyList);

        let dbOperation = [
            {
                id: '1',
                description: 'Получил зарплату',
                amount: 30000, 
            },
            {
                id: '2',
                description: 'Квартплата',
                amount: -10000, 
            },
            {
                id: '3',
                description: 'Заказ на фриланс',
                amount: -12000, 
            },
            {
                id: '4',
                description: 'Купил книги',
                amount: -2500, 
            },
            {
                id: '5',
                description: 'Купил обувь',
                amount: -5000, 
            },
        ];

            if(localStorage.getItem('calc')) {
                dbOperation = localStorage.getItem('calc');
                
            }



        const renderOperation = (operation) => {
            const className = operation.amount < 0 ? 
            'history__item-minus' :
             'history__item-plus';
            console.log(operation);

            const listItem = document.createElement('li');
            listItem.classList.add('history__item');
            listItem.classList.add(className);
            listItem.innerHTML = `${operation.description}
            <span class="history__money">+30000 ₽</span>
            <button class="history_delete" data-id="${operation.amount}>x</button>
              `;
              historyList.append(listItem);
            
        };

        const updateBalance = () => {
                const resultIncome = dbOperation.filter((item) => {
                    return item.amount > 0;
                    .reduce((result, item) =>result + item.amount, 0);
                    console.log(resultIncome);
                })
                const resultExpenses = dbOperation.filter((item) => {
                    return item.amount > 0;
                    console.log(resultExpenses);
                })

                totalMoneyIncome.textContent = resultIncome + ;
                totalMoneyExpenses.textContent = resultExpenses + ;
                totalBalance.textContent = (resultIncome + resultExpenses) + ' '
        };

        const addOperation = (event) => {
            event.preventDefault();
            console.log(event);
            const operationNameValue = operationNameValue.value,
                        operationAmountValue = operationAmountValue.value;

                        operationNameValue.style.borderColor = ' ';
                        operationAmountValue.style.borderColor = ' ';


                        if(operationNameValue.value !== ' ' && operationAmountValue.value !== ' ') {
const operation = {
id: generationId(),
description: operationNameValue,
amount: +operationAmountValue,

};
dbOperation.push(operation);
init();
console.log(dbOperation);


                            operationNameValue.value = ' ';
                            operationAmountValue.value; = ' ';

                        }else {
                            if (!operationNameValue.value) operationNameValue.style.borderColor = 'red';
                            if (!operationAmountValue.value) operationAmountValue.style.borderColor = 'red';
                        }
        };

        const deleteOperation = (event) => {
            if(event.target.classList.contains('history__delete')){
                dbOperation = dbOperation.filter(operation => operation.id !== event.target.dataset.id);
                console.log(event.target.dataset.id);
                init();
            }
                console.log(event.target);
        };

        const init = () => {
            historyList.textContent = ' ';
            updateBalance();
            localStorage.setItem('calc', JSON.stringify(dbOperation))
            dbOperation.forEach(renderOperation)
                // renderOperation
                //     console.log(item);
            })
            for (let i = 0; i < dbOperation.length; i++) {
                renderOperation(dbOperation[i]);
            }
        };
        form.addEventListener('submit', addOperation);

historyList.addEventListener('click', deleteOperation);

        init();