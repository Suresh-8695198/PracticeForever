import { useRef, useEffect } from 'react';
import './Squares.css';

const Squares = ({
    direction = 'right',
    speed = 1,
    borderColor = '#999',
    squareSize = 40,
    hoverFillColor = '#222',
    fillColor = 'transparent',
    className = '',
    gap = 2
}) => {
    const canvasRef = useRef(null);
    const requestRef = useRef(null);
    const numSquaresX = useRef();
    const numSquaresY = useRef();
    const gridOffset = useRef({ x: 0, y: 0 });
    const mousePosition = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
                for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
                    const squareX = x - (gridOffset.current.x % squareSize);
                    const squareY = y - (gridOffset.current.y % squareSize);

                    const effectiveSize = Math.max(0, squareSize - gap);
                    const drawX = squareX + gap / 2;
                    const drawY = squareY + gap / 2;

                    // Fill the square with base color if specified
                    if (fillColor !== 'transparent') {
                        ctx.fillStyle = fillColor;
                        ctx.fillRect(drawX, drawY, effectiveSize, effectiveSize);
                    }

                    // Calculate distance from mouse for hover glow
                    const centerX = drawX + effectiveSize / 2;
                    const centerY = drawY + effectiveSize / 2;
                    const dist = Math.hypot(centerX - mousePosition.current.x, centerY - mousePosition.current.y);
                    const hoverRadius = squareSize * 4; // Glow radius

                    if (dist < hoverRadius) {
                        const intensity = 1 - (dist / hoverRadius);
                        ctx.fillStyle = hoverFillColor;
                        ctx.globalAlpha = intensity * 0.5; // Max opacity 0.5
                        ctx.fillRect(drawX, drawY, effectiveSize, effectiveSize);
                        ctx.globalAlpha = 1;
                    }

                    ctx.strokeStyle = borderColor;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(drawX, drawY, effectiveSize, effectiveSize);
                }
            }

            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
            );
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            // gradient.addColorStop(1, '#060606'); // Assuming dark background, fade to it

            ctx.fillStyle = gradient;
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const updateAnimation = () => {
            const effectiveSpeed = Math.max(speed, 0.1);
            switch (direction) {
                case 'right':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'left':
                    gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'up':
                    gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'down':
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'diagonal':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                    break;
                default:
                    break;
            }

            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = event => {
            const rect = canvas.getBoundingClientRect();
            mousePosition.current = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mousePosition.current = { x: -1000, y: -1000 };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, squareSize, gap]);

    return <canvas ref={canvasRef} className={`squares-canvas ${className}`}></canvas>;
};

export default Squares;
