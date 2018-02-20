const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    let time = 0,
        plant = 0;

    while(plant < desiredHeight) {
        plant += upSpeed;
        if (plant >= desiredHeight) {
            return ++time;
        }
        plant -= downSpeed;
        ++time;
    }
    return time;
}