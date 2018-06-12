export const types = {
  LOGIN: 'APP/LOGIN',
  LOGOUT: 'APP/LOGOUT',
  SET_LECTURES: 'APP/SET_LECTURES',
};

export const actions = {
  login: data => ({ type: types.LOGIN, data }),
  logout: () => ({ type: types.LOGOUT }),
  setLectures: () => ({ type: types.SET_LECTURES }),
};

const initialState = {
  token: '',
  profile: {},
  isLoggedIn: false,
  lectures: [
    {
      _id: '21',
      course: '1a',
      subject: 'Mathe',
      pinned: false,
      period: { day: 0, slot: 0 },
      room: 'R1-20',
      teacher: 'L2-Mathe',
    },
    {
      _id: '22',
      course: '1a',
      subject: 'Mathe',
      pinned: false,
      period: { day: 0, slot: 1 },
      room: 'R1-10',
      teacher: 'L2-Mathe',
    },
    {
      _id: '23',
      course: '1a',
      subject: 'Mathe',
      pinned: false,
      period: { day: 1, slot: 1 },
      room: 'R1-20',
      teacher: 'L2-Mathe',
    },
    {
      _id: '24',
      course: '1a',
      subject: 'Mathe',
      pinned: false,
      period: { day: 1, slot: 2 },
      room: 'R1-20',
      teacher: 'L2-Mathe',
    },
    {
      _id: '25',
      course: '1a',
      subject: 'Sport',
      pinned: false,
      period: { day: 0, slot: 3 },
      room: 'SR1-15',
      teacher: 'L1-Sport',
    },
    {
      _id: '26',
      course: '1a',
      subject: 'Sport',
      pinned: false,
      period: { day: 1, slot: 0 },
      room: 'SR1-15',
      teacher: 'L1-Sport',
    },
    {
      _id: '27',
      course: '1a',
      subject: 'Deutsch',
      pinned: false,
      period: { day: 0, slot: 2 },
      room: 'R1-20',
      teacher: 'L2-Mathe',
    },
    {
      _id: '28',
      course: '1a',
      subject: 'Deutsch',
      pinned: false,
      period: { day: 1, slot: 3 },
      room: 'R1-20',
      teacher: 'L2-Mathe',
    },
    {
      _id: '29',
      course: '1b',
      subject: 'Mathe',
      pinned: false,
      period: { day: 0, slot: 0 },
      room: 'R1-10',
      teacher: 'L1-Mathe',
    },
    {
      _id: '30',
      course: '1b',
      subject: 'Mathe',
      pinned: false,
      period: { day: 0, slot: 1 },
      room: 'R1-20',
      teacher: 'L1-Mathe',
    },
    {
      _id: '31',
      course: '1b',
      subject: 'Mathe',
      pinned: false,
      period: { day: 1, slot: 2 },
      room: 'R1-10',
      teacher: 'L1-Mathe',
    },
    {
      _id: '32',
      course: '1b',
      subject: 'Mathe',
      pinned: false,
      period: { day: 1, slot: 3 },
      room: 'R1-10',
      teacher: 'L1-Mathe',
    },
    {
      _id: '33',
      course: '1b',
      subject: 'Sport',
      pinned: false,
      period: { day: 0, slot: 2 },
      room: 'SR1-15',
      teacher: 'L1-Sport',
    },
    {
      _id: '34',
      course: '1b',
      subject: 'Sport',
      pinned: false,
      period: { day: 1, slot: 1 },
      room: 'SR1-15',
      teacher: 'L1-Sport',
    },
    {
      _id: '35',
      course: '1b',
      subject: 'Deutsch',
      pinned: false,
      period: { day: 0, slot: 3 },
      room: 'R1-20',
      teacher: 'L1-Mathe',
    },
    {
      _id: '36',
      course: '1b',
      subject: 'Deutsch',
      pinned: false,
      period: { day: 1, slot: 0 },
      room: 'R1-20',
      teacher: 'L1-Mathe',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        token: action.data.token,
        profile: action.data.profile,
        isLoggedIn: true,
      };
    case types.LOGOUT:
      return {
        token: '',
        profile: {},
        isLoggedIn: false,
      };
    case types.SET_LECTURES:
      return {
        lectures: [],
      };
    default:
      return state;
  }
};
