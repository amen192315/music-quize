const { prisma } = require('../prisma/prisma-client');
const brypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Функция логина пользователя, принимает email и пароль, ищет пользователя по email в базе данных
// Если пользователь найден и пароль верный, возвращает информацию о пользователе, иначе выводит ошибку
/**
 *
 * @route GET /api/user/login
 * @desc Авторизация
 * @access Publick
 *
 */
const login = async (req, res) => {
  //если email или password не введены, то выводим ошибку
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'пожалуйста, заполните обязательные поля ' });
    }
    //находим пользователя по email в базе данных и записываем его в user
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    //проверяем правильность пароля
    const isPasswordCorrect =
      user && (await brypt.compare(password, user.password));
    const secret = process.env.JWT_SECRET;

    if (user && isPasswordCorrect && secret) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        tocken: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
      });
    } else {
      return res
        .status(400)
        .json({ message: 'Неверно введен логин или пароль' });
    }
  } catch (err) {
    res.status(400).json({ message: 'что то пошло не так' });
  }
};

// Функция регистрации пользователя, принимает email, пароль и имя
// Создает нового пользователя в базе данных, если такого email не существует
/**
 *
 * @route GET /api/user/register
 * @desc Регистрация
 * @access Publick
 *
 */
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res
        .sendStatus(400)
        .json({ message: 'Пожалуйста заполните обязательные поля' });
    }

    // ищем пользователя с таким email в базе данных
    const registeredUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    // если пользователь уже существует, выводим ошибку
    if (registeredUser) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким email уже существует' });
    }

    // хешируем пароль перед сохранением в базу данных
    const solt = await brypt.genSalt(10);
    const hashedPassword = await brypt.hash(password, solt);

    // создаем нового пользователя
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    const secret = process.env.JWT_SECRET;

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name,
        tocken: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
      });
    } else {
      return res
        .status(400)
        .json({ message: 'Не удалось создать пользователя' });
    }
  } catch (err) {
    res.status(400).json({ message: 'что то пошло не так' });
  }
};
/**
 *
 * @route GET /api/user/current
 * @desc Текущий пользователь
 * @access Private
 *
 */
const current = async (req, res) => {
  return res.status(200).json(req.user);
};
module.exports = {
  login,
  register,
  current,
};
