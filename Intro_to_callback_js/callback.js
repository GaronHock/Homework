
  class Clock {

    constructor() {
        
      const currentDate = new Date();
      this.seconds = currentDate.getSeconds();
      this.minutes = currentDate.getMinutes();
      this.hours = currentDate.getHours();
      this.printTime();
      this._tick = this._tick.bind(this);
      setInterval(this._tick, 1000)
    }

    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(`${this.hours}:${this.minutes}:${this.seconds} `)
    }

    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds++;
        if(this.seconds === 60){
            this.seconds = 0;
            this.minutes++; 
            if (this.minutes=== 60){
                this.minutes = 0;
                this.hours++;
                if (this.hours === 24){
                    this.hours = 0;
                }
            }
        }
        this.printTime();
        // cconst clock = Clock.prototype.printTime(currentDate);
        // console.log(clock);
    }
  }

  const clock = new Clock();

