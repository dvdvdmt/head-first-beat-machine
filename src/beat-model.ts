export class BeatModel extends EventTarget {
  static readonly beatUpdatedEvent = 'beatUpdatedEvent'
  static readonly beatPlayedEvent = 'beatPlayedEvent'
  private beatPerMinute: number
  private isPlaying: boolean
  private playInterval: number | undefined

  constructor(beatPerMinute = 60) {
    super()
    this.beatPerMinute = beatPerMinute
    this.isPlaying = false
  }

  get bpm(): number {
    return this.beatPerMinute
  }

  set bpm(value: number) {
    if (value <= 0) {
      throw new Error(`The beat can't be zero or negative`)
    }
    this.beatPerMinute = value
    this.dispatchEvent(new Event(BeatModel.beatUpdatedEvent))
    if (this.isPlaying) {
      this.off()
      this.on()
    }
  }

  run(): void {
    const minute = 60_000
    this.dispatchBeatPlayed()
    this.playInterval = window.setInterval(() => {
      this.dispatchBeatPlayed()
    }, minute / this.bpm)
  }

  on(): void {
    this.isPlaying = true
    this.run()
  }

  off(): void {
    window.clearInterval(this.playInterval)
    this.isPlaying = false
  }

  private dispatchBeatPlayed() {
    this.dispatchEvent(new Event(BeatModel.beatPlayedEvent))
  }
}
