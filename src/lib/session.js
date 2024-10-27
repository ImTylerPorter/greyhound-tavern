// src/lib/session.js
import { writable } from 'svelte/store';

// Initialize the session store with `null` or an empty object as default
export const session = writable(null);