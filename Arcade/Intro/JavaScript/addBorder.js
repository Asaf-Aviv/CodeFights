const addBorder = picture => {
    let framedPic = [];
    let frame = '*'.repeat(picture[0].length + 2);
    
    framedPic.push(frame);
    picture.map(p => framedPic.push(`*${p}*`))
    framedPic.push(frame);
    
    return framedPic;
}