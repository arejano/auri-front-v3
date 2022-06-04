export class DateUtils {
  diffHours(d2: Date, d1: Date) {
    let diff = d2.getTime() - d1.getTime();
    return Math.abs(Math.round(diff / 3600));
  }

  moreThan24(date_hours: Number) {
    return date_hours > 24000;
  }

  validExpiration(d: Date) {
    const data_atual = new Date();
    const diff_hours = this.diffHours(data_atual, d);
    return this.moreThan24(diff_hours);
  }
}
