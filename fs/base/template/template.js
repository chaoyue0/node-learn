/**
 * <template></template>
 * <script></script>
 * <style></style>
 */

const fs = require('fs');
const os = require('os');

const newLine = os.EOL;

const newTemplate = (name) => {
    fs.writeFileSync(name, '', err => {
        if (!err) {
            console.log('新建成功');
        }
     });
    fs.appendFileSync(name, '<template></template>' + newLine);
    fs.appendFileSync(name, '<script></script>' + newLine);
    fs.appendFileSync(name, '<style></style>');
}

newTemplate('demo.vue');