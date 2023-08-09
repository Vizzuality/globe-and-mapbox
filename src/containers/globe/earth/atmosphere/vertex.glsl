uniform float u_progress;
uniform float u_radius;

varying vec2 v_uv;
varying vec3 v_normal;

void main() {
  v_uv = uv;
  v_normal = normalMatrix * normal;

  vec3 pos = position;
  // scale down the position to the center of the sphere via normal
  pos -= normal * u_progress * u_radius;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}