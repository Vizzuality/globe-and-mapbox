uniform float u_time;
uniform float u_progress;

uniform sampler2D u_texture;

varying vec2 v_uv;
varying vec3 v_normal;

void main() {
  vec4 text = texture2D(u_texture, v_uv);
  vec3 color = vec3(0.3, 0.6, 1.0);

  // opacity
  float opacity = 1.0;
  float progress = sin((u_time * 2.0)) * 0.5 + 0.5;


  // atmosphere
  float intensity = 1.05 - dot(v_normal, vec3(0.0, 0.0, 1.0));
  vec3 atmosphere = color * pow(intensity, 1.5);

  csm_DiffuseColor = vec4(text.xyz + atmosphere, opacity * (1.0 - u_progress));
}