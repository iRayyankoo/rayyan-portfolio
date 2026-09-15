/* ==========================================================================
   Collectible 3D Figure Diorama Component (Three.js WebGL)
   Procedural Isometric Room, Dynamic Canvas Textures & Reactive Lighting
   ========================================================================== */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

export function initCollectibleDiorama(containerElement) {
    if (!containerElement) return;

    // Reduced motion preference check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Active Theme Palette Definitions
    const themePalettes = {
        teal: { primary: '#24B1B1', primaryHex: 0x24B1B1, secondary: '#1E40AF', secondaryHex: 0x1E40AF, accent: '#D4AF37', accentHex: 0xD4AF37 },
        emerald: { primary: '#24B1B1', primaryHex: 0x24B1B1, secondary: '#1E40AF', secondaryHex: 0x1E40AF, accent: '#D4AF37', accentHex: 0xD4AF37 },
        cobalt: { primary: '#3b82f6', primaryHex: 0x3b82f6, secondary: '#1d4ed8', secondaryHex: 0x1d4ed8, accent: '#60a5fa', accentHex: 0x60a5fa },
        gold: { primary: '#d4af37', primaryHex: 0xd4af37, secondary: '#b45309', secondaryHex: 0xb45309, accent: '#f59e0b', accentHex: 0xf59e0b },
        violet: { primary: '#8b5cf6', primaryHex: 0x8b5cf6, secondary: '#6d28d9', secondaryHex: 0x6d28d9, accent: '#c084fc', accentHex: 0xc084fc },
        ember: { primary: '#d9663d', primaryHex: 0xd9663d, secondary: '#9a3412', secondaryHex: 0x9a3412, accent: '#f97316', accentHex: 0xf97316 }
    };

    let currentThemeName = document.documentElement.getAttribute('data-theme') || 'teal';
    let palette = themePalettes[currentThemeName] || themePalettes.teal;

    // -------------------------------------------------------------
    // 1. DYNAMIC PROCEDURAL CANVAS TEXTURES (No External Assets)
    // -------------------------------------------------------------

    // A. BI Dashboard Canvas (Animated Line Chart)
    const biCanvas = document.createElement('canvas');
    biCanvas.width = 256;
    biCanvas.height = 144;
    const biCtx = biCanvas.getContext('2d');
    const biTexture = new THREE.CanvasTexture(biCanvas);

    function drawBIDashboard(time) {
        biCtx.fillStyle = '#0a1017';
        biCtx.fillRect(0, 0, 256, 144);

        // Subtle Grid
        biCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        biCtx.lineWidth = 1;
        for (let x = 20; x < 256; x += 30) {
            biCtx.beginPath(); biCtx.moveTo(x, 0); biCtx.lineTo(x, 144); biCtx.stroke();
        }
        for (let y = 20; y < 144; y += 25) {
            biCtx.beginPath(); biCtx.moveTo(0, y); biCtx.lineTo(256, y); biCtx.stroke();
        }

        // Upward trend line
        biCtx.strokeStyle = palette.primary;
        biCtx.lineWidth = 3;
        biCtx.beginPath();
        const points = [
            [15, 110], [55, 95], [95, 105], [135, 65], [175, 50], [215, 30], [245, 18]
        ];

        // Wave oscillation
        biCtx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
            const osc = Math.sin(time * 0.003 + i) * 3;
            biCtx.lineTo(points[i][0], points[i][1] + osc);
        }
        biCtx.stroke();

        // Area Fill
        biCtx.lineTo(245, 135);
        biCtx.lineTo(15, 135);
        biCtx.fillStyle = 'rgba(36, 177, 177, 0.15)';
        biCtx.fill();

        // Header Label
        biCtx.fillStyle = palette.primary;
        biCtx.font = 'bold 13px ui-monospace, monospace';
        biCtx.fillText('BI METRICS // +38.4%', 15, 22);

        // Pulsing end indicator
        const lastX = points[points.length - 1][0];
        const lastY = points[points.length - 1][1] + Math.sin(time * 0.003 + points.length - 1) * 3;
        biCtx.fillStyle = palette.accent;
        biCtx.beginPath();
        biCtx.arc(lastX, lastY, 4.5, 0, Math.PI * 2);
        biCtx.fill();

        biTexture.needsUpdate = true;
    }

    // B. AI Pipeline Canvas (Nodes & Interconnects)
    const aiCanvas = document.createElement('canvas');
    aiCanvas.width = 256;
    aiCanvas.height = 144;
    const aiCtx = aiCanvas.getContext('2d');
    const aiTexture = new THREE.CanvasTexture(aiCanvas);

    const nodes = [
        { x: 40, y: 72 },
        { x: 105, y: 38 },
        { x: 105, y: 106 },
        { x: 170, y: 55 },
        { x: 170, y: 90 },
        { x: 225, y: 72 }
    ];
    const edges = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5]];

    function drawAIPipeline(time) {
        aiCtx.fillStyle = '#0d131f';
        aiCtx.fillRect(0, 0, 256, 144);

        // Draw Edges
        aiCtx.strokeStyle = 'rgba(30, 64, 175, 0.55)';
        aiCtx.lineWidth = 2;
        edges.forEach(([s, e]) => {
            aiCtx.beginPath();
            aiCtx.moveTo(nodes[s].x, nodes[s].y);
            aiCtx.lineTo(nodes[e].x, nodes[e].y);
            aiCtx.stroke();

            // Traveling data packet
            const progress = (time * 0.0015 + (s * 0.3)) % 1;
            const px = nodes[s].x + (nodes[e].x - nodes[s].x) * progress;
            const py = nodes[s].y + (nodes[e].y - nodes[s].y) * progress;
            aiCtx.fillStyle = palette.primary;
            aiCtx.beginPath();
            aiCtx.arc(px, py, 2.8, 0, Math.PI * 2);
            aiCtx.fill();
        });

        // Draw Nodes
        nodes.forEach((n, idx) => {
            aiCtx.fillStyle = idx === 5 ? palette.accent : palette.secondary;
            aiCtx.beginPath();
            aiCtx.arc(n.x, n.y, 6, 0, Math.PI * 2);
            aiCtx.fill();
            aiCtx.strokeStyle = palette.primary;
            aiCtx.lineWidth = 1.5;
            aiCtx.stroke();
        });

        // Header Label
        aiCtx.fillStyle = palette.primary;
        aiCtx.font = 'bold 13px ui-monospace, monospace';
        aiCtx.fillText('AI PIPELINE // RUNNING', 15, 22);

        aiTexture.needsUpdate = true;
    }

    // C. Riyadh Skyline Silhouette Canvas
    const rydCanvas = document.createElement('canvas');
    rydCanvas.width = 256;
    rydCanvas.height = 144;
    const rydCtx = rydCanvas.getContext('2d');

    function drawSkyline() {
        const grad = rydCtx.createLinearGradient(0, 0, 0, 144);
        grad.addColorStop(0, '#091522');
        grad.addColorStop(1, '#0e243a');
        rydCtx.fillStyle = grad;
        rydCtx.fillRect(0, 0, 256, 144);

        // Header Label
        rydCtx.fillStyle = palette.accent;
        rydCtx.font = 'bold 12px ui-monospace, monospace';
        rydCtx.fillText('RIYADH // SAUDI TECH', 15, 22);

        // Distant stars / beacons
        rydCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        [[30, 20], [80, 15], [190, 35], [230, 25]].forEach(([x, y]) => {
            rydCtx.fillRect(x, y, 1.5, 1.5);
        });

        // Silhouette Buildings
        rydCtx.fillStyle = '#060a0f';
        // Kingdom Centre arch silhouette
        rydCtx.beginPath();
        rydCtx.rect(95, 25, 30, 119);
        rydCtx.fill();
        // Cut inverted parabolic arch cutout in Kingdom Centre
        rydCtx.fillStyle = '#0e243a';
        rydCtx.beginPath();
        rydCtx.arc(110, 42, 9, 0, Math.PI, true);
        rydCtx.fill();

        // Al Faisaliah pyramid silhouette
        rydCtx.fillStyle = '#060a0f';
        rydCtx.beginPath();
        rydCtx.moveTo(175, 45);
        rydCtx.lineTo(195, 144);
        rydCtx.lineTo(155, 144);
        rydCtx.closePath();
        rydCtx.fill();
        // Golden globe peak
        rydCtx.fillStyle = '#D4AF37';
        rydCtx.beginPath();
        rydCtx.arc(175, 58, 3.5, 0, Math.PI * 2);
        rydCtx.fill();

        // Base urban horizon blocks
        rydCtx.fillStyle = '#04070a';
        rydCtx.fillRect(15, 85, 45, 59);
        rydCtx.fillRect(55, 95, 35, 49);
        rydCtx.fillRect(130, 80, 22, 64);
        rydCtx.fillRect(200, 90, 45, 54);
    }
    drawSkyline();
    const rydTexture = new THREE.CanvasTexture(rydCanvas);

    // D. Arabic Wall Frame Canvas ("ريان")
    const arCanvas = document.createElement('canvas');
    arCanvas.width = 128;
    arCanvas.height = 128;
    const arCtx = arCanvas.getContext('2d');
    function drawArabicFrame() {
        arCtx.fillStyle = '#0f141c';
        arCtx.fillRect(0, 0, 128, 128);
        arCtx.strokeStyle = palette.accent;
        arCtx.lineWidth = 4;
        arCtx.strokeRect(6, 6, 116, 116);
        arCtx.fillStyle = palette.primary;
        arCtx.font = 'bold 44px sans-serif';
        arCtx.textAlign = 'center';
        arCtx.textBaseline = 'middle';
        arCtx.fillText('ريان', 64, 62);
    }
    drawArabicFrame();
    const arTexture = new THREE.CanvasTexture(arCanvas);

    // -------------------------------------------------------------
    // 2. THREE.JS SCENE, CAMERA & LIGHTS
    // -------------------------------------------------------------
    const width = containerElement.clientWidth || 340;
    const height = containerElement.clientHeight || 380;

    const scene = new THREE.Scene();
    scene.background = null; // transparent background

    // Isometric Orthographic Camera
    const aspect = width / height;
    const frustumSize = 4.8;
    const camera = new THREE.OrthographicCamera(
        (frustumSize * aspect) / -2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        frustumSize / -2,
        0.1,
        100
    );
    // True Isometric perspective
    camera.position.set(5, 4.2, 5);
    camera.lookAt(0, 0.4, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerElement.appendChild(renderer.domElement);

    // Diorama Root Object for idle drifting & parallax
    const dioramaGroup = new THREE.Group();
    scene.add(dioramaGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(6, 10, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Neon Edge Rim Lights (Reactive to Theme)
    const cyanRim = new THREE.PointLight(palette.primaryHex, 3.2, 9);
    cyanRim.position.set(-2, 2.8, -2);
    scene.add(cyanRim);

    const goldRim = new THREE.PointLight(palette.accentHex, 2.2, 7);
    goldRim.position.set(2.5, 1.8, 2.5);
    scene.add(goldRim);

    // Under-Desk / Workstation Warm Ambient Glow
    const deskGlow = new THREE.PointLight(palette.primaryHex, 2.0, 4.5);
    deskGlow.position.set(-0.2, 1.3, -0.2);
    scene.add(deskGlow);

    // -------------------------------------------------------------
    // 3. 3D ROOM GEOMETRY & PROPS
    // -------------------------------------------------------------
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x181e28, roughness: 0.35, metalness: 0.15 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x222b3a, roughness: 0.5 });
    const deskMat = new THREE.MeshStandardMaterial({ color: 0x283244, roughness: 0.2, metalness: 0.3 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x111620, metalness: 0.85, roughness: 0.2 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.9, roughness: 0.2 });

    // Floor
    const floor = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.2, 3.6), floorMat);
    floor.position.y = -0.1;
    floor.receiveShadow = true;
    dioramaGroup.add(floor);

    // Back Walls (Left & Right corner)
    const wallL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.4, 3.6), wallMat);
    wallL.position.set(-1.8, 1.2, 0);
    wallL.receiveShadow = true;
    dioramaGroup.add(wallL);

    const wallR = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.4, 0.12), wallMat);
    wallR.position.set(0, 1.2, -1.8);
    wallR.receiveShadow = true;
    dioramaGroup.add(wallR);

    // Arabic Name Wall Frame ("ريان")
    const frameGeom = new THREE.BoxGeometry(0.04, 0.65, 0.65);
    const frameMat = new THREE.MeshBasicMaterial({ map: arTexture });
    const wallFrame = new THREE.Mesh(frameGeom, [
        frameMat, goldMat, goldMat, goldMat, goldMat, goldMat
    ]);
    wallFrame.position.set(-1.72, 1.45, 0.3);
    dioramaGroup.add(wallFrame);

    // Standing Desk
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.06, 2.2), deskMat);
    deskTop.position.set(-0.35, 1.05, -0.2);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    dioramaGroup.add(deskTop);

    // Desk Legs
    const legGeom = new THREE.CylinderGeometry(0.04, 0.04, 1.05, 16);
    const leg1 = new THREE.Mesh(legGeom, metalMat);
    leg1.position.set(-0.8, 0.525, -1.05);
    const leg2 = new THREE.Mesh(legGeom, metalMat);
    leg2.position.set(-0.8, 0.525, 0.65);
    dioramaGroup.add(leg1, leg2);

    // Curved Multi-Monitor Rig
    const monitorStand = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.45), metalMat);
    monitorStand.position.set(-0.65, 1.25, -0.2);
    dioramaGroup.add(monitorStand);

    const screenGeom = new THREE.BoxGeometry(0.03, 0.46, 0.76);

    // Monitor Center: AI Pipeline (Face 0 is +X facing user/camera)
    const monCenter = new THREE.Mesh(screenGeom, [
        new THREE.MeshBasicMaterial({ map: aiTexture }),
        metalMat, metalMat, metalMat, metalMat, metalMat
    ]);
    monCenter.position.set(-0.6, 1.42, -0.2);
    dioramaGroup.add(monCenter);

    // Monitor Left: BI Dashboard (angled toward center)
    const monLeft = new THREE.Mesh(screenGeom, [
        new THREE.MeshBasicMaterial({ map: biTexture }),
        metalMat, metalMat, metalMat, metalMat, metalMat
    ]);
    monLeft.position.set(-0.5, 1.42, 0.54);
    monLeft.rotation.y = THREE.MathUtils.degToRad(-26);
    dioramaGroup.add(monLeft);

    // Monitor Right: Riyadh Skyline (angled toward center)
    const monRight = new THREE.Mesh(screenGeom, [
        new THREE.MeshBasicMaterial({ map: rydTexture }),
        metalMat, metalMat, metalMat, metalMat, metalMat
    ]);
    monRight.position.set(-0.5, 1.42, -0.94);
    monRight.rotation.y = THREE.MathUtils.degToRad(26);
    dioramaGroup.add(monRight);

    // -------------------------------------------------------------
    // Stylized Collectible Saudi Tech Figure (Thobe & Shemagh)
    // -------------------------------------------------------------
    const figureGroup = new THREE.Group();
    figureGroup.position.set(0.35, 0, 0.45);
    figureGroup.rotation.y = THREE.MathUtils.degToRad(-35);

    const thobeMat = new THREE.MeshStandardMaterial({ 
        color: 0xf6f8fa, 
        roughness: 0.35, 
        metalness: 0.05 
    });
    const skinMat = new THREE.MeshStandardMaterial({ 
        color: 0xdfb18b, 
        roughness: 0.6 
    });
    const igalMat = new THREE.MeshStandardMaterial({ 
        color: 0x111418, 
        roughness: 0.3, 
        metalness: 0.2 
    });
    const shemaghMat = new THREE.MeshStandardMaterial({ 
        color: 0xffffff, 
        roughness: 0.4 
    });

    // Thobe Body (Tapered robe)
    const thobeGeom = new THREE.CylinderGeometry(0.18, 0.28, 1.25, 16);
    const thobe = new THREE.Mesh(thobeGeom, thobeMat);
    thobe.position.y = 0.625;
    thobe.castShadow = true;
    figureGroup.add(thobe);

    // Torso / Shoulders
    const torsoGeom = new THREE.BoxGeometry(0.42, 0.3, 0.24);
    const torso = new THREE.Mesh(torsoGeom, thobeMat);
    torso.position.y = 1.2;
    figureGroup.add(torso);

    // Neck
    const neckGeom = new THREE.CylinderGeometry(0.08, 0.09, 0.12, 12);
    const neck = new THREE.Mesh(neckGeom, skinMat);
    neck.position.y = 1.38;
    figureGroup.add(neck);

    // Head
    const headGeom = new THREE.SphereGeometry(0.13, 20, 20);
    const head = new THREE.Mesh(headGeom, skinMat);
    head.position.y = 1.5;
    figureGroup.add(head);

    // Shemagh / Ghutra (Dome head cover)
    const shemaghTopGeom = new THREE.SphereGeometry(0.145, 18, 18, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const shemaghTop = new THREE.Mesh(shemaghTopGeom, shemaghMat);
    shemaghTop.position.y = 1.52;
    figureGroup.add(shemaghTop);

    // Flowing Shemagh tail
    const shemaghBackGeom = new THREE.BoxGeometry(0.32, 0.5, 0.1);
    const shemaghBack = new THREE.Mesh(shemaghBackGeom, shemaghMat);
    shemaghBack.position.set(0, 1.35, -0.1);
    figureGroup.add(shemaghBack);

    // Black Igal (Dual ring)
    const igalRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.138, 0.016, 8, 24), igalMat);
    igalRing1.rotation.x = Math.PI / 2;
    igalRing1.position.y = 1.56;
    figureGroup.add(igalRing1);

    const igalRing2 = new THREE.Mesh(new THREE.TorusGeometry(0.136, 0.015, 8, 24), igalMat);
    igalRing2.rotation.x = Math.PI / 2;
    igalRing2.position.y = 1.59;
    figureGroup.add(igalRing2);

    dioramaGroup.add(figureGroup);

    // Minimalist Ergonomic Chair
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0.65, 0, -0.35);
    chairGroup.rotation.y = THREE.MathUtils.degToRad(-45);

    const seatBase = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55), metalMat);
    seatBase.position.y = 0.275;
    const seatCushion = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.5), deskMat);
    seatCushion.position.y = 0.55;
    const backRest = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.48), deskMat);
    backRest.position.set(0.22, 0.85, 0);

    chairGroup.add(seatBase, seatCushion, backRest);
    dioramaGroup.add(chairGroup);

    // Imperial Gold Desk Item (Planter Mug)
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.12, 16), goldMat);
    mug.position.set(-0.25, 1.13, 0.5);
    mug.castShadow = true;
    dioramaGroup.add(mug);

    // -------------------------------------------------------------
    // 4. MOUSE PARALLAX & ANIMATION LOOP
    // -------------------------------------------------------------
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (e) => {
        const rect = containerElement.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = mouseX * 0.25;
        targetRotationX = mouseY * 0.15;
    };

    const handleMouseLeave = () => {
        targetRotationY = 0;
        targetRotationX = 0;
    };

    containerElement.addEventListener('mousemove', handleMouseMove);
    containerElement.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId;
    let isIntersecting = true;
    const clock = new THREE.Clock();

    function animate() {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        const timeMs = performance.now();

        // Redraw animated screens
        drawBIDashboard(timeMs);
        drawAIPipeline(timeMs);

        // Idle Diorama Drift & Mouse Parallax
        if (!prefersReducedMotion) {
            const slowCycle = elapsedTime * 0.4;
            const idleRotY = Math.sin(slowCycle) * 0.06;
            const idlePosY = Math.sin(slowCycle * 1.5) * 0.03;

            // Smooth interpolation
            dioramaGroup.rotation.y += (targetRotationY + idleRotY - dioramaGroup.rotation.y) * 0.05;
            dioramaGroup.rotation.x += (targetRotationX - dioramaGroup.rotation.x) * 0.05;
            dioramaGroup.position.y = idlePosY;

            cyanRim.intensity = 2.2 + Math.sin(slowCycle * 2) * 0.5;
        }

        renderer.render(scene, camera);
    }

    // -------------------------------------------------------------
    // 5. THEME REACTION OBSERVER
    // -------------------------------------------------------------
    const updateThemeColors = () => {
        const newTheme = document.documentElement.getAttribute('data-theme') || 'teal';
        palette = themePalettes[newTheme] || themePalettes.teal;
        cyanRim.color.setHex(palette.primaryHex);
        goldRim.color.setHex(palette.accentHex);
        deskGlow.color.setHex(palette.primaryHex);
        drawSkyline();
        rydTexture.needsUpdate = true;
        drawArabicFrame();
        arTexture.needsUpdate = true;
    };

    const themeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
                updateThemeColors();
            }
        });
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // -------------------------------------------------------------
    // 6. PERFORMANCE & VISIBILITY APIS
    // -------------------------------------------------------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            isIntersecting = entry.isIntersecting;
            if (isIntersecting && document.visibilityState === 'visible') {
                if (!animationFrameId) animate();
            } else {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });
    }, { threshold: 0.05 });

    observer.observe(containerElement);

    const handleVisibilityChange = () => {
        if (document.hidden || !isIntersecting) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        } else {
            if (!animationFrameId) animate();
        }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Resize Handler
    const handleResize = () => {
        if (!containerElement) return;
        const w = containerElement.clientWidth;
        const h = containerElement.clientHeight;
        if (w === 0 || h === 0) return;
        const newAspect = w / h;
        camera.left = (frustumSize * newAspect) / -2;
        camera.right = (frustumSize * newAspect) / 2;
        camera.top = frustumSize / 2;
        camera.bottom = frustumSize / -2;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Initial render & kickoff
    renderer.render(scene, camera);
    if (!prefersReducedMotion) {
        animate();
    }

    return () => {
        cancelAnimationFrame(animationFrameId);
        observer.disconnect();
        themeObserver.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('resize', handleResize);
        containerElement.removeEventListener('mousemove', handleMouseMove);
        containerElement.removeEventListener('mouseleave', handleMouseLeave);
        renderer.dispose();
    };
}
