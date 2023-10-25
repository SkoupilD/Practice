const menu = {
    _menu: '',
    _price: 0,
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string'){
       this._menu = mealToCheck;
      }
    },
    set money(priceToCheck){
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaySpecial(){
      if ((this._price && this._menu) || (this._price >= 0 && this._menu !== '') ){ return `Todays Special is ${this._menu} for ${this._price}$!`
        } else { return  'Meal or price was not set correctly!'
      }
    }
  };
  menu.meal = 'Pizza';
  menu.money = 2.50;
  console.log(menu.todaySpecial);
  
  