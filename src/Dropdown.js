import React, {Component} from 'react';

class Dropdown extends Component {
    
    constructor(props) {
        super(props); // метод переопределения конструктора
        this.state = { isOpened: false}; // создали переменную и сделали ее фолс при инициализации
    }
    toggleState() {
        this.setState({ isOpened: !this.state.isOpened}); // переклалка
    }

    render () {  
        console.log('isOpened', this.state.isOpened  );
        // bind то что позволяет видить значение когда вызов функции toggleState она без вызова
        // вызов функции не в контексте класа требует функцию байнд

        let dropdowntext;// let переменная для использования внутри разрешено в ES6
        if (this.state.isOpened) {
            dropdowntext = <div>Text here is what shown</div>
        }

        return (
            <div onClick={this.toggleState.bind(this)}>
                Its dropdown baby 
                {dropdowntext}
            </div> 
        );        
    }
}

export default Dropdown;