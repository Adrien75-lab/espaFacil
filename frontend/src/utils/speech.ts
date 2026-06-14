export interface SpeechOptions {
  rate?: number
  pitch?: number
}

export function speakText(text: string, locale: string, options: SpeechOptions = {}): void {
  if (!('speechSynthesis' in window)) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = locale
  utterance.rate = options.rate ?? 1
  utterance.pitch = options.pitch ?? 1
  window.speechSynthesis.speak(utterance)
}
