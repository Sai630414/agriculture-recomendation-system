import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.html',
  styleUrls: ['./content2.css'],
})
export class Content2 implements OnInit, AfterViewInit {
  isContent2Visible = false;
  isSpraying = false;
  isFlying = false;

  droneX = window.innerWidth;
  droneY = 100;

  sprayParticles: {
    x: number;
    y: number;
    size: number;
    opacity: number;
    lifetime: number;
  }[] = [];

  ngOnInit() {}

  ngAfterViewInit(): void {}

  @HostListener('window:scroll', [])
  checkScroll() {
    const content2 = document.getElementById('content2');
    if (content2) {
      const rect = content2.getBoundingClientRect();
      this.isContent2Visible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (this.isContent2Visible && !this.isFlying) {
        this.startDrone();
      }
    }
  }

  startDrone() {
    this.isFlying = true;
    this.isSpraying = true;

    setInterval(() => {
      if (!this.isFlying) return;

      // Move left
      this.droneX -= 4;

      // Vertical wobble
      this.droneY += Math.random() * 10 - 5;
      if (this.droneY < 50) this.droneY = 50;
      if (this.droneY > 250) this.droneY = 250;

      // Reset to right side
      if (this.droneX < -100) {
        this.droneX = window.innerWidth + 100;
      }

      // Add new spray particle if spraying
      if (this.isSpraying) {
        this.sprayParticles.push({
          x: 60 + Math.random() * 20 - 10, // ✅ Relative to drone
          y: 80 + Math.random() * 10,
          size: Math.random() * 5 + 2,
          opacity: 1,
          lifetime: 100,
        });
      }

      // Update particles
      this.sprayParticles = this.sprayParticles
        .map(p => ({
          ...p,
          y: p.y + 1 + Math.random(),
          opacity: p.opacity - 0.01,
          lifetime: p.lifetime - 1
        }))
        .filter(p => p.lifetime > 0 && p.opacity > 0);
    }, 50);
  }

  toggleFlying() {
    this.isFlying = !this.isFlying;
  }

  toggleSpray() {
    this.isSpraying = !this.isSpraying;
  }
}
