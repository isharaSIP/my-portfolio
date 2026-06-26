"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene, camera, renderer
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    // WebGL Renderer with alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle nodes configuration
    const particleCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    // Containment box limits
    const boxWidth = 240;
    const boxHeight = 140;
    const boxDepth = 90;

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates distributed in space
      positions[i * 3] = (Math.random() - 0.5) * boxWidth;
      positions[i * 3 + 1] = (Math.random() - 0.5) * boxHeight;
      positions[i * 3 + 2] = (Math.random() - 0.5) * boxDepth;

      // Incremental speed delta
      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.05,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom point sprite or circle material
    const pointMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6, // Electric Blue
      size: 1.8,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });

    const pointCloud = new THREE.Points(geometry, pointMaterial);
    scene.add(pointCloud);

    // Line links setup
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.04,
    });

    let lineSegments: THREE.LineSegments | null = null;

    // Mouse coordinates interpolation
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize camera configuration
    const handleResize = () => {
      if (!renderer || !camera) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Frame loops
    let animationFrameId: number;
    const maxDistance = 35; // Connection cutoff radius

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Damp mouse transitions for ease
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      // Parallax rotation of the grid scene
      pointCloud.rotation.y = mouse.x * 0.15;
      pointCloud.rotation.x = -mouse.y * 0.15;

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      // Update positions & bounce boundaries
      for (let i = 0; i < particleCount; i++) {
        arr[i * 3] += velocities[i].x;
        arr[i * 3 + 1] += velocities[i].y;
        arr[i * 3 + 2] += velocities[i].z;

        // Bounce back from boundaries
        if (Math.abs(arr[i * 3]) > boxWidth / 2) velocities[i].x *= -1;
        if (Math.abs(arr[i * 3 + 1]) > boxHeight / 2) velocities[i].y *= -1;
        if (Math.abs(arr[i * 3 + 2]) > boxDepth / 2) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Clear previous lines to free memory
      if (lineSegments) {
        scene.remove(lineSegments);
        lineSegments.geometry.dispose();
      }

      // Rebuild matching line links
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        const x1 = arr[i * 3];
        const y1 = arr[i * 3 + 1];
        const z1 = arr[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = arr[j * 3];
          const y2 = arr[j * 3 + 1];
          const z2 = arr[j * 3 + 2];

          const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2);

          if (dist < maxDistance) {
            linePositions.push(x1, y1, z1);
            linePositions.push(x2, y2, z2);
          }
        }
      }

      if (linePositions.length > 0) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
        lineSegments = new THREE.LineSegments(lineGeo, lineMaterial);
        scene.add(lineSegments);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean memory on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      pointMaterial.dispose();
      lineMaterial.dispose();
      if (lineSegments) {
        lineSegments.geometry.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-30 block h-full w-full opacity-60 dark:opacity-30 transition-opacity duration-500"
    />
  );
}
