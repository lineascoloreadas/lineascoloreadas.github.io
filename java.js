let edad = Number(prompt("Dime tu edad"))
if (edad >= 18) {
  alert("Tienes acceso a la pagina web");
}
else {
   alert("Te recomiendo que no veas la página");
}



document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtener datos del formulario
  const formData = new FormData(this);
  let score = 0;
  let userAnswers = []; // Almacenar las respuestas marcadas por el usuario
  let correctAnswers = [
    { id: 'q1', answer: 'd', text: 'd) Un adjetivo que se usa para calificar a aquel suceso que no puede ser explicado por la ciencia.Suceso relacionado con los fantasmas.' },
    { id: 'q2', answer: 'c', text: 'c) Parapsicología' },
    { id: 'q3', answer: 'b', text: 'b) la biología, la medicina o la física.' },
    { id: 'q4', answer: 'a', text: 'a) Ya que su aceptación como real obligaría a modificar y actualizar las teorías de estas ciencias.' },
    { id: 'q5', answer: 'b', text: 'b) un diario local en noviembre de 1971.' },
    { id: 'q6', answer: 'b', text: 'b) Universidad de Ohio.' },
    { id: 'q7', answer: 'b', text: 'b) Ronald DeFeo Jr.' },
    { id: 'q8', answer: 'd', text: 'd) Un documento digital que vincula la identidad de un sujeto con una clave pública.' }
  ]
  // Contar el número total de preguntas
  const numQuestions = document.querySelectorAll('.question').length;
  // Chequear las respuestas y recoger las respuestas marcadas por el usuario
  for (let i = 1; i <= numQuestions; i++) {
    const questionId = 'q' + i;
    const userAnswer = formData.get(questionId);
    userAnswers.push(userAnswer);
    const correctAnswer = correctAnswers.find(answer => answer.id === questionId).answer;
    if (userAnswer === correctAnswer) { // Comparar la respuesta del usuario con la respuesta correcta
      score++;
    }
  }

  // Mostrar resultados y respuestas
  const resultsDiv = document.getElementById('results');
  let resultsHTML = `<p>Has obtenido ${score === 1 ? '1 punto' : score + ' puntos'} de un total de ${numQuestions}.</p>`;
  for (let i = 0; i < numQuestions; i++) {
    const questionId = 'q' + (i + 1);
    const userAnswerText = formData.get(questionId);
    const correctAnswer = correctAnswers.find(answer => answer.id === questionId);
    resultsHTML += `<p>Pregunta ${i + 1}: Tu respuesta fue ${userAnswerText}, la respuesta correcta era ${correctAnswer.text}</p>`;
  }
  resultsDiv.innerHTML = resultsHTML;
});

// Utilizar el botón de reinicio
document.getElementById('resetButton').addEventListener('click', function(event) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Borrar los resultados mostrados
});

