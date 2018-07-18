export const EventStream = () => {
  let subscribers = [];

  return {
    subscribe: (callback) => {
      subscribers.push(callback);
      return () => { subscribers = subscribers.filter(sub => sub !== callback) }
    },
    publish: (event) => {
      subscribers.forEach(sub => sub(event));
    }
  }
}
