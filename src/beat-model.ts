import {BeatPlayer} from './beat-player'

export class BeatModel extends EventTarget {
  static readonly beatUpdatedEvent = 'beatUpdatedEvent'
  static readonly beatPlayedEvent = 'beatPlayedEvent'
  private beatPerMinute: number
  private isPlaying: boolean
  private playInterval: number | undefined
  private player: BeatPlayer

  constructor(beatPerMinute = 60) {
    super()
    this.beatPerMinute = beatPerMinute
    this.player = new BeatPlayer()
    this.player.initialize()
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
      window.clearInterval(this.playInterval)
      this.repeatBeat()
    }
  }

  repeatBeat(): void {
    const minute = 60_000
    this.playInterval = window.setInterval(() => {
      this.playBeat()
    }, minute / this.bpm)
  }

  on(): void {
    this.isPlaying = true
    this.playBeat()
    this.repeatBeat()
  }

  off(): void {
    window.clearInterval(this.playInterval)
    this.isPlaying = false
  }

  private playBeat() {
    this.player.play()
    this.dispatchEvent(new Event(BeatModel.beatPlayedEvent))
  }
}
