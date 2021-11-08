export const enum BeatModelEvent {
  BPMUpdated = 'BPMUpdated',
  BeatPlayed = 'BeatPlayed',
}

export class BeatModel extends EventTarget {
  private beatPerMinute: number
  private isPlaying: boolean
  private playInterval: number | undefined

  constructor(beatPerMinute = 60) {
    super()
    this.beatPerMinute = beatPerMinute
    this.isPlaying = false
  }

  run(): void {
    const minute = 60_000
    this.playInterval = window.setInterval(() => {
      this.dispatchEvent(new Event(BeatModelEvent.BeatPlayed))
    }, minute / this.bpm)
  }

  get bpm(): number {
    return this.beatPerMinute
  }

  set bpm(value: number) {
    if (value <= 0) {
      throw new Error(`The beat can't be zero or negative`)
    }
    this.beatPerMinute = value
    this.dispatchEvent(new Event(BeatModelEvent.BPMUpdated))
  }

  on(): void {
    this.isPlaying = true
    this.run()
  }

  off(): void {
    window.clearInterval(this.playInterval)
    this.isPlaying = false
  }
}
