export function create(name) {
  return {
    id: 'newId',
    name,
    students: [],
    groups: [],
    availabilities: [],
    holidays: [],
    vacations: [],
    normalLessons: [],
    makeupLessons: [],
    groupLessons: [],
    moveRequests: [],
  };
}

export const set = (field, value) => (semester) => {
  return {
    ...semester,
    [field]: value
  }
}

export const add = (field, values) => (semester) => {
  if (!Array.isArray(semester[field]))
    throw new TypeError(`Expected Array, got ${typeof semester[field]}: "${field}"!`);

  return set(field, semester[field].concat(values))(semester);
}
