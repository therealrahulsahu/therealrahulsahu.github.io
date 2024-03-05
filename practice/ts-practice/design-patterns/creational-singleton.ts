class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private value:number = 0;

  setValue(value: number) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.setValue(1);
console.log(db2.getValue()); // 1

db2.setValue(2);
console.log(db1.getValue()); // 2



