const tempCels = Number.parseFloat(prompt("Введите количество градусов Целисия"));
let tempFar=(9/5)*tempCels+32;
alert(`${tempCels} градусов Цельсия равны ${tempFar.toFixed(1)} градусов Фаренгейта`);