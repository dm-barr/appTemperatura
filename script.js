function calcularSUS() {
    let v = parseFloat(document.getElementById("velocidad").value);
    let t = parseFloat(document.getElementById("temperatura").value);
    let resultado = document.getElementById("resultado");
    let B, SUS;

    if (isNaN(v)){
        resultado.innerText = "Ingrese una velocidad válida";
        return;
    } 

    if (v < 75){
        B = 2e-08 * Math.pow(v, 6)
            - 4e-06 * Math.pow(v, 5)
            + 0.0004 * Math.pow(v, 4)
            - 0.0177 * Math.pow(v, 3)
            + 0.3935 * Math.pow(v, 2)
            + 0.2896 * v
            + 22.465;

        SUS = t * v + B;
    } else {
        if (t === 210) {
            SUS = 4.664 * v;
        } else if (t === 100){
            SUS = 4.632 * v;
        } else {
            resultado.innerText = "Error de temperatura, volver a intentar.";
            return;
        }
    }

    resultado.innerText = `Resultado SUS: ${SUS.toFixed(4)}`;
}