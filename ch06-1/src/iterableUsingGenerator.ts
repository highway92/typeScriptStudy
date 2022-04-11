export class IterableUsingGenerator implements Iterable<string> {
  constructor(
    private values: string[] = [],
    private currentIndex: number = 0
  ) {}

  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++];
    }
  };
}

for (const item of new IterableUsingGenerator(["1", "2", "3"])) {
  console.log(item);
}

for (const item of new IterableUsingGenerator(["hello", "world", "!"])) {
  console.log(item);
}
