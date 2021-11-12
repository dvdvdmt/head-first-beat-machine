export class BeatPlayer {
  private context: AudioContext
  private audio: AudioBuffer | undefined

  constructor() {
    this.context = new AudioContext()
  }

  async initialize(): Promise<void> {
    const response = await fetch(new URL('clap.wav', import.meta.url).toString())
    if (!response.ok) {
      throw new Error(`Can't fetch the audio`)
    }
    this.audio = await this.context.decodeAudioData(await response.arrayBuffer())
  }

  play(): void {
    if (!this.audio) {
      throw new Error('You need to initialize first')
    }
    const source = this.context.createBufferSource()
    source.buffer = this.audio
    source.connect(this.context.destination)
    source.start()
  }
}
