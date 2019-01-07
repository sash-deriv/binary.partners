module.exports = {
    all: {
        options: {
			plugins: [
				{
					removeViewBox: false
				}, {
					removeUselessStrokeAndFill: false
				}
			]
		},
        files: [
            {
                expand: true, 
                cwd: 'src/assets/', 
                src: ['awards/*.svg', 'svg/**/*.svg'],                           
                dest: 'dist/assets/' 
            },
        ]
    }
};