'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('ProjectListCtrl', function ($scope) {

	$scope.filters = { };

	$scope.projects = [ 
		{'name': 'LazyTown',
		 'type': 'Web',
		 'website': 'http://www.lazytown.com',
		 'image' : 'http://www.skapalon.is/media/w356/b35f49c0e189fea9.jpg'},
		{'name': 'Landsbanki Íslands',
		  'type': 'Web',
		  'website': 'http://www.landsbanki.is',
		  'image' : 'http://landsbankinn.com/library/Images/Frontpage/Slider/vardan/2012/poster-0606.jpg'},
		{'name': 'Stöð 2',
		  'type' : 'Web',
		  'website': 'http://www.stod2.is', 
		  'image' : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgWFQkWFiEYGBgYGCIeIBweHiciHx0dKB0dKCghIBwoIx8bIj0iKCosMzAvHh8/ODYtNysyLiwBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAACAYHAwQFAgH/xABGEAACAQEEAwkNBQgCAwAAAAAAAQIDBAUGESExcQcIEhVBUVRh0RMXIjIzNkJidIGSk7IUI1KR0hYkJUOCobHBcvFTg8L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3ifkmox4Unkj9JX3Vcc2/FF/VLLTtDjdFObhTpp6JcF5cOWXjNtZrPUssuVsKc40u7p9L449o41u7p9L449pFAAtfjW7un0vjj2jjW7un0vjj2kUAC1+Nbu6fS+OPaONbu6fS+OPaRQALX41u7p9L449o41u7p9L449pFAAtfjW7un0vjj2jjW7un0vjj2kUAC1+Nbu6fS+OPaONbu6fS+OPaRQALX41u7p9L449pyULbZLRPgWe1QlPmjJN/wBiWMNbl2K8QpVaN39xsz/mVnwF7o5Ob2qOXWbXwhuJWG5bwp3leV7VKtqpzU4qmu5xTWrN6ZNZ8zj2htgAAAABx169Gzw4doqxjDVnJpL+51+Nbu6fS+OPaefi/Cl14vuz7BfEJcBS4UZQllKMsms09WpvQ011E+Y/3Jr3wrTlb7FP7Rda0uaWUoL1o83rLRz8ECk+Nbu6fS+OPaONbu6fS+OPaRQALX41u7p9L449o41u7p9L449pFAAtfjW7un0vjj2jjW7un0vjj2kUAC1+Nbu6fS+OPaONbu6fS+OPaRQALeoWmz2lZ2evGSWvgyT/AMHKRPdd5W66LbG23ZapUrTHVKLyezrXU9DKw3N8TvFuE6d51opWrNwqpauHHW11NZSy5MwMoAAAiCv5eW1lvkQV/Ly2sDjAAAAAAAAAAAA27uVbks75jG+sT0nG7npp0tUqq/E+WNPm5ZdSybDD8D7n1+YyrcKxUu52FPKVaaaiudLlnLqXVm1mUFg3czw7hWKrUbN3a3r+dVSbT9Vaoe7TztmX2Wz0LJZ42ey0YwoRWUYxSSSWpJLQkcoAAAAAAAAA/Gk1k1oP0ATzu07m1O5ZPENw0cruk/vaaWinJ6pLmpt6MvReWWh5R1EW7bbLQt1jnZLXSUrPOLjKL1NPQ0R5jG4auGcS1roqttU5+C36UHpg9ri1n15geKAAAAAAAAUjvdfMWp7VP6aZNxSO918xantU/ppgbSAAAiCv5eW1lvkQV/Ly2sDjAAAAAAAAAM53JsESxjf+drg+KqOUqr1cL8NNPnly5aknqeQGVbi+5orzlHEeIaGdhTzo0pLyjXpyX4FyL0n1eNQB806cKVNU6UEqaWSSWSSWpJciPoAAAAAAAAAAAAAAGgd8ndkaV72W9IR8KpTlTl/62mvf4b/I38ac3ynA4jsmflO7Sy2cHT/oCfwAAAAAAACkd7r5i1Pap/TTJuKR3uvmLU9qn9NMDaQAAEQV/Ly2st8iCv5eW1gcYAAAAAAAOxd1itN5W6FhsVJytNSSjGK5W9C/7K8wPhizYSw5TuqzZOa8KpNLx5vxpf6XMkjV+98wclCWK7fT0vOFnT/KdT/MF/Xzo3eAB0r2va7rmsjtV622FKgvSnJL3LPW+pGqcU7u932bOjhmwutU5KlXOMNqj48lt4IG4zFr93RMJ3FJ07dfMHWWjgU86kk+ZqGfBe3ImvEuPcS4lbjed6T+zv8Alw8CGXM4x8b+rNmMgUbW3esMQnwad32qUefgwX/32GSYT3TcMYptCslitUqdseqnVjwZPY03FvqTz6iTj6pznSqKpTk1NPNNPJprU8+cC4QY5ud31VxDgqzXnaHnXnDKb55QbhJ+9xb95kYAAAAAANA75O8o1b2st2Ql4VOnKpL+tpL3+A/zN82m0UbJZpWm01FGhCLlKT1JJZtvqSI9xtf88T4pr3tLNQnPwE+SEfBgtuSWfXmB4YAAAAAAABSO918xantU/ppk3FI73XzFqe1T+mmBtIAACIK/l5bWW+RBX8vLawOMAAAAAPdwVhy0YrxJSumz5qMnnOX4YLxpbctC520uU8I9/CmLr1wnKrUuVwjXqwUHOUFKUUnn4Oehe9PUgKpvC9bhwbc8IW61QoWKnFQhFvS1FZJRivCk8uZM1Bi/d1tNbOzYUsnc4au7VUnLbGHirbLPYjUF5Xjbb1tbtd5WqdW0S1ynJt7NPJ1HVA7t63reF8Wt2u9bbOrXfpTk37lnqXUtCOkAAAAAA2huH4Id/wB88dXhS/hlnkmk/TqrJpdcY6JP+laU2Bu/c5uipcWCLLd9eGVaNPhTT5JTbnJe5ya9xkgAAAAADysU39ZcNXDVva3P7unHNLllJ6IxXW3kgNYb4HGP2OwxwxYKn39VKdZrkh6MNsms31LmkaAO7fV6Wu+71qXneFThWmrJyk/9LmSWSS5EkdIAAAAAAAAAUjvdfMWp7VP6aZNxSO918xantU/ppgbSAAAiCv5eW1lvkQV/Ly2sDjAAAAAAAAAAAAAAD6hGU5qEItybySXKwPWwlh22Ypv6ndNgXhzfhSyzUIrxpvqS/N5LWyu7huex3BdFO67up8GzU45LnfPJ88m823zsxLciwPHCFw92tlP+LV0pVfUXo01s5ed560kZ6AAAAAACbN3TGfHt+8S2Gpnd9mk02tU6uqT2R0xXXwuRo2tuwYz/AGTw26VkqZXpXzhSy1xXpVPcnkutrmZLIAAAAAAAAAAACkd7r5i1Pap/TTJuKR3uvmLU9qn9NMDaQAAEQV/Ly2st8iCv5eW1gcYAAAAAAAAAAAAAbl3BsCK22hYpvWjnZoP93i/SmnpqbIvQvWz1cEwTc4wfXxniKNijnGxQ8OtNejHmT1cKWpe96UmVnY7LQsNkhZLJSULPCKjGK1JLQkBzAAAAAB17fbLPd1inbbbVUbPTi5Sk+RLSzsGh98DjTu1ZYUu+r93HKVoa5ZaHCn7vGfXweZga0x1ie0YuxJUvWumqb8GnF+hTWfBjt0tvrbMfAAAAAAAAAAAAAUjvdfMWp7VP6aZNxSO918xantU/ppgbSAAAiCv5eW1lvkQV/Ly2sDjAAAAAAAAAAA7F32K03lboWKw0XO01JKMYrW29X/Z1yhNwnAnFliWJr0o/vtWP3MX6FN+l1Sn9P/JoDOtz7CNmwbh6N30cpWl+FVn+Kb1/0rUlzdbZkoAAAAAD4q1adGk6taajTim228kktLbfMBjO6Ri2lg7DM7dmnbJeBRi+WbWhtfhjrezLW0SVaa9W1WmVptNRyrTk5Sk9bbebb62zK91DGM8Y4llaacnxfTzhQj6vLLL8Unp2cFchh4AAAAAAAAAAAAAAKR3uvmLU9qn9NMm4pHe6+YtT2qf00wNpAAARBX8vLay3yIK/l5bWBxgAAAAAAAAHrYWw/bcT35Tum74fezemXJCK8ab6kvz0JaWgMu3G8CvFd9fbrwp53RQknNNaKk9ap7NTfVkvSzKeSSWSWg83Ddx2LDly07qu6GVCnHLN65Plk/Wb0npgAAAAAA0zu/Y1+yWT9lruq/f1EpV2n4sNcYaOWWt+rlySNzGgsV7jWKb2xJaLxo26hOnVqymnOclLKTzSa4LyyWSyTyySA0yDaHeKxb/57N8yX6B3isW9Is3zJfoA1eDaHeKxb0iy/Ml+gd4rFvSLL8yX6ANXg2h3isW9IsvzJfoD3CsWpeXs3zJfoA1eD38W4PvrCNpjRvqzKKnnwJRkpRlllnk1zZrQ0npPAAAAAAABSO918xantU/ppk3FI73XzFqe1T+mmBtIAACIK/l5bWW+RBX8vLawOMAAAAAAAH1CMpzUIRbk3kkuVlR7kOBo4RuP7Rbaf8XrpOp6i1qmtmt5a3zpIwDcGwH9stCxTetH93g/3eL9Ka11NkXoXrZvRwVnv0AAAAAAAAAAAAAAAAAAaz3a8dfs1c/FN21cr1rxazTydOm9Dno0qT0pe98mkNabuuLaOIMRxu6wzzsll4UeEtUqjy4bXOlko7VLkZrMAAAAAAAFI73XzFqe1T+mmTcUjvdfMWp7VP6aYG0gAAIgr+XltZb5EFfy8trA4wAAAAAyzc1wbXxniFWXSrDDKdaa5I/hXrS0pe96cjHbsu+1XreELBYKLnaaklGMVyt/4XLnyLMrbAWE7Lg7D0Lts7Uq/jVZ/jm9b/4rUlzJcubA92yWahYrLGy2SkoUIRUYxWpJaEjmAAAAAAAAAAAAAAAAB8znGnBzqSSglm29CSWt58wHkYuxHYsK3DUva3vwIrKMeWc34sF1v+yTfISLf18W2/73qXpeVThWmpLN8y5EkuSKWSS5kZVutY4njC/+BZJvimi3GkvxP0qj65cnMktTbMFAAAAAAAAAFI73XzFqe1T+mmTcUjvdfMWp7VP6aYG0gAAI2xlcdpw7iWtdlqptcGb4LfpQbzjJc6a/3zFkniYmwnceKaCpX3YI1HHxZaVKOyUcnl1agI3BT/eWwX0Sr82Q7y2C+iVfmyAmAFP95bBfRKvzZHbuvclwbdltja6d2udSLzj3ScpJPn4LeT96YGP7huA+JrB+0N60crxqx+7i/wCXTfLlySlr6lktGbRtkAAAAAAAAAAAAAAAAAAaX3e8cuy0f2Vuyp99NJ2iSfixelU9slpfq5a+EzdBhd/7l2Fr/vWd53hZJ/aqmTk41JJNpJZ5aloS1ASgCn+8tgvolX5sh3lsF9Eq/NkBMAKf7y2C+iVfmyHeWwX0Sr82QEwAp/vLYL6JV+bId5bBfRKvzZATACn+8tgvolX5sh3lsF9Eq/NkBMBU24lclpuTAcI22m41q05VuC9aUslH84xUvedi5tyrB9z21WyhdnDrRece6Sc0nz8F+DntRmoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k='},
		{'name': 'Gillz',
		  'type' : 'Web',
		  'website': 'http://www.gilz.is', 
		  'image' : 'http://uni.hi.is/jbg14/files/2011/02/Gillz.jpg'},
		{'name': 'Alvogen',
	     'type' : 'Web',
		 'website': 'http://www.alvogen.is', 
		 'image' : 'http://alvogen.us.com/img/manufacturing-image.png'},
		{'name': 'Nova', 
		 'type' : 'Web',
		 'website' : 'http://www.nova.is', 
		 'image' : 'http://www.mbl.is/tncache/frimg/dimg_cache/e360x244/4/45/445816.jpg'},
		{'name': 'Bestu lögin',
		 'type' : 'Web',
		 'website' : 'bestulogin.siminn.is', 
		 'image' : 'http://colly.com/images/uploads/bestulogin.jpg'},
		{'name': 'Unicef',
		 'type' : 'Web',
		 'website': 'http://www.unicef.is', 
		 'image' : 'http://unicef.is/sites/all/themes/UNICEF/images/ROTOBANNER2013.jpg'},
		{'name' : 'Sirius', 
		 'type' : 'Web',
		 'website' : 'http://www.sirius.dk', 
		 'image' : 'http://sirius.linux116.orango.nu/wp-content/uploads/2013/06/erhverv1.png'},
		{'name': 'Aðalskoðun',
		  'type': 'Web',
		  'website': 'http://www.adalskodun.is', 
		  'image' : 'http://www.adalskodun.is/Media/W450/45cf8f8dcb8cf9a6.JPG'},
		{'name' : 'Billetlugen',
		  'type' : 'Web',
		  'website' : 'http://www.billetlugen.dk',
		  'image' : 'http://www.europeanglasscontext.com/sites/default/files/Billetlugen_logo2011.png'},
		{'name': 'Ergo lögmenn',
		  'type' : 'Web',
		   'website' : 'http://www.ergologmenn.is',
		  'image': 'http://www.il.is/img/il_logo.png'}
	];
});