const boxBlur = image => {
    const pixels = [];
    for (let i = 1, x = image.length - 1; i < x; i++) {
        pixels.push([]);
        for (let j = 1; j < image[i].length - 1; j++) {
            
            let sum = Math.floor((image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
                      image[i][j-1] + image[i][j] + image[i][j+1] +
                      image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]) / 9);

            pixels[i-1].push(sum);
        }
    }
    return pixels;
}