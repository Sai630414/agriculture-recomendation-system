import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'farmer';
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/019830c0d33c7c0c9c7130e441b9886f1bef/embed.js?skipWelcome=1&maximizable=1';
    script.async = true;
    document.body.appendChild(script);
  }

  toggleChatbot() {
    // This sends a message to the iframe created by Jotform to open the chat
    const iframe: HTMLIFrameElement | null = document.querySelector('iframe[src*="jotform"]');
    if (iframe) {
      iframe.contentWindow?.postMessage({ type: 'SHOW' }, '*');
    }
  }
}
