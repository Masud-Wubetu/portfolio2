import fs from 'fs';
import path from 'path';

function cleanBackgrounds(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            cleanBackgrounds(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Remove glassmorphism fills that muddy the dark navy background
            content = content.replace(/bg-white\/(5|10|20|30|50)/g, 'bg-transparent');
            content = content.replace(/bg-black\/(60|40|50|80|90)/g, 'bg-transparent');
            // Remove any remaining explicit bg-black (except in tailwind classes like hover:bg-black)
            content = content.replace(/bg-black(?!\/)/g, 'bg-transparent');
            // Remove some blur backdrops if they are muddy
            content = content.replace(/backdrop-blur-(sm|md|lg)/g, '');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log('Cleaned backgrounds in ' + fullPath);
            }
        }
    }
}

cleanBackgrounds('./src/componenets');
console.log('Done cleaning backgrounds');
