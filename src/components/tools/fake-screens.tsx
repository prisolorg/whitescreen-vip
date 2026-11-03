'use client'

import { tx } from '@/lib/tx'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff,
  Hand,
  Share2,
  MessageSquare,
  Smile,
  Users,
  Settings,
  AlertTriangle,
  Play,
  Pause,
  ShieldCheck,
  LayoutGrid,
  ChevronUp,
  Circle,
  ArrowUp,
  MoreHorizontal,
  MoreVertical,
  Captions,
  MonitorUp,
  Info,
  AudioLines,
} from 'lucide-react'
import { ToolStage } from '@/components/tool-kit/tool-stage'
import { ControlRow, Segmented, Slider, Toggle, TextInput, ActionButton } from '@/components/tool-kit/controls'
import { useAnimationFrame, useCanvasSize } from '@/components/tool-kit/hooks'
import { playTone } from '@/components/tool-kit/audio'
import { cn } from '@/lib/utils'

/* ---------------- Fake Update Simulation ---------------- */

export type UpdateOS =
  | 'win10'
  | 'win11'
  | 'mac'
  | 'android'
  | 'winxp-boot'
  | 'winxp-update'
  | 'chrome'
  | 'ubuntu'

export function FakeUpdateScreen({ os = 'win10' }: { os?: UpdateOS }) {
  const [percent, setPercent] = useState(12)
  const [speed, setSpeed] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [isBsod, setIsBsod] = useState(false)

  useEffect(() => {
    if (isPaused || isBsod) return
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) return 0
        const step = Math.floor(Math.random() * speed) + 1
        return Math.min(100, prev + step)
      })
    }, 2500 / speed)
    return () => clearInterval(interval)
  }, [isPaused, isBsod, speed])

  return (
    <ToolStage
      label="Fake update screen"
      tone="dark"
      badge="Simulation"
      controls={
        <ControlRow>
          <Slider label="Update Speed" value={speed} min={1} max={10} onChange={setSpeed} />
          <ActionButton onClick={() => setIsPaused((p) => !p)} aria-pressed={isPaused}>
            {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
            {isPaused ? tx('Resume') : tx('Pause')}
          </ActionButton>
          {/* A Windows blue screen makes no sense on a Mac update. */}
          {os !== 'mac' && (
            <ActionButton
              variant="outline"
              className="text-red-500 hover:text-red-600"
              onClick={() => setIsBsod((b) => !b)}
            >
              <AlertTriangle aria-hidden="true" />
              {isBsod ? tx('Restore Update') : tx('Trigger BSOD Prank')}
            </ActionButton>
          )}
        </ControlRow>
      }
    >
      <div className="relative flex size-full flex-col items-center justify-center select-none text-white">
        {/* BSOD Mode */}
        {isBsod ? (
          <div className="flex size-full flex-col justify-between bg-[#0078D7] p-8 sm:p-16 font-sans">
            <div>
              <div className="text-6xl sm:text-8xl">:(</div>
              <div className="mt-8 text-xl sm:text-3xl font-light leading-relaxed max-w-2xl">
                {tx("Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.")}
              </div>
              <div className="mt-8 text-lg sm:text-2xl font-light">
                {tx('{n}% complete').replace('{n}', String(percent))}
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm sm:text-base font-light">
              <div className="size-24 sm:size-32 bg-white/20 p-2 border border-white/40 flex items-center justify-center font-mono text-xs">
                {tx('QR CODE')}
              </div>
              <div>
                <p>{tx('For more information about this issue and possible fixes, visit https://windows.com/stopcode')}</p>
                <p className="mt-2 text-xs font-mono opacity-80">{tx('Stop code: CRITICAL_PROCESS_DIED')}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Windows 10 */}
            {os === 'win10' && (
              <div className="flex size-full flex-col items-center justify-center bg-[#000000] p-6 text-center">
                {/* Circular chasing dots */}
                <div className="relative size-16 mb-8 animate-spin" style={{ animationDuration: '3s' }}>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute size-2.5 rounded-full bg-white top-0 left-1/2 -translate-x-1/2"
                      style={{
                        transform: `rotate(${i * 60}deg) translateY(-24px)`,
                        opacity: 1 - i * 0.15,
                      }}
                    />
                  ))}
                </div>
                <h2 className="text-xl sm:text-2xl font-light tracking-wide text-neutral-100">
                  {tx('Working on updates {n}% complete.').replace('{n}', String(percent))}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-400">
                  {tx("Don't turn off your PC. This will take a while.")}
                </p>
              </div>
            )}

            {/* Windows 11 */}
            {os === 'win11' && (
              <div className="flex size-full flex-col items-center justify-center bg-[#000000] p-6 text-center">
                {/* Fluent ring */}
                <div className="size-16 mb-8 rounded-full border-4 border-neutral-700 border-t-white animate-spin" />
                <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-white">
                  {tx('Working on updates')}
                </h2>
                <div className="mt-2 font-mono text-lg text-neutral-300">{percent}%</div>
                <p className="mt-3 text-sm text-neutral-400">
                  {tx('Please keep your computer on and plugged in.')}
                </p>
              </div>
            )}

            {/* macOS: the Apple-silicon style update screen. Pure black, the logo, a thin rounded bar
                and small grey system text, all scaled to the screen like the real one. */}
            {os === 'mac' && (
              <div
                className="flex size-full flex-col items-center justify-center bg-black"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                <svg
                  aria-hidden="true"
                  className="fill-white"
                  style={{ height: 'clamp(52px, 10vmin, 116px)', width: 'auto' }}
                  viewBox="0 0 170 170"
                >
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-7.06-10.74-12.72-22.99-16.99-36.75-4.26-13.76-6.39-26.68-6.39-38.77 0-14.65 3.73-26.97 11.2-36.96 7.47-9.98 17.1-15.09 28.9-15.34 4.58 0 9.87 1.25 15.86 3.76 5.99 2.5 9.77 3.8 11.34 3.91 1.9-.22 5.86-1.55 11.89-4 6.03-2.45 11.19-3.61 15.49-3.48 10.96.65 19.86 4.7 26.71 12.16-9.67 5.86-14.39 14.19-14.16 24.99.23 8.35 3.37 15.39 9.42 21.13 6.05 5.74 13.25 9.07 21.6 10 1.2 5.1 1.96 10.27 2.28 15.52.32 5.25.05 10.51-.81 15.78zM119.22 33.64c0-7.05 2.5-13.73 7.51-20.04 5.01-6.31 11.23-10.36 18.66-12.14.77 7.05-1.46 13.77-6.68 20.15-5.22 6.38-11.71 10.39-19.49 12.03z" />
                </svg>
                <div
                  role="progressbar"
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="overflow-hidden rounded-full bg-[#3a3a3c]"
                  style={{ marginTop: 'clamp(44px, 9vmin, 100px)', width: 'clamp(150px, 24vmin, 280px)', height: 'clamp(4px, 0.62vmin, 7px)' }}
                >
                  <div className="h-full rounded-full bg-white transition-[width] duration-[1500ms] ease-linear" style={{ width: `${percent}%` }} />
                </div>
                <p className="text-[#8e8e93]" style={{ marginTop: 'clamp(14px, 2.4vmin, 26px)', fontSize: 'clamp(11px, 1.55vmin, 15px)' }}>
                  {percent < 16
                    ? tx('Calculating time remaining…')
                    : percent >= 98
                      ? tx('Less than a minute remaining')
                      : tx('About {n} minutes remaining').replace('{n}', String(Math.max(1, Math.round((100 - percent) * 0.4))))}
                </p>
              </div>
            )}

            {/* Windows XP Boot */}
            {os === 'winxp-boot' && (
              <div className="flex size-full flex-col items-center justify-center bg-black p-6 select-none">
                <div className="mb-12 text-center">
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                    <span className="text-red-500">M</span>
                    <span className="text-yellow-400">i</span>
                    <span className="text-green-500">c</span>
                    <span className="text-blue-500">r</span>
                    <span className="text-white">o</span>
                    <span className="text-white">s</span>
                    <span className="text-white">o</span>
                    <span className="text-white">f</span>
                    <span className="text-white">t</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black italic tracking-widest text-white mt-1">
                    Windows<span className="text-orange-500 text-lg align-top ml-1">xp</span>
                  </div>
                </div>

                {/* XP Scrolling 3-blocks Track */}
                <div className="w-56 h-4 rounded-full border border-neutral-600 bg-neutral-900 overflow-hidden relative p-0.5">
                  <div className="flex gap-1 h-full w-12 animate-[xp-travel_2s_infinite_linear]">
                    <div className="w-3 h-full rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_6px_#0078D7]" />
                    <div className="w-3 h-full rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_6px_#0078D7]" />
                    <div className="w-3 h-full rounded-sm bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_0_6px_#0078D7]" />
                  </div>
                </div>
              </div>
            )}

            {/* Windows XP Update */}
            {os === 'winxp-update' && (
              <div className="flex size-full flex-col items-center justify-center bg-[#001D85] p-6 text-center">
                <div className="size-16 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin mb-6" />
                <h2 className="text-2xl font-bold text-white tracking-wide">
                  {tx('Please wait...')}
                </h2>
                <p className="mt-3 text-lg text-neutral-200">
                  {tx('Installing update {n} of 18...').replace('{n}', String(Math.min(18, Math.max(1, Math.floor(percent / 5)))))}
                </p>
                <p className="mt-6 text-sm text-yellow-300 font-medium">
                  {tx('Do not turn off or unplug your computer.')}
                </p>
              </div>
            )}

            {/* Android Update */}
            {os === 'android' && (
              <div className="flex size-full flex-col items-center justify-center bg-black p-6 text-center">
                <div className="size-20 mb-8 rounded-full border-4 border-[#3DDC84] border-dashed animate-spin" />
                <h2 className="text-xl sm:text-2xl font-medium text-white">
                  {tx('Installing system update')}
                </h2>
                <div className="w-64 h-1.5 rounded-full bg-neutral-800 overflow-hidden mt-6">
                  <div className="h-full bg-[#3DDC84]" style={{ width: `${percent}%` }} />
                </div>
                <p className="mt-3 text-sm text-neutral-400">{percent}%</p>
              </div>
            )}

            {/* ChromeOS */}
            {os === 'chrome' && (
              <div className="flex size-full flex-col items-center justify-center bg-neutral-900 p-6 text-center">
                <div className="size-16 mb-8 rounded-full border-4 border-blue-500 border-t-yellow-400 border-r-red-500 border-b-green-500 animate-spin" />
                <h2 className="text-xl sm:text-2xl font-light text-white">
                  {tx('Updating your device')}
                </h2>
                <div className="w-64 h-1 rounded-full bg-neutral-800 overflow-hidden mt-6">
                  <div className="h-full bg-blue-500" style={{ width: `${percent}%` }} />
                </div>
                <p className="mt-3 text-sm text-neutral-400">{percent}%</p>
              </div>
            )}

            {/* Ubuntu */}
            {os === 'ubuntu' && (
              <div className="flex size-full flex-col items-center justify-center bg-[#2C001E] p-6 text-center">
                <div className="text-4xl font-bold tracking-tight text-white mb-8">
                  ubuntu
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="size-2.5 rounded-full bg-[#E95420] animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
                <p className="mt-8 text-sm font-mono text-neutral-300">
                  {tx('Installing updates... ({n}%)').replace('{n}', String(percent))}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </ToolStage>
  )
}

/* ---------------- Fake Video Call Simulation ---------------- */

type AppType = 'zoom' | 'teams' | 'meet' | 'slack' | 'generic'

const CALL_PARTICIPANTS = [
  { name: 'Sarah Jenkins', role: 'Host', color: 'bg-emerald-600', active: true },
  { name: 'David Kim', role: 'Speaker', color: 'bg-blue-600', active: false },
  { name: 'Elena Rostova', role: 'Product Lead', color: 'bg-violet-600', active: false },
  { name: 'Marcus Vance', role: 'Engineer', color: 'bg-amber-600', active: false },
  { name: 'Aaliyah Patel', role: 'Design', color: 'bg-rose-600', active: false },
]

export function FakeCallScreen({ appType = 'zoom' }: { appType?: AppType }) {
  const [meetingTitle, setMeetingTitle] = useState(() => tx('Weekly All-Hands & Strategy Sync'))
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [activeSpeaker, setActiveSpeaker] = useState(0)

  const [elapsed, setElapsed] = useState(0)
  const [clockTime, setClockTime] = useState('')
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  // A callback ref, so any newly mounted <video> (layout switch, fullscreen) picks up the live stream.
  const attachVideo = useCallback((element: HTMLVideoElement | null) => {
    videoRef.current = element
    if (element && streamRef.current && element.srcObject !== streamRef.current) {
      element.srcObject = streamRef.current
    }
  }, [])

  // Cycle active speaker for realism
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSpeaker((prev) => (prev + 1) % (CALL_PARTICIPANTS.length + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Camera toggle
  useEffect(() => {
    if (isVideoOn) {
      navigator.mediaDevices
        ?.getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch(() => {
          setIsVideoOn(false)
        })
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop())
        streamRef.current = null
      }
    }
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop())
    }
  }, [isVideoOn])

  // Meeting timer shown in the Teams-style top bar. Starts at 00:00 so prerendered HTML matches.
  useEffect(() => {
    const id = window.setInterval(() => setElapsed((value) => value + 1), 1000)
    return () => window.clearInterval(id)
  }, [])
  const clock = `${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`
  useEffect(() => {
    const update = () => setClockTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
    update()
    const id = window.setInterval(update, 15000)
    return () => window.clearInterval(id)
  }, [])
  const initials = (name: string) => name.split(' ').map((part) => part[0]).join('')

  return (
    <ToolStage
      label={appType === 'teams' ? 'Fake Teams meeting' : appType === 'zoom' ? 'Fake Zoom meeting' : appType === 'meet' ? tx('Fake Google Meet meeting') : tx('Fake video call')}
      reserveHeadingSpace
      className={appType === 'teams' ? 'bg-[#1f1f1f]' : appType === 'zoom' ? 'bg-black' : appType === 'meet' ? 'bg-[#202124]' : 'bg-neutral-950'}
      tone="dark"
      badge="Simulation"
      controls={
        <ControlRow>
          <TextInput
            label="Meeting Title"
            value={meetingTitle}
            onChange={setMeetingTitle}
            maxLength={40}
          />
          <Toggle
            label="Enable Camera Preview"
            checked={isVideoOn}
            onChange={setIsVideoOn}
          />
        </ControlRow>
      }
    >
      {appType === 'teams' ? (
        <div className="flex size-full flex-col bg-[#1f1f1f] text-white select-none">
          {/* Top bar: timer and title on the left, meeting controls and Leave on the right */}
          <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#292929] px-3 py-2">
            <div className="flex min-w-0 items-center gap-2.5 text-sm">
              <span className="font-mono text-xs tabular-nums text-neutral-300">{clock}</span>
              <span className="truncate font-semibold">{meetingTitle}</span>
            </div>
            <div className="flex shrink-0 items-center gap-0.5 text-neutral-200">
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10 sm:flex">
                <MessageSquare className="size-[18px]" aria-hidden="true" />
                {tx('Chat')}
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10 sm:flex">
                <Users className="size-[18px]" aria-hidden="true" />
                {tx('People')}
              </button>
              <button
                type="button"
                onClick={() => setIsHandRaised((value) => !value)}
                aria-pressed={isHandRaised}
                className={cn('flex flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10', isHandRaised && 'text-[#9ea2ff]')}
              >
                <Hand className="size-[18px]" aria-hidden="true" />
                {tx('Raise')}
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10 md:flex">
                <Smile className="size-[18px]" aria-hidden="true" />
                {tx('React')}
              </button>
              <span aria-hidden="true" className="mx-1 h-7 w-px bg-white/15" />
              <button
                type="button"
                onClick={() => setIsVideoOn((value) => !value)}
                aria-pressed={isVideoOn}
                className="flex flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10"
              >
                {isVideoOn ? <VideoIcon className="size-[18px]" aria-hidden="true" /> : <VideoOff className="size-[18px]" aria-hidden="true" />}
                {tx('Camera')}
              </button>
              <button
                type="button"
                onClick={() => setIsMuted((value) => !value)}
                aria-pressed={isMuted}
                className={cn('flex flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10', isMuted && 'text-red-300')}
              >
                {isMuted ? <MicOff className="size-[18px]" aria-hidden="true" /> : <Mic className="size-[18px]" aria-hidden="true" />}
                Mic
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10 sm:flex">
                <Share2 className="size-[18px]" aria-hidden="true" />
                {tx('Share')}
              </button>
              <button
                type="button"
                onClick={() => alert('Prank meeting simulation ended.')}
                className="ml-1.5 flex items-center gap-1.5 rounded-md bg-[#c4314b] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#a72940]"
              >
                <PhoneOff className="size-4" aria-hidden="true" />
                {tx('Leave')}
              </button>
            </div>
          </div>

          {/* Participant tiles */}
          <div className="grid flex-1 grid-cols-2 gap-2 overflow-hidden p-2.5 pb-8 sm:grid-cols-3 max-sm:[&>*:nth-child(n+5)]:hidden">
            <div
              className={cn(
                'relative flex items-center justify-center overflow-hidden rounded-md bg-[#2d2d2d]',
                activeSpeaker === 0 && 'ring-2 ring-[#7f85f5]',
              )}
            >
              {isVideoOn ? (
                <video ref={attachVideo} autoPlay playsInline muted className="size-full scale-x-[-1] object-cover" />
              ) : (
                <div className="flex size-9 items-center justify-center rounded-full bg-[#5b5fc7] text-sm font-semibold sm:size-20 sm:text-2xl">{tx('You')}</div>
              )}
              <span className="absolute bottom-1.5 left-2 flex items-center gap-1 text-xs font-medium">
                {isMuted && <MicOff className="size-3 text-red-300" aria-hidden="true" />}
                {tx('You')}{' '}{isHandRaised && '✋'}
              </span>
            </div>
            {CALL_PARTICIPANTS.map((participant, index) => {
              const isSpeaking = activeSpeaker === index + 1
              return (
                <div
                  key={participant.name}
                  className={cn(
                    'relative flex items-center justify-center rounded-md bg-[#2d2d2d] transition-shadow',
                    isSpeaking && 'ring-2 ring-[#7f85f5]',
                  )}
                >
                  <div
                    className={cn(
                      'flex size-9 items-center justify-center rounded-full text-sm font-semibold sm:size-20 sm:text-2xl',
                      participant.color,
                    )}
                  >
                    {initials(participant.name)}
                  </div>
                  <span className="absolute bottom-1.5 left-2 flex items-center gap-1 text-xs font-medium">
                    {!isSpeaking && <MicOff className="size-3 text-neutral-400" aria-hidden="true" />}
                    {tx(participant.name)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      ) : appType === 'meet' ? (
        // Google Meet-style: charcoal stage, rounded tiles with an initial avatar when the camera is
        // off, a blue speaking outline, and round controls with a wide red hang-up button.
        <div className="flex size-full flex-col bg-[#202124] text-[#e8eaed] select-none">
          <div className="grid flex-1 grid-cols-2 gap-2 overflow-hidden p-2.5 sm:grid-cols-3 max-sm:[&>*:nth-child(n+5)]:hidden">
            <div
              className={cn(
                'relative flex items-center justify-center overflow-hidden rounded-lg bg-[#3c4043]',
                activeSpeaker === 0 && 'outline outline-[3px] -outline-offset-[3px] outline-[#8ab4f8]',
              )}
            >
              {isVideoOn ? (
                <video ref={attachVideo} autoPlay playsInline muted className="size-full scale-x-[-1] object-cover" />
              ) : (
                <div className="flex size-10 items-center justify-center rounded-full bg-[#1a73e8] text-lg font-medium text-white sm:size-20 sm:text-3xl">Y</div>
              )}
              <span className="absolute bottom-1.5 left-2.5 text-xs font-medium sm:text-sm">{tx('You')}{' '}{isHandRaised && '✋'}</span>
              {isMuted && (
                <span className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/40">
                  <MicOff className="size-3.5" aria-hidden="true" />
                </span>
              )}
            </div>
            {CALL_PARTICIPANTS.map((participant, index) => {
              const isSpeaking = activeSpeaker === index + 1
              return (
                <div
                  key={participant.name}
                  className={cn(
                    'relative flex items-center justify-center rounded-lg bg-[#3c4043]',
                    isSpeaking && 'outline outline-[3px] -outline-offset-[3px] outline-[#8ab4f8]',
                  )}
                >
                  <div className={cn('flex size-10 items-center justify-center rounded-full text-lg font-medium text-white sm:size-20 sm:text-3xl', participant.color)}>
                    {participant.name[0]}
                  </div>
                  <span className="absolute bottom-1.5 left-2.5 text-xs font-medium sm:text-sm">{tx(participant.name)}</span>
                  <span className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-black/40">
                    {isSpeaking ? <AudioLines className="size-3.5 text-[#8ab4f8]" aria-hidden="true" /> : <MicOff className="size-3.5" aria-hidden="true" />}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-between gap-2 px-3 pb-3 pt-1 text-sm">
            <div className="hidden min-w-0 items-center gap-2 lg:flex">
              <span className="tabular-nums">{clockTime}</span>
              <span className="text-[#9aa0a6]">|</span>
              <span className="truncate">abc-defg-hij</span>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2 lg:flex-none">
              <button
                type="button"
                onClick={() => setIsMuted((value) => !value)}
                aria-label={isMuted ? tx('Turn on microphone') : tx('Turn off microphone')}
                aria-pressed={isMuted}
                className={cn('flex size-10 items-center justify-center rounded-full', isMuted ? 'bg-[#ea4335] text-white' : 'bg-[#3c4043] hover:bg-[#4a4e51]')}
              >
                {isMuted ? <MicOff className="size-5" aria-hidden="true" /> : <Mic className="size-5" aria-hidden="true" />}
              </button>
              <button
                type="button"
                onClick={() => setIsVideoOn((value) => !value)}
                aria-label={isVideoOn ? tx('Turn off camera') : tx('Turn on camera')}
                aria-pressed={isVideoOn}
                className={cn('flex size-10 items-center justify-center rounded-full', !isVideoOn ? 'bg-[#ea4335] text-white' : 'bg-[#3c4043] hover:bg-[#4a4e51]')}
              >
                {isVideoOn ? <VideoIcon className="size-5" aria-hidden="true" /> : <VideoOff className="size-5" aria-hidden="true" />}
              </button>
              <button type="button" aria-label={tx('Captions')} className="hidden size-10 items-center justify-center rounded-full bg-[#3c4043] hover:bg-[#4a4e51] sm:flex">
                <Captions className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsHandRaised((value) => !value)}
                aria-label={tx('Raise hand')}
                aria-pressed={isHandRaised}
                className={cn('hidden size-10 items-center justify-center rounded-full sm:flex', isHandRaised ? 'bg-[#8ab4f8] text-[#202124]' : 'bg-[#3c4043] hover:bg-[#4a4e51]')}
              >
                <Hand className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label={tx('Present now')} className="hidden size-10 items-center justify-center rounded-full bg-[#3c4043] hover:bg-[#4a4e51] sm:flex">
                <MonitorUp className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label={tx('More options')} className="flex size-10 items-center justify-center rounded-full bg-[#3c4043] hover:bg-[#4a4e51]">
                <MoreVertical className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => alert('Prank meeting simulation ended.')}
                aria-label={tx('Leave call')}
                className="flex h-10 w-14 items-center justify-center rounded-full bg-[#ea4335] text-white hover:bg-[#d93025]"
              >
                <PhoneOff className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden items-center gap-1 lg:flex">
              <button type="button" aria-label={tx('Meeting details')} className="flex size-10 items-center justify-center rounded-full hover:bg-[#3c4043]">
                <Info className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label={tx('Show everyone')} className="relative flex size-10 items-center justify-center rounded-full hover:bg-[#3c4043]">
                <Users className="size-5" aria-hidden="true" />
                <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-[#5f6368] text-[10px]">{CALL_PARTICIPANTS.length + 1}</span>
              </button>
              <button type="button" aria-label={tx('Chat with everyone')} className="flex size-10 items-center justify-center rounded-full hover:bg-[#3c4043]">
                <MessageSquare className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : appType === 'zoom' ? (
        // Zoom-style gallery view: black stage, names instead of avatars when the camera is off,
        // a green active-speaker border and Zoom's toolbar layout with a red End button.
        <div className="flex size-full flex-col bg-black text-white select-none">
          <div className="flex items-center justify-between gap-2 px-3 py-1.5 text-[12px] text-neutral-300">
            <div className="flex min-w-0 items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-[#23d160]" aria-hidden="true" />
              <span className="flex items-center gap-1.5 rounded bg-white/10 px-1.5 py-0.5 text-[11px] text-white">
                <span className="size-2 rounded-full bg-[#e02828]" />
                {tx('Recording…')}
              </span>
            </div>
            <span className="hidden min-w-0 truncate text-[12px] font-medium text-neutral-200 sm:block">{meetingTitle}</span>
            <span className="flex shrink-0 items-center gap-1.5 rounded px-2 py-0.5 text-[12px] text-neutral-200">
              <LayoutGrid className="size-3.5" aria-hidden="true" />
              {tx('View')}
            </span>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-1 overflow-hidden px-1 pb-1 sm:grid-cols-3 max-sm:[&>*:nth-child(n+5)]:hidden">
            <div
              className={cn(
                'relative flex items-center justify-center overflow-hidden rounded-[4px] bg-[#232323]',
                activeSpeaker === 0 && 'outline outline-2 -outline-offset-2 outline-[#23d160]',
              )}
            >
              {isVideoOn ? (
                <video ref={attachVideo} autoPlay playsInline muted className="size-full scale-x-[-1] object-cover" />
              ) : (
                <span className="px-2 text-center text-sm font-medium sm:text-2xl">{tx('You')}</span>
              )}
              <span className="absolute bottom-1 left-1 flex items-center gap-1 rounded-sm bg-black/55 px-1.5 py-0.5 text-[11px]">
                {isMuted && <MicOff className="size-3 text-[#e02828]" aria-hidden="true" />}
                {tx('You')}{' '}{isHandRaised && '✋'}
              </span>
            </div>
            {CALL_PARTICIPANTS.map((participant, index) => {
              const isSpeaking = activeSpeaker === index + 1
              return (
                <div
                  key={participant.name}
                  className={cn(
                    'relative flex items-center justify-center rounded-[4px] bg-[#232323]',
                    isSpeaking && 'outline outline-2 -outline-offset-2 outline-[#23d160]',
                  )}
                >
                  <span className="px-2 text-center text-sm font-medium sm:text-2xl">{tx(participant.name)}</span>
                  <span className="absolute bottom-1 left-1 flex items-center gap-1 rounded-sm bg-black/55 px-1.5 py-0.5 text-[11px]">
                    {!isSpeaking && <MicOff className="size-3 text-[#e02828]" aria-hidden="true" />}
                    {tx(participant.name)}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-between gap-1 bg-[#1a1a1a] px-2 py-1.5 text-[11px] text-neutral-200 sm:px-3">
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setIsMuted((value) => !value)}
                aria-pressed={isMuted}
                className="flex flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:px-3"
              >
                <span className="flex items-center">
                  {isMuted ? <MicOff className="size-5 text-[#e02828]" aria-hidden="true" /> : <Mic className="size-5" aria-hidden="true" />}
                  <ChevronUp className="ml-0.5 size-3 text-neutral-400" aria-hidden="true" />
                </span>
                <span className="max-sm:sr-only">{isMuted ? tx('Unmute') : tx('Mute')}</span>
              </button>
              <button
                type="button"
                onClick={() => setIsVideoOn((value) => !value)}
                aria-pressed={isVideoOn}
                className="flex flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:px-3"
              >
                <span className="flex items-center">
                  {isVideoOn ? <VideoIcon className="size-5" aria-hidden="true" /> : <VideoOff className="size-5 text-[#e02828]" aria-hidden="true" />}
                  <ChevronUp className="ml-0.5 size-3 text-neutral-400" aria-hidden="true" />
                </span>
                <span className="max-sm:sr-only">{isVideoOn ? tx('Stop Video') : tx('Start Video')}</span>
              </button>
            </div>

            <div className="flex items-center">
              <button type="button" className="flex flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:px-3">
                <span className="relative">
                  <Users className="size-5" aria-hidden="true" />
                  <span className="absolute -right-2.5 -top-1 text-[10px] font-semibold">{CALL_PARTICIPANTS.length + 1}</span>
                </span>
                <span className="max-sm:sr-only">{tx('Participants')}</span>
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:flex sm:px-3">
                <MessageSquare className="size-5" aria-hidden="true" />
                {tx('Chat')}
              </button>
              <button type="button" className="flex flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:px-3">
                <span className="flex size-5 items-center justify-center rounded-[5px] bg-[#23d160]">
                  <ArrowUp className="size-3.5 text-black" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="max-sm:sr-only">{tx('Share Screen')}</span>
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 md:flex md:px-3">
                <Circle className="size-5" aria-hidden="true" />
                {tx('Record')}
              </button>
              <button
                type="button"
                onClick={() => setIsHandRaised((value) => !value)}
                aria-pressed={isHandRaised}
                className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:flex sm:px-3"
              >
                <Smile className={cn('size-5', isHandRaised && 'text-yellow-300')} aria-hidden="true" />
                {tx('Reactions')}
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 md:flex md:px-3">
                <MoreHorizontal className="size-5" aria-hidden="true" />
                {tx('More')}
              </button>
            </div>

            <button
              type="button"
              onClick={() => alert(tx('Prank meeting simulation ended.'))}
              className="rounded-md bg-[#e02828] px-4 py-1.5 text-[13px] font-semibold text-white hover:bg-[#c81f1f]"
            >
              {tx('End call')}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex size-full flex-col bg-neutral-950 text-white select-none">
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-xs text-neutral-300">
            <div className="flex items-center gap-2 font-medium">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="truncate max-w-[200px] sm:max-w-md">{meetingTitle}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px]">{tx('REC')}</span>
              <span className="hidden sm:inline">{CALL_PARTICIPANTS.length + 1} participants</span>
            </div>
          </div>
  
          {/* Participants Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 overflow-hidden max-sm:[&>*:nth-child(n+5)]:hidden">
            {/* User Self Tile */}
            <div
              className={cn(
                'relative flex flex-col items-center justify-center rounded-xl bg-neutral-900 border overflow-hidden',
                activeSpeaker === 0 ? 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]' : 'border-white/10',
              )}
            >
              {isVideoOn ? (
                <video
                  ref={attachVideo}
                  autoPlay
                  playsInline
                  muted
                  className="size-full object-cover scale-x-[-1]"
                />
              ) : (
                <div className="max-sm:hidden size-9 sm:size-20 rounded-full bg-primary flex items-center justify-center text-sm sm:text-2xl font-bold text-white shadow-lg">
                  {tx('YOU')}
                </div>
              )}
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-black/60 px-2 py-1 text-xs backdrop-blur">
                {isMuted ? <MicOff className="size-3 text-red-400" /> : <Mic className="size-3 text-emerald-400" />}
                <span>{tx('You')}{' '}{isHandRaised && '✋'}</span>
              </div>
            </div>
  
            {/* Other simulated participants */}
            {CALL_PARTICIPANTS.map((participant, index) => {
              const isSpeaking = activeSpeaker === index + 1
              return (
                <div
                  key={participant.name}
                  className={cn(
                    'relative flex flex-col items-center justify-center rounded-xl bg-neutral-900 border transition-all duration-300',
                    isSpeaking
                      ? 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                      : 'border-white/10',
                  )}
                >
                  <div
                    className={cn(
                      'max-sm:hidden size-9 sm:size-20 rounded-full flex items-center justify-center text-sm sm:text-2xl font-bold text-white shadow-lg transition-transform',
                      participant.color,
                      isSpeaking && 'scale-105 ring-4 ring-emerald-400/50',
                    )}
                  >
                    {participant.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-black/60 px-2 py-1 text-xs backdrop-blur">
                    {isSpeaking ? (
                      <Mic className="size-3 text-emerald-400" />
                    ) : (
                      <MicOff className="size-3 text-neutral-400" />
                    )}
                    <span>{tx(participant.name)}</span>
                  </div>
                </div>
              )
            })}
          </div>
  
          {/* Bottom Call Controls Toolbar */}
          <div className="flex items-center justify-center gap-1 sm:gap-4 border-t border-white/10 bg-neutral-900/90 py-2 px-2 sm:py-3 sm:px-4 backdrop-blur">
            <button
              type="button"
              onClick={() => setIsMuted((m) => !m)}
              className={cn(
                'flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                isMuted ? 'text-red-400 bg-red-500/10' : 'hover:bg-white/10 text-neutral-200',
              )}
            >
              {isMuted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
              <span className="max-sm:sr-only">{isMuted ? tx('Unmute') : tx('Mute')}</span>
            </button>
  
            <button
              type="button"
              onClick={() => setIsVideoOn((v) => !v)}
              className={cn(
                'flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                !isVideoOn ? 'text-neutral-400 hover:bg-white/10' : 'text-emerald-400 bg-emerald-500/10',
              )}
            >
              {isVideoOn ? <VideoIcon className="size-5" /> : <VideoOff className="size-5" />}
              <span className="max-sm:sr-only">{isVideoOn ? tx('Stop Video') : tx('Start Video')}</span>
            </button>
  
            <button
              type="button"
              onClick={() => setIsHandRaised((h) => !h)}
              className={cn(
                'flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                isHandRaised ? 'text-yellow-400 bg-yellow-500/10' : 'hover:bg-white/10 text-neutral-200',
              )}
            >
              <Hand className="size-5" />
              <span className="max-sm:sr-only">{tx('Raise Hand')}</span>
            </button>
  
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors"
            >
              <Share2 className="size-5" />
              <span className="max-sm:sr-only">{tx('Share')}</span>
            </button>
  
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="size-5" />
              <span className="max-sm:sr-only">{tx('Chat')}</span>
            </button>
  
            <div className="h-6 w-px bg-white/20 mx-1" />
  
            <button
              type="button"
              onClick={() => alert('Prank call simulation ended.')}
              className="flex items-center gap-1.5 rounded-lg bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-semibold text-white shadow transition-colors"
            >
              <PhoneOff className="size-4" />
              <span>{tx('Leave')}</span>
            </button>
          </div>
        </div>
      )}
    </ToolStage>
  )
}

/* ---------------- Fake radar screen ---------------- */

const RADAR_COLORS = {
  green: { label: 'Green', rgb: '34,197,94', background: '#010d05' },
  amber: { label: 'Amber', rgb: '245,158,11', background: '#0d0802' },
  blue: { label: 'Blue', rgb: '56,189,248', background: '#020a12' },
} as const

type Contact = { angle: number; dist: number; drift: number; speed: number; lastHit: number; id: number }

function makeContacts(count: number): Contact[] {
  return Array.from({ length: count }, (_, i) => ({
    angle: Math.random() * Math.PI * 2,
    dist: 0.15 + Math.random() * 0.8,
    drift: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.01,
    lastHit: -10_000,
    id: 10 + i * 7 + Math.floor(Math.random() * 6),
  }))
}

export function FakeRadarScreen() {
  const { canvasRef, width, height, dpr } = useCanvasSize(2)
  const [palette, setPalette] = useState<keyof typeof RADAR_COLORS>('green')
  const [rpm, setRpm] = useState(12)
  const [count, setCount] = useState(8)
  const [ping, setPing] = useState(false)
  const [labels, setLabels] = useState(true)
  const contactsRef = useRef<Contact[]>([])
  const sweepRef = useRef(0)
  const timeRef = useRef(0)

  useEffect(() => {
    contactsRef.current = makeContacts(count)
  }, [count])

  useAnimationFrame((delta) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !width) return
    const { rgb, background } = RADAR_COLORS[palette]
    const color = (alpha: number) => `rgba(${rgb},${alpha})`
    timeRef.current += delta
    const now = timeRef.current
    const previous = sweepRef.current
    sweepRef.current = (previous + ((rpm * Math.PI * 2) / 60) * (delta / 1000)) % (Math.PI * 2)
    const sweep = sweepRef.current

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = background
    ctx.fillRect(0, 0, width, height)
    const cx = width / 2
    const cy = height / 2
    const R = Math.min(width, height) * 0.44

    // Range rings, crosshair and bearing ticks.
    ctx.strokeStyle = color(0.35)
    ctx.lineWidth = 1
    for (let i = 1; i <= 4; i++) {
      ctx.beginPath()
      ctx.arc(cx, cy, (R * i) / 4, 0, Math.PI * 2)
      ctx.stroke()
    }
    ctx.beginPath()
    ctx.moveTo(cx - R, cy)
    ctx.lineTo(cx + R, cy)
    ctx.moveTo(cx, cy - R)
    ctx.lineTo(cx, cy + R)
    ctx.stroke()
    ctx.fillStyle = color(0.7)
    ctx.font = `${Math.max(9, R * 0.045)}px ui-monospace, monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (let deg = 0; deg < 360; deg += 10) {
      const a = (deg - 90) * (Math.PI / 180)
      const inner = deg % 30 === 0 ? R * 0.95 : R * 0.975
      ctx.beginPath()
      ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner)
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R)
      ctx.stroke()
      if (deg % 30 === 0) ctx.fillText(String(deg).padStart(3, '0'), cx + Math.cos(a) * R * 1.07, cy + Math.sin(a) * R * 1.07)
    }

    // Sweep with a fading phosphor trail.
    const trail = Math.PI / 2.2
    const slices = 48
    for (let i = 0; i < slices; i++) {
      const a1 = sweep - (trail * (i + 1)) / slices
      const a2 = sweep - (trail * i) / slices
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, R, a1 - Math.PI / 2, a2 - Math.PI / 2)
      ctx.closePath()
      ctx.fillStyle = color(0.28 * Math.pow(1 - i / slices, 2))
      ctx.fill()
    }
    ctx.strokeStyle = color(0.95)
    ctx.lineWidth = 2
    ctx.shadowColor = color(1)
    ctx.shadowBlur = 12
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(sweep - Math.PI / 2) * R, cy + Math.sin(sweep - Math.PI / 2) * R)
    ctx.stroke()
    ctx.shadowBlur = 0

    // Contacts light up when the beam passes, then fade.
    let pinged = false
    for (const c of contactsRef.current) {
      c.angle = (c.angle + Math.cos(c.drift) * c.speed * (delta / 1000)) % (Math.PI * 2)
      c.dist = Math.min(0.97, Math.max(0.08, c.dist + Math.sin(c.drift) * c.speed * 0.4 * (delta / 1000)))
      const a = (c.angle + Math.PI * 2) % (Math.PI * 2)
      const crossed = previous <= sweep ? a > previous && a <= sweep : a > previous || a <= sweep
      if (crossed) {
        c.lastHit = now
        pinged = true
      }
      const age = (now - c.lastHit) / 1000
      const alpha = Math.max(0, 1 - age / ((60 / rpm) * 0.95))
      if (alpha <= 0) continue
      const x = cx + Math.cos(a - Math.PI / 2) * c.dist * R
      const y = cy + Math.sin(a - Math.PI / 2) * c.dist * R
      ctx.fillStyle = color(alpha)
      ctx.shadowColor = color(alpha)
      ctx.shadowBlur = 10
      ctx.beginPath()
      ctx.arc(x, y, Math.max(2.5, R * 0.014), 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
      if (labels) {
        ctx.textAlign = 'left'
        ctx.fillStyle = color(alpha * 0.85)
        ctx.font = `${Math.max(9, R * 0.04)}px ui-monospace, monospace`
        ctx.fillText(`TGT-${String(c.id).padStart(2, '0')}`, x + 8, y - 8)
        ctx.textAlign = 'center'
      }
    }
    if (pinged && ping) playTone(1320, 120, 0.05)

    // Corner readouts.
    const bearing = Math.round(((sweep * 180) / Math.PI) % 360)
    const pad = 14
    ctx.font = `${Math.max(10, Math.min(width, height) * 0.024)}px ui-monospace, monospace`
    ctx.fillStyle = color(0.85)
    ctx.textAlign = 'left'
    ctx.textBaseline = 'bottom'
    ctx.fillText(`BRG ${String(bearing).padStart(3, '0')}°`, pad, height - pad - 18)
    ctx.fillText(`RNG 40 NM · ${rpm} RPM`, pad, height - pad)
    ctx.textAlign = 'right'
    const clock = new Date().toISOString().slice(11, 19)
    ctx.fillText(`${clock} UTC`, width - pad, height - pad - 18)
    ctx.fillText(`CONTACTS ${String(contactsRef.current.length).padStart(2, '0')}`, width - pad, height - pad)
  })

  return (
    <ToolStage
      label="Fake radar screen"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      badge="Simulation"
      style={{ background: RADAR_COLORS[palette].background }}
      controls={
        <ControlRow>
          <Segmented
            label="Color"
            value={palette}
            onChange={setPalette}
            options={(Object.keys(RADAR_COLORS) as (keyof typeof RADAR_COLORS)[]).map((key) => ({ value: key, label: RADAR_COLORS[key].label }))}
          />
          <Slider label="Sweep speed" value={rpm} min={4} max={40} onChange={setRpm} format={(v) => `${v} rpm`} />
          <Slider label="Contacts" value={count} min={0} max={24} onChange={setCount} />
          <Toggle label="Contact labels" checked={labels} onChange={setLabels} />
          <Toggle label="Ping sound" checked={ping} onChange={setPing} />
        </ControlRow>
      }
    >
      <div className="relative size-full">
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
      </div>
    </ToolStage>
  )
}

/* ---------------- Fake Blue Screen of Death ---------------- */

const BSOD_STYLES = {
  win10: { label: 'Windows 10', background: '#0078d7' },
  win11: { label: 'Windows 11', background: '#0063b1' },
  black: { label: 'Black (new)', background: '#000000' },
  classic: { label: 'Classic (XP/7)', background: '#0000aa' },
} as const

const STOP_CODES = [
  'CRITICAL_PROCESS_DIED',
  'IRQL_NOT_LESS_OR_EQUAL',
  'SYSTEM_SERVICE_EXCEPTION',
  'PAGE_FAULT_IN_NONPAGED_AREA',
  'KMODE_EXCEPTION_NOT_HANDLED',
  'MEMORY_MANAGEMENT',
  'DPC_WATCHDOG_VIOLATION',
  'VIDEO_TDR_FAILURE',
] as const

/** A decorative square of blocks in the place of the QR code (it does not encode anything). */
function FakeQr() {
  const cells = 21
  let seed = 7
  const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
  const finder = (x: number, y: number) => {
    const inBox = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7
    const ring = (ox: number, oy: number) => {
      const dx = x - ox
      const dy = y - oy
      return dx === 0 || dy === 0 || dx === 6 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)
    }
    if (inBox(0, 0)) return ring(0, 0)
    if (inBox(14, 0)) return ring(14, 0)
    if (inBox(0, 14)) return ring(0, 14)
    return null
  }
  const rects: React.ReactNode[] = []
  for (let y = 0; y < cells; y++)
    for (let x = 0; x < cells; x++) {
      const f = finder(x, y)
      if (f ?? random() < 0.5) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />)
    }
  return (
    <svg viewBox="-1 -1 23 23" aria-hidden="true" className="shrink-0 bg-white" style={{ width: '13cqmin', height: '13cqmin' }} fill="currentColor">
      {rects}
    </svg>
  )
}

export function FakeBlueScreen() {
  const [style, setStyle] = useState<keyof typeof BSOD_STYLES>('win10')
  const [stopCode, setStopCode] = useState<string>(STOP_CODES[0])
  const [seconds, setSeconds] = useState(30)
  const [progress, setProgress] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return
    // Jumps in uneven steps, like the real counter.
    const id = window.setInterval(() => {
      setProgress((value) => (value >= 100 ? 100 : Math.min(100, value + Math.ceil(Math.random() * (200 / seconds)))))
    }, 1000)
    return () => window.clearInterval(id)
  }, [isRunning, seconds])

  const look = BSOD_STYLES[style]
  const classic = style === 'classic'

  return (
    <ToolStage
      label="Fake blue screen of death"
      tone="dark"
      reserveHeadingSpace
      doubleClickFullscreen
      badge="Simulation"
      style={{ background: look.background }}
      controls={
        <ControlRow>
          <Segmented
            label="Style"
            value={style}
            onChange={setStyle}
            options={(Object.keys(BSOD_STYLES) as (keyof typeof BSOD_STYLES)[]).map((key) => ({ value: key, label: BSOD_STYLES[key].label }))}
          />
          <label className="flex flex-col gap-1.5 text-sm font-medium">
            {tx('Stop code')}
            <select value={stopCode} onChange={(e) => setStopCode(e.target.value)} className="h-10 rounded-xl border bg-background px-2.5 text-sm">
              {STOP_CODES.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </label>
          <Slider label="Reach 100% in" value={seconds} min={10} max={120} step={5} onChange={setSeconds} format={(v) => `~${v} s`} />
          <ActionButton
            onClick={() => {
              setProgress(0)
              setIsRunning(true)
            }}
          >
            Restart counter
          </ActionButton>
        </ControlRow>
      }
    >
      <div className="size-full select-none text-white" style={{ containerType: 'size' }}>
        {classic ? (
          <div className="flex size-full flex-col justify-center gap-[2.4cqmin] px-[6cqw] font-mono leading-snug" style={{ fontSize: 'clamp(9px, 2.6cqmin, 22px)' }}>
            <p>{tx('A problem has been detected and Windows has been shut down to prevent damage to your computer.')}</p>
            <p>{stopCode}</p>
            <p>
              If this is the first time you&apos;ve seen this stop error screen, restart your computer. If this screen appears again, follow these steps:
            </p>
            <p>{tx('Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any updates you might need.')}</p>
            <p>{tx('Technical information:')}</p>
            <p>*** STOP: 0x000000EF (0x8A2C1B20, 0x00000000, 0x00000000, 0x00000000)</p>
            <p>{tx('Collecting data for crash dump ... Dumping physical memory to disk:')}{' '}{progress}</p>
          </div>
        ) : (
          <div className="flex size-full flex-col justify-center gap-[3cqmin] px-[9cqw]" style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}>
            {style !== 'black' && <p className="font-light leading-none" style={{ fontSize: '16cqmin' }}>:(</p>}
            <p className="max-w-[38ch] font-light leading-snug" style={{ fontSize: 'clamp(13px, 4.2cqmin, 40px)' }}>
              {style === 'black'
                ? tx("Your device ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.")
                : tx("Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.")}
            </p>
            <p className="font-light" style={{ fontSize: 'clamp(13px, 4.2cqmin, 40px)' }}>
              {tx('{n}% complete').replace('{n}', String(progress))}
            </p>
            {style !== 'black' && (
              <div className="flex items-start gap-[2.5cqmin]" style={{ fontSize: 'clamp(8px, 1.9cqmin, 18px)' }}>
                <span style={{ color: look.background }}>
                  <FakeQr />
                </span>
                <div className="flex flex-col gap-[1cqmin] leading-snug">
                  <p>{tx('For more information about this issue and possible fixes, search online for the stop code below.')}</p>
                  <p>{tx('If you call a support person, give them this info:')}</p>
                  <p>{tx('Stop code:')}{' '}{stopCode}</p>
                </div>
              </div>
            )}
            {style === 'black' && <p style={{ fontSize: 'clamp(8px, 1.9cqmin, 18px)' }}>{tx('Stop code:')}{' '}{stopCode}</p>}
          </div>
        )}
      </div>
    </ToolStage>
  )
}
