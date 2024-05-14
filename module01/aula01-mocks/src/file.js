const { readFile } = require("fs/promises");
const { error } = require("./constants");
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "nome", "profissao", "idade"],
}

class File {
  static async csvToJson(filePath) {
    const content = await readFile(filePath, "utf8");
    const validation = this.isValid(content);
    if(!validation.valid) throw new Error(validation.error);

  }
  

  static isValid(csvString, options = DEFAULT_OPTION) {
    //para ver o conteudo do arquivo
    // terminal > node fs.readFileSync('./mocks/threeItems-invalid.csv', 'utf8')


    //[0] = header
    //[1] = linha 1
    //[2] = linha 2
    //... variavel = restante do arquivo
    const [headers, ...fileWithoutHeader ] = csvString.split(/\r?\n/);

    //validando se os conteudos do arquivo estão corretos de acordo com o esperado
    const isHeaderValid = headers === options.fields.join(',');
    if(!isHeaderValid){
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false
      };
    }

    if(
      !fileWithoutHeader.length ||
      fileWithoutHeader.length > options.maxLines
    ){
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false
      };
    }


    console.log(headers, fileWithoutHeader)
  }

}

module.exports = File;
