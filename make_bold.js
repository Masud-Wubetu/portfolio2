import fs from 'fs';
import path from 'path';

function makeBold(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            makeBold(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // If it contains text-primary, ensure it has font-bold
            // First, replace font-medium, font-normal, font-semibold with font-bold if text-primary is on the same line
            const lines = content.split('\n');
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes('text-primary')) {
                    if (lines[i].includes('font-normal')) {
                        lines[i] = lines[i].replace('font-normal', 'font-bold');
                    } else if (lines[i].includes('font-medium')) {
                        lines[i] = lines[i].replace('font-medium', 'font-bold');
                    } else if (lines[i].includes('font-semibold')) {
                        lines[i] = lines[i].replace('font-semibold', 'font-bold');
                    } else if (!lines[i].includes('font-bold') && !lines[i].includes('font-black')) {
                        lines[i] = lines[i].replace('text-primary', 'text-primary font-bold');
                    }
                }
            }
            content = lines.join('\n');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

makeBold('./src/componenets');
console.log('Done');
