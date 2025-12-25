/* Accordion behavior: closed by default, one open at a time within a group */
(function () {
  function setupAccordion(itemSelector, buttonSelector) {
    const items = Array.from(document.querySelectorAll(itemSelector));
    if (!items.length) return;

    items.forEach((item) => {
      const button = item.querySelector(buttonSelector);
      if (!button) return;

      item.classList.remove("open");
      button.setAttribute("aria-expanded", "false");

      button.addEventListener("click", () => {
        const group = item.closest("[data-accordion-group], .accordion-group, section") || document;
        const groupItems = Array.from(group.querySelectorAll(itemSelector));

        groupItems.forEach((other) => {
          if (other === item) return;
          other.classList.remove("open");
          const otherButton = other.querySelector(buttonSelector);
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        });

        const isOpen = item.classList.toggle("open");
        button.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setupAccordion(".accordion-item", ".accordion-button, .accordion-header");
      setupAccordion(".accordion", ".accordion-header");
      setupAccordion(".faq-item", ".faq-header");
    });
  } else {
    setupAccordion(".accordion-item", ".accordion-button, .accordion-header");
    setupAccordion(".accordion", ".accordion-header");
    setupAccordion(".faq-item", ".faq-header");
  }
})();
