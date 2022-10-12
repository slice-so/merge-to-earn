export default function saEvent(eventName: string) {
  if (navigator.doNotTrack !== "1") {
    sa_event(eventName)
  }
}
