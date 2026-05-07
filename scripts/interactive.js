document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach(initQuiz);
});

function initQuiz(el) {
  const type = el.dataset.type;
  switch (type) {
    case 'choice': QuizChoice(el); break;
    case 'fill-blank': QuizFillBlank(el); break;
    case 'drag-drop': QuizDragDrop(el); break;
    case 'match': QuizMatch(el); break;
    case 'open': QuizOpen(el); break;
    case 'add-own': QuizAddOwn(el); break;
  }
}

function QuizChoice(el) {
  const answer = parseInt(el.dataset.answer, 10);
  const options = el.querySelectorAll('.quiz__options label');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');
  const isMulti = el.dataset.multi === 'true';

  checkBtn.addEventListener('click', () => {
    let selected;
    if (isMulti) {
      selected = Array.from(el.querySelectorAll('.quiz__options input:checked'))
        .map(cb => parseInt(cb.value, 10));
      const correct = String(el.dataset.answer).split(',').map(Number);
      const isCorrect = selected.length === correct.length &&
        correct.every(a => selected.includes(a));
      showFeedback(feedback, isCorrect);
    } else {
      const checked = el.querySelector('.quiz__options input:checked');
      if (!checked) {
        feedback.textContent = 'Оберіть варіант відповіді';
        feedback.className = 'quiz__feedback quiz__feedback--warn';
        return;
      }
      selected = parseInt(checked.value, 10);
      showFeedback(feedback, selected === answer);
    }
    options.forEach((opt, i) => {
      const isCorrectOpt = isMulti
        ? String(el.dataset.answer).split(',').includes(String(i + 1))
        : (i + 1) === answer;
      opt.classList.add(isCorrectOpt ? 'quiz__opt--correct' : 'quiz__opt--wrong');
    });
    checkBtn.disabled = true;
  });
}

function QuizFillBlank(el) {
  const inputs = el.querySelectorAll('.quiz__blank');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;
    inputs.forEach(input => {
      const correct = input.dataset.answer.toLowerCase().trim();
      const userVal = input.value.toLowerCase().trim();
      if (userVal === correct) {
        input.classList.remove('quiz__blank--wrong');
        input.classList.add('quiz__blank--correct');
      } else {
        input.classList.add('quiz__blank--wrong');
        input.classList.remove('quiz__blank--correct');
        allCorrect = false;
      }
    });
    showFeedback(feedback, allCorrect);
  });
}
function QuizMatch(el) {}
function clearLines(el) {}
function drawLines(el, pairs, leftItems, rightItems) {}
function QuizDragDrop(el) {}
function QuizOpen(el) {}
function QuizAddOwn(el) {}

function showFeedback(el, isCorrect) {
  el.textContent = isCorrect ? '✓ Правильно!' : '✗ Спробуйте ще раз';
  el.className = `quiz__feedback quiz__feedback--${isCorrect ? 'success' : 'error'}`;
}