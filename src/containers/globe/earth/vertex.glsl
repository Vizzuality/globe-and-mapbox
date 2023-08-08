uniform float u_time;
uniform float u_progress;

varying vec2 v_uv;
varying vec3 v_normal;

attribute float a_random;

void main() {
  v_uv = uv;
  v_normal = normalMatrix * normal;

  vec3 pos = position;

  pos += (normal * a_random * u_progress);

  csm_Position = pos;
}