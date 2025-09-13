const balls = document.querySelectorAll('.ball');
const board = document.getElementById('board');
let activeBall = null;
let offsetX = 0;
let offsetY = 0;

function onPointerDown(e) {
  const ball = e.currentTarget;
  activeBall = ball;

  const rect = ball.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  // Calculate offset within the ball
  offsetX = (e.clientX - rect.left);
  offsetY = (e.clientY - rect.top);

  ball.classList.add('dragging');
  document.body.style.userSelect = 'none';
}

function onPointerMove(e) {
  if (!activeBall) return;

  const boardRect = board.getBoundingClientRect();
  // Position relative to board
  let x = e.clientX - boardRect.left - offsetX;
  let y = e.clientY - boardRect.top - offsetY;

  // Constrain within board
  x = Math.max(0, Math.min(boardRect.width - activeBall.offsetWidth, x));
  y = Math.max(0, Math.min(boardRect.height - activeBall.offsetHeight, y));

  activeBall.style.left = x + 'px';
  activeBall.style.top = y + 'px';
}

function onPointerUp(e) {
  if (!activeBall) return;

  const ballRect = activeBall.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  const x = ballRect.left - boardRect.left + ballRect.width / 2;
  const y = ballRect.top - boardRect.top + ballRect.height / 2;

  let dropped = false;
  document.querySelectorAll('.dropzone').forEach(zone => {

    const zRect = zone.getBoundingClientRect();
    const zCenterX = zRect.left + zRect.width / 2 - boardRect.left;
    const zCenterY = zRect.top + zRect.height / 2 - boardRect.top;
    const dz = Math.hypot(x - zCenterX, y - zCenterY);
    
    if (dz < Math.max(zone.offsetWidth, zone.offsetHeight) / 2) {
      zone.classList.add('active');
      activeBall.style.left = (zone.offsetLeft + zone.offsetWidth/2 - activeBall.offsetWidth/2) + 'px';
      activeBall.style.top  = (zone.offsetTop + zone.offsetHeight/2 - activeBall.offsetHeight/2) + 'px';
      dropped = true;
    } else {
      zone.classList.remove('active');
    }
  });

  if (!dropped) {
    // Return to original or snap back
    // For simplicity, keep at current position
  }

  activeBall.classList.remove('dragging');
  activeBall = null;
  document.body.style.userSelect = '';
}

balls.forEach(ball => {
  ball.style.left = Math.random() * (board.clientWidth - ball.offsetWidth) + 'px';
  ball.style.top = Math.random() * (board.clientHeight - ball.offsetHeight) + 'px';
  ball.addEventListener('pointerdown', onPointerDown);
});

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerup', onPointerUp);