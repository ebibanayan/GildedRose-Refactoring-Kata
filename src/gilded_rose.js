class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality(by = 1, maxRange = 50) {
    const isBetween = (value) => value > 0 && value < maxRange
    if (isBetween(this.quality)) {
      this.quality = this.quality + by;
    }
  }

  update() {
    if (this.name == 'Aged Brie') {
      this.updateQuality();
    } else if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.sellIn < 6) {
        this.updateQuality(3);
      } else if (this.sellIn < 11) {
        this.updateQuality(2);
      } else {
        this.updateQuality()
      }
    } else {
      this.updateQuality(-1);
    }

    if (this.name !== 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1;
    }
    if (this.sellIn < 0) {
      if (this.name == 'Aged Brie') {
        this.updateQuality();
      } else if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.quality = 0;
      } else if (this.name == 'Sulfuras, Hand of Ragnaros') {
        this.updateQuality(-1, 80);
      }
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}