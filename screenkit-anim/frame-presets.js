// src/frame-presets.js
// SINGLE SOURCE OF TRUTH for the Driversnote phone-mockup frame and
// shadow presets. Any page that exposes a Frame or Shadow dropdown
// (library.html, animation authoring pages, etc.) MUST load this file
// and read from these globals rather than redeclaring the preset
// objects inline.
//
// Why this exists: the bezel padding token (--demo-bezel-padding) is
// load-bearing for the bezel/screen concentric corner masking. The
// inner radius in src/phone-mockup.css is calculated assuming padding
// matches the value declared here. Drift between this file and
// phone-mockup.css produces visible 90-degree corners poking out from
// behind the bezel curve. Do not duplicate these objects in page-local
// scripts; load this file and reuse the globals.

(function (global) {
  'use strict';

  // Outer radius (bezel) is 56px scaled by 100cqi/390.
  // Inner radius (screen) is 48px scaled the same.
  // Concentric rule: inner = outer - padding, so padding = 56 - 48 = 8px.
  // If you change padding here, update src/phone-mockup.css's
  // .dn-mockup--framed .dn-mockup__screen border-radius in lockstep.
  var BEZEL_PADDING = 'calc(100cqi * 8 / 390)';

  global.DN_FRAME_PRESETS = {
    'glass': {
      '--demo-bezel-bg':      'rgba(255, 255, 255, 0.12)',
      '--demo-bezel-filter':  'blur(20px) saturate(180%)',
      '--demo-bezel-border':  '1px solid rgba(255, 255, 255, 0.25)',
      '--demo-bezel-padding': BEZEL_PADDING,
      '--demo-bezel-rim':     'inset 0 1px 0 rgba(255,255,255,0.60), inset 0 -1px 0 rgba(255,255,255,0.10)',
      '--demo-refraction':    'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.08) 100%)',
    },
    'white': {
      '--demo-bezel-bg':      '#ffffff',
      '--demo-bezel-filter':  'none',
      '--demo-bezel-border':  '1px solid rgba(0,0,0,0.10)',
      '--demo-bezel-padding': BEZEL_PADDING,
      '--demo-bezel-rim':     'inset 0 0 0 rgba(0,0,0,0)',
      '--demo-refraction':    'none',
    },
    'space-black': {
      '--demo-bezel-bg':      'linear-gradient(145deg, #2c2c2c 0%, #1a1a1a 50%, #0f0f0f 100%)',
      '--demo-bezel-filter':  'none',
      '--demo-bezel-border':  '1px solid rgba(255,255,255,0.08)',
      '--demo-bezel-padding': BEZEL_PADDING,
      '--demo-bezel-rim':     'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.03)',
      '--demo-refraction':    'none',
    },
    'starlight': {
      '--demo-bezel-bg':      'linear-gradient(145deg, #f0ede8 0%, #ddd9d2 40%, #ece9e4 70%, #d8d4cd 100%)',
      '--demo-bezel-filter':  'none',
      '--demo-bezel-border':  '1px solid rgba(255,255,255,0.65)',
      '--demo-bezel-padding': BEZEL_PADDING,
      '--demo-bezel-rim':     'inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.07)',
      '--demo-refraction':    'linear-gradient(145deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 50%)',
    },
    'naked': {
      '--demo-bezel-bg':      'transparent',
      '--demo-bezel-filter':  'none',
      '--demo-bezel-border':  'none',
      '--demo-bezel-padding': '0px',
      '--demo-bezel-rim':     'inset 0 0 0 rgba(0,0,0,0)',
      '--demo-refraction':    'none',
    },
  };

  global.DN_SHADOW_PRESETS = {
    'none':   { '--demo-shadow-outer': '0 0 0 rgba(0,0,0,0)' },
    'faint':  { '--demo-shadow-outer': '0 1px 4px rgba(0,0,0,0.07)' },
    'bare':   { '--demo-shadow-outer': '0 2px 8px rgba(0,0,0,0.10)' },
    'gentle': { '--demo-shadow-outer': '0 8px 24px rgba(0,0,0,0.18)' },
    'float':  { '--demo-shadow-outer': '0 16px 40px rgba(0,0,0,0.26)' },
  };

  // Canonical phone-mockup display width for the framed iOS preview
  // surface. Mockups (library.html modal) uses this; iOS animation
  // pages should mirror it so the phone reads at the same size across
  // ScreenKit. Android animations override with their own value
  // (the Android frame has a different aspect ratio).
  global.DN_PHONE_WIDTH_IOS = 393;

  global.dnApplyFrameVars = function (vars) {
    var root = document.documentElement;
    for (var prop in vars) root.style.setProperty(prop, vars[prop]);
  };
})(typeof window !== 'undefined' ? window : this);
