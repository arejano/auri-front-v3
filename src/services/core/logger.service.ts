export class Logger{
  run_mode: string = import.meta.env.VITE_APP_LOG;

  log(msg) {
    if (this.run_mode == "dev") {
      console.table(msg)
    }
  }
}
