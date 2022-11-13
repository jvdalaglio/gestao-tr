const handleSubmit = (event) => {
  event.preventDefault();

  const name = document.querySelector('input[id=inputname1]').value;
  const email = document.querySelector('input[id=exampleInputEmail1]').value;
  const phone = document.querySelector('input[id=exampleInputNumber1]').value;
  const url = document.querySelector('input[id=exampleInputUrl1]').value;
  
  fetch("https://api.sheetmonkey.io/form/aQRjPYnRQLgudEVZk7cBk2", {

    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: name, email: email, phone: phone, url: url, })
  }).then(() => alert("Dados enviados com sucesso!!"));
}

document.querySelector('form').addEventListener('submit', handleSubmit);

