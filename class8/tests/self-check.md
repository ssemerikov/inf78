---
title: Самоперевірка — Цифрові пристрої
---

# Самоперевірка — Цифрові пристрої

Перевірте свої знання з теми «Апаратне забезпечення та смарт-технології». Відповідайте на запитання та перевіряйте себе.

---

## Завдання на вибір (QuizChoice)

<div class="quiz" data-type="choice" data-answer="3">
  <p class="quiz__question">Який компонент комп'ютера виконує арифметичні та логічні операції?</p>
  <div class="quiz__options">
    <label><input type="radio" name="sc1" value="1"> Оперативна пам'ять</label>
    <label><input type="radio" name="sc1" value="2"> Материнська плата</label>
    <label><input type="radio" name="sc1" value="3"> Процесор</label>
    <label><input type="radio" name="sc1" value="4"> Блок живлення</label>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="choice" data-answer="2">
  <p class="quiz__question">Який тип пам'яті є енергозалежним, тобто дані зникають після вимкнення живлення?</p>
  <div class="quiz__options">
    <label><input type="radio" name="sc2" value="1"> HDD</label>
    <label><input type="radio" name="sc2" value="2"> RAM (DDR5)</label>
    <label><input type="radio" name="sc2" value="3"> NVMe SSD</label>
    <label><input type="radio" name="sc2" value="4"> Флеш-накопичувач</label>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="choice" data-answer="4">
  <p class="quiz__question">Що позначає техпроцес процесора, вимірюваний у нанометрах (нм)?</p>
  <div class="quiz__options">
    <label><input type="radio" name="sc3" value="1"> Максимальну тактову частоту</label>
    <label><input type="radio" name="sc3" value="2"> Кількість транзисторів</label>
    <label><input type="radio" name="sc3" value="3"> Розмір кристала процесора</label>
    <label><input type="radio" name="sc3" value="4"> Мінімальний розмір елемента на кристалі</label>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="choice" data-answer="1">
  <p class="quiz__question">Який рівень кеш-пам'яті процесора є найшвидшим?</p>
  <div class="quiz__options">
    <label><input type="radio" name="sc4" value="1"> L1</label>
    <label><input type="radio" name="sc4" value="2"> L2</label>
    <label><input type="radio" name="sc4" value="3"> L3</label>
    <label><input type="radio" name="sc4" value="4"> RAM</label>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="choice" data-answer="3">
  <p class="quiz__question">Який протокол IoT забезпечує дальній радіус дії (до 15 км) при низькій швидкості передачі?</p>
  <div class="quiz__options">
    <label><input type="radio" name="sc5" value="1"> Wi-Fi</label>
    <label><input type="radio" name="sc5" value="2"> Bluetooth</label>
    <label><input type="radio" name="sc5" value="3"> LoRaWAN</label>
    <label><input type="radio" name="sc5" value="4"> Zigbee</label>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

---

## Знайдіть пари (QuizMatch)

<div class="quiz" data-type="match" data-pairs='{"сокет":"процесор","чипсет":"керує обміном","pcie":"відеокарта","m2":"nvme ssd","sata":"hdd"}'>
  <p class="quiz__question">Знайдіть пари: елемент материнської плати → його призначення</p>
  <div class="quiz__match-container">
    <svg class="quiz__match-svg"></svg>
    <div class="quiz__match-left">
      <div class="quiz__match-item" data-id="сокет">Сокет (Socket)</div>
      <div class="quiz__match-item" data-id="чипсет">Чипсет</div>
      <div class="quiz__match-item" data-id="pcie">Слот PCIe x16</div>
      <div class="quiz__match-item" data-id="m2">M.2 слот</div>
      <div class="quiz__match-item" data-id="sata">SATA порт</div>
    </div>
    <div class="quiz__match-right">
      <div class="quiz__match-item" data-id="процесор">Гніздо для процесора</div>
      <div class="quiz__match-item" data-id="керує обміном">Керує обміном даними між складовими</div>
      <div class="quiz__match-item" data-id="відеокарта">Підключення відеокарти</div>
      <div class="quiz__match-item" data-id="nvme ssd">Швидкий NVMe SSD</div>
      <div class="quiz__match-item" data-id="hdd">Підключення HDD або SATA SSD</div>
    </div>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

---

## Перетягніть елементи (QuizDragDrop)

<div class="quiz" data-type="drag-drop">
  <p class="quiz__question">Розмістіть типи пам'яті у порядку зростання часу доступу (від найшвидшої до найповільнішої)</p>
  <div class="quiz__drag-bank">
    <div class="quiz__drag-item" data-id="hdd">HDD</div>
    <div class="quiz__drag-item" data-id="l1">Кеш L1</div>
    <div class="quiz__drag-item" data-id="ram">RAM DDR5</div>
    <div class="quiz__drag-item" data-id="nvmessd">NVMe SSD</div>
    <div class="quiz__drag-item" data-id="l3">Кеш L3</div>
  </div>
  <div class="quiz__drop-zones">
    <div class="quiz__drop-zone" data-accept="l1">1 (найшвидша): </div>
    <div class="quiz__drop-zone" data-accept="l3">2: </div>
    <div class="quiz__drop-zone" data-accept="ram">3: </div>
    <div class="quiz__drop-zone" data-accept="nvmessd">4: </div>
    <div class="quiz__drop-zone" data-accept="hdd">5 (найповільніша): </div>
  </div>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

---

## Заповніть пропуски (QuizFillBlank)

<div class="quiz" data-type="fill-blank">
  <p class="quiz__question">Кількість ядер процесора визначає, скільки <input class="quiz__blank" data-answer="потоків"> даних він може обробляти паралельно.</p>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="fill-blank">
  <p class="quiz__question">Мікропрограма, яка ініціалізує обладнання при вмиканні комп'ютера та дозволяє налаштувати параметри роботи, називається <input class="quiz__blank" data-answer="BIOS"> (або UEFI).</p>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="fill-blank">
  <p class="quiz__question">Технології, що використовують вбудовані мікропроцесори, датчики та підключення до мережі для інтелектуального функціонування пристроїв, називають <input class="quiz__blank" data-answer="смарт-технології">.</p>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="fill-blank">
  <p class="quiz__question">Два коротких сигнали BIOS (beep-коди) під час вмикання свідчать про помилку <input class="quiz__blank" data-answer="оперативної пам'яті">.</p>
  <button class="quiz__check btn btn--primary">Перевірити</button>
  <div class="quiz__feedback"></div>
</div>

---

## Відкриті запитання (QuizOpen)

<div class="quiz" data-type="open">
  <p class="quiz__question">Поясніть, що таке тактова частота процесора і як вона впливає на продуктивність.</p>
  <textarea class="quiz__textarea" placeholder="Ваша відповідь..."></textarea>
  <button class="quiz__check btn btn--primary">Показати еталон</button>
  <div class="quiz__reference">Тактова частота — кількість елементарних операцій (тактів), що виконує процесор за одну секунду. Вимірюється в гігагерцах (ГГц). Наприклад, частота 3,4 ГГц означає 3,4 мільярда тактів за секунду. Чим вища тактова частота, тим швидше процесор виконує послідовні операції. Проте продуктивність залежить не лише від частоти, а й від кількості ядер, об'єму кеш-пам'яті та архітектури процесора.</div>
  <div class="quiz__feedback"></div>
</div>

<div class="quiz" data-type="open">
  <p class="quiz__question">Опишіть різницю між RAM та SSD. Чому комп'ютеру потрібні обидва типи пам'яті?</p>
  <textarea class="quiz__textarea" placeholder="Ваша відповідь..."></textarea>
  <button class="quiz__check btn btn--primary">Показати еталон</button>
  <div class="quiz__reference">RAM (оперативна пам'ять) — енергозалежна пам'ять для тимчасового зберігання даних та програм, з якими процесор працює прямо зараз. Вона дуже швидка (час доступу 10–50 нс), але дані зникають після вимкнення комп'ютера. SSD (постійна пам'ять) — енергонезалежна пам'ять для тривалого зберігання файлів, програм та операційної системи. SSD повільніша за RAM (0,02–0,1 мс), але зберігає дані без живлення. Комп'ютеру потрібні обидва типи: RAM забезпечує високошвидкісний доступ до активних даних для процесора, а SSD — надійне зберігання всієї інформації між сеансами роботи.</div>
  <div class="quiz__feedback"></div>
</div>

---

## Додайте свої варіанти (QuizAddOwn)

<div class="quiz" data-type="add-own">
  <p class="quiz__question">Назвіть сфери застосування Інтернету речей (IoT), які ви знаєте.</p>
  <div class="quiz__add-row">
    <input class="quiz__add-input" placeholder="Введіть сферу...">
    <button class="quiz__add-btn btn btn--secondary">Додати</button>
  </div>
  <ul class="quiz__add-list"></ul>
  <div class="quiz__reference">Еталон: розумний будинок, розумне місто, промисловий IoT (IIoT), сільське господарство, охорона здоров'я, транспорт, роздрібна торгівля, енергетика</div>
</div>