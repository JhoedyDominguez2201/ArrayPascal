function crear() {
    var tamaño = document.getElementById('txt').value;
    var matriz = new Array();

    matriz[0] = new Array(1);
    matriz[0][0] = 1;
    matriz[1] = new Array(2);
    matriz[1][0] = 1;
    matriz [1][1] = 1;

    for (var n = 2; n < tamaño; n++) {
        matriz[n] = new Array(matriz[n - 1].length + 1);
        matriz[n][0] = 1;
        matriz[n][matriz[n].length - 1] = 1;

        for (var i = 1; i < matriz[n].length - 1; i++) {
            matriz[n][i] = matriz[n - 1][i - 1] + matriz[n - 1][i];

        }
    }

    for (var n = 0; n < tamaño; n++) {
        for (var i = 0; i < matriz[n].length; i++) {
            document.write(matriz[n][i] + " ");


        }
        document.write("<br>")

    }
}