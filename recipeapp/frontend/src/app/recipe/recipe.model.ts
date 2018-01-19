export class Recipe {
  private _name: string;
  private _dateAdded: Date;
  private _ingredients = new Array<string>();

  constructor(
    name: string,
    ingredients: string[] = [],
    dateAdded: Date = null
  ) {
    this._name = name;
    this._ingredients = ingredients;
    this._dateAdded = dateAdded ? dateAdded : new Date();
  }

  toJSON() {
    return {
      name: this._name,
      ingredients: this._ingredients,
      created: this._dateAdded
    };
  }
  get name(): string {
    return this._name;
  }
  get dateAdded(): Date {
    return this._dateAdded;
  }
  get ingredients(): string[] {
    return this._ingredients;
  }
  addIngredient(name: string, amount?: number, unit?: string) {
    this._ingredients.push(`${amount || 1} ${unit || ''} ${name}`);
  }
}
