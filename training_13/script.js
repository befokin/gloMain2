// 'use strict';

// const inputText = document.getElementById('myText'),
// myBtn = document.getElementById('myBtn'),
// text = document.getElementById('text');
// // параграф <p>

// // Обращение к данным (объекту LocalStorage) напрямую:

// const showText = function() {
//     // вывести из localStorage на страницу
//     text.textContent = localStorage.myText;
//      // в параграф text, функция будет добавлять значение из LocalStorage
//     //  localStorage сохраняет данные  вечно, пока не будут удалены вручную или через js
//     // text.textContent = sessionStorage.myText;
// }

// myBtn.addEventListener('click', function(){  
//     // на кнопку навешаем событие
//     localStorage.myText = inputText.value;
//     // при клике на кнопку будем брать значение из inputa и сохранять в localStorage
//     //  с ключом myText
//     // sessionStorage.myText = inputText.value;
//     // sessionStorage сохраняет данные пока открыта вкладка
//     showText();
// //    запускаем функцию, когда нажимаем кнопку 'запомнить'
// });
// showText();
// // Если эту функцию запускать во время исполнения скрипта,
// //  то получится, что текс будет доставаться из LocalStorage, а именно: напишу текст 12345,
// //  нажму запомнить , закрою браузер, открою браузер, текст останется такойже в <p>
// // таким образом, мы можем сохранять и получать данные из localStorage и sessionStorage

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 'use strict';

// const inputText = document.getElementById('myText'),
//     myBtn = document.getElementById('myBtn'),
//     text = document.getElementById('text');

// const showText = function() {
//     text.textContent = localStorage.getItem('memory');
//             //  Метод getItem для получения нового значения. Чтобы достать
//             //  значение из memory
// }

// myBtn.addEventListener('click', function(){  
//     localStorage.setItem('memory', inputText.value);
//     // метод setItem для записи нового значения, ключ будет memory,
//     // значение будет браться из inputText.value
//     showText();
// });

// localStorage.removeItem('myText');
// // метод, который удаляет все данные. Можно удалить вручную в application.

// showText();

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 'use strict';

// document.cookie = 'имя=значение';
// // чтобы сохранить необходимо строкой передать ключ и значение
// document.cookie = 'имя=значение';
// document.cookie = 'имя2=значение2';
// document.cookie = 'имя3=значение3';
// document.cookie = 'имя=значение4';
// // Cookie хранятся одну сессию

// document.cookie = 'hope=life; expires=Tue, 7 May 2024 00:00:00 GMT';
                                // ключ=значение      до этой даты будут храниться cookies

// console.log(document.cookie);
// чтобы вывести все cookie 

////////////////////////////////////////////////////////////////////////////////////////////////

'use strict';

function setCookie(key, value, year, month, day, path, domain, secure) {
    // Описываем функцию. Создаем переменную, которая будет содержать временную строку  
    let cookieStr = encodeURI(key) + '=' + encodeURI(value);
    if(year) {
        const expires = new Date(year, month-1, day);
        cookieStr += '; expires=' + expires.toGMTString();
        // закодировать encodeURI (значение),чтобы никто не прочитал важную информацию,
        //  также надо закодировать key, path, domain
    }
    cookieStr += path ? '; path=' + encodeURI(path) : '';
    cookieStr += domain ? '; domain' + encodeURI(domain) : '';
    cookieStr += secure ? '; secure' : '';
    // secure значение булиновое либо есть, либо нет

    document.cookie = cookieStr;
    // cookie это свойство document
}

setCookie('Привет', 'мир');
setCookie('Любимый праздник детей', 'Новый год', 2021, 1, 1);
// установим (добавим) новую cookie

console.log(decodeURI(document.cookie));
// расшифровать cookie