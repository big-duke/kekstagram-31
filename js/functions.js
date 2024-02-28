/* eslint-disable no-unused-vars */
function checkStringLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();

  // Создаем пустую строку для хранения перевернутой версии
  let reversedStr = '';

  // Итерируем с конца к началу, добавляя каждый символ в обратном порядке
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }

  // Сравниваем исходную нормализованную строку с её перевёрнутой версией
  return normalizedStr === reversedStr;
}

function extractDigits(input) {
  let result = '';
  const str = input.toString(); // Преобразуем в строку, если передано число
  for (let i = 0; i < str.length; i++) {
    // Проверяем, является ли текущий символ цифрой от 0 до 9
    const currentNumChar = parseInt(str[i], 10);
    if (!Number.isNaN(currentNumChar)) {
      result += str[i];
    }
  }

  // Если результат не пустой, преобразуем его в целое число
  // Иначе возвращаем NaN
  return result.length > 0 ? parseInt(result, 10) : NaN;
}

function convertTimeToMinutes(time) {
  const arTime = time.split(':');
  const hour = arTime[0];
  const minutes = arTime[1];
  return Number(hour) * 60 + Number(minutes);
}

function checkMeeting (workdayStart, workdayEnd, meetingStart, meetingDuration) {
  const workdayStartMinutes = convertTimeToMinutes(workdayStart);
  const workdayEndMinutes = convertTimeToMinutes(workdayEnd);
  const meetingStartMinutes = convertTimeToMinutes(meetingStart);

  return (
    meetingStartMinutes >= workdayStartMinutes && meetingStartMinutes + meetingDuration <= workdayEndMinutes
  );
}

console.log(checkMeeting('08:00', '17:30', '14:00', 90));// true
console.log(checkMeeting('8:0', '10:0', '8:0', 120)); // true
console.log(checkMeeting('08:00', '14:30', '14:00', 90)); // false
console.log(checkMeeting('14:00', '17:30', '08:0', 90)); // false
console.log(checkMeeting('8:00', '17:30', '08:00', 900)); // false
