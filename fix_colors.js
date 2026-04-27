const fs = require('fs');
const path = require('path');

function replaceColors(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceColors(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Replace hardcoded purple, cyan, emerald, green with primary
            content = content.replace(/purple-500/g, 'primary');
            content = content.replace(/cyan-400/g, 'primary');
            content = content.replace(/cyan-500/g, 'primary');
            content = content.replace(/emerald-400/g, 'primary');
            content = content.replace(/emerald-500/g, 'primary');
            content = content.replace(/green-400/g, 'primary');
            content = content.replace(/green-500/g, 'primary');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

replaceColors('./src/componenets');
console.log('Done');
