const fs = require('fs');
const path = require('path');

const dirs = ['images', 'articles', 'documents'];
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

dirs.forEach(dir => {
    const src = path.join(__dirname, '..', dir);
    const dest = path.join(publicDir, dir);

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    if (fs.existsSync(src)) {
        const files = fs.readdirSync(src);
        files.forEach(file => {
            fs.copyFileSync(path.join(src, file), path.join(dest, file));
            console.log(`Copied ${file} to ${dest}`);
        });
    }
});

// Copy specific files from root
['favicon.ico', 'cv-azzedine-lakhdar.pdf'].forEach(file => {
    const src = path.join(__dirname, '..', file);
    const dest = path.join(publicDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to ${publicDir}`);
    }
});

// Copy generated images
const brainDir = 'C:/Users/SURFACE/.gemini/antigravity/brain/d7f66661-e4cc-4fe5-b54e-91e2b34bffa3';
const mappings = {
    'automotive_diag_view_1772378057051.png': 'automotive.jpg',
    'software_arch_view_1772378071229.png': 'software.jpg',
    'mcu_board_view_1772378197051.png': 'stm32.jpg',
    'fpga_logic_view_1772378261398.png': 'fpga.jpg'
};

const imagesDest = path.join(publicDir, 'images');
Object.entries(mappings).forEach(([srcName, destName]) => {
    const srcPath = path.join(brainDir, srcName);
    const destPath = path.join(imagesDest, destName);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied generated ${srcName} to ${destPath}`);
    }
});
