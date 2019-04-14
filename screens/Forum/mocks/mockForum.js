const forum = {
  id1: {
    title: '21 группа',
    description: 'Обсуждение дел семейных',
    messages: [
      {
        _id: 3,
        text: 'Прогульщик чёртов!!',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'Чернышёв Олег',
          avatar: 'https://pp.userapi.com/c845123/v845123194/68349/nAIAdH53t90.jpg?ava=1'
        }
      },
      {
        _id: 2,
        text: 'Я пошёл домой',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Ковалевский артём',
          avatar: 'https://vk.com/images/camera_50.png?ava=1'
        }
      },
      {
        _id: 1,
        text: 'После пар собираемся',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Сергей Владимирович',
          avatar: 'https://sdo.vsu.by/pluginfile.php/19/user/icon/lms_vsu/f1?rev=997133'
        }
      }
    ]
  },
  id2: {
    title: 'Хакатон',
    description: 'Хакатон ВГУ Машерова 2019',
    messages: [
      {
        _id: 4,
        text: 'Я залью расписания. Только замокаю его',
        createdAt: new Date(),
        user: {
          _id: 5,
          name: 'Илья Морозов',
          avatar: 'https://pp.userapi.com/c625328/v625328107/3307e/KU0q4-peroM.jpg?ava=1'
        }
      },
      {
        _id: 3,
        text: 'А нормально нельзя сделать????',
        createdAt: new Date(),
        user: {
          _id: 4,
          name: 'Валера битковский',
          avatar: 'https://pp.userapi.com/c850436/v850436173/3008c/4w5u3L77SNE.jpg?ava=1'
        }
      },
      {
        _id: 2,
        text: 'Пацаны, я сделал бэк',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Ковалевский артём',
          avatar: 'https://vk.com/images/camera_50.png?ava=1'
        }
      },
      {
        _id: 1,
        text: 'А почему это вы все ушли?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Сергей Владимирович',
          avatar: 'https://sdo.vsu.by/pluginfile.php/19/user/icon/lms_vsu/f1?rev=997133'
        }
      }
    ]
  }
};

export default forum;
