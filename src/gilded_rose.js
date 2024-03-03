class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQualityChange() {
    const expired = this.sellIn < 0;

    if (this.name == 'Aged Brie') {
      this.applyQualityChange(2);
    } else if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (expired) {
        this.quality = 0;
      } else {
        if (this.sellIn < 6) {
          this.applyQualityChange(3);
        } else if (this.sellIn < 11) {
          this.applyQualityChange(2);
        } else {
          this.applyQualityChange()
        }
      }
    } else if (this.name == 'Sulfuras, Hand of Ragnaros') {
      expired && this.applyQualityChange(-1, 80);
    } else {
      !expired && this.applyQualityChange(-1);
    }
  }

  applyQualityChange(by = 1, maxRange = 50) {
    const isBetween = (value) => value > 0 && value < maxRange
    if (isBetween(this.quality)) {
      this.quality = this.quality + by;
    }
  }

  update() {
    if (this.name !== 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1;
    }

    this.updateQualityChange();
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