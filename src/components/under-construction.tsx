"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  MdTerminal,
  MdSportsEsports,
  MdRestartAlt,
  MdArrowBack,
  MdCode,
} from "react-icons/md";
import { jetbrainsMono } from "@/utils/fonts";

export function UnderConstruction({ title = "this page." }: { title?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const startScreenRef = useRef<HTMLDivElement>(null);
  const gameoverScreenRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const highScoreRef = useRef<HTMLSpanElement>(null);
  const finalScoreRef = useRef<HTMLParagraphElement>(null);
  const retryBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvasMaybe = canvasRef.current;
    const viewportMaybe = viewportRef.current;
    const startScreenMaybe = startScreenRef.current;
    const gameoverScreenMaybe = gameoverScreenRef.current;
    const scoreElMaybe = scoreRef.current;
    const highScoreElMaybe = highScoreRef.current;
    const finalScoreElMaybe = finalScoreRef.current;
    const retryBtnMaybe = retryBtnRef.current;
    if (
      !canvasMaybe ||
      !viewportMaybe ||
      !startScreenMaybe ||
      !gameoverScreenMaybe ||
      !scoreElMaybe ||
      !highScoreElMaybe ||
      !finalScoreElMaybe ||
      !retryBtnMaybe
    ) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasMaybe;
    const viewport: HTMLDivElement = viewportMaybe;
    const startScreen: HTMLDivElement = startScreenMaybe;
    const gameoverScreen: HTMLDivElement = gameoverScreenMaybe;
    const scoreEl: HTMLSpanElement = scoreElMaybe;
    const highScoreEl: HTMLSpanElement = highScoreElMaybe;
    const finalScoreEl: HTMLParagraphElement = finalScoreElMaybe;
    const retryBtn: HTMLButtonElement = retryBtnMaybe;
    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx: CanvasRenderingContext2D = maybeCtx;

    const WIDTH = 800;
    const HEIGHT = 400;
    const GROUND_Y = 330;

    let animationFrameId: number | null = null;
    let isPlaying = false;
    let isGameOver = false;
    let score = 0;
    let highScore = parseInt(localStorage.getItem("aucss_dino_hi") || "0", 10);
    highScoreEl.textContent = String(highScore).padStart(5, "0");

    let gameSpeed = 6;
    let frameCount = 0;

    const player = {
      x: 60,
      y: GROUND_Y - 44,
      w: 36,
      h: 44,
      dy: 0,
      jumpForce: -13.5,
      gravity: 0.68,
      grounded: true,
      ducking: false,
      legFrame: 0,
      reset() {
        this.y = GROUND_Y - 44;
        this.dy = 0;
        this.grounded = true;
        this.ducking = false;
        this.h = 44;
      },
      jump() {
        if (this.grounded) {
          this.dy = this.jumpForce;
          this.grounded = false;
        }
      },
      duck(isDown: boolean) {
        if (this.grounded) {
          this.ducking = isDown;
          this.h = isDown ? 26 : 44;
          this.y = isDown ? GROUND_Y - 26 : GROUND_Y - 44;
        } else if (isDown) {
          this.dy += 1.5;
        }
      },
      update() {
        if (!this.grounded) {
          this.dy += this.gravity;
          this.y += this.dy;

          const targetFloor = this.ducking ? GROUND_Y - 26 : GROUND_Y - 44;
          if (this.y >= targetFloor) {
            this.y = targetFloor;
            this.dy = 0;
            this.grounded = true;
          }
        }
        if (frameCount % 6 === 0) {
          this.legFrame = (this.legFrame + 1) % 2;
        }
      },
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "#D80032";

        if (!this.ducking) {
          // Tail
          ctx.beginPath();
          ctx.roundRect(0, 20, 10, 8, 2);
          ctx.fill();
          // Body
          ctx.beginPath();
          ctx.roundRect(6, 6, 20, 22, 3);
          ctx.fill();
          // Head
          ctx.beginPath();
          ctx.roundRect(20, 0, 16, 14, 2);
          ctx.fill();
          // Jaw
          ctx.fillRect(30, 12, 8, 4);
          // Arm
          ctx.fillRect(14, 20, 3, 8);
          // Eye
          ctx.fillStyle = "#191C1E";
          ctx.fillRect(30, 4, 3, 3);

          ctx.fillStyle = "#D80032";
          if (this.grounded) {
            if (this.legFrame === 0) {
              ctx.fillRect(10, 28, 5, 14);
              ctx.fillRect(10, 40, 8, 3);
              ctx.fillRect(20, 28, 5, 10);
            } else {
              ctx.fillRect(10, 28, 5, 10);
              ctx.fillRect(20, 28, 5, 14);
              ctx.fillRect(20, 40, 8, 3);
            }
          } else {
            ctx.fillRect(10, 28, 6, 8);
            ctx.fillRect(20, 28, 6, 8);
          }
        } else {
          // Ducking: low, elongated silhouette
          ctx.beginPath();
          ctx.roundRect(0, 10, 34, 12, 3);
          ctx.fill();
          ctx.beginPath();
          ctx.roundRect(28, 6, 12, 10, 2);
          ctx.fill();
          ctx.fillStyle = "#191C1E";
          ctx.fillRect(36, 8, 3, 3);
          ctx.fillStyle = "#D80032";
          ctx.fillRect(6, 22, 6, 6);
          ctx.fillRect(20, 22, 6, 6);
        }
        ctx.restore();
      },
    };

    type Obstacle = {
      x: number;
      w: number;
      h: number;
      y: number;
      type: "cactus-small" | "cactus-large";
      update: () => void;
      draw: () => void;
    };

    let obstacles: Obstacle[] = [];
    let obstacleTimer = 0;

    function createObstacle(): Obstacle {
      const type: Obstacle["type"] = Math.random() > 0.5 ? "cactus-small" : "cactus-large";
      const w = type === "cactus-small" ? 20 : 30;
      const h = type === "cactus-small" ? 34 : 48;
      const obstacle: Obstacle = {
        x: WIDTH + 20,
        w,
        h,
        y: GROUND_Y - h,
        type,
        update() {
          this.x -= gameSpeed;
        },
        draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.fillStyle = "#3A5A40";

          const stalkW = this.w > 24 ? 10 : 8;
          const stalkX = (this.w - stalkW) / 2;
          ctx.beginPath();
          ctx.roundRect(stalkX, 0, stalkW, this.h, 2);
          ctx.fill();

          ctx.beginPath();
          ctx.roundRect(stalkX - 6, this.h * 0.25, 6, 8, 2);
          ctx.fill();
          ctx.beginPath();
          ctx.roundRect(stalkX + stalkW, this.h * 0.45, 6, 8, 2);
          ctx.fill();

          if (this.type === "cactus-large") {
            ctx.beginPath();
            ctx.roundRect(stalkX - 6, this.h * 0.6, 6, 8, 2);
            ctx.fill();
          }
          ctx.restore();
        },
      };
      return obstacle;
    }

    const groundDots: { x: number; y: number; length: number }[] = [];
    for (let i = 0; i < 40; i++) {
      groundDots.push({
        x: Math.random() * WIDTH,
        y: GROUND_Y + 8 + Math.random() * 50,
        length: 2 + Math.random() * 8,
      });
    }

    function updateGround() {
      ctx.strokeStyle = "#926F6B";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(WIDTH, GROUND_Y);
      ctx.stroke();

      ctx.strokeStyle = "#D8DADC";
      ctx.lineWidth = 1.5;
      for (const dot of groundDots) {
        dot.x -= gameSpeed;
        if (dot.x < 0) dot.x = WIDTH + Math.random() * 30;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(dot.x + dot.length, dot.y);
        ctx.stroke();
      }
    }

    let shockwave: { x: number; y: number; r: number; alpha: number } | null = null;

    function spawnShockwave(x: number, y: number) {
      shockwave = { x, y, r: 4, alpha: 1 };
    }

    function renderShockwave() {
      if (!shockwave) return;
      ctx.save();
      ctx.strokeStyle = `rgba(216, 0, 50, ${shockwave.alpha})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(shockwave.x, shockwave.y, shockwave.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      shockwave.r += 4;
      shockwave.alpha -= 0.05;
      if (shockwave.alpha <= 0) shockwave = null;
    }

    function checkCollision(p: typeof player, o: Obstacle) {
      const pPaddingX = 6;
      const pPaddingY = 4;
      const oPaddingX = 4;
      const oPaddingY = 4;

      return (
        p.x + pPaddingX < o.x + o.w - oPaddingX &&
        p.x + p.w - pPaddingX > o.x + oPaddingX &&
        p.y + pPaddingY < o.y + o.h - oPaddingY &&
        p.y + p.h - pPaddingY > o.y + oPaddingY
      );
    }

    function gameOver() {
      isGameOver = true;
      isPlaying = false;
      spawnShockwave(player.x + player.w / 2, player.y + player.h / 2);

      if (score > highScore) {
        highScore = score;
        localStorage.setItem("aucss_dino_hi", String(highScore));
        highScoreEl.textContent = String(highScore).padStart(5, "0");
      }

      finalScoreEl.textContent = `Final Cycles Logged: ${String(score).padStart(5, "0")}`;
      gameoverScreen.classList.remove("hidden");
    }

    function resetGame() {
      obstacles = [];
      score = 0;
      gameSpeed = 6.2;
      frameCount = 0;
      obstacleTimer = 0;
      shockwave = null;
      isGameOver = false;
      player.reset();
      scoreEl.textContent = "00000";
      gameoverScreen.classList.add("hidden");
      startScreen.classList.add("hidden");
      isPlaying = true;
      loop();
    }

    function loop() {
      if (!isPlaying) {
        if (shockwave) {
          ctx.clearRect(0, 0, WIDTH, HEIGHT);
          updateGround();
          player.draw();
          obstacles.forEach((o) => o.draw());
          renderShockwave();
          animationFrameId = requestAnimationFrame(loop);
        }
        return;
      }

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      frameCount++;

      if (frameCount % 4 === 0) {
        score += 1;
        scoreEl.textContent = String(score).padStart(5, "0");
        if (score % 150 === 0 && gameSpeed < 14) {
          gameSpeed += 0.45;
        }
      }

      updateGround();

      obstacleTimer++;
      const nextThreshold = Math.max(55, 105 - Math.floor(score / 50));
      if (obstacleTimer > nextThreshold && Math.random() > 0.3) {
        obstacles.push(createObstacle());
        obstacleTimer = 0;
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.update();
        obs.draw();

        if (checkCollision(player, obs)) {
          gameOver();
          return;
        }

        if (obs.x + obs.w < 0) {
          obstacles.splice(i, 1);
        }
      }

      player.update();
      player.draw();

      animationFrameId = requestAnimationFrame(loop);
    }

    function handleJumpTrigger() {
      if (!isPlaying && !isGameOver) {
        resetGame();
      } else if (isGameOver) {
        resetGame();
      } else {
        player.jump();
      }
    }

    function handleKeydown(e: KeyboardEvent) {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleJumpTrigger();
      } else if (e.code === "ArrowDown") {
        e.preventDefault();
        if (isPlaying) player.duck(true);
      } else if (e.code === "Enter" && isGameOver) {
        resetGame();
      }
    }

    function handleKeyup(e: KeyboardEvent) {
      if (e.code === "ArrowDown") {
        player.duck(false);
      }
    }

    function handlePointerdown(e: PointerEvent) {
      e.preventDefault();
      handleJumpTrigger();
    }

    function handleRetryClick(e: MouseEvent) {
      e.stopPropagation();
      resetGame();
    }

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
    viewport.addEventListener("pointerdown", handlePointerdown);
    retryBtn.addEventListener("click", handleRetryClick);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    updateGround();
    player.draw();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
      viewport.removeEventListener("pointerdown", handlePointerdown);
      retryBtn.removeEventListener("click", handleRetryClick);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-6 py-16 max-w-5xl mx-auto flex flex-col items-center">
      <div
        className="absolute inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-border mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className={`${jetbrainsMono.className} text-xs font-semibold tracking-wider text-on-surface uppercase`}>Work in progress</span>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.08] mb-4">
          We&apos;re crafting <span className="text-primary italic">{title}</span>
        </h1>
      </div>

      <div className="w-full max-w-4xl bg-surface border border-border rounded-xl shadow-sm p-4 sm:p-6 sm:pb-8 flex flex-col relative">
        <div className="flex flex-wrap items-center justify-between pb-4 mb-3 border-b border-border gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-primary inline-block" />
              <span className="w-3 h-3 rounded-full bg-border inline-block" />
              <span className="w-3 h-3 rounded-full bg-border inline-block" />
            </div>
            <span className={`${jetbrainsMono.className} text-xs text-on-surface-variant font-medium tracking-wide flex items-center gap-1.5`}>
              <MdTerminal className="text-[14px]" />
              aucss-runner — 60fps
            </span>
          </div>
          <div className={`${jetbrainsMono.className} flex items-center gap-4 sm:gap-6 text-xs sm:text-sm`}>
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-lg">
              <span className="text-on-surface-variant uppercase text-[11px] font-semibold">HI</span>
              <span ref={highScoreRef} className="font-bold text-primary tracking-wider">00000</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container px-3 py-1 rounded-lg">
              <span className="text-on-surface-variant uppercase text-[11px] font-semibold">SCORE</span>
              <span ref={scoreRef} className="font-bold text-on-surface tracking-wider">00000</span>
            </div>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="relative w-full aspect-[2/1] min-h-[260px] max-h-[420px] bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center select-none cursor-pointer"
        >
          <canvas ref={canvasRef} className="w-full h-full block" height={400} width={800} />

          <div ref={startScreenRef} className="absolute inset-0 bg-surface/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-3 shadow-sm">
              <MdSportsEsports className="text-2xl" />
            </div>
            <p className="font-bold text-xl sm:text-2xl text-on-surface mb-1">AUCSS Infinite Runner</p>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm mb-5">
              Dodge recursive loops, syntax glitches, and failing servers.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low border border-border">
              <kbd className={`${jetbrainsMono.className} px-2 py-1 bg-surface text-on-surface text-xs font-bold rounded border border-border`}>SPACE</kbd>
              <span className={`${jetbrainsMono.className} text-xs text-on-surface-variant`}>or TAP SCREEN to Launch</span>
            </div>
          </div>

          <div ref={gameoverScreenRef} className="hidden absolute inset-0 bg-surface/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
            <span className={`${jetbrainsMono.className} text-xs uppercase tracking-widest text-primary font-bold mb-1`}>Segmentation fault</span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-on-surface mb-2">RUN TERMINATED</h2>
            <p ref={finalScoreRef} className={`${jetbrainsMono.className} text-sm text-on-surface-variant mb-6`}>Final Output: 00000</p>
            <button ref={retryBtnRef} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary hover:opacity-90 text-on-primary font-medium text-sm transition-all transform active:scale-95">
              <MdRestartAlt className="text-[18px]" />
              <span>RETRY COMPILATION (SPACE)</span>
            </button>
          </div>
        </div>

        <div className={`${jetbrainsMono.className} mt-4 flex flex-wrap items-center justify-between text-xs text-on-surface-variant pt-2`}>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-surface-container-low rounded text-[10px] font-bold text-on-surface">Space</kbd> / <kbd className="px-1.5 py-0.5 bg-surface-container-low rounded text-[10px] font-bold text-on-surface">↑</kbd> Jump
            </span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-surface-container-low rounded text-[10px] font-bold text-on-surface">↓</kbd> Duck / Faster Fall
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Engine: Custom 2D Canvas</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded bg-surface-container-low border border-border text-on-surface hover:bg-surface-container transition-colors"
        >
          <MdArrowBack className="text-base" />
          Return to Home
        </Link>
        <Link
          href="/events"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium rounded bg-on-surface text-white hover:bg-primary transition-colors"
        >
          <MdCode className="text-base" />
          Explore Events
        </Link>
      </div>
    </section>
  );
}
