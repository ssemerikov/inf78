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
function QuizMatch(el) {
  const leftItems = el.querySelectorAll('.quiz__match-left .quiz__match-item');
  const rightItems = el.querySelectorAll('.quiz__match-right .quiz__match-item');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');
  const pairs = {};
  let selectedLeft = null;

  leftItems.forEach(item => {
    item.addEventListener('click', () => {
      leftItems.forEach(i => i.classList.remove('quiz__match-item--selected'));
      item.classList.add('quiz__match-item--selected');
      selectedLeft = item.dataset.id;
    });
  });

  rightItems.forEach(item => {
    item.addEventListener('click', () => {
      if (!selectedLeft) return;
      rightItems.forEach(i => i.classList.remove('quiz__match-item--selected'));
      item.classList.add('quiz__match-item--selected');
      pairs[selectedLeft] = item.dataset.id;
      leftItems.forEach(i => {
        if (i.dataset.id === selectedLeft) i.classList.add('quiz__match-item--paired');
      });
      item.classList.add('quiz__match-item--paired');
      selectedLeft = null;
      clearLines(el);
      drawLines(el, pairs, leftItems, rightItems);
    });
  });

  checkBtn.addEventListener('click', () => {
    const correctPairs = JSON.parse(el.dataset.pairs);
    let allCorrect = true;
    for (const [leftId, rightId] of Object.entries(correctPairs)) {
      if (pairs[leftId] !== rightId) {
        allCorrect = false;
        break;
      }
    }
    showFeedback(feedback, allCorrect);
  });
}

function clearLines(el) {
  el.querySelectorAll('.quiz__match-line').forEach(l => l.remove());
}

function drawLines(el, pairs, leftItems, rightItems) {
  const svg = el.querySelector('.quiz__match-svg');
  if (!svg) return;
  const svgRect = svg.getBoundingClientRect();
  for (const [leftId, rightId] of Object.entries(pairs)) {
    const left = el.querySelector(`.quiz__match-left .quiz__match-item[data-id="${leftId}"]`);
    const right = el.querySelector(`.quiz__match-right .quiz__match-item[data-id="${rightId}"]`);
    if (!left || !right) continue;
    const lRect = left.getBoundingClientRect();
    const rRect = right.getBoundingClientRect();
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', lRect.right - svgRect.left);
    line.setAttribute('y1', lRect.top + lRect.height / 2 - svgRect.top);
    line.setAttribute('x2', rRect.left - svgRect.left);
    line.setAttribute('y2', rRect.top + rRect.height / 2 - svgRect.top);
    line.setAttribute('class', 'quiz__match-line');
    line.setAttribute('stroke', '#6b21a8');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
  }
}
function QuizDragDrop(el) {
  const draggables = el.querySelectorAll('.quiz__drag-item');
  const zones = el.querySelectorAll('.quiz__drop-zone');
  const checkBtn = el.querySelector('.quiz__check');
  const feedback = el.querySelector('.quiz__feedback');

  draggables.forEach(item => {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', item.dataset.id);
      item.classList.add('quiz__drag-item--dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('quiz__drag-item--dragging');
    });
  });

  zones.forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.classList.add('quiz__drop-zone--over');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('quiz__drop-zone--over');
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('quiz__drop-zone--over');
      const dragId = e.dataTransfer.getData('text/plain');
      const dragItem = el.querySelector(`.quiz__drag-item[data-id="${dragId}"]`);
      if (dragItem) {
        if (zone.firstChild && zone.firstChild.classList.contains('quiz__drag-item')) {
          const parent = dragItem.parentElement;
          if (parent.classList.contains('quiz__drop-zone')) {
            parent.appendChild(zone.firstChild);
          } else {
            el.querySelector('.quiz__drag-bank').appendChild(zone.firstChild);
          }
        }
        zone.appendChild(dragItem);
      }
    });
  });

  checkBtn.addEventListener('click', () => {
    let allCorrect = true;
    zones.forEach(zone => {
      const item = zone.querySelector('.quiz__drag-item');
      if (item && item.dataset.id === zone.dataset.accept) {
        zone.classList.add('quiz__drop-zone--correct');
        zone.classList.remove('quiz__drop-zone--wrong');
      } else {
        zone.classList.add('quiz__drop-zone--wrong');
        zone.classList.remove('quiz__drop-zone--correct');
        allCorrect = false;
      }
    });
    showFeedback(feedback, allCorrect);
  });
}
function QuizOpen(el) {}
function QuizAddOwn(el) {}

function showFeedback(el, isCorrect) {
  el.textContent = isCorrect ? '✓ Правильно!' : '✗ Спробуйте ще раз';
  el.className = `quiz__feedback quiz__feedback--${isCorrect ? 'success' : 'error'}`;
}