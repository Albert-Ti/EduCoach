import { CoachCard } from '../types'

export const cardList: CoachCard[] = [
  {
    id: 1,
    firstName: 'Иван',
    lastName: 'Петров',
    age: 32,
    gender: 'мужской',
    password: '12345',
    portfolio: ['./example-avatar.jpeg'],
    specialties: ['функциональный тренинг', 'кардио', 'питание'],
    certifications: ['ACE Personal Trainer', 'CPR/AED Certified'],
    experienceYears: 8,
    contactInfo: {
      email: 'ivanpetrov@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Москва, Россия',
    },
    availableHours: ['Понедельник 18:00-20:00', 'Среда 16:00-19:00', 'Пятница 10:00-12:00'],
    comments: ['Отличный тренер!', 'Всегда мотивирует к лучшим результатам'],
    rating: 4.8,
    status: 'busy',
  },
  {
    id: 2,
    firstName: 'Елена',
    lastName: 'Сидорова',
    age: 28,
    gender: 'женский',
    password: '12345',
    portfolio: [''],
    specialties: ['пилатес', 'йога', 'силовые тренировки'],
    certifications: ['Pilates Instructor Certification', 'Yoga Alliance Certified'],
    experienceYears: 5,
    contactInfo: {
      email: 'elenasidorova@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Санкт-Петербург, Россия',
    },
    availableHours: ['Вторник 9:00-11:00', 'Четверг 17:00-19:00', 'Суббота 13:00-15:00'],
    comments: [
      'Профессионал своего дела!',
      'Замечательный инструктор!',
      'Тренировки с ней - настоящее удовольствие',
      'Отличный опыт работы!',
      'У нее такое спокойное и умиротворенное настроение',
    ],
    rating: 4.9,
    status: 'available',
  },
  {
    id: 3,
    firstName: 'Александр',
    lastName: 'Иванов',
    age: 35,
    gender: 'мужской',
    password: '12345',
    portfolio: [''],
    specialties: ['бег', 'стретчинг', 'тайский бокс'],
    certifications: ['Certified Running Coach', 'Thai Boxing Instructor'],
    experienceYears: 10,
    contactInfo: {
      email: 'alexivanov@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Екатеринбург, Россия',
    },
    availableHours: ['Понедельник 8:00-10:00', 'Среда 14:00-16:00', 'Пятница 18:00-20:00'],
    comments: ['Очень понимающий и дружелюбный тренер'],
    rating: 4.7,
    status: 'available',
  },
  {
    id: 4,
    firstName: 'Мария',
    lastName: 'Козлова',
    age: 30,
    gender: 'женский',
    password: '12345',
    portfolio: [''],
    specialties: ['аквааэробика', 'фитнес для беременных', 'спортивный массаж'],
    certifications: [
      'Aqua Aerobics Instructor Certification',
      'Pre and Postnatal Exercise Specialist',
    ],
    experienceYears: 7,
    contactInfo: {
      email: 'mariakozlova@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Новосибирск, Россия',
    },
    availableHours: ['Вторник 16:00-18:00', 'Четверг 10:00-12:00', 'Суббота 9:00-11:00'],
    comments: ['Отличный выбор для беременных!', 'Очень внимательная и заботливая тренер'],
    rating: 4.9,
    status: 'busy',
  },
  {
    id: 5,
    firstName: 'Дмитрий',
    lastName: 'Смирнов',
    age: 33,
    gender: 'мужской',
    password: '12345',
    portfolio: [''],
    specialties: ['функциональный тренинг', 'кардио', 'питание'],
    certifications: ['Functional Training Specialist', 'Nutrition Coach'],
    experienceYears: 9,
    contactInfo: {
      email: 'dmitriysmirnov@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Краснодар, Россия',
    },
    availableHours: ['Понедельник 14:00-16:00', 'Среда 10:00-12:00', 'Пятница 16:00-18:00'],
    comments: ['Профессиональный подход!', 'Очень рекомендую этого тренера'],
    rating: 4.8,
    status: 'offline',
  },
  {
    id: 6,
    firstName: 'Анна',
    lastName: 'Павлова',
    age: 27,
    gender: 'женский',
    password: '12345',
    portfolio: [''],
    specialties: ['йога', 'пилатес', 'дыхательные практики'],
    certifications: ['Yoga Teacher Training', 'Pilates Instructor Certification'],
    experienceYears: 6,
    contactInfo: {
      email: 'annapavlova@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Самара, Россия',
    },
    availableHours: ['Вторник 18:00-20:00', 'Четверг 14:00-16:00', 'Суббота 11:00-13:00'],
    comments: [],
    rating: 0,
    status: 'available',
  },
  {
    id: 7,
    firstName: 'Алексей',
    lastName: 'Николаев',
    age: 36,
    gender: 'мужской',
    password: '12345',
    portfolio: [''],
    specialties: ['силовые тренировки', 'фитнес-бокс', 'кардио-тренировки'],
    certifications: ['Strength and Conditioning Specialist', 'Boxing Fitness Instructor'],
    experienceYears: 11,
    contactInfo: {
      email: 'alexeinikolaev@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Казань, Россия',
    },
    availableHours: ['Понедельник 9:00-11:00', 'Среда 17:00-19:00', 'Пятница 13:00-15:00'],
    comments: ['Любимый тренер всех времен!', 'Мотивирует даже в самые тяжелые дни'],
    rating: 5.0,
    status: 'available',
  },
  {
    id: 8,
    firstName: 'Светлана',
    lastName: 'Кузнецова',
    age: 31,
    gender: 'женский',
    password: '12345',
    portfolio: [''],
    specialties: ['плавание', 'аэробика', 'стретчинг'],
    certifications: ['Swim Coach Certification', 'Aerobics Instructor Certification'],
    experienceYears: 8,
    contactInfo: {
      email: 'svetlanakuznetsova@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Ростов-на-Дону, Россия',
    },
    availableHours: ['Вторник 11:00-13:00', 'Четверг 16:00-18:00', 'Суббота 14:00-16:00'],
    comments: ['Профессионал в своем деле!', 'Тренировки с ней просто замечательные'],
    rating: 4.9,
    status: 'available',
  },
  {
    id: 9,
    firstName: 'Петр',
    lastName: 'Семенов',
    age: 34,
    gender: 'мужской',
    password: '12345',
    portfolio: [''],
    specialties: ['функциональный тренинг', 'кардио', 'питание'],
    certifications: ['Functional Fitness Trainer Certification', 'Nutrition Specialist'],
    experienceYears: 7,
    contactInfo: {
      email: 'petrsemenov@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Волгоград, Россия',
    },
    availableHours: ['Понедельник 16:00-18:00', 'Среда 12:00-14:00', 'Пятница 8:00-10:00'],
    comments: ['Отличный специалист!', 'Очень рекомендую его занятия'],
    rating: 4.8,
    status: 'available',
  },
  {
    id: 10,
    firstName: 'Наталья',
    lastName: 'Иванова',
    age: 29,
    gender: 'женский',
    password: '12345',
    portfolio: [''],
    specialties: ['танцевальные тренировки', 'стретчинг', 'фитнес для детей'],
    certifications: ['Dance Fitness Instructor Certification', "Children's Fitness Specialist"],
    experienceYears: 6,
    contactInfo: {
      email: 'natalyaivanova@example.com',
      phone: '+7 (XXX) XXX-XXXX',
      location: 'Пермь, Россия',
    },
    availableHours: ['Понедельник 12:00-14:00', 'Среда 18:00-20:00', 'Пятница 14:00-16:00'],
    comments: ['Замечательный тренер для детей!', 'Дети всегда ждут его занятий с нетерпением'],
    rating: 4.9,
    status: 'available',
  },
]
