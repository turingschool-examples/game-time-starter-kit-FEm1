const bulletCentipedeCollision = (exterminator, centipede, obstacle) => {

  centipede.centipedeArray.forEach((segment, indexB, centipedeArray) => {
    exterminator.bulletsArray.forEach((bullet, indexA, bulletArray) => {
      obstacle.mushroomArray.forEach((mushroom, indexM, mushroomArray) => {
      
        let bulletProps = { radius: bullet.radius, x: bullet.x, y: bullet.y };
        let centipedeProps = {radius: segment.radius, x: segment.x, y: segment.y};
        let exterminatorProps = { radius: exterminator.radius, x: exterminator.x, y: exterminator.y };
        let mushroomProps = {radius: mushroom.radius, x: mushroom.x, y: mushroom.y};
      
        let mushroomCentipedeX = mushroomProps.x - centipedeProps.x;
        let exterminatorCentipedeX = exterminatorProps.x - centipedeProps.x;
        let bulletCentipedX = bulletProps.x - centipedeProps.x;
        let bulletMushroomX = mushroomProps.x - bulletProps.x;
      
        let mushroomCentipedeY = mushroomProps.y - centipedeProps.y;
        let bulletCentipedeY = bulletProps.y - centipedeProps.y;
        let bulletMushroomY = mushroomProps.y - bulletProps.y;
        let exterminatorCentipedeY = exterminatorProps.y - centipedeProps.y;
      
        let distanceOne = Math.sqrt(mushroomCentipedeX * mushroomCentipedeX + mushroomCentipedeY * mushroomCentipedeY);
        let distanceTwo = Math.sqrt(bulletMushroomX * bulletMushroomX + bulletMushroomY * bulletMushroomY);
        let distanceThree = Math.sqrt(bulletCentipedX * bulletCentipedX + bulletCentipedeY * bulletCentipedeY);
        let distanceFour = Math.sqrt(exterminatorCentipedeX * exterminatorCentipedeX + exterminatorCentipedeY * exterminatorCentipedeY);
      
        if (distanceOne < mushroomProps.radius + centipedeProps.radius) {
          segment.dx = -segment.dx 
        } 
      
        if (distanceTwo < mushroomProps.radius + bulletProps.radius) {
          console.log(indexM);

          mushroomArray.splice(indexM, 1);
        }

        if (distanceThree < bulletProps.radius + centipedeProps.radius) {
          centipedeArray.splice(indexB, 1);
          bulletArray.splice(indexA, 1); 
        }

        if (distanceFour < exterminatorProps.radius + centipedeProps.radius) {
          location.reload();
        }
      })
    });
  })
}



export default {bulletCentipedeCollision};