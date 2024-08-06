import testLiderazgo from '@static/tests/liderazgo.json'

export const enum TestType {
  LIDERAZGO = 'test_liderazgo',
  CARACTEROGRAMA = 'caracterograma'
}

export const QUESTIONS = {
  [TestType.LIDERAZGO]: testLiderazgo,
  [TestType.CARACTEROGRAMA]: []
}

export const SECTIONS = {
  1: 'PERSONALES',
  2: 'DIRECTIVAS ',
  3: 'LIDERAZGO ',
  4: 'TRABAJO EN EQUIPO'
}

export const AREAS = {
  1: 'Para mejorar tus habilidades sociales',
  2: 'Para controlar el estrés',
  3: 'Para ser más resiliente',
  4: 'Para crecer en inteligencia emocional',
  5: 'Para vivir de modo saludable',

  6: 'Para decidir con acierto',
  7: 'Para gestionar el tiempo con eficacia',
  8: 'Para gestionar proyectos',
  9: 'Para ser un buen negociador',
  10: 'Para dirigir la mercadotecnia y las ventas',

  11: 'Para fortalecer tu autoridad',
  12: 'Para empoderar a tu equipo',
  13: 'Para desarrollar tu espíritu emprendedor',
  14: 'Para ser un buen comunicador',
  15: 'Para formarte en valores y principios',

  16: 'Para gestionar juntas de trabajo',
  17: 'Para realizar presentaciones eficaces',
  18: 'Para manejar y dirimir conflictos',
  19: 'Para gestionar el talento',
  20: 'Para ser coach de tu equipo'
}

export const DIALOGS = {
  paymentForm: 'paymentForm'
}
