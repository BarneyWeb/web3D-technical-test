// DOM
const iframe = document.querySelector('iframe')
const btns = document.querySelectorAll('.btn')

// Listening messages from the iframe
window.addEventListener('message', event => {
  if (event.data.type.startsWith('viceversa.viewer')) {
    console.log('Message:', event.data)
  }
})

// Button click listeners
for (const btn of btns) btn.addEventListener('click', event => {
  const btn = event.currentTarget
  // retrieve button color
  const color = btn.attributes.style.value.match(/background-color:\s*(#[0-9a-f]{6})/i)[1]
  // send message to iframe
  iframe.contentWindow.postMessage({
    type: "viceversa.viewer.setColor",
    value: color
  }, '*')
})