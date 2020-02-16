class CalcController{

        constructor(){
            //_ antes do atributo quer dizer que o atributo é privado.

            this._operation = [];
            this._locale = "pt-br";
            this._displayCalcEL = document.querySelector("#display");
            this._dateEL = document.querySelector("#data");
            this._timeEL = document.querySelector("#hora");
            
            this._currentDate;
            this.initialize();
            this.initButtonsEvents();
        }

        initialize(){

            this.setDisplayDateTime(); // para executar imediatamente ao abrir a calculadora

            setInterval(()=>{ // para mostrar a contagem de segundos e ir atualizando;

                this.setDisplayDateTime();

            }, 1000);

            /*setTimeout (()=>{ 

                clearInterval(interval);     //executar após 10 segundos, ou seja dps de 10 segundos vai parar a função de cima

            }, 10000);*/
        }

        addEventListenerAll(element, events, fn){ // para adicionar os eventos de mouse nos botões

            events.split(' ').forEach(event => { // para separar os eventos quando encontrar espaço pois o JS só adiciona um evento por vez.

                element.addEventListener(event, fn, false);
            
            });


        }

        execBtn(value){

            switch (value){

                case 'ac':
                    this.clearAll();
                    break;
                case 'ce':
                    this.cancelEntry();
                    break;
                case 'soma':
                    this.addOperation('+');
                    break;
                case 'subtracao':
                    this.addOperation('-');
                    break;
                case 'multiplicacao':
                    this.addOperation('*');
                    break;                    
                case 'divisao':
                    this.addOperation('/');
                    break;
                case 'porcento':
                    this.addOperation('%');
                    break;
                case 'igual':

                    break;

                case 'ponto':
                    this.addOperation('.');
                    break;
                
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(value));
                    break;

                default:
                    this.setError();
                    break;
                
            }

        }

        initButtonsEvents(){

            let buttons = document.querySelectorAll("#buttons > g, #parts > g"); // o html tem duas classes importantes os botões e os textos #buttons> g pega cada propriedade 'g' de buttons
 
            buttons.forEach((btn, index)=>{
 
                 this.addEventListenerAll(btn, "click drag", e =>{
 
                     //console.log(btn.className.baseVal.replace("btn-", ""));
                     let textBtn = btn.className.baseVal.replace("btn-", "");
 
                     this.execBtn(textBtn);
 
                 });
 
                 this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
 
                     btn.style.cursor = "pointer";
 
                 });
 
             });
         }

        clearAll(){

            this._operation = []; // reseta o array de operações ou seja zera tudo.

        }

        clearEntry(){

            this._operation.pop(); // clearEntry serve para apagar a última entrada digitada na calculadora, e a função pop() remove o último item do array.

        }

        getLastOperation(){

            return this._operation[this._operation.length -1];

        }

        setLastOperation(value){

            this._operation[this._operation.length -1] = value;

        }

        isOperator(value){

            return (['+', '-', '*', '/', '%'].indexOf(value) > -1);

        }

        addOperation(value){

            if (isNaN(this.getLastOperation())){
                
                if(this.isOperator(value)){

                    this.setLastOperation(value);

                } else if(isNaN(value)){
                    
                    

                } else{

                    this._operation.push(value);

                }

            } else {
                
                let newValue = this.getLastOperation().toString() + value.toString(); 

                this.setLastOperation(parseInt(newValue));
            }

            console.log(this._operation);
        }

        setError(){
            this.displayCalc = "Error"; // caso alguma entrada seja diferente das esperadas seta mensagem de erro no visor da calculadora.
        }

        
        setDisplayDateTime(){
            // seta a data para a localidade do usuário
            this.displayDate = this.currentDate.toLocaleDateString(this.locale); //, day='2-digit', month='short', year='numeric' p/ data extensa); // tudo o que for repetido criar método;
            this.displayTime = this.currentDate.toLocaleTimeString(this.locale);

        }

        get displayTime(){

            return this._timeEL.innerHTML;

        }

        set displayTime(value){

            return this._timeEL.innerHTML = value; //innerHTML altera o que está escrito no html sendo assim alterando a hora escrita no visor da calculadora.

        }

        get displayDate(){

            return this._dateEL.innerHTML;

        }

        set displayDate(value){

            return this._dateEL.innerHTML = value;

        }



        get displayCalc(){

            return this._displayCalcEL.innerHTML;
        
        }

        set displayCalc(valor){

            this._displayCalcEL.innerHTML = valor;

        }

        get currentDate(){

            return new Date();

        }

        set currentDate(data){

            this._currentDate = data;
        }

        get currentTime(){

            return this._currentTime;
        }

        set currentTime(hour){

            this._currentTime = hour;
        }
    

}