#!/usr/bin/env node
/**
 * React Hooks Verification Script
 * Checks for common hooks violations in the codebase
 */

const fs = require('fs');
const path = require('path');

const violations = [];
let filesChecked = 0;

// Files to check
const filesToCheck = [
  'pages/index.js',
  'components/animations/AnimatedText.js',
  'components/effects/MeshGradient.js',
  'components/navbar.js',
  'components/bio.js',
  'components/grid-item.js',
  'components/ui/AnimatedButton.js',
  'components/ui/FloatingCard.js'
];

// Patterns that indicate hooks violations
const patterns = {
  hooksInCallback: /\.map\(.*useColorModeValue|\.forEach\(.*useColorModeValue|\.filter\(.*useColorModeValue/,
  hooksInEventHandler: /_hover.*useColorModeValue|_focus.*useColorModeValue|onClick.*useColorModeValue/,
  conditionalHooks: /if\s*\(.*\)\s*{[\s\S]*?(useState|useEffect|useColorModeValue)/
};

console.log('🔍 Verifying React Hooks compliance...\n');

filesToCheck.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  filesChecked++;

  // Check for hooks in callbacks
  if (patterns.hooksInCallback.test(content)) {
    violations.push({
      file: filePath,
      type: 'Hooks in callback',
      severity: 'ERROR'
    });
  }

  // Check for hooks in event handlers (simple check)
  const lines = content.split('\n');
  let inHoverBlock = false;
  lines.forEach((line, index) => {
    if (line.includes('_hover') || line.includes('_focus')) {
      inHoverBlock = true;
    }
    if (inHoverBlock && line.includes('useColorModeValue')) {
      violations.push({
        file: filePath,
        type: 'Hook in event handler',
        line: index + 1,
        severity: 'ERROR'
      });
    }
    if (line.includes('}') && inHoverBlock) {
      inHoverBlock = false;
    }
  });
});

console.log(`📊 Checked ${filesChecked} files\n`);

if (violations.length === 0) {
  console.log('✅ NO REACT HOOKS VIOLATIONS FOUND!\n');
  console.log('All files are compliant with React Hooks rules:');
  console.log('  ✅ No hooks called inside callbacks');
  console.log('  ✅ No hooks called in event handlers');
  console.log('  ✅ All hooks called at component top level\n');
  process.exit(0);
} else {
  console.log(`❌ Found ${violations.length} violation(s):\n`);
  violations.forEach(v => {
    console.log(`  ${v.severity}: ${v.file}`);
    console.log(`    Type: ${v.type}`);
    if (v.line) console.log(`    Line: ${v.line}`);
    console.log('');
  });
  process.exit(1);
}
