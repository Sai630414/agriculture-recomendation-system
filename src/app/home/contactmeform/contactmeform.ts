import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import this

@Component({
  selector: 'app-contactmeform',
  imports: [FormsModule],
  templateUrl: './contactmeform.html',
  styleUrl: './contactmeform.css'
})
export class Contactmeform {

formData = {
    name: '',
    email: '',
    message: ''
  };

 isFormValid(): boolean {
  return Boolean(this.formData.name.trim()) &&
         Boolean(this.formData.email.trim()) &&
         Boolean(this.formData.message.trim());
}


  onSubmit() {
    if (this.isFormValid()) {
      alert('Form submitted successfully!');
    }
  }

 moveButton(event: MouseEvent) {
  const button = event.target as HTMLElement;

  if (!this.isFormValid() && button) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get button's position and size
    const rect = button.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    // Calculate direction away from cursor
    const dx = buttonX - mouseX;
    const dy = buttonY - mouseY;

    // Normalize direction and scale movement
    const magnitude = Math.sqrt(dx * dx + dy * dy);
    const moveX = (dx / magnitude) * 150; // 150px away
    const moveY = (dy / magnitude) * 150;

    // New position within window bounds
    const newLeft = Math.min(Math.max(rect.left + moveX, 0), window.innerWidth - rect.width);
    const newTop = Math.min(Math.max(rect.top + moveY, 0), window.innerHeight - rect.height);

    // Move the button
    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  }
}


resetButtonPosition(event: MouseEvent) {
  const button = event.target as HTMLElement;
  if (button) {
    button.style.position = 'static';
  }
}

}