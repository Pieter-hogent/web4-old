export class Recipe {
  private _id: string;
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

  static fromJSON(json: any): Recipe {
    const rec = new Recipe(json.name, json.ingredients, json.created);
    rec._id = json._id;
    return rec;
  }

  toJSON() {
    return {
      _id: this._id,
      name: this._name,
      ingredients: this._ingredients,
      created: this._dateAdded
    };
  }

  get id(): string {
    return this._id;
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
