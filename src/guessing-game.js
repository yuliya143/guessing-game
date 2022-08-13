class GuessingGame {
  setRange(min, max) {
    this.min = min;
    this.max = max + 1;
  }

  guess() {
    this.middle = Math.floor((this.min + this.max) / 2);
    return this.middle;
  }

  lower() {
    this.max = this.middle + 1;
  }

  greater() {
    this.min = this.middle;
  }
}

module.exports = GuessingGame;
