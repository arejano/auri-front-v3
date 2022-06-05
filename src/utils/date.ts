export class DateUtils {
  diffHours(d2: Date, d1: Date) {
    let diff = d2.getTime() - d1.getTime();
    return Math.abs(Math.round(diff / 3600));
  }

  moreThan12(date_hours: Number) {
    return date_hours > 12000;
  }

  expired(d: Date) {
    if (d) {
      const dh = this.diffHours(new Date(), new Date(d));
      return this.moreThan12(dh);
    }
    return false;
  }
}
