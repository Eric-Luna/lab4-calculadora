$(document).ready(function() {


$(".btn").click(function() {
    console.log(this.innerHTML);
    if(this.innerHTML != '=' && this.innerHTML != 'C' && this.innerHTML != 'Borrar'){
        let txt = $("#calculator-result").val() + this.innerHTML; 
        $("#calculator-result").val(txt);
    }
    else if(this.innerHTML == '='){
        let txt_unmodified = $("#calculator-result").val();
        let txt = $("#calculator-result").val();
        let resultado;
        if(txt.includes("+")){
            txt = txt.split("+");
            resultado = parseFloat(txt[0]) + parseFloat(txt[1]);
        }
        else if(txt.includes("-")){
            txt = txt.split("-");
            resultado = parseFloat(txt[0]) - parseFloat(txt[1]);            
        }
        else if(txt.includes("*")){
            txt = txt.split("*");
            resultado = parseFloat(txt[0]) * parseFloat(txt[1]);            
        }
        else if(txt.includes("/")){
            txt = txt.split("/");
            resultado = parseFloat(txt[0]) / parseFloat(txt[1]);            
        }
        else{
            resultado = "Error";
        }

        if(resultado == "Error"){
            $("#listHistorial").after('<li>' + resultado +'</li>');
        }else{
            $("#listHistorial").after('<li>' + txt_unmodified + ' = ' + resultado + '</li>');
        }
        $("#calculator-result").val(resultado);
    }else if(this.innerHTML == 'Borrar'){
        $('li').remove();
    }
    else{
        $("#calculator-result").val("");
    }
});

});