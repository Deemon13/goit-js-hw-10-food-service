(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{A2vp:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,i){return'                <li class="tag-list__item">'+e.escapeExpression(e.lambda(n,n))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,i){var s,c,l=null!=n?n:e.nullContext||{},o=e.hooks.helperMissing,r="function",d=e.escapeExpression;return'<li class="menu__item">\r\n    <div class="card" data-id='+d(typeof(c=null!=(c=t.id||(null!=n?n.id:n))?c:o)===r?c.call(l,{name:"id",hash:{},data:i,loc:{start:{line:2,column:30},end:{line:2,column:36}}}):c)+">\r\n        <img src="+d(typeof(c=null!=(c=t.image||(null!=n?n.image:n))?c:o)===r?c.call(l,{name:"image",hash:{},data:i,loc:{start:{line:3,column:17},end:{line:3,column:26}}}):c)+" alt="+d(typeof(c=null!=(c=t.name||(null!=n?n.name:n))?c:o)===r?c.call(l,{name:"name",hash:{},data:i,loc:{start:{line:3,column:31},end:{line:3,column:39}}}):c)+' class="card__image" />\r\n        <div class="card__content">\r\n            <h2 class="card__name">'+d(typeof(c=null!=(c=t.name||(null!=n?n.name:n))?c:o)===r?c.call(l,{name:"name",hash:{},data:i,loc:{start:{line:5,column:35},end:{line:5,column:43}}}):c)+'</h2>\r\n            <p class="card__price">\r\n                <i class="material-icons">\r\n                    monetization_on\r\n                </i>\r\n                '+d(typeof(c=null!=(c=t.price||(null!=n?n.price:n))?c:o)===r?c.call(l,{name:"price",hash:{},data:i,loc:{start:{line:10,column:16},end:{line:10,column:25}}}):c)+' кредитов\r\n            </p>\r\n\r\n            <p class="card__descr">\r\n                '+d(typeof(c=null!=(c=t.description||(null!=n?n.description:n))?c:o)===r?c.call(l,{name:"description",hash:{},data:i,loc:{start:{line:14,column:16},end:{line:14,column:31}}}):c)+'\r\n            </p>\r\n\r\n            <ul class="tag-list">\r\n'+(null!=(s=t.each.call(l,null!=n?n.ingredients:n,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:18,column:16},end:{line:20,column:25}}}))?s:"")+'            </ul>\r\n        </div>\r\n\r\n        <button class="card__button button">\r\n            <i class="material-icons button__icon">\r\n                shopping_cart\r\n            </i>\r\n            В корзину\r\n        </button>\r\n    </div>\r\n</li>'},useData:!0})},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("8cZI"),t("lmye");var a=t("A2vp"),i=t.n(a);var s,c=function(e,n){var t=e.map((function(e){return i()(e)})).join("\n");n.insertAdjacentHTML("afterbegin",t)},l=(t("Muwe"),t("y89P"),{menu:document.querySelector(".js-menu"),switch:document.querySelector(".js-switch-input"),body:document.body}),o={LIGHT:"light-theme",DARK:"dark-theme"};l.switch.addEventListener("change",(function(){l.body.classList.contains(o.LIGHT)?(l.body.classList.replace(o.LIGHT,o.DARK),localStorage.setItem("theme",o.DARK)):(l.body.classList.replace(o.DARK,o.LIGHT),localStorage.setItem("theme",o.LIGHT))})),localStorage.getItem("theme")?(s=localStorage.getItem("theme"),l.body.classList.add(s),localStorage.getItem("theme")===o.DARK&&(l.switch.checked=!0)):(s=localStorage.setItem("theme",o.LIGHT),l.body.classList.add(o.LIGHT)),c(t("zG5e"),l.menu)},zG5e:function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Картофель, запеченный в мундире","description":"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Картофель","Чеснок","Сметана","Бекон","Твердый сыр","Зеленый лук"]},{"id":"pkXzyRp1P","name":"Томатный магрибский суп","description":"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Помидоры","Куриный бульон","Мед","Петрушка","Кинза","Паприка"]},{"id":"QMom9q4Ku","name":"Крем-суп из тыквы","description":"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Тыква","Петрушка","Сливки","Бренди","Куриный бульон"]},{"id":"k2k0UrjZG","name":"Салат из красной фасоли с творожным сыром","description":"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Фасоль","Соль","Чеснок","Оливковое масло","Творожный сыр","Красный лук"]},{"id":"j2k8U1jZd","name":"Классический греческий салат ","description":"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Оливковое масло","Лимонный сок","Чеснок","Помидоры","Красный лук","Сыр фета","Маслины"]},{"id":"X2aQ7cvkd","name":"Маффины с голубикой и мускатным орехом","description":"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Сливочное масло","Пшеничная мука","Голубика","Ванильный экстракт","Мускатный орех"]},{"id":"nk3zy1pf8","name":"Азу по‑татарски","description":"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Говядина","Соленые огурцы","Картофель","Мясной бульон","Чеснок"]},{"id":"b7k2U13fd","name":"Жареный рис с яйцом по‑китайски","description":"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Круглый рис","Мини цукини","Тертый имбирь","Грибы шиитаке","Соевый соус","Кунжутное масло"]}]')}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.682ff94ecd55a9ad5267.js.map