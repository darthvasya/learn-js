function loadPhones() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'files/test.json', false);
  xhr.send();

  if (xhr.status != 200) {
    // обработать ошибку
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {
    // вывести результат
    alert(xhr.responseText);
  }
}
