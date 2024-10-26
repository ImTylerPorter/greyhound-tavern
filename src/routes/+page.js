import menu from '../api/menu.json'
import events from '../api/events.json'

export async function load() {
  return {
    menu,
    events
  };
}