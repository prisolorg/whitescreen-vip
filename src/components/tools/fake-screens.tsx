'use client'

import { useEffect, useRef, useState } from 'react'
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
import { ControlRow, Slider, Toggle, TextInput, ActionButton } from '@/components/tool-kit/controls'
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
            {isPaused ? 'Resume' : 'Pause'}
          </ActionButton>
          <ActionButton
            variant="outline"
            className="text-red-500 hover:text-red-600"
            onClick={() => setIsBsod((b) => !b)}
          >
            <AlertTriangle aria-hidden="true" />
            {isBsod ? 'Restore Update' : 'Trigger BSOD Prank'}
          </ActionButton>
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
                Your PC ran into a problem and needs to restart. We&apos;re just collecting some error
                info, and then we&apos;ll restart for you.
              </div>
              <div className="mt-8 text-lg sm:text-2xl font-light">
                {percent}% complete
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm sm:text-base font-light">
              <div className="size-24 sm:size-32 bg-white/20 p-2 border border-white/40 flex items-center justify-center font-mono text-xs">
                QR CODE
              </div>
              <div>
                <p>For more information about this issue and possible fixes, visit https://windows.com/stopcode</p>
                <p className="mt-2 text-xs font-mono opacity-80">Stop code: CRITICAL_PROCESS_DIED</p>
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
                  Working on updates {percent}% complete.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-400">
                  Don&apos;t turn off your PC. This will take a while.
                </p>
              </div>
            )}

            {/* Windows 11 */}
            {os === 'win11' && (
              <div className="flex size-full flex-col items-center justify-center bg-[#000000] p-6 text-center">
                {/* Fluent ring */}
                <div className="size-16 mb-8 rounded-full border-4 border-neutral-700 border-t-white animate-spin" />
                <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-white">
                  Working on updates
                </h2>
                <div className="mt-2 font-mono text-lg text-neutral-300">{percent}%</div>
                <p className="mt-3 text-sm text-neutral-400">
                  Please keep your computer on and plugged in.
                </p>
              </div>
            )}

            {/* macOS */}
            {os === 'mac' && (
              <div className="flex size-full flex-col items-center justify-center bg-black p-6">
                {/* Apple logo SVG */}
                <svg className="size-20 mb-12 fill-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-7.06-10.74-12.72-22.99-16.99-36.75-4.26-13.76-6.39-26.68-6.39-38.77 0-14.65 3.73-26.97 11.2-36.96 7.47-9.98 17.1-15.09 28.9-15.34 4.58 0 9.87 1.25 15.86 3.76 5.99 2.5 9.77 3.8 11.34 3.91 1.9-.22 5.86-1.55 11.89-4 6.03-2.45 11.19-3.61 15.49-3.48 10.96.65 19.86 4.7 26.71 12.16-9.67 5.86-14.39 14.19-14.16 24.99.23 8.35 3.37 15.39 9.42 21.13 6.05 5.74 13.25 9.07 21.6 10 1.2 5.1 1.96 10.27 2.28 15.52.32 5.25.05 10.51-.81 15.78zM119.22 33.64c0-7.05 2.5-13.73 7.51-20.04 5.01-6.31 11.23-10.36 18.66-12.14.77 7.05-1.46 13.77-6.68 20.15-5.22 6.38-11.71 10.39-19.49 12.03z" />
                </svg>
                {/* Progress bar */}
                <div className="w-64 sm:w-80 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300 rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <p className="mt-4 text-xs font-mono text-neutral-400">
                  About {Math.max(1, Math.round((100 - percent) * 0.4))} minutes remaining
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
                  Please wait...
                </h2>
                <p className="mt-3 text-lg text-neutral-200">
                  Installing update {Math.min(18, Math.max(1, Math.floor(percent / 5)))} of 18...
                </p>
                <p className="mt-6 text-sm text-yellow-300 font-medium">
                  Do not turn off or unplug your computer.
                </p>
              </div>
            )}

            {/* Android Update */}
            {os === 'android' && (
              <div className="flex size-full flex-col items-center justify-center bg-black p-6 text-center">
                <div className="size-20 mb-8 rounded-full border-4 border-[#3DDC84] border-dashed animate-spin" />
                <h2 className="text-xl sm:text-2xl font-medium text-white">
                  Installing system update
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
                  Updating your device
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
                  Installing updates... ({percent}%)
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
  const [meetingTitle, setMeetingTitle] = useState('Weekly All-Hands & Strategy Sync')
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(false)
  const [isHandRaised, setIsHandRaised] = useState(false)
  const [activeSpeaker, setActiveSpeaker] = useState(0)

  const [elapsed, setElapsed] = useState(0)
  const [clockTime, setClockTime] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

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
      label={appType === 'teams' ? 'Fake Teams meeting' : appType === 'zoom' ? 'Fake Zoom meeting' : appType === 'meet' ? 'Fake Google Meet meeting' : 'Fake video call'}
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
                Chat
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10 sm:flex">
                <Users className="size-[18px]" aria-hidden="true" />
                People
              </button>
              <button
                type="button"
                onClick={() => setIsHandRaised((value) => !value)}
                aria-pressed={isHandRaised}
                className={cn('flex flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10', isHandRaised && 'text-[#9ea2ff]')}
              >
                <Hand className="size-[18px]" aria-hidden="true" />
                Raise
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10 md:flex">
                <Smile className="size-[18px]" aria-hidden="true" />
                React
              </button>
              <span aria-hidden="true" className="mx-1 h-7 w-px bg-white/15" />
              <button
                type="button"
                onClick={() => setIsVideoOn((value) => !value)}
                aria-pressed={isVideoOn}
                className="flex flex-col items-center gap-0.5 rounded-md px-2 py-1 text-[10px] hover:bg-white/10"
              >
                {isVideoOn ? <VideoIcon className="size-[18px]" aria-hidden="true" /> : <VideoOff className="size-[18px]" aria-hidden="true" />}
                Camera
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
                Share
              </button>
              <button
                type="button"
                onClick={() => alert('Prank meeting simulation ended.')}
                className="ml-1.5 flex items-center gap-1.5 rounded-md bg-[#c4314b] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#a72940]"
              >
                <PhoneOff className="size-4" aria-hidden="true" />
                Leave
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
                <video ref={videoRef} autoPlay playsInline muted className="size-full scale-x-[-1] object-cover" />
              ) : (
                <div className="flex size-9 items-center justify-center rounded-full bg-[#5b5fc7] text-sm font-semibold sm:size-20 sm:text-2xl">You</div>
              )}
              <span className="absolute bottom-1.5 left-2 flex items-center gap-1 text-xs font-medium">
                {isMuted && <MicOff className="size-3 text-red-300" aria-hidden="true" />}
                You {isHandRaised && '✋'}
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
                    {participant.name}
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
                <video ref={videoRef} autoPlay playsInline muted className="size-full scale-x-[-1] object-cover" />
              ) : (
                <div className="flex size-10 items-center justify-center rounded-full bg-[#1a73e8] text-lg font-medium text-white sm:size-20 sm:text-3xl">Y</div>
              )}
              <span className="absolute bottom-1.5 left-2.5 text-xs font-medium sm:text-sm">You {isHandRaised && '✋'}</span>
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
                  <span className="absolute bottom-1.5 left-2.5 text-xs font-medium sm:text-sm">{participant.name}</span>
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
                aria-label={isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                aria-pressed={isMuted}
                className={cn('flex size-10 items-center justify-center rounded-full', isMuted ? 'bg-[#ea4335] text-white' : 'bg-[#3c4043] hover:bg-[#4a4e51]')}
              >
                {isMuted ? <MicOff className="size-5" aria-hidden="true" /> : <Mic className="size-5" aria-hidden="true" />}
              </button>
              <button
                type="button"
                onClick={() => setIsVideoOn((value) => !value)}
                aria-label={isVideoOn ? 'Turn off camera' : 'Turn on camera'}
                aria-pressed={isVideoOn}
                className={cn('flex size-10 items-center justify-center rounded-full', !isVideoOn ? 'bg-[#ea4335] text-white' : 'bg-[#3c4043] hover:bg-[#4a4e51]')}
              >
                {isVideoOn ? <VideoIcon className="size-5" aria-hidden="true" /> : <VideoOff className="size-5" aria-hidden="true" />}
              </button>
              <button type="button" aria-label="Captions" className="hidden size-10 items-center justify-center rounded-full bg-[#3c4043] hover:bg-[#4a4e51] sm:flex">
                <Captions className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsHandRaised((value) => !value)}
                aria-label="Raise hand"
                aria-pressed={isHandRaised}
                className={cn('hidden size-10 items-center justify-center rounded-full sm:flex', isHandRaised ? 'bg-[#8ab4f8] text-[#202124]' : 'bg-[#3c4043] hover:bg-[#4a4e51]')}
              >
                <Hand className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Present now" className="hidden size-10 items-center justify-center rounded-full bg-[#3c4043] hover:bg-[#4a4e51] sm:flex">
                <MonitorUp className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label="More options" className="flex size-10 items-center justify-center rounded-full bg-[#3c4043] hover:bg-[#4a4e51]">
                <MoreVertical className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => alert('Prank meeting simulation ended.')}
                aria-label="Leave call"
                className="flex h-10 w-14 items-center justify-center rounded-full bg-[#ea4335] text-white hover:bg-[#d93025]"
              >
                <PhoneOff className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden items-center gap-1 lg:flex">
              <button type="button" aria-label="Meeting details" className="flex size-10 items-center justify-center rounded-full hover:bg-[#3c4043]">
                <Info className="size-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Show everyone" className="relative flex size-10 items-center justify-center rounded-full hover:bg-[#3c4043]">
                <Users className="size-5" aria-hidden="true" />
                <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-[#5f6368] text-[10px]">{CALL_PARTICIPANTS.length + 1}</span>
              </button>
              <button type="button" aria-label="Chat with everyone" className="flex size-10 items-center justify-center rounded-full hover:bg-[#3c4043]">
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
                Recording…
              </span>
            </div>
            <span className="hidden min-w-0 truncate text-[12px] font-medium text-neutral-200 sm:block">{meetingTitle}</span>
            <span className="flex shrink-0 items-center gap-1.5 rounded px-2 py-0.5 text-[12px] text-neutral-200">
              <LayoutGrid className="size-3.5" aria-hidden="true" />
              View
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
                <video ref={videoRef} autoPlay playsInline muted className="size-full scale-x-[-1] object-cover" />
              ) : (
                <span className="px-2 text-center text-sm font-medium sm:text-2xl">You</span>
              )}
              <span className="absolute bottom-1 left-1 flex items-center gap-1 rounded-sm bg-black/55 px-1.5 py-0.5 text-[11px]">
                {isMuted && <MicOff className="size-3 text-[#e02828]" aria-hidden="true" />}
                You {isHandRaised && '✋'}
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
                  <span className="px-2 text-center text-sm font-medium sm:text-2xl">{participant.name}</span>
                  <span className="absolute bottom-1 left-1 flex items-center gap-1 rounded-sm bg-black/55 px-1.5 py-0.5 text-[11px]">
                    {!isSpeaking && <MicOff className="size-3 text-[#e02828]" aria-hidden="true" />}
                    {participant.name}
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
                <span className="max-sm:sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
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
                <span className="max-sm:sr-only">{isVideoOn ? 'Stop Video' : 'Start Video'}</span>
              </button>
            </div>

            <div className="flex items-center">
              <button type="button" className="flex flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:px-3">
                <span className="relative">
                  <Users className="size-5" aria-hidden="true" />
                  <span className="absolute -right-2.5 -top-1 text-[10px] font-semibold">{CALL_PARTICIPANTS.length + 1}</span>
                </span>
                <span className="max-sm:sr-only">Participants</span>
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:flex sm:px-3">
                <MessageSquare className="size-5" aria-hidden="true" />
                Chat
              </button>
              <button type="button" className="flex flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:px-3">
                <span className="flex size-5 items-center justify-center rounded-[5px] bg-[#23d160]">
                  <ArrowUp className="size-3.5 text-black" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="max-sm:sr-only">Share Screen</span>
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 md:flex md:px-3">
                <Circle className="size-5" aria-hidden="true" />
                Record
              </button>
              <button
                type="button"
                onClick={() => setIsHandRaised((value) => !value)}
                aria-pressed={isHandRaised}
                className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 sm:flex sm:px-3"
              >
                <Smile className={cn('size-5', isHandRaised && 'text-yellow-300')} aria-hidden="true" />
                Reactions
              </button>
              <button type="button" className="hidden flex-col items-center gap-0.5 rounded px-2 py-1 hover:bg-white/10 md:flex md:px-3">
                <MoreHorizontal className="size-5" aria-hidden="true" />
                More
              </button>
            </div>

            <button
              type="button"
              onClick={() => alert('Prank meeting simulation ended.')}
              className="rounded-md bg-[#e02828] px-4 py-1.5 text-[13px] font-semibold text-white hover:bg-[#c81f1f]"
            >
              End
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
              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px]">REC</span>
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
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="size-full object-cover scale-x-[-1]"
                />
              ) : (
                <div className="max-sm:hidden size-9 sm:size-20 rounded-full bg-primary flex items-center justify-center text-sm sm:text-2xl font-bold text-white shadow-lg">
                  YOU
                </div>
              )}
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-black/60 px-2 py-1 text-xs backdrop-blur">
                {isMuted ? <MicOff className="size-3 text-red-400" /> : <Mic className="size-3 text-emerald-400" />}
                <span>You {isHandRaised && '✋'}</span>
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
                    <span>{participant.name}</span>
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
              <span className="max-sm:sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
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
              <span className="max-sm:sr-only">{isVideoOn ? 'Stop Video' : 'Start Video'}</span>
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
              <span className="max-sm:sr-only">Raise Hand</span>
            </button>
  
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors"
            >
              <Share2 className="size-5" />
              <span className="max-sm:sr-only">Share</span>
            </button>
  
            <button
              type="button"
              className="flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="size-5" />
              <span className="max-sm:sr-only">Chat</span>
            </button>
  
            <div className="h-6 w-px bg-white/20 mx-1" />
  
            <button
              type="button"
              onClick={() => alert('Prank call simulation ended.')}
              className="flex items-center gap-1.5 rounded-lg bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-semibold text-white shadow transition-colors"
            >
              <PhoneOff className="size-4" />
              <span>Leave</span>
            </button>
          </div>
        </div>
      )}
    </ToolStage>
  )
}
