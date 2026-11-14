import * as THREE from 'three';

export class NeuralScene {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.width = this.container.clientWidth || window.innerWidth;
    this.height = this.container.clientHeight || window.innerHeight;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.isPaused = false;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
    this.createCore();
    this.createAgentNodes();
    this.createSynapticConnections();
    this.createAmbientCloud();
    this.setupEvents();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.z = 18;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.container.appendChild(this.renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    this.pointLightGold = new THREE.PointLight(0xffb454, 4, 30);
    this.pointLightGold.position.set(5, 5, 8);
    this.scene.add(this.pointLightGold);

    this.pointLightCyan = new THREE.PointLight(0x5eead4, 3.5, 30);
    this.pointLightCyan.position.set(-5, -4, 6);
    this.scene.add(this.pointLightCyan);
  }

  createCore() {
    this.coreGroup = new THREE.Group();

    // 1. Central Luminous Core (Agentic Nucleus)
    const nucleusGeo = new THREE.SphereGeometry(1.6, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0xffb454,
      emissive: 0xd4af37,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false
    });
    this.nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    this.coreGroup.add(this.nucleus);

    // 2. Outer Geometric Cage (Icosahedron Lattice)
    const cageGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.cage = new THREE.Mesh(cageGeo, cageMat);
    this.coreGroup.add(this.cage);

    // 3. Secondary Outer Ring
    const ringGeo = new THREE.TorusGeometry(3.1, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffb454,
      transparent: true,
      opacity: 0.4
    });
    this.ring = new THREE.Mesh(ringGeo, ringMat);
    this.ring.rotation.x = Math.PI / 3;
    this.ring.rotation.y = Math.PI / 6;
    this.coreGroup.add(this.ring);

    this.scene.add(this.coreGroup);
  }

  createAgentNodes() {
    this.agentNodes = [];
    this.nodePositions = [
      { name: 'Multi-Agent DAG', pos: new THREE.Vector3(5.2, 2.5, 0.5), color: 0xffb454 },
      { name: 'Computer Vision', pos: new THREE.Vector3(-4.8, 3.0, -1.0), color: 0x5eead4 },
      { name: 'Vector Datastore', pos: new THREE.Vector3(-4.5, -2.8, 1.2), color: 0x8b5cf6 },
      { name: 'Enterprise AP AI', pos: new THREE.Vector3(4.6, -2.6, -0.8), color: 0x38bdf8 },
      { name: 'RAG Sync Worker', pos: new THREE.Vector3(0, 4.8, -1.5), color: 0xf59e0b }
    ];

    this.nodePositions.forEach((data) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(data.pos);

      // Node Sphere
      const sphereGeo = new THREE.SphereGeometry(0.5, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.7
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeGroup.add(sphere);

      // Orbital Halo
      const haloGeo = new THREE.RingGeometry(0.7, 0.75, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: data.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.lookAt(this.camera.position);
      nodeGroup.add(halo);

      this.scene.add(nodeGroup);
      this.agentNodes.push({ group: nodeGroup, data, sphere, halo, initialY: data.pos.y });
    });
  }

  createSynapticConnections() {
    this.connections = [];
    this.dataPackets = [];

    const center = new THREE.Vector3(0, 0, 0);

    this.nodePositions.forEach((node) => {
      // Create curved spline from center to node with mid-arc control point
      const midPoint = new THREE.Vector3()
        .addVectors(center, node.pos)
        .multiplyScalar(0.5);
      // Displace control point slightly for organic curvature
      midPoint.z += (Math.random() - 0.5) * 2;
      midPoint.y += (Math.random() - 0.5) * 1.5;

      const curve = new THREE.QuadraticBezierCurve3(center, midPoint, node.pos);
      const points = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      
      const curveMat = new THREE.LineBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.25
      });
      const line = new THREE.Line(curveGeo, curveMat);
      this.scene.add(line);

      // Create glowing data packet traversing this curve
      const packetGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const packetMat = new THREE.MeshBasicMaterial({
        color: node.color
      });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      this.scene.add(packet);

      this.connections.push({ curve, line });
      this.dataPackets.push({
        mesh: packet,
        curve,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.005
      });
    });
  }

  createAmbientCloud() {
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const gold = new THREE.Color(0xffb454);
    const cyan = new THREE.Color(0x5eead4);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const chosenColor = Math.random() > 0.4 ? gold : cyan;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    this.cloud = new THREE.Points(geometry, material);
    this.scene.add(this.cloud);
  }

  setupEvents() {
    this.onMouseMove = (e) => {
      const rect = this.container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      this.mouse.targetX = (x - 0.5) * 2;
      this.mouse.targetY = -(y - 0.5) * 2;
    };

    this.onResize = () => {
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
      if (this.camera && this.renderer) {
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
      }
    };

    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onResize);

    // Pause rendering when scrolled away to preserve GPU
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isPaused = !entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    this.observer.observe(this.container);
  }

  animate() {
    if (this.prefersReducedMotion) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const time = performance.now() * 0.001;

    // Dampen mouse motion for cinematic inertia
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.04;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.04;

    if (!this.prefersReducedMotion) {
      // 1. Core Rotations
      this.nucleus.rotation.y = time * 0.3;
      this.nucleus.rotation.x = time * 0.2;
      this.cage.rotation.y = -time * 0.2;
      this.cage.rotation.z = time * 0.15;
      this.ring.rotation.z = time * 0.25;

      // Subtle breath scale
      const scale = 1 + Math.sin(time * 2) * 0.04;
      this.coreGroup.scale.set(scale, scale, scale);

      // 2. Camera Parallax & Tilt
      this.camera.position.x = this.mouse.x * 2.2;
      this.camera.position.y = this.mouse.y * 1.8;
      this.camera.lookAt(0, 0, 0);

      // 3. Floating Agent Nodes
      this.agentNodes.forEach((node, idx) => {
        node.group.position.y = node.initialY + Math.sin(time * 1.5 + idx) * 0.25;
        node.halo.rotation.z = time * 0.5 * (idx % 2 === 0 ? 1 : -1);
      });

      // 4. Data Packets Traversing Curves
      this.dataPackets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress > 1) packet.progress = 0;
        const currentPos = packet.curve.getPoint(packet.progress);
        packet.mesh.position.copy(currentPos);
      });

      // 5. Cloud drift
      if (this.cloud) {
        this.cloud.rotation.y = time * 0.05;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    if (this.observer) this.observer.disconnect();
    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }
  }
}
