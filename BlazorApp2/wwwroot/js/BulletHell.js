let dotNetRef = null;

window.initInput = (dotNetHelper) => {
    dotNetRef = dotNetHelper;
    console.log("Input system initialized.");

    document.addEventListener('keydown', (e) => {
        console.log("Key pressed:", e.key);
        if (dotNetRef) {
            dotNetRef.invokeMethodAsync('OnKey', e.key)
                .catch(err => console.error("Blazor invoke error:", err));
        }
    });
};

function getCtx() {
    const canvas = document.getElementById('gameCanvas');
    return canvas?.getContext('2d');
}

window.clearCanvas = () => {
    const ctx = getCtx();
    if (ctx) ctx.clearRect(0, 0, 800, 600);
};

window.drawPlayer = (x, y) => {
    const ctx = getCtx();
    if (ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
};

window.drawBullet = (x, y) => {
    const ctx = getCtx();
    if (ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(x - 2, y - 10, 4, 10);
    }
};
