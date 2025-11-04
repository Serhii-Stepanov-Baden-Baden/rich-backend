let memory = [];

export function remember(entry) {
  memory.push(entry);
  if (memory.length > 50) memory.shift(); // limit memory size
}

export function recall() {
  return memory.slice(-5).map(e => `${e.creator}: ${e.message}`);
}
