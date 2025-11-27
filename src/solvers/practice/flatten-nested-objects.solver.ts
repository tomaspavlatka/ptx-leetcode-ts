export class FlattenNestedObjectsSolver {
  flatten(obj: Record<string, any>, prefix = ""): Record<string, any> {
    const res: Record<string, any> = {};

    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (value != null && typeof value == "object" && !Array.isArray(value)) {
        Object.assign(res, this.flatten(value, newKey));
      } else {
        res[newKey] = value;
      }

    }

    return res;

  }
}
