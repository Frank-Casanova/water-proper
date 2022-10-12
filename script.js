
function Calcular() {
    var temperatura;
    temperatura = document.getElementById("value_temperatura").value;

    function interpolador(x1,x2,y1,y2,x) {
        y = (x-x1)/(x2-x1)*(y2-y1)+y1
        return y
    }

    if (100 >= temperatura && temperatura >= 0){
        listaTemperaturas = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
        listaDensidades = [999.82,1000,999.97,999.17,998,997,995.71,994,992,990,988,986,984,981,978,975,971,968,965,962,958];
        listaPesoEspecifico = [9.81,9.81,9.81,9.81,9.79,9.78,9.77,9.75,9.73,9.71,9.69,9.67,9.65,9.62,9.59,9.56,9.53,9.5,9.47,9.44,9.4];
        listaViscoDinam = [0.00175,0.00152,0.0013,0.00115,0.00102,0.000891,0.0008,0.000718,0.000651,0.000594,0.000541,0.000498,0.00046,0.000431,0.000402,0.000373,0.00035,0.00033,0.000311,0.000292,0.000282];
        listaViscoCinem = [0.00000175,0.00000152,0.0000013,0.00000115,0.00000102,0.000000894,0.000000803,0.000000722,0.000000656,0.0000006,0.000000548,0.000000505,0.000000467,0.000000439,0.000000411,0.000000383,0.00000036,0.000000341,0.000000322,0.000000304,0.000000294];
    
        for (const [indice, valor] of listaTemperaturas.entries()) {
            if (valor <= temperatura){
                i1 = indice;
            }
            if (valor >= temperatura){
                i2 = indice;
                break;
            }
        }

        if (listaTemperaturas.includes(parseFloat(temperatura))) {
            result_vDin = listaViscoDinam[i1];
            result_vCin = listaViscoCinem[i1];
            result_Densidad = listaDensidades[i1];
            result_pesoEspec = listaPesoEspecifico[i1];
        } else {
            result_vDin = interpolador(listaTemperaturas[i1], listaTemperaturas[i2], listaViscoDinam[i1], listaViscoDinam[i2], temperatura);
            result_vCin = interpolador(listaTemperaturas[i1], listaTemperaturas[i2], listaViscoCinem[i1], listaViscoCinem[i2], temperatura);
            result_Densidad = interpolador(listaTemperaturas[i1], listaTemperaturas[i2], listaDensidades[i1], listaDensidades[i2], temperatura);
            result_pesoEspec = interpolador(listaTemperaturas[i1], listaTemperaturas[i2], listaPesoEspecifico[i1], listaPesoEspecifico[i2], temperatura);
        }
        document.getElementById("VC").innerHTML = result_vCin.toFixed(10);
        document.getElementById("PE").innerHTML = result_pesoEspec.toFixed(3);
        document.getElementById("VD").innerHTML = result_vDin.toFixed(7);
        document.getElementById("DE").innerHTML = result_Densidad.toFixed(3);
    } else {
        var texto_error = "Valor excedido"
        console.log("Hola")
        document.getElementById("VC").innerHTML = texto_error;
        document.getElementById("PE").innerHTML = texto_error;
        document.getElementById("VD").innerHTML = texto_error;
        document.getElementById("DE").innerHTML = texto_error;
    }


}
