fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
)
  .then((res) => res.json())            
  .then(data => console.log(data));      // получаем JS объект
