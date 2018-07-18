import { create, set, add } from "../semester";
import moment from 'moment';
import { pipe } from "../util";

function blank() {
  return {
    id: 'newId',
    name: 'MyName',
    students: [],
    groups: [],
    availabilities: [],
    holidays: [],
    vacations: [],
    normalLessons: [],
    makeupLessons: [],
    groupLessons: [],
    moveRequests: [],
  }
}

describe('function newSemester', () => {
  it('generates an empty semester', () => {
    let semester = create(blank().name);

    expect(semester.name).toEqual(blank().name);
    expect(semester.students).toEqual(blank().students);
    expect(semester.groups).toEqual(blank().groups);
    expect(semester.availabilities).toEqual(blank().availabilities);
    expect(semester.holidays).toEqual(blank().holidays);
    expect(semester.vacations).toEqual(blank().vacations);
    expect(semester.normalLessons).toEqual(blank().normalLessons);
    expect(semester.makeupLessons).toEqual(blank().makeupLessons);
    expect(semester.groupLessons).toEqual(blank().groupLessons);
    expect(semester.moveRequests).toEqual(blank().moveRequests);
  });
});

describe('function set', () => {
  describe('setting students', () => {
    const NEW_STUDENTS = [{ id: 'test1' }, { id: 'test2' }];

    let start = blank();
    let semester = set('students', NEW_STUDENTS)(start);

    it('does not mutate', () => {
      expect(start).toEqual(blank());
    });

    it('replaces the students array', () => {
      expect(semester.students).toEqual(NEW_STUDENTS);
    });

    it('leaves everything else alone', () => {
      expect(semester.name).toEqual(blank().name);
      expect(semester.groups).toEqual(blank().groups);
      expect(semester.availabilities).toEqual(blank().availabilities);
      expect(semester.holidays).toEqual(blank().holidays);
      expect(semester.vacations).toEqual(blank().vacations);
      expect(semester.normalLessons).toEqual(blank().normalLessons);
      expect(semester.makeupLessons).toEqual(blank().makeupLessons);
      expect(semester.groupLessons).toEqual(blank().groupLessons);
      expect(semester.moveRequests).toEqual(blank().moveRequests);
    });
  });

  it('sets groups', () => {
    const GROUPS = [
      { id: 'group1', name: 'MyGroup1', studentIds: ['test1', 'test2'] },
      { id: 'group2', name: 'MyGroup2', studentIds: ['test3'] },
    ];

    let start = blank();
    let semester = set('groups', GROUPS)(start);

    expect(semester.groups).toEqual(GROUPS);
  });

  it('sets availabilities', () => {
    const AVAILABILITIES = [
      { id: 'availability1', description: 'Payson', timeSpan: { start: moment(), duration: 45, unit: 'minutes' } },
      { id: 'availability2', description: 'Payson', timeSpan: { start: moment(), duration: 30, unit: 'minutes' } },
    ];

    let start = blank();
    let semester = set('availabilities', AVAILABILITIES)(start);

    expect(semester.availabilities).toEqual(AVAILABILITIES);
  });

  it('sets holidays', () => {
    const HOLIDAYS = [
      { id: 'holiday1', description: 'Christmas', day: moment() },
      { id: 'holiday2', description: 'New Year\'s', day: moment() },
    ];

    let start = blank();
    let semester = set('holidays', HOLIDAYS)(start);

    expect(semester.holidays).toEqual(HOLIDAYS);
  });

  it('sets vacations', () => {
    const VACATIONS = [
      { id: 'vacation1', description: 'Mountains and Strings', timeSpan: { start: moment(), duration: 45, unit: 'minutes' } },
      { id: 'vacation2', description: 'OTS Tour', timeSpan: { start: moment(), duration: 30, unit: 'minutes' } },
    ];

    let start = blank();
    let semester = set('vacations', VACATIONS)(start);

    expect(semester.vacations).toEqual(VACATIONS);
  });

  it('sets moveRequests', () => {
    const MOVE_REQUESTS = [
      { id: 'request1', lessonId: 'lesson1', targetStart: moment() },
      { id: 'request2', lessonId: 'lesson2', targetStart: moment() },
    ];

    let start = blank();
    let semester = set('moveRequests', MOVE_REQUESTS)(start);

    expect(semester.moveRequests).toEqual(MOVE_REQUESTS);
  });
});

describe('function add', () => {
  describe('adding students', () => {
    const STUDENT_1 = { id: 'test1' };
    const STUDENT_2 = { id: 'test2' };

    let start = blank();
    let semester = add('students', STUDENT_1)(start);
    semester = add('students', STUDENT_2)(semester);

    it('does not mutate', () => {
      expect(start).toEqual(blank());
    });

    it('appends the students to the array', () => {
      expect(semester.students[0]).toEqual(STUDENT_1);
      expect(semester.students[1]).toEqual(STUDENT_2);
    });

    it('leaves everything else alone', () => {
      expect(semester.name).toEqual(blank().name);
      expect(semester.groups).toEqual(blank().groups);
      expect(semester.availabilities).toEqual(blank().availabilities);
      expect(semester.holidays).toEqual(blank().holidays);
      expect(semester.vacations).toEqual(blank().vacations);
      expect(semester.normalLessons).toEqual(blank().normalLessons);
      expect(semester.makeupLessons).toEqual(blank().makeupLessons);
      expect(semester.groupLessons).toEqual(blank().groupLessons);
      expect(semester.moveRequests).toEqual(blank().moveRequests);
    });
  });

  it('adds groups', () => {
    const GROUP_1 = { id: 'group1', name: 'MyGroup1', studentIds: ['test1', 'test2'] };
    const GROUP_2 = { id: 'group2', name: 'MyGroup2', studentIds: ['test3'] };

    let start = blank();
    let semester = add('groups', GROUP_1)(start);
    semester = add('groups', GROUP_2)(semester);

    expect(semester.groups[0]).toEqual(GROUP_1);
    expect(semester.groups[1]).toEqual(GROUP_2);
  });

  it('adds availabilities', () => {
    const AVAILABILITY_1 = { id: 'availability1', description: 'Payson', timeSpan: { start: moment(), duration: 45, unit: 'minutes' } };
    const AVAILABILITY_2 = { id: 'availability2', description: 'Payson', timeSpan: { start: moment(), duration: 30, unit: 'minutes' } };

    let start = blank();
    let semester = add('availabilities', AVAILABILITY_1)(start);
    semester = add('availabilities', AVAILABILITY_2)(semester);

    expect(semester.availabilities[0]).toEqual(AVAILABILITY_1);
    expect(semester.availabilities[1]).toEqual(AVAILABILITY_2);
  });

  it('adds holidays', () => {
    const HOLIDAY_1 = { id: 'holiday1', description: 'Christmas', day: moment() };
    const HOLIDAY_2 = { id: 'holiday2', description: 'New Year\'s', day: moment() };

    let start = blank();
    let semester = add('holidays', HOLIDAY_1)(start);
    semester = add('holidays', HOLIDAY_2)(semester);

    expect(semester.holidays[0]).toEqual(HOLIDAY_1);
    expect(semester.holidays[1]).toEqual(HOLIDAY_2);
  });

  it('adds vacations', () => {
    const VACATION_1 = { id: 'vacation1', description: 'Mountains and Strings', timeSpan: { start: moment(), duration: 45, unit: 'minutes' } };
    const VACATION_2 = { id: 'vacation2', description: 'OTS Tour', timeSpan: { start: moment(), duration: 30, unit: 'minutes' } };

    let start = blank();
    let semester = add('vacations', VACATION_1)(start);
    semester = add('vacations', VACATION_2)(semester);

    expect(semester.vacations[0]).toEqual(VACATION_1);
    expect(semester.vacations[1]).toEqual(VACATION_2);
  });

  it('adds moveRequests', () => {
    const MOVE_REQUEST_1 = { id: 'request1', lessonId: 'lesson1', targetStart: moment() };
    const MOVE_REQUEST_2 = { id: 'request2', lessonId: 'lesson2', targetStart: moment() };

    let start = blank();
    let semester = add('moveRequests', MOVE_REQUEST_1)(start);
    semester = add('moveRequests', MOVE_REQUEST_2)(semester);

    expect(semester.moveRequests[0]).toEqual(MOVE_REQUEST_1);
    expect(semester.moveRequests[1]).toEqual(MOVE_REQUEST_2);
  });

  it('rejects alterations to non-arrays', () => {
    expect(() => add('name', 1)(blank())).toThrow(TypeError);
    expect(() => add('garbage', 2)(blank())).toThrow(TypeError);
  });
});

describe('interaction with pipe', () => {
  it('works with pipe', () => {
    let compare = blank();
    compare = set('name', 'MyName2')(compare);
    compare = add('students', { name: 'Jim' })(compare);
    let semester = pipe(
      set('name', 'MyName2'),
      add('students', { name: 'Jim' })
    )(blank());
    expect(semester).toEqual(compare)
  });
});
