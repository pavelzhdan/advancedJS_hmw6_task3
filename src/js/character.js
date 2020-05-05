/* eslint-disable no-unused-vars */
/**
 * <Создание объекта персонажа>
 *
 *
 * @param {string} name - Имя создаваемого персонажа
 * @param {string} type - Наименование существующего класса персонажа
 *
 * @throws Выбрасывает ошибку если имя персонажа менее 2 символов или более 10,
 * если такого класса персонажа не существует,
 * если передается не объект string
 */
function Character(name, type) {
  this.name = name;
  this.type = type;
}
