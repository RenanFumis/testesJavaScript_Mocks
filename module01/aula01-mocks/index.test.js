const { error } = require('./src/constants');
const File = require('./src/file');
const assert = require('assert');

//IFEE
;(async () => {
  //variáveis criadas nesse bloco, só são validas durante a execução do bloco
  {
    const filePath = './mock/emptyFile-invalid.csv';
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mock/invalid-header.csv';
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mock/fiveItems-invalid.csv';
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mock/threeItems-valid.csv';
    const expected = [
      {
      id: 1,
      nome: 'Yusuke',
      profissao: 'Detetive',
      idade: 14
    },
    {
      id: 2,
      nome: 'Kurama',
      profissao: 'Estudante',
      idade: 14
    },
    {
      id: 3,
      nome: 'Hiei',
      profissao: 'Estudante',
      idade: 14
    },
  ]
    const result = await File.csvToJSON(filePath);
    assert.deepEqual(result, expected);
  }

})()