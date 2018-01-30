export enum UnitType {
  None,
  Liter,
  Gram,
  Tbsp
}
export class IngredientUnit {
  constructor(private _amount: number, private _unit: UnitType) {}
  get amount(): number {
    return this._amount;
  }
  get unit(): UnitType {
    return this._unit;
  }
}
export class Ingredient {
  private _id: string;
  private _name: string;
  private _ingredientunit: IngredientUnit;

  static fromJSON(json): Ingredient {
    const rec = new Ingredient(json.name, json.amount, json.unit);
    rec._id = json._id;
    return rec;
  }

  constructor(
    name: string,
    amount: number = 1,
    unit: UnitType = UnitType.None
  ) {
    this._name = name;
    this._ingredientunit = new IngredientUnit(amount, unit);
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get amount(): number {
    return this._ingredientunit.amount;
  }
  get unit(): UnitType {
    return this._ingredientunit.unit;
  }

  toJSON() {
    return {
      _id: this._id,
      name: this._name,
      amount: this._ingredientunit.amount,
      unit:
        this._ingredientunit.unit === UnitType.None
          ? ''
          : this._ingredientunit.unit
    };
  }
}
