// Configurar nuestro path
const path = require('path');
// Plugins que descargamos
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    //entrada, elemento principal, punto de entrada.
    entry: './src/index.js',
    // a donde quiero empujar mi proyecto, salida
    output: {
        // saber donde me encuentro, directorio donde esta el proyecto
        // ahí se crea una carpeta dist donde se va guardar nuestro proyecto
        path : path.resolve(__dirname, 'dist'),
        //llamar mi compilado de JS una asignación de nombre, como se va construir
        filename : 'bundle.js',
    },
    // configuración para saber con que archivos vamos a trabajar
    resolve : {
        //extenciones con las que estamos trabajando
        extensions: ['.js','.jsx']
    },
    //modulo donde vamos a tener las reglas de negocio del proyecto
    module : {
        //definimos las reglas por medio de arreglos
        rules : [
            {
                //creamos expresiones regulares para indentificar los archivos
                test : /\.(js|jsx)$/,
                // excluimos la carpeta node_modules
                exclude : /node_modules/,
                // utilizamos el loader de babel
                use : {
                    loader : "babel-loader"
                }
            },
            // Identificar los archivos HTML de nuestro proyecto, entenderlos y prepararlos
            {
                test: /\.html$/,
                // uso del loader que instalamos
                use : {
                    loader : "html-loader"
                }
            }
        ]
    },
    //Agregar plugin que instalamos para entender el archivo index
    // el que vamos a generar en la carpeta dist para enviar a producción
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            // esto se va empujar como:
            filename: "./index.html"
        })
    ]
}