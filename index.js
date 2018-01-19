'use strict';

var characterMap = {
    'А':'A',
    'а':'a',
    'Б':'B',
    'б':'b',
    'В':'V',
    'в':'v',
    'Г':'G', 
    'г':'g',
    'Ґ':'G',
    'ґ':'g',
    'Д':'D',
    'д':'d',
    'Е':'E',
    'е':'e',
    'Ё':'E',
    'ё':'e',
    'Ж':'Zh',
    'ж':'zh',
    'Ž':'Zh',
    'ž':'zh',
    'З':'Z',
    'з':'z',
    'Ź':'Z',
    'ź':'z',
    'И':'I',
    'и':'i',
    'І':'I',
    'і':'i',
    'Й':'Y',
    'й':'y',
    'К':'K',
    'к':'k',
    'Л':'L',
    'л':'l',
    'Ł':'L',
    'ł':'l',
    'М':'M',
    'м':'m',
    'Н':'N',
    'н':'n',
    'О':'O',
    'о':'o',
    'П':'P',
    'п':'p',
    'Р':'R',
    'р':'r',
    'С':'S',
    'с':'s',
    'Т':'T',
    'т':'t',
    'У':'U',
    'у':'u',
    'Ў':'U',
    'ў':'u',
    'Ŭ':'U',
    'ŭ':'u',
    'Ф':'F',
    'ф':'f',
    'Х':'H',
    'х':'h',
    'Ц':'C',
    'ц':'c',
    'Ч':'Ch',
    'ч':'ch',
    'Č':'Ch',
    'č':'ch',
    'Ш':'Sh',
    'ш':'sh',
    'Š':'Sh',
    'š':'sh',
    'Щ':'Shch',
    'щ':'shch',
    'Ы':'Y',
    'ы':'y',
    'Э':'E',
    'э':'e',
    'Ю':'Yu',
    'ю':'yu',
    'Я':'Ya',
    'я':'ya',
    // Не транслитерируются
    'Ь':'',
    'ь':'',
    'Ъ':'',
    'ъ':'',
    "'":'',
    '’':'',
    // специальные
    '№':'#'
  };


function toASCII(string)
{

  if (string === null || string === undefined) {
    return string;
  }

  if (typeof string !== 'string') {
    throw new TypeError('Unmatched type: please use a string.');
  }
  
  return string.split('').map(function (character) {
    if (character.charCodeAt(0) > 127) {
      return typeof characterMap[character] !== 'undefined' ?
        characterMap[character] : '-';
    } else {
      return character;
    }
  }).join('');
}


module.exports = { 'toASCII': toASCII };
