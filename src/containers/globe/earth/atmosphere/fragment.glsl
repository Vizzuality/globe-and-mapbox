uniform float u_time;
uniform float u_progress;

varying vec2 v_uv;
varying vec3 v_normal;

void main() {
  vec3 color = vec3(0.3, 0.6, 1.0);

  // opacity
  float opacity = 1.0;

  // atmosphere
  float intensity = 0.85 - dot(v_normal, vec3(0.0, 0.0, 1.0));
  vec3 atmosphere = color * pow(intensity, 1.5);

  gl_FragColor = vec4(atmosphere, opacity);
}