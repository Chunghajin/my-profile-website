const emailLink = document.getElementById('emailText');
const copyButton = document.getElementById('copyEmailBtn');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(emailLink.textContent);
    copyButton.setAttribute('aria-label', '이메일 복사 완료');
    copyButton.querySelector('span').textContent = 'done';
  } catch {
    copyButton.setAttribute('aria-label', '복사할 수 없습니다. 이메일 링크를 사용하세요.');
    copyButton.querySelector('span').textContent = 'error';
  }
});
const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const subject = document.getElementById('senderSubject').value;
  const body = `${document.getElementById('senderMessage').value}\n\n이름: ${document.getElementById('senderName').value}\n회신 이메일: ${document.getElementById('senderEmail').value}`;
  window.location.href = `${emailLink.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('formSuccessToast').classList.remove('hidden');
});
const menuLinks = document.querySelectorAll('.site-nav a');
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    for (const link of menuLinks) {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle('text-primary', active);
      link.classList.toggle('font-semibold', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
}, { rootMargin: '-15% 0px -60% 0px' });
document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
