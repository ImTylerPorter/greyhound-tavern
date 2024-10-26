import menu from '../api/menu.json'
import events from '../api/events.json'
import images from '../api/slider.json'

export async function load() {
  return {
    menu,
    events,
    images
  };
}