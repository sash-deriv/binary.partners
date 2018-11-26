module.exports = {
    pages: {
        files: [
            { expand: true, cwd: 'src/',  src: ['**/*.html', 'CNAME', '*.txt', '*.xml', '*.htm'],                           dest: 'dist' },
        ],
    },
};
