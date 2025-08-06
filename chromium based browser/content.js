function blurOnlyChatHistory() {
  const sidebar = document.querySelector('nav');

  if (!sidebar) return;

  // All anchor tags that link to a specific conversation
  const chatLinks = sidebar.querySelectorAll('a[href^="/c/"]');

  chatLinks.forEach(link => {
    // Prevent duplicate classing
    if (!link.classList.contains('blur-chat-item')) {
      link.classList.add('blur-chat-item');
    }
  });
}

// Use MutationObserver to keep catching new chats
const observer = new MutationObserver(() => blurOnlyChatHistory());

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Run once after initial load
window.addEventListener('load', () => {
  setTimeout(blurOnlyChatHistory, 1000);
});
