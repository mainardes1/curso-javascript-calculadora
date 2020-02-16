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

            setInterval(()=>{

                this.setDisplayDateTime();

            }, 1000);

            /*setTimeout (()=>{ 

                clearInterval(interval);     //executar após 10 segundos, ou seja dps de 10 segundos vai parar a função de cima

            }, 10000);*/
        }

        addEventListenerAll(element, events, fn){

            events.split(' ').forEach(event => {

                element.addEventListener(event, fn, false);
            
            });


        }

        clearAll(){

            this._operation = [];

        }

        clearEntry(){

            this._operation.pop();

        }

        addOperation(value){

            this._operation.push(value);
        }

        setError(){
            this.displayCalc = "Error";
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
    
                    break;
                case 'subtracao':

                    break;
                case 'multiplicacao':

                    break;                    
                case 'divisao':

                    break;
                case 'porcento':

                    break;
                case 'igual':

                    break;

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

           let buttons = document.querySelectorAll("#buttons > g, #parts > g");

           buttons.forEach((btn, index)=>{

                this.addEventListenerAll(btn, "click drag", e =>{

                    //console.log(btn.className.baseVal.replace("btn-", ""));
                    let textBtn = btn.className.baseVal.replace("btn-", "");

                    this.execBtn();

                });

                this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                    btn.style.cursor = "pointer";

                });

            });
        }






        setDisplayDateTime(){

            this.displayDate = this.currentDate.toLocaleDateString(this.locale); //, day='2-digit', month='short', year='numeric' p/ data extensa); // tudo o que for repetido criar método;
            this.displayTime = this.currentDate.toLocaleTimeString(this.locale);

        }

        get displayTime(){

            return this._timeEL.innerHTML;

        }

        set displayTime(value){

            return this._timeEL.innerHTML = value;

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