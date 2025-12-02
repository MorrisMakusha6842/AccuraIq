import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, OnDestroy {
  // Navigation menu items
  navItems = [
    { label: 'Features', link: '#features' },
    { label: 'About', link: '#about' },
    { label: 'Help', link: '#help' },
    { label: 'FAQ', link: '#faq' }
  ];

  // Carousel state
  currentSlide = 0;
  carouselInterval: any;

  // Hero carousel slides
  heroSlides = [
    {
      title: 'AI-Powered Accounting',
      subtitle: 'Transform Your Business with Intelligent Automation',
      description: 'Say goodbye to manual data entry. Our AI captures and categorizes transactions through voice and image recognition.',
      image: ''
    },
    {
      title: 'Voice & Image Capture',
      subtitle: 'Speak or Snap Your Way to Perfect Books',
      description: 'Simply speak your transactions or take a photo of receipts. Our AI handles the rest with precision.',
      image: ''
    },
    {
      title: 'Real-Time Analytics',
      subtitle: 'Make Data-Driven Decisions Instantly',
      description: 'Get instant insights, forecasts, and reports. Stay ahead with AI-powered financial intelligence.',
      image: ''
    },
    {
      title: 'Eliminate Human Error',
      subtitle: 'Accuracy You Can Trust',
      description: 'No more typos, miscalculations, or fraud. Our AI ensures your books are always accurate and secure.',
      image: ''
    }
  ];

  // How it works steps
  howItWorksSteps = [
    {
      step: '01',
      title: 'Capture Transaction',
      description: 'Use voice commands or snap a photo of receipts, invoices, or bills. Our AI is ready to listen and see.'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Advanced AI analyzes and extracts key information: amounts, dates, vendors, categories, and more.'
    },
    {
      step: '03',
      title: 'Auto-Categorization',
      description: 'Transactions are automatically categorized into your general ledger with intelligent classification.'
    },
    {
      step: '04',
      title: 'Review & Approve',
      description: 'Quickly review AI suggestions and approve. Supervise critical functions like currency and tax rates.'
    }
  ];

  // Features
  features = [
    {
      icon: 'bolt',
      title: 'Time Management',
      description: 'Reduce accounting time by 80%. Focus on growing your business, not data entry.'
    },
    {
      icon: 'gps_fixed',
      title: 'Error Elimination',
      description: 'AI-powered accuracy eliminates typos and miscalculations from your books.'
    },
    {
      icon: 'shield',
      title: 'Fraud Prevention',
      description: 'Advanced detection algorithms identify suspicious patterns and anomalies.'
    },
    {
      icon: 'trending_up',
      title: 'Analytics & Forecasting',
      description: 'Real-time insights and predictive analytics for smarter decision-making.'
    },
    {
      icon: 'devices',
      title: 'Multi-Device Support',
      description: 'Access your books anywhere, anytime from any device with cloud sync.'
    },
    {
      icon: 'lock',
      title: 'Bank-Level Security',
      description: 'Enterprise-grade encryption keeps your financial data safe and compliant.'
    }
  ];

  // Testimonials
  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'This AI accounting system has transformed how we manage our finances. What used to take hours now takes minutes!'
    },
    {
      name: 'Michael Chen',
      role: 'Finance Director',
      company: 'GrowthCo',
      rating: 5,
      text: 'The voice capture feature is a game-changer. I can record transactions on the go and trust the AI to categorize them perfectly.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      company: 'Bloom Boutique',
      rating: 5,
      text: 'As a non-accountant, this system makes bookkeeping simple. The AI catches errors I would have missed!'
    }
  ];

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds for smoother transitions
  }

  stopCarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopCarousel();
    this.startCarousel();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
