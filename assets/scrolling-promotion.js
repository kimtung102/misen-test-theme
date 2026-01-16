if (!customElements.get('scrolling-promotion')) {
  class ScrollingPromotion extends HTMLElement {
    constructor() {
      super();
      this.track = this.querySelector('.scrolling-promotion__track');
      this.initialized = false;
    }

    connectedCallback() {
      if (!this.initialized) {
        this.init();
        this.initialized = true;
      }
    }

    init() {
      // Wait for content to be fully rendered
      requestAnimationFrame(() => {
        this.duplicateContent();
        this.setupResizeObserver();
      });
    }

    duplicateContent() {
      if (!this.track) return;

      const originalItems = this.track.innerHTML;
      const containerWidth = this.offsetWidth;
      const contentWidth = this.track.scrollWidth;

      // Calculate how many copies we need to fill at least 2x the container width
      // This ensures smooth infinite scroll
      const copies = Math.ceil((containerWidth * 2) / contentWidth) + 1;

      // Clear and rebuild with duplicates
      let content = '';
      for (let i = 0; i < copies; i++) {
        content += originalItems;
      }
      this.track.innerHTML = content;
    }

    setupResizeObserver() {
      if ('ResizeObserver' in window) {
        let resizeTimeout;
        const resizeObserver = new ResizeObserver(() => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            this.duplicateContent();
          }, 250);
        });
        resizeObserver.observe(this);
      }
    }
  }

  customElements.define('scrolling-promotion', ScrollingPromotion);
}
