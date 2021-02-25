export default class ErrorRepository {
  constructor() {
    this.errorKeys = new Map();
  }

  translate(code) {
    const res = this.errorKeys.get(code);
    if (!res) {
      return 'Unknown error';
    }
    return res;
  }
}
