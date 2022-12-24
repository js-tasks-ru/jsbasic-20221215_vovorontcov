let calculator = {
  read: function(a,b) {
    this.a = a;
    this.b = b;
  },
  sum: function() {
    let result =this.a + this.b;
    return result;
  },
  mul: function() {
    let result = this.a * this.b;
    return result;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
