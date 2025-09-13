import React, { useRef, useState, useEffect } from 'react';  
import ball4 from '../assets/ball4.png';
import farmer from '../assets/farmer.png';

// Single Ball component  
const Ball = ({ id, src, size = 48, color = '#4a90e2' }) => {  
  const ref = useRef(null);  
  const [drag, setDrag] = useState({ active: false, dx: 0, dy: 0 });  
  const [pos, setPos] = useState({ x: 0, y: 0 });  
  const velocityRef = useRef({ vx: 0, vy: 0 });  
  const rafRef = useRef(null);  

  // Initialize random position on mount  
  useEffect(() => {  
    const el = ref.current;  
    if (!el) return;  
    // Board bounds (assumes parent is the board)  
    const board = el.parentElement;  
    const maxX = Math.max(0, board.clientWidth - size);  
    const maxY = Math.max(0, board.clientHeight - size);  
    const initX = Math.random() * maxX;  
    const initY = Math.random() * maxY;  
    setPos({ x: initX, y: initY });  
  }, [size]);  

  // Momentum loop  
  useEffect(() => {  
    const tick = () => {  
      // Apply velocity to position when not actively dragging  
      if (!drag.active) {  
        const el = ref.current;  
        const bounds = el.parentElement.getBoundingClientRect();  
        setPos(p => {  
          const nx = p.x + velocityRef.current.vx;  
          const ny = p.y + velocityRef.current.vy;  

          // Simple friction to gradually stop  
          velocityRef.current.vx *= 0.98;  
          velocityRef.current.vy *= 0.98;  
          if (Math.abs(velocityRef.current.vx) < 0.01) velocityRef.current.vx = 0;  
          if (Math.abs(velocityRef.current.vy) < 0.01) velocityRef.current.vy = 0;  

          // Constrain inside board  
          const clampedX = Math.max(0, Math.min(bounds.width - size, nx));  
          const clampedY = Math.max(0, Math.min(bounds.height - size, ny));  

          el.style.left = clampedX + 'px';  
          el.style.top = clampedY + 'px';  
          return { x: clampedX, y: clampedY };  
        });  
      }  
      rafRef.current = requestAnimationFrame(tick);  
    };  
    rafRef.current = requestAnimationFrame(tick);  
    return () => cancelAnimationFrame(rafRef.current);  
  }, [drag.active, size]);  

  const onPointerDown = (e) => {  
    const el = ref.current;  
    const bounds = el.getBoundingClientRect();  
    setDrag({ active: true, dx: e.clientX - bounds.left, dy: e.clientY - bounds.top });  
    el.setPointerCapture(e.pointerId);  
     
    velocityRef.current.vx = 0;  
    velocityRef.current.vy = 0;  
  };  

  const onPointerMove = (e) => {  
    if (!drag.active) return;  
    const el = ref.current;  
    const board = el.parentElement.getBoundingClientRect();  
    let x = e.clientX - board.left - drag.dx;  
    let y = e.clientY - board.top - drag.dy;  

    // Clamp to board bounds  
    x = Math.max(0, Math.min(board.width - size, x));  
    y = Math.max(0, Math.min(board.height - size, y));  

    // Update position visually  
    el.style.left = x + 'px';  
    el.style.top = y + 'px';  
    // Update velocity for momentum (rough estimate)  
    velocityRef.current.vx = (x - pos.x) * 0.25;  
    velocityRef.current.vy = (y - pos.y) * 0.25;  

    
    setPos({ x, y });  
  };  

  const onPointerUp = (e) => {  
    setDrag({ active: false, dx: 0, dy: 0 });  
    const el = ref.current;  
    el.releasePointerCapture(e.pointerId);  
  };   
  const onKeyDown = (e) => {  
    const step = 6;  
    if (!ref.current) return;  
    if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {  
      e.preventDefault();  
      let { x, y } = pos;  
      if (e.key === 'ArrowLeft') x -= step;  
      if (e.key === 'ArrowRight') x += step;  
      if (e.key === 'ArrowUp') y -= step;  
      if (e.key === 'ArrowDown') y += step;  
      setPos({ x, y });  
      velocityRef.current.vx = (e.key === 'ArrowRight' ? step : e.key === 'ArrowLeft' ? -step : 0);  
      velocityRef.current.vy = (e.key === 'ArrowDown' ? step : e.key === 'ArrowUp' ? -step : 0);  
    }  
  };  

  return (  
    <img  
      ref={ref}  
      src={src}  
      alt={`Draggable ball ${id}`}  
      className="ball"  
      style={{  
        position: 'absolute',  
        left: pos.x,  
        top: pos.y,  
        width: size,  
        height: size,  
        borderRadius: '50%',  
        cursor: 'grab',  
        userSelect: 'none',  
        outline: 'none'  
      }}  
      onPointerDown={onPointerDown}  
      onPointerMove={onPointerMove}  
      onPointerUp={onPointerUp}  
      onKeyDown={onKeyDown}  
      tabIndex={0}  
      draggable={false}  
    />  
  );  
};  

const getRandomSize = (min = 48, max = 160) => Math.floor(Math.random() * (max - min + 1)) + min;

// Background board wrapper (no drop zones)  
const BackgroundBoard = React.memo(({ ballImages = [] }) => { 
  return (  
    <div  
      className="bg-balls-board"  
      aria-label="Background draggable balls board"  
      style={{  
        position: 'fixed',  
        inset: 0,  
        width: '100vw',  
        height: '100vh',  
        overflow: 'hidden',  
        pointerEvents: 'none', // Allow content to be interacted with atop  
        zIndex: 1  
      }}  
    >  
      <div  
        style={{  
          position: 'absolute',  
          left: 0,  
          top: 0,  
          right: 0,  
          bottom: 0,  
          pointerEvents: 'auto', // Enable interaction on the balls themselves  
        }}  
      >  
        {ballImages.length > 0 ? (  
          ballImages.map((src, idx) => (  
            <Ball key={idx} id={idx + 1} src={src} size={getRandomSize()} />  
          ))  
        ) : (  
          <>  
            <Ball id={1} size={getRandomSize()} color="#4a90e2" />  
            <Ball id={2} size={getRandomSize()} color="#e74c3c" />  
          </>  
        )}  
      </div>  
    </div>  
  );  
});  

export default function BackgroundBalls({ ballImages = [ball4, farmer] }) {  
  return <BackgroundBoard ballImages={ballImages} />;  
}