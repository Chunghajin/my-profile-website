const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('public/index.html', 'utf8');
for (const id of ['home','about','projects','contact']) {
  assert(html.includes(`id="${id}"`));
  assert(html.includes(`href="#${id}"`));
}
assert(!html.includes('href="#"'));
assert.equal((html.match(/class="project-main-link"/g) || []).length, 3);
assert(html.includes('href="mailto:hong@example.com"'));
const elements = {};
for (const id of ['emailText','copyEmailBtn','contactForm','senderSubject','senderMessage','senderName','senderEmail','formSuccessToast']) {
  elements[id] = { value: '문의 & 협업', href: 'mailto:hong@example.com', textContent: 'hong@example.com', addEventListener(type, fn) { this[type] = fn; }, setAttribute() {}, querySelector() {return {};}, classList: {remove() {}} };
}
const context = { document: {getElementById: id => elements[id], querySelectorAll: () => []}, window: {location: {}}, navigator: {clipboard: {writeText: async () => {}}}, IntersectionObserver: class {observe() {}}, encodeURIComponent };
vm.runInNewContext(fs.readFileSync('public/script.js','utf8'), context);
elements.contactForm.submit({preventDefault() {}});
assert(context.window.location.href.startsWith('mailto:hong@example.com?subject='));
assert(context.window.location.href.includes(encodeURIComponent('문의 & 협업')));
assert(context.window.location.href.includes('&body='));
console.log('PASS: section anchors, project links, email link, encoded contact-form mailto');

for (const match of html.matchAll(/href="#([^\"]+)"/g)) assert(html.includes(`id="${match[1]}"`));
for (const match of html.matchAll(/<img[^>]*src="([^\"]+)"/g)) {
  assert(!match[1].startsWith('http'));
  assert(fs.existsSync(`public/${match[1]}`), match[1]);
}
