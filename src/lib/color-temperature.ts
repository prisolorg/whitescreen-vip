/** Approximate RGB for a black-body color temperature in Kelvin (Tanner Helland's approximation). */
export function kelvinToRgb(kelvin: number) {
  const temp = kelvin / 100
  const clamp = (value: number) => Math.round(Math.min(255, Math.max(0, value)))
  const r = clamp(temp <= 66 ? 255 : 329.698727446 * Math.pow(temp - 60, -0.1332047592))
  const g = clamp(
    temp <= 66 ? 99.4708025861 * Math.log(temp) - 161.1195681661 : 288.1221695283 * Math.pow(temp - 60, -0.0755148492),
  )
  const b = clamp(temp >= 66 ? 255 : temp <= 19 ? 0 : 138.5177312231 * Math.log(temp - 10) - 305.0447927307)
  return { r, g, b, css: `rgb(${r} ${g} ${b})` }
}
