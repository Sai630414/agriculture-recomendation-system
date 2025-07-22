import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.html',
  imports:[CommonModule],
  styleUrls: ['./content2.css'],
})
export class Content2 implements OnInit, AfterViewInit {
  isContent2Visible = false;
  isSpraying = false;
  isFlying = false;

  droneX = window.innerWidth;
  droneY = 150;
  droneScale = 1;

  sprayParticles: {
    x: number;
    y: number;
    size: number;
    opacity: number;
    lifetime: number;
    fadeRate: number;
    speed: number;
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

    let frame = 0;

    setInterval(() => {
      if (!this.isFlying) return;

      frame++;

      // Smooth flight movement
      this.droneX -= 2.5;
      this.droneY = 150 + 30 * Math.sin(frame * 0.05);
      this.droneScale = 1 + 0.05 * Math.sin(frame * 0.03);

      if (this.droneX < -150) {
        this.droneX = window.innerWidth + 100;
      }

      // Add droplets under the drone
      if (this.isSpraying) {
        for (let i = 0; i < 3; i++) {
          this.sprayParticles.push({
            x: this.droneX + 50 + Math.random() * 20 - 10,
            y: this.droneY + 90 + Math.random() * 5,
            size: Math.random() * 2 + 2,
            opacity: 0.9,
            lifetime: 60,
            fadeRate: 0.02 + Math.random() * 0.01,
            speed: 3 + Math.random() * 2,
          });
        }
      }

      // Move and fade droplets
      this.sprayParticles = this.sprayParticles
        .map(p => ({
          ...p,
          y: p.y + p.speed,
          opacity: p.opacity - p.fadeRate,
          lifetime: p.lifetime - 1
        }))
        .filter(p => p.lifetime > 0 && p.opacity > 0);
    }, 40);
  }

  toggleFlying() {
    this.isFlying = !this.isFlying;
  }

  toggleSpray() {
    this.isSpraying = !this.isSpraying;
  }
}
