// Slot Machine

class SlotMachine {
  constructor(slots = 3, coins = 0) {
    this.slots = slots;
    this.coins = coins;
  }

  generateRandomSlot() {
    return Math.random() > 0.5;
  }

  generateRandomSlots() {
    const randomSlots = [];
    for (let i = 0; i < this.slots; i++) {
      randomSlots.push(this.generateRandomSlot());
    }
    return randomSlots;
  }

  reset() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const randomSlots = this.generateRandomSlots();

    const isUserWins = randomSlots.every((slot) => Boolean(slot));

    if (isUserWins) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.reset();
      return true;
    }

    console.log("Good luck next time!!");
    return false;
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
